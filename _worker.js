const COMPANYCAM_API = "https://api.companycam.com/v2";
const CACHE_TTL = 3600;

async function fetchAllTags(token) {
  let allTags = [];
  let page = 1;
  while (true) {
    const res = await fetch(`${COMPANYCAM_API}/tags?page=${page}&per_page=100`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`CompanyCam tags API returned ${res.status}`);
    const batch = await res.json();
    if (!batch.length) break;
    allTags = allTags.concat(batch);
    if (batch.length < 100) break;
    page++;
  }
  return allTags;
}

async function handleCompanyCamPhotos(request, assets, token) {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": `public, max-age=${CACHE_TTL}`,
    "Access-Control-Allow-Origin": "*",
  };

  const requestedTag = new URL(request.url).searchParams.get("tag");
  if (requestedTag && requestedTag.trim().toLowerCase() === "wiki") {
    if (!token) {
      return new Response(JSON.stringify({ error: "CompanyCam API token not configured" }), { status: 500, headers });
    }
    try {
      const tags = await fetchAllTags(token);
      const wikiTag = tags.find((tag) => tag.display_value.trim().toLowerCase() === "wiki");
      if (!wikiTag) {
        return new Response(JSON.stringify({ photos: [], totalProjects: 0 }), { headers });
      }

      const fetchTaggedPhotos = async (tagId) => {
        const photos = [];
        let page = 1;
        while (true) {
          const response = await fetch(`${COMPANYCAM_API}/photos?tag_ids[]=${tagId}&page=${page}&per_page=100`, {
            headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
          });
          if (!response.ok) throw new Error(`Photos API returned ${response.status}`);
          const batch = await response.json();
          photos.push(...batch);
          if (batch.length < 100) break;
          page++;
        }
        return photos;
      };

      // Field Notes are explicitly published with the wiki tag. The controlled
      // job-photo snapshot below is a separate section with separate rules.
      const allPhotos = await fetchTaggedPhotos(wikiTag.id);
      const projectMap = new Map();
      await Promise.all([...new Set(allPhotos.map((photo) => photo.project_id))].map(async (projectId) => {
        try {
          const response = await fetch(`${COMPANYCAM_API}/projects/${projectId}`, {
            headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
          });
          if (!response.ok) return;
          const project = await response.json();
          projectMap.set(projectId, { city: project.address?.city || "Bay Area", state: project.address?.state || "CA" });
        } catch {}
      }));

      const extractDescription = (description) => {
        if (!description) return "";
        if (typeof description === "string") return description.trim();
        if (description.plain_text_content) return description.plain_text_content.trim();
        if (description.html_content) return description.html_content.replace(/<[^>]+>/g, "").trim();
        return "";
      };
      const photos = allPhotos
        .map((photo) => {
          const web = photo.uris?.find((uri) => uri.type === "web");
          const original = photo.uris?.find((uri) => uri.type === "original");
          const project = projectMap.get(photo.project_id);
          return {
            id: photo.id,
            projectId: photo.project_id,
            city: project?.city || "Bay Area",
            state: project?.state || "CA",
            thumbnail: web?.uri || "",
            fullSize: original?.uri || web?.uri || "",
            createdAt: photo.created_at,
            description: extractDescription(photo.description),
            isVideo: false,
            videoUrl: null,
          };
        })
        .filter((photo) => photo.thumbnail)
        .sort((a, b) => b.createdAt - a.createdAt);

      return new Response(JSON.stringify({ photos, totalProjects: new Set(photos.map((photo) => photo.projectId)).size }), { headers });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed to fetch CompanyCam field notes" }), { status: 500, headers });
    }
  }

  try {
    if (!assets || typeof assets.fetch !== "function") throw new Error("Asset binding unavailable");
    const manifestUrl = new URL("/data/job-photos.json", request.url);
    const manifestResponse = await assets.fetch(new Request(manifestUrl, { method: "GET" }));
    if (!manifestResponse.ok) throw new Error(`Job photo manifest returned ${manifestResponse.status}`);

    const manifest = await manifestResponse.json();
    if (!Array.isArray(manifest)) throw new Error("Job photo manifest is not an array");

    // Query parameters are deliberately ignored. Every gallery receives the
    // same reviewed snapshot, including requests that contain city or service
    // tags.
    return new Response(JSON.stringify({ photos: manifest }), { headers });
  } catch (error) {
    return new Response(JSON.stringify({ photos: [], error: "Job photo manifest unavailable" }), {
      status: 503,
      headers,
    });
  }
}

async function handleCompanyCamTags(token) {
  const tags = await fetchAllTags(token);
  if (!tags.length) return new Response(JSON.stringify({ error: "Failed to fetch tags" }), { status: 500, headers: { "Content-Type": "application/json" } });
  return new Response(JSON.stringify({ tags: tags.map((t) => ({ id: t.id, name: t.display_value })) }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${CACHE_TTL}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
}

async function handleReviews() {
  const reviews = {
    google: {
      platform: "Google",
      rating: 5.0,
      totalReviews: 103,
      url: "https://www.google.com/maps?cid=13257844389379386946",
      reviews: [],
    },
    yelp: { platform: "Yelp", rating: 4.9, totalReviews: 222, url: "https://www.yelp.com/biz/roof-express-san-francisco", reviews: [] },
    diamondCertified: { platform: "Diamond Certified", rating: 4.6, totalReviews: 91, url: "https://www.diamondcertified.org/report/roof-express/", reviews: [] },
    lastUpdated: "2026-08-08",
  };
  return new Response(JSON.stringify(reviews), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${CACHE_TTL}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const token = env.COMPANYCAM_TOKEN;

    if (url.pathname === "/api/companycam/photos") return handleCompanyCamPhotos(request, env.ASSETS, token);
    if (url.pathname === "/api/companycam/tags") return handleCompanyCamTags(token);
    if (url.pathname === "/api/reviews") return handleReviews();

    return env.ASSETS.fetch(request);
  },
};

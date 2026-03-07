const COMPANYCAM_API = "https://api.companycam.com/v2";
const CACHE_TTL = 3600;

async function fetchAllTags(token) {
  let allTags = [];
  let page = 1;
  while (true) {
    const res = await fetch(`${COMPANYCAM_API}/tags?page=${page}&per_page=100`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    });
    if (!res.ok) break;
    const batch = await res.json();
    if (!batch.length) break;
    allTags = allTags.concat(batch);
    if (batch.length < 100) break;
    page++;
  }
  return allTags;
}

async function handleCompanyCamPhotos(request, token) {
  const url = new URL(request.url);
  const tagName = url.searchParams.get("tag");

  const tags = await fetchAllTags(token);
  if (!tags.length) return new Response(JSON.stringify({ photos: [], error: "Failed to fetch tags" }), { status: 500, headers: { "Content-Type": "application/json" } });

  let targetTags = tags;
  if (tagName) {
    const found = tags.find((t) => t.display_value.toLowerCase() === tagName.toLowerCase());
    if (!found) return new Response(JSON.stringify({ photos: [], totalProjects: 0, tagMissing: true }), { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=300" } });
    targetTags = [found];
  } else {
    targetTags = tags.filter((t) => t.display_value !== "Before and After" && t.display_value.toLowerCase() !== "wiki");
  }

  const tagIdParams = targetTags.map((t) => `tag_ids[]=${t.id}`).join("&");
  let allPhotos = [];
  let page = 1;
  while (true) {
    const res = await fetch(`${COMPANYCAM_API}/photos?${tagIdParams}&page=${page}&per_page=100`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    });
    if (!res.ok) break;
    const batch = await res.json();
    if (!batch.length) break;
    allPhotos = allPhotos.concat(batch);
    if (batch.length < 100) break;
    page++;
  }

  const projectIds = [...new Set(allPhotos.map((p) => p.project_id))];
  const projectMap = new Map();
  const chunks = [];
  for (let i = 0; i < projectIds.length; i += 50) chunks.push(projectIds.slice(i, i + 50));
  await Promise.all(
    chunks.map(async (chunk) => {
      await Promise.all(
        chunk.map(async (pid) => {
          try {
            const r = await fetch(`${COMPANYCAM_API}/projects/${pid}`, {
              headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
            });
            if (r.ok) {
              const proj = await r.json();
              projectMap.set(pid, { city: proj.address?.city || "Bay Area", state: proj.address?.state || "CA" });
            }
          } catch {}
        })
      );
    })
  );

  function extractDescription(desc) {
    if (!desc) return "";
    if (desc.plain_text_content) return desc.plain_text_content.trim();
    if (desc.html_content) return desc.html_content.replace(/<[^>]+>/g, "").trim();
    if (typeof desc === "string") return desc.trim();
    return "";
  }

  const photos = allPhotos
    .map((photo) => {
      const web = photo.uris?.find((u) => u.type === "web");
      const original = photo.uris?.find((u) => u.type === "original");
      const proj = projectMap.get(photo.project_id);
      return {
        id: photo.id,
        projectId: photo.project_id,
        city: proj?.city || "Bay Area",
        state: proj?.state || "CA",
        thumbnail: web?.uri || "",
        fullSize: original?.uri || web?.uri || "",
        createdAt: photo.created_at,
        description: extractDescription(photo.description),
        isVideo: false,
        videoUrl: null,
      };
    })
    .filter((p) => p.thumbnail)
    .sort((a, b) => b.createdAt - a.createdAt);

  return new Response(JSON.stringify({ photos, totalProjects: projectIds.length }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${CACHE_TTL}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
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
      totalReviews: 100,
      url: "https://www.google.com/maps?cid=13257844389379386946",
      reviews: [],
    },
    yelp: { platform: "Yelp", rating: 5.0, totalReviews: 25, url: "https://www.yelp.com/biz/roof-express-san-carlos" },
    lastUpdated: "2025-08-01",
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

    if (url.pathname === "/api/companycam/photos") return handleCompanyCamPhotos(request, token);
    if (url.pathname === "/api/companycam/tags") return handleCompanyCamTags(token);
    if (url.pathname === "/api/reviews") return handleReviews();

    return env.ASSETS.fetch(request);
  },
};

const COMPANYCAM_API = "https://api.companycam.com/v2";
const CACHE_TTL = 3600;
// The static build replaces this with its canonical id/slug registry.
// This avoids a data request on production article navigations.
const STATIC_FIELD_NOTES = [{"id":"3506074506","slug":"asphalt-shingle-reroofing-project-in-san-mateo-ca"},{"id":"3496059338","slug":"flat-roof-ready-for-solar-installation"},{"id":"3487001778","slug":"what-is-el-ni-o"},{"id":"3466541248","slug":"roof-replacement-in-woodside"},{"id":"3460805873","slug":"3-layer-torch-down-flat-roof-replacement"},{"id":"3459320542","slug":"shingle-roof-replacement-in-san-jose-ca"},{"id":"3450186447","slug":"roof-replacement-in-san-francisco-ca"},{"id":"3447706017","slug":"protecting-san-francisco-roofs"},{"id":"3443236416","slug":"flat-roof-replacement-in-san-franciscocomplete-homeowner-guide"},{"id":"3434434792","slug":"roof-replacement-in-san-jose"},{"id":"3428756618","slug":"new-asphalt-shingle-roof-installation-in-santa-clara-ca"},{"id":"3406190998","slug":"new-roof-installation-completed-in-burlingame"},{"id":"3398364468","slug":"san-anselmo-roof-replacement"},{"id":"3386031299","slug":"new-certainteed-presidential-tl-roof-installation-in-milpitas-ca"},{"id":"3376440563","slug":"completing-a-beautiful-durable-shingle-roof-in-walnut-creek"},{"id":"3210957707","slug":"bay-area-roofing-done-right"},{"id":"3202801750","slug":"solar-ready-roof-installation-in-san-francisco-roof-express"},{"id":"3199035795","slug":"0-down-roofing-in-the-bay-area"},{"id":"3192743757","slug":"certainteed-presidential-tl-roof-installation-in-milpitas-ca"},{"id":"3184064932","slug":"roof-replacement-in-milpitas-ca"},{"id":"3170948649","slug":"new-custom-skylight-installation-in-san-francisco-ca"},{"id":"3150252770","slug":"asphalt-shingle-roof-replacement-in-san-bruno-roof-express"},{"id":"3148878142","slug":"asphalt-shingle-roof-installation-in-san-bruno-ca"},{"id":"3136391714","slug":"new-asphalt-shingle-roof-installation-in-belmont-roof-express"},{"id":"3126732518","slug":"new-shingle-roof-installation-in-piedmont-ca-roof-express"},{"id":"3119124309","slug":"why-choose-roof-express-for-bay-area"},{"id":"3105970756","slug":"new-shingle-roof-installation-walnut-creek-roof-express"},{"id":"3096880045","slug":"skylight-sun-tunnel-installation-san-francisco"},{"id":"3079624962","slug":"new-shingle-roof-installation-in-oakland-roof-express"},{"id":"3071353831","slug":"flat-roof-installation-fremont-roof-expressprofessional-flat"},{"id":"3044711731","slug":"shingle-roof-replacement-in-sunnyvale"},{"id":"3043726300","slug":"3-ply-torch-down-roof-replacement-in-san-francisco"},{"id":"3031719117","slug":"roof-replacement-in-the-bay-area-by-certified-experts-roof-express"},{"id":"3005315456","slug":"new-shingle-roof-san-francisco-roof-expressexpert"},{"id":"3003619187","slug":"how-to-maintain-a-newly-installed-roof-in-san-francisco"},{"id":"2998924489","slug":"a-new-asphalt-shingle-roof-completed-in-san-francisco"},{"id":"2994469402","slug":"vent-pipe-waterproofing-prevents-roof-leaks"},{"id":"2991641742","slug":"shingle-roof-leak-repair-in-sunnyvale"},{"id":"2988028879","slug":"asphalt-shingle-roof-replacement-in-san-francisco"},{"id":"2988020565","slug":"how-to-protect-your-roof-and-choose-the-right-roofing-contractor"},{"id":"2983975027","slug":"how-to-choose-the-best-roofing-company-in-south-san-francisco"},{"id":"2983561994","slug":"san-francisco-roofing-guide-for-homeowners-protecting"},{"id":"2983560087","slug":"fighting-the-fog-the-best-roofing-materials-for-daly-city-coastal-homes"},{"id":"2983556749","slug":"guide-to-finding-the-best-roofing-company-in-daly-city-ca"},{"id":"2982766130","slug":"two-day-flat-roof-replacement-in-san-francisco-permit-approved"},{"id":"2975951029","slug":"white-gta-3-layer-modified-bitumen-flat-roof-installation"},{"id":"2971251057","slug":"common-flat-roof-drain-problems-in-san-francisco-and-how-to-fix-them"},{"id":"2968387101","slug":"torch-down-roof-installation-in-san-mateo-a-durable"},{"id":"2966791161","slug":"gravel-and-tar-roof-removal-in-san-francisco"},{"id":"2965285748","slug":"south-san-francisco-chimney-leak-repair"},{"id":"2964926030","slug":"roof-maintenance-in-san-francisco-the-bay-area"},{"id":"2964188134","slug":"flat-roof-project-completed-in-san-francisco-torch-down"},{"id":"2959388409","slug":"leak-detection-services-in-san-francisco-the-bay-area"},{"id":"2956800462","slug":"ponding-water-near-roof-drains"},{"id":"2949877820","slug":"the-ultimate-roof-maintenance-calendar-what-to-check"},{"id":"2922011357","slug":"new-shingle-roof-installation-in-daly-city-2026-guide"},{"id":"2912486811","slug":"flat-roof-repair-9-warning-signs-best-fixes"},{"id":"2905118187","slug":"chimney-leak-repair-in-daly-city-2026-guide"},{"id":"2876316924","slug":"emergency-roof-repair-in-san-carlos-2026-guide"},{"id":"2871914158","slug":"flat-roof-installation-san-francisco-roof-expressprofessional"},{"id":"2846455258","slug":"roof-decking-in-san-bruno-2026-guide"},{"id":"2785194426","slug":"new-flat-roof-installation-in-san-mateo-2026-guide"},{"id":"2785174292","slug":"torch-down-roofing-in-san-mateo-2026-guide"},{"id":"2776030933","slug":"roof-replacement-in-millbrae-the-bay-area"},{"id":"2749076180","slug":"roof-replacement-in-san-francisco-the-bay-area"},{"id":"2732003790","slug":"the-complete-guide-to-roof-replacement-in-the-bay-area-2026-homeowner-guide"},{"id":"2705954695","slug":"hillsborough-roof-inspection-process-with-roof-express"},{"id":"2695563124","slug":"roof-leak-detection-in-south-san-francisco-2026-guide"},{"id":"2687226759","slug":"diamonddeck-certainteed-ice-barrier-layers-complete-roofing"},{"id":"2685480196","slug":"roof-decking-plywood-the-foundation-of-a"},{"id":"2681862991","slug":"roof-insulation-guide-2026"},{"id":"2653249310","slug":"new-flat-roof-installation-in-pescadero-ca"},{"id":"2442254846","slug":"new-shingle-roof-installation-in-san-mateo-2026-guide"},{"id":"2438487601","slug":"tear-off-shingle-roof-replacement-in-san-mateo-2026-guide"},{"id":"3010974386","slug":"multi-unit-for-hoa-communities-in-san-francisco"},{"id":"1715961736","slug":"how-to-choose-the-right-roof-and-avoid-costly-mistakes"},{"id":"1701945845","slug":"roof-replacement-vs"}];
// Filled by the build from the same policy used by Express and Pages assets.
const STATIC_SECURITY_HEADERS = {"Content-Security-Policy":"default-src 'self'; script-src 'self' 'unsafe-inline' https://static.elfsight.com https://elfsightcdn.com https://universe-static.elfsightcdn.com https://core.service.elfsight.com; script-src-attr 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://static.elfsight.com https://elfsightcdn.com https://universe-static.elfsightcdn.com; font-src 'self' data: https://fonts.gstatic.com https://static.elfsight.com https://elfsightcdn.com https://universe-static.elfsightcdn.com; img-src 'self' data: blob: https://cdn.prod.website-files.com https://www.gaf.com https://img1.wsimg.com https://upload.wikimedia.org https://lh3.googleusercontent.com https://s3-media0.fl.yelpcdn.com https://services-universe-prod.sfo3.digitaloceanspaces.com; connect-src 'self' https://static.elfsight.com https://elfsightcdn.com https://universe-static.elfsightcdn.com https://core.service.elfsight.com https://service-reviews-ultimate.elfsight.com; frame-src 'self' https://411102e72a00471d850bc6e93824202c.elf.site https://customer-uavvndfddze0763y.cloudflarestream.com https://iframe.cloudflarestream.com https://www.google.com https://www.youtube.com; media-src 'self' blob: https://customer-uavvndfddze0763y.cloudflarestream.com; worker-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self' https://clienthub.getjobber.com; frame-ancestors 'self'; upgrade-insecure-requests","X-Content-Type-Options":"nosniff","X-Frame-Options":"SAMEORIGIN","Referrer-Policy":"strict-origin-when-cross-origin","Permissions-Policy":"camera=(), microphone=(), geolocation=()","Strict-Transport-Security":"max-age=63072000; includeSubDomains; preload"};

async function fetchAllTags(token) {
  if (typeof token !== "string" || token.trim() === "") {
    throw new Error("CompanyCam API token not configured");
  }

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

async function readFieldNotesAsset(request, assets, summaryOnly = false) {
  if (!assets || typeof assets.fetch !== "function") throw new Error("Asset binding unavailable");
  const file = summaryOnly ? "/data/field-notes/index.json" : "/data/field-notes.json";
  const response = await assets.fetch(new Request(new URL(file, request.url), { method: "GET" }));
  if (!response.ok) throw new Error("Field Notes archive unavailable");
  const archive = await response.json();
  if (archive.version !== 1 || !Array.isArray(archive.posts) || !archive.posts.length) {
    throw new Error("Field Notes archive is invalid");
  }
  const seen = new Set();
  for (const post of archive.posts) {
    if (typeof post.id !== "string" || typeof post.slug !== "string" ||
        !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug) || seen.has(post.slug) ||
        typeof post.title !== "string" ||
        typeof post.localImage !== "string" || !/^\/images\/field-notes\/[\w-]+\.webp$/.test(post.localImage) ||
        (!summaryOnly && typeof post.description !== "string")) {
      throw new Error("Field Notes archive contains an invalid article");
    }
    seen.add(post.slug);
  }
  return archive;
}

const API_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

function jsonResponse(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...API_HEADERS, ...headers },
  });
}

async function handleCompanyCamPhotos(request, assets) {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": `public, max-age=${CACHE_TTL}`,
    "Access-Control-Allow-Origin": "*",
  };

  const requestedTag = new URL(request.url).searchParams.get("tag");
  if (requestedTag && requestedTag.trim().toLowerCase() === "wiki") {
    try {
      // Compatibility for cached clients. Publication happens during an explicit
      // import; a visitor never needs CompanyCam, a token, or a tag lookup.
      const archive = await readFieldNotesAsset(request, assets);
      const photos = archive.posts.map((post) => ({ ...post, isVideo: false, videoUrl: null }));
      return new Response(JSON.stringify({ photos, totalArticles: photos.length, source: "local-archive" }), {
        headers: { ...headers, "Cache-Control": "public, max-age=0, must-revalidate" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Published Field Notes archive unavailable" }), {
        status: 503, headers: { ...headers, "Cache-Control": "no-store" },
      });
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
  if (typeof token !== "string" || token.trim() === "") {
    return jsonResponse(
      { error: "CompanyCam API token not configured" },
      503,
      { "Cache-Control": "no-store" },
    );
  }

  try {
    const tags = await fetchAllTags(token);
    if (!tags.length) {
      return jsonResponse({ error: "Failed to fetch tags" }, 503, { "Cache-Control": "no-store" });
    }
    return jsonResponse(
      { tags: tags.map((t) => ({ id: t.id, name: t.display_value })) },
      200,
      { "Cache-Control": `public, max-age=${CACHE_TTL}` },
    );
  } catch {
    return jsonResponse(
      { error: "Failed to fetch tags" },
      503,
      { "Cache-Control": "no-store" },
    );
  }
}

async function handleReviews() {
  const reviews = {
    google: {
      platform: "Google",
      rating: 5.0,
      totalReviews: 110,
      url: "https://www.google.com/maps?cid=13257844389379386946",
      reviews: [],
    },
    yelp: { platform: "Yelp", rating: 4.9, totalReviews: 226, url: "https://www.yelp.com/biz/roof-express-san-francisco", reviews: [] },
    diamondCertified: { platform: "Diamond Certified", rating: 4.6, totalReviews: 91, url: "https://www.diamondcertified.org/report/roof-express/", reviews: [] },
    lastUpdated: "2026-09-12",
  };
  return new Response(JSON.stringify(reviews), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

function productionRedirect(request) {
  const url = new URL(request.url);
  const hostname = url.hostname.toLowerCase();
  const isProductionHost = hostname === "roof-ex.com" || hostname === "www.roof-ex.com";
  if (!isProductionHost) return null;

  if (hostname === "www.roof-ex.com" || url.protocol !== "https:") {
    const target = new URL(url.href);
    target.protocol = "https:";
    target.hostname = "roof-ex.com";
    target.port = "";
    return Response.redirect(target.href, 301);
  }
  return null;
}

function isAdminPath(pathname) {
  return pathname === "/admin" ||
    pathname === "/admin/" ||
    pathname === "/admin.html" ||
    pathname.startsWith("/admin/");
}

async function fetchAssets(request, assets) {
  if (!assets || typeof assets.fetch !== "function") {
    return new Response("Static assets unavailable", {
      status: 503,
      headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
    });
  }

  const response = await assets.fetch(request);
  const headers = new Headers(response.headers);
  let changed = false;

  if (isAdminPath(new URL(request.url).pathname)) {
    headers.set("X-Robots-Tag", "noindex");
    changed = true;
  } else if (response.status >= 400) {
    const robots = headers.get("X-Robots-Tag");
    if (robots && /\bindex\b/i.test(robots)) {
      headers.set("X-Robots-Tag", "noindex");
      changed = true;
    }
  }

  return changed
    ? new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      })
    : response;
}

export {
  fetchAllTags,
  handleCompanyCamPhotos,
  handleCompanyCamTags,
  handleReviews,
  productionRedirect,
};

const worker = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const bindings = env || {};
    const token = bindings.COMPANYCAM_TOKEN;

    const redirect = productionRedirect(request);
    if (redirect) return redirect;

    if (url.pathname === "/api/companycam/photos") return handleCompanyCamPhotos(request, bindings.ASSETS);
    if (url.pathname === "/api/companycam/tags") return handleCompanyCamTags(token);
    if (url.pathname === "/api/reviews") return handleReviews();

    if (url.pathname.startsWith("/blog/field-notes/")) {
      try {
        const posts = STATIC_FIELD_NOTES || (await readFieldNotesAsset(request, env.ASSETS, true)).posts;
        const identifier = url.pathname.slice("/blog/field-notes/".length).replace(/\/$/, "").replace(/\.html$/, "");
        const post = posts.find((item) => item.id === identifier || item.slug === identifier);
        if (!post) {
          return new Response('<!doctype html><html lang="en"><meta charset="utf-8"><meta name="robots" content="noindex"><title>Field Note not found | Roof Express</title><h1>Field Note not found</h1><p><a href="/blog/field-notes">Browse published Field Notes</a></p></html>', {
            status: 404, headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex" },
          });
        }
        if (url.pathname !== `/blog/field-notes/${post.slug}`) {
          const target = new URL(`/blog/field-notes/${post.slug}`, url);
          return Response.redirect(target.href, 301);
        }
        return fetchAssets(request, bindings.ASSETS);
      } catch {
        return new Response("Field Notes archive unavailable", {
          status: 503, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
        });
      }
    }

    if (url.pathname === "/api" || url.pathname.startsWith("/api/")) {
      return jsonResponse({ error: "Not found" }, 404, { "Cache-Control": "no-store" });
    }

    return fetchAssets(request, bindings.ASSETS);
  },
};

export default {
  async fetch(request, env, ctx) {
    const response = await worker.fetch(request, env, ctx);
    const headers = new Headers(response.headers);
    const security = STATIC_SECURITY_HEADERS || {
      "Content-Security-Policy": "default-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'self'",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    };
    for (const [name, value] of Object.entries(security)) {
      if (!headers.has(name)) headers.set(name, value);
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

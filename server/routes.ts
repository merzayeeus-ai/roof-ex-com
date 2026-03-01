import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { SITE_CONFIG } from "./site-config";
import { getAllRoutes, getCitySlugs, getRouteMetadata } from "./seo-metadata";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6";

const DOWNLOAD_BUILD_TOKEN = Date.now().toString(36);

const indexNowRateLimit = new Map<string, number>();
const INDEXNOW_RATE_WINDOW = 60000;
const INDEXNOW_MAX_PER_MINUTE = 3;

const verifiedReviews = {
  google: {
    platform: "Google",
    rating: 5.0,
    totalReviews: 100,
    url: "https://www.google.com/maps?cid=13257844389379386946",
    reviews: [
      {
        author: "Patricia A.",
        rating: 5,
        text: "After an extreme windstorm damaged our chimney, Abu answered the phone directly — no recording. The crew arrived two days later and installed a brand new copper chimney. Rapid response, professional manner, and reasonable price. Highly recommended!",
        time: "May 2025",
        platform: "google",
        source: "Google Reviews",
      },
      {
        author: "Rebecca L.",
        rating: 5,
        text: "Would give 6 stars if I could! Same-day inspection service. Habibi provided a comprehensive inspection report with clear photos for our insurance claim and successfully resolved our insurance dispute. Responsive, knowledgeable, honest and efficient.",
        time: "April 2025",
        platform: "google",
        source: "Google Reviews",
      },
      {
        author: "Lawrence L.",
        rating: 5,
        text: "Emergency repair during SF atmospheric rivers. Most competitive pricing compared to competitors. Entire roof replacement completed in ONE DAY. Habibi finished before the forecasted rain. Really stands by his word and his product/service.",
        time: "February 2025",
        platform: "google",
        source: "Google Reviews",
      },
    ],
  },
  yelp: {
    platform: "Yelp",
    rating: 4.9,
    totalReviews: 199,
    url: "https://www.yelp.com/biz/roof-express-san-francisco",
    reviews: [],
  },
  diamondCertified: {
    platform: "Diamond Certified",
    rating: 4.7,
    totalReviews: 30,
    url: "https://www.diamondcertified.org/report/roof-express/",
    reviews: [
      {
        author: "Verified Homeowner",
        rating: 5,
        text: "They were very clear about what they were going to do, so I felt confident in them from the get-go. I also liked how their documentation was concise and understandable. They were great.",
        time: "2025",
        platform: "diamond",
        source: "Diamond Certified Survey",
      },
      {
        author: "Verified Homeowner",
        rating: 5,
        text: "They were professional and timely, and they did a good job on my roof. I have no complaints.",
        time: "2025",
        platform: "diamond",
        source: "Diamond Certified Survey",
      },
    ],
  },
};

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/download-build", (_req, res) => {
    const filePath = path.resolve(process.cwd(), "roof-express-cloudflare.zip");
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "Build file not found. Run the build first." });
    }
    res.setHeader("Content-Type", "application/zip");
    res.setHeader("Content-Disposition", "attachment; filename=roof-express-cloudflare.zip");
    res.setHeader("Cache-Control", "no-cache");
    const fileStat = fs.statSync(filePath);
    res.setHeader("Content-Length", fileStat.size);
    fs.createReadStream(filePath).pipe(res);
  });

  app.get("/download", (_req, res) => {
    const filePath = path.resolve(process.cwd(), "roof-express-cloudflare.zip");
    const exists = fs.existsSync(filePath);
    const size = exists ? (fs.statSync(filePath).size / 1024 / 1024).toFixed(1) : "0";
    res.setHeader("Content-Type", "text/html");
    res.send(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Download Build</title>
<style>body{font-family:system-ui;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f1f5f9}
.card{background:#fff;border-radius:16px;padding:48px;text-align:center;box-shadow:0 4px 24px rgba(0,0,0,.08);max-width:420px}
h1{color:#134064;margin:0 0 8px;font-size:24px}
p{color:#64748b;margin:0 0 24px;font-size:15px}
a.btn{display:inline-block;background:#C04520;color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:16px}
a.btn:hover{background:#a03a1a}
.size{color:#94a3b8;font-size:13px;margin-top:16px}</style></head>
<body><div class="card">
<h1>ROOF EXPRESS</h1>
<p>Cloudflare Pages Build</p>
${exists
  ? `<a class="btn" href="/api/download-build">Download ZIP (${size} MB)</a><p class="size">roof-express-cloudflare.zip</p>`
  : `<p style="color:#ef4444">Build not found. Run the build script first.</p>`}
</div></body></html>`);
  });

  app.get("/sitemap.xml", (_req, res) => {
    const routes = getAllRoutes();
    const today = new Date().toISOString().split("T")[0];

    function getPriority(route: string): string {
      if (route === "/") return "1.0";
      const servicePages = ["/residential", "/commercial", "/flat", "/roof-repair", "/roof-replacement", "/gutters", "/skylights", "/emergency", "/services"];
      if (servicePages.includes(route)) return "0.9";
      const infoPages = ["/contact", "/about", "/reviews", "/story", "/methodology"];
      if (infoPages.includes(route)) return "0.8";
      if (route.startsWith("/city-roofing-guides/") && route !== "/city-roofing-guides") return "0.7";
      const segments = route.split("/").filter(Boolean);
      if (segments.length === 1 && !route.startsWith("/blog")) return "0.7";
      if (route.startsWith("/blog/")) return "0.6";
      return "0.5";
    }

    const citySlugs = getCitySlugs();
    function getImage(route: string): string | null {
      const cityMatch = route.match(/^\/([a-z-]+)$/);
      if (cityMatch && citySlugs.includes(cityMatch[1])) return `${SITE_CONFIG.siteUrl}/images/${cityMatch[1]}-aerial.webp`;
      const guideMatch = route.match(/^\/city-roofing-guides\/([a-z-]+)$/);
      if (guideMatch && citySlugs.includes(guideMatch[1])) return `${SITE_CONFIG.siteUrl}/images/${guideMatch[1]}-aerial.webp`;
      if (route === "/") return `${SITE_CONFIG.siteUrl}/opengraph.jpg`;
      if (["/residential", "/commercial", "/flat", "/roof-repair", "/roof-replacement", "/gutters", "/skylights", "/emergency", "/services"].includes(route)) return `${SITE_CONFIG.siteUrl}/opengraph.jpg`;
      return null;
    }
    const urls = routes.map(
      (route) => {
        const loc = route === "/" ? SITE_CONFIG.siteUrl : `${SITE_CONFIG.siteUrl}${route}`;
        const priority = getPriority(route);
        const meta = getRouteMetadata(route);
        const image = getImage(route);
        const changefreq = route.startsWith("/blog/field-notes") ? "daily" : route.startsWith("/blog/") ? "weekly" : "monthly";
        let entry = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>`;
        if (image) {
          const caption = meta.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          entry += `\n    <image:image>\n      <image:loc>${image}</image:loc>\n      <image:caption>${caption}</image:caption>\n    </image:image>`;
        }
        entry += `\n  </url>`;
        return entry;
      }
    );
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join("\n")}\n</urlset>`;
    res.set("Content-Type", "application/xml").send(xml);
  });

  app.get("/robots.txt", (_req, res) => {
    const robotsTxt = [
      "# ROOF EXPRESS — Bay Area Roofing Contractor",
      `# ${SITE_CONFIG.siteUrl} | CSLB #1072766`,
      "",
      "User-agent: *",
      "Allow: /",
      "Disallow: /api/",
      "",
      `Sitemap: ${SITE_CONFIG.siteUrl}/sitemap.xml`,
      "",
      "# RSS Feed — Field Notes (daily roofing content)",
      `# Feed: ${SITE_CONFIG.siteUrl}/feed.xml`,
      "",
      "# === SEARCH ENGINES ===",
      "",
      "# Google",
      "User-agent: Googlebot",
      "Allow: /",
      "",
      "User-agent: Googlebot-Image",
      "Allow: /",
      "",
      "User-agent: Googlebot-Video",
      "Allow: /",
      "",
      "User-agent: Googlebot-News",
      "Allow: /",
      "",
      "User-agent: Google-Extended",
      "Allow: /",
      "",
      "User-agent: Google-InspectionTool",
      "Allow: /",
      "",
      "User-agent: Storebot-Google",
      "Allow: /",
      "",
      "User-agent: GoogleOther",
      "Allow: /",
      "",
      "# Bing & Microsoft",
      "User-agent: Bingbot",
      "Allow: /",
      "",
      "User-agent: msnbot",
      "Allow: /",
      "",
      "User-agent: BingPreview",
      "Allow: /",
      "",
      "# Yahoo",
      "User-agent: Slurp",
      "Allow: /",
      "",
      "# DuckDuckGo",
      "User-agent: DuckDuckBot",
      "Allow: /",
      "",
      "# Yandex",
      "User-agent: YandexBot",
      "Allow: /",
      "",
      "User-agent: YandexImages",
      "Allow: /",
      "",
      "# Brave Search",
      "User-agent: BraveBot",
      "Allow: /",
      "",
      "# Mojeek",
      "User-agent: MojeekBot",
      "Allow: /",
      "",
      "# Qwant",
      "User-agent: Qwantify",
      "Allow: /",
      "",
      "# Ecosia (uses Bing)",
      "User-agent: Ecosia",
      "Allow: /",
      "",
      "# Naver (Korea)",
      "User-agent: Yeti",
      "Allow: /",
      "",
      "# Baidu (allowed — major search engine)",
      "User-agent: Baiduspider",
      "Allow: /",
      "",
      "# === SOCIAL MEDIA ===",
      "",
      "# Apple",
      "User-agent: Applebot",
      "Allow: /",
      "",
      "# Facebook / Meta",
      "User-agent: facebookexternalhit",
      "Allow: /",
      "",
      "User-agent: FacebookBot",
      "Allow: /",
      "",
      "# Twitter / X",
      "User-agent: Twitterbot",
      "Allow: /",
      "",
      "# LinkedIn",
      "User-agent: LinkedInBot",
      "Allow: /",
      "",
      "# Pinterest",
      "User-agent: Pinterestbot",
      "Allow: /",
      "",
      "# Snapchat",
      "User-agent: Snapchat",
      "Allow: /",
      "",
      "# WhatsApp",
      "User-agent: WhatsApp",
      "Allow: /",
      "",
      "# Telegram",
      "User-agent: TelegramBot",
      "Allow: /",
      "",
      "# Discord",
      "User-agent: Discordbot",
      "Allow: /",
      "",
      "# Slack",
      "User-agent: Slackbot",
      "Allow: /",
      "",
      "# === AI CRAWLERS ===",
      "",
      "# OpenAI",
      "User-agent: GPTBot",
      "Allow: /",
      "",
      "User-agent: ChatGPT-User",
      "Allow: /",
      "",
      "User-agent: OAI-SearchBot",
      "Allow: /",
      "",
      "# Anthropic / Claude",
      "User-agent: anthropic-ai",
      "Allow: /",
      "",
      "User-agent: ClaudeBot",
      "Allow: /",
      "",
      "User-agent: Claude-Web",
      "Allow: /",
      "",
      "# Google AI",
      "User-agent: Google-CloudVertexBot",
      "Allow: /",
      "",
      "User-agent: Gemini",
      "Allow: /",
      "",
      "# Meta AI",
      "User-agent: Meta-ExternalAgent",
      "Allow: /",
      "",
      "User-agent: Meta-ExternalFetcher",
      "Allow: /",
      "",
      "# Perplexity",
      "User-agent: PerplexityBot",
      "Allow: /",
      "",
      "# Amazon",
      "User-agent: Amazonbot",
      "Allow: /",
      "",
      "# Apple AI",
      "User-agent: Applebot-Extended",
      "Allow: /",
      "",
      "# Cohere",
      "User-agent: Cohere-ai",
      "Allow: /",
      "",
      "# Common Crawl",
      "User-agent: CCBot",
      "Allow: /",
      "",
      "# DeepSeek",
      "User-agent: Deepseek",
      "Allow: /",
      "",
      "User-agent: DeepSeekBot",
      "Allow: /",
      "",
      "# Mistral",
      "User-agent: MistralBot",
      "Allow: /",
      "",
      "# xAI / Grok",
      "User-agent: xAI",
      "Allow: /",
      "",
      "User-agent: GrokBot",
      "Allow: /",
      "",
      "# AI2 / Allen Institute",
      "User-agent: AI2Bot",
      "Allow: /",
      "",
      "User-agent: Ai2Bot-Dolma",
      "Allow: /",
      "",
      "# You.com",
      "User-agent: YouBot",
      "Allow: /",
      "",
      "# Phind",
      "User-agent: PhindBot",
      "Allow: /",
      "",
      "# Diffbot",
      "User-agent: Diffbot",
      "Allow: /",
      "",
      "# Timpi",
      "User-agent: Timpibot",
      "Allow: /",
      "",
      "# ImagesiftBot",
      "User-agent: ImagesiftBot",
      "Allow: /",
      "",
      "# === AI-OPTIMIZED STRUCTURED DATA ===",
      `# LLMs.txt: ${SITE_CONFIG.siteUrl}/llms.txt`,
      `# LLMs-full.txt: ${SITE_CONFIG.siteUrl}/llms-full.txt`,
      "",
      "# === BLOCK BAD BOTS ===",
      "",
      "User-agent: Bytespider",
      "Disallow: /",
      "",
      "User-agent: PetalBot",
      "Disallow: /",
      "",
      "# SEMrush (site audit tools — allowed)",
      "User-agent: SemrushBot",
      "Allow: /",
      "",
      "User-agent: SiteAuditBot",
      "Allow: /",
      "",
      "User-agent: AhrefsBot",
      "Disallow: /",
      "",
      "User-agent: MJ12bot",
      "Disallow: /",
      "",
      "User-agent: DotBot",
      "Disallow: /",
      "",
      "User-agent: BLEXBot",
      "Disallow: /",
      "",
      "User-agent: DataForSeoBot",
      "Disallow: /",
      "",
      "User-agent: Sogou",
      "Disallow: /",
      "",
      "User-agent: ZoominfoBot",
      "Disallow: /",
      "",
      "User-agent: Scrapy",
      "Disallow: /",
      "",
      "User-agent: omgili",
      "Disallow: /",
      "",
      "User-agent: omgilibot",
      "Disallow: /",
      "",
    ].join("\n");
    res.set("Content-Type", "text/plain").send(robotsTxt);
  });

  app.get(`/${INDEXNOW_KEY}.txt`, (_req, res) => {
    res.set("Content-Type", "text/plain").send(INDEXNOW_KEY);
  });

  let rssCache: { xml: string; fetchedAt: number } | null = null;

  app.get("/feed.xml", async (_req, res) => {
    if (rssCache && Date.now() - rssCache.fetchedAt < 900000) {
      res.set("Content-Type", "application/rss+xml; charset=utf-8");
      res.set("Cache-Control", "public, max-age=900");
      return res.send(rssCache.xml);
    }

    const token = process.env.COMPANYCAM_API_TOKEN;
    if (!token) {
      return res.status(500).send("<!-- CompanyCam token not configured -->");
    }

    try {
      const tagsRes = await fetch("https://api.companycam.com/v2/tags?per_page=100", {
        headers: { "Authorization": `Bearer ${token}` },
      });
      if (!tagsRes.ok) throw new Error(`Tags API: ${tagsRes.status}`);
      const tags = await tagsRes.json() as Array<{ id: number; display_value: string }>;
      const wikiTag = tags.find(t => t.display_value.toLowerCase() === "wiki");
      if (!wikiTag) {
        return res.set("Content-Type", "application/rss+xml; charset=utf-8").send(buildEmptyRss());
      }

      let allPhotos: Array<{
        id: string; project_id: number; created_at: number;
        uris: Array<{ type: string; uri: string }>;
        description?: string | { id?: string; html_content?: string; plain_text_content?: string } | null;
      }> = [];
      let page = 1;
      while (true) {
        const photoRes = await fetch(
          `https://api.companycam.com/v2/photos?tag_ids[]=${wikiTag.id}&per_page=50&page=${page}`,
          { headers: { "Authorization": `Bearer ${token}` } }
        );
        if (!photoRes.ok) break;
        const batch = await photoRes.json() as typeof allPhotos;
        allPhotos = allPhotos.concat(batch);
        if (batch.length < 50) break;
        page++;
      }

      allPhotos.sort((a, b) => b.created_at - a.created_at);
      const recentPhotos = allPhotos.slice(0, 50);

      const projectIds = [...new Set(recentPhotos.map(p => p.project_id))];
      const projectMap = new Map<number, string>();
      await Promise.all(projectIds.map(async (pid) => {
        try {
          const pRes = await fetch(`https://api.companycam.com/v2/projects/${pid}`, {
            headers: { "Authorization": `Bearer ${token}` },
          });
          if (!pRes.ok) return;
          const proj = await pRes.json() as { address?: { city?: string } };
          projectMap.set(pid, proj.address?.city || "Bay Area");
        } catch {}
      }));

      const siteUrl = SITE_CONFIG.siteUrl;
      const now = new Date().toUTCString();
      const items = recentPhotos.map(photo => {
        const desc = extractRssDescription(photo.description);
        const city = projectMap.get(photo.project_id) || "Bay Area";
        const title = desc
          ? escapeXml(desc.length > 80 ? desc.slice(0, 80) + "…" : desc)
          : escapeXml(`Roofing Field Note — ${city}, CA`);
        const pubDate = new Date(photo.created_at * 1000).toUTCString();
        const link = `${siteUrl}/blog/field-notes/${photo.id}`;
        const web = photo.uris.find(u => u.type === "web");
        const imageUrl = web?.uri || "";
        const fullDesc = desc ? escapeXml(desc) : escapeXml(`Roofing project documentation from ${city}, CA by ROOF EXPRESS.`);

        let item = `    <item>\n      <title>${title}</title>\n      <link>${link}</link>\n      <guid isPermaLink="true">${link}</guid>\n      <pubDate>${pubDate}</pubDate>\n      <description>${fullDesc}</description>\n      <category>Field Notes</category>\n      <category>${escapeXml(city)}</category>`;
        if (imageUrl) {
          item += `\n      <enclosure url="${escapeXml(imageUrl)}" type="image/jpeg" length="0" />`;
        }
        item += `\n    </item>`;
        return item;
      });

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ROOF EXPRESS Field Notes</title>
    <link>${siteUrl}/blog/field-notes</link>
    <description>Daily roofing project documentation, tips, and insights from ROOF EXPRESS — Diamond Certified Bay Area roofing contractor. 5-10 new posts daily.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <ttl>15</ttl>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${siteUrl}/opengraph.jpg</url>
      <title>ROOF EXPRESS Field Notes</title>
      <link>${siteUrl}/blog/field-notes</link>
    </image>
    <managingEditor>sales@roof-ex.com (ROOF EXPRESS)</managingEditor>
    <webMaster>sales@roof-ex.com (ROOF EXPRESS)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} ROOF EXPRESS</copyright>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <generator>ROOF EXPRESS CMS</generator>
${items.join("\n")}
  </channel>
</rss>`;

      rssCache = { xml, fetchedAt: Date.now() };
      res.set("Content-Type", "application/rss+xml; charset=utf-8");
      res.set("Cache-Control", "public, max-age=900");
      res.send(xml);
    } catch (err) {
      console.error("RSS feed error:", err);
      res.status(500).send("<!-- RSS feed generation error -->");
    }
  });

  function extractRssDescription(desc: typeof allPhotosType): string {
    if (!desc) return "";
    if (typeof desc === "string") return desc;
    if (typeof desc === "object" && desc.plain_text_content) return desc.plain_text_content.trim();
    if (typeof desc === "object" && desc.html_content) return desc.html_content.replace(/<[^>]*>/g, "").trim();
    return "";
  }
  type allPhotosType = string | { id?: string; html_content?: string; plain_text_content?: string } | null | undefined;

  function escapeXml(str: string): string {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }

  function buildEmptyRss(): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ROOF EXPRESS Field Notes</title>
    <link>${SITE_CONFIG.siteUrl}/blog/field-notes</link>
    <description>Daily roofing project documentation from ROOF EXPRESS.</description>
    <language>en-us</language>
    <atom:link href="${SITE_CONFIG.siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
  </channel>
</rss>`;
  }

  app.post("/api/indexnow", async (req, res) => {
    const clientIp = req.ip || req.socket.remoteAddress || "unknown";
    const now = Date.now();
    const lastCall = indexNowRateLimit.get(clientIp) || 0;

    if (now - lastCall < INDEXNOW_RATE_WINDOW / INDEXNOW_MAX_PER_MINUTE) {
      return res.status(429).json({ error: "Rate limit exceeded. Max 3 requests per minute." });
    }
    indexNowRateLimit.set(clientIp, now);

    for (const [ip, ts] of indexNowRateLimit) {
      if (now - ts > INDEXNOW_RATE_WINDOW * 5) indexNowRateLimit.delete(ip);
    }

    const { urls } = req.body as { urls?: string[] };
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return res.status(400).json({ error: "Provide an array of URLs to submit" });
    }

    const siteUrl = SITE_CONFIG.siteUrl;
    const siteHost = new URL(siteUrl).hostname;
    const validUrls = urls
      .filter(u => {
        if (u.startsWith("/")) return true;
        try { return new URL(u).hostname === siteHost; } catch { return false; }
      })
      .map(u => u.startsWith("/") ? `${siteUrl}${u}` : u);

    if (validUrls.length === 0) {
      return res.status(400).json({ error: "No valid URLs provided" });
    }

    const payload = {
      host: new URL(siteUrl).hostname,
      key: INDEXNOW_KEY,
      keyLocation: `${siteUrl}/${INDEXNOW_KEY}.txt`,
      urlList: validUrls.slice(0, 10000),
    };

    const engines = [
      "https://api.indexnow.org/IndexNow",
      "https://www.bing.com/IndexNow",
      "https://yandex.com/indexnow",
    ];

    const results: Array<{ engine: string; status: number | string }> = [];

    await Promise.all(engines.map(async (engine) => {
      try {
        const response = await fetch(engine, {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify(payload),
        });
        results.push({ engine, status: response.status });
      } catch (err) {
        results.push({ engine, status: "error" });
      }
    }));

    const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(`${siteUrl}/sitemap.xml`)}`;
    try {
      const gRes = await fetch(googlePingUrl);
      results.push({ engine: "google-sitemap-ping", status: gRes.status });
    } catch {
      results.push({ engine: "google-sitemap-ping", status: "error" });
    }

    res.json({
      submitted: validUrls.length,
      results,
      timestamp: new Date().toISOString(),
    });
  });

  let cachedTags: { data: Array<{ id: number; display_value: string }>; fetchedAt: number } | null = null;

  async function getCompanyCamTags(token: string) {
    if (cachedTags && Date.now() - cachedTags.fetchedAt < 300000) return cachedTags.data;
    const tagsRes = await fetch("https://api.companycam.com/v2/tags?per_page=100", {
      headers: { "Authorization": `Bearer ${token}` },
    });
    if (!tagsRes.ok) throw new Error(`Tags API: ${tagsRes.status}`);
    const data = await tagsRes.json() as Array<{ id: number; display_value: string }>;
    cachedTags = { data, fetchedAt: Date.now() };
    return data;
  }

  type CCPhoto = {
    id: string; project_id: number;
    uris: Array<{ type: string; uri: string }>;
    created_at: number;
    description?: string | { id?: string; html_content?: string; plain_text_content?: string } | null;
    photo_url?: string;
    processing_status?: string;
  };

  function extractDescription(desc: CCPhoto["description"]): string {
    if (!desc) return "";
    if (typeof desc === "string") return desc;
    if (typeof desc === "object" && desc.plain_text_content) return desc.plain_text_content.trim();
    if (typeof desc === "object" && desc.html_content) return desc.html_content.replace(/<[^>]*>/g, "").trim();
    return "";
  }

  function isVideoUri(uri: string): boolean {
    const lower = uri.toLowerCase();
    return /\.(mp4|mov|avi|webm|m4v|mkv)(\?|$)/i.test(lower) ||
      lower.includes("video") ||
      lower.includes(".mp4");
  }

  function detectVideo(photo: CCPhoto): { isVideo: boolean; videoUrl: string } {
    const videoUri = photo.uris.find(u => u.type === "video");
    if (videoUri) return { isVideo: true, videoUrl: videoUri.uri };

    const original = photo.uris.find(u => u.type === "original");
    if (original && isVideoUri(original.uri)) return { isVideo: true, videoUrl: original.uri };

    if (photo.photo_url && isVideoUri(photo.photo_url)) return { isVideo: true, videoUrl: photo.photo_url };

    return { isVideo: false, videoUrl: "" };
  }

  async function fetchPhotosByTagQuery(token: string, tagQuery: string) {
    let allPhotos: CCPhoto[] = [];
    let page = 1;
    while (true) {
      const photoRes = await fetch(
        `https://api.companycam.com/v2/photos?${tagQuery}&per_page=50&page=${page}`,
        { headers: { "Authorization": `Bearer ${token}` } }
      );
      if (!photoRes.ok) throw new Error(`Photos API: ${photoRes.status}`);
      const batch = await photoRes.json() as CCPhoto[];
      allPhotos = allPhotos.concat(batch);
      if (batch.length < 50) break;
      page++;
    }
    return allPhotos;
  }

  async function fetchPhotosByTag(token: string, tagId: number) {
    let allPhotos: CCPhoto[] = [];
    let page = 1;
    while (true) {
      const photoRes = await fetch(
        `https://api.companycam.com/v2/photos?tag_ids[]=${tagId}&per_page=50&page=${page}`,
        { headers: { "Authorization": `Bearer ${token}` } }
      );
      if (!photoRes.ok) throw new Error(`Photos API: ${photoRes.status}`);
      const batch = await photoRes.json() as CCPhoto[];
      allPhotos = allPhotos.concat(batch);
      if (batch.length < 50) break;
      page++;
    }
    return allPhotos;
  }

  async function enrichWithProjects(token: string, photos: Array<{ project_id: number }>) {
    const projectIds = [...new Set(photos.map(p => p.project_id))];
    const projectMap = new Map<number, { city: string; state: string }>();
    await Promise.all(projectIds.map(async (pid) => {
      try {
        const pRes = await fetch(`https://api.companycam.com/v2/projects/${pid}`, {
          headers: { "Authorization": `Bearer ${token}` },
        });
        if (!pRes.ok) return;
        const proj = await pRes.json() as {
          name: string; address?: { city?: string; state?: string };
        };
        projectMap.set(pid, {
          city: proj.address?.city || "Bay Area",
          state: proj.address?.state || "CA",
        });
      } catch {}
    }));
    return { projectIds, projectMap };
  }

  app.get("/api/companycam/photos", async (req, res) => {
    const token = process.env.COMPANYCAM_API_TOKEN;
    if (!token) {
      return res.status(500).json({ error: "CompanyCam API token not configured" });
    }
    const tagName = req.query.tag as string | undefined;
    try {
      const tags = await getCompanyCamTags(token);

      if (!tagName) {
        const cityTags = tags.filter(t => t.display_value !== "Before and After" && t.display_value.toLowerCase() !== "wiki");
        const tagIdParams = cityTags.map(t => `tag_ids[]=${t.id}`).join("&");
        const allPhotosArr = await fetchPhotosByTagQuery(token, tagIdParams);
        const { projectIds, projectMap } = await enrichWithProjects(token, allPhotosArr);
        const photos = allPhotosArr.map(photo => {
          const web = photo.uris.find(u => u.type === "web");
          const original = photo.uris.find(u => u.type === "original");
          const proj = projectMap.get(photo.project_id);
          const video = detectVideo(photo);
          return {
            id: photo.id, projectId: photo.project_id,
            city: proj?.city || "Bay Area", state: proj?.state || "CA",
            thumbnail: web?.uri || "", fullSize: original?.uri || web?.uri || "",
            createdAt: photo.created_at,
            description: extractDescription(photo.description),
            isVideo: video.isVideo,
            videoUrl: video.videoUrl,
          };
        }).filter(p => p.thumbnail || p.isVideo);
        photos.sort((a, b) => b.createdAt - a.createdAt);
        res.set("Cache-Control", "public, max-age=300");
        return res.json({ photos, totalProjects: projectIds.length });
      }

      const targetTag = tags.find(t => t.display_value.toLowerCase() === tagName.toLowerCase());

      if (!targetTag) {
        res.set("Cache-Control", "public, max-age=60");
        return res.json({ photos: [], totalProjects: 0, tagMissing: true });
      }

      const allPhotos = await fetchPhotosByTag(token, targetTag.id);
      const { projectIds, projectMap } = await enrichWithProjects(token, allPhotos);

      const photos = allPhotos.map(photo => {
        const web = photo.uris.find(u => u.type === "web");
        const original = photo.uris.find(u => u.type === "original");
        const proj = projectMap.get(photo.project_id);
        const video = detectVideo(photo);
        return {
          id: photo.id,
          projectId: photo.project_id,
          city: proj?.city || "Bay Area",
          state: proj?.state || "CA",
          thumbnail: web?.uri || "",
          fullSize: original?.uri || web?.uri || "",
          createdAt: photo.created_at,
          description: extractDescription(photo.description),
          isVideo: video.isVideo,
          videoUrl: video.videoUrl,
        };
      }).filter(p => p.thumbnail || p.isVideo);

      photos.sort((a, b) => b.createdAt - a.createdAt);
      res.set("Cache-Control", "public, max-age=300");
      res.json({ photos, totalProjects: projectIds.length });
    } catch (err) {
      console.error("CompanyCam API error:", err);
      res.status(500).json({ error: "Failed to fetch CompanyCam photos" });
    }
  });

  app.get("/api/companycam/tags", async (_req, res) => {
    const token = process.env.COMPANYCAM_API_TOKEN;
    if (!token) return res.status(500).json({ error: "No token" });
    try {
      const tags = await getCompanyCamTags(token);
      res.json({ tags: tags.map(t => ({ id: t.id, name: t.display_value })) });
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch tags" });
    }
  });

  app.get("/api/reviews", async (_req, res) => {
    try {
      res.json({
        google: verifiedReviews.google,
        yelp: verifiedReviews.yelp,
        diamondCertified: verifiedReviews.diamondCertified,
        lastUpdated: "2025-08-01",
        disclaimer: "Reviews sourced from publicly available platforms. Visit each platform for the most current reviews.",
      });
    } catch (err) {
      console.error("Reviews API error:", err);
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });

  return httpServer;
}

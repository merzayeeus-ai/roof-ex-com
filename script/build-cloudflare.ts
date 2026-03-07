import { build as viteBuild } from "vite";
import { rm, readFile, writeFile, mkdir, readdir, stat, unlink } from "fs/promises";
import path from "path";
import { SITE_CONFIG } from "../server/site-config";
import { getRouteMetadata, getAllRoutes, getJsonLd, getCitySlugs } from "../server/seo-metadata";
import { injectSeoIntoHtml } from "../server/seo-injector";

const SITE_URL = SITE_CONFIG.siteUrl;
const CITY_SLUGS_COUNT = 60;

interface FieldNotePost {
  id: string;
  city: string;
  state: string;
  thumbnail: string;
  fullSize: string;
  createdAt: number;
  description: string;
  localImage: string;
}

function escapeXml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function generatePostTitle(description: string): string {
  const firstLine = description.split(/[\n.!?]/)[0].trim();
  if (firstLine.length > 8 && firstLine.length <= 80) return firstLine;
  const words = description.split(/\s+/).slice(0, 8).join(" ");
  return words.length > 60 ? words.slice(0, 57) + "..." : words;
}

function generateExcerpt(description: string, maxLen = 160): string {
  const clean = description.replace(/\n+/g, " ").trim();
  if (clean.length <= maxLen) return clean;
  return clean.slice(0, maxLen - 3) + "...";
}

type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string; isLead: boolean }
  | { type: "bullets"; items: string[] }
  | { type: "numbered"; items: string[] };

function isLikelyHeading(text: string): boolean {
  if (text.length > 60 || text.length < 4) return false;
  if (text.endsWith(":") || text.endsWith(",") || text.endsWith(";")) return false;
  if (/[()]/.test(text)) return false;
  if (text.split(" ").length > 9) return false;
  const words = text.split(" ");
  const capitalWords = words.filter(w => /^[A-Z]/.test(w));
  if (capitalWords.length < words.length * 0.4) return false;
  if (text.endsWith(".") || text.endsWith("!") || text.endsWith("?")) return false;
  return true;
}

function parseContent(description: string, title: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const raw = description.replace(/\r\n/g, "\n");
  const sections = raw.split(/\n\n+/).filter(s => s.trim());
  let isLead = true;

  for (const section of sections) {
    const trimmed = section.trim();
    if (trimmed === title) continue;

    const lines = trimmed.split("\n").map(l => l.trim()).filter(Boolean);
    const bulletLines = lines.filter(l => /^[-•*]\s/.test(l));
    const numberedLines = lines.filter(l => /^\d+[.)]\s/.test(l));
    const plainLines = lines.filter(l => !/^[-•*]\s/.test(l) && !/^\d+[.)]\s/.test(l));

    if (bulletLines.length >= 2 && bulletLines.length === lines.length) {
      blocks.push({ type: "bullets", items: bulletLines.map(l => l.replace(/^[-•*]\s+/, "")) });
      continue;
    }
    if (numberedLines.length >= 2 && numberedLines.length === lines.length) {
      blocks.push({ type: "numbered", items: numberedLines.map(l => l.replace(/^\d+[.)]\s+/, "")) });
      continue;
    }
    if (bulletLines.length >= 2) {
      for (const pl of plainLines) {
        if (isLikelyHeading(pl)) {
          blocks.push({ type: "heading", text: pl });
        } else {
          blocks.push({ type: "paragraph", text: pl, isLead });
          isLead = false;
        }
      }
      blocks.push({ type: "bullets", items: bulletLines.map(l => l.replace(/^[-•*]\s+/, "")) });
      continue;
    }
    if (numberedLines.length >= 2) {
      for (const pl of plainLines) {
        if (isLikelyHeading(pl)) {
          blocks.push({ type: "heading", text: pl });
        } else {
          blocks.push({ type: "paragraph", text: pl, isLead });
          isLead = false;
        }
      }
      blocks.push({ type: "numbered", items: numberedLines.map(l => l.replace(/^\d+[.)]\s+/, "")) });
      continue;
    }
    if (lines.length >= 3 && plainLines.length === lines.length) {
      const avgLen = lines.reduce((s, l) => s + l.length, 0) / lines.length;
      const allShort = lines.every(l => l.length < 100);
      if (allShort && avgLen < 70) {
        blocks.push({ type: "bullets", items: lines });
        continue;
      }
    }
    const joined = lines.join(" ");
    if (lines.length === 1 && isLikelyHeading(joined)) {
      blocks.push({ type: "heading", text: joined });
      continue;
    }
    blocks.push({ type: "paragraph", text: joined, isLead });
    isLead = false;
  }
  return blocks;
}

function renderContentToHtml(blocks: ContentBlock[]): string {
  const parts: string[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    switch (block.type) {
      case "heading":
        parts.push(`<h2 id="section-${i}" class="text-lg md:text-xl font-bold text-brandNavy mt-6 mb-1 leading-snug scroll-mt-24">${escapeHtml(block.text)}</h2>`);
        break;
      case "paragraph":
        if (block.isLead) {
          const words = block.text.split(" ");
          const lead = words.slice(0, 3).join(" ");
          const rest = words.slice(3).join(" ");
          parts.push(`<p class="text-slate-600 text-[15px] md:text-base leading-[1.75]"><span class="font-semibold text-brandNavy">${escapeHtml(lead)}</span> ${escapeHtml(rest)}</p>`);
        } else {
          parts.push(`<p class="text-slate-600 text-[15px] md:text-base leading-[1.75]">${escapeHtml(block.text)}</p>`);
        }
        break;
      case "bullets":
        parts.push(`<ul class="space-y-1.5 pl-1">${block.items.map(item =>
          `<li class="flex gap-2.5 text-slate-600 text-[15px] md:text-base leading-relaxed"><span class="text-brandOrange/60 mt-[7px] shrink-0 text-[6px]">●</span><span>${escapeHtml(item)}</span></li>`
        ).join("")}</ul>`);
        break;
      case "numbered":
        parts.push(`<ol class="space-y-1.5 pl-1">${block.items.map((item, j) =>
          `<li class="flex gap-2.5 text-slate-600 text-[15px] md:text-base leading-relaxed"><span class="w-5 h-5 rounded-full bg-brandNavy/5 text-brandNavy text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">${j + 1}</span><span>${escapeHtml(item)}</span></li>`
        ).join("")}</ol>`);
        break;
    }
  }
  return parts.join("\n");
}

function extractServiceKeywords(description: string): string {
  const keywords: string[] = [];
  const lower = description.toLowerCase();
  if (/\broof repair\b/.test(lower)) keywords.push("roof repair");
  if (/\broof replacement\b/.test(lower)) keywords.push("roof replacement");
  if (/\bresidential\b/.test(lower)) keywords.push("residential roofing");
  if (/\bcommercial\b/.test(lower)) keywords.push("commercial roofing");
  if (/\bflat roof\b/.test(lower)) keywords.push("flat roofing");
  if (/\bgutter/.test(lower)) keywords.push("gutter installation");
  if (/\bskylight/.test(lower)) keywords.push("skylight repair");
  if (/\bshingle/.test(lower)) keywords.push("shingle roof");
  if (/\btorch.?down\b/.test(lower)) keywords.push("torch-down roofing");
  if (/\btpo\b/.test(lower)) keywords.push("TPO roofing");
  if (/\bleak\b/.test(lower)) keywords.push("roof leak repair");
  if (/\bflashing\b/.test(lower)) keywords.push("roof flashing");
  if (/\bdeck(ing)?\b/.test(lower)) keywords.push("roof decking");
  if (/\binsulation\b/.test(lower)) keywords.push("roof insulation");
  if (/\bemergency\b/.test(lower)) keywords.push("emergency roof repair");
  if (/\bmaintenance\b/.test(lower)) keywords.push("roof maintenance");
  if (/\binspection\b/.test(lower)) keywords.push("roof inspection");
  if (/\bchimney\b/.test(lower)) keywords.push("chimney repair");
  if (/\bventilation\b/.test(lower)) keywords.push("roof ventilation");
  if (/\bwater ?proof/.test(lower)) keywords.push("waterproofing");
  return keywords.join(", ");
}

async function fetchFieldNotes(): Promise<FieldNotePost[]> {
  const token = process.env.COMPANYCAM_API_TOKEN;
  if (!token) {
    console.log("  ⚠ COMPANYCAM_API_TOKEN not set — skipping Field Notes pre-rendering");
    return [];
  }

  console.log("  Fetching CompanyCam tags...");
  const tagsRes = await fetch("https://api.companycam.com/v2/tags?per_page=100", {
    headers: { "Authorization": `Bearer ${token}` },
  });
  if (!tagsRes.ok) {
    console.log(`  ⚠ CompanyCam tags API returned ${tagsRes.status} — skipping`);
    return [];
  }
  const tags = await tagsRes.json() as Array<{ id: number; display_value: string }>;
  const wikiTag = tags.find(t => t.display_value.toLowerCase() === "wiki");
  if (!wikiTag) {
    console.log("  ⚠ No 'wiki' tag found in CompanyCam — skipping");
    return [];
  }

  console.log(`  Found wiki tag (id: ${wikiTag.id}), fetching photos...`);
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
  console.log(`  Fetched ${allPhotos.length} wiki-tagged photos`);

  const projectIds = [...new Set(allPhotos.map(p => p.project_id))];
  const projectMap = new Map<number, { city: string; state: string }>();
  await Promise.all(projectIds.map(async (pid) => {
    try {
      const pRes = await fetch(`https://api.companycam.com/v2/projects/${pid}`, {
        headers: { "Authorization": `Bearer ${token}` },
      });
      if (!pRes.ok) return;
      const proj = await pRes.json() as { address?: { city?: string; state?: string } };
      projectMap.set(pid, {
        city: proj.address?.city || "Bay Area",
        state: proj.address?.state || "CA",
      });
    } catch {}
  }));

  const posts: FieldNotePost[] = allPhotos
    .map(photo => {
      let desc = "";
      if (typeof photo.description === "string") desc = photo.description;
      else if (photo.description && typeof photo.description === "object") {
        desc = photo.description.plain_text_content?.trim() || photo.description.html_content?.replace(/<[^>]*>/g, "").trim() || "";
      }
      if (!desc || desc.trim().length <= 20) return null;

      const web = photo.uris.find(u => u.type === "web");
      const original = photo.uris.find(u => u.type === "original");
      const proj = projectMap.get(photo.project_id);
      return {
        id: String(photo.id),
        city: proj?.city || "Bay Area",
        state: proj?.state || "CA",
        thumbnail: web?.uri || "",
        fullSize: original?.uri || web?.uri || "",
        createdAt: photo.created_at,
        description: desc,
        localImage: "",
      };
    })
    .filter((p): p is FieldNotePost => p !== null)
    .sort((a, b) => b.createdAt - a.createdAt);

  return posts;
}

async function downloadFieldNoteImages(posts: FieldNotePost[], outDir: string): Promise<void> {
  const imgDir = path.join(outDir, "images", "field-notes");
  await mkdir(imgDir, { recursive: true });

  console.log(`  Downloading ${posts.length} Field Notes images...`);
  let downloaded = 0;
  let failed = 0;

  await Promise.all(posts.map(async (post) => {
    const localPath = `/images/field-notes/${post.id}.jpg`;
    const filePath = path.join(outDir, localPath);
    try {
      const imgUrl = post.fullSize || post.thumbnail;
      if (!imgUrl) { failed++; return; }
      const res = await fetch(imgUrl);
      if (!res.ok) { failed++; return; }
      const buffer = Buffer.from(await res.arrayBuffer());
      await writeFile(filePath, buffer);
      post.localImage = localPath;
      downloaded++;
    } catch {
      failed++;
    }
  }));

  console.log(`  Downloaded: ${downloaded}, Failed: ${failed}`);
}

function generateFieldNoteHtml(
  baseHtml: string,
  post: FieldNotePost,
  allPosts: FieldNotePost[]
): string {
  const title = generatePostTitle(post.description);
  const excerpt = generateExcerpt(post.description);
  const cityLabel = `${post.city}, ${post.state === "California" ? "CA" : post.state}`;
  const dateStr = new Date(post.createdAt * 1000).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  });
  const wordCount = post.description.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));
  const pageTitle = `${title} | ROOF EXPRESS Field Notes`;
  const postUrl = `${SITE_URL}/blog/field-notes/${post.id}`;
  const imageUrl = post.localImage ? `${SITE_URL}${post.localImage}` : post.fullSize;
  const isoDate = new Date(post.createdAt * 1000).toISOString();

  const blocks = parseContent(post.description, title);
  const contentHtml = renderContentToHtml(blocks);

  const headings = blocks
    .map((b, i) => b.type === "heading" ? { text: b.text, id: `section-${i}` } : null)
    .filter((h): h is { text: string; id: string } => h !== null);

  const tocHtml = headings.length >= 2 ? `
    <nav class="bg-slate-50 rounded-xl border border-slate-100 mb-8 overflow-hidden" aria-label="Table of contents">
      <div class="p-5">
        <h2 class="text-xs font-black text-brandNavy uppercase tracking-widest flex items-center gap-2 m-0">In This Note <span class="text-[10px] font-bold text-slate-400 normal-case tracking-normal">(${headings.length} sections)</span></h2>
      </div>
      <ol class="space-y-1.5 px-5 pb-5">
        ${headings.map((h, i) => `<li><a href="#${h.id}" class="flex items-center gap-2.5 text-sm text-slate-600 hover:text-brandOrange transition leading-snug"><span class="w-5 h-5 rounded-md bg-brandNavy/5 text-brandNavy text-[10px] font-bold flex items-center justify-center shrink-0">${i + 1}</span><span>${escapeHtml(h.text)}</span></a></li>`).join("\n        ")}
      </ol>
    </nav>` : "";

  const relatedPosts = allPosts
    .filter(p => p.id !== post.id)
    .filter(p => p.city === post.city || Math.abs(p.createdAt - post.createdAt) < 30 * 86400)
    .slice(0, 5);

  const relatedHtml = relatedPosts.length > 0 ? `
    <section class="mt-12 pt-8 border-t border-slate-100">
      <h2 class="text-lg font-bold text-brandNavy mb-4">More Field Notes</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        ${relatedPosts.slice(0, 3).map(rp => {
          const rpTitle = generatePostTitle(rp.description);
          const rpCity = `${rp.city}, ${rp.state === "California" ? "CA" : rp.state}`;
          const rpDate = new Date(rp.createdAt * 1000).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
          const rpImg = rp.localImage ? rp.localImage : rp.thumbnail;
          return `<a href="/blog/field-notes/${rp.id}" class="group block bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition">
            <div class="aspect-[16/10] overflow-hidden"><img src="${rpImg}" alt="${escapeHtml(rpTitle)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" /></div>
            <div class="p-4"><p class="text-xs text-slate-400 mb-1">${rpCity} · ${rpDate}</p><h3 class="text-sm font-bold text-brandNavy line-clamp-2 group-hover:text-brandOrange transition">${escapeHtml(rpTitle)}</h3></div>
          </a>`;
        }).join("\n        ")}
      </div>
      ${relatedPosts.length > 3 ? `<div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">${relatedPosts.slice(3).map(rp => {
        const rpTitle = generatePostTitle(rp.description);
        const rpCity = `${rp.city}, ${rp.state === "California" ? "CA" : rp.state}`;
        return `<a href="/blog/field-notes/${rp.id}" class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition"><span class="text-xs text-slate-400 shrink-0">${rpCity}</span><span class="text-sm font-medium text-brandNavy truncate">${escapeHtml(rpTitle)}</span></a>`;
      }).join("\n")}</div>` : ""}
    </section>` : "";

  const citySlug = post.city.toLowerCase().replace(/\s+/g, "-");
  const serviceKeywords = extractServiceKeywords(post.description);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    image: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 750 },
    datePublished: isoDate,
    dateModified: isoDate,
    wordCount,
    author: {
      "@type": "Organization",
      name: "Roof Express",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 384, height: 107 },
      sameAs: [
        "https://www.facebook.com/roofexpressinc",
        "https://www.instagram.com/roofexpressinc",
        "https://www.youtube.com/@roofexpressinc",
        "https://www.yelp.com/biz/roof-express-san-bruno",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Roof Express",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 384, height: 107 },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    articleSection: "Field Notes",
    inLanguage: "en-US",
    keywords: `roofing, ${post.city}, field notes, roof inspection, Bay Area roofing, ${serviceKeywords}`,
    about: { "@type": "Thing", name: "Roofing", description: `Professional roofing services in ${post.city} and the Bay Area` },
    isPartOf: { "@type": "Blog", name: "ROOF EXPRESS Field Notes", url: `${SITE_URL}/blog/field-notes` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".prose p:first-of-type"],
    },
    locationCreated: {
      "@type": "Place",
      name: cityLabel,
      address: { "@type": "PostalAddress", addressLocality: post.city, addressRegion: "CA", addressCountry: "US" },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: "Field Notes", item: `${SITE_URL}/blog/field-notes` },
      { "@type": "ListItem", position: 4, name: title, item: postUrl },
    ],
  };

  const schemaJson = JSON.stringify([articleSchema, breadcrumbSchema]);

  const ctaHtml = `
    <aside class="mt-10 bg-gradient-to-br from-brandNavy to-brandNavy/90 rounded-2xl p-6 md:p-8 text-white text-center">
      <h2 class="text-xl md:text-2xl font-black mb-2">Need Roofing Help in ${escapeHtml(post.city)}?</h2>
      <p class="text-white/80 text-sm md:text-base mb-4">Diamond Certified contractor serving ${escapeHtml(post.city)} and the Bay Area. Free estimates, 50-year warranties.</p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="/contact" class="inline-flex items-center justify-center gap-2 bg-brandOrange hover:bg-brandOrange/90 text-white font-bold px-6 py-3 rounded-xl transition text-sm">Get a Free Estimate</a>
        <a href="tel:+16504619300" class="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition text-sm">(650) 461-9300</a>
      </div>
    </aside>`;

  const internalLinksHtml = `
    <nav class="mt-8 bg-slate-50 rounded-xl p-5 border border-slate-100" aria-label="Related services">
      <h2 class="text-xs font-black text-brandNavy uppercase tracking-widest mb-3">Explore Our Services</h2>
      <div class="flex flex-wrap gap-2">
        <a href="/residential/" class="text-xs bg-white border border-slate-200 text-brandNavy px-3 py-1.5 rounded-lg hover:border-brandOrange hover:text-brandOrange transition font-medium">Residential Roofing</a>
        <a href="/commercial/" class="text-xs bg-white border border-slate-200 text-brandNavy px-3 py-1.5 rounded-lg hover:border-brandOrange hover:text-brandOrange transition font-medium">Commercial Roofing</a>
        <a href="/flat/" class="text-xs bg-white border border-slate-200 text-brandNavy px-3 py-1.5 rounded-lg hover:border-brandOrange hover:text-brandOrange transition font-medium">Flat Roofing</a>
        <a href="/roof-repair/" class="text-xs bg-white border border-slate-200 text-brandNavy px-3 py-1.5 rounded-lg hover:border-brandOrange hover:text-brandOrange transition font-medium">Roof Repair</a>
        <a href="/roof-replacement/" class="text-xs bg-white border border-slate-200 text-brandNavy px-3 py-1.5 rounded-lg hover:border-brandOrange hover:text-brandOrange transition font-medium">Roof Replacement</a>
        <a href="/gutters/" class="text-xs bg-white border border-slate-200 text-brandNavy px-3 py-1.5 rounded-lg hover:border-brandOrange hover:text-brandOrange transition font-medium">Gutters</a>
        <a href="/skylights/" class="text-xs bg-white border border-slate-200 text-brandNavy px-3 py-1.5 rounded-lg hover:border-brandOrange hover:text-brandOrange transition font-medium">Skylights</a>
        <a href="/${citySlug}/" class="text-xs bg-white border border-slate-200 text-brandNavy px-3 py-1.5 rounded-lg hover:border-brandOrange hover:text-brandOrange transition font-medium">Roofing in ${escapeHtml(post.city)}</a>
      </div>
    </nav>`;

  const preRenderedContent = `
    <div id="field-note-prerendered" data-post-id="${post.id}">
      <article class="max-w-4xl mx-auto px-4 py-8" itemscope itemtype="https://schema.org/Article">
        <meta itemprop="datePublished" content="${isoDate}" />
        <meta itemprop="dateModified" content="${isoDate}" />
        <meta itemprop="author" content="ROOF EXPRESS" />
        <meta itemprop="publisher" content="ROOF EXPRESS" />

        <nav class="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
          <a href="/" class="hover:text-brandOrange transition">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/blog" class="hover:text-brandOrange transition">Blog</a>
          <span aria-hidden="true">/</span>
          <a href="/blog/field-notes" class="hover:text-brandOrange transition">Field Notes</a>
          <span aria-hidden="true">/</span>
          <span class="text-brandNavy font-medium" aria-current="page">${escapeHtml(title.length > 40 ? title.slice(0, 37) + "..." : title)}</span>
        </nav>

        <header class="mb-8">
          <h1 itemprop="headline" class="text-2xl md:text-3xl lg:text-4xl font-black text-brandNavy leading-tight mb-4">${escapeHtml(title)}</h1>
          <div class="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-4">
            <a href="/${citySlug}/" class="inline-flex items-center gap-1.5 bg-brandNavy/5 text-brandNavy px-3 py-1 rounded-full text-xs font-bold hover:bg-brandOrange/10 hover:text-brandOrange transition">${escapeHtml(cityLabel)}</a>
            <time datetime="${isoDate}">${dateStr}</time>
            <span aria-hidden="true">·</span>
            <span>${readTime} min read</span>
            <span aria-hidden="true">·</span>
            <span>${wordCount} words</span>
          </div>
        </header>

        <figure class="rounded-2xl overflow-hidden mb-8 shadow-lg">
          <img itemprop="image" src="${post.localImage || post.fullSize}" alt="${escapeHtml(title)} — Roofing project in ${escapeHtml(cityLabel)}" class="w-full aspect-[16/10] object-cover" width="1200" height="750" fetchpriority="high" decoding="async" />
          <figcaption class="sr-only">${escapeHtml(title)} — ROOF EXPRESS roofing project in ${escapeHtml(cityLabel)}</figcaption>
        </figure>

        ${tocHtml}

        <div class="prose prose-slate max-w-none space-y-4" itemprop="articleBody">
          ${contentHtml}
        </div>

        ${ctaHtml}
        ${internalLinksHtml}
        ${relatedHtml}

        <div class="mt-12 text-center">
          <a href="/blog/field-notes" class="inline-flex items-center gap-2 text-sm font-bold text-brandOrange hover:underline">← Back to all Field Notes</a>
        </div>
      </article>
    </div>`;

  let html = baseHtml;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(pageTitle)}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(excerpt)}" />`
  );
  html = html.replace(
    /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/,
    `<meta name="keywords" content="roofing, ${escapeHtml(post.city)}, field notes, roof inspection, Bay Area roofing, ${escapeHtml(serviceKeywords)}" />`
  );
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${postUrl}" />`
  );
  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="article" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(pageTitle)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(excerpt)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${postUrl}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${imageUrl}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(pageTitle)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(excerpt)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${imageUrl}" />`
  );
  html = html.replace(
    /<meta\s+name="geo\.placename"\s+content="[^"]*"\s*\/?>/,
    `<meta name="geo.placename" content="${escapeHtml(post.city)}" />`
  );

  const articleMetas = [
    `<meta property="article:published_time" content="${isoDate}" />`,
    `<meta property="article:modified_time" content="${isoDate}" />`,
    `<meta property="article:author" content="ROOF EXPRESS" />`,
    `<meta property="article:section" content="Field Notes" />`,
    `<meta property="article:tag" content="roofing" />`,
    `<meta property="article:tag" content="${escapeHtml(post.city)}" />`,
    `<meta property="article:tag" content="Bay Area" />`,
    `<meta property="og:site_name" content="Roof Express" />`,
  ].join("\n");

  const schemaTag = `<script type="application/ld+json">${schemaJson}</script>`;

  const preloadTag = post.localImage
    ? `<link rel="preload" as="image" href="${post.localImage}" fetchpriority="high" />`
    : "";

  html = html.replace("</head>", `${articleMetas}\n${schemaTag}\n${preloadTag}\n</head>`);

  html = html.replace('<div id="root">', `<div id="root">${preRenderedContent}`);

  return html;
}

function generateStaticFeedXml(posts: FieldNotePost[]): string {
  const now = new Date().toUTCString();
  const items = posts.slice(0, 50).map(post => {
    const desc = post.description;
    const title = escapeXml(generatePostTitle(desc));
    const pubDate = new Date(post.createdAt * 1000).toUTCString();
    const link = `${SITE_URL}/blog/field-notes/${post.id}`;
    const fullDesc = escapeXml(generateExcerpt(desc, 300));
    const imageUrl = post.localImage ? `${SITE_URL}${post.localImage}` : post.fullSize;

    let item = `    <item>\n      <title>${title}</title>\n      <link>${link}</link>\n      <guid isPermaLink="true">${link}</guid>\n      <pubDate>${pubDate}</pubDate>\n      <description>${fullDesc}</description>\n      <category>Field Notes</category>\n      <category>${escapeXml(post.city)}</category>`;
    if (imageUrl) {
      item += `\n      <enclosure url="${escapeXml(imageUrl)}" type="image/jpeg" length="0" />`;
    }
    item += `\n    </item>`;
    return item;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ROOF EXPRESS Field Notes</title>
    <link>${SITE_URL}/blog/field-notes</link>
    <description>Daily roofing project documentation, tips, and insights from ROOF EXPRESS — Diamond Certified Bay Area roofing contractor.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <ttl>360</ttl>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/opengraph.jpg</url>
      <title>ROOF EXPRESS Field Notes</title>
      <link>${SITE_URL}/blog/field-notes</link>
    </image>
    <managingEditor>sales@roof-ex.com (ROOF EXPRESS)</managingEditor>
    <webMaster>sales@roof-ex.com (ROOF EXPRESS)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} ROOF EXPRESS</copyright>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <generator>ROOF EXPRESS CMS</generator>
${items.join("\n")}
  </channel>
</rss>`;
}

function getRouteFreqAndPriority(route: string): { changefreq: string; priority: string } {
  if (route === "/") {
    return { changefreq: "weekly", priority: "1.0" };
  }

  const servicePages = ["/residential", "/commercial", "/flat", "/roof-repair", "/roof-replacement", "/gutters", "/skylights", "/emergency", "/services"];
  if (servicePages.includes(route)) {
    return { changefreq: "monthly", priority: "0.9" };
  }

  const infoPages = ["/contact", "/about", "/reviews", "/story", "/methodology"];
  if (infoPages.includes(route)) {
    return { changefreq: "monthly", priority: "0.8" };
  }

  if (route.startsWith("/city-roofing-guides/") && route !== "/city-roofing-guides") {
    return { changefreq: "monthly", priority: "0.7" };
  }

  if (route.startsWith("/blog/field-notes")) {
    return { changefreq: "daily", priority: "0.6" };
  }

  if (route.startsWith("/blog/")) {
    return { changefreq: "weekly", priority: "0.6" };
  }

  const otherStaticPages = ["/financing", "/gallery", "/faq", "/sitemap", "/city-roofing-guides", "/privacy", "/terms", "/blog"];
  if (otherStaticPages.includes(route)) {
    return { changefreq: "monthly", priority: "0.5" };
  }

  const segments = route.split("/").filter(Boolean);
  if (segments.length === 1) {
    return { changefreq: "monthly", priority: "0.7" };
  }

  return { changefreq: "monthly", priority: "0.5" };
}

function getRouteImage(route: string): string | null {
  const citySlugs = getCitySlugs();
  const cityMatch = route.match(/^\/([a-z-]+)$/);
  if (cityMatch && citySlugs.includes(cityMatch[1])) {
    return `${SITE_URL}/images/${cityMatch[1]}-aerial.webp`;
  }
  const guideMatch = route.match(/^\/city-roofing-guides\/([a-z-]+)$/);
  if (guideMatch && citySlugs.includes(guideMatch[1])) {
    return `${SITE_URL}/images/${guideMatch[1]}-aerial.webp`;
  }
  if (route === "/") return `${SITE_URL}/opengraph.jpg`;
  if (["/residential", "/commercial", "/flat", "/roof-repair", "/roof-replacement", "/gutters", "/skylights", "/emergency", "/services"].includes(route)) {
    return `${SITE_URL}/opengraph.jpg`;
  }
  return null;
}

function generateSitemap(routes: string[], fieldNotePosts: FieldNotePost[] = []): string {
  const today = new Date().toISOString().split("T")[0];
  const fieldNoteMap = new Map(fieldNotePosts.map(p => [`/blog/field-notes/${p.id}`, p]));

  const urls = routes
    .map((r) => {
      const loc = r === "/" ? SITE_URL : `${SITE_URL}${r}`;
      const fnPost = fieldNoteMap.get(r);

      if (fnPost) {
        const title = generatePostTitle(fnPost.description);
        const caption = escapeXml(title);
        const imageUrl = fnPost.localImage ? `${SITE_URL}${fnPost.localImage}` : fnPost.fullSize;
        const lastmod = new Date(fnPost.createdAt * 1000).toISOString().split("T")[0];
        let entry = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>`;
        if (imageUrl) {
          entry += `\n    <image:image>\n      <image:loc>${escapeXml(imageUrl)}</image:loc>\n      <image:caption>${caption}</image:caption>\n    </image:image>`;
        }
        entry += `\n  </url>`;
        return entry;
      }

      const { changefreq, priority } = getRouteFreqAndPriority(r);
      const meta = getRouteMetadata(r);
      const image = getRouteImage(r);
      let entry = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>`;
      if (image) {
        const caption = meta.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        entry += `\n    <image:image>\n      <image:loc>${image}</image:loc>\n      <image:caption>${caption}</image:caption>\n    </image:image>`;
      }
      entry += `\n  </url>`;
      return entry;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>`;
}

async function generateRobotsTxt(): Promise<string> {
  const robotsPath = path.resolve("client", "public", "robots.txt");
  return await readFile(robotsPath, "utf-8");
}


function generateLlmsTxt(routes: string[], fieldNotePosts: FieldNotePost[] = []): string {
  const companyInfo: string[] = [];
  const services: string[] = [];
  const resources: string[] = [];
  const cityPages: string[] = [];
  const cityGuides: string[] = [];
  const blogPages: string[] = [];
  const fieldNotePages: string[] = [];

  for (const route of routes) {
    const fnPost = fieldNotePosts.find(p => `/blog/field-notes/${p.id}` === route);
    if (fnPost) {
      const fnTitle = generatePostTitle(fnPost.description);
      const fnDesc = generateExcerpt(fnPost.description, 100);
      fieldNotePages.push(`- [${fnTitle}](${SITE_URL}${route}): ${fnDesc}`);
      continue;
    }

    const meta = getRouteMetadata(route);
    const title = meta.title.replace(/\s*\|\s*ROOF EXPRESS$/, "").trim();
    const description = meta.description || "";
    const url = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
    
    if (route.startsWith("/blog/") && route !== "/blog") {
      blogPages.push(`- [${title}](${url}): ${description.substring(0, 100)}...`);
    } else if (route.startsWith("/city-roofing-guides/") && route !== "/city-roofing-guides") {
      cityGuides.push(`- [${title}](${url}): ${description.substring(0, 100)}...`);
    } else if (route === "/") {
      companyInfo.push(`- [Home](${url}): ${description}`);
    } else if (["/about", "/story", "/reviews", "/contact", "/methodology"].includes(route)) {
      companyInfo.push(`- [${title}](${url}): ${description.substring(0, 100)}`);
    } else if (["/residential", "/commercial", "/flat", "/roof-repair", "/roof-replacement", "/gutters", "/skylights", "/emergency", "/services"].includes(route)) {
      services.push(`- [${title}](${url}): ${description.substring(0, 100)}`);
    } else if (["/financing", "/gallery", "/faq", "/blog", "/city-roofing-guides", "/service-areas"].includes(route)) {
      resources.push(`- [${title}](${url}): ${description.substring(0, 100)}`);
    } else {
      // City service pages (short routes like /atherton, /berkeley, etc.)
      if (!route.includes("/") || route.split("/").filter(Boolean).length === 1) {
        cityPages.push(`- [${title}](${url}): ${description.substring(0, 100)}`);
      }
    }
  }

  const sections: string[] = [
    "# ROOF EXPRESS",
    "",
    `> Diamond Certified roofing contractor serving ${CITY_SLUGS_COUNT} Bay Area cities. Residential & commercial roof repair, replacement, flat roofing, gutters, skylights. CSLB #1072766. Free estimates at ${SITE_CONFIG.phone}.`,
    "",
  ];

  if (companyInfo.length > 0) {
    sections.push("## Company Info");
    sections.push(companyInfo.join("\n"));
    sections.push("");
  }

  if (services.length > 0) {
    sections.push("## Roofing Services");
    sections.push(services.join("\n"));
    sections.push("");
  }

  if (resources.length > 0) {
    sections.push("## Resources");
    sections.push(resources.join("\n"));
    sections.push("");
  }

  if (cityPages.length > 0) {
    sections.push("## City Service Pages");
    sections.push(cityPages.join("\n"));
    sections.push("");
  }

  if (cityGuides.length > 0) {
    sections.push("## City Roofing Guides");
    sections.push(cityGuides.join("\n"));
    sections.push("");
  }

  if (blogPages.length > 0) {
    sections.push("## Blog Articles");
    sections.push(blogPages.join("\n"));
    sections.push("");
  }

  if (fieldNotePages.length > 0) {
    sections.push("## Field Notes (Project Documentation)");
    sections.push(fieldNotePages.join("\n"));
    sections.push("");
  }

  return sections.join("\n");
}

async function removeVideoFiles(dir: string) {
  const videosDir = path.join(dir, "videos");
  try {
    const { rm } = await import("fs/promises");
    await rm(videosDir, { recursive: true, force: true });
    console.log("  Removed videos/ directory (use external hosting)");
  } catch {}

  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subEntries = await readdir(fullPath, { withFileTypes: true });
      for (const sub of subEntries) {
        if (sub.name.endsWith(".mp4") || sub.name.endsWith(".webm") || sub.name.endsWith(".zip")) {
          console.log(`  Removed: ${sub.name}`);
          await unlink(path.join(fullPath, sub.name));
        }
      }
    } else if (entry.name.endsWith(".mp4") || entry.name.endsWith(".webm") || entry.name.endsWith(".zip")) {
      console.log(`  Removed: ${entry.name}`);
      await unlink(fullPath);
    }
  }
}

async function buildForCloudflare() {
  const outDir = path.resolve("dist-cloudflare");

  console.log("Cleaning output directory...");
  await rm(outDir, { recursive: true, force: true });

  console.log("Building client with Vite...");
  await viteBuild({
    build: {
      outDir,
      emptyOutDir: true,
    },
  });

  let baseHtml = await readFile(path.join(outDir, "index.html"), "utf-8");

  baseHtml = baseHtml.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/g,
    `<meta property="og:image" content="${SITE_URL}/opengraph.jpg" />`
  );
  baseHtml = baseHtml.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/g,
    `<meta name="twitter:image" content="${SITE_URL}/opengraph.jpg" />`
  );

  console.log("Keeping main CSS as standard stylesheet (15 KiB — too small to defer)...");
  const cssLinkMatch = baseHtml.match(/<link\s+rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
  if (cssLinkMatch) {
    console.log(`  CSS: ${cssLinkMatch[1]}`);
  }

  const routes = getAllRoutes();

  console.log(`Pre-rendering ${routes.length} pages with SEO metadata...`);

  for (const route of routes) {
    const seoHtml = injectSeoIntoHtml(baseHtml, route);

    if (route === "/") {
      await writeFile(path.join(outDir, "index.html"), seoHtml);
    } else {
      const parentDir = path.dirname(path.join(outDir, route));
      await mkdir(parentDir, { recursive: true });
      await writeFile(path.join(outDir, `${route}.html`), seoHtml);
    }
  }

  console.log("Pre-rendering Field Notes posts from CompanyCam API...");
  const fieldNotePosts = await fetchFieldNotes();
  let fieldNoteRoutes: string[] = [];

  if (fieldNotePosts.length > 0) {
    await downloadFieldNoteImages(fieldNotePosts, outDir);

    const fnDir = path.join(outDir, "blog", "field-notes");
    await mkdir(fnDir, { recursive: true });

    for (const post of fieldNotePosts) {
      const postHtml = generateFieldNoteHtml(baseHtml, post, fieldNotePosts);
      await writeFile(path.join(fnDir, `${post.id}.html`), postHtml);
      fieldNoteRoutes.push(`/blog/field-notes/${post.id}`);
    }
    console.log(`  Pre-rendered ${fieldNotePosts.length} Field Notes post pages`);

    console.log("  Generating static feed.xml...");
    await writeFile(path.join(outDir, "feed.xml"), generateStaticFeedXml(fieldNotePosts));
  } else {
    console.log("  No Field Notes found — keeping SPA shell fallback");
  }

  console.log("Generating Field Notes SPA shell for any new posts not yet pre-rendered...");
  const fieldNotesPostMeta = {
    title: "Field Notes — Real Roofing Projects | ROOF EXPRESS",
    description: "See real Bay Area roofing projects from our crew. Photos, descriptions, and expert insights from Diamond Certified contractor ROOF EXPRESS.",
  };
  let fieldNotesPostHtml = baseHtml;
  fieldNotesPostHtml = fieldNotesPostHtml.replace(/<title>[^<]*<\/title>/, `<title>${fieldNotesPostMeta.title}</title>`);
  fieldNotesPostHtml = fieldNotesPostHtml.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${fieldNotesPostMeta.description}" />`
  );
  fieldNotesPostHtml = fieldNotesPostHtml.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${fieldNotesPostMeta.title}" />`
  );
  fieldNotesPostHtml = fieldNotesPostHtml.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${fieldNotesPostMeta.description}" />`
  );
  fieldNotesPostHtml = fieldNotesPostHtml.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${SITE_URL}/opengraph.jpg" />`
  );
  fieldNotesPostHtml = fieldNotesPostHtml.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`
  );
  await mkdir(path.join(outDir, "blog"), { recursive: true });
  await writeFile(path.join(outDir, "blog", "_field-notes-post.html"), fieldNotesPostHtml);

  console.log("Generating 404.html...");
  const notFoundHtml = injectSeoIntoHtml(baseHtml, "/not-found");
  await writeFile(path.join(outDir, "404.html"), notFoundHtml);

  console.log("Generating sitemap.xml...");
  const allRoutesWithFieldNotes = [...routes, ...fieldNoteRoutes];
  await writeFile(path.join(outDir, "sitemap.xml"), generateSitemap(allRoutesWithFieldNotes, fieldNotePosts));

  console.log("Generating robots.txt...");
  await writeFile(path.join(outDir, "robots.txt"), await generateRobotsTxt());

  console.log("Generating IndexNow key file...");
  const INDEXNOW_KEY = "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6";
  await writeFile(path.join(outDir, `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY);

  console.log("Generating llms.txt...");
  await writeFile(path.join(outDir, "llms.txt"), generateLlmsTxt(allRoutesWithFieldNotes, fieldNotePosts));

  console.log("Generating llms-full.txt...");
  const llmsFullLines: string[] = [
    "# ROOF EXPRESS",
    "",
    `> Diamond Certified roofing contractor serving ${CITY_SLUGS_COUNT} Bay Area cities. Residential & commercial roof repair, replacement, flat roofing, gutters, skylights. CSLB #1072766. Free estimates at ${SITE_CONFIG.phone}.`,
    "",
    "## Pages",
    "",
  ];
  for (const route of allRoutesWithFieldNotes) {
    const fnPost = fieldNotePosts.find(p => `/blog/field-notes/${p.id}` === route);
    if (fnPost) {
      const title = generatePostTitle(fnPost.description);
      const desc = generateExcerpt(fnPost.description);
      const url = `${SITE_URL}${route}`;
      llmsFullLines.push(`- [${title}](${url})`);
      llmsFullLines.push(`  ${desc}`);
      llmsFullLines.push("");
    } else {
      const meta = getRouteMetadata(route);
      const title = meta.title.replace(/\s*\|\s*ROOF EXPRESS$/, "").trim();
      const description = meta.description || "";
      const url = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
      llmsFullLines.push(`- [${title}](${url})`);
      llmsFullLines.push(`  ${description}`);
      llmsFullLines.push("");
    }
  }
  await writeFile(path.join(outDir, "llms-full.txt"), llmsFullLines.join("\n"));

  console.log("Copying humans.txt and security.txt...");
  const publicDir = path.resolve("client/public");
  const humansTxt = await readFile(path.join(publicDir, "humans.txt"), "utf-8").catch(() => "");
  if (humansTxt) await writeFile(path.join(outDir, "humans.txt"), humansTxt);
  const wellKnownDir = path.join(outDir, ".well-known");
  await mkdir(wellKnownDir, { recursive: true });
  const securityTxt = await readFile(path.join(publicDir, ".well-known", "security.txt"), "utf-8").catch(() => "");
  if (securityTxt) await writeFile(path.join(wellKnownDir, "security.txt"), securityTxt);

  const jsEntryMatch = baseHtml.match(/src="(\/assets\/index[^"]+\.js)"/);
  const modulePreloadHref = jsEntryMatch ? jsEntryMatch[1] : null;
  if (modulePreloadHref) {
    console.log(`  Entry JS for modulepreload: ${modulePreloadHref}`);
  }

  console.log("Stripping vite error overlay script and optimizing preloads...");
  const citySlugs = getCitySlugs();
  const heroImageMap: Record<string, string> = {
    "/residential": "/images/asphalt-shingle-roof.webp",
    "/commercial": "/images/commercial-roofs-aerial.webp",
    "/flat": "/images/commercial-roof-finish.webp",
    "/roof-repair": "/images/patch-roof-branded.webp",
    "/roof-replacement": "/images/roof-express-replacement.webp",
    "/gutters": "/images/gutters.webp",
    "/skylights": "/images/asphalt-shingle-skylight.webp",
    "/emergency": "/images/roof-leak-bucket.webp",
    "/about": "/images/roof-express-crew-about.webp",
    "/reviews": "/images/completed-shingle-roof.webp",
    "/story": "/images/hero-services.webp",
    "/contact": "/images/roof-express-crew-about.webp",
    "/services": "/images/hero-services.webp",
    "/financing": "/images/hero-financing.webp",
    "/faq": "/images/roof-inspection-clipboard.webp",
    "/gallery": "/images/asphalt-shingle-crew.webp",
    "/methodology": "/images/completed-shingle-roof.webp",
    "/blog": "/images/hero-blog-article.webp",
    "/blog/field-notes": "/images/roofing-dark-shingles.webp",
    "/privacy": "/images/hero-privacy.webp",
    "/terms": "/images/hero-terms.webp",
    "/sitemap": "/images/hero-sitemap.webp",
    "/service-areas": "/images/sf-aerial-ocean.webp",
    "/city-roofing-guides": "/images/san-francisco-painted-ladies.webp",
  };
  for (const slug of citySlugs) {
    heroImageMap[`/${slug}`] = `/images/${slug}-aerial.webp`;
    heroImageMap[`/city-roofing-guides/${slug}`] = `/images/${slug}-aerial.webp`;
  }
  const allHtmlFiles = await readdir(outDir, { recursive: true });
  for (const file of allHtmlFiles) {
    const filePath = path.join(outDir, String(file));
    if (String(file).endsWith(".html")) {
      let html = await readFile(filePath, "utf-8");
      html = html.replace(/<style>vite-error-overlay\s*\{[^<]*<\/style>\s*/g, "");
      html = html.replace(/<script>\s*\(function\(\)\s*\{\s*var origDefine[\s\S]*?<\/script>\s*/g, "");
      const isHomePage = filePath === path.join(outDir, "index.html");
      if (!isHomePage) {
        html = html.replace(/<link\s+rel="preload"\s+as="image"[^>]*hero[-\w]*\.webp[^>]*>\s*/g, "");
      }
      const cssMatch = html.match(/<link\s+rel="stylesheet"\s+crossorigin\s+href="(\/assets\/index-[^"]+\.css)">/);
      if (cssMatch) {
        const cssHref = cssMatch[1];
        html = html.replace(cssMatch[0], `<link rel="preload" href="${cssHref}" as="style" onload="this.onload=null;this.rel='stylesheet'" crossorigin><noscript><link rel="stylesheet" crossorigin href="${cssHref}"></noscript>`);
      }
      const relPath = "/" + path.relative(outDir, filePath).replace(/\.html$/, "").replace(/index$/, "").replace(/\/$/, "");
      const route = relPath === "/" ? "/" : relPath;
      const lcpImage = heroImageMap[route] || (route.startsWith("/blog/") ? "/images/hero-blog-article.webp" : undefined);
      if (isHomePage) {
        const staticHero = `<div id="static-hero" style="position:fixed;inset:0;z-index:9999;background:#134064;pointer-events:none"><picture><source media="(max-width:768px)" srcset="/images/hero-mobile.webp"><img src="/images/hero.webp" alt="ROOF EXPRESS crew completing a Bay Area roof installation" style="width:100%;height:100%;object-fit:cover" fetchpriority="high" decoding="sync"></picture><div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(19,64,100,0.4),rgba(19,64,100,0.5),rgba(19,64,100,0.8))"></div></div><script>document.addEventListener('DOMContentLoaded',function(){var s=document.getElementById('static-hero');if(s){s.style.transition='opacity 0.2s';setTimeout(function(){s.style.opacity='0';setTimeout(function(){s.remove()},200)},300)}})</script>`;
        html = html.replace('<div id="root">', `${staticHero}<div id="root">`);

        const criticalChunks = ["layout", "footer", "home-C", "home-D", "home-sections", "utils-", "use-seo", "toaster", "page-bottom"];
        const builtAssets = await readdir(path.join(outDir, "assets"));
        const chunkPreloads = builtAssets
          .filter(f => f.endsWith(".js") && criticalChunks.some(c => f.startsWith(c)))
          .map(f => `<link rel="modulepreload" href="/assets/${f}" />`)
          .join("\n");
        if (chunkPreloads) {
          html = html.replace("</head>", `${chunkPreloads}\n</head>`);
        }
      } else if (lcpImage) {
        const preloadTag = `<link rel="preload" as="image" type="image/webp" href="${lcpImage}" fetchpriority="high" />`;
        html = html.replace("</head>", `${preloadTag}\n</head>`);
        const pageTitle = route.replace(/^\//, "").replace(/-/g, " ").replace(/\//g, " — ") || "page";
        const staticHero = `<div id="static-hero" style="position:fixed;inset:0;z-index:9999;background:#134064;pointer-events:none" aria-hidden="true"><img src="${lcpImage}" alt="ROOF EXPRESS ${pageTitle}" style="width:100%;height:100%;object-fit:cover" fetchpriority="high" decoding="sync" width="1200" height="800"><div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(19,64,100,0.4),rgba(19,64,100,0.5),rgba(19,64,100,0.8))"></div></div><script>document.addEventListener('DOMContentLoaded',function(){var s=document.getElementById('static-hero');if(s){s.style.transition='opacity 0.2s';setTimeout(function(){s.style.opacity='0';setTimeout(function(){s.remove()},200)},300)}})</script>`;
        html = html.replace('<div id="root">', `${staticHero}<div id="root">`);
      }
      const needsCompanyCamPreconnect = route.startsWith("/city-roofing-guides/") || citySlugs.some(s => route === `/${s}`) || route === "/gallery" || route === "/blog/field-notes";
      if (needsCompanyCamPreconnect && !html.includes("img.companycam.com")) {
        html = html.replace("</head>", `<link rel="preconnect" href="https://img.companycam.com" crossorigin />\n</head>`);
      }
      if (modulePreloadHref && !html.includes('rel="modulepreload"')) {
        html = html.replace("</head>", `<link rel="modulepreload" href="${modulePreloadHref}" />\n</head>`);
      }
      if (!isHomePage) {
        const builtAssetsAll = await readdir(path.join(outDir, "assets"));
        const sharedChunks = ["utils-", "use-seo", "layout", "footer", "page-bottom"];
        const sharedPreloads = builtAssetsAll
          .filter(f => f.endsWith(".js") && sharedChunks.some(c => f.startsWith(c)))
          .map(f => `<link rel="modulepreload" href="/assets/${f}" />`)
          .filter(tag => !html.includes(tag))
          .join("\n");
        if (sharedPreloads) {
          html = html.replace("</head>", `${sharedPreloads}\n</head>`);
        }
      }
      await writeFile(filePath, html);
    }
  }

  console.log("Patching Font Awesome font-display to swap...");
  const assetsDir = path.join(outDir, "assets");
  const assetFiles = await readdir(assetsDir);
  for (const file of assetFiles) {
    if (file.endsWith(".css")) {
      const cssPath = path.join(assetsDir, file);
      let css = await readFile(cssPath, "utf-8");
      if (css.includes("font-display:block")) {
        css = css.replace(/font-display:block/g, "font-display:swap");
        await writeFile(cssPath, css);
        console.log(`  Patched: ${file}`);
      }
    }
  }

  console.log("Keeping video files in build for Cloudflare deployment...");

  console.log("Writing _headers for caching and crawl optimization...");
  const headers = [
    "/*",
    "  X-Content-Type-Options: nosniff",
    "  X-Frame-Options: SAMEORIGIN",
    "  Referrer-Policy: strict-origin-when-cross-origin",
    "  Permissions-Policy: camera=(), microphone=(), geolocation=()",
    "  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload",
    "  Cross-Origin-Opener-Policy: same-origin",
    "  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' https:; img-src 'self' https://img1.wsimg.com https://cdn.prod.website-files.com https://upload.wikimedia.org https://img.companycam.com data:; media-src 'self'; connect-src 'self'; frame-src https://customer-uavvndfddze0763y.cloudflarestream.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https://clienthub.getjobber.com",
    "",
    "/assets/*",
    "  Cache-Control: public, max-age=31536000, immutable",
    "",
    "/images/*",
    "  Cache-Control: public, max-age=31536000, immutable",
    "",
    "/videos/*",
    "  Cache-Control: public, max-age=31536000, immutable",
    "",
    "/fa-all.min.css",
    "  Cache-Control: public, max-age=31536000, immutable",
    "",
    "/webfonts/*",
    "  Cache-Control: public, max-age=31536000, immutable",
    "  Access-Control-Allow-Origin: *",
    "",
    "/fonts/*",
    "  Cache-Control: public, max-age=31536000, immutable",
    "  Access-Control-Allow-Origin: *",
    "",
    "/fonts.css",
    "  Cache-Control: public, max-age=31536000, immutable",
    "",
    "/assets/*.woff2",
    "  Cache-Control: public, max-age=31536000, immutable",
    "",
    "/*.html",
    "  Cache-Control: public, max-age=3600",
    "  X-Robots-Tag: all, index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    "",
    "/favicon.ico",
    "  Cache-Control: public, max-age=604800",
    "  Access-Control-Allow-Origin: *",
    "",
    "/favicon-*.png",
    "  Cache-Control: public, max-age=604800",
    "  Access-Control-Allow-Origin: *",
    "",
    "/apple-touch-icon.png",
    "  Cache-Control: public, max-age=604800",
    "  Access-Control-Allow-Origin: *",
    "",
    "/android-chrome-*.png",
    "  Cache-Control: public, max-age=604800",
    "",
    "/opengraph.jpg",
    "  Cache-Control: public, max-age=604800",
    "  Access-Control-Allow-Origin: *",
    "",
    "/feed.xml",
    "  Cache-Control: public, max-age=3600",
    "  Content-Type: application/rss+xml; charset=utf-8",
    "  X-Robots-Tag: noindex",
    "",
    "/sitemap.xml",
    "  Cache-Control: public, max-age=3600",
    "  Content-Type: application/xml; charset=utf-8",
    "  X-Robots-Tag: noindex",
    "",
    "/robots.txt",
    "  Cache-Control: public, max-age=3600",
    "  Content-Type: text/plain; charset=utf-8",
    "  X-Robots-Tag: noindex",
    "",
    "/llms.txt",
    "  Cache-Control: public, max-age=3600",
    "  Content-Type: text/plain; charset=utf-8",
    "  Access-Control-Allow-Origin: *",
    "  X-Robots-Tag: noindex",
    "",
    "/llms-full.txt",
    "  Cache-Control: public, max-age=3600",
    "  Content-Type: text/plain; charset=utf-8",
    "  Access-Control-Allow-Origin: *",
    "  X-Robots-Tag: noindex",
    "",
    "/site.webmanifest",
    "  Cache-Control: public, max-age=604800",
    "  Content-Type: application/manifest+json; charset=utf-8",
    "",
    "/favicon.svg",
    "  Cache-Control: public, max-age=604800",
    "  Content-Type: image/svg+xml",
    "  Access-Control-Allow-Origin: *",
    "",
    "/.well-known/security.txt",
    "  Cache-Control: public, max-age=86400",
    "  Content-Type: text/plain; charset=utf-8",
    "  X-Robots-Tag: noindex",
    "",
    "/humans.txt",
    "  Cache-Control: public, max-age=86400",
    "  Content-Type: text/plain; charset=utf-8",
    "  X-Robots-Tag: noindex",
    "",
  ].join("\n");
  await writeFile(path.join(outDir, "_headers"), headers);

  console.log("Generating _redirects with trailing-slash removal for all routes...");
  const baseRedirects = await readFile(path.join(publicDir, "_redirects"), "utf-8").catch(() => "");
  const lines = baseRedirects.split("\n");
  const spaFallbackIdx = lines.findIndex(l => l.trim().startsWith("# SPA fallback"));
  const beforeFallback = spaFallbackIdx >= 0 ? lines.slice(0, spaFallbackIdx).join("\n") : lines.join("\n");
  const fallbackLines = spaFallbackIdx >= 0 ? lines.slice(spaFallbackIdx).join("\n") : "# SPA fallback (MUST be last)\n/* /index.html 200";

  const trailingSlashRules: string[] = [];
  for (const route of routes) {
    if (route !== "/") {
      trailingSlashRules.push(`${route}/  ${route}  301`);
    }
  }

  const fieldNoteTrailingSlashRules = fieldNoteRoutes.map(r => `${r}/  ${r}  301`);

  const finalRedirects = [
    beforeFallback.trimEnd(),
    "",
    "# Auto-generated trailing slash removal for all routes",
    ...trailingSlashRules,
    ...fieldNoteTrailingSlashRules,
    "",
    fallbackLines,
  ].join("\n");
  await writeFile(path.join(outDir, "_redirects"), finalRedirects);
  console.log(`  Generated ${trailingSlashRules.length} trailing-slash redirect rules`);

  const workerSrc = path.resolve(process.cwd(), "cloudflare-worker.js");
  const workerDest = path.join(outDir, "_worker.js");
  try {
    const workerCode = await readFile(workerSrc, "utf-8");
    await writeFile(workerDest, workerCode);
    console.log("Copied _worker.js for Cloudflare Pages Functions...");
  } catch {
    console.log("Warning: cloudflare-worker.js not found, skipping _worker.js");
  }

  const fileCount = routes.length + fieldNoteRoutes.length + 3;
  console.log(`\nCloudflare Pages build complete!`);
  console.log(`Output: ${outDir}/`);
  console.log(`Static pages pre-rendered: ${routes.length}`);
  console.log(`Field Notes pre-rendered: ${fieldNoteRoutes.length}`);
  console.log(`Total HTML files: ${fileCount}`);
  console.log(`Sitemap URLs: ${allRoutesWithFieldNotes.length}`);
  console.log(`\nTo deploy:`);
  console.log(`1. Go to https://dash.cloudflare.com → Pages → Create project`);
  console.log(`2. Choose "Upload assets" (Direct Upload)`);
  console.log(`3. Drag the "dist-cloudflare" folder or upload its contents`);
  console.log(`4. Set custom domain to roof-ex.com in Page settings`);
}

buildForCloudflare().catch((err) => {
  console.error(err);
  process.exit(1);
});

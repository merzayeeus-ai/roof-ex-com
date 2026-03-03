#!/usr/bin/env node
import { readFile, writeFile, mkdir, readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = process.env.BUILD_DIR ? path.resolve(process.env.BUILD_DIR) : path.resolve(__dirname, "..");
const SITE_URL = "https://roof-ex.com";

function escapeXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

const _titleRegistry = new Map();
const _pageTitleRegistry = new Map();
function _truncateForPageTitle(title) {
  const suffix = " | ROOF EXPRESS";
  const full = `${title}${suffix}`;
  if (full.length <= 60) return full;
  const maxLen = 60 - suffix.length;
  return `${title.substring(0, maxLen - 1).trim()}…${suffix}`;
}
function generatePostTitle(description, postId = null) {
  const firstLine = description.split(/[\n.!?]/)[0].trim();
  let title;
  if (firstLine.length > 8 && firstLine.length <= 80) title = firstLine;
  else {
    const words = description.split(/\s+/).slice(0, 8).join(" ");
    title = words.length > 60 ? words.slice(0, 57) + "..." : words;
  }
  if (!postId) return title;
  const pageTitle = _truncateForPageTitle(title);
  const existingRaw = _titleRegistry.get(title);
  const existingPage = _pageTitleRegistry.get(pageTitle);
  if ((existingRaw && existingRaw !== postId) || (existingPage && existingPage !== postId)) {
    const lines = description.split(/[\n]/);
    for (let i = 1; i < lines.length; i++) {
      const alt = lines[i].trim();
      if (alt.length > 10 && alt.length <= 80 && !alt.endsWith(",") && !alt.endsWith(";")) {
        const altTitle = alt.replace(/[.!?]$/, "");
        const altPage = _truncateForPageTitle(altTitle);
        if (!_titleRegistry.has(altTitle) && !_pageTitleRegistry.has(altPage)) {
          _titleRegistry.set(altTitle, postId);
          _pageTitleRegistry.set(altPage, postId);
          return altTitle;
        }
      }
    }
    const sentences = description.split(/(?<=[.!?])\s+/);
    if (sentences.length > 1) {
      const secondSentence = sentences[1].trim().replace(/[.!?]$/, "");
      if (secondSentence.length > 10 && secondSentence.length <= 80) {
        const altPage = _truncateForPageTitle(secondSentence);
        if (!_pageTitleRegistry.has(altPage)) {
          _titleRegistry.set(secondSentence, postId);
          _pageTitleRegistry.set(altPage, postId);
          return secondSentence;
        }
      }
    }
    const dateStr = postId ? ` (#${postId.slice(-4)})` : "";
    const uniqueTitle = `${title}${dateStr}`;
    _titleRegistry.set(uniqueTitle, postId);
    _pageTitleRegistry.set(_truncateForPageTitle(uniqueTitle), postId);
    return uniqueTitle;
  }
  _titleRegistry.set(title, postId);
  _pageTitleRegistry.set(pageTitle, postId);
  return title;
}

function generateExcerpt(description, maxLen = 160) {
  const clean = description.replace(/\n+/g, " ").trim();
  if (clean.length <= maxLen) return clean;
  return clean.slice(0, maxLen - 3) + "...";
}

function isLikelyHeading(text) {
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

function parseContent(description, title) {
  const blocks = [];
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
        if (isLikelyHeading(pl)) blocks.push({ type: "heading", text: pl });
        else { blocks.push({ type: "paragraph", text: pl, isLead }); isLead = false; }
      }
      blocks.push({ type: "bullets", items: bulletLines.map(l => l.replace(/^[-•*]\s+/, "")) });
      continue;
    }
    if (numberedLines.length >= 2) {
      for (const pl of plainLines) {
        if (isLikelyHeading(pl)) blocks.push({ type: "heading", text: pl });
        else { blocks.push({ type: "paragraph", text: pl, isLead }); isLead = false; }
      }
      blocks.push({ type: "numbered", items: numberedLines.map(l => l.replace(/^\d+[.)]\s+/, "")) });
      continue;
    }
    if (lines.length >= 3 && plainLines.length === lines.length) {
      const avgLen = lines.reduce((s, l) => s + l.length, 0) / lines.length;
      const allShort = lines.every(l => l.length < 100);
      if (allShort && avgLen < 70) { blocks.push({ type: "bullets", items: lines }); continue; }
    }
    const joined = lines.join(" ");
    if (lines.length === 1 && isLikelyHeading(joined)) { blocks.push({ type: "heading", text: joined }); continue; }
    blocks.push({ type: "paragraph", text: joined, isLead });
    isLead = false;
  }
  return blocks;
}

function splitLongParagraph(text, maxSentences = 3) {
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g);
  if (!sentences || sentences.length <= maxSentences) return [text];
  const chunks = [];
  for (let i = 0; i < sentences.length; i += maxSentences) {
    chunks.push(sentences.slice(i, i + maxSentences).join("").trim());
  }
  return chunks.filter(c => c.length > 0);
}

function renderContentToHtml(blocks) {
  const parts = [];
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    switch (block.type) {
      case "heading":
        parts.push(`<h2 id="section-${i}" class="text-lg md:text-xl font-bold text-brandNavy mt-6 mb-1 leading-snug scroll-mt-24">${escapeHtml(block.text)}</h2>`);
        break;
      case "paragraph": {
        const chunks = splitLongParagraph(block.text);
        if (block.isLead) {
          const words = chunks[0].split(" ");
          const lead = words.slice(0, 3).join(" ");
          const rest = words.slice(3).join(" ");
          parts.push(`<p class="text-slate-600 text-[15px] md:text-base leading-[1.75]"><span class="font-semibold text-brandNavy">${escapeHtml(lead)}</span> ${escapeHtml(rest)}</p>`);
          for (let j = 1; j < chunks.length; j++) {
            parts.push(`<p class="text-slate-600 text-[15px] md:text-base leading-[1.75]">${escapeHtml(chunks[j])}</p>`);
          }
        } else {
          for (const chunk of chunks) {
            parts.push(`<p class="text-slate-600 text-[15px] md:text-base leading-[1.75]">${escapeHtml(chunk)}</p>`);
          }
        }
        break;
      }
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

function extractServiceKeywords(description) {
  const keywords = [];
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

async function fetchFieldNotes() {
  const token = process.env.COMPANYCAM_API_TOKEN;
  if (!token) {
    console.log("COMPANYCAM_API_TOKEN not set — aborting");
    process.exit(1);
  }

  console.log("Fetching CompanyCam tags...");
  const tagsRes = await fetch("https://api.companycam.com/v2/tags?per_page=100", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!tagsRes.ok) {
    console.log(`CompanyCam tags API returned ${tagsRes.status} — aborting`);
    process.exit(1);
  }
  const tags = await tagsRes.json();
  const wikiTag = tags.find(t => t.display_value.toLowerCase() === "wiki");
  if (!wikiTag) {
    console.log("No 'wiki' tag found in CompanyCam — aborting");
    process.exit(1);
  }

  console.log(`Found wiki tag (id: ${wikiTag.id}), fetching photos...`);
  let allPhotos = [];
  let page = 1;
  while (true) {
    const photoRes = await fetch(
      `https://api.companycam.com/v2/photos?tag_ids[]=${wikiTag.id}&per_page=50&page=${page}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!photoRes.ok) break;
    const batch = await photoRes.json();
    allPhotos = allPhotos.concat(batch);
    if (batch.length < 50) break;
    page++;
  }
  console.log(`Fetched ${allPhotos.length} wiki-tagged photos`);

  const projectIds = [...new Set(allPhotos.map(p => p.project_id))];
  const projectMap = new Map();
  await Promise.all(projectIds.map(async (pid) => {
    try {
      const pRes = await fetch(`https://api.companycam.com/v2/projects/${pid}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!pRes.ok) return;
      const proj = await pRes.json();
      projectMap.set(pid, {
        city: proj.address?.city || "Bay Area",
        state: proj.address?.state || "CA",
      });
    } catch {}
  }));

  const posts = allPhotos
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
    .filter(p => p !== null)
    .sort((a, b) => b.createdAt - a.createdAt);

  return posts;
}

async function downloadImages(posts) {
  const imgDir = path.join(ROOT, "images", "field-notes");
  await mkdir(imgDir, { recursive: true });

  console.log(`Downloading ${posts.length} Field Notes images...`);
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  await Promise.all(posts.map(async (post) => {
    const localPath = `/images/field-notes/${post.id}.jpg`;
    const filePath = path.join(ROOT, localPath);
    try {
      await readFile(filePath);
      post.localImage = localPath;
      skipped++;
      return;
    } catch {}
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

  console.log(`Images — Downloaded: ${downloaded}, Skipped (cached): ${skipped}, Failed: ${failed}`);
}

function generateFieldNoteHtml(baseHtml, post, allPosts) {
  const title = generatePostTitle(post.description, post.id);
  const excerpt = generateExcerpt(post.description);
  const cityLabel = `${post.city}, ${post.state === "California" ? "CA" : post.state}`;
  const dateStr = new Date(post.createdAt * 1000).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric"
  });
  const wordCount = post.description.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));
  const suffix = " | ROOF EXPRESS";
  let pageTitle = `${title}${suffix}`;
  if (pageTitle.length > 60) {
    const maxTitleLen = 60 - suffix.length;
    pageTitle = `${title.substring(0, maxTitleLen - 1).trim()}…${suffix}`;
  }
  const postUrl = `${SITE_URL}/blog/field-notes/${post.id}`;
  const imageUrl = post.localImage ? `${SITE_URL}${post.localImage}` : post.fullSize;
  const isoDate = new Date(post.createdAt * 1000).toISOString();

  const blocks = parseContent(post.description, title);
  const contentHtml = renderContentToHtml(blocks);

  const headings = blocks
    .map((b, i) => b.type === "heading" ? { text: b.text, id: `section-${i}` } : null)
    .filter(h => h !== null);

  const tocHtml = headings.length >= 2 ? `
    <nav class="bg-slate-50 rounded-xl border border-slate-100 mb-8 overflow-hidden" aria-label="Table of contents">
      <div class="p-5">
        <h2 class="text-xs font-black text-brandNavy uppercase tracking-widest flex items-center gap-2 m-0">In This Note <span class="text-[10px] font-bold text-slate-500 normal-case tracking-normal">(${headings.length} sections)</span></h2>
      </div>
      <ol class="space-y-1.5 px-5 pb-5">
        ${headings.map((h, i) => `<li><a href="#${h.id}" class="flex items-center gap-2.5 text-sm text-slate-600 hover:text-brandOrange transition leading-snug"><span class="w-5 h-5 rounded-md bg-brandNavy/5 text-brandNavy text-[10px] font-bold flex items-center justify-center shrink-0">${i + 1}</span><span>${escapeHtml(h.text)}</span></a></li>`).join("\n        ")}
      </ol>
    </nav>` : "";

  const sameCityPosts = allPosts.filter(p => p.id !== post.id && p.city === post.city);
  const nearbyDatePosts = allPosts.filter(p => p.id !== post.id && p.city !== post.city && Math.abs(p.createdAt - post.createdAt) < 90 * 86400);
  const fallbackPosts = allPosts.filter(p => p.id !== post.id && !sameCityPosts.includes(p) && !nearbyDatePosts.includes(p));
  const relatedPosts = [...sameCityPosts, ...nearbyDatePosts, ...fallbackPosts].slice(0, 6);

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
            <div class="p-4"><p class="text-xs text-slate-500 mb-1">${rpCity} · ${rpDate}</p><h3 class="text-sm font-bold text-brandNavy line-clamp-2 group-hover:text-brandOrange transition">${escapeHtml(rpTitle)}</h3></div>
          </a>`;
        }).join("\n        ")}
      </div>
      ${relatedPosts.length > 3 ? `<div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">${relatedPosts.slice(3).map(rp => {
        const rpTitle = generatePostTitle(rp.description);
        const rpCity = `${rp.city}, ${rp.state === "California" ? "CA" : rp.state}`;
        return `<a href="/blog/field-notes/${rp.id}" class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition"><span class="text-xs text-slate-500 shrink-0">${rpCity}</span><span class="text-sm font-medium text-brandNavy truncate">${escapeHtml(rpTitle)}</span></a>`;
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
    isPartOf: { "@type": "Blog", name: "Roof Express Field Notes", url: `${SITE_URL}/blog/field-notes` },
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

        <nav class="flex items-center gap-2 text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
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
            <span aria-hidden="true">\u00b7</span>
            <span>${readTime} min read</span>
            <span aria-hidden="true">\u00b7</span>
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
          <a href="/blog/field-notes" class="inline-flex items-center gap-2 text-sm font-bold text-brandOrange hover:underline">\u2190 Back to all Field Notes</a>
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

function generateFeedXml(posts) {
  const now = new Date().toUTCString();
  const items = posts.slice(0, 50).map(post => {
    const desc = post.description;
    const title = escapeXml(generatePostTitle(desc, post.id));
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

function generateStandaloneTemplate() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ROOF EXPRESS Field Notes</title>
  <meta name="description" content="Roofing project documentation from ROOF EXPRESS" />
  <meta name="keywords" content="roofing, Bay Area, field notes" />
  <link rel="canonical" href="${SITE_URL}/blog/field-notes" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="ROOF EXPRESS Field Notes" />
  <meta property="og:description" content="Roofing project documentation from ROOF EXPRESS" />
  <meta property="og:url" content="${SITE_URL}/blog/field-notes" />
  <meta property="og:image" content="${SITE_URL}/opengraph.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ROOF EXPRESS Field Notes" />
  <meta name="twitter:description" content="Roofing project documentation from ROOF EXPRESS" />
  <meta name="twitter:image" content="${SITE_URL}/opengraph.jpg" />
  <meta name="geo.placename" content="Bay Area" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', system-ui, sans-serif; color: #334155; background: #fff; -webkit-font-smoothing: antialiased; }
    .text-brandNavy { color: #134064; }
    .text-brandOrange { color: #C04520; }
    .bg-brandNavy { background-color: #134064; }
    .bg-brandOrange { background-color: #C04520; }
    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; height: auto; }
    .site-header { background: #134064; padding: 1rem 1.5rem; }
    .site-header a { color: #fff; font-weight: 800; font-size: 1.25rem; font-family: 'Montserrat', sans-serif; }
    .site-footer { background: #134064; color: #94a3b8; padding: 2rem 1.5rem; text-align: center; font-size: 0.875rem; margin-top: 3rem; }
    .site-footer a { color: #C04520; }
    .max-w-4xl { max-width: 56rem; margin: 0 auto; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
  </style>
</head>
<body>
  <header class="site-header"><a href="/">ROOF EXPRESS</a></header>
  <div id="root"></div>
  <footer class="site-footer">
    <p>&copy; ${new Date().getFullYear()} ROOF EXPRESS. Diamond Certified Bay Area Roofing Contractor.</p>
    <p style="margin-top:0.5rem"><a href="/">Home</a> · <a href="/blog/field-notes">Field Notes</a> · <a href="/contact">Contact</a> · <a href="tel:+16504619300">(650) 461-9300</a></p>
  </footer>
</body>
</html>`;
}

function updateSitemap(sitemapContent, posts, galleryPhotos) {
  let xml = sitemapContent;

  xml = xml.replace(/<url>\s*<loc>[^<]*\/blog\/field-notes\/\d+<\/loc>[\s\S]*?<\/url>\s*/g, "");

  xml = xml.replace(/<!-- GALLERY-IMAGES-START -->[\s\S]*?<!-- GALLERY-IMAGES-END -->\s*/g, "");

  const fieldNoteEntries = posts.map(post => {
    const loc = `${SITE_URL}/blog/field-notes/${post.id}`;
    const lastmod = new Date(post.createdAt * 1000).toISOString().split("T")[0];
    const imageUrl = post.localImage ? `${SITE_URL}${post.localImage}` : post.fullSize;
    const title = escapeXml(generatePostTitle(post.description, post.id));
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:title>${title}</image:title>
    </image:image>
  </url>`;
  }).join("\n");

  let galleryEntries = "";
  if (galleryPhotos && galleryPhotos.length > 0) {
    const cityPhotoMap = new Map();
    for (const photo of galleryPhotos) {
      const city = photo.city || "Bay Area";
      if (!cityPhotoMap.has(city)) cityPhotoMap.set(city, []);
      cityPhotoMap.get(city).push(photo);
    }

    const galleryImageXml = [];
    galleryImageXml.push("<!-- GALLERY-IMAGES-START -->");

    galleryImageXml.push(`  <url>
    <loc>${SITE_URL}/gallery</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>${galleryPhotos.slice(0, 100).map(p => `
    <image:image>
      <image:loc>${escapeXml(p.fullSize || p.thumbnail)}</image:loc>
      <image:title>${escapeXml(`ROOF EXPRESS roofing project in ${p.city || "Bay Area"}, ${p.state || "CA"}`)}</image:title>
    </image:image>`).join("")}
  </url>`);

    for (const [city, photos] of cityPhotoMap) {
      const slug = city.toLowerCase().replace(/\s+/g, "-");
      galleryImageXml.push(`  <url>
    <loc>${SITE_URL}/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>${photos.slice(0, 50).map(p => `
    <image:image>
      <image:loc>${escapeXml(p.fullSize || p.thumbnail)}</image:loc>
      <image:title>${escapeXml(`Roofing project by ROOF EXPRESS in ${city}, ${p.state || "CA"}`)}</image:title>
    </image:image>`).join("")}
  </url>`);
    }

    galleryImageXml.push("<!-- GALLERY-IMAGES-END -->");
    galleryEntries = galleryImageXml.join("\n");
  }

  xml = xml.replace("</urlset>", `${fieldNoteEntries}\n${galleryEntries}\n</urlset>`);

  return xml;
}

async function fetchAllTaggedPhotos() {
  const token = process.env.COMPANYCAM_API_TOKEN;
  if (!token) return [];

  console.log("Fetching all tagged CompanyCam photos for image sitemap...");

  const tagsRes = await fetch("https://api.companycam.com/v2/tags?per_page=100", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!tagsRes.ok) return [];
  const tags = await tagsRes.json();

  const photoTags = tags.filter(t =>
    t.display_value !== "Before and After" &&
    t.display_value.toLowerCase() !== "wiki" &&
    t.display_value !== "Recent" &&
    t.display_value !== "Tips"
  );

  const tagIdParams = photoTags.map(t => `tag_ids[]=${t.id}`).join("&");
  let allPhotos = [];
  let page = 1;
  while (true) {
    const res = await fetch(
      `https://api.companycam.com/v2/photos?${tagIdParams}&per_page=100&page=${page}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!res.ok) break;
    const batch = await res.json();
    if (!batch.length) break;
    allPhotos = allPhotos.concat(batch);
    if (batch.length < 100) break;
    page++;
  }
  console.log(`Fetched ${allPhotos.length} tagged photos`);

  const projectIds = [...new Set(allPhotos.map(p => p.project_id))];
  const projectMap = new Map();
  const chunks = [];
  for (let i = 0; i < projectIds.length; i += 30) chunks.push(projectIds.slice(i, i + 30));
  for (const chunk of chunks) {
    await Promise.all(chunk.map(async (pid) => {
      try {
        const r = await fetch(`https://api.companycam.com/v2/projects/${pid}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (r.ok) {
          const proj = await r.json();
          projectMap.set(pid, {
            city: proj.address?.city || "Bay Area",
            state: proj.address?.state || "CA",
          });
        }
      } catch {}
    }));
  }

  const photos = allPhotos.map(photo => {
    const web = (photo.uris || []).find(u => u.type === "web");
    const original = (photo.uris || []).find(u => u.type === "original");
    const proj = projectMap.get(photo.project_id);
    return {
      id: String(photo.id),
      city: proj?.city || "Bay Area",
      state: proj?.state || "CA",
      thumbnail: web?.uri || "",
      fullSize: original?.uri || web?.uri || "",
      createdAt: photo.created_at,
    };
  }).filter(p => p.thumbnail || p.fullSize);

  console.log(`Mapped ${photos.length} photos with city data for image sitemap`);
  return photos;
}

async function main() {
  console.log("=== ROOF EXPRESS Field Notes Rebuild ===\n");

  const posts = await fetchFieldNotes();
  if (posts.length === 0) {
    console.log("No posts found — nothing to rebuild");
    return;
  }
  console.log(`Found ${posts.length} Field Notes posts\n`);

  await downloadImages(posts);
  console.log("");

  let baseHtml;
  const shellPath = path.join(ROOT, "blog", "_field-notes-post.html");
  try {
    baseHtml = await readFile(shellPath, "utf-8");
    console.log("Using existing SPA shell template");
  } catch {
    console.log("No SPA shell template found — using standalone HTML template");
    baseHtml = generateStandaloneTemplate();
  }

  const fnDir = path.join(ROOT, "blog", "field-notes");
  await mkdir(fnDir, { recursive: true });

  console.log(`Generating ${posts.length} Field Notes HTML files...`);
  for (const post of posts) {
    const html = generateFieldNoteHtml(baseHtml, post, posts);
    await writeFile(path.join(fnDir, `${post.id}.html`), html);
  }
  console.log(`Generated ${posts.length} post HTML files\n`);

  console.log("Updating feed.xml...");
  const feedXml = generateFeedXml(posts);
  await writeFile(path.join(ROOT, "feed.xml"), feedXml);
  console.log("feed.xml updated\n");

  const galleryPhotos = await fetchAllTaggedPhotos();

  const sitemapPath = path.join(ROOT, "sitemap.xml");
  try {
    const sitemapContent = await readFile(sitemapPath, "utf-8");
    console.log("Updating sitemap.xml with Field Notes + gallery photo entries...");
    const updatedSitemap = updateSitemap(sitemapContent, posts, galleryPhotos);
    await writeFile(sitemapPath, updatedSitemap);
    console.log(`sitemap.xml updated (${posts.length} Field Notes + ${galleryPhotos.length} gallery photos)\n`);
  } catch {
    console.log("sitemap.xml not found — skipping sitemap update\n");
  }

  console.log(`=== Done! ${posts.length} Field Notes rebuilt, ${galleryPhotos.length} photos in image sitemap ===`);
}

main().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});

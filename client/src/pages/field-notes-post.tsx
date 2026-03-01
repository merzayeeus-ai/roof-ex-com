import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, Link } from "wouter";
import Layout from "@/components/layout";
import { NearbyAreas, CTASection } from "@/components/page-bottom";
import { useSEO } from "@/hooks/use-seo";
import { cities } from "@/data/cities";

interface FieldNote {
  id: string;
  img: string;
  fullImg: string;
  city: string;
  date: string;
  description: string;
  createdAt: number;
}

function formatDate(timestamp: number): string {
  const d = new Date(timestamp * 1000);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function formatShortDate(timestamp: number): string {
  const d = new Date(timestamp * 1000);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function generateTitle(description: string): string {
  const firstLine = description.split(/[\n.!?]/)[0].trim();
  if (firstLine.length > 8 && firstLine.length <= 80) return firstLine;
  const words = description.split(/\s+/).slice(0, 8).join(" ");
  return words.length > 60 ? words.slice(0, 57) + "..." : words;
}

function readingTime(text: string): number {
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

function generateExcerpt(description: string, maxLen = 120): string {
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

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      setProgress(Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent" data-testid="progress-fn-reading">
      <div
        className="h-full bg-gradient-to-r from-brandOrange to-brandOrangeLight transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function ShareButtons({ title, city }: { title: string; city: string }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [url]);

  const shareLinks = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      bg: "bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white",
    },
    {
      name: "X",
      icon: "fab fa-x-twitter",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} — ROOF EXPRESS Field Notes`)}&url=${encodeURIComponent(url)}`,
      bg: "bg-slate-100 text-slate-700 hover:bg-slate-800 hover:text-white",
    },
    {
      name: "Email",
      icon: "fas fa-envelope",
      href: `mailto:?subject=${encodeURIComponent(`${title} — Roofing in ${city}`)}&body=${encodeURIComponent(`Check out this roofing field note from ROOF EXPRESS:\n\n${url}`)}`,
      bg: "bg-green-50 text-green-600 hover:bg-green-600 hover:text-white",
    },
  ];

  return (
    <div className="flex items-center gap-2" data-testid="section-fn-post-share">
      {shareLinks.map(link => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all duration-200 ${link.bg}`}
          aria-label={`Share on ${link.name}`}
          data-testid={`link-fn-share-${link.name.toLowerCase()}`}
        >
          <i aria-hidden="true" className={link.icon}></i>
        </a>
      ))}
      <button
        onClick={handleCopy}
        className={`h-8 px-3 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-200 gap-1.5 ${
          copied
            ? "bg-green-100 text-green-600"
            : "bg-slate-100 text-slate-500 hover:bg-brandOrange/10 hover:text-brandOrange"
        }`}
        data-testid="button-fn-share-copy"
        aria-label="Copy link"
      >
        <i aria-hidden="true" className={copied ? "fas fa-check" : "fas fa-link"}></i>
        <span className="text-[10px] font-black uppercase tracking-wider">{copied ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  );
}

const SERVICE_LINKS: { pattern: RegExp; href: string }[] = [
  { pattern: /\broof repair\b/gi, href: "/roof-repair/" },
  { pattern: /\broof replacement\b/gi, href: "/roof-replacement/" },
  { pattern: /\bresidential roof(ing)?\b/gi, href: "/residential/" },
  { pattern: /\bcommercial roof(ing)?\b/gi, href: "/commercial/" },
  { pattern: /\bflat roof(ing|s)?\b/gi, href: "/flat/" },
  { pattern: /\bgutter(s)?\b/gi, href: "/gutters/" },
  { pattern: /\bskylight(s)?\b/gi, href: "/skylights/" },
  { pattern: /\bemergency (roof(ing)?|repair)\b/gi, href: "/emergency/" },
];

const CITY_ENTRIES = Object.values(cities).sort((a, b) => b.name.length - a.name.length);

const CITY_LINKS: { pattern: RegExp; href: string }[] = CITY_ENTRIES.map(city => ({
  pattern: new RegExp(`\\b${city.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi"),
  href: `/${city.slug}/`,
}));

function getCitySlug(cityLabel: string): string | null {
  const cityName = cityLabel.replace(/,\s*(CA|California)$/i, "").trim();
  const match = CITY_ENTRIES.find(c => c.name.toLowerCase() === cityName.toLowerCase());
  return match ? match.slug : null;
}

function autoLinkText(text: string): (string | JSX.Element)[] {
  type Segment = { type: "text"; value: string } | { type: "link"; value: string; href: string; key: number; isCity: boolean };
  let segments: Segment[] = [{ type: "text", value: text }];
  let keyCounter = 0;
  const linked = new Set<string>();

  const allLinks = [
    ...SERVICE_LINKS.map(l => ({ ...l, isCity: false })),
    ...CITY_LINKS.map(l => ({ ...l, isCity: true })),
  ];

  for (const { pattern, href, isCity } of allLinks) {
    if (linked.has(href)) continue;
    const nextSegments: Segment[] = [];
    let matched = false;

    for (const seg of segments) {
      if (seg.type !== "text" || matched) {
        nextSegments.push(seg);
        continue;
      }
      pattern.lastIndex = 0;
      const m = pattern.exec(seg.value);
      if (m) {
        matched = true;
        linked.add(href);
        if (m.index > 0) nextSegments.push({ type: "text", value: seg.value.slice(0, m.index) });
        nextSegments.push({ type: "link", value: m[0], href, key: keyCounter++, isCity });
        const after = seg.value.slice(m.index + m[0].length);
        if (after) nextSegments.push({ type: "text", value: after });
      } else {
        nextSegments.push(seg);
      }
    }
    segments = nextSegments;
  }

  return segments.map(seg =>
    seg.type === "link"
      ? <a key={`al-${seg.key}`} href={seg.href} className={seg.isCity ? "text-brandNavy font-semibold hover:text-brandOrange hover:underline underline-offset-2 transition" : "text-brandOrange font-semibold hover:underline underline-offset-2 transition"}>{seg.value}</a>
      : seg.value
  );
}

function TableOfContents({ blocks }: { blocks: ContentBlock[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const headings = blocks
    .map((b, i) => (b.type === "heading" ? { text: b.text, id: `section-${i}` } : null))
    .filter((h): h is { text: string; id: string } => h !== null);

  if (headings.length < 2) return null;

  return (
    <nav className="bg-slate-50 rounded-xl border border-slate-100 mb-8 overflow-hidden" data-testid="nav-fn-post-toc" aria-label="Table of contents">
      <button
        onClick={() => setIsOpen(v => !v)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-100/50 transition"
        data-testid="button-fn-toc-toggle"
        aria-expanded={isOpen}
      >
        <h2 className="text-xs font-black text-brandNavy uppercase tracking-widest flex items-center gap-2 m-0">
          <i aria-hidden="true" className="fas fa-list-ul text-brandOrange text-[10px]"></i> In This Note
          <span className="text-[10px] font-bold text-slate-400 normal-case tracking-normal">({headings.length} sections)</span>
        </h2>
        <i aria-hidden="true" className={`fas fa-chevron-down text-brandOrange text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}></i>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? `${headings.length * 36 + 20}px` : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <ol className="space-y-1.5 px-5 pb-5">
          {headings.map((h, i) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-brandOrange transition leading-snug group"
                data-testid={`link-fn-toc-${i}`}
              >
                <span className="w-5 h-5 rounded-md bg-brandNavy/5 text-brandNavy text-[10px] font-bold flex items-center justify-center shrink-0 group-hover:bg-brandOrange/10 group-hover:text-brandOrange transition">{i + 1}</span>
                <span className="line-clamp-1">{h.text}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} id={`section-${i}`} className="text-lg md:text-xl font-bold text-brandNavy mt-6 mb-1 leading-snug scroll-mt-24">
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={i} className="text-slate-600 text-[15px] md:text-base leading-[1.75]">
                {block.isLead ? (
                  <><span className="font-semibold text-brandNavy">{block.text.split(" ").slice(0, 3).join(" ")}</span>{" "}{autoLinkText(block.text.split(" ").slice(3).join(" "))}</>
                ) : autoLinkText(block.text)}
              </p>
            );
          case "bullets":
            return (
              <ul key={i} className="space-y-1.5 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-2.5 text-slate-600 text-[15px] md:text-base leading-relaxed">
                    <span className="text-brandOrange/60 mt-[7px] shrink-0 text-[6px]"><i aria-hidden="true" className="fas fa-circle"></i></span>
                    <span>{autoLinkText(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "numbered":
            return (
              <ol key={i} className="space-y-1.5 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-2.5 text-slate-600 text-[15px] md:text-base leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-brandNavy/5 text-brandNavy text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{j + 1}</span>
                    <span>{autoLinkText(item)}</span>
                  </li>
                ))}
              </ol>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

function useJsonLd(post: FieldNote | undefined, title: string) {
  useEffect(() => {
    if (!post) return;
    const siteUrl = "https://roof-ex.com";
    const wordCount = post.description.split(/\s+/).length;
    const cleanDesc = post.description.replace(/\n+/g, " ").trim().slice(0, 160);
    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: cleanDesc,
        image: post.fullImg,
        datePublished: new Date(post.createdAt * 1000).toISOString(),
        dateModified: new Date(post.createdAt * 1000).toISOString(),
        wordCount,
        author: {
          "@type": "Organization",
          name: "ROOF EXPRESS",
          url: siteUrl,
          logo: `${siteUrl}/logo.png`,
        },
        publisher: {
          "@type": "Organization",
          name: "ROOF EXPRESS",
          url: siteUrl,
          logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}/blog/field-notes/${post.id}`,
        },
        articleSection: "Field Notes",
        inLanguage: "en-US",
        keywords: `roofing, ${post.city}, field notes, roof inspection, Bay Area roofing`,
        about: {
          "@type": "Thing",
          name: "Roofing",
          description: "Professional roofing services in the Bay Area",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
          { "@type": "ListItem", position: 3, name: "Field Notes", item: `${siteUrl}/blog/field-notes` },
          { "@type": "ListItem", position: 4, name: title, item: `${siteUrl}/blog/field-notes/${post.id}` },
        ],
      },
    ];

    const scriptId = "field-note-jsonld";
    let el = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = scriptId;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [post, title]);
}

function useOpenGraph(post: FieldNote | undefined, title: string) {
  useEffect(() => {
    if (!post) return;

    const ogUpdates: [string, string, string][] = [
      ["property", "og:type", "article"],
      ["property", "og:image", post.fullImg],
      ["property", "og:site_name", "ROOF EXPRESS"],
      ["name", "twitter:image", post.fullImg],
      ["name", "twitter:card", "summary_large_image"],
    ];

    const originals: [string, string, string | null][] = [];

    for (const [attr, name, value] of ogUpdates) {
      const selector = `meta[${attr}="${name}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (el) {
        originals.push([attr, name, el.getAttribute("content")]);
        el.setAttribute("content", value);
      } else {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        el.setAttribute("content", value);
        document.head.appendChild(el);
        originals.push([attr, name, null]);
      }
    }

    const articleMetas: HTMLMetaElement[] = [];
    const articleTags: [string, string][] = [
      ["article:published_time", new Date(post.createdAt * 1000).toISOString()],
      ["article:author", "ROOF EXPRESS"],
      ["article:section", "Field Notes"],
      ["article:tag", "roofing"],
      ["article:tag", post.city],
    ];
    for (const [prop, content] of articleTags) {
      const el = document.createElement("meta");
      el.setAttribute("property", prop);
      el.setAttribute("content", content);
      document.head.appendChild(el);
      articleMetas.push(el);
    }

    return () => {
      for (const [attr, name, original] of originals) {
        const selector = `meta[${attr}="${name}"]`;
        const el = document.querySelector(selector);
        if (original === null) {
          el?.remove();
        } else if (el) {
          el.setAttribute("content", original);
        }
      }
      articleMetas.forEach(el => el.remove());
    };
  }, [post, title]);
}

export default function FieldNotePostPage() {
  const { postId } = useParams<{ postId: string }>();
  const [allPosts, setAllPosts] = useState<FieldNote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const prerendered = document.getElementById("field-note-prerendered");
    if (prerendered) prerendered.remove();
  }, []);

  useEffect(() => {
    let mounted = true;
    fetch("/api/companycam/photos?tag=wiki", { cache: "no-store" })
      .then(r => r.ok ? r.json() : { photos: [] })
      .then(data => {
        if (!mounted) return;
        const mapped: FieldNote[] = data.photos
          .filter((p: { description?: string }) => p.description && p.description.trim().length > 20)
          .map((p: { id: string; thumbnail: string; fullSize: string; city: string; state: string; createdAt: number; description: string }) => ({
            id: p.id,
            img: p.thumbnail,
            fullImg: p.fullSize,
            city: `${p.city}, ${p.state === "California" ? "CA" : p.state}`,
            date: formatDate(p.createdAt),
            description: p.description,
            createdAt: p.createdAt,
          }))
          .sort((a: FieldNote, b: FieldNote) => b.createdAt - a.createdAt);
        setAllPosts(mapped);
      })
      .catch(() => {})
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, []);

  const post = allPosts.find(p => p.id === postId);
  const currentIdx = allPosts.findIndex(p => p.id === postId);
  const prevPost = currentIdx > 0 ? allPosts[currentIdx - 1] : null;
  const nextPost = currentIdx >= 0 && currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;
  const [relatedVisible, setRelatedVisible] = useState(30);
  const relatedPosts = useMemo(() => {
    const others = allPosts.filter(p => p.id !== postId);
    const sameCity = others.filter(p => p.city === post?.city);
    const differentCity = others.filter(p => p.city !== post?.city);
    return [...sameCity, ...differentCity];
  }, [allPosts, postId, post?.city]);
  const title = post ? generateTitle(post.description) : "Field Note";
  const wordCount = post ? post.description.split(/\s+/).length : 0;

  useSEO(
    post ? `${title} — Roofing Field Notes | ROOF EXPRESS` : "Field Notes — ROOF EXPRESS",
    post ? post.description.replace(/\n+/g, " ").trim().slice(0, 160) : "Expert roofing insights from the field.",
    post ? `roofing, ${post.city}, field notes, Bay Area roofing, roof inspection, Diamond Certified` : undefined
  );

  useJsonLd(post, title);
  useOpenGraph(post, title);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-white pt-[180px] md:pt-[160px]">
          <div className="container mx-auto max-w-2xl px-5 py-12 animate-pulse space-y-5">
            <div className="w-32 h-4 bg-slate-100 rounded-full"></div>
            <div className="w-full h-8 bg-slate-100 rounded-lg"></div>
            <div className="w-2/3 h-8 bg-slate-100 rounded-lg"></div>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-full bg-slate-100"></div>
              <div className="w-36 h-4 bg-slate-50 rounded-full"></div>
            </div>
            <div className="w-full aspect-[4/3] bg-slate-100 rounded-xl"></div>
            <div className="space-y-3 pt-3">
              <div className="w-full h-4 bg-slate-50 rounded-full"></div>
              <div className="w-full h-4 bg-slate-50 rounded-full"></div>
              <div className="w-3/4 h-4 bg-slate-50 rounded-full"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <section className="min-h-[60vh] flex items-center justify-center bg-white px-6 pt-[180px] md:pt-[160px]">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 text-2xl mx-auto mb-5">
              <i aria-hidden="true" className="fas fa-file-alt"></i>
            </div>
            <h1 className="text-2xl font-black text-brandNavy mb-3" data-testid="text-fn-post-not-found">Post Not Found</h1>
            <p className="text-slate-500 mb-6 max-w-sm mx-auto text-sm">This field note may have been removed or the link is incorrect.</p>
            <Link href="/blog/field-notes" className="bg-brandNavy text-white px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brandNavy/80 transition inline-flex items-center gap-2" data-testid="link-back-to-field-notes">
              <i aria-hidden="true" className="fas fa-arrow-left text-xs"></i> Back to Field Notes
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const contentBlocks = parseContent(post.description, title);
  const mins = readingTime(post.description);

  return (
    <Layout>
      <ReadingProgressBar />
      <article className="bg-white">
        <div className="pt-[180px] md:pt-[160px]">
          <div className="bg-white border-b border-slate-100" data-testid="nav-fn-post-breadcrumb">
            <div className="container mx-auto max-w-2xl px-5">
              <div className="flex items-center justify-between py-2.5">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest overflow-hidden">
                  <Link href="/blog/field-notes" className="hover:text-brandOrange transition shrink-0 inline-flex items-center gap-1.5" data-testid="link-fn-post-breadcrumb">
                    <i aria-hidden="true" className="fas fa-arrow-left text-[9px]"></i> Field Notes
                  </Link>
                  <span className="text-slate-200">/</span>
                  <span className="text-slate-300 truncate max-w-[180px] sm:max-w-none">{title}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {prevPost && (
                    <Link href={`/blog/field-notes/${prevPost.id}`} className="w-7 h-7 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-brandNavy transition" data-testid="link-fn-post-prev-nav" aria-label="Previous post">
                      <i aria-hidden="true" className="fas fa-chevron-left text-[9px]"></i>
                    </Link>
                  )}
                  {nextPost && (
                    <Link href={`/blog/field-notes/${nextPost.id}`} className="w-7 h-7 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-brandNavy transition" data-testid="link-fn-post-next-nav" aria-label="Next post">
                      <i aria-hidden="true" className="fas fa-chevron-right text-[9px]"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          <header className="pt-5 md:pt-8 pb-5 px-5">
            <div className="container mx-auto max-w-2xl">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="bg-brandOrange/10 text-brandOrange text-[9px] font-black uppercase px-2.5 py-1 rounded-full tracking-widest inline-flex items-center gap-1">
                  <i aria-hidden="true" className="fas fa-hard-hat text-[7px]"></i> Field Note
                </span>
                {getCitySlug(post.city) ? (
                  <Link href={`/${getCitySlug(post.city)}/`} className="bg-blue-50 text-blue-600 text-[9px] font-black uppercase px-2.5 py-1 rounded-full tracking-widest inline-flex items-center gap-1 hover:bg-blue-100 transition" data-testid="link-fn-post-city-badge">
                    <i aria-hidden="true" className="fas fa-map-marker-alt text-[7px]"></i> {post.city}
                  </Link>
                ) : (
                  <span className="bg-blue-50 text-blue-600 text-[9px] font-black uppercase px-2.5 py-1 rounded-full tracking-widest inline-flex items-center gap-1">
                    <i aria-hidden="true" className="fas fa-map-marker-alt text-[7px]"></i> {post.city}
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-brandNavy leading-[1.15] tracking-tight mb-5" data-testid="text-fn-post-page-title">{title}</h1>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brandNavy flex items-center justify-center">
                    <i aria-hidden="true" className="fas fa-hard-hat text-white text-xs"></i>
                  </div>
                  <div>
                    <p className="font-black text-brandNavy text-xs" data-testid="text-fn-post-author">ROOF EXPRESS</p>
                    <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-medium">
                      <span data-testid="text-fn-post-date">{post.date}</span>
                      <span className="text-slate-200">&middot;</span>
                      <span data-testid="text-fn-post-readtime">{mins} min read</span>
                      <span className="text-slate-200">&middot;</span>
                      {getCitySlug(post.city) ? (
                        <Link href={`/${getCitySlug(post.city)}/`} data-testid="text-fn-post-location" className="text-brandOrange font-bold hover:underline underline-offset-2 transition">{post.city}</Link>
                      ) : (
                        <span data-testid="text-fn-post-location" className="text-brandOrange font-bold">{post.city}</span>
                      )}
                    </div>
                  </div>
                </div>
                <ShareButtons title={title} city={post.city} />
              </div>
            </div>
          </header>

          <figure className="mb-6 md:mb-10">
            <div className="max-w-4xl mx-auto px-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={post.fullImg}
                  alt={title}
                  className="w-full aspect-[4/3] object-cover"
                  loading="eager"
                  fetchPriority="high"
                  data-testid="img-fn-post-hero"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent h-20 pointer-events-none" />
              </div>
            </div>
          </figure>

          <div className="px-5 pb-10 md:pb-16">
            <div className="container mx-auto max-w-2xl">
              <div className="flex items-center gap-3 mb-6 text-[11px] text-slate-500 font-bold uppercase tracking-widest" data-testid="section-fn-post-stats">
                <span className="inline-flex items-center gap-1.5">
                  <i aria-hidden="true" className="fas fa-file-word text-brandOrange text-[9px]"></i> {wordCount.toLocaleString()} words
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="inline-flex items-center gap-1.5">
                  <i aria-hidden="true" className="fas fa-clock text-brandOrange text-[9px]"></i> {mins} min read
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="inline-flex items-center gap-1.5">
                  <i aria-hidden="true" className="fas fa-calendar-check text-brandOrange text-[9px]"></i> {post.date}
                </span>
              </div>
              <TableOfContents blocks={contentBlocks} />
              <div data-testid="content-fn-post-body">
                <ContentRenderer blocks={contentBlocks} />
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap" data-testid="section-fn-post-share-bottom">
                <div className="flex items-center gap-2.5 text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <i aria-hidden="true" className="fas fa-share-alt text-brandOrange text-[10px]"></i>
                  Share this note
                </div>
                <ShareButtons title={title} city={post.city} />
              </div>

              <div className="mt-8 space-y-4">
                <div className="relative" data-testid="section-fn-post-cta">
                  <div className="bg-gradient-to-br from-brandNavy to-brandNavy/95 rounded-xl p-6 md:p-8 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brandOrange/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-black mb-1.5 text-white">Need Help With Your Roof?</h3>
                      <p className="text-white/80 text-sm mb-4 max-w-md leading-relaxed">Diamond Certified, GAF Master Elite &amp; Owens Corning Preferred. Free inspections and fast quotes.</p>
                      <div className="flex flex-wrap gap-2.5">
                        <a href="tel:6506665554" className="bg-brandOrange text-white px-5 py-2.5 rounded-lg font-black text-[11px] uppercase tracking-widest hover:bg-orange-600 transition inline-flex items-center gap-2 shadow-lg" data-testid="link-fn-post-call">
                          <i aria-hidden="true" className="fas fa-phone-alt text-[9px]"></i> (650) 666-5554
                        </a>
                        <a href="https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=website" target="_blank" rel="noopener noreferrer" className="bg-white/15 text-white px-5 py-2.5 rounded-lg font-black text-[11px] uppercase tracking-widest hover:bg-white/25 transition inline-flex items-center gap-2" data-testid="link-fn-post-quote">
                          <i aria-hidden="true" className="fas fa-file-alt text-[9px]"></i> Free Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100" data-testid="section-fn-post-services">
                  <h3 className="text-xs font-black text-brandNavy uppercase tracking-widest mb-3 flex items-center gap-2">
                    <i aria-hidden="true" className="fas fa-tools text-brandOrange text-[10px]"></i> Our Services
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { name: "Residential", href: "/residential/", icon: "fas fa-home" },
                      { name: "Commercial", href: "/commercial/", icon: "fas fa-building" },
                      { name: "Flat Roofing", href: "/flat/", icon: "fas fa-layer-group" },
                      { name: "Roof Repair", href: "/roof-repair/", icon: "fas fa-wrench" },
                      { name: "Replacement", href: "/roof-replacement/", icon: "fas fa-sync-alt" },
                      { name: "Gutters", href: "/gutters/", icon: "fas fa-water" },
                      { name: "Skylights", href: "/skylights/", icon: "fas fa-sun" },
                      { name: "Emergency", href: "/emergency/", icon: "fas fa-exclamation-triangle" },
                      { name: "All Services", href: "/services/", icon: "fas fa-th-large" },
                    ].map(service => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="group flex items-center gap-2 bg-white rounded-lg px-3 py-2 hover:shadow-sm transition-all border border-slate-100 text-xs"
                        data-testid={`link-fn-post-service-${service.href.replace(/\//g, "").replace(/-/g, "-")}`}
                      >
                        <i aria-hidden="true" className={`${service.icon} text-brandOrange text-[10px]`}></i>
                        <span className="font-bold text-brandNavy group-hover:text-brandOrange transition truncate">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {(prevPost || nextPost) && (
          <div className="border-t border-slate-100 bg-white" data-testid="section-fn-post-nav">
            <div className="container mx-auto max-w-2xl px-5 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {prevPost ? (
                  <Link href={`/blog/field-notes/${prevPost.id}`} className="group flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200" data-testid="link-fn-post-prev">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-500 group-hover:text-brandOrange transition shrink-0 shadow-sm">
                      <i aria-hidden="true" className="fas fa-arrow-left text-xs"></i>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block">Previous</span>
                      <p className="font-bold text-brandNavy text-xs leading-snug group-hover:text-brandOrange transition line-clamp-1">{generateTitle(prevPost.description)}</p>
                    </div>
                  </Link>
                ) : <div />}
                {nextPost ? (
                  <Link href={`/blog/field-notes/${nextPost.id}`} className="group flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200 sm:flex-row-reverse sm:text-right" data-testid="link-fn-post-next">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-500 group-hover:text-brandOrange transition shrink-0 shadow-sm">
                      <i aria-hidden="true" className="fas fa-arrow-right text-xs"></i>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block">Next</span>
                      <p className="font-bold text-brandNavy text-xs leading-snug group-hover:text-brandOrange transition line-clamp-1">{generateTitle(nextPost.description)}</p>
                    </div>
                  </Link>
                ) : <div />}
              </div>
            </div>
          </div>
        )}

        {relatedPosts.length > 0 && (() => {
          const relatedCards = relatedPosts.slice(0, 5);
          const relatedCompact = relatedPosts.slice(5);
          const visibleCompact = relatedCompact.slice(0, relatedVisible);
          const hasMore = relatedVisible < relatedCompact.length;
          const remaining = Math.max(0, relatedCompact.length - relatedVisible);
          return (
            <div className="bg-slate-50 border-t border-slate-100 py-10 px-5" data-testid="section-fn-post-related">
              <div className="container mx-auto max-w-screen-xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                  <div>
                    <span className="text-brandOrange text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2 mb-2">
                      <i aria-hidden="true" className="fas fa-book-open"></i> Keep Reading
                    </span>
                    <h2 className="text-xl font-black text-brandNavy tracking-tight" data-testid="heading-fn-post-related">More Field Notes</h2>
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{relatedPosts.length} {relatedPosts.length === 1 ? "post" : "posts"}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {relatedCards.map((rp) => (
                    <Link
                      key={rp.id}
                      href={`/blog/field-notes/${rp.id}`}
                      className="group block"
                      data-testid={`card-fn-related-${rp.id}`}
                    >
                      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brandOrange/20 hover:-translate-y-1 h-full flex flex-col">
                        <div className="relative aspect-[5/4] overflow-hidden">
                          <img src={rp.img} alt={generateTitle(rp.description)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-12" />
                          <div className="absolute bottom-2.5 left-2.5">
                            <span className="bg-white/90 text-brandOrange text-[9px] font-black uppercase px-2 py-0.5 rounded-full tracking-widest backdrop-blur-sm shadow-sm">{rp.city}</span>
                          </div>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">{formatShortDate(rp.createdAt)}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                            <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">{readingTime(rp.description)} min</span>
                          </div>
                          <h3 className="font-black text-brandNavy text-sm leading-snug group-hover:text-brandOrange transition line-clamp-2 flex-1">{generateTitle(rp.description)}</h3>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                {relatedCompact.length > 0 && (
                  <div className="mt-8" data-testid="section-fn-related-older">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-sm font-black text-brandNavy uppercase tracking-widest">All Posts</h3>
                      <div className="flex-1 h-px bg-slate-200"></div>
                      <span className="text-[10px] text-slate-400 font-bold">{relatedCompact.length} posts</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-0.5 bg-slate-50/50 rounded-2xl p-2">
                      {visibleCompact.map(rp => (
                        <Link
                          key={rp.id}
                          href={`/blog/field-notes/${rp.id}`}
                          className="group flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200 border border-transparent hover:border-slate-100"
                          data-testid={`row-fn-related-${rp.id}`}
                        >
                          <img src={rp.img} alt={generateTitle(rp.description)} className="w-14 h-14 rounded-lg object-cover shrink-0 group-hover:ring-2 ring-brandOrange/30 transition" loading="lazy" />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-brandNavy leading-snug truncate group-hover:text-brandOrange transition">{generateTitle(rp.description)}</h4>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-[10px] text-brandOrange font-bold uppercase tracking-wider">{rp.city}</span>
                              <span className="w-0.5 h-0.5 rounded-full bg-slate-300"></span>
                              <span className="text-[10px] text-slate-400 font-bold">{formatShortDate(rp.createdAt)}</span>
                            </div>
                          </div>
                          <i aria-hidden="true" className="fas fa-chevron-right text-[9px] text-slate-300 group-hover:text-brandOrange transition shrink-0"></i>
                        </Link>
                      ))}
                    </div>
                    {hasMore && (
                      <div className="text-center mt-6">
                        <button
                          onClick={() => setRelatedVisible(v => v + 30)}
                          className="bg-white border-2 border-slate-200 text-brandNavy px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-brandOrange hover:text-brandOrange transition-all inline-flex items-center gap-2 shadow-sm hover:shadow-md"
                          data-testid="button-fn-related-load-more"
                        >
                          Load More
                          <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full">{remaining}</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                <div className="text-center mt-8">
                  <Link href="/blog/field-notes" className="bg-white border-2 border-slate-200 text-brandNavy px-6 py-2.5 rounded-xl font-black text-[11px] uppercase tracking-widest hover:border-brandOrange hover:text-brandOrange transition inline-flex items-center gap-2 shadow-sm" data-testid="link-fn-post-view-all">
                    View All Field Notes <i aria-hidden="true" className="fas fa-arrow-right text-[9px]"></i>
                  </Link>
                </div>
              </div>
            </div>
          );
        })()}
      </article>

      <CTASection />
      <NearbyAreas />
    </Layout>
  );
}

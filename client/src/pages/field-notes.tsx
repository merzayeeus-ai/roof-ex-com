import { useState, useEffect, useMemo } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { NearbyAreas, CTASection } from "@/components/page-bottom";
import { useSEO } from "@/hooks/use-seo";
const heroImg = "/images/field-notes-hero.webp";

const FAQ_ITEMS = [
  {
    question: "What are field notes in roofing?",
    answer: "Field notes are detailed, on-site observations and documentation from professional roofing projects. At ROOF EXPRESS, our Diamond Certified crews document materials, techniques, conditions, and outcomes from every Bay Area job site to help homeowners make informed decisions."
  },
  {
    question: "How often are new field notes published?",
    answer: "New field notes are published regularly as our crews complete projects across 60+ Bay Area cities. Each note includes photos, location, and expert commentary on the work performed."
  },
  {
    question: "Can I find field notes for my specific city?",
    answer: "Yes! Use the city filter on our Field Notes page to find posts from your specific Bay Area city. We serve over 60 cities from San Francisco to San Jose, including the Peninsula, East Bay, and South Bay."
  },
  {
    question: "What topics do field notes cover?",
    answer: "Field notes cover a wide range of roofing topics including residential and commercial roof repairs, full replacements, flat roofing systems (TPO, modified bitumen), gutter installation, skylight work, emergency repairs, and city-specific permit requirements."
  },
  {
    question: "Are field notes written by actual roofers?",
    answer: "Yes. Every field note is authored by ROOF EXPRESS crews — GAF Master Elite certified and Diamond Certified professionals with hands-on experience on Bay Area roofs. These are real insights from real job sites, not generic content."
  },
];

function useFieldNotesJsonLd() {
  useEffect(() => {
    const siteUrl = "https://roof-ex.com";
    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Roofing Field Notes — ROOF EXPRESS",
        url: `${siteUrl}/blog/field-notes`,
        description: "Professional roofing tips, project breakdowns, and expert advice from Bay Area job sites — updated by our Diamond Certified and GAF Master Elite crews.",
        publisher: {
          "@type": "Organization",
          name: "ROOF EXPRESS",
          url: siteUrl,
        },
        inLanguage: "en-US",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map(item => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
          { "@type": "ListItem", position: 3, name: "Field Notes", item: `${siteUrl}/blog/field-notes` },
        ],
      },
    ];

    const scriptId = "field-notes-listing-jsonld";
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
  }, []);
}

const fieldNotesArticles = [
  { title: "Asphalt Shingles", slug: "field-notes-asphalt-shingles", description: "Types, lifespan, pros & cons for Bay Area homes", icon: "fas fa-layer-group", color: "bg-brandOrange/10 text-brandOrange" },
  { title: "Flat Roof Systems", slug: "field-notes-flat-roof-systems", description: "TPO, modified bitumen, torch-down explained", icon: "fas fa-building", color: "bg-blue-100 text-blue-600" },
  { title: "Roof Flashing", slug: "field-notes-roof-flashing", description: "The most important leak-prevention detail", icon: "fas fa-shield-alt", color: "bg-red-100 text-red-600" },
  { title: "Roof Ventilation", slug: "field-notes-roof-ventilation", description: "Why attics overheat and how to fix it", icon: "fas fa-wind", color: "bg-green-100 text-green-600" },
  { title: "Roofing Permits", slug: "field-notes-roof-permits-bay-area", description: "Bay Area permit guide for 2026", icon: "fas fa-file-alt", color: "bg-purple-100 text-purple-600" },
];

const relatedCategories = [
  { name: "Roof Repair", href: "/blog/?category=Roof+Repair", icon: "fas fa-tools", tagline: "Leaks, flashing & emergency fixes" },
  { name: "Roof Replacement", href: "/blog/?category=Roof+Replacement", icon: "fas fa-home", tagline: "Full system upgrades & reroof" },
  { name: "Flat Roofing", href: "/blog/?category=Flat+Roofing", icon: "fas fa-layer-group", tagline: "TPO, torch-down & coatings" },
  { name: "Materials", href: "/blog/?category=Materials", icon: "fas fa-cubes", tagline: "Compare shingles, tile & metal" },
  { name: "Permits & Codes", href: "/blog/?category=Permits+%26+Codes", icon: "fas fa-file-alt", tagline: "Bay Area permit guides" },
  { name: "Pricing", href: "/blog/?category=Pricing", icon: "fas fa-chart-line", tagline: "Cost breakdowns & estimates" },
];

interface FieldNote {
  id: string;
  img: string;
  fullImg: string;
  city: string;
  date: string;
  description: string;
  createdAt: number;
}

const RECENT_CARD_COUNT = 5;
const COMPACT_BATCH = 30;

function formatDate(timestamp: number): string {
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

function generateExcerpt(description: string, maxLen = 160): string {
  const clean = description.replace(/\n+/g, " ").trim();
  if (clean.length <= maxLen) return clean;
  return clean.slice(0, maxLen - 3) + "...";
}

function readingTime(text: string): number {
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

function FeaturedCard({ post }: { post: FieldNote }) {
  const title = generateTitle(post.description);
  const excerpt = generateExcerpt(post.description, 260);
  const mins = readingTime(post.description);

  return (
    <Link
      href={`/blog/field-notes/${post.id}`}
      className="group block"
      data-testid={`card-fn-featured-${post.id}`}
    >
      <article className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-slate-100">
        <div className="lg:col-span-3 relative aspect-[4/3] lg:aspect-auto overflow-hidden">
          <img src={post.fullImg || post.img} alt={title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" loading="eager" fetchPriority="high" />
          <div className="absolute top-5 left-5">
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-2 rounded-full tracking-widest inline-flex items-center gap-1.5 shadow-lg">
              <i aria-hidden="true" className="fas fa-star text-[8px]"></i> Latest
            </span>
          </div>
        </div>
        <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="text-brandOrange text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
              <i aria-hidden="true" className="fas fa-map-marker-alt text-[8px]"></i> {post.city}
            </span>
            <span className="text-slate-300 text-[10px]">|</span>
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{post.date}</span>
            <span className="text-slate-300 text-[10px]">|</span>
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{mins} min read</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-brandNavy leading-tight mb-4 group-hover:text-brandOrange transition-colors duration-300" data-testid={`text-fn-featured-title-${post.id}`}>{title}</h2>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-6 line-clamp-4">{excerpt}</p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brandNavy flex items-center justify-center">
              <i aria-hidden="true" className="fas fa-hard-hat text-white text-xs"></i>
            </div>
            <div>
              <p className="text-xs font-black text-brandNavy uppercase tracking-wider">ROOF EXPRESS</p>
              <p className="text-[10px] text-slate-500 font-medium">Field Report</p>
            </div>
            <i aria-hidden="true" className="fas fa-arrow-right text-brandOrange ml-auto group-hover:translate-x-1 transition-transform"></i>
          </div>
        </div>
      </article>
    </Link>
  );
}

function BlogCard({ post }: { post: FieldNote }) {
  const title = generateTitle(post.description);
  const mins = readingTime(post.description);

  return (
    <Link
      href={`/blog/field-notes/${post.id}`}
      className="group block"
      data-testid={`card-fn-post-${post.id}`}
    >
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brandOrange/20 hover:-translate-y-1 h-full flex flex-col">
        <div className="relative aspect-[5/4] overflow-hidden">
          <img src={post.img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-12" />
          <div className="absolute bottom-2.5 left-2.5">
            <span className="bg-white/90 text-brandOrange text-[9px] font-black uppercase px-2 py-0.5 rounded-full tracking-widest backdrop-blur-sm shadow-sm">{post.city}</span>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-200"></span>
            <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">{mins} min</span>
          </div>
          <h3 className="font-black text-brandNavy text-sm leading-snug group-hover:text-brandOrange transition line-clamp-2 flex-1" data-testid={`text-fn-post-card-title-${post.id}`}>{title}</h3>
        </div>
      </article>
    </Link>
  );
}

function CompactRow({ post }: { post: FieldNote }) {
  const title = generateTitle(post.description);

  return (
    <Link
      href={`/blog/field-notes/${post.id}`}
      className="group flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200 border border-transparent hover:border-slate-100"
      data-testid={`row-fn-post-${post.id}`}
    >
      <img src={post.img} alt={title} className="w-14 h-14 rounded-lg object-cover shrink-0 group-hover:ring-2 ring-brandOrange/30 transition" loading="lazy" />
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-brandNavy leading-snug truncate group-hover:text-brandOrange transition">{title}</h4>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[10px] text-brandOrange font-bold uppercase tracking-wider">{post.city}</span>
          <span className="w-0.5 h-0.5 rounded-full bg-slate-300"></span>
          <span className="text-[10px] text-slate-400 font-bold">{post.date}</span>
        </div>
      </div>
      <i aria-hidden="true" className="fas fa-chevron-right text-[9px] text-slate-300 group-hover:text-brandOrange transition shrink-0"></i>
    </Link>
  );
}

function BlogSection() {
  const [posts, setPosts] = useState<FieldNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [compactVisible, setCompactVisible] = useState(COMPACT_BATCH);

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
        setPosts(mapped);
      })
      .catch(() => {})
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, []);

  const cities = useMemo(() => [...new Set(posts.map(p => p.city))].sort(), [posts]);

  const filtered = useMemo(() => {
    let result = posts;
    if (cityFilter !== "all") result = result.filter(p => p.city === cityFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.description.toLowerCase().includes(q) ||
        generateTitle(p.description).toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q)
      );
    }
    return result;
  }, [posts, cityFilter, search]);

  const isFiltering = search.trim() !== "" || cityFilter !== "all";
  const featured = !isFiltering && filtered.length > 0 ? filtered[0] : null;
  const afterFeatured = featured ? filtered.slice(1) : filtered;
  const recentCards = afterFeatured.slice(0, isFiltering ? afterFeatured.length : RECENT_CARD_COUNT);
  const compactPosts = isFiltering ? [] : afterFeatured.slice(RECENT_CARD_COUNT);
  const visibleCompact = compactPosts.slice(0, compactVisible);
  const hasMoreCompact = compactVisible < compactPosts.length;
  const remainingCompact = Math.max(0, compactPosts.length - compactVisible);

  if (loading) {
    return (
      <section className="py-20 bg-slate-50 px-6" data-testid="section-fn-posts-loading">
        <div className="container mx-auto max-w-screen-xl">
          <div className="animate-pulse space-y-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 aspect-[4/3] bg-slate-100"></div>
                <div className="lg:col-span-2 p-10 space-y-4">
                  <div className="w-40 h-3 bg-slate-100 rounded-full"></div>
                  <div className="w-full h-7 bg-slate-100 rounded-full"></div>
                  <div className="w-3/4 h-4 bg-slate-50 rounded-full"></div>
                  <div className="w-1/2 h-4 bg-slate-50 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="aspect-[5/4] bg-slate-100"></div>
                  <div className="p-4 space-y-2">
                    <div className="w-20 h-2 bg-slate-100 rounded-full"></div>
                    <div className="w-full h-4 bg-slate-50 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center gap-3 p-3">
                  <div className="w-14 h-14 rounded-lg bg-slate-100 shrink-0"></div>
                  <div className="flex-1 space-y-2">
                    <div className="w-3/4 h-4 bg-slate-50 rounded-full"></div>
                    <div className="w-1/3 h-2 bg-slate-50 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50 px-6" data-testid="section-fn-posts">
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-2 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-green-100">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live from the Field
              </span>
              <span className="text-slate-500 text-xs font-bold">{posts.length} {posts.length === 1 ? "post" : "posts"}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy tracking-tight" data-testid="heading-fn-posts">
              Field Notes
            </h2>
            <p className="text-slate-500 text-[15px] mt-2 max-w-lg leading-relaxed">
              Professional roofing tips, project breakdowns, and expert advice from Bay Area job sites — updated by our certified crews.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative" data-testid="input-fn-search-wrapper">
              <i aria-hidden="true" className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-xs"></i>
              <input
                type="search"
                value={search}
                onChange={e => { setSearch(e.target.value); setCompactVisible(COMPACT_BATCH); }}
                placeholder="Search posts..."
                className="bg-white border border-slate-200 text-slate-700 text-sm rounded-xl pl-10 pr-4 py-2.5 w-full sm:w-56 placeholder:text-slate-300 focus:outline-none focus:border-brandOrange focus:ring-2 focus:ring-brandOrange/10 transition shadow-sm"
                data-testid="input-fn-search"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition" data-testid="button-fn-search-clear" aria-label="Clear search">
                  <i aria-hidden="true" className="fas fa-times text-xs"></i>
                </button>
              )}
            </div>
            {cities.length > 1 && (
              <div className="relative">
                <select
                  value={cityFilter}
                  onChange={e => { setCityFilter(e.target.value); setCompactVisible(COMPACT_BATCH); }}
                  className="bg-white border border-slate-200 text-slate-700 text-sm rounded-xl pl-4 pr-10 py-2.5 appearance-none cursor-pointer focus:outline-none focus:border-brandOrange focus:ring-2 focus:ring-brandOrange/10 transition shadow-sm w-full sm:w-auto"
                  data-testid="select-fn-city-filter"
                >
                  <option value="all">All Cities</option>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <i aria-hidden="true" className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 text-[10px] pointer-events-none"></i>
              </div>
            )}
          </div>
        </div>

        {isFiltering && (
          <div className="flex items-center gap-3 mb-8 flex-wrap" data-testid="section-fn-active-filters">
            <span className="text-sm text-slate-500">
              <span className="font-bold text-brandNavy">{filtered.length}</span> {filtered.length === 1 ? "result" : "results"}
            </span>
            {search && (
              <span className="bg-brandOrange/10 text-brandOrange text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                "{search}"
                <button onClick={() => setSearch("")} aria-label="Remove search filter"><i aria-hidden="true" className="fas fa-times text-[8px]"></i></button>
              </span>
            )}
            {cityFilter !== "all" && (
              <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                {cityFilter}
                <button onClick={() => setCityFilter("all")} aria-label="Remove city filter"><i aria-hidden="true" className="fas fa-times text-[8px]"></i></button>
              </span>
            )}
            <button onClick={() => { setSearch(""); setCityFilter("all"); }} className="text-xs text-slate-500 hover:text-slate-600 transition font-bold underline underline-offset-2" data-testid="button-fn-clear-filters">Clear all</button>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100" data-testid="section-fn-no-results">
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 text-2xl mx-auto mb-5">
              <i aria-hidden="true" className="fas fa-search"></i>
            </div>
            <p className="text-slate-500 font-bold text-lg mb-2">No posts found</p>
            <p className="text-slate-500 text-sm mb-6">Try adjusting your search or filter</p>
            <button onClick={() => { setSearch(""); setCityFilter("all"); }} className="bg-brandOrange text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-orange-600 transition" data-testid="button-fn-reset-all">
              Show All Posts
            </button>
          </div>
        ) : (
          <>
            {featured && <div className="mb-10" data-testid="section-fn-featured"><FeaturedCard post={featured} /></div>}

            {recentCards.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" data-testid="grid-fn-posts">
                {recentCards.map(post => <BlogCard key={post.id} post={post} />)}
              </div>
            )}

            {compactPosts.length > 0 && (
              <div className="mt-10" data-testid="section-fn-older">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-sm font-black text-brandNavy uppercase tracking-widest">All Posts</h3>
                  <div className="flex-1 h-px bg-slate-200"></div>
                  <span className="text-[10px] text-slate-400 font-bold">{compactPosts.length} posts</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-0.5 bg-slate-50/50 rounded-2xl p-2">
                  {visibleCompact.map(post => <CompactRow key={post.id} post={post} />)}
                </div>

                {hasMoreCompact && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => setCompactVisible(v => v + COMPACT_BATCH)}
                      className="bg-white border-2 border-slate-200 text-brandNavy px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-brandOrange hover:text-brandOrange transition-all inline-flex items-center gap-2 shadow-sm hover:shadow-md"
                      data-testid="button-fn-load-more"
                    >
                      Load More
                      <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full">{remainingCompact}</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">
                {filtered.length} total {filtered.length === 1 ? "post" : "posts"}
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default function FieldNotesPage() {
  useSEO(
    "Field Notes — Terms, Materials & Systems Guide | ROOF EXPRESS",
    "Comprehensive roofing encyclopedia covering materials, systems, terminology, and installation methods for Bay Area homeowners.",
    "roofing field notes, roofing knowledge base, Bay Area roofing guides, asphalt shingles, flat roof systems, roof ventilation, roof flashing, roofing permits, Diamond Certified roofer, GAF Master Elite"
  );
  useFieldNotesJsonLd();
  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center" data-testid="section-fn-hero">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="ROOF EXPRESS roofer overlooking San Francisco skyline from a Bay Area rooftop"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1200}
            height={800}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <Link href="/blog" className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full hover:bg-white/20 transition" data-testid="link-fn-back-blog">
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white">
                  <i aria-hidden="true" className="fas fa-arrow-left mr-2 text-[8px]"></i> Blog
                </span>
              </Link>
              <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full">
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                  <i aria-hidden="true" className="fas fa-hard-hat mr-2"></i> Field Notes
                </span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-fn-title">
              Field Notes — <span className="text-brandOrangeLight">From the Roof (2026)</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-fn-subtitle">
              A practical roofing knowledge base for homeowners. Plain-English guides to the materials, systems, and codes that protect your Bay Area home.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=website" target="_blank" rel="noreferrer noopener" className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20" data-testid="link-fn-hero-quote">
                <i aria-hidden="true" className="fas fa-bolt mr-2"></i> Get a Free Quote
              </a>
              <a href="tel:6506665554" className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20" data-testid="link-fn-hero-call">
                <i aria-hidden="true" className="fas fa-phone-alt mr-2"></i> Call 650-666-5554
              </a>
            </div>
          </div>
        </div>
      </section>

      <BlogSection />

      <section className="py-20 bg-white px-6" data-testid="section-fn-articles">
        <div className="container mx-auto max-w-screen-xl">
          <div className="text-center mb-12">
            <span className="text-brandOrange text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2 mb-3">
              <i aria-hidden="true" className="fas fa-book-open"></i> In-Depth Guides
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy tracking-tight" data-testid="heading-fn-articles">Expert Guides</h2>
            <p className="text-slate-500 text-[15px] mt-3 max-w-lg mx-auto">Detailed, long-form guides on the most common roofing topics.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fieldNotesArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 hover:border-brandOrange/20"
                data-testid={`card-fn-${article.slug}`}
              >
                <div className={`w-14 h-14 ${article.color} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition`}>
                  <i aria-hidden="true" className={article.icon}></i>
                </div>
                <h3 className="text-xl font-black text-brandNavy mb-2 group-hover:text-brandOrange transition" data-testid={`text-fn-title-${article.slug}`}>
                  {article.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium mb-5 leading-relaxed">{article.description}</p>
                <span className="inline-flex items-center text-xs font-black text-brandOrange uppercase tracking-widest">
                  Read Article <i aria-hidden="true" className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 px-6" data-testid="section-fn-categories">
        <div className="container mx-auto max-w-screen-xl">
          <div className="text-center mb-10">
            <span className="text-brandOrange text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2 mb-3">
              <i aria-hidden="true" className="fas fa-compass"></i> Explore More
            </span>
            <h2 className="text-2xl font-black text-brandNavy tracking-tight" data-testid="heading-fn-categories">Related Categories</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedCategories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group bg-white rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100 hover:border-brandOrange/20"
                data-testid={`link-fn-cat-${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <div className="w-12 h-12 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange text-lg mx-auto mb-3 group-hover:bg-brandOrange group-hover:text-white transition">
                  <i aria-hidden="true" className={cat.icon}></i>
                </div>
                <h3 className="text-sm font-black text-brandNavy uppercase mb-1">{cat.name}</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{cat.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white px-6" data-testid="section-fn-faq">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-brandOrange text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2 mb-3">
              <i aria-hidden="true" className="fas fa-question-circle"></i> Common Questions
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-brandNavy tracking-tight" data-testid="heading-fn-faq">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={i}
                className="group bg-slate-50 rounded-xl border border-slate-100 overflow-hidden"
                data-testid={`faq-fn-${i}`}
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none hover:bg-slate-100 transition">
                  <h3 className="text-sm md:text-base font-bold text-brandNavy leading-snug">{item.question}</h3>
                  <i aria-hidden="true" className="fas fa-chevron-down text-brandOrange text-xs shrink-0 transition-transform group-open:rotate-180"></i>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <NearbyAreas />
    </Layout>
  );
}

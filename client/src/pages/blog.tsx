import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Layout from "@/components/layout";
import { NearbyAreas, CTASection } from "@/components/page-bottom";
import BeforeAfterShowcase from "@/components/before-after-showcase";
import { cities } from "@/data/cities";
import { useSEO } from "@/hooks/use-seo";

const cityGuideArticles = Object.values(cities).map((city) => ({
  title: `${city.name} Roofing Guide (2026) | Roof Repair & Replacement Costs`,
  slug: `${city.slug}-roofing-guide`,
  category: "City Guides",
  description: `If you own a home or building in ${city.name}, your roof needs to handle Bay Area wind, sun, and seasonal rain. This guide explains what impacts pricing, when to repair vs replace, and how to plan your project confidently.`,
}));

const categories = [
  "All",
  "City Guides",
  "Permits & Codes",
  "Pricing",
  "Materials",
  "Flat Roofing",
  "Insurance",
  "Roofing Tips",
  "Roof Repair",
  "Roof Replacement",
  "Gutters",
  "Skylights",
  "Field Notes",
];

const featuredArticles = [
  {
    title: "Bay Area Roofing Cost Factors",
    slug: "bay-area-roofing-cost-factors",
    category: "Pricing",
    description: "A comprehensive breakdown of what drives roofing costs across San Francisco, San Jose, Oakland, and the greater Bay Area—from materials and labor to permits and pitch complexity.",
    icon: "fas fa-chart-line",
  },
  {
    title: "Roof Repair vs Replacement",
    slug: "roof-repair-vs-replacement",
    category: "Roofing Tips",
    description: "When does a simple patch job become a full replacement? Learn the cost thresholds, warning signs, and ROI calculations that help Bay Area homeowners make the right call.",
    icon: "fas fa-balance-scale",
  },
  {
    title: "San Francisco Roofing Permits Explained",
    slug: "san-francisco-roofing-permits",
    category: "Permits & Codes",
    description: "Navigate San Francisco's permitting process for residential and commercial roof projects. Timelines, costs, required documents, and tips to avoid delays.",
    icon: "fas fa-file-alt",
  },
];

const articles = [
  { title: "Roof Inspection Checklist (2026): 25 Things to Check Before Leaks Start", slug: "roof-inspection-checklist-bay-area", category: "Roof Repair", description: "A step-by-step guide to inspecting your roof for damage, wear, and potential leaks before the rainy season hits." },
  { title: "Signs You Need a Roof Replacement (Bay Area 2026)", slug: "signs-you-need-roof-replacement-bay-area", category: "Roof Replacement", description: "From curling shingles to daylight in the attic—the telltale signs it's time for a full roof replacement." },
  { title: "Roof Ventilation Guide (2026): Ridge Vents, Intake, and Why Attics Get Mold", slug: "roof-ventilation-guide-ridge-soffit", category: "Roof Replacement", description: "Why proper ridge and soffit ventilation extends roof life, reduces energy bills, and prevents moisture damage." },
  { title: "Ice & Water Shield in California (2026): Where It's Actually Needed", slug: "ice-and-water-shield-california-guide", category: "Roof Repair", description: "Understanding when and where ice & water shield underlayment is required by California building codes." },
  { title: "Chimney Flashing Repair (2026): Why Caulk Fails and What Works", slug: "chimney-flashing-repair-guide", category: "Roof Repair", description: "How to identify chimney flashing failures and the proper repair techniques to stop leaks at the source." },
  { title: "Roof Valley Flashing (2026): Open vs Closed Valleys and Leak Prevention", slug: "valley-flashing-open-vs-closed", category: "Roof Repair", description: "Comparing open metal valleys vs closed-cut valleys—which is better for Bay Area weather conditions." },
  { title: "Attic Mold vs Roof Leak (2026): How to Tell the Difference", slug: "attic-mold-roof-leak-ventilation", category: "Roof Repair", description: "How to tell if attic mold is caused by a roof leak or poor ventilation, and the correct fix for each scenario." },
  { title: "How Long Does a Roof Last in California?", slug: "how-long-does-a-roof-last-california", category: "Roof Replacement", description: "Expected lifespans for asphalt shingles, tile, metal, and flat roofing systems in California's climate zones." },
  { title: "Best Time of Year for Roof Replacement in the Bay Area (2026)", slug: "best-time-of-year-roof-replacement-bay-area", category: "Roof Replacement", description: "Seasonal considerations for scheduling your roof replacement in the Bay Area—weather windows, pricing, and crew availability." },
  { title: "Emergency Roof Tarping (2026): What to Expect and What It Should Cost", slug: "emergency-roof-tarping-guide", category: "Roof Repair", description: "What to do when a storm damages your roof. Emergency tarping procedures, costs, and when to call a professional." },
  { title: "Ponding Water on Flat Roofs (2026): Causes, Risks, and Fixes", slug: "flat-roof-ponding-water-fix", category: "Flat Roofing", description: "Causes and solutions for standing water on flat roofs—drainage improvements, tapered insulation, and membrane options." },
  { title: "Scuppers vs Internal Drains (2026): Flat Roof Drainage Explained", slug: "flat-roof-drainage-scupper-vs-internal-drain", category: "Flat Roofing", description: "Comparing flat roof drainage systems: scuppers, internal drains, and their pros and cons for Bay Area buildings." },
  { title: "Gutter Cleaning Schedule (2026): How Often Bay Area Homes Should Be Cleaned", slug: "gutter-cleaning-schedule-bay-area", category: "Gutters", description: "How often to clean your gutters in the Bay Area based on tree coverage, roof type, and seasonal debris patterns." },
  { title: "Skylight Condensation & Fogging (2026): Fixes That Don't Involve Caulk", slug: "skylight-condensation-fogging-fixes", category: "Skylights", description: "Diagnosing and fixing skylight condensation problems—seal failures, ventilation issues, and replacement indicators." },
  { title: "Skylight Installation Cost Factors (Bay Area 2026)", slug: "skylight-installation-cost-factors", category: "Skylights", description: "Breaking down skylight installation costs: curb-mount vs deck-mount, sizing, flashing kits, and labor in the Bay Area." },
  { title: "Gutter Guards in the Bay Area (2026): Do They Work?", slug: "gutter-guards-pros-cons-bay-area", category: "Gutters", description: "Are gutter guards worth the investment? Comparing micro-mesh, screen, and foam types for Bay Area conditions." },
  { title: "Downspout & Drainage Solutions (2026)", slug: "downspout-drainage-solutions-bay-area", category: "Gutters", description: "Proper downspout sizing, placement, and underground drainage solutions to protect your foundation from water damage." },
  { title: "Skylight Repair vs Replacement (2026)", slug: "skylight-repair-vs-replacement", category: "Skylights", description: "When to repair a leaking skylight and when it's more cost-effective to replace the entire unit with modern options." },
  { title: "Velux Skylight Flashing Kits (2026)", slug: "velux-skylight-flashing-kit-guide", category: "Skylights", description: "A guide to Velux flashing kit models, compatibility, and proper installation for leak-free skylight performance." },
  { title: "TPO vs Modified Bitumen (2026)", slug: "flat-roof-tpo-vs-modified-bitumen", category: "Flat Roofing", description: "Head-to-head comparison of TPO single-ply and modified bitumen torch-down systems for Bay Area flat roofs." },
  { title: "Silicone vs Acrylic Roof Coatings (2026)", slug: "flat-roof-coatings-silicone-vs-acrylic", category: "Flat Roofing", description: "Choosing the right roof coating: silicone for ponding water resistance vs acrylic for UV protection and cost savings." },
  { title: "Roof Flashing Guide (2026)", slug: "roof-flashing-guide", category: "Roof Repair", description: "Everything homeowners need to know about step flashing, counter flashing, drip edge, and valley flashing." },
  { title: "How to Find a Roof Leak (2026)", slug: "how-to-find-roof-leak", category: "Roof Repair", description: "Practical techniques to trace a roof leak from interior staining back to the source on your roof." },
  { title: "Roof Repair in the Rainy Season (2026)", slug: "roof-repair-in-rainy-season-bay-area", category: "Roof Repair", description: "Can you repair a roof when it's raining? Emergency options, temporary fixes, and scheduling strategies." },
  { title: "Gutter Sizing & Slope Guide (2026)", slug: "gutter-sizing-slope-guide", category: "Gutters", description: "Calculating proper gutter size, downspout capacity, and slope angles for effective water management on your home." },
  { title: "Bay Area Roof Maintenance Checklist (2026)", slug: "bay-area-roof-maintenance-checklist", category: "Roofing Tips", description: "A seasonal maintenance checklist to keep your Bay Area roof in peak condition and maximize its lifespan." },
  { title: "Best Roofing Materials for Coastal Cities", slug: "best-roofing-materials-coastal-cities", category: "Materials", description: "Comparing shingle, tile, metal, and membrane options for homes in fog-belt and coastal Bay Area cities." },
  { title: "Best Roofing Materials for Bay Area Homes (Fog, Wind & Sun)", slug: "best-roofing-materials-bay-area", category: "Materials", description: "Compare shingles, flat roofing systems, and energy-efficient options for Bay Area weather." },
  { title: "How to Read a Roofing Estimate: What Should Be Included (and Red Flags)", slug: "how-to-read-roofing-estimate", category: "Pricing", description: "Use this checklist to compare roofing bids—scope, materials, ventilation, warranties, and the details that prevent surprise charges." },
  { title: "Insurance Roof Claims in California: What to Document and How to Avoid Delays", slug: "insurance-roof-claim-guide", category: "Insurance", description: "A homeowner-friendly guide to documenting roof damage, working with adjusters, and getting a clear scope and estimate for repairs." },
  { title: "California Cool Roof Requirements Explained (Bay Area Homeowners)", slug: "california-cool-roof-requirements", category: "Materials", description: "What cool roof means in California, when it applies to replacements, and how to choose compliant materials without overpaying." },
  ...cityGuideArticles,
];

const categoryIcons: Record<string, string> = {
  "Roof Repair": "fas fa-tools",
  "Roof Replacement": "fas fa-home",
  "Flat Roofing": "fas fa-layer-group",
  "Gutters": "fas fa-tint",
  "Skylights": "fas fa-sun",
  "Roofing Tips": "fas fa-lightbulb",
  "Materials": "fas fa-cubes",
  "Pricing": "fas fa-chart-line",
  "Permits & Codes": "fas fa-file-alt",
  "City Guides": "fas fa-map-marker-alt",
  "Insurance": "fas fa-shield-alt",
  "Field Notes": "fas fa-book",
};

const categoryColors: Record<string, string> = {
  "Roof Repair": "bg-brandOrange/10 text-brandOrange",
  "Roof Replacement": "bg-brandNavy/10 text-brandNavy",
  "Flat Roofing": "bg-brandBlue/10 text-brandBlue",
  "Gutters": "bg-blue-100 text-blue-600",
  "Skylights": "bg-yellow-100 text-yellow-600",
  "Roofing Tips": "bg-green-100 text-green-600",
  "Materials": "bg-purple-100 text-purple-600",
  "Pricing": "bg-emerald-100 text-emerald-600",
  "Permits & Codes": "bg-rose-100 text-rose-600",
  "City Guides": "bg-orange-100 text-orange-600",
  "Insurance": "bg-indigo-100 text-indigo-600",
  "Field Notes": "bg-teal-100 text-teal-600",
};

const popularTopics = [
  { name: "City Guides", count: cityGuideArticles.length, tagline: "Local roofing info by city", icon: "fas fa-map-marker-alt", bgColor: "bg-orange-50", textColor: "text-orange-600" },
  { name: "Roof Repair", count: 9, tagline: "Leaks, flashing & emergency fixes", icon: "fas fa-tools", bgColor: "bg-brandOrange/10", textColor: "text-brandOrange" },
  { name: "Roof Replacement", count: 4, tagline: "Full system upgrades & reroof", icon: "fas fa-home", bgColor: "bg-brandNavy/10", textColor: "text-brandNavy" },
  { name: "Flat Roofing", count: 4, tagline: "TPO, torch-down & coatings", icon: "fas fa-layer-group", bgColor: "bg-blue-50", textColor: "text-blue-600" },
  { name: "Skylights", count: 4, tagline: "Install, repair & maintenance", icon: "fas fa-sun", bgColor: "bg-yellow-50", textColor: "text-yellow-600" },
  { name: "Gutters", count: 4, tagline: "Cleaning, guards & drainage", icon: "fas fa-tint", bgColor: "bg-blue-50", textColor: "text-blue-600" },
];

const relatedServices = [
  { name: "Residential Roofing", href: "/residential/", icon: "fas fa-home", tagline: "Shingle & tile roof systems" },
  { name: "Commercial Roofing", href: "/commercial/", icon: "fas fa-building", tagline: "Large-scale roof solutions" },
  { name: "Flat Roofing", href: "/flat/", icon: "fas fa-layer-group", tagline: "TPO, modified bitumen & more" },
  { name: "Roof Repair", href: "/roof-repair/", icon: "fas fa-tools", tagline: "Leaks, patches & emergency" },
  { name: "Gutters & Drainage", href: "/gutters/", icon: "fas fa-tint", tagline: "Guards, cleaning & downspouts" },
  { name: "Skylights", href: "/skylights/", icon: "fas fa-sun", tagline: "Installation & repair" },
];

const allArticles = [...featuredArticles, ...articles];
const findTitle = (slug: string) => allArticles.find(a => a.slug === slug)?.title || slug;

const readingPaths = [
  {
    id: "roof-repair",
    title: "Complete Roof Repair Masterclass",
    description: "From inspection to flashing — master every aspect of roof repair.",
    icon: "fas fa-tools",
    readTime: "~20 min read",
    slugs: ["roof-inspection-checklist-bay-area", "how-to-find-roof-leak", "chimney-flashing-repair-guide", "roof-flashing-guide"],
  },
  {
    id: "roof-replacement",
    title: "Roof Replacement Decision Guide",
    description: "Know when to replace, how long roofs last, and the best timing.",
    icon: "fas fa-home",
    readTime: "~18 min read",
    slugs: ["signs-you-need-roof-replacement-bay-area", "roof-repair-vs-replacement", "how-long-does-a-roof-last-california", "best-time-of-year-roof-replacement-bay-area"],
  },
  {
    id: "flat-roof",
    title: "Flat Roof Systems Deep Dive",
    description: "Compare membranes, drainage, and coatings for flat roof projects.",
    icon: "fas fa-layer-group",
    readTime: "~22 min read",
    slugs: ["flat-roof-tpo-vs-modified-bitumen", "flat-roof-ponding-water-fix", "flat-roof-drainage-scupper-vs-internal-drain", "flat-roof-coatings-silicone-vs-acrylic"],
  },
  {
    id: "skylights",
    title: "Skylight Owner's Handbook",
    description: "Everything about skylight installation, repair, and maintenance.",
    icon: "fas fa-sun",
    readTime: "~16 min read",
    slugs: ["skylight-condensation-fogging-fixes", "skylight-installation-cost-factors", "skylight-repair-vs-replacement", "velux-skylight-flashing-kit-guide"],
  },
  {
    id: "gutters",
    title: "Gutter & Drainage Essentials",
    description: "Keep water flowing right with proper gutter care and sizing.",
    icon: "fas fa-tint",
    readTime: "~15 min read",
    slugs: ["gutter-cleaning-schedule-bay-area", "gutter-guards-pros-cons-bay-area", "downspout-drainage-solutions-bay-area", "gutter-sizing-slope-guide"],
  },
];

const faqItems = [
  { q: "How much does a new roof cost in the Bay Area?", a: "$15,000–$35,000 for residential roofs depending on size, materials, and complexity. Commercial projects vary widely.", slug: "bay-area-roofing-cost-factors" },
  { q: "Should I repair or replace my roof?", a: "If repair costs exceed 1/3 of replacement cost, or your roof is past 80% of its expected lifespan, replacement is usually smarter.", slug: "roof-repair-vs-replacement" },
  { q: "Do I need a permit to reroof in San Francisco?", a: "Yes, SF requires a building permit for reroofing. The process takes 1–3 weeks and costs $300–$600 for residential.", slug: "san-francisco-roofing-permits" },
  { q: "How long does a roof last in California?", a: "Asphalt shingles 20–30 years, tile 40–75 years, metal 40–60 years. Climate zone and maintenance matter.", slug: "how-long-does-a-roof-last-california" },
  { q: "When is the best time to replace a roof?", a: "May–June and September–October offer the best weather windows and contractor availability in the Bay Area.", slug: "best-time-of-year-roof-replacement-bay-area" },
  { q: "What should I do if my roof leaks during a storm?", a: "Don't get on the roof. Place buckets, move valuables, and call a professional for emergency tarping as soon as safe.", slug: "emergency-roof-tarping-guide" },
];

const cityGuides = [
  { name: "San Francisco", slug: "san-francisco", tagline: "Fog-belt roofing specialists" },
  { name: "San Jose", slug: "san-jose", tagline: "South Bay's largest city" },
  { name: "Oakland", slug: "oakland", tagline: "East Bay roofing experts" },
  { name: "Palo Alto", slug: "palo-alto", tagline: "Peninsula premium service" },
  { name: "Daly City", slug: "daly-city", tagline: "Coastal wind protection" },
  { name: "Mountain View", slug: "mountain-view", tagline: "Silicon Valley roofing" },
  { name: "Redwood City", slug: "redwood-city", tagline: "Mid-Peninsula coverage" },
  { name: "Fremont", slug: "fremont", tagline: "Tri-City area service" },
  { name: "San Rafael", slug: "san-rafael", tagline: "Marin County's best" },
  { name: "Walnut Creek", slug: "walnut-creek", tagline: "Contra Costa premium" },
  { name: "San Mateo", slug: "san-mateo", tagline: "Peninsula coverage" },
  { name: "Berkeley", slug: "berkeley", tagline: "East Bay historic homes" },
];

export default function Blog() {
  useSEO("Roofing Blog — Bay Area Tips & Cost Guides | ROOF EXPRESS", "Expert roofing articles covering Bay Area costs, materials, maintenance schedules, and city-specific guides.");
  const [location] = useLocation();
  const getInitialCategory = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      if (cat && categories.includes(cat)) return cat;
    }
    return "All";
  };
  const [activeFilter, setActiveFilter] = useState(getInitialCategory);
  const getInitialSearch = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("q") || "";
    }
    return "";
  };
  const [searchQuery, setSearchQuery] = useState(getInitialSearch);
  const [openPaths, setOpenPaths] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && categories.includes(cat)) {
      setActiveFilter(cat);
    }
    const q = params.get("q");
    if (q) setSearchQuery(q);
  }, [location]);

  const togglePath = (id: string) => {
    setOpenPaths(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeFilter === "All" || article.category === activeFilter;
    const matchesSearch = searchQuery === "" || article.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredFeatured = featuredArticles.filter((article) => {
    const matchesCategory = activeFilter === "All" || article.category === activeFilter;
    const matchesSearch = searchQuery === "" || article.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-brandNavy text-white pt-32 pb-20 md:pt-44 md:pb-32 lg:pt-52 lg:pb-40 px-4 md:px-6" data-testid="section-blog-hero">
        <div className="absolute inset-0">
          <img src="/images/roofing-aerial-neighborhood.webp" alt="Bay Area roofing neighborhood" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={450} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 text-center px-4 md:px-0">
          <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4 md:mb-6">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
              <i aria-hidden="true" className="fas fa-book-open mr-2"></i> Expert Resources
            </span>
          </div>
     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-black mb-5 md:mb-8 leading-[0.9] tracking-tighter text-white drop-shadow-2xl" data-testid="text-blog-title">
            Roofing Guides for <span className="text-brandOrangeLight">Bay Area Homeowners (2026)</span>
          </h1>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto font-medium" data-testid="text-blog-subtitle">
            Fast, practical guides for Bay Area homeowners. From repair tips and material comparisons to city-specific permit guides and cost breakdowns.
          </p>
        </div>
      </section>

      {/* 2. Quick links */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/roof-repair" className="group flex items-center gap-4 p-6 bg-brandGrey rounded-2xl hover:shadow-lg transition" data-testid="link-quick-repair">
              <div className="w-12 h-12 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange text-xl group-hover:scale-110 transition">
                <i aria-hidden="true" className="fas fa-tools"></i>
              </div>
              <div>
                <span className="font-black text-brandNavy uppercase text-sm block">Roof Repair</span>
                <p className="text-xs text-slate-500 font-medium">Leaks, flashing & emergency fixes</p>
              </div>
            </Link>
            <Link href="/residential" className="group flex items-center gap-4 p-6 bg-brandGrey rounded-2xl hover:shadow-lg transition" data-testid="link-quick-replacement">
              <div className="w-12 h-12 bg-brandNavy/10 rounded-xl flex items-center justify-center text-brandNavy text-xl group-hover:scale-110 transition">
                <i aria-hidden="true" className="fas fa-home"></i>
              </div>
              <div>
                <span className="font-black text-brandNavy uppercase text-sm block">Replacement</span>
                <p className="text-xs text-slate-500 font-medium">Full system upgrades & reroof</p>
              </div>
            </Link>
            <Link href="/financing" className="group flex items-center gap-4 p-6 bg-brandGrey rounded-2xl hover:shadow-lg transition" data-testid="link-quick-financing">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-xl group-hover:scale-110 transition">
                <i aria-hidden="true" className="fas fa-money-bill-wave"></i>
              </div>
              <div>
                <span className="font-black text-brandNavy uppercase text-sm block">Financing</span>
                <p className="text-xs text-slate-500 font-medium">Payment plans & options</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Popular Topics */}
      <section className="py-12 bg-white" data-testid="section-popular-topics">
        <div className="container mx-auto px-6 max-w-screen-xl">
   <h2 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-8">
            <i aria-hidden="true" className="fas fa-fire text-brandOrange mr-2"></i> Popular Topics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularTopics.map((topic) => (
              <button
                key={topic.name}
                onClick={() => setActiveFilter(topic.name)}
                className={`group p-5 rounded-2xl border-2 transition-all duration-300 text-left hover:shadow-lg hover:-translate-y-1 ${
                  activeFilter === topic.name
                    ? "border-brandOrange bg-brandOrange/5 shadow-lg"
                    : "border-transparent bg-brandGrey hover:border-brandOrange/20"
                }`}
                data-testid={`topic-card-${topic.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className={`w-10 h-10 ${topic.bgColor} rounded-xl flex items-center justify-center ${topic.textColor} text-lg mb-3 group-hover:scale-110 transition`}>
                  <i aria-hidden="true" className={topic.icon}></i>
                </div>
                <h3 className="font-black text-brandNavy text-sm uppercase mb-1">{topic.name}</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">{topic.tagline}</p>
                <span className="inline-block bg-brandNavy/5 text-brandNavy text-[10px] font-black px-2 py-0.5 rounded-full">
                  {topic.count} articles
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Search/filter bar + category tabs */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative w-full md:w-96">
              <i aria-hidden="true" className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"></i>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brandOrange/50 focus:border-brandOrange"
                data-testid="input-search"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2" data-testid="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition ${
                  activeFilter === cat
                    ? "bg-brandOrange text-white shadow-lg"
                    : "bg-brandGrey text-slate-500 hover:bg-brandOrange/10 hover:text-brandOrange"
                }`}
                data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Related Services strip */}
      <section className="py-8 bg-brandGrey border-t border-gray-100" data-testid="section-related-services">
        <div className="container mx-auto px-6 max-w-screen-xl">
   <h2 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-6">
            <i aria-hidden="true" className="fas fa-concierge-bell text-brandOrange mr-2"></i> Related Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-brandOrange/20"
                data-testid={`link-service-${service.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-10 h-10 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange text-lg mx-auto mb-3 group-hover:scale-110 transition">
                  <i aria-hidden="true" className={service.icon}></i>
                </div>
                <h3 className="font-black text-brandNavy text-xs uppercase mb-1">{service.name}</h3>
                <p className="text-[10px] text-slate-500 font-medium">{service.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Field Notes card */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <Link href="/blog/field-notes" className="block group" data-testid="link-field-notes">
            <div className="bg-gradient-to-r from-brandNavy to-brandNavy/90 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-brandOrange rounded-2xl flex items-center justify-center text-white text-3xl flex-shrink-0">
                <i aria-hidden="true" className="fas fa-book"></i>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-black text-white uppercase italic mb-1">Field Notes</h3>
                <p className="text-slate-300 text-sm font-medium">The complete A-Z glossary of roofing terms, materials, and techniques. Your go-to reference for understanding every aspect of your roof.</p>
              </div>
              <div className="flex-shrink-0">
                <span className="bg-brandOrange text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest group-hover:bg-white group-hover:text-brandOrange transition">
                  Explore Field Notes <i aria-hidden="true" className="fas fa-arrow-right ml-2"></i>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 7. Featured Guides */}
      {filteredFeatured.length > 0 && (
        <section className="py-10 bg-white" data-testid="section-featured">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-6">
              <i aria-hidden="true" className="fas fa-star text-brandOrange mr-2"></i> Featured Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredFeatured.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex items-start gap-4 bg-brandGrey rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-brandOrange/20"
                  data-testid={`card-featured-${article.slug}`}
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-brandOrange text-lg shrink-0 shadow-sm group-hover:scale-110 transition">
                    <i aria-hidden="true" className={article.icon}></i>
                  </div>
                  <div className="min-w-0">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider mb-1.5 ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}>
                      {article.category}
                    </span>
                    <h3 className="text-sm font-black text-brandNavy mb-1 group-hover:text-brandOrange transition leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">{article.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Reading Paths / Topic Guides */}
      <section className="py-12 bg-brandGrey" data-testid="section-reading-paths">
        <div className="container mx-auto px-6 max-w-screen-xl">
   <h2 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-8">
            <i aria-hidden="true" className="fas fa-route text-brandOrange mr-2"></i> Guided Reading Paths
          </h2>
          <div className="space-y-4">
            {readingPaths.map((path) => {
              const isOpen = openPaths.includes(path.id);
              return (
                <div key={path.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition" data-testid={`reading-path-${path.id}`}>
                  <button
                    onClick={() => togglePath(path.id)}
                    className="w-full flex items-center gap-4 p-6 text-left"
                    data-testid={`toggle-path-${path.id}`}
                  >
                    <div className="w-12 h-12 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange text-xl flex-shrink-0">
                      <i aria-hidden="true" className={path.icon}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-black text-brandNavy uppercase text-base mb-1">{path.title}</h3>
                      <p className="text-sm text-slate-500 font-medium">{path.description}</p>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="hidden md:inline-block bg-brandNavy/5 text-brandNavy text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                        {path.slugs.length} articles · {path.readTime}
                      </span>
                      <i aria-hidden="true" className={`fas fa-chevron-down text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}></i>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-gray-100 pt-4">
                        <ol className="space-y-3">
                          {path.slugs.map((slug, idx) => (
                            <li key={slug} className="flex items-center gap-3">
                              <span className="w-7 h-7 bg-brandOrange rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                                {idx + 1}
                              </span>
                              <Link
                                href={`/blog/${slug}`}
                                className="text-sm font-bold text-brandNavy hover:text-brandOrange transition"
                                data-testid={`link-path-article-${slug}`}
                              >
                                {findTitle(slug)}
                              </Link>
                            </li>
                          ))}
                        </ol>
                        <p className="mt-4 text-xs text-slate-500 font-bold md:hidden">
                          {path.slugs.length} articles · {path.readTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. All Articles — compact list */}
      <section className="py-12 bg-white" data-testid="section-articles">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-6">
            <i aria-hidden="true" className="fas fa-newspaper text-brandOrange mr-2"></i> All Articles
            {activeFilter !== "All" && <span className="text-brandOrange ml-2">— {activeFilter}</span>}
            {searchQuery && <span className="text-brandOrange ml-2">— "{searchQuery}"</span>}
            <span className="ml-2 text-slate-300">({filteredArticles.length})</span>
          </h2>
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16" data-testid="text-no-results">
              <i aria-hidden="true" className="fas fa-search text-4xl text-slate-300 mb-4"></i>
              <p className="text-slate-500 font-bold">No articles match your filter. Try a different category or search term.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
              {filteredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex items-center gap-4 px-5 py-3.5 hover:bg-brandGrey/50 transition-colors"
                  data-testid={`card-article-${article.slug}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}>
                    <i aria-hidden="true" className={categoryIcons[article.category] || "fas fa-file"}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-brandNavy group-hover:text-brandOrange transition truncate">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium truncate hidden md:block">{article.description}</p>
                  </div>
                  <span className={`hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shrink-0 ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}>
                    {article.category}
                  </span>
                  <i aria-hidden="true" className="fas fa-chevron-right text-slate-300 text-xs shrink-0 group-hover:text-brandOrange transition"></i>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 10. FAQ Spotlight */}
      <section className="py-16 bg-brandGrey" data-testid="section-faq-spotlight">
        <div className="container mx-auto px-6 max-w-screen-xl">
   <h2 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-2">
            <i aria-hidden="true" className="fas fa-question-circle text-brandOrange mr-2"></i> Quick Answers from Our Experts
          </h2>
          <p className="text-slate-500 text-sm font-medium mb-8">Common roofing questions answered by our Bay Area team.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqItems.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-brandOrange/20" data-testid={`faq-item-${idx}`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-8 h-8 bg-brandOrange/10 rounded-full flex items-center justify-center text-brandOrange text-sm flex-shrink-0 mt-0.5">
                    <i aria-hidden="true" className="fas fa-question"></i>
                  </span>
                  <h3 className="font-black text-brandNavy text-sm leading-snug">{faq.q}</h3>
                </div>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4 pl-11">{faq.a}</p>
                <div className="pl-11">
                  <Link
                    href={`/blog/${faq.slug}`}
                    className="text-xs font-black text-brandOrange uppercase tracking-widest hover:underline"
                    data-testid={`link-faq-${faq.slug}`}
                  >
                    Read Full Guide <i aria-hidden="true" className="fas fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. City Guides Spotlight */}
      <section className="py-16 bg-white" data-testid="section-city-guides">
        <div className="container mx-auto px-6 max-w-screen-xl">
   <h2 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-2">
            <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange mr-2"></i> City-Specific Roofing Guides
          </h2>
          <p className="text-slate-500 text-sm font-medium mb-8">Local roofing expertise for your neighborhood.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cityGuides.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="group bg-brandGrey rounded-2xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-brandOrange/20"
                data-testid={`link-city-guide-${city.slug}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-brandOrange/10 rounded-lg flex items-center justify-center text-brandOrange text-sm group-hover:scale-110 transition">
                    <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                  </div>
                  <h3 className="font-black text-brandNavy text-sm uppercase">{city.name}</h3>
                </div>
                <p className="text-xs text-slate-500 font-medium">{city.tagline}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/city-roofing-guides"
              className="inline-block bg-brandNavy text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brandOrange transition"
              data-testid="link-view-all-cities"
            >
              View All 37 Cities <i aria-hidden="true" className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Before & After Showcase */}
      <BeforeAfterShowcase />

      {/* 13. CTASection */}
      <CTASection />

      {/* 13. NearbyAreas */}
      <NearbyAreas />
    </Layout>
  );
}

import { SITE_CONFIG } from "./site-config";
import { CITY_GEO } from "./city-geo";

const CITY_SLUGS = [
  "atherton", "belmont", "brisbane", "burlingame", "campbell", "colma", "concord",
  "daly-city", "foster-city", "half-moon-bay", "menlo-park", "millbrae", "pacifica",
  "portola-valley", "redwood-city", "san-bruno", "san-carlos", "san-mateo",
  "south-san-francisco", "woodside", "cupertino", "los-altos", "los-altos-hills",
  "los-gatos", "milpitas", "mountain-view", "palo-alto", "san-jose", "santa-clara",
  "saratoga", "sunnyvale", "alameda", "berkeley", "dublin", "fremont", "hayward",
  "livermore", "newark", "oakland", "pleasanton", "richmond", "san-leandro",
  "union-city", "san-francisco", "mill-valley", "sausalito", "tiburon", "walnut-creek",
  "orinda", "lafayette", "san-ramon", "danville",
  "san-rafael", "novato", "corte-madera", "larkspur", "fairfax", "san-anselmo", "belvedere", "kentfield",
  "east-palo-alto", "hillsborough", "pescadero",
];

const CITY_IMAGES: Record<string, string> = {
  "san-francisco": "/images/san-francisco-aerial.webp",
  "san-jose": "/images/san-jose-aerial.webp",
  "san-bruno": "/images/san-bruno-aerial.webp",
  "san-carlos": "/images/san-carlos-aerial.webp",
  "san-leandro": "/images/san-leandro-aerial.webp",
  "san-mateo": "/images/san-mateo-aerial.webp",
  "santa-clara": "/images/santa-clara-aerial.webp",
  "saratoga": "/images/saratoga-aerial.webp",
  "sunnyvale": "/images/sunnyvale-aerial.webp",
  "south-san-francisco": "/images/south-san-francisco-aerial.webp",
  "tiburon": "/images/tiburon-aerial.webp",
  "sausalito": "/images/sausalito-aerial.webp",
  "hayward": "/images/hayward-aerial.webp",
  "los-altos": "/images/los-altos-aerial.webp",
  "los-altos-hills": "/images/los-altos-hills-aerial.webp",
  "menlo-park": "/images/menlo-park-aerial.webp",
  "millbrae": "/images/millbrae-aerial.webp",
  "milpitas": "/images/milpitas-aerial.webp",
  "oakland": "/images/oakland-aerial.webp",
  "pacifica": "/images/pacifica-aerial.webp",
  "palo-alto": "/images/palo-alto-aerial.webp",
  "pleasanton": "/images/pleasanton-aerial.webp",
  "redwood-city": "/images/redwood-city-aerial.webp",
  "livermore": "/images/livermore-aerial.webp",
  "campbell": "/images/campbell-aerial.webp",
  "alameda": "/images/alameda-aerial.webp",
  "albany": "/images/albany-aerial.webp",
  "atherton": "/images/atherton-aerial.webp",
  "brisbane": "/images/brisbane-aerial.webp",
  "belmont": "/images/belmont-aerial.webp",
  "berkeley": "/images/berkeley-aerial.webp",
  "burlingame": "/images/burlingame-aerial.webp",
  "colma": "/images/colma-aerial.webp",
  "cupertino": "/images/cupertino-aerial.webp",
  "daly-city": "/images/daly-city-aerial.webp",
  "los-gatos": "/images/los-gatos-aerial.webp",
  "mountain-view": "/images/mountain-view-aerial.webp",
  "fremont": "/images/fremont-aerial.webp",
  "foster-city": "/images/foster-city-aerial.webp",
  "half-moon-bay": "/images/half-moon-bay-aerial.webp",
  "newark": "/images/newark-aerial.webp",
  "portola-valley": "/images/portola-valley-aerial.webp",
  "richmond": "/images/richmond-aerial.webp",
  "union-city": "/images/union-city-aerial.webp",
  "woodside": "/images/woodside-aerial.webp",
  "concord": "/images/concord-aerial.webp",
  "danville": "/images/danville-aerial.webp",
  "dublin": "/images/dublin-aerial.webp",
  "lafayette": "/images/lafayette-aerial.webp",
  "mill-valley": "/images/mill-valley-aerial.webp",
  "orinda": "/images/orinda-aerial.webp",
  "san-ramon": "/images/san-ramon-aerial.webp",
  "walnut-creek": "/images/walnut-creek-aerial.webp",
  "san-rafael": "/images/san-rafael-aerial.webp",
  "novato": "/images/novato-aerial.webp",
  "corte-madera": "/images/corte-madera-aerial.webp",
  "larkspur": "/images/larkspur-aerial.webp",
  "fairfax": "/images/fairfax-aerial.webp",
  "san-anselmo": "/images/san-anselmo-aerial.webp",
  "belvedere": "/images/belvedere-aerial.webp",
  "kentfield": "/images/kentfield-aerial.webp",
  "east-palo-alto": "/images/east-palo-alto-aerial.webp",
  "hillsborough": "/images/hillsborough-aerial.webp",
  "pescadero": "/images/pescadero-aerial.webp",
};

function getCityImage(slug: string): string {
  return CITY_IMAGES[slug] || SITE_CONFIG.defaultImage;
}

const CITY_SEO_TITLES: Record<string, string> = {
  "san-francisco": "San Francisco Roofing Contractor — 5-Star Rated | ROOF EXPRESS",
  "san-jose": "San Jose Roofing Contractor — Top Rated Roofer | ROOF EXPRESS",
  "oakland": "Oakland Roofing Contractor — Licensed & Insured | ROOF EXPRESS",
  "palo-alto": "Palo Alto Roofing Contractor — Diamond Certified | ROOF EXPRESS",
  "daly-city": "Daly City Roofing Contractor — Best Local Roofer | ROOF EXPRESS",
  "pacifica": "Pacifica Roofing Contractor — Coastal Roof Expert | ROOF EXPRESS",
  "millbrae": "Millbrae Roofing Contractor — Certified & Reliable | ROOF EXPRESS",
  "mountain-view": "Mountain View Roofing Contractor — Expert Roofer | ROOF EXPRESS",
  "menlo-park": "Menlo Park Roofing Contractor — Premium Roofer | ROOF EXPRESS",
  "los-altos": "Los Altos Roofing Contractor — Quality Guaranteed | ROOF EXPRESS",
  "milpitas": "Milpitas Roofing Contractor — Fast & Affordable | ROOF EXPRESS",
  "los-gatos": "Los Gatos Roofing Contractor — Award-Winning | ROOF EXPRESS",
  "sunnyvale": "Sunnyvale Roofing Contractor — Reliable & Local | ROOF EXPRESS",
  "santa-clara": "Santa Clara Roofing Contractor — #1 Local Roofer | ROOF EXPRESS",
  "cupertino": "Cupertino Roofing Contractor — Experienced Pro | ROOF EXPRESS",
  "campbell": "Campbell Roofing Contractor — Your Local Roofer | ROOF EXPRESS",
  "saratoga": "Saratoga Roofing Contractor — Luxury Roof Expert | ROOF EXPRESS",
  "redwood-city": "Redwood City Roofing Contractor — Free Estimates | ROOF EXPRESS",
  "san-mateo": "San Mateo Roofing Contractor — Trusted Since 2017 | ROOF EXPRESS",
  "burlingame": "Burlingame Roofing Contractor — Top Rated Local | ROOF EXPRESS",
  "san-bruno": "San Bruno Roofing Contractor — Dependable Roofer | ROOF EXPRESS",
  "south-san-francisco": "South SF Roofing Contractor — Professional Roofer | ROOF EXPRESS",
  "brisbane": "Brisbane Roofing Contractor — Certified Local Pro | ROOF EXPRESS",
  "colma": "Colma Roofing Contractor — Honest & Affordable | ROOF EXPRESS",
  "foster-city": "Foster City Roofing Contractor — Best Rated | ROOF EXPRESS",
  "belmont": "Belmont Roofing Contractor — Skilled & Licensed | ROOF EXPRESS",
  "san-carlos": "San Carlos Roofing Contractor — Community Trusted | ROOF EXPRESS",
  "woodside": "Woodside Roofing Contractor — Estate Roof Specialist | ROOF EXPRESS",
  "atherton": "Atherton Roofing Contractor — High-End Roofer | ROOF EXPRESS",
  "portola-valley": "Portola Valley Roofing Contractor — Local Expert | ROOF EXPRESS",
  "half-moon-bay": "Half Moon Bay Roofing Contractor — Storm-Ready | ROOF EXPRESS",
  "berkeley": "Berkeley Roofing Contractor — Historic Roof Expert | ROOF EXPRESS",
  "hayward": "Hayward Roofing Contractor — Budget-Friendly Pro | ROOF EXPRESS",
  "fremont": "Fremont Roofing Contractor — Same-Day Inspections | ROOF EXPRESS",
  "union-city": "Union City Roofing Contractor — Fast & Reliable | ROOF EXPRESS",
  "newark": "Newark Roofing Contractor — Affordable Quality | ROOF EXPRESS",
  "richmond": "Richmond Roofing Contractor — Licensed Local Pro | ROOF EXPRESS",
  "los-altos-hills": "Los Altos Hills Roofing Contractor — Elite Roofer | ROOF EXPRESS",
  "san-leandro": "San Leandro Roofing Contractor — Roof Repair Pro | ROOF EXPRESS",
  "livermore": "Livermore Roofing Contractor — Cool Roof Specialist | ROOF EXPRESS",
  "pleasanton": "Pleasanton Roofing Contractor — 50-Year Warranty | ROOF EXPRESS",
  "dublin": "Dublin Roofing Contractor — GAF Master Elite | ROOF EXPRESS",
  "alameda": "Alameda Roofing Contractor — Waterproof Experts | ROOF EXPRESS",
  "sausalito": "Sausalito Roofing Contractor — Marine-Grade Roofs | ROOF EXPRESS",
  "mill-valley": "Mill Valley Roofing Contractor — Nature-Tough Roofs | ROOF EXPRESS",
  "tiburon": "Tiburon Roofing Contractor — Coastal Defense Pro | ROOF EXPRESS",
  "concord": "Concord Roofing Contractor — Heat-Ready Systems | ROOF EXPRESS",
  "walnut-creek": "Walnut Creek Roofing Contractor — Premium Service | ROOF EXPRESS",
  "orinda": "Orinda Roofing Contractor — Fire-Safe Roofing | ROOF EXPRESS",
  "lafayette": "Lafayette Roofing Contractor — Neighborhood Favorite | ROOF EXPRESS",
  "san-ramon": "San Ramon Roofing Contractor — Family-Owned Roofer | ROOF EXPRESS",
  "danville": "Danville Roofing Contractor — Luxury Home Roofer | ROOF EXPRESS",
  "san-rafael": "San Rafael Roofing Contractor — Marin County's Best | ROOF EXPRESS",
  "novato": "Novato Roofing Contractor — Trusted Local Roofer | ROOF EXPRESS",
  "corte-madera": "Corte Madera Roofing Contractor — Premium Roofer | ROOF EXPRESS",
  "larkspur": "Larkspur Roofing Contractor — Quality Guaranteed | ROOF EXPRESS",
  "fairfax": "Fairfax Roofing Contractor — Local Marin Roofer | ROOF EXPRESS",
  "san-anselmo": "San Anselmo Roofing Contractor — Certified Pro | ROOF EXPRESS",
  "belvedere": "Belvedere Roofing Contractor — Luxury Roof Expert | ROOF EXPRESS",
  "kentfield": "Kentfield Roofing Contractor — Top-Rated Roofer | ROOF EXPRESS",
  "east-palo-alto": "East Palo Alto Roofing — Licensed Contractor | ROOF EXPRESS",
  "hillsborough": "Hillsborough Roofing — Luxury Home Roofer | ROOF EXPRESS",
  "pescadero": "Pescadero Roofing — Coastal Roof Expert | ROOF EXPRESS",
};

function buildGuideTitle(cityName: string): string {
  const base = `${cityName} Roofing Guide 2026`;
  const full = `${base} — Costs, Permits & Materials | ROOF EXPRESS`;
  if (full.length <= 60) return full;
  const medium = `${base} — Costs & Permits | ROOF EXPRESS`;
  if (medium.length <= 60) return medium;
  return `${base} | ROOF EXPRESS`;
}

const CITY_GUIDE_SEO_TITLES: Record<string, string> = {};

const BLOG_SLUGS = [
  "bay-area-roofing-cost-factors",
  "roof-repair-vs-replacement",
  "san-francisco-roofing-permits",
  "roof-inspection-checklist-bay-area",
  "signs-you-need-roof-replacement-bay-area",
  "roof-ventilation-guide-ridge-soffit",
  "ice-and-water-shield-california-guide",
  "chimney-flashing-repair-guide",
  "valley-flashing-open-vs-closed",
  "attic-mold-roof-leak-ventilation",
  "how-long-does-a-roof-last-california",
  "best-time-of-year-roof-replacement-bay-area",
  "emergency-roof-tarping-guide",
  "flat-roof-ponding-water-fix",
  "flat-roof-drainage-scupper-vs-internal-drain",
  "gutter-cleaning-schedule-bay-area",
  "skylight-condensation-fogging-fixes",
  "skylight-installation-cost-factors",
  "gutter-guards-pros-cons-bay-area",
  "downspout-drainage-solutions-bay-area",
  "skylight-repair-vs-replacement",
  "velux-skylight-flashing-kit-guide",
  "flat-roof-tpo-vs-modified-bitumen",
  "flat-roof-coatings-silicone-vs-acrylic",
  "roof-flashing-guide",
  "how-to-find-roof-leak",
  "roof-repair-in-rainy-season-bay-area",
  "gutter-sizing-slope-guide",
  "bay-area-roof-maintenance-checklist",
  "best-roofing-materials-coastal-cities",
  "best-roofing-materials-bay-area",
  "how-to-read-roofing-estimate",
  "insurance-roof-claim-guide",
  "california-cool-roof-requirements",
  "field-notes-asphalt-shingles",
  "field-notes-flat-roof-systems",
  "field-notes-roof-flashing",
  "field-notes-roof-ventilation",
  "field-notes-roof-permits-bay-area",
  "roof-replacement-cost-san-francisco",
  "flat-roof-vs-shingle-california",
  "how-to-choose-roofing-contractor-bay-area",
];

const STATIC_PAGES = [
  "/", "/about", "/story", "/reviews", "/contact", "/methodology", "/financing",
  "/gallery", "/faq", "/blog", "/blog/field-notes", "/sitemap", "/service-areas", "/city-roofing-guides",
  "/privacy", "/terms", "/services", "/residential", "/commercial", "/flat",
  "/roof-repair", "/roof-replacement", "/gutters", "/skylights", "/emergency",
];

const staticMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Bay Area Roofing Contractor — Free Estimates | ROOF EXPRESS",
    description: "Best roofing company near you in the Bay Area. 5-star rated roofer for roof repair, replacement, flat roofing, gutters & skylights. Diamond Certified, GAF Master Elite, CSLB #1072766. Free estimates.",
  },
  "/about": {
    title: "About Us — Diamond Certified Bay Area Roofer | ROOF EXPRESS",
    description: "Meet the ROOF EXPRESS team — Diamond Certified, GAF Master Elite, CertainTeed Select ShingleMaster. 5,000+ projects. Bay Area's trusted roofer since 2017.",
  },
  "/story": {
    title: "Our Story — Bay Area Roofing Since 2017 | ROOF EXPRESS",
    description: "How ROOF EXPRESS grew from a single crew in 2017 to the Bay Area's top-rated roofing company. Diamond Certified, locally owned, community driven.",
  },
  "/reviews": {
    title: "Customer Reviews — 5-Star Rated Roofer | ROOF EXPRESS",
    description: "Hundreds of verified 5-star reviews on Google, Yelp & Diamond Certified. See why Bay Area homeowners trust ROOF EXPRESS.",
  },
  "/contact": {
    title: "Contact Us — Free Roofing Estimate Bay Area | ROOF EXPRESS",
    description: "Get a free roofing estimate from ROOF EXPRESS. Same-day inspections, 24-hour digital quotes. Call 650-666-5554 or book online.",
  },
  "/methodology": {
    title: "Our Roofing Process — 3-Checkpoint Quality System | ROOF EXPRESS",
    description: "ROOF EXPRESS 3-checkpoint methodology: rapid tear-off, mid-point inspection, final audit. Most roofs completed in 2-3 days.",
  },
  "/financing": {
    title: "Roofing Financing — $0 Down, Flexible Payments | ROOF EXPRESS",
    description: "Finance your new roof with $0 down through Wisetack. Up to $25,000, flexible terms, soft credit check. Apply in minutes.",
  },
  "/gallery": {
    title: "Project Gallery — Before & After Bay Area Roofs | ROOF EXPRESS",
    description: "Browse 150+ completed roofing projects. Before-and-after photos of residential & commercial work across the Bay Area.",
  },
  "/faq": {
    title: "Roofing FAQ — Costs, Timelines & Materials | ROOF EXPRESS",
    description: "Answers to common Bay Area roofing questions about costs, permits, timelines, materials, and choosing a contractor.",
  },
  "/blog": {
    title: "Roofing Blog — Bay Area Tips & Cost Guides | ROOF EXPRESS",
    description: "Expert roofing articles covering Bay Area costs, materials, maintenance schedules, and city-specific guides.",
  },
  "/blog/field-notes": {
    title: "Field Notes — Roofing Knowledge Base & Job-Site Insights | ROOF EXPRESS",
    description: "Real roofing field notes from Bay Area job sites. Material breakdowns, installation techniques, shingle comparisons, flat roof systems, ventilation, flashing, and permit guides — documented by our Diamond Certified crew.",
  },
  "/sitemap": {
    title: "Sitemap — All Pages | ROOF EXPRESS",
    description: "Complete directory of all pages on the ROOF EXPRESS website.",
  },
  "/service-areas": {
    title: "63 Bay Area Cities We Serve — Roofing Coverage Map | ROOF EXPRESS",
    description: "ROOF EXPRESS serves 63 Bay Area cities across 7 regions. Find your city for local roofing services, free estimates, and same-day inspections.",
  },
  "/city-roofing-guides": {
    title: "City Roofing Guides — Bay Area A to Z | ROOF EXPRESS",
    description: "City-by-city roofing guides for every Bay Area community we serve. Local costs, permits, and recommendations.",
  },
  "/privacy": {
    title: "Privacy Policy | ROOF EXPRESS",
    description: "How ROOF EXPRESS collects, uses, and protects your personal information.",
  },
  "/terms": {
    title: "Terms of Service | ROOF EXPRESS",
    description: "Terms of service for ROOF EXPRESS roofing services and website usage.",
  },
  "/services": {
    title: "Roofing Services — Repair to Replacement | ROOF EXPRESS",
    description: "Full-service Bay Area roofing: residential, commercial, flat roofs, gutters, skylights, and 24/7 emergency repairs.",
  },
  "/residential": {
    title: "Residential Roofing — Shingle & Tile Systems | ROOF EXPRESS",
    description: "Expert residential roofing for Bay Area homes. Asphalt shingles, tile, slate — Diamond Certified installation with 50-year warranty.",
  },
  "/commercial": {
    title: "Commercial Roofing — TPO & Flat Roof Systems | ROOF EXPRESS",
    description: "Commercial roofing for Bay Area businesses. TPO, modified bitumen, single-ply systems. Title 24 compliant. Zero-downtime protocol.",
  },
  "/flat": {
    title: "Flat Roofing — TPO, Torch-Down & Coatings | ROOF EXPRESS",
    description: "Bay Area flat roof specialists. TPO membrane, modified bitumen, torch-down, and silicone coatings. Ponding water solutions.",
  },
  "/roof-repair": {
    title: "Roof Repair — Fast Leak Fixes, Same Day | ROOF EXPRESS",
    description: "Same-day roof repair in the Bay Area. Leak detection, emergency tarping, flashing repair, and shingle replacement.",
  },
  "/roof-replacement": {
    title: "Roof Replacement — Full System, 50-Year Warranty | ROOF EXPRESS",
    description: "Complete roof replacement by Diamond Certified contractors. GAF Master Elite installation with up to 50-year manufacturer warranty.",
  },
  "/gutters": {
    title: "Gutter Installation — Seamless Aluminum & Copper | ROOF EXPRESS",
    description: "Custom seamless gutter installation for Bay Area homes. Aluminum, copper, steel systems. Proper sizing and slope for maximum drainage.",
  },
  "/skylights": {
    title: "Skylight Installation & Repair — Velux Certified | ROOF EXPRESS",
    description: "Velux skylight installation, repair, and replacement. Sun tunnels, deck-mount & curb-mount skylights. Leak-free flashing guaranteed.",
  },
  "/emergency": {
    title: "Emergency Roof Repair — 24/7 Bay Area Response | ROOF EXPRESS",
    description: "24/7 emergency roof repair across the Bay Area. Storm damage, active leaks, emergency tarping. Call 650-666-5554 now.",
  },
};

const blogDescriptions: Record<string, string> = {
  "bay-area-roofing-cost-factors": "What drives roofing costs in the Bay Area? Labor, materials, permits, and regional factors explained. Get accurate pricing for your project.",
  "roof-repair-vs-replacement": "Should you repair or replace your roof? Compare costs, lifespan, and warning signs to make the right decision for your Bay Area home.",
  "san-francisco-roofing-permits": "Navigate San Francisco roofing permit requirements. Learn which projects need permits, costs, timelines, and how to avoid violations.",
  "roof-inspection-checklist-bay-area": "Complete roof inspection checklist for Bay Area homeowners. What inspectors look for, common issues, and how to prepare.",
  "signs-you-need-roof-replacement-bay-area": "8 warning signs your Bay Area roof needs replacement. Age, leaks, missing shingles, sagging, and more. Free inspection available.",
  "roof-ventilation-guide-ridge-soffit": "Ridge vents vs. soffit vents: which roof ventilation system is best? Complete guide to proper attic airflow and moisture control.",
  "ice-and-water-shield-california-guide": "Ice and water shield installation guide for California roofs. Where it's required, material options, and proper application techniques.",
  "chimney-flashing-repair-guide": "Step-by-step chimney flashing repair guide. Identify leaks, choose materials, and prevent future water damage around your chimney.",
  "valley-flashing-open-vs-closed": "Open valley vs. closed valley flashing: pros, cons, costs, and which method works best for Bay Area roofs.",
  "attic-mold-roof-leak-ventilation": "Attic mold from roof leaks and poor ventilation? Identify causes, remediation steps, and prevention strategies for Bay Area homes.",
  "how-long-does-a-roof-last-california": "How long do roofs last in California? Lifespan by material type — asphalt shingles, tile, metal, and flat roofing systems compared.",
  "best-time-of-year-roof-replacement-bay-area": "When is the best time to replace your roof in the Bay Area? Seasonal pros and cons, weather factors, and scheduling tips.",
  "emergency-roof-tarping-guide": "Emergency roof tarping guide: protect your home from water damage. Step-by-step instructions and when to call a professional.",
  "flat-roof-ponding-water-fix": "Fix ponding water on your flat roof. Causes, drainage solutions, and repair options to prevent structural damage.",
  "flat-roof-drainage-scupper-vs-internal-drain": "Scupper drains vs. internal drains for flat roofs. Compare costs, maintenance, and performance for Bay Area commercial buildings.",
  "gutter-cleaning-schedule-bay-area": "Bay Area gutter cleaning schedule by season. Prevent clogs, water damage, and foundation issues with proper maintenance timing.",
  "skylight-condensation-fogging-fixes": "Fix skylight condensation and fogging. Causes, DIY solutions, and when to replace your skylight seal or glazing.",
  "skylight-installation-cost-factors": "Skylight installation costs in the Bay Area. Size, type, roof pitch, and labor factors that affect your total price.",
  "gutter-guards-pros-cons-bay-area": "Are gutter guards worth it in the Bay Area? Pros, cons, types, costs, and which guards work best for local conditions.",
  "downspout-drainage-solutions-bay-area": "Downspout drainage solutions for Bay Area homes. French drains, rain barrels, extensions, and erosion prevention strategies.",
  "skylight-repair-vs-replacement": "Repair or replace your skylight? Compare costs, common issues, and factors that determine the best option for your roof.",
  "velux-skylight-flashing-kit-guide": "Velux skylight flashing kit installation guide. Deck-mounted vs. curb-mounted kits, sizing, and waterproofing best practices.",
  "flat-roof-tpo-vs-modified-bitumen": "TPO vs. modified bitumen flat roofing: cost, durability, energy efficiency, and which system suits Bay Area commercial buildings.",
  "flat-roof-coatings-silicone-vs-acrylic": "Silicone vs. acrylic flat roof coatings. Compare durability, cost, UV resistance, and application requirements for California roofs.",
  "roof-flashing-guide": "Complete roof flashing guide: types, materials, installation, and common failure points. Prevent leaks at every roof penetration.",
  "how-to-find-roof-leak": "How to find a roof leak: systematic detection methods, common leak locations, and when to call a professional roofer.",
  "roof-repair-in-rainy-season-bay-area": "Can you repair a roof during Bay Area rainy season? Emergency fixes, temporary solutions, and scheduling strategies.",
  "gutter-sizing-slope-guide": "Gutter sizing and slope guide for Bay Area homes. Calculate the right gutter size based on roof area and rainfall intensity.",
  "bay-area-roof-maintenance-checklist": "Annual roof maintenance checklist for Bay Area homeowners. Seasonal tasks, inspection tips, and preventive care to extend roof life.",
  "best-roofing-materials-coastal-cities": "Best roofing materials for Bay Area coastal cities. Salt air, wind, and fog-resistant options for Pacifica, Half Moon Bay, and more.",
  "best-roofing-materials-bay-area": "Top roofing materials for Bay Area homes: asphalt shingles, tile, metal, and composite compared for local climate and style.",
  "how-to-read-roofing-estimate": "How to read a roofing estimate: line items explained, red flags to watch for, and questions to ask your contractor.",
  "insurance-roof-claim-guide": "Filing a roof insurance claim: step-by-step process, documentation needed, and how to maximize your coverage.",
  "california-cool-roof-requirements": "California Title 24 cool roof requirements explained. Compliance options, materials, rebates, and impact on energy bills.",
  "field-notes-asphalt-shingles": "Complete guide to asphalt shingles: 3-tab vs. architectural, lifespan, costs, warranties, and best brands for Bay Area roofs.",
  "field-notes-flat-roof-systems": "Flat roof systems encyclopedia: TPO, EPDM, PVC, built-up, and modified bitumen. Materials, costs, and pros/cons compared.",
  "field-notes-roof-flashing": "Roof flashing A-to-Z: step, counter, valley, drip edge, and vent flashing. Materials, installation, and maintenance guide.",
  "field-notes-roof-ventilation": "Roof ventilation explained: ridge vents, soffit vents, gable vents, and powered fans. Calculate proper ventilation for your attic.",
  "field-notes-roof-permits-bay-area": "Bay Area roofing permit guide by city. Requirements, costs, timelines, and which projects are exempt in your municipality.",
  "roof-replacement-cost-san-francisco": "Roof replacement costs in San Francisco: average prices by material, size, and complexity. Get a free estimate today.",
  "flat-roof-vs-shingle-california": "Flat roof vs. shingle roof in California: costs, lifespan, energy efficiency, and which works best for your building type.",
  "how-to-choose-roofing-contractor-bay-area": "How to choose a Bay Area roofing contractor: licensing, insurance, reviews, warranties, and red flags to avoid.",
};

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function normalizePath(path: string): string {
  return path.replace(/\/+$/, "") || "/";
}

export function getCitySlugs(): string[] {
  return [...CITY_SLUGS];
}

const staticKeywords: Record<string, string> = {
  "/": "roofing company near me, roofer near me, roofing contractor near me, roofing contractor Bay Area, roof repair near me, roof replacement near me, best roofer Bay Area, local roofer San Francisco, flat roofing, gutter installation, skylight repair, emergency roof repair, Diamond Certified roofer, GAF Master Elite, free roofing estimate, CSLB licensed contractor, 50-year warranty, residential roofing, commercial roofing",
  "/residential": "residential roofer near me, residential roofing Bay Area, asphalt shingle roof, tile roof installation, roof replacement home, GAF Timberline shingles, Owens Corning Duration, CertainTeed Landmark, architectural shingles, 50-year roof warranty, home roof repair near me, roof cost Bay Area, metal roofing residential",
  "/commercial": "commercial roofer near me, commercial roofing Bay Area, TPO roof installation, flat roof commercial, modified bitumen, single-ply membrane, Title 24 cool roof, commercial roof repair near me, warehouse roofing, office building roof, EPDM rubber roof, built-up roofing, standing seam metal roof",
  "/flat": "flat roof repair near me, flat roof repair Bay Area, TPO membrane installation, torch-down roofing, modified bitumen flat roof, silicone roof coating, ponding water fix, flat roof leak repair near me, low-slope roofing, cool roof coating, EPDM flat roof, flat roof replacement cost",
  "/roof-repair": "roof repair near me, roof leak repair near me, emergency roof repair near me, same-day roof fix, shingle repair, flashing repair near me, chimney leak fix, storm damage roof repair, roof patch, tile roof repair, flat roof repair, gutter leak repair",
  "/roof-replacement": "roof replacement near me, new roof cost, full roof tear-off, roof replacement Bay Area, how much does a new roof cost, 50-year roof warranty, GAF Golden Pledge warranty, asphalt shingle replacement near me, roof replacement timeline, re-roofing Bay Area",
  "/gutters": "gutter installation near me, gutter repair near me, seamless gutters Bay Area, aluminum gutter, copper gutter installation, gutter guard installation, downspout installation, rain gutter, gutter cleaning near me, gutter replacement, French drain, fascia board repair",
  "/skylights": "skylight installation near me, skylight repair near me, Velux skylight Bay Area, skylight replacement, sun tunnel installation, skylight leak repair, deck mount skylight, curb mount skylight, skylight flashing kit, natural light, skylight cost",
  "/emergency": "emergency roofer near me, emergency roof repair near me, 24/7 roof repair Bay Area, storm damage roof, roof leak emergency, emergency tarping, wind damage roof, tree damage roof, active roof leak, same-day emergency roofer near me, flood damage roof repair",
  "/about": "about ROOF EXPRESS, Diamond Certified roofing company, GAF Master Elite contractor, Bay Area roofer near me since 2017, CSLB 1072766, Owens Corning Platinum Preferred, CertainTeed Select ShingleMaster, trusted local roofer near me, roofing company near me",
  "/story": "ROOF EXPRESS story, Bay Area roofing company history, local roofer San Francisco, family-owned roofing contractor, roofing company founded 2017, Abu M. roofer, trusted Bay Area contractor",
  "/reviews": "ROOF EXPRESS reviews, 5-star roofer Bay Area, Diamond Certified reviews, Google reviews roofing contractor, Yelp reviews roofer, best rated roofer San Francisco, customer testimonials roofing",
  "/contact": "contact ROOF EXPRESS, free roofing estimate Bay Area, roofing quote San Francisco, schedule roof inspection, roofer phone number, 650-666-5554, roofing contractor near me, same-day roof inspection",
  "/financing": "roofing financing Bay Area, $0 down roof financing, Wisetack roofing, roof payment plan, affordable roof replacement, monthly roof payments, roof financing no credit impact, low-interest roofing loan",
  "/faq": "roofing FAQ Bay Area, roof replacement cost, how long does roofing take, roofing permit California, roof warranty explained, best roofing material, when to replace roof, roofing contractor questions",
  "/gallery": "roofing project gallery, before and after roof, completed roofing projects Bay Area, roof replacement photos, shingle roof gallery, flat roof photos, residential roofing portfolio",
  "/blog": "roofing blog Bay Area, roofing tips, roof maintenance guide, roofing cost guide, roof repair tips, Bay Area roofing advice, homeowner roofing guide, roofing materials comparison, field notes roofing, roofing knowledge base",
  "/blog/field-notes": "roofing field notes, roofing knowledge base, roofing encyclopedia, asphalt shingle guide, flat roof systems, roof ventilation, roof flashing guide, Bay Area roofing permits, roofing materials explained, roofing installation tips, TPO roofing guide, roof repair techniques, Diamond Certified roofer insights",
  "/services": "roofing services Bay Area, full-service roofer, roof repair, roof replacement, flat roofing, gutter installation, skylight installation, emergency repair, commercial roofing, residential roofing",
  "/service-areas": "Bay Area roofing service areas, cities we serve, San Francisco roofer, San Jose roofer, Oakland roofer, Peninsula roofer, South Bay roofer, East Bay roofer, Marin County roofer, 63 cities roofing",
  "/methodology": "roofing process, 3-checkpoint quality system, roof installation steps, quality roofing methodology, how we install roofs, roofing inspection process, project management roofing",
};

export function getRouteMetadata(path: string): {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  keywords?: string;
} {
  const normalized = normalizePath(path);

  if (staticMetadata[normalized]) {
    return {
      title: staticMetadata[normalized].title,
      description: staticMetadata[normalized].description,
      canonical: `${SITE_CONFIG.siteUrl}${normalized === "/" ? "" : normalized}`,
      ogImage: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultImage}`,
      keywords: staticKeywords[normalized],
    };
  }

  const cityServiceMatch = normalized.match(/^\/([a-z-]+)\/(roof-repair|roof-replacement|residential-roofing|commercial-roofing|gutters)$/);
  if (cityServiceMatch && CITY_SLUGS.includes(cityServiceMatch[1])) {
    const csCity = cityServiceMatch[1];
    const csService = cityServiceMatch[2];
    const csCityName = slugToTitle(csCity);
    const csServiceNames: Record<string, string> = {
      "roof-repair": "Roof Repair",
      "roof-replacement": "Roof Replacement",
      "residential-roofing": "Residential Roofing",
      "commercial-roofing": "Commercial Roofing",
      "gutters": "Gutters & Drainage",
    };
    const csName = csServiceNames[csService] || slugToTitle(csService);
    const csGeoData = CITY_GEO[csCity];
    return {
      title: `${csName} in ${csCityName}, CA — ${csGeoData?.zip || ""} | ROOF EXPRESS`,
      description: `Best ${csName.toLowerCase()} near ${csCityName}, CA ${csGeoData?.zip || ""}. 5-star rated, Diamond Certified & GAF Master Elite. Serving ${csCityName} ZIP codes ${csGeoData?.zips.slice(0, 3).join(", ") || ""}. ${csGeoData?.county || ""} County. Free estimates — (650) 666-5554.`,
      canonical: `${SITE_CONFIG.siteUrl}${normalized}`,
      ogImage: `${SITE_CONFIG.siteUrl}${getCityImage(csCity)}`,
      keywords: `${csName.toLowerCase()} ${csCityName}, ${csName.toLowerCase()} near me, best ${csName.toLowerCase()} ${csCityName}, ${csCityName} ${csName.toLowerCase()}, ${csName.toLowerCase()} near me ${csCityName}, ${csName.toLowerCase()} ${csGeoData?.zip || ""}, ${csGeoData?.county || ""} County ${csName.toLowerCase()}, ${csName.toLowerCase()} company near me, ${csCityName} CA ${csName.toLowerCase()}, ${csName.toLowerCase()} contractor ${csCityName}`,
    };
  }

  const cityMatch = normalized.match(/^\/([a-z-]+)$/);
  if (cityMatch && CITY_SLUGS.includes(cityMatch[1])) {
    const citySlug = cityMatch[1];
    const cityName = slugToTitle(citySlug);
    const customTitle = CITY_SEO_TITLES[citySlug];
    return {
      title: customTitle || `${cityName}, CA Roofing — Repair & Replacement | ROOF EXPRESS`,
      description: `Best roofer near ${cityName}, CA ${CITY_GEO[citySlug]?.zip || ""}. 5.0★ Google rated roofing company for roof repair, replacement, flat roofing & gutters. Serving ${cityName} ZIP codes ${CITY_GEO[citySlug]?.zips.slice(0, 3).join(", ") || ""}. ${CITY_GEO[citySlug]?.county || ""} County. Diamond Certified, GAF Master Elite. Free estimates — (650) 666-5554.`,
      canonical: `${SITE_CONFIG.siteUrl}${normalized}`,
      ogImage: `${SITE_CONFIG.siteUrl}${getCityImage(citySlug)}`,
      keywords: `roofer near me, roofing company near me, roofers near me, roofing contractor near me, roof repair near me, roof replacement near me, best roofer near ${cityName}, ${cityName} roofer, ${cityName} roofing company, ${cityName} roofing contractor, roof repair ${cityName} CA, roof replacement ${cityName}, roofing company near me ${cityName}, roofer near me ${cityName} CA, roof replacement company near me, emergency roofer near me, roofer ${CITY_GEO[citySlug]?.zip || ""}, ${CITY_GEO[citySlug]?.county || ""} County roofer, gutter installation near me, flat roof repair near me, skylight repair near me, roof contractor near me, ${cityName} CA roofer ${CITY_GEO[citySlug]?.zip || ""}`,
    };
  }

  const blogMatch = normalized.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const blogSlug = blogMatch[1];
    const blogTitle = slugToTitle(blogSlug);
    const description = blogDescriptions[blogSlug] || `Expert guide on ${blogTitle.toLowerCase()}. Professional roofing insights from ROOF EXPRESS, Bay Area's Diamond Certified contractor.`;
    const blogKeywords = blogSlug.split("-").filter(w => w.length > 2).join(", ") + ", roofing guide, Bay Area roofing, roofing tips, roof maintenance, ROOF EXPRESS";
    return {
      title: `${blogTitle} | ROOF EXPRESS`,
      description,
      canonical: `${SITE_CONFIG.siteUrl}${normalized}`,
      ogImage: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultImage}`,
      keywords: blogKeywords,
    };
  }

  const cityGuideMatch = normalized.match(/^\/city-roofing-guides\/([a-z-]+)$/);
  if (cityGuideMatch && CITY_SLUGS.includes(cityGuideMatch[1])) {
    const citySlug = cityGuideMatch[1];
    const cityName = slugToTitle(citySlug);
    const guideTitle = CITY_GUIDE_SEO_TITLES[citySlug] || buildGuideTitle(cityName);
    return {
      title: guideTitle,
      description: `Complete ${cityName} roofing guide 2026. Best roofer near ${cityName}, CA ${CITY_GEO[citySlug]?.zip || ""}. Permits, costs, materials & local problems. Serving ${cityName} ZIP codes ${CITY_GEO[citySlug]?.zips.slice(0, 3).join(", ") || ""}. ${CITY_GEO[citySlug]?.county || ""} County.`,
      canonical: `${SITE_CONFIG.siteUrl}/city-roofing-guides/${citySlug}`,
      ogImage: `${SITE_CONFIG.siteUrl}${getCityImage(citySlug)}`,
      keywords: `${cityName} roofing guide 2026, roofer near me, roofing company near me, roofers near me, best roofer near ${cityName}, roof cost ${cityName} 2026, roofing permit ${cityName}, roof repair near me, roof replacement near me, ${cityName} roofer, ${cityName} roofing contractor, roofer near me ${cityName} CA, roofer ${CITY_GEO[citySlug]?.zip || ""}, ${CITY_GEO[citySlug]?.county || ""} County roofer, roof maintenance ${cityName}, best roofing material ${cityName}, roof contractor near me, roofing company near me ${cityName}`,
    };
  }

  return {
    title: `${slugToTitle(normalized.replace("/", ""))} | ROOF EXPRESS`,
    description: SITE_CONFIG.defaultDescription,
    canonical: `${SITE_CONFIG.siteUrl}${normalized}`,
    ogImage: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultImage}`,
  };
}

export function getAllRoutes(): string[] {
  const routes: string[] = [...STATIC_PAGES];

  for (const slug of CITY_SLUGS) {
    routes.push(`/${slug}`);
  }

  for (const slug of BLOG_SLUGS) {
    routes.push(`/blog/${slug}`);
  }

  for (const slug of CITY_SLUGS) {
    routes.push(`/blog/${slug}-roofing-guide`);
  }

  for (const slug of CITY_SLUGS) {
    routes.push(`/city-roofing-guides/${slug}`);
  }

  const cityServiceSlugs = ["roof-repair", "roof-replacement", "residential-roofing", "commercial-roofing", "gutters"];
  for (const citySlug of CITY_SLUGS) {
    for (const serviceSl of cityServiceSlugs) {
      routes.push(`/${citySlug}/${serviceSl}`);
    }
  }

  return routes;
}

const SERVICE_PAGES = [
  "/residential", "/commercial", "/flat", "/roof-repair",
  "/roof-replacement", "/gutters", "/skylights", "/emergency",
];

const SERVICE_TYPE_MAP: Record<string, string> = {
  "/residential": "Residential Roofing",
  "/commercial": "Commercial Roofing",
  "/flat": "Flat Roofing",
  "/roof-repair": "Roof Repair",
  "/roof-replacement": "Roof Replacement",
  "/gutters": "Gutter Installation",
  "/skylights": "Skylight Installation & Repair",
  "/emergency": "Emergency Roof Repair",
};

const SERVICE_RICH_DESCRIPTIONS: Record<string, string> = {
  "/residential": "Expert residential roofing services for Bay Area homes including asphalt shingle installation (GAF Timberline HDZ, Owens Corning Duration, CertainTeed Landmark), tile roofing, metal roofing, slate, and composite systems. Full tear-off and re-roofing with up to 50-year manufacturer warranty.",
  "/commercial": "Commercial roofing for Bay Area businesses: TPO single-ply membrane, modified bitumen, EPDM rubber, built-up roofing, and standing seam metal. California Title 24 cool roof compliant. Zero-downtime installation protocol for offices, retail, warehouses, and multi-family properties.",
  "/flat": "Flat and low-slope roofing systems for Bay Area properties: TPO membrane, modified bitumen torch-down, EPDM rubber, silicone coatings, and built-up roofing. Ponding water solutions, tapered insulation, and cool roof systems meeting Title 24 energy requirements.",
  "/roof-repair": "Fast, reliable roof repair across the Bay Area. Leak detection, emergency patching, shingle replacement, flashing repair, chimney leak fixes, storm damage restoration, tile repair, and flat roof patching. Same-day inspections and 24/7 emergency service.",
  "/roof-replacement": "Complete roof replacement with full tear-off, deck inspection, synthetic underlayment, ice and water shield, and precision installation of your chosen roofing material. GAF Golden Pledge 50-year warranty, Owens Corning Platinum Protection, and CertainTeed SureStart Plus coverage.",
  "/gutters": "Seamless gutter installation for Bay Area homes: 5-inch and 6-inch aluminum, copper, and galvanized steel systems. Gutter guards, leaf screens, downspout extensions, splash blocks, French drains, and complete drainage solutions. Custom-fabricated on-site for perfect fit.",
  "/skylights": "Velux certified skylight installation, repair, and replacement in the Bay Area. Deck-mount, curb-mount, and fixed skylights. Sun tunnel (tubular skylight) installation. Skylight flashing kits, condensation fixes, and leak-free waterproofing guaranteed.",
  "/emergency": "24/7 emergency roof repair across the San Francisco Bay Area. Immediate response for active leaks, storm damage, fallen tree damage, wind-blown shingles, and flood damage. Emergency tarping, temporary sealing, and insurance documentation assistance.",
};

const SERVICE_HOWTO: Record<string, { name: string; description: string; totalTime: string; steps: Array<{ name: string; text: string }> }> = {
  "/residential": {
    name: "How ROOF EXPRESS Replaces a Residential Roof",
    description: "Step-by-step process for a complete residential roof replacement by ROOF EXPRESS, from inspection to final cleanup.",
    totalTime: "PT48H",
    steps: [
      { name: "Free Inspection & Estimate", text: "Our certified inspector examines your roof, attic, ventilation, and decking. You receive a detailed written estimate with material options, timeline, and warranty information — no obligation." },
      { name: "Material Selection & Permit Filing", text: "Choose from GAF Timberline HDZ, Owens Corning Duration, or CertainTeed Landmark shingles. We pull all required building permits from your city on your behalf." },
      { name: "Tear-Off & Deck Inspection", text: "Old roofing is completely removed to the deck. Every square foot of plywood decking is inspected for rot or damage — we replace any compromised sections before moving forward." },
      { name: "Underlayment & Ice Shield Installation", text: "Synthetic underlayment is applied across the entire roof. Ice and water shield is installed in critical areas: valleys, eaves, skylights, and around all penetrations." },
      { name: "Shingle Installation & Ventilation", text: "New shingles are installed with proper offset, nailing pattern, and manufacturer-specified exposure. Ridge vents and intake vents are installed or upgraded for proper attic airflow." },
      { name: "Flashing, Cleanup & Final Inspection", text: "New step, counter, and drip-edge flashing is installed. Complete debris cleanup with magnetic nail sweep. Final quality inspection and city building inspection are completed." },
    ],
  },
  "/commercial": {
    name: "How ROOF EXPRESS Installs a Commercial Roof System",
    description: "Step-by-step commercial roofing process from initial assessment to warranty documentation.",
    totalTime: "PT120H",
    steps: [
      { name: "Property Assessment & Core Samples", text: "We assess the existing roof system, take core samples to determine layers and moisture levels, and evaluate drainage. A detailed proposal covers scope, timeline, and tenant impact." },
      { name: "System Selection & Engineering", text: "Choose from TPO, PVC, modified bitumen, or built-up systems. We engineer proper drainage, tapered insulation for ponding prevention, and Title 24 compliant cool roof specifications." },
      { name: "Tear-Off or Overlay Installation", text: "Existing roofing is removed or prepared for overlay. Insulation boards and cover boards are installed. Membrane is mechanically fastened or fully adhered per manufacturer specs." },
      { name: "Seam Welding & Penetration Detailing", text: "All seams are hot-air welded (TPO/PVC) or torch-applied (mod bit). Every penetration — HVAC units, pipes, drains — receives custom-fabricated flashing and boot details." },
      { name: "Final Inspection & Warranty Registration", text: "Quality inspection, city permit sign-off, and manufacturer warranty registration. You receive a complete documentation package with photos, warranty certificates, and maintenance schedule." },
    ],
  },
  "/flat": {
    name: "How ROOF EXPRESS Installs a Flat Roof",
    description: "Professional flat roof installation process using TPO, modified bitumen, or coating systems.",
    totalTime: "PT72H",
    steps: [
      { name: "Flat Roof Inspection & Drainage Analysis", text: "We inspect the existing flat roof, identify ponding areas, check drain locations, and assess whether the roof needs full replacement or can be restored with coatings." },
      { name: "Surface Preparation & Insulation", text: "Old roofing is removed or prepared. Tapered insulation is installed to create positive drainage slope. Cover board provides a smooth substrate for the new membrane." },
      { name: "Membrane or Coating Application", text: "TPO membrane is mechanically attached or fully adhered with heat-welded seams. For mod bit, layers are torch-applied. For coatings, silicone or acrylic is spray- or roller-applied in multiple coats." },
      { name: "Flashing & Edge Detail Completion", text: "Parapet walls receive new base and counter flashing. Drains, scuppers, and overflow outlets are detailed with reinforced membrane. Drip edge and termination bars are sealed." },
    ],
  },
  "/roof-repair": {
    name: "How ROOF EXPRESS Diagnoses and Repairs Roof Leaks",
    description: "Our proven process for finding and permanently fixing roof leaks in Bay Area homes.",
    totalTime: "PT8H",
    steps: [
      { name: "Leak Source Investigation", text: "We trace the leak from the interior stain back to the actual roof penetration point — often 10-20 feet from where the drip appears inside. Attic inspection reveals the water trail." },
      { name: "Targeted Repair Plan", text: "We identify whether the leak is from flashing failure, shingle damage, pipe boot deterioration, or another cause. You receive a repair plan with photos and pricing before work begins." },
      { name: "Repair Execution & Testing", text: "Damaged materials are replaced — new flashing, shingles, sealant, or pipe boots as needed. We water-test the repaired area to confirm the leak is permanently resolved." },
    ],
  },
  "/roof-replacement": {
    name: "How ROOF EXPRESS Handles a Full Roof Replacement",
    description: "Complete roof replacement process from estimate to 50-year warranty activation.",
    totalTime: "PT48H",
    steps: [
      { name: "Comprehensive Roof Assessment", text: "Full exterior and attic inspection. We measure the roof, document existing conditions, and identify any structural concerns. You receive a line-item estimate with material and warranty options." },
      { name: "Permit & Material Coordination", text: "We file building permits with your city and order materials. Your selected shingles, underlayment, and accessories are delivered and staged for installation day." },
      { name: "Full Tear-Off to Deck", text: "Every layer of old roofing is stripped to bare decking. Damaged plywood is replaced. The clean deck is inspected before any new materials are applied." },
      { name: "Complete System Installation", text: "Ice and water shield, synthetic underlayment, drip edge, starter strip, shingles, ridge cap, and ventilation are installed per manufacturer specifications for full warranty eligibility." },
      { name: "Cleanup & Warranty Activation", text: "Full cleanup including magnetic nail sweep of yard and driveway. City final inspection is scheduled. Manufacturer warranty is registered — up to 50 years on materials, 25 years on labor." },
    ],
  },
  "/gutters": {
    name: "How ROOF EXPRESS Installs Seamless Gutters",
    description: "Custom seamless gutter installation process for Bay Area homes.",
    totalTime: "PT8H",
    steps: [
      { name: "Drainage Assessment & Sizing", text: "We evaluate your roof's water runoff, measure fascia lengths, identify downspout locations, and calculate the proper gutter size (5-inch or 6-inch) for your roof area and Bay Area rainfall." },
      { name: "Custom Fabrication On-Site", text: "Seamless gutters are formed on-site from continuous aluminum coil using our portable gutter machine. This eliminates joints and seams that are prone to leaks." },
      { name: "Installation & Pitch Alignment", text: "Gutters are hung with proper slope toward downspouts — 1/4 inch per 10 feet. Hidden hangers are secured every 24 inches for strength. Downspouts are routed away from your foundation." },
      { name: "Gutter Guard Installation (Optional)", text: "If selected, gutter guards are installed to prevent debris buildup. We test the complete system with water to verify proper flow, splash-free operation, and drainage away from the structure." },
    ],
  },
  "/skylights": {
    name: "How ROOF EXPRESS Installs a Velux Skylight",
    description: "Professional Velux-certified skylight installation from planning to leak-free completion.",
    totalTime: "PT12H",
    steps: [
      { name: "Location Planning & Sizing", text: "We assess your attic framing, roof pitch, and interior ceiling to determine optimal skylight placement. Sun angle analysis ensures maximum natural light without excessive heat gain." },
      { name: "Roof Opening & Framing", text: "A precise opening is cut in the roof and ceiling. Double headers and trimmers are installed in the rafter bay per structural requirements. The light shaft is framed if needed." },
      { name: "Skylight & Flashing Kit Installation", text: "The Velux skylight is set into the opening and secured. The manufacturer-specific EDL or EDW flashing kit is installed, integrating the skylight watertight into your existing shingle system." },
      { name: "Interior Finishing & Testing", text: "The light shaft is insulated, drywalled, and painted. We water-test the installation to verify zero leakage. Blinds or shades are installed if ordered." },
    ],
  },
  "/emergency": {
    name: "How ROOF EXPRESS Responds to Roof Emergencies",
    description: "Our 24/7 emergency roof repair response process for active leaks and storm damage.",
    totalTime: "PT4H",
    steps: [
      { name: "Emergency Call & Dispatch", text: "Call (650) 666-5554 anytime — 24/7 including nights, weekends, and holidays. We gather details about the emergency and dispatch the nearest available crew." },
      { name: "On-Site Assessment & Tarping", text: "Our crew arrives with tarping materials, plywood, and sealant. The active leak or damage is assessed and temporarily secured to stop water intrusion immediately." },
      { name: "Insurance Documentation", text: "We photograph all damage and provide a detailed written report suitable for your insurance claim. We work directly with adjusters to support your claim." },
      { name: "Permanent Repair Scheduling", text: "Once the emergency is stabilized, we schedule a permanent repair. The temporary fix is credited toward the full repair cost — you never pay double." },
    ],
  },
};

function getLogoObject(): object {
  return {
    "@type": "ImageObject",
    "@id": `${SITE_CONFIG.siteUrl}/#logo`,
    url: `${SITE_CONFIG.siteUrl}/android-chrome-512x512.png`,
    contentUrl: `${SITE_CONFIG.siteUrl}/android-chrome-512x512.png`,
    caption: "ROOF EXPRESS Logo",
    width: "512",
    height: "512",
    inLanguage: "en-US",
  };
}

function getFaviconObject(): object {
  return {
    "@type": "ImageObject",
    url: `${SITE_CONFIG.siteUrl}/favicon-48x48.png`,
    contentUrl: `${SITE_CONFIG.siteUrl}/favicon-48x48.png`,
    width: "48",
    height: "48",
    caption: "ROOF EXPRESS Favicon",
  };
}

function getFullOrganization(): object {
  return {
    "@context": "https://schema.org",
    "@type": ["RoofingContractor", "LocalBusiness"],
    "@id": "https://roof-ex.com/#roofingcontractor",
    name: "Roof Express",
    alternateName: "Roof Express",
    legalName: "Roof Express",
    url: `${SITE_CONFIG.siteUrl}/`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.schemaImage}`,
      width: "1200",
      height: "800",
      caption: "ROOF EXPRESS team at work",
    },
    logo: getLogoObject(),
    photo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.schemaImage}`,
      caption: "ROOF EXPRESS roofing project",
    },
    foundingDate: "2017",
    founder: {
      "@type": "Person",
      name: "Abu M.",
      jobTitle: "Owner & Lead Roofing Contractor",
      worksFor: { "@type": "Organization", name: "Roof Express" },
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "license", name: "CSLB License #1072766", recognizedBy: { "@type": "Organization", name: "California Contractors State License Board" } },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "GAF Master Elite Contractor", recognizedBy: { "@type": "Organization", name: "GAF" } },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Diamond Certified", recognizedBy: { "@type": "Organization", name: "American Ratings Corporation" } },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Owens Corning Platinum Preferred Contractor", recognizedBy: { "@type": "Organization", name: "Owens Corning" } },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "CertainTeed Select ShingleMaster", recognizedBy: { "@type": "Organization", name: "CertainTeed" } },
      ],
      knowsAbout: ["Roof Replacement", "Roof Repair", "Flat Roofing", "TPO Systems", "Modified Bitumen", "Skylight Installation", "Gutter Systems", "Bay Area Building Codes", "California Title 24"],
    },
    description: SITE_CONFIG.defaultDescription,
    slogan: "Bay Area's Most Trusted Roofing Contractor",
    priceRange: "$650-$1150",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5.0,
      reviewCount: 85,
      bestRating: 5,
      worstRating: 1,
    },
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Check, Financing",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: "10",
      maxValue: "50",
    },
    knowsAbout: [
      "Roof Replacement",
      "Roof Repair",
      "Flat Roofing",
      "TPO Roofing",
      "Modified Bitumen Roofing",
      "Asphalt Shingle Installation",
      "Architectural Shingles",
      "Tile Roofing",
      "Metal Roofing",
      "Standing Seam Metal Roof",
      "Gutter Installation",
      "Seamless Aluminum Gutters",
      "Copper Gutter Systems",
      "Gutter Guard Installation",
      "Skylight Installation",
      "Velux Skylight Repair",
      "Sun Tunnel Installation",
      "Emergency Roof Repair",
      "Emergency Roof Tarping",
      "Storm Damage Roof Repair",
      "Commercial Roofing",
      "Residential Roofing",
      "Roof Inspection",
      "Roof Leak Detection",
      "Cool Roof Systems",
      "California Title 24 Compliance",
      "Silicone Roof Coatings",
      "EPDM Rubber Roofing",
      "Built-Up Roofing Systems",
      "Roof Flashing Repair",
      "Chimney Flashing",
      "Valley Flashing",
      "Roof Ventilation",
      "Ridge Vent Installation",
      "Soffit Vent Installation",
      "Attic Ventilation",
      "Ponding Water Solutions",
      "Flat Roof Drainage",
      "Roof Maintenance",
      "Preventive Roof Care",
      "GAF Timberline HDZ Shingles",
      "Owens Corning Duration Shingles",
      "CertainTeed Landmark Shingles",
      "50-Year Roof Warranty",
      "GAF Golden Pledge Warranty",
      "Roofing Permit Processing",
      "Bay Area Building Codes",
      "Roof Cost Estimation",
      "Roofing Financing",
    ],
    knowsLanguage: ["en", "es"],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: { "@type": "Country", name: "US" },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/place/${SITE_CONFIG.address.street.replace(/ /g, "+")}+${SITE_CONFIG.address.city.replace(/ /g, "+")}+${SITE_CONFIG.address.state}`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-650-666-5554",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English", "Spanish"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-650-666-5554",
        contactType: "emergency",
        areaServed: "US",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
    serviceArea: [
      { "@type": "AdministrativeArea", name: "San Francisco County" },
      { "@type": "AdministrativeArea", name: "San Mateo County" },
      { "@type": "AdministrativeArea", name: "Santa Clara County" },
      { "@type": "AdministrativeArea", name: "Alameda County" },
      { "@type": "AdministrativeArea", name: "Contra Costa County" },
      { "@type": "AdministrativeArea", name: "Marin County" },
    ],
    areaServed: [
      { "@type": "City", name: "San Francisco", "@id": "https://en.wikipedia.org/wiki/San_Francisco" },
      { "@type": "City", name: "Daly City" },
      { "@type": "City", name: "South San Francisco" },
      { "@type": "City", name: "Palo Alto" },
      { "@type": "City", name: "Mountain View" },
      { "@type": "City", name: "San Jose" },
      { "@type": "City", name: "Oakland" },
      { "@type": "City", name: "Fremont" },
      { "@type": "City", name: "Berkeley" },
      { "@type": "City", name: "San Mateo" },
      { "@type": "City", name: "Redwood City" },
      { "@type": "City", name: "Menlo Park" },
      { "@type": "City", name: "Sunnyvale" },
      { "@type": "City", name: "Santa Clara" },
      { "@type": "City", name: "Cupertino" },
      { "@type": "City", name: "Milpitas" },
      { "@type": "City", name: "Los Gatos" },
      { "@type": "City", name: "Pacifica" },
      { "@type": "City", name: "Hayward" },
      { "@type": "City", name: "Walnut Creek" },
      { "@type": "City", name: "San Rafael" },
      { "@type": "City", name: "Novato" },
      { "@type": "City", name: "Corte Madera" },
      { "@type": "City", name: "Larkspur" },
      { "@type": "City", name: "Fairfax" },
      { "@type": "City", name: "San Anselmo" },
      { "@type": "City", name: "Belvedere" },
      { "@type": "City", name: "Kentfield" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Replacement" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flat Roofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Skylight Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Roofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Roof Repair" } },
      ],
    },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Replacement", description: "Complete roof tear-off and new roof installation with GAF Golden Pledge 50-year warranty. Asphalt shingles, tile, metal, and composite systems for Bay Area homes." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Repair", description: "Same-day roof leak detection and repair for shingle, flat, tile, and metal roofs. Flashing repair, storm damage restoration, and emergency patching across 63 Bay Area cities." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flat Roofing", description: "TPO single-ply membrane, modified bitumen torch-down, EPDM rubber, silicone coatings, and ponding water solutions for residential and commercial flat roofs." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Installation", description: "Custom seamless aluminum, copper, and galvanized steel gutter systems with gutter guards, downspout extensions, and French drain connections for proper drainage." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Skylight Installation & Repair", description: "Velux certified skylight installation, repair, and replacement. Deck-mount and curb-mount skylights, sun tunnels, and leak-free flashing kits." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Roofing", description: "California Title 24 compliant commercial roofing for offices, retail, warehouses, and multi-family buildings. TPO, built-up, standing seam metal, and cool roof systems." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Roof Repair", description: "24/7 emergency roof repair and tarping for active leaks, storm damage, fallen trees, and wind damage. Same-day response across the San Francisco Bay Area." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Inspection", description: "Free comprehensive roof inspections with detailed photo reports, thermal scanning, and honest repair-vs-replace recommendations for Bay Area homeowners." } },
    ],
    openingHoursSpecification: SITE_CONFIG.hours.schema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.youtube,
      SITE_CONFIG.social.tiktok,
      SITE_CONFIG.social.yelp,
      SITE_CONFIG.social.googleBusinessProfile,
      SITE_CONFIG.manufacturerProfiles.gaf,
      SITE_CONFIG.manufacturerProfiles.certainteed,
      SITE_CONFIG.manufacturerProfiles.owensCorning,
      SITE_CONFIG.manufacturerProfiles.bbb,
      SITE_CONFIG.manufacturerProfiles.cslb,
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Diamond Certified",
        recognizedBy: { "@type": "Organization", name: "American Ratings Corporation" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "GAF Master Elite Contractor",
        recognizedBy: { "@type": "Organization", name: "GAF" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Owens Corning Platinum Preferred Contractor",
        recognizedBy: { "@type": "Organization", name: "Owens Corning" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "CertainTeed Select ShingleMaster",
        recognizedBy: { "@type": "Organization", name: "CertainTeed" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "CSLB License #1072766",
        recognizedBy: { "@type": "Organization", name: "California Contractors State License Board" },
      },
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.siteUrl}/contact`,
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
      result: {
        "@type": "Reservation",
        name: "Free Roofing Estimate",
      },
    },
  };
}

function getOrgRef(): object {
  return { "@id": `${SITE_CONFIG.siteUrl}/#roofingcontractor` };
}

function getSpeakable(): object {
  return {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1"],
  };
}

function buildBreadcrumbs(items: Array<{ name: string; url: string }>): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getJsonLd(path: string): object | object[] | null {
  const normalized = normalizePath(path);
  const siteUrl = SITE_CONFIG.siteUrl;

  if (normalized === "/") {
    return [
      getFullOrganization(),
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Roof Express",
        alternateName: "Roof Express Bay Area Roofing",
        url: `${siteUrl}/`,
        publisher: getOrgRef(),
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        name: "Bay Area Roofing Contractor — Free Estimates",
        speakable: getSpeakable(),
        url: `${siteUrl}/`,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: getOrgRef(),
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/opengraph.jpg`,
          width: "1200",
          height: "630",
        },
      },
      buildBreadcrumbs([{ name: "Home", url: `${siteUrl}/` }]),
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "ROOF EXPRESS — Bay Area Roofing Contractor",
        description: "See ROOF EXPRESS in action. Bay Area's most trusted roofing contractor serving 60+ cities. Diamond Certified, GAF Master Elite. CSLB #1072766.",
        thumbnailUrl: `${siteUrl}/videos/roof-express-intro-thumb.webp`,
        uploadDate: "2025-01-15T08:00:00-08:00",
        contentUrl: `${siteUrl}/videos/roof-express-intro.mp4`,
        embedUrl: `${siteUrl}/videos/roof-express-intro.mp4`,
        duration: "PT2M30S",
        publisher: getOrgRef(),
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you offer free roof inspections?",
            acceptedAnswer: { "@type": "Answer", text: "Yes, ROOF EXPRESS provides free roof inspections and estimates throughout the San Francisco Bay Area. Call (650) 666-5554 to schedule your free inspection today." },
          },
          {
            "@type": "Question",
            name: "How long does a roof replacement take?",
            acceptedAnswer: { "@type": "Answer", text: "Most residential roof replacements are completed in 1–3 days depending on the size of the roof and weather conditions. ROOF EXPRESS completes most Bay Area homes in 2-3 days." },
          },
          {
            "@type": "Question",
            name: "What areas does ROOF EXPRESS serve?",
            acceptedAnswer: { "@type": "Answer", text: "ROOF EXPRESS serves the entire San Francisco Bay Area including San Francisco, San Mateo County, Santa Clara County, Alameda County, Contra Costa County, and Marin County. We cover over 63 cities from San Francisco to San Jose and Marin to the Tri-Valley." },
          },
          {
            "@type": "Question",
            name: "Are you licensed and insured?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. ROOF EXPRESS holds CSLB License #1072766 with full general liability and workers' compensation insurance. We are Diamond Certified, GAF Master Elite, Owens Corning Platinum Preferred, and CertainTeed Select ShingleMaster certified." },
          },
          {
            "@type": "Question",
            name: "Do you offer financing for roof replacement?",
            acceptedAnswer: { "@type": "Answer", text: "Yes! We offer 0% interest financing through Wisetack with up to $25,000 available. Apply in minutes with a soft credit check — no impact to your credit score." },
          },
          {
            "@type": "Question",
            name: "What warranty do you offer on roofing work?",
            acceptedAnswer: { "@type": "Answer", text: "As a GAF Master Elite contractor, we offer GAF's Golden Pledge Warranty — 50 years on materials and 25 years on workmanship with 100% coverage for the first 10 years. Owens Corning and CertainTeed offer comparable warranty programs through our certifications." },
          },
        ],
      },
    ];
  }

  if (normalized === "/about") {
    return [
      getFullOrganization(),
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "About Us", url: `${siteUrl}/about` },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "About ROOF EXPRESS — Bay Area's Trusted Roofing Contractor",
        description: "Learn about ROOF EXPRESS, the Bay Area's Diamond Certified and GAF Master Elite roofing contractor. See our team in action serving 60+ cities across San Francisco, San Mateo, and the greater Bay Area.",
        thumbnailUrl: `${siteUrl}/videos/roof-express-brand-thumb.webp`,
        uploadDate: "2025-01-15T08:00:00-08:00",
        contentUrl: `${siteUrl}/videos/roof-express-brand.mp4`,
        embedUrl: `${siteUrl}/videos/roof-express-brand.mp4`,
        duration: "PT1M15S",
        publisher: getOrgRef(),
      },
    ];
  }

  if (normalized === "/story") {
    return [
      getFullOrganization(),
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Our Story", url: `${siteUrl}/story` },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "The ROOF EXPRESS Story — From Family Business to Bay Area's Top Roofer",
        description: "Watch the story of ROOF EXPRESS, founded by Abu M. in San Francisco. From humble beginnings to becoming the Bay Area's most trusted roofing company with Diamond Certified and GAF Master Elite credentials.",
        thumbnailUrl: `${siteUrl}/videos/roof-express-brand-thumb.webp`,
        uploadDate: "2025-01-15T08:00:00-08:00",
        contentUrl: `${siteUrl}/videos/roof-express-brand.mp4`,
        embedUrl: `${siteUrl}/videos/roof-express-brand.mp4`,
        duration: "PT1M15S",
        publisher: getOrgRef(),
      },
    ];
  }

  if (normalized === "/reviews") {
    return [
      getFullOrganization(),
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Reviews", url: `${siteUrl}/reviews` },
      ]),
    ];
  }

  if (normalized === "/contact") {
    return [
      getFullOrganization(),
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Contact", url: `${siteUrl}/contact` },
      ]),
    ];
  }

  if (normalized === "/faq") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does a new roof cost in the Bay Area?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A typical Bay Area roof replacement ranges from $15,000–$40,000+ depending on roof size (measured in squares), pitch/steepness, material choice, number of layers to remove, and complexity (skylights, chimneys, valleys). We provide a detailed line-item estimate with no hidden fees.",
            },
          },
          {
            "@type": "Question",
            name: "Are you licensed and insured?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. ROOF EXPRESS holds California State License Board (CSLB) License #1072766. We are fully insured with both general liability and workers' compensation coverage. We're also bonded for your protection.",
            },
          },
          {
            "@type": "Question",
            name: "What certifications do you hold?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We are Diamond Certified (rated Highest in Quality by independent homeowner surveys), GAF Master Elite (top 2% of roofers nationwide), Owens Corning Platinum Preferred, and CertainTeed Select ShingleMaster. These certifications allow us to offer the strongest warranties in the industry.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer financing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! We've partnered with Wisetack to offer flexible financing up to $25,000 for any roofing project. You can get prequalified in seconds with a soft credit check — no impact to your credit score. Monthly payment options start as low as $150/month depending on the project.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a roof replacement take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most residential roof replacements are completed in 1–3 days, depending on the size of your home and complexity of the roof. Commercial projects may take longer. We provide a specific timeline during the estimate phase and keep you updated throughout the process.",
            },
          },
          {
            "@type": "Question",
            name: "What warranty do you offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "As a GAF Master Elite contractor, we offer GAF's Golden Pledge Warranty — the strongest in the industry. It covers materials for 50 years and workmanship for 25 years, with 100% coverage for the first 10 years including tear-off costs. Owens Corning and CertainTeed offer comparable warranty programs.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer emergency services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! We provide 24/7 emergency response for active leaks, storm damage, and urgent roofing situations. Call our dispatch line at 650-666-5554 for immediate assistance. We carry tarping materials for temporary mitigation while permanent repairs are scheduled.",
            },
          },
          {
            "@type": "Question",
            name: "What roofing materials do you install?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We install a full range of roofing systems including asphalt shingles (GAF, Owens Corning, CertainTeed), flat roof systems (TPO, modified bitumen, torch-down), metal roofing, tile roofing, and specialty systems. We also install Velux skylights and seamless gutter systems.",
            },
          },
          {
            "@type": "Question",
            name: "What is Diamond Certified and why does it matter?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Diamond Certified is an independent rating awarded by American Ratings Corporation based on blind telephone surveys of actual customers. Only contractors rated Highest in Quality earn the badge. ROOF EXPRESS is Diamond Certified, meaning our customers consistently rate our workmanship, communication, and professionalism at the highest level.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between TPO and modified bitumen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "TPO is a single-ply reflective membrane ideal for energy efficiency — it reflects up to 85% of solar energy and meets California Title 24 cool roof requirements. Modified bitumen is a multi-layer asphalt system with superior puncture resistance and waterproofing. TPO is typically preferred for commercial roofs; modified bitumen excels on residential flat roofs and fog-heavy areas like San Francisco.",
            },
          },
          {
            "@type": "Question",
            name: "What qualifies as a roofing emergency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Any situation where your roof is actively leaking, structurally compromised, or poses a safety risk. This includes active water intrusion, fallen tree limbs on the roof, missing sections of shingles after a storm, exposed roof deck, and sagging or collapsed sections. Call 650-666-5554 immediately for 24/7 emergency response.",
            },
          },
          {
            "@type": "Question",
            name: "Does a new roof increase my home value?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. According to the National Association of Realtors, a new roof returns 60–70% of its cost at resale. In competitive Bay Area markets that figure can be higher, because buyers actively avoid homes with aging roofs. A new roof also makes your home easier to sell and can reduce insurance premiums.",
            },
          },
          {
            "@type": "Question",
            name: "What does the Golden Pledge warranty cover specifically?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "GAF's Golden Pledge covers 50-year material defect coverage, 25-year workmanship coverage by GAF (not just the contractor), 100% tear-off and replacement costs in the first 10 years, and transferability to a new owner if you sell your home. It's only available through GAF Master Elite contractors like ROOF EXPRESS.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a skylight installation cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Skylight installation typically ranges from $1,500 to $3,500 per unit including the skylight, flashing kit, and labor. Venting skylights cost more than fixed models. Deck-mount installations on new openings are more involved than curb-mount replacements. We provide an exact quote during the estimate.",
            },
          },
        ],
      },
      getFullOrganization(),
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "FAQ", url: `${siteUrl}/faq` },
      ]),
    ];
  }

  if (normalized === "/gallery") {
    return [
      getFullOrganization(),
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Gallery", url: `${siteUrl}/gallery` },
      ]),
    ];
  }

  if (normalized === "/financing") {
    return [
      getFullOrganization(),
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Financing", url: `${siteUrl}/financing` },
      ]),
    ];
  }

  if (normalized === "/methodology") {
    return [
      getFullOrganization(),
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Our Process", url: `${siteUrl}/methodology` },
      ]),
    ];
  }

  if (normalized === "/blog") {
    const blogItems = BLOG_SLUGS.slice(0, 20).map((slug, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${siteUrl}/blog/${slug}`,
      name: slugToTitle(slug),
    }));
    return [
      getFullOrganization(),
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "ROOF EXPRESS Roofing Blog",
        url: `${siteUrl}/blog`,
        description: "Expert roofing articles covering Bay Area costs, materials, maintenance schedules, and city-specific guides.",
        publisher: getOrgRef(),
        inLanguage: "en-US",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: BLOG_SLUGS.length,
          itemListElement: blogItems,
        },
      },
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Blog", url: `${siteUrl}/blog` },
      ]),
    ];
  }

  if (normalized === "/blog/field-notes") {
    return [
      getFullOrganization(),
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Blog", url: `${siteUrl}/blog` },
        { name: "Field Notes", url: `${siteUrl}/blog/field-notes` },
      ]),
    ];
  }

  if (normalized === "/services") {
    return [
      getFullOrganization(),
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Services", url: `${siteUrl}/services` },
      ]),
    ];
  }

  if (normalized === "/service-areas") {
    const cityItems = CITY_SLUGS.map((slug, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${siteUrl}/${slug}`,
      name: `${slugToTitle(slug)} Roofing Services`,
    }));
    return [
      getFullOrganization(),
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "ROOF EXPRESS Service Areas — 63 Bay Area Cities",
        url: `${siteUrl}/service-areas`,
        description: "ROOF EXPRESS serves 63 Bay Area cities across 7 regions with professional roofing services.",
        publisher: getOrgRef(),
        inLanguage: "en-US",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: CITY_SLUGS.length,
          itemListElement: cityItems,
        },
      },
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Service Areas", url: `${siteUrl}/service-areas` },
      ]),
    ];
  }

  if (normalized === "/city-roofing-guides") {
    const cityItems = CITY_SLUGS.map((slug, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${siteUrl}/city-roofing-guides/${slug}`,
      name: `${slugToTitle(slug)} Roofing`,
    }));
    return [
      getFullOrganization(),
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "ROOF EXPRESS City Roofing Guides",
        url: `${siteUrl}/city-roofing-guides`,
        description: "City-by-city roofing guides for every Bay Area community we serve.",
        publisher: getOrgRef(),
        inLanguage: "en-US",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: CITY_SLUGS.length,
          itemListElement: cityItems,
        },
      },
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "City Guides", url: `${siteUrl}/city-roofing-guides` },
      ]),
    ];
  }

  if (normalized === "/sitemap") {
    return [
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Sitemap", url: `${siteUrl}/sitemap` },
      ]),
    ];
  }

  if (normalized === "/privacy") {
    return [
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Privacy Policy", url: `${siteUrl}/privacy` },
      ]),
    ];
  }

  if (normalized === "/terms") {
    return [
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Terms of Service", url: `${siteUrl}/terms` },
      ]),
    ];
  }

  if (SERVICE_PAGES.includes(normalized)) {
    const meta = staticMetadata[normalized];
    const serviceName = SERVICE_TYPE_MAP[normalized];
    const richDesc = SERVICE_RICH_DESCRIPTIONS[normalized] || meta?.description || SITE_CONFIG.defaultDescription;
    return [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: serviceName,
        name: `${serviceName} — ROOF EXPRESS`,
        url: `${siteUrl}${normalized}`,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}${SITE_CONFIG.schemaImage}`,
          width: "1200",
          height: "800",
        },
        provider: getOrgRef(),
        areaServed: [
          { "@type": "City", name: "San Francisco" },
          { "@type": "City", name: "Daly City" },
          { "@type": "City", name: "South San Francisco" },
          { "@type": "City", name: "Palo Alto" },
          { "@type": "City", name: "Mountain View" },
          { "@type": "City", name: "San Jose" },
          { "@type": "City", name: "Oakland" },
          { "@type": "City", name: "Fremont" },
          { "@type": "City", name: "Berkeley" },
          { "@type": "City", name: "San Mateo" },
          { "@type": "City", name: "Redwood City" },
          { "@type": "City", name: "Menlo Park" },
          { "@type": "City", name: "Sunnyvale" },
          { "@type": "City", name: "Santa Clara" },
          { "@type": "City", name: "Hayward" },
          { "@type": "City", name: "Walnut Creek" },
          { "@type": "City", name: "San Rafael" },
          { "@type": "City", name: "Novato" },
          { "@type": "City", name: "Corte Madera" },
          { "@type": "City", name: "Larkspur" },
          { "@type": "City", name: "Fairfax" },
          { "@type": "City", name: "San Anselmo" },
          { "@type": "City", name: "Belvedere" },
          { "@type": "City", name: "Kentfield" },
        ],
        description: richDesc,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
          },
          seller: getOrgRef(),
        },
        termsOfService: `${siteUrl}/terms`,
      },
      {
        "@context": "https://schema.org",
        "@type": "RoofingContractor",
        "@id": `${siteUrl}/#roofingcontractor`,
        name: "Roof Express",
        telephone: SITE_CONFIG.phone,
        url: `${siteUrl}/`,
        logo: getLogoObject(),
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}${SITE_CONFIG.schemaImage}`,
          width: "1200",
          height: "800",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address.street,
          addressLocality: SITE_CONFIG.address.city,
          addressRegion: SITE_CONFIG.address.state,
          postalCode: SITE_CONFIG.address.zip,
          addressCountry: { "@type": "Country", name: "US" },
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE_CONFIG.geo.latitude,
          longitude: SITE_CONFIG.geo.longitude,
        },
        priceRange: "$650-$1150",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 5.0,
          reviewCount: 85,
          bestRating: 5,
          worstRating: 1,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: serviceName,
        speakable: getSpeakable(),
        url: `${siteUrl}${normalized}`,
      },
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Services", url: `${siteUrl}/services` },
        { name: serviceName, url: `${siteUrl}${normalized}` },
      ]),
      ...(SERVICE_HOWTO[normalized] ? [{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: SERVICE_HOWTO[normalized].name,
        description: SERVICE_HOWTO[normalized].description,
        totalTime: SERVICE_HOWTO[normalized].totalTime,
        image: { "@type": "ImageObject", url: `${siteUrl}${SITE_CONFIG.schemaImage}`, width: "1200", height: "800" },
        estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "Contact for estimate" },
        supply: [{ "@type": "HowToSupply", name: "Roofing materials selected during consultation" }],
        tool: [{ "@type": "HowToTool", name: "Professional roofing equipment" }],
        step: SERVICE_HOWTO[normalized].steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
          url: `${siteUrl}${normalized}#step-${i + 1}`,
        })),
      }] : []),
    ];
  }

  const csJsonMatch = normalized.match(/^\/([a-z-]+)\/(roof-repair|roof-replacement|residential-roofing|commercial-roofing|gutters)$/);
  if (csJsonMatch && CITY_SLUGS.includes(csJsonMatch[1])) {
    const csCity = csJsonMatch[1];
    const csService = csJsonMatch[2];
    const csCityName = slugToTitle(csCity);
    const csGeo = CITY_GEO[csCity];
    const csServiceNames: Record<string, string> = {
      "roof-repair": "Roof Repair",
      "roof-replacement": "Roof Replacement",
      "residential-roofing": "Residential Roofing",
      "commercial-roofing": "Commercial Roofing",
      "gutters": "Gutters & Drainage",
    };
    const csName = csServiceNames[csService] || slugToTitle(csService);
    return [
      {
        "@context": "https://schema.org",
        "@type": ["RoofingContractor", "LocalBusiness"],
        name: `ROOF EXPRESS — ${csName} in ${csCityName}`,
        alternateName: [`${csName} Near Me ${csCityName}`, `${csCityName} ${csName}`, `Best ${csName} ${csCityName}`],
        url: `${siteUrl}/${csCity}/${csService}`,
        telephone: SITE_CONFIG.phone,
        image: `${siteUrl}${getCityImage(csCity)}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address.street,
          addressLocality: csCityName,
          addressRegion: "CA",
          postalCode: csGeo?.zip || SITE_CONFIG.address.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: csGeo?.lat || SITE_CONFIG.geo.latitude,
          longitude: csGeo?.lng || SITE_CONFIG.geo.longitude,
        },
        areaServed: [
          { "@type": "City", name: csCityName, containedInPlace: { "@type": "State", name: "California" } },
          ...(csGeo?.zips || []).map(z => ({ "@type": "PostalAddress" as const, postalCode: z, addressLocality: csCityName, addressRegion: "CA" })),
        ],
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: csGeo?.lat || SITE_CONFIG.geo.latitude,
            longitude: csGeo?.lng || SITE_CONFIG.geo.longitude,
          },
          geoRadius: "15000",
        },
        priceRange: "$650-$1150",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 5.0,
          reviewCount: 85,
          bestRating: 5,
          worstRating: 1,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${csName} Services`,
          itemListElement: [{
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `${csName} in ${csCityName}`,
              description: `Best ${csName.toLowerCase()} near ${csCityName}, CA ${csGeo?.zip || ""}. Professional ${csName.toLowerCase()} services by ROOF EXPRESS. Diamond Certified & GAF Master Elite. Serving ${csCityName} ZIP codes ${csGeo?.zips.join(", ") || ""}.`,
              areaServed: { "@type": "City", name: csCityName },
              provider: { "@type": "RoofingContractor", name: "ROOF EXPRESS" },
            },
          }],
        },
        sameAs: [SITE_CONFIG.social.googleBusinessProfile, SITE_CONFIG.social.yelp, SITE_CONFIG.manufacturerProfiles.bbb],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Who provides the best ${csName.toLowerCase()} near ${csCityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `ROOF EXPRESS is the top-rated ${csName.toLowerCase()} company near ${csCityName}, CA${csGeo ? ` (${csGeo.zips.slice(0, 3).join(", ")})` : ""}. We are Diamond Certified with a 5.0 Google rating and GAF Master Elite certified. Call (650) 666-5554 for a free estimate.` },
          },
          {
            "@type": "Question",
            name: `How much does ${csName.toLowerCase()} cost in ${csCityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `${csName} costs in ${csCityName} vary based on roof size, materials, and complexity. ROOF EXPRESS provides free, detailed written estimates with transparent pricing. We also offer 0% financing through Wisetack. Call (650) 666-5554.` },
          },
          {
            "@type": "Question",
            name: `What ZIP codes does ROOF EXPRESS serve for ${csName.toLowerCase()} near ${csCityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `We provide ${csName.toLowerCase()} services across all ${csCityName} ZIP codes${csGeo ? `: ${csGeo.zips.join(", ")}` : ""}. Full coverage across ${csGeo?.county || "the Bay Area"} County, CA.` },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: csName, item: `${siteUrl}/${csService === "residential-roofing" ? "residential" : csService === "commercial-roofing" ? "commercial" : csService}` },
          { "@type": "ListItem", position: 3, name: csCityName, item: `${siteUrl}/${csCity}` },
          { "@type": "ListItem", position: 4, name: `${csName} in ${csCityName}`, item: `${siteUrl}/${csCity}/${csService}` },
        ],
      },
    ];
  }

  const cityMatch = normalized.match(/^\/([a-z-]+)$/);
  if (cityMatch && CITY_SLUGS.includes(cityMatch[1])) {
    const citySlug = cityMatch[1];
    const cityName = slugToTitle(citySlug);
    const cityImg = getCityImage(citySlug);
    const cityGeo = CITY_GEO[citySlug];
    return [
      {
        ...getFullOrganization() as Record<string, unknown>,
        areaServed: [{ "@type": "City", name: cityName }],
      },
      {
        "@context": "https://schema.org",
        "@type": ["RoofingContractor", "LocalBusiness"],
        name: `ROOF EXPRESS — ${cityName} Roofer`,
        alternateName: [`${cityName} Roofing Company`, `Roofer Near Me ${cityName}`, `${cityName} Roof Repair`, `ROOF EXPRESS ${cityName}`],
        url: `${siteUrl}/${citySlug}`,
        telephone: SITE_CONFIG.phone,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}${cityImg}`,
          width: "1200",
          height: "800",
          caption: `ROOF EXPRESS roofing services in ${cityName}, CA`,
        },
        logo: getLogoObject(),
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address.street,
          addressLocality: cityName,
          addressRegion: "CA",
          postalCode: cityGeo?.zip || SITE_CONFIG.address.zip,
          addressCountry: { "@type": "Country", name: "US" },
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: cityGeo?.lat || SITE_CONFIG.geo.latitude,
          longitude: cityGeo?.lng || SITE_CONFIG.geo.longitude,
        },
        areaServed: [
          { "@type": "City", name: cityName, containedInPlace: { "@type": "State", name: "California" } },
          ...(cityGeo?.zips || []).map(z => ({ "@type": "PostalAddress" as const, postalCode: z, addressLocality: cityName, addressRegion: "CA" })),
        ],
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: cityGeo?.lat || SITE_CONFIG.geo.latitude,
            longitude: cityGeo?.lng || SITE_CONFIG.geo.longitude,
          },
          geoRadius: "15000",
        },
        priceRange: "$650-$1150",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 5.0,
          reviewCount: 85,
          bestRating: 5,
          worstRating: 1,
        },
        parentOrganization: getOrgRef(),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Roofing Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Replacement" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Repair" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flat Roofing" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Installation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Skylight Installation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Roofing" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Roof Repair" } },
          ],
        },
        email: SITE_CONFIG.email,
        sameAs: [SITE_CONFIG.social.facebook, SITE_CONFIG.social.instagram, SITE_CONFIG.social.youtube, SITE_CONFIG.social.tiktok, SITE_CONFIG.social.yelp, SITE_CONFIG.social.googleBusinessProfile, SITE_CONFIG.manufacturerProfiles.gaf, SITE_CONFIG.manufacturerProfiles.certainteed, SITE_CONFIG.manufacturerProfiles.owensCorning, SITE_CONFIG.manufacturerProfiles.bbb, SITE_CONFIG.manufacturerProfiles.cslb],
        openingHoursSpecification: SITE_CONFIG.hours.schema.map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.dayOfWeek, opens: h.opens, closes: h.closes })),
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "certification",
            name: "Diamond Certified",
            recognizedBy: { "@type": "Organization", name: "American Ratings Corporation" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "certification",
            name: "GAF Master Elite Contractor",
            recognizedBy: { "@type": "Organization", name: "GAF" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "certification",
            name: "Owens Corning Platinum Preferred Contractor",
            recognizedBy: { "@type": "Organization", name: "Owens Corning" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "certification",
            name: "CertainTeed Select ShingleMaster",
            recognizedBy: { "@type": "Organization", name: "CertainTeed" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "license",
            name: "CSLB License #1072766",
            recognizedBy: { "@type": "Organization", name: "California Contractors State License Board" },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Roofing",
        name: `Roofing Services in ${cityName}, CA — ROOF EXPRESS`,
        provider: getOrgRef(),
        areaServed: [
          { "@type": "City", name: cityName, containedInPlace: { "@type": "AdministrativeArea", name: `${cityGeo?.county || ""} County, CA` } },
          ...(cityGeo?.zips || []).map(z => ({ "@type": "PostalAddress" as const, postalCode: z, addressRegion: "CA" })),
        ],
        description: `Best roofer near ${cityName}, CA ${cityGeo?.zip || ""}. Professional roofing company serving ${cityName} and ${cityGeo?.county || "Bay Area"} County. Roof repair, roof replacement, flat roofing, gutters, skylights & emergency service. Diamond Certified, GAF Master Elite, CSLB #1072766. Serving ZIP codes ${cityGeo?.zips.join(", ") || ""}. Free estimates — (650) 666-5554.`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${cityName} Roofing Services`,
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Roof Replacement in ${cityName}` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Roof Repair in ${cityName}` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Flat Roofing in ${cityName}` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Gutter Installation in ${cityName}` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: `Emergency Roof Repair in ${cityName}` } },
          ],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${cityName} Roofing Contractor`,
        speakable: getSpeakable(),
        url: `${siteUrl}/${citySlug}`,
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Who is the best roofing company near ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `ROOF EXPRESS is the top-rated roofing company near ${cityName}, CA${cityGeo ? ` (${cityGeo.zips.slice(0, 3).join(", ")})` : ""}. We are Diamond Certified with a 5.0 Google rating, GAF Master Elite, Owens Corning Platinum Preferred, and CertainTeed Select ShingleMaster. We've completed thousands of residential and commercial roofing projects across ${cityName} and ${cityGeo?.county || "the Bay Area"} County.` },
          },
          {
            "@type": "Question",
            name: `How much does a new roof cost in ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `The average roof replacement in ${cityName} costs between $8,000 and $25,000 depending on the size, pitch, material, and complexity of your roof. ROOF EXPRESS provides free, detailed written estimates so you know exactly what to expect before any work begins. We also offer 0% financing through Wisetack.` },
          },
          {
            "@type": "Question",
            name: `Where can I find a roofer near me in ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `ROOF EXPRESS serves all of ${cityName}${cityGeo ? `, including ZIP codes ${cityGeo.zips.join(", ")}` : ""}. Call (650) 666-5554 for a free same-day estimate or visit roof-ex.com to book online.` },
          },
          {
            "@type": "Question",
            name: `How long does a roof replacement take in ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `Most residential roof replacements in ${cityName} are completed in 2-3 days. Larger or more complex projects may take 4-5 days. We work efficiently while maintaining our quality standards, and we always clean up thoroughly at the end of each workday.` },
          },
          {
            "@type": "Question",
            name: `Do I need a permit to replace my roof in ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `Yes, most ${cityName} roof replacements require a building permit from the ${cityGeo?.county || cityName} County Building Department. ROOF EXPRESS handles the entire permitting process for you, including the application, required inspections, and final sign-off. This is included in our service at no extra charge.` },
          },
          {
            "@type": "Question",
            name: `What roofing materials work best in ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `For ${cityName}'s Bay Area climate, we recommend GAF Timberline HDZ or Owens Corning Duration shingles for sloped roofs. For flat roofs, torch-down modified bitumen or TPO membrane systems provide the best long-term performance. Our team will recommend the ideal material based on your specific roof and budget.` },
          },
          {
            "@type": "Question",
            name: `Does ROOF EXPRESS offer emergency roof repair near ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `Yes! We offer 24/7 emergency roof repair services throughout ${cityName}${cityGeo ? ` and all ${cityGeo.county} County` : ""}. If you have an active leak or storm damage, call us at (650) 666-5554 for immediate assistance. We can typically have a crew on-site the same day.` },
          },
          {
            "@type": "Question",
            name: `Is ROOF EXPRESS licensed and insured in ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `Absolutely. ROOF EXPRESS holds California State License Board (CSLB) License #1072766 with full workers' compensation and general liability insurance. We are also GAF Master Elite certified, Diamond Certified, and an Owens Corning Platinum Preferred contractor — serving all of ${cityGeo?.county || ""} County.` },
          },
          {
            "@type": "Question",
            name: `What ZIP codes does ROOF EXPRESS serve near ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `We provide full roofing services across all ${cityName} ZIP codes${cityGeo ? `: ${cityGeo.zips.join(", ")}` : ""}. Our service area covers ${cityName} and surrounding areas in ${cityGeo?.county || "the Bay Area"} County, CA.` },
          },
        ],
      },
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: cityName, url: `${siteUrl}/${citySlug}` },
      ]),
    ];
  }

  const cityGuideMatch2 = normalized.match(/^\/city-roofing-guides\/([a-z-]+)$/);
  if (cityGuideMatch2 && CITY_SLUGS.includes(cityGuideMatch2[1])) {
    const citySlug = cityGuideMatch2[1];
    const cityName = slugToTitle(citySlug);
    const cityImg = getCityImage(citySlug);
    const guideGeo = CITY_GEO[citySlug];
    const guideUrl = `${siteUrl}/city-roofing-guides/${citySlug}`;
    return [
      {
        "@context": "https://schema.org",
        "@type": ["RoofingContractor", "LocalBusiness"],
        name: `ROOF EXPRESS — Roofer Near ${cityName}`,
        alternateName: [`${cityName} Roofing Company`, `Best Roofer Near Me ${cityName}`],
        url: `${siteUrl}/${citySlug}`,
        telephone: SITE_CONFIG.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: cityName,
          addressRegion: "CA",
          postalCode: guideGeo?.zip || "",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: guideGeo?.lat || SITE_CONFIG.geo.latitude,
          longitude: guideGeo?.lng || SITE_CONFIG.geo.longitude,
        },
        areaServed: [
          { "@type": "City", name: cityName, containedInPlace: { "@type": "State", name: "California" } },
          ...(guideGeo?.zips || []).map(z => ({ "@type": "PostalAddress" as const, postalCode: z, addressLocality: cityName, addressRegion: "CA" })),
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 5.0,
          reviewCount: 85,
          bestRating: 5,
          worstRating: 1,
        },
        priceRange: "$650-$1150",
      },
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: `Complete Roofing Guide for ${cityName}, CA`,
        description: `Complete ${cityName} roofing guide for 2026: local permit requirements, climate-specific material recommendations, average cost ranges, common roof problems, and seasonal maintenance tips.`,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}${cityImg}`,
          width: "1200",
          height: "800",
          caption: `Roofing guide for ${cityName}, California`,
        },
        datePublished: "2025-01-15",
        dateModified: "2026-02-01",
        wordCount: 3000,
        timeRequired: "PT12M",
        inLanguage: "en-US",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: [
          { "@type": "City", name: cityName },
          { "@type": "Thing", name: "Roofing" },
          { "@type": "Thing", name: "Roof Replacement" },
          { "@type": "Thing", name: "Roofing Permits" },
          { "@type": "Thing", name: "Roof Maintenance" },
          { "@type": "Thing", name: "Roofing Materials" },
          { "@type": "Thing", name: "Roof Cost Estimation" },
        ],
        keywords: `${cityName} roofing guide 2026, roof cost ${cityName}, roofing permit ${cityName} CA, best roofing material ${cityName}, roof maintenance tips, common roof problems ${cityName}, seasonal roof care, roof replacement cost California`,
        articleSection: "City Roofing Guides",
        author: {
          "@type": "Organization",
          name: "Roof Express",
          url: `${siteUrl}/`,
          logo: getLogoObject(),
        },
        publisher: {
          "@type": "Organization",
          "@id": `${siteUrl}/#roofingcontractor`,
          name: "Roof Express",
          logo: getLogoObject(),
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": guideUrl,
          speakable: getSpeakable(),
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `Seasonal Roof Maintenance Guide for ${cityName}, CA`,
        description: `Step-by-step seasonal roof maintenance checklist for ${cityName} homeowners covering spring, summer, fall, and winter tasks.`,
        totalTime: "PT2H",
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: "USD",
          value: "0-200",
        },
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Spring Inspection",
            text: `After winter rains, inspect your ${cityName} roof for damaged or missing shingles, check flashing around vents and chimneys, and clear any debris from gutters and valleys.`,
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Summer Preparation",
            text: `Check for UV damage, ensure attic ventilation is adequate for ${cityName}'s warm months, inspect caulking and sealants, and trim overhanging tree branches.`,
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Fall Maintenance",
            text: `Clean gutters and downspouts before the rainy season, check for loose or cracked shingles, inspect skylights and roof penetrations, and schedule a professional inspection.`,
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Winter Monitoring",
            text: `Monitor your ${cityName} roof during storms for active leaks, check attic for moisture or condensation, keep emergency tarping materials accessible, and address any issues promptly.`,
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `What climate factors affect roofing in ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `${cityName}'s Bay Area microclimate includes seasonal rainfall, fog exposure, UV radiation, and occasional high winds. These factors influence material selection, with high-wind-rated shingles and moisture-resistant underlayment being especially important for long-term roof performance.` },
          },
          {
            "@type": "Question",
            name: `What permits are required for roofing in ${cityName}, CA?`,
            acceptedAnswer: { "@type": "Answer", text: `Most roof replacements in ${cityName} require a building permit from the local building department. Permit costs and timelines vary by municipality. Re-roofing over existing layers may have different requirements than full tear-off projects. Your contractor should handle the permitting process.` },
          },
          {
            "@type": "Question",
            name: `What are the best roofing materials for ${cityName}'s climate?`,
            acceptedAnswer: { "@type": "Answer", text: `For ${cityName}, architectural asphalt shingles (Class IV impact-rated) perform well on sloped roofs. For flat roofs, TPO membrane or modified bitumen provide excellent waterproofing. Cool roof coatings help meet California Title 24 energy requirements and reduce cooling costs.` },
          },
          {
            "@type": "Question",
            name: `How much does roof replacement cost in ${cityName} in 2026?`,
            acceptedAnswer: { "@type": "Answer", text: `Roof replacement costs in ${cityName} range from $8,000 to $30,000+ depending on roof size, material choice, pitch complexity, and number of layers to remove. Flat roof systems typically cost $6,000–$18,000. Always get multiple written estimates from licensed contractors.` },
          },
          {
            "@type": "Question",
            name: `What are common roofing problems in ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `Common roofing issues in ${cityName} include wind-lifted shingles, flashing failures around chimneys and skylights, gutter clogs from debris, moss or algae growth in shaded areas, and ponding water on flat roofs. Regular inspections help catch problems early.` },
          },
          {
            "@type": "Question",
            name: `Who is the best roofer near me in ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `ROOF EXPRESS is the top-rated roofer near ${cityName}, CA${guideGeo ? ` (ZIP codes ${guideGeo.zips.slice(0, 3).join(", ")})` : ""}. Diamond Certified, 5.0★ Google rated, GAF Master Elite. Serving all of ${cityName} and ${guideGeo?.county || "the Bay Area"} County. Call (650) 666-5554 for a free estimate.` },
          },
          {
            "@type": "Question",
            name: `What ZIP codes does ROOF EXPRESS serve near ${cityName}?`,
            acceptedAnswer: { "@type": "Answer", text: `ROOF EXPRESS provides roofing services across all ${cityName} ZIP codes${guideGeo ? `: ${guideGeo.zips.join(", ")}` : ""}. Full coverage throughout ${guideGeo?.county || "the Bay Area"} County, California.` },
          },
        ],
      },
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "City Guides", url: `${siteUrl}/city-roofing-guides` },
        { name: `${cityName} Roofing Guide`, url: guideUrl },
      ]),
    ];
  }

  const blogCityGuideMatch = normalized.match(/^\/blog\/([a-z-]+)-roofing-guide$/);
  if (blogCityGuideMatch) {
    const citySlug = blogCityGuideMatch[1];
    const cityName = slugToTitle(citySlug);
    const blogSlug = `${citySlug}-roofing-guide`;
    const blogTitle = `${cityName} Roofing Guide`;
    const description = blogDescriptions[blogSlug] || `Expert roofing guide for ${cityName}, CA. Professional insights from ROOF EXPRESS.`;
    return [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: blogTitle,
        description,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}${SITE_CONFIG.schemaImage}`,
          width: "1200",
          height: "800",
        },
        datePublished: "2025-01-15",
        dateModified: "2026-02-01",
        wordCount: 2500,
        timeRequired: "PT10M",
        inLanguage: "en-US",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: [
          { "@type": "City", name: cityName },
          { "@type": "Thing", name: "Roofing" },
          { "@type": "Thing", name: "Roof Replacement" },
          { "@type": "Thing", name: "Roofing Costs" },
        ],
        keywords: `${cityName} roofing, roofer ${cityName} CA, roof repair ${cityName}, roof cost ${cityName}, roofing contractor ${cityName}, best roofer ${cityName}`,
        articleSection: "City Roofing Guides",
        author: {
          "@type": "Organization",
          name: "Roof Express",
          url: `${siteUrl}/`,
          logo: getLogoObject(),
        },
        publisher: {
          "@type": "Organization",
          "@id": `${siteUrl}/#roofingcontractor`,
          name: "Roof Express",
          logo: getLogoObject(),
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}/blog/${blogSlug}`,
          speakable: getSpeakable(),
        },
      },
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Blog", url: `${siteUrl}/blog` },
        { name: blogTitle, url: `${siteUrl}/blog/${blogSlug}` },
      ]),
    ];
  }

  const blogMatch = normalized.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const blogSlug = blogMatch[1];
    const blogTitle = slugToTitle(blogSlug);
    const description = blogDescriptions[blogSlug] || `Expert guide on ${blogTitle.toLowerCase()}. Professional roofing insights from ROOF EXPRESS.`;
    const blogArticleKeywords = blogSlug.split("-").filter(w => w.length > 2).join(", ") + ", roofing guide Bay Area, roofing tips, roof maintenance, ROOF EXPRESS";
    return [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: blogTitle,
        description,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}${SITE_CONFIG.schemaImage}`,
          width: "1200",
          height: "800",
        },
        datePublished: "2025-01-15",
        dateModified: "2026-02-01",
        wordCount: 2500,
        timeRequired: "PT10M",
        inLanguage: "en-US",
        isPartOf: { "@id": `${siteUrl}/#website` },
        keywords: blogArticleKeywords,
        articleSection: "Roofing Guides",
        author: {
          "@type": "Organization",
          name: "Roof Express",
          url: `${siteUrl}/`,
          logo: getLogoObject(),
        },
        publisher: {
          "@type": "Organization",
          "@id": `${siteUrl}/#roofingcontractor`,
          name: "Roof Express",
          logo: getLogoObject(),
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}/blog/${blogSlug}`,
          speakable: getSpeakable(),
        },
      },
      buildBreadcrumbs([
        { name: "Home", url: `${siteUrl}/` },
        { name: "Blog", url: `${siteUrl}/blog` },
        { name: blogTitle, url: `${siteUrl}/blog/${blogSlug}` },
      ]),
    ];
  }

  return null;
}

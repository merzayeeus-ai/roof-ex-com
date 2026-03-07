export const SERVICE_TYPES = [
  {
    slug: "roof-repair",
    name: "Roof Repair",
    parentPage: "/roof-repair",
    icon: "fa-tools",
    divisionLabel: "Repair Division",
    heroImage: "/images/patch-roof-branded.webp",
    heroAlt: "Roof repair in progress",
    tagline: "Stop Leaks Fast",
    trustBadges: ["Same-Day Inspections", "Emergency Available 24/7", "Insurance Claims Expert", "Lifetime Repair Warranty"],
    baseFaqs: [
      { q: "How quickly can you respond to a roof leak?", a: "We offer same-day emergency response. For active leaks, call 650-666-5554 and we can have a crew on-site within hours. We carry tarping materials for immediate mitigation while scheduling a permanent repair." },
      { q: "How much does roof repair typically cost?", a: "Minor repairs like shingle replacement or flashing re-sealing typically range from $350–$1,200. Complex repairs involving structural work or large flat-roof sections can range from $1,500–$5,000+. We provide a fixed-price quote before work begins." },
      { q: "Do you offer a warranty on roof repairs?", a: "Yes. All ROOF EXPRESS repairs include a minimum 5-year workmanship warranty. When we use GAF or Owens Corning certified materials, additional manufacturer warranties apply." },
    ],
    contentSections: [
      { heading: "Leak Detection & Diagnostics", icon: "fa-search", body: "Our certified technicians use infrared moisture scanning and systematic water testing to pinpoint the exact source of every leak — even hidden ones that other companies miss." },
      { heading: "Flashing & Penetration Repair", icon: "fa-wrench", body: "Chimney flashing, pipe boots, skylight seals, and vent collars are the most common leak sources. We use commercial-grade sealants and fabricate custom flashing on-site." },
      { heading: "Storm & Wind Damage Repair", icon: "fa-wind", body: "After a storm, we document all damage with photos for your insurance claim and handle the full restoration — from emergency tarping to permanent shingle and underlayment replacement." },
    ],
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    parentPage: "/roof-replacement",
    icon: "fa-home",
    divisionLabel: "Replacement Division",
    heroImage: "/images/residential-hero.webp",
    heroAlt: "Complete roof replacement in progress",
    tagline: "Full Re-Roof Systems",
    trustBadges: ["GAF Master Elite Contractor", "Diamond Certified", "Lifetime Warranty Available", "Free Estimates"],
    baseFaqs: [
      { q: "How long does a full roof replacement take?", a: "Most residential re-roofs are completed in 1–3 days depending on roof size and complexity. We handle all tear-off, inspection, underlayment, and new installation with minimal disruption to your daily routine." },
      { q: "How much does a roof replacement cost?", a: "A typical Bay Area roof replacement ranges from $15,000–$45,000 depending on size, pitch, material choice, and structural repairs needed. We provide transparent, itemized quotes with no hidden fees." },
      { q: "What roofing materials do you recommend?", a: "For the Bay Area climate, we most often recommend GAF Timberline HDZ architectural shingles for their Class A fire rating, wind resistance, and 50-year warranty. For flat roofs, GAF EverGuard TPO provides superior UV protection." },
    ],
    contentSections: [
      { heading: "Full Tear-Off & Deck Inspection", icon: "fa-layer-group", body: "Every replacement starts with a complete tear-off to the deck. We inspect every square foot of sheathing for rot, soft spots, and structural integrity before installing new materials." },
      { heading: "Ventilation & Energy Efficiency", icon: "fa-fan", body: "Proper attic ventilation extends roof life by 25% or more. We install ridge vents, soffit intake, and radiant barriers calibrated to your home's specific square footage and climate zone." },
      { heading: "GAF Golden Pledge Warranty", icon: "fa-shield-alt", body: "As GAF Master Elite contractors (top 2% nationally), we offer the Golden Pledge warranty — 50 years on materials plus 25 years on workmanship, fully backed by GAF Corporation." },
    ],
  },
  {
    slug: "residential-roofing",
    name: "Residential Roofing",
    parentPage: "/residential",
    icon: "fa-house-user",
    divisionLabel: "Residential Division",
    heroImage: "/images/residential-hero.webp",
    heroAlt: "Residential roofing installation",
    tagline: "Premium Home Protection",
    trustBadges: ["GAF Master Elite", "Diamond Certified", "CSLB #1072766", "5-Star Rated"],
    baseFaqs: [
      { q: "What residential roofing services do you offer?", a: "We provide complete residential roofing including new installations, re-roofs, repairs, maintenance, and inspections. We work with asphalt shingles, tile, metal, flat roofing systems, and designer architectural products." },
      { q: "How do I know if my roof needs replacing?", a: "Key signs include curling or missing shingles, granule loss in gutters, daylight visible through the attic, and a roof older than 20–25 years. We offer free inspections with a detailed photo report of your roof's condition." },
      { q: "Do you help with building permits?", a: "Yes. We handle the entire permit process including application, plan submission, and final inspection scheduling. Our team knows the specific requirements for every city we serve." },
    ],
    contentSections: [
      { heading: "Asphalt Shingle Systems", icon: "fa-layer-group", body: "From 3-tab to designer architectural shingles, we install the full range of asphalt roofing with factory-certified techniques that activate the strongest manufacturer warranties." },
      { heading: "Tile & Metal Roofing", icon: "fa-warehouse", body: "Concrete tile, clay tile, and standing-seam metal provide decades of maintenance-free protection. We install these premium systems with proper weight engineering and waterproofing underlayment." },
      { heading: "Attic Insulation & Ventilation", icon: "fa-temperature-low", body: "A complete roofing system includes proper attic ventilation and insulation. We assess your current setup and recommend improvements that reduce energy costs and extend roof life." },
    ],
  },
  {
    slug: "commercial-roofing",
    name: "Commercial Roofing",
    parentPage: "/commercial",
    icon: "fa-building",
    divisionLabel: "Commercial Division",
    heroImage: "/images/commercial-hero.webp",
    heroAlt: "Commercial flat roof installation",
    tagline: "Built for Business",
    trustBadges: ["Title 24 Compliant", "GAF Master Elite", "CSLB #1072766", "Fully Insured"],
    baseFaqs: [
      { q: "What types of commercial roofs do you install?", a: "We install TPO single-ply membranes, modified bitumen, built-up roofing (BUR), EPDM rubber, and standing-seam metal systems. Each system is selected based on your building's use, budget, and long-term maintenance goals." },
      { q: "Do you work on occupied commercial buildings?", a: "Yes. We plan installations around your business hours, stage materials to minimize disruption, and maintain strict safety protocols. Most commercial projects are completed without any business interruption." },
      { q: "What is a Title 24 cool roof?", a: "California Title 24 requires new and replacement commercial roofs to meet specific solar reflectance standards. Our TPO and cool-coat systems exceed these requirements, reducing energy costs by up to 30% and qualifying for utility rebates." },
    ],
    contentSections: [
      { heading: "TPO & Single-Ply Membranes", icon: "fa-ruler-combined", body: "Thermoplastic polyolefin (TPO) is the leading commercial roofing material for its reflectivity, chemical resistance, and hot-air weldable seams that create a monolithic, leak-proof surface." },
      { heading: "Preventative Maintenance Programs", icon: "fa-clipboard-check", body: "Our commercial maintenance agreements include semi-annual inspections, drain clearing, sealant touch-ups, and priority emergency response — extending roof life by 10+ years." },
      { heading: "Roof Coatings & Restoration", icon: "fa-paint-roller", body: "Silicone and acrylic roof coatings can add 10–15 years to an aging commercial roof at a fraction of replacement cost, while improving energy efficiency and meeting Title 24 requirements." },
    ],
  },
  {
    slug: "gutters",
    name: "Gutters & Drainage",
    parentPage: "/gutters",
    icon: "fa-tint",
    divisionLabel: "Gutter Division",
    heroImage: "/images/gutters-hero.webp",
    heroAlt: "Seamless gutter installation",
    tagline: "Protect Your Foundation",
    trustBadges: ["Seamless Gutters", "Leaf Guard Systems", "5-Year Warranty", "Free Estimates"],
    baseFaqs: [
      { q: "What type of gutters do you install?", a: "We install seamless aluminum gutters custom-fabricated on-site to the exact dimensions of your roofline. Seamless gutters eliminate leak-prone joints and come in 30+ colors to match your home." },
      { q: "How much do new gutters cost?", a: "Seamless aluminum gutters typically cost $8–$15 per linear foot installed, including downspouts and hangers. Gutter guard systems add $6–$12 per foot. An average home runs $1,500–$3,500 for a complete system." },
      { q: "Do I need gutter guards?", a: "If your home is near trees, gutter guards dramatically reduce maintenance and prevent clogs that cause water damage. We install micro-mesh systems that block even pine needles and seed pods while allowing maximum water flow." },
    ],
    contentSections: [
      { heading: "Seamless Gutter Fabrication", icon: "fa-ruler", body: "Our trucks carry portable fabrication machines that form continuous, jointless gutters from a single coil of aluminum — custom cut to fit your exact roofline measurements." },
      { heading: "Gutter Guard Systems", icon: "fa-leaf", body: "We install micro-mesh and surface-tension gutter guards that keep out leaves, pine needles, and debris while maintaining full water flow capacity even in heavy Bay Area rainstorms." },
      { heading: "Downspout & Drainage Design", icon: "fa-arrows-alt-v", body: "Proper drainage protects your foundation. We design downspout routing, splash blocks, and underground drainage connections that direct water safely away from your home's structure." },
    ],
  },
] as const;

export type ServiceType = (typeof SERVICE_TYPES)[number];

export const SERVICE_SLUG_SET = new Set(SERVICE_TYPES.map(s => s.slug));

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return SERVICE_TYPES.find(s => s.slug === slug);
}

export function generateCityServiceH1(cityName: string, serviceName: string): string {
  return `${serviceName} in ${cityName}, CA`;
}

export function generateCityServiceQuestions(cityName: string, service: ServiceType, neighborhoods: string[]): Array<{ q: string; a: string }> {
  const neighborhoodList = neighborhoods.slice(0, 3).join(", ");
  const questions: Array<{ q: string; a: string }> = [];

  switch (service.slug) {
    case "roof-repair":
      questions.push(
        { q: `How much does roof repair cost in ${cityName}?`, a: `Roof repair costs in ${cityName} typically range from $350 for minor fixes like shingle replacement to $5,000+ for complex structural repairs. The most common repairs we do in ${neighborhoodList} include flashing re-sealing, pipe boot replacement, and storm damage restoration. We provide free inspections with a detailed photo report and fixed-price quote.` },
        { q: `Can you fix a roof leak in ${cityName} the same day?`, a: `Yes. ROOF EXPRESS offers same-day emergency roof leak repair throughout ${cityName}. When you call 650-666-5554, our dispatch team can have a crew in ${neighborhoodList} within hours. We carry tarping materials and sealants for immediate mitigation.` },
        { q: `What causes most roof leaks in ${cityName} homes?`, a: `The most common leak sources in ${cityName} are deteriorated flashing around chimneys, worn pipe boots, cracked skylight seals, and wind-lifted shingles. Homes in ${neighborhoodList} are particularly susceptible to seasonal rain damage during the Bay Area wet season from November through March.` },
      );
      break;
    case "roof-replacement":
      questions.push(
        { q: `How much does a new roof cost in ${cityName}?`, a: `A full roof replacement in ${cityName} typically ranges from $15,000 to $45,000 depending on roof size, pitch, and material choice. Homes in ${neighborhoodList} average around $22,000–$30,000 for standard architectural shingles. We provide itemized quotes with no hidden fees.` },
        { q: `How long does a roof replacement take in ${cityName}?`, a: `Most residential roof replacements in ${cityName} are completed in 1–3 days. Larger homes or complex multi-level roofs in ${neighborhoodList} may take 3–5 days. We handle all permits, tear-off, installation, and cleanup.` },
        { q: `What is the best roofing material for ${cityName} homes?`, a: `For the ${cityName} climate, we recommend GAF Timberline HDZ architectural shingles for their Class A fire rating, wind resistance up to 130 mph, and 50-year limited warranty. Homes in ${neighborhoodList} benefit from the UV-resistant granule technology that withstands Bay Area sun exposure.` },
      );
      break;
    case "residential-roofing":
      questions.push(
        { q: `What residential roofing services are available in ${cityName}?`, a: `ROOF EXPRESS offers complete residential roofing in ${cityName} including new installations, full re-roofs, repairs, maintenance plans, and inspections. We serve all neighborhoods including ${neighborhoodList} with asphalt shingles, tile, metal, and flat roofing systems.` },
        { q: `How do I choose a roofing contractor in ${cityName}?`, a: `Look for a contractor with active CSLB licensing (#1072766), insurance, and manufacturer certifications. ROOF EXPRESS holds Diamond Certified and GAF Master Elite status — placing us in the top 2% of contractors nationally. We've completed hundreds of projects across ${cityName}.` },
        { q: `Does ${cityName} require a permit for roofing work?`, a: `Yes. ${cityName} requires building permits for roof replacements and most major repairs. ROOF EXPRESS handles the entire permit process — from application to final inspection — so you don't have to visit city hall. We know ${cityName}'s specific requirements and building codes.` },
      );
      break;
    case "commercial-roofing":
      questions.push(
        { q: `What commercial roofing systems work best in ${cityName}?`, a: `For ${cityName} commercial buildings, TPO single-ply membrane is the leading choice for flat roofs — it meets Title 24 energy requirements and provides excellent UV resistance. Buildings in ${neighborhoodList} benefit from our cool-roof systems that reduce energy costs by up to 30%.` },
        { q: `How much does commercial roofing cost in ${cityName}?`, a: `Commercial roofing in ${cityName} ranges from $5–$12 per square foot depending on the system. TPO installations average $7–$9/sf, while modified bitumen runs $6–$8/sf. We provide detailed proposals for buildings in ${neighborhoodList} and throughout ${cityName}.` },
        { q: `Do you offer commercial roof maintenance in ${cityName}?`, a: `Yes. Our preventative maintenance program for ${cityName} businesses includes semi-annual inspections, drain clearing, sealant touch-ups, and priority emergency response. Regular maintenance extends commercial roof life by 10+ years and prevents costly emergency repairs.` },
      );
      break;
    case "gutters":
      questions.push(
        { q: `How much do new gutters cost in ${cityName}?`, a: `Seamless aluminum gutters in ${cityName} cost $8–$15 per linear foot installed, including downspouts and hangers. A complete gutter system for an average home in ${neighborhoodList} runs $1,500–$3,500. Gutter guard add-ons cost $6–$12 per foot extra.` },
        { q: `What type of gutters work best for ${cityName} homes?`, a: `We install 5-inch and 6-inch seamless aluminum gutters custom-fabricated on-site to fit your exact roofline. For homes in ${neighborhoodList} near trees, we recommend adding micro-mesh gutter guards that block leaves and pine needles while maintaining full water flow.` },
        { q: `Do I need gutter guards in ${cityName}?`, a: `If your ${cityName} home is near mature trees — especially in ${neighborhoodList} — gutter guards dramatically reduce maintenance and prevent clogs that cause water damage, foundation issues, and fascia rot during Bay Area rain season.` },
      );
      break;
  }

  return questions;
}

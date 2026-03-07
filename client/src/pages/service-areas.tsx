import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection } from "@/components/page-bottom";
import { useSEO } from "@/hooks/use-seo";

const regions = [
  {
    name: "San Francisco & North",
    icon: "fa-city",
    description: "From the fog-swept hills of San Francisco to South San Francisco's commercial corridors, we handle every roofing challenge the northern peninsula presents.",
    cities: [
      { name: "San Francisco", slug: "san-francisco", pop: "874K" },
      { name: "South San Francisco", slug: "south-san-francisco", pop: "67K" },
      { name: "Daly City", slug: "daly-city", pop: "104K" },
      { name: "San Bruno", slug: "san-bruno", pop: "44K" },
      { name: "Brisbane", slug: "brisbane", pop: "5K" },
      { name: "Colma", slug: "colma", pop: "1.5K" },
    ],
  },
  {
    name: "Peninsula",
    icon: "fa-road",
    description: "The Peninsula's mix of mid-century homes, modern construction, and coastal influence requires roofing expertise tailored to each micro-climate.",
    cities: [
      { name: "Millbrae", slug: "millbrae", pop: "23K" },
      { name: "Burlingame", slug: "burlingame", pop: "31K" },
      { name: "San Mateo", slug: "san-mateo", pop: "105K" },
      { name: "Foster City", slug: "foster-city", pop: "34K" },
      { name: "Belmont", slug: "belmont", pop: "28K" },
      { name: "San Carlos", slug: "san-carlos", pop: "30K" },
      { name: "Redwood City", slug: "redwood-city", pop: "84K" },
    ],
  },
  {
    name: "South Bay",
    icon: "fa-microchip",
    description: "Silicon Valley's diverse housing stock — from Eichler homes in Sunnyvale to custom estates in Los Gatos — demands specialized roofing knowledge.",
    cities: [
      { name: "San Jose", slug: "san-jose", pop: "1M" },
      { name: "Palo Alto", slug: "palo-alto", pop: "68K" },
      { name: "Mountain View", slug: "mountain-view", pop: "82K" },
      { name: "Menlo Park", slug: "menlo-park", pop: "35K" },
      { name: "Los Altos", slug: "los-altos", pop: "31K" },
      { name: "Los Altos Hills", slug: "los-altos-hills", pop: "8K" },
      { name: "Sunnyvale", slug: "sunnyvale", pop: "155K" },
      { name: "Santa Clara", slug: "santa-clara", pop: "127K" },
      { name: "Cupertino", slug: "cupertino", pop: "60K" },
      { name: "Campbell", slug: "campbell", pop: "43K" },
      { name: "Saratoga", slug: "saratoga", pop: "31K" },
      { name: "Los Gatos", slug: "los-gatos", pop: "33K" },
      { name: "Milpitas", slug: "milpitas", pop: "80K" },
    ],
  },
  {
    name: "East Bay",
    icon: "fa-bridge",
    description: "Oakland's Victorians, Berkeley's hillside homes, and Fremont's suburban developments each present unique roofing considerations.",
    cities: [
      { name: "Oakland", slug: "oakland", pop: "433K" },
      { name: "Berkeley", slug: "berkeley", pop: "124K" },
      { name: "Hayward", slug: "hayward", pop: "162K" },
      { name: "Fremont", slug: "fremont", pop: "230K" },
      { name: "Union City", slug: "union-city", pop: "75K" },
      { name: "Newark", slug: "newark", pop: "48K" },
      { name: "Richmond", slug: "richmond", pop: "116K" },
      { name: "San Leandro", slug: "san-leandro", pop: "91K" },
      { name: "Livermore", slug: "livermore", pop: "90K" },
      { name: "Pleasanton", slug: "pleasanton", pop: "79K" },
      { name: "Dublin", slug: "dublin", pop: "72K" },
      { name: "Alameda", slug: "alameda", pop: "79K" },
    ],
  },
  {
    name: "Coastal & Hills",
    icon: "fa-mountain",
    description: "Coastal fog, salt air, and wind exposure make these areas the most demanding for roofing materials and installation techniques.",
    cities: [
      { name: "Pacifica", slug: "pacifica", pop: "39K" },
      { name: "Half Moon Bay", slug: "half-moon-bay", pop: "13K" },
      { name: "Woodside", slug: "woodside", pop: "5.5K" },
      { name: "Atherton", slug: "atherton", pop: "7K" },
      { name: "Portola Valley", slug: "portola-valley", pop: "4.5K" },
    ],
  },
  {
    name: "Marin & North Bay",
    icon: "fa-water",
    description: "From Sausalito's waterfront homes to Mill Valley's wooded hillsides, Marin County roofing requires expertise in steep slopes, coastal exposure, and fire-safe materials.",
    cities: [
      { name: "Sausalito", slug: "sausalito", pop: "7K" },
      { name: "Mill Valley", slug: "mill-valley", pop: "15K" },
      { name: "Tiburon", slug: "tiburon", pop: "9K" },
      { name: "San Rafael", slug: "san-rafael", pop: "61K" },
      { name: "Novato", slug: "novato", pop: "55K" },
      { name: "Corte Madera", slug: "corte-madera", pop: "10K" },
      { name: "Larkspur", slug: "larkspur", pop: "13K" },
      { name: "Fairfax", slug: "fairfax", pop: "8K" },
      { name: "San Anselmo", slug: "san-anselmo", pop: "13K" },
      { name: "Belvedere", slug: "belvedere", pop: "2K" },
      { name: "Kentfield", slug: "kentfield", pop: "7K" },
    ],
  },
  {
    name: "Contra Costa",
    icon: "fa-sun",
    description: "Contra Costa County's warm inland climate — from Walnut Creek to Danville — demands heat-resistant roofing systems with superior UV protection and ventilation.",
    cities: [
      { name: "Concord", slug: "concord", pop: "129K" },
      { name: "Walnut Creek", slug: "walnut-creek", pop: "70K" },
      { name: "Orinda", slug: "orinda", pop: "20K" },
      { name: "Lafayette", slug: "lafayette", pop: "26K" },
      { name: "San Ramon", slug: "san-ramon", pop: "84K" },
      { name: "Danville", slug: "danville", pop: "44K" },
    ],
  },
];

const totalCities = regions.reduce((sum, r) => sum + r.cities.length, 0);

export default function ServiceAreas() {
  useSEO("63 Bay Area Cities We Serve — Roofing Coverage Map | ROOF EXPRESS", "ROOF EXPRESS serves 63 Bay Area cities across 7 regions. Find your city for local roofing services, free estimates, and same-day inspections.", "Bay Area roofing service areas, San Francisco roofer, San Jose roofer, Oakland roofer, Peninsula roofer, South Bay roofer, East Bay roofer, Marin County roofer, 63 cities roofing");
  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[auto] md:min-h-[50vh] text-white pt-36 pb-20 md:pt-44 md:pb-32 lg:pt-52 lg:pb-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/sf-aerial-ocean.webp" alt="San Francisco Bay Area aerial view" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={1200} height={800} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 text-center px-4 md:px-6">
          <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-6 py-2 rounded-full mb-5 md:mb-8">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-brandOrangeLight">
              <i aria-hidden="true" className="fas fa-map-marked-alt mr-3"></i> Coverage Map
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-black mb-5 md:mb-8 leading-[0.9] tracking-tighter text-white drop-shadow-2xl" data-testid="text-service-areas-title">
            Serving the Entire <span className="text-brandOrangeLight">Bay Area</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-bold" data-testid="text-service-areas-subtitle">
            Expert roofing in every neighborhood. From San Francisco to San Jose, Oakland to Marin — we provide professional roofing services across {totalCities} Bay Area communities.
          </p>
        </div>
      </section>

      <section className="bg-brandNavy border-t border-white/10" data-testid="section-coverage-stats">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: String(totalCities), label: "Cities Served", icon: "fa-map-marker-alt" },
              { value: "7", label: "Bay Area Regions", icon: "fa-map" },
              { value: "Same Day", label: "Inspections Available", icon: "fa-clock" },
              { value: "24/7", label: "Emergency Response", icon: "fa-phone-alt" },
            ].map((stat) => (
              <div key={stat.label} className="py-8 text-center text-white" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <i aria-hidden="true" className={`fas ${stat.icon} text-brandOrangeLight text-lg mb-2`}></i>
                <p className="text-3xl md:text-4xl font-black">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brandGrey" data-testid="section-all-regions">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <div className="text-center mb-12 md:mb-16">
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">All Regions</span>
            <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-4" data-testid="text-regions-heading">
              {totalCities} Cities Across <span className="text-brandOrange">7 Regions</span>
            </h2>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Each city has a dedicated coverage page with local roofing information, neighborhood details, and service options specific to your area.
            </p>
          </div>

          <div className="space-y-10">
            {regions.map((region) => (
              <div key={region.name} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden" data-testid={`region-${region.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="bg-brandNavy px-6 md:px-8 py-5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-brandOrange rounded-xl flex items-center justify-center flex-shrink-0">
                    <i aria-hidden="true" className={`fas ${region.icon} text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-white tracking-tight">{region.name}</h3>
                    <p className="text-xs text-white/70 font-bold">{region.cities.length} cities</p>
                  </div>
                </div>
                <div className="px-6 md:px-8 py-4">
                  <p className="text-sm text-slate-500 mb-5">{region.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {region.cities.map((city) => (
                      <div key={city.slug} className="bg-brandGrey border border-gray-100 rounded-xl px-4 py-3">
                        <Link
                          href={`/${city.slug}`}
                          className="flex items-center gap-3 hover:text-brandOrange transition group"
                          data-testid={`link-city-${city.slug}`}
                        >
                          <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange text-xs group-hover:scale-110 transition-transform"></i>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-black text-brandNavy group-hover:text-brandOrange transition block truncate">{city.name}</span>
                            <span className="text-[10px] text-slate-500 font-bold">Pop. {city.pop}</span>
                          </div>
                          <i aria-hidden="true" className="fas fa-chevron-right text-[10px] text-slate-300 group-hover:text-brandOrange transition"></i>
                        </Link>
                        <Link
                          href={`/city-roofing-guides/${city.slug}`}
                          className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-200 text-[11px] font-bold text-slate-500 hover:text-brandOrange transition"
                          data-testid={`link-guide-${city.slug}`}
                        >
                          <i aria-hidden="true" className="fas fa-book-open text-[9px]"></i>
                          <span>Roofing Guide</span>
                          <i aria-hidden="true" className="fas fa-arrow-right text-[8px] ml-auto"></i>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-t border-gray-100 cv-auto" data-testid="section-why-local">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <div className="text-center mb-12">
            <span className="bg-brandNavy text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Why Local Matters</span>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy">
              Bay Area Roofing <span className="text-brandOrange">Expertise</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "fa-cloud-sun", title: "Micro-Climate Knowledge", text: "We understand how fog, salt air, UV exposure, and wind patterns affect roofing in each specific city across the Bay Area." },
              { icon: "fa-file-alt", title: "Local Permit Expertise", text: "Every Bay Area city has different permitting requirements. We handle all permits and inspections for your specific jurisdiction." },
              { icon: "fa-bolt", title: "Rapid Local Response", text: "With crews positioned across the Bay Area, we provide same-day inspections and emergency service to all 63 cities." },
            ].map((card) => (
              <div key={card.title} className="bg-brandGrey rounded-2xl p-8 border border-gray-100" data-testid={`card-${card.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="w-12 h-12 bg-brandOrange rounded-xl flex items-center justify-center mb-4">
                  <i aria-hidden="true" className={`fas ${card.icon} text-white`}></i>
                </div>
                <h3 className="text-base font-black text-brandNavy uppercase tracking-wide mb-2">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brandGrey border-t border-gray-100 cv-auto" data-testid="section-explore-guides">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl text-center">
          <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">More Resources</span>
          <h2 className="text-3xl md:text-4xl font-black text-brandNavy mb-4">
            Explore City <span className="text-brandOrange">Roofing Guides</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mb-8">
            Want detailed information about roofing costs, permits, climate considerations, and recommended materials for your city? Check out our comprehensive roofing guides.
          </p>
          <Link
            href="/city-roofing-guides"
            className="inline-flex items-center bg-brandNavy text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-brandOrange transition shadow-lg group"
            data-testid="link-explore-guides"
          >
            View City Roofing Guides <i aria-hidden="true" className="fas fa-book-open ml-3 group-hover:translate-x-1 transition"></i>
          </Link>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}

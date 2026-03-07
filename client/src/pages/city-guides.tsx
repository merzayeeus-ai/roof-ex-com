import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import { useSEO } from "@/hooks/use-seo";

const regionDescriptions: Record<string, string> = {
  "San Francisco & North": "From the fog-swept hills of San Francisco to South San Francisco's commercial corridors, we handle every roofing challenge the northern peninsula presents.",
  "Peninsula": "The Peninsula's mix of mid-century homes, modern construction, and coastal influence requires roofing expertise tailored to each micro-climate.",
  "South Bay": "Silicon Valley's diverse housing stock — from Eichler homes in Sunnyvale to custom estates in Los Gatos — demands specialized roofing knowledge.",
  "East Bay": "Oakland's Victorians, Berkeley's hillside homes, and Fremont's suburban developments each present unique roofing considerations.",
  "Coastal & Hills": "Coastal fog, salt air, and wind exposure make these areas the most demanding for roofing materials and installation techniques.",
  "Marin & North Bay": "From Sausalito's waterfront homes to Mill Valley's wooded hillsides, Marin County roofing requires expertise in steep slopes, coastal exposure, and fire-safe materials.",
  "Contra Costa": "Contra Costa County's warm inland climate — from Walnut Creek to Danville — demands heat-resistant roofing systems with superior UV protection and ventilation.",
};

const regions = [
  {
    name: "San Francisco & North",
    icon: "fa-city",
    cities: [
      { name: "San Francisco", slug: "san-francisco" },
      { name: "South San Francisco", slug: "south-san-francisco" },
      { name: "Daly City", slug: "daly-city" },
      { name: "San Bruno", slug: "san-bruno" },
      { name: "Brisbane", slug: "brisbane" },
      { name: "Colma", slug: "colma" },
    ],
  },
  {
    name: "Peninsula",
    icon: "fa-road",
    cities: [
      { name: "Millbrae", slug: "millbrae" },
      { name: "Burlingame", slug: "burlingame" },
      { name: "San Mateo", slug: "san-mateo" },
      { name: "Foster City", slug: "foster-city" },
      { name: "Belmont", slug: "belmont" },
      { name: "San Carlos", slug: "san-carlos" },
      { name: "Redwood City", slug: "redwood-city" },
    ],
  },
  {
    name: "South Bay",
    icon: "fa-microchip",
    cities: [
      { name: "San Jose", slug: "san-jose" },
      { name: "Palo Alto", slug: "palo-alto" },
      { name: "Mountain View", slug: "mountain-view" },
      { name: "Menlo Park", slug: "menlo-park" },
      { name: "Los Altos", slug: "los-altos" },
      { name: "Los Altos Hills", slug: "los-altos-hills" },
      { name: "Sunnyvale", slug: "sunnyvale" },
      { name: "Santa Clara", slug: "santa-clara" },
      { name: "Cupertino", slug: "cupertino" },
      { name: "Campbell", slug: "campbell" },
      { name: "Saratoga", slug: "saratoga" },
      { name: "Los Gatos", slug: "los-gatos" },
      { name: "Milpitas", slug: "milpitas" },
    ],
  },
  {
    name: "East Bay",
    icon: "fa-bridge",
    cities: [
      { name: "Oakland", slug: "oakland" },
      { name: "Berkeley", slug: "berkeley" },
      { name: "Hayward", slug: "hayward" },
      { name: "Fremont", slug: "fremont" },
      { name: "Union City", slug: "union-city" },
      { name: "Newark", slug: "newark" },
      { name: "Richmond", slug: "richmond" },
      { name: "San Leandro", slug: "san-leandro" },
      { name: "Livermore", slug: "livermore" },
      { name: "Pleasanton", slug: "pleasanton" },
      { name: "Dublin", slug: "dublin" },
      { name: "Alameda", slug: "alameda" },
    ],
  },
  {
    name: "Coastal & Hills",
    icon: "fa-mountain",
    cities: [
      { name: "Pacifica", slug: "pacifica" },
      { name: "Half Moon Bay", slug: "half-moon-bay" },
      { name: "Woodside", slug: "woodside" },
      { name: "Atherton", slug: "atherton" },
      { name: "Portola Valley", slug: "portola-valley" },
    ],
  },
  {
    name: "Marin & North Bay",
    icon: "fa-water",
    cities: [
      { name: "Sausalito", slug: "sausalito" },
      { name: "Mill Valley", slug: "mill-valley" },
      { name: "Tiburon", slug: "tiburon" },
      { name: "San Rafael", slug: "san-rafael" },
      { name: "Novato", slug: "novato" },
      { name: "Corte Madera", slug: "corte-madera" },
      { name: "Larkspur", slug: "larkspur" },
      { name: "Fairfax", slug: "fairfax" },
      { name: "San Anselmo", slug: "san-anselmo" },
      { name: "Belvedere", slug: "belvedere" },
      { name: "Kentfield", slug: "kentfield" },
    ],
  },
  {
    name: "Contra Costa",
    icon: "fa-sun",
    cities: [
      { name: "Concord", slug: "concord" },
      { name: "Walnut Creek", slug: "walnut-creek" },
      { name: "Orinda", slug: "orinda" },
      { name: "Lafayette", slug: "lafayette" },
      { name: "San Ramon", slug: "san-ramon" },
      { name: "Danville", slug: "danville" },
    ],
  },
];

const whyLocalCards = [
  {
    icon: "fa-cloud-sun",
    title: "Micro-Climate Knowledge",
    description: "We understand how fog, salt air, UV exposure, and wind patterns affect roofing in each specific city.",
  },
  {
    icon: "fa-file-alt",
    title: "Permit Expertise",
    description: "Every Bay Area city has different permitting requirements. We handle all permits and inspections for your specific jurisdiction.",
  },
  {
    icon: "fa-bolt",
    title: "Rapid Response",
    description: "With crews positioned across the Bay Area, we provide same-day inspections and emergency service to all 63 cities.",
  },
];

const relatedResources = [
  { title: "San Francisco Roofing Permits Explained", slug: "san-francisco-roofing-permits", icon: "fa-file-contract" },
  { title: "Bay Area Roofing Cost Factors", slug: "bay-area-roofing-cost-factors", icon: "fa-dollar-sign" },
  { title: "Best Roofing Materials for Coastal Cities", slug: "best-roofing-materials-coastal-cities", icon: "fa-water" },
];

export default function CityGuides() {
  useSEO("City Roofing Guides — Bay Area A to Z | ROOF EXPRESS", "City-by-city roofing guides for every Bay Area community we serve. Local costs, permits, and recommendations.");
  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[auto] md:min-h-[50vh] text-white pt-36 pb-20 md:pt-44 md:pb-32 lg:pt-52 lg:pb-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/san-francisco-painted-ladies.webp" alt="San Francisco Bay Area homes" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={1200} height={800} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 text-center px-4 md:px-6">
          <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-6 py-2 rounded-full mb-5 md:mb-8">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-brandOrangeLight">
              <i aria-hidden="true" className="fas fa-map-marked-alt mr-3"></i> Service Areas
            </span>
          </div>
     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-black mb-5 md:mb-8 leading-[0.9] tracking-tighter text-white drop-shadow-2xl" data-testid="text-city-guides-hero-title">
            Bay Area City <span className="text-brandOrangeLight">Roofing Guides (A–Z)</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-bold" data-testid="text-city-guides-hero-subtitle">
            Explore our roofing services tailored to every Bay Area city. Local expertise, neighborhood-specific solutions, and trusted craftsmanship across 60 communities.
          </p>
        </div>
      </section>

      <section className="bg-brandNavy border-t border-white/10" data-testid="section-city-stats">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "60", label: "Cities Served", icon: "fa-map-marker-alt" },
              { value: "5,000+", label: "Projects Completed", icon: "fa-check-circle" },
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-[3rem] overflow-hidden shadow-xl">
              <img
                src="/images/south-san-francisco.webp"
                alt="South San Francisco Aerial View"
                className="w-full h-72 object-cover"
                data-testid="img-city-ssf-aerial"
                loading="lazy"
                width={800}
                height={288}
              />
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-xl">
              <img
                src="/images/sunnyvale.webp"
                alt="Sunnyvale Neighborhoods Aerial View"
                className="w-full h-72 object-cover"
                data-testid="img-city-sunnyvale-aerial"
                loading="lazy"
                width={800}
                height={288}
              />
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-xl">
              <img
                src="/images/sausalito.webp"
                alt="Sausalito Waterfront Aerial View"
                className="w-full h-72 object-cover"
                data-testid="img-city-sausalito-aerial"
                loading="lazy"
                width={800}
                height={288}
              />
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-xl">
              <img
                src="/images/tiburon.webp"
                alt="Tiburon Waterfront Aerial View"
                className="w-full h-72 object-cover"
                data-testid="img-city-tiburon-aerial"
                loading="lazy"
                width={800}
                height={288}
              />
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-xl">
              <img src="/images/san-francisco-painted-ladies.webp" alt="San Francisco Painted Ladies" className="w-full h-72 object-cover" data-testid="img-city-sf-painted-ladies" loading="lazy" width={800} height={288} />
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-xl">
              <img src="/images/san-mateo.webp" alt="San Mateo Aerial View" className="w-full h-72 object-cover" data-testid="img-city-san-mateo" loading="lazy" width={800} height={288} />
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-xl">
              <img src="/images/santa-clara.webp" alt="Santa Clara Aerial View" className="w-full h-72 object-cover" data-testid="img-city-santa-clara" loading="lazy" width={800} height={288} />
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-xl">
              <img src="/images/san-jose.webp" alt="San Jose City Hall" className="w-full h-72 object-cover" data-testid="img-city-san-jose" loading="lazy" width={800} height={288} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          {regions.map((region) => (
            <div key={region.name} className="mb-16 last:mb-0" data-testid={`region-${region.name.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brandOrange/10 flex items-center justify-center text-brandOrange text-xl">
                  <i aria-hidden="true" className={`fas ${region.icon}`}></i>
                </div>
    <h2 className="text-2xl font-black uppercase tracking-tight text-brandNavy">{region.name}</h2>
                <span className="text-xs font-bold text-slate-500 bg-white px-3 py-1 rounded-full">{region.cities.length} cities</span>
              </div>
              {regionDescriptions[region.name] && (
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 ml-16 max-w-3xl" data-testid={`text-region-desc-${region.name.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}>
                  {regionDescriptions[region.name]}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {region.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/city-roofing-guides/${city.slug}`}
                    className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:border-brandOrange/30 hover:-translate-y-1 transition-all duration-300"
                    data-testid={`card-city-${city.slug}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brandBlue/10 flex items-center justify-center text-brandBlue group-hover:bg-brandOrange group-hover:text-white transition-all duration-300">
                        <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <h3 className="font-black text-brandNavy group-hover:text-brandOrange transition text-sm uppercase tracking-wide">{city.name}</h3>
                        <p className="text-xs text-slate-500 font-bold">Roofing Services</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs font-black text-brandOrange uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Guide <i aria-hidden="true" className="fas fa-arrow-right ml-2"></i>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white" data-testid="section-why-local">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">
              <i aria-hidden="true" className="fas fa-map-pin mr-2"></i> Local Advantage
            </span>
   <h2 className="text-3xl md:text-5xl font-black text-brandNavy " data-testid="text-why-local-title">
              Why Choose a Local <span className="text-brandOrange">Bay Area Roofer?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyLocalCards.map((card) => (
              <div
                key={card.title}
                className="bg-brandGrey rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                data-testid={`card-why-local-${card.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-brandNavy text-white flex items-center justify-center mb-6 shadow-lg">
                  <i aria-hidden="true" className={`fas ${card.icon} text-xl`}></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm tracking-wide mb-3">{card.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey" data-testid="section-related-resources">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">
              <i aria-hidden="true" className="fas fa-book-open mr-2"></i> Learn More
            </span>
   <h2 className="text-3xl md:text-5xl font-black text-brandNavy " data-testid="text-related-resources-title">
              Related <span className="text-brandOrange">Resources</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedResources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/blog/${resource.slug}`}
                className="group bg-white rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                data-testid={`card-resource-${resource.slug}`}
              >
                <div className="w-12 h-12 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange mb-6 group-hover:bg-brandOrange group-hover:text-white transition-all duration-300">
                  <i aria-hidden="true" className={`fas ${resource.icon} text-xl`}></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm tracking-wide mb-3 group-hover:text-brandOrange transition">{resource.title}</h3>
                <span className="text-xs font-black text-brandOrange uppercase tracking-widest">
                  Read Article <i aria-hidden="true" className="fas fa-arrow-right ml-2"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need roofing help in your city?"
        subtitle="No matter where you are in the Bay Area, ROOF EXPRESS has local crews ready to deliver expert roofing services. Call today for a free estimate."
      />

      <NearbyAreas />
    </Layout>
  );
}

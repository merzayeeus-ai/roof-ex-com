import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import { useSEO } from "@/hooks/use-seo";

const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";

const services = [
  { title: "Residential Roofing", href: "/residential/", icon: "fas fa-home", desc: "Complete shingle, tile, and metal roof systems with up to 50-year warranties" },
  { title: "Roof Replacement", href: "/roof-replacement/", icon: "fas fa-sync-alt", desc: "Full tear-off and re-roof with premium shingle systems and manufacturer warranties" },
  { title: "Commercial Roofing", href: "/commercial/", icon: "fas fa-building", desc: "TPO, modified bitumen, and flat roof systems for Bay Area businesses" },
  { title: "Flat Roofing", href: "/flat/", icon: "fas fa-layer-group", desc: "Single-ply membranes, torch-down, and coating systems for low-slope roofs" },
  { title: "Roof Repair", href: "/roof-repair/", icon: "fas fa-tools", desc: "Leak detection, flashing repair, emergency patching, and storm damage restoration" },
  { title: "Gutters & Drainage", href: "/gutters/", icon: "fas fa-tint", desc: "Seamless gutters, gutter guards, downspout systems, and drainage solutions" },
  { title: "Skylights", href: "/skylights/", icon: "fas fa-sun", desc: "Velux installation, repair, replacement, and sun tunnel systems" },
  { title: "Emergency Repair", href: "/emergency/", icon: "fas fa-exclamation-triangle", desc: "24/7 emergency response for storm damage, active leaks, and urgent situations" },
];

const whyChoose = [
  { title: "Diamond Certified", icon: "fas fa-gem", desc: "Rated Highest in Quality by independent homeowner surveys" },
  { title: "GAF Master Elite", icon: "fas fa-award", desc: "Top 2% of roofers nationwide. Factory-trained and certified." },
  { title: "50-Year Warranty", icon: "fas fa-shield-alt", desc: "Industry-leading system warranties backed by manufacturer guarantee" },
  { title: "Same-Day Response", icon: "fas fa-bolt", desc: "On-site inspection within 24 hours across the entire Bay Area" },
];

const processSteps = [
  { num: 1, title: "Rapid Response", icon: "fas fa-phone-alt", desc: "Call or request online — we respond within hours, not days." },
  { num: 2, title: "Photo Inspection", icon: "fas fa-camera", desc: "Drone and on-site photos document every detail of your roof." },
  { num: 3, title: "Scope & Estimate", icon: "fas fa-file-invoice-dollar", desc: "Transparent line-item pricing with material and labor breakdown." },
  { num: 4, title: "Permits & Materials", icon: "fas fa-clipboard-check", desc: "We handle all permits and order manufacturer-certified materials." },
  { num: 5, title: "Install & QC", icon: "fas fa-hard-hat", desc: "Factory-trained crews install with quality checkpoints at every phase." },
  { num: 6, title: "Cleanup & Warranty", icon: "fas fa-broom", desc: "Magnetic sweep, full cleanup, and warranty registration on completion." },
];

const cityLinks = [
  { name: "San Francisco", slug: "san-francisco" },
  { name: "San Jose", slug: "san-jose" },
  { name: "Oakland", slug: "oakland" },
  { name: "Palo Alto", slug: "palo-alto" },
  { name: "Daly City", slug: "daly-city" },
  { name: "Mountain View", slug: "mountain-view" },
  { name: "Redwood City", slug: "redwood-city" },
  { name: "Fremont", slug: "fremont" },
  { name: "Hayward", slug: "hayward" },
  { name: "Sunnyvale", slug: "sunnyvale" },
  { name: "San Mateo", slug: "san-mateo" },
  { name: "Berkeley", slug: "berkeley" },
  { name: "San Rafael", slug: "san-rafael" },
  { name: "Mill Valley", slug: "mill-valley" },
  { name: "Walnut Creek", slug: "walnut-creek" },
  { name: "Novato", slug: "novato" },
  { name: "Concord", slug: "concord" },
  { name: "Sausalito", slug: "sausalito" },
];

const blogArticles = [
  { title: "Bay Area Roofing Cost Factors", slug: "bay-area-roofing-cost-factors" },
  { title: "Roof Repair vs Replacement", slug: "roof-repair-vs-replacement" },
  { title: "Best Roofing Materials for Coastal Cities", slug: "best-roofing-materials-coastal-cities" },
];

export default function Services() {
  useSEO("Roofing Services — Repair to Replacement | ROOF EXPRESS", "Full-service Bay Area roofing: residential, commercial, flat roofs, gutters, skylights, and 24/7 emergency repairs.", "roofing services Bay Area, full-service roofer, roof repair, roof replacement, flat roofing, gutter installation, skylight installation, emergency repair, commercial roofing, residential roofing");
  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-services.webp" alt="Professional roofing services" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-hard-hat mr-2"></i> Full-Service Roofing
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-services-hero-title">
              Roofing <span className="text-brandOrangeLight">Services</span> for the Bay Area
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-services-hero-subtitle">
              Comprehensive roofing solutions for every Bay Area property — from residential shingle replacement to commercial flat roof systems, all backed by Diamond Certified quality.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={JOBBER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
                data-testid="link-services-estimate"
              >
                <i aria-hidden="true" className="fas fa-bolt mr-2"></i> Get Free Estimate
              </a>
              <a
                href="tel:6506665554"
                className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20"
                data-testid="link-services-call"
              >
                <i aria-hidden="true" className="fas fa-phone-alt mr-2"></i> Call 650-666-5554
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">What We Do</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-services-grid-title">Our Core <span className="text-brandOrange">Services</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Expert roofing solutions tailored to your property type, budget, and timeline.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group bg-brandGrey p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
                data-testid={`card-service-${svc.href.replace(/\//g, "")}`}
              >
                <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mb-6 text-brandOrange text-2xl group-hover:scale-110 transition-transform">
                  <i aria-hidden="true" className={svc.icon}></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm mb-3">{svc.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">{svc.desc}</p>
                <span className="text-xs font-black text-brandOrange uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-block">
                  Learn More <i aria-hidden="true" className="fas fa-arrow-right ml-1"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Why Us</span>
    <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-why-choose-title">Why Choose <span className="text-brandOrange">ROOF EXPRESS</span></h2>
              <p className="text-slate-500 font-medium leading-relaxed">Diamond Certified, GAF Master Elite, and backed by 8+ years of Bay Area roofing expertise.</p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/images/worker-on-roof.webp"
                alt="ROOF EXPRESS Professional at Work"
                className="rounded-[3rem] w-full object-cover shadow-2xl"
                data-testid="img-services-worker"
                loading="lazy"
                width={800}
                height={533}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] text-center shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-testid={`card-why-${i}`}>
                <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-2xl">
                  <i aria-hidden="true" className={item.icon}></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm mb-3">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandNavy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4">Step by Step</span>
   <h2 className="text-4xl md:text-6xl font-black mb-6" data-testid="text-process-title">Our <span className="text-brandOrangeLight">Process</span></h2>
            <p className="text-slate-300 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Simple, transparent, and hassle-free from first call to final walkthrough.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="relative bg-white/5 backdrop-blur border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-300" data-testid={`card-process-${step.num}`}>
                <div className="absolute -top-4 -left-2 text-7xl font-black text-white/5 leading-none select-none">{step.num}</div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brandOrange rounded-2xl flex items-center justify-center mb-6 text-white text-xl">
                    <i aria-hidden="true" className={step.icon}></i>
                  </div>
                  <h3 className="font-black uppercase text-sm mb-3 text-white">{step.title}</h3>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Local Coverage</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-areas-title">Service <span className="text-brandOrange">Areas</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Serving the entire San Francisco Bay Area with same-day inspections and rapid-response crews.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {cityLinks.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="bg-brandGrey p-4 rounded-2xl text-center font-black text-sm text-brandNavy uppercase tracking-wider hover:bg-brandOrange hover:text-white transition-all duration-300 border border-slate-100 hover:shadow-lg"
                data-testid={`link-city-${city.slug}`}
              >
                <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange mr-2 group-hover:text-white"></i>
                {city.name}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/city-roofing-guides"
              className="inline-block bg-brandNavy text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brandOrange transition shadow-lg"
              data-testid="link-view-all-cities"
            >
              View All 60 Cities <i aria-hidden="true" className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-brandNavy to-brandNavy/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center bg-green-500/20 border border-green-400/30 px-4 py-1.5 rounded-full mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-300">
                  <i aria-hidden="true" className="fas fa-money-bill-wave mr-2"></i> Wisetack Partner
                </span>
              </div>
    <h2 className="text-3xl md:text-4xl font-black text-white mb-3" data-testid="text-financing-title">Roof Now. <span className="text-brandOrangeLight">Pay Over Time.</span></h2>
              <p className="text-slate-300 font-medium max-w-xl">Up to $25,000 in financing available with a soft credit check. No impact to your credit score to see your options.</p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/financing"
                className="inline-block bg-brandOrange text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white hover:text-brandOrange transition-all duration-300 shadow-lg"
                data-testid="link-financing-cta"
              >
                <i aria-hidden="true" className="fas fa-calculator mr-3"></i> Check Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">From the Blog</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-blog-title">Related <span className="text-brandOrange">Articles</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
                data-testid={`link-blog-${article.slug}`}
              >
                <div className="w-12 h-12 bg-brandOrange/10 rounded-xl flex items-center justify-center mb-6 text-brandOrange text-lg">
                  <i aria-hidden="true" className="fas fa-newspaper"></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm mb-3 group-hover:text-brandOrange transition">{article.title}</h3>
                <span className="text-xs font-black text-brandOrange uppercase tracking-widest">
                  Read Article <i aria-hidden="true" className="fas fa-arrow-right ml-1"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">2026 Roofing Outlook</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-trends-title">Bay Area Roofing <span className="text-brandOrange">Trends 2026</span></h2>
            <p className="text-slate-500 font-medium max-w-3xl mx-auto">Stay ahead of California's evolving building standards and material innovations. Here's what Bay Area homeowners need to know about roofing in 2026.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "fas fa-solar-panel", title: "Solar-Ready Roofing", desc: "California's updated Title 24 standards now require new construction and major re-roofs to be solar-ready. ROOF EXPRESS installs reinforced decking and conduit pathways so your roof is panel-ready from day one — saving thousands in future solar installation costs." },
              { icon: "fas fa-temperature-high", title: "Cool Roof Mandates", desc: "2026 California Energy Code expands cool roof requirements to more residential zones. Our Energy Star-rated reflective shingle and membrane systems meet or exceed the new Solar Reflectance Index (SRI) minimums, reducing attic temperatures by up to 30°F." },
              { icon: "fas fa-shield-alt", title: "Class A Fire Ratings", desc: "With wildfire risk increasing across the Bay Area, 2026 WUI zone maps now include expanded fire-hazard areas. ROOF EXPRESS installs only Class A fire-rated materials with ember-resistant ridge vents in compliance with updated defensible space requirements." },
              { icon: "fas fa-leaf", title: "Sustainable Materials", desc: "Recycled-content shingles and low-VOC adhesives are becoming the new standard. GAF's 2026 Timberline HDZ line uses 15% post-consumer recycled content while maintaining the same 130 MPH wind rating and lifetime warranty performance." },
              { icon: "fas fa-cloud-rain", title: "Atmospheric River Prep", desc: "After record-breaking atmospheric river events, Bay Area building officials are recommending upgraded underlayment and drainage systems. Our 2026 specifications include enhanced ice & water shield coverage and oversized gutter systems as standard." },
              { icon: "fas fa-dollar-sign", title: "2026 Roofing Cost Guide", desc: "Bay Area roof replacement costs in 2026 range from $12,000–$35,000 for a typical home, depending on material and complexity. ROOF EXPRESS offers transparent pricing with 0% financing through Hearth — no surprises, no hidden fees, no pressure." },
            ].map((item, i) => (
              <div key={i} className="bg-brandGrey p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-testid={`card-trend-${i}`}>
                <div className="w-14 h-14 bg-brandOrange/10 rounded-xl flex items-center justify-center mb-5 text-brandOrange text-xl">
                  <i aria-hidden="true" className={item.icon}></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm mb-3">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brandNavy text-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-12">
   <h2 className="text-3xl md:text-4xl font-black mb-4 text-white/40">ROOF EXPRESS by the <span className="text-brandOrangeLight/60">Numbers</span></h2>
            <p className="text-slate-300 text-sm font-medium max-w-2xl mx-auto">Serving the entire San Francisco Bay Area since 2017 with Diamond Certified quality on every project.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-brandOrangeLight mb-2">5,000+</p>
              <p className="text-xs font-black uppercase tracking-widest text-white/70">Roofs Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-brandOrangeLight mb-2">4.9★</p>
              <p className="text-xs font-black uppercase tracking-widest text-white/70">Google Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-brandOrangeLight mb-2">60+</p>
              <p className="text-xs font-black uppercase tracking-widest text-white/70">Bay Area Cities</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-brandOrangeLight mb-2">50yr</p>
              <p className="text-xs font-black uppercase tracking-widest text-white/70">Warranty Available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Homeowner Resources</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6">Roofing <span className="text-brandOrange">FAQ 2026</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How much does a new roof cost in the Bay Area in 2026?", a: "A full roof replacement in the San Francisco Bay Area typically costs between $12,000 and $35,000 in 2026, depending on roof size, pitch, material choice, and structural repairs needed. Asphalt shingle systems average $15,000–$22,000 for a standard home. ROOF EXPRESS provides free detailed estimates with transparent line-item pricing." },
              { q: "How long does a roof last in California's climate?", a: "Architectural asphalt shingles last 25–30 years in the Bay Area's mild climate. Premium systems like GAF Timberline HDZ can last 40–50 years with proper ventilation and maintenance. Flat roof systems (TPO, modified bitumen) typically last 20–30 years. Regular inspections extend roof life significantly." },
              { q: "Does ROOF EXPRESS handle permits and inspections?", a: "Yes. We handle the entire permitting process including application, plan submission, and scheduling all required city inspections. This is included in every project at no extra charge. In 2026, most Bay Area cities require permits for any roof replacement over 100 sq ft." },
              { q: "What is the best roofing material for Bay Area homes in 2026?", a: "For most Bay Area homes, GAF Timberline HDZ architectural shingles offer the best combination of durability, wind resistance (130 MPH), and value. For coastal areas, we recommend algae-resistant options with marine-grade flashing. For flat roofs, TPO membrane systems provide excellent energy efficiency and meet updated Title 24 cool roof requirements." },
              { q: "Can I finance my new roof?", a: "Yes. ROOF EXPRESS partners with Hearth to offer 0% interest financing options. You can check your rate with a soft credit pull that doesn't affect your credit score. Financing up to $25,000 is available with flexible repayment terms from 12 to 144 months." },
              { q: "Is ROOF EXPRESS licensed, bonded, and insured?", a: "Absolutely. ROOF EXPRESS holds CSLB License #1072766 with full workers' compensation and general liability insurance ($5M+ coverage). We are GAF Master Elite certified (top 2% of roofers nationwide), Diamond Certified (highest in customer satisfaction), and an Owens Corning Platinum Preferred contractor." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm" data-testid={`faq-services-${i}`}>
                <h3 className="font-black text-brandNavy text-sm uppercase mb-3"><i aria-hidden="true" className="fas fa-question-circle text-brandOrange mr-2"></i>{faq.q}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to get started?" subtitle="Active leak? Planning a replacement? Our Diamond Certified team is ready to provide a detailed digital scope and estimate." />
      <NearbyAreas />
    </Layout>
  );
}

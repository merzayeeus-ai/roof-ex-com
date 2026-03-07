import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import ReviewShowcase from "@/components/review-showcase";
import ServiceGallery from "@/components/service-gallery";
import { useSEO } from "@/hooks/use-seo";

const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";

export default function Flat() {
  useSEO("Flat Roofing — TPO, Torch-Down & Coatings | ROOF EXPRESS", "Flat roof specialists near you in the Bay Area. TPO membrane, modified bitumen, torch-down, and silicone coatings. Ponding water solutions.", "flat roof repair near me, flat roof repair Bay Area, TPO membrane installation, torch-down roofing, modified bitumen, silicone roof coating, ponding water fix, flat roof leak repair near me, cool roof coating, EPDM flat roof");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does a flat roof last in the Bay Area?",
      a: "A properly installed TPO or PVC membrane system lasts 20-30 years in Bay Area conditions. Modified bitumen (torch down) systems typically last 15-20 years. Lifespan depends on UV exposure, maintenance frequency, and whether ponding water is properly addressed. Our systems include NDL warranties that cover the full expected lifespan."
    },
    {
      q: "What is the best flat roofing material for fog belt areas?",
      a: "For San Francisco's fog belt, we recommend either TPO membrane or modified bitumen. TPO excels in moisture resistance and energy efficiency (Title 24 compliant), while modified bitumen provides superior flexibility for daily thermal cycling. Both handle the unique combination of fog moisture, UV exposure, and salt air that defines coastal Bay Area microclimates."
    },
    {
      q: "How do you solve ponding water on flat roofs?",
      a: "We address ponding water through a three-step protocol: (1) Infrared moisture scanning to identify saturated insulation, (2) installation of tapered ISO insulation to create positive drainage slopes, and (3) strategic placement of interior drains or scupper systems. This eliminates standing water within 48 hours of rainfall."
    },
    {
      q: "What is the difference between TPO and modified bitumen?",
      a: "TPO is a single-ply thermoplastic membrane with heat-welded seams, offering superior energy efficiency and Title 24 cool roof compliance right out of the box. Modified bitumen is a multi-ply torch-applied system that provides excellent flexibility and self-healing properties in temperature fluctuations. ROOF EXPRESS typically recommends TPO for commercial and new construction, and modified bitumen for residential flat roofs or repairs where the existing substrate favors a multi-ply approach."
    },
    {
      q: "Does my flat roof meet California Title 24 cool roof requirements?",
      a: "California Title 24 requires cool roof compliance for most re-roofing projects. TPO and PVC membranes are inherently compliant due to their high solar reflectance and thermal emittance ratings. If your current flat roof uses dark-colored BUR or aged modified bitumen, it likely does not meet current standards. ROOF EXPRESS ensures every flat roof installation meets or exceeds Title 24 requirements, which can also reduce your cooling costs by 10–20% in warmer Bay Area neighborhoods."
    },
    {
      q: "How often should a flat roof be maintained?",
      a: "ROOF EXPRESS recommends professional flat roof inspections twice per year — once before the rainy season (October) and once after (April). During maintenance visits, we clear drains and scuppers of debris, inspect membrane seams for separation, check flashing at penetrations, and scan for ponding areas. Regular maintenance extends membrane life by 5–10 years and catches small issues before they become costly emergencies."
    }
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/commercial-roof-finish.webp" alt="Flat roof membrane system" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-layer-group mr-2"></i> Flat Roof Specialists
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-flat-hero-title">
              Flat Roofing: TPO, <span className="text-brandOrangeLight">Torch‑Down & Waterproofing</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-flat-hero-subtitle">
              TPO, Modified Bitumen, and PVC membrane systems engineered for Bay Area flat and low-slope roofs. Title 24 compliant with NDL warranties.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={JOBBER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
                data-testid="link-flat-quote"
              >
                <i aria-hidden="true" className="fas fa-bolt mr-2"></i> Get Flat Roof Quote
              </a>
              <a
                href="tel:6506665554"
                className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20"
                data-testid="link-flat-call"
              >
                <i aria-hidden="true" className="fas fa-phone-alt mr-2"></i> Call 650-666-5554
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-brandNavy border-b border-white/10">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8">
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-shield-alt mr-1.5 text-brandOrangeLight text-[9px]"></i> Flat Roof Specialists
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-certificate mr-1.5 text-brandOrangeLight text-[9px]"></i> TPO & EPDM Systems
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-check-circle mr-1.5 text-brandOrangeLight text-[9px]"></i> 25-Year Warranties
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-award mr-1.5 text-brandOrangeLight text-[9px]"></i> Certified Installers
            </span>
          </div>
        </div>
      </section>

      {/* EXPERTISE BADGES */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "fas fa-layer-group", title: "TPO Membrane", desc: "Single-ply thermoplastic" },
              { icon: "fas fa-fire-alt", title: "Torch Down", desc: "Modified bitumen systems" },
              { icon: "fas fa-sun", title: "Title 24 Cool Roof", desc: "Energy code compliant" },
              { icon: "fas fa-certificate", title: "NDL Warranty", desc: "No dollar limit coverage" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-4 bg-brandGrey p-5 rounded-2xl border border-slate-100" data-testid={`badge-expertise-${i}`}>
                <div className="w-12 h-12 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange shrink-0">
                  <i aria-hidden="true" className={badge.icon}></i>
                </div>
                <div>
                  <p className="font-black text-brandNavy uppercase text-xs">{badge.title}</p>
                  <p className="text-[10px] text-slate-500 font-medium">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLAT ROOF SYSTEMS */}
      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">System Specifications</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-flat-systems-title">Flat Roof <span className="text-brandOrange">Systems</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Three proven systems for every flat and low-slope application in the Bay Area.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-layer-group",
                title: "TPO Membrane",
                desc: "Thermoplastic Polyolefin single-ply membrane with heat-welded seams. The gold standard for energy-efficient flat roofing with superior UV resistance and reflectivity.",
                features: ["Heat-Welded Seams (1,100°F)", "Energy Star & Title 24 Compliant", "45, 60, or 80 mil Thickness", "20-30 Year NDL Warranty"],
                color: "brandOrange"
              },
              {
                icon: "fas fa-fire-alt",
                title: "Modified Bitumen",
                desc: "Multi-ply torch-applied or cold-adhesive rubberized asphalt system. Ideal for San Francisco's fog belt with superior flexibility for daily thermal cycling.",
                features: ["APP or SBS Polymer Modified", "Granulated Cap Sheet (UV Shield)", "Multi-Ply Redundancy", "15-20 Year Warranty"],
                color: "brandBlue"
              },
              {
                icon: "fas fa-shield-alt",
                title: "PVC Roofing",
                desc: "Polyvinyl Chloride membrane systems with chemical-welded seams. Superior chemical resistance for restaurants, labs, and industrial applications with grease exhaust exposure.",
                features: ["Chemical & Grease Resistant", "Hot-Air Welded Seams", "High Reflectivity (Cool Roof)", "20-30 Year NDL Warranty"],
                color: "brandNavy"
              }
            ].map((system, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500" data-testid={`card-flat-system-${i}`}>
                <div className={`w-16 h-16 bg-${system.color}/10 rounded-2xl flex items-center justify-center mb-6 text-${system.color} text-3xl group-hover:scale-110 transition-transform`}>
                  <i aria-hidden="true" className={system.icon}></i>
                </div>
                <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">{system.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{system.desc}</p>
                <ul className="space-y-3">
                  {system.features.map((f, fi) => (
                    <li key={fi} className="text-xs font-bold text-slate-500 flex items-center gap-2">
                      <i aria-hidden="true" className={`fas fa-check-circle text-${system.color}`}></i> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLVING PONDING WATER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-brandBlue/10 text-brandBlue text-[10px] font-black uppercase tracking-[0.2em] mb-4">Critical Issue</span>
    <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-8" data-testid="text-ponding-title">Solving Ponding <span className="text-brandOrange">Water</span></h2>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed">Standing water is the #1 enemy of flat roofs. Our three-step protocol eliminates ponding and prevents premature membrane failure.</p>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Infrared Moisture Scan", desc: "Thermal imaging identifies saturated insulation and hidden moisture intrusion beneath the membrane surface." },
                  { step: "02", title: "Tapered Insulation Install", desc: "Custom-cut ISO insulation boards create positive drainage slopes directing water to drains and scuppers." },
                  { step: "03", title: "Drainage System Design", desc: "Strategic placement of interior drains, scuppers, and overflow systems ensures water evacuation within 48 hours of rainfall." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group" data-testid={`step-ponding-${i}`}>
                    <div className="text-4xl font-black text-slate-100 group-hover:text-brandOrange transition duration-500">{item.step}</div>
                    <div>
                      <h3 className="font-black text-brandNavy uppercase text-sm mb-2">{item.title}</h3>
                      <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/torch-down-repair-closeup.webp"
                alt="Torch Down Membrane Repair Close-up"
                className="rounded-[3rem] w-full shadow-2xl"
                data-testid="img-ponding"
                loading="lazy"
                width={800}
                height={533}
              />
              <div className="absolute -bottom-6 -right-6 bg-brandBlue text-white p-8 rounded-[2rem] shadow-2xl text-center">
                <p className="text-3xl font-black mb-1">48hr</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Drain Clearance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[3rem] overflow-hidden shadow-xl">
              <img
                src="/images/torch-down-roll.webp"
                alt="Flat Roof Membrane Installation"
                className="w-full h-72 object-cover"
                data-testid="img-flat-rolling"
                loading="lazy"
                width={800}
                height={288}
              />
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-xl">
              <img
                src="/images/torch-down-worksite.webp"
                alt="Flat Roof Installation Crew"
                className="w-full h-72 object-cover"
                data-testid="img-flat-crew"
                loading="lazy"
                width={800}
                height={288}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Common Questions</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-flat-faq-title">Flat Roof <span className="text-brandOrange">FAQ</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm" data-testid={`card-flat-faq-${i}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  data-testid={`button-flat-faq-${i}`}
                >
                  <span className="font-black text-brandNavy text-sm uppercase pr-4">{faq.q}</span>
                  <i aria-hidden="true" className={`fas fa-chevron-down text-brandOrange transition-transform ${openFaq === i ? "rotate-180" : ""}`}></i>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED ROOFING GUIDES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Learn More</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-guides-title">Related Roofing <span className="text-brandOrange">Guides</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Flat Roof vs Shingle Roof in California", slug: "flat-roof-vs-shingle-california", desc: "Comprehensive comparison of costs, lifespan, and performance for California homeowners." },
              { title: "Best Roofing Materials for Bay Area Homes", slug: "best-roofing-materials-bay-area", desc: "How fog, wind, and sun affect material choices for Bay Area flat and pitched roofs." },
              { title: "Signs You Need a Roof Replacement", slug: "signs-you-need-roof-replacement", desc: "Warning signs that your flat roof membrane is failing and when to schedule an inspection." },
            ].map((guide, i) => (
              <Link key={i} href={`/blog/${guide.slug}`} className="group bg-brandGrey p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-testid={`link-guide-${i}`}>
                <div className="w-10 h-10 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange mb-4 group-hover:scale-110 transition-transform">
                  <i aria-hidden="true" className="fas fa-book-open"></i>
                </div>
                <h3 className="font-black text-brandNavy text-sm uppercase mb-2 group-hover:text-brandOrange transition">{guide.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{guide.desc}</p>
                <span className="inline-block mt-4 text-[10px] font-black uppercase tracking-widest text-brandOrange">Read Guide <i aria-hidden="true" className="fas fa-arrow-right ml-1"></i></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS & RESOURCES */}
      <section className="py-20 bg-brandGrey border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                  <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-brandNavy">Popular Cities</h3>
              </div>
              <div className="space-y-2">
                {[
                  { name: "San Francisco", slug: "san-francisco" },
                  { name: "Oakland", slug: "oakland" },
                  { name: "San Jose", slug: "san-jose" },
                  { name: "Palo Alto", slug: "palo-alto" },
                  { name: "Berkeley", slug: "berkeley" },
                ].map((city) => (
                  <Link key={city.slug} href={`/${city.slug}`} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-brandGrey hover:bg-brandOrange/10 border border-gray-100 hover:border-brandOrange/30 transition-all group" data-testid={`link-flat-city-${city.slug}`}>
                    <i aria-hidden="true" className="fas fa-chevron-right text-[9px] text-brandOrange/40 group-hover:text-brandOrange transition"></i>
                    <span className="text-sm font-bold text-brandNavy group-hover:text-brandOrange transition">{city.name} Flat Roofing</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                  <i aria-hidden="true" className="fas fa-book-open"></i>
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-brandNavy">Related Guides</h3>
              </div>
              <div className="space-y-2">
                {[
                  { title: "How Much Does Roof Replacement Cost?", slug: "roof-replacement-cost-san-francisco" },
                  { title: "Flat Roof vs Shingle Roof in CA", slug: "flat-roof-vs-shingle-california" },
                  { title: "Best Roofing Materials for Bay Area", slug: "best-roofing-materials-bay-area" },
                  { title: "Signs You Need a Roof Replacement", slug: "signs-you-need-roof-replacement" },
                ].map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-brandGrey hover:bg-brandOrange/10 border border-gray-100 hover:border-brandOrange/30 transition-all group" data-testid={`link-guide-${post.slug}`}>
                    <i aria-hidden="true" className="fas fa-arrow-right text-[9px] text-brandOrange/40 group-hover:text-brandOrange transition"></i>
                    <span className="text-sm font-bold text-brandNavy group-hover:text-brandOrange transition">{post.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                  <i aria-hidden="true" className="fas fa-bolt"></i>
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-brandNavy">Next Steps</h3>
              </div>
              <div className="space-y-3">
                <a
                  href={JOBBER_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 bg-brandOrange text-white py-4 px-6 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brandNavy transition-all group"
                  data-testid="link-flat-bottom-quote"
                >
                  <i aria-hidden="true" className="fas fa-file-alt text-sm"></i>
                  <span>Request Free Quote</span>
                  <i aria-hidden="true" className="fas fa-arrow-right text-[10px] ml-auto opacity-60 group-hover:opacity-100 transition"></i>
                </a>
                <a
                  href="tel:6506665554"
                  className="flex items-center gap-3 bg-brandNavy text-white py-4 px-6 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brandOrange transition-all group"
                  data-testid="link-flat-bottom-call"
                >
                  <i aria-hidden="true" className="fas fa-phone text-sm"></i>
                  <span>Call 650-666-5554</span>
                  <i aria-hidden="true" className="fas fa-arrow-right text-[10px] ml-auto opacity-60 group-hover:opacity-100 transition"></i>
                </a>
                <a
                  href="https://wa.me/16506665554"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 bg-[#128C7E] text-white py-4 px-6 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#0e6b5e] transition-all group"
                  data-testid="link-flat-bottom-whatsapp"
                >
                  <i aria-hidden="true" className="fab fa-whatsapp text-sm"></i>
                  <span>WhatsApp Us</span>
                  <i aria-hidden="true" className="fas fa-arrow-right text-[10px] ml-auto opacity-60 group-hover:opacity-100 transition"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <Link href="/blog/field-notes" className="flex items-center gap-4 bg-brandGrey rounded-2xl p-5 border border-slate-100 hover:border-brandOrange/30 hover:shadow-lg transition-all group" data-testid="link-field-notes-flat">
            <div className="w-12 h-12 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange shrink-0 group-hover:bg-brandOrange group-hover:text-white transition">
              <i aria-hidden="true" className="fas fa-hard-hat text-lg"></i>
            </div>
            <div className="min-w-0">
              <span className="text-sm font-black text-brandNavy group-hover:text-brandOrange transition block">Field Notes: Flat Roof Projects</span>
              <span className="text-xs text-slate-500 font-medium block mt-0.5">TPO installations, torch-down repairs, and drainage solutions from recent Bay Area flat roof jobs</span>
            </div>
            <i aria-hidden="true" className="fas fa-arrow-right text-brandOrange/40 group-hover:text-brandOrange ml-auto text-sm shrink-0 transition"></i>
          </Link>
        </div>
      </section>

      <ServiceGallery tag="Flat Roof" title="Flat Roof Projects" />

      <ReviewShowcase />

      <CTASection title="Need a flat roof specialist?" subtitle="Get a free inspection and quote for your flat or low-slope roof. TPO, modified bitumen, and PVC systems with NDL warranties." />
    </Layout>
  );
}

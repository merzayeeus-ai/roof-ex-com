import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import ServiceGallery from "@/components/service-gallery";
import { useSEO } from "@/hooks/use-seo";

const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";

export default function Commercial() {
  useSEO("Commercial Roofing — TPO & Flat Roof Systems | ROOF EXPRESS", "Commercial roofing for Bay Area businesses. TPO, modified bitumen, single-ply systems. Title 24 compliant. Zero-downtime protocol.", "commercial roofing Bay Area, TPO roof installation, flat roof commercial, modified bitumen, single-ply membrane, Title 24 cool roof, warehouse roofing, EPDM rubber roof, standing seam metal");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do you minimize disruption to our business operations?",
      a: "Our Minimum Disruption Protocol includes scheduled noise windows, OSHA safety cordons, and phased installation sequences. We coordinate directly with your facility manager to align work schedules with your lowest-traffic periods. Most tenants report zero operational impact."
    },
    {
      q: "What commercial roofing warranties do you offer?",
      a: "We offer NDL (No Dollar Limit) manufacturer warranties on qualifying TPO and PVC systems, typically ranging from 15 to 30 years. Our workmanship warranty covers all labor for a minimum of 10 years. Extended warranty options are available through our Asset Care Program."
    },
    {
      q: "Do you handle permits and Title 24 compliance?",
      a: "Yes. Every commercial project includes full permit acquisition, Title 24 energy compliance documentation, and final city inspection coordination. Our in-house compliance team ensures your project meets all current California building codes and energy standards."
    }
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/commercial-roofs-aerial.webp" alt="Commercial roofing systems aerial view" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-building mr-2"></i> Commercial Division
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-commercial-hero-title">
              Commercial Roofing — <span className="text-brandOrangeLight">TPO, Flat & Industrial Systems</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-commercial-hero-subtitle">
              TPO, PVC, and Silicone restoration systems engineered for zero-downtime protection of your commercial assets. OSHA compliant, fully insured, and Title 24 certified.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={JOBBER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
                data-testid="link-commercial-quote"
              >
                <i aria-hidden="true" className="fas fa-file-alt mr-2"></i> Request Proposal
              </a>
              <a
                href="tel:6506665554"
                className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20"
                data-testid="link-commercial-call"
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
              <i aria-hidden="true" className="fas fa-building mr-1.5 text-brandOrangeLight text-[9px]"></i> Commercial Licensed
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-award mr-1.5 text-brandOrangeLight text-[9px]"></i> GAF Master Elite
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-certificate mr-1.5 text-brandOrangeLight text-[9px]"></i> TPO & EPDM Certified
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-check-circle mr-1.5 text-brandOrangeLight text-[9px]"></i> 500+ Commercial Projects
            </span>
          </div>
        </div>
      </section>

      {/* MINIMUM DISRUPTION PROTOCOL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Operational Protocol</span>
    <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-8" data-testid="text-disruption-title">Minimum Disruption <span className="text-brandOrange">Protocol</span></h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-brandGrey p-6 rounded-2xl" data-testid="card-noise-mitigation">
                  <div className="w-12 h-12 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange shrink-0">
                    <i aria-hidden="true" className="fas fa-volume-mute text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-brandNavy uppercase text-sm mb-1">Noise Mitigation</h3>
                    <p className="text-xs text-slate-500 font-medium">Scheduled noise windows coordinated with your facility manager. Impact work limited to pre-approved time blocks to protect tenant experience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-brandGrey p-6 rounded-2xl" data-testid="card-osha-cordon">
                  <div className="w-12 h-12 bg-brandNavy/10 rounded-xl flex items-center justify-center text-brandNavy shrink-0">
                    <i aria-hidden="true" className="fas fa-hard-hat text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-brandNavy uppercase text-sm mb-1">OSHA Safety Cordon</h3>
                    <p className="text-xs text-slate-500 font-medium">Full OSHA perimeter established with signage, debris netting, and controlled access points. Zero public exposure to active work zones.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/commercial-roof-finish.webp"
                alt="Commercial Roofing Installation"
                className="rounded-[3rem] w-full shadow-2xl"
                data-testid="img-disruption"
                loading="lazy"
                width={800}
                height={533}
              />
              <div className="absolute -bottom-6 -left-6 bg-brandOrange text-white p-8 rounded-[2rem] shadow-2xl text-center">
                <p className="text-3xl font-black mb-1">48HR</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Proposal Turnaround</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS */}
      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Sector Expertise</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-industry-title">Industry <span className="text-brandOrange">Solutions</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "fas fa-warehouse", title: "Industrial Warehousing", desc: "Large-format TPO and PVC systems for distribution centers, manufacturing facilities, and cold storage. Crane-accessible for minimal ground disruption.", color: "brandOrange" },
              { icon: "fas fa-users", title: "HOA & Multi-Family", desc: "Phased re-roofing programs for condominiums, townhomes, and apartment complexes. HOA board presentation packages and owner communication templates included.", color: "brandBlue" },
              { icon: "fas fa-store", title: "Retail & Mixed Use", desc: "Tenant-sensitive installations for shopping centers, strip malls, and mixed-use developments. After-hours scheduling and sign protection protocols available.", color: "brandNavy" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500 text-center" data-testid={`card-industry-${i}`}>
                <div className={`w-16 h-16 bg-${item.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-${item.color} text-3xl group-hover:scale-110 transition-transform`}>
                  <i aria-hidden="true" className={item.icon}></i>
                </div>
                <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">{item.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSET CARE PROGRAM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Proactive Maintenance</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-asset-care-title">Asset Care <span className="text-brandOrange">Program</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Extend the life of your commercial roof with our structured maintenance and inspection program.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "fas fa-calendar-check", title: "Bi-Annual Audits", desc: "Comprehensive spring and fall inspections with detailed condition reports and photographic documentation." },
              { icon: "fas fa-camera-retro", title: "Aerial Documentation", desc: "Drone-captured thermal imaging and high-resolution photography to identify hidden moisture intrusion and membrane degradation." },
              { icon: "fas fa-clipboard-list", title: "Service History", desc: "Digital maintenance log with complete service records, warranty tracking, and repair history accessible via your client portal." },
              { icon: "fas fa-chart-line", title: "CapEx Budgeting", desc: "Annual capital expenditure forecasting for roof replacement planning. Avoid surprise expenses with data-driven timeline projections." },
            ].map((item, i) => (
              <div key={i} className="bg-brandGrey p-8 rounded-[2rem] border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-testid={`card-asset-care-${i}`}>
                <div className="w-14 h-14 bg-brandOrange/10 rounded-xl flex items-center justify-center mx-auto mb-5 text-brandOrange text-xl">
                  <i aria-hidden="true" className={item.icon}></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm mb-3">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM CAPABILITIES */}
      <section className="py-24 bg-brandNavy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/20 text-brandOrangeLight text-[10px] font-black uppercase tracking-[0.2em] mb-4">Technical Capabilities</span>
   <h2 className="text-4xl md:text-5xl font-black mb-6 text-white" data-testid="text-capabilities-title">System <span className="text-brandOrangeLight">Capabilities</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "fas fa-layer-group", title: "TPO & PVC", desc: "Single-ply thermoplastic membrane systems with heat-welded seams. Energy Star rated, Title 24 compliant, and available in 45, 60, and 80 mil thicknesses.", features: ["Heat-Welded Seams", "Energy Star Rated", "20-30 Year NDL Warranty"] },
              { icon: "fas fa-fire-alt", title: "Modified Bitumen", desc: "Multi-ply torch-applied or cold-adhesive systems for heavy-traffic roofs. Superior puncture resistance for rooftop equipment zones.", features: ["Torch or Cold Applied", "High Puncture Resistance", "Equipment Zone Reinforcement"] },
              { icon: "fas fa-tint", title: "Silicone Restorations", desc: "Fluid-applied silicone coating systems that restore and extend the life of aging roofs. Fraction of the cost of full replacement with zero tear-off.", features: ["No Tear-Off Required", "50% Cost Savings", "10-20 Year Renewable Warranty"] },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 group hover:bg-white/10 transition-all duration-500" data-testid={`card-capability-${i}`}>
                <div className="w-16 h-16 bg-brandOrange/20 rounded-2xl flex items-center justify-center mb-6 text-brandOrangeLight text-3xl group-hover:scale-110 transition-transform">
                  <i aria-hidden="true" className={item.icon}></i>
                </div>
                <h3 className="text-xl font-black uppercase italic mb-4 text-white">{item.title}</h3>
                <p className="text-sm text-slate-300 font-medium leading-relaxed mb-6">{item.desc}</p>
                <ul className="space-y-3">
                  {item.features.map((f, fi) => (
                    <li key={fi} className="text-xs font-bold text-slate-300 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandOrangeLight"></i> {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONAL SERVICE HUBS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Coverage Map</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-hubs-title">Regional Service <span className="text-brandOrange">Hubs</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { region: "San Francisco", cities: ["SOMA", "Financial District", "Mission Bay", "Sunset"] },
              { region: "Peninsula", cities: ["San Mateo", "Redwood City", "Daly City", "Millbrae"] },
              { region: "South Bay", cities: ["San Jose", "Sunnyvale", "Santa Clara", "Cupertino"] },
              { region: "East Bay", cities: ["Oakland", "Berkeley", "Fremont", "Hayward"] },
              { region: "Coastal", cities: ["Pacifica", "Half Moon Bay", "Santa Cruz", "Monterey"] },
            ].map((hub, i) => (
              <div key={i} className="bg-brandGrey p-6 rounded-2xl border border-slate-100 text-center" data-testid={`card-hub-${i}`}>
                <div className="w-10 h-10 bg-brandOrange/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brandOrange">
                  <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm mb-3">{hub.region}</h3>
                <ul className="space-y-2">
                  {hub.cities.map((city, ci) => (
                    <li key={ci} className="text-xs text-slate-500 font-medium">{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Common Questions</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-faq-title">Frequently Asked <span className="text-brandOrange">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm" data-testid={`card-faq-${i}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  data-testid={`button-faq-${i}`}
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

      {/* ZERO LIABILITY CULTURE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Risk Mitigation</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-liability-title">Zero Liability <span className="text-brandOrange">Culture</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "fas fa-hard-hat", title: "OSHA Compliant", desc: "Full OSHA compliance on every job site with certified safety officers" },
              { icon: "fas fa-shield-alt", title: "$5M+ Liability", desc: "Comprehensive general liability and workers' compensation coverage" },
              { icon: "fas fa-gem", title: "Diamond Certified", desc: "Rated highest in quality by independent research — top 5% of contractors" },
              { icon: "fas fa-id-card", title: "CSLB #1072766", desc: "Active California State License Board contractor license, fully bonded" },
            ].map((item, i) => (
              <div key={i} className="bg-brandGrey p-8 rounded-[2rem] border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-testid={`card-liability-${i}`}>
                <div className="w-14 h-14 bg-brandNavy/10 rounded-xl flex items-center justify-center mx-auto mb-5 text-brandNavy text-xl">
                  <i aria-hidden="true" className={item.icon}></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm mb-3">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 COMMERCIAL ROOFING GUIDE */}
      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">2026 Compliance</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-2026-commercial-title">2026 Commercial <span className="text-brandOrange">Code Updates</span></h2>
            <p className="text-slate-500 font-medium max-w-3xl mx-auto">California's 2026 building code cycle introduces significant updates affecting commercial roof systems. Stay compliant and protect your investment with these key changes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "fas fa-solar-panel", title: "Title 24 Energy Updates", desc: "2026 Title 24 standards raise the minimum Solar Reflectance Index (SRI) for commercial roofs. All new installations and re-roofs must meet updated cool roof requirements. ROOF EXPRESS TPO and PVC systems exceed the new SRI minimums, ensuring full compliance and reduced HVAC costs." },
              { icon: "fas fa-bolt", title: "EV Charging Infrastructure", desc: "New commercial buildings must include EV-ready electrical infrastructure. ROOF EXPRESS coordinates with electrical contractors to ensure your roof system accommodates future solar canopy installations for EV charging stations." },
              { icon: "fas fa-fire-extinguisher", title: "Updated Fire Ratings", desc: "Expanded WUI commercial zones require Class A fire-rated assemblies. Our FM-approved TPO and PVC systems with fire-rated insulation boards meet the strictest fire classification standards for commercial occupancies." },
              { icon: "fas fa-water", title: "Stormwater Management", desc: "Bay Area municipalities are tightening stormwater runoff regulations. Our commercial roofing systems integrate with green roof assemblies, retention systems, and controlled-flow roof drains to help property owners meet new low-impact development requirements." },
              { icon: "fas fa-recycle", title: "Sustainability Mandates", desc: "CALGreen 2026 updates require commercial re-roofing projects to divert 80% of removed materials from landfill. ROOF EXPRESS partners with certified recycling facilities to exceed this requirement, with detailed waste diversion documentation for your records." },
              { icon: "fas fa-chart-bar", title: "ROI of Commercial Re-Roofing", desc: "A new commercial roof in 2026 delivers an average 5-year ROI through reduced energy costs (15-30% HVAC savings), eliminated emergency repairs, and increased property value. Silicone restoration systems offer the fastest payback at 40-60% less than full replacement." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-testid={`card-2026-commercial-${i}`}>
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

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Cost Estimator</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6">2026 Commercial <span className="text-brandOrange">Pricing Guide</span></h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-brandGrey rounded-2xl p-8 border border-slate-100">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-brandNavy block">TPO Single-Ply Membrane (60 mil)</span>
                    <span className="text-[10px] text-slate-500">Energy Star rated, Title 24 compliant</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$8–$14/sq ft</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-brandNavy block">PVC Membrane System</span>
                    <span className="text-[10px] text-slate-500">Chemical resistant, restaurant/industrial</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$10–$16/sq ft</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-brandNavy block">Modified Bitumen (Torch-Down)</span>
                    <span className="text-[10px] text-slate-500">Multi-ply, high traffic areas</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$7–$12/sq ft</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-brandNavy block">Silicone Restoration Coating</span>
                    <span className="text-[10px] text-slate-500">No tear-off, extends life 15-20 years</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$4–$8/sq ft</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-brandNavy rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-white block">Typical 10,000 sq ft Commercial Roof</span>
                    <span className="text-[10px] text-slate-300">Complete system with warranty</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$70K–$140K</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-medium mt-4 italic">*2026 Bay Area pricing. Includes materials, labor, permits, inspection, and manufacturer warranty registration. Contact us for a detailed proposal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <Link href="/blog/field-notes" className="flex items-center gap-4 bg-brandGrey rounded-2xl p-5 border border-slate-100 hover:border-brandOrange/30 hover:shadow-lg transition-all group" data-testid="link-field-notes-commercial">
            <div className="w-12 h-12 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange shrink-0 group-hover:bg-brandOrange group-hover:text-white transition">
              <i aria-hidden="true" className="fas fa-hard-hat text-lg"></i>
            </div>
            <div className="min-w-0">
              <span className="text-sm font-black text-brandNavy group-hover:text-brandOrange transition block">Field Notes: Commercial Roofing</span>
              <span className="text-xs text-slate-500 font-medium block mt-0.5">TPO and modified bitumen installations, Title 24 compliance, and commercial project case studies</span>
            </div>
            <i aria-hidden="true" className="fas fa-arrow-right text-brandOrange/40 group-hover:text-brandOrange ml-auto text-sm shrink-0 transition"></i>
          </Link>
        </div>
      </section>

      <ServiceGallery tag="Commercial Systems" title="Commercial Roofing Projects" />

      <CTASection title="Protect your commercial asset" subtitle="Get a 48-hour proposal turnaround with zero-disruption installation. TPO, PVC, and silicone systems for every commercial need." />

      {/* NEARBY AREAS */}
      <NearbyAreas />
    </Layout>
  );
}

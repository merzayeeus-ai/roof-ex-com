import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import ReviewShowcase from "@/components/review-showcase";
import ServiceGallery from "@/components/service-gallery";
import { useSEO } from "@/hooks/use-seo";

const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";

export default function Gutters() {
  useSEO("Gutter Installation — Seamless Aluminum & Copper | ROOF EXPRESS", "Gutter installation near you in the Bay Area. Custom seamless aluminum, copper & steel systems. Proper sizing and slope for maximum drainage.", "gutter installation near me, gutter repair near me, seamless gutters Bay Area, aluminum gutter, copper gutter installation, gutter guard installation, downspout installation, rain gutter, gutter cleaning near me, gutter replacement");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What are seamless gutters and why are they better?",
      a: "Seamless gutters are custom-fabricated on-site from a single continuous piece of aluminum, steel, or copper. Unlike sectional gutters, they have no joints or seams along the run — the only connections are at corners and downspouts. This eliminates the #1 cause of gutter leaks and reduces maintenance. We fabricate them on your property using a portable roll-forming machine for a perfect fit."
    },
    {
      q: "How much do seamless gutters cost?",
      a: "Seamless aluminum gutters typically range from $15–$30 per linear foot installed, depending on home height, accessibility, and downspout configuration. Copper gutters range from $40–$80+ per linear foot. We include all hangers, downspouts, and end caps in our pricing. A typical Bay Area home (150–200 linear feet) runs $3,000–$6,000 for aluminum."
    },
    {
      q: "Do you install gutter guards?",
      a: "Yes. We install micro-mesh gutter guard systems that block debris while allowing maximum water flow. Our guards handle Bay Area debris — pine needles, eucalyptus leaves, and roof granules — and include a 25-year clog-free warranty. We recommend guards for homes near trees to eliminate seasonal gutter cleaning."
    }
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/gutters.webp" alt="Seamless gutter system" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-tint mr-2"></i> Drainage Division
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-gutters-hero-title">
              Seamless Gutters & Drainage <span className="text-brandOrangeLight">(Install + Repair)</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-gutters-hero-subtitle">
              Custom-fabricated on-site from premium aluminum, galvanized steel, or hand-soldered copper. Engineered for Bay Area rainfall with oversized downspouts and lifetime warranties.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={JOBBER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
                data-testid="link-gutters-quote"
              >
                <i aria-hidden="true" className="fas fa-bolt mr-2"></i> Get Gutter Quote
              </a>
              <a
                href="tel:6506665554"
                className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20"
                data-testid="link-gutters-call"
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
              <i aria-hidden="true" className="fas fa-tint mr-1.5 text-brandOrangeLight text-[9px]"></i> Seamless Gutters
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-wrench mr-1.5 text-brandOrangeLight text-[9px]"></i> Custom Fabricated On-Site
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-check-circle mr-1.5 text-brandOrangeLight text-[9px]"></i> Lifetime Warranty
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-gem mr-1.5 text-brandOrangeLight text-[9px]"></i> Copper & Aluminum
            </span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Water Management</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-drainage-title">Drainage <span className="text-brandOrange">Systems</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Three tiers of gutter systems engineered for the Bay Area's unique rainfall patterns.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-grip-lines",
                title: "Seamless Aluminum",
                desc: "Our most popular system. Heavy-gauge .032\" aluminum custom-rolled on-site for a leak-free fit. Available in 30+ colors with baked-on enamel finish that never needs painting.",
                features: ["5\" & 6\" K-Style Profiles", ".032\" Heavy Gauge", "30+ Color Options", "20-Year Paint Warranty"],
                color: "brandOrange"
              },
              {
                icon: "fas fa-gem",
                title: "Custom Copper",
                desc: "Hand-soldered 16oz or 20oz copper gutters that develop a beautiful patina over time. The premier choice for historic homes, luxury properties, and architectural showcases.",
                features: ["16oz & 20oz Copper", "Hand-Soldered Joints", "Half-Round & K-Style", "Lifetime Material"],
                color: "brandOrange"
              },
              {
                icon: "fas fa-leaf",
                title: "Debris Protection",
                desc: "Micro-mesh gutter guard systems that block pine needles, leaves, and granules while handling heavy rainfall. Eliminates gutter cleaning and prevents ice dams.",
                features: ["Micro-Mesh Technology", "Handles 22\"/hr Rain", "Pine Needle Rated", "25-Year Clog-Free Warranty"],
                color: "brandOrange"
              }
            ].map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500" data-testid={`card-drainage-${i}`}>
                <div className={`w-16 h-16 bg-${card.color}/10 rounded-2xl flex items-center justify-center mb-8 text-${card.color} text-3xl group-hover:scale-110 transition-transform duration-500`}>
                  <i aria-hidden="true" className={card.icon}></i>
                </div>
                <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">{card.desc}</p>
                <ul className="space-y-3">
                  {card.features.map((f, j) => (
                    <li key={j} className="text-xs font-bold text-slate-500 flex items-center gap-2">
                      <i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
            <div className="lg:w-1/2">
              <img
                src="/images/gutters.webp"
                alt="Seamless Gutter Installation"
                className="rounded-[3rem] w-full object-cover shadow-2xl"
                data-testid="img-gutters-feature"
                loading="lazy"
                width={800}
                height={533}
              />
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Why It Matters</span>
    <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-foundation-title">Foundation <span className="text-brandOrange">Protection</span></h2>
              <p className="text-slate-500 font-medium leading-relaxed">Your gutters do more than move water — they protect your entire property from foundation erosion, siding damage, and landscape destruction.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "fas fa-mountain", title: "Prevent Erosion", desc: "Controlled water flow prevents soil washout around your foundation, maintaining proper grading and drainage." },
              { icon: "fas fa-home", title: "Protect Siding", desc: "Properly channeled runoff keeps water off exterior walls, preventing staining, rot, and paint failure." },
              { icon: "fas fa-water", title: "Avoid Floods", desc: "Oversized downspouts and underground connections route water away from basements and crawl spaces." },
              { icon: "fas fa-tree", title: "Preserve Landscaping", desc: "Controlled discharge protects gardens, walkways, and hardscaping from destructive water flow." },
            ].map((item, i) => (
              <div key={i} className="bg-brandGrey p-8 rounded-[2rem] border border-slate-100 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-testid={`card-benefit-${i}`}>
                <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-2xl group-hover:scale-110 transition-transform">
                  <i aria-hidden="true" className={item.icon}></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm mb-3">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Full System</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-complete-drainage-title">Complete <span className="text-brandOrange">Drainage</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100" data-testid="card-downspouts">
              <div className="w-16 h-16 bg-brandBlue/10 rounded-2xl flex items-center justify-center mb-8 text-brandBlue text-3xl">
                <i aria-hidden="true" className="fas fa-arrows-alt-v"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">Oversized Downspouts</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
                3"×4" oversized rectangular downspouts handle 2× the volume of standard round pipes. Critical for Bay Area homes where sudden downpours can overwhelm undersized systems in minutes.
              </p>
              <ul className="space-y-3">
                <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandBlue"></i> 3"×4" Rectangular Profile</li>
                <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandBlue"></i> Color-Matched to Gutters</li>
                <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandBlue"></i> Concealed Fasteners</li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100" data-testid="card-underground">
              <div className="w-16 h-16 bg-brandBlue/10 rounded-2xl flex items-center justify-center mb-8 text-brandBlue text-3xl">
                <i aria-hidden="true" className="fas fa-project-diagram"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">Underground Connections</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
                We connect downspouts to underground drain lines that route water to the street, French drains, or dry wells. Eliminates pooling, protects foundations, and keeps walkways dry.
              </p>
              <ul className="space-y-3">
                <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandBlue"></i> 4" Schedule 40 PVC</li>
                <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandBlue"></i> Pop-Up Emitters</li>
                <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandBlue"></i> French Drain Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Common Questions</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-gutters-faq-title">Gutter <span className="text-brandOrange">FAQ</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-brandGrey rounded-2xl border border-slate-100 overflow-hidden" data-testid={`faq-gutter-${i}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between"
                  data-testid={`button-faq-gutter-${i}`}
                >
                  <span className="font-black text-brandNavy uppercase text-sm pr-4">{faq.q}</span>
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

      <section className="py-20 bg-brandGrey border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                <i aria-hidden="true" className="fas fa-book-open"></i>
              </div>
            </div>
            <h3 className="text-sm font-black uppercase tracking-widest text-brandNavy">Related Guides</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { title: "Best Roofing Materials for Bay Area Homes", slug: "best-roofing-materials-bay-area" },
              { title: "Signs You Need a Roof Replacement", slug: "signs-you-need-roof-replacement" },
              { title: "How Much Does Roof Replacement Cost in SF?", slug: "roof-replacement-cost-san-francisco" },
            ].map((guide) => (
              <Link key={guide.slug} href={`/blog/${guide.slug}`} className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-gray-100 hover:border-brandOrange/30 hover:shadow-md transition-all group" data-testid={`link-guide-${guide.slug}`}>
                <i aria-hidden="true" className="fas fa-arrow-right text-[9px] text-brandOrange/40 group-hover:text-brandOrange transition shrink-0"></i>
                <span className="text-sm font-bold text-brandNavy group-hover:text-brandOrange transition">{guide.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">2026 Storm Season</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-storm-prep-title">Bay Area <span className="text-brandOrange">Storm Prep 2026</span></h2>
            <p className="text-slate-500 font-medium max-w-3xl mx-auto">After consecutive years of atmospheric river events, Bay Area homeowners are upgrading their gutter and drainage systems to handle extreme rainfall. Here's what you need to know for 2026.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brandGrey rounded-2xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange">
                  <i aria-hidden="true" className="fas fa-cloud-showers-heavy"></i>
                </div>
                <h3 className="font-black text-brandNavy text-sm uppercase">Atmospheric River Readiness</h3>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4">California's atmospheric river events are becoming more frequent and intense. Standard 5" K-style gutters can overflow during peak rainfall of 2+ inches per hour. ROOF EXPRESS now recommends 6" oversized gutters with 3"×4" downspouts as the baseline specification for Bay Area homes — providing 40% more water capacity than standard systems.</p>
              <ul className="space-y-2">
                <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i> 6" oversized K-style gutters standard</li>
                <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i> 3"×4" high-capacity downspouts</li>
                <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i> Underground drain connections to street</li>
              </ul>
            </div>
            <div className="bg-brandGrey rounded-2xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange">
                  <i aria-hidden="true" className="fas fa-house-damage"></i>
                </div>
                <h3 className="font-black text-brandNavy text-sm uppercase">Foundation Damage Prevention</h3>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4">Improperly managed roof runoff is the #1 cause of residential foundation damage in the Bay Area. When gutters overflow or downspouts discharge too close to the foundation, water saturates soil and can cause settling, cracking, and costly structural repairs. A properly engineered gutter system is the most cost-effective foundation protection available.</p>
              <ul className="space-y-2">
                <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i> Foundation waterproofing integration</li>
                <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i> Proper grading and discharge routing</li>
                <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i> French drain system connections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Cost Guide</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6">2026 Gutter <span className="text-brandOrange">Pricing Guide</span></h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-brandGrey rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-brandNavy block">Seamless Aluminum (5" K-Style)</span>
                    <span className="text-[10px] text-slate-500">Most popular — 30+ color options</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$12–$22/ft</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-brandGrey rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-brandNavy block">Oversized Aluminum (6" K-Style)</span>
                    <span className="text-[10px] text-slate-500">Recommended for heavy rainfall areas</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$18–$28/ft</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-brandGrey rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-brandNavy block">Custom Copper (Half-Round)</span>
                    <span className="text-[10px] text-slate-500">Premium — develops natural patina</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$40–$80/ft</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-brandGrey rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-brandNavy block">Micro-Mesh Gutter Guards</span>
                    <span className="text-[10px] text-slate-500">Add-on — 25-year clog-free warranty</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$8–$15/ft</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-brandNavy rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-white block">Typical Bay Area Home (150–200 ft)</span>
                    <span className="text-[10px] text-slate-300">Complete system with downspouts</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$3,000–$6,000</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-medium mt-4 italic">*2026 pricing includes fabrication, installation, hangers, downspouts, end caps, and cleanup. Financing available through Hearth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <Link href="/blog/field-notes" className="flex items-center gap-4 bg-brandGrey rounded-2xl p-5 border border-slate-100 hover:border-brandOrange/30 hover:shadow-lg transition-all group" data-testid="link-field-notes-gutters">
            <div className="w-12 h-12 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange shrink-0 group-hover:bg-brandOrange group-hover:text-white transition">
              <i aria-hidden="true" className="fas fa-hard-hat text-lg"></i>
            </div>
            <div className="min-w-0">
              <span className="text-sm font-black text-brandNavy group-hover:text-brandOrange transition block">Field Notes: Gutter Projects</span>
              <span className="text-xs text-slate-500 font-medium block mt-0.5">Seamless gutter installations, guard systems, and drainage solutions documented on the job</span>
            </div>
            <i aria-hidden="true" className="fas fa-arrow-right text-brandOrange/40 group-hover:text-brandOrange ml-auto text-sm shrink-0 transition"></i>
          </Link>
        </div>
      </section>

      <ServiceGallery tag="Gutters" title="Gutter Installation Projects" />

      <ReviewShowcase />

      <CTASection title="Ready for new gutters?" subtitle="Custom-fabricated seamless gutters installed in one day. Free on-site measurement and color consultation." />

      <NearbyAreas />
    </Layout>
  );
}

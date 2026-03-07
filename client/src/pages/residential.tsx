import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import ReviewShowcase from "@/components/review-showcase";
import ServiceGallery from "@/components/service-gallery";
import { useSEO } from "@/hooks/use-seo";

const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";

export default function Residential() {
  useSEO("Residential Roofing — Shingle & Tile Systems | ROOF EXPRESS", "Expert residential roofer near you in the Bay Area. Asphalt shingles, tile, slate — Diamond Certified installation with 50-year warranty.", "residential roofer near me, residential roofing Bay Area, asphalt shingle roof, tile roof installation, GAF Timberline shingles, Owens Corning Duration, 50-year roof warranty, home roof repair near me, metal roofing residential");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/asphalt-shingle-roof.webp" alt="Residential asphalt shingle roof" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-home mr-2"></i> Residential Division
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-residential-hero-title">
              Residential Roofing Services in the <span className="text-brandOrangeLight">Bay Area</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-residential-hero-subtitle">
              Diamond Certified quality meets Lifetime Warranties. The Bay Area's most trusted residential roofing contractor for shingle replacement, skylights, and complete roof systems.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={JOBBER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
                data-testid="link-residential-start-project"
              >
                <i aria-hidden="true" className="fas fa-bolt mr-2"></i> Start Your Project
              </a>
              <a
                href="tel:6506665554"
                className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20"
                data-testid="link-residential-call"
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
              <i aria-hidden="true" className="fas fa-gem mr-1.5 text-brandOrangeLight text-[9px]"></i> Diamond Certified
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-award mr-1.5 text-brandOrangeLight text-[9px]"></i> GAF Master Elite
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-check-circle mr-1.5 text-brandOrangeLight text-[9px]"></i> 50-Year Warranties
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-home mr-1.5 text-brandOrangeLight text-[9px]"></i> 5,000+ Roofs Completed
            </span>
          </div>
        </div>
      </section>

      {/* TOTAL PROTECTION ROOFING SYSTEM */}
      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Integrated Defense Architecture</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-total-protection-title">Total Protection <span className="text-brandOrange">Roofing System</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">7 scientifically engineered layers working in unison to seal, defend, and ventilate your home for 50+ years.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {[
                { icon: "fas fa-shield-alt", title: "Deck Protection", desc: "Synthetic underlayment shields the roof deck from moisture infiltration" },
                { icon: "fas fa-water", title: "Leak Barrier", desc: "Self-sealing ice & water shield in valleys, eaves, and penetrations" },
                { icon: "fas fa-grip-lines", title: "Starter Strip Shingles", desc: "Pre-cut starter strips ensure a sealed first course with wind resistance" },
                { icon: "fas fa-wind", title: "Roof Deck Ventilation", desc: "Balanced intake and exhaust ventilation prevents moisture and heat buildup" },
                { icon: "fas fa-layer-group", title: "Lifetime Shingles", desc: "Architectural laminate shingles with advanced granule adhesion technology" },
                { icon: "fas fa-mountain", title: "Hip & Ridge Cap Shingles", desc: "Contoured ridge caps provide finished appearance and added wind protection" },
                { icon: "fas fa-tint-slash", title: "Attic Ventilation", desc: "Cobra ridge vent system maintains optimal attic temperature and moisture levels" },
              ].map((layer, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition" data-testid={`card-layer-${i}`}>
                  <div className="w-12 h-12 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange shrink-0">
                    <i aria-hidden="true" className={layer.icon}></i>
                  </div>
                  <div>
                    <h3 className="font-black text-brandNavy uppercase text-sm mb-1">{layer.title}</h3>
                    <p className="text-xs text-slate-500 font-medium">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src="/images/asphalt-shingle-roof.webp"
                alt="Total Protection Roofing System Layers"
                className="rounded-[3rem] w-full shadow-2xl"
                data-testid="img-total-protection"
                loading="lazy"
                width={800}
                height={533}
              />
              <div className="absolute -bottom-6 -right-6 bg-brandNavy text-white p-8 rounded-[2rem] shadow-2xl text-center">
                <p className="text-4xl font-black mb-1">50</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Year Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 50-YEAR SYSTEM COMPONENTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Performance Specs</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-components-title">50-Year System <span className="text-brandOrange">Components</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: "fas fa-wind", title: "Infinite Wind Speed", desc: "No maximum wind speed limitation with proper installation" },
              { icon: "fas fa-sun", title: "UV Deflection", desc: "Advanced granule technology reflects harmful UV radiation" },
              { icon: "fas fa-leaf", title: "Algae Resistance", desc: "Copper-infused granules prevent black streaks and algae growth" },
              { icon: "fas fa-fire", title: "Class A Fire Rating", desc: "Highest fire resistance classification for residential roofing" },
              { icon: "fas fa-hand-rock", title: "Dura Grip Adhesive", desc: "Factory-applied adhesive strip for superior wind uplift resistance" },
              { icon: "fas fa-lock", title: "LayerLock Technology", desc: "Mechanical fastener zone for 99.9% nail placement accuracy" },
            ].map((item, i) => (
              <div key={i} className="group bg-brandGrey p-8 rounded-[2rem] border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-testid={`card-component-${i}`}>
                <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-2xl group-hover:scale-110 transition-transform">
                  <i aria-hidden="true" className={item.icon}></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm mb-3">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <img
              src="/images/asphalt-shingle-closeup.webp"
              alt="Premium Dark Shingle Installation"
              className="rounded-[3rem] w-full h-72 object-cover shadow-2xl"
              data-testid="img-components-shingles"
              loading="lazy"
              width={800}
              height={288}
            />
          </div>
        </div>
      </section>

      {/* SELECT YOUR SYSTEM */}
      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Tailored Solutions</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-select-system-title">Select Your <span className="text-brandOrange">System</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Choose the roofing system engineered for your home type and budget.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Architectural Asphalt */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 relative group hover:shadow-2xl transition-all duration-500" data-testid="card-system-asphalt">
              <div className="absolute top-4 right-4 bg-brandOrange text-white text-[9px] font-black uppercase px-4 py-2 rounded-full tracking-widest z-10">Most Popular</div>
              <div className="h-56 overflow-hidden">
                <img src="/images/shingle-installation.webp" alt="Architectural Asphalt Shingles" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={533} />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-brandNavy uppercase italic mb-3">Architectural Asphalt</h3>
                <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">The gold standard for Bay Area homes. Multi-dimensional laminate shingles with lifetime warranties and industry-best wind ratings.</p>
                <ul className="space-y-3 mb-6">
                  <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i> GAF Timberline HDZ Lifetime Shingles</li>
                  <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i> 130 MPH Wind Speed Rating</li>
                  <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i> StainGuard Plus Algae Resistance</li>
                  <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i> LayerLock Technology</li>
                </ul>
                <Link href="/residential" className="block w-full text-center bg-brandNavy text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brandOrange transition" data-testid="link-system-asphalt">Learn More</Link>
              </div>
            </div>

            {/* Skylights & Gutters */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500" data-testid="card-system-skylights">
              <div className="h-56 overflow-hidden">
                <img src="/images/skylight-new.webp" alt="Skylights and Gutters" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={533} />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-brandNavy uppercase italic mb-3">Skylights & Gutters</h3>
                <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">Complete your roofing system with natural lighting solutions and premium water management systems designed for Bay Area rainfall.</p>
                <ul className="space-y-3 mb-6">
                  <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandBlue"></i> VELUX Solar-Powered Skylights</li>
                  <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandBlue"></i> Sun Tunnels for Interior Rooms</li>
                  <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandBlue"></i> Seamless Aluminum Gutters</li>
                  <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandBlue"></i> Gutter Guard Protection</li>
                </ul>
                <Link href="/skylights" className="block w-full text-center bg-brandNavy text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brandBlue transition" data-testid="link-system-skylights">Learn More</Link>
              </div>
            </div>

            {/* Residential Flat Roof */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500" data-testid="card-system-flat">
              <div className="h-56 overflow-hidden">
                <img src="/images/torch-down-worksite.webp" alt="Residential Flat Roof" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={533} />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-brandNavy uppercase italic mb-3">Residential Flat Roof</h3>
                <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">Specialized flat and low-slope solutions for modern Bay Area homes. Torch-applied and TPO systems engineered for fog belt conditions.</p>
                <ul className="space-y-3 mb-6">
                  <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandNavy"></i> Modified Bitumen Torch Down</li>
                  <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandNavy"></i> TPO Membrane Systems</li>
                  <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandNavy"></i> Title 24 Cool Roof Compliant</li>
                  <li className="text-xs font-bold text-slate-500 flex items-center gap-2"><i aria-hidden="true" className="fas fa-check-circle text-brandNavy"></i> Ponding Water Solutions</li>
                </ul>
                <Link href="/flat" className="block w-full text-center bg-brandNavy text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brandOrange transition" data-testid="link-system-flat">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOOD SPOTLIGHTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Local Expertise</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-spotlights-title">Neighborhood <span className="text-brandOrange">Spotlights</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Specialized experience with the Bay Area's most iconic architectural styles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group relative rounded-[2.5rem] overflow-hidden shadow-xl" data-testid="card-spotlight-sf">
              <img src="/images/sf-aerial-sunset.webp" alt="San Francisco Victorian Homes" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={320} />
              <div className="absolute inset-0 bg-gradient-to-t from-brandNavy/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-black text-white uppercase italic mb-2">San Francisco Victorians</h3>
                <p className="text-sm text-white/80 font-medium mb-4">Specialty restoration for Painted Ladies, Edwardians, and Queen Annes. We understand the steep pitches, decorative trim, and historical permit requirements unique to SF neighborhoods.</p>
                <Link href="/san-francisco" className="inline-block bg-brandOrange text-white px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-brandOrange transition" data-testid="link-spotlight-sf">
                  SF Roofing Guide <i aria-hidden="true" className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
            <div className="group relative rounded-[2.5rem] overflow-hidden shadow-xl" data-testid="card-spotlight-sj">
              <img src="/images/shingle-roof-finish.webp" alt="San Jose Eichler Homes" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={320} />
              <div className="absolute inset-0 bg-gradient-to-t from-brandNavy/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-black text-white uppercase italic mb-2">San Jose Eichlers</h3>
                <p className="text-sm text-white/80 font-medium mb-4">Expert flat and low-slope solutions for Eichler homes. We specialize in TPO and modified bitumen systems designed for the flat rooflines that define mid-century Silicon Valley architecture.</p>
                <Link href="/san-jose" className="inline-block bg-brandOrange text-white px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-brandOrange transition" data-testid="link-spotlight-sj">
                  SJ Roofing Guide <i aria-hidden="true" className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 RESIDENTIAL ROOFING GUIDE */}
      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">2026 Update</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-2026-guide-title">Residential Roofing <span className="text-brandOrange">Guide 2026</span></h2>
            <p className="text-slate-500 font-medium max-w-3xl mx-auto">Everything Bay Area homeowners need to know about residential roofing in 2026 — from updated building codes and material innovations to cost expectations and financing options.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-black text-brandNavy text-sm uppercase mb-3"><i aria-hidden="true" className="fas fa-dollar-sign text-brandOrange mr-2"></i>2026 Roof Replacement Cost — Bay Area</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4">The average cost of a residential roof replacement in the San Francisco Bay Area in 2026 ranges from $12,000 to $35,000. Here's the breakdown by material:</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-brandGrey rounded-xl">
                    <span className="text-xs font-bold text-brandNavy">Architectural Asphalt Shingles</span>
                    <span className="text-xs font-black text-brandOrange">$12,000–$22,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-brandGrey rounded-xl">
                    <span className="text-xs font-bold text-brandNavy">Premium Designer Shingles</span>
                    <span className="text-xs font-black text-brandOrange">$18,000–$30,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-brandGrey rounded-xl">
                    <span className="text-xs font-bold text-brandNavy">Flat Roof (Modified Bitumen / TPO)</span>
                    <span className="text-xs font-black text-brandOrange">$8,000–$18,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-brandGrey rounded-xl">
                    <span className="text-xs font-bold text-brandNavy">Synthetic Slate / Tile</span>
                    <span className="text-xs font-black text-brandOrange">$25,000–$45,000</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 font-medium mt-3 italic">*Based on a typical 1,500–2,500 sq ft Bay Area home. Prices include materials, labor, permits, and cleanup.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-black text-brandNavy text-sm uppercase mb-3"><i aria-hidden="true" className="fas fa-calendar-alt text-brandOrange mr-2"></i>Best Time to Replace Your Roof</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">The ideal window for roof replacement in the Bay Area is April through October, when dry conditions ensure proper adhesive curing and underlayment installation. However, ROOF EXPRESS completes projects year-round with weather-contingency scheduling. Booking during the off-season (November–March) often means shorter wait times and faster project starts.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-black text-brandNavy text-sm uppercase mb-3"><i aria-hidden="true" className="fas fa-gavel text-brandOrange mr-2"></i>2026 California Building Code Updates</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4">Key changes affecting Bay Area residential roofing in 2026:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-0.5"></i>
                    <span className="text-xs text-slate-500 font-medium"><strong className="text-brandNavy">Title 24 Solar-Ready:</strong> New re-roofs over 1,000 sq ft must include solar-ready conduit and reinforced decking for future panel installation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-0.5"></i>
                    <span className="text-xs text-slate-500 font-medium"><strong className="text-brandNavy">Cool Roof Expansion:</strong> Reflective roofing materials now required in expanded climate zones across the Bay Area, reducing cooling costs by up to 20%.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-0.5"></i>
                    <span className="text-xs text-slate-500 font-medium"><strong className="text-brandNavy">WUI Fire Zones:</strong> Updated wildfire hazard maps require Class A fire-rated materials and ember-resistant vents in more Bay Area neighborhoods.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-0.5"></i>
                    <span className="text-xs text-slate-500 font-medium"><strong className="text-brandNavy">Enhanced Ventilation:</strong> Updated attic ventilation ratios ensure balanced airflow, preventing moisture buildup and extending shingle life.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-black text-brandNavy text-sm uppercase mb-3"><i aria-hidden="true" className="fas fa-star text-brandOrange mr-2"></i>Top Shingle Brands for Bay Area Homes 2026</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4">ROOF EXPRESS is certified to install the industry's top-rated shingle systems:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i aria-hidden="true" className="fas fa-award text-brandOrange mt-0.5"></i>
                    <span className="text-xs text-slate-500 font-medium"><strong className="text-brandNavy">GAF Timberline HDZ:</strong> America's #1 selling shingle with 130 MPH wind rating, StainGuard Plus algae resistance, and LayerLock Technology. Lifetime limited warranty.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i aria-hidden="true" className="fas fa-award text-brandOrange mt-0.5"></i>
                    <span className="text-xs text-slate-500 font-medium"><strong className="text-brandNavy">Owens Corning Duration:</strong> SureNail Technology for 130 MPH wind resistance. TruDefinition color technology for bold, dimensional appearance. Lifetime limited warranty.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i aria-hidden="true" className="fas fa-award text-brandOrange mt-0.5"></i>
                    <span className="text-xs text-slate-500 font-medium"><strong className="text-brandNavy">CertainTeed Landmark Pro:</strong> Premium Max Def colors with dual-layer fiber glass for superior strength. NailTrak feature guides precise nail placement. Lifetime limited warranty.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Homeowner FAQ</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6">Residential Roofing <span className="text-brandOrange">FAQ</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How do I know if I need a roof replacement vs. a repair?", a: "If your roof is under 15 years old with isolated damage (one leak, a few missing shingles), a repair is usually sufficient. If your roof is 20+ years old with widespread curling, granule loss, or multiple leaks, replacement is more cost-effective. ROOF EXPRESS provides a free inspection with a detailed photo report so you can make an informed decision." },
              { q: "Will you work with my insurance company on storm damage claims?", a: "Yes. Our team documents all storm damage with detailed photos and provides the documentation your insurance adjuster needs. We work directly with your claims adjuster to ensure you receive fair coverage for legitimate storm damage repairs or replacement." },
              { q: "How long does a typical residential roof replacement take?", a: "Most Bay Area homes take 2–3 days for a complete tear-off and re-roof. Larger homes or those with complex rooflines (multiple valleys, dormers, skylights) may take 4–5 days. We provide a specific timeline in your estimate and always communicate any weather-related schedule changes." },
              { q: "Do you offer a warranty on your roofing work?", a: "Yes. Every ROOF EXPRESS installation includes our 10-year workmanship warranty plus manufacturer warranties up to 50 years. As a GAF Master Elite and Owens Corning Platinum contractor, we can offer the highest-tier manufacturer warranties available — including GAF's Golden Pledge and Owens Corning's Platinum Protection." },
              { q: "What happens to my old roofing materials?", a: "We perform a complete tear-off and haul away all old roofing materials in dedicated dump trailers. At the end of each day, we run magnetic sweepers across your yard, driveway, and surrounding areas to pick up any stray nails. Final cleanup includes landscaping restoration and a thorough property inspection." },
            ].map((faq, i) => (
              <div key={i} className="bg-brandGrey rounded-2xl border border-slate-100 overflow-hidden" data-testid={`faq-residential-${i}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i + 100 ? null : i + 100)}
                  className="w-full text-left p-6 flex items-center justify-between"
                  data-testid={`button-faq-residential-${i}`}
                >
                  <span className="font-black text-brandNavy uppercase text-sm pr-4">{faq.q}</span>
                  <i aria-hidden="true" className={`fas fa-chevron-down text-brandOrange transition-transform ${openFaq === i + 100 ? "rotate-180" : ""}`}></i>
                </button>
                {openFaq === i + 100 && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brandGrey border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h3 className="text-sm font-black uppercase tracking-widest text-brandNavy mb-8 text-center">Related Guides & Resources</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { title: "Best Roofing Materials", href: "/blog/best-roofing-materials-bay-area/" },
              { title: "Roof Replacement Cost", href: "/blog/bay-area-roofing-cost-factors/" },
              { title: "How to Read an Estimate", href: "/blog/how-to-read-roofing-estimate/" },
              { title: "Ventilation Guide", href: "/blog/roof-ventilation-guide-ridge-soffit/" },
              { title: "Maintenance Checklist", href: "/blog/bay-area-roof-maintenance-checklist/" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white px-6 py-3 rounded-full text-sm font-bold text-brandNavy hover:text-brandOrange hover:shadow-md transition border border-slate-100" data-testid={`link-related-${link.href.replace(/\//g, "")}`}>
                {link.title} <i aria-hidden="true" className="fas fa-arrow-right ml-2 text-brandOrange text-xs"></i>
              </Link>
            ))}
          </div>
          <div className="mt-8 max-w-2xl mx-auto">
            <Link href="/blog/field-notes" className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-100 hover:border-brandOrange/30 hover:shadow-lg transition-all group" data-testid="link-field-notes-residential">
              <div className="w-12 h-12 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange shrink-0 group-hover:bg-brandOrange group-hover:text-white transition">
                <i aria-hidden="true" className="fas fa-hard-hat text-lg"></i>
              </div>
              <div className="min-w-0">
                <span className="text-sm font-black text-brandNavy group-hover:text-brandOrange transition block">Field Notes: Residential Roofing</span>
                <span className="text-xs text-slate-500 font-medium block mt-0.5">Job-site photos, shingle comparisons, and installation tips from our Diamond Certified crew</span>
              </div>
              <i aria-hidden="true" className="fas fa-arrow-right text-brandOrange/40 group-hover:text-brandOrange ml-auto text-sm shrink-0 transition"></i>
            </Link>
          </div>
        </div>
      </section>

      <ServiceGallery tag="Asphalt Shingle Roofing" title="Asphalt Shingle Projects" />

      <ReviewShowcase />

      <CTASection title="Ready for a new roof?" subtitle="Get a Diamond Certified residential roofing system with a 50-year warranty. Same-day inspections available." />

      {/* NEARBY AREAS */}
      <NearbyAreas />
    </Layout>
  );
}

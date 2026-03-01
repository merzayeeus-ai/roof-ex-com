import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import ServiceGallery from "@/components/service-gallery";
import { useSEO } from "@/hooks/use-seo";

const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";

const replacementSystems = [
  {
    icon: "fas fa-shield-alt",
    title: "GAF Timberline HDZ",
    warranty: "Lifetime Limited",
    desc: "America's #1 selling shingle. StainGuard Plus algae protection, LayerLock technology for 130 MPH wind rating, and a Class A fire rating. The gold standard for Bay Area homes.",
    features: ["130 MPH Wind Rating", "Class A Fire Rating", "StainGuard Plus", "LayerLock Technology"],
    badge: "Most Popular"
  },
  {
    icon: "fas fa-gem",
    title: "GAF Grand Sequoia",
    warranty: "Lifetime Limited",
    desc: "Ultra-premium designer shingle with the look of hand-cut European wood shake. Triple-layer construction for dramatic shadow lines and exceptional curb appeal.",
    features: ["Wood Shake Appearance", "Triple Layer Design", "Artisan Colors", "Wind Resistance 130 MPH"],
    badge: "Premium"
  },
  {
    icon: "fas fa-crown",
    title: "Owens Corning Duration",
    warranty: "Lifetime Limited",
    desc: "SureNail Technology provides superior holding power in high winds. TruDefinition colors with granule adhesion technology for long-lasting beauty.",
    features: ["SureNail Technology", "TruDefinition Color", "Algae Resistance", "Limited Lifetime Warranty"],
    badge: null
  },
  {
    icon: "fas fa-award",
    title: "CertainTeed Landmark",
    warranty: "Lifetime Limited",
    desc: "Max Def color technology creates vibrant, high-definition color blends. NailTrak nailing line ensures fast, accurate installation every time.",
    features: ["Max Def Colors", "NailTrak Line", "Algae Resistant", "Wind Warranty 110 MPH"],
    badge: null
  }
];

const processSteps = [
  { num: "01", title: "Free Inspection & Scope", desc: "Drone and on-foot inspection with thermal imaging. We document every square foot and provide a detailed digital photo report.", icon: "fas fa-search" },
  { num: "02", title: "Detailed Estimate", desc: "Line-item pricing with material specs, labor breakdown, and timeline. No hidden fees. We walk you through every option.", icon: "fas fa-file-invoice-dollar" },
  { num: "03", title: "Permits & Materials", desc: "We pull all city permits and order manufacturer-certified materials. Your project is scheduled with a dedicated crew.", icon: "fas fa-clipboard-check" },
  { num: "04", title: "Tear-Off & Prep", desc: "Complete removal of existing roofing down to the deck. We inspect and replace any damaged sheathing or rotted wood.", icon: "fas fa-hammer" },
  { num: "05", title: "System Installation", desc: "Ice & water shield, synthetic underlayment, starter strips, field shingles, ridge caps, and flashing — installed to manufacturer specs.", icon: "fas fa-hard-hat" },
  { num: "06", title: "Cleanup & Warranty", desc: "Magnetic sweep, full debris removal, final inspection, and warranty registration. Your roof is move-in ready.", icon: "fas fa-broom" }
];

const warningSignsSections = [
  {
    icon: "fas fa-calendar-alt",
    title: "Age of Roof",
    desc: "Most asphalt shingle roofs last 20–30 years. If your roof is approaching this age, it's time for a professional inspection even if no visible damage exists.",
  },
  {
    icon: "fas fa-th-large",
    title: "Curling or Missing Shingles",
    desc: "Shingles that are curling, cracking, or missing entirely indicate material failure. Patching may buy time, but widespread damage means replacement is more cost-effective.",
  },
  {
    icon: "fas fa-tint",
    title: "Interior Water Stains",
    desc: "Brown spots on ceilings, peeling paint, or damp insulation point to active leaks. Multiple leak points often signal systemic failure requiring full replacement.",
  },
  {
    icon: "fas fa-sun",
    title: "Granule Loss in Gutters",
    desc: "Heavy granule accumulation in gutters means shingles are losing their protective coating. This accelerates UV damage and shortens remaining roof life dramatically.",
  },
  {
    icon: "fas fa-wind",
    title: "Storm Damage",
    desc: "Hail impacts, wind-lifted shingles, and fallen debris can compromise your entire roof system. Insurance may cover full replacement — we handle the claims process.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Rising Energy Bills",
    desc: "Poor roof ventilation and failing insulation barriers cause HVAC systems to overwork. A new roof with proper ventilation can reduce energy costs by 10–25%.",
  }
];

export default function RoofReplacement() {
  useSEO("Roof Replacement — Full System, 50-Year Warranty | ROOF EXPRESS", "Complete roof replacement by Diamond Certified contractors. GAF Master Elite installation with up to 50-year manufacturer warranty.", "roof replacement Bay Area, new roof cost, full roof tear-off, roof replacement near me, 50-year roof warranty, GAF Golden Pledge warranty, asphalt shingle replacement, re-roofing Bay Area");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does a full roof replacement take?",
      a: "Most residential roof replacements are completed in 1–3 days, depending on the size of your home and complexity of the roof (multiple stories, steep pitch, skylights, etc.). We schedule your project with a dedicated crew and provide a specific timeline during the estimate phase. Larger homes or complex projects with multiple roof planes may take up to 5 days."
    },
    {
      q: "How much does a roof replacement cost in the Bay Area?",
      a: "A typical Bay Area roof replacement ranges from $15,000–$40,000+ depending on roof size, pitch, material choice, and complexity. We provide a detailed line-item estimate after our free inspection. Financing up to $25,000 is available through Wisetack with no impact to your credit score. Premium designer shingles like GAF Grand Sequoia will be at the higher end, while standard architectural shingles offer excellent value."
    },
    {
      q: "Can I stay in my home during the replacement?",
      a: "Yes! While the process is noisy, most homeowners stay in their homes during the replacement. We protect landscaping, driveways, and outdoor furniture with tarps and plywood. Our crews work during standard business hours and clean up each day."
    },
    {
      q: "Do you handle permits and HOA approvals?",
      a: "Absolutely. ROOF EXPRESS pulls all required city building permits and can assist with HOA architectural review submissions. We're familiar with requirements across all Bay Area cities and municipalities, from San Francisco's Planning Department to Peninsula city building departments."
    },
    {
      q: "What warranty do I get with a new roof?",
      a: "As a GAF Master Elite contractor, we offer the industry's best warranty package: GAF's Golden Pledge Warranty covers materials for 50 years and workmanship for 25 years, with 100% coverage for the first 10 years including tear-off costs. This is the strongest warranty available in the roofing industry."
    },
    {
      q: "What is the best roofing material for Bay Area homes?",
      a: "For most Bay Area homes, GAF Timberline HDZ architectural shingles offer the best combination of durability, aesthetics, and value. They carry a 130 MPH wind rating, Class A fire rating, and algae resistance — all critical for Bay Area conditions. For premium curb appeal, GAF Grand Sequoia designer shingles replicate the look of hand-cut wood shake. ROOF EXPRESS is certified to install all major manufacturer systems and can recommend the ideal material for your specific neighborhood and budget."
    }
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/roof-express-replacement.webp" alt="ROOF EXPRESS crew performing full roof replacement" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-sync-alt mr-2"></i> Full Replacement
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-replacement-hero-title">
              Roof Replacement: <span className="text-brandOrangeLight">50-Year Weather Defense Systems</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-replacement-hero-subtitle">
              Complete tear-off and re-roof by Diamond Certified, GAF Master Elite crews. Industry-leading 50-year warranties on the Bay Area's most trusted roofing systems.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={JOBBER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
                data-testid="link-replacement-estimate"
              >
                <i aria-hidden="true" className="fas fa-bolt mr-2"></i> Free Roof Inspection
              </a>
              <a
                href="tel:6506665554"
                className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20"
                data-testid="link-replacement-call"
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
              <i aria-hidden="true" className="fas fa-home mr-1.5 text-brandOrangeLight text-[9px]"></i> Full System Replacement
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-check-circle mr-1.5 text-brandOrangeLight text-[9px]"></i> 50-Year Warranties
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-award mr-1.5 text-brandOrangeLight text-[9px]"></i> GAF Master Elite
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-dollar-sign mr-1.5 text-brandOrangeLight text-[9px]"></i> Financing Available
            </span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Warning Signs</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-warning-signs-title">Signs You Need a <span className="text-brandOrange">New Roof</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Don't wait for an emergency. Catching these early saves thousands in damage repair.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {warningSignsSections.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500" data-testid={`card-warning-${i}`}>
                <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mb-8 text-brandOrange text-3xl group-hover:scale-110 transition-transform duration-500">
                  <i aria-hidden="true" className={item.icon}></i>
                </div>
                <h3 className="text-lg font-black text-brandNavy uppercase italic mb-4">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Roofing Systems</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-systems-title">Premium Shingle <span className="text-brandOrange">Systems</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">We install only manufacturer-certified premium roofing systems with the industry's strongest warranties.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {replacementSystems.map((system, i) => (
              <div key={i} className="bg-brandGrey p-10 rounded-[2.5rem] border border-slate-100 relative group hover:shadow-xl transition-all duration-300" data-testid={`card-system-${i}`}>
                {system.badge && (
                  <div className="absolute top-4 right-4 bg-brandOrange text-white text-[9px] font-black uppercase px-4 py-2 rounded-full tracking-widest z-10">{system.badge}</div>
                )}
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center text-brandOrange text-2xl shrink-0 group-hover:scale-110 transition-transform">
                    <i aria-hidden="true" className={system.icon}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-brandNavy uppercase italic mb-1">{system.title}</h3>
                    <p className="text-xs text-brandOrange font-black uppercase tracking-widest mb-4">{system.warranty}</p>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">{system.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {system.features.map((f, j) => (
                        <span key={j} className="text-[11px] font-bold text-slate-500 flex items-center gap-2">
                          <i aria-hidden="true" className="fas fa-check-circle text-brandOrange text-xs"></i> {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
   <h2 className="text-4xl md:text-6xl font-black mb-6" data-testid="text-replacement-process-title">Replacement <span className="text-brandOrangeLight">Process</span></h2>
            <p className="text-white/70 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">From inspection to warranty registration — every step managed by our dedicated project team.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="relative bg-white/5 backdrop-blur border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-300" data-testid={`card-replace-step-${step.num}`}>
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
    <h2 className="text-3xl md:text-4xl font-black text-white mb-3" data-testid="text-replacement-financing">New Roof. <span className="text-brandOrangeLight">Flexible Payments.</span></h2>
              <p className="text-slate-300 font-medium max-w-xl">Finance your roof replacement up to $25,000 with a soft credit check. See monthly payment options in seconds — no impact to your credit score.</p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/financing"
                className="inline-block bg-brandOrange text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white hover:text-brandOrange transition-all duration-300 shadow-lg"
                data-testid="link-replacement-financing"
              >
                <i aria-hidden="true" className="fas fa-calculator mr-3"></i> Check Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Common Questions</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-replacement-faq-title">Replacement <span className="text-brandOrange">FAQ</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-brandGrey rounded-2xl border border-slate-100 overflow-hidden" data-testid={`faq-replacement-${i}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between"
                  data-testid={`button-faq-replacement-${i}`}
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

      <section className="py-16 bg-brandGrey border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h3 className="text-sm font-black uppercase tracking-widest text-brandNavy mb-8 text-center">Related Services & Guides</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { title: "Roof Repair", href: "/roof-repair/" },
              { title: "Residential Roofing", href: "/residential/" },
              { title: "Flat Roofing", href: "/flat/" },
              { title: "Emergency Services", href: "/emergency/" },
              { title: "Repair vs. Replacement", href: "/blog/roof-repair-vs-replacement/" },
              { title: "Best Roofing Materials", href: "/blog/best-roofing-materials-bay-area/" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white px-6 py-3 rounded-full text-sm font-bold text-brandNavy hover:text-brandOrange hover:shadow-md transition border border-slate-100" data-testid={`link-related-${link.href.replace(/\//g, "")}`}>
                {link.title} <i aria-hidden="true" className="fas fa-arrow-right ml-2 text-brandOrange text-xs"></i>
              </Link>
            ))}
          </div>
          <div className="mt-8 max-w-2xl mx-auto">
            <Link href="/blog/field-notes" className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-100 hover:border-brandOrange/30 hover:shadow-lg transition-all group" data-testid="link-field-notes-replacement">
              <div className="w-12 h-12 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange shrink-0 group-hover:bg-brandOrange group-hover:text-white transition">
                <i aria-hidden="true" className="fas fa-hard-hat text-lg"></i>
              </div>
              <div className="min-w-0">
                <span className="text-sm font-black text-brandNavy group-hover:text-brandOrange transition block">Field Notes: Roof Replacement Projects</span>
                <span className="text-xs text-slate-500 font-medium block mt-0.5">See real tear-off photos, material choices, and installation details from recent Bay Area jobs</span>
              </div>
              <i aria-hidden="true" className="fas fa-arrow-right text-brandOrange/40 group-hover:text-brandOrange ml-auto text-sm shrink-0 transition"></i>
            </Link>
          </div>
        </div>
      </section>

      <ServiceGallery tag="Roof Replacement" title="Roof Replacement Projects" />

      <CTASection title="Ready for a new roof?" subtitle="Free drone inspection, detailed photo report, and transparent line-item estimate. Diamond Certified quality backed by 50-year warranties." />
      <NearbyAreas />
    </Layout>
  );
}

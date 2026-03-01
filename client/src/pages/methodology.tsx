import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import { useSEO } from "@/hooks/use-seo";
const heroImage = "/images/completed-shingle-roof.webp";

const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";

export default function Methodology() {
  useSEO("Our Roofing Process — 3-Checkpoint Quality System | ROOF EXPRESS", "ROOF EXPRESS 3-checkpoint methodology: rapid tear-off, mid-point inspection, final audit. Most roofs completed in 2-3 days.");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      title: "Rapid Response",
      icon: "fas fa-bolt",
      desc: "Within hours of your call, our team is at your property. We offer same-day and next-day inspections across the Bay Area — because roof issues don't wait, and neither should you.",
    },
    {
      num: "02",
      title: "Photo Inspection",
      icon: "fas fa-camera",
      desc: "Our inspector performs a comprehensive roof assessment using high-resolution drone and ground photography. Every issue is documented with photos so you see exactly what we see — no guesswork.",
    },
    {
      num: "03",
      title: "Scope & Estimate",
      icon: "fas fa-file-invoice-dollar",
      desc: "You receive a detailed, line-item digital estimate through our Jobber portal within 24 hours. Every material, every labor cost, and every timeline is transparent and clearly explained.",
    },
    {
      num: "04",
      title: "Permits & Materials",
      icon: "fas fa-clipboard-check",
      desc: "Our dedicated permitting team pulls all required permits within 24 hours. We coordinate material delivery directly with manufacturers to ensure premium products arrive on schedule.",
    },
    {
      num: "05",
      title: "Install & QC",
      icon: "fas fa-hard-hat",
      desc: "Our trained crews execute the installation with 3 mandatory quality checkpoints: post-tearoff deck inspection, mid-point underlayment verification, and final system audit. No shortcuts.",
    },
    {
      num: "06",
      title: "Cleanup & Warranty",
      icon: "fas fa-shield-alt",
      desc: "We perform a magnetic sweep of your entire property, remove all debris, and activate your manufacturer warranty — up to 50 years of coverage. Your project file is stored digitally for future reference.",
    },
  ];

  const certifications = [
    {
      icon: "fas fa-gem",
      title: "Diamond Certified",
      desc: "Awarded by an independent research firm (American Ratings Corporation) that surveys actual customers. Only companies rated Highest in Quality earn this distinction. Less than 5% of contractors qualify.",
    },
    {
      icon: "fas fa-award",
      title: "GAF Master Elite",
      desc: "The highest certification from North America's largest roofing manufacturer. Requires ongoing training, proper licensing, insurance, and a proven reputation. Only 2% of roofers nationwide.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Owens Corning Platinum",
      desc: "Platinum Preferred Contractor status from Owens Corning — one of the world's largest building materials manufacturers. Enables extended warranty options and priority support.",
    },
    {
      icon: "fas fa-certificate",
      title: "CertainTeed Select ShingleMaster",
      desc: "Select ShingleMaster credential from CertainTeed, requiring factory training, proper licensing, and commitment to installation excellence. Unlocks SureStart PLUS extended warranty coverage.",
    },
    {
      icon: "fas fa-id-badge",
      title: "CSLB Licensed (#1072766)",
      desc: "California Contractors State License Board verified. Active C-39 roofing license with workers' compensation insurance and general liability coverage.",
    },
  ];

  const comparisons = [
    { category: "Estimate", icon: "fas fa-file-alt", typical: "Verbal ballpark", express: "Digital line-item with photos" },
    { category: "Timeline", icon: "fas fa-calendar-alt", typical: "2-3 weeks", express: "2-3 days typical" },
    { category: "Permits", icon: "fas fa-stamp", typical: "Homeowner handles", express: "We pull all permits" },
    { category: "Cleanup", icon: "fas fa-broom", typical: "Basic sweep", express: "Magnetic sweep + full debris removal" },
    { category: "Warranty", icon: "fas fa-shield-alt", typical: "Labor only, 1-2 years", express: "Up to 50-year system warranty" },
    { category: "Communication", icon: "fas fa-comments", typical: "Call and hope", express: "Real-time Jobber portal updates" },
  ];

  const faqs = [
    {
      q: "How long does a typical roof replacement take?",
      a: "Most residential projects are completed in 2-3 days. Factors like roof size, complexity, and weather can affect the timeline, but our team is built for speed without sacrificing quality. We'll give you an exact timeline during the scope phase.",
    },
    {
      q: "Do you handle permits?",
      a: "Yes. Our dedicated permitting team pulls all required permits from your local jurisdiction — typically within 24 hours. You never have to visit a city office or deal with paperwork. It's all included in your project scope.",
    },
    {
      q: "What happens if it rains during my project?",
      a: "We monitor weather closely and schedule accordingly. If unexpected rain occurs, we use waterproof tarps and underlayment to protect your home. Your property is never left exposed — that's a non-negotiable part of our process.",
    },
    {
      q: "Do I need to be home during the work?",
      a: "No, you don't need to be home. We communicate every milestone through our Jobber portal with real-time photo updates. You'll know exactly what's happening even if you're at work or out of town.",
    },
    {
      q: "What warranty do I get?",
      a: "Depending on the system, you receive up to a 50-year manufacturer warranty plus our workmanship guarantee. As a GAF Master Elite contractor, we can offer the industry's strongest warranty packages, including the Golden Pledge® limited warranty.",
    },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="ROOF EXPRESS professional inspecting roof gutters and shingles" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-cogs mr-2"></i> How We Work
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-methodology-hero-title">
              Our Roofing Methodology: <span className="text-brandOrangeLight">Inspect → Scope → Install → QC</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-methodology-hero-subtitle">
              A proven 6-step process designed to reduce risk, eliminate surprises, and deliver a flawless roof — on time and on budget. Every single time.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={JOBBER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
                data-testid="link-methodology-start"
              >
                <i aria-hidden="true" className="fas fa-bolt mr-2"></i> Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-brandNavy border-b border-white/10">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8">
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-search mr-1.5 text-brandOrangeLight text-[9px]"></i> 3-Point Inspection
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-shield-alt mr-1.5 text-brandOrangeLight text-[9px]"></i> Military-Grade Standards
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-camera mr-1.5 text-brandOrangeLight text-[9px]"></i> Photo Documentation
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-certificate mr-1.5 text-brandOrangeLight text-[9px]"></i> Fully Certified Process
            </span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">6-Step Process</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-express-standard">The Express <span className="text-brandOrange">Standard</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">From first call to final warranty — every step is engineered for quality, speed, and total transparency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="bg-brandGrey p-10 rounded-[2rem] border border-slate-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden" data-testid={`card-step-${i + 1}`}>
                <div className="absolute top-4 right-6 text-6xl font-black text-slate-100 group-hover:text-brandOrange/10 transition-colors">{step.num}</div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mb-6 text-brandOrange text-3xl group-hover:scale-110 transition-transform">
                    <i aria-hidden="true" className={step.icon}></i>
                  </div>
                  <h3 className="text-xl font-black text-brandNavy mb-3 uppercase">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            <div className="lg:w-1/2">
              <img
                src="/images/shingle-installation.webp"
                alt="ROOF EXPRESS Craftsman at Work"
                className="rounded-[3rem] w-full object-cover shadow-2xl mb-8"
                data-testid="img-methodology-craftsman"
                loading="lazy"
                width={800}
                height={533}
              />
              <img
                src="/images/roof-inspection-clipboard.webp"
                alt="Professional Roof Inspection with Clipboard"
                className="rounded-[3rem] w-full object-cover shadow-2xl"
                data-testid="img-methodology-inspection"
                loading="lazy"
                width={800}
                height={533}
              />
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Trust & Credentials</span>
    <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-certifications-title">Our Certifications <span className="text-brandOrange">Explained</span></h2>
              <p className="text-slate-500 font-medium leading-relaxed">Industry-leading certifications that set us apart from the competition.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center" data-testid={`card-certification-${i + 1}`}>
                <div className="w-20 h-20 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-4xl group-hover:scale-110 transition-transform">
                  <i aria-hidden="true" className={cert.icon}></i>
                </div>
                <h3 className="text-lg font-black text-brandNavy mb-4 uppercase">{cert.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Side-By-Side</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-comparison-title">What Makes Us <span className="text-brandOrange">Different</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">See how ROOF EXPRESS stacks up against the typical contractor experience.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-0 mb-2">
              <div className="p-4"></div>
              <div className="bg-slate-100 rounded-t-2xl p-4 text-center">
                <span className="text-xs font-black uppercase tracking-widest text-slate-500" data-testid="text-typical-header">Typical Contractor</span>
              </div>
              <div className="bg-brandOrange rounded-t-2xl p-4 text-center">
                <span className="text-xs font-black uppercase tracking-widest text-white" data-testid="text-express-header">ROOF EXPRESS</span>
              </div>
            </div>
            {comparisons.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 gap-0 ${i < comparisons.length - 1 ? "border-b border-slate-100" : ""}`} data-testid={`row-comparison-${i + 1}`}>
                <div className="p-5 flex items-center gap-3">
                  <i aria-hidden="true" className={`${row.icon} text-brandNavy`}></i>
                  <span className="text-sm font-black text-brandNavy uppercase">{row.category}</span>
                </div>
                <div className="bg-slate-50 p-5 flex items-center justify-center">
                  <span className="text-sm text-slate-500 text-center">
                    <i aria-hidden="true" className="fas fa-times-circle text-red-300 mr-2"></i>{row.typical}
                  </span>
                </div>
                <div className="bg-brandOrange/5 p-5 flex items-center justify-center">
                  <span className="text-sm text-brandNavy font-bold text-center">
                    <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mr-2"></i>{row.express}
                  </span>
                </div>
              </div>
            ))}
            <div className="grid grid-cols-3 gap-0">
              <div></div>
              <div className="bg-slate-100 rounded-b-2xl h-4"></div>
              <div className="bg-brandOrange rounded-b-2xl h-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandNavy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src="/images/roof-express-craftsman.webp"
                alt="ROOF EXPRESS craftsman custom-fabricating metal flashing in the workshop"
                className="rounded-[2rem] w-full object-cover shadow-2xl"
                data-testid="img-methodology-workshop"
                loading="lazy"
                width={800}
                height={1200}
              />
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/20 text-brandOrangeLight text-[10px] font-black uppercase tracking-[0.2em] mb-4">The ROOF EXPRESS Difference</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white" data-testid="text-craftsman-title">Built by Hand, <span className="text-brandOrangeLight">Backed by Science</span></h2>
              <p className="text-slate-300 text-lg leading-loose font-medium mb-8">
                Every piece of metal flashing, every drip edge, and every custom trim is precision-fabricated in our own workshop — not mass-produced in a factory. Our craftsmen use industrial-grade bending and cutting equipment to shape materials to the exact dimensions of your roof, eliminating gaps that lead to leaks.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur p-5 rounded-2xl border border-white/10 text-center">
                  <p className="text-3xl font-black text-brandOrangeLight">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Custom Fabrication</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-5 rounded-2xl border border-white/10 text-center">
                  <p className="text-3xl font-black text-brandOrangeLight">0</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Generic Parts Used</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300"><i aria-hidden="true" className="fas fa-check-circle text-brandOrangeLight"></i> <span className="font-bold">In-House Metal Shop — No Outsourcing</span></li>
                <li className="flex items-center gap-3 text-slate-300"><i aria-hidden="true" className="fas fa-check-circle text-brandOrangeLight"></i> <span className="font-bold">Precision-Cut to Your Roof's Exact Specs</span></li>
                <li className="flex items-center gap-3 text-slate-300"><i aria-hidden="true" className="fas fa-check-circle text-brandOrangeLight"></i> <span className="font-bold">Weather-Tight Fit — Zero Guesswork</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Common Questions</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-methodology-faq-title">Methodology <span className="text-brandOrange">FAQ</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Everything you need to know about our process.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm" data-testid={`card-methodology-faq-${i + 1}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition"
                  data-testid={`button-methodology-faq-${i + 1}`}
                >
                  <span className="text-base font-black text-brandNavy pr-4">{faq.q}</span>
                  <i aria-hidden="true" className={`fas ${openFaq === i ? "fa-chevron-up" : "fa-chevron-down"} text-brandOrange text-sm flex-shrink-0`}></i>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-slate-500 leading-relaxed" data-testid={`text-methodology-faq-answer-${i + 1}`}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandNavy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Let's Get Started</span>
   <h2 className="text-3xl md:text-5xl font-black mb-6 text-white" data-testid="text-methodology-cta">Ready for a <span className="text-brandOrangeLight">Clear Scope?</span></h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-12 font-medium">
            Get a detailed, line-item estimate with photo documentation. No pressure, no hidden fees — just an honest assessment of your roof.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href="tel:6506665554"
              className="bg-white text-brandNavy px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-brandOrange hover:text-white transition shadow-lg"
              data-testid="link-methodology-call"
            >
              Call 650-666-5554
            </a>
            <a
              href={JOBBER_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-brandOrange text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white hover:text-brandOrange transition shadow-lg"
              data-testid="link-methodology-quote"
            >
              Request Online
            </a>
          </div>
        </div>
      </section>

      <NearbyAreas />
    </Layout>
  );
}

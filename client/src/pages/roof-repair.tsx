import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import ServiceGallery from "@/components/service-gallery";
import { useSEO } from "@/hooks/use-seo";

const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";
const WHATSAPP_URL = "https://wa.me/16506665554";

export default function RoofRepair() {
  useSEO("Roof Repair — Fast Leak Fixes, Same Day | ROOF EXPRESS", "Same-day roof repair in the Bay Area. Leak detection, emergency tarping, flashing repair, and shingle replacement.", "roof repair Bay Area, roof leak repair near me, emergency roof repair, same-day roof fix, shingle repair, flashing repair, chimney leak fix, storm damage roof repair");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How quickly can you respond to an active leak?",
      a: "We offer same-day emergency response throughout the Bay Area. For active leaks, call our dispatch line at 650-666-5554 and we'll have a crew on-site within hours. We carry tarping materials and can perform temporary mitigation immediately while scheduling a permanent repair."
    },
    {
      q: "How much does a typical roof repair cost?",
      a: "Minor repairs like replacing a few shingles or sealing a small flashing gap typically range from $350–$1,200. More complex repairs involving structural work, large flashing replacements, or flat roof patching can range from $1,500–$5,000+. We provide a detailed photo report and fixed-price quote before any work begins."
    },
    {
      q: "Do you offer a warranty on roof repairs?",
      a: "Yes. All ROOF EXPRESS repairs include a minimum 5-year workmanship warranty. When we use manufacturer-certified materials (GAF, Owens Corning), additional material warranties apply. Our preventative maintenance plans extend coverage and include priority scheduling for any future issues."
    }
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/patch-roof-branded.webp" alt="Roof repair in progress" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-tools mr-2"></i> Repair Division
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-repair-hero-title">
              Roof Leak Repair & Maintenance <span className="text-brandOrangeLight">(Stop Leaks Fast)</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-repair-hero-subtitle">
              Rapid diagnostics and precision patching by Diamond Certified technicians. From emergency tarping to preventative maintenance — we stop leaks at the source and keep them from coming back.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:6506665554"
                className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
                data-testid="link-repair-call"
              >
                <i aria-hidden="true" className="fas fa-phone-alt mr-2"></i> Call Dispatch
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20"
                data-testid="link-repair-whatsapp"
              >
                <i aria-hidden="true" className="fab fa-whatsapp mr-2"></i> Text a Photo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-brandNavy border-b border-white/10">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8">
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-clock mr-1.5 text-brandOrangeLight text-[9px]"></i> Same-Day Inspections
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-phone-alt mr-1.5 text-brandOrangeLight text-[9px]"></i> Emergency Available 24/7
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-shield-alt mr-1.5 text-brandOrangeLight text-[9px]"></i> Insurance Claims Expert
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-check-circle mr-1.5 text-brandOrangeLight text-[9px]"></i> Lifetime Repair Warranty
            </span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Diagnostic Services</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-what-we-fix-title">What We <span className="text-brandOrange">Fix</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Precision solutions for the Bay Area's most common roofing failures.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-fire-alt",
                title: "Chimney & Flashing",
                desc: "Cracked or separated chimney flashing is the #1 cause of interior leaks. We remove old sealant, install step and counter flashing with lead or galvanized steel, and seal with polyurethane for a permanent bond.",
                features: ["Step & Counter Flashing", "Lead or Galvanized Steel", "Polyurethane Seal"]
              },
              {
                icon: "fas fa-th-large",
                title: "Missing Shingles",
                desc: "Wind damage, age, and improper installation cause shingles to lift, crack, or blow off entirely. We color-match and replace damaged sections using manufacturer-certified materials with proper nail patterns.",
                features: ["Color Matching", "Proper Nail Patterns", "Manufacturer Certified"]
              },
              {
                icon: "fas fa-water",
                title: "Flat Roof Ponding",
                desc: "Standing water on flat roofs accelerates membrane breakdown and leads to interior damage. We re-slope problem areas, install tapered insulation, and apply elastomeric coatings to restore positive drainage.",
                features: ["Re-Slope & Grade", "Tapered Insulation", "Elastomeric Coatings"]
              }
            ].map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500" data-testid={`card-fix-${i}`}>
                <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mb-8 text-brandOrange text-3xl group-hover:scale-110 transition-transform duration-500">
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
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 text-left">
              <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-8 inline-block tracking-[0.2em]">Our Process</span>
    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-tight" data-testid="text-protocol-title">Express Repair <span className="text-brandOrange ">Protocol</span></h2>
              <p className="text-slate-500 text-lg mb-12 font-medium leading-loose">
                Every repair follows our rigorous 4-step protocol to ensure we find the root cause, document it, fix it permanently, and prove it's watertight before we leave.
              </p>
              <div className="space-y-10">
                {[
                  { num: "01", title: "Forensic Inspection", desc: "We trace every stain, drip, and discoloration back to its origin point using moisture meters and thermal imaging." },
                  { num: "02", title: "Photo Report", desc: "You receive a detailed digital report with annotated photos showing exactly what we found and our recommended fix — before any work begins." },
                  { num: "03", title: "Surgical Repair", desc: "Targeted repair using manufacturer-certified materials. We fix only what's broken — no unnecessary upsells." },
                  { num: "04", title: "Water Test", desc: "Post-repair water test simulates heavy rainfall to verify the repair is 100% watertight. We don't leave until it passes." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-5xl font-black text-slate-100 group-hover:text-brandOrange transition duration-500">{step.num}</div>
                    <div>
                      <h3 className="font-black text-xl mb-2 uppercase">{step.title}</h3>
                      <p className="text-sm text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-transparent p-0 rounded-[3rem] overflow-hidden group">
                <img alt="ROOF EXPRESS Repair Protocol" className="rounded-[3rem] w-full transform group-hover:scale-105 transition duration-1000 object-cover" src="/images/patch-roof-branded.webp" data-testid="img-repair-protocol" loading="lazy" width={800} height={533} />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-brandOrange text-white p-10 rounded-[3rem] shadow-2xl text-center">
                <p className="text-5xl font-black mb-1">4</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Step Protocol</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Protect Your Investment</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-maintenance-title">Preventative <span className="text-brandOrange">Maintenance</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Scheduled care extends roof life by 10–15 years and catches small issues before they become expensive emergencies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 relative" data-testid="card-plan-annual">
              <div className="absolute top-4 right-4 bg-brandOrange text-white text-[9px] font-black uppercase px-4 py-2 rounded-full tracking-widest z-10">Most Popular</div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-brandNavy uppercase italic mb-2">Annual Tune-Up</h3>
                <p className="text-sm text-slate-500 font-medium mb-6">One comprehensive inspection and maintenance visit per year.</p>
                <div className="text-4xl font-black text-brandOrange mb-6">$349<span className="text-sm text-slate-500 font-bold">/year</span></div>
                <ul className="space-y-3 mb-8">
                  {["Full roof inspection", "Debris removal & gutter flush", "Flashing & sealant check", "Photo condition report", "Priority emergency scheduling"].map((item, i) => (
                    <li key={i} className="text-xs font-bold text-slate-500 flex items-center gap-2">
                      <i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={JOBBER_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block w-full text-center bg-brandNavy text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brandOrange transition"
                  data-testid="link-plan-annual"
                >
                  Schedule Tune-Up
                </a>
              </div>
            </div>
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 relative" data-testid="card-plan-biannual">
              <div className="absolute top-4 right-4 bg-brandNavy text-white text-[9px] font-black uppercase px-4 py-2 rounded-full tracking-widest z-10">Best Value</div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-brandNavy uppercase italic mb-2">Bi-Annual Care</h3>
                <p className="text-sm text-slate-500 font-medium mb-6">Two visits per year — pre-rain season and post-storm assessment.</p>
                <div className="text-4xl font-black text-brandOrange mb-6">$599<span className="text-sm text-slate-500 font-bold">/year</span></div>
                <ul className="space-y-3 mb-8">
                  {["Everything in Annual Tune-Up", "Pre-rain season prep (Oct)", "Post-storm assessment (Mar)", "Minor repair credits ($150)", "Extended warranty protection"].map((item, i) => (
                    <li key={i} className="text-xs font-bold text-slate-500 flex items-center gap-2">
                      <i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={JOBBER_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block w-full text-center bg-brandOrange text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brandNavy transition"
                  data-testid="link-plan-biannual"
                >
                  Schedule Bi-Annual
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Common Questions</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-repair-faq-title">Repair <span className="text-brandOrange">FAQ</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-brandGrey rounded-2xl border border-slate-100 overflow-hidden" data-testid={`faq-repair-${i}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between"
                  data-testid={`button-faq-repair-${i}`}
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
              { title: "Signs You Need a Roof Replacement", slug: "signs-you-need-roof-replacement" },
              { title: "How to Choose a Licensed Roofing Contractor", slug: "how-to-choose-roofing-contractor-bay-area" },
              { title: "How to Find a Roof Leak", slug: "how-to-find-roof-leak" },
              { title: "Emergency Roof Tarping Guide", slug: "emergency-roof-tarping-guide" },
              { title: "Roof Repair in Rainy Season", slug: "roof-repair-in-rainy-season-bay-area" },
              { title: "Roof Maintenance Checklist", slug: "bay-area-roof-maintenance-checklist" },
            ].map((guide) => (
              <Link key={guide.slug} href={`/blog/${guide.slug}`} className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-gray-100 hover:border-brandOrange/30 hover:shadow-md transition-all group" data-testid={`link-guide-${guide.slug}`}>
                <i aria-hidden="true" className="fas fa-arrow-right text-[9px] text-brandOrange/40 group-hover:text-brandOrange transition shrink-0"></i>
                <span className="text-sm font-bold text-brandNavy group-hover:text-brandOrange transition">{guide.title}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 max-w-2xl mx-auto">
            <Link href="/blog/field-notes" className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:border-brandOrange/30 hover:shadow-lg transition-all group" data-testid="link-field-notes-repair">
              <div className="w-12 h-12 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange shrink-0 group-hover:bg-brandOrange group-hover:text-white transition">
                <i aria-hidden="true" className="fas fa-hard-hat text-lg"></i>
              </div>
              <div className="min-w-0">
                <span className="text-sm font-black text-brandNavy group-hover:text-brandOrange transition block">Field Notes: Real Repair Jobs</span>
                <span className="text-xs text-slate-500 font-medium block mt-0.5">See how we diagnose leaks, repair flashing, and restore damaged roofs across the Bay Area</span>
              </div>
              <i aria-hidden="true" className="fas fa-arrow-right text-brandOrange/40 group-hover:text-brandOrange ml-auto text-sm shrink-0 transition"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">2026 Season</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-storm-damage-title">2026 Storm Damage <span className="text-brandOrange">Guide</span></h2>
            <p className="text-slate-500 font-medium max-w-3xl mx-auto">Bay Area storm seasons are intensifying. Know the signs of storm damage and how to protect your home with timely roof repairs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brandGrey rounded-2xl p-8 border border-slate-100">
              <h3 className="font-black text-brandNavy text-sm uppercase mb-4"><i aria-hidden="true" className="fas fa-exclamation-triangle text-brandOrange mr-2"></i>Signs of Storm Damage to Check After a Storm</h3>
              <ul className="space-y-3">
                {[
                  "Missing, cracked, or curled shingles visible from the ground",
                  "Granule accumulation in gutters or at downspout discharge points",
                  "Dented or displaced metal flashing around chimneys and vents",
                  "Water stains on interior ceilings or walls (may appear days after storm)",
                  "Damaged or detached gutter sections and loose downspouts",
                  "Debris accumulation in roof valleys and behind chimneys",
                  "Sagging or ponding areas on flat roof sections",
                ].map((item, i) => (
                  <li key={i} className="text-xs font-medium text-slate-500 flex items-start gap-3">
                    <i aria-hidden="true" className="fas fa-search text-brandOrange mt-0.5"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brandGrey rounded-2xl p-8 border border-slate-100">
              <h3 className="font-black text-brandNavy text-sm uppercase mb-4"><i aria-hidden="true" className="fas fa-file-invoice text-brandOrange mr-2"></i>Insurance Claim Tips for Bay Area Homeowners</h3>
              <ul className="space-y-3">
                {[
                  "Document all damage with dated photos and video before any temporary repairs",
                  "Contact your insurance company within 24-48 hours of the storm event",
                  "Request a copy of your policy's roof damage coverage and deductible amount",
                  "Get a professional roof inspection report — ROOF EXPRESS provides detailed photo documentation",
                  "Do not sign contracts with storm chasers who ask you to sign over insurance proceeds",
                  "Keep all receipts for emergency tarping and temporary repair costs",
                  "Ask your adjuster about RCV (Replacement Cost Value) vs ACV (Actual Cash Value) coverage",
                ].map((item, i) => (
                  <li key={i} className="text-xs font-medium text-slate-500 flex items-start gap-3">
                    <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-0.5"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Cost Guide</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6">2026 Roof Repair <span className="text-brandOrange">Cost Guide</span></h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-brandGrey rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-brandNavy block">Minor Shingle Repair (1–10 shingles)</span>
                    <span className="text-[10px] text-slate-500">Color-matched, same-day service</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$350–$800</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-brandGrey rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-brandNavy block">Flashing Repair (chimney/vent/pipe)</span>
                    <span className="text-[10px] text-slate-500">New step/counter flashing + seal</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$500–$1,500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-brandGrey rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-brandNavy block">Valley Repair / Re-flash</span>
                    <span className="text-[10px] text-slate-500">Common leak source — requires skill</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$800–$2,500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-brandGrey rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-brandNavy block">Flat Roof Patch / Membrane Repair</span>
                    <span className="text-[10px] text-slate-500">Torch-down or TPO patching</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$600–$2,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-brandGrey rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-brandNavy block">Emergency Tarp + Temp Repair</span>
                    <span className="text-[10px] text-slate-500">Same-day / 24-hour service</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$400–$1,200</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-brandGrey rounded-xl">
                  <div>
                    <span className="text-sm font-bold text-brandNavy block">Structural Deck Repair (per sheet)</span>
                    <span className="text-[10px] text-slate-500">Rot or water damage to plywood</span>
                  </div>
                  <span className="text-sm font-black text-brandOrange">$150–$350/sheet</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-medium mt-4 italic">*2026 Bay Area pricing. All repairs include a detailed photo report, 5-year workmanship warranty, and post-repair water test. Financing available.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brandNavy text-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-12">
   <h2 className="text-3xl md:text-4xl font-black mb-4">Common Bay Area <span className="text-brandOrangeLight">Roof Problems</span></h2>
            <p className="text-white/70 text-sm font-medium max-w-2xl mx-auto">Understanding the Bay Area's unique climate challenges helps you catch problems early and avoid costly emergency repairs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "fas fa-water", title: "Fog Belt Moisture", desc: "Constant fog exposure in coastal cities like Pacifica, Daly City, and the SF Sunset district causes persistent moisture infiltration, algae growth, and accelerated shingle deterioration." },
              { icon: "fas fa-wind", title: "High Wind Damage", desc: "Hilltop homes in San Francisco, Oakland Hills, and coastal areas experience sustained winds that lift shingles, break seals, and expose underlayment to rain." },
              { icon: "fas fa-sun", title: "UV Degradation", desc: "Inland Bay Area cities like San Jose, Fremont, and Livermore see 260+ sunny days per year, causing granule loss, shingle cracking, and sealant failure." },
              { icon: "fas fa-tree", title: "Tree & Debris Damage", desc: "Homes near mature oaks, eucalyptus, and redwoods face fallen branch impacts, debris-clogged valleys, and moss/algae growth from persistent shade." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10" data-testid={`card-problem-${i}`}>
                <div className="w-12 h-12 bg-brandOrange/20 rounded-xl flex items-center justify-center mb-4 text-brandOrangeLight text-xl">
                  <i aria-hidden="true" className={item.icon}></i>
                </div>
                <h3 className="font-black text-white uppercase text-xs mb-2">{item.title}</h3>
                <p className="text-xs text-white/70 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceGallery tag="Leak Repair" title="Leak Repair Projects" />

      <CTASection title="Got a leak? We'll fix it fast." subtitle="Same-day emergency response. Detailed photo reports. Permanent repairs backed by our workmanship warranty." />

      <NearbyAreas />
    </Layout>
  );
}

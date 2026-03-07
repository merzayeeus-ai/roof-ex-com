import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { NearbyAreas } from "@/components/page-bottom";
import ReviewShowcase from "@/components/review-showcase";
import ServiceGallery from "@/components/service-gallery";
import { useSEO } from "@/hooks/use-seo";

const WHATSAPP_URL = "https://wa.me/16506665554";
const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";

export default function Emergency() {
  useSEO("Emergency Roof Repair — 24/7 Bay Area Response | ROOF EXPRESS", "Emergency roofer near you — 24/7 Bay Area response. Storm damage, active leaks, emergency tarping. Call 650-666-5554 now.", "emergency roofer near me, emergency roof repair near me, 24/7 roof repair Bay Area, storm damage roof, roof leak emergency, emergency tarping, wind damage roof, active roof leak, same-day emergency roofer near me");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How fast can you get to my property?",
      a: "Our emergency strike teams are pre-positioned throughout the Bay Area. Average response time is 60 minutes during business hours and 90 minutes after hours. During major storm events, we triage by severity — active interior leaks and structural damage get priority dispatch."
    },
    {
      q: "Will you work with my insurance company?",
      a: "Yes. We provide comprehensive forensic documentation including timestamped photos, moisture readings, damage scope reports, and repair cost estimates formatted for insurance adjusters. We'll meet your adjuster on-site and advocate for full coverage of necessary repairs."
    },
    {
      q: "What should I do while waiting for your crew?",
      a: "Follow our Safety First protocol: 1) Clear the area under the leak and protect belongings with tarps or plastic. 2) If ceiling is bulging, carefully puncture it with a screwdriver to release water into a bucket. 3) If water is near electrical fixtures, cut power to that circuit. 4) Take photos and video of the damage for insurance documentation."
    },
    {
      q: "What is the difference between a temporary and permanent repair?",
      a: "A temporary repair — such as emergency tarping or sealant application — stops active water intrusion and prevents further interior damage. It's designed to last through the current storm cycle (typically 2–4 weeks). A permanent repair involves full material replacement, proper flashing installation, and manufacturer-spec membrane or shingle work with warranty coverage. ROOF EXPRESS always provides both options with transparent pricing so you can make the best decision for your situation."
    },
    {
      q: "How much does emergency roof tarping cost?",
      a: "Emergency tarping in the Bay Area typically ranges from $500–$1,500 depending on roof accessibility, area to be covered, and time of dispatch. ROOF EXPRESS uses heavy-duty reinforced tarps with mechanical fasteners rated to 70+ mph winds — not sandbags or lightweight tarps that fail in the next storm. If your homeowner's insurance covers the emergency, tarping costs are usually reimbursable as part of the mitigation expense."
    },
    {
      q: "When should I evacuate my home during a roof emergency?",
      a: "You should evacuate if you notice any of these conditions: structural sagging or visible deflection in the roof deck, large sections of ceiling collapsing, water contacting electrical panels or main service wiring, or if you smell gas from a compromised vent pipe. ROOF EXPRESS dispatchers are trained to assess severity over the phone and will advise evacuation when warranted. In all other cases, stay inside, move away from the affected area, and wait for our strike team to arrive."
    }
  ];

  return (
    <Layout>
      <div className="bg-red-600 text-white text-center py-3 px-4 font-black text-sm uppercase tracking-widest animate-pulse" data-testid="banner-emergency">
        <i aria-hidden="true" className="fas fa-exclamation-triangle mr-2"></i> Emergency Dispatch Active — Call <a href="tel:6506665554" className="underline hover:text-yellow-300">650-666-5554</a> for Immediate Response
      </div>

      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/roof-leak-bucket.webp" alt="Emergency roof leak repair" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-red-500/20 backdrop-blur border border-red-400/30 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-red-400">
                <i aria-hidden="true" className="fas fa-bolt mr-2"></i> 60-Minute Response
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-emergency-hero-title">
              24/7 Emergency <span className="text-brandOrangeLight">Roof Leak Repair & Tarping</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-emergency-hero-subtitle">
              60-minute response time for active leaks, storm damage, and structural emergencies. Pre-positioned strike teams across the Bay Area with tarping, infrared detection, and forensic documentation capabilities.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:6506665554"
                className="bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-red-700 transition-all duration-300 shadow-lg border border-red-400/30 animate-pulse"
                data-testid="link-emergency-call"
              >
                <i aria-hidden="true" className="fas fa-phone-alt mr-2"></i> Call 650-666-5554
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20"
                data-testid="link-emergency-whatsapp"
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
              <i aria-hidden="true" className="fas fa-bolt mr-1.5 text-brandOrangeLight text-[9px]"></i> 24/7 Emergency Response
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-clock mr-1.5 text-brandOrangeLight text-[9px]"></i> 60-Minute Arrival
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-shield-alt mr-1.5 text-brandOrangeLight text-[9px]"></i> Insurance Assistance
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-wrench mr-1.5 text-brandOrangeLight text-[9px]"></i> Temporary & Permanent Repair
            </span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Before We Arrive</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-safety-first-title">Safety <span className="text-red-600">First</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Follow these 4 steps to minimize damage while our strike team is en route.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", icon: "fas fa-people-arrows", title: "Clear the Area", desc: "Move furniture, electronics, and valuables away from the leak zone. Place tarps or plastic sheeting over items you can't move." },
              { num: "02", icon: "fas fa-tint", title: "Puncture Ceiling", desc: "If your ceiling is bulging with water, carefully poke a small hole with a screwdriver and place a bucket underneath to relieve pressure." },
              { num: "03", icon: "fas fa-plug", title: "Cut Power", desc: "If water is near electrical fixtures, light switches, or outlets, turn off the circuit breaker for that area immediately." },
              { num: "04", icon: "fas fa-phone-alt", title: "Call Dispatch", desc: "Call 650-666-5554 or text a photo via WhatsApp. Our dispatcher will give you an ETA and additional safety instructions." },
            ].map((step, i) => (
              <div key={i} className="bg-brandGrey p-8 rounded-[2rem] border border-slate-100 text-center group hover:shadow-xl transition-all duration-300 relative" data-testid={`card-safety-${i}`}>
                <div className="absolute top-4 left-4 text-4xl font-black text-slate-100 group-hover:text-red-200 transition">{step.num}</div>
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-600 text-2xl group-hover:scale-110 transition-transform">
                  <i aria-hidden="true" className={step.icon}></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm mb-3">{step.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Strike Team Capabilities</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-mitigation-title">Rapid Mitigation <span className="text-brandOrange">Hub</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: "fas fa-wind",
                  title: "Wind-Rated Tarping",
                  desc: "Heavy-duty reinforced tarps secured with mechanical fasteners — not sandbags. Our tarp systems are rated to 70+ mph and can cover up to 2,000 sq ft. We carry multiple sizes on every truck for immediate deployment.",
                  features: ["70+ MPH Wind Rating", "Mechanical Fasteners", "Up to 2,000 sq ft"]
                },
                {
                  icon: "fas fa-thermometer-half",
                  title: "Infrared Detection",
                  desc: "FLIR thermal cameras locate moisture intrusion paths invisible to the naked eye. We scan walls, ceilings, and roof decks to find every entry point — not just the obvious ones. Full thermal report included.",
                  features: ["FLIR Thermal Cameras", "Hidden Leak Detection", "Full Thermal Report"]
                },
                {
                  icon: "fas fa-camera",
                  title: "Forensic Documentation",
                  desc: "Timestamped photo and video documentation of all damage, moisture readings, and affected areas. Insurance-ready reports formatted for adjusters with itemized repair estimates.",
                  features: ["Timestamped Photos", "Moisture Readings", "Insurance-Ready Reports"]
                }
              ].map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition" data-testid={`card-mitigation-${i}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange shrink-0">
                      <i aria-hidden="true" className={card.icon}></i>
                    </div>
                    <div>
                      <h3 className="font-black text-brandNavy uppercase text-sm mb-2">{card.title}</h3>
                      <p className="text-xs text-slate-500 font-medium mb-4">{card.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {card.features.map((f, j) => (
                          <span key={j} className="bg-brandGrey px-3 py-1 rounded-full text-[10px] font-bold text-brandNavy">{f}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src="/images/roof-leak-bucket.webp"
                alt="Emergency Roof Repair Team"
                className="rounded-[3rem] w-full shadow-2xl"
                data-testid="img-emergency-team"
                loading="lazy"
                width={800}
                height={533}
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-8 rounded-[2rem] shadow-2xl text-center">
                <p className="text-4xl font-black mb-1">60</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Min Response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="bg-brandNavy text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-8 inline-block tracking-[0.2em]">Claims Support</span>
    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10 leading-tight" data-testid="text-insurance-title">Insurance Forensic <span className="text-brandOrange ">Reporting</span></h2>
              <p className="text-slate-500 text-lg mb-12 font-medium leading-loose">
                We don't just fix roofs — we fight for your claim. Our forensic reports are designed to maximize your insurance payout with detailed documentation that adjusters can't deny.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "fas fa-file-alt", title: "Damage Scope Report", desc: "Line-item documentation of every damaged component with manufacturer replacement costs and labor estimates." },
                  { icon: "fas fa-camera", title: "Photo Evidence Package", desc: "200+ timestamped photos organized by location, showing damage progression and extent from multiple angles." },
                  { icon: "fas fa-handshake", title: "Adjuster Meeting", desc: "We meet your insurance adjuster on-site, walk them through the damage, and advocate for full repair coverage." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 bg-brandGrey p-6 rounded-2xl border border-slate-100" data-testid={`card-insurance-${i}`}>
                    <div className="w-12 h-12 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange shrink-0">
                      <i aria-hidden="true" className={item.icon}></i>
                    </div>
                    <div>
                      <h3 className="font-black text-brandNavy uppercase text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-brandGrey p-10 rounded-[3rem] border border-slate-100">
                <h3 className="text-xl font-black text-brandNavy uppercase italic mb-6 text-center" data-testid="text-timeline-title">Restoration Timeline</h3>
                <table className="w-full text-left" data-testid="table-timeline">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="py-3 px-4 text-[10px] font-black uppercase tracking-widest text-brandOrange">Phase</th>
                      <th className="py-3 px-4 text-[10px] font-black uppercase tracking-widest text-brandNavy">Timeline</th>
                      <th className="py-3 px-4 text-[10px] font-black uppercase tracking-widest text-brandNavy">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium text-slate-500">
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4 font-bold text-brandNavy">Triage</td>
                      <td className="py-3 px-4">0–60 min</td>
                      <td className="py-3 px-4">Emergency tarping & water mitigation</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4 font-bold text-brandNavy">Assessment</td>
                      <td className="py-3 px-4">24–48 hrs</td>
                      <td className="py-3 px-4">Forensic inspection & insurance report</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4 font-bold text-brandNavy">Approval</td>
                      <td className="py-3 px-4">3–7 days</td>
                      <td className="py-3 px-4">Insurance claim & permit processing</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4 font-bold text-brandNavy">Repair</td>
                      <td className="py-3 px-4">1–3 days</td>
                      <td className="py-3 px-4">Permanent repair or full replacement</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-brandNavy">Closeout</td>
                      <td className="py-3 px-4">Final day</td>
                      <td className="py-3 px-4">Water test, cleanup & warranty activation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Know Your Risk</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-hazard-title">SF Storm <span className="text-red-600">Hazard Zones</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">San Francisco's microclimates create distinct hazard profiles. Know your zone.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "fas fa-wind", title: "Coastal Wind", zone: "Sunset, Richmond, Parkside", risk: "High wind uplift, salt corrosion, driving rain penetration. Requires wind-rated fasteners and corrosion-resistant flashing.", color: "red" },
                { icon: "fas fa-landmark", title: "Historic Valleys", zone: "Noe Valley, Mission, Castro", risk: "Aging Victorian/Edwardian structures with deferred maintenance. Complex roof geometry increases failure points.", color: "orange" },
                { icon: "fas fa-industry", title: "Industrial Districts", zone: "SOMA, Dogpatch, Bayview", risk: "Flat commercial roofs with membrane failure risk. HVAC penetrations and ponding water are primary threats.", color: "yellow" },
                { icon: "fas fa-microchip", title: "Tech Corridor", zone: "Mission Bay, FiDi, Rincon", risk: "Modern construction with green roofs and solar arrays. Storm damage to membrane systems and panel mounting.", color: "blue" },
              ].map((zone, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300" data-testid={`card-zone-${i}`}>
                  <div className={`w-12 h-12 bg-${zone.color}-100 rounded-xl flex items-center justify-center mb-4 text-${zone.color}-600 text-xl`}>
                    <i aria-hidden="true" className={zone.icon}></i>
                  </div>
                  <h3 className="font-black text-brandNavy uppercase text-sm mb-1">{zone.title}</h3>
                  <p className="text-[10px] font-bold text-brandOrange uppercase tracking-widest mb-3">{zone.zone}</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{zone.risk}</p>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src="/images/nailing-shingle.webp"
                alt="San Francisco Storm Hazard Zones"
                className="rounded-[3rem] w-full shadow-2xl"
                data-testid="img-hazard-zones"
                loading="lazy"
                width={800}
                height={533}
              />
              <div className="absolute -bottom-6 -left-6 bg-brandNavy text-white p-8 rounded-[2rem] shadow-2xl text-center">
                <p className="text-4xl font-black mb-1">4</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Hazard Zones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Common Questions</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-emergency-faq-title">Emergency <span className="text-brandOrange">FAQ</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-brandGrey rounded-2xl border border-slate-100 overflow-hidden" data-testid={`faq-emergency-${i}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between"
                  data-testid={`button-faq-emergency-${i}`}
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

      <section className="py-24 bg-brandNavy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <span className="bg-red-600 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Emergency Response</span>
   <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">Active leak? Storm damage?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-12 font-medium">Our emergency strike teams are pre-positioned across the Bay Area for 60-minute response. Call now or text a photo for immediate triage.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href="tel:6506665554"
              className="bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-red-700 transition shadow-lg animate-pulse"
              data-testid="link-cta-emergency-call"
            >
              <i aria-hidden="true" className="fas fa-phone-alt mr-3"></i> Dispatch Strike Team
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-[#128C7E] text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-[#0e6b5e] transition shadow-lg"
              data-testid="link-cta-emergency-whatsapp"
            >
              <i aria-hidden="true" className="fab fa-whatsapp mr-3"></i> Text Leak Photo
            </a>
          </div>
        </div>
      </section>

      <ServiceGallery tag="Emergency" title="Emergency Roof Repair Projects" />

      <ReviewShowcase />

      <NearbyAreas />
    </Layout>
  );
}

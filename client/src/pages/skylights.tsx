import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import ReviewShowcase from "@/components/review-showcase";
import ServiceGallery from "@/components/service-gallery";
import { useSEO } from "@/hooks/use-seo";

const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";

export default function Skylights() {
  useSEO("Skylight Installation & Repair — Velux Certified | ROOF EXPRESS", "Skylight installation & repair near you. Velux certified. Sun tunnels, deck-mount & curb-mount skylights. Leak-free flashing guaranteed.", "skylight installation near me, skylight repair near me, Velux skylight Bay Area, skylight replacement, sun tunnel installation, skylight leak repair, deck mount skylight, curb mount skylight, skylight cost");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Will a skylight make my roof leak?",
      a: "Not when installed by a VELUX Certified installer like ROOF EXPRESS. We use the VELUX No-Leak Triple Protection system: a deck seal, an integrated flashing kit engineered for your specific roof type, and a gap-free installation process. Our skylight installations carry a 10-year No-Leak warranty on top of the standard product warranty."
    },
    {
      q: "Do I qualify for the 30% federal tax credit?",
      a: "Yes — VELUX solar-powered Fresh Air skylights and Sun Tunnels with solar-powered lights qualify for the 30% federal tax credit under the Inflation Reduction Act (IRC Section 25C). There is no lifetime cap. A typical solar venting skylight installed costs $2,800–$4,500, so the credit can save you $840–$1,350 per unit. We provide all documentation needed for your tax filing."
    },
    {
      q: "How long does skylight installation take?",
      a: "A single skylight installation typically takes one day. We complete the roof opening, framing, flashing, and interior trim in a single visit. Sun tunnels can often be installed in 4–6 hours. For multiple skylights or complex light shafts, we may need 2 days. We always verify weather conditions and will reschedule if rain is forecast."
    },
    {
      q: "How much does a skylight cost installed in the Bay Area?",
      a: "Installed skylight costs in the Bay Area range from $1,200 for a sun tunnel to $4,500 for a solar-powered venting skylight. Fixed glass units typically run $1,800–$3,200 installed. These prices include the VELUX unit, engineered flashing kit, interior trim, and ROOF EXPRESS labor. After the 30% federal tax credit on qualifying solar models, your net cost can drop significantly — making skylights one of the best ROI upgrades for Bay Area homes."
    },
    {
      q: "Why choose VELUX over other skylight brands?",
      a: "VELUX is the world's largest skylight manufacturer and the only brand offering the No-Leak Triple Protection system with a 10-year installation warranty. Their solar-powered models qualify for the 30% federal tax credit, require no electrical wiring, and include a rain sensor that automatically closes the skylight at the first sign of precipitation. As a VELUX 3-Star Certified installer, ROOF EXPRESS has access to extended warranty programs and priority technical support that generic skylight brands simply cannot match."
    },
    {
      q: "Do skylights add value to a Bay Area home?",
      a: "Absolutely. Skylights are among the highest-ROI home improvements, with Bay Area homes featuring properly installed skylights selling for 5–10% more than comparable properties without natural daylighting. Beyond resale value, skylights reduce artificial lighting costs by up to 50%, improve indoor air quality with venting models, and are highly desirable in San Francisco's competitive real estate market where natural light is a premium feature."
    }
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/asphalt-shingle-skylight.webp" alt="Skylight on shingle roof" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-sun mr-2"></i> VELUX 3-Star Certified Installer
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-skylights-hero-title">
              Skylight Installation, Repair & <span className="text-brandOrangeLight">Leak-Free Flashing</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-skylights-hero-subtitle">
              VELUX Certified 3rd-Star installer bringing natural light to Bay Area homes. Solar-powered venting skylights, sun tunnels, and fixed glass units — all eligible for the 30% federal tax credit.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={JOBBER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
                data-testid="link-skylights-quote"
              >
                <i aria-hidden="true" className="fas fa-bolt mr-2"></i> Get Skylight Quote
              </a>
              <a
                href="tel:6506665554"
                className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20"
                data-testid="link-skylights-call"
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
              <i aria-hidden="true" className="fas fa-certificate mr-1.5 text-brandOrangeLight text-[9px]"></i> VELUX Certified
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-sun mr-1.5 text-brandOrangeLight text-[9px]"></i> Solar-Powered Options
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-shield-alt mr-1.5 text-brandOrangeLight text-[9px]"></i> No-Leak Guarantee
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-star mr-1.5 text-brandOrangeLight text-[9px]"></i> Energy Star Rated
            </span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">The Science of Light</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-daylighting-title">Why <span className="text-brandOrange">Daylighting?</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Natural light transforms your home's energy, health, and value.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-bolt",
                title: "Energy Efficiency",
                desc: "Reduce artificial lighting costs by up to 50%. Solar-powered venting skylights also provide passive cooling, reducing AC loads in summer months. VELUX models are ENERGY STAR certified.",
                stat: "50%",
                statLabel: "Lighting Savings"
              },
              {
                icon: "fas fa-heart",
                title: "Health & Wellness",
                desc: "Natural daylight regulates circadian rhythms, improves mood, and boosts productivity. Studies show occupants in daylit spaces report 18% higher satisfaction and better sleep quality.",
                stat: "18%",
                statLabel: "Higher Satisfaction"
              },
              {
                icon: "fas fa-chart-line",
                title: "Property Value",
                desc: "Skylights are among the highest ROI home improvements. Homes with properly installed skylights sell for 5–10% more than comparable properties without natural daylighting solutions.",
                stat: "10%",
                statLabel: "Value Increase"
              }
            ].map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500" data-testid={`card-daylighting-${i}`}>
                <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mb-8 text-brandOrange text-3xl group-hover:scale-110 transition-transform duration-500">
                  <i aria-hidden="true" className={card.icon}></i>
                </div>
                <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">{card.desc}</p>
                <div className="bg-brandGrey p-4 rounded-xl text-center">
                  <p className="text-3xl font-black text-brandOrange">{card.stat}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{card.statLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Product Solutions</span>
    <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-solutions-title">Illuminating <span className="text-brandOrange">San Francisco</span></h2>
              <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl">Three VELUX solutions tailored for Bay Area homes and light conditions.</p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/images/skylight-new.webp"
                alt="Skylight Installation by ROOF EXPRESS"
                className="rounded-[3rem] w-full object-cover shadow-2xl"
                data-testid="img-skylight-feature"
                loading="lazy"
                width={800}
                height={533}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-wind",
                title: "Venting Skylights",
                desc: "Solar-powered Fresh Air skylights open automatically to release hot air and moisture. Includes rain sensor that closes the unit at the first sign of precipitation.",
                features: ["Solar-Powered Operation", "Rain Sensor Auto-Close", "ENERGY STAR Certified", "No-Leak Flashing Kit", "30% Federal Tax Credit"],
                price: "$2,800–$4,500 installed"
              },
              {
                icon: "fas fa-circle",
                title: "Sun Tunnels",
                desc: "Bring natural light to interior rooms, hallways, and bathrooms where traditional skylights aren't feasible. Rigid and flexible tube options fit between rafters with minimal structural impact.",
                features: ["10\" & 14\" Diameters", "Rigid or Flexible Tube", "Optional Solar Night Light", "Installs in 4–6 Hours", "30% Tax Credit Eligible"],
                price: "$1,200–$2,200 installed"
              },
              {
                icon: "fas fa-square",
                title: "Fixed Glass Units",
                desc: "Maximum light with a clean, modern aesthetic. Fixed skylights are ideal for vaulted ceilings, stairwells, and living rooms where ventilation isn't needed but natural light is essential.",
                features: ["Laminated Low-E Glass", "Impact Resistant Option", "Clean Sight Lines", "Deck or Curb Mount", "Custom Sizes Available"],
                price: "$1,800–$3,200 installed"
              }
            ].map((solution, i) => (
              <div key={i} className="bg-brandGrey p-10 rounded-[2.5rem] border border-slate-100 group hover:shadow-xl transition-all duration-500" data-testid={`card-solution-${i}`}>
                <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mb-8 text-brandOrange text-3xl group-hover:scale-110 transition-transform duration-500">
                  <i aria-hidden="true" className={solution.icon}></i>
                </div>
                <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">{solution.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">{solution.desc}</p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((f, j) => (
                    <li key={j} className="text-xs font-bold text-slate-500 flex items-center gap-2">
                      <i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i> {f}
                    </li>
                  ))}
                </ul>
                <div className="bg-white p-4 rounded-xl text-center border border-slate-100">
                  <p className="text-sm font-black text-brandNavy">{solution.price}</p>
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
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Technical Specs</span>
   <h2 className="text-4xl md:text-5xl font-black mb-6 text-white" data-testid="text-comparison-title">Technical <span className="text-brandOrangeLight">Comparison</span></h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-left" data-testid="table-comparison">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-4 px-6 text-xs font-black uppercase tracking-widest text-brandOrangeLight">Feature</th>
                  <th className="py-4 px-6 text-xs font-black uppercase tracking-widest text-white">Solar Venting</th>
                  <th className="py-4 px-6 text-xs font-black uppercase tracking-widest text-white">Fixed Deck</th>
                  <th className="py-4 px-6 text-xs font-black uppercase tracking-widest text-white">Sun Tunnel</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium text-slate-300">
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-bold text-white">Ventilation</td>
                  <td className="py-4 px-6"><i aria-hidden="true" className="fas fa-check text-green-400"></i> Solar-powered</td>
                  <td className="py-4 px-6"><i aria-hidden="true" className="fas fa-times text-red-400"></i> None</td>
                  <td className="py-4 px-6"><i aria-hidden="true" className="fas fa-times text-red-400"></i> None</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-bold text-white">Tax Credit</td>
                  <td className="py-4 px-6"><i aria-hidden="true" className="fas fa-check text-green-400"></i> 30%</td>
                  <td className="py-4 px-6"><i aria-hidden="true" className="fas fa-times text-red-400"></i> No</td>
                  <td className="py-4 px-6"><i aria-hidden="true" className="fas fa-check text-green-400"></i> 30% (solar light)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-bold text-white">Rain Sensor</td>
                  <td className="py-4 px-6"><i aria-hidden="true" className="fas fa-check text-green-400"></i> Included</td>
                  <td className="py-4 px-6">N/A</td>
                  <td className="py-4 px-6">N/A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 font-bold text-white">Best For</td>
                  <td className="py-4 px-6">Kitchens, Baths</td>
                  <td className="py-4 px-6">Living Rooms, Vaults</td>
                  <td className="py-4 px-6">Hallways, Closets</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-white">Price Range</td>
                  <td className="py-4 px-6">$2,800–$4,500</td>
                  <td className="py-4 px-6">$1,800–$3,200</td>
                  <td className="py-4 px-6">$1,200–$2,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-8 inline-block tracking-[0.2em]">Zero-Leak Guarantee</span>
    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-tight" data-testid="text-no-leak-title">The No-Leak <span className="text-brandOrange ">Promise</span></h2>
              <p className="text-slate-500 text-lg mb-12 font-medium leading-loose">
                Every ROOF EXPRESS skylight installation uses the VELUX 3-Layer No-Leak system — engineered to prevent water intrusion in San Francisco's heavy rain and fog conditions.
              </p>
              <div className="space-y-6">
                {[
                  { num: "Layer 1", title: "Deck Seal", desc: "Self-adhering waterproof membrane applied directly to the roof deck around the entire skylight opening." },
                  { num: "Layer 2", title: "Engineered Flashing", desc: "Pre-fabricated aluminum flashing kit designed for your exact roof type — shingle, tile, or flat. No field-fabrication or caulk." },
                  { num: "Layer 3", title: "Gap-Free Installation", desc: "Certified installation process eliminates gaps between the skylight frame and flashing. Tested to withstand 100+ mph wind-driven rain." }
                ].map((layer, i) => (
                  <div key={i} className="flex gap-6 bg-brandGrey p-6 rounded-2xl border border-slate-100">
                    <div className="bg-brandOrange text-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-black text-xs">
                      {layer.num}
                    </div>
                    <div>
                      <h3 className="font-black text-brandNavy uppercase text-sm mb-1">{layer.title}</h3>
                      <p className="text-xs text-slate-500 font-medium">{layer.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-brandGrey p-10 rounded-[3rem] border border-slate-100">
                <div className="text-center">
                  <div className="w-24 h-24 bg-brandOrange/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-brandOrange text-5xl">
                    <i aria-hidden="true" className="fas fa-shield-alt"></i>
                  </div>
                  <h3 className="text-3xl font-black text-brandNavy uppercase italic mb-4">10-Year No-Leak Warranty</h3>
                  <p className="text-slate-500 font-medium text-sm mb-6">Backed by VELUX and ROOF EXPRESS. If it leaks, we fix it free — no questions asked.</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl text-center">
                      <p className="text-2xl font-black text-brandOrange">10</p>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Year Warranty</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl text-center">
                      <p className="text-2xl font-black text-brandOrange">3</p>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Layer System</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl text-center">
                      <p className="text-2xl font-black text-brandOrange">0</p>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Leak Tolerance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Local Expertise</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-aeo-title">SF AEO <span className="text-brandOrange">Optimization</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Skylight placement optimized for San Francisco's unique Annually Excepted Output (AEO) by neighborhood.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sunset & Richmond",
                desc: "West-facing fog belt neighborhoods benefit from south-facing skylights that maximize morning and midday sun exposure when fog typically clears. We recommend solar venting models to manage afternoon condensation.",
                tip: "South-facing placement recommended"
              },
              {
                title: "Noe Valley & Mission",
                desc: "The sunniest neighborhoods in SF. East or west-facing skylights work well here. Venting models are ideal for warm afternoon air management. Sun tunnels are perfect for the narrow Victorian floor plans common in these districts.",
                tip: "East/West orientation optimal"
              },
              {
                title: "Pacific Heights",
                desc: "Large homes with high ceilings and Bay views. Fixed skylights with laminated glass are ideal for vaulted living rooms. We often install ganged units (2–4 skylights together) for dramatic light wells in these expansive properties.",
                tip: "Ganged units for dramatic effect"
              }
            ].map((hood, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500" data-testid={`card-neighborhood-${i}`}>
                <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mb-8 text-brandOrange text-3xl group-hover:scale-110 transition-transform duration-500">
                  <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">{hood.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">{hood.desc}</p>
                <div className="bg-brandGrey p-4 rounded-xl">
                  <p className="text-xs font-black text-brandOrange uppercase tracking-widest"><i aria-hidden="true" className="fas fa-lightbulb mr-2"></i>{hood.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Common Questions</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-skylights-faq-title">Skylight <span className="text-brandOrange">FAQ</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-brandGrey rounded-2xl border border-slate-100 overflow-hidden" data-testid={`faq-skylight-${i}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between"
                  data-testid={`button-faq-skylight-${i}`}
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
              { title: "How Much Does Roof Replacement Cost in SF?", slug: "roof-replacement-cost-san-francisco" },
              { title: "Signs You Need a Roof Replacement", slug: "signs-you-need-roof-replacement" },
            ].map((guide) => (
              <Link key={guide.slug} href={`/blog/${guide.slug}`} className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-gray-100 hover:border-brandOrange/30 hover:shadow-md transition-all group" data-testid={`link-guide-${guide.slug}`}>
                <i aria-hidden="true" className="fas fa-arrow-right text-[9px] text-brandOrange/40 group-hover:text-brandOrange transition shrink-0"></i>
                <span className="text-sm font-bold text-brandNavy group-hover:text-brandOrange transition">{guide.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <Link href="/blog/field-notes" className="flex items-center gap-4 bg-brandGrey rounded-2xl p-5 border border-slate-100 hover:border-brandOrange/30 hover:shadow-lg transition-all group" data-testid="link-field-notes-skylights">
            <div className="w-12 h-12 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange shrink-0 group-hover:bg-brandOrange group-hover:text-white transition">
              <i aria-hidden="true" className="fas fa-hard-hat text-lg"></i>
            </div>
            <div className="min-w-0">
              <span className="text-sm font-black text-brandNavy group-hover:text-brandOrange transition block">Field Notes: Skylight Installations</span>
              <span className="text-xs text-slate-500 font-medium block mt-0.5">VELUX installations, flashing details, and before/after transformations from recent projects</span>
            </div>
            <i aria-hidden="true" className="fas fa-arrow-right text-brandOrange/40 group-hover:text-brandOrange ml-auto text-sm shrink-0 transition"></i>
          </Link>
        </div>
      </section>

      <ServiceGallery tag="Skylights" title="Skylight Installation Projects" />

      <ReviewShowcase />

      <CTASection title="Ready for natural light?" subtitle="VELUX Certified installation with 10-year No-Leak warranty. 30% federal tax credit on qualifying solar-powered models." />

      <NearbyAreas />
    </Layout>
  );
}

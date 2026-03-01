import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import { useSEO } from "@/hooks/use-seo";

const WISETACK_URL = "https://wisetack.us/#/dxmod5m/prequalify";
const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";

export default function Financing() {
  useSEO("Roofing Financing — $0 Down, Flexible Payments | ROOF EXPRESS", "Finance your new roof with $0 down through Wisetack. Up to $25,000, flexible terms, soft credit check. Apply in minutes.", "roofing financing Bay Area, $0 down roof financing, Wisetack roofing, roof payment plan, affordable roof replacement, monthly roof payments, roof financing no credit impact");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What credit score do I need to qualify?", a: "Wisetack works with a wide range of credit profiles. There is no minimum credit score requirement to apply — prequalification uses a soft credit pull that won't affect your score. Final approval and rates depend on your full credit profile." },
    { q: "What are the interest rates?", a: "Interest rates vary based on your creditworthiness and the loan term you select. Wisetack offers competitive rates, and you'll see your personalized options — including APR and monthly payment amounts — before you commit to anything." },
    { q: "Are there prepayment penalties?", a: "No. Wisetack financing has zero prepayment penalties. You can pay off your balance early at any time without any additional fees or charges." },
    { q: "Is roofing financing tax deductible?", a: "In some cases, home improvement financing may be tax deductible, especially if the work increases your home's value or improves energy efficiency. We recommend consulting with a tax professional for advice specific to your situation." },
    { q: "Is there a down payment required?", a: "No down payment is required with Wisetack financing. You can finance up to $25,000 for your roofing project with $0 down and start your project immediately." },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-financing.webp" alt="Home financing and roofing investment paperwork" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-money-bill-wave mr-2"></i> Financing
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-financing-hero-title">
              Roofing Financing Options — <span className="text-brandOrangeLight">$0 Down, Flexible Payments</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-4 leading-relaxed" data-testid="text-financing-hero-subtitle">
              We've partnered with Wisetack to offer flexible financing up to $25,000 for any roofing project. Get prequalified in seconds with no impact to your credit score.
            </p>
            <p className="text-xs text-white/70 mb-6">
              <i aria-hidden="true" className="fas fa-shield-alt mr-2 text-green-400"></i> Soft credit pull — won't affect your credit score
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WISETACK_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
                data-testid="link-financing-prequalify"
              >
                <i aria-hidden="true" className="fas fa-bolt mr-2"></i> Check My Options
              </a>
              <a
                href="tel:6506665554"
                className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20"
                data-testid="link-financing-call"
              >
                <i aria-hidden="true" className="fas fa-phone-alt mr-2"></i> 650-666-5554
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-brandNavy border-b border-white/10">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8">
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-dollar-sign mr-1.5 text-brandOrangeLight text-[9px]"></i> 0% APR Available
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-shield-alt mr-1.5 text-brandOrangeLight text-[9px]"></i> No Credit Impact Check
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-check-circle mr-1.5 text-brandOrangeLight text-[9px]"></i> Flexible Terms
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-bolt mr-1.5 text-brandOrangeLight text-[9px]"></i> Instant Approval
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-screen-xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Official Financing Partner</p>
          <img
            alt="Wisetack"
            className="h-8 md:h-10 mx-auto object-contain"
            src="https://cdn.prod.website-files.com/5f194315e6b47c1697925302/5f2401ee6ddecd8188a4800d_Logo%20(3).png"
            data-testid="img-wisetack-badge"
            loading="lazy"
            width={214}
            height={40}
          />
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Why Finance?</span>
   <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-4">Smart Use <span className="text-brandOrange">Cases</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500" data-testid="card-use-case-emergency">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-500 text-3xl">
                <i aria-hidden="true" className="fas fa-exclamation-triangle"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">Emergency Repairs</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Don't let a sudden leak or storm damage wait. Finance your emergency roof repair and get it fixed immediately — pay comfortably over time instead of draining your savings.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500" data-testid="card-use-case-presale">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-500 text-3xl">
                <i aria-hidden="true" className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">Pre-Sale Value Boost</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                A new roof can increase your home's value by $15,000–$40,000. Finance the upgrade before listing, and recoup the investment — and then some — at closing.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500" data-testid="card-use-case-energy">
              <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mb-6 text-brandOrange text-3xl">
                <i aria-hidden="true" className="fas fa-solar-panel"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">Energy Upgrades</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Upgrade to a cool roof system, add radiant barriers, or install skylights for natural light. Finance your energy-efficient roofing and start saving on utility bills immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="bg-brandNavy text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Investment Guide</span>
    <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-8" data-testid="text-costs-title">Bay Area Roofing Costs <span className="text-brandOrange">& Investment</span></h2>
              <p className="text-slate-500 text-base leading-relaxed font-medium mb-6">
                The average roof replacement in the San Francisco Bay Area costs between <strong>$15,000 and $35,000</strong>, depending on materials, roof size, complexity, and accessibility. Premium architectural shingles and flat roof systems can push costs higher, especially on multi-story Victorian homes and commercial properties.
              </p>
              <p className="text-slate-500 text-base leading-relaxed font-medium mb-6">
                With Wisetack financing through ROOF EXPRESS, you don't have to choose between protecting your home and protecting your bank account. Spread payments over 12 to 60 months with competitive rates and zero prepayment penalties.
              </p>
              <p className="text-slate-500 text-base leading-relaxed font-medium">
                Whether it's a $5,000 repair or a $25,000 full system replacement, financing lets you act now — before small issues become expensive disasters.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-brandGrey p-10 rounded-[2rem] border border-slate-100">
                <h3 className="font-black text-brandNavy uppercase text-lg mb-6">Typical Bay Area Costs</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                    <span className="font-bold text-sm text-slate-600">Roof Repair</span>
                    <span className="font-black text-brandOrange">$1,500 – $5,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                    <span className="font-bold text-sm text-slate-600">Shingle Replacement</span>
                    <span className="font-black text-brandOrange">$15,000 – $25,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                    <span className="font-bold text-sm text-slate-600">Flat Roof (TPO/Torch)</span>
                    <span className="font-black text-brandOrange">$12,000 – $30,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                    <span className="font-bold text-sm text-slate-600">Skylight Installation</span>
                    <span className="font-black text-brandOrange">$2,500 – $6,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                    <span className="font-bold text-sm text-slate-600">Gutters & Drainage</span>
                    <span className="font-black text-brandOrange">$1,500 – $4,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Side by Side</span>
   <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-4">Compare Your <span className="text-brandOrange">Options</span></h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-[2rem] shadow-xl overflow-hidden" data-testid="table-comparison">
              <thead>
                <tr className="bg-brandNavy text-white">
                  <th className="p-6 text-left text-xs font-black uppercase tracking-widest">Feature</th>
                  <th className="p-6 text-center text-xs font-black uppercase tracking-widest">
                    <span className="text-brandOrange">Wisetack</span>
                  </th>
                  <th className="p-6 text-center text-xs font-black uppercase tracking-widest">Credit Cards</th>
                  <th className="p-6 text-center text-xs font-black uppercase tracking-widest">HELOC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-6 font-bold text-sm text-brandNavy">Application Time</td>
                  <td className="p-6 text-center text-sm font-bold text-green-600"><i aria-hidden="true" className="fas fa-check-circle mr-2"></i>30 Seconds</td>
                  <td className="p-6 text-center text-sm font-bold text-slate-500">5–10 Minutes</td>
                  <td className="p-6 text-center text-sm font-bold text-red-500">2–6 Weeks</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="p-6 font-bold text-sm text-brandNavy">Credit Impact</td>
                  <td className="p-6 text-center text-sm font-bold text-green-600"><i aria-hidden="true" className="fas fa-check-circle mr-2"></i>Soft Pull Only</td>
                  <td className="p-6 text-center text-sm font-bold text-slate-500">Hard Pull</td>
                  <td className="p-6 text-center text-sm font-bold text-red-500">Hard Pull</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-6 font-bold text-sm text-brandNavy">Prepayment Penalties</td>
                  <td className="p-6 text-center text-sm font-bold text-green-600"><i aria-hidden="true" className="fas fa-check-circle mr-2"></i>None</td>
                  <td className="p-6 text-center text-sm font-bold text-slate-500">None</td>
                  <td className="p-6 text-center text-sm font-bold text-red-500">Possible</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="p-6 font-bold text-sm text-brandNavy">Collateral Required</td>
                  <td className="p-6 text-center text-sm font-bold text-green-600"><i aria-hidden="true" className="fas fa-check-circle mr-2"></i>None</td>
                  <td className="p-6 text-center text-sm font-bold text-slate-500">None</td>
                  <td className="p-6 text-center text-sm font-bold text-red-500">Your Home</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-sm text-brandNavy">Interest Rates</td>
                  <td className="p-6 text-center text-sm font-bold text-green-600"><i aria-hidden="true" className="fas fa-check-circle mr-2"></i>Competitive</td>
                  <td className="p-6 text-center text-sm font-bold text-red-500">15–25% APR</td>
                  <td className="p-6 text-center text-sm font-bold text-slate-500">Variable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="bg-brandNavy text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">How It Works</span>
   <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-4">Simple 3-Step <span className="text-brandOrange">Process</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center" data-testid="step-prequalify">
              <div className="w-20 h-20 bg-brandOrange/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brandOrange text-3xl">
                <i aria-hidden="true" className="fas fa-mobile-alt"></i>
              </div>
              <div className="text-5xl font-black text-slate-100 mb-4">01</div>
              <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">Prequalify Online</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Fill out a quick form in 30 seconds. Wisetack performs a soft credit pull to show you personalized loan options — no commitment required.
              </p>
            </div>
            <div className="text-center" data-testid="step-review">
              <div className="w-20 h-20 bg-brandBlue/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brandBlue text-3xl">
                <i aria-hidden="true" className="fas fa-clipboard-list"></i>
              </div>
              <div className="text-5xl font-black text-slate-100 mb-4">02</div>
              <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">Review Options</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Compare multiple loan offers with different terms, rates, and monthly payments. Choose the plan that fits your budget — from 12 to 60 months.
              </p>
            </div>
            <div className="text-center" data-testid="step-get-roofing">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 text-3xl">
                <i aria-hidden="true" className="fas fa-hard-hat"></i>
              </div>
              <div className="text-5xl font-black text-slate-100 mb-4">03</div>
              <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">Get Roofing</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Once approved, we schedule your project immediately. Your roof gets installed, and you pay at a pace that works for you. It's that simple.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href={WISETACK_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block bg-brandOrange text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brandNavy transition shadow-lg"
              data-testid="link-financing-prequalify-steps"
            >
              <i aria-hidden="true" className="fas fa-bolt mr-3"></i> Start Prequalification
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brandNavy text-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="flex items-center gap-4" data-testid="badge-mobile-friendly">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brandOrangeLight text-2xl">
                <i aria-hidden="true" className="fas fa-mobile-alt"></i>
              </div>
              <div>
                <h3 className="font-black uppercase text-sm">Mobile Friendly</h3>
                <p className="text-xs text-slate-300">Apply from any device, anywhere</p>
              </div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block"></div>
            <div className="flex items-center gap-4" data-testid="badge-soft-pull">
              <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-400 text-2xl">
                <i aria-hidden="true" className="fas fa-shield-alt"></i>
              </div>
              <div>
                <h3 className="font-black uppercase text-sm">Soft Credit Pull Only</h3>
                <p className="text-xs text-slate-300">No impact to your credit score</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Got Questions?</span>
   <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-4">Financing <span className="text-brandOrange">FAQ</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left"
                  data-testid={`button-faq-${i}`}
                >
                  <span className="font-black text-brandNavy text-sm pr-4">{faq.q}</span>
                  <i aria-hidden="true" className={`fas fa-chevron-down text-brandOrange transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}></i>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="bg-brandNavy text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">All Services</span>
   <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-4">Finance Any <span className="text-brandOrange">Roofing Project</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <Link href="/roof-repair" className="bg-brandGrey p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group" data-testid="link-finance-repair">
              <div className="w-12 h-12 bg-brandOrange/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-brandOrange text-xl group-hover:scale-110 transition">
                <i aria-hidden="true" className="fas fa-tools"></i>
              </div>
              <p className="font-black text-sm text-brandNavy uppercase">Repair</p>
            </Link>
            <Link href="/residential" className="bg-brandGrey p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group" data-testid="link-finance-replacement">
              <div className="w-12 h-12 bg-brandOrange/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-brandOrange text-xl group-hover:scale-110 transition">
                <i aria-hidden="true" className="fas fa-home"></i>
              </div>
              <p className="font-black text-sm text-brandNavy uppercase">Replacement</p>
            </Link>
            <Link href="/flat" className="bg-brandGrey p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group" data-testid="link-finance-flat">
              <div className="w-12 h-12 bg-brandBlue/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-brandBlue text-xl group-hover:scale-110 transition">
                <i aria-hidden="true" className="fas fa-layer-group"></i>
              </div>
              <p className="font-black text-sm text-brandNavy uppercase">Flat</p>
            </Link>
            <Link href="/gutters" className="bg-brandGrey p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group" data-testid="link-finance-gutters">
              <div className="w-12 h-12 bg-brandBlue/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-brandBlue text-xl group-hover:scale-110 transition">
                <i aria-hidden="true" className="fas fa-tint"></i>
              </div>
              <p className="font-black text-sm text-brandNavy uppercase">Gutters</p>
            </Link>
            <Link href="/skylights" className="bg-brandGrey p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group" data-testid="link-finance-skylights">
              <div className="w-12 h-12 bg-brandOrange/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-brandOrange text-xl group-hover:scale-110 transition">
                <i aria-hidden="true" className="fas fa-sun"></i>
              </div>
              <p className="font-black text-sm text-brandNavy uppercase">Skylights</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brandGrey border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h3 className="text-sm font-black uppercase tracking-widest text-brandNavy mb-6">Helpful Links</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/methodology" className="text-sm font-bold text-slate-500 hover:text-brandOrange transition" data-testid="link-helpful-methodology">How We Work</Link>
            <span className="text-slate-300">|</span>
            <Link href="/reviews" className="text-sm font-bold text-slate-500 hover:text-brandOrange transition" data-testid="link-helpful-reviews">Customer Reviews</Link>
            <span className="text-slate-300">|</span>
            <Link href="/gallery" className="text-sm font-bold text-slate-500 hover:text-brandOrange transition" data-testid="link-helpful-gallery">Project Gallery</Link>
            <span className="text-slate-300">|</span>
            <Link href="/contact" className="text-sm font-bold text-slate-500 hover:text-brandOrange transition" data-testid="link-helpful-contact">Contact Us</Link>
            <span className="text-slate-300">|</span>
            <a href={JOBBER_URL} target="_blank" rel="noreferrer noopener" className="text-sm font-bold text-slate-500 hover:text-brandOrange transition" data-testid="link-helpful-quote">Request a Quote</a>
          </div>
        </div>
      </section>

      <CTASection title="Ready to finance your roofing project?" subtitle="Get prequalified in 30 seconds with no impact to your credit. Up to $25,000 available." />
      <NearbyAreas />
    </Layout>
  );
}
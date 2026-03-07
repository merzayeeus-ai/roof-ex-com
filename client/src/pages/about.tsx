import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import { useSEO } from "@/hooks/use-seo";

const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";

export default function About() {
  useSEO("About Us — Diamond Certified Bay Area Roofer | ROOF EXPRESS", "Meet the ROOF EXPRESS team — Diamond Certified, GAF Master Elite, CertainTeed Select ShingleMaster. 5,000+ projects. Bay Area's trusted roofer since 2017.", "about ROOF EXPRESS, Diamond Certified roofing company, GAF Master Elite contractor, Bay Area roofer since 2017, CSLB 1072766, Owens Corning Platinum Preferred, roofing company near me");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How long has ROOF EXPRESS been in business?", a: "ROOF EXPRESS has been proudly serving the Bay Area since 2017, completing more than 5,000 roofing projects across San Francisco, the Peninsula, and surrounding communities." },
    { q: "What certifications does ROOF EXPRESS hold?", a: "We are GAF Master Elite certified (verify on gaf.ca), Owens Corning Platinum Preferred (verify on owenscorning.com), CertainTeed Select ShingleMaster (verify on certainteed.com), and Diamond Certified — placing us in the top 1% of roofing contractors nationwide." },
    { q: "Do you offer warranties on your work?", a: "Yes. Every project comes with manufacturer-backed warranties up to 50 years, plus our own workmanship guarantee. We stand behind every shingle, every seal, every time." },
    { q: "What areas do you serve?", a: "We serve the entire San Francisco Bay Area including San Francisco, Palo Alto, Mountain View, Menlo Park, Oakland, Pacifica, Millbrae, Los Altos, Los Gatos, Milpitas, and surrounding cities." },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/roof-express-crew-about.webp" alt="ROOF EXPRESS crew installing roofing materials" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={1200} height={800} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-building mr-2"></i> About Us
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-about-hero-title">
              About ROOF EXPRESS — <span className="text-brandOrangeLight">Diamond Certified Bay Area Roofers</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-about-hero-subtitle">
              Since 2017, ROOF EXPRESS has set the standard for roofing excellence across San Francisco and the greater Bay Area. Diamond Certified. Master Elite. Locally owned.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={JOBBER_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
                data-testid="link-about-start-project"
              >
                <i aria-hidden="true" className="fas fa-bolt mr-2"></i> Start Your Project
              </a>
              <Link
                href="/story"
                className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20"
                data-testid="link-about-read-story"
              >
                <i aria-hidden="true" className="fas fa-book-open mr-2"></i> Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-brandNavy border-b border-white/10">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8">
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-calendar-alt mr-1.5 text-brandOrangeLight text-[9px]"></i> Founded 2017
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-certificate mr-1.5 text-brandOrangeLight text-[9px]"></i> Fully Certified
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-home mr-1.5 text-brandOrangeLight text-[9px]"></i> 5,000+ Roofs
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-map-marker-alt mr-1.5 text-brandOrangeLight text-[9px]"></i> Bay Area Local
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-years">
              <p className="text-4xl md:text-5xl font-black text-brandOrange mb-2">20+</p>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500">Years Experience</p>
            </div>
            <div data-testid="stat-roofs">
              <p className="text-4xl md:text-5xl font-black text-brandOrange mb-2">10k+</p>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500">Roofs Completed</p>
            </div>
            <div data-testid="stat-rating">
              <p className="text-4xl md:text-5xl font-black text-brandOrange mb-2">5.0</p>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500">Star Rating</p>
            </div>
            <div data-testid="stat-diamond">
              <p className="text-4xl md:text-5xl font-black text-brandOrange mb-2">Top 1%</p>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500">Diamond Certified</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <video
                  src="/videos/roof-express-intro.mp4"
                  poster="/videos/roof-express-intro-thumb.webp"
                  controls
                  playsInline
                  preload="none"
                  className="w-full aspect-video object-cover"
                  data-testid="video-about-promo"
                >
                  <track kind="captions" src="/videos/captions-intro.vtt" srcLang="en" label="English" />
                </video>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100">
                <i aria-hidden="true" className="fas fa-quote-left text-4xl text-brandOrange/20 mb-6 block"></i>
                <p className="text-2xl font-black text-brandNavy italic leading-relaxed mb-6" data-testid="text-about-quote">
                  "Our mission is simple: deliver the highest-quality roofing systems with radical transparency, zero shortcuts, and deep respect for every homeowner we serve."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brandOrange rounded-full flex items-center justify-center text-white font-black text-lg">RE</div>
                  <div>
                    <p className="font-black text-brandNavy">ROOF EXPRESS Leadership</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Since 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Our History</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-our-legacy">Our <span className="text-brandOrange">Legacy</span></h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-500 text-lg leading-loose font-medium mb-8">
              Founded in 2017, ROOF EXPRESS began as a small crew with one truck and one promise: do it right, every time. Since then, we've grown into the Bay Area's most trusted roofing authority — completing over 5,000 projects and earning the industry's most prestigious certifications.
            </p>
            <p className="text-slate-500 text-lg leading-loose font-medium">
              From San Francisco's Victorian rooftops to Palo Alto's modern estates, our team has seen every pitch, every material, and every challenge the Bay Area climate can throw. That experience is baked into every project we touch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <i aria-hidden="true" className="fas fa-play-circle mr-2"></i>Watch Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6">The ROOF EXPRESS <span className="text-brandOrange">Brand</span></h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <video
                src="/videos/roof-express-brand.mp4"
                poster="/videos/roof-express-brand-thumb.webp"
                controls
                playsInline
                preload="none"
                className="w-full aspect-video object-cover"
                data-testid="video-about-brand"
              >
                <track kind="captions" src="/videos/captions-brand.vtt" srcLang="en" label="English" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Side-by-Side</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-express-advantage">The Express <span className="text-brandOrange">Advantage</span></h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-brandNavy text-white font-black text-xs uppercase tracking-widest text-center">
              <div className="p-5 border-r border-white/10">Category</div>
              <div className="p-5 border-r border-white/10 text-brandOrange">ROOF EXPRESS</div>
              <div className="p-5">Average Roofer</div>
            </div>
            {[
              { cat: "Certifications", re: "Fully Certified (GAF, Owens Corning, CertainTeed, Diamond)", avg: "Basic licensed" },
              { cat: "Timeline", re: "2-3 day completion", avg: "1-2 weeks" },
              { cat: "Warranty", re: "50-Year System Warranty", avg: "5-10 year limited" },
              { cat: "Inspections", re: "3-Point mandatory QC", avg: "Final walkthrough only" },
              { cat: "Communication", re: "Real-time Jobber portal updates", avg: "Phone calls & voicemails" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-brandGrey/50"}`} data-testid={`row-comparison-${i}`}>
                <div className="p-5 font-black text-brandNavy border-r border-slate-100">{row.cat}</div>
                <div className="p-5 text-brandOrange font-bold border-r border-slate-100">{row.re}</div>
                <div className="p-5 text-slate-500 font-medium">{row.avg}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Local Expertise</span>
    <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6" data-testid="text-deeply-rooted">Deeply Rooted in the <span className="text-brandOrange">Bay Area</span></h2>
              <p className="text-slate-500 text-lg leading-loose font-medium mb-8">
                From the fog-battered flats of the Sunset to the sun-scorched tiles of the South Bay, we know every microclimate, every code requirement, and every neighborhood. Our two offices in San Francisco and Palo Alto mean we're always just minutes away.
              </p>
              <div className="flex gap-4">
                <div className="bg-brandGrey p-4 rounded-xl text-center flex-1">
                  <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange text-xl mb-2"></i>
                  <p className="text-xs font-black uppercase tracking-widest text-brandNavy">SF HQ</p>
                  <p className="text-xs text-slate-500">58 West Portal Ave</p>
                </div>
                <div className="bg-brandGrey p-4 rounded-xl text-center flex-1">
                  <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange text-xl mb-2"></i>
                  <p className="text-xs font-black uppercase tracking-widest text-brandNavy">Palo Alto</p>
                  <p className="text-xs text-slate-500">3790 El Camino Real</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                alt="Bay Area Roofing"
                className="rounded-[3rem] w-full object-cover shadow-2xl"
                src="/images/sf-aerial-ocean.webp"
                data-testid="img-about-bayarea"
                loading="lazy"
                width={800}
                height={533}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandNavy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                alt="ROOF EXPRESS project manager with 25 years of roofing experience"
                className="rounded-[2rem] w-full object-cover shadow-2xl"
                src="/images/25-year-crew-experience.webp"
                data-testid="img-25-year-experience"
                loading="lazy"
                width={800}
                height={400}
              />
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/20 text-brandOrangeLight text-[10px] font-black uppercase tracking-[0.2em] mb-4">Our Expertise, Your Peace of Mind</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white" data-testid="text-25-year-experience">25 Years of <span className="text-brandOrangeLight">Dedicated Roofers</span></h2>
              <p className="text-slate-300 text-lg leading-loose font-medium mb-8">
                Our project managers bring over 25 years of hands-on roofing experience to every job. They've seen it all — from complex multi-story tear-offs to delicate historic restorations. That depth of knowledge means fewer surprises, tighter timelines, and a finished roof that's built to last decades.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur p-5 rounded-2xl border border-white/10 text-center">
                  <p className="text-3xl font-black text-brandOrangeLight">25+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Years Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-5 rounded-2xl border border-white/10 text-center">
                  <p className="text-3xl font-black text-brandOrangeLight">5,000+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Roofs Completed</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300"><i aria-hidden="true" className="fas fa-check-circle text-brandOrangeLight"></i> <span className="font-bold">On-Site Supervision From Start to Finish</span></li>
                <li className="flex items-center gap-3 text-slate-300"><i aria-hidden="true" className="fas fa-check-circle text-brandOrangeLight"></i> <span className="font-bold">Expert Material Selection for Your Climate</span></li>
                <li className="flex items-center gap-3 text-slate-300"><i aria-hidden="true" className="fas fa-check-circle text-brandOrangeLight"></i> <span className="font-bold">3-Point Quality Inspection on Every Project</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Green Building</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-sustainable">Sustainable & <span className="text-green-600">Eco-Friendly</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-xl text-center group hover:shadow-2xl transition-all" data-testid="card-eco-recycling">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600 text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-recycle"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy mb-3 uppercase">Material Recycling</h3>
              <p className="text-sm text-slate-500 leading-relaxed">We recycle over 90% of tear-off materials, diverting thousands of tons of shingles and underlayment from landfills every year.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-xl text-center group hover:shadow-2xl transition-all" data-testid="card-eco-energy">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600 text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-leaf"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy mb-3 uppercase">Energy-Efficient Systems</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Our cool-roof and reflective shingle options reduce attic temperatures by up to 30°F, lowering your energy bills and carbon footprint.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-xl text-center group hover:shadow-2xl transition-all" data-testid="card-eco-solar">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600 text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-solar-panel"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy mb-3 uppercase">Solar-Ready Installs</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Every new roof we install is structurally prepped for future solar panel integration, protecting your investment and the planet.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Core Values</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-re-way">The ROOF EXPRESS <span className="text-brandOrange">Way</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brandGrey p-10 rounded-[2rem] text-center group hover:shadow-xl transition-all" data-testid="card-value-precision">
              <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-crosshairs"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy mb-3 uppercase">Technical Precision</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Every nail, every seal, every flashing is placed with engineering-grade precision. No shortcuts. No guesswork.</p>
            </div>
            <div className="bg-brandGrey p-10 rounded-[2rem] text-center group hover:shadow-xl transition-all" data-testid="card-value-transparency">
              <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-eye"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy mb-3 uppercase">Radical Transparency</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Real-time photo updates, line-item estimates, and open communication from first call to final inspection.</p>
            </div>
            <div className="bg-brandGrey p-10 rounded-[2rem] text-center group hover:shadow-xl transition-all" data-testid="card-value-respect">
              <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy mb-3 uppercase">Total Respect</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Your home is sacred. We protect landscaping, clean daily, and treat your property like it's our own.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandNavy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/20 text-brandOrangeLight text-[10px] font-black uppercase tracking-[0.2em] mb-4">Safety First</span>
    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white" data-testid="text-training-safety">Elite Training & <span className="text-brandOrangeLight">Safety Protocols</span></h2>
              <p className="text-slate-300 text-lg leading-loose font-medium mb-8">
                Every ROOF EXPRESS crew member undergoes 200+ hours of specialized training before stepping on a roof. We maintain OSHA compliance, daily toolbox talks, and carry full workers' comp and liability insurance so you never bear the risk.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300"><i aria-hidden="true" className="fas fa-check-circle text-brandOrangeLight"></i> <span className="font-bold">OSHA 30 Certified Foremen</span></li>
                <li className="flex items-center gap-3 text-slate-300"><i aria-hidden="true" className="fas fa-check-circle text-brandOrangeLight"></i> <span className="font-bold">Fall Protection on Every Job</span></li>
                <li className="flex items-center gap-3 text-slate-300"><i aria-hidden="true" className="fas fa-check-circle text-brandOrangeLight"></i> <span className="font-bold">Full Workers' Comp & Liability Insurance</span></li>
                <li className="flex items-center gap-3 text-slate-300"><i aria-hidden="true" className="fas fa-check-circle text-brandOrangeLight"></i> <span className="font-bold">Daily Safety Briefings</span></li>
              </ul>
              <div className="mt-8 flex items-center gap-4 bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10">
                <img src="/images/licensed-insured-bonded.webp" alt="Licensed, Insured & Bonded" className="h-14 w-auto mix-blend-screen" width={112} height={56} loading="lazy" />
                <div>
                  <p className="text-sm font-black text-white uppercase tracking-wide">Licensed, Insured & Bonded</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">CSLB #1072766 · $2M+ Liability · $25K Surety Bond</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white/10 backdrop-blur p-10 rounded-[2rem] border border-white/10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brandOrange rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-4xl">
                    <i aria-hidden="true" className="fas fa-hard-hat"></i>
                  </div>
                  <p className="text-5xl font-black text-white mb-2">200+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Hours of Training Per Crew Member</p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-2xl font-black text-brandOrangeLight">0</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Safety Incidents</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-2xl font-black text-brandOrangeLight">100%</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">OSHA Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Common Questions</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-about-faq">Frequently Asked <span className="text-brandOrange">Questions</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-brandGrey rounded-2xl overflow-hidden border border-slate-100" data-testid={`faq-about-${i}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between font-black text-brandNavy hover:text-brandOrange transition"
                  data-testid={`button-faq-about-${i}`}
                >
                  <span>{faq.q}</span>
                  <i aria-hidden="true" className={`fas fa-chevron-down transition-transform ${openFaq === i ? "rotate-180" : ""}`}></i>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <NearbyAreas />
    </Layout>
  );
}

import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import { useSEO } from "@/hooks/use-seo";

const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";

export default function Story() {
  useSEO("Our Story — Bay Area Roofing Since Day One | ROOF EXPRESS", "How ROOF EXPRESS grew from a single crew in 2017 to the Bay Area's top-rated roofing company. Diamond Certified, locally owned, community driven.");
  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-services.webp" alt="ROOF EXPRESS roofing crew at work" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-book-open mr-2"></i> Our Story
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-story-hero-title">
              Our Story: How ROOF EXPRESS Became the <span className="text-brandOrangeLight">Bay Area Standard</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-story-hero-subtitle">
              From one truck and a big vision to the Bay Area's most trusted roofing company — a story of grit, family, and uncompromising quality.
            </p>
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
              <i aria-hidden="true" className="fas fa-heart mr-1.5 text-brandOrangeLight text-[9px]"></i> Family-Run Business
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-certificate mr-1.5 text-brandOrangeLight text-[9px]"></i> Fully Certified
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-home mr-1.5 text-brandOrangeLight text-[9px]"></i> 5,000+ Roofs
            </span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <img src="/images/owner-abosufian.webp" alt="Abu M. — Owner & Founder of ROOF EXPRESS" className="w-full h-full object-cover" data-testid="img-owner" loading="lazy" width={600} height={600} />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-brandOrange text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
                  <i aria-hidden="true" className="fas fa-star mr-2"></i> Founder & CEO
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Meet The Owner</span>
              <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-owner-name">Abu <span className="text-brandOrange">M.</span></h2>
              <p className="text-slate-500 text-lg leading-loose font-medium mb-6">
                Abu M. founded ROOF EXPRESS in 2017 with a hands-on approach and a commitment to doing things the right way. From day one, he has been on every job site, personally overseeing quality and making sure every homeowner is treated like family.
              </p>
              <p className="text-slate-500 text-lg leading-loose font-medium mb-8">
                Under his leadership, ROOF EXPRESS has earned Diamond Certified status, GAF Master Elite credentials, Owens Corning Platinum Preferred certification, CertainTeed Select ShingleMaster certification, and the trust of thousands of Bay Area families. His philosophy is simple: never cut corners, always answer the phone, and stand behind every roof.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-2xl font-black text-brandOrange">5,000+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Roofs Completed</p>
                </div>
                <div className="bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-2xl font-black text-brandOrange">5.0<span className="text-sm">★</span></p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Google Rating</p>
                </div>
                <div className="bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-2xl font-black text-brandOrange">Fully</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Where It All Began</span>
            <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-the-origin">Built on a Foundation of <span className="text-brandOrange">Hard Work & Vision</span></h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              The ROOF EXPRESS story starts with one person who saw an opportunity to raise the bar in Bay Area roofing.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-brandNavy rounded-2xl flex items-center justify-center text-white text-2xl">
                    <i aria-hidden="true" className="fas fa-hard-hat"></i>
                  </div>
                  <div>
                    <p className="font-black text-brandNavy text-lg">Years of Experience</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">The Foundation</p>
                  </div>
                </div>
                <p className="text-slate-500 text-lg leading-loose font-medium mb-6">
                  Abu M. grew up around construction. From an early age, he learned the value of precision, hard work, and doing things right the first time. He gained years of hands-on experience managing large-scale commercial construction projects — overseeing crews, coordinating complex logistics, and delivering results under the most demanding conditions.
                </p>
                <p className="text-slate-500 text-lg leading-loose font-medium">
                  That experience forged something that no certification can teach: an unshakeable commitment to quality and accountability on every project.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-brandOrange rounded-2xl flex items-center justify-center text-white text-2xl">
                    <i aria-hidden="true" className="fas fa-flag-usa"></i>
                  </div>
                  <div>
                    <p className="font-black text-brandNavy text-lg">Bay Area, 2017</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">A New Chapter</p>
                  </div>
                </div>
                <p className="text-slate-500 text-lg leading-loose font-medium mb-6">
                  Abu M. saw a Bay Area roofing industry plagued by missed deadlines, hidden fees, and sloppy work — and he knew he could do better.
                </p>
                <p className="text-slate-500 text-lg leading-loose font-medium mb-6">
                  In 2017, with one truck and a crew that shared his vision, ROOF EXPRESS was born. The mission was simple: treat every homeowner's roof like a mission-critical project. No shortcuts. No excuses. Just precision, transparency, and results.
                </p>
                <p className="text-slate-500 text-lg leading-loose font-medium">
                  Within just a few years, that approach earned ROOF EXPRESS Diamond Certified status, GAF Master Elite credentials, Owens Corning Platinum Preferred certification, CertainTeed Select ShingleMaster certification — and the trust of thousands of Bay Area families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">What We Stand For</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-re-standard">The ROOF EXPRESS <span className="text-brandOrange">Standard</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-xl text-center group hover:shadow-2xl transition-all" data-testid="card-standard-precision">
              <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-crosshairs"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy mb-3 uppercase">Technical Precision</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Every measurement, every cut, every seal is executed with surgical accuracy. Our 3-point inspection process ensures zero margin for error.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-xl text-center group hover:shadow-2xl transition-all" data-testid="card-standard-transparency">
              <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-eye"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy mb-3 uppercase">Radical Transparency</h3>
              <p className="text-sm text-slate-500 leading-relaxed">No hidden fees. No surprise charges. You get real-time photo updates, detailed line-item estimates, and a dedicated project manager.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-xl text-center group hover:shadow-2xl transition-all" data-testid="card-standard-respect">
              <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy mb-3 uppercase">Total Respect</h3>
              <p className="text-sm text-slate-500 leading-relaxed">We treat your home like our own. From protecting your landscaping to cleaning up every nail, your property is sacred ground.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Milestones</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-our-journey">Our <span className="text-brandOrange">Journey</span></h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-brandOrange/20 hidden md:block"></div>
            {[
              { year: "2017", title: "ROOF EXPRESS is Born", desc: "Founded in San Francisco with one truck and a commitment to quality. Completed 50 projects in year one.", side: "left" },
              { year: "2019", title: "Diamond Certified", desc: "Earned Diamond Certified status — awarded to only the top-rated companies based on independent homeowner surveys. Expanded to over 100 projects per year.", side: "right" },
              { year: "2021", title: "Fully Certified Status", desc: "Became one of the rare contractors to achieve GAF Master Elite, Owens Corning Platinum, CertainTeed Select ShingleMaster, and Diamond Certified simultaneously. Opened our Palo Alto office.", side: "left" },
              { year: "Today", title: "5,000+ Roofs & Counting", desc: "Two offices, a growing team, and the Bay Area's most trusted name in roofing. Still family-run. Still doing it right.", side: "right" },
            ].map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${item.side === "right" ? "md:flex-row-reverse" : ""}`} data-testid={`timeline-${item.year.toLowerCase()}`}>
                <div className="md:w-1/2 text-center md:text-left">
                  <div className={`bg-brandGrey p-8 rounded-[2rem] border border-slate-100 ${item.side === "right" ? "md:text-right" : ""}`}>
                    <p className="text-4xl font-black text-brandOrange mb-2">{item.year}</p>
                    <h3 className="text-xl font-black text-brandNavy mb-3 uppercase">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="w-6 h-6 bg-brandOrange rounded-full border-4 border-white shadow-lg relative z-10 hidden md:block"></div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandNavy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/20 text-brandOrangeLight text-[10px] font-black uppercase tracking-[0.2em] mb-4">Our People</span>
   <h2 className="text-4xl md:text-6xl font-black mb-6 text-white" data-testid="text-crew-family">Our Crew is Our <span className="text-brandOrangeLight">Family</span></h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Behind every perfectly sealed roof is a team that cares deeply about their craft. Our crew members average over a decade of experience, and many have been with us since the early days.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur p-10 rounded-[2rem] text-center border border-white/10" data-testid="stat-crew-years">
              <p className="text-5xl font-black text-brandOrangeLight mb-2">8+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Years in Business</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-10 rounded-[2rem] text-center border border-white/10" data-testid="stat-crew-roofs">
              <p className="text-5xl font-black text-brandOrangeLight mb-2">5k+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Roofs by Our Core Crew</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-10 rounded-[2rem] text-center border border-white/10" data-testid="stat-crew-guarantee">
              <p className="text-5xl font-black text-brandOrangeLight mb-2">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Satisfaction Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">See Us In Action</span>
            <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-video-section">Watch ROOF EXPRESS <span className="text-brandOrange">At Work</span></h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <video
                src="/videos/roof-express-brand.mp4"
                poster="/videos/roof-express-brand-thumb.webp"
                controls
                playsInline
                preload="none"
                className="w-full aspect-video object-cover"
                data-testid="video-story-brand"
              >
                <track kind="captions" src="/videos/captions-brand.vtt" srcLang="en" label="English" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Let's Build Together</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-story-cta">Ready to Write Your Roof's <span className="text-brandOrange">Next Chapter?</span></h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Whether it's a simple repair or a full system replacement, the ROOF EXPRESS team is ready to deliver the quality, speed, and transparency you deserve.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href={JOBBER_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full md:w-auto bg-brandOrange text-white px-12 py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(241,90,41,0.4)]"
              data-testid="link-story-start-project"
            >
              <i aria-hidden="true" className="fas fa-bolt mr-3"></i> Start Your Project
            </a>
            <a
              href="tel:6506665554"
              className="w-full md:w-auto bg-brandNavy text-white px-12 py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-brandOrange transition-all duration-300 shadow-lg"
              data-testid="link-story-call"
            >
              <i aria-hidden="true" className="fas fa-phone-alt mr-3"></i> Call 650-666-5554
            </a>
          </div>
        </div>
      </section>

      <NearbyAreas />
    </Layout>
  );
}

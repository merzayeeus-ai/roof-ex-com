import { lazy, Suspense } from "react";
import Layout from "@/components/layout";
import ReviewShowcase from "@/components/review-showcase";
import { useSEO } from "@/hooks/use-seo";

const HomeSections = lazy(() => import("@/pages/home-sections"));

export default function Home() {
  useSEO("Bay Area Roofing Contractor — Free Estimates | ROOF EXPRESS", "Best roofing company near you in the Bay Area. 5-star rated roofer for roof repair, replacement, flat roofing, gutters & skylights. Diamond Certified, GAF Master Elite, CSLB #1072766. Free estimates.", "roofing company near me, roofer near me, roofing contractor near me, roofing contractor Bay Area, roof repair near me, roof replacement near me, best roofer Bay Area, local roofer San Francisco, flat roofing, gutter installation, skylight repair, emergency roof repair, Diamond Certified roofer, GAF Master Elite, free roofing estimate");

  return (
    <Layout>
      {/* HERO SECTION: BIG IMPRESSION */}
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-34 lg:py-50 px-4 flex items-center">
        <div className="absolute inset-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/hero-mobile.webp" width={750} height={1000} />
            <img src="/images/hero.webp" alt="ROOF EXPRESS crew completing a Bay Area roof installation" className="w-full h-full object-cover" width={1200} height={800} loading="eager" fetchPriority="high" decoding="async" />
          </picture>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-gem mr-2"></i> Diamond Certified
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white">
              Bay Area's Top Rated <span className="text-brandOrangeLight">Roofing Experts</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed">
              Fully Certified contractor. Same-day inspections. 50-year system warranties across San Francisco, San Jose, Oakland & the entire Bay Area.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media"
                target="_blank"
                rel="noreferrer noopener"
                className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
                data-testid="link-hero-quote"
              >
                Get Free Quote
              </a>
              <a
                href="tel:6506665554"
                className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20"
              >
                <i aria-hidden="true" className="fas fa-phone-alt mr-2"></i>
                650-666-5554
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ELITE CERTIFICATION BAR */}
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
              <i aria-hidden="true" className="fas fa-shield-alt mr-1.5 text-brandOrangeLight text-[9px]"></i> Owens Corning Platinum
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-certificate mr-1.5 text-brandOrangeLight text-[9px]"></i> CertainTeed Select
            </span>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="min-h-screen" />}>
        <HomeSections />
      </Suspense>

      <ReviewShowcase />
    </Layout>
  );
}

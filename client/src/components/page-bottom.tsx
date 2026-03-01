import { Link } from "wouter";

export function NearbyAreas() {
  return (
    <div className="bg-brandGrey py-16 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-brandNavy">Service Areas</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[
                { name: "San Francisco", slug: "san-francisco" },
                { name: "San Jose", slug: "san-jose" },
                { name: "Oakland", slug: "oakland" },
                { name: "Palo Alto", slug: "palo-alto" },
                { name: "Daly City", slug: "daly-city" },
                { name: "San Rafael", slug: "san-rafael" },
                { name: "Walnut Creek", slug: "walnut-creek" },
                { name: "Fremont", slug: "fremont" },
              ].map((city) => (
                <Link key={city.slug} href={`/${city.slug}`} className="text-sm font-bold text-slate-500 hover:text-brandOrange transition flex items-center gap-1.5 py-0.5" data-testid={`link-area-${city.slug}`}>
                  <i aria-hidden="true" className="fas fa-chevron-right text-[8px] text-brandOrange/40"></i> {city.name}
                </Link>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
              <Link href="/service-areas" className="text-sm text-brandOrange font-black hover:text-brandNavy transition flex items-center gap-2">
                <i aria-hidden="true" className="fas fa-globe text-xs"></i> View All 60 Cities
              </Link>
              <Link href="/city-roofing-guides" className="text-sm text-slate-600 font-bold hover:text-brandOrange transition flex items-center gap-2">
                <i aria-hidden="true" className="fas fa-book-open text-xs"></i> City Roofing Guides
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                <i aria-hidden="true" className="fas fa-newspaper"></i>
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-brandNavy">From Our Blog</h3>
            </div>
            <div className="space-y-3">
              {[
                { title: "Roof Replacement Cost in SF (2026)", slug: "roof-replacement-cost-san-francisco" },
                { title: "Best Materials for Bay Area Homes", slug: "best-roofing-materials-bay-area" },
                { title: "Flat Roof vs Shingle in California", slug: "flat-roof-vs-shingle-california" },
                { title: "Signs You Need a Roof Replacement", slug: "signs-you-need-roof-replacement-bay-area" },
                { title: "How to Choose a Roofing Contractor", slug: "how-to-choose-roofing-contractor-bay-area" },
              ].map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="text-sm font-bold text-slate-500 hover:text-brandOrange transition flex items-center gap-1.5 py-0.5">
                  <i aria-hidden="true" className="fas fa-chevron-right text-[8px] text-brandOrange/40 shrink-0"></i> {post.title}
                </Link>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100">
              <Link href="/blog" className="text-sm text-brandOrange font-black hover:text-brandNavy transition flex items-center gap-2">
                <i aria-hidden="true" className="fas fa-book-open text-xs"></i> All Roofing Tips & Guides
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                <i aria-hidden="true" className="fas fa-link"></i>
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-brandNavy">Quick Links</h3>
            </div>
            <div className="space-y-3">
              {[
                { title: "How We Work", href: "/methodology/", icon: "fa-clipboard-check" },
                { title: "Verified Reviews", href: "/reviews/", icon: "fa-star" },
                { title: "Financing Options", href: "/financing/", icon: "fa-credit-card" },
                { title: "Project Gallery", href: "/gallery/", icon: "fa-images" },
                { title: "Contact & Scheduling", href: "/contact/", icon: "fa-calendar-check" },
                { title: "Blog & Guides", href: "/blog/", icon: "fa-book" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-bold text-slate-500 hover:text-brandOrange transition flex items-center gap-2.5 py-0.5">
                  <i aria-hidden="true" className={`fas ${link.icon} text-xs text-brandOrange/40 w-4 text-center`}></i> {link.title}
                </Link>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100">
              <a href="tel:6506665554" className="text-sm text-brandOrange font-black hover:text-brandNavy transition flex items-center gap-2">
                <i aria-hidden="true" className="fas fa-phone-alt text-xs"></i> Call 650-666-5554
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CTASection({ title = "Need an estimate right now?", subtitle = "Active leak? Planning a replacement? Our team is ready to provide a detailed digital scope." }) {
  return (
    <section className="py-24 bg-brandNavy text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
        <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Fast Response</span>
        <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6 text-white">{title}</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-12 font-medium">{subtitle}</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="tel:6506665554"
            className="bg-white text-brandNavy px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-brandOrange hover:text-white transition shadow-lg"
            data-testid="link-cta-call"
          >
            Call 650-666-5554
          </a>
          <a
            href="https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=website"
            target="_blank"
            rel="noreferrer noopener"
            className="bg-brandOrange text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white hover:text-brandOrange transition shadow-lg"
            data-testid="link-cta-quote"
          >
            Request Online
          </a>
        </div>
      </div>
    </section>
  );
}

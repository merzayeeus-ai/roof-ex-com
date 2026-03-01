import { useState, useEffect, ReactNode, lazy, Suspense } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
const LazyFooter = lazy(() => import("@/components/footer"));

export default function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="font-sans text-brandNavy selection:bg-brandOrange selection:text-white pb-24 md:pb-0">
      <header
        className={cn(
          "fixed w-full z-50 transition-all duration-300 top-0",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-4"
            : "bg-transparent py-6"
        )}
        id="main-header"
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center bg-white/90 backdrop-blur-md rounded-full shadow-2xl border border-white/20 p-2 pl-3 md:p-3 md:pl-5 mt-4">
          <Link href="/" className="flex items-center group shrink-0 mr-4 lg:mr-8">
            <img
              alt="ROOF EXPRESS Logo"
              className="max-h-9 sm:max-h-10 md:max-h-11 lg:max-h-12 w-auto object-contain drop-shadow-sm transition group-hover:scale-105"
              src="/images/logo.webp"
              width={384}
              height={107}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-xs font-black uppercase tracking-widest text-brandNavy hover:text-brandOrange transition">
              Home
            </Link>

            <div className="relative group py-4">
              <button className="flex items-center text-xs font-black uppercase tracking-widest text-brandNavy hover:text-brandOrange transition">
                Services <i aria-hidden="true" className="fas fa-chevron-down ml-2 text-[10px]"></i>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[600px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-3 border-b pb-2">
                    Residential Solutions
                  </p>
                  <Link href="/residential" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                      <i aria-hidden="true" className="fas fa-home"></i>
                    </div>
                    <span>Asphalt Shingle Roofing</span>
                  </Link>
                  <Link href="/roof-replacement" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3" data-testid="link-nav-roof-replacement">
                    <div className="w-8 h-8 rounded-lg bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                      <i aria-hidden="true" className="fas fa-sync-alt"></i>
                    </div>
                    <span>Roof Replacement</span>
                  </Link>
                  <Link href="/roof-repair" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                      <i aria-hidden="true" className="fas fa-tools"></i>
                    </div>
                    <span>Leak Repair & Maintenance</span>
                  </Link>
                  <Link href="/skylights" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                      <i aria-hidden="true" className="fas fa-sun"></i>
                    </div>
                    <span>Skylights & Solar Tubes</span>
                  </Link>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-3 border-b pb-2">
                    Commercial & Specialty
                  </p>
                  <Link href="/commercial" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brandBlue/10 flex items-center justify-center text-brandBlue">
                      <i aria-hidden="true" className="fas fa-building"></i>
                    </div>
                    <span>Commercial Systems</span>
                  </Link>
                  <Link href="/flat" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brandBlue/10 flex items-center justify-center text-brandBlue">
                      <i aria-hidden="true" className="fas fa-layer-group"></i>
                    </div>
                    <span>Flat Roof (TPO/Torch)</span>
                  </Link>
                  <Link href="/gutters" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brandBlue/10 flex items-center justify-center text-brandBlue">
                      <i aria-hidden="true" className="fas fa-tint"></i>
                    </div>
                    <span>Gutters & Drainage</span>
                  </Link>
                  <Link href="/emergency" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3" data-testid="link-nav-emergency-repair">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                      <i aria-hidden="true" className="fas fa-exclamation-triangle"></i>
                    </div>
                    <span>Emergency Repair 24/7</span>
                  </Link>
                  <Link href="/financing" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                      <i aria-hidden="true" className="fas fa-money-bill-wave"></i>
                    </div>
                    <span>Financing Options</span>
                  </Link>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-50">
                  <Link href="/services" className="block text-center text-xs font-black uppercase tracking-widest text-brandOrange hover:text-brandNavy transition">
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group py-4">
              <button className="flex items-center text-xs font-black uppercase tracking-widest text-brandNavy hover:text-brandOrange transition">
                About <i aria-hidden="true" className="fas fa-chevron-down ml-2 text-[10px]"></i>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[260px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Link href="/about" className="block py-2.5 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3" data-testid="link-nav-about">
                  <div className="w-8 h-8 rounded-lg bg-brandNavy/10 flex items-center justify-center text-brandNavy">
                    <i aria-hidden="true" className="fas fa-building"></i>
                  </div>
                  <span>About Us</span>
                </Link>
                <Link href="/story" className="block py-2.5 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3" data-testid="link-nav-story">
                  <div className="w-8 h-8 rounded-lg bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                    <i aria-hidden="true" className="fas fa-book-open"></i>
                  </div>
                  <span>Our Story</span>
                </Link>
                <Link href="/reviews" className="block py-2.5 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3" data-testid="link-nav-reviews">
                  <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <i aria-hidden="true" className="fas fa-star"></i>
                  </div>
                  <span>Reviews</span>
                </Link>
                <Link href="/gallery" className="block py-2.5 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3" data-testid="link-nav-gallery">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    <i aria-hidden="true" className="fas fa-images"></i>
                  </div>
                  <span>Project Gallery</span>
                </Link>
              </div>
            </div>

            <div className="relative group py-4">
              <button className="flex items-center text-xs font-black uppercase tracking-widest text-brandNavy hover:text-brandOrange transition">
                Resources <i aria-hidden="true" className="fas fa-chevron-down ml-2 text-[10px]"></i>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[580px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-3 border-b pb-2">
                      Guides & Knowledge
                    </p>
                    <Link href="/blog/field-notes" className="block py-2.5 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3" data-testid="link-nav-field-notes">
                      <div className="w-8 h-8 rounded-lg bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                        <i aria-hidden="true" className="fas fa-hard-hat"></i>
                      </div>
                      <div>
                        <span className="block">Field Notes</span>
                        <span className="block text-[10px] text-slate-500 font-medium">Real projects & expert tips</span>
                      </div>
                    </Link>
                    <Link href="/city-roofing-guides" className="block py-2.5 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3" data-testid="link-nav-city-guides">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <i aria-hidden="true" className="fas fa-map-marked-alt"></i>
                      </div>
                      <div>
                        <span className="block">City Roofing Guides</span>
                        <span className="block text-[10px] text-slate-500 font-medium">Permits, costs & materials by city</span>
                      </div>
                    </Link>
                    <Link href="/methodology" className="block py-2.5 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3" data-testid="link-nav-methodology-res">
                      <div className="w-8 h-8 rounded-lg bg-brandNavy/10 flex items-center justify-center text-brandNavy">
                        <i aria-hidden="true" className="fas fa-clipboard-check"></i>
                      </div>
                      <div>
                        <span className="block">Our Methodology</span>
                        <span className="block text-[10px] text-slate-500 font-medium">3-checkpoint quality system</span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-3 border-b pb-2">
                      Articles & Help
                    </p>
                    <Link href="/blog" className="block py-2.5 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3" data-testid="link-nav-blog">
                      <div className="w-8 h-8 rounded-lg bg-brandNavy/10 flex items-center justify-center text-brandNavy">
                        <i aria-hidden="true" className="fas fa-newspaper"></i>
                      </div>
                      <div>
                        <span className="block">Roofing Blog</span>
                        <span className="block text-[10px] text-slate-500 font-medium">Cost guides & comparisons</span>
                      </div>
                    </Link>
                    <Link href="/faq" className="block py-2.5 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3" data-testid="link-nav-faq">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                        <i aria-hidden="true" className="fas fa-question-circle"></i>
                      </div>
                      <div>
                        <span className="block">FAQ</span>
                        <span className="block text-[10px] text-slate-500 font-medium">Common roofing questions</span>
                      </div>
                    </Link>
                    <Link href="/financing" className="block py-2.5 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition flex items-center gap-3" data-testid="link-nav-financing-res">
                      <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                        <i aria-hidden="true" className="fas fa-money-bill-wave"></i>
                      </div>
                      <div>
                        <span className="block">Financing Options</span>
                        <span className="block text-[10px] text-slate-500 font-medium">$0 down, low monthly payments</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-span-2 mt-4 pt-4 border-t border-slate-100">
                  <Link href="/blog/field-notes" className="flex items-center gap-4 bg-brandOrange/5 rounded-2xl p-4 hover:bg-brandOrange/10 transition group/fn" data-testid="link-nav-field-notes-featured">
                    <div className="w-10 h-10 rounded-xl bg-brandOrange flex items-center justify-center text-white shrink-0">
                      <i aria-hidden="true" className="fas fa-hard-hat"></i>
                    </div>
                    <div className="min-w-0">
                      <span className="text-sm font-black text-brandNavy group-hover/fn:text-brandOrange transition">Field Notes from the Roof</span>
                      <span className="block text-[10px] text-slate-500 font-medium">Real job-site photos, material breakdowns, and installation tips from our crew</span>
                    </div>
                    <i aria-hidden="true" className="fas fa-arrow-right text-brandOrange/40 ml-auto text-xs shrink-0"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group py-4">
              <button className="flex items-center text-xs font-black uppercase tracking-widest text-brandNavy hover:text-brandOrange transition">
                Service Areas <i aria-hidden="true" className="fas fa-chevron-down ml-2 text-[10px]"></i>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[540px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Link href="/san-francisco" className="flex items-center gap-4 bg-brandNavy/5 rounded-2xl p-4 mb-5 hover:bg-brandOrange/10 transition group/sf" data-testid="link-nav-sf">
                  <div className="w-10 h-10 rounded-xl bg-brandOrange flex items-center justify-center text-white shrink-0">
                    <i aria-hidden="true" className="fas fa-city"></i>
                  </div>
                  <div>
                    <span className="text-sm font-black text-brandNavy group-hover/sf:text-brandOrange transition">San Francisco</span>
                    <span className="block text-[10px] text-slate-500 font-medium">Roofing services across all SF neighborhoods</span>
                  </div>
                  <i aria-hidden="true" className="fas fa-arrow-right text-brandOrange/40 ml-auto text-xs"></i>
                </Link>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-3 border-b pb-2">
                      Peninsula & South Bay
                    </p>
                    <Link href="/palo-alto" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition">
                      <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange/50 mr-2"></i> Palo Alto
                    </Link>
                    <Link href="/san-jose" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition">
                      <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange/50 mr-2"></i> San Jose
                    </Link>
                    <Link href="/mountain-view" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition">
                      <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange/50 mr-2"></i> Mountain View
                    </Link>
                    <Link href="/menlo-park" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition">
                      <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange/50 mr-2"></i> Menlo Park
                    </Link>
                    <Link href="/redwood-city" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition">
                      <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange/50 mr-2"></i> Redwood City
                    </Link>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-3 border-b pb-2">
                      East Bay & North Bay
                    </p>
                    <Link href="/oakland" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition">
                      <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange/50 mr-2"></i> Oakland
                    </Link>
                    <Link href="/berkeley" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition">
                      <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange/50 mr-2"></i> Berkeley
                    </Link>
                    <Link href="/fremont" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition">
                      <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange/50 mr-2"></i> Fremont
                    </Link>
                    <Link href="/walnut-creek" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition">
                      <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange/50 mr-2"></i> Walnut Creek
                    </Link>
                    <Link href="/novato" className="block py-2 text-sm font-bold text-brandNavy hover:text-brandOrange hover:translate-x-1 transition">
                      <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange/50 mr-2"></i> Novato
                    </Link>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link href="/service-areas" className="block text-center text-xs font-black uppercase tracking-widest text-brandOrange hover:text-brandNavy transition" data-testid="link-nav-all-cities">
                    View All 60 Cities →
                  </Link>
                </div>
              </div>
            </div>

          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:6506665554"
              className="hidden xl:flex items-center gap-2 font-black text-brandNavy hover:text-brandOrange transition"
            >
              <div className="bg-brandGrey p-2 rounded-full">
                <i aria-hidden="true" className="fas fa-phone-alt"></i>
              </div>
              <span className="text-sm">650-666-5554</span>
            </a>
            <a
              href="https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media"
              target="_blank"
              rel="noreferrer noopener"
              className="hidden md:inline-block bg-brandOrange text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brandNavy transition shadow-lg transform hover:-translate-y-0.5"
            >
              Fast Quote
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-brandNavy text-2xl px-2 focus:outline-none"
              data-testid="button-mobile-menu"
              aria-label="Open navigation menu"
            >
              <i aria-hidden="true" className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 bg-brandNavy/98 backdrop-blur-xl z-[200] transform transition-transform duration-300 lg:hidden flex flex-col justify-center items-center space-y-6",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-brandOrange text-4xl p-4 transition"
          data-testid="button-close-menu"
          aria-label="Close navigation menu"
        >
          <i aria-hidden="true" className="fas fa-times"></i>
        </button>
        <Link href="/" className="mb-6 block">
          <img
            alt="ROOF EXPRESS Logo"
            className="max-w-48 w-auto h-auto brightness-0 invert drop-shadow-lg"
            src="/images/logo.webp"
            width={384}
            height={107}
          />
        </Link>
        <div className="space-y-1 w-full max-w-sm mx-auto overflow-y-auto max-h-[55vh] px-6 scrollbar-thin">
          <Link href="/" className="mobile-link block text-lg font-black text-white uppercase tracking-tight hover:text-brandOrangeLight transition min-h-[44px] flex items-center" data-testid="link-mobile-home">
            <i aria-hidden="true" className="fas fa-home text-brandOrangeLight/60 mr-3 text-sm w-5 text-center"></i> Home
          </Link>
          <Link href="/services" className="mobile-link block text-lg font-black text-white uppercase tracking-tight hover:text-brandOrangeLight transition min-h-[44px] flex items-center" data-testid="link-mobile-services">
            <i aria-hidden="true" className="fas fa-tools text-brandOrangeLight/60 mr-3 text-sm w-5 text-center"></i> Services
          </Link>
          <Link href="/about" className="mobile-link block text-lg font-black text-white uppercase tracking-tight hover:text-brandOrangeLight transition min-h-[44px] flex items-center" data-testid="link-mobile-about">
            <i aria-hidden="true" className="fas fa-building text-brandOrangeLight/60 mr-3 text-sm w-5 text-center"></i> About Us
          </Link>
          <Link href="/methodology" className="mobile-link block text-lg font-black text-white uppercase tracking-tight hover:text-brandOrangeLight transition min-h-[44px] flex items-center" data-testid="link-mobile-methodology">
            <i aria-hidden="true" className="fas fa-clipboard-check text-brandOrangeLight/60 mr-3 text-sm w-5 text-center"></i> Methodology
          </Link>
          <Link href="/gallery" className="mobile-link block text-lg font-black text-white uppercase tracking-tight hover:text-brandOrangeLight transition min-h-[44px] flex items-center" data-testid="link-mobile-gallery">
            <i aria-hidden="true" className="fas fa-images text-brandOrangeLight/60 mr-3 text-sm w-5 text-center"></i> Gallery
          </Link>
          <Link href="/reviews" className="mobile-link block text-lg font-black text-white uppercase tracking-tight hover:text-brandOrangeLight transition min-h-[44px] flex items-center" data-testid="link-mobile-reviews">
            <i aria-hidden="true" className="fas fa-star text-brandOrangeLight/60 mr-3 text-sm w-5 text-center"></i> Reviews
          </Link>
          <Link href="/blog" className="mobile-link block text-lg font-black text-white uppercase tracking-tight hover:text-brandOrangeLight transition min-h-[44px] flex items-center" data-testid="link-mobile-blog">
            <i aria-hidden="true" className="fas fa-newspaper text-brandOrangeLight/60 mr-3 text-sm w-5 text-center"></i> Blog
          </Link>
          <Link href="/blog/field-notes" className="mobile-link block text-lg font-black text-white uppercase tracking-tight hover:text-brandOrangeLight transition min-h-[44px] flex items-center" data-testid="link-mobile-field-notes">
            <i aria-hidden="true" className="fas fa-hard-hat text-brandOrangeLight/60 mr-3 text-sm w-5 text-center"></i> Field Notes
          </Link>
          <Link href="/city-roofing-guides" className="mobile-link block text-lg font-black text-white uppercase tracking-tight hover:text-brandOrangeLight transition min-h-[44px] flex items-center" data-testid="link-mobile-city-guides">
            <i aria-hidden="true" className="fas fa-map text-brandOrangeLight/60 mr-3 text-sm w-5 text-center"></i> City Guides
          </Link>
          <Link href="/financing" className="mobile-link block text-lg font-black text-white uppercase tracking-tight hover:text-brandOrangeLight transition min-h-[44px] flex items-center" data-testid="link-mobile-financing">
            <i aria-hidden="true" className="fas fa-credit-card text-brandOrangeLight/60 mr-3 text-sm w-5 text-center"></i> Financing
          </Link>
          <Link href="/faq" className="mobile-link block text-lg font-black text-white uppercase tracking-tight hover:text-brandOrangeLight transition min-h-[44px] flex items-center" data-testid="link-mobile-faq">
            <i aria-hidden="true" className="fas fa-question-circle text-brandOrangeLight/60 mr-3 text-sm w-5 text-center"></i> FAQ
          </Link>
          <Link href="/contact" className="mobile-link block text-lg font-black text-white uppercase tracking-tight hover:text-brandOrangeLight transition min-h-[44px] flex items-center" data-testid="link-mobile-contact">
            <i aria-hidden="true" className="fas fa-envelope text-brandOrangeLight/60 mr-3 text-sm w-5 text-center"></i> Contact
          </Link>
          <div className="border-t border-white/10 pt-3 mt-2">
            <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-3">Our Services</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-bold text-slate-300">
              <Link href="/residential" className="hover:text-white py-1.5 flex items-center gap-2" data-testid="link-mobile-residential"><i aria-hidden="true" className="fas fa-home text-brandOrangeLight/40 text-xs"></i> Residential</Link>
              <Link href="/commercial" className="hover:text-white py-1.5 flex items-center gap-2" data-testid="link-mobile-commercial"><i aria-hidden="true" className="fas fa-building text-brandOrangeLight/40 text-xs"></i> Commercial</Link>
              <Link href="/roof-replacement" className="hover:text-white py-1.5 flex items-center gap-2" data-testid="link-mobile-roof-replacement"><i aria-hidden="true" className="fas fa-sync-alt text-brandOrangeLight/40 text-xs"></i> Replacement</Link>
              <Link href="/roof-repair" className="hover:text-white py-1.5 flex items-center gap-2" data-testid="link-mobile-repair"><i aria-hidden="true" className="fas fa-wrench text-brandOrangeLight/40 text-xs"></i> Repair</Link>
              <Link href="/flat" className="hover:text-white py-1.5 flex items-center gap-2" data-testid="link-mobile-flat"><i aria-hidden="true" className="fas fa-layer-group text-brandOrangeLight/40 text-xs"></i> Flat Roofing</Link>
              <Link href="/gutters" className="hover:text-white py-1.5 flex items-center gap-2" data-testid="link-mobile-gutters"><i aria-hidden="true" className="fas fa-tint text-brandOrangeLight/40 text-xs"></i> Gutters</Link>
              <Link href="/skylights" className="hover:text-white py-1.5 flex items-center gap-2" data-testid="link-mobile-skylights"><i aria-hidden="true" className="fas fa-sun text-brandOrangeLight/40 text-xs"></i> Skylights</Link>
              <Link href="/emergency" className="hover:text-white py-1.5 flex items-center gap-2" data-testid="link-mobile-emergency"><i aria-hidden="true" className="fas fa-exclamation-triangle text-red-400/70 text-xs"></i> Emergency</Link>
            </div>
          </div>
          <div className="border-t border-white/10 pt-3">
            <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-3">Service Areas</p>
            <Link href="/san-francisco" className="flex items-center gap-3 bg-white/10 rounded-xl p-3 mb-3 hover:bg-white/20 transition" data-testid="link-mobile-sf">
              <div className="w-8 h-8 rounded-lg bg-brandOrange flex items-center justify-center text-white shrink-0">
                <i aria-hidden="true" className="fas fa-city text-sm"></i>
              </div>
              <span className="text-sm font-black text-white">San Francisco</span>
              <i aria-hidden="true" className="fas fa-arrow-right text-brandOrangeLight/50 ml-auto text-xs"></i>
            </Link>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-bold text-slate-300">
              <Link href="/oakland" className="hover:text-white py-1"><i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrangeLight/40 text-xs mr-1"></i> Oakland</Link>
              <Link href="/san-jose" className="hover:text-white py-1"><i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrangeLight/40 text-xs mr-1"></i> San Jose</Link>
              <Link href="/palo-alto" className="hover:text-white py-1"><i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrangeLight/40 text-xs mr-1"></i> Palo Alto</Link>
              <Link href="/berkeley" className="hover:text-white py-1"><i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrangeLight/40 text-xs mr-1"></i> Berkeley</Link>
              <Link href="/walnut-creek" className="hover:text-white py-1"><i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrangeLight/40 text-xs mr-1"></i> Walnut Creek</Link>
              <Link href="/fremont" className="hover:text-white py-1"><i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrangeLight/40 text-xs mr-1"></i> Fremont</Link>
              <Link href="/service-areas" className="text-brandOrangeLight hover:text-white py-1 col-span-2 font-black" data-testid="link-mobile-all-cities"><i aria-hidden="true" className="fas fa-globe text-brandOrangeLight/60 text-xs mr-1"></i> All 60 Cities →</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full px-8 max-w-sm pt-4">
          <a
            href="tel:6506665554"
            className="bg-white text-brandNavy py-3.5 rounded-2xl font-black text-center uppercase tracking-widest hover:bg-brandOrange hover:text-white transition shadow-lg text-sm flex items-center justify-center"
            data-testid="link-mobile-call"
          >
            <i aria-hidden="true" className="fas fa-phone mr-2"></i> 650-666-5554
          </a>
          <a
            href="https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media"
            target="_blank"
            rel="noreferrer noopener"
            className="bg-brandOrange text-white py-3.5 rounded-2xl font-black text-center uppercase tracking-widest hover:bg-white hover:text-brandOrange transition shadow-lg text-sm flex items-center justify-center"
            data-testid="link-mobile-quote"
          >
            <i aria-hidden="true" className="fas fa-bolt mr-2"></i> Free Estimate
          </a>
        </div>
      </div>

      <main>{children}</main>

      <Suspense fallback={<div className="bg-brandNavy min-h-[200px]" />}>
        <LazyFooter />
      </Suspense>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 lg:hidden flex gap-2 z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <a className="flex-1 bg-brandNavy text-white text-center py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center" href="tel:6506665554" data-testid="link-call-sticky">
          <i aria-hidden="true" className="fas fa-phone mr-2"></i> Call Now
        </a>
        <a className="flex-1 bg-whatsappGreen text-white text-center py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center" href="https://wa.me/16506665554" rel="noreferrer noopener" target="_blank" data-testid="link-whatsapp-sticky">
          <i aria-hidden="true" className="fab fa-whatsapp mr-2"></i> WhatsApp
        </a>
        <a className="flex-1 bg-brandOrange text-white text-center py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center" href="https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media" rel="noreferrer noopener" target="_blank" data-testid="link-quote-sticky">
          <i aria-hidden="true" className="fas fa-calendar-check mr-2"></i> Quote
        </a>
      </div>
    </div>
  );
}

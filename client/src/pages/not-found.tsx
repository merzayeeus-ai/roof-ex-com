import { Link } from "wouter";
import Layout from "@/components/layout";
import { NearbyAreas } from "@/components/page-bottom";

const quickLinks = [
  { label: "Home", href: "/", icon: "fas fa-home", description: "Back to the homepage" },
  { label: "Services", href: "/services/", icon: "fas fa-tools", description: "View all roofing services" },
  { label: "Gallery", href: "/gallery/", icon: "fas fa-images", description: "Browse completed projects" },
  { label: "Contact", href: "/contact/", icon: "fas fa-envelope", description: "Get in touch with us" },
  { label: "Blog", href: "/blog/", icon: "fas fa-newspaper", description: "Roofing tips & guides" },
  { label: "Get Quote", href: "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=website", icon: "fas fa-calendar-check", description: "Request a free estimate", external: true },
];

const popularServices = [
  { label: "Residential Roofing", href: "/residential/", icon: "fas fa-home" },
  { label: "Commercial Roofing", href: "/commercial/", icon: "fas fa-building" },
  { label: "Roof Repair", href: "/roof-repair/", icon: "fas fa-wrench" },
  { label: "Emergency Services", href: "/emergency/", icon: "fas fa-bolt" },
];

export default function NotFound() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[60vh] text-white py-32 lg:py-48 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/roofing-dark-shingles.webp" alt="Roofing" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 text-center px-6">
          <p className="text-[8rem] md:text-[12rem] font-black leading-none text-brandOrangeLight drop-shadow-2xl" data-testid="text-404-number">404</p>
     <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white" data-testid="text-404-title">
            Page Not Found
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-bold" data-testid="text-404-message">
            The page you're looking for might have been moved or doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-block bg-brandOrange text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white hover:text-brandNavy transition shadow-lg"
            data-testid="link-404-home"
          >
            <i aria-hidden="true" className="fas fa-arrow-left mr-3"></i> Back to Home
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Quick Navigation</span>
   <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-4" data-testid="text-404-quicklinks-title">
              Where Would You Like to <span className="text-brandOrange">Go?</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Here are some helpful links to get you back on track.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => {
              const content = (
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-3xl group-hover:scale-110 transition-transform">
                    <i aria-hidden="true" className={link.icon}></i>
                  </div>
                  <h3 className="text-xl font-black text-brandNavy mb-2 uppercase">{link.label}</h3>
                  <p className="text-sm text-slate-500">{link.description}</p>
                  {link.external && (
                    <span className="inline-block mt-3 text-xs text-brandOrange font-bold"><i aria-hidden="true" className="fas fa-external-link-alt mr-1"></i> Opens new tab</span>
                  )}
                </div>
              );

              if (link.external) {
                return (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer noopener" data-testid={`link-404-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                    {content}
                  </a>
                );
              }

              return (
                <Link key={link.label} href={link.href} data-testid={`link-404-${link.label.toLowerCase().replace(/\s/g, "-")}`}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Explore</span>
   <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-4" data-testid="text-404-services-title">
              Popular <span className="text-brandOrange">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service) => (
              <Link
                key={service.label}
                href={service.href}
                className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                data-testid={`link-404-service-${service.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="w-14 h-14 bg-brandNavy/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-brandNavy text-2xl group-hover:scale-110 transition-transform">
                  <i aria-hidden="true" className={service.icon}></i>
                </div>
                <h3 className="text-lg font-black text-brandNavy uppercase">{service.label}</h3>
                <span className="text-sm text-brandOrange font-bold mt-2 inline-block">Learn More <i aria-hidden="true" className="fas fa-arrow-right ml-1"></i></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brandNavy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
   <h2 className="text-3xl md:text-5xl font-black mb-6" data-testid="text-404-cta-title">
            Need Help? <span className="text-brandOrangeLight">Call Us</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 font-medium text-lg">
            Can't find what you're looking for? Our team is ready to help you with any roofing question.
          </p>
          <a
            href="tel:6506665554"
            className="inline-block bg-brandOrange text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white hover:text-brandNavy transition shadow-lg"
            data-testid="link-404-call"
          >
            <i aria-hidden="true" className="fas fa-phone-alt mr-3"></i> Call 650-666-5554
          </a>
        </div>
      </section>

      <NearbyAreas />
    </Layout>
  );
}

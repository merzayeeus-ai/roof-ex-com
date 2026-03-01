import { useState, useRef, useCallback } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import { useSEO } from "@/hooks/use-seo";

const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";
const WHATSAPP_URL = "https://wa.me/16506665554";

export default function Contact() {
  useSEO("Contact Us — Free Roofing Estimate Bay Area | ROOF EXPRESS", "Get a free roofing estimate from ROOF EXPRESS. Same-day inspections, 24-hour digital quotes. Call 650-666-5554 or book online.", "contact ROOF EXPRESS, free roofing estimate Bay Area, roofing quote San Francisco, schedule roof inspection, 650-666-5554, roofing contractor near me, same-day roof inspection");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const loadMap = useCallback(() => setMapLoaded(true), []);

  const contactFaqs = [
    {
      q: "How quickly can you come out for an inspection?",
      a: "We offer same-day and next-day inspections throughout the Bay Area. Most requests made before noon are scheduled for the same afternoon. Call 650-666-5554 to book your slot.",
    },
    {
      q: "Do you provide free estimates?",
      a: "Yes, all inspections and estimates are completely free with no obligation. You'll receive a detailed, line-item digital scope with photos — never a vague verbal quote.",
    },
    {
      q: "What areas do you serve?",
      a: "We serve the entire San Francisco Bay Area including San Francisco, Daly City, Pacifica, South San Francisco, San Mateo, Palo Alto, Mountain View, Los Altos, Menlo Park, Oakland, and surrounding cities.",
    },
    {
      q: "Do I need to be home for the estimate?",
      a: "It's helpful but not required. Our inspector can perform the roof assessment while you're away and send you a full digital report with photos through our Jobber portal.",
    },
    {
      q: "How do I get an emergency repair?",
      a: "Call 650-666-5554 any time, 24/7. We dispatch emergency crews for active leaks and storm damage — often within hours. Emergency tarping and temporary repairs are available same-day.",
    },
    {
      q: "Can I get financing?",
      a: "Yes, we partner with Wisetack for up to $25,000 in financing with flexible terms. Apply in minutes with no impact to your credit score. Ask us about current promotional rates.",
    },
  ];

  const quickLinks = [
    { title: "Services", href: "/services/", icon: "fas fa-tools", desc: "Explore our full range of roofing solutions for residential and commercial properties." },
    { title: "Gallery", href: "/gallery/", icon: "fas fa-images", desc: "Browse completed projects across the Bay Area with before and after photos." },
    { title: "Financing", href: "/financing/", icon: "fas fa-money-bill-wave", desc: "Flexible payment options up to $25,000 through our Wisetack partnership." },
    { title: "Blog", href: "/blog/", icon: "fas fa-newspaper", desc: "Roofing tips, guides, cost breakdowns, and Bay Area-specific advice." },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/roof-express-crew-about.webp" alt="ROOF EXPRESS roofing crew on job site" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brandNavy/90 via-brandNavy/70 to-brandNavy/40"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                  <i aria-hidden="true" className="fas fa-envelope mr-2"></i> Get In Touch
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-contact-hero-title">
                Contact ROOF EXPRESS for a <span className="text-brandOrangeLight">Free Estimate</span>
              </h1>
              <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-contact-hero-subtitle">
                Whether you need an emergency repair or a full replacement quote, our team is standing by. Reach us by phone, WhatsApp, or schedule an inspection online.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={JOBBER_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
                  data-testid="link-contact-book-inspection"
                >
                  <i aria-hidden="true" className="fas fa-calendar-check mr-2"></i> Book Inspection
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20"
                  data-testid="link-contact-whatsapp"
                >
                  <i aria-hidden="true" className="fab fa-whatsapp mr-2"></i> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-1 gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-brandOrange rounded-xl flex items-center justify-center text-white text-lg">
                    <i aria-hidden="true" className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/70">Call Now</p>
                    <a href="tel:6506665554" className="text-2xl font-black text-white hover:text-brandOrange transition" data-testid="link-hero-phone">650-666-5554</a>
                  </div>
                </div>
                <p className="text-xs text-white/70 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Open 24/7 for emergencies</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrangeLight text-xl mb-2"></i>
                  <p className="text-xs font-black text-white uppercase tracking-wide">Free Estimates</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center">
                  <i aria-hidden="true" className="fas fa-bolt text-brandOrangeLight text-xl mb-2"></i>
                  <p className="text-xs font-black text-white uppercase tracking-wide">Same-Day Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-brandNavy border-b border-white/10 lg:hidden">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8">
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-check-circle mr-1.5 text-brandOrangeLight text-[9px]"></i> Free Estimates
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-bolt mr-1.5 text-brandOrangeLight text-[9px]"></i> Same-Day Response
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-shield-alt mr-1.5 text-brandOrangeLight text-[9px]"></i> Licensed & Insured
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-map-marker-alt mr-1.5 text-brandOrangeLight text-[9px]"></i> Bay Area Wide
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white cv-auto">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Our Offices</span>
            <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-3" data-testid="text-locations">Our <span className="text-brandOrange">Locations</span></h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto">Two offices serving the entire Bay Area with same-day inspections and 24/7 emergency response.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div className="bg-brandGrey rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all group" data-testid="card-location-sf">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-brandOrange rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                    <i aria-hidden="true" className="fas fa-building"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-brandNavy uppercase">San Francisco HQ</h3>
                    <span className="text-xs font-bold text-brandOrange uppercase tracking-widest">Main Office</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                    <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange w-4 text-center"></i> 58 West Portal Ave, San Francisco, CA 94127
                  </p>
                  <p className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                    <i aria-hidden="true" className="fas fa-phone-alt text-brandOrange w-4 text-center"></i>
                    <a href="tel:6506665554" className="hover:text-brandOrange transition font-bold" data-testid="link-sf-phone">650-666-5554</a>
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=58+West+Portal+Avenue,+San+Francisco,+CA+94127"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-xs font-black text-brandOrange uppercase tracking-widest hover:text-brandNavy transition"
                  data-testid="link-sf-directions"
                >
                  <i aria-hidden="true" className="fas fa-directions"></i> Get Directions
                </a>
              </div>
            </div>

            <div className="bg-brandGrey rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all group" data-testid="card-location-pa">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-brandNavy rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                    <i aria-hidden="true" className="fas fa-building"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-brandNavy uppercase">Palo Alto Office</h3>
                    <span className="text-xs font-bold text-brandNavy uppercase tracking-widest">South Bay</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                    <i aria-hidden="true" className="fas fa-map-marker-alt text-brandNavy w-4 text-center"></i> 3790 El Camino Real, Palo Alto, CA 94306
                  </p>
                  <p className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                    <i aria-hidden="true" className="fas fa-phone-alt text-brandNavy w-4 text-center"></i>
                    <a href="tel:6506665477" className="hover:text-brandNavy transition font-bold" data-testid="link-pa-phone">650-666-5477</a>
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=3790+El+Camino+Real,+Palo+Alto,+CA+94306"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-xs font-black text-brandNavy uppercase tracking-widest hover:text-brandOrange transition"
                  data-testid="link-pa-directions"
                >
                  <i aria-hidden="true" className="fas fa-directions"></i> Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10" data-testid="card-hours">
              <h3 className="text-lg font-black text-brandNavy uppercase mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-brandOrange/10 rounded-xl flex items-center justify-center">
                  <i aria-hidden="true" className="fas fa-clock text-brandOrange"></i>
                </div>
                Business Hours
              </h3>
              <div className="space-y-1">
                {[
                  { day: "Monday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Wednesday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Friday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Sunday", hours: "By Appointment" },
                ].map((item, i) => (
                  <div key={i} className={`flex justify-between items-center py-2.5 ${i < 6 ? "border-b border-slate-100" : ""}`}>
                    <span className="text-sm font-bold text-brandNavy">{item.day}</span>
                    <span className={`text-sm font-medium ${item.day === "Sunday" ? "text-brandOrange font-bold" : "text-slate-500"}`}>{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-brandOrange/5 border border-brandOrange/20 rounded-xl p-3 flex items-center gap-3">
                <i aria-hidden="true" className="fas fa-exclamation-triangle text-brandOrange"></i>
                <p className="text-xs font-bold text-brandNavy">Emergency service available 24/7 — call anytime</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10" data-testid="card-contact-lines">
              <h3 className="text-lg font-black text-brandNavy uppercase mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-brandOrange/10 rounded-xl flex items-center justify-center">
                  <i aria-hidden="true" className="fas fa-phone-alt text-brandOrange"></i>
                </div>
                Contact Lines
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-brandGrey rounded-2xl hover:shadow-md transition">
                  <div className="w-12 h-12 bg-brandOrange rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0">
                    <i aria-hidden="true" className="fas fa-phone-alt"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Primary Dispatch</p>
                    <a href="tel:6506665554" className="text-xl font-black text-brandNavy hover:text-brandOrange transition" data-testid="link-primary-phone">650-666-5554</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-brandGrey rounded-2xl hover:shadow-md transition">
                  <div className="w-12 h-12 bg-brandNavy rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0">
                    <i aria-hidden="true" className="fas fa-headset"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Customer Support</p>
                    <a href="tel:6506665541" className="text-xl font-black text-brandNavy hover:text-brandOrange transition" data-testid="link-support-phone">650-666-5541</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-brandGrey rounded-2xl hover:shadow-md transition">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0">
                    <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">South Bay Line</p>
                    <a href="tel:6506665477" className="text-xl font-black text-brandNavy hover:text-brandOrange transition" data-testid="link-southbay-phone">650-666-5477</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brandNavy cv-auto" data-testid="section-map">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/20 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Find Us</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-3" data-testid="text-hq-map">Our <span className="text-brandOrangeLight">Headquarters</span></h2>
            <p className="text-sm text-white/70 max-w-lg mx-auto">Located in the heart of San Francisco's West Portal neighborhood — easily accessible from anywhere in the Bay Area.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div ref={mapRef} className="lg:col-span-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[350px] md:min-h-[450px] relative">
              {mapLoaded ? (
                <iframe
                  src="https://www.google.com/maps?q=58+West+Portal+Ave,+San+Francisco,+CA+94127&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ROOF EXPRESS Headquarters — 58 West Portal Ave, San Francisco, CA 94127"
                  className="w-full h-full min-h-[350px] md:min-h-[450px]"
                  data-testid="map-hq"
                ></iframe>
              ) : (
                <button
                  onClick={loadMap}
                  className="w-full h-full min-h-[350px] md:min-h-[450px] bg-brandNavy/50 flex flex-col items-center justify-center gap-4 cursor-pointer group"
                  data-testid="button-load-map"
                  aria-label="Load interactive Google Map showing ROOF EXPRESS headquarters at 58 West Portal Ave, San Francisco"
                >
                  <div className="w-16 h-16 bg-brandOrange rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform shadow-lg">
                    <i aria-hidden="true" className="fas fa-map-marked-alt"></i>
                  </div>
                  <span className="text-white font-black text-sm uppercase tracking-widest">Tap to Load Map</span>
                  <span className="text-white/60 text-xs">58 West Portal Ave, San Francisco, CA 94127</span>
                </button>
              )}
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition">
                <div className="w-12 h-12 bg-brandOrange rounded-xl flex items-center justify-center text-white text-lg mb-4">
                  <i aria-hidden="true" className="fas fa-building"></i>
                </div>
                <h3 className="font-black text-white text-sm uppercase tracking-wide mb-2">San Francisco HQ</h3>
                <p className="text-sm text-white/70 font-medium mb-1">58 West Portal Avenue</p>
                <p className="text-sm text-white/70 font-medium mb-3">San Francisco, CA 94127</p>
                <a href="tel:6506665554" className="text-lg font-black text-brandOrange hover:text-white transition" data-testid="link-map-sf-phone"><i aria-hidden="true" className="fas fa-phone-alt mr-2 text-sm"></i>650-666-5554</a>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white text-lg mb-4">
                  <i aria-hidden="true" className="fas fa-building"></i>
                </div>
                <h3 className="font-black text-white text-sm uppercase tracking-wide mb-2">Palo Alto Office</h3>
                <p className="text-sm text-white/70 font-medium mb-1">3790 El Camino Real</p>
                <p className="text-sm text-white/70 font-medium mb-3">Palo Alto, CA 94306</p>
                <a href="tel:6506665477" className="text-lg font-black text-brandOrange hover:text-white transition" data-testid="link-map-pa-phone"><i aria-hidden="true" className="fas fa-phone-alt mr-2 text-sm"></i>650-666-5477</a>
              </div>
              <div className="bg-brandOrange/10 border border-brandOrange/20 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <i aria-hidden="true" className="fas fa-shield-alt text-brandOrangeLight"></i>
                  <h3 className="font-black text-white text-sm uppercase tracking-wide">Licensed & Insured</h3>
                </div>
                <p className="text-sm text-white/70 font-medium">CSLB #1072766</p>
                <p className="text-xs text-white/70 mt-1">Active C-39 Roofing License</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white cv-auto">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Digital Estimate</span>
            <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-3" data-testid="text-quick-quote">Quick Quote <span className="text-brandOrange">Portal</span></h2>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto font-medium leading-relaxed">
              Skip the phone tag. Use our Jobber-powered digital portal to submit your project details and receive a detailed estimate within 24 hours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-brandGrey p-8 rounded-3xl text-center group hover:shadow-lg transition" data-testid="card-quote-feature-1">
              <div className="w-14 h-14 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brandOrange text-2xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-camera"></i>
              </div>
              <h3 className="font-black text-brandNavy mb-2 uppercase text-sm">Upload Photos</h3>
              <p className="text-xs text-slate-500">Attach photos of your roof for a more accurate estimate.</p>
            </div>
            <div className="bg-brandGrey p-8 rounded-3xl text-center group hover:shadow-lg transition" data-testid="card-quote-feature-2">
              <div className="w-14 h-14 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brandOrange text-2xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-clock"></i>
              </div>
              <h3 className="font-black text-brandNavy mb-2 uppercase text-sm">24-Hour Response</h3>
              <p className="text-xs text-slate-500">Receive a detailed digital scope within one business day.</p>
            </div>
            <div className="bg-brandGrey p-8 rounded-3xl text-center group hover:shadow-lg transition" data-testid="card-quote-feature-3">
              <div className="w-14 h-14 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brandOrange text-2xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-file-invoice-dollar"></i>
              </div>
              <h3 className="font-black text-brandNavy mb-2 uppercase text-sm">Line-Item Estimate</h3>
              <p className="text-xs text-slate-500">No hidden fees — every cost itemized and explained.</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href={JOBBER_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block bg-brandOrange text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(241,90,41,0.3)]"
              data-testid="link-contact-jobber-portal"
            >
              <i aria-hidden="true" className="fas fa-bolt mr-3"></i> Submit Your Project for a Free Estimate
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brandGrey cv-auto">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-3" data-testid="text-contact-faq-title">Frequently Asked <span className="text-brandOrange">Questions</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Everything you need to know about contacting and hiring ROOF EXPRESS.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {contactFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition" data-testid={`card-contact-faq-${i + 1}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-slate-50/50 transition"
                  data-testid={`button-contact-faq-${i + 1}`}
                >
                  <span className="text-sm md:text-base font-black text-brandNavy pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === i ? "bg-brandOrange text-white" : "bg-brandGrey text-brandOrange"}`}>
                    <i aria-hidden="true" className={`fas ${openFaq === i ? "fa-minus" : "fa-plus"} text-xs`}></i>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-sm text-slate-500 leading-relaxed" data-testid={`text-contact-faq-answer-${i + 1}`}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white cv-auto">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Explore More</span>
            <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-3" data-testid="text-quick-links-title">Quick <span className="text-brandOrange">Links</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Link key={link.title} href={link.href} className="bg-brandGrey p-8 rounded-3xl border border-slate-100 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-testid={`link-quick-${link.title.toLowerCase()}`}>
                <div className="w-14 h-14 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-brandOrange text-2xl group-hover:scale-110 group-hover:bg-brandOrange group-hover:text-white transition-all">
                  <i aria-hidden="true" className={link.icon}></i>
                </div>
                <h3 className="font-black text-brandNavy mb-2 uppercase text-sm group-hover:text-brandOrange transition">{link.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NearbyAreas />
      <CTASection />
    </Layout>
  );
}

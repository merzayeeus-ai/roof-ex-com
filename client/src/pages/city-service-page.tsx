import { useState } from "react";
import { Link, useRoute } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import { cities } from "@/data/cities";
import { cityZips } from "@/data/city-zips";
import { getServiceBySlug, generateCityServiceH1, generateCityServiceQuestions, SERVICE_TYPES } from "@/data/city-service-content";
import { ZipCodeSection } from "@/components/zip-code-section";
import { useSEO } from "@/hooks/use-seo";

const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";

function useRouteParams(): { city: string; service: string } {
  const [m1, p1] = useRoute("/:city/roof-repair");
  const [m2, p2] = useRoute("/:city/roof-replacement");
  const [m3, p3] = useRoute("/:city/residential-roofing");
  const [m4, p4] = useRoute("/:city/commercial-roofing");
  const [m5, p5] = useRoute("/:city/gutters");

  if (m1 && p1) return { city: p1.city, service: "roof-repair" };
  if (m2 && p2) return { city: p2.city, service: "roof-replacement" };
  if (m3 && p3) return { city: p3.city, service: "residential-roofing" };
  if (m4 && p4) return { city: p4.city, service: "commercial-roofing" };
  if (m5 && p5) return { city: p5.city, service: "gutters" };
  return { city: "", service: "" };
}

export default function CityServicePage() {
  const { city: citySlug, service: serviceSlug } = useRouteParams();

  const cityData = cities[citySlug];
  const service = getServiceBySlug(serviceSlug);
  const zipData = cityZips[citySlug];
  const neighborhoodNames = cityData?.neighborhoods?.map(n => n.name) || [];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO(
    cityData && service ? `${service.name} in ${cityData.name}, CA — ${zipData?.zip || ""} | ROOF EXPRESS` : "",
    cityData && service ? `Best ${service.name.toLowerCase()} in ${cityData.name}, CA ${zipData?.zip || ""}. Diamond Certified & GAF Master Elite. Serving ${neighborhoodNames.slice(0, 2).join(" & ")}. Free estimates — (650) 666-5554.` : undefined,
    cityData && service ? `${service.name.toLowerCase()} ${cityData.name}, ${service.name.toLowerCase()} near me, ${cityData.name} ${service.name.toLowerCase()}, best ${service.name.toLowerCase()} ${cityData.name}, ${service.name.toLowerCase()} ${zipData?.zip || ""}, ${zipData?.county || ""} County ${service.name.toLowerCase()}` : undefined
  );

  if (!cityData || !service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-brandGrey">
          <div className="text-center">
            <h1 className="text-4xl font-black text-brandNavy mb-4">Page Not Found</h1>
            <p className="text-slate-500 mb-6">The page you're looking for doesn't exist.</p>
            <Link href="/" className="text-brandOrange font-bold hover:underline">Return Home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  const cityServiceFaqs = generateCityServiceQuestions(cityData.name, service, neighborhoodNames);
  const allFaqs = [...cityServiceFaqs, ...service.baseFaqs];

  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[70vh] text-white py-24 lg:py-36 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src={service.heroImage} alt={`${service.name} in ${cityData.name}`} className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className={`fas ${service.icon} mr-2`}></i> {service.divisionLabel} — {cityData.name}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-city-service-hero-title">
              {generateCityServiceH1(cityData.name, service.name)} <span className="text-brandOrangeLight">({service.tagline})</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-city-service-hero-subtitle">
              Diamond Certified & GAF Master Elite {service.name.toLowerCase()} serving {neighborhoodNames.slice(0, 3).join(", ")} and all {cityData.name} neighborhoods. CSLB #1072766.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="tel:6506665554" className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20" data-testid="link-city-service-call">
                <i aria-hidden="true" className="fas fa-phone-alt mr-2"></i> (650) 666-5554
              </a>
              <a href={JOBBER_URL} target="_blank" rel="noreferrer noopener" className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20" data-testid="link-city-service-quote">
                <i aria-hidden="true" className="fas fa-file-alt mr-2"></i> Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-brandNavy border-b border-white/10">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8">
            {service.trustBadges.map((badge) => (
              <span key={badge} className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
                <i aria-hidden="true" className="fas fa-check-circle mr-1.5 text-brandOrangeLight text-[9px]"></i> {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {zipData && (
        <div className="py-2.5 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6 max-w-screen-xl">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs">
              <span className="font-bold text-brandNavy"><i aria-hidden="true" className="fas fa-map-marker-alt mr-1.5 text-brandOrange"></i> {cityData.name}, CA</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">{zipData.county} County</span>
            </div>
          </div>
        </div>
      )}

      <nav className="py-3 bg-white border-b border-slate-200" aria-label="Breadcrumb">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li><Link href="/" className="hover:text-brandOrange transition">Home</Link></li>
            <li><i aria-hidden="true" className="fas fa-chevron-right text-[8px] text-slate-300"></i></li>
            <li><Link href={service.parentPage} className="hover:text-brandOrange transition">{service.name}</Link></li>
            <li><i aria-hidden="true" className="fas fa-chevron-right text-[8px] text-slate-300"></i></li>
            <li><Link href={`/${citySlug}`} className="hover:text-brandOrange transition">{cityData.name}</Link></li>
            <li><i aria-hidden="true" className="fas fa-chevron-right text-[8px] text-slate-300"></i></li>
            <li className="font-bold text-brandNavy">{service.name} in {cityData.name}</li>
          </ol>
        </div>
      </nav>

      <section className="py-20 bg-brandGrey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">{cityData.name} {service.name}</span>
            <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-4" data-testid="text-city-service-main-heading">
              Why {cityData.name} Homeowners Choose <span className="text-brandOrange">ROOF EXPRESS</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">{cityData.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {service.contentSections.map((section) => (
              <div key={section.heading} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange mb-4">
                  <i aria-hidden="true" className={`fas ${section.icon} text-lg`}></i>
                </div>
                <h3 className="text-lg font-black text-brandNavy mb-3">{section.heading}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Local Expertise</span>
              <h2 className="text-3xl md:text-4xl font-black text-brandNavy mb-4" data-testid="text-neighborhoods-heading">
                {service.name} Across {cityData.name} Neighborhoods
              </h2>
            </div>
            <div className="space-y-6">
              {cityData.neighborhoods.map((hood) => (
                <div key={hood.name} className="bg-brandGrey rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange flex-shrink-0 mt-0.5">
                      <i aria-hidden="true" className="fas fa-map-pin"></i>
                    </div>
                    <div>
                      <h3 className="text-base font-black text-brandNavy mb-1">{hood.name}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-2">{hood.description}</p>
                      <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-brandOrange">
                        <i aria-hidden="true" className="fas fa-star mr-1 text-[8px]"></i> {hood.bestFor}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-black text-brandNavy" data-testid="text-faq-heading">
                {service.name} Questions — {cityData.name}
              </h2>
            </div>
            <div className="space-y-3">
              {allFaqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition min-h-[44px]"
                    data-testid={`button-faq-${i}`}
                  >
                    <h3 className="text-sm font-bold text-brandNavy pr-4">{faq.q}</h3>
                    <i aria-hidden="true" className={`fas fa-chevron-down text-brandOrange text-xs transition-transform ${openFaq === i ? "rotate-180" : ""}`}></i>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-brandNavy mb-4">More Services in {cityData.name}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {SERVICE_TYPES.filter(s => s.slug !== serviceSlug).map((s) => (
              <Link
                key={s.slug}
                href={`/${citySlug}/${s.slug}`}
                className="bg-brandGrey rounded-xl p-4 text-center hover:shadow-md transition-shadow border border-slate-100"
                data-testid={`link-service-${s.slug}`}
              >
                <div className="w-10 h-10 rounded-full bg-brandOrange/10 flex items-center justify-center text-brandOrange mx-auto mb-2">
                  <i aria-hidden="true" className={`fas ${s.icon}`}></i>
                </div>
                <span className="text-xs font-bold text-brandNavy">{s.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`/${citySlug}`} className="text-sm text-brandOrange font-bold hover:underline" data-testid="link-back-to-city">
              <i aria-hidden="true" className="fas fa-arrow-left mr-1.5"></i> All Services in {cityData.name}
            </Link>
          </div>
        </div>
      </section>

      {zipData && (
        <ZipCodeSection cityName={cityData.name} county={zipData.county} zips={zipData.zips} testId="section-service-coverage-bottom" />
      )}
      <NearbyAreas />
      <CTASection />
    </Layout>
  );
}

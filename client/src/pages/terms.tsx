import Layout from "@/components/layout";
import { NearbyAreas } from "@/components/page-bottom";
import { useSEO } from "@/hooks/use-seo";

export default function Terms() {
  useSEO("Terms of Service | ROOF EXPRESS", "Terms of service for ROOF EXPRESS roofing services and website usage.");
  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[50vh] text-white py-32 lg:py-48 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-terms.webp" alt="Terms of service" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 text-center px-6">
          <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-6 py-2 rounded-full mb-8">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-brandOrangeLight">
              <i aria-hidden="true" className="fas fa-file-contract mr-3"></i> Legal
            </span>
          </div>
     <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white drop-shadow-2xl" data-testid="text-terms-hero-title">
            Terms of <span className="text-brandOrangeLight">Service</span>
          </h1>
          <p className="text-lg text-white/70 font-bold" data-testid="text-terms-effective-date">
            Effective Date: January 4, 2026
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-500 leading-relaxed font-medium mb-12">
              Welcome to the ROOF EXPRESS website. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>

            <div className="mb-12">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-overview">
                <span className="text-brandOrange mr-3">1.</span> Overview
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium mb-4">
                ROOF EXPRESS provides residential and commercial roofing services throughout the San Francisco Bay Area, including roof replacement, repair, flat roofing, skylights, gutters, and emergency services. Our website provides general information about our services, allows you to request quotes, and connects you with our team.
              </p>
              <p className="text-slate-500 leading-relaxed font-medium">
                All content on this website — including text, images, pricing estimates, and project information — is provided for general informational purposes only and does not constitute a binding offer or contract. Actual terms, pricing, and scope of work will be defined in a separate written agreement or estimate provided directly to you.
              </p>
            </div>

            <div className="mb-12">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-estimates">
                <span className="text-brandOrange mr-3">2.</span> Estimates and Scope of Work
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium mb-4">
                All estimates provided by ROOF EXPRESS are based on visible conditions at the time of inspection. Hidden damage, structural issues, or code requirements discovered during the project may result in additional costs, which will be communicated to you before proceeding.
              </p>
              <ul className="space-y-3">
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Estimates are valid for 30 days from the date of issuance unless otherwise stated.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Material prices are subject to change based on supplier availability and market conditions.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Any changes to the agreed scope of work must be approved in writing by both parties.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Online calculator results are preliminary estimates only and do not constitute formal quotes.</span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-scheduling">
                <span className="text-brandOrange mr-3">3.</span> Scheduling and Cancellations
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium mb-4">
                Project schedules are subject to weather conditions, permit processing times, material availability, and other factors outside our control. We will communicate any scheduling changes promptly.
              </p>
              <ul className="space-y-3">
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Cancellations must be made at least 48 hours before the scheduled start date.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Cancellations after materials have been ordered or permits pulled may be subject to restocking or administrative fees.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Weather-related delays will not incur additional charges to the homeowner.</span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-site-access">
                <span className="text-brandOrange mr-3">4.</span> Site Access and Safety
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium mb-4">
                By engaging our services, you agree to provide reasonable access to the work area for the duration of the project. Homeowners are responsible for:
              </p>
              <ul className="space-y-3">
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Clearing vehicles and personal property from work areas prior to project start.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Notifying us of any known hazards, underground utilities, or property restrictions.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Ensuring pets and children are kept away from the active work zone.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Providing access to water and electrical outlets if needed for the project.</span>
                </li>
              </ul>
              <p className="text-slate-500 leading-relaxed font-medium mt-4">
                ROOF EXPRESS maintains full OSHA compliance, general liability insurance, and workers' compensation coverage for all projects.
              </p>
            </div>

            <div className="mb-12">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-third-party">
                <span className="text-brandOrange mr-3">5.</span> Third-Party Links
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium">
                Our website may contain links to third-party websites, including our scheduling platform (Jobber), financing partner (Wisetack), and communication tools (WhatsApp). These links are provided for your convenience only. ROOF EXPRESS does not control and is not responsible for the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div className="mb-12">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-liability">
                <span className="text-brandOrange mr-3">6.</span> Limitation of Liability
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium mb-4">
                To the fullest extent permitted by law, ROOF EXPRESS shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our website or services.
              </p>
              <p className="text-slate-500 leading-relaxed font-medium">
                Our total liability for any claims arising from a roofing project shall not exceed the total amount paid for the specific services at issue. This limitation does not apply to claims arising from gross negligence, willful misconduct, or statutory obligations under California law.
              </p>
            </div>

            <div className="mb-12">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-privacy">
                <span className="text-brandOrange mr-3">7.</span> Privacy
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium">
                Your use of our website and services is also governed by our Privacy Policy. Please review our <a href="/privacy" className="text-brandOrange font-bold hover:underline">Privacy Policy</a> for information about how we collect, use, and protect your personal information.
              </p>
            </div>

            <div className="bg-brandGrey p-10 rounded-[2rem]">
              <h3 className="text-xl font-black text-brandNavy uppercase italic mb-4">Questions About These Terms?</h3>
              <p className="text-slate-500 leading-relaxed font-medium mb-6">
                If you have any questions or concerns about these Terms of Service, please contact us:
              </p>
              <div className="space-y-3">
                <p className="text-slate-600 font-bold flex items-center gap-3">
                  <i aria-hidden="true" className="fas fa-envelope text-brandOrange"></i>
                  <a href="mailto:sales@roof-ex.com" className="text-brandOrange hover:underline" data-testid="link-terms-email">sales@roof-ex.com</a>
                </p>
                <p className="text-slate-600 font-bold flex items-center gap-3">
                  <i aria-hidden="true" className="fas fa-phone-alt text-brandOrange"></i>
                  <a href="tel:6506665554" className="text-brandOrange hover:underline" data-testid="link-terms-phone">650-666-5554</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NearbyAreas />
    </Layout>
  );
}
import Layout from "@/components/layout";
import { NearbyAreas } from "@/components/page-bottom";
import { useSEO } from "@/hooks/use-seo";

export default function Privacy() {
  useSEO("Privacy Policy | ROOF EXPRESS", "How ROOF EXPRESS collects, uses, and protects your personal information.");
  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[50vh] text-white py-32 lg:py-48 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-privacy.webp" alt="Privacy policy" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 text-center px-6">
          <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-6 py-2 rounded-full mb-8">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-brandOrangeLight">
              <i aria-hidden="true" className="fas fa-shield-alt mr-3"></i> Legal
            </span>
          </div>
     <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white drop-shadow-2xl" data-testid="text-privacy-hero-title">
            Privacy <span className="text-brandOrangeLight">Policy</span>
          </h1>
          <p className="text-lg text-white/70 font-bold" data-testid="text-privacy-effective-date">
            Effective Date: January 1, 2026
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-lg">
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-500 leading-relaxed font-medium mb-12">
              ROOF EXPRESS ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, request a quote, or use our roofing services in the San Francisco Bay Area.
            </p>

            <div className="mb-12">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-info-collect">
                <span className="text-brandOrange mr-3">1.</span> Information We Collect
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium mb-4">We may collect the following types of information:</p>
              <ul className="space-y-3 mb-4">
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and property address provided when you request a quote, schedule an inspection, or contact us.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span><strong>Project Information:</strong> Details about your roofing needs, property type, roof size, photos, and service history.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span><strong>Technical Data:</strong> IP address, browser type, device information, operating system, referring URLs, and browsing behavior on our website collected through cookies and analytics tools.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span><strong>Financial Information:</strong> Payment details processed securely through third-party payment providers. We do not store credit card numbers on our servers.</span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-how-use">
                <span className="text-brandOrange mr-3">2.</span> How We Use Your Information
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium mb-4">We use the information we collect to:</p>
              <ul className="space-y-3">
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Provide, maintain, and improve our roofing services</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Respond to your inquiries and schedule appointments</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Send project updates, estimates, invoices, and follow-up communications</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Process payments and financing applications</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Comply with legal obligations and protect our rights</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span>Analyze website usage to improve user experience</span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-ccpa">
                <span className="text-brandOrange mr-3">3.</span> California Privacy Rights (CCPA/CPRA)
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium mb-4">
                If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA):
              </p>
              <ul className="space-y-3">
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span><strong>Right to Know:</strong> You can request details about the personal information we collect, use, and disclose about you.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span><strong>Right to Delete:</strong> You can request that we delete personal information we have collected from you, subject to certain exceptions.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span><strong>Right to Correct:</strong> You may request correction of inaccurate personal information.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span><strong>Right to Opt-Out:</strong> You may opt out of the sale or sharing of your personal information. We do not sell personal information.</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising any of your privacy rights.</span>
                </li>
              </ul>
              <p className="text-slate-500 leading-relaxed font-medium mt-4">
                To exercise these rights, contact us at <a href="mailto:sales@roof-ex.com" className="text-brandOrange font-bold hover:underline">sales@roof-ex.com</a> or call <a href="tel:6506665554" className="text-brandOrange font-bold hover:underline">650-666-5554</a>.
              </p>
            </div>

            <div className="mb-12">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-sms">
                <span className="text-brandOrange mr-3">4.</span> SMS & Mobile Communications
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium mb-4">
                By providing your phone number, you consent to receive SMS/text messages from ROOF EXPRESS related to your roofing project, including appointment confirmations, project updates, and follow-up communications. Message and data rates may apply.
              </p>
              <p className="text-slate-500 leading-relaxed font-medium">
                You may opt out of SMS communications at any time by replying STOP to any message. For help, reply HELP or contact us directly.
              </p>
            </div>

            <div className="mb-12">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-third-party">
                <span className="text-brandOrange mr-3">5.</span> Third-Party Integrations
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium mb-4">
                We use trusted third-party services to operate our business, including:
              </p>
              <ul className="space-y-3">
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span><strong>Jobber:</strong> For scheduling, estimates, invoicing, and client management</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span><strong>Wisetack:</strong> For consumer financing applications and loan processing</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span><strong>Google Analytics:</strong> For website traffic analysis and performance monitoring</span>
                </li>
                <li className="text-slate-500 font-medium flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange mt-1 flex-shrink-0"></i>
                  <span><strong>WhatsApp Business:</strong> For customer communication and project coordination</span>
                </li>
              </ul>
              <p className="text-slate-500 leading-relaxed font-medium mt-4">
                Each third-party service maintains its own privacy policy governing how they handle your data.
              </p>
            </div>

            <div className="mb-12">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-retention">
                <span className="text-brandOrange mr-3">6.</span> Data Retention
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium">
                We retain your personal information for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Project records, including contracts, warranties, and permit documentation, may be retained for the duration of applicable warranty periods (up to 50 years for certain manufacturer warranties).
              </p>
            </div>

            <div className="mb-12">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-security">
                <span className="text-brandOrange mr-3">7.</span> Security Protocols
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium">
                We implement industry-standard security measures to protect your personal information, including SSL/TLS encryption for data transmission, secure cloud storage, access controls, and regular security audits. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-12 bg-brandGrey p-10 rounded-[2rem]">
    <h2 className="text-2xl font-black text-brandNavy mb-6" data-testid="text-section-contact">
                <span className="text-brandOrange mr-3">8.</span> Contact Us
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium mb-6">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-3">
                <p className="text-slate-600 font-bold flex items-center gap-3">
                  <i aria-hidden="true" className="fas fa-building text-brandOrange"></i> ROOF EXPRESS
                </p>
                <p className="text-slate-600 font-bold flex items-center gap-3">
                  <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange"></i> 58 West Portal Avenue, San Francisco, CA 94127
                </p>
                <p className="text-slate-600 font-bold flex items-center gap-3">
                  <i aria-hidden="true" className="fas fa-envelope text-brandOrange"></i>
                  <a href="mailto:sales@roof-ex.com" className="text-brandOrange hover:underline" data-testid="link-privacy-email">sales@roof-ex.com</a>
                </p>
                <p className="text-slate-600 font-bold flex items-center gap-3">
                  <i aria-hidden="true" className="fas fa-phone-alt text-brandOrange"></i>
                  <a href="tel:6506665554" className="text-brandOrange hover:underline" data-testid="link-privacy-phone">650-666-5554</a>
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
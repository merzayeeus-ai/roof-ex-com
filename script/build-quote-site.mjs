#!/usr/bin/env node
import { writeFileSync, mkdirSync, copyFileSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.resolve(ROOT, "quote-site");
const SITE_URL = "https://quote.roof-ex.com";
const MAIN_SITE = "https://roof-ex.com";
const GA_ID = "G-WJCTTYKQMF";
const PHONE = "650-666-5554";
const PHONE_RAW = "6506665554";
const WHATSAPP = `https://wa.me/1${PHONE_RAW}`;
const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=google_ads";
const CSLB = "1072766";

const CITIES = [
  "San Francisco","San Jose","Oakland","Palo Alto","Daly City","Pacifica","Millbrae","Mountain View","Menlo Park","Los Altos","Milpitas","Los Gatos","Sunnyvale","Santa Clara","Cupertino","Campbell","Saratoga","Redwood City","San Mateo","Burlingame","San Bruno","South San Francisco","Brisbane","Colma","Foster City","Belmont","San Carlos","Woodside","Atherton","Portola Valley","Half Moon Bay","Berkeley","Hayward","Fremont","Union City","Newark","Richmond","Los Altos Hills","San Leandro","Livermore","Pleasanton","Dublin","Alameda","Sausalito","Mill Valley","Tiburon","Concord","Walnut Creek","Orinda","Lafayette","San Ramon","Danville","San Rafael","Novato","Corte Madera","Larkspur","Fairfax","San Anselmo","Belvedere","Kentfield","East Palo Alto","Hillsborough","Pescadero"
];

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--navy:#134064;--orange:#C04520;--orange-light:#E8632E;--teal:#128C7E;--grey:#f8f9fa;--radius:12px}
body{font-family:'Inter',system-ui,-apple-system,sans-serif;color:#1a1a1a;line-height:1.6;-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:'Montserrat','Inter',system-ui,sans-serif;font-weight:900;line-height:1.15}
a{color:inherit;text-decoration:none}
img{max-width:100%;height:auto;display:block}

.container{max-width:1100px;margin:0 auto;padding:0 20px}

header{background:var(--navy);padding:16px 0}
.header-inner{display:flex;align-items:center;justify-content:space-between;gap:16px}
.logo{height:44px;width:auto}
.header-phone{color:#fff;font-weight:800;font-size:15px;letter-spacing:0.5px;display:flex;align-items:center;gap:8px;padding:10px 20px;border:2px solid rgba(255,255,255,0.3);border-radius:50px;transition:all 0.3s}
.header-phone:hover{background:var(--orange);border-color:var(--orange)}

.hero{background:linear-gradient(135deg,var(--navy) 0%,#0a2a44 100%);color:#fff;padding:60px 0 50px;position:relative;overflow:hidden}
.hero::after{content:'';position:absolute;top:0;right:0;bottom:0;width:40%;background:url('/assets/opengraph.jpg') center/cover;opacity:0.15}
.hero-content{position:relative;z-index:1;max-width:640px}
.hero-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);padding:6px 16px;border-radius:50px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:20px;color:rgba(255,255,255,0.9)}
.hero h1{font-size:clamp(28px,5vw,44px);margin-bottom:16px}
.hero h1 span{color:var(--orange-light)}
.hero p{font-size:18px;opacity:0.85;margin-bottom:30px;max-width:520px}
.hero-buttons{display:flex;gap:12px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 28px;border-radius:50px;font-weight:800;font-size:13px;text-transform:uppercase;letter-spacing:1.2px;transition:all 0.3s;border:none;cursor:pointer;min-height:48px}
.btn-orange{background:var(--orange);color:#fff}.btn-orange:hover{background:var(--orange-light)}
.btn-white{background:#fff;color:var(--navy)}.btn-white:hover{background:var(--grey)}
.btn-teal{background:var(--teal);color:#fff}.btn-teal:hover{background:#0e6b5e}
.btn-navy{background:var(--navy);color:#fff;border:2px solid rgba(255,255,255,0.2)}.btn-navy:hover{background:var(--orange)}
.btn-outline{background:transparent;color:var(--navy);border:2px solid #ddd}.btn-outline:hover{border-color:var(--orange);color:var(--orange)}

.trust-bar{background:#fff;border-bottom:1px solid #eee;padding:20px 0}
.trust-grid{display:flex;justify-content:center;gap:32px;flex-wrap:wrap;align-items:center}
.trust-item{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:0.8px}
.trust-icon{width:36px;height:36px;background:var(--orange);color:#fff;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}

.form-section{padding:60px 0;background:var(--grey)}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}
.form-card{background:#fff;border-radius:20px;padding:36px;box-shadow:0 4px 24px rgba(0,0,0,0.06);border:1px solid #eee}
.form-card h2{font-size:24px;color:var(--navy);margin-bottom:6px}
.form-card p.sub{color:#666;font-size:14px;margin-bottom:24px}
.form-group{margin-bottom:16px}
.form-group label{display:block;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--navy);margin-bottom:6px}
.form-group input,.form-group select,.form-group textarea{width:100%;padding:12px 16px;border:2px solid #e5e7eb;border-radius:var(--radius);font-size:15px;font-family:inherit;transition:border-color 0.3s;background:#fff}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{outline:none;border-color:var(--orange)}
.form-group textarea{resize:vertical;min-height:80px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.form-submit{width:100%;margin-top:8px}
.form-note{text-align:center;font-size:12px;color:#888;margin-top:12px}

.info-side h3{font-size:18px;font-weight:900;color:var(--navy);margin-bottom:16px}
.info-card{background:#fff;border-radius:16px;padding:24px;margin-bottom:16px;box-shadow:0 2px 12px rgba(0,0,0,0.04);border:1px solid #eee}
.info-card h4{font-size:14px;font-weight:800;color:var(--navy);margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px}
.info-card p{font-size:14px;color:#555;line-height:1.5}
.info-card a{color:var(--orange);font-weight:700}
.contact-methods{display:flex;flex-direction:column;gap:10px;margin-top:16px}

.testimonials{padding:50px 0;background:#fff}
.testimonials h2{text-align:center;font-size:22px;color:var(--navy);margin-bottom:32px}
.testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.testimonial{background:var(--grey);border-radius:16px;padding:24px;border:1px solid #eee}
.testimonial .stars{color:#f59e0b;font-size:14px;margin-bottom:10px;letter-spacing:2px}
.testimonial p{font-size:14px;color:#444;line-height:1.6;margin-bottom:12px;font-style:italic}
.testimonial .author{font-size:12px;font-weight:800;color:var(--navy);text-transform:uppercase;letter-spacing:0.5px}

.services-strip{padding:50px 0;background:var(--grey)}
.services-strip h2{text-align:center;font-size:22px;color:var(--navy);margin-bottom:24px}
.services-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px}
.service-pill{background:#fff;border:1px solid #eee;border-radius:var(--radius);padding:16px 20px;font-size:14px;font-weight:700;color:var(--navy);display:flex;align-items:center;gap:10px;transition:all 0.3s}
.service-pill:hover{border-color:var(--orange);color:var(--orange);transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,0.06)}
.service-pill i{color:var(--orange);font-size:16px;flex-shrink:0}

footer{background:var(--navy);color:rgba(255,255,255,0.7);padding:32px 0;text-align:center;font-size:13px}
footer a{color:rgba(255,255,255,0.9);font-weight:700}
footer .footer-links{margin-bottom:12px;display:flex;justify-content:center;gap:20px;flex-wrap:wrap}

@media(max-width:768px){
  .form-grid{grid-template-columns:1fr}
  .testimonial-grid{grid-template-columns:1fr}
  .form-row{grid-template-columns:1fr}
  .hero{padding:40px 0 36px}
  .hero::after{display:none}
  .header-phone span{display:none}
  .trust-grid{gap:16px}
  .trust-item{font-size:11px}
}
`;

const JS = `
document.addEventListener('DOMContentLoaded',function(){
  var form=document.getElementById('quote-form');
  if(!form)return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var data=new FormData(form);
    var params=new URLSearchParams();
    data.forEach(function(v,k){if(v)params.append(k,v)});
    window.location.href='${JOBBER_URL}&'+params.toString();
  });
});
`;

function gaSnippet() {
  return `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');</script>`;
}

function header() {
  return `<header>
  <div class="container header-inner">
    <a href="/" aria-label="ROOF EXPRESS Home"><img src="/assets/logo.png" alt="ROOF EXPRESS" class="logo" width="160" height="44" loading="eager"></a>
    <a href="tel:${PHONE_RAW}" class="header-phone" data-testid="link-header-phone"><i class="fas fa-phone-alt"></i> <span>${PHONE}</span></a>
  </div>
</header>`;
}

function trustBar() {
  return `<div class="trust-bar">
  <div class="container">
    <div class="trust-grid">
      <div class="trust-item"><div class="trust-icon"><i class="fas fa-gem"></i></div> Diamond Certified</div>
      <div class="trust-item"><div class="trust-icon"><i class="fas fa-award"></i></div> GAF Master Elite</div>
      <div class="trust-item"><div class="trust-icon"><i class="fas fa-shield-alt"></i></div> CSLB #${CSLB}</div>
      <div class="trust-item"><div class="trust-icon"><i class="fas fa-star"></i></div> 5-Star Rated</div>
      <div class="trust-item"><div class="trust-icon"><i class="fas fa-clock"></i></div> Same-Day Estimates</div>
    </div>
  </div>
</div>`;
}

function quoteForm(city = "") {
  const cityValue = city ? ` value="${escapeHtml(city)}"` : "";
  const cityField = city
    ? `<input type="hidden" name="city" value="${escapeHtml(city)}">`
    : `<div class="form-group"><label for="city">City</label><select name="city" id="city"><option value="">Select your city</option>${CITIES.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("")}</select></div>`;

  return `<div class="form-card">
  <h2>Get Your Free Estimate</h2>
  <p class="sub">No obligation. Response within 2 hours during business hours.</p>
  <form id="quote-form" data-testid="form-quote">
    <div class="form-row">
      <div class="form-group"><label for="name">Name</label><input type="text" name="name" id="name" placeholder="Your full name" required></div>
      <div class="form-group"><label for="phone">Phone</label><input type="tel" name="phone" id="phone" placeholder="(650) 000-0000" required></div>
    </div>
    <div class="form-group"><label for="email">Email</label><input type="email" name="email" id="email" placeholder="you@email.com"></div>
    ${cityField}
    <div class="form-group"><label for="service">Service Needed</label><select name="service" id="service"><option value="">Select a service</option><option>Roof Replacement</option><option>Roof Repair</option><option>Flat Roofing</option><option>Commercial Roofing</option><option>Gutter Installation</option><option>Skylight Repair</option><option>Emergency Leak Repair</option><option>Roof Inspection</option></select></div>
    <div class="form-group"><label for="message">Details (optional)</label><textarea name="message" id="message" rows="3" placeholder="Tell us about your project..."></textarea></div>
    <button type="submit" class="btn btn-orange form-submit" data-testid="button-submit-quote"><i class="fas fa-paper-plane"></i> Request Free Estimate</button>
  </form>
  <p class="form-note">Your information is secure and never shared.</p>
</div>`;
}

function infoSidebar(city = "") {
  const loc = city || "the Bay Area";
  return `<div class="info-side">
  <div class="info-card">
    <h4>Why ROOF EXPRESS?</h4>
    <p>We're one of the only <strong>Diamond Certified</strong> and <strong>GAF Master Elite</strong> roofing contractors in ${loc}. That means independent quality verification and manufacturer-backed warranties up to 50 years.</p>
  </div>
  <div class="info-card">
    <h4>What to Expect</h4>
    <p>1. Submit your request above<br>2. We call to schedule a free on-site inspection<br>3. Receive a detailed written estimate within 48 hours<br>4. No pressure — compare us with any competitor</p>
  </div>
  <div class="info-card">
    <h4>Prefer to Talk Now?</h4>
    <div class="contact-methods">
      <a href="tel:${PHONE_RAW}" class="btn btn-navy" data-testid="link-side-call"><i class="fas fa-phone-alt"></i> Call ${PHONE}</a>
      <a href="${WHATSAPP}" target="_blank" rel="noreferrer noopener" class="btn btn-teal" data-testid="link-side-whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp Us</a>
    </div>
  </div>
</div>`;
}

function testimonials() {
  return `<section class="testimonials">
  <div class="container">
    <h2>What Our Customers Say</h2>
    <div class="testimonial-grid">
      <div class="testimonial" data-testid="card-testimonial-1">
        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p>"From the initial inspection to the final cleanup, ROOF EXPRESS was exceptional. They replaced our entire roof in two days and the crew was professional and courteous throughout."</p>
        <div class="author">Sarah M. — San Carlos</div>
      </div>
      <div class="testimonial" data-testid="card-testimonial-2">
        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p>"We had an emergency leak during a rainstorm. ROOF EXPRESS responded within the hour and had a crew out the next morning for a permanent fix. Outstanding service."</p>
        <div class="author">David L. — Redwood City</div>
      </div>
      <div class="testimonial" data-testid="card-testimonial-3">
        <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p>"The best roofing experience we've ever had. Fair pricing, high-quality GAF materials, and they left our property cleaner than they found it. Highly recommend."</p>
        <div class="author">Jennifer T. — Burlingame</div>
      </div>
    </div>
  </div>
</section>`;
}

function servicesStrip() {
  return `<section class="services-strip">
  <div class="container">
    <h2>Our Roofing Services</h2>
    <div class="services-list">
      <div class="service-pill"><i class="fas fa-home"></i> Residential Roofing</div>
      <div class="service-pill"><i class="fas fa-building"></i> Commercial Roofing</div>
      <div class="service-pill"><i class="fas fa-layer-group"></i> Flat Roofing</div>
      <div class="service-pill"><i class="fas fa-tools"></i> Roof Repair</div>
      <div class="service-pill"><i class="fas fa-sync-alt"></i> Roof Replacement</div>
      <div class="service-pill"><i class="fas fa-water"></i> Gutter Installation</div>
      <div class="service-pill"><i class="fas fa-sun"></i> Skylight Repair</div>
      <div class="service-pill"><i class="fas fa-bolt"></i> Emergency Repairs</div>
    </div>
  </div>
</section>`;
}

function footerHtml() {
  return `<footer>
  <div class="container">
    <div class="footer-links">
      <a href="${MAIN_SITE}" target="_blank" rel="noreferrer">Main Website</a>
      <a href="${MAIN_SITE}/reviews" target="_blank" rel="noreferrer">Reviews</a>
      <a href="${MAIN_SITE}/blog/field-notes" target="_blank" rel="noreferrer">Field Notes</a>
      <a href="tel:${PHONE_RAW}">${PHONE}</a>
    </div>
    <p>&copy; ${new Date().getFullYear()} ROOF EXPRESS &middot; C&amp;C &amp; Son Roofing Experts &middot; CSLB #${CSLB}</p>
  </div>
</footer>`;
}

function jsonLd(city = "") {
  const name = city ? `ROOF EXPRESS — ${city} Roofing` : "ROOF EXPRESS — Bay Area Roofing Contractor";
  const desc = city
    ? `Get a free roofing estimate in ${city} from ROOF EXPRESS, a Diamond Certified and GAF Master Elite contractor. Call ${PHONE}.`
    : `Get a free roofing estimate from ROOF EXPRESS, a Diamond Certified and GAF Master Elite Bay Area roofing contractor. Call ${PHONE}.`;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "ROOF EXPRESS",
    "description": desc,
    "url": SITE_URL,
    "telephone": `+1${PHONE_RAW}`,
    "priceRange": "$$",
    "image": `${SITE_URL}/assets/opengraph.jpg`,
    "areaServed": city ? { "@type": "City", "name": city } : { "@type": "State", "name": "California" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "127" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roofing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flat Roofing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutter Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Skylight Repair" } }
      ]
    }
  });
}

function buildPage({ title, description, canonical, city, isContact }) {
  const cityName = city || "";
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<meta name="robots" content="index,follow,max-image-preview:large">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:image" content="${SITE_URL}/assets/opengraph.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="ROOF EXPRESS">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<meta name="twitter:image" content="${SITE_URL}/assets/opengraph.jpg">
<link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Montserrat:wght@800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer">
<link rel="stylesheet" href="/assets/style.css">
${gaSnippet()}
<script type="application/ld+json">${jsonLd(cityName)}</script>
</head>
<body>
${header()}
${isContact ? "" : `
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-badge"><i class="fas fa-gem"></i> Diamond Certified Contractor</div>
      <h1>${cityName ? `<span>${escapeHtml(cityName)}</span> Roofing Contractor` : `Bay Area's Trusted <span>Roofing Experts</span>`}</h1>
      <p>${cityName ? `Get a free, no-obligation roof estimate in ${escapeHtml(cityName)}. Diamond Certified quality backed by GAF Master Elite warranties.` : `Free estimates on roof replacement, repair, flat roofing, gutters, and skylights. Serving 63 Bay Area cities.`}</p>
      <div class="hero-buttons">
        <a href="#quote" class="btn btn-orange" data-testid="button-hero-quote"><i class="fas fa-file-alt"></i> Get Free Estimate</a>
        <a href="tel:${PHONE_RAW}" class="btn btn-white" data-testid="link-hero-call"><i class="fas fa-phone-alt"></i> Call ${PHONE}</a>
        <a href="${WHATSAPP}" target="_blank" rel="noreferrer noopener" class="btn btn-teal" data-testid="link-hero-whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</a>
      </div>
    </div>
  </div>
</section>`}
${trustBar()}
<section class="form-section" id="quote">
  <div class="container">
    <div class="form-grid">
      ${quoteForm(cityName)}
      ${infoSidebar(cityName)}
    </div>
  </div>
</section>
${testimonials()}
${servicesStrip()}
${footerHtml()}
<script src="/assets/script.js"></script>
</body>
</html>`;
}

function buildContactPage() {
  const title = "Contact ROOF EXPRESS — Free Roofing Estimate | Bay Area";
  const description = "Contact ROOF EXPRESS for a free roofing estimate. Call 650-666-5554, WhatsApp, or fill out our form. Diamond Certified, GAF Master Elite contractor serving 63 Bay Area cities.";
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<meta name="robots" content="index,follow,max-image-preview:large">
<link rel="canonical" href="${SITE_URL}/contact">
<meta property="og:type" content="website">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:image" content="${SITE_URL}/assets/opengraph.jpg">
<meta property="og:url" content="${SITE_URL}/contact">
<meta property="og:site_name" content="ROOF EXPRESS">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<meta name="twitter:image" content="${SITE_URL}/assets/opengraph.jpg">
<link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Montserrat:wght@800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer">
<link rel="stylesheet" href="/assets/style.css">
${gaSnippet()}
<script type="application/ld+json">${jsonLd()}</script>
</head>
<body>
${header()}
${trustBar()}
<section class="form-section" id="quote" style="padding-top:48px">
  <div class="container">
    <div style="text-align:center;margin-bottom:32px">
      <h1 style="font-size:clamp(24px,4vw,36px);color:var(--navy);margin-bottom:8px">Contact ROOF EXPRESS</h1>
      <p style="color:#666;font-size:16px;max-width:500px;margin:0 auto">Fill out the form below or reach us directly. We respond within 2 hours during business hours.</p>
    </div>
    <div class="form-grid">
      ${quoteForm()}
      ${infoSidebar()}
    </div>
  </div>
</section>
${testimonials()}
${servicesStrip()}
${footerHtml()}
<script src="/assets/script.js"></script>
</body>
</html>`;
}

// --- Build ---
console.log("Building quote.roof-ex.com...\n");

mkdirSync(path.join(OUT, "assets"), { recursive: true });

writeFileSync(path.join(OUT, "assets", "style.css"), CSS.trim());
writeFileSync(path.join(OUT, "assets", "script.js"), JS.trim());

const logoSrc = path.join(ROOT, "dist-cloudflare", "favicon-192x192.png");
if (existsSync(logoSrc)) {
  copyFileSync(logoSrc, path.join(OUT, "assets", "logo.png"));
}
for (const f of ["favicon.ico","favicon-32x32.png","apple-touch-icon.png","opengraph.jpg"]) {
  const src = path.join(ROOT, "dist-cloudflare", f);
  if (existsSync(src)) copyFileSync(src, path.join(OUT, "assets", f));
}

const mainPage = buildPage({
  title: "Free Roofing Estimate — Bay Area | ROOF EXPRESS",
  description: "Get a free roofing estimate from ROOF EXPRESS, a Diamond Certified and GAF Master Elite contractor serving 63 Bay Area cities. Call 650-666-5554.",
  canonical: SITE_URL,
  city: "",
  isContact: false
});
writeFileSync(path.join(OUT, "index.html"), mainPage);
console.log("  index.html");

const contactPage = buildContactPage();
writeFileSync(path.join(OUT, "contact.html"), contactPage);
console.log("  contact.html");

for (const cityName of CITIES) {
  const slug = slugify(cityName);
  const page = buildPage({
    title: `${cityName} Roofing — Free Estimate | ROOF EXPRESS`,
    description: `Free roofing estimate in ${cityName} from ROOF EXPRESS. Diamond Certified, GAF Master Elite contractor. Roof replacement, repair, flat roofing, gutters. Call 650-666-5554.`,
    canonical: `${SITE_URL}/${slug}`,
    city: cityName,
    isContact: false
  });
  writeFileSync(path.join(OUT, `${slug}.html`), page);
}
console.log(`  ${CITIES.length} city pages`);

const headers_content = `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Cross-Origin-Opener-Policy: same-origin

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;
writeFileSync(path.join(OUT, "_headers"), headers_content.trim());

const redirects = `
/contact/  /contact.html  200
`;
writeFileSync(path.join(OUT, "_redirects"), redirects.trim());

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
writeFileSync(path.join(OUT, "robots.txt"), robotsTxt.trim());

const sitemapUrls = [
  { loc: SITE_URL, priority: "1.0" },
  { loc: `${SITE_URL}/contact`, priority: "0.9" },
  ...CITIES.map(c => ({ loc: `${SITE_URL}/${slugify(c)}`, priority: "0.8" }))
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url><loc>${u.loc}</loc><priority>${u.priority}</priority></url>`).join("\n")}
</urlset>`;
writeFileSync(path.join(OUT, "sitemap.xml"), sitemap);

console.log(`\n=== Done! ${CITIES.length + 2} pages built in quote-site/ ===`);
console.log(`\nTo deploy:\n1. Create a new Cloudflare Pages project\n2. Upload the quote-site/ folder\n3. Add CNAME record: quote → cloudflare pages URL\n4. Set custom domain to quote.roof-ex.com`);

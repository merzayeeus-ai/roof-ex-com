# ROOF EXPRESS - Roofing Company Website

## Overview
ROOF EXPRESS is a full-stack web application designed as a marketing and brochure website for a Bay Area roofing contractor. It showcases residential, commercial, flat roofing, gutters, and skylight services, project galleries, testimonials, and offers contact/quote functionalities. The company holds Diamond Certified and GAF Master Elite certifications. The project aims to provide comprehensive online presence with strong SEO, featuring a wide array of service and informational pages for 60 cities, including unique city guides and local project showcases.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS v4 with custom brand colors (`brandNavy #134064`, `brandOrange #C04520`)
- **UI Components**: Minimal shadcn/ui integration (avatar, badge, button, card, sheet, toast)
- **State Management**: TanStack React Query
- **Fonts**: Inter and Montserrat from Google Fonts
- **Icons**: Lucide React and Font Awesome
- **Build Tool**: Vite

### Backend
- **Runtime**: Node.js with Express
- **Language**: TypeScript
- **API Pattern**: REST API (`/api` prefix)
- **Key API Routes**: `/api/reviews`, `/api/download-build`, `/sitemap.xml`, `/robots.txt`, `/feed.xml`, `/api/indexnow`, `/api/companycam/photos`, `/api/companycam/tags`

### Project Structure
- `client/`: React frontend (components, data, pages, hooks, utilities, assets)
- `server/`: Express backend (entry point, API routes, SEO injection, metadata, site config, static file serving, Vite middleware)
- `shared/`: Shared code (Zod validation schemas)

### Build System
- **Development**: Vite dev server proxied through Express.
- **Production**: Vite builds client to `dist/public`, esbuild bundles server to `dist/index.cjs`.
- **Cloudflare Build**: Script generates pre-rendered static site with security headers. Field Notes posts are automatically fetched from CompanyCam API during build, images downloaded to `images/field-notes/{postId}.jpg`, and full HTML files generated at `blog/field-notes/{postId}.html` with Article JSON-LD, BreadcrumbList, OG article tags, pre-rendered content, TOC, and related posts. A SPA shell template (`blog/_field-notes-post.html`) remains as fallback for any posts added between builds. Static `feed.xml` generated with all posts. Total output: 247 static pages + 23 Field Notes posts = 270 URLs in sitemap.

### Security Headers
- HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, Cross-Origin-Opener-Policy are implemented.

### Key Design Decisions
- **Fast Crawl System**: RSS feed (`/feed.xml`) auto-generated from CompanyCam wiki-tagged Field Notes with 15-min cache, IndexNow integration (Bing, Yandex, IndexNow API) via `POST /api/indexnow`, Google sitemap ping. IndexNow key file at `/{key}.txt`. Field Notes URLs use `changefreq: daily` in sitemap.
- **Static Site Generation**: All 247 static pages + 23 Field Notes posts are pre-rendered to HTML with embedded JSON-LD schema for optimal SEO. Field Notes are fetched live from CompanyCam API during each build.
- **Minimal Dependencies**: Focus on essential libraries and UI components.
- **SPA with Server-Side Fallback**: Client-side routing with server-side rendering for initial load and SEO.
- **Comprehensive SEO**: Extensive sitemap, image sitemap, `llms.txt`, `llms-full.txt`, speakable schema, social meta tags, rich SEO keywords, HowTo schema on all 8 service pages, SearchAction on homepage WebSite schema, enhanced E-E-A-T Person schema for founder. GTM permanently removed.
- **Accessibility (WCAG AA)**: Full contrast compliance — all `text-slate-400` on light backgrounds replaced with `text-slate-500` site-wide (footer `text-slate-400` on dark navy preserved). `aria-hidden="true"` on all FA icons, video captions, proper heading hierarchy. 44px min touch targets on gallery dots.
- **Dynamic Content**: Auto-generating city service and guide pages, dynamic project galleries from CompanyCam tags, expanded FAQ sections, and "Field Notes" posts from CompanyCam "wiki" tag with individual post pages (`/blog/field-notes/:postId`), search, city filter, three-tier layout (1 featured card → 5 medium cards → compact rows), and load-more pagination in batches of 30.
- **Field Notes SEO**: Per-post JSON-LD Article schema (headline, datePublished, wordCount, author), BreadcrumbList schema, Open Graph article meta tags (article:published_time, article:author, article:section, article:tag), auto-generated Table of Contents from headings, FAQ schema (FAQPage) on listing page, auto-internal-linking of service mentions, reading progress bar, share buttons, word count display, and per-post keywords meta tag.
- **Image Optimization**: Full WebP migration and preloading of LCP images.
- **City Field Notes**: Shared `CityFieldNotes` component (`client/src/components/city-field-notes.tsx`) fetches wiki-tagged photos matching the city name and uses the same three-tier layout as the main Field Notes page (1 featured card → 5 medium cards → compact rows with load-more in batches of 30). Placed on both city pages and city guide pages after the gallery section. Auto-hides when no field notes exist for that city. Scales to 100+ posts per city.
- **CompanyCam Caching**: All frontend `fetch()` calls to CompanyCam API use `cache: "no-store"` to always get fresh data. Server-side tag cache is 5 minutes, photo response cache headers are 5 minutes. RSS feed cache is 15 minutes.
- **Internal Linking Strategy**: Field Notes cross-links on all 7 service pages, city-specific field note links on all 60 city pages and city guide pages, related article links on service pages, "Resources" mega menu in nav (Field Notes, City Guides, Blog, FAQ, Financing, Methodology), and 5-column footer (Services, Company, Resources, Popular Articles, Contact/Service Areas).
- **Navigation Architecture**: Desktop mega menu with "Services", "About", "Resources", and "Service Areas" dropdowns. Mobile full-screen overlay with categorized links. Sticky mobile footer bar with Call/WhatsApp/Quote.

## External Dependencies

### External Services & Assets
- **Google Fonts**: Inter, Montserrat.
- **Font Awesome**: Icon library.
- **External Images**: Hosted on `img1.wsimg.com`.
- **Social Media**: Facebook, Instagram, YouTube, TikTok, Yelp.
- **CompanyCam**: Integration for dynamic project galleries.
- **City Hall Photos**: All 60 city hall/landmark photos stored locally as WebP in `client/src/assets/images/city-halls/`.

### Key npm Packages
- `wouter`
- `@tanstack/react-query`
- `express`
- `zod`
- `compression`
- `helmet`
- `express-rate-limit`
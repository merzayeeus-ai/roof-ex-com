import { useState, useCallback } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import { useSEO } from "@/hooks/use-seo";

interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
  platform: string;
  source: string;
}

interface PlatformData {
  platform: string;
  rating: number;
  totalReviews: number;
  url: string;
  reviews: Review[];
}

interface ReviewsResponse {
  google: PlatformData;
  yelp: PlatformData;
  diamondCertified: PlatformData;
  lastUpdated: string;
}

const trustFactors = [
  { title: "No Subcontractors", description: "Every crew member is a trained ROOF EXPRESS employee. No outsourcing, no variable quality.", icon: "fas fa-users" },
  { title: "Photo Documentation", description: "Every project is documented with before/after photos. You see what we see.", icon: "fas fa-camera" },
  { title: "Real-Time Updates", description: "Live project updates through our Jobber portal. Track your project from your phone.", icon: "fas fa-mobile-alt" },
  { title: "Manufacturer Partnerships", description: "Direct partnerships with GAF, CertainTeed, and Velux for premium materials at better prices.", icon: "fas fa-handshake" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <i
          key={s}
          className={`fas fa-star text-sm ${
            s <= Math.round(rating) ? "text-yellow-400" : "text-slate-200"
          }`}
        ></i>
      ))}
    </div>
  );
}

function getPlatformStyle(platform: string) {
  switch (platform) {
    case "google":
      return { color: "text-blue-500", bg: "bg-blue-50", icon: "fab fa-google", name: "Google" };
    case "yelp":
      return { color: "text-red-500", bg: "bg-red-50", icon: "fab fa-yelp", name: "Yelp" };
    case "diamond":
      return { color: "text-brandOrange", bg: "bg-brandOrange/10", icon: "fas fa-gem", name: "Diamond Certified" };
    default:
      return { color: "text-slate-500", bg: "bg-slate-50", icon: "fas fa-star", name: "Review" };
  }
}

function ReviewCard({ review }: { review: Review }) {
  const style = getPlatformStyle(review.platform);

  return (
    <div
      className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
      data-testid={`card-review-${review.platform}-${review.author.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={review.rating} />
        <span className={`inline-flex items-center gap-1.5 ${style.color} text-[10px] font-black uppercase tracking-wider ${style.bg} px-3 py-1 rounded-full`}>
          <i aria-hidden="true" className={style.icon}></i> {style.name}
        </span>
      </div>
      <div className="relative mb-6 flex-1">
        <i aria-hidden="true" className="fas fa-quote-left text-slate-100 text-3xl absolute -top-1 -left-1"></i>
        <p className="text-slate-600 leading-relaxed relative z-10 pl-4">
          {review.text}
        </p>
      </div>
      <div className="border-t border-slate-100 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full ${style.bg} flex items-center justify-center ${style.color} font-black text-sm`}>
              {review.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-black text-brandNavy text-sm">{review.author}</p>
              <p className="text-xs text-slate-500 font-bold">{review.time}</p>
            </div>
          </div>
          <span className="inline-block bg-brandNavy/5 text-brandNavy text-[9px] font-black uppercase px-2.5 py-1 rounded-full tracking-wider">
            {review.source}
          </span>
        </div>
      </div>
    </div>
  );
}

function WalkthroughVideo() {
  const [playing, setPlaying] = useState(false);
  const handlePlay = useCallback(() => setPlaying(true), []);

  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/10 relative">
        {!playing ? (
          <button onClick={handlePlay} className="relative w-full block group cursor-pointer" data-testid="button-play-walkthrough">
            <img src="/images/walkthrough-sf-thumb.webp" alt="Final walkthrough with San Francisco client on rooftop" className="w-full aspect-video object-cover" width={800} height={450} />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 bg-brandOrange rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-play text-white text-2xl ml-1"></i>
              </div>
            </div>
          </button>
        ) : (
          <iframe
            src="https://customer-uavvndfddze0763y.cloudflarestream.com/dcea347ce5ef0f474af713171856e648/iframe?autoplay=true"
            className="w-full aspect-video"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            title="Final Walkthrough — San Francisco Client"
            data-testid="video-reviews-walkthrough"
          ></iframe>
        )}
      </div>
      <p className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest mt-4">Final Walkthrough — San Francisco Client</p>
    </div>
  );
}

function ReviewsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 animate-pulse">
          <div className="flex items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="w-4 h-4 bg-slate-200 rounded"></div>
            ))}
          </div>
          <div className="space-y-3 mb-6">
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            <div className="h-4 bg-slate-200 rounded w-4/6"></div>
          </div>
          <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
            <div>
              <div className="h-4 bg-slate-200 rounded w-24 mb-1"></div>
              <div className="h-3 bg-slate-200 rounded w-16"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Reviews() {
  useSEO("Customer Reviews — 5-Star Rated Roofer | ROOF EXPRESS", "Hundreds of verified 5-star reviews on Google, Yelp & Diamond Certified. See why Bay Area homeowners trust ROOF EXPRESS.");
  const { data, isLoading } = useQuery<ReviewsResponse>({
    queryKey: ["/api/reviews"],
    staleTime: 60 * 60 * 1000,
    retry: 1,
  });

  const allReviews: Review[] = [];
  if (data?.google?.reviews) allReviews.push(...data.google.reviews);
  if (data?.yelp?.reviews) allReviews.push(...data.yelp.reviews);
  if (data?.diamondCertified?.reviews) allReviews.push(...data.diamondCertified.reviews);

  const googleRating = data?.google?.rating ?? 5.0;
  const googleTotal = data?.google?.totalReviews ?? 84;
  const yelpRating = data?.yelp?.rating ?? 4.9;
  const yelpTotal = data?.yelp?.totalReviews ?? 199;
  const diamondRating = data?.diamondCertified?.rating ?? 4.7;
  const diamondSurveys = data?.diamondCertified?.totalReviews ?? 30;

  return (
    <Layout>

      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/completed-shingle-roof.webp" alt="Completed shingle roof by ROOF EXPRESS" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={1200} height={800} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-star mr-2"></i> Customer Reviews
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-reviews-hero-title">
              ROOF EXPRESS Reviews, <span className="text-brandOrangeLight">Awards & Customer Proof</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-reviews-hero-subtitle">
              Diamond Certified quality backed by hundreds of verified reviews across Google, Yelp, and independent surveys.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 bg-brandNavy border-b border-white/10">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8">
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-star mr-1.5 text-brandOrangeLight text-[9px]"></i> 5.0★ Google Rating
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-gem mr-1.5 text-brandOrangeLight text-[9px]"></i> Diamond Certified
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-check-circle mr-1.5 text-brandOrangeLight text-[9px]"></i> 84 Google Reviews
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-check-circle mr-1.5 text-brandOrangeLight text-[9px]"></i> 199 Yelp Reviews
            </span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a
              href="https://www.google.com/maps?cid=13257844389379386946"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              data-testid="link-reviews-google"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-500 text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fab fa-google"></i>
              </div>
              <h2 className="text-xl font-black text-brandNavy mb-2 uppercase">Google Reviews</h2>
              <div className="flex items-center justify-center gap-1 mb-3">
                {[1,2,3,4,5].map(s => (
                  <i key={s} aria-hidden="true" className="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              <p className="text-3xl font-black text-brandOrange mb-1" data-testid="text-google-rating">{googleRating}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{googleTotal}+ Reviews</p>
              <p className="text-sm text-brandOrange font-bold mt-4">Read on Google <i aria-hidden="true" className="fas fa-external-link-alt ml-1 text-xs"></i></p>
            </a>

            <a
              href="https://www.diamondcertified.org/report/roof-express/"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              data-testid="link-reviews-diamond"
            >
              <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-gem"></i>
              </div>
              <h2 className="text-xl font-black text-brandNavy mb-2 uppercase">Diamond Certified</h2>
              <div className="flex items-center justify-center gap-1 mb-3">
                {[1,2,3,4,5].map(s => (
                  <i key={s} aria-hidden="true" className={`fas fa-star ${s <= 4 ? "text-yellow-400" : "text-yellow-300"}`}></i>
                ))}
              </div>
              <p className="text-3xl font-black text-brandOrange mb-1" data-testid="text-diamond-rating">{diamondRating}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{diamondSurveys} Verified Surveys</p>
              <p className="text-sm text-brandOrange font-bold mt-4">View Report <i aria-hidden="true" className="fas fa-external-link-alt ml-1 text-xs"></i></p>
            </a>

            <a
              href="https://www.yelp.com/biz/roof-express-san-francisco"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              data-testid="link-reviews-yelp"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-500 text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fab fa-yelp"></i>
              </div>
              <h2 className="text-xl font-black text-brandNavy mb-2 uppercase">Yelp Reviews</h2>
              <div className="flex items-center justify-center gap-1 mb-3">
                {[1,2,3,4,5].map(s => (
                  <i key={s} aria-hidden="true" className={`fas fa-star ${s <= 4 ? "text-yellow-400" : "text-yellow-300"}`}></i>
                ))}
              </div>
              <p className="text-3xl font-black text-brandOrange mb-1" data-testid="text-yelp-rating">{yelpRating}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{yelpTotal}+ Reviews</p>
              <p className="text-sm text-brandOrange font-bold mt-4">Read on Yelp <i aria-hidden="true" className="fas fa-external-link-alt ml-1 text-xs"></i></p>
            </a>
          </div>

          <div className="max-w-md mx-auto">
            <Link
              href="/gallery"
              className="block bg-brandGrey rounded-[2rem] border border-slate-100 text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              data-testid="link-reviews-gallery"
            >
              <div className="w-full h-48 overflow-hidden">
                <img src="/images/gallery-premium-shingle.webp" alt="Completed premium shingle roof by ROOF EXPRESS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={800} height={533} loading="lazy" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-black text-brandNavy mb-2 uppercase">Visual Proof</h2>
                <p className="text-sm text-slate-500 mb-4">Browse our project gallery to see the quality of our work firsthand.</p>
                <span className="text-sm text-brandOrange font-bold">View Gallery <i aria-hidden="true" className="fas fa-arrow-right ml-1"></i></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandNavy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/20 text-brandOrangeLight text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <i aria-hidden="true" className="fas fa-video mr-2"></i>Video Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Hear It From <span className="text-brandOrangeLight">Our Customers</span></h2>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">Real homeowners sharing their experience working with ROOF EXPRESS</p>
          </div>

          <WalkthroughVideo />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Maria", src: "/videos/testimonial-maria.mp4", poster: "/videos/testimonial-maria-thumb.webp", caption: "/videos/captions-testimonial-maria.vtt", location: "Bay Area Homeowner" },
              { name: "David", src: "/videos/testimonial-merzayee.mp4", poster: "/videos/testimonial-merzayee-thumb.webp", caption: "/videos/captions-testimonial-merzayee.vtt", location: "Bay Area Homeowner" },
              { name: "Mide", src: "/videos/testimonial-ppal.mp4", poster: "/videos/testimonial-ppal-thumb.webp", caption: "/videos/captions-testimonial-ppal.vtt", location: "Bay Area Homeowner" },
              { name: "Clara", src: "/videos/testimonial-roofing.mp4", poster: "/videos/testimonial-roofing-thumb.webp", caption: "/videos/captions-testimonial-roofing.vtt", location: "Bay Area Homeowner" },
            ].map((t) => (
              <div key={t.name} className="bg-white/10 backdrop-blur rounded-2xl border border-white/10 overflow-hidden group hover:-translate-y-1 transition-transform duration-300" data-testid={`video-testimonial-${t.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="relative">
                  <video
                    src={t.src}
                    poster={t.poster}
                    controls
                    playsInline
                    preload="none"
                    className="w-full aspect-video object-cover"
                  >
                    <track kind="captions" src={t.caption} srcLang="en" label="English" />
                  </video>
                </div>
                <div className="p-4 text-center">
                  <p className="font-black text-white text-sm uppercase tracking-wide">{t.name}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{t.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl border border-white/10 overflow-hidden">
              <video
                src="/videos/roof-express-brand.mp4"
                poster="/videos/roof-express-brand-thumb.webp"
                controls
                playsInline
                preload="none"
                className="w-full aspect-video object-cover"
                data-testid="video-reviews-promo"
              >
                <track kind="captions" src="/videos/captions-brand.vtt" srcLang="en" label="English" />
              </video>
              <div className="p-4 text-center">
                <p className="font-black text-white text-sm uppercase tracking-wide">ROOF EXPRESS Promo</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">See Our Team in Action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brandNavy text-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="stat-projects">
              <p className="text-4xl md:text-5xl font-black text-brandOrangeLight mb-2">5,000+</p>
              <p className="text-xs font-black uppercase tracking-widest text-white/70">Projects Completed</p>
            </div>
            <div className="text-center" data-testid="stat-rating">
              <p className="text-4xl md:text-5xl font-black text-brandOrangeLight mb-2">{googleRating}</p>
              <p className="text-xs font-black uppercase tracking-widest text-white/70">Google Rating</p>
            </div>
            <div className="text-center" data-testid="stat-licensed">
              <p className="text-4xl md:text-5xl font-black text-brandOrangeLight mb-2">100%</p>
              <p className="text-xs font-black uppercase tracking-widest text-white/70">Licensed & Insured</p>
            </div>
            <div className="text-center" data-testid="stat-warranty">
              <p className="text-4xl md:text-5xl font-black text-brandOrangeLight mb-2">50yr</p>
              <p className="text-xs font-black uppercase tracking-widest text-white/70">Max Warranty</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <i aria-hidden="true" className="fas fa-check-circle mr-2"></i>Sourced From Google & Diamond Certified
            </span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-testimonials-title">
              Customer <span className="text-brandOrange">Reviews</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Reviews sourced from publicly available platforms. Visit each platform directly for the most current reviews.
            </p>
          </div>

          {isLoading ? (
            <ReviewsSkeleton />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allReviews.map((review, idx) => (
                  <ReviewCard key={`${review.platform}-${idx}`} review={review} />
                ))}
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-4 mt-12">
                <a
                  href="https://www.google.com/maps?cid=13257844389379386946"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-blue-600 transition shadow-lg"
                  data-testid="link-all-google-reviews"
                >
                  <i aria-hidden="true" className="fab fa-google"></i> All {googleTotal}+ Google Reviews
                </a>
                <a
                  href="https://www.yelp.com/biz/roof-express-san-francisco"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-red-600 transition shadow-lg"
                  data-testid="link-all-yelp-reviews"
                >
                  <i aria-hidden="true" className="fab fa-yelp"></i> All {yelpTotal}+ Yelp Reviews
                </a>
                <a
                  href="https://www.diamondcertified.org/report/roof-express/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 bg-brandOrange text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-brandOrange/90 transition shadow-lg"
                  data-testid="link-all-diamond-reviews"
                >
                  <i aria-hidden="true" className="fas fa-gem"></i> {diamondSurveys} Diamond Certified Surveys
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Our Difference</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-trust-title">
              Why Homeowners <span className="text-brandOrange">Trust Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFactors.map((factor, idx) => (
              <div
                key={idx}
                className="bg-brandGrey p-8 rounded-[2rem] text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                data-testid={`card-trust-${idx}`}
              >
                <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-3xl group-hover:scale-110 transition-transform">
                  <i aria-hidden="true" className={factor.icon}></i>
                </div>
                <h3 className="text-lg font-black text-brandNavy mb-3 uppercase">{factor.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Our Philosophy</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-reviews-philosophy">Reviews are the Result, <span className="text-brandOrange">Not the Goal</span></h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              We don't chase reviews. We chase perfection. Great reviews are simply a byproduct of doing the work the right way, every time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-xl text-center group hover:shadow-2xl transition-all" data-testid="card-philosophy-schedules">
              <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-calendar-check"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy mb-3 uppercase">Predictable Schedules</h3>
              <p className="text-sm text-slate-500 leading-relaxed">We show up when we say we will. Our 2-3 day completion timeline is a promise, not an estimate. Real-time updates keep you informed at every stage.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-xl text-center group hover:shadow-2xl transition-all" data-testid="card-philosophy-cleanup">
              <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-broom"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy mb-3 uppercase">Daily Clean-Up</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Every day ends with a magnetic sweep of your property and full debris removal. Your yard looks better when we leave than when we arrived.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-xl text-center group hover:shadow-2xl transition-all" data-testid="card-philosophy-warranty">
              <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brandOrange text-3xl group-hover:scale-110 transition-transform">
                <i aria-hidden="true" className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-black text-brandNavy mb-3 uppercase">Warranty Integrity</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Our warranties are backed by both the manufacturer and our own workmanship guarantee. If something isn't right, we make it right — period.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase tracking-[0.2em] mb-4">Share Your Experience</span>
   <h2 className="text-4xl md:text-6xl font-black text-brandNavy mb-6" data-testid="text-leave-review">Leave a <span className="text-brandOrange">Review</span></h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Had a great experience with ROOF EXPRESS? We'd love to hear about it. Your feedback helps other Bay Area homeowners make informed decisions.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href="https://www.google.com/maps?cid=13257844389379386946"
              target="_blank"
              rel="noreferrer noopener"
              className="w-full md:w-auto bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-blue-600 transition shadow-lg flex items-center justify-center gap-3"
              data-testid="link-leave-review-google"
            >
              <i aria-hidden="true" className="fab fa-google"></i> Review on Google
            </a>
            <a
              href="https://www.yelp.com/biz/roof-express-san-francisco"
              target="_blank"
              rel="noreferrer noopener"
              className="w-full md:w-auto bg-red-500 text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-red-600 transition shadow-lg flex items-center justify-center gap-3"
              data-testid="link-leave-review-yelp"
            >
              <i aria-hidden="true" className="fab fa-yelp"></i> Review on Yelp
            </a>
          </div>
        </div>
      </section>

      <CTASection />
      <NearbyAreas />
    </Layout>
  );
}

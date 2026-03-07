import { useRef } from "react";

const platforms = [
  {
    name: "Google",
    rating: "5.0",
    stars: 5,
    reviews: "85 reviews",
    icon: "fab fa-google",
    color: "#4285F4",
    url: "https://www.google.com/maps?cid=13257844389379386946",
  },
  {
    name: "Diamond Certified",
    rating: "Highest",
    stars: 5,
    reviews: "Rated",
    icon: "fas fa-gem",
    color: "#0EA5E9",
    url: "https://www.diamondcertified.org/report/roof-express/",
  },
  {
    name: "Yelp",
    rating: "4.9",
    stars: 5,
    reviews: "201 reviews",
    icon: "fab fa-yelp",
    color: "#D32323",
    url: "https://www.yelp.com/biz/roof-express-san-francisco",
  },
  {
    name: "BBB",
    rating: "A+",
    stars: 5,
    reviews: "Accredited",
    icon: "fas fa-shield-alt",
    color: "#005DAA",
    url: "https://www.bbb.org/us/ca/san-francisco/profile/roofing-contractors/roof-express-1116-926196",
  },
  {
    name: "Networx",
    rating: "5.0",
    stars: 5,
    reviews: "Verified",
    icon: "fas fa-network-wired",
    color: "#00B4D8",
    url: "https://www.networx.com/c.roof-express",
  },
  {
    name: "Trust Analytica",
    rating: "5.0",
    stars: 5,
    reviews: "Verified",
    icon: "fas fa-check-circle",
    color: "#10B981",
    url: "https://trustanalytica.org/us/ca/san-francisco/reviews/roof-express",
  },
];

function StarRating({ count, color }: { count: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <i
          key={i}
          aria-hidden="true"
          className="fas fa-star text-[9px]"
          style={{ color }}
        />
      ))}
    </div>
  );
}

export default function ReviewShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-12 md:py-16 bg-brandNavy overflow-hidden" data-testid="section-review-showcase">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #C04520 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      <div className="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-3 mb-2">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-brandOrange/20 flex items-center justify-center">
              <i aria-hidden="true" className="fas fa-star text-brandOrangeLight text-xs md:text-sm"></i>
            </div>
            <div className="text-left">
              <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-white" data-testid="text-review-showcase-title">
                Verified Across Platforms
              </h3>
              <p className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-wider">
                Trusted by Bay Area homeowners
              </p>
            </div>
          </div>
          <div className="mt-2 md:mt-3">
            <a
              href="/reviews"
              className="text-[10px] md:text-xs font-black text-brandOrangeLight uppercase tracking-widest hover:text-white transition inline-flex items-center gap-1.5"
              data-testid="link-review-showcase-all"
            >
              All Reviews <i aria-hidden="true" className="fas fa-arrow-right text-[9px]"></i>
            </a>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-center gap-3 md:gap-4"
          data-testid="strip-review-platforms"
        >
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center bg-white/10 backdrop-blur border border-white/10 hover:border-brandOrange/40 rounded-2xl p-4 md:p-5 md:flex-row md:text-left md:items-center md:gap-4 hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5 md:min-w-[220px]"
              data-testid={`card-review-${platform.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div
                className="w-11 h-11 md:w-11 md:h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 mb-2.5 md:mb-0"
              >
                <i
                  aria-hidden="true"
                  className={`${platform.icon} text-lg`}
                  style={{ color: platform.color }}
                ></i>
              </div>
              <div className="min-w-0">
                <div className="flex items-center justify-center md:justify-start gap-1.5 md:gap-2">
                  <span className="text-sm md:text-base font-black text-white">{platform.rating}</span>
                  <StarRating count={platform.stars} color="#F59E0B" />
                </div>
                <div className="flex items-center justify-center md:justify-start gap-1 md:gap-1.5 mt-0.5">
                  <span className="text-[10px] md:text-[11px] font-bold text-white/70 truncate">{platform.name}</span>
                  <span className="text-[9px] md:text-[10px] font-bold text-white/40">· {platform.reviews}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

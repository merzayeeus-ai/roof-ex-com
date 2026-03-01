import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useParams } from "wouter";
import Layout from "@/components/layout";
import { NearbyAreas, CTASection } from "@/components/page-bottom";
import CityFieldNotes from "@/components/city-field-notes";
import { cities } from "@/data/cities";
import { getCityHallImage, getCityPhotoCaption, isCityHallPhoto } from "@/data/city-hall-photos";
import { useSEO } from "@/hooks/use-seo";

const popularCities = [
  { name: "San Francisco", slug: "san-francisco" },
  { name: "San Jose", slug: "san-jose" },
  { name: "Oakland", slug: "oakland" },
  { name: "Palo Alto", slug: "palo-alto" },
  { name: "Daly City", slug: "daly-city" },
  { name: "Pacifica", slug: "pacifica" },
  { name: "Mountain View", slug: "mountain-view" },
  { name: "Menlo Park", slug: "menlo-park" },
  { name: "Redwood City", slug: "redwood-city" },
  { name: "Berkeley", slug: "berkeley" },
  { name: "Fremont", slug: "fremont" },
  { name: "San Mateo", slug: "san-mateo" },
];

const relatedGuides = [
  { title: "Bay Area Roofing Cost Factors", slug: "bay-area-roofing-cost-factors" },
  { title: "Roof Repair vs Replacement", slug: "roof-repair-vs-replacement" },
  { title: "Best Roofing Materials for Coastal Cities", slug: "best-roofing-materials-coastal-cities" },
  { title: "How Long Does a Roof Last in California?", slug: "how-long-does-a-roof-last-california" },
];

const residentialPhotos = [
  "/images/shingle-roof-finish.webp",
  "/images/shingle-roof-house.webp",
  "/images/shingle-roof-sf.webp",
  "/images/completed-shingle-roof.webp",
  "/images/asphalt-shingle-roof.webp",
  "/images/asphalt-shingle-closeup.webp",
  "/images/asphalt-shingle-crew.webp",
  "/images/roofing-dark-shingles.webp",
  "/images/nailing-shingle.webp",
  "/images/roofer-on-deck.webp",
];

const flatPhotos = [
  "/images/torch-down-worksite.webp",
  "/images/torch-down-roofing.webp",
  "/images/torch-down-roll.webp",
  "/images/torch-down-repair-closeup.webp",
  "/images/completed-flat-roof.webp",
  "/images/commercial-roofing-tpo.webp",
  "/images/commercial-roof-finish.webp",
  "/images/commercial-roofs-aerial.webp",
];

interface CityPhoto {
  id: string;
  img: string;
  fullImg: string;
  date: string;
  dateLabel: string;
  description: string;
}

function formatPhotoDate(timestamp: number): { date: string; dateLabel: string } {
  const d = new Date(timestamp * 1000);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return {
    date: `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
    dateLabel: `${months[d.getMonth()]} ${d.getFullYear()}`,
  };
}


function CityGalleryLightbox({ photos, activeIdx, onClose, onSelect, cityName }: {
  photos: CityPhoto[]; activeIdx: number; onClose: () => void; onSelect: (i: number) => void; cityName: string;
}) {
  const thumbStripRef = useRef<HTMLDivElement>(null);

  const goPrev = useCallback(() => onSelect((activeIdx - 1 + photos.length) % photos.length), [activeIdx, photos.length, onSelect]);
  const goNext = useCallback(() => onSelect((activeIdx + 1) % photos.length), [activeIdx, photos.length, onSelect]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKey); };
  }, [onClose, goPrev, goNext]);

  useEffect(() => {
    if (thumbStripRef.current) {
      const thumb = thumbStripRef.current.children[activeIdx] as HTMLElement;
      if (thumb) thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeIdx]);

  const photo = photos[activeIdx];

  return (
    <div className="fixed inset-0 z-[100] flex flex-col" role="dialog" aria-modal="true" aria-label="Photo gallery lightbox" data-testid="dialog-city-lightbox">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={onClose} />
      <button onClick={onClose} className="absolute top-4 right-4 z-[110] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" data-testid="button-city-lightbox-close" aria-label="Close gallery">
        <i aria-hidden="true" className="fas fa-times text-lg"></i>
      </button>

      <div className="relative z-[105] flex-1 flex items-center justify-center px-4 pt-4 pb-2 min-h-0">
        <button onClick={goPrev} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110" data-testid="button-city-lightbox-prev" aria-label="Previous photo">
          <i aria-hidden="true" className="fas fa-chevron-left text-lg"></i>
        </button>
        <button onClick={goNext} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110" data-testid="button-city-lightbox-next" aria-label="Next photo">
          <i aria-hidden="true" className="fas fa-chevron-right text-lg"></i>
        </button>

        <div className="max-w-5xl w-full flex flex-col items-center">
          <div className="w-full max-h-[60vh] md:max-h-[65vh] rounded-2xl overflow-hidden shadow-2xl bg-black/50">
            <img
              src={photo.fullImg}
              alt={photo.description || `Roofing project in ${cityName} — ${photo.date}`}
              className="w-full h-full object-contain transition-opacity duration-300"
              data-testid="img-city-lightbox"
            />
          </div>
          <div className="mt-4 text-center">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest inline-flex items-center gap-1.5">
                <i aria-hidden="true" className="fas fa-map-marker-alt text-[9px]"></i> {cityName}
              </span>
              <span className="bg-white/10 text-white/80 text-[10px] font-bold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                <i aria-hidden="true" className="fas fa-calendar-alt text-[9px]"></i> {photo.date}
              </span>
              <span className="bg-white/10 text-white/60 text-[10px] font-bold px-3 py-1 rounded-full">
                {activeIdx + 1} / {photos.length}
              </span>
            </div>
            {photo.description && (
              <p className="text-white/90 text-sm leading-relaxed mt-3 max-w-lg mx-auto" data-testid="text-city-lightbox-desc">
                {photo.description}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-[105] shrink-0 px-4 pb-4 pt-2">
        <div
          ref={thumbStripRef}
          className="flex gap-2 overflow-x-auto py-2 px-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent snap-x"
          data-testid="strip-city-lightbox-thumbs"
        >
          {photos.map((p, i) => (
            <button
              key={p.id}
              onClick={() => onSelect(i)}
              className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden transition-all duration-300 snap-center ${
                i === activeIdx
                  ? "ring-2 ring-brandOrange scale-105 opacity-100"
                  : "ring-1 ring-white/10 opacity-50 hover:opacity-80 hover:ring-white/30"
              }`}
              data-testid={`button-city-lightbox-thumb-${p.id}`}
              aria-label={`View photo ${i + 1}`}
            >
              <img src={p.img} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function CityGallery({ cityName }: { cityName: string }) {
  const [photos, setPhotos] = useState<CityPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"showcase" | "grid">("showcase");
  const thumbStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`/api/companycam/photos?tag=${encodeURIComponent(cityName)}`, { cache: "no-store" })
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => {
        setPhotos(data.photos.map((p: { id: string; thumbnail: string; fullSize: string; createdAt: number; description?: string }) => {
          const { date, dateLabel } = formatPhotoDate(p.createdAt);
          return { id: p.id, img: p.thumbnail, fullImg: p.fullSize, date, dateLabel, description: p.description || "" };
        }));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [cityName]);

  const goPrev = useCallback(() => {
    setActiveIdx(prev => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);
  const goNext = useCallback(() => {
    setActiveIdx(prev => (prev + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    if (thumbStripRef.current) {
      const thumb = thumbStripRef.current.children[activeIdx] as HTMLElement;
      if (thumb) thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeIdx]);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);

  if (loading || photos.length === 0) return null;

  const activePhoto = photos[activeIdx];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white" data-testid="section-city-gallery">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <div>
            <span className="bg-green-700 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-4 inline-flex items-center gap-1.5 tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
              Live Project Photos
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy">
              Our Work in <span className="text-brandOrange">{cityName}</span>
            </h2>
            <p className="text-slate-600 font-medium mt-2 max-w-xl">
              Browse {photos.length} recent roofing projects completed by ROOF EXPRESS in {cityName}, CA — from full roof replacements to precision repairs, every job backed by our Diamond Certified guarantee.
            </p>
          </div>
          <div className="flex items-stretch gap-3">
            <div className="flex items-center gap-1 bg-brandNavy/5 border border-brandNavy/10 rounded-xl p-1.5">
              <button
                onClick={() => setViewMode("showcase")}
                className={`px-3.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${viewMode === "showcase" ? "bg-brandNavy text-white shadow-md" : "text-slate-500 hover:text-brandNavy"}`}
                data-testid="button-city-view-showcase"
                aria-label="Showcase view"
              >
                <i aria-hidden="true" className="fas fa-image"></i>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${viewMode === "grid" ? "bg-brandNavy text-white shadow-md" : "text-slate-500 hover:text-brandNavy"}`}
                data-testid="button-city-view-grid"
                aria-label="Grid view"
              >
                <i aria-hidden="true" className="fas fa-th"></i>
              </button>
            </div>
            <div className="flex items-center gap-3 bg-brandNavy/5 border border-brandNavy/10 rounded-xl px-5 shrink-0">
              <p className="text-lg font-black text-brandNavy">{photos.length}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Photos</p>
            </div>
          </div>
        </div>

        {viewMode === "showcase" ? (
          <div data-testid="city-gallery-showcase" className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 py-3 mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-700 inline-flex items-center gap-1.5">
                  <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange text-[10px]"></i> {cityName}, CA
                </span>
                <span className="text-xs font-bold text-slate-500 inline-flex items-center gap-1.5">
                  <i aria-hidden="true" className="fas fa-calendar-alt text-[10px]"></i> {activePhoto.date}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brandNavy text-sm font-black">{activeIdx + 1}<span className="text-slate-400 text-xs font-bold"> / {photos.length}</span></span>
                <button
                  onClick={() => setLightboxIdx(activeIdx)}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-brandOrange/10 text-slate-500 hover:text-brandOrange flex items-center justify-center transition-all"
                  data-testid="button-city-showcase-expand"
                  aria-label="View full size"
                >
                  <i aria-hidden="true" className="fas fa-expand text-xs"></i>
                </button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-brandNavy shadow-2xl">
              <div className="relative aspect-[4/3]">
                <img
                  src={activePhoto.fullImg}
                  alt={activePhoto.description || `Roofing project in ${cityName} — ${activePhoto.date}`}
                  className="w-full h-full object-cover bg-black/40 transition-opacity duration-500"
                  data-testid="img-city-showcase-main"
                />
                <button
                  onClick={goPrev}
                  className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
                  data-testid="button-city-showcase-prev"
                  aria-label="Previous photo"
                >
                  <i aria-hidden="true" className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
                  data-testid="button-city-showcase-next"
                  aria-label="Next photo"
                >
                  <i aria-hidden="true" className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            {activePhoto.description && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-5 py-4 mt-3">
                <p className="text-sm text-slate-700 font-medium leading-relaxed line-clamp-2" data-testid="text-city-showcase-desc">
                  {activePhoto.description}
                </p>
              </div>
            )}

            <div className="mt-4 relative">
              <div
                ref={thumbStripRef}
                className="flex gap-2 overflow-x-auto py-2 px-1 snap-x scroll-smooth"
                style={{ scrollbarWidth: "thin" }}
                data-testid="strip-city-gallery-thumbs"
              >
                {photos.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`shrink-0 rounded-xl overflow-hidden transition-all duration-300 snap-center ${
                      idx === activeIdx
                        ? "w-20 h-20 md:w-24 md:h-24 ring-3 ring-brandOrange shadow-lg scale-105"
                        : "w-16 h-16 md:w-20 md:h-20 ring-1 ring-gray-200 opacity-60 hover:opacity-100 hover:ring-brandOrange/50 hover:shadow-md"
                    }`}
                    data-testid={`button-city-thumb-${photo.id}`}
                    aria-label={`View photo ${idx + 1}${photo.description ? `: ${photo.description}` : ""}`}
                  >
                    <img
                      src={photo.img}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-4 gap-0.5">
              {photos.length > 12 ? (
                <>
                  <span className="text-[10px] text-slate-500 font-bold">{activeIdx + 1} / {photos.length}</span>
                </>
              ) : (
                photos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className="rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label={`Go to photo ${idx + 1}`}
                    data-testid={`dot-city-gallery-${idx}`}
                  >
                    <span className={`block rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-5 h-2 bg-brandOrange"
                        : "w-2 h-2 bg-brandNavy/20"
                    }`} />
                  </button>
                ))
              )}
            </div>
          </div>
        ) : (
          <div data-testid="city-gallery-grid">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {photos.map((photo, idx) => (
                <div
                  key={photo.id}
                  className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white ring-1 ring-gray-100 hover:ring-brandOrange/30"
                  onClick={() => setLightboxIdx(idx)}
                  data-testid={`card-city-photo-${photo.id}`}
                >
                  <div className="px-3 py-2 flex items-center justify-between border-b border-gray-100">
                    <p className="text-[10px] font-bold text-slate-600 flex items-center gap-1">
                      <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange text-[8px]"></i>
                      {cityName}, CA
                    </p>
                    <p className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                      <i aria-hidden="true" className="fas fa-calendar text-[8px]"></i>
                      {photo.dateLabel}
                    </p>
                  </div>
                  <div className="relative overflow-hidden aspect-[5/4]">
                    <img
                      src={photo.img}
                      alt={photo.description || `Roofing project in ${cityName} — ${photo.date}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={2160}
                      height={1620}
                      data-testid={`img-city-photo-${photo.id}`}
                    />
                  </div>
                  {photo.description && (
                    <div className="px-3 py-2.5">
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2" data-testid={`text-city-desc-${photo.id}`}>
                        {photo.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {lightboxIdx !== null && photos[lightboxIdx] && (
        <CityGalleryLightbox
          photos={photos}
          activeIdx={lightboxIdx}
          onClose={closeLightbox}
          onSelect={setLightboxIdx}
          cityName={cityName}
        />
      )}
    </section>
  );
}

function hashSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getResidentialPhoto(slug: string): string {
  return residentialPhotos[hashSlug(slug) % residentialPhotos.length];
}

function getFlatPhoto(slug: string): string {
  return flatPhotos[hashSlug(slug) % flatPhotos.length];
}

const cityImages: Record<string, string> = {
  "san-francisco": "/images/san-francisco-aerial.webp",
  "san-jose": "/images/san-jose-aerial.webp",
  "san-bruno": "/images/san-bruno-aerial.webp",
  "san-carlos": "/images/san-carlos-aerial.webp",
  "san-leandro": "/images/san-leandro-aerial.webp",
  "san-mateo": "/images/san-mateo-aerial.webp",
  "santa-clara": "/images/santa-clara-aerial.webp",
  "saratoga": "/images/saratoga-aerial.webp",
  "sunnyvale": "/images/sunnyvale-aerial.webp",
  "south-san-francisco": "/images/south-san-francisco-aerial.webp",
  "tiburon": "/images/tiburon-aerial.webp",
  "sausalito": "/images/sausalito-aerial.webp",
  "hayward": "/images/hayward-aerial.webp",
  "los-altos": "/images/los-altos-aerial.webp",
  "los-altos-hills": "/images/los-altos-hills-aerial.webp",
  "menlo-park": "/images/menlo-park-aerial.webp",
  "millbrae": "/images/millbrae-aerial.webp",
  "milpitas": "/images/milpitas-aerial.webp",
  "oakland": "/images/oakland-aerial.webp",
  "pacifica": "/images/pacifica-aerial.webp",
  "palo-alto": "/images/palo-alto-aerial.webp",
  "pleasanton": "/images/pleasanton-aerial.webp",
  "redwood-city": "/images/redwood-city-aerial.webp",
  "livermore": "/images/livermore-aerial.webp",
  "campbell": "/images/campbell-aerial.webp",
  "alameda": "/images/alameda-aerial.webp",
  "albany": "/images/albany-aerial.webp",
  "atherton": "/images/atherton-aerial.webp",
  "brisbane": "/images/brisbane-aerial.webp",
  "belmont": "/images/belmont-aerial.webp",
  "berkeley": "/images/berkeley-aerial.webp",
  "burlingame": "/images/burlingame-aerial.webp",
  "colma": "/images/colma-aerial.webp",
  "cupertino": "/images/cupertino-aerial.webp",
  "daly-city": "/images/daly-city-aerial.webp",
  "los-gatos": "/images/los-gatos-aerial.webp",
  "mountain-view": "/images/mountain-view-aerial.webp",
  "fremont": "/images/fremont-aerial.webp",
  "foster-city": "/images/foster-city-aerial.webp",
  "half-moon-bay": "/images/half-moon-bay-aerial.webp",
  "newark": "/images/newark-aerial.webp",
  "portola-valley": "/images/portola-valley-aerial.webp",
  "richmond": "/images/richmond-aerial.webp",
  "union-city": "/images/union-city-aerial.webp",
  "woodside": "/images/woodside-aerial.webp",
  "concord": "/images/concord-aerial.webp",
  "danville": "/images/danville-aerial.webp",
  "dublin": "/images/dublin-aerial.webp",
  "lafayette": "/images/lafayette-aerial.webp",
  "mill-valley": "/images/mill-valley-aerial.webp",
  "orinda": "/images/orinda-aerial.webp",
  "san-ramon": "/images/san-ramon-aerial.webp",
  "walnut-creek": "/images/walnut-creek-aerial.webp",
  "san-rafael": "/images/san-rafael-aerial.webp",
  "novato": "/images/novato-aerial.webp",
  "corte-madera": "/images/corte-madera-aerial.webp",
  "larkspur": "/images/larkspur-aerial.webp",
  "fairfax": "/images/fairfax-aerial.webp",
  "san-anselmo": "/images/san-anselmo-aerial.webp",
  "belvedere": "/images/belvedere-aerial.webp",
  "kentfield": "/images/kentfield-aerial.webp",
};

export default function CityPage() {
  const { city: citySlug } = useParams<{ city: string }>();
  const cityData = citySlug ? cities[citySlug] : undefined;

  useSEO(
    cityData ? (cityData.seoTitle || `${cityData.name}, CA Roofing — Repair & Replacement | ROOF EXPRESS`) : "",
    cityData ? `Top-rated roofing contractor in ${cityData.name}, CA. Residential & commercial roof repair, full roof replacement, flat roofing, gutter installation & skylight repair. Diamond Certified, GAF Master Elite, CSLB #1072766. Free estimates — call (650) 666-5554.` : undefined,
    cityData ? `roofing contractor ${cityData.name}, roof repair ${cityData.name} CA, roof replacement ${cityData.name}, roofer near me ${cityData.name}, ${cityData.name} roofing company, flat roof ${cityData.name}, gutter installation ${cityData.name}, emergency roof repair ${cityData.name}` : undefined
  );

  if (!cityData) {
    return (
      <Layout>
        <section className="min-h-[60vh] flex items-center justify-center bg-brandGrey" data-testid="section-404">
          <div className="text-center">
      <h1 className="text-6xl font-black text-brandNavy mb-4">404</h1>
            <p className="text-xl text-slate-600 font-bold mb-8">City page not found</p>
            <Link href="/" className="bg-brandOrange text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-brandNavy transition" data-testid="link-404-home">
              Back to Home
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center" data-testid="section-city-hero">
        <div className="absolute inset-0">
          <img src={cityImages[citySlug || ""] || "/images/roofing-aerial-neighborhood.webp"} alt={`${cityData.name} roofing services`} className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={437} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-map-marker-alt mr-2"></i> Local Service Area
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-city-title">
              {(() => {
                const h1Text = cityData.heroH2 || cityData.h1 || `${cityData.name} Roofing`;
                const dashIdx = h1Text.indexOf(" — ");
                if (dashIdx !== -1) {
                  return <>{h1Text.slice(0, dashIdx)} — <span className="text-brandOrangeLight">{h1Text.slice(dashIdx + 3)}</span></>;
                }
                const forIdx = h1Text.indexOf(" for ");
                if (forIdx !== -1) {
                  return <>{h1Text.slice(0, forIdx)} <span className="text-brandOrangeLight">for {h1Text.slice(forIdx + 5)}</span></>;
                }
                const withIdx = h1Text.indexOf(" with ");
                if (withIdx !== -1) {
                  return <>{h1Text.slice(0, withIdx)} <span className="text-brandOrangeLight">with {h1Text.slice(withIdx + 6)}</span></>;
                }
                const colonIdx = h1Text.indexOf(": ");
                if (colonIdx !== -1) {
                  return <>{h1Text.slice(0, colonIdx)}: <span className="text-brandOrangeLight">{h1Text.slice(colonIdx + 2)}</span></>;
                }
                const roofingIdx = h1Text.lastIndexOf("Roofing");
                if (roofingIdx !== -1) {
                  return <>{h1Text.slice(0, roofingIdx)}<span className="text-brandOrangeLight">Roofing{h1Text.slice(roofingIdx + 7)}</span></>;
                }
                const roofIdx = h1Text.indexOf("Roof ");
                if (roofIdx !== -1) {
                  return <>{h1Text.slice(0, roofIdx)}<span className="text-brandOrangeLight">{h1Text.slice(roofIdx)}</span></>;
                }
                const roofsIdx = h1Text.indexOf("Roofs ");
                if (roofsIdx !== -1) {
                  return <>{h1Text.slice(0, roofsIdx)}<span className="text-brandOrangeLight">{h1Text.slice(roofsIdx)}</span></>;
                }
                const rooferIdx = h1Text.indexOf("Roofer");
                if (rooferIdx !== -1) {
                  return <>{h1Text.slice(0, rooferIdx)}<span className="text-brandOrangeLight">{h1Text.slice(rooferIdx)}</span></>;
                }
                const expressIdx = h1Text.indexOf("ROOF EXPRESS");
                if (expressIdx !== -1) {
                  return <>{h1Text.slice(0, expressIdx)}<span className="text-brandOrangeLight">ROOF EXPRESS</span>{h1Text.slice(expressIdx + 12) || ""}</>;
                }
                const words = h1Text.split(" ");
                const mid = Math.ceil(words.length / 2);
                return <>{words.slice(0, mid).join(" ")} <span className="text-brandOrangeLight">{words.slice(mid).join(" ")}</span></>;
              })()}
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-4 leading-relaxed" data-testid="text-city-subtitle">
              {cityData.subtitle}
            </p>
            <div className="hidden md:block bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 px-6 py-5 max-w-xl mb-6 shadow-lg shadow-black/10" data-testid="text-city-description">
              <p className="text-sm text-white/80 leading-relaxed">
                {cityData.description}
              </p>
            </div>
            <p className="md:hidden text-sm text-white/70 leading-relaxed mb-6 max-w-lg line-clamp-3" data-testid="text-city-description-mobile">
              {cityData.description}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media"
                target="_blank"
                rel="noreferrer noopener"
                className="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
                data-testid="link-city-estimate"
              >
                Get {cityData.name} Estimate
              </a>
              <a
                href="tel:6506665554"
                className="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all duration-300 border border-white/20"
                data-testid="link-city-call"
              >
                <i aria-hidden="true" className="fas fa-phone-alt mr-2"></i> 650-666-5554
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-brandNavy border-b border-white/10">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8">
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-gem mr-1.5 text-brandOrangeLight text-[9px]"></i> Diamond Certified
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-award mr-1.5 text-brandOrangeLight text-[9px]"></i> GAF Master Elite
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-shield-alt mr-1.5 text-brandOrangeLight text-[9px]"></i> Owens Corning Platinum
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-certificate mr-1.5 text-brandOrangeLight text-[9px]"></i> CertainTeed Select
            </span>
          </div>
        </div>
      </section>

      <section className="py-3 bg-gradient-to-r from-brandOrange/5 via-white to-brandOrange/5 border-b border-brandOrange/10">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <Link
            href={`/city-roofing-guides/${citySlug}`}
            className="flex items-center justify-between gap-4 group"
            data-testid="link-guide-hero-banner"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 bg-brandOrange/10 rounded-xl group-hover:bg-brandOrange group-hover:scale-105 transition-all duration-300">
                <i aria-hidden="true" className="fas fa-book-open text-brandOrange group-hover:text-white text-sm transition"></i>
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brandOrange block leading-tight">Homeowner Guide</span>
                <span className="text-sm font-black text-brandNavy group-hover:text-brandOrange transition">{cityData.name} Roofing Guide — Costs, Permits & Materials</span>
              </div>
            </div>
            <i aria-hidden="true" className="fas fa-arrow-right text-brandOrange/40 group-hover:text-brandOrange group-hover:translate-x-1 transition-all duration-300"></i>
          </Link>
        </div>
      </section>

      <section className="py-24 bg-brandGrey" data-testid="section-neighborhoods">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Local Expertise</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-4">
              {cityData.name} <span className="text-brandOrange">Neighborhood Solutions</span>
            </h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">{cityData.description}</p>
          </div>
          <div className={`grid grid-cols-1 ${cityData.neighborhoods.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-8`}>
            {cityData.neighborhoods.map((hood, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100" data-testid={`card-neighborhood-${idx}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange">
                    <i aria-hidden="true" className="fas fa-map-pin"></i>
                  </div>
                  <h3 className="text-lg font-black text-brandNavy uppercase">{hood.name}</h3>
                </div>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4">{hood.description}</p>
                <div className="flex items-center gap-2 p-3 bg-brandGrey rounded-xl">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange text-sm"></i>
                  <span className="text-xs font-black text-brandNavy uppercase tracking-wide">{hood.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" data-testid="section-residential">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Residential</span>
    <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6">
                Residential <span className="text-brandOrange">Systems</span>
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                Every {cityData.name} home deserves a complete roofing system—not just shingles. Our Weather-Stopper™ installations include leak barriers, deck protection, starter strips, ridge cap ventilation, and manufacturer-certified shingles for a fully integrated defense against the Bay Area's unique climate challenges.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i>
                  <span className="text-sm font-bold text-brandNavy">GAF & Owens Corning Certified Installations</span>
                </li>
                <li className="flex items-center gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i>
                  <span className="text-sm font-bold text-brandNavy">50-Year System Warranty Available</span>
                </li>
                <li className="flex items-center gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i>
                  <span className="text-sm font-bold text-brandNavy">2-3 Day Express Completion</span>
                </li>
              </ul>
              <Link href="/residential" className="inline-block bg-brandOrange text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-brandNavy transition" data-testid="link-residential-systems">
                Explore Residential Systems
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img
                src={getResidentialPhoto(citySlug || "")}
                alt={`Residential roofing in ${cityData.name}`}
                className="rounded-[2rem] shadow-xl w-full object-cover"
                loading="lazy"
                width={800}
                height={533}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey cv-auto" data-testid="section-flat">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Commercial & Flat</span>
    <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6">
                Flat <span className="text-brandOrange">Roofing</span>
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                {cityData.name}'s flat-roof buildings require specialized waterproofing systems. We install APP Modified Bitumen (torch-down), TPO single-ply membranes, and silicone coating systems—each engineered for zero-slope water management and long-term performance.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i>
                  <span className="text-sm font-bold text-brandNavy">Torch-Down & TPO Specialists</span>
                </li>
                <li className="flex items-center gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i>
                  <span className="text-sm font-bold text-brandNavy">Title 24 Energy Compliance</span>
                </li>
                <li className="flex items-center gap-3">
                  <i aria-hidden="true" className="fas fa-check-circle text-brandOrange"></i>
                  <span className="text-sm font-bold text-brandNavy">Commercial & Multi-Family Experience</span>
                </li>
              </ul>
              <Link href="/flat" className="inline-block bg-brandOrange text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-brandNavy transition" data-testid="link-flat-roofing">
                View Flat Roof Solutions
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img
                src={getFlatPhoto(citySlug || "")}
                alt={`Flat roofing in ${cityData.name}`}
                className="rounded-[2rem] shadow-xl w-full object-cover"
                loading="lazy"
                width={800}
                height={533}
              />
            </div>
          </div>
        </div>
      </section>

      <CityGallery cityName={cityData.name} />

      <section className="py-24 bg-white cv-auto" data-testid="section-building-code">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-12">
            <span className="bg-brandNavy text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Compliance</span>
            <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6">
              {cityData.name} <span className="text-brandOrange">Building Code</span>
            </h2>
            <p className="text-slate-600 font-medium max-w-3xl mx-auto">
              California's building codes are among the strictest in the nation. {cityData.name} adds local requirements on top of state-level Title 24 energy standards and CBC structural mandates. ROOF EXPRESS handles all permitting and code compliance so you don't have to.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src={getCityHallImage(citySlug || "")}
                alt={`${getCityPhotoCaption(citySlug || "", cityData.name)} — ${isCityHallPhoto(citySlug || "") ? 'local building permit office' : 'local permitting jurisdiction'}`}
                className="w-full h-72 object-cover"
                loading="lazy"
                data-testid={`img-city-hall-${citySlug}`}
              />
              <div className="bg-brandGrey px-5 py-3">
                <p className="text-xs text-slate-500 font-medium">{getCityPhotoCaption(citySlug || "", cityData.name)}{isCityHallPhoto(citySlug || "") ? " — Permits & Inspections" : ""}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-brandGrey rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange text-2xl mx-auto mb-4">
                  <i aria-hidden="true" className="fas fa-file-contract"></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm mb-2">Permit Management</h3>
                <p className="text-xs text-slate-600 font-medium">We pull all required permits and schedule city inspections on your behalf.</p>
              </div>
              <div className="bg-brandGrey rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange text-2xl mx-auto mb-4">
                  <i aria-hidden="true" className="fas fa-bolt"></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm mb-2">Title 24 Energy</h3>
                <p className="text-xs text-slate-600 font-medium">Cool roof compliance and energy efficiency standards built into every installation.</p>
              </div>
              <div className="bg-brandGrey rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange text-2xl mx-auto mb-4">
                  <i aria-hidden="true" className="fas fa-hard-hat"></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm mb-2">Safety Standards</h3>
                <p className="text-xs text-slate-600 font-medium">Full OSHA compliance, fall protection, and proper waste disposal on every project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CityFieldNotes cityName={cityData.name} citySlug={citySlug || ""} />

      <section className="py-24 bg-brandGrey cv-auto" data-testid="section-repair-reroof">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Decision Guide</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-4">
              Repair or <span className="text-brandOrange">Reroof?</span>
            </h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">Not every roof problem needs a full replacement. Here's how to tell the difference.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange">
                  <i aria-hidden="true" className="fas fa-wrench"></i>
                </div>
                <h3 className="text-xl font-black text-brandNavy uppercase">Signs You Need Repair</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check text-brandOrange mt-1"></i>
                  <span className="text-sm text-slate-600 font-medium">Isolated leak in one area of the roof</span>
                </li>
                <li className="flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check text-brandOrange mt-1"></i>
                  <span className="text-sm text-slate-600 font-medium">Missing or damaged shingles in a small section</span>
                </li>
                <li className="flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check text-brandOrange mt-1"></i>
                  <span className="text-sm text-slate-600 font-medium">Flashing damage around a chimney or vent</span>
                </li>
                <li className="flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check text-brandOrange mt-1"></i>
                  <span className="text-sm text-slate-600 font-medium">Roof is less than 15 years old</span>
                </li>
                <li className="flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-check text-brandOrange mt-1"></i>
                  <span className="text-sm text-slate-600 font-medium">Minor storm damage to a localized area</span>
                </li>
              </ul>
              <Link href="/roof-repair" className="mt-6 inline-block bg-brandOrange text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brandNavy transition" data-testid="link-learn-repair">
                Learn About Repairs
              </Link>
            </div>
            <div className="bg-white rounded-[2rem] p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange">
                  <i aria-hidden="true" className="fas fa-home"></i>
                </div>
                <h3 className="text-xl font-black text-brandNavy uppercase">Signs You Need Replacement</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-exclamation-triangle text-brandOrange mt-1"></i>
                  <span className="text-sm text-slate-600 font-medium">Roof is 20+ years old with visible aging</span>
                </li>
                <li className="flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-exclamation-triangle text-brandOrange mt-1"></i>
                  <span className="text-sm text-slate-600 font-medium">Widespread curling, cracking, or granule loss</span>
                </li>
                <li className="flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-exclamation-triangle text-brandOrange mt-1"></i>
                  <span className="text-sm text-slate-600 font-medium">Multiple leaks in different areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-exclamation-triangle text-brandOrange mt-1"></i>
                  <span className="text-sm text-slate-600 font-medium">Sagging or structural deck damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <i aria-hidden="true" className="fas fa-exclamation-triangle text-brandOrange mt-1"></i>
                  <span className="text-sm text-slate-600 font-medium">Daylight visible through the roof boards</span>
                </li>
              </ul>
              <Link href="/residential" className="mt-6 inline-block bg-brandOrange text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brandNavy transition" data-testid="link-learn-replacement">
                Explore Replacement
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white cv-auto" data-testid="section-why-choose">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Why Choose Us</span>
    <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6">
                Why {cityData.name} Homeowners <span className="text-brandOrange">Trust Us</span>
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                Choosing a roofing contractor in {cityData.name} is one of the biggest investments you'll make as a homeowner. ROOF EXPRESS has built a reputation as the most trusted roofer in {cityData.name} through honest pricing, superior craftsmanship, and a commitment to complete customer satisfaction on every single project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-brandGrey rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <i aria-hidden="true" className="fas fa-award text-brandOrange"></i>
                    <h3 className="font-black text-brandNavy text-sm uppercase">Licensed & Insured</h3>
                  </div>
                  <p className="text-xs text-slate-600">CSLB License #1072766 with full workers' comp and general liability coverage for your protection.</p>
                </div>
                <div className="bg-brandGrey rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <i aria-hidden="true" className="fas fa-clock text-brandOrange"></i>
                    <h3 className="font-black text-brandNavy text-sm uppercase">Same-Day Estimates</h3>
                  </div>
                  <p className="text-xs text-slate-600">We provide free, no-obligation roof inspections and written estimates for all {cityData.name} residents.</p>
                </div>
                <div className="bg-brandGrey rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <i aria-hidden="true" className="fas fa-hand-holding-usd text-brandOrange"></i>
                    <h3 className="font-black text-brandNavy text-sm uppercase">Flexible Financing</h3>
                  </div>
                  <p className="text-xs text-slate-600">0% interest financing available through Hearth so you can protect your {cityData.name} home now and pay over time.</p>
                </div>
                <div className="bg-brandGrey rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <i aria-hidden="true" className="fas fa-users text-brandOrange"></i>
                    <h3 className="font-black text-brandNavy text-sm uppercase">Local Crew</h3>
                  </div>
                  <p className="text-xs text-slate-600">Our experienced Bay Area roofing crews live and work in the communities we serve—including {cityData.name}.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/images/visual-proof-thumb.webp"
                alt={`ROOF EXPRESS team serving ${cityData.name}`}
                className="rounded-[2rem] shadow-xl w-full object-cover"
                loading="lazy"
                width={800}
                height={533}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brandNavy text-white cv-auto" data-testid="section-city-stats">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-12">
   <h2 className="text-3xl md:text-4xl font-black text-white">
              ROOF EXPRESS in <span className="text-brandOrangeLight">{cityData.name}</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-brandOrangeLight mb-2">5,000+</p>
              <p className="text-xs font-black uppercase tracking-widest text-white/70">Bay Area Projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-brandOrangeLight mb-2">4.9★</p>
              <p className="text-xs font-black uppercase tracking-widest text-white/70">Google Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-brandOrangeLight mb-2">15+</p>
              <p className="text-xs font-black uppercase tracking-widest text-white/70">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-brandOrangeLight mb-2">50yr</p>
              <p className="text-xs font-black uppercase tracking-widest text-white/70">Warranty Available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brandGrey cv-auto" data-testid="section-roofing-services-list">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Full Service</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-4">
              {cityData.name} Roofing <span className="text-brandOrange">Services</span>
            </h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">
              From minor repairs to complete roof replacements, ROOF EXPRESS delivers every roofing service {cityData.name} homeowners and businesses need—all backed by manufacturer warranties and our Diamond Certified quality guarantee.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "fa-home", title: `${cityData.name} Roof Replacement`, desc: `Complete tear-off and replacement with premium GAF or Owens Corning shingle systems for ${cityData.name} homes. Includes full deck inspection, leak barriers, and ridge ventilation.`, link: "/roof-replacement/" },
              { icon: "fa-wrench", title: `${cityData.name} Roof Repair`, desc: `Fast, reliable roof repairs for leaks, storm damage, missing shingles, and flashing failures. Most ${cityData.name} repairs completed in a single day.`, link: "/roof-repair/" },
              { icon: "fa-building", title: `${cityData.name} Commercial Roofing`, desc: `TPO, EPDM, and modified bitumen systems for ${cityData.name} commercial buildings. Title 24 compliant installations with manufacturer warranties.`, link: "/commercial/" },
              { icon: "fa-ruler-combined", title: `${cityData.name} Flat Roofing`, desc: `Specialized flat roof systems including torch-down, TPO single-ply, and silicone coatings for zero-slope water management in ${cityData.name}.`, link: "/flat/" },
              { icon: "fa-tint", title: `${cityData.name} Gutter Installation`, desc: `Seamless aluminum gutters, gutter guards, and downspout systems custom-fitted to your ${cityData.name} home for optimal rainwater management.`, link: "/gutters/" },
              { icon: "fa-sun", title: `${cityData.name} Skylight Installation`, desc: `VELUX and custom skylight installations that bring natural light into your ${cityData.name} home while maintaining a watertight roof system.`, link: "/skylights/" },
            ].map((svc, idx) => (
              <Link key={idx} href={svc.link} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group" data-testid={`card-service-${idx}`}>
                <div className="w-12 h-12 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange text-xl mb-4 group-hover:scale-110 transition">
                  <i aria-hidden="true" className={`fas ${svc.icon}`}></i>
                </div>
                <h3 className="font-black text-brandNavy text-sm uppercase mb-2">{svc.title}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-3">{svc.desc}</p>
                <span className="text-xs text-brandOrange font-black uppercase tracking-widest">Learn More <i aria-hidden="true" className="fas fa-arrow-right ml-1"></i></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white cv-auto" data-testid="section-faq">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="bg-brandNavy text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">FAQ</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-4">
              {cityData.name} Roofing <span className="text-brandOrange">Questions</span>
            </h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">
              Common questions from {cityData.name} homeowners about roofing costs, timelines, materials, and permits.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: `How much does a new roof cost in ${cityData.name}?`, a: `The average roof replacement in ${cityData.name} costs between $8,000 and $25,000 depending on the size, pitch, material, and complexity of your roof. ROOF EXPRESS provides free, detailed written estimates so you know exactly what to expect before any work begins. We also offer 0% financing through Hearth.` },
              { q: `How long does a roof replacement take in ${cityData.name}?`, a: `Most residential roof replacements in ${cityData.name} are completed in 2-3 days. Larger or more complex projects may take 4-5 days. We work efficiently while maintaining our quality standards, and we always clean up thoroughly at the end of each workday.` },
              { q: `Do I need a permit to replace my roof in ${cityData.name}?`, a: `Yes, most ${cityData.name} roof replacements require a building permit. ROOF EXPRESS handles the entire permitting process for you, including the application, required inspections, and final sign-off. This is included in our service at no extra charge.` },
              { q: `What roofing materials work best in ${cityData.name}?`, a: `For ${cityData.name}'s Bay Area climate, we recommend GAF Timberline HDZ or Owens Corning Duration shingles for sloped roofs. For flat roofs, torch-down modified bitumen or TPO membrane systems provide the best long-term performance. Our team will recommend the ideal material based on your specific roof and budget.` },
              { q: `Does ROOF EXPRESS offer emergency roof repair in ${cityData.name}?`, a: `Yes! We offer 24/7 emergency roof repair services throughout ${cityData.name}. If you have an active leak or storm damage, call us at (650) 666-5554 for immediate assistance. We can typically have a crew on-site the same day.` },
              { q: `Is ROOF EXPRESS licensed and insured in ${cityData.name}?`, a: `Absolutely. ROOF EXPRESS holds California State License Board (CSLB) License #1072766 with full workers' compensation and general liability insurance. We are also GAF Master Elite certified, Diamond Certified, and an Owens Corning Platinum Preferred contractor.` },
            ].map((faq, idx) => (
              <div key={idx} className="bg-brandGrey rounded-2xl p-6 border border-gray-100" data-testid={`faq-item-${idx}`}>
                <h3 className="font-black text-brandNavy text-sm uppercase mb-3">
                  <i aria-hidden="true" className="fas fa-question-circle text-brandOrange mr-2"></i>{faq.q}
                </h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brandGrey cv-auto" data-testid="section-process">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Our Process</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-4">
              How It <span className="text-brandOrange">Works</span>
            </h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">
              Getting a new roof in {cityData.name} is simple with ROOF EXPRESS. Here's our proven 5-step process from first call to final inspection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", icon: "fa-phone-alt", title: "Free Consultation", desc: `Call (650) 666-5554 or request a quote online. We'll schedule a free roof inspection at your ${cityData.name} property.` },
              { step: "2", icon: "fa-search", title: "Roof Inspection", desc: "Our certified inspector examines every inch of your roof, documents findings with photos, and provides a detailed written report." },
              { step: "3", icon: "fa-file-invoice-dollar", title: "Detailed Estimate", desc: "You receive a transparent, itemized estimate with material options, timelines, warranty details, and financing options." },
              { step: "4", icon: "fa-hard-hat", title: "Expert Installation", desc: "Our trained crew completes your project with manufacturer-certified techniques, daily cleanup, and quality inspections." },
              { step: "5", icon: "fa-check-double", title: "Final Walkthrough", desc: "We walk the job together, review the warranty, register your project with the manufacturer, and ensure 100% satisfaction." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-md relative">
                <div className="w-10 h-10 bg-brandOrange text-white rounded-full flex items-center justify-center font-black text-sm mx-auto mb-4">{item.step}</div>
                <div className="w-12 h-12 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange text-xl mx-auto mb-3">
                  <i aria-hidden="true" className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="font-black text-brandNavy text-xs uppercase mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white cv-auto" data-testid="section-reputation">
        <div className="container mx-auto px-6 max-w-screen-xl text-center">
          <span className="bg-brandNavy text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Trust</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-4">
            Verify Our <span className="text-brandOrange">Reputation</span>
          </h2>
          <p className="text-slate-600 font-medium max-w-2xl mx-auto mb-12">
            Don't just take our word for it. Check our verified ratings and reviews on the platforms that matter most.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://www.diamondcertified.org/report/roof-express/"
              target="_blank"
              rel="noreferrer noopener"
              className="group bg-brandGrey rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brandOrange/20"
              data-testid="link-diamond-certified"
            >
              <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center text-brandOrange text-3xl mx-auto mb-4 group-hover:scale-110 transition">
                <i aria-hidden="true" className="fas fa-gem"></i>
              </div>
              <h3 className="font-black text-brandNavy uppercase text-lg mb-2">Diamond Certified</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Highest Rated in Customer Satisfaction</p>
              <span className="text-xs font-black text-brandOrange uppercase tracking-widest">View Report <i aria-hidden="true" className="fas fa-external-link-alt ml-1"></i></span>
            </a>
            <a
              href="https://www.google.com/maps?cid=13257844389379386946"
              target="_blank"
              rel="noreferrer noopener"
              className="group bg-brandGrey rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brandOrange/20"
              data-testid="link-google-reviews"
            >
              <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center text-brandOrange text-3xl mx-auto mb-4 group-hover:scale-110 transition">
                <i aria-hidden="true" className="fab fa-google"></i>
              </div>
              <h3 className="font-black text-brandNavy uppercase text-lg mb-2">Google Reviews</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">5-Star Rated with 100+ Reviews</p>
              <span className="text-xs font-black text-brandOrange uppercase tracking-widest">Read Reviews <i aria-hidden="true" className="fas fa-external-link-alt ml-1"></i></span>
            </a>
            <a
              href="https://www.yelp.com/biz/roof-express-san-francisco"
              target="_blank"
              rel="noreferrer noopener"
              className="group bg-brandGrey rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brandOrange/20"
              data-testid="link-yelp-reviews"
            >
              <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center text-brandOrange text-3xl mx-auto mb-4 group-hover:scale-110 transition">
                <i aria-hidden="true" className="fab fa-yelp"></i>
              </div>
              <h3 className="font-black text-brandNavy uppercase text-lg mb-2">Yelp Reviews</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Top Rated Local Roofer</p>
              <span className="text-xs font-black text-brandOrange uppercase tracking-widest">Read Reviews <i aria-hidden="true" className="fas fa-external-link-alt ml-1"></i></span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brandGrey cv-auto" data-testid="section-service-areas">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                  <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-brandNavy">Popular Service Areas</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {popularCities.filter(c => c.slug !== citySlug).slice(0, 10).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}`}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-brandGrey hover:bg-brandOrange/10 border border-gray-100 hover:border-brandOrange/30 transition-all group"
                    data-testid={`link-city-${c.slug}`}
                  >
                    <i aria-hidden="true" className="fas fa-chevron-right text-[8px] text-brandOrange/40 group-hover:text-brandOrange transition"></i>
                    <span className="text-xs font-bold text-brandNavy group-hover:text-brandOrange transition truncate">{c.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                  <i aria-hidden="true" className="fas fa-book-open"></i>
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-brandNavy">Related Guides</h3>
              </div>
              <Link
                href={`/city-roofing-guides/${citySlug}`}
                className="flex items-center gap-3 bg-brandOrange/5 border border-brandOrange/20 rounded-xl px-4 py-4 mb-4 hover:bg-brandOrange/10 hover:border-brandOrange/40 transition-all group"
                data-testid="link-city-guide-from-service"
              >
                <div className="w-8 h-8 rounded-lg bg-brandOrange/10 flex items-center justify-center text-brandOrange shrink-0">
                  <i aria-hidden="true" className="fas fa-book text-xs"></i>
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-black text-brandOrange uppercase tracking-widest block">Homeowner Guide</span>
                  <span className="text-xs font-bold text-brandNavy group-hover:text-brandOrange transition block truncate">{cityData.name} Roofing Guide — Costs, Permits & Materials</span>
                </div>
              </Link>
              <div className="space-y-2">
                {relatedGuides.map((guide) => (
                  <Link key={guide.slug} href={`/blog/${guide.slug}`} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-brandGrey hover:bg-brandOrange/10 border border-gray-100 hover:border-brandOrange/30 transition-all group" data-testid={`link-guide-${guide.slug}`}>
                    <i aria-hidden="true" className="fas fa-arrow-right text-[9px] text-brandOrange/40 group-hover:text-brandOrange transition shrink-0"></i>
                    <span className="text-xs font-bold text-brandNavy group-hover:text-brandOrange transition">{guide.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange">
                  <i aria-hidden="true" className="fas fa-bolt"></i>
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-brandNavy">Next Steps</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 bg-brandOrange text-white py-4 px-6 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brandNavy transition-all group"
                  data-testid="link-next-quote"
                >
                  <i aria-hidden="true" className="fas fa-file-alt text-sm"></i>
                  <span>Request Free Estimate</span>
                  <i aria-hidden="true" className="fas fa-arrow-right text-[10px] ml-auto opacity-60 group-hover:opacity-100 transition"></i>
                </a>
                <a
                  href="tel:6506665554"
                  className="flex items-center gap-3 bg-brandNavy text-white py-4 px-6 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brandOrange transition-all group"
                  data-testid="link-next-call"
                >
                  <i aria-hidden="true" className="fas fa-phone-alt text-sm"></i>
                  <span>Call 650-666-5554</span>
                  <i aria-hidden="true" className="fas fa-arrow-right text-[10px] ml-auto opacity-60 group-hover:opacity-100 transition"></i>
                </a>
                <a
                  href="https://wa.me/16506665554"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 bg-[#25D366] text-white py-4 px-6 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all group"
                  data-testid="link-next-whatsapp"
                >
                  <i aria-hidden="true" className="fab fa-whatsapp text-sm"></i>
                  <span>WhatsApp Us</span>
                  <i aria-hidden="true" className="fas fa-arrow-right text-[10px] ml-auto opacity-60 group-hover:opacity-100 transition"></i>
                </a>
                <Link
                  href="/blog/field-notes"
                  className="flex items-center gap-3 bg-white border border-slate-200 text-brandNavy py-4 px-6 rounded-xl font-black text-xs uppercase tracking-widest hover:border-brandOrange/30 hover:bg-brandOrange/5 transition-all group"
                  data-testid="link-next-field-notes"
                >
                  <i aria-hidden="true" className="fas fa-hard-hat text-sm text-brandOrange"></i>
                  <span>Field Notes & Tips</span>
                  <i aria-hidden="true" className="fas fa-arrow-right text-[10px] ml-auto opacity-60 group-hover:opacity-100 transition"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NearbyAreas />
      <CTASection
        title={`Need a ${cityData.name} roofing estimate?`}
        subtitle={`Active leak or planning a replacement in ${cityData.name}? Our local team is ready to provide a detailed scope and transparent pricing.`}
      />
    </Layout>
  );
}

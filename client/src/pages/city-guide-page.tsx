import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useParams } from "wouter";
import Layout from "@/components/layout";
import { CTASection } from "@/components/page-bottom";
import CityFieldNotes from "@/components/city-field-notes";
import { cityGuides } from "@/data/city-guides";
import { getCityHallImage, getCityPhotoCaption, isCityHallPhoto } from "@/data/city-hall-photos";
import { useSEO } from "@/hooks/use-seo";

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

const seasonIcons: Record<string, string> = {
  "Spring": "fa-seedling",
  "Summer": "fa-sun",
  "Fall": "fa-leaf",
  "Winter": "fa-snowflake",
};

const tocSections = [
  { id: "climate", label: "Climate & Weather", icon: "fa-cloud-sun" },
  { id: "permits", label: "Permits & Codes", icon: "fa-file-alt" },
  { id: "materials", label: "Materials", icon: "fa-cubes" },
  { id: "costs", label: "Costs", icon: "fa-dollar-sign" },
  { id: "problems", label: "Problems", icon: "fa-exclamation-circle" },
  { id: "maintenance", label: "Maintenance", icon: "fa-calendar-check" },
  { id: "contractor", label: "Contractor Tips", icon: "fa-hard-hat" },
  { id: "faq", label: "Roofing FAQ", icon: "fa-question-circle" },
];

function getRelatedGuides(currentSlug: string) {
  const allSlugs = Object.keys(cityGuides);
  const current = cityGuides[currentSlug];
  if (!current) return [];
  const sameRegion = allSlugs
    .filter(s => s !== currentSlug && cityGuides[s].region === current.region)
    .slice(0, 4);
  const others = allSlugs
    .filter(s => s !== currentSlug && !sameRegion.includes(s))
    .slice(0, Math.max(0, 6 - sameRegion.length));
  return [...sameRegion, ...others].slice(0, 6);
}

interface GuidePhoto {
  id: string;
  img: string;
  fullImg: string;
  originalImg: string;
  date: string;
  dateLabel: string;
  description: string;
}

function formatGuidePhotoDate(timestamp: number): { date: string; dateLabel: string } {
  const d = new Date(timestamp * 1000);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return {
    date: `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
    dateLabel: `${months[d.getMonth()]} ${d.getFullYear()}`,
  };
}

function GuideGalleryLightbox({ photos, activeIdx, onClose, onSelect, cityName }: {
  photos: GuidePhoto[]; activeIdx: number; onClose: () => void; onSelect: (i: number) => void; cityName: string;
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
    <div className="fixed inset-0 z-[100] flex flex-col" role="dialog" aria-modal="true" aria-label="Photo gallery lightbox" data-testid="dialog-guide-lightbox">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={onClose} />
      <button onClick={onClose} className="absolute top-4 right-4 z-[110] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" data-testid="button-guide-lightbox-close" aria-label="Close gallery">
        <i aria-hidden="true" className="fas fa-times text-lg"></i>
      </button>

      <div className="relative z-[105] flex-1 flex items-center justify-center px-4 pt-4 pb-2 min-h-0">
        <button onClick={goPrev} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110" data-testid="button-guide-lightbox-prev" aria-label="Previous photo">
          <i aria-hidden="true" className="fas fa-chevron-left text-lg"></i>
        </button>
        <button onClick={goNext} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110" data-testid="button-guide-lightbox-next" aria-label="Next photo">
          <i aria-hidden="true" className="fas fa-chevron-right text-lg"></i>
        </button>

        <div className="max-w-5xl w-full flex flex-col items-center">
          <div className="w-full max-h-[60vh] md:max-h-[65vh] rounded-2xl overflow-hidden shadow-2xl bg-black/50">
            <img
              src={photo.originalImg}
              alt={photo.description || `Roofing project in ${cityName} — ${photo.date}`}
              className="w-full h-full object-contain transition-opacity duration-300"
              data-testid="img-guide-lightbox"
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
              <p className="text-white/90 text-sm leading-relaxed mt-3 max-w-lg mx-auto" data-testid="text-guide-lightbox-desc">
                {photo.description}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-[105] shrink-0 px-4 pb-4 pt-2">
        <div
          ref={thumbStripRef}
          className="flex gap-2 overflow-x-auto py-2 px-1 snap-x"
          style={{ scrollbarWidth: "thin" }}
          data-testid="strip-guide-lightbox-thumbs"
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
              data-testid={`button-guide-lightbox-thumb-${p.id}`}
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

function GuideCityGallery({ cityName, citySlug }: { cityName: string; citySlug: string }) {
  const [photos, setPhotos] = useState<GuidePhoto[]>([]);
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
          const { date, dateLabel } = formatGuidePhotoDate(p.createdAt);
          return { id: p.id, img: p.thumbnail, fullImg: p.thumbnail || p.fullSize, originalImg: p.fullSize, date, dateLabel, description: p.description || "" };
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
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white" data-testid="section-guide-gallery">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
            <div>
              <span className="bg-green-700 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-4 inline-flex items-center gap-1.5 tracking-[0.2em]">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
                Local Project Photos
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brandNavy">
                Roofing Projects in <span className="text-brandOrange">{cityName}</span>
              </h2>
              <p className="text-slate-600 font-medium mt-2 max-w-xl">
                See {photos.length} recently completed roofing projects in {cityName}, CA — real results from a GAF Master Elite contractor serving your neighborhood.
              </p>
            </div>
            <div className="flex items-stretch gap-3">
              <div className="flex items-center gap-1 bg-brandNavy/5 border border-brandNavy/10 rounded-xl p-1.5">
                <button
                  onClick={() => setViewMode("showcase")}
                  className={`px-3.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${viewMode === "showcase" ? "bg-brandNavy text-white shadow-md" : "text-slate-500 hover:text-brandNavy"}`}
                  data-testid="button-guide-view-showcase"
                  aria-label="Showcase view"
                >
                  <i aria-hidden="true" className="fas fa-image"></i>
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${viewMode === "grid" ? "bg-brandNavy text-white shadow-md" : "text-slate-500 hover:text-brandNavy"}`}
                  data-testid="button-guide-view-grid"
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
            <div data-testid="guide-gallery-showcase" className="max-w-3xl mx-auto">
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
                    data-testid="button-guide-showcase-expand"
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
                    width="2160"
                    height="1620"
                    sizes="(max-width: 768px) 100vw, 800px"
                    data-testid="img-guide-showcase-main"
                  />
                  <button
                    onClick={goPrev}
                    className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
                    data-testid="button-guide-showcase-prev"
                    aria-label="Previous photo"
                  >
                    <i aria-hidden="true" className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
                    data-testid="button-guide-showcase-next"
                    aria-label="Next photo"
                  >
                    <i aria-hidden="true" className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              {activePhoto.description && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-5 py-4 mt-3">
                  <p className="text-sm text-slate-700 font-medium leading-relaxed line-clamp-2" data-testid="text-guide-showcase-desc">
                    {activePhoto.description}
                  </p>
                </div>
              )}

              <div className="mt-4 relative">
                <div
                  ref={thumbStripRef}
                  className="flex gap-2 overflow-x-auto py-2 px-1 snap-x scroll-smooth"
                  style={{ scrollbarWidth: "thin" }}
                  data-testid="strip-guide-gallery-thumbs"
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
                      data-testid={`button-guide-thumb-${photo.id}`}
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
                  <span className="text-[10px] text-slate-500 font-bold">{activeIdx + 1} / {photos.length}</span>
                ) : (
                  photos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`rounded-full transition-all duration-300 flex items-center justify-center min-w-[44px] min-h-[44px] ${
                        idx === activeIdx
                          ? ""
                          : ""
                      }`}
                      aria-label={`Go to photo ${idx + 1}`}
                      data-testid={`dot-guide-gallery-${idx}`}
                    >
                      <span className={`rounded-full block transition-all duration-300 ${
                        idx === activeIdx
                          ? "w-6 h-2 bg-brandOrange"
                          : "w-2 h-2 bg-brandNavy/20 hover:bg-brandNavy/40"
                      }`} />
                    </button>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div data-testid="guide-gallery-grid">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
                {photos.map((photo, idx) => (
                  <div
                    key={photo.id}
                    className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white ring-1 ring-gray-100 hover:ring-brandOrange/30"
                    onClick={() => setLightboxIdx(idx)}
                    data-testid={`card-guide-photo-${photo.id}`}
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
                        data-testid={`img-guide-photo-${photo.id}`}
                      />
                    </div>
                    {photo.description && (
                      <div className="px-3 py-2.5 border-t border-gray-100">
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2" data-testid={`text-guide-desc-${photo.id}`}>
                          {photo.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 bg-brandOrange/5 border border-brandOrange/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-brandOrange block mb-1">Want This for Your Home?</span>
              <p className="text-sm font-black text-brandNavy">Get a free roofing estimate for your {cityName} property — same quality, same crew.</p>
            </div>
            <Link
              href={`/${citySlug}`}
              className="bg-brandOrange text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brandNavy transition whitespace-nowrap"
              data-testid="link-guide-gallery-service"
            >
              <i aria-hidden="true" className="fas fa-tools mr-2"></i> {cityName} Services
            </Link>
          </div>
        </div>
      </div>
      {lightboxIdx !== null && photos[lightboxIdx] && (
        <GuideGalleryLightbox
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

export default function CityGuidePage() {
  const { city: citySlug } = useParams<{ city: string }>();
  const guideData = citySlug ? cityGuides[citySlug] : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO(
    guideData ? `${guideData.guideTitle} | ROOF EXPRESS` : "",
    guideData ? `Complete ${guideData.name} roofing guide for 2026: local permit requirements, climate-specific material recommendations, average cost ranges, common roof problems, and seasonal maintenance tips. Your independent resource for roofing decisions in ${guideData.name}, CA.` : undefined,
    guideData ? `${guideData.name} roofing guide, roof cost ${guideData.name} 2026, roofing permit ${guideData.name}, best roofing material ${guideData.name}, roof maintenance ${guideData.name}, ${guideData.name} roof problems, roof replacement cost ${guideData.name} CA` : undefined
  );

  if (!guideData) {
    return (
      <Layout>
        <section className="min-h-[60vh] flex items-center justify-center bg-brandGrey" data-testid="section-guide-404">
          <div className="text-center">
            <h1 className="text-6xl font-black text-brandNavy mb-4">404</h1>
            <p className="text-xl text-slate-600 font-bold mb-8">City roofing guide not found</p>
            <Link href="/city-roofing-guides" className="bg-brandOrange text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-brandNavy transition" data-testid="link-guide-404-back">
              Browse All City Guides
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const relatedSlugs = getRelatedGuides(citySlug || "");

  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[50vh] text-white py-28 lg:py-36 px-4 flex items-center" data-testid="section-guide-hero">
        <div className="absolute inset-0">
          <img
            src={cityImages[citySlug || ""] || "/images/roofing-aerial-neighborhood.webp"}
            alt={`Aerial view of ${guideData.name} rooftops`}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1200}
            height={800}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/50 via-brandNavy/60 to-brandNavy/90"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <nav className="mb-6" aria-label="Breadcrumb" data-testid="nav-breadcrumbs">
            <ol className="flex items-center gap-2 text-xs text-white/70 font-bold">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><i aria-hidden="true" className="fas fa-chevron-right text-[8px]"></i></li>
              <li><Link href="/city-roofing-guides" className="hover:text-white transition">City Roofing Guides</Link></li>
              <li><i aria-hidden="true" className="fas fa-chevron-right text-[8px]"></i></li>
              <li className="text-white">{guideData.name}</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-book-open mr-2"></i> Homeowner Guide
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-[1.1] tracking-tight text-white" data-testid="text-guide-title">
              Complete Roofing Guide for <span className="text-brandOrangeLight">{guideData.name}, CA</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-2xl leading-relaxed mb-5" data-testid="text-guide-intro">
              {guideData.guideIntro}
            </p>
            <Link
              href={`/${citySlug}`}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brandOrange hover:border-brandOrange transition-all duration-300"
              data-testid="link-service-page-from-guide"
            >
              <i aria-hidden="true" className="fas fa-tools text-brandOrangeLight"></i> View {guideData.name} Roofing Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-3 bg-white border-b border-gray-200 sticky top-0 z-30" data-testid="section-toc">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl overflow-x-auto">
          <div className="flex items-center gap-1 md:gap-2 min-w-max py-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mr-2 hidden md:inline">Contents:</span>
            {tocSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-[10px] md:text-xs font-bold text-slate-600 hover:text-brandOrange px-2 md:px-3 py-1.5 rounded-full hover:bg-brandOrange/5 transition whitespace-nowrap flex items-center gap-1.5"
                data-testid={`link-toc-${section.id}`}
              >
                <i aria-hidden="true" className={`fas ${section.icon} text-brandOrange/60`}></i>
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-3 bg-gradient-to-r from-brandNavy/5 via-white to-brandNavy/5 border-b border-brandNavy/10">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <Link
            href={`/${citySlug}`}
            className="flex items-center justify-between gap-4 group"
            data-testid="link-service-hero-banner"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 bg-brandNavy/10 rounded-xl group-hover:bg-brandOrange group-hover:scale-105 transition-all duration-300">
                <i aria-hidden="true" className="fas fa-tools text-brandNavy group-hover:text-white text-sm transition"></i>
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brandOrange block leading-tight">Service Page</span>
                <span className="text-sm font-black text-brandNavy group-hover:text-brandOrange transition">{guideData.name} Roofing Services — Free Estimates & Reviews</span>
              </div>
            </div>
            <i aria-hidden="true" className="fas fa-arrow-right text-slate-500 group-hover:text-brandOrange group-hover:translate-x-1 transition-all duration-300"></i>
          </Link>
        </div>
      </section>

      <section className="py-6 bg-brandGrey">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-testid="stat-climate-zone">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <i aria-hidden="true" className="fas fa-cloud-sun text-blue-500"></i>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Climate Zone</p>
              <p className="text-sm font-black text-brandNavy">{guideData.climateZone}</p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-testid="stat-rainfall">
              <div className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <i aria-hidden="true" className="fas fa-cloud-rain text-cyan-500"></i>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Avg. Rainfall</p>
              <p className="text-sm font-black text-brandNavy">{guideData.annualRainfall}</p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-testid="stat-elevation">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <i aria-hidden="true" className="fas fa-mountain text-green-500"></i>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Elevation</p>
              <p className="text-sm font-black text-brandNavy">{guideData.elevationContext}</p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-testid="stat-home-age">
              <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <i aria-hidden="true" className="fas fa-history text-amber-500"></i>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Avg. Home Age</p>
              <p className="text-sm font-black text-brandNavy">{guideData.avgHomeAge}</p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow col-span-2 md:col-span-1" data-testid="stat-architecture">
              <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <i aria-hidden="true" className="fas fa-building text-purple-500"></i>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Architecture</p>
              <p className="text-sm font-black text-brandNavy">{guideData.architecturalStyles}</p>
            </div>
          </div>
        </div>
      </section>

      <GuideCityGallery cityName={guideData.name} citySlug={citySlug!} />

      <section id="climate" className="py-20 bg-white scroll-mt-16" data-testid="section-climate">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto">
            <span className="bg-blue-100 text-blue-700 text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Climate & Weather</span>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy mb-6" data-testid="text-climate-heading">
              How {guideData.name}'s <span className="text-brandOrange">Weather Affects Your Roof</span>
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-8">{guideData.climateDescription}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-brandGrey rounded-2xl p-6 text-center">
                <i aria-hidden="true" className="fas fa-thermometer-half text-red-500 text-2xl mb-3"></i>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Avg. High Temp</p>
                <p className="text-2xl font-black text-brandNavy" data-testid="text-avg-high">{guideData.avgHighTemp}</p>
              </div>
              <div className="bg-brandGrey rounded-2xl p-6 text-center">
                <i aria-hidden="true" className="fas fa-thermometer-quarter text-blue-500 text-2xl mb-3"></i>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Avg. Low Temp</p>
                <p className="text-2xl font-black text-brandNavy" data-testid="text-avg-low">{guideData.avgLowTemp}</p>
              </div>
              <div className="bg-brandGrey rounded-2xl p-6 text-center">
                <i aria-hidden="true" className="fas fa-cloud-rain text-blue-400 text-2xl mb-3"></i>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Annual Rainfall</p>
                <p className="text-2xl font-black text-brandNavy" data-testid="text-rainfall">{guideData.annualRainfall}</p>
              </div>
            </div>

            <div className="bg-brandGrey rounded-2xl p-8">
              <h3 className="text-lg font-black text-brandNavy uppercase mb-4">
                <i aria-hidden="true" className="fas fa-exclamation-triangle text-brandOrange mr-2"></i>
                Key Weather Challenges
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {guideData.weatherChallenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-4" data-testid={`text-weather-challenge-${idx}`}>
                    <i aria-hidden="true" className="fas fa-wind text-brandOrange mt-0.5"></i>
                    <span className="text-sm font-bold text-brandNavy">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {guideData.specialConsiderations.length > 0 && (
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="text-sm font-black text-amber-800 uppercase mb-3">
                  <i aria-hidden="true" className="fas fa-shield-alt mr-2"></i>Special Considerations for {guideData.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {guideData.specialConsiderations.map((item, idx) => (
                    <span key={idx} className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-full" data-testid={`badge-consideration-${idx}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="permits" className="py-20 bg-brandGrey scroll-mt-16 cv-auto" data-testid="section-permits">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="bg-brandNavy text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Permits & Codes</span>
              <h2 className="text-3xl md:text-4xl font-black text-brandNavy" data-testid="text-permits-heading">
                {guideData.name} <span className="text-brandOrange">Building Codes & Permits</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
              <div className="lg:col-span-3 overflow-hidden rounded-2xl shadow-md group">
                <div className="relative">
                  <img
                    src={getCityHallImage(guideData.slug)}
                    alt={`${getCityPhotoCaption(guideData.slug, guideData.name)} — ${isCityHallPhoto(guideData.slug) ? 'where roofing permits are issued' : 'local permitting jurisdiction'}`}
                    className="w-full h-72 md:h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                    data-testid={`img-city-hall-${guideData.slug}`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-24" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-0.5">{isCityHallPhoto(guideData.slug) ? 'Permit Office' : 'Local Landmark'}</p>
                      <p className="text-white text-sm font-black">{getCityPhotoCaption(guideData.slug, guideData.name)}</p>
                    </div>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-widest border border-white/20">
                      <i aria-hidden="true" className="fas fa-map-marker-alt mr-1.5"></i>{guideData.name}
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 border border-slate-100 hover:border-brandOrange/20 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange text-lg mb-3">
                    <i aria-hidden="true" className="fas fa-landmark"></i>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Permit Authority</p>
                  <p className="text-sm font-black text-brandNavy" data-testid="text-permit-authority">{guideData.permitAuthority}</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 border border-slate-100 hover:border-brandOrange/20 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange text-lg mb-3">
                    <i aria-hidden="true" className="fas fa-dollar-sign"></i>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Estimated Cost</p>
                  <p className="text-sm font-black text-brandNavy" data-testid="text-permit-cost">{guideData.permitCost}</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 border border-slate-100 hover:border-brandOrange/20 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange text-lg mb-3">
                    <i aria-hidden="true" className="fas fa-clock"></i>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Timeline</p>
                  <p className="text-sm font-black text-brandNavy" data-testid="text-permit-timeline">{guideData.permitTimeline}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-sm font-black text-brandNavy uppercase mb-3">
                <i aria-hidden="true" className="fas fa-info-circle text-brandOrange mr-2"></i>Important Permit Notes
              </h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed" data-testid="text-permit-notes">{guideData.permitNotes}</p>
            </div>
          </div>
        </div>
      </section>

      <CityFieldNotes cityName={guideData.name} citySlug={citySlug!} />

      <section id="materials" className="py-20 bg-white scroll-mt-16 cv-auto" data-testid="section-materials">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto">
            <span className="bg-green-100 text-green-700 text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Material Guide</span>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy mb-4" data-testid="text-materials-heading">
              Best Roofing Materials for <span className="text-brandOrange">{guideData.name}</span>
            </h2>
            <p className="text-slate-600 font-medium mb-10">Based on {guideData.name}'s {guideData.climateZone.toLowerCase()} climate and local building requirements, these materials perform best:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guideData.materialRecommendations.map((mat, idx) => (
                <div key={idx} className="bg-brandGrey rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300" data-testid={`card-material-${idx}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                      <i aria-hidden="true" className="fas fa-check-circle"></i>
                    </div>
                    <h3 className="text-base font-black text-brandNavy">{mat.name}</h3>
                  </div>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{mat.why}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="costs" className="py-20 bg-brandGrey scroll-mt-16 cv-auto" data-testid="section-costs">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto">
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Cost Guide</span>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy mb-4" data-testid="text-costs-heading">
              {guideData.name} Roofing <span className="text-brandOrange">Cost Estimates</span>
            </h2>
            <p className="text-slate-600 font-medium mb-10">Typical price ranges for {guideData.name} roofing projects. Actual costs depend on roof size, pitch, access, and material selection.</p>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full" data-testid="table-costs">
                <thead>
                  <tr className="bg-brandNavy text-white">
                    <th className="text-left px-6 py-4 text-xs font-black uppercase tracking-widest">Service</th>
                    <th className="text-right px-6 py-4 text-xs font-black uppercase tracking-widest">Price Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <i aria-hidden="true" className="fas fa-home text-brandOrange"></i>
                        <span className="text-sm font-bold text-brandNavy">Shingle Roof Replacement</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-black text-brandNavy" data-testid="text-cost-shingle">{guideData.costRanges.shingleReplacement}</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <i aria-hidden="true" className="fas fa-layer-group text-brandOrange"></i>
                        <span className="text-sm font-bold text-brandNavy">Flat Roof System</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-black text-brandNavy" data-testid="text-cost-flat">{guideData.costRanges.flatRoof}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <i aria-hidden="true" className="fas fa-tools text-brandOrange"></i>
                        <span className="text-sm font-bold text-brandNavy">Roof Repair</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-black text-brandNavy" data-testid="text-cost-repair">{guideData.costRanges.repair}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <i aria-hidden="true" className="fas fa-tint text-brandOrange"></i>
                        <span className="text-sm font-bold text-brandNavy">Gutter Installation</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-black text-brandNavy" data-testid="text-cost-gutters">{guideData.costRanges.gutters}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-4 text-center">Prices reflect 2025–2026 market conditions for {guideData.name}, CA. Request a personalized estimate for your specific project.</p>
          </div>
        </div>
      </section>

      <section id="problems" className="py-20 bg-white scroll-mt-16 cv-auto" data-testid="section-problems">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto">
            <span className="bg-red-100 text-red-700 text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Troubleshooting</span>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy mb-4" data-testid="text-problems-heading">
              Common Roofing Problems in <span className="text-brandOrange">{guideData.name}</span>
            </h2>
            <p className="text-slate-600 font-medium mb-10">Local conditions in {guideData.name} create specific roofing challenges. Here are the most common issues homeowners face and how to address them.</p>
            <div className="space-y-6">
              {guideData.commonProblems.map((prob, idx) => (
                <div key={idx} className="bg-brandGrey rounded-2xl p-6 border border-gray-100" data-testid={`card-problem-${idx}`}>
                  <h3 className="text-base font-black text-brandNavy mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-sm flex-shrink-0">
                      {idx + 1}
                    </span>
                    {prob.problem}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-1"><i aria-hidden="true" className="fas fa-times-circle mr-1"></i>Cause</p>
                      <p className="text-sm text-slate-600 font-medium">{prob.cause}</p>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-green-500 mb-1"><i aria-hidden="true" className="fas fa-check-circle mr-1"></i>Solution</p>
                      <p className="text-sm text-slate-600 font-medium">{prob.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="maintenance" className="py-20 bg-brandGrey scroll-mt-16 cv-auto" data-testid="section-maintenance">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto">
            <span className="bg-purple-100 text-purple-700 text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Maintenance</span>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy mb-4" data-testid="text-maintenance-heading">
              Seasonal Maintenance <span className="text-brandOrange">Calendar</span>
            </h2>
            <p className="text-slate-600 font-medium mb-10">A year-round maintenance plan tailored to {guideData.name}'s climate conditions.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guideData.maintenanceTips.map((tip, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm" data-testid={`card-season-${idx}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                      <i aria-hidden="true" className={`fas ${seasonIcons[tip.season] || "fa-calendar"}`}></i>
                    </div>
                    <h3 className="text-base font-black text-brandNavy uppercase">{tip.season}</h3>
                  </div>
                  <ul className="space-y-2">
                    {tip.tasks.map((task, tidx) => (
                      <li key={tidx} className="flex items-start gap-2">
                        <i aria-hidden="true" className="fas fa-check text-brandOrange text-xs mt-1.5 flex-shrink-0"></i>
                        <span className="text-sm text-slate-600 font-medium">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contractor" className="py-20 bg-white scroll-mt-16 cv-auto" data-testid="section-contractor">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto">
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Contractor Tips</span>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy mb-4" data-testid="text-contractor-heading">
              How to Choose a <span className="text-brandOrange">Roofing Contractor</span> in {guideData.name}
            </h2>
            <p className="text-slate-600 font-medium mb-10">Selecting the right roofer is one of the most important decisions you'll make. Use this checklist to evaluate contractors in the {guideData.name} area.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "fa-id-card", title: "Verify Licensing", desc: "Confirm an active C-39 roofing license with the California Contractors State License Board (CSLB). Check for any complaints or disciplinary actions." },
                { icon: "fa-shield-alt", title: "Confirm Insurance", desc: "Require proof of general liability insurance (minimum $1M) and workers' compensation coverage. Never hire uninsured contractors." },
                { icon: "fa-certificate", title: "Check Manufacturer Certifications", desc: "Look for GAF Master Elite, Owens Corning Platinum, or CertainTeed SELECT ShingleMaster credentials. These ensure proper installation and warranty eligibility." },
                { icon: "fa-star", title: "Read Verified Reviews", desc: "Check Google, Yelp, and Diamond Certified reviews. Look for consistent positive feedback, not just a high rating. Ask for local references in " + guideData.name + "." },
                { icon: "fa-file-contract", title: "Get Written Estimates", desc: "Obtain at least 3 written estimates. Compare scope of work, materials specified, timeline, and warranty terms — not just total price." },
                { icon: "fa-file-invoice-dollar", title: "Understand the Warranty", desc: "Ask about both manufacturer material warranty and contractor workmanship warranty. Top contractors offer 10+ year workmanship guarantees." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-brandGrey rounded-2xl p-5" data-testid={`card-contractor-tip-${idx}`}>
                  <div className="w-10 h-10 bg-brandOrange/10 rounded-xl flex items-center justify-center text-brandOrange flex-shrink-0">
                    <i aria-hidden="true" className={`fas ${item.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-brandNavy uppercase mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-brandGrey scroll-mt-16 cv-auto" data-testid="section-guide-faq">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto">
            <span className="bg-brandNavy text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy mb-10" data-testid="text-faq-heading">
              {guideData.name} Roofing <span className="text-brandOrange">Questions Answered</span>
            </h2>
            <div className="space-y-3">
              {guideData.guideFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden" data-testid={`card-faq-${idx}`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition"
                    data-testid={`button-faq-${idx}`}
                  >
                    <span className="text-sm font-black text-brandNavy pr-4 flex items-center gap-2">
                      <i aria-hidden="true" className="fas fa-question-circle text-brandOrange/40 text-xs flex-shrink-0"></i>
                      {faq.question}
                    </span>
                    <i aria-hidden="true" className={`fas fa-chevron-down text-brandOrange text-xs transition-transform duration-300 flex-shrink-0 ${openFaq === idx ? "rotate-180" : ""}`}></i>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5">
                      <p className="text-sm text-slate-600 font-medium leading-relaxed" data-testid={`text-faq-answer-${idx}`}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white cv-auto" data-testid="section-related-guides">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="max-w-3xl mx-auto">
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Related Guides</span>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy mb-10">
              Explore More <span className="text-brandOrange">City Guides</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {relatedSlugs.map((slug) => {
                const related = cityGuides[slug];
                if (!related) return null;
                return (
                  <Link
                    key={slug}
                    href={`/city-roofing-guides/${slug}`}
                    className="bg-brandGrey rounded-2xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                    data-testid={`link-related-guide-${slug}`}
                  >
                    <img
                      src={cityImages[slug] || "/images/roofing-aerial-neighborhood.webp"}
                      alt={`${related.name} roofing guide`}
                      className="w-full h-24 object-cover rounded-xl mb-3"
                      loading="lazy"
                      width={300}
                      height={96}
                    />
                    <h3 className="text-sm font-black text-brandNavy group-hover:text-brandOrange transition">{related.name} Guide</h3>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">{related.climateZone}</p>
                  </Link>
                );
              })}
            </div>
            <div className="mt-8 bg-brandNavy/5 border border-brandNavy/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-brandOrange block mb-1">Need Professional Help?</span>
                <p className="text-sm font-black text-brandNavy">View our {guideData.name} roofing services, project gallery, and customer reviews.</p>
              </div>
              <Link
                href={`/${citySlug}`}
                className="bg-brandOrange text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brandNavy transition whitespace-nowrap"
                data-testid="link-service-page-bottom"
              >
                <i aria-hidden="true" className="fas fa-tools mr-2"></i> {guideData.name} Services
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Link href="/city-roofing-guides" className="bg-brandGrey text-brandNavy px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brandOrange hover:text-white transition" data-testid="link-all-guides">
                View All City Guides
              </Link>
              <Link href="/blog" className="bg-brandGrey text-brandNavy px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brandOrange hover:text-white transition" data-testid="link-blog-from-guide">
                Read Blog Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Need a Roofing Estimate in ${guideData.name}?`}
        subtitle={`Ready to start your project? ROOF EXPRESS provides free inspections and detailed estimates for ${guideData.name} homeowners. Diamond Certified with 25+ years of Bay Area experience.`}
      />
    </Layout>
  );
}
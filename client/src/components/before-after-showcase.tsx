import { useState, useEffect, useCallback } from "react";

interface BAPhoto {
  id: string;
  img: string;
  fullImg: string;
  city: string;
  date: string;
  createdAt: number;
  description: string;
}

function formatDate(timestamp: number): string {
  const d = new Date(timestamp * 1000);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

const PER_PAGE = 8;

export default function BeforeAfterShowcase() {
  const [photos, setPhotos] = useState<BAPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/companycam/photos?tag=Before%20and%20After", { cache: "no-store" })
      .then(r => r.ok ? r.json() : { photos: [] })
      .then(data => {
        if (!mounted) return;
        const mapped: BAPhoto[] = data.photos
          .map((p: { id: string; thumbnail: string; fullSize: string; city: string; state: string; createdAt: number; description?: string }) => ({
            id: p.id,
            img: p.thumbnail,
            fullImg: p.fullSize,
            city: `${p.city}, ${p.state === "California" ? "CA" : p.state}`,
            date: formatDate(p.createdAt),
            createdAt: p.createdAt,
            description: p.description || "",
          }))
          .sort((a: BAPhoto, b: BAPhoto) => b.createdAt - a.createdAt);
        setPhotos(mapped);
      })
      .catch(() => {})
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    return () => { document.body.style.overflow = ""; };
  }, []);

  const totalPages = Math.max(1, Math.ceil(photos.length / PER_PAGE));
  const clampedPage = Math.min(page, totalPages - 1);
  const start = clampedPage * PER_PAGE;
  const visible = photos.slice(start, start + PER_PAGE);

  useEffect(() => {
    if (page !== clampedPage) setPage(clampedPage);
  }, [page, clampedPage]);

  const safeIdx = lightboxIdx !== null && lightboxIdx < photos.length ? lightboxIdx : null;
  useEffect(() => {
    if (lightboxIdx !== null && lightboxIdx >= photos.length) {
      setLightboxIdx(null);
      document.body.style.overflow = "";
    }
  }, [lightboxIdx, photos.length]);

  const goNext = useCallback(() => setPage(p => {
    const max = Math.max(0, Math.ceil(photos.length / PER_PAGE) - 1);
    return Math.min(p + 1, max);
  }), [photos.length]);
  const goPrev = useCallback(() => setPage(p => Math.max(p - 1, 0)), []);

  const openLightbox = useCallback((idx: number) => {
    const globalIdx = start + idx;
    if (globalIdx < photos.length) {
      setLightboxIdx(globalIdx);
      document.body.style.overflow = "hidden";
    }
  }, [start, photos.length]);

  const closeLightbox = useCallback(() => {
    setLightboxIdx(null);
    document.body.style.overflow = "";
  }, []);

  const lbPrev = useCallback(() => setLightboxIdx(i => i !== null ? Math.max(i - 1, 0) : null), []);
  const lbNext = useCallback(() => setLightboxIdx(i => i !== null ? Math.min(i + 1, photos.length - 1) : null), [photos.length]);

  useEffect(() => {
    if (safeIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lbPrev();
      if (e.key === "ArrowRight") lbNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [safeIdx, closeLightbox, lbPrev, lbNext]);

  if (loading) return null;
  if (photos.length === 0) return null;

  const currentPhoto = safeIdx !== null ? photos[safeIdx] : null;
  const pageCount = Math.ceil(photos.length / PER_PAGE);

  return (
    <section className="py-16 bg-brandNavy" data-testid="section-before-after-showcase">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-amber-500 text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4" data-testid="badge-ba-label">
            <i aria-hidden="true" className="fas fa-exchange-alt"></i> Before & After
          </span>
          <h2 className="text-2xl md:text-3xl font-black uppercase text-white" data-testid="heading-ba-title">
            Real <span className="text-brandOrangeLight">Transformations</span>
          </h2>
          <p className="text-white/70 text-sm font-medium mt-2 max-w-lg mx-auto" data-testid="text-ba-description">
            See how Bay Area roofs look before and after our team gets to work.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto" data-testid="grid-ba-photos">
          {visible.map((photo, idx) => (
            <div key={photo.id} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
              <div className="px-3 py-2 flex items-center justify-between border-b border-white/10">
                <p className="text-[10px] font-bold text-white/90 flex items-center gap-1" data-testid={`text-ba-city-${photo.id}`}>
                  <i aria-hidden="true" className="fas fa-map-marker-alt text-amber-400 text-[8px]"></i>
                  {photo.city}
                </p>
                <p className="text-[10px] font-bold text-white/60 flex items-center gap-1" data-testid={`text-ba-date-${photo.id}`}>
                  <i aria-hidden="true" className="fas fa-calendar text-[8px]"></i>
                  {photo.date}
                </p>
              </div>
              <button
                onClick={() => openLightbox(idx)}
                className="w-full relative aspect-[5/4] bg-slate-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-brandNavy"
                data-testid={`button-ba-photo-${photo.id}`}
              >
                <img
                  src={photo.img}
                  alt={photo.description || `Before and after roofing project in ${photo.city} — ${photo.date}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  data-testid={`img-ba-thumb-${photo.id}`}
                />
                <div className="absolute bottom-2.5 left-2.5">
                  <span className="bg-amber-500 text-black text-[9px] font-black uppercase px-2 py-1 rounded-full tracking-widest inline-flex items-center gap-1">
                    <i aria-hidden="true" className="fas fa-exchange-alt text-[8px]"></i> B&A
                  </span>
                </div>
              </button>
              {photo.description && (
                <div className="px-3 py-2.5 border-t border-white/10">
                  <p className="text-white/80 text-xs leading-relaxed line-clamp-2" data-testid={`text-ba-desc-${photo.id}`}>
                    {photo.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              disabled={clampedPage === 0}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all border border-white/10 hover:border-white/20"
              data-testid="button-ba-prev"
            >
              <i aria-hidden="true" className="fas fa-chevron-left text-[10px]"></i> Back
            </button>
            <span className="text-white/70 text-xs font-bold" data-testid="text-ba-page-indicator">
              {clampedPage + 1} / {pageCount}
            </span>
            <button
              onClick={goNext}
              disabled={clampedPage === pageCount - 1}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all border border-white/10 hover:border-white/20"
              data-testid="button-ba-next"
            >
              Next <i aria-hidden="true" className="fas fa-chevron-right text-[10px]"></i>
            </button>
          </div>
        )}

        <div className="text-center mt-6">
          <a
            href="/gallery"
            className="text-amber-400 hover:text-amber-300 text-xs font-black uppercase tracking-widest transition-colors"
            data-testid="link-ba-view-gallery"
          >
            View Full Gallery <i aria-hidden="true" className="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
      </div>

      {currentPhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Before and after photo lightbox" data-testid="dialog-ba-lightbox">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={closeLightbox} data-testid="overlay-ba-lightbox" />
          <button onClick={closeLightbox} className="absolute top-4 right-4 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" data-testid="button-ba-lightbox-close" aria-label="Close lightbox">
            <i aria-hidden="true" className="fas fa-times text-xl"></i>
          </button>
          <button onClick={lbPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" data-testid="button-ba-lightbox-prev" aria-label="Previous photo">
            <i aria-hidden="true" className="fas fa-chevron-left text-lg"></i>
          </button>
          <button onClick={lbNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" data-testid="button-ba-lightbox-next" aria-label="Next photo">
            <i aria-hidden="true" className="fas fa-chevron-right text-lg"></i>
          </button>
          <div className="relative z-[105] max-w-5xl w-full mx-4 flex flex-col items-center">
            <div className="w-full max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentPhoto.fullImg}
                alt={currentPhoto.description || `Before and after roofing project in ${currentPhoto.city} — ${currentPhoto.date}`}
                className="w-full h-full object-contain bg-black"
                data-testid="img-ba-lightbox"
              />
            </div>
            <div className="mt-5 text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="bg-amber-500 text-black text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest inline-flex items-center gap-1.5" data-testid="badge-ba-lightbox-tag">
                  <i aria-hidden="true" className="fas fa-exchange-alt text-[9px]"></i> B&A
                </span>
                <span className="bg-green-700 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest inline-flex items-center gap-1.5" data-testid="badge-ba-lightbox-city">
                  <i aria-hidden="true" className="fas fa-map-marker-alt text-[9px]"></i> {currentPhoto.city}
                </span>
              </div>
              {currentPhoto.description && (
                <p className="text-white/90 text-sm leading-relaxed mt-4 max-w-lg mx-auto" data-testid="text-ba-lightbox-desc">
                  {currentPhoto.description}
                </p>
              )}
              <p className="text-white/70 text-sm font-bold mt-3" data-testid="text-ba-lightbox-date">
                <i aria-hidden="true" className="fas fa-calendar-alt text-amber-400 mr-1.5"></i>{currentPhoto.date}
              </p>
              <p className="text-white/60 text-xs font-bold mt-1" data-testid="text-ba-lightbox-counter">{safeIdx! + 1} of {photos.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

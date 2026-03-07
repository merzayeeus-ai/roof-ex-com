import { useState, useEffect, useCallback } from "react";

interface SGPhoto {
  id: string;
  img: string;
  fullImg: string;
  city: string;
  date: string;
  description: string;
  createdAt: number;
}

function formatDate(timestamp: number): string {
  const d = new Date(timestamp * 1000);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

const PER_PAGE = 8;

export default function ServiceGallery({ tag, title }: {
  tag: string;
  title: string;
}) {
  const [photos, setPhotos] = useState<SGPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch(`/api/companycam/photos?tag=${encodeURIComponent(tag)}`, { cache: "no-store" })
      .then(r => r.ok ? r.json() : { photos: [] })
      .then(data => {
        if (!mounted) return;
        const mapped: SGPhoto[] = data.photos
          .map((p: { id: string; thumbnail: string; fullSize: string; city: string; state: string; createdAt: number; description?: string }) => ({
            id: p.id,
            img: p.thumbnail,
            fullImg: p.fullSize,
            city: `${p.city}, ${p.state === "California" ? "CA" : p.state}`,
            date: formatDate(p.createdAt),
            description: p.description || "",
            createdAt: p.createdAt,
          }))
          .sort((a: SGPhoto, b: SGPhoto) => b.createdAt - a.createdAt);
        setPhotos(mapped);
      })
      .catch(() => {})
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, [tag]);

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
  const tagSlug = tag.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <section className="py-16 bg-brandNavy" data-testid={`section-service-gallery-${tagSlug}`}>
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-brandOrangeLight text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4" data-testid={`badge-service-gallery-${tagSlug}`}>
            <i aria-hidden="true" className="fas fa-camera"></i> {tag}
          </span>
          <h2 className="text-2xl md:text-3xl font-black uppercase text-white" data-testid={`heading-service-gallery-${tagSlug}`}>
            {title.split(" ").slice(0, -1).join(" ")} <span className="text-brandOrangeLight">{title.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-white/70 text-sm font-medium mt-2">
            {photos.length} recent {tag.toLowerCase()} project{photos.length !== 1 ? "s" : ""} across the Bay Area — documented and quality-verified by our team
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto" data-testid={`grid-service-gallery-${tagSlug}`}>
          {visible.map((photo, idx) => (
            <div key={photo.id} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
              <div className="px-3 py-2 flex items-center justify-between border-b border-white/10">
                <p className="text-[10px] font-bold text-white/90 flex items-center gap-1" data-testid={`text-sg-city-${photo.id}`}>
                  <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrangeLight text-[8px]"></i>
                  {photo.city}
                </p>
                <p className="text-[10px] font-bold text-white/60 flex items-center gap-1" data-testid={`text-sg-date-${photo.id}`}>
                  <i aria-hidden="true" className="fas fa-calendar text-[8px]"></i>
                  {photo.date}
                </p>
              </div>
              <button
                onClick={() => openLightbox(idx)}
                className="w-full relative aspect-[5/4] bg-slate-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brandOrangeLight focus:ring-offset-2 focus:ring-offset-brandNavy"
                data-testid={`button-sg-photo-${photo.id}`}
              >
                <img
                  src={photo.img}
                  alt={photo.description || `${tag} project in ${photo.city} — ${photo.date}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  data-testid={`img-sg-thumb-${photo.id}`}
                />
              </button>
              {photo.description && (
                <div className="px-3 py-2.5 border-t border-white/10">
                  <p className="text-white/80 text-xs leading-relaxed line-clamp-2" data-testid={`text-sg-desc-${photo.id}`}>
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
              onClick={() => setPage(p => Math.max(p - 1, 0))}
              disabled={clampedPage === 0}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all border border-white/10 hover:border-white/20"
              data-testid={`button-sg-prev-${tagSlug}`}
              aria-label="Previous photos"
            >
              <i aria-hidden="true" className="fas fa-chevron-left text-[10px]"></i> Back
            </button>
            <span className="text-white/70 text-xs font-bold" data-testid={`text-sg-page-${tagSlug}`}>
              {clampedPage + 1} / {pageCount}
            </span>
            <button
              onClick={() => setPage(p => Math.min(p + 1, pageCount - 1))}
              disabled={clampedPage === pageCount - 1}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all border border-white/10 hover:border-white/20"
              data-testid={`button-sg-next-${tagSlug}`}
              aria-label="Next photos"
            >
              Next <i aria-hidden="true" className="fas fa-chevron-right text-[10px]"></i>
            </button>
          </div>
        )}

        <div className="text-center mt-6">
          <a
            href="/gallery"
            className="text-brandOrangeLight hover:text-orange-300 text-xs font-black uppercase tracking-widest transition-colors"
            data-testid={`link-sg-gallery-${tagSlug}`}
          >
            View Full Gallery <i aria-hidden="true" className="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
      </div>

      {currentPhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" role="dialog" aria-modal="true" aria-label={`${title} photo lightbox`} data-testid={`dialog-sg-lightbox-${tagSlug}`}>
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={closeLightbox} data-testid={`overlay-sg-lightbox-${tagSlug}`} />
          <button onClick={closeLightbox} className="absolute top-4 right-4 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" data-testid={`button-sg-lightbox-close-${tagSlug}`} aria-label="Close lightbox">
            <i aria-hidden="true" className="fas fa-times text-xl"></i>
          </button>
          <button onClick={lbPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" data-testid={`button-sg-lightbox-prev-${tagSlug}`} aria-label="Previous photo">
            <i aria-hidden="true" className="fas fa-chevron-left text-lg"></i>
          </button>
          <button onClick={lbNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" data-testid={`button-sg-lightbox-next-${tagSlug}`} aria-label="Next photo">
            <i aria-hidden="true" className="fas fa-chevron-right text-lg"></i>
          </button>
          <div className="relative z-[105] max-w-5xl w-full mx-4 flex flex-col items-center">
            <div className="w-full max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentPhoto.fullImg}
                alt={`${tag} project in ${currentPhoto.city} — ${currentPhoto.date}`}
                className="w-full h-full object-contain bg-black"
                data-testid={`img-sg-lightbox-${tagSlug}`}
              />
            </div>
            <div className="mt-5 text-center">
              <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest inline-flex items-center gap-1.5" data-testid={`badge-sg-lightbox-tag-${tagSlug}`}>
                <i aria-hidden="true" className="fas fa-camera text-[9px]"></i> {tag}
              </span>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="bg-green-700 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest inline-flex items-center gap-1.5" data-testid={`badge-sg-lightbox-city-${tagSlug}`}>
                  <i aria-hidden="true" className="fas fa-map-marker-alt text-[9px]"></i> {currentPhoto.city}
                </span>
              </div>
              {currentPhoto.description && (
                <p className="text-white/90 text-sm leading-relaxed mt-4 max-w-lg mx-auto" data-testid={`text-sg-lightbox-desc-${tagSlug}`}>
                  {currentPhoto.description}
                </p>
              )}
              <p className="text-white/70 text-sm font-bold mt-3" data-testid={`text-sg-lightbox-date-${tagSlug}`}>
                <i aria-hidden="true" className="fas fa-calendar-alt text-brandOrangeLight mr-1.5"></i>{currentPhoto.date}
              </p>
              <p className="text-white/60 text-xs font-bold mt-1" data-testid={`text-sg-lightbox-counter-${tagSlug}`}>{safeIdx! + 1} of {photos.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

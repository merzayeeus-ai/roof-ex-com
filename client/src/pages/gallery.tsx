import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout";
import { CTASection, NearbyAreas } from "@/components/page-bottom";
import { cities } from "@/data/cities";
import { useSEO } from "@/hooks/use-seo";

const cityList = Object.values(cities).sort((a, b) => a.name.localeCompare(b.name));

const JOBBER_URL = "https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media";

const projects = [
  { id: 1, location: "Millbrae, CA", category: "Residential", title: "CertainTeed Landmark System", img: "/images/shingle-roof-house.webp" },
  { id: 2, location: "Pacific Heights, SF", category: "Residential", title: "GAF Timberline HDZ Install", img: "/images/shingle-roof-finish.webp" },
  { id: 3, location: "Willow Glen, SJ", category: "Residential", title: "High-Definition Shingle", img: "/images/shingle-roof-sf.webp" },
  { id: 4, location: "San Mateo, CA", category: "Commercial", title: "Modified Bitumen Torch Down", img: "/images/torch-down-worksite.webp" },
  { id: 5, location: "Downtown Oakland", category: "Commercial", title: "TPO Cool Roof System", img: "/images/torch-down-roll.webp" },
  { id: 6, location: "Palo Alto, CA", category: "Emergency", title: "Storm Leak Containment", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/IMG_E4442.JPG/:/rs=w:1280,h:1707" },
  { id: 7, location: "Sunnyvale, CA", category: "Skylights", title: "Velux Solar Venting Install", img: "/images/skylight-new.webp" },
  { id: 8, location: "Millbrae, CA", category: "Residential", title: "CertainTeed Grand Manor", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/6a00d143-fa26-4ed7-9712-82d41058e621-f770ecb.jpg/:/rs=w:1280,h:960" },
  { id: 9, location: "San Jose, CA", category: "Residential", title: "Almaden Valley Shingle Install", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/1-Apr%2011%202025%2003_45pm-Xvqo.jpg/:/rs=w:1280,h:960" },
  { id: 10, location: "SF / 94117", category: "Residential", title: "Architectural Shingle System", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/24.jpg/:/rs=w:1280,h:960" },
  { id: 11, location: "Hayward, CA", category: "Commercial", title: "Industrial Torch-Down System", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/16.jpg/:/rs=w:1280,h:960" },
  { id: 12, location: "Los Gatos, CA", category: "Residential", title: "Custom Estate Roofing", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/21.jpg/:/rs=w:1280,h:960" },
  { id: 13, location: "Burlingame, CA", category: "Residential", title: "GAF Cool Shingle Upgrade", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/22.jpg/:/rs=w:1280,h:960" },
  { id: 14, location: "Cupertino, CA", category: "Skylights", title: "Velux Sun Tunnel Integration", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/13.jpg/:/rs=w:1280,h:960" },
  { id: 15, location: "Redwood City, CA", category: "Repair", title: "Emergency Flashing Repair", img: "/images/shingle-repair.webp" },
  { id: 16, location: "SF / 94109", category: "Residential", title: "Nob Hill Victorian Roofing", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/15.jpg/:/rs=w:1280,h:960" },
  { id: 17, location: "Santa Clara, CA", category: "Residential", title: "Silicon Valley Modern Shingle", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/20.jpg/:/rs=w:1280,h:960" },
  { id: 18, location: "Pacifica, CA", category: "Residential", title: "Coastal Mist-Resistant System", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/25.jpg/:/rs=w:1280,h:960" },
  { id: 19, location: "SF / 94103", category: "Commercial", title: "Warehouse Bitumen Membrane", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/10.jpg/:/rs=w:1280,h:960" },
  { id: 20, location: "SJ / 95132", category: "Residential", title: "High-Definition Shingle Array", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/28.jpg/:/rs=w:1280,h:960" },
  { id: 21, location: "Daly City, CA", category: "Residential", title: "Fog-Belt Weather Shield", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/27.jpg/:/rs=w:1280,h:960" },
  { id: 22, location: "Mountain View, CA", category: "Residential", title: "Tech Campus Adjacent Install", img: "/images/gallery-tech-campus.webp" },
  { id: 23, location: "SF / 94110", category: "Residential", title: "Mission District Re-Roof", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/23.jpg/:/rs=w:1280,h:960" },
  { id: 24, location: "Menlo Park, CA", category: "Residential", title: "Premium Dimensional Shingle", img: "/images/gallery-premium-shingle.webp" },
  { id: 25, location: "Fremont, CA", category: "Commercial", title: "Commercial TPO Membrane", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/18.jpg/:/rs=w:1280,h:960" },
  { id: 26, location: "Campbell, CA", category: "Residential", title: "Suburban Shingle Replacement", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/17.jpg/:/rs=w:1280,h:960" },
  { id: 27, location: "SF / 94112", category: "Repair", title: "Valley Flashing Restoration", img: "/images/shingle-repair.webp" },
  { id: 28, location: "San Carlos, CA", category: "Skylights", title: "Dual Skylight Array", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/12.jpg/:/rs=w:1280,h:960" },
  { id: 29, location: "Saratoga, CA", category: "Residential", title: "Luxury Estate Full System", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/11.jpg/:/rs=w:1280,h:960" },
  { id: 30, location: "SF / 94122", category: "Inspection", title: "Sunset District Roof Audit", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/8.jpg/:/rs=w:1280,h:960" },
  { id: 31, location: "Belmont, CA", category: "Residential", title: "Hillside Wind-Resistant System", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/7.jpg/:/rs=w:1280,h:960" },
  { id: 32, location: "Union City, CA", category: "Commercial", title: "Multi-Unit Flat Roof System", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/6.jpg/:/rs=w:1280,h:960" },
  { id: 33, location: "SF / 94116", category: "Worksite", title: "Active Crew Documentation", img: "/images/team-working.webp" },
  { id: 34, location: "Milpitas, CA", category: "Residential", title: "New Construction Shingle", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/4.jpg/:/rs=w:1280,h:960" },
  { id: 35, location: "Redwood City, CA", category: "Gutters", title: "Seamless Gutter Integration", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/3.jpg/:/rs=w:1280,h:960" },
  { id: 36, location: "SF / 94114", category: "Residential", title: "Castro Victorian Restoration", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/2.jpg/:/rs=w:1280,h:960" },
  { id: 37, location: "San Bruno, CA", category: "Repair", title: "Chimney Flashing Seal", img: "/images/shingle-repair.webp" },
  { id: 38, location: "South SF, CA", category: "Commercial", title: "Industrial Warehouse Membrane", img: "https://img1.wsimg.com/isteam/ip/568bedcb-0534-4bab-b216-559e667e598e/IMG_E4442.JPG/:/rs=w:1280,h:960" },
  { id: 39, location: "Bay Area, CA", category: "Residential", title: "Aerial Neighborhood View", img: "/images/roofing-aerial-neighborhood.webp" },
  { id: 40, location: "San Francisco, CA", category: "Residential", title: "Roofer on Job Site", img: "/images/roofer-on-deck.webp" },
  { id: 41, location: "Bay Area, CA", category: "Repair", title: "Professional Inspection", img: "/images/roof-inspection-clipboard.webp" },
  { id: 42, location: "Bay Area, CA", category: "Commercial", title: "Branded Crew Flat Roof Patch", img: "/images/patch-roof-branded.webp" },
  { id: 43, location: "Bay Area, CA", category: "Residential", title: "Shingle Nailing Detail", img: "/images/nailing-shingle.webp" },
  { id: 44, location: "Bay Area, CA", category: "Residential", title: "Asphalt Shingle Installation", img: "/images/asphalt-shingle-crew.webp" },
  { id: 45, location: "Bay Area, CA", category: "Residential", title: "Dark Architectural Shingles with Skylight", img: "/images/asphalt-shingle-skylight.webp" },
  { id: 46, location: "Bay Area, CA", category: "Commercial", title: "Commercial White TPO Roof", img: "/images/commercial-roofing-tpo.webp" },
  { id: 47, location: "Bay Area, CA", category: "Commercial", title: "Industrial Warehouse Roofing", img: "/images/commercial-roofs-aerial.webp" },
  { id: 48, location: "Bay Area, CA", category: "Commercial", title: "Torch-Down Roofing Application", img: "/images/torch-down-roofing.webp" },
  { id: 49, location: "Bay Area, CA", category: "Commercial", title: "Torch-Down Repair Close-Up", img: "/images/torch-down-repair-closeup.webp" },
  { id: 50, location: "Bay Area, CA", category: "Commercial", title: "Completed Flat Roof System", img: "/images/completed-flat-roof.webp" },
  { id: 51, location: "Bay Area, CA", category: "Commercial", title: "Commercial Roof Finish", img: "/images/commercial-roof-finish.webp" },
  { id: 52, location: "Bay Area, CA", category: "Residential", title: "Completed Shingle Roof", img: "/images/completed-shingle-roof.webp" },
  { id: 53, location: "Bay Area, CA", category: "Residential", title: "Asphalt Shingle Close-Up", img: "/images/asphalt-shingle-closeup.webp" },
  { id: 54, location: "Bay Area, CA", category: "Residential", title: "Dark Shingle Installation", img: "/images/roofing-dark-shingles.webp" },
  { id: 55, location: "San Francisco, CA", category: "Worksite", title: "ROOF EXPRESS Crew SF Skyline", img: "/images/crew-sf-skyline.webp" },
  { id: 56, location: "Bay Area, CA", category: "Gutters", title: "Seamless Gutter System", img: "/images/gutters.webp" },
  { id: 57, location: "Bay Area, CA", category: "Repair", title: "Roof Inspection & Measurement", img: "/images/roof-inspection-measuring.webp" },
];

type FilterCategory = "All" | "Residential" | "Flat/Commercial" | "Skylights" | "Gutters" | "Repairs & Inspection";

interface FilterTab {
  key: FilterCategory;
  label: string;
  icon: string;
  matchFn: (p: typeof projects[0]) => boolean;
}

const filterTabs: FilterTab[] = [
  { key: "All", label: "All Projects", icon: "fa-th", matchFn: () => true },
  { key: "Residential", label: "Residential", icon: "fa-home", matchFn: (p) => p.category === "Residential" },
  { key: "Flat/Commercial", label: "Flat & Commercial", icon: "fa-building", matchFn: (p) => ["Commercial", "Worksite"].includes(p.category) },
  { key: "Skylights", label: "Skylights", icon: "fa-sun", matchFn: (p) => p.category === "Skylights" },
  { key: "Gutters", label: "Gutters & Metal", icon: "fa-tint", matchFn: (p) => p.category === "Gutters" },
  { key: "Repairs & Inspection", label: "Repairs & Inspection", icon: "fa-tools", matchFn: (p) => ["Repair", "Emergency", "Inspection"].includes(p.category) },
];

function getCategoryStyle(category: string) {
  switch (category) {
    case "Residential": return { bg: "bg-brandOrange", icon: "fa-home" };
    case "Commercial": return { bg: "bg-brandBlue", icon: "fa-building" };
    case "Emergency": return { bg: "bg-red-500", icon: "fa-exclamation-triangle" };
    case "Skylights": return { bg: "bg-amber-500", icon: "fa-sun" };
    case "Repair": return { bg: "bg-orange-600", icon: "fa-wrench" };
    case "Inspection": return { bg: "bg-slate-600", icon: "fa-search" };
    case "Worksite": return { bg: "bg-brandNavy", icon: "fa-hard-hat" };
    case "Gutters": return { bg: "bg-cyan-600", icon: "fa-tint" };
    default: return { bg: "bg-slate-500", icon: "fa-circle" };
  }
}

const processSteps = [
  { icon: "fa-camera", title: "Photo Documentation", description: "Every project begins with thorough photographic documentation of existing conditions and measurements." },
  { icon: "fa-gem", title: "Premium Materials", description: "We source only top-tier materials from CertainTeed, GAF, and Velux for lasting performance." },
  { icon: "fa-hard-hat", title: "Expert Installation", description: "Our trained crews follow manufacturer specifications and industry best practices on every install." },
  { icon: "fa-clipboard-check", title: "Final Inspection", description: "A comprehensive walkthrough and quality check ensures every detail meets our exacting standards." },
];

const blogArticles = [
  { title: "Bay Area Roofing Cost Factors", slug: "bay-area-roofing-cost-factors", icon: "fa-dollar-sign" },
  { title: "Best Roofing Materials for Coastal Cities", slug: "best-roofing-materials-coastal-cities", icon: "fa-water" },
  { title: "Roof Repair vs Replacement", slug: "roof-repair-vs-replacement", icon: "fa-balance-scale" },
];

function formatPhotoDate(timestamp: number): { date: string; dateLabel: string } {
  const d = new Date(timestamp * 1000);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return {
    date: `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
    dateLabel: `${months[d.getMonth()]} ${d.getFullYear()}`,
  };
}

interface FieldPhoto {
  id: string;
  img: string;
  fullImg: string;
  city: string;
  date: string;
  dateLabel: string;
  description: string;
  isBeforeAfter: boolean;
  createdAt: number;
}

function GalleryLightbox({ photos, activeIdx, onClose, onSelect, renderInfo }: {
  photos: { id: string; img: string; fullImg: string; alt: string }[];
  activeIdx: number;
  onClose: () => void;
  onSelect: (i: number) => void;
  renderInfo: (idx: number) => React.ReactNode;
}) {
  const thumbStripRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const goPrev = useCallback(() => onSelect((activeIdx - 1 + photos.length) % photos.length), [activeIdx, photos.length, onSelect]);
  const goNext = useCallback(() => onSelect((activeIdx + 1) % photos.length), [activeIdx, photos.length, onSelect]);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
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
    <div ref={dialogRef} className="fixed inset-0 z-[100] flex flex-col" role="dialog" aria-modal="true" aria-label="Photo gallery lightbox" data-testid="dialog-gallery-lightbox">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={onClose} />
      <button ref={closeRef} onClick={onClose} className="absolute top-4 right-4 z-[110] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" data-testid="button-gallery-lightbox-close" aria-label="Close gallery">
        <i aria-hidden="true" className="fas fa-times text-lg"></i>
      </button>
      <div className="relative z-[105] flex-1 flex items-center justify-center px-4 pt-4 pb-2 min-h-0">
        <button onClick={goPrev} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110" data-testid="button-gallery-lightbox-prev" aria-label="Previous photo">
          <i aria-hidden="true" className="fas fa-chevron-left text-lg"></i>
        </button>
        <button onClick={goNext} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110" data-testid="button-gallery-lightbox-next" aria-label="Next photo">
          <i aria-hidden="true" className="fas fa-chevron-right text-lg"></i>
        </button>
        <div className="max-w-5xl w-full flex flex-col items-center">
          <div className="w-full max-h-[60vh] md:max-h-[65vh] rounded-2xl overflow-hidden shadow-2xl bg-black/50">
            <img src={photo.fullImg} alt={photo.alt} className="w-full h-full object-contain transition-opacity duration-300" data-testid="img-gallery-lightbox" />
          </div>
          <div className="mt-4 text-center">
            {renderInfo(activeIdx)}
            <p className="text-white/60 text-xs font-bold mt-2" data-testid="text-gallery-lightbox-counter">{activeIdx + 1} / {photos.length}</p>
          </div>
        </div>
      </div>
      <div className="relative z-[105] shrink-0 px-4 pb-4 pt-2">
        <div ref={thumbStripRef} className="flex gap-2 overflow-x-auto py-2 px-1 snap-x" style={{ scrollbarWidth: "thin" }} data-testid="strip-gallery-lightbox-thumbs">
          {photos.map((p, i) => (
            <button
              key={p.id}
              onClick={() => onSelect(i)}
              className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden transition-all duration-300 snap-center ${
                i === activeIdx ? "ring-2 ring-brandOrange scale-105 opacity-100" : "ring-1 ring-white/10 opacity-50 hover:opacity-80 hover:ring-white/30"
              }`}
              aria-label={`View photo ${i + 1}`}
              data-testid={`button-lightbox-thumb-${i}`}
            >
              <img src={p.img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function FieldGallery() {
  const [allPhotos, setAllPhotos] = useState<FieldPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"showcase" | "grid">("showcase");
  const [filter, setFilter] = useState<"all" | "before-after">("all");
  const thumbStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    const fetchAll = async () => {
      try {
        const [allRes, baRes] = await Promise.all([
          fetch("/api/companycam/photos", { cache: "no-store" }),
          fetch("/api/companycam/photos?tag=Before%20and%20After", { cache: "no-store" }),
        ]);
        const allData = allRes.ok ? await allRes.json() : { photos: [] };
        const baData = baRes.ok ? await baRes.json() : { photos: [] };
        const baIds = new Set<string>(baData.photos.map((p: { id: string }) => p.id));
        const mergedMap = new Map<string, FieldPhoto>();
        for (const p of allData.photos) {
          const { date, dateLabel } = formatPhotoDate(p.createdAt);
          mergedMap.set(p.id, { id: p.id, img: p.thumbnail, fullImg: p.fullSize, city: `${p.city}, ${p.state === "California" ? "CA" : p.state}`, date, dateLabel, description: p.description || "", isBeforeAfter: baIds.has(p.id), createdAt: p.createdAt });
        }
        for (const p of baData.photos) {
          if (!mergedMap.has(p.id)) {
            const { date, dateLabel } = formatPhotoDate(p.createdAt);
            mergedMap.set(p.id, { id: p.id, img: p.thumbnail, fullImg: p.fullSize, city: `${p.city}, ${p.state === "California" ? "CA" : p.state}`, date, dateLabel, description: p.description || "", isBeforeAfter: true, createdAt: p.createdAt });
          }
        }
        if (mounted) setAllPhotos(Array.from(mergedMap.values()).sort((a, b) => b.createdAt - a.createdAt));
      } catch {}
      finally { if (mounted) setLoading(false); }
    };
    fetchAll();
    return () => { mounted = false; };
  }, []);

  const filtered = filter === "before-after" ? allPhotos.filter(p => p.isBeforeAfter) : allPhotos;

  useEffect(() => { setActiveIdx(0); }, [filter]);

  const goPrev = useCallback(() => setActiveIdx(prev => (prev - 1 + filtered.length) % filtered.length), [filtered.length]);
  const goNext = useCallback(() => setActiveIdx(prev => (prev + 1) % filtered.length), [filtered.length]);

  useEffect(() => {
    if (thumbStripRef.current) {
      const thumb = thumbStripRef.current.children[activeIdx] as HTMLElement;
      if (thumb) thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeIdx]);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);

  const totalCount = allPhotos.length;
  const cityCount = new Set(allPhotos.map(p => p.city)).size;
  const baCount = allPhotos.filter(p => p.isBeforeAfter).length;

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-brandNavy to-brandNavy/95" data-testid="section-field-gallery-loading">
        <div className="container mx-auto px-6 max-w-screen-xl text-center">
          <div className="animate-pulse">
            <div className="w-48 h-6 bg-white/10 rounded-full mx-auto mb-4"></div>
            <div className="w-64 h-8 bg-white/10 rounded-full mx-auto mb-8"></div>
            <div className="aspect-[4/3] bg-white/5 rounded-2xl mb-4"></div>
            <div className="flex gap-2 justify-center">
              {[1,2,3,4,5,6].map(i => <div key={i} className="w-20 h-20 bg-white/5 rounded-xl"></div>)}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (totalCount === 0) return null;

  const activePhoto = filtered[activeIdx] || filtered[0];

  return (
    <section className="py-20 bg-gradient-to-b from-brandNavy to-brandNavy/95" data-testid="section-field-gallery">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-green-400 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4" data-testid="badge-field-gallery">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Live from the Field
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white" data-testid="heading-field-gallery">
            Latest Project <span className="text-brandOrangeLight">Photos</span>
          </h2>
          <p className="text-white/70 text-sm font-medium mt-2 max-w-lg mx-auto" data-testid="text-field-description">
            Fresh from our crew — real roofing work happening across the Bay Area right now.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
            <i aria-hidden="true" className="fas fa-images text-green-400 text-sm"></i>
            <span className="text-white font-black text-lg">{totalCount}</span>
            <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Photos</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
            <i aria-hidden="true" className="fas fa-map-marker-alt text-green-400 text-sm"></i>
            <span className="text-white font-black text-lg">{cityCount}</span>
            <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Cities</span>
          </div>
          {baCount > 0 && (
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
              <i aria-hidden="true" className="fas fa-exchange-alt text-amber-400 text-sm"></i>
              <span className="text-white font-black text-lg">{baCount}</span>
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Before & After</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all border ${filter === "all" ? "bg-white/15 text-white border-white/20" : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white/80"}`}
            data-testid="button-field-filter-all"
          >
            <i aria-hidden="true" className="fas fa-images mr-2 text-green-400"></i>All Photos
          </button>
          {baCount > 0 && (
            <button
              onClick={() => setFilter("before-after")}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all border ${filter === "before-after" ? "bg-amber-500/20 text-amber-400 border-amber-500/30" : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white/80"}`}
              data-testid="button-field-filter-ba"
            >
              <i aria-hidden="true" className="fas fa-exchange-alt mr-2 text-amber-400"></i>Before & After
            </button>
          )}
          <div className="w-px h-8 bg-white/10"></div>
          <div className="flex items-stretch gap-3">
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1.5">
              <button
                onClick={() => setViewMode("showcase")}
                className={`px-3.5 py-2.5 rounded-lg text-xs font-bold transition-all ${viewMode === "showcase" ? "bg-white/15 text-white" : "text-white/60 hover:text-white/70"}`}
                data-testid="button-field-view-showcase"
                aria-label="Showcase view"
              >
                <i aria-hidden="true" className="fas fa-image"></i>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3.5 py-2.5 rounded-lg text-xs font-bold transition-all ${viewMode === "grid" ? "bg-white/15 text-white" : "text-white/60 hover:text-white/70"}`}
                data-testid="button-field-view-grid"
                aria-label="Grid view"
              >
                <i aria-hidden="true" className="fas fa-th"></i>
              </button>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 shrink-0">
              <p className="text-lg font-black text-white">{filtered.length}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Photos</p>
            </div>
          </div>
        </div>

        {viewMode === "showcase" ? (
          <div data-testid="field-gallery-showcase" className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-bold text-white inline-flex items-center gap-1.5">
                  <i aria-hidden="true" className="fas fa-map-marker-alt text-green-400 text-[10px]"></i> {activePhoto.city}
                </span>
                <span className="text-xs font-bold text-white/70 inline-flex items-center gap-1.5">
                  <i aria-hidden="true" className="fas fa-calendar-alt text-[10px]"></i> {activePhoto.date}
                </span>
                {activePhoto.isBeforeAfter && (
                  <span className="bg-amber-500/90 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-widest inline-flex items-center gap-1">
                    <i aria-hidden="true" className="fas fa-exchange-alt text-[8px]"></i> B&A
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/90 text-sm font-black">{activeIdx + 1}<span className="text-white/50 text-xs font-bold"> / {filtered.length}</span></span>
                <button onClick={() => setLightboxIdx(activeIdx)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-all" data-testid="button-field-showcase-expand" aria-label="View full size">
                  <i aria-hidden="true" className="fas fa-expand text-xs"></i>
                </button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/30 border border-white/5">
              <div className="relative aspect-[4/3]">
                <img
                  src={activePhoto.fullImg}
                  alt={activePhoto.description || `Roofing project in ${activePhoto.city} — ${activePhoto.date}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  data-testid="img-field-showcase-main"
                />
                <button onClick={goPrev} className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm" data-testid="button-field-showcase-prev" aria-label="Previous photo">
                  <i aria-hidden="true" className="fas fa-chevron-left"></i>
                </button>
                <button onClick={goNext} className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm" data-testid="button-field-showcase-next" aria-label="Next photo">
                  <i aria-hidden="true" className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            {activePhoto.description && (
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 mt-3">
                <p className="text-white text-sm md:text-base font-medium leading-relaxed line-clamp-2">{activePhoto.description}</p>
              </div>
            )}
            <div className="mt-4">
              <div ref={thumbStripRef} className="flex gap-2 overflow-x-auto py-2 px-1 snap-x scroll-smooth" style={{ scrollbarWidth: "thin" }} data-testid="strip-field-gallery-thumbs">
                {filtered.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`shrink-0 rounded-xl overflow-hidden transition-all duration-300 snap-center ${
                      idx === activeIdx
                        ? "w-20 h-20 md:w-24 md:h-24 ring-3 ring-brandOrange shadow-lg scale-105"
                        : "w-16 h-16 md:w-20 md:h-20 ring-1 ring-white/10 opacity-60 hover:opacity-100 hover:ring-brandOrange/50"
                    }`}
                    data-testid={`button-field-thumb-${idx}`}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <img src={photo.img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-4 gap-1">
              {filtered.length <= 30 && filtered.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`rounded-full transition-all duration-300 ${idx === activeIdx ? "w-6 h-2 bg-brandOrange" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
                  aria-label={`Go to photo ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto" data-testid="field-gallery-grid">
            {filtered.map((photo, idx) => (
              <div key={photo.id} className="group cursor-pointer rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1" onClick={() => setLightboxIdx(idx)} data-testid={`button-field-photo-${photo.id}`}>
                <div className="px-3 py-2 flex items-center justify-between border-b border-white/10">
                  <p className="text-[10px] font-bold text-white/90 flex items-center gap-1">
                    <i aria-hidden="true" className="fas fa-map-marker-alt text-green-400 text-[8px]"></i>
                    {photo.city}
                  </p>
                  <p className="text-[10px] font-bold text-white/60 flex items-center gap-1">
                    <i aria-hidden="true" className="fas fa-calendar text-[8px]"></i>
                    {photo.date}
                  </p>
                </div>
                <div className="relative aspect-[5/4] bg-slate-800">
                  <img src={photo.img} alt={photo.description || `Roofing project in ${photo.city} — ${photo.date}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  {photo.isBeforeAfter && (
                    <div className="absolute bottom-2.5 left-2.5">
                      <span className="bg-amber-500 text-white text-[9px] font-black uppercase px-2 py-1 rounded-full tracking-widest inline-flex items-center gap-1">
                        <i aria-hidden="true" className="fas fa-exchange-alt text-[8px]"></i> B&A
                      </span>
                    </div>
                  )}
                </div>
                {photo.description && (
                  <div className="px-3 py-2 border-t border-white/10">
                    <p className="text-white/80 text-[11px] font-medium line-clamp-1">{photo.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {lightboxIdx !== null && filtered[lightboxIdx] && (
        <GalleryLightbox
          photos={filtered.map(p => ({ id: p.id, img: p.img, fullImg: p.fullImg, alt: p.description || `Roofing project in ${p.city} — ${p.date}` }))}
          activeIdx={lightboxIdx}
          onClose={closeLightbox}
          onSelect={setLightboxIdx}
          renderInfo={(idx) => {
            const p = filtered[idx];
            return (
              <>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {p.isBeforeAfter && (
                    <span className="bg-amber-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest inline-flex items-center gap-1.5">
                      <i aria-hidden="true" className="fas fa-exchange-alt text-[9px]"></i> B&A
                    </span>
                  )}
                  <span className="bg-green-700 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest inline-flex items-center gap-1.5">
                    <i aria-hidden="true" className="fas fa-map-marker-alt text-[9px]"></i> {p.city}
                  </span>
                  <span className="bg-white/10 text-white/80 text-[10px] font-bold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                    <i aria-hidden="true" className="fas fa-calendar-alt text-[9px]"></i> {p.date}
                  </span>
                </div>
                {p.description && <p className="text-white/90 text-sm leading-relaxed mt-3 max-w-lg mx-auto">{p.description}</p>}
              </>
            );
          }}
        />
      )}
    </section>
  );
}

const SERVICE_TAGS = [
  { tag: "Roof Replacement", title: "Roof Replacement", icon: "fa-home" },
  { tag: "Asphalt Shingle Roofing", title: "Asphalt Shingle", icon: "fa-layer-group" },
  { tag: "Commercial Systems", title: "Commercial Roofing", icon: "fa-building" },
  { tag: "Flat Roof", title: "Flat Roof", icon: "fa-square" },
  { tag: "Leak Repair", title: "Leak Repair", icon: "fa-wrench" },
  { tag: "Gutters", title: "Gutter Installation", icon: "fa-tint" },
  { tag: "Skylights", title: "Skylight Installation", icon: "fa-sun" },
  { tag: "Emergency", title: "Emergency Repair", icon: "fa-exclamation-triangle" },
  { tag: "Before and After", title: "Before & After", icon: "fa-exchange-alt" },
];

interface TagGPhoto {
  id: string;
  img: string;
  fullImg: string;
  city: string;
  date: string;
  createdAt: number;
  description: string;
}

function TagGallerySection({ tag, title, icon }: { tag: string; title: string; icon: string }) {
  const [photos, setPhotos] = useState<TagGPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    fetch(`/api/companycam/photos?tag=${encodeURIComponent(tag)}`, { cache: "no-store" })
      .then(r => r.ok ? r.json() : { photos: [] })
      .then(data => {
        if (!mounted) return;
        setPhotos(data.photos.map((p: { id: string; thumbnail: string; fullSize: string; city: string; state: string; createdAt: number; description?: string }) => ({
          id: p.id, img: p.thumbnail, fullImg: p.fullSize, city: `${p.city}, ${p.state === "California" ? "CA" : p.state}`, date: (() => { const d = new Date(p.createdAt * 1000); const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]; return `${m[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`; })(), createdAt: p.createdAt, description: p.description || "",
        })).sort((a: TagGPhoto, b: TagGPhoto) => b.createdAt - a.createdAt));
      })
      .catch(() => {})
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, [tag]);

  const goPrev = useCallback(() => setActiveIdx(prev => (prev - 1 + photos.length) % photos.length), [photos.length]);
  const goNext = useCallback(() => setActiveIdx(prev => (prev + 1) % photos.length), [photos.length]);

  useEffect(() => {
    if (thumbRef.current) {
      const thumb = thumbRef.current.children[activeIdx] as HTMLElement;
      if (thumb) thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeIdx]);

  if (loading || photos.length === 0) return null;

  const activePhoto = photos[activeIdx];
  const tagSlug = tag.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div className="mb-14 last:mb-0" data-testid={`section-tag-gallery-${tagSlug}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-brandOrangeLight text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
            <i aria-hidden="true" className={`fas ${icon}`}></i> {title}
          </span>
          <span className="text-white/60 text-xs font-bold">{photos.length} photos</span>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-white/70 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1.5"
          data-testid={`button-tag-toggle-${tagSlug}`}
        >
          {expanded ? "Showcase" : "Grid"} <i aria-hidden="true" className={`fas ${expanded ? "fa-image" : "fa-th"} text-[10px]`}></i>
        </button>
      </div>

      {!expanded ? (
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 mb-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-white inline-flex items-center gap-1.5">
                <i aria-hidden="true" className="fas fa-map-marker-alt text-green-400 text-[10px]"></i> {activePhoto.city}
              </span>
              <span className="text-xs font-bold text-white/70 inline-flex items-center gap-1.5">
                <i aria-hidden="true" className="fas fa-calendar-alt text-[10px]"></i> {activePhoto.date}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/90 text-sm font-black">{activeIdx + 1}<span className="text-white/50 text-xs font-bold"> / {photos.length}</span></span>
              <button onClick={() => setLightboxIdx(activeIdx)} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-all" aria-label={`Expand ${title} photo`} data-testid={`button-tag-expand-${tagSlug}`}>
                <i aria-hidden="true" className="fas fa-expand text-xs"></i>
              </button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black/30 border border-white/5">
            <div className="relative aspect-[4/3]">
              <img src={activePhoto.fullImg} alt={activePhoto.description || `${tag} project in ${activePhoto.city}`} className="w-full h-full object-cover transition-opacity duration-500" />
              <button onClick={goPrev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm" aria-label={`Previous ${title} photo`} data-testid={`button-tag-prev-${tagSlug}`}>
                <i aria-hidden="true" className="fas fa-chevron-left"></i>
              </button>
              <button onClick={goNext} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm" aria-label={`Next ${title} photo`} data-testid={`button-tag-next-${tagSlug}`}>
                <i aria-hidden="true" className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          {activePhoto.description && (
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 mt-3">
              <p className="text-white text-sm font-medium line-clamp-2">{activePhoto.description}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {photos.map((photo, idx) => (
            <div key={photo.id} className="group cursor-pointer rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1" onClick={() => setLightboxIdx(idx)} data-testid={`button-tag-photo-${tagSlug}-${photo.id}`}>
              <div className="px-2.5 py-1.5 flex items-center justify-between border-b border-white/10">
                <p className="text-[10px] font-bold text-white/90 flex items-center gap-1">
                  <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrangeLight text-[8px]"></i>
                  {photo.city}
                </p>
                <p className="text-[10px] font-bold text-white/60 flex items-center gap-1">
                  <i aria-hidden="true" className="fas fa-calendar text-[8px]"></i>
                  {photo.date}
                </p>
              </div>
              <div className="relative aspect-[5/4] bg-slate-800">
                <img src={photo.img} alt={photo.description || `${tag} project in ${photo.city}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              {photo.description && (
                <div className="px-2.5 py-2 border-t border-white/10">
                  <p className="text-white/80 text-[11px] font-medium line-clamp-1">{photo.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {!expanded && (
        <div className="mt-3">
          <div ref={thumbRef} className="flex gap-1.5 overflow-x-auto py-1.5 px-1 snap-x scroll-smooth" style={{ scrollbarWidth: "thin" }} data-testid={`strip-tag-thumbs-${tagSlug}`}>
            {photos.map((p, i) => (
              <button key={p.id} onClick={() => setActiveIdx(i)} className={`shrink-0 rounded-lg overflow-hidden transition-all duration-300 snap-center ${i === activeIdx ? "w-16 h-16 ring-2 ring-brandOrange scale-105 opacity-100" : "w-14 h-14 ring-1 ring-white/10 opacity-50 hover:opacity-80"}`} data-testid={`button-tag-thumb-${tagSlug}-${i}`} aria-label={`View ${title} photo ${i + 1}`}>
                <img src={p.img} alt={`${title} thumbnail ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}

      {lightboxIdx !== null && photos[lightboxIdx] && (
        <GalleryLightbox
          photos={photos.map(p => ({ id: p.id, img: p.img, fullImg: p.fullImg, alt: p.description || `${tag} project in ${p.city}` }))}
          activeIdx={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onSelect={setLightboxIdx}
          renderInfo={(idx) => {
            const p = photos[idx];
            return (
              <>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest inline-flex items-center gap-1.5">
                    <i aria-hidden="true" className={`fas ${icon} text-[9px]`}></i> {title}
                  </span>
                  <span className="bg-green-700 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest inline-flex items-center gap-1.5">
                    <i aria-hidden="true" className="fas fa-map-marker-alt text-[9px]"></i> {p.city}
                  </span>
                  <span className="bg-white/10 text-white/80 text-[10px] font-bold px-3 py-1 rounded-full">{p.date}</span>
                </div>
                {p.description && <p className="text-white/90 text-sm leading-relaxed mt-3 max-w-lg mx-auto">{p.description}</p>}
              </>
            );
          }}
        />
      )}
    </div>
  );
}

function ServiceTagGalleries() {
  return (
    <section className="py-20 bg-brandNavy border-t border-white/5" data-testid="section-service-tag-galleries">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-brandOrangeLight text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <i aria-hidden="true" className="fas fa-tags"></i> Browse by Service
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white">
            Projects by <span className="text-brandOrangeLight">Category</span>
          </h2>
          <p className="text-white/70 text-sm font-medium mt-2 max-w-lg mx-auto">
            Explore our work organized by roofing service type
          </p>
        </div>
        {SERVICE_TAGS.map(st => (
          <TagGallerySection key={st.tag} tag={st.tag} title={st.title} icon={st.icon} />
        ))}
      </div>
    </section>
  );
}

function PortfolioGallery({ filtered, onOpenLightbox }: {
  filtered: typeof projects;
  onOpenLightbox: (idx: number) => void;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"showcase" | "grid">("showcase");
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setActiveIdx(0); }, [filtered]);

  const goPrev = useCallback(() => setActiveIdx(prev => (prev - 1 + filtered.length) % filtered.length), [filtered.length]);
  const goNext = useCallback(() => setActiveIdx(prev => (prev + 1) % filtered.length), [filtered.length]);

  useEffect(() => {
    if (thumbRef.current) {
      const thumb = thumbRef.current.children[activeIdx] as HTMLElement;
      if (thumb) thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeIdx]);

  if (filtered.length === 0) return null;

  const project = filtered[activeIdx];
  const catStyle = getCategoryStyle(project.category);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div></div>
        <div className="flex items-center gap-1 bg-gray-100 border border-gray-200 rounded-xl p-1">
          <button
            onClick={() => setViewMode("showcase")}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${viewMode === "showcase" ? "bg-brandNavy text-white shadow-md" : "text-slate-500 hover:text-brandNavy"}`}
            data-testid="button-portfolio-view-showcase"
            aria-label="Showcase view"
          >
            <i aria-hidden="true" className="fas fa-image"></i>
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${viewMode === "grid" ? "bg-brandNavy text-white shadow-md" : "text-slate-500 hover:text-brandNavy"}`}
            data-testid="button-portfolio-view-grid"
            aria-label="Grid view"
          >
            <i aria-hidden="true" className="fas fa-th"></i>
          </button>
        </div>
      </div>

      {viewMode === "showcase" ? (
        <div data-testid="portfolio-gallery-showcase" className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-brandNavy shadow-2xl">
            <div className="relative aspect-[4/3]">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover bg-black/40 transition-opacity duration-500" data-testid="img-portfolio-showcase-main" />
              <button onClick={goPrev} className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm" aria-label="Previous project" data-testid="button-portfolio-prev">
                <i aria-hidden="true" className="fas fa-chevron-left"></i>
              </button>
              <button onClick={goNext} className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm" aria-label="Next project" data-testid="button-portfolio-next">
                <i aria-hidden="true" className="fas fa-chevron-right"></i>
              </button>
              <button onClick={() => onOpenLightbox(activeIdx)} className="absolute top-3 right-3 md:top-5 md:right-5 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm" aria-label="View full size" data-testid="button-portfolio-expand">
                <i aria-hidden="true" className="fas fa-expand"></i>
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-5 py-4 mt-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-brandNavy text-base md:text-lg font-black uppercase tracking-wide mb-2">{project.title}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`${catStyle.bg} text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest inline-flex items-center gap-1`}>
                    <i aria-hidden="true" className={`fas ${catStyle.icon} text-[8px]`}></i> {project.category}
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full inline-flex items-center gap-1">
                    <i aria-hidden="true" className="fas fa-map-marker-alt text-[8px]"></i> {project.location}
                  </span>
                </div>
              </div>
              <p className="text-brandNavy text-lg md:text-xl font-black shrink-0">{activeIdx + 1}<span className="text-slate-400 text-sm font-bold"> / {filtered.length}</span></p>
            </div>
          </div>
          <div className="mt-4">
            <div ref={thumbRef} className="flex gap-2 overflow-x-auto py-2 px-1 snap-x scroll-smooth" style={{ scrollbarWidth: "thin" }} data-testid="strip-portfolio-thumbs">
              {filtered.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`shrink-0 rounded-xl overflow-hidden transition-all duration-300 snap-center ${
                    idx === activeIdx ? "w-20 h-20 md:w-24 md:h-24 ring-3 ring-brandOrange shadow-lg scale-105" : "w-16 h-16 md:w-20 md:h-20 ring-1 ring-gray-200 opacity-60 hover:opacity-100 hover:ring-brandOrange/50 hover:shadow-md"
                  }`}
                  data-testid={`button-portfolio-thumb-${idx}`}
                  aria-label={`View project ${idx + 1}`}
                >
                  <img src={p.img} alt={`${p.title} thumbnail`} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
          {filtered.length <= 30 && (
            <div className="flex justify-center mt-4 gap-1">
              {filtered.map((_, idx) => (
                <button key={idx} onClick={() => setActiveIdx(idx)} className={`rounded-full transition-all duration-300 ${idx === activeIdx ? "w-6 h-2 bg-brandOrange" : "w-2 h-2 bg-brandNavy/20 hover:bg-brandNavy/40"}`} aria-label={`Go to photo ${idx + 1}`} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-3xl mx-auto" data-testid="portfolio-gallery-grid">
          {filtered.map((p, idx) => {
            const cs = getCategoryStyle(p.category);
            return (
              <div key={p.id} className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1" onClick={() => onOpenLightbox(idx)} data-testid={`card-portfolio-${p.id}`}>
                <div className="relative overflow-hidden aspect-[5/4]">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={2160} height={1620} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className={`${cs.bg} text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-lg tracking-wider inline-flex items-center gap-1`}>
                      <i aria-hidden="true" className={`fas ${cs.icon} text-[8px]`}></i> {p.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-brandNavy shadow-lg">
                      <i aria-hidden="true" className="fas fa-expand text-sm"></i>
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 flex items-center gap-1">
                    <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange text-[8px]"></i> {p.location}
                  </p>
                  <h3 className="font-black text-brandNavy text-sm uppercase leading-tight">{p.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default function Gallery() {
  useSEO("Project Gallery — Before & After Bay Area Roofs | ROOF EXPRESS", "Browse 150+ completed roofing projects. Before-and-after photos of residential & commercial work across the Bay Area.");
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const activeTab = filterTabs.find(t => t.key === activeFilter)!;
  const filtered = projects.filter(activeTab.matchFn);

  const handleFilterChange = useCallback((key: FilterCategory) => {
    setActiveFilter(key);
    setLightboxIdx(null);
  }, []);

  const openLightbox = useCallback((idx: number) => {
    if (idx >= 0 && idx < filtered.length) setLightboxIdx(idx);
  }, [filtered.length]);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);

  const tabCounts = filterTabs.map(t => ({ ...t, count: projects.filter(t.matchFn).length }));

  return (
    <Layout>
      <section className="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center">
        <div className="absolute inset-0">
          <img src="/images/asphalt-shingle-crew.webp" alt="Roofing crew at work" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={800} height={533} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full mb-4">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">
                <i aria-hidden="true" className="fas fa-images mr-2"></i> Project Gallery
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight text-white" data-testid="text-gallery-hero-title">
              Roofing Project Gallery <span className="text-brandOrangeLight">(Bay Area Proof)</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed" data-testid="text-gallery-hero-subtitle">
              Browse 5,000+ Diamond Certified roofing projects across the San Francisco Bay Area
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 bg-brandNavy border-b border-white/10">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-8">
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-camera mr-1.5 text-brandOrangeLight text-[9px]"></i> Real Projects
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-home mr-1.5 text-brandOrangeLight text-[9px]"></i> Bay Area Homes
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-check-circle mr-1.5 text-brandOrangeLight text-[9px]"></i> Before & After
            </span>
            <span className="hidden md:block w-px h-3 bg-white/20"></span>
            <span className="inline-flex items-center text-white/80 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <i aria-hidden="true" className="fas fa-certificate mr-1.5 text-brandOrangeLight text-[9px]"></i> Fully Certified Work
            </span>
          </div>
        </div>
      </section>

      <section className="bg-brandNavy border-t border-white/10" data-testid="section-gallery-stats">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "5,000+", label: "Completed", icon: "fa-check-circle" },
              { value: "37+", label: "Cities Served", icon: "fa-map-marked-alt" },
              { value: "4.9", label: "Avg Rating", icon: "fa-star" },
              { value: "50yr", label: "Max Warranty", icon: "fa-shield-alt" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 text-center text-white" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <i aria-hidden="true" className={`fas ${stat.icon} text-brandOrangeLight text-base mb-1.5 block`}></i>
                <p className="text-2xl md:text-3xl font-black">{stat.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FieldGallery />

      <ServiceTagGalleries />

      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 max-w-screen-2xl">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {tabCounts.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleFilterChange(tab.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                  activeFilter === tab.key ? "bg-brandNavy text-white shadow-lg shadow-brandNavy/20" : "bg-gray-100 text-gray-600 hover:bg-brandOrange/10 hover:text-brandOrange"
                }`}
                data-testid={`button-filter-${tab.key.toLowerCase().replace(/[\/\s&]/g, "-")}`}
              >
                <i aria-hidden="true" className={`fas ${tab.icon} text-[10px] ${activeFilter === tab.key ? "text-brandOrange" : ""}`}></i>
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${activeFilter === tab.key ? "bg-brandOrange text-white" : "bg-gray-200 text-gray-500"}`}>{tab.count}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1.5 pb-3 overflow-x-auto scrollbar-hide border-t border-gray-100 pt-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} data-testid="section-city-links">
            <span className="flex-shrink-0 text-[9px] font-black uppercase tracking-widest text-gray-400 mr-1">
              <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange mr-1"></i>Cities:
            </span>
            {cityList.map((city) => (
              <Link key={city.slug} href={`/${city.slug}`} className="flex-shrink-0 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500 bg-gray-50 border border-gray-200 hover:bg-brandOrange hover:text-white hover:border-brandOrange transition-all whitespace-nowrap" data-testid={`link-city-${city.slug}`}>
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white min-h-[60vh]" data-testid="section-projects">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-brandNavy uppercase tracking-tight" data-testid="heading-projects">
                {activeFilter === "All" ? "All Projects" : activeTab.label}
              </h2>
              <p className="text-sm text-gray-500 font-medium mt-1" data-testid="text-project-count">
                {filtered.length} projects
              </p>
            </div>
          </div>
          <PortfolioGallery filtered={filtered} onOpenLightbox={openLightbox} />
        </div>
      </section>

      <section className="py-20 bg-white" data-testid="section-work-process">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-4 inline-block tracking-[0.2em]">
              <i aria-hidden="true" className="fas fa-cogs mr-2"></i> Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy" data-testid="text-work-process-title">
              Every Project Follows <span className="text-brandOrange">Our Standard</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-brandOrange/20"></div>
            {processSteps.map((step, index) => (
              <div key={step.title} className="text-center relative" data-testid={`step-process-${index + 1}`}>
                <div className="w-12 h-12 rounded-xl bg-brandNavy text-white flex items-center justify-center mx-auto mb-5 relative z-10 shadow-lg">
                  <i aria-hidden="true" className={`fas ${step.icon} text-lg`}></i>
                </div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-brandOrange text-white text-[9px] font-black flex items-center justify-center -mt-1 -ml-4 z-20 shadow">
                  {index + 1}
                </div>
                <h3 className="font-black text-brandNavy uppercase text-xs tracking-wide mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="md:hidden flex justify-center my-3 text-brandOrange">
                    <i aria-hidden="true" className="fas fa-arrow-down"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brandNavy text-center" data-testid="section-request-project">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-4 inline-block tracking-[0.2em]">Ready?</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4" data-testid="text-request-project-title">
            See Something <span className="text-brandOrangeLight">You Like?</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 font-medium">
            Every project in our gallery was completed with the same process, materials, and attention to detail that yours will receive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href={JOBBER_URL} target="_blank" rel="noreferrer noopener" className="bg-brandOrange hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition shadow-lg" data-testid="link-gallery-quote">
              <i aria-hidden="true" className="fas fa-bolt mr-3"></i> Get Free Quote
            </a>
            <a href="tel:6506665554" className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition border border-white/20" data-testid="link-gallery-call">
              <i aria-hidden="true" className="fas fa-phone-alt mr-3"></i> Call 650-666-5554
            </a>
            <Link href="/methodology" className="bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition border border-white/10" data-testid="link-gallery-methodology">
              <i aria-hidden="true" className="fas fa-clipboard-list mr-3"></i> Our Methodology
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" data-testid="section-related-blog">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="bg-brandNavy/10 text-brandNavy text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-4 inline-block tracking-[0.2em]">
              <i aria-hidden="true" className="fas fa-book-open mr-2"></i> Learn More
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy" data-testid="text-related-blog-title">
              Related <span className="text-brandOrange">Articles</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100" data-testid={`card-blog-${article.slug}`}>
                <div className="w-12 h-12 rounded-xl bg-brandOrange/10 flex items-center justify-center text-brandOrange mb-5 group-hover:bg-brandOrange group-hover:text-white transition-all duration-300">
                  <i aria-hidden="true" className={`fas ${article.icon} text-xl`}></i>
                </div>
                <h3 className="font-black text-brandNavy uppercase text-sm tracking-wide mb-3 group-hover:text-brandOrange transition">{article.title}</h3>
                <span className="text-xs font-black text-brandOrange uppercase tracking-widest">
                  Read Article <i aria-hidden="true" className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <NearbyAreas />

      {lightboxIdx !== null && filtered[lightboxIdx] && (
        <GalleryLightbox
          photos={filtered.map(p => ({ id: String(p.id), img: p.img, fullImg: p.img, alt: p.title }))}
          activeIdx={lightboxIdx}
          onClose={closeLightbox}
          onSelect={setLightboxIdx}
          renderInfo={(idx) => {
            const p = filtered[idx];
            const cs = getCategoryStyle(p.category);
            return (
              <>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className={`${cs.bg} text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest inline-flex items-center gap-1.5`}>
                    <i aria-hidden="true" className={`fas ${cs.icon} text-[9px]`}></i> {p.category}
                  </span>
                  <span className="bg-white/10 text-white/80 text-[10px] font-bold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                    <i aria-hidden="true" className="fas fa-map-marker-alt text-[9px]"></i> {p.location}
                  </span>
                </div>
                <p className="text-white font-black text-lg mt-3 uppercase tracking-wide">{p.title}</p>
              </>
            );
          }}
        />
      )}
    </Layout>
  );
}

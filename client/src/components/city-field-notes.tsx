import { useState, useEffect } from "react";
import { Link } from "wouter";

interface CityFieldNote {
  id: string;
  img: string;
  fullImg: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  city: string;
  description: string;
  createdAt: number;
}

const CARD_COUNT = 5;
const COMPACT_BATCH = 30;

function generateTitle(description: string): string {
  const firstLine = description.split(/[\n.!?]/)[0].trim();
  if (firstLine.length > 8 && firstLine.length <= 80) return firstLine;
  const words = description.split(/\s+/).slice(0, 8).join(" ");
  return words.length > 60 ? words.slice(0, 57) + "..." : words;
}

function generateExcerpt(description: string, maxLen = 120): string {
  const clean = description.replace(/\n+/g, " ").trim();
  if (clean.length <= maxLen) return clean;
  return clean.slice(0, maxLen - 3) + "...";
}

function formatDate(ts: number): string {
  return new Date(ts * 1000).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function readingTime(text: string): number {
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

function FeaturedCard({ note, cityName }: { note: CityFieldNote; cityName: string }) {
  return (
    <Link
      href={`/blog/field-notes/${note.id}`}
      className="group block mb-8"
      data-testid={`card-city-fn-featured-${note.id}`}
    >
      <article className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-slate-100">
        <div className="lg:col-span-3 relative aspect-[4/3] lg:aspect-auto overflow-hidden">
          <img src={note.fullImg || note.img} alt={note.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-2 rounded-full tracking-widest inline-flex items-center gap-1.5 shadow-lg">
              <i aria-hidden="true" className="fas fa-star text-[8px]"></i> Latest
            </span>
            <span className="bg-brandNavy/90 backdrop-blur text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-full tracking-wider inline-flex items-center gap-1.5">
              <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrangeLight text-[8px]"></i> {cityName}
            </span>
          </div>
        </div>
        <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{note.date}</span>
            <span className="text-slate-300 text-[10px]">|</span>
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{note.readingTime} min read</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-black text-brandNavy leading-tight mb-4 group-hover:text-brandOrange transition-colors duration-300">{note.title}</h3>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-6 line-clamp-4">{note.excerpt}</p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brandNavy flex items-center justify-center">
              <i aria-hidden="true" className="fas fa-hard-hat text-white text-xs"></i>
            </div>
            <div>
              <p className="text-xs font-black text-brandNavy uppercase tracking-wider">ROOF EXPRESS</p>
              <p className="text-[10px] text-slate-500 font-medium">Field Report</p>
            </div>
            <i aria-hidden="true" className="fas fa-arrow-right text-brandOrange ml-auto group-hover:translate-x-1 transition-transform"></i>
          </div>
        </div>
      </article>
    </Link>
  );
}

function BlogCard({ note }: { note: CityFieldNote }) {
  return (
    <Link
      href={`/blog/field-notes/${note.id}`}
      className="group block"
      data-testid={`card-city-fn-${note.id}`}
    >
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brandOrange/20 hover:-translate-y-1 h-full flex flex-col">
        <div className="relative aspect-[5/4] overflow-hidden">
          <img src={note.img} alt={note.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-12" />
          <div className="absolute bottom-2.5 left-2.5">
            <span className="bg-white/90 text-brandOrange text-[9px] font-black uppercase px-2 py-0.5 rounded-full tracking-widest backdrop-blur-sm shadow-sm">{note.city}</span>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">{note.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-200"></span>
            <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">{note.readingTime} min</span>
          </div>
          <h3 className="font-black text-brandNavy text-sm leading-snug group-hover:text-brandOrange transition line-clamp-2 flex-1" data-testid={`text-city-fn-title-${note.id}`}>{note.title}</h3>
        </div>
      </article>
    </Link>
  );
}

function CompactRow({ note }: { note: CityFieldNote }) {
  return (
    <Link
      href={`/blog/field-notes/${note.id}`}
      className="group flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200 border border-transparent hover:border-slate-100"
      data-testid={`row-city-fn-${note.id}`}
    >
      <img src={note.img} alt={note.title} className="w-14 h-14 rounded-lg object-cover shrink-0 group-hover:ring-2 ring-brandOrange/30 transition" loading="lazy" />
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-brandNavy leading-snug truncate group-hover:text-brandOrange transition">{note.title}</h4>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[10px] text-brandOrange font-bold uppercase tracking-wider">{note.city}</span>
          <span className="w-0.5 h-0.5 rounded-full bg-slate-300"></span>
          <span className="text-[10px] text-slate-500 font-bold">{note.date}</span>
        </div>
      </div>
      <i aria-hidden="true" className="fas fa-chevron-right text-[9px] text-slate-300 group-hover:text-brandOrange transition shrink-0"></i>
    </Link>
  );
}

export default function CityFieldNotes({ cityName, citySlug }: { cityName: string; citySlug: string }) {
  const [notes, setNotes] = useState<CityFieldNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [compactVisible, setCompactVisible] = useState(COMPACT_BATCH);

  useEffect(() => {
    let mounted = true;
    fetch("/api/companycam/photos?tag=wiki", { cache: "no-store" })
      .then(r => r.ok ? r.json() : { photos: [] })
      .then(data => {
        if (!mounted) return;
        const cityNorm = cityName.toLowerCase();
        const mapped: CityFieldNote[] = data.photos
          .filter((p: { description?: string; city?: string }) => {
            if (!p.description || p.description.trim().length < 20) return false;
            return (p.city || "").toLowerCase() === cityNorm;
          })
          .map((p: { id: string; thumbnail: string; fullSize?: string; createdAt: number; description: string; city: string; state?: string }) => ({
            id: p.id,
            img: p.thumbnail,
            fullImg: p.fullSize || p.thumbnail,
            title: generateTitle(p.description),
            excerpt: generateExcerpt(p.description, 260),
            date: formatDate(p.createdAt),
            readingTime: readingTime(p.description),
            city: `${p.city || cityName}, ${p.state === "California" ? "CA" : (p.state || "CA")}`,
            description: p.description,
            createdAt: p.createdAt,
          }))
          .sort((a: CityFieldNote, b: CityFieldNote) => b.createdAt - a.createdAt);
        setNotes(mapped);
      })
      .catch(() => {})
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, [cityName]);

  if (loading || notes.length === 0) return null;

  const featured = notes.length > 0 ? notes[0] : null;
  const afterFeatured = featured ? notes.slice(1) : notes;
  const recentCards = afterFeatured.slice(0, CARD_COUNT);
  const compactPosts = afterFeatured.slice(CARD_COUNT);
  const visibleCompact = compactPosts.slice(0, compactVisible);
  const hasMoreCompact = compactVisible < compactPosts.length;
  const remainingCompact = Math.max(0, compactPosts.length - compactVisible);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50" data-testid="section-city-field-notes">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="bg-brandOrange/10 text-brandOrange text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-5 inline-block tracking-[0.2em]">
              <i aria-hidden="true" className="fas fa-hard-hat mr-2"></i> From the Roof
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brandNavy mb-4" data-testid="heading-city-field-notes">
              {cityName} <span className="text-brandOrange">Field Notes</span>
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl">
              Real project insights and roofing tips from our crew's work in {cityName}. Each note documents materials, techniques, and conditions from actual job sites.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-green-100">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> {notes.length} {notes.length === 1 ? "post" : "posts"}
            </span>
          </div>
        </div>

        {featured && <FeaturedCard note={featured} cityName={cityName} />}

        {recentCards.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" data-testid="grid-city-fn-posts">
            {recentCards.map(note => <BlogCard key={note.id} note={note} />)}
          </div>
        )}

        {compactPosts.length > 0 && (
          <div className="mt-10" data-testid="section-city-fn-older">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-sm font-black text-brandNavy uppercase tracking-widest">All {cityName} Posts</h3>
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="text-[10px] text-slate-500 font-bold">{compactPosts.length} posts</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-0.5 bg-slate-50/50 rounded-2xl p-2">
              {visibleCompact.map(note => <CompactRow key={note.id} note={note} />)}
            </div>

            {hasMoreCompact && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setCompactVisible(v => v + COMPACT_BATCH)}
                  className="bg-white border-2 border-slate-200 text-brandNavy px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-brandOrange hover:text-brandOrange transition-all inline-flex items-center gap-2 shadow-sm hover:shadow-md"
                  data-testid="button-city-fn-load-more"
                >
                  Load More
                  <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full">{remainingCompact}</span>
                </button>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">
            {notes.length} total {notes.length === 1 ? "post" : "posts"} in {cityName}
          </span>
          <Link
            href="/blog/field-notes"
            className="inline-flex items-center gap-3 bg-brandNavy text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brandOrange transition-colors duration-300 shadow-md"
            data-testid="link-city-fn-view-all"
          >
            <i aria-hidden="true" className="fas fa-book-open"></i>
            View All Field Notes
            <i aria-hidden="true" className="fas fa-arrow-right text-[10px]"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

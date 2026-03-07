import { zipAreas } from "@/data/zip-areas";

interface ZipCodeSectionProps {
  cityName: string;
  county: string;
  zips: string[];
  testId?: string;
}

export function ZipCodeSection({ cityName, county, zips, testId }: ZipCodeSectionProps) {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-brandNavy via-brandNavy to-brandNavy/95 relative overflow-hidden" data-testid={testId || "section-zip-coverage"}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #C04520 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
      <div className="container mx-auto px-6 max-w-screen-xl relative z-10 text-center">
        <div className="inline-flex items-center justify-center gap-2.5 mb-2">
          <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrangeLight text-lg"></i>
          <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-wide" data-testid="text-serving-heading">
            Serving {cityName}, California
          </h2>
        </div>
        <p className="text-white/50 text-xs md:text-sm font-bold mb-8 md:mb-10" data-testid="text-county-info">{county} County · CSLB #1072766</p>

        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brandOrangeLight block mb-6">ZIP Codes We Serve</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto" data-testid="list-zip-codes">
            {zips.map((z) => (
              <div
                key={z}
                className="bg-white/[0.06] backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-3 border border-white/[0.08] hover:bg-white/[0.1] transition"
                data-testid={`row-zip-${z}`}
              >
                <span className="text-brandOrangeLight text-sm md:text-base font-black tabular-nums shrink-0" data-testid={`text-zip-code-${z}`}>{z}</span>
                <span className="text-white/50 text-[11px] md:text-xs font-medium leading-tight" data-testid={`text-zip-area-${z}`}>{zipAreas[z] || cityName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

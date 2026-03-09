type ClimateRegion = "coastal" | "bayside" | "inland-valley" | "hillside" | "peninsula" | "delta";

interface CityClimate {
  region: ClimateRegion;
  avgRainfall: string;
  fogExposure: "heavy" | "moderate" | "light" | "minimal";
  tempRange: string;
  saltAir: boolean;
  fireZone: boolean;
  windExposure: "high" | "moderate" | "low";
  elevation: string;
  commonIssues: string[];
  bestMaterials: string[];
  climateNote: string;
}

const REGION_DEFAULTS: Record<ClimateRegion, Omit<CityClimate, "climateNote" | "commonIssues" | "bestMaterials" | "elevation">> = {
  "coastal": { region: "coastal", avgRainfall: "20–25 inches", fogExposure: "heavy", tempRange: "45°F–68°F", saltAir: true, fireZone: false, windExposure: "high" },
  "bayside": { region: "bayside", avgRainfall: "18–22 inches", fogExposure: "moderate", tempRange: "48°F–75°F", saltAir: false, fireZone: false, windExposure: "moderate" },
  "inland-valley": { region: "inland-valley", avgRainfall: "14–18 inches", fogExposure: "minimal", tempRange: "40°F–95°F", saltAir: false, fireZone: true, windExposure: "moderate" },
  "hillside": { region: "hillside", avgRainfall: "22–30 inches", fogExposure: "moderate", tempRange: "42°F–80°F", saltAir: false, fireZone: true, windExposure: "high" },
  "peninsula": { region: "peninsula", avgRainfall: "20–24 inches", fogExposure: "moderate", tempRange: "45°F–75°F", saltAir: false, fireZone: false, windExposure: "moderate" },
  "delta": { region: "delta", avgRainfall: "14–16 inches", fogExposure: "light", tempRange: "38°F–100°F", saltAir: false, fireZone: true, windExposure: "moderate" },
};

export const CITY_CLIMATE: Record<string, CityClimate> = {
  "alameda": {
    ...REGION_DEFAULTS["bayside"],
    elevation: "33 ft",
    saltAir: true,
    commonIssues: ["salt air corrosion on metal flashing", "moisture intrusion from bay fog", "flat roof ponding on older homes", "wind-driven rain on exposed waterfront properties"],
    bestMaterials: ["GAF Timberline HDZ algae-resistant shingles", "TPO membrane for flat roofs", "stainless steel flashing (resists salt corrosion)", "copper gutters for coastal durability"],
    climateNote: "Alameda's island geography creates unique exposure to bay moisture and salt air from multiple directions, accelerating corrosion on standard galvanized flashing and shortening the lifespan of untreated metal components."
  },
  "atherton": {
    ...REGION_DEFAULTS["peninsula"],
    elevation: "49 ft",
    fireZone: false,
    commonIssues: ["large estate roofs requiring premium materials", "tile degradation on Spanish Colonial homes", "gutter overflow from mature tree canopy", "moss and lichen growth in shaded areas"],
    bestMaterials: ["concrete and clay tile for estate homes", "standing seam copper roofing", "slate or synthetic slate", "oversized copper gutter systems"],
    climateNote: "Atherton's mature tree canopy and large estate properties create significant debris accumulation on roofs and in gutters. The shaded conditions promote moss and algae growth that can deteriorate roofing materials faster than sun-exposed areas."
  },
  "belmont": {
    ...REGION_DEFAULTS["peninsula"],
    elevation: "100 ft",
    commonIssues: ["hillside drainage challenges", "wind exposure on upper slopes", "UV degradation on south-facing slopes", "older homes with original roofing past useful life"],
    bestMaterials: ["architectural asphalt shingles (wind-rated)", "modified bitumen for flat sections", "impact-resistant shingles for exposed slopes", "seamless aluminum gutters with leaf guards"],
    climateNote: "Belmont's hillside terrain means many homes have complex roof geometries with multiple valleys and dormers that require expert flashing work. Elevation changes across neighborhoods create varying wind and sun exposure conditions."
  },
  "belvedere": {
    ...REGION_DEFAULTS["coastal"],
    elevation: "72 ft",
    commonIssues: ["extreme salt air exposure from bay and ocean", "high wind uplift on waterfront properties", "moisture infiltration from dense fog", "premium home standards requiring top-tier materials"],
    bestMaterials: ["Class A fire-rated architectural shingles", "standing seam metal with Kynar finish", "marine-grade stainless steel flashing", "copper gutter systems"],
    climateNote: "Belvedere's exposed position on the Tiburon Peninsula creates some of the harshest salt air conditions in the Bay Area. Roofing materials must be selected specifically for marine environment resistance to avoid premature deterioration."
  },
  "berkeley": {
    ...REGION_DEFAULTS["bayside"],
    elevation: "171 ft",
    fireZone: true,
    commonIssues: ["fire zone compliance in Berkeley Hills", "aging homes with original shake roofs needing replacement", "varied architectural styles requiring specialized materials", "hillside drainage and wind exposure"],
    bestMaterials: ["Class A fire-rated shingles (required in hills)", "cool roof coatings for Title 24 compliance", "composite slate for craftsman-style homes", "TPO for flat-roofed mid-century homes"],
    climateNote: "Berkeley spans from sea level to the hills, creating dramatically different roofing conditions. Hillside homes face fire zone requirements mandating Class A fire-rated materials, while flatland homes near the bay deal with moisture and fog."
  },
  "brisbane": {
    ...REGION_DEFAULTS["coastal"],
    elevation: "49 ft",
    fireZone: false,
    commonIssues: ["heavy fog and moisture from San Bruno Mountain proximity", "strong Pacific winds on exposed slopes", "limited contractor access on narrow hillside streets", "older housing stock with deferred maintenance"],
    bestMaterials: ["wind-rated architectural shingles", "algae-resistant shingle lines", "modified bitumen for flat sections", "heavy-gauge seamless gutters"],
    climateNote: "Brisbane sits at the base of San Bruno Mountain, which funnels Pacific fog and wind directly through the town. Roofs on the west-facing slopes experience significantly more weathering than those in sheltered positions."
  },
  "burlingame": {
    ...REGION_DEFAULTS["peninsula"],
    elevation: "20 ft",
    commonIssues: ["older downtown homes with original roof systems", "tree debris from mature canopy neighborhoods", "flat roof issues on mid-century commercial buildings", "gutter overflow from heavy seasonal rains"],
    bestMaterials: ["architectural shingles for residential", "TPO for flat commercial roofs", "seamless aluminum gutters with guards", "designer shingles for historic district compatibility"],
    climateNote: "Burlingame's established neighborhoods feature mature trees that create heavy debris loads on roofs and gutters. The proximity to the bay moderates temperatures but increases moisture exposure, making proper ventilation essential."
  },
  "campbell": {
    ...REGION_DEFAULTS["inland-valley"],
    fogExposure: "light",
    elevation: "200 ft",
    commonIssues: ["extreme summer heat causing thermal expansion stress", "UV degradation on south and west exposures", "roof ventilation inadequacy in older tract homes", "energy efficiency concerns driving cool roof adoption"],
    bestMaterials: ["cool roof shingles meeting Title 24", "GAF Timberline HDZ with StainGuard Plus", "TPO white membrane for flat roofs (high reflectivity)", "radiant barrier underlayment"],
    climateNote: "Campbell's inland South Bay location produces hot summers reaching into the 90s, creating significant thermal stress on roofing materials. Proper attic ventilation and cool roof technology are essential for energy efficiency and material longevity."
  },
  "colma": {
    ...REGION_DEFAULTS["coastal"],
    elevation: "85 ft",
    commonIssues: ["heavy fog moisture year-round", "wind-driven rain from Pacific storms", "compact lots with limited staging access", "older homes with multiple roof layers"],
    bestMaterials: ["algae-resistant architectural shingles", "modified bitumen for flat sections", "corrosion-resistant flashing", "heavy-duty gutter systems"],
    climateNote: "Colma's location in the fog belt between San Bruno Mountain and the coast means persistent moisture exposure that can accelerate roof aging. Homes here benefit from algae-resistant shingles and superior ventilation systems."
  },
  "concord": {
    ...REGION_DEFAULTS["inland-valley"],
    tempRange: "38°F–100°F",
    elevation: "65 ft",
    commonIssues: ["extreme heat causing premature shingle aging", "thermal cycling stress from hot days and cool nights", "wildfire smoke residue on roof surfaces", "tract home ventilation deficiencies"],
    bestMaterials: ["heat-resistant architectural shingles", "cool roof rated materials", "TPO with enhanced UV stabilizers", "ridge vent systems for maximum ventilation"],
    climateNote: "Concord experiences some of the highest temperatures in the Bay Area, with summer highs regularly exceeding 95°F. This extreme heat accelerates asphalt shingle degradation and makes proper attic ventilation critical for both roof longevity and energy costs."
  },
  "corte-madera": {
    ...REGION_DEFAULTS["bayside"],
    elevation: "13 ft",
    commonIssues: ["tidal flooding risk for low-lying properties", "salt moisture from Richardson Bay proximity", "older ranch-style homes with aging roofs", "drainage issues in flat terrain"],
    bestMaterials: ["corrosion-resistant shingles", "standing seam metal for water shedding", "marine-grade flashing materials", "oversized gutter and downspout systems"],
    climateNote: "Corte Madera's low elevation near Richardson Bay creates occasional flood risk and constant moisture exposure. Roofing systems must be designed for superior water management, and metal components should be marine-grade to resist salt air corrosion."
  },
  "cupertino": {
    ...REGION_DEFAULTS["inland-valley"],
    fogExposure: "light",
    fireZone: true,
    elevation: "236 ft",
    commonIssues: ["fire zone restrictions in western foothills", "extreme heat on valley floor homes", "aging ranch homes from 1960s-70s needing replacement", "solar panel integration with new roofing"],
    bestMaterials: ["Class A fire-rated shingles", "cool roof technology for energy savings", "composite materials for weight reduction", "solar-ready underlayment systems"],
    climateNote: "Cupertino straddles the valley floor and western foothills, creating two distinct roofing environments. Valley homes face heat stress while foothill homes must comply with fire zone requirements and deal with steeper pitches and wind exposure."
  },
  "daly-city": {
    ...REGION_DEFAULTS["coastal"],
    fogExposure: "heavy",
    windExposure: "high",
    elevation: "325 ft",
    commonIssues: ["constant fog moisture causing accelerated wear", "extreme wind uplift from Pacific exposure", "salt air corrosion on all metal components", "row house roofing requiring neighbor coordination"],
    bestMaterials: ["high-wind rated shingles (130+ mph)", "stainless steel or aluminum flashing", "heavy-duty underlayment for moisture protection", "wind-resistant ridge cap systems"],
    climateNote: "Daly City is one of the foggiest and windiest cities in the Bay Area due to its direct Pacific Ocean exposure. Roofing materials must be rated for high wind uplift and the persistent moisture requires superior ventilation and algae-resistant materials."
  },
  "danville": {
    ...REGION_DEFAULTS["inland-valley"],
    fireZone: true,
    elevation: "362 ft",
    commonIssues: ["wildfire risk requiring fire-rated materials", "extreme summer heat exceeding 100°F", "large custom homes with complex roof lines", "tile degradation on Mediterranean-style estates"],
    bestMaterials: ["Class A fire-rated concrete tile", "fire-resistant composite shakes", "cool roof architectural shingles", "standing seam metal for fire resistance"],
    climateNote: "Danville's location against the base of Mount Diablo creates significant wildfire risk, especially for homes bordering open space. Fire-rated roofing materials are essential, and the extreme inland heat demands materials with superior UV resistance."
  },
  "dublin": {
    ...REGION_DEFAULTS["inland-valley"],
    elevation: "370 ft",
    commonIssues: ["new construction defect warranty claims", "wind exposure from Altamont Pass corridor", "rapid thermal cycling", "builder-grade materials needing early replacement"],
    bestMaterials: ["wind-rated architectural shingles", "cool roof compliant systems", "enhanced underlayment for wind-driven rain", "durable ridge vent systems"],
    climateNote: "Dublin's position near the Altamont Pass corridor exposes homes to strong seasonal winds that can exceed 50 mph. Combined with hot inland summers, roofing materials face both wind stress and UV degradation that can shorten lifespans."
  },
  "east-palo-alto": {
    ...REGION_DEFAULTS["bayside"],
    elevation: "16 ft",
    commonIssues: ["aging housing stock with deferred maintenance", "flat roof drainage problems", "flooding risk in low-lying areas", "affordable material selection for cost-conscious homeowners"],
    bestMaterials: ["value-oriented architectural shingles", "TPO for flat roof sections", "aluminum gutters with proper drainage routing", "impact-resistant options where available"],
    climateNote: "East Palo Alto's low elevation near the bay creates moisture-rich conditions that demand proper roof ventilation and drainage. Many homes in the area have deferred maintenance, making thorough inspection critical before recommending repair versus replacement."
  },
  "fairfax": {
    ...REGION_DEFAULTS["hillside"],
    fireZone: true,
    elevation: "131 ft",
    commonIssues: ["fire zone compliance for hillside homes", "heavy tree coverage causing debris and shade damage", "steep slope access challenges for crews", "aging 1950s-60s homes needing complete re-roofing"],
    bestMaterials: ["Class A fire-rated architectural shingles", "composite shake for rustic aesthetics", "moss-resistant materials for shaded lots", "heavy-duty gutter guards for tree debris"],
    climateNote: "Fairfax's deep redwood and oak canopy creates heavy shade that promotes moss, lichen, and algae growth on roof surfaces. Combined with wildfire risk in the surrounding hills, homeowners must balance fire resistance with moisture management."
  },
  "foster-city": {
    ...REGION_DEFAULTS["bayside"],
    elevation: "6 ft",
    saltAir: true,
    commonIssues: ["extremely low elevation creating moisture challenges", "salt air from bay proximity", "lagoon-adjacent homes with heightened corrosion risk", "planned community architectural standards"],
    bestMaterials: ["marine-grade flashing and fasteners", "algae-resistant shingles", "corrosion-resistant gutter systems", "enhanced underlayment for moisture barrier"],
    climateNote: "Foster City was built on reclaimed bay land at just 6 feet above sea level, creating persistent moisture conditions. The lagoon system throughout the city adds to the humid environment, accelerating corrosion on metal roofing components."
  },
  "fremont": {
    ...REGION_DEFAULTS["inland-valley"],
    fogExposure: "light",
    elevation: "56 ft",
    commonIssues: ["extreme heat in summer months", "seismic activity effects on roof structures", "tract home uniformity limiting material choices", "solar panel installation coordination"],
    bestMaterials: ["cool roof architectural shingles", "TPO for flat commercial buildings", "lightweight materials for seismic resilience", "solar-compatible underlayment"],
    climateNote: "Fremont's East Bay location brings hot, dry summers with temperatures regularly exceeding 90°F. The Hayward Fault runs through the city, making lightweight roofing materials and flexible underlayment systems important for seismic resilience."
  },
  "half-moon-bay": {
    ...REGION_DEFAULTS["coastal"],
    avgRainfall: "25–30 inches",
    elevation: "30 ft",
    commonIssues: ["extreme salt air and coastal wind exposure", "heavy rainfall during atmospheric rivers", "fog moisture 200+ days per year", "rural property access challenges"],
    bestMaterials: ["marine-rated metal roofing", "heavy-duty asphalt shingles with wind warranty", "stainless steel or copper flashing", "oversized gutter systems for heavy rain"],
    climateNote: "Half Moon Bay's direct Pacific coastline creates the most extreme marine conditions in the Bay Area. With over 200 fog days annually and 25+ inches of rainfall, roofing systems here require marine-grade materials and exceptional waterproofing."
  },
  "hayward": {
    ...REGION_DEFAULTS["bayside"],
    elevation: "100 ft",
    fireZone: true,
    commonIssues: ["varying conditions from flatlands to hills", "fire zone compliance in eastern hills", "seismic considerations along Hayward Fault", "aging post-war housing stock"],
    bestMaterials: ["fire-rated shingles for hill properties", "standard architectural shingles for flatlands", "flexible underlayment for seismic areas", "proper ventilation systems for all zones"],
    climateNote: "Hayward's geography spans from bay-level flatlands to the East Bay hills, creating two distinct roofing environments. Hill homes face fire zone requirements and wind exposure, while flatland homes deal with bay moisture. The Hayward Fault adds seismic considerations."
  },
  "hillsborough": {
    ...REGION_DEFAULTS["hillside"],
    fireZone: false,
    elevation: "300 ft",
    commonIssues: ["large estate roofs with complex geometries", "premium material expectations from discerning homeowners", "historic home preservation requirements", "steep driveways limiting equipment access"],
    bestMaterials: ["premium natural slate", "hand-formed clay tile", "copper standing seam", "custom copper gutter and downspout systems"],
    climateNote: "Hillsborough's exclusive residential character means roofing projects must meet the highest aesthetic and performance standards. The hilly terrain creates complex roof geometries, and the town's design review process may require specific material choices."
  },
  "kentfield": {
    ...REGION_DEFAULTS["hillside"],
    fireZone: true,
    elevation: "32 ft",
    commonIssues: ["fire zone restrictions for hillside properties", "heavy tree debris from redwood and oak canopy", "steep slope installation challenges", "moisture from creek corridors"],
    bestMaterials: ["Class A fire-rated materials", "composite shake for natural aesthetics", "debris-shedding metal roofing", "oversized gutters with leaf guards"],
    climateNote: "Kentfield's lush vegetation and creek corridors create beautiful but challenging roofing conditions. The dense tree canopy sheds heavy debris onto roofs, and fire zone regulations in the adjacent hills require Class A fire-rated materials."
  },
  "lafayette": {
    ...REGION_DEFAULTS["inland-valley"],
    fireZone: true,
    elevation: "328 ft",
    commonIssues: ["wildfire risk along hillside properties", "extreme summer heat", "large custom homes with complex roof systems", "HOA architectural requirements"],
    bestMaterials: ["fire-rated concrete tile", "Class A composite shake", "standing seam metal for fire resistance", "cool roof options for energy savings"],
    climateNote: "Lafayette's inland location and proximity to undeveloped hillsides create both extreme heat exposure and wildfire risk. Custom homes with complex rooflines require experienced crews, and many neighborhoods have architectural standards governing material and color choices."
  },
  "larkspur": {
    ...REGION_DEFAULTS["bayside"],
    elevation: "10 ft",
    commonIssues: ["low elevation flooding concerns", "salt moisture from bay proximity", "narrow canyon properties with limited access", "mixed architectural styles requiring varied materials"],
    bestMaterials: ["moisture-resistant architectural shingles", "marine-grade metal flashing", "algae-resistant materials", "proper drainage gutter systems"],
    climateNote: "Larkspur's sheltered canyon location provides some wind protection but creates pockets of trapped moisture. The low elevation near the bay increases humidity levels, and the diverse architectural styles from downtown Victorians to hillside contemporaries require varied roofing approaches."
  },
  "livermore": {
    ...REGION_DEFAULTS["delta"],
    tempRange: "35°F–105°F",
    fireZone: true,
    elevation: "482 ft",
    commonIssues: ["extreme heat causing fastest shingle deterioration in region", "wildfire risk from surrounding grasslands", "high wind exposure from Altamont corridor", "rapid thermal cycling cracking tiles"],
    bestMaterials: ["UV-resistant cool roof shingles", "concrete tile with Class A fire rating", "TPO with enhanced heat welding", "ridge ventilation for extreme heat management"],
    climateNote: "Livermore experiences the most extreme temperatures in the Bay Area, with summer highs exceeding 105°F and strong winds from the Altamont Pass. This combination creates the harshest conditions for roofing materials in the region, demanding maximum UV and wind resistance."
  },
  "los-altos": {
    ...REGION_DEFAULTS["peninsula"],
    elevation: "158 ft",
    commonIssues: ["aging roofs on 1950s-60s ranch homes", "large lot homes with extensive roof areas", "solar panel integration requirements", "premium neighborhood expectations"],
    bestMaterials: ["premium architectural shingles", "composite slate or shake", "standing seam metal", "solar-ready roofing systems"],
    climateNote: "Los Altos' established neighborhoods feature spacious ranch-style homes from the 1950s-60s, many of which are reaching the end of their second or third roofing lifecycle. The moderate peninsula climate is forgiving on materials, allowing homeowners to choose primarily based on aesthetics and longevity."
  },
  "los-altos-hills": {
    ...REGION_DEFAULTS["hillside"],
    fireZone: true,
    elevation: "650 ft",
    commonIssues: ["wildfire risk requiring fire-rated materials", "steep hillside installation complexity", "long private driveways limiting equipment access", "estate-scale roofs with premium requirements"],
    bestMaterials: ["Class A fire-rated concrete tile", "fire-resistant metal roofing", "composite slate for weight reduction on hillsides", "copper gutter systems for estate homes"],
    climateNote: "Los Altos Hills' elevated position in the western foothills creates significant fire risk and wind exposure. The large estate properties require substantial roofing systems, and the steep terrain demands experienced crews with specialized safety equipment."
  },
  "los-gatos": {
    ...REGION_DEFAULTS["hillside"],
    fireZone: true,
    elevation: "400 ft",
    commonIssues: ["wildfire interface zone compliance", "historic downtown building preservation", "creek-side properties with moisture challenges", "complex hillside roof geometries"],
    bestMaterials: ["fire-rated clay or concrete tile", "Class A architectural shingles", "standing seam metal for fire zones", "custom copper for historic properties"],
    climateNote: "Los Gatos sits at the base of the Santa Cruz Mountains, creating a wildfire interface zone for many properties. The town's mix of historic downtown buildings and hillside custom homes requires diverse roofing expertise, from preservation-appropriate materials to fire-rated modern systems."
  },
  "menlo-park": {
    ...REGION_DEFAULTS["peninsula"],
    elevation: "66 ft",
    commonIssues: ["mixed housing stock from cottages to estates", "tree canopy debris accumulation", "older homes with multiple roof layers", "Bay-side flood zone properties"],
    bestMaterials: ["architectural shingles for residential", "flat roof membranes for modern builds", "designer shingles for upscale neighborhoods", "enhanced gutter systems with guards"],
    climateNote: "Menlo Park's diverse neighborhoods range from compact cottages to expansive estates, each with different roofing requirements. The mature tree canopy creates debris management challenges, and properties near the bay face additional moisture considerations."
  },
  "mill-valley": {
    ...REGION_DEFAULTS["hillside"],
    fogExposure: "heavy",
    fireZone: true,
    elevation: "28 ft",
    commonIssues: ["extreme fire zone requirements for hillside homes", "heavy redwood and eucalyptus debris", "persistent fog moisture in valley floor", "steep access limiting equipment delivery"],
    bestMaterials: ["Class A fire-rated shingles or metal", "moss-resistant materials for fog-exposed areas", "debris-shedding standing seam metal", "heavy-duty gutter guards"],
    climateNote: "Mill Valley's location at the base of Mount Tamalpais creates a unique combination of heavy fog, dense tree canopy, and serious wildfire risk. Roofing solutions must balance fire resistance with moisture management — a challenge that requires specialized local knowledge."
  },
  "millbrae": {
    ...REGION_DEFAULTS["peninsula"],
    fogExposure: "moderate",
    elevation: "23 ft",
    commonIssues: ["aircraft noise insulation requirements near SFO", "fog moisture from coastal proximity", "older post-war homes needing re-roofing", "hillside drainage challenges"],
    bestMaterials: ["sound-dampening underlayment options", "architectural shingles with algae resistance", "proper ventilation for moisture control", "enhanced insulation systems"],
    climateNote: "Millbrae's proximity to San Francisco International Airport means some homeowners seek roofing materials with sound-dampening properties. The city's position between coastal fog and the bay creates consistent moisture conditions that benefit from algae-resistant materials."
  },
  "milpitas": {
    ...REGION_DEFAULTS["inland-valley"],
    elevation: "26 ft",
    commonIssues: ["extreme summer heat in South Bay", "new construction settling issues", "commercial and industrial roofing demand", "solar panel integration for energy costs"],
    bestMaterials: ["cool roof rated shingles", "TPO for commercial and industrial", "reflective coatings for energy savings", "solar-compatible roofing systems"],
    climateNote: "Milpitas sits at the southern end of the bay where valley heat creates demanding conditions for roofing materials. The mix of residential, commercial, and industrial properties requires diverse roofing expertise from shingle homes to large-format TPO installations."
  },
  "mountain-view": {
    ...REGION_DEFAULTS["peninsula"],
    fogExposure: "light",
    elevation: "96 ft",
    commonIssues: ["tech campus commercial roofing needs", "1960s ranch home re-roofing demand", "solar-ready roofing requirements", "mixed residential and commercial zones"],
    bestMaterials: ["architectural shingles for residential", "TPO for commercial properties", "solar-integrated roofing systems", "cool roof materials for energy compliance"],
    climateNote: "Mountain View's mix of established residential neighborhoods and modern tech campuses creates diverse roofing demand. The moderate climate is ideal for most roofing materials, with the primary consideration being solar integration and energy efficiency compliance."
  },
  "newark": {
    ...REGION_DEFAULTS["bayside"],
    elevation: "10 ft",
    commonIssues: ["low elevation moisture and flooding risk", "salt air from bay proximity", "industrial area environmental exposure", "affordable housing roofing economics"],
    bestMaterials: ["moisture-resistant shingles", "corrosion-resistant flashing", "TPO for flat commercial roofs", "proper drainage gutter systems"],
    climateNote: "Newark's extremely low elevation near the bay creates persistent moisture conditions and salt air exposure. Roofing materials must be selected for corrosion resistance, and proper drainage is critical to prevent water damage in this flood-prone area."
  },
  "novato": {
    ...REGION_DEFAULTS["inland-valley"],
    avgRainfall: "25–30 inches",
    fireZone: true,
    elevation: "18 ft",
    commonIssues: ["higher rainfall than most Bay Area cities", "fire zone compliance in western hills", "varied terrain from flatlands to hillsides", "rancher-style homes with aging roofs"],
    bestMaterials: ["high-quality waterproofing underlayment", "fire-rated shingles for hill areas", "heavy-duty gutter systems for rainfall", "composite materials for durability"],
    climateNote: "Novato receives significantly more rainfall than most Bay Area cities due to its position at the northern end of Marin County. This extra moisture, combined with fire risk in the western hills, demands roofing systems optimized for both water management and fire resistance."
  },
  "oakland": {
    ...REGION_DEFAULTS["bayside"],
    fireZone: true,
    elevation: "42 ft",
    commonIssues: ["Oakland Hills fire zone requirements", "diverse architecture from Victorian to modern", "flat roof prevalence in commercial areas", "aging housing stock with lead paint and asbestos considerations"],
    bestMaterials: ["fire-rated materials for hills", "period-appropriate materials for historic homes", "TPO for flat commercial roofs", "composite shake for craftsman homes"],
    climateNote: "Oakland's diverse geography and architecture create the widest range of roofing challenges in the East Bay. From fire-zone-compliant installations in the hills to historic preservation in the flatlands, each project requires careful material selection matched to the specific location."
  },
  "orinda": {
    ...REGION_DEFAULTS["inland-valley"],
    fireZone: true,
    elevation: "656 ft",
    commonIssues: ["severe wildfire risk in surrounding hills", "large homes with complex roof systems", "heavy tree debris from oak and eucalyptus", "extreme heat and thermal cycling"],
    bestMaterials: ["Class A fire-rated concrete tile", "fire-resistant metal roofing", "ember-resistant venting systems", "oversized gutters with ember guards"],
    climateNote: "Orinda's location deep in the East Bay hills places most homes in high fire severity zones. The combination of extreme summer heat, dense vegetation, and eucalyptus trees creates serious fire risk that must be addressed with fire-rated roofing materials and ember-resistant ventilation."
  },
  "pacifica": {
    ...REGION_DEFAULTS["coastal"],
    avgRainfall: "25–28 inches",
    windExposure: "high",
    elevation: "48 ft",
    commonIssues: ["severe Pacific wind damage", "salt spray on oceanfront properties", "coastal erosion affecting some foundations", "persistent fog reducing material lifespans"],
    bestMaterials: ["highest wind-rated shingles available (130+ mph)", "marine-grade metal roofing", "stainless steel fasteners throughout", "impact-resistant materials for wind-blown debris"],
    climateNote: "Pacifica faces the full force of Pacific Ocean storms with minimal shelter. Roofing materials must withstand sustained high winds, salt spray, and near-constant moisture. Standard materials deteriorate 30-40% faster here than in sheltered Bay Area locations."
  },
  "palo-alto": {
    ...REGION_DEFAULTS["peninsula"],
    elevation: "30 ft",
    commonIssues: ["historic Professorville and Crescent Park preservation", "solar panel integration demand", "large tree canopy debris management", "mixed density from R-1 to downtown commercial"],
    bestMaterials: ["premium architectural shingles", "natural or synthetic slate for historic homes", "solar-compatible roofing systems", "copper accents for period-appropriate aesthetics"],
    climateNote: "Palo Alto's moderate peninsula climate is among the most forgiving in the Bay Area for roofing materials. The primary considerations are aesthetic compatibility with historic neighborhoods, solar panel integration for the tech-savvy community, and managing debris from the city's extensive tree canopy."
  },
  "pescadero": {
    ...REGION_DEFAULTS["coastal"],
    avgRainfall: "28–35 inches",
    elevation: "40 ft",
    commonIssues: ["remote location increasing project logistics", "extreme coastal moisture", "rural property access challenges", "agricultural building roofing needs"],
    bestMaterials: ["heavy-duty marine-rated materials", "metal roofing for agricultural structures", "premium waterproofing systems", "oversized drainage systems"],
    climateNote: "Pescadero's remote coastal location creates the most extreme moisture conditions in the Bay Area service area. The heavy rainfall, constant fog, and distance from urban centers means roofing projects require careful logistics planning and materials selected for maximum durability."
  },
  "pleasanton": {
    ...REGION_DEFAULTS["inland-valley"],
    fireZone: true,
    elevation: "352 ft",
    commonIssues: ["extreme summer heat", "fire zone compliance in foothill areas", "HOA design review requirements", "large homes with extensive roof surfaces"],
    bestMaterials: ["cool roof rated materials for energy savings", "fire-rated tile for foothill homes", "UV-resistant architectural shingles", "reflective metal roofing options"],
    climateNote: "Pleasanton's Tri-Valley location brings extreme summer heat that tests roofing materials. Foothill properties face additional wildfire risk, and many planned communities have HOA design standards that influence material and color selection."
  },
  "portola-valley": {
    ...REGION_DEFAULTS["hillside"],
    fireZone: true,
    elevation: "420 ft",
    commonIssues: ["extreme wildfire risk in rural hillsides", "limited road access for equipment", "large properties with multiple structures", "environmental sensitivity and tree preservation"],
    bestMaterials: ["Class A fire-rated materials required", "ember-resistant ridge vents", "fire-resistant metal or composite", "copper gutters with ember guards"],
    climateNote: "Portola Valley's rural, heavily wooded hillside setting creates extreme wildfire risk. Fire-resistant roofing is not just recommended but often required by local regulations. The remote terrain and large properties require careful project planning for equipment access and staging."
  },
  "redwood-city": {
    ...REGION_DEFAULTS["peninsula"],
    elevation: "10 ft",
    commonIssues: ["microclimate creating warmest Peninsula temperatures", "low-lying areas with moisture issues", "mixed residential and commercial demand", "older downtown buildings needing maintenance"],
    bestMaterials: ["architectural shingles for residential", "TPO for commercial flat roofs", "cool roof options for the warmer microclimate", "enhanced drainage systems for low areas"],
    climateNote: "Redwood City's unique microclimate makes it one of the warmest cities on the Peninsula, with the local motto 'Climate Best by Government Test.' While this means less fog damage, the increased heat and UV exposure means choosing materials with superior sun resistance."
  },
  "richmond": {
    ...REGION_DEFAULTS["bayside"],
    windExposure: "high",
    elevation: "43 ft",
    commonIssues: ["industrial area corrosion from refinery proximity", "high wind exposure along bay shore", "diverse housing stock from all eras", "affordable roofing solutions demand"],
    bestMaterials: ["corrosion-resistant materials near industrial areas", "wind-rated shingles for exposed properties", "TPO for commercial and industrial", "practical cost-effective residential options"],
    climateNote: "Richmond's position on the bay shore creates significant wind exposure, and the proximity to industrial operations can accelerate corrosion on metal roofing components. Material selection should account for both wind performance and environmental exposure specific to each neighborhood."
  },
  "san-anselmo": {
    ...REGION_DEFAULTS["hillside"],
    fireZone: true,
    elevation: "46 ft",
    commonIssues: ["wildfire risk from surrounding hills", "creek flooding affecting some properties", "mature tree debris on roofs", "narrow street access for equipment"],
    bestMaterials: ["fire-rated architectural shingles", "composite shake for mountain aesthetics", "moss-resistant materials for shaded areas", "heavy-duty gutter systems"],
    climateNote: "San Anselmo's creek-valley setting creates a unique combination of flood risk at lower elevations and fire risk on the surrounding hillsides. The dense tree canopy provides shade that promotes moss growth, requiring materials selected for both fire and moisture resistance."
  },
  "san-bruno": {
    ...REGION_DEFAULTS["coastal"],
    elevation: "100 ft",
    commonIssues: ["heavy fog and wind from Pacific exposure", "San Bruno Mountain wind tunnel effects", "post-war tract homes with original roofs", "SFO proximity noise considerations"],
    bestMaterials: ["wind-rated architectural shingles", "algae-resistant materials for fog zones", "sound-dampening underlayment", "heavy-gauge seamless gutters"],
    climateNote: "San Bruno sits in the shadow of San Bruno Mountain, which channels Pacific fog and wind through the city. The persistent moisture and wind create accelerated wear patterns, and homes on exposed slopes may need their roofs replaced sooner than typical Bay Area timelines."
  },
  "san-carlos": {
    ...REGION_DEFAULTS["peninsula"],
    elevation: "30 ft",
    commonIssues: ["hillside homes with complex roof geometries", "mature tree debris in established neighborhoods", "mixed-era housing stock", "premium neighborhood material expectations"],
    bestMaterials: ["designer architectural shingles", "composite slate for upscale homes", "standing seam metal for modern designs", "copper gutter accents"],
    climateNote: "San Carlos' central Peninsula location provides moderate climate conditions well-suited to most roofing materials. The city's mix of hillside and flatland properties requires expertise with both complex steep-slope and simpler low-slope roof geometries."
  },
  "san-francisco": {
    ...REGION_DEFAULTS["coastal"],
    fogExposure: "heavy",
    windExposure: "high",
    elevation: "52 ft",
    commonIssues: ["flat roof prevalence requiring specialized systems", "row house construction with shared walls", "historic Victorian and Edwardian preservation", "permit complexity in dense urban environment"],
    bestMaterials: ["modified bitumen torch-down for flat roofs", "TPO membrane for modern flat roofs", "architectural shingles for pitched sections", "period-appropriate slate or composite for Victorians"],
    climateNote: "San Francisco's famous fog, wind, and cool maritime climate create unique roofing challenges. The city's predominance of flat-roofed row houses requires specialized flat roofing expertise, while Victorian and Edwardian homes demand preservation-sensitive materials and installation techniques."
  },
  "san-jose": {
    ...REGION_DEFAULTS["inland-valley"],
    elevation: "82 ft",
    commonIssues: ["largest roof market in Bay Area by volume", "extreme summer heat degrading materials", "earthquake retrofit considerations", "tile roofing maintenance on Mediterranean homes"],
    bestMaterials: ["cool roof architectural shingles", "concrete tile for Spanish and Mediterranean styles", "TPO for commercial properties", "lightweight materials for seismic safety"],
    climateNote: "San Jose's inland South Bay position brings hot, dry summers that create thermal stress on all roofing materials. As the Bay Area's largest city, it offers the full range of residential and commercial roofing challenges from downtown high-rises to suburban ranch homes."
  },
  "san-leandro": {
    ...REGION_DEFAULTS["bayside"],
    elevation: "46 ft",
    commonIssues: ["bay moisture and occasional flooding", "industrial area proximity affecting some materials", "post-war housing reaching end of roof life", "commercial roofing demand in business districts"],
    bestMaterials: ["moisture-resistant architectural shingles", "TPO for commercial and industrial", "corrosion-resistant flashing", "proper drainage gutter systems"],
    climateNote: "San Leandro's bay-adjacent location creates moderate moisture conditions with occasional fog. The city's mix of older residential neighborhoods and industrial areas creates diverse roofing needs, from residential re-roofing to large-scale commercial installations."
  },
  "san-mateo": {
    ...REGION_DEFAULTS["peninsula"],
    elevation: "18 ft",
    commonIssues: ["diverse housing from mid-century to new construction", "hillside vs flatland varying conditions", "downtown commercial flat roof maintenance", "tree debris in park-adjacent neighborhoods"],
    bestMaterials: ["architectural shingles for most residential", "flat roof membranes for commercial", "designer options for hillside estates", "standard gutters with leaf guards"],
    climateNote: "San Mateo's central Peninsula location and varied terrain from bayshore flats to hillside homes creates diverse roofing requirements. The moderate climate is forgiving on materials, making this an ideal market for premium roofing products that maximize curb appeal and longevity."
  },
  "san-rafael": {
    ...REGION_DEFAULTS["bayside"],
    elevation: "12 ft",
    commonIssues: ["varied terrain from downtown to hillsides", "flooding risk in Canal district", "mixed commercial and residential demand", "fire risk in hillside areas"],
    bestMaterials: ["versatile architectural shingles", "fire-rated materials for hill zones", "TPO for commercial flat roofs", "drainage-focused gutter systems"],
    climateNote: "San Rafael serves as the Marin County seat with roofing conditions ranging from bay-level moisture in the Canal district to fire-risk hillside zones. The diverse building stock from historic downtown to suburban neighborhoods requires broad material and installation expertise."
  },
  "san-ramon": {
    ...REGION_DEFAULTS["inland-valley"],
    fireZone: true,
    elevation: "440 ft",
    commonIssues: ["extreme heat accelerating material aging", "wildfire risk along eastern hillsides", "master-planned community architectural standards", "builder-grade roofs needing premium replacement"],
    bestMaterials: ["cool roof rated architectural shingles", "fire-rated concrete tile", "UV-resistant materials", "proper attic ventilation systems"],
    climateNote: "San Ramon's Tri-Valley location combines extreme summer heat with wildfire risk along the eastern hillsides. Master-planned communities often have strict architectural guidelines that influence material and color selection for roof replacement projects."
  },
  "santa-clara": {
    ...REGION_DEFAULTS["inland-valley"],
    fogExposure: "light",
    elevation: "72 ft",
    commonIssues: ["commercial and tech campus roofing demand", "heat stress on roofing materials", "older residential neighborhoods needing upgrades", "Title 24 cool roof compliance"],
    bestMaterials: ["cool roof materials for commercial", "TPO for large flat roofs", "energy-efficient residential shingles", "solar-ready roofing systems"],
    climateNote: "Santa Clara's South Bay location means hot summers and significant commercial roofing demand from the technology sector. The mix of older residential neighborhoods and modern commercial developments requires expertise with both traditional shingle homes and large-scale commercial systems."
  },
  "saratoga": {
    ...REGION_DEFAULTS["hillside"],
    fireZone: true,
    elevation: "485 ft",
    commonIssues: ["wildfire risk from Santa Cruz Mountains interface", "premium estate homes with complex rooflines", "historic village building preservation", "steep slope installation challenges"],
    bestMaterials: ["fire-rated clay and concrete tile", "premium composite slate", "standing seam copper or zinc", "custom copper gutter systems"],
    climateNote: "Saratoga's position at the base of the Santa Cruz Mountains creates wildfire interface conditions for many properties. The city's upscale residential character demands premium roofing materials and meticulous installation, while fire zone regulations require Class A rated systems."
  },
  "sausalito": {
    ...REGION_DEFAULTS["coastal"],
    saltAir: true,
    elevation: "14 ft",
    commonIssues: ["severe salt air corrosion from bay and ocean exposure", "steep hillside access challenges", "houseboat and waterfront structure roofing", "high wind exposure on Richardson Bay"],
    bestMaterials: ["marine-grade metal roofing and flashing", "stainless steel fasteners throughout", "salt-resistant coatings", "copper with patina finish for aesthetics"],
    climateNote: "Sausalito's position directly on the bay with exposure to both ocean and bay salt air creates the most corrosive conditions for roofing metals in the region. Hillside homes face additional wind exposure, and the steep terrain makes equipment access a significant project planning factor."
  },
  "south-san-francisco": {
    ...REGION_DEFAULTS["coastal"],
    elevation: "13 ft",
    commonIssues: ["biotech campus commercial roofing demand", "fog and wind from coastal gap", "industrial area flat roof maintenance", "post-war residential neighborhoods aging"],
    bestMaterials: ["wind-rated shingles for residential", "TPO for biotech and commercial flat roofs", "industrial-grade materials for manufacturing facilities", "enhanced moisture barrier systems"],
    climateNote: "South San Francisco's position on the bay side of the coastal mountains channels fog and wind through the gap, creating conditions similar to San Francisco proper. The growing biotech campus district has increased demand for commercial flat roof installations and maintenance."
  },
  "sunnyvale": {
    ...REGION_DEFAULTS["inland-valley"],
    fogExposure: "light",
    elevation: "128 ft",
    commonIssues: ["1950s-60s tract homes reaching roof replacement age", "tech campus commercial roofing", "solar panel integration", "heat stress on aging materials"],
    bestMaterials: ["cool roof architectural shingles", "TPO for commercial buildings", "solar-compatible roofing systems", "energy-efficient underlayment"],
    climateNote: "Sunnyvale's South Bay location brings warm, dry conditions well-suited to most roofing materials. The large inventory of mid-century ranch homes creates steady demand for residential re-roofing, while the tech sector drives commercial flat roof installation and maintenance."
  },
  "tiburon": {
    ...REGION_DEFAULTS["coastal"],
    saltAir: true,
    elevation: "10 ft",
    commonIssues: ["extreme salt air from bay exposure on peninsula", "high wind uplift on waterfront properties", "premium home standards requiring best materials", "steep hillside access challenges"],
    bestMaterials: ["marine-grade standing seam metal", "premium architectural shingles", "stainless steel and copper flashing", "custom copper gutter systems"],
    climateNote: "Tiburon's peninsula position extending into the bay creates exposure to salt air from nearly all directions. The premium residential market demands the highest quality materials, and the steep terrain requires crews experienced with hillside roofing safety and logistics."
  },
  "union-city": {
    ...REGION_DEFAULTS["bayside"],
    elevation: "40 ft",
    commonIssues: ["bay moisture affecting roofing longevity", "newer construction with builder-grade materials", "seismic considerations along Hayward Fault", "commercial district flat roof needs"],
    bestMaterials: ["moisture-resistant shingles", "lightweight materials for seismic areas", "TPO for commercial applications", "proper ventilation systems"],
    climateNote: "Union City's East Bay location provides moderate bayside conditions with some moisture exposure. The mix of newer subdivisions and established neighborhoods creates demand for both premium upgrades from builder-grade materials and maintenance on existing systems."
  },
  "walnut-creek": {
    ...REGION_DEFAULTS["inland-valley"],
    elevation: "135 ft",
    commonIssues: ["extreme summer heat exceeding 100°F", "downtown commercial flat roof maintenance", "upscale residential neighborhoods", "fire risk in eastern hill areas"],
    bestMaterials: ["heat-resistant architectural shingles", "cool roof options for energy savings", "fire-rated materials for hill properties", "TPO for commercial flat roofs"],
    climateNote: "Walnut Creek's sheltered inland position creates some of the hottest conditions in the Bay Area, with summer temperatures regularly exceeding 100°F. This extreme heat demands roofing materials with superior UV stability, and proper attic ventilation is critical for energy management."
  },
  "woodside": {
    ...REGION_DEFAULTS["hillside"],
    fireZone: true,
    elevation: "420 ft",
    commonIssues: ["severe wildfire risk in rural setting", "large estate properties with multiple structures", "limited road access for heavy equipment", "environmental regulations affecting project scope"],
    bestMaterials: ["Class A fire-rated materials required", "fire-resistant metal or composite roofing", "ember-resistant ridge and eave venting", "oversized copper gutter systems"],
    climateNote: "Woodside's rural, heavily wooded hillside setting makes wildfire resistance the primary roofing concern. The large estate properties often include multiple structures (main house, guest house, barn, stable) that all need fire-rated roofing systems coordinated for consistent protection."
  },
};

export function getCityClimate(slug: string): CityClimate | null {
  return CITY_CLIMATE[slug] || null;
}

export function getClimateContentForCity(slug: string): string {
  const climate = CITY_CLIMATE[slug];
  if (!climate) return "";
  const name = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const parts: string[] = [];

  parts.push(`<h3>${name} Climate and Roofing Conditions</h3>`);
  parts.push(`<p>${climate.climateNote} The average annual rainfall in ${name} is ${climate.avgRainfall}, with temperatures typically ranging from ${climate.tempRange}. ${climate.fogExposure === "heavy" ? "Heavy fog exposure is a major factor affecting roof materials here." : climate.fogExposure === "moderate" ? "Moderate fog exposure contributes to moisture-related roofing issues." : "Fog exposure is relatively light in this area."} Wind exposure is ${climate.windExposure}, ${climate.saltAir ? "and salt air from the bay or ocean accelerates corrosion on metal components." : "with no significant salt air concerns."} ${climate.fireZone ? "Parts of " + name + " are designated wildfire zones requiring Class A fire-rated roofing materials." : ""}</p>`);

  parts.push(`<h3>Common Roofing Problems in ${name}</h3>`);
  parts.push(`<ul>${climate.commonIssues.map(i => `<li>${i.charAt(0).toUpperCase() + i.slice(1)}</li>`).join("")}</ul>`);

  parts.push(`<h3>Best Roofing Materials for ${name}</h3>`);
  parts.push(`<p>Based on ${name}'s specific climate conditions at ${climate.elevation} elevation, these materials perform best:</p>`);
  parts.push(`<ul>${climate.bestMaterials.map(m => `<li>${m}</li>`).join("")}</ul>`);

  return parts.join("");
}

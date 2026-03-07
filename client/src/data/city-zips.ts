export interface CityZipData {
  zip: string;
  zips: string[];
  county: string;
}

export const cityZips: Record<string, CityZipData> = {
  "san-francisco": { zip: "94102", zips: ["94102", "94103", "94104", "94105", "94107", "94108", "94109", "94110", "94111", "94112", "94114", "94115", "94116", "94117", "94118", "94121", "94122", "94123", "94124", "94127", "94129", "94130", "94131", "94132", "94133", "94134", "94158"], county: "San Francisco" },
  "san-jose": { zip: "95113", zips: ["95110", "95111", "95112", "95113", "95116", "95117", "95118", "95119", "95120", "95121", "95122", "95123", "95124", "95125", "95126", "95127", "95128", "95129", "95130", "95131", "95132", "95133", "95134", "95135", "95136", "95138", "95139", "95148"], county: "Santa Clara" },
  "oakland": { zip: "94612", zips: ["94601", "94602", "94603", "94605", "94606", "94607", "94608", "94609", "94610", "94611", "94612", "94613", "94618", "94619", "94621"], county: "Alameda" },
  "palo-alto": { zip: "94301", zips: ["94301", "94303", "94304", "94306"], county: "Santa Clara" },
  "daly-city": { zip: "94015", zips: ["94014", "94015"], county: "San Mateo" },
  "pacifica": { zip: "94044", zips: ["94044"], county: "San Mateo" },
  "millbrae": { zip: "94030", zips: ["94030"], county: "San Mateo" },
  "mountain-view": { zip: "94041", zips: ["94040", "94041", "94043"], county: "Santa Clara" },
  "menlo-park": { zip: "94025", zips: ["94025", "94026"], county: "San Mateo" },
  "los-altos": { zip: "94022", zips: ["94022", "94024"], county: "Santa Clara" },
  "milpitas": { zip: "95035", zips: ["95035"], county: "Santa Clara" },
  "los-gatos": { zip: "95030", zips: ["95030", "95032", "95033"], county: "Santa Clara" },
  "sunnyvale": { zip: "94086", zips: ["94085", "94086", "94087", "94089"], county: "Santa Clara" },
  "santa-clara": { zip: "95050", zips: ["95050", "95051", "95054"], county: "Santa Clara" },
  "cupertino": { zip: "95014", zips: ["95014", "95015"], county: "Santa Clara" },
  "campbell": { zip: "95008", zips: ["95008", "95009"], county: "Santa Clara" },
  "saratoga": { zip: "95070", zips: ["95070", "95071"], county: "Santa Clara" },
  "redwood-city": { zip: "94063", zips: ["94061", "94062", "94063", "94065"], county: "San Mateo" },
  "san-mateo": { zip: "94401", zips: ["94401", "94402", "94403", "94404"], county: "San Mateo" },
  "burlingame": { zip: "94010", zips: ["94010", "94011"], county: "San Mateo" },
  "san-bruno": { zip: "94066", zips: ["94066"], county: "San Mateo" },
  "south-san-francisco": { zip: "94080", zips: ["94080", "94083"], county: "San Mateo" },
  "brisbane": { zip: "94005", zips: ["94005"], county: "San Mateo" },
  "colma": { zip: "94014", zips: ["94014"], county: "San Mateo" },
  "foster-city": { zip: "94404", zips: ["94404"], county: "San Mateo" },
  "belmont": { zip: "94002", zips: ["94002"], county: "San Mateo" },
  "san-carlos": { zip: "94070", zips: ["94070"], county: "San Mateo" },
  "woodside": { zip: "94062", zips: ["94062"], county: "San Mateo" },
  "atherton": { zip: "94027", zips: ["94027"], county: "San Mateo" },
  "portola-valley": { zip: "94028", zips: ["94028"], county: "San Mateo" },
  "half-moon-bay": { zip: "94019", zips: ["94019"], county: "San Mateo" },
  "berkeley": { zip: "94704", zips: ["94701", "94702", "94703", "94704", "94705", "94706", "94707", "94708", "94709", "94710"], county: "Alameda" },
  "hayward": { zip: "94541", zips: ["94541", "94542", "94544", "94545"], county: "Alameda" },
  "fremont": { zip: "94538", zips: ["94536", "94538", "94539", "94555"], county: "Alameda" },
  "union-city": { zip: "94587", zips: ["94587"], county: "Alameda" },
  "newark": { zip: "94560", zips: ["94560"], county: "Alameda" },
  "richmond": { zip: "94804", zips: ["94801", "94803", "94804", "94805", "94806"], county: "Contra Costa" },
  "los-altos-hills": { zip: "94024", zips: ["94022", "94024"], county: "Santa Clara" },
  "san-leandro": { zip: "94577", zips: ["94577", "94578", "94579"], county: "Alameda" },
  "livermore": { zip: "94550", zips: ["94550", "94551"], county: "Alameda" },
  "pleasanton": { zip: "94566", zips: ["94566", "94568"], county: "Alameda" },
  "dublin": { zip: "94568", zips: ["94568"], county: "Alameda" },
  "alameda": { zip: "94501", zips: ["94501", "94502"], county: "Alameda" },
  "sausalito": { zip: "94965", zips: ["94965"], county: "Marin" },
  "mill-valley": { zip: "94941", zips: ["94941", "94942"], county: "Marin" },
  "tiburon": { zip: "94920", zips: ["94920"], county: "Marin" },
  "concord": { zip: "94520", zips: ["94518", "94519", "94520", "94521"], county: "Contra Costa" },
  "walnut-creek": { zip: "94596", zips: ["94595", "94596", "94597", "94598"], county: "Contra Costa" },
  "orinda": { zip: "94563", zips: ["94563"], county: "Contra Costa" },
  "lafayette": { zip: "94549", zips: ["94549"], county: "Contra Costa" },
  "san-ramon": { zip: "94583", zips: ["94582", "94583"], county: "Contra Costa" },
  "danville": { zip: "94526", zips: ["94506", "94526"], county: "Contra Costa" },
  "san-rafael": { zip: "94901", zips: ["94901", "94903", "94912", "94913"], county: "Marin" },
  "novato": { zip: "94947", zips: ["94945", "94947", "94949"], county: "Marin" },
  "corte-madera": { zip: "94925", zips: ["94925"], county: "Marin" },
  "larkspur": { zip: "94939", zips: ["94939"], county: "Marin" },
  "fairfax": { zip: "94930", zips: ["94930"], county: "Marin" },
  "san-anselmo": { zip: "94960", zips: ["94960"], county: "Marin" },
  "belvedere": { zip: "94920", zips: ["94920"], county: "Marin" },
  "kentfield": { zip: "94904", zips: ["94904"], county: "Marin" },
  "east-palo-alto": { zip: "94303", zips: ["94303"], county: "San Mateo" },
  "hillsborough": { zip: "94010", zips: ["94010"], county: "San Mateo" },
  "pescadero": { zip: "94060", zips: ["94060"], county: "San Mateo" },
};

export function getCityZipData(slug: string): CityZipData | undefined {
  return cityZips[slug];
}

export function formatZipList(zips: string[]): string {
  if (zips.length <= 3) return zips.join(", ");
  return zips.slice(0, 3).join(", ") + ` + ${zips.length - 3} more`;
}

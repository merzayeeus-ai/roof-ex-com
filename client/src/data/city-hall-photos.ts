export const CITY_PHOTO_CAPTIONS: Record<string, string> = {
  "alameda": "Alameda City Hall",
  "atherton": "Atherton Town Hall",
  "belmont": "Belmont City Hall",
  "belvedere": "Belvedere City Hall",
  "berkeley": "Berkeley City Hall",
  "brisbane": "Brisbane City Hall",
  "burlingame": "Burlingame City Hall",
  "campbell": "Campbell City Hall",
  "colma": "Colma Town Hall",
  "concord": "Concord City Hall",
  "corte-madera": "Corte Madera Town Hall",
  "cupertino": "Cupertino City Hall",
  "danville": "Danville Town Meeting Hall",
  "dublin": "Dublin City Hall",
  "fairfax": "Town of Fairfax",
  "foster-city": "Foster City Hall",
  "fremont": "Fremont City Hall",
  "half-moon-bay": "Half Moon Bay City Hall",
  "hayward": "Hayward City Hall",
  "kentfield": "College of Marin, Kentfield",
  "lafayette": "City of Lafayette",
  "larkspur": "Larkspur City Hall",
  "livermore": "Livermore City Hall",
  "los-altos": "Los Altos Community Center",
  "los-altos-hills": "Los Altos Hills Town Hall",
  "los-gatos": "La Cañada Building, Downtown Los Gatos",
  "menlo-park": "Menlo Park Civic Center",
  "mill-valley": "Mill Valley City Hall",
  "millbrae": "Millbrae City Hall",
  "milpitas": "Milpitas City Hall",
  "mountain-view": "Mountain View City Hall",
  "newark": "Newark City Hall",
  "novato": "Novato City Hall",
  "oakland": "Oakland City Hall",
  "orinda": "Orinda City Hall",
  "pacifica": "Pacifica City Hall",
  "palo-alto": "Palo Alto City Hall",
  "pleasanton": "Pleasanton City Hall",
  "portola-valley": "Portola Valley City Hall",
  "redwood-city": "Redwood City Hall",
  "richmond": "Richmond Civic Center",
  "san-anselmo": "San Anselmo Town Hall",
  "san-carlos": "City of San Carlos",
  "san-francisco": "San Francisco City Hall",
  "san-jose": "San Jose City Hall",
  "san-leandro": "San Leandro City Hall",
  "san-mateo": "San Mateo City Hall",
  "san-rafael": "San Rafael City Hall",
  "san-ramon": "San Ramon City Hall",
  "santa-clara": "Santa Clara City Hall",
  "saratoga": "Memorial Arch of Saratoga",
  "sausalito": "Sausalito City Hall",
  "south-san-francisco": "South San Francisco City Hall",
  "sunnyvale": "Sunnyvale City Hall",
  "tiburon": "Tiburon Town Hall",
  "union-city": "Union City City Hall",
  "walnut-creek": "Walnut Creek City Hall",
  "woodside": "Woodside Independence Hall",
};

export function getCityHallImage(slug: string): string {
  return new URL(`../assets/images/city-halls/${slug}.webp`, import.meta.url).href;
}

export function getCityPhotoCaption(slug: string, cityName: string): string {
  if (CITY_PHOTO_CAPTIONS[slug]) {
    return CITY_PHOTO_CAPTIONS[slug];
  }
  return `${cityName} City Hall`;
}

const LANDMARK_CITIES = new Set(["kentfield", "los-altos", "los-gatos", "menlo-park", "san-carlos", "saratoga", "sausalito"]);

export function isCityHallPhoto(slug: string): boolean {
  return !LANDMARK_CITIES.has(slug);
}

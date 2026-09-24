var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// client/src/data/city-zips.ts
var cityZips;
var init_city_zips = __esm({
  "client/src/data/city-zips.ts"() {
    "use strict";
    cityZips = {
      "san-francisco": { zip: "94102", zips: ["94102", "94103", "94104", "94105", "94107", "94108", "94109", "94110", "94111", "94112", "94114", "94115", "94116", "94117", "94118", "94121", "94122", "94123", "94124", "94127", "94129", "94130", "94131", "94132", "94133", "94134", "94158"], county: "San Francisco" },
      "san-jose": { zip: "95113", zips: ["95110", "95111", "95112", "95113", "95116", "95117", "95118", "95119", "95120", "95121", "95122", "95123", "95124", "95125", "95126", "95127", "95128", "95129", "95130", "95131", "95132", "95133", "95134", "95135", "95136", "95138", "95139", "95148"], county: "Santa Clara" },
      "oakland": { zip: "94612", zips: ["94601", "94602", "94603", "94605", "94606", "94607", "94608", "94609", "94610", "94611", "94612", "94613", "94618", "94619", "94621"], county: "Alameda" },
      "piedmont": { zip: "94611", zips: ["94610", "94611", "94618"], county: "Alameda" },
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
      "pescadero": { zip: "94060", zips: ["94060"], county: "San Mateo" }
    };
  }
});

// shared/companycam-photo-seo.ts
function normalize(value) {
  return value.normalize("NFKC").trim().toLowerCase().replace(/&/g, " and ").replace(/[_-]+/g, " ").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ");
}
function knownCity(value) {
  if (!value || normalize(value) === "bay area") return void 0;
  return CITY_NAMES.get(normalize(value).replace(/\s+ca$/, ""));
}
function servicesFromValues(values) {
  const services = /* @__PURE__ */ new Set();
  for (const value of values) {
    const normalized = normalize(value);
    for (const [pattern, service] of SERVICE_ALIASES) {
      if (pattern.test(normalized)) services.add(service);
    }
  }
  return SERVICE_ORDER.filter((service) => services.has(service));
}
function exactTaggedServices(tags) {
  const services = /* @__PURE__ */ new Set();
  for (const tag of tags) {
    const normalized = normalize(tag);
    for (const [pattern, service] of SERVICE_ALIASES) {
      const exact = new RegExp(`^(?:${pattern.source.replace(/^\\b|\\b$/g, "")})$`, "i");
      if (exact.test(normalized)) services.add(service);
    }
  }
  return SERVICE_ORDER.filter((service) => services.has(service));
}
function sentenceCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
function withArticle(value) {
  return `${/^[aeiou]/i.test(value) ? "an" : "a"} ${value}`;
}
function joinedServices(services) {
  if (services.length === 1) return services[0];
  if (services.length === 2) return `${services[0]} and ${services[1]}`;
  return `${services.slice(0, -1).join(", ")}, and ${services[services.length - 1]}`;
}
function getCompanyCamPhotoSeo(photo, kind = "project") {
  const city = knownCity(photo.city);
  const taggedServices = exactTaggedServices(photo.tags ?? []);
  const services = taggedServices.length > 0 ? taggedServices : kind === "field-note" && photo.title ? servicesFromValues([photo.title]) : [];
  const knownServices = services.length > 0 ? services : ["roofing"];
  const service = knownServices[0];
  const beforeAndAfterCategory = (photo.tags ?? []).some((tag) => normalize(tag) === "before and after");
  const serviceTitle = sentenceCase(service);
  const titleLocation = city ? ` \u2014 ${city}, CA` : " \u2014 ROOF EXPRESS";
  const categoryNote = beforeAndAfterCategory ? " in the Before and After gallery" : "";
  if (kind === "field-note") {
    const audience = city ? ` for ${city}, California` : "";
    const subjects = joinedServices(knownServices);
    return {
      alt: `Image accompanying a ROOF EXPRESS Field Note about ${service}${audience}.`,
      title: `${serviceTitle} Field Note Image${titleLocation}`,
      caption: `Image for a ROOF EXPRESS Field Note about ${service}${audience}.`,
      description: city ? `This image accompanies a ROOF EXPRESS Field Note about ${subjects} for ${city}, California. It is part of our collection of roofing guides and field notes.` : `This image accompanies a ROOF EXPRESS Field Note about ${subjects}. It is part of our collection of roofing guides and field notes.`
    };
  }
  const location = city ? ` in ${city}, California` : "";
  const baseAlt = `ROOF EXPRESS photo from ${withArticle(service)} project${location}`;
  const categorizedAlt = `${baseAlt}${categoryNote}.`;
  const otherServices = knownServices.slice(1);
  return {
    alt: categorizedAlt.length <= 160 ? categorizedAlt : `${baseAlt}.`,
    title: `${serviceTitle} Project Photo${titleLocation}`,
    caption: city ? `${serviceTitle} project documented by ROOF EXPRESS in ${city}, California${categoryNote}.` : `${serviceTitle} project documentation from ROOF EXPRESS${categoryNote}.`,
    description: `This CompanyCam photo is associated with a ROOF EXPRESS ${service} project${location}.` + (otherServices.length > 0 ? ` It is also categorized for ${joinedServices(otherServices)}.` : "") + (!city ? " No specific job location is published." : "")
  };
}
var CITY_NAMES, SERVICE_ALIASES, SERVICE_ORDER;
var init_companycam_photo_seo = __esm({
  "shared/companycam-photo-seo.ts"() {
    "use strict";
    init_city_zips();
    CITY_NAMES = /* @__PURE__ */ new Map();
    for (const slug of Object.keys(cityZips)) {
      const name = slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      CITY_NAMES.set(normalize(name), name);
      CITY_NAMES.set(normalize(slug), name);
    }
    SERVICE_ALIASES = [
      [/\b(?:roof repairs?|leak repairs?)\b/i, "roof repair"],
      [/\b(?:roof replacements?|reroof|re roof)\b/i, "roof replacement"],
      [/\b(?:residential roofing|asphalt shingles?|asphalt shingle roofing|shingle roofing)\b/i, "residential roofing"],
      [/\b(?:commercial roofing|commercial systems?)\b/i, "commercial roofing"],
      [/\b(?:gutters?|gutter installation|gutter replacement)\b/i, "gutter service"],
      [/\b(?:flat roof(?:ing)?|low slope(?: roofing)?)\b/i, "flat-roofing service"],
      [/\b(?:skylights?|skylight installation|skylight repair)\b/i, "skylight service"],
      [/\b(?:emergency(?: roof repair| roofing| repairs?| services?)?|storm damage repair|emergency tarping)\b/i, "emergency roofing service"]
    ];
    SERVICE_ORDER = [
      "roof repair",
      "roof replacement",
      "residential roofing",
      "commercial roofing",
      "gutter service",
      "flat-roofing service",
      "skylight service",
      "emergency roofing service"
    ];
  }
});

// shared/tagged-job-photos.ts
function normalizeWords(value) {
  return value.normalize("NFKC").trim().toLowerCase().replace(/&/g, " and ").replace(/[_-]+/g, " ").replace(/[.,/]+/g, " ").replace(/\s+/g, " ");
}
function titleFromSlug(slug) {
  return slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
function normalizeGalleryTag(value) {
  return SERVICE_TAG_ALIASES[normalizeWords(value)];
}
function normalizeGalleryCity(value) {
  const normalized = normalizeWords(value).replace(/\s+ca$/, "");
  return CITY_BY_NORMALIZED_NAME.get(normalized)?.name;
}
function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function invalidPhoto(index, reason) {
  const location = index === void 0 ? "manifest" : `photo ${index}`;
  throw new Error(`Invalid tagged job photo ${location}: ${reason}`);
}
function requiredString(record, key, index) {
  if (typeof record[key] !== "string" || record[key].trim().length === 0) {
    invalidPhoto(index, `${key} must be a non-empty string`);
  }
  return record[key];
}
function optionalString(record, key, index) {
  if (!(key in record)) return void 0;
  if (typeof record[key] !== "string") invalidPhoto(index, `${key} must be a string`);
  return record[key];
}
function validatePhotoSeo(value, index) {
  if (value === void 0) return;
  if (!isRecord(value)) invalidPhoto(index, "photoSeo must be an object");
  for (const key of ["alt", "title", "caption", "description"]) {
    if (typeof value[key] !== "string" || value[key].trim().length === 0) {
      invalidPhoto(index, `photoSeo.${key} must be a non-empty string`);
    }
  }
}
function localAssetPath2(value, key, index) {
  if (typeof value !== "string" || !/^\/images\/(?:projects|field-notes)\/[^/]+\.webp$/.test(value)) {
    invalidPhoto(index, `${key} must be a local WebP asset path`);
  }
  return value;
}
function parseTaggedJobPhotos(payload) {
  if (!Array.isArray(payload)) invalidPhoto(void 0, "expected an array");
  const ids = /* @__PURE__ */ new Set();
  const thumbnails = /* @__PURE__ */ new Set();
  const fullSizes = /* @__PURE__ */ new Set();
  return payload.map((value, index) => {
    if (!isRecord(value)) invalidPhoto(index, "expected an object");
    const id = requiredString(value, "id", index);
    if (ids.has(id)) invalidPhoto(index, `duplicate id ${id}`);
    ids.add(id);
    const thumbnail = localAssetPath2(value.thumbnail, "thumbnail", index);
    const fullSize = localAssetPath2(value.fullSize, "fullSize", index);
    if (thumbnails.has(thumbnail)) invalidPhoto(index, `duplicate thumbnail ${thumbnail}`);
    if (fullSizes.has(fullSize)) invalidPhoto(index, `duplicate fullSize ${fullSize}`);
    thumbnails.add(thumbnail);
    fullSizes.add(fullSize);
    if (typeof value.createdAt !== "number" || !Number.isFinite(value.createdAt)) {
      invalidPhoto(index, "createdAt must be finite");
    }
    if (!Array.isArray(value.tags) || value.tags.some((tag) => typeof tag !== "string")) {
      invalidPhoto(index, "tags must be an array of strings");
    }
    const tags = value.tags.map((tag) => normalizeGalleryTag(tag) ?? normalizeGalleryCity(tag)).filter((tag) => Boolean(tag));
    const city = requiredString(value, "city", index);
    const normalizedCity = city === BAY_AREA ? BAY_AREA : normalizeGalleryCity(city);
    if (!normalizedCity) invalidPhoto(index, "city must be a known city or Bay Area");
    if (!tags.some((tag) => Boolean(normalizeGalleryTag(tag)))) {
      invalidPhoto(index, "at least one public service tag is required");
    }
    validatePhotoSeo(value.photoSeo, index);
    const photoSeo = getCompanyCamPhotoSeo({ city: normalizedCity, tags });
    const photo = {
      id,
      thumbnail,
      fullSize,
      createdAt: value.createdAt,
      tags: [...new Set(tags)],
      city: normalizedCity,
      description: photoSeo.description,
      photoSeo
    };
    for (const key of ["state"]) {
      const optionalValue = optionalString(value, key, index);
      if (optionalValue !== void 0) photo[key] = optionalValue;
    }
    if ("isVideo" in value) {
      if (value.isVideo !== false) invalidPhoto(index, "isVideo must be false");
      photo.isVideo = false;
    }
    if ("videoUrl" in value) {
      if (value.videoUrl !== "") invalidPhoto(index, "videoUrl must be empty");
      photo.videoUrl = "";
    }
    if ("coordinates" in value) {
      if (value.coordinates !== null) invalidPhoto(index, "coordinates must be null");
      photo.coordinates = null;
    }
    return photo;
  });
}
function requestedTag(value) {
  const service = normalizeGalleryTag(value);
  if (service) return { service };
  const city = normalizeGalleryCity(value);
  if (city) return { city };
  return {};
}
function filterTaggedJobPhotos(photos, filter = {}) {
  const requested = filter.tag ? requestedTag(filter.tag) : {};
  const service = requested.service ?? (filter.tag ? void 0 : void 0);
  const tagCity = requested.city;
  if (filter.tag && !service && !tagCity) return [];
  const requestedCity = filter.city ? normalizeGalleryCity(filter.city) : tagCity;
  if (filter.city && !requestedCity) return [];
  if (tagCity && filter.city && requestedCity !== tagCity) return [];
  return photos.filter((photo) => {
    const hasService = !service || photo.tags.some((tag) => normalizeGalleryTag(tag) === service);
    const hasCity = !requestedCity || photo.city !== BAY_AREA && normalizeGalleryCity(photo.city) === requestedCity;
    return hasService && hasCity;
  });
}
var SERVICE_TAG_ALIASES, PUBLIC_SERVICE_TAGS, BAY_AREA, CITY_BY_NORMALIZED_NAME;
var init_tagged_job_photos = __esm({
  "shared/tagged-job-photos.ts"() {
    "use strict";
    init_city_zips();
    init_companycam_photo_seo();
    SERVICE_TAG_ALIASES = {
      "roof repair": "Roof Repair",
      "roof repairs": "Roof Repair",
      "leak repair": "Roof Repair",
      "leak repairs": "Roof Repair",
      "roof replacement": "Roof Replacement",
      "roof replacements": "Roof Replacement",
      "roof replace": "Roof Replacement",
      "reroof": "Roof Replacement",
      "re roof": "Roof Replacement",
      "residential roofing": "Asphalt Shingle Roofing",
      "asphalt shingle roofing": "Asphalt Shingle Roofing",
      "asphalt shingle": "Asphalt Shingle Roofing",
      "asphalt shingles": "Asphalt Shingle Roofing",
      "shingle roofing": "Asphalt Shingle Roofing",
      "commercial roofing": "Commercial Systems",
      "commercial systems": "Commercial Systems",
      "commercial system": "Commercial Systems",
      "gutters": "Gutters",
      "gutter": "Gutters",
      "gutter installation": "Gutters",
      "gutter replacement": "Gutters",
      "flat roof": "Flat Roof",
      "flat roofing": "Flat Roof",
      "low slope roofing": "Flat Roof",
      "low slope": "Flat Roof",
      "skylight": "Skylights",
      "skylights": "Skylights",
      "skylight installation": "Skylights",
      "skylight repair": "Skylights",
      "before and after": "Before and After",
      "before after": "Before and After",
      "beforeafter": "Before and After",
      "b and a": "Before and After",
      "emergency": "Emergency",
      "emergency repair": "Emergency",
      "emergency roof repair": "Emergency",
      "emergency roofing": "Emergency",
      "emergency service": "Emergency",
      "emergency services": "Emergency",
      "emergency tarping": "Emergency",
      "storm damage": "Emergency",
      "storm damage repair": "Emergency"
    };
    PUBLIC_SERVICE_TAGS = new Set(Object.values(SERVICE_TAG_ALIASES));
    BAY_AREA = "Bay Area";
    CITY_BY_NORMALIZED_NAME = /* @__PURE__ */ new Map();
    for (const slug of Object.keys(cityZips)) {
      const name = titleFromSlug(slug);
      CITY_BY_NORMALIZED_NAME.set(normalizeWords(slug), { slug, name });
      CITY_BY_NORMALIZED_NAME.set(normalizeWords(name), { slug, name });
    }
  }
});

// shared/job-photo-reviews.ts
var JOB_PHOTO_REVIEWS;
var init_job_photo_reviews = __esm({
  "shared/job-photo-reviews.ts"() {
    "use strict";
    JOB_PHOTO_REVIEWS = [
      { id: "3524792493", sha256: "1b7981279ce71f1878fd04914d1330dde66d641af049d464e0546c21eedd8954", cropBottom: 0.18 },
      { id: "3506074506", sha256: "7e1e1e948083f601c201b487c789408ddee4ad1d849b95b4e2112e0ac21c9941", cropBottom: 0.18 },
      { id: "3506019549", sha256: "d66254f0543c0d39fe2b99ca48b348c3d7d19722e5c4b8f1a76be5d3e471d5ac", cropBottom: 0.18 },
      { id: "3501785633", sha256: "7820eb0af1b88450380f835c478c4e300544cede64ddd5373d02f0e107ec2494", cropBottom: 0.18 },
      { id: "3501775336", sha256: "63b31e3e0d2307e214dc8313dcdcf77309525fe09a78684da298a83ddbf2599e", cropBottom: 0.18 },
      { id: "3501746920", sha256: "f22834f55e67db385934a392cb13e3bdf6cec3f52ac3ee26d724b3580128e78c", cropBottom: 0.18 },
      { id: "3496065714", sha256: "9ce66437aa8a8f89de7a763324bf8c10f97b5322f397a19edca6bc3046a696e1", cropBottom: 0.18 },
      { id: "3491903395", sha256: "25ad0d17d0567da5772b3d4eb276cbee1cf1fe615939ab566d62cda183b9e984", cropBottom: 0.18 },
      { id: "3483424552", sha256: "89b2e0fb27c22c04d86c9d64a4da9dc1ce57c70d8fb5b1673e1280d945831c83", cropBottom: 0.18 }
    ];
  }
});

// script/generate-city-job-photos.ts
var generate_city_job_photos_exports = {};
__export(generate_city_job_photos_exports, {
  backfillTaggedJobPhotoMetadata: () => backfillTaggedJobPhotoMetadata,
  generateCityJobPhotos: () => generateCityJobPhotos,
  syncTaggedJobPhotos: () => syncTaggedJobPhotos
});
import { createHash as createHash2 } from "crypto";
import { fileURLToPath as fileURLToPath2 } from "url";
import {
  access,
  mkdir as mkdir3,
  readFile as readFile3,
  rename as rename3,
  rm as rm2,
  stat as stat2,
  writeFile as writeFile3
} from "fs/promises";
import path3 from "path";
import sharp2 from "sharp";
function isRecord2(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
async function companyCamFetch2(url, token, fetcher) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const response = await fetcher(url, { headers: { Authorization: `Bearer ${token}` } });
    if (response.status !== 429) return response;
    const retryAfter = Number(response.headers.get("retry-after"));
    await new Promise((resolve) => setTimeout(
      resolve,
      Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1e3 : Math.min(1e3 * 2 ** attempt, 16e3)
    ));
  }
  throw new Error("CompanyCam rate limit did not clear after retries");
}
function pageFromPayload(payload) {
  if (Array.isArray(payload)) return { values: payload };
  if (!isRecord2(payload)) throw new Error("CompanyCam API returned an invalid paginated response");
  const values = Array.isArray(payload.data) ? payload.data : Array.isArray(payload.results) ? payload.results : Array.isArray(payload.items) ? payload.items : Array.isArray(payload.tags) ? payload.tags : Array.isArray(payload.photos) ? payload.photos : void 0;
  if (!values) throw new Error("CompanyCam API returned an invalid paginated response");
  const metadata = isRecord2(payload.meta) ? payload.meta : isRecord2(payload.pagination) ? payload.pagination : payload;
  const total = typeof metadata.total === "number" ? metadata.total : void 0;
  const totalPages = typeof metadata.total_pages === "number" ? metadata.total_pages : typeof metadata.totalPages === "number" ? metadata.totalPages : typeof metadata.pages === "number" ? metadata.pages : void 0;
  const nextRaw = metadata.next_page ?? metadata.nextPage;
  const nextPage = typeof nextRaw === "number" ? nextRaw : typeof nextRaw === "string" && /^\d+$/.test(nextRaw) ? Number(nextRaw) : void 0;
  return { values, total, totalPages, nextPage };
}
async function list(resource, token, fetcher) {
  const result2 = [];
  let expectedTotal;
  let expectedPages;
  let nextPage = 1;
  for (let pageCount = 0; nextPage !== void 0; pageCount++) {
    if (pageCount >= 1e4) throw new Error("CompanyCam pagination exceeded the safe page limit");
    const separator = resource.includes("?") ? "&" : "?";
    const url = `${API}/${resource}${separator}per_page=${PAGE_SIZE2}&page=${nextPage}`;
    const response = await companyCamFetch2(url, token, fetcher);
    if (!response.ok) throw new Error(`CompanyCam API returned ${response.status}`);
    const currentPage = nextPage;
    const parsed = pageFromPayload(await response.json());
    if (parsed.total !== void 0) expectedTotal = parsed.total;
    if (parsed.totalPages !== void 0) expectedPages = parsed.totalPages;
    result2.push(...parsed.values);
    if (expectedTotal !== void 0 && result2.length > expectedTotal) {
      throw new Error(`CompanyCam pagination exceeded its declared total for ${resource}`);
    }
    if (parsed.nextPage !== void 0) {
      nextPage = parsed.nextPage;
    } else if (expectedPages !== void 0) {
      nextPage = currentPage < expectedPages ? currentPage + 1 : void 0;
    } else if (parsed.values.length === PAGE_SIZE2) {
      nextPage = currentPage + 1;
    } else {
      nextPage = void 0;
    }
    if (parsed.values.length === 0 && nextPage !== void 0) {
      throw new Error(`CompanyCam pagination ended before all pages for ${resource}`);
    }
    if (nextPage === void 0 && expectedTotal !== void 0 && result2.length !== expectedTotal) {
      throw new Error(`CompanyCam pagination was truncated for ${resource}`);
    }
  }
  return result2;
}
function tagLabel(tag) {
  return typeof tag.display_value === "string" ? tag.display_value : typeof tag.displayValue === "string" ? tag.displayValue : typeof tag.name === "string" ? tag.name : "";
}
function citySlug2(city) {
  const normalized = normalizeGalleryCity(city);
  if (!normalized) return void 0;
  for (const slug of Object.keys(cityZips)) {
    const title = slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    if (title === normalized) return slug;
  }
  return void 0;
}
function publicTagForCompanyTag(tag) {
  const label = tagLabel(tag);
  return normalizeGalleryTag(label) ?? normalizeGalleryCity(label);
}
function embeddedPublicTags(photo, tagById) {
  const labels = [];
  if (Array.isArray(photo.tags)) {
    for (const raw of photo.tags) {
      const tag = typeof raw === "string" ? { id: raw, display_value: raw } : isRecord2(raw) ? {
        id: typeof raw.id === "string" || typeof raw.id === "number" ? raw.id : "",
        display_value: typeof raw.display_value === "string" ? raw.display_value : typeof raw.displayValue === "string" ? raw.displayValue : typeof raw.name === "string" ? raw.name : ""
      } : void 0;
      if (tag) {
        const publicTag = publicTagForCompanyTag(tag);
        if (publicTag) labels.push(publicTag);
      }
    }
  }
  if (Array.isArray(photo.tag_ids)) {
    for (const id of photo.tag_ids) {
      const tag = tagById.get(String(id));
      if (tag) {
        const publicTag = publicTagForCompanyTag(tag);
        if (publicTag) labels.push(publicTag);
      }
    }
  }
  return [...new Set(labels)];
}
function sourceKey(photo) {
  const source = photo;
  const candidates = [
    ["fingerprint", photo.fingerprint],
    ["sha256", photo.sha256],
    ["version", photo.version],
    ["updated_at", photo.updated_at],
    ["updatedAt", photo.updatedAt],
    ["source_fingerprint", source.source_fingerprint],
    ["source_version", source.source_version],
    ["source_updated_at", source.source_updated_at],
    ["content_hash", source.content_hash],
    ["checksum", source.checksum]
  ];
  const parts = candidates.flatMap(([name, value]) => {
    if (typeof value === "string" && value.length > 0) return [`${name}:${value}`];
    if (typeof value === "number" && Number.isFinite(value)) return [`${name}:${value}`];
    return [];
  });
  return parts.length > 0 ? parts.join("|") : void 0;
}
function epochSeconds(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const asNumber = Number(value);
    if (Number.isFinite(asNumber) && value.trim() !== "") return asNumber;
    const asDate = Date.parse(value);
    if (Number.isFinite(asDate)) return asDate / 1e3;
  }
  return void 0;
}
function extractCity(value) {
  if (typeof value === "string") return normalizeGalleryCity(value);
  if (!isRecord2(value)) return void 0;
  for (const key of ["city", "locality", "town"]) {
    const city = value[key];
    if (typeof city === "string") {
      const normalized = normalizeGalleryCity(city);
      if (normalized) return normalized;
    }
  }
  return void 0;
}
function resolveProjectCity(project) {
  if (!isRecord2(project)) return void 0;
  return (isRecord2(project.project) ? resolveProjectCity(project.project) : void 0) ?? extractCity(project.city) ?? extractCity(project.address) ?? extractCity(project.location);
}
function originalUri(photo) {
  const original = photo.uris?.find((uri) => uri.type === "original" && typeof uri.uri === "string" && uri.uri.length > 0);
  return original?.uri;
}
function safeAssetPath(asset) {
  if (!/^\/images\/projects\/[^/]+\.webp$/.test(asset)) return void 0;
  return asset;
}
async function fileExists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}
async function directoryExists(directory) {
  try {
    return (await stat2(directory)).isDirectory();
  } catch {
    return false;
  }
}
async function readJson(file, fallback) {
  try {
    return JSON.parse(await readFile3(file, "utf8"));
  } catch {
    return fallback;
  }
}
function publicPhoto(photo, asset, tags, city) {
  if (photo.id === void 0 || photo.id === null) return void 0;
  const id = String(photo.id);
  const createdAt = epochSeconds(photo.created_at);
  if (!id.trim() || createdAt === void 0 || tags.length === 0) return void 0;
  const photoSeo = getCompanyCamPhotoSeo({ city, tags });
  return {
    id,
    thumbnail: asset,
    fullSize: asset,
    createdAt,
    description: photoSeo.description,
    photoSeo,
    city,
    state: "CA",
    isVideo: false,
    videoUrl: "",
    coordinates: null,
    tags: [...new Set(tags)]
  };
}
function cityPhoto(photo) {
  const photoSeo = getCompanyCamPhotoSeo(photo);
  return {
    src: photo.thumbnail,
    alt: photoSeo.alt,
    caption: photoSeo.caption,
    title: photoSeo.title,
    description: photoSeo.description,
    photoSeo
  };
}
function generatedCitySource(result2) {
  return `// Generated from tagged CompanyCam roofing photos. Do not edit by hand.
// Only local WebP derivatives and generic public copy are published.
export interface CompanyCamPhotoSeo { alt: string; title: string; caption: string; description: string; }
export interface CityProjectPhoto { src: string; alt: string; caption: string; title?: string; description?: string; photoSeo?: CompanyCamPhotoSeo; }
export let CITY_PROJECT_PHOTOS: Record<string, CityProjectPhoto[]> = ${JSON.stringify(result2, null, 2)};
export function setCityProjectPhotos(photos: Record<string, CityProjectPhoto[]>): void { CITY_PROJECT_PHOTOS = photos; }
export function getCityProjectPhotos(slug: string): CityProjectPhoto[] { return CITY_PROJECT_PHOTOS[slug] || []; }
`;
}
async function atomicWrite(file, contents) {
  try {
    if (await readFile3(file, "utf8") === contents) return false;
  } catch {
  }
  const temporary = `${file}.staging-${process.pid}`;
  await mkdir3(path3.dirname(file), { recursive: true });
  try {
    await writeFile3(temporary, contents);
    await rename3(temporary, file);
    return true;
  } catch (error) {
    await rm2(temporary, { force: true });
    throw error;
  }
}
async function downloadDerivative2(photo, outputDir, fetcher, reviewById) {
  const original = originalUri(photo);
  if (!original) throw new Error(`Tagged photo ${String(photo.id)} has no original image`);
  const response = await fetcher(original);
  if (!response.ok) throw new Error(`Job photo download failed (${response.status})`);
  const input = Buffer.from(await response.arrayBuffer());
  const sourceHash = createHash2("sha256").update(input).digest("hex");
  const review = reviewById.get(String(photo.id));
  const cropBottom = review && review.sha256 === sourceHash && review.cropBottom >= 0 && review.cropBottom < 1 ? review.cropBottom : DEFAULT_BOTTOM_CROP;
  const oriented = await sharp2(input).rotate().toBuffer();
  const metadata = await sharp2(oriented).metadata();
  if (!metadata.width || !metadata.height) {
    throw new Error(`Tagged photo ${String(photo.id)} has no usable dimensions`);
  }
  const height = Math.max(1, Math.floor(metadata.height * (1 - cropBottom)));
  const webp = await sharp2(oriented).extract({ left: 0, top: 0, width: metadata.width, height }).resize({ width: 800, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
  const filenameId = String(photo.id).replace(/[^a-zA-Z0-9_-]/g, "-");
  const filename = `tagged-${filenameId}-${createHash2("sha256").update(webp).digest("hex").slice(0, 12)}.webp`;
  const target = path3.join(outputDir, filename);
  if (!await fileExists(target)) {
    const temporary = `${target}.staging-${process.pid}`;
    await writeFile3(temporary, webp);
    await rename3(temporary, target);
  }
  return `/images/projects/${filename}`;
}
async function fetchProject(photo, token, fetcher) {
  if (photo.project) return photo.project;
  const projectId = photo.project_id ?? photo.projectId;
  if (projectId === void 0 || projectId === null) return void 0;
  const response = await companyCamFetch2(
    `${API}/projects/${encodeURIComponent(String(projectId))}`,
    token,
    fetcher
  );
  if (response.status === 404) return void 0;
  if (!response.ok) throw new Error(`CompanyCam project lookup returned ${response.status}`);
  return await response.json();
}
async function syncTaggedJobPhotos(options = {}) {
  const token = options.token ?? process.env.COMPANYCAM_API_TOKEN;
  if (!token) throw new Error("COMPANYCAM_API_TOKEN is required to sync tagged job photos");
  const fetcher = options.fetcher ?? globalThis.fetch;
  if (typeof fetcher !== "function") throw new Error("fetch is required to sync tagged job photos");
  const projectRoot = path3.resolve(options.projectRoot ?? process.cwd());
  const sourcePublicRoot = path3.join(projectRoot, "client/public");
  const publishedLayout = !await directoryExists(sourcePublicRoot) && (await directoryExists(path3.join(projectRoot, "data")) || await directoryExists(path3.join(projectRoot, "images")));
  const publicRoot = publishedLayout ? projectRoot : sourcePublicRoot;
  const outputDir = path3.join(publicRoot, "images/projects");
  const snapshotPath = path3.join(publicRoot, "data/job-photos.json");
  const manifestPath = publishedLayout ? void 0 : path3.join(projectRoot, "shared/city-project-photos.ts");
  const cachePath = path3.join(projectRoot, ".cache/tagged-job-photos.json");
  await mkdir3(outputDir, { recursive: true });
  const hadSnapshot = await fileExists(snapshotPath);
  const tags = await list("tags", token, fetcher);
  const tagById = new Map(tags.map((tag) => [String(tag.id), tag]));
  const matchingTags = tags.map((tag) => ({ tag, publicTag: publicTagForCompanyTag(tag) })).filter((item) => Boolean(item.publicTag));
  const byId = /* @__PURE__ */ new Map();
  const servicePhotoIds = /* @__PURE__ */ new Set();
  const publicTagsById = /* @__PURE__ */ new Map();
  for (const { tag, publicTag } of matchingTags) {
    const photos = await list(
      `photos?tag_ids[]=${encodeURIComponent(String(tag.id))}`,
      token,
      fetcher
    );
    for (const photo of photos) {
      if (photo.id === void 0 || photo.id === null) continue;
      const id = String(photo.id);
      if (!id.trim()) continue;
      byId.set(id, { ...byId.get(id), ...photo });
      if (normalizeGalleryTag(publicTag)) servicePhotoIds.add(id);
      const photoTags = publicTagsById.get(id) ?? /* @__PURE__ */ new Set();
      photoTags.add(publicTag);
      for (const embeddedTag of embeddedPublicTags(photo, tagById)) photoTags.add(embeddedTag);
      publicTagsById.set(id, photoTags);
    }
  }
  const cachePayload = await readJson(cachePath, []);
  const cache = Array.isArray(cachePayload) ? cachePayload.filter((item) => isRecord2(item) && typeof item.id === "string" && typeof item.sourceKey === "string" && typeof item.asset === "string") : [];
  const cacheById = new Map(cache.map((item) => [item.id, item]));
  const reviewById = new Map(JOB_PHOTO_REVIEWS.map((review) => [review.id, review]));
  const publicPhotos = [];
  const nextCache = [];
  const previousPayload = await readJson(snapshotPath, []);
  const previousById = /* @__PURE__ */ new Map();
  if (Array.isArray(previousPayload)) {
    for (const item of previousPayload) {
      if (isRecord2(item) && typeof item.id === "string") previousById.set(item.id, item);
    }
  }
  for (const [id, photo] of byId) {
    if (!servicePhotoIds.has(id)) continue;
    const tagsForPhoto = [...publicTagsById.get(id) ?? []].filter((tag) => Boolean(normalizeGalleryTag(tag) ?? normalizeGalleryCity(tag))).sort((a, b) => a.localeCompare(b));
    if (tagsForPhoto.length === 0) continue;
    const cityTags = [...publicTagsById.get(id) ?? []].map(normalizeGalleryCity).filter((city2) => Boolean(city2));
    const uniqueCityTags = [...new Set(cityTags)];
    const embeddedProjectCity = resolveProjectCity(photo.project);
    const project = !embeddedProjectCity && uniqueCityTags.length === 0 ? await fetchProject(photo, token, fetcher) : void 0;
    const actualProjectCity = embeddedProjectCity ?? resolveProjectCity(project);
    const city = actualProjectCity ?? (uniqueCityTags.length === 1 ? uniqueCityTags[0] : BAY_AREA2);
    const key = sourceKey(photo);
    const cached = cacheById.get(id);
    const cachedAsset = cached && key && cached.sourceKey === key ? safeAssetPath(cached.asset) : void 0;
    let asset = cachedAsset && await fileExists(path3.join(publicRoot, cachedAsset)) ? cachedAsset : void 0;
    if (!asset) {
      asset = await downloadDerivative2(photo, outputDir, fetcher, reviewById);
    }
    const publicPhotoValue = publicPhoto(photo, asset, tagsForPhoto, city);
    if (!publicPhotoValue) continue;
    publicPhotos.push(publicPhotoValue);
    if (key) nextCache.push({ id, sourceKey: key, asset });
  }
  publicPhotos.sort((a, b) => b.createdAt - a.createdAt || a.id.localeCompare(b.id));
  nextCache.sort((a, b) => a.id.localeCompare(b.id));
  const result2 = {};
  for (const photo of publicPhotos) {
    const slug = photo.city === BAY_AREA2 ? void 0 : citySlug2(photo.city);
    if (!slug) continue;
    (result2[slug] ??= []).push(cityPhoto(photo));
  }
  const nextSnapshot = JSON.stringify(publicPhotos);
  await atomicWrite(snapshotPath, nextSnapshot);
  if (manifestPath) await atomicWrite(manifestPath, generatedCitySource(result2));
  await atomicWrite(cachePath, JSON.stringify(nextCache));
  const nextById = new Map(publicPhotos.map((photo) => [photo.id, photo]));
  const added = [...nextById.keys()].filter((id) => !previousById.has(id)).length;
  const removed = [...previousById.keys()].filter((id) => !nextById.has(id)).length;
  const updated = [...nextById.keys()].filter((id) => {
    const previous = previousById.get(id);
    return previous !== void 0 && JSON.stringify(previous) !== JSON.stringify(nextById.get(id));
  }).length;
  const unchanged = publicPhotos.length - added - updated;
  return {
    changed: !hadSnapshot || added > 0 || updated > 0 || removed > 0,
    count: publicPhotos.length,
    added,
    updated,
    removed,
    unchanged,
    cityProjectPhotos: result2
  };
}
async function backfillTaggedJobPhotoMetadata(options = {}) {
  const projectRoot = path3.resolve(options.projectRoot ?? process.cwd());
  const snapshotPath = path3.resolve(
    options.snapshotPath ?? path3.join(projectRoot, "client/public/data/job-photos.json")
  );
  const manifestPath = path3.resolve(
    options.manifestPath ?? path3.join(projectRoot, "shared/city-project-photos.ts")
  );
  const payload = JSON.parse(await readFile3(snapshotPath, "utf8"));
  const photos = parseTaggedJobPhotos(payload);
  const result2 = {};
  for (const photo of photos) {
    const slug = photo.city === BAY_AREA2 ? void 0 : citySlug2(photo.city);
    if (slug) (result2[slug] ??= []).push(cityPhoto(photo));
  }
  const snapshotChanged = await atomicWrite(snapshotPath, JSON.stringify(photos));
  const manifestChanged = await atomicWrite(manifestPath, generatedCitySource(result2));
  return { changed: snapshotChanged || manifestChanged, count: photos.length };
}
async function generateCityJobPhotos(options = {}) {
  if (!Object.prototype.hasOwnProperty.call(options, "reviews")) {
    const synced = await syncTaggedJobPhotos(options);
    return synced.cityProjectPhotos;
  }
  return generateReviewedCompatibility(options);
}
async function generateReviewedCompatibility(options) {
  const token = options.token ?? process.env.COMPANYCAM_API_TOKEN;
  if (!token) throw new Error("COMPANYCAM_API_TOKEN is required to verify job-photo tags before building");
  const fetcher = options.fetcher ?? globalThis.fetch;
  const reviews = options.reviews ?? [];
  const reviewById = new Map(reviews.map((review) => [review.id, review]));
  const tags = await list("tags", token, fetcher);
  const eligible = /* @__PURE__ */ new Map();
  for (const tag of tags) {
    const taggedPhotos = await list(
      `photos?tag_ids[]=${encodeURIComponent(String(tag.id))}`,
      token,
      fetcher
    );
    for (const photo of taggedPhotos) {
      if (reviewById.has(String(photo.id))) eligible.set(String(photo.id), photo);
    }
  }
  const outputDir = path3.resolve(options.outputDir ?? "client/public/images/projects");
  const manifestPath = path3.resolve(options.manifestPath ?? "shared/city-project-photos.ts");
  const snapshotPath = path3.resolve(options.snapshotPath ?? (options.outputDir ? path3.join(path3.dirname(outputDir), "job-photos.json") : "client/public/data/job-photos.json"));
  const stagingDir = `${outputDir}.staging`;
  await rm2(stagingDir, { recursive: true, force: true });
  await mkdir3(stagingDir, { recursive: true });
  const photos = [];
  const snapshot = [];
  for (const review of reviews) {
    const photo = eligible.get(review.id);
    if (!photo) continue;
    const original = originalUri(photo);
    if (!original) continue;
    const response = await fetcher(original);
    if (!response.ok) throw new Error(`Job photo download failed (${response.status})`);
    const input = Buffer.from(await response.arrayBuffer());
    if (createHash2("sha256").update(input).digest("hex") !== review.sha256) {
      console.warn(`  Excluding changed photo ${review.id}: visual review no longer applies`);
      continue;
    }
    const oriented = await sharp2(input).rotate().toBuffer();
    const metadata = await sharp2(oriented).metadata();
    if (!metadata.width || !metadata.height || review.cropBottom < 0 || review.cropBottom >= 1) {
      throw new Error("Invalid reviewed photo crop");
    }
    const webp = await sharp2(oriented).extract({
      left: 0,
      top: 0,
      width: metadata.width,
      height: Math.floor(metadata.height * (1 - review.cropBottom))
    }).resize({ width: 800, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
    const filename = `tagged-${review.id}-${createHash2("sha256").update(webp).digest("hex").slice(0, 12)}.webp`;
    await writeFile3(path3.join(stagingDir, filename), webp);
    const src = `/images/projects/${filename}`;
    const photoSeo = getCompanyCamPhotoSeo({ city: BAY_AREA2 });
    const alt = photoSeo.alt;
    const caption = photoSeo.caption;
    photos.push({
      src,
      alt,
      caption,
      title: photoSeo.title,
      description: photoSeo.description,
      photoSeo
    });
    snapshot.push({
      id: review.id,
      thumbnail: src,
      fullSize: src,
      createdAt: epochSeconds(photo.created_at) ?? 0,
      description: photoSeo.description,
      photoSeo,
      city: BAY_AREA2,
      state: "CA",
      isVideo: false,
      videoUrl: "",
      coordinates: null
    });
  }
  const result2 = {};
  if (photos.length) {
    for (const slug of options.citySlugs ?? Object.keys(cityZips)) result2[slug] = photos;
  }
  const source = generatedCitySource(result2);
  await mkdir3(path3.dirname(snapshotPath), { recursive: true });
  await writeFile3(`${manifestPath}.staging`, source);
  await writeFile3(`${snapshotPath}.staging`, JSON.stringify(snapshot));
  await rm2(outputDir, { recursive: true, force: true });
  await rename3(stagingDir, outputDir);
  await rename3(`${manifestPath}.staging`, manifestPath);
  await rename3(`${snapshotPath}.staging`, snapshotPath);
  return result2;
}
async function runCli() {
  if (process.argv.includes("--metadata-only")) {
    const result2 = await backfillTaggedJobPhotoMetadata();
    console.log(`Backfilled metadata for ${result2.count} saved gallery photos${result2.changed ? "" : " (no changes)"}.`);
    return;
  }
  await syncTaggedJobPhotos({ token: process.env.COMPANYCAM_API_TOKEN });
}
var API, PAGE_SIZE2, BAY_AREA2, DEFAULT_BOTTOM_CROP;
var init_generate_city_job_photos = __esm({
  "script/generate-city-job-photos.ts"() {
    "use strict";
    init_city_zips();
    init_job_photo_reviews();
    init_tagged_job_photos();
    init_companycam_photo_seo();
    API = "https://api.companycam.com/v2";
    PAGE_SIZE2 = 100;
    BAY_AREA2 = "Bay Area";
    DEFAULT_BOTTOM_CROP = 0.18;
    if (process.argv[1] && path3.basename(process.argv[1]) === "generate-city-job-photos.ts" && path3.resolve(process.argv[1]) === fileURLToPath2(import.meta.url)) {
      runCli().catch((error) => {
        console.error(error instanceof Error ? error.message : error);
        process.exitCode = 1;
      });
    }
  }
});

// script/refresh-companycam-content.ts
import { stat as stat3 } from "node:fs/promises";
import path4 from "node:path";
import { fileURLToPath as fileURLToPath3 } from "node:url";

// script/refresh-field-notes-published.ts
init_city_zips();
import { copyFile, mkdir, readFile, rename, stat, writeFile } from "node:fs/promises";
import path from "node:path";

// shared/field-notes.ts
function fieldNoteTimestamp(value) {
  if (typeof value === "number") {
    if (!Number.isFinite(value) || value <= 0) return void 0;
    return value < 1e11 ? value * 1e3 : value;
  }
  if (typeof value !== "string") return void 0;
  const clean = value.trim();
  if (!clean) return void 0;
  const numeric = Number(clean);
  if (Number.isFinite(numeric) && numeric > 0) {
    return numeric < 1e11 ? numeric * 1e3 : numeric;
  }
  const parsed = Date.parse(clean);
  return Number.isFinite(parsed) ? parsed : void 0;
}
function compareText(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}
function sortFieldNotesNewestFirst(posts) {
  return [...posts].sort((left, right) => {
    const leftCreated = fieldNoteTimestamp(left.createdAt);
    const rightCreated = fieldNoteTimestamp(right.createdAt);
    const leftUpdated = fieldNoteTimestamp(left.updatedAt) ?? leftCreated;
    const rightUpdated = fieldNoteTimestamp(right.updatedAt) ?? rightCreated;
    const effectiveDifference = (rightUpdated ?? Number.NEGATIVE_INFINITY) - (leftUpdated ?? Number.NEGATIVE_INFINITY);
    if (effectiveDifference) return effectiveDifference;
    const createdDifference = (rightCreated ?? Number.NEGATIVE_INFINITY) - (leftCreated ?? Number.NEGATIVE_INFINITY);
    if (createdDifference) return createdDifference;
    return compareText(left.id, right.id) || compareText(left.slug, right.slug);
  });
}
function getFieldNoteTitle(description) {
  const firstLine = description.split(/[\n.!?]/)[0].trim();
  const title = firstLine.length > 8 && firstLine.length <= 80 ? firstLine : description.split(/\s+/).slice(0, 8).join(" ");
  return title || "Field Note";
}
function getFieldNoteExcerpt(description, maxLength = 160) {
  const clean = description.replace(/\n+/g, " ").trim();
  return clean.length <= maxLength ? clean : `${clean.slice(0, Math.max(0, maxLength - 3))}...`;
}
function toFieldNoteSummary(post) {
  const { description: _description, ...summary } = post;
  return summary;
}

// server/field-notes-renderer.ts
init_companycam_photo_seo();

// shared/field-notes-schema.ts
init_companycam_photo_seo();

// shared/public-site-config.ts
var PUBLIC_SITE_CONFIG = {
  siteName: "Roof Express",
  siteUrl: "https://roof-ex.com",
  phone: "(650) 666-5554",
  phoneFormatted: "(650) 666-5554",
  supportPhone: "650-666-5541",
  southBayPhone: "650-666-5477",
  email: "sales@roof-ex.com",
  license: "CSLB #1072766",
  address: {
    street: "58 West Portal Ave",
    city: "San Francisco",
    state: "CA",
    zip: "94127",
    full: "58 West Portal Ave, San Francisco, CA 94127"
  },
  paloAltoOffice: {
    street: "3790 El Camino Real",
    city: "Palo Alto",
    state: "CA",
    zip: "94306",
    full: "3790 El Camino Real, Palo Alto, CA 94306"
  },
  officeGeo: {
    sf: { latitude: 37.7399, longitude: -122.4666 },
    paloAlto: { latitude: 37.4142, longitude: -122.1259 }
  },
  hours: {
    weekdays: "8:00 AM \u2013 5:00 PM",
    saturday: "8:00 AM \u2013 5:00 PM",
    sunday: "By Appointment",
    emergency: "24/7",
    display: [
      { day: "Monday", hours: "8:00 AM \u2013 5:00 PM" },
      { day: "Tuesday", hours: "8:00 AM \u2013 5:00 PM" },
      { day: "Wednesday", hours: "8:00 AM \u2013 5:00 PM" },
      { day: "Thursday", hours: "8:00 AM \u2013 5:00 PM" },
      { day: "Friday", hours: "8:00 AM \u2013 5:00 PM" },
      { day: "Saturday", hours: "8:00 AM \u2013 5:00 PM" },
      { day: "Sunday", hours: "By Appointment" }
    ],
    schema: [
      { dayOfWeek: "Monday", opens: "08:00", closes: "17:00" },
      { dayOfWeek: "Tuesday", opens: "08:00", closes: "17:00" },
      { dayOfWeek: "Wednesday", opens: "08:00", closes: "17:00" },
      { dayOfWeek: "Thursday", opens: "08:00", closes: "17:00" },
      { dayOfWeek: "Friday", opens: "08:00", closes: "17:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "17:00" }
    ],
    emergencySchema: {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59"
    }
  },
  social: {
    facebook: "https://www.facebook.com/roof.exp/",
    instagram: "https://www.instagram.com/roof_exp/",
    youtube: "https://www.youtube.com/@Roof-Express",
    tiktok: "https://www.tiktok.com/@roof.express",
    yelp: "https://www.yelp.com/biz/roof-express-san-francisco",
    googleBusinessProfile: "https://www.google.com/maps?cid=13257844389379386946"
  },
  manufacturerProfiles: {
    gaf: "https://www.gaf.com/en-us/roofing-contractors/residential/usa/ca/san-francisco/roof-express-1146713",
    certainteed: "https://www.certainteed.com/profiles/RoofExpress",
    owensCorning: "https://www.owenscorning.com/en-us/roofing/contractors/contractor-profile/243660",
    bbb: "https://www.bbb.org/us/ca/san-francisco/profile/roofing-contractors/roof-express-1116-926196",
    cslb: "https://cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=1072766",
    buildZoom: "https://www.buildzoom.com/contractor/roof-express-california"
  },
  geo: {
    latitude: 37.7397,
    longitude: -122.4714
  },
  serviceArea: "San Francisco Bay Area",
  defaultDescription: "ROOF EXPRESS is a Diamond Certified, GAF Certified Plus, CertainTeed ShingleMaster PRO, and Owens Corning Preferred Contractor serving the Bay Area. Roof repair, replacement, flat roofing, gutters & skylights. CSLB #1072766.",
  defaultImage: "/opengraph.jpg",
  schemaImage: "/images/roof-express-team.webp"
};

// shared/field-notes-business.ts
var FIELD_NOTES_BUSINESS_ID = "https://roof-ex.com/#localbusiness";
var SITE_URL = PUBLIC_SITE_CONFIG.siteUrl;
var PHONE_DIGITS = PUBLIC_SITE_CONFIG.phone.replace(/\D/g, "");
var TEL_PHONE = PHONE_DIGITS.length === 10 ? `+1${PHONE_DIGITS}` : `+${PHONE_DIGITS}`;
var GOOGLE_BUSINESS_PROFILE = PUBLIC_SITE_CONFIG.social.googleBusinessProfile;
var GOOGLE_CID = GOOGLE_BUSINESS_PROFILE.match(/[?&]cid=([^&]+)/)?.[1];
var HAS_MAP = GOOGLE_BUSINESS_PROFILE.replace("/maps?", "/maps/place/?");
var SERVICE_DEFINITIONS = [
  { name: "Roof Replacement", path: "/roof-replacement" },
  { name: "Roof Repair", path: "/roof-repair" },
  { name: "Flat Roofing", path: "/flat" },
  { name: "Gutter Installation", path: "/gutters" },
  { name: "Skylight Installation", path: "/skylights" },
  { name: "Commercial Roofing", path: "/commercial" },
  { name: "Emergency Roof Repair", path: "/emergency" }
];
var SERVICE_NAMES = SERVICE_DEFINITIONS.map((service) => service.name);
function ref(id) {
  return { "@id": id };
}
function openingHours() {
  return [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "17:00"
  }];
}
function contactPoints() {
  return [
    {
      "@type": "ContactPoint",
      telephone: TEL_PHONE,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"]
    },
    {
      "@type": "ContactPoint",
      telephone: TEL_PHONE,
      contactType: "emergency",
      areaServed: "US",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    }
  ];
}
function offerCatalog() {
  return {
    "@type": "OfferCatalog",
    name: "Roofing Services",
    itemListElement: SERVICE_DEFINITIONS.map((service) => ({
      "@type": "Offer",
      url: `${SITE_URL}${service.path}`,
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: `${SITE_URL}${service.path}`
      }
    }))
  };
}
function credentials() {
  return [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Diamond Certified",
      recognizedBy: { "@type": "Organization", name: "American Ratings Corporation" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "GAF Certified Plus",
      recognizedBy: { "@type": "Organization", name: "GAF" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Owens Corning Preferred Contractor",
      recognizedBy: { "@type": "Organization", name: "Owens Corning" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "CertainTeed ShingleMaster PRO",
      recognizedBy: { "@type": "Organization", name: "CertainTeed" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "CSLB License #1072766",
      recognizedBy: { "@type": "Organization", name: "California Contractors State License Board" }
    }
  ];
}
function serviceLocation(location) {
  const city = location?.city.trim();
  const state = location?.state.trim();
  return city && state ? `${city}, ${state}` : void 0;
}
function buildFieldNotesBusinessNode(logoId) {
  return {
    "@type": ["Organization", "RoofingContractor", "LocalBusiness"],
    "@id": FIELD_NOTES_BUSINESS_ID,
    name: "ROOF EXPRESS",
    legalName: PUBLIC_SITE_CONFIG.siteName,
    url: `${SITE_URL}/`,
    telephone: PUBLIC_SITE_CONFIG.phoneFormatted,
    email: PUBLIC_SITE_CONFIG.email,
    description: PUBLIC_SITE_CONFIG.defaultDescription,
    foundingDate: "2017",
    logo: ref(logoId),
    image: ref(logoId),
    address: {
      "@type": "PostalAddress",
      streetAddress: PUBLIC_SITE_CONFIG.address.street,
      addressLocality: PUBLIC_SITE_CONFIG.address.city,
      addressRegion: PUBLIC_SITE_CONFIG.address.state,
      postalCode: PUBLIC_SITE_CONFIG.address.zip,
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: PUBLIC_SITE_CONFIG.officeGeo.sf.latitude,
      longitude: PUBLIC_SITE_CONFIG.officeGeo.sf.longitude
    },
    hasMap: HAS_MAP,
    ...GOOGLE_CID ? {
      additionalProperty: [
        { "@type": "PropertyValue", name: "Google CID", value: GOOGLE_CID }
      ]
    } : {},
    openingHoursSpecification: openingHours(),
    contactPoint: contactPoints(),
    serviceArea: {
      "@type": "Place",
      name: PUBLIC_SITE_CONFIG.serviceArea
    },
    areaServed: [{
      "@type": "Place",
      name: PUBLIC_SITE_CONFIG.serviceArea
    }],
    knowsAbout: SERVICE_NAMES,
    hasOfferCatalog: offerCatalog(),
    sameAs: [
      PUBLIC_SITE_CONFIG.social.facebook,
      PUBLIC_SITE_CONFIG.social.instagram,
      PUBLIC_SITE_CONFIG.social.youtube,
      PUBLIC_SITE_CONFIG.social.tiktok,
      PUBLIC_SITE_CONFIG.social.yelp,
      PUBLIC_SITE_CONFIG.social.googleBusinessProfile,
      PUBLIC_SITE_CONFIG.manufacturerProfiles.gaf,
      PUBLIC_SITE_CONFIG.manufacturerProfiles.certainteed,
      PUBLIC_SITE_CONFIG.manufacturerProfiles.owensCorning,
      PUBLIC_SITE_CONFIG.manufacturerProfiles.bbb,
      PUBLIC_SITE_CONFIG.manufacturerProfiles.cslb,
      PUBLIC_SITE_CONFIG.manufacturerProfiles.buildZoom
    ],
    hasCredential: credentials(),
    potentialAction: [
      {
        "@type": "CommunicateAction",
        name: "Call ROOF EXPRESS",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `tel:${TEL_PHONE}`,
          actionPlatform: "http://schema.org/TelephoneAction"
        }
      },
      {
        "@type": "ReserveAction",
        name: "Free Roofing Estimate",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/contact`,
          actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
        }
      }
    ]
  };
}
function buildFieldNotesServiceNode(canonical, location) {
  const locationName = serviceLocation(location);
  const areaName = locationName || PUBLIC_SITE_CONFIG.serviceArea;
  return {
    "@type": "Service",
    "@id": `${canonical}#roofing-service`,
    serviceType: "Roofing",
    name: `Roofing Services in ${areaName} \u2014 ROOF EXPRESS`,
    url: canonical,
    provider: ref(FIELD_NOTES_BUSINESS_ID),
    areaServed: {
      "@type": locationName ? "Place" : "AdministrativeArea",
      name: areaName
    },
    description: `Roofing services from ROOF EXPRESS for ${areaName}.`,
    hasOfferCatalog: offerCatalog()
  };
}

// shared/field-notes-faq.ts
var FIELD_NOTES_FAQS = [
  {
    question: "What are field notes in roofing?",
    answer: "Field notes are saved observations and documentation from roofing projects. ROOF EXPRESS publishes project photos and notes about materials, techniques, conditions, and outcomes to help Bay Area homeowners understand the work."
  },
  {
    question: "How often are new field notes published?",
    answer: "New field notes appear after project material has been reviewed and published. The website keeps local copies of the published notes and photos; it does not automatically publish every CompanyCam upload."
  },
  {
    question: "Can I find field notes for my specific city?",
    answer: "Use the city filter to find available published notes from your area. We serve 64 Bay Area cities, but the archive includes only locations with published project notes."
  },
  {
    question: "What topics do field notes cover?",
    answer: "Field notes cover a wide range of roofing topics including residential and commercial roof repairs, full replacements, flat roofing systems (TPO, modified bitumen), gutter installation, skylight work, emergency repairs, and city-specific permit requirements."
  },
  {
    question: "Are field notes written by actual roofers?",
    answer: "Field notes are published under the ROOF EXPRESS company byline. The company's current listings include Diamond Certified, GAF Certified Plus, CertainTeed ShingleMaster PRO, and Owens Corning Preferred Contractor. These are company credentials, not claims that each individual author holds a personal certification. Archived notes retain their original wording and dates; confirm current product and warranty terms in your written proposal."
  }
];
var QUESTION_START = /^(?:what|when|where|why|how|who|which|can|could|should|would|will|do|does|did|is|are|was|were|may|might|must|have|has|am)\b/i;
var QUESTION_TOKEN = /(?:what|when|where|why|how|who|which|can|could|should|would|will|do|does|did|is|are|was|were|may|might|must|have|has|am)\b/gi;
function withoutMarkdownPrefix(value) {
  let text = value.trim();
  text = text.replace(/^#{1,6}\s+/, "");
  text = text.replace(/^[-*+]\s+/, "");
  text = text.replace(/^\d+[.)]\s+/, "");
  text = text.replace(/^(?:\*\*|__)\s*/, "");
  text = text.replace(/\s*(?:\*\*|__)\s*$/, "");
  return text.trim();
}
function questionParts(value) {
  let text = withoutMarkdownPrefix(value);
  let explicit = false;
  const label = text.match(/^(?:q|question)\s*:\s*/i);
  if (label) {
    explicit = true;
    text = text.slice(label[0].length).trim();
  }
  const questionEnd = text.indexOf("?");
  if (questionEnd < 0) {
    if (!explicit || !text) return null;
    return { question: text, explicit, remainder: "" };
  }
  const question = text.slice(0, questionEnd + 1).trim();
  if (!question || !explicit && !QUESTION_START.test(question)) return null;
  return {
    question,
    explicit,
    remainder: text.slice(questionEnd + 1).trim()
  };
}
function questionFromLine(value) {
  const direct = questionParts(value);
  if (direct) return direct;
  const text = withoutMarkdownPrefix(value);
  QUESTION_TOKEN.lastIndex = 0;
  let match;
  while (match = QUESTION_TOKEN.exec(text)) {
    const tokenIndex = match.index;
    const previous = tokenIndex > 0 ? text[tokenIndex - 1] : "";
    const token = match[0];
    const attachedCapital = !!previous && /[a-z)]/.test(previous) && /[A-Z]/.test(token[0]);
    if (tokenIndex > 0 && !attachedCapital) continue;
    const suffix = text.slice(tokenIndex);
    const end = suffix.indexOf("?");
    if (end < token.length) continue;
    const candidate = suffix.slice(0, end + 1).trim();
    if (!QUESTION_START.test(candidate)) continue;
    return {
      question: candidate,
      explicit: false,
      remainder: suffix.slice(end + 1).trim()
    };
  }
  return null;
}
function answerLine(value) {
  const text = value.trim();
  return text.replace(/^(?:a|answer)\s*:\s*/i, "").trim();
}
function normalizedHeading(value) {
  return value.trim().replace(/^#{1,6}\s*/, "").replace(/^(?:\*\*|__)\s*/, "").replace(/\s*(?:\*\*|__)\s*$/, "").trim();
}
function faqHeading(value) {
  const text = value.trim();
  const prefix = text.match(/^(?:#{1,6}\s*)?(?:\*\*|__)?\s*(?:frequently asked questions|faqs?)(?=$|\s|[:–—-]|[A-Z])/i);
  if (!prefix) {
    if (!/^(?:#{1,6}\s*)?(?:\*\*|__)?[^?]*\b(?:frequently asked questions|faqs?)\s*(?:\*\*|__)?$/i.test(text)) {
      return null;
    }
    return { inline: "" };
  }
  const remainder = text.slice(prefix[0].length).trim();
  if (!remainder) return { inline: "" };
  const direct = questionFromLine(remainder);
  return { inline: direct?.question ? remainder.slice(remainder.indexOf(direct.question)) : "" };
}
function isQuestionLine(value) {
  return questionFromLine(value) !== null;
}
function isTitleHeading(value) {
  const words = value.match(/[A-Za-z][A-Za-z'-]*/g) ?? [];
  const lowerCaseWords = /* @__PURE__ */ new Set([
    "a",
    "an",
    "and",
    "at",
    "by",
    "for",
    "from",
    "in",
    "of",
    "on",
    "or",
    "the",
    "to",
    "with"
  ]);
  const significant = words.filter((word) => !lowerCaseWords.has(word.toLowerCase()));
  return significant.length >= 2 && significant.every((word) => /^[A-Z]/.test(word)) && !/[.!?]$/.test(value);
}
function isSectionBoundary(value) {
  const text = normalizedHeading(value);
  if (!text) return false;
  if (isQuestionLine(text)) return false;
  if (/^(?:#{1,6}\s+|[-=_]{3,}\s*$)/.test(value.trim())) return true;
  if (/^(?:sources?|references?|citations?|author|about the author|written by|disclaimer)\b\s*:?\s*$/i.test(text)) return true;
  if (/^(?:next steps?|next step|final thoughts?|conclusion|summary|looking for\b|ready to\b|need\b|contact\b|call\b|schedule\b|request\b|get (?:a|your)\b|for more information\b|roof express\b)/i.test(text)) return true;
  if (/[–—]\s+/.test(text) && !/[.!?]$/.test(text)) return true;
  if (isTitleHeading(text)) return true;
  return false;
}
function parseFaqSection(lines) {
  const found = [];
  let currentQuestion = "";
  let currentAnswer = [];
  const finish = () => {
    const answer = currentAnswer.join("\n").trim();
    if (currentQuestion && answer) found.push({ question: currentQuestion, answer });
    currentQuestion = "";
    currentAnswer = [];
  };
  for (const rawLine of lines) {
    if (isSectionBoundary(rawLine)) {
      finish();
      break;
    }
    const parsed = questionFromLine(rawLine);
    if (parsed) {
      finish();
      currentQuestion = parsed.question;
      if (parsed.remainder) {
        const inlineAnswer = /^a(?:nswer)?\s*:/i.test(parsed.remainder) ? answerLine(parsed.remainder) : parsed.explicit && !isQuestionLine(parsed.remainder) ? parsed.remainder : "";
        if (inlineAnswer) currentAnswer.push(inlineAnswer);
      }
      continue;
    }
    if (!currentQuestion) continue;
    currentAnswer.push(answerLine(rawLine));
  }
  finish();
  return found;
}
function extractFieldNoteFaqs(description) {
  if (!description.trim()) return [];
  const lines = description.replace(/\r\n?/g, "\n").split("\n");
  const results = [];
  for (let index = 0; index < lines.length; index += 1) {
    const heading = faqHeading(lines[index]);
    if (!heading) continue;
    const section = [];
    if (heading.inline) section.push(heading.inline);
    for (let next = index + 1; next < lines.length; next += 1) {
      if (faqHeading(lines[next])) break;
      if (isSectionBoundary(lines[next])) {
        section.push(lines[next]);
        break;
      }
      section.push(lines[next]);
    }
    results.push(...parseFaqSection(section));
  }
  const seen = /* @__PURE__ */ new Set();
  return results.filter((item) => {
    const key = `${item.question}
${item.answer}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// shared/field-notes-schema.ts
var SITE_URL2 = "https://roof-ex.com";
var HUB_URL = `${SITE_URL2}/blog/field-notes`;
var ORGANIZATION_ID = FIELD_NOTES_BUSINESS_ID;
var WEBSITE_ID = `${SITE_URL2}/#website`;
var LOGO_ID = `${SITE_URL2}/#logo`;
var BLOG_ID = `${HUB_URL}#blog`;
var HUB_PAGE_ID = `${HUB_URL}#webpage`;
var HUB_BREADCRUMB_ID = `${HUB_URL}#breadcrumb`;
var HUB_IMAGE_ID = `${HUB_URL}#primaryimage`;
var HUB_POSTS_ID = `${HUB_URL}#posts`;
var LOGO_URL = `${SITE_URL2}/images/logo.webp`;
var HERO_URL = `${SITE_URL2}/images/field-notes-hero.webp`;
function ref2(id) {
  return { "@id": id };
}
function organizationNodes() {
  return [
    buildFieldNotesBusinessNode(LOGO_ID),
    {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: LOGO_URL,
      contentUrl: LOGO_URL,
      width: 384,
      height: 107,
      encodingFormat: "image/webp"
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "ROOF EXPRESS",
      url: SITE_URL2,
      publisher: ref2(ORGANIZATION_ID),
      inLanguage: "en-US"
    }
  ];
}
function blogNode() {
  return {
    "@type": "Blog",
    "@id": BLOG_ID,
    name: "Roofing Field Notes",
    url: HUB_URL,
    publisher: ref2(ORGANIZATION_ID),
    isPartOf: ref2(WEBSITE_ID),
    inLanguage: "en-US"
  };
}
function localAssetPath(value) {
  if (typeof value !== "string") return void 0;
  const path5 = value.trim();
  if (!path5 || !path5.startsWith("/") || path5.startsWith("//") || /[\s\\\u0000-\u001f\u007f?#]/.test(path5) || /^(?:https?:|data:|javascript:)/i.test(path5)) {
    return void 0;
  }
  let decoded;
  try {
    decoded = decodeURIComponent(path5);
  } catch {
    return void 0;
  }
  if (decoded.startsWith("//") || decoded.includes("\\") || decoded.split("/").some((segment) => segment === "." || segment === "..") || /^(?:https?:|data:|javascript:)/i.test(decoded)) {
    return void 0;
  }
  return path5;
}
function imageEncoding(path5) {
  const extension = path5.toLowerCase().match(/\.([a-z0-9]+)$/)?.[1];
  switch (extension) {
    case "avif":
      return "image/avif";
    case "gif":
      return "image/gif";
    case "jpeg":
    case "jpg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "webp":
      return "image/webp";
    default:
      return void 0;
  }
}
function isoDate(value) {
  const numeric = typeof value === "number" ? value : typeof value === "string" && /^\d+(?:\.\d+)?$/.test(value.trim()) ? Number(value) : void 0;
  const date = numeric !== void 0 ? new Date(numeric < 1e11 ? numeric * 1e3 : numeric) : new Date(value);
  if (!Number.isFinite(date.getTime())) {
    throw new Error(`Invalid Field Note date: ${String(value)}`);
  }
  return date.toISOString();
}
function validDimension(value) {
  return typeof value === "number" && Number.isInteger(value) && value > 0;
}
function postUrl(slug) {
  return `${HUB_URL}/${encodeURIComponent(slug)}`;
}
function imageForPost(post) {
  const path5 = localAssetPath(post.localImage);
  const encodingFormat = path5 && imageEncoding(path5);
  if (!path5 || !encodingFormat || !validDimension(post.imageWidth) || !validDimension(post.imageHeight)) {
    return void 0;
  }
  const url = `${SITE_URL2}${path5}`;
  const thumbnailPath = localAssetPath(post.thumbnail);
  const photoSeo = getCompanyCamPhotoSeo(post, "field-note");
  return {
    id: `${postUrl(post.slug)}#primaryimage`,
    node: {
      "@type": "ImageObject",
      "@id": `${postUrl(post.slug)}#primaryimage`,
      url,
      contentUrl: url,
      width: post.imageWidth,
      height: post.imageHeight,
      encodingFormat,
      name: photoSeo.title,
      caption: photoSeo.caption,
      description: photoSeo.description
    },
    ...thumbnailPath ? { thumbnailUrl: `${SITE_URL2}${thumbnailPath}` } : {}
  };
}
function contentLocation(post) {
  const city = post.city.trim();
  const state = post.state.trim();
  return city && state ? { "@type": "Place", name: `${city}, ${state}` } : void 0;
}
function wordsIn(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.length;
}
function breadcrumbNode(id, title, canonical) {
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL2 },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL2}/blog` },
      { "@type": "ListItem", position: 3, name: "Field Notes", item: HUB_URL },
      { "@type": "ListItem", position: 4, name: title, item: canonical }
    ]
  };
}
function faqNode(canonical, webpageId, faqs) {
  if (!faqs.length) return void 0;
  return {
    "@type": "FAQPage",
    "@id": `${canonical}#faq`,
    isPartOf: ref2(webpageId),
    inLanguage: "en-US",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  };
}
function buildFieldNoteSchema(post) {
  const canonical = postUrl(post.slug);
  const webpageId = `${canonical}#webpage`;
  const breadcrumbId = `${canonical}#breadcrumb`;
  const articleId = `${canonical}#article`;
  const image = imageForPost(post);
  const published = isoDate(post.createdAt);
  const modified = isoDate(post.updatedAt);
  const wordCount = wordsIn(post.description);
  const location = contentLocation(post);
  const service = buildFieldNotesServiceNode(canonical, { city: post.city, state: post.state });
  const faq = faqNode(canonical, webpageId, extractFieldNoteFaqs(post.description));
  const article = {
    "@type": "BlogPosting",
    "@id": articleId,
    headline: post.title,
    name: post.title,
    description: post.excerpt,
    url: canonical,
    datePublished: published,
    dateModified: modified,
    author: ref2(ORGANIZATION_ID),
    publisher: ref2(ORGANIZATION_ID),
    about: ref2(`${canonical}#roofing-service`),
    mainEntityOfPage: ref2(webpageId),
    isPartOf: ref2(BLOG_ID),
    articleSection: "Field Notes",
    articleBody: post.description,
    wordCount,
    timeRequired: `PT${Math.max(1, Math.ceil(wordCount / 200))}M`,
    isAccessibleForFree: true,
    inLanguage: "en-US",
    ...location ? { contentLocation: location } : {},
    ...image ? { image: ref2(image.id) } : {},
    ...image?.thumbnailUrl ? { thumbnailUrl: image.thumbnailUrl } : {}
  };
  const webpage = {
    "@type": "WebPage",
    "@id": webpageId,
    name: post.title,
    url: canonical,
    mainEntity: ref2(articleId),
    breadcrumb: ref2(breadcrumbId),
    publisher: ref2(ORGANIZATION_ID),
    isPartOf: ref2(WEBSITE_ID),
    about: ref2(`${canonical}#roofing-service`),
    ...faq ? { hasPart: ref2(`${canonical}#faq`) } : {},
    ...image ? { primaryImageOfPage: ref2(image.id) } : {}
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...organizationNodes(),
      blogNode(),
      service,
      webpage,
      breadcrumbNode(breadcrumbId, post.title, canonical),
      ...image ? [image.node] : [],
      article,
      ...faq ? [faq] : []
    ]
  };
}
function buildFieldNotesHubSchema(posts) {
  const service = buildFieldNotesServiceNode(HUB_URL);
  const faq = faqNode(HUB_URL, HUB_PAGE_ID, FIELD_NOTES_FAQS);
  const itemListElements = posts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: post.title,
    item: postUrl(post.slug)
  }));
  const itemList = {
    "@type": "ItemList",
    "@id": HUB_POSTS_ID,
    numberOfItems: posts.length,
    itemListElement: itemListElements
  };
  const webpage = {
    "@type": "CollectionPage",
    "@id": HUB_PAGE_ID,
    name: "Roofing Field Notes",
    description: "Real roofing project notes and practical guides from ROOF EXPRESS crews across the Bay Area.",
    url: HUB_URL,
    mainEntity: ref2(HUB_POSTS_ID),
    breadcrumb: ref2(HUB_BREADCRUMB_ID),
    primaryImageOfPage: ref2(HUB_IMAGE_ID),
    publisher: ref2(ORGANIZATION_ID),
    isPartOf: ref2(WEBSITE_ID),
    about: ref2(`${HUB_URL}#roofing-service`),
    ...faq ? { hasPart: ref2(`${HUB_URL}#faq`) } : {}
  };
  const hero = {
    "@type": "ImageObject",
    "@id": HUB_IMAGE_ID,
    url: HERO_URL,
    contentUrl: HERO_URL,
    width: 1600,
    height: 1073,
    encodingFormat: "image/webp"
  };
  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": HUB_BREADCRUMB_ID,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL2 },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL2}/blog` },
      { "@type": "ListItem", position: 3, name: "Field Notes", item: HUB_URL }
    ]
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...organizationNodes(),
      blogNode(),
      service,
      webpage,
      breadcrumb,
      hero,
      itemList,
      ...faq ? [faq] : []
    ]
  };
}

// server/field-notes-renderer.ts
var SITE_URL3 = "https://roof-ex.com";
var FIELD_NOTES_PATH = "/blog/field-notes";
var CURATED_GUIDES = [
  {
    slug: "field-notes-asphalt-shingles",
    title: "Asphalt Shingles",
    description: "Types, lifespan, pros & cons for Bay Area homes"
  },
  {
    slug: "field-notes-flat-roof-systems",
    title: "Flat Roof Systems",
    description: "TPO, modified bitumen, torch-down explained"
  },
  {
    slug: "field-notes-roof-flashing",
    title: "Roof Flashing",
    description: "The most important leak-prevention detail"
  },
  {
    slug: "field-notes-roof-ventilation",
    title: "Roof Ventilation",
    description: "Why attics overheat and how to fix it"
  },
  {
    slug: "field-notes-roof-permits-bay-area",
    title: "Roofing Permits",
    description: "Bay Area permit guide"
  }
];
var SERVICE_LINKS = [
  ["/residential", "Residential Roofing"],
  ["/commercial", "Commercial Roofing"],
  ["/flat", "Flat Roofing"],
  ["/roof-repair", "Roof Repair"],
  ["/roof-replacement", "Roof Replacement"],
  ["/gutters", "Gutters"],
  ["/skylights", "Skylights"]
];
function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function escapeXml(value) {
  return escapeHtml(value);
}
function safeJson(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
function dateValue(value) {
  if (typeof value === "number" || typeof value === "string" && /^\d+(?:\.\d+)?$/.test(value)) {
    const numeric = Number(value);
    return new Date(numeric < 1e11 ? numeric * 1e3 : numeric);
  }
  return new Date(value);
}
function isoDate2(value) {
  const date = dateValue(value);
  if (Number.isNaN(date.getTime())) throw new Error(`Invalid Field Note date: ${String(value)}`);
  return date.toISOString();
}
function displayDate(value, includeDay = true) {
  return dateValue(value).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: includeDay ? "long" : "short",
    ...includeDay ? { day: "numeric" } : {}
  });
}
function localImagePath(post) {
  const image = post.localImage.trim();
  if (!image || !image.startsWith("/") || image.startsWith("//") || image.split("/").includes("..") || /^https?:/i.test(image) || /companycam/i.test(image)) {
    return "";
  }
  return image;
}
function localThumbnailPath(post) {
  const thumbnail = post.thumbnail.trim();
  if (thumbnail && thumbnail.startsWith("/") && !thumbnail.startsWith("//") && !thumbnail.split("/").includes("..") && !/^https?:/i.test(thumbnail) && !/companycam/i.test(thumbnail)) {
    return thumbnail;
  }
  return localImagePath(post);
}
function imageAbsoluteUrl(post) {
  const local = localImagePath(post);
  return local ? `${SITE_URL3}${local}` : "";
}
function isLikelyHeading(text) {
  if (text.length > 60 || text.length < 4) return false;
  if (text.endsWith(":") || text.endsWith(",") || text.endsWith(";")) return false;
  if (/[()]/.test(text) || text.split(" ").length > 9) return false;
  const words = text.split(" ");
  if (words.filter((word) => /^[A-Z]/.test(word)).length < words.length * 0.4) return false;
  return !/[.!?]$/.test(text);
}
function parseContent(description, title) {
  const blocks = [];
  const sections = description.replace(/\r\n/g, "\n").split(/\n\n+/).filter((section) => section.trim());
  let isLead = true;
  for (const section of sections) {
    const trimmed = section.trim();
    if (trimmed === title) continue;
    const lines = trimmed.split("\n").map((line) => line.trim()).filter(Boolean);
    const bulletLines = lines.filter((line) => /^[-•*]\s/.test(line));
    const numberedLines = lines.filter((line) => /^\d+[.)]\s/.test(line));
    const plainLines = lines.filter((line) => !/^[-•*]\s/.test(line) && !/^\d+[.)]\s/.test(line));
    if (bulletLines.length >= 2 && bulletLines.length === lines.length) {
      blocks.push({ type: "bullets", items: bulletLines.map((line) => line.replace(/^[-•*]\s+/, "")) });
      continue;
    }
    if (numberedLines.length >= 2 && numberedLines.length === lines.length) {
      blocks.push({ type: "numbered", items: numberedLines.map((line) => line.replace(/^\d+[.)]\s+/, "")) });
      continue;
    }
    if (bulletLines.length >= 2 || numberedLines.length >= 2) {
      for (const line of plainLines) {
        if (isLikelyHeading(line)) blocks.push({ type: "heading", text: line });
        else {
          blocks.push({ type: "paragraph", text: line, isLead });
          isLead = false;
        }
      }
      if (bulletLines.length >= 2) {
        blocks.push({ type: "bullets", items: bulletLines.map((line) => line.replace(/^[-•*]\s+/, "")) });
      } else {
        blocks.push({ type: "numbered", items: numberedLines.map((line) => line.replace(/^\d+[.)]\s+/, "")) });
      }
      continue;
    }
    if (lines.length >= 3 && plainLines.length === lines.length) {
      const averageLength = lines.reduce((sum, line) => sum + line.length, 0) / lines.length;
      if (lines.every((line) => line.length < 100) && averageLength < 70) {
        blocks.push({ type: "bullets", items: lines });
        continue;
      }
    }
    const joined = lines.join(" ");
    if (lines.length === 1 && isLikelyHeading(joined)) {
      blocks.push({ type: "heading", text: joined });
    } else {
      blocks.push({ type: "paragraph", text: joined, isLead });
      isLead = false;
    }
  }
  return blocks;
}
function splitLongParagraph(text) {
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g);
  if (!sentences || sentences.length <= 3) return [text];
  const chunks = [];
  for (let index = 0; index < sentences.length; index += 3) {
    chunks.push(sentences.slice(index, index + 3).join("").trim());
  }
  const consumed = sentences.join("").length;
  const remainder = text.slice(consumed).trim();
  if (remainder) chunks.push(`${chunks.pop() || ""} ${remainder}`.trim());
  return chunks.filter(Boolean);
}
function renderContent(blocks) {
  return blocks.map((block, index) => {
    if (block.type === "heading") {
      return `<h2 id="section-${index}" class="text-lg md:text-xl font-bold text-brandNavy mt-6 mb-1 leading-snug scroll-mt-24">${escapeHtml(block.text)}</h2>`;
    }
    if (block.type === "bullets") {
      return `<ul class="space-y-1.5 pl-1">${block.items.map(
        (item) => `<li class="flex gap-2.5 text-slate-600 text-[15px] md:text-base leading-relaxed"><span class="text-brandOrange/60 mt-[7px] shrink-0 text-[6px]">\u25CF</span><span>${escapeHtml(item)}</span></li>`
      ).join("")}</ul>`;
    }
    if (block.type === "numbered") {
      return `<ol class="space-y-1.5 pl-1">${block.items.map(
        (item, itemIndex) => `<li class="flex gap-2.5 text-slate-600 text-[15px] md:text-base leading-relaxed"><span class="w-5 h-5 rounded-full bg-brandNavy/5 text-brandNavy text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">${itemIndex + 1}</span><span>${escapeHtml(item)}</span></li>`
      ).join("")}</ol>`;
    }
    return splitLongParagraph(block.text).map((part, partIndex) => {
      if (block.isLead && partIndex === 0) {
        const words = part.split(" ");
        return `<p class="text-slate-600 text-[15px] md:text-base leading-[1.75]"><span class="font-semibold text-brandNavy">${escapeHtml(words.slice(0, 3).join(" "))}</span>${words.length > 3 ? ` ${escapeHtml(words.slice(3).join(" "))}` : ""}</p>`;
      }
      return `<p class="text-slate-600 text-[15px] md:text-base leading-[1.75]">${escapeHtml(part)}</p>`;
    }).join("\n");
  }).join("\n");
}
function titleFor(post) {
  return post.title?.trim() || getFieldNoteTitle(post.description);
}
function excerptFor(post) {
  return post.excerpt?.trim() || getFieldNoteExcerpt(post.description);
}
function summaryFor(post) {
  const publicPost = {
    ...post,
    thumbnail: localThumbnailPath(post),
    fullSize: localImagePath(post)
  };
  return toFieldNoteSummary(publicPost);
}
function summariesFor(posts) {
  return sortFieldNotesNewestFirst(posts).map(summaryFor);
}
function publicPostForBootstrap(post) {
  return {
    ...post,
    thumbnail: localThumbnailPath(post),
    fullSize: localImagePath(post)
  };
}
function bootstrapTag(value) {
  return `<script id="field-notes-bootstrap" type="application/json">${safeJson(value)}</script>`;
}
function stripFieldNotesSeoStub(html) {
  return html.replace(/<div[^>]+id=["'](?:ssr-content|seo-stub|field-notes-seo-stub)["'][\s\S]*?<\/div>\s*/gi, "").replace(/<h1\b[^>]*>[\s\S]*?<\/h1>\s*/gi, "").replace(/<script[^>]+id=["']field-notes-bootstrap["'][\s\S]*?<\/script>\s*/gi, "");
}
function replaceOrInsert(html, pattern, replacement, anchor = "</head>") {
  return pattern.test(html) ? html.replace(pattern, replacement) : html.replace(anchor, `${replacement}
${anchor}`);
}
function replaceMeta(html, selector, content) {
  const escaped = escapeHtml(content);
  const replacement = `<meta ${selector} content="${escaped}" />`;
  const pattern = new RegExp(`<meta\\s+${selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s+content="[^"]*"\\s*/?>`, "i");
  return replaceOrInsert(html, pattern, replacement);
}
function setFieldNoteHead(html, title, description, canonical, image, type) {
  let result2 = stripFieldNotesSeoStub(html);
  result2 = result2.replace(/<script\b[^>]*\btype\s*=\s*["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi, "");
  result2 = result2.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  result2 = replaceMeta(result2, `name="description"`, description);
  result2 = replaceMeta(result2, `property="og:title"`, title);
  result2 = replaceMeta(result2, `property="og:description"`, description);
  result2 = replaceMeta(result2, `property="og:url"`, canonical);
  result2 = replaceMeta(result2, `property="og:type"`, type);
  result2 = replaceMeta(result2, `property="og:image"`, image || `${SITE_URL3}/opengraph.jpg`);
  result2 = replaceMeta(result2, `name="twitter:title"`, title);
  result2 = replaceMeta(result2, `name="twitter:description"`, description);
  result2 = replaceMeta(result2, `name="twitter:image"`, image || `${SITE_URL3}/opengraph.jpg`);
  result2 = result2.replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "");
  result2 = result2.replace("</head>", `<link rel="canonical" href="${escapeHtml(canonical)}" />
</head>`);
  return result2;
}
function relatedPostsFor(post, allPosts) {
  const others = sortFieldNotesNewestFirst(
    allPosts.filter((candidate) => candidate.slug !== post.slug && candidate.id !== post.id)
  );
  const sameCity = others.filter((candidate) => candidate.city === post.city);
  const nearby = others.filter((candidate) => Math.abs(dateValue(candidate.createdAt).getTime() - dateValue(post.createdAt).getTime()) < 90 * 864e5 && candidate.city !== post.city);
  const rest = others.filter((candidate) => !sameCity.includes(candidate) && !nearby.includes(candidate));
  return [...sameCity, ...nearby, ...rest].slice(0, 6);
}
function renderRelated(post, allPosts) {
  const related = relatedPostsFor(post, allPosts);
  if (!related.length) return "";
  return `<section class="mt-12 pt-8 border-t border-slate-100">
    <h2 class="text-lg font-bold text-brandNavy mb-4">More Field Notes</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">${related.slice(0, 3).map((candidate) => {
    const image = localThumbnailPath(candidate);
    const photoSeo = getCompanyCamPhotoSeo(candidate, "field-note");
    return `<a href="${FIELD_NOTES_PATH}/${encodeURIComponent(candidate.slug)}" class="group block bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition">
        ${image ? `<div class="aspect-[16/10] overflow-hidden"><img src="${escapeHtml(image)}" alt="${escapeHtml(photoSeo.alt)}" title="${escapeHtml(photoSeo.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" width="${candidate.imageWidth}" height="${candidate.imageHeight}" /></div>` : ""}
        <div class="p-4"><p class="text-xs text-slate-400 mb-1">${escapeHtml(candidate.city)} \xB7 ${escapeHtml(displayDate(candidate.createdAt, false))}</p><h3 class="text-sm font-bold text-brandNavy line-clamp-2 group-hover:text-brandOrange transition">${escapeHtml(titleFor(candidate))}</h3></div>
      </a>`;
  }).join("")}</div>
    ${related.length > 3 ? `<div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">${related.slice(3).map(
    (candidate) => `<a href="${FIELD_NOTES_PATH}/${encodeURIComponent(candidate.slug)}" class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition"><span class="text-xs text-slate-400 shrink-0">${escapeHtml(candidate.city)}</span><span class="text-sm font-medium text-brandNavy truncate">${escapeHtml(titleFor(candidate))}</span></a>`
  ).join("")}</div>` : ""}
  </section>`;
}
function renderFieldNoteHtml(baseHtml, post, allPosts) {
  const title = titleFor(post);
  const excerpt = excerptFor(post);
  const canonical = `${SITE_URL3}${FIELD_NOTES_PATH}/${encodeURIComponent(post.slug)}`;
  const image = imageAbsoluteUrl(post);
  const published = isoDate2(post.createdAt);
  const modified = isoDate2(post.updatedAt);
  const blocks = parseContent(post.description, title);
  const photoSeo = getCompanyCamPhotoSeo(post, "field-note");
  const headings = blocks.map((block, index) => block.type === "heading" ? { id: `section-${index}`, text: block.text } : null).filter((heading) => heading !== null);
  const toc = headings.length >= 2 ? `<nav class="bg-slate-50 rounded-xl border border-slate-100 mb-8 overflow-hidden" aria-label="Table of contents"><div class="p-5"><h2 class="text-xs font-black text-brandNavy uppercase tracking-widest m-0">In This Note <span class="text-[10px] font-bold text-slate-400 normal-case tracking-normal">(${headings.length} sections)</span></h2></div><ol class="space-y-1.5 px-5 pb-5">${headings.map((heading, index) => `<li><a href="#${heading.id}" class="flex items-center gap-2.5 text-sm text-slate-600 hover:text-brandOrange transition leading-snug"><span class="w-5 h-5 rounded-md bg-brandNavy/5 text-brandNavy text-[10px] font-bold flex items-center justify-center shrink-0">${index + 1}</span><span>${escapeHtml(heading.text)}</span></a></li>`).join("")}</ol></nav>` : "";
  const imageHtml = image ? `<figure class="mb-8"><div class="relative rounded-2xl overflow-hidden shadow-lg"><img src="${escapeHtml(image)}" alt="${escapeHtml(photoSeo.alt)}" title="${escapeHtml(photoSeo.title)}" class="w-full aspect-[16/10] object-cover" width="${post.imageWidth}" height="${post.imageHeight}" loading="eager" fetchpriority="high" decoding="async" /></div><figcaption class="mt-3 text-sm text-slate-600"><details class="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"><summary class="cursor-pointer font-bold text-brandNavy">${escapeHtml(photoSeo.caption)}</summary><p class="mt-2 leading-relaxed">${escapeHtml(photoSeo.description)}</p></details></figcaption></figure>` : "";
  const articleHtml = `<div id="field-note-prerendered" data-post-id="${escapeHtml(post.id)}"><article class="max-w-4xl mx-auto px-4 py-8">
    <nav class="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb"><a href="/" class="hover:text-brandOrange transition">Home</a><span aria-hidden="true">/</span><a href="/blog" class="hover:text-brandOrange transition">Blog</a><span aria-hidden="true">/</span><a href="${FIELD_NOTES_PATH}" class="hover:text-brandOrange transition">Field Notes</a><span aria-hidden="true">/</span><span class="text-brandNavy font-medium" aria-current="page">${escapeHtml(title)}</span></nav>
    <header class="mb-8"><h1 class="text-2xl md:text-3xl lg:text-4xl font-black text-brandNavy leading-tight mb-4">${escapeHtml(title)}</h1><div class="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-4"><span class="inline-flex items-center gap-1.5 bg-brandNavy/5 text-brandNavy px-3 py-1 rounded-full text-xs font-bold">${escapeHtml(post.city)}, ${escapeHtml(post.state)}</span><time datetime="${published}">${escapeHtml(displayDate(post.createdAt))}</time><span aria-hidden="true">\xB7</span><span>${Math.max(1, Math.ceil(post.description.split(/\s+/).filter(Boolean).length / 200))} min read</span></div></header>
    ${imageHtml}
    ${toc}
    <div class="prose prose-slate max-w-none space-y-4">${renderContent(blocks)}</div>
    <aside class="mt-10 bg-gradient-to-br from-brandNavy to-brandNavy/90 rounded-2xl p-6 md:p-8 text-white text-center"><h2 class="text-xl md:text-2xl font-black mb-2">Need Roofing Help in ${escapeHtml(post.city)}?</h2><p class="text-white/80 text-sm md:text-base mb-4">Get a clear estimate from ROOF EXPRESS.</p><div class="flex flex-col sm:flex-row gap-3 justify-center"><a href="/contact" class="inline-flex items-center justify-center gap-2 bg-brandOrange text-white font-bold px-6 py-3 rounded-xl transition text-sm">Get a Free Estimate</a><a href="tel:+16506665554" class="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-6 py-3 rounded-xl transition text-sm">(650) 666-5554</a></div></aside>
    <nav class="mt-8 bg-slate-50 rounded-xl p-5 border border-slate-100" aria-label="Related services"><h2 class="text-xs font-black text-brandNavy uppercase tracking-widest mb-3">Explore Our Services</h2><div class="flex flex-wrap gap-2">${SERVICE_LINKS.map(([href, label]) => `<a href="${href}" class="text-xs bg-white border border-slate-200 text-brandNavy px-3 py-1.5 rounded-lg hover:border-brandOrange hover:text-brandOrange transition font-medium">${label}</a>`).join("")}</div></nav>
    ${renderRelated(post, allPosts)}
    <div class="mt-12 text-center"><a href="${FIELD_NOTES_PATH}" class="inline-flex items-center gap-2 text-sm font-bold text-brandOrange hover:underline">\u2190 Back to all Field Notes</a></div>
  </article></div>`;
  let html = setFieldNoteHead(baseHtml, `${title} | ROOF EXPRESS`, excerpt, canonical, image, "article");
  html = html.replace("</head>", `<script id="field-notes-schema" type="application/ld+json">${safeJson(buildFieldNoteSchema(post))}</script>
</head>`);
  html = html.replace(/<div id="root">/, `<div id="root">${articleHtml}${bootstrapTag({ post: publicPostForBootstrap(post), posts: summariesFor(allPosts) })}`);
  html = replaceMeta(html, `property="article:published_time"`, published);
  html = replaceMeta(html, `property="article:modified_time"`, modified);
  return html;
}
function summaryCard(post, featured = false) {
  const image = localThumbnailPath(post);
  const title = titleFor(post);
  const photoSeo = getCompanyCamPhotoSeo(post, "field-note");
  return `<a href="${FIELD_NOTES_PATH}/${encodeURIComponent(post.slug)}" class="group block" data-field-note-slug="${escapeHtml(post.slug)}"><article class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex ${featured ? "lg:flex-row" : "flex-col"}">
    ${image ? `<div class="${featured ? "lg:w-3/5 aspect-[4/3]" : "aspect-[5/4]"} relative overflow-hidden"><img src="${escapeHtml(image)}" alt="${escapeHtml(photoSeo.alt)}" title="${escapeHtml(photoSeo.title)}" class="w-full h-full object-cover" loading="${featured ? "eager" : "lazy"}" ${featured ? 'fetchpriority="high"' : ""} width="${post.imageWidth}" height="${post.imageHeight}" /></div>` : ""}
    <div class="${featured ? "lg:w-2/5 p-8" : "p-4"} flex flex-col"><p class="text-brandOrange text-[10px] font-black uppercase tracking-widest mb-3">${escapeHtml(post.city)} \xB7 ${escapeHtml(displayDate(post.createdAt, false))}</p><h${featured ? "2" : "3"} class="${featured ? "text-2xl lg:text-3xl" : "text-sm"} font-black text-brandNavy leading-tight group-hover:text-brandOrange transition">${escapeHtml(title)}</h${featured ? "2" : "3"}><p class="text-slate-500 text-sm leading-relaxed mt-3 ${featured ? "" : "line-clamp-2"}">${escapeHtml(excerptFor(post))}</p></div>
  </article></a>`;
}
function renderFieldNotesHubHtml(baseHtml, posts) {
  const orderedPosts = sortFieldNotesNewestFirst(posts);
  const summaries = summariesFor(orderedPosts);
  const canonical = `${SITE_URL3}${FIELD_NOTES_PATH}`;
  const staticPosts = orderedPosts.length ? `<section class="py-20 bg-slate-50 px-6"><div class="container mx-auto max-w-screen-xl"><div class="mb-10"><p class="text-brandOrange text-[10px] font-black uppercase tracking-widest mb-3">Live from the Field</p><h2 class="text-3xl md:text-4xl font-black text-brandNavy">Recent Field Notes</h2><p class="text-slate-500 text-[15px] mt-2">${orderedPosts.length} archived posts</p></div><div class="mb-10">${summaryCard(orderedPosts[0], true)}</div><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">${orderedPosts.slice(1).map((post) => summaryCard(post)).join("")}</div></div></section>` : `<section class="py-20 bg-slate-50 px-6"><div class="container mx-auto max-w-screen-xl"><h2 class="text-3xl font-black text-brandNavy">Field Notes</h2><p class="text-slate-500 mt-3">Archived field notes will appear here.</p></div></section>`;
  const curated = `<section class="py-20 bg-white px-6"><div class="container mx-auto max-w-screen-xl"><div class="text-center mb-12"><p class="text-brandOrange text-[10px] font-black uppercase tracking-widest mb-3">In-Depth Guides</p><h2 class="text-3xl md:text-4xl font-black text-brandNavy">Expert Guides</h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${CURATED_GUIDES.map((guide) => `<a href="/blog/${guide.slug}" class="group bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition"><h3 class="text-xl font-black text-brandNavy mb-2 group-hover:text-brandOrange transition">${guide.title}</h3><p class="text-sm text-slate-500">${guide.description}</p><span class="inline-flex mt-5 text-xs font-black text-brandOrange uppercase tracking-widest">Read Article \u2192</span></a>`).join("")}</div></div></section>`;
  const hero = `<section class="relative overflow-hidden bg-brandNavy min-h-[85vh] text-white py-28 lg:py-40 px-4 flex items-center"><div class="absolute inset-0"><img src="/images/field-notes-hero.webp" alt="ROOF EXPRESS roofer overlooking the Bay Area from a rooftop" class="w-full h-full object-cover" loading="eager" fetchpriority="high" decoding="async" width="1200" height="800" /></div><div class="absolute inset-0 bg-gradient-to-b from-brandNavy/40 via-brandNavy/50 to-brandNavy/80"></div><div class="container mx-auto max-w-screen-xl relative z-10 px-4 md:px-6"><div class="max-w-2xl"><div class="flex items-center gap-3 mb-4 flex-wrap"><a href="/blog" class="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full">\u2190 <span class="ml-2 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Blog</span></a><span class="inline-flex items-center bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brandOrangeLight">Field Notes</span></div><h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-[1] tracking-tight">Field Notes \u2014 <span class="text-brandOrangeLight">From the Roof (2026)</span></h1><p class="text-sm md:text-base text-white/80 max-w-lg mb-6 leading-relaxed">A practical roofing knowledge base for homeowners. Plain-English guides to the materials, systems, and codes that protect your Bay Area home.</p><div class="flex flex-wrap items-center gap-3"><a href="https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=website" target="_blank" rel="noreferrer noopener" class="bg-brandOrange text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest border border-white/20">Get a Free Quote</a><a href="tel:6506665554" class="bg-white/10 backdrop-blur text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest border border-white/20">Call 650-666-5554</a></div></div></div></section>`;
  let html = setFieldNoteHead(baseHtml, "Roofing Field Notes | ROOF EXPRESS", "Real roofing project notes and practical guides from ROOF EXPRESS crews across the Bay Area.", canonical, "", "website");
  html = html.replace("</head>", `<script id="field-notes-schema" type="application/ld+json">${safeJson(buildFieldNotesHubSchema(summaries))}</script>
</head>`);
  const categories = `<section class="py-16 bg-slate-50 px-6"><div class="container mx-auto max-w-screen-xl"><div class="text-center mb-10"><p class="text-brandOrange text-[10px] font-black uppercase tracking-widest mb-3">Explore More</p><h2 class="text-2xl font-black text-brandNavy tracking-tight">Related Categories</h2></div><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">${["Roof Repair", "Roof Replacement", "Flat Roofing", "Materials", "Permits & Codes", "Pricing"].map((name) => `<a href="/blog/?category=${encodeURIComponent(name).replace(/%20/g, "+")}" class="group bg-white rounded-2xl p-5 text-center border border-slate-100 hover:shadow-lg transition"><h3 class="text-sm font-black text-brandNavy uppercase mb-1">${name}</h3><p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Bay Area roofing resources</p></a>`).join("")}</div></div></section>`;
  const faq = `<section class="py-16 bg-white px-6"><div class="container mx-auto max-w-3xl"><div class="text-center mb-10"><p class="text-brandOrange text-[10px] font-black uppercase tracking-widest mb-3">Common Questions</p><h2 class="text-2xl md:text-3xl font-black text-brandNavy tracking-tight">Frequently Asked Questions</h2></div><div class="space-y-3">${FIELD_NOTES_FAQS.map(({ question, answer }) => `<details class="group bg-slate-50 rounded-xl border border-slate-100 overflow-hidden"><summary class="p-5 cursor-pointer text-sm md:text-base font-bold text-brandNavy">${escapeHtml(question)}</summary><div class="px-5 pb-5"><p class="text-slate-600 text-sm leading-relaxed">${escapeHtml(answer)}</p></div></details>`).join("")}</div></div></section>`;
  html = html.replace(/<div id="root">/, `<div id="root">${hero}${staticPosts}${curated}${categories}${faq}${bootstrapTag({ posts: summaries })}`);
  return html;
}
function imageMime(image) {
  const clean = image.split("?")[0].toLowerCase();
  if (clean.endsWith(".webp")) return "image/webp";
  if (clean.endsWith(".png")) return "image/png";
  if (clean.endsWith(".avif")) return "image/avif";
  if (clean.endsWith(".gif")) return "image/gif";
  return "image/jpeg";
}
function generateFieldNotesFeed(posts) {
  const orderedPosts = sortFieldNotesNewestFirst(posts);
  const validUpdatedTimes = posts.map((post) => dateValue(post.updatedAt).getTime()).filter(Number.isFinite);
  const stableLastBuild = validUpdatedTimes.length ? Math.max(...validUpdatedTimes) : 0;
  const items = orderedPosts.slice(0, 50).map((post) => {
    const image = localImagePath(post);
    const link = `${SITE_URL3}${FIELD_NOTES_PATH}/${encodeURIComponent(post.slug)}`;
    const enclosure = image ? `
      <enclosure url="${escapeXml(`${SITE_URL3}${image}`)}" type="${imageMime(image)}" length="${Math.max(0, Math.trunc(post.imageBytes))}" />` : "";
    return `    <item>
      <title>${escapeXml(titleFor(post))}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${escapeXml(dateValue(post.createdAt).toUTCString())}</pubDate>
      <description>${escapeXml(excerptFor(post))}</description>
      <category>Field Notes</category>
      <category>${escapeXml(post.city)}</category>${enclosure}
    </item>`;
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ROOF EXPRESS Field Notes</title>
    <link>${SITE_URL3}${FIELD_NOTES_PATH}</link>
    <description>Real roofing project notes and practical guides from ROOF EXPRESS.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(stableLastBuild).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL3}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;
}
function validateFieldNoteArchive(value) {
  if (!value || typeof value !== "object") throw new Error("Field Notes archive must be an object");
  const archive = value;
  if (archive.version !== 1 || typeof archive.generatedAt !== "string" || !Array.isArray(archive.posts) || !archive.posts.length) {
    throw new Error("Field Notes archive must have version 1, generatedAt, and posts");
  }
  const ids = /* @__PURE__ */ new Set();
  const slugs = /* @__PURE__ */ new Set();
  for (const [index, postValue] of archive.posts.entries()) {
    if (!postValue || typeof postValue !== "object") throw new Error(`Field Notes archive post ${index} is not an object`);
    const post = postValue;
    for (const field of ["id", "slug", "city", "state", "thumbnail", "fullSize", "description", "localImage", "title", "excerpt", "contentHash"]) {
      if (typeof post[field] !== "string") throw new Error(`Field Notes archive post ${index} is missing string field ${field}`);
    }
    for (const field of ["createdAt", "updatedAt"]) {
      if (typeof post[field] !== "number" && typeof post[field] !== "string" || Number.isNaN(dateValue(post[field]).getTime())) {
        throw new Error(`Field Notes archive post ${index} has invalid ${field}`);
      }
    }
    for (const field of ["imageWidth", "imageHeight", "imageBytes"]) {
      const minimum = field === "imageBytes" ? 0 : 1;
      if (typeof post[field] !== "number" || !Number.isFinite(post[field]) || post[field] < minimum) {
        throw new Error(`Field Notes archive post ${index} has invalid ${field}`);
      }
    }
    if (post.photoSeo !== void 0) {
      if (!post.photoSeo || typeof post.photoSeo !== "object") {
        throw new Error(`Field Notes archive post ${index} has invalid photoSeo`);
      }
      for (const field of ["alt", "title", "caption", "description"]) {
        if (typeof post.photoSeo[field] !== "string" || !post.photoSeo[field].trim()) {
          throw new Error(`Field Notes archive post ${index} has invalid photoSeo.${field}`);
        }
      }
    }
    const localImage = localImagePath(post);
    if (!localImage) throw new Error(`Field Notes archive post ${index} must have a localImage path`);
    const { id, slug } = post;
    if (typeof id !== "string" || !id || typeof slug !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      throw new Error(`Field Notes archive post ${index} has an unsafe id or slug`);
    }
    if (ids.has(id) || slugs.has(slug)) throw new Error(`Field Notes archive has duplicate id or slug at post ${index}`);
    ids.add(id);
    slugs.add(slug);
  }
  return archive;
}

// script/refresh-field-notes-published.ts
init_companycam_photo_seo();
init_tagged_job_photos();
var SITE_URL4 = "https://roof-ex.com";
async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}
async function writeIfChanged(filePath, contents) {
  try {
    if (await readFile(filePath, "utf8") === contents) return false;
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  await mkdir(path.dirname(filePath), { recursive: true });
  const staged = `${filePath}.field-notes-${process.pid}.tmp`;
  await writeFile(staged, contents);
  await rename(staged, filePath);
  return true;
}
function citySlug(city) {
  const expected = city.trim().toLowerCase();
  return Object.keys(cityZips).find(
    (slug) => slug.split("-").map((word) => `${word[0]?.toUpperCase() ?? ""}${word.slice(1)}`).join(" ").toLowerCase() === expected
  );
}
function dateValue2(value) {
  if (typeof value === "number" || /^\d+(?:\.\d+)?$/.test(String(value))) {
    const number = Number(value);
    return new Date(number < 1e11 ? number * 1e3 : number);
  }
  return new Date(value);
}
function cityProjects(posts) {
  const result2 = {};
  for (const post of posts) {
    const slug = citySlug(post.city);
    if (!slug) continue;
    const entries = result2[slug] ?? (result2[slug] = []);
    if (entries.length >= 6) continue;
    const firstSentence = post.description.search(/[\n.!?]/);
    const remainder = firstSentence > 0 ? post.description.slice(firstSentence + 1).trim() : post.description;
    entries.push({
      slug: post.slug,
      title: (post.title || getFieldNoteTitle(post.description)).replace(/[\s|·—–-]+$/g, "").trim(),
      dateLabel: dateValue2(post.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "America/Los_Angeles" }),
      date: dateValue2(post.createdAt).toISOString().slice(0, 10),
      excerpt: post.excerpt || getFieldNoteExcerpt(remainder.length > 40 ? remainder : post.description, 180),
      img: post.localImage,
      city: post.city
    });
  }
  return result2;
}
function xmlEscape(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function htmlEscape(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var SERVICE_GALLERY_ROUTES = {
  "residential": "Asphalt Shingle Roofing",
  "commercial": "Commercial Systems",
  "flat": "Flat Roof",
  "roof-repair": "Roof Repair",
  "roof-replacement": "Roof Replacement",
  "gutters": "Gutters",
  "skylights": "Skylights",
  "emergency": "Emergency"
};
var CITY_SERVICE_GALLERY_TAGS = {
  "roof-repair": "Roof Repair",
  "roof-replacement": "Roof Replacement",
  "residential-roofing": "Asphalt Shingle Roofing",
  "commercial-roofing": "Commercial Systems",
  "gutters": "Gutters",
  "flat-roof": "Flat Roof",
  "skylight-installation": "Skylights",
  "asphalt-shingle": "Asphalt Shingle Roofing"
};
function galleryFigure(photo) {
  const seo = photo.photoSeo ?? getCompanyCamPhotoSeo(photo);
  const details = seo.description && seo.description !== seo.caption ? `<details><summary>Photo details</summary><p>${htmlEscape(seo.description)}</p></details>` : "";
  return `<figure><img src="${htmlEscape(photo.src)}" alt="${htmlEscape(seo.alt)}" title="${htmlEscape(seo.title)}" loading="lazy" width="800" /><figcaption>${htmlEscape(seo.caption)}</figcaption>${details}</figure>`;
}
function representativeGalleryMarkup(photos, filter, limit) {
  const filtered = filterTaggedJobPhotos(photos.map((photo, index) => ({
    id: photo.id ?? String(index),
    thumbnail: photo.src,
    fullSize: photo.src,
    createdAt: 0,
    tags: [...photo.tags ?? []],
    city: photo.city ?? "Bay Area",
    description: photo.alt
  })), filter).slice(0, limit);
  const paths = new Set(filtered.map((photo) => photo.thumbnail));
  const figures = photos.filter((photo) => paths.has(photo.src)).slice(0, limit).map(galleryFigure).join("");
  return figures ? `<!-- companycam-gallery:start --><section aria-label="ROOF EXPRESS project photos"><h2>Recent Roofing Project Photos</h2><p>Tagged CompanyCam photos from ROOF EXPRESS projects across the Bay Area.</p>${figures}</section><!-- companycam-gallery:end -->` : "";
}
function reconcileRepresentativeGallery(current, replacement) {
  const bounded = /<!-- companycam-gallery:start -->[\s\S]*?<!-- companycam-gallery:end -->/;
  if (bounded.test(current)) return current.replace(bounded, replacement);
  if (!replacement) return current;
  return current.replace(/(<\/div>\s*<script[^>]*type="module")/, `${replacement}$1`);
}
function cityProjectsMarkup(city, entries) {
  return `<h2>Recent ROOF EXPRESS Roofing Projects in ${htmlEscape(city)}</h2><p>Real, documented jobs our crews completed in ${htmlEscape(city)} \u2014 each links to a full write-up with photos, the project date, and what we found on the roof:</p><ul>${entries.slice(0, 5).map((entry) => `<li><a href="/blog/field-notes/${encodeURIComponent(entry.slug)}">${htmlEscape(entry.title)}</a> (${htmlEscape(entry.dateLabel)}) \u2014 ${htmlEscape(entry.excerpt)}</li>`).join("")}</ul><p>Browse all <a href="/blog/field-notes">Field Notes from our crew</a> for more documented projects across the Bay Area.</p>`;
}
function fieldNoteSitemapEntries(posts) {
  const latest = posts.reduce(
    (current, post) => Math.max(current, dateValue2(post.updatedAt).getTime()),
    0
  );
  const hub = `  <url>
    <loc>${SITE_URL4}/blog/field-notes</loc>
    <lastmod>${new Date(latest).toISOString().slice(0, 10)}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.6</priority>
  </url>`;
  return [hub, ...posts.map((post) => {
    const photoSeo = getCompanyCamPhotoSeo(post, "field-note");
    const image = post.localImage ? `
    <image:image>
      <image:loc>${xmlEscape(`${SITE_URL4}${post.localImage}`)}</image:loc>
      <image:title>${xmlEscape(photoSeo.title)}</image:title>
      <image:caption>${xmlEscape(photoSeo.caption)}</image:caption>
    </image:image>` : "";
    return `  <url>
    <loc>${SITE_URL4}/blog/field-notes/${encodeURIComponent(post.slug)}</loc>
    <lastmod>${dateValue2(post.updatedAt).toISOString().slice(0, 10)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>${image}
  </url>`;
  })].join("\n");
}
async function refreshSitemap(staticRoot, posts) {
  const sitemapPath = path.join(staticRoot, "sitemap.xml");
  const current = await readFile(sitemapPath, "utf8");
  const withoutFieldNotes = current.replace(
    /\s*<url>\s*<loc>https:\/\/roof-ex\.com\/blog\/field-notes(?:\/[^<]*)?<\/loc>[\s\S]*?<\/url>/g,
    ""
  ).replace(/\s*<\/urlset>\s*$/, "</urlset>");
  if (!withoutFieldNotes.includes("</urlset>")) throw new Error("Published sitemap.xml is invalid");
  return writeIfChanged(
    sitemapPath,
    withoutFieldNotes.replace("</urlset>", `
${fieldNoteSitemapEntries(posts)}
</urlset>`)
  );
}
async function refreshPublishedFieldNotes(options) {
  const archive = validateFieldNoteArchive(options.archive);
  if (!archive.posts.length) throw new Error("Refusing to replace published artifacts with an empty Field Notes archive");
  const root = path.resolve(options.projectRoot);
  const staticRoot = options.sourceMode ? path.join(root, "dist-cloudflare") : root;
  const basePath = path.join(staticRoot, "index.html");
  if (!await exists(basePath)) {
    throw new Error(`Published static site was not found at ${staticRoot}; Field Notes archive remains unchanged`);
  }
  const baseHtml = await readFile(basePath, "utf8");
  const posts = sortFieldNotesNewestFirst(archive.posts);
  const orderedArchive = { ...archive, posts };
  let written = 0;
  const write = async (filePath, contents) => {
    if (await writeIfChanged(filePath, contents)) written += 1;
  };
  await write(path.join(staticRoot, "data", "field-notes.json"), `${JSON.stringify(orderedArchive, null, 2)}
`);
  await write(path.join(staticRoot, "data", "field-notes", "index.json"), `${JSON.stringify({
    version: 1,
    posts: posts.map(toFieldNoteSummary)
  }, null, 2)}
`);
  for (const post of posts) {
    const detailPath = path.join(staticRoot, "data", "field-notes", `${post.slug}.json`);
    await write(detailPath, `${JSON.stringify(post, null, 2)}
`);
  }
  await write(path.join(staticRoot, "blog", "field-notes.html"), renderFieldNotesHubHtml(baseHtml, posts));
  if (options.sourceMode) {
    for (const post of posts) {
      for (const image of [post.localImage, post.thumbnail]) {
        const relative = image.replace(/^\//, "");
        const destination = path.join(staticRoot, relative);
        const source = path.join(root, "client", "public", relative);
        const sourceBytes = await readFile(source);
        let destinationBytes;
        try {
          destinationBytes = await readFile(destination);
        } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
        if (destinationBytes?.equals(sourceBytes)) continue;
        await mkdir(path.dirname(destination), { recursive: true });
        const staged = `${destination}.field-notes-${process.pid}.tmp`;
        await writeFile(staged, sourceBytes);
        await rename(staged, destination);
        written += 1;
      }
    }
  }
  for (const post of posts) {
    const articlePath = path.join(staticRoot, "blog", "field-notes", `${post.slug}.html`);
    await write(articlePath, renderFieldNoteHtml(baseHtml, post, posts));
  }
  await write(path.join(staticRoot, "feed.xml"), generateFieldNotesFeed(posts));
  if (await refreshSitemap(staticRoot, posts)) written += 1;
  const projectsJson = `${JSON.stringify(cityProjects(posts), null, 2)}
`;
  await write(path.join(staticRoot, "data", "city-projects.json"), projectsJson);
  for (const [slug, entries] of Object.entries(cityProjects(posts))) {
    const cityPage = path.join(staticRoot, `${slug}.html`);
    if (!await exists(cityPage)) continue;
    const current = await readFile(cityPage, "utf8");
    const city = entries[0]?.city;
    if (!city) continue;
    const next = current.replace(
      /<h2>Recent ROOF EXPRESS Roofing Projects in [^<]+<\/h2>[\s\S]*?<p>Browse all <a href="\/blog\/field-notes">Field Notes from our crew<\/a> for more documented projects across the Bay Area\.<\/p>/,
      cityProjectsMarkup(city, entries)
    );
    await write(cityPage, next);
  }
  if (options.sourceMode) {
    await write(path.join(root, "client", "public", "data", "city-projects.json"), projectsJson);
  }
  return { written };
}
async function refreshPublishedGallerySsr(options) {
  const root = path.resolve(options.projectRoot);
  const staticRoot = options.sourceMode ? path.join(root, "dist-cloudflare") : root;
  if (!await exists(path.join(staticRoot, "index.html"))) {
    throw new Error(`Published static site was not found at ${staticRoot}; gallery snapshot remains unchanged`);
  }
  let written = 0;
  for (const slug of Object.keys(cityZips)) {
    const photos = options.cityProjectPhotos[slug] ?? [];
    const pagePath = path.join(staticRoot, `${slug}.html`);
    if (!await exists(pagePath)) continue;
    const figures = photos.map(galleryFigure).join("");
    const replacement = photos.length ? `<!-- companycam-city-gallery:start --><h2>Real Roofing Job Photos</h2><p>Tagged CompanyCam photos from ROOF EXPRESS projects across the Bay Area.</p>${figures}<!-- companycam-city-gallery:end -->` : "";
    const current = await readFile(pagePath, "utf8");
    const boundedGallery = /<!-- companycam-city-gallery:start -->[\s\S]*?<!-- companycam-city-gallery:end -->/;
    const legacyGallery = /<h2>Real Roofing Job Photos<\/h2><p>Tagged CompanyCam photos from ROOF EXPRESS projects across the Bay Area\.<\/p>(?:<figure>[\s\S]*?<\/figure>)*/;
    const next = boundedGallery.test(current) ? current.replace(boundedGallery, replacement) : legacyGallery.test(current) ? current.replace(legacyGallery, replacement) : photos.length ? current.replace(/<h2>Roofing Services Available in /, `${replacement}<h2>Roofing Services Available in `) : current;
    if (next !== current && await writeIfChanged(pagePath, next)) written += 1;
  }
  const snapshotPath = options.sourceMode ? path.join(root, "client", "public", "data", "job-photos.json") : path.join(staticRoot, "data", "job-photos.json");
  let galleryPhotos = [];
  try {
    const raw = JSON.parse(await readFile(snapshotPath, "utf8"));
    const parsed = parseTaggedJobPhotos(raw);
    galleryPhotos = parsed.map((photo) => {
      return {
        id: photo.id,
        src: photo.thumbnail,
        alt: photo.photoSeo?.alt ?? photo.description ?? "ROOF EXPRESS roofing work documented with CompanyCam",
        caption: photo.photoSeo?.caption ?? "Tagged roofing project photo \u2014 ROOF EXPRESS",
        city: photo.city,
        tags: photo.tags,
        title: photo.photoSeo?.title,
        photoSeo: photo.photoSeo
      };
    });
  } catch {
  }
  const representativeRoutes = [
    { file: "gallery.html", limit: 12 },
    ...Object.entries(SERVICE_GALLERY_ROUTES).map(([file, tag]) => ({ file: `${file}.html`, tag, limit: 6 }))
  ];
  for (const slug of Object.keys(cityZips)) {
    const city = slug.split("-").map((word) => `${word[0]?.toUpperCase() ?? ""}${word.slice(1)}`).join(" ");
    for (const [service, tag] of Object.entries(CITY_SERVICE_GALLERY_TAGS)) {
      representativeRoutes.push({ file: path.join(slug, `${service}.html`), city, tag, limit: 6 });
    }
  }
  for (const route of representativeRoutes) {
    const pagePath = path.join(staticRoot, route.file);
    if (!await exists(pagePath)) continue;
    const current = await readFile(pagePath, "utf8");
    const replacement = representativeGalleryMarkup(galleryPhotos, { city: route.city, tag: route.tag }, route.limit);
    const next = reconcileRepresentativeGallery(current, replacement);
    if (next !== current && await writeIfChanged(pagePath, next)) written += 1;
  }
  if (options.sourceMode) {
    const assets = new Set(Object.values(options.cityProjectPhotos).flat().map((photo) => photo.src));
    for (const asset of assets) {
      if (!/^\/images\/projects\/[^/]+\.webp$/.test(asset)) continue;
      const target = path.join(staticRoot, asset.slice(1));
      if (!await exists(target)) {
        await mkdir(path.dirname(target), { recursive: true });
        await copyFile(path.join(root, "client", "public", asset.slice(1)), target);
        written += 1;
      }
    }
    const sourceSnapshot = path.join(root, "client", "public", "data", "job-photos.json");
    if (!await exists(sourceSnapshot)) {
      throw new Error("Source gallery refresh did not create client/public/data/job-photos.json");
    }
    if (await writeIfChanged(
      path.join(staticRoot, "data", "job-photos.json"),
      await readFile(sourceSnapshot, "utf8")
    )) written += 1;
  }
  return { written };
}

// script/sync-field-notes.ts
import { createHash } from "node:crypto";
import {
  mkdir as mkdir2,
  readFile as readFile2,
  readdir,
  rename as rename2,
  rm,
  writeFile as writeFile2
} from "node:fs/promises";
import path2 from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// shared/slug.ts
function titleToSlug(description) {
  const firstLine = description.split(/[\n.!?]/)[0].trim();
  const title = firstLine.length > 8 && firstLine.length <= 80 ? firstLine : description.split(/\s+/).slice(0, 8).join(" ");
  return title.toLowerCase().replace(/['']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}

// script/sync-field-notes.ts
init_companycam_photo_seo();
var API_ROOT = "https://api.companycam.com/v2";
var PAGE_SIZE = 100;
var DEFAULT_CONCURRENCY = 6;
function contentHash(description) {
  return createHash("sha256").update(description, "utf8").digest("hex");
}
function asString(value, label) {
  if (typeof value !== "string" || !value) throw new Error(`CompanyCam response missing ${label}`);
  return value;
}
function asDateValue(value, label) {
  if (typeof value !== "number" && typeof value !== "string") {
    throw new Error(`CompanyCam response missing ${label}`);
  }
  return value;
}
function getPageItems(payload, resource) {
  if (Array.isArray(payload)) return { items: payload };
  if (!payload || typeof payload !== "object") {
    throw new Error(`CompanyCam ${resource} response was not a list`);
  }
  const record = payload;
  for (const key of ["data", "results", "items", "photos", "tags"]) {
    if (Array.isArray(record[key])) {
      const pagination = record.pagination;
      const pageInfo = typeof pagination === "object" && pagination !== null ? pagination : typeof record.meta === "object" && record.meta !== null ? record.meta : record;
      const currentPage = Number(pageInfo?.current_page ?? pageInfo?.currentPage ?? pageInfo?.page);
      const totalPages = Number(pageInfo?.total_pages ?? pageInfo?.totalPages);
      const hasNext = pageInfo && (pageInfo.has_next !== void 0 || pageInfo.hasNext !== void 0 || pageInfo.has_more !== void 0 || pageInfo.hasMore !== void 0 || pageInfo.next !== void 0 || pageInfo.next_page !== void 0 || pageInfo.nextPage !== void 0 || Number.isFinite(totalPages)) ? Boolean(pageInfo.has_next ?? pageInfo.hasNext ?? pageInfo.has_more ?? pageInfo.hasMore ?? pageInfo.next ?? pageInfo.next_page ?? pageInfo.nextPage ?? (Number.isFinite(totalPages) && Number.isFinite(currentPage) && currentPage < totalPages)) : void 0;
      return { items: record[key], hasNext };
    }
  }
  throw new Error(`CompanyCam ${resource} response did not contain a list`);
}
async function companyCamFetch(url, token, fetcher) {
  for (let attempt = 0; attempt < 6; attempt += 1) {
    const response = await fetcher(url, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (response.status !== 429) return response;
    const retryAfter = Number(response.headers.get("retry-after"));
    const delay = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1e3 : Math.min(1e3 * 2 ** attempt, 16e3);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  throw new Error("CompanyCam rate limit did not clear after retries");
}
async function listCompanyCamPages(resource, token, fetcher) {
  const result2 = [];
  for (let page = 1; ; page += 1) {
    const separator = resource.includes("?") ? "&" : "?";
    const url = `${API_ROOT}/${resource}${separator}per_page=${PAGE_SIZE}&page=${page}`;
    const response = await companyCamFetch(url, token, fetcher);
    if (!response.ok) throw new Error(`CompanyCam ${resource} fetch failed (${response.status})`);
    let payload;
    try {
      payload = await response.json();
    } catch {
      throw new Error(`CompanyCam ${resource} returned invalid JSON`);
    }
    const pageResult = getPageItems(payload, resource);
    result2.push(...pageResult.items);
    if (pageResult.hasNext === false || pageResult.hasNext === void 0 && pageResult.items.length < PAGE_SIZE) {
      return result2;
    }
    if (pageResult.items.length === 0) return result2;
  }
}
function getPlainTextDescription(photo) {
  if (typeof photo.description === "string") return photo.description.trim() ? photo.description : void 0;
  if (photo.description && typeof photo.description === "object") {
    const plain = photo.description.plain_text_content ?? photo.description.plain_text;
    if (typeof plain === "string") return plain.trim() ? plain : void 0;
  }
  return void 0;
}
function getSourceImageUrl(photo) {
  const uris = photo.uris ?? [];
  const source = uris.find((uri) => uri.type === "original" && typeof uri.uri === "string") ?? uris.find((uri) => uri.type === "web" && typeof uri.uri === "string") ?? uris.find((uri) => typeof uri.uri === "string");
  return asString(source?.uri, `image URI for photo ${String(photo.id)}`);
}
async function mapWithConcurrency(values, concurrency, callback) {
  const output = new Array(values.length);
  let cursor = 0;
  const workers = Array.from(
    { length: Math.max(1, Math.min(concurrency, values.length || 1)) },
    async () => {
      while (true) {
        const index = cursor++;
        if (index >= values.length) return;
        output[index] = await callback(values[index]);
      }
    }
  );
  await Promise.all(workers);
  return output;
}
async function fetchWikiPosts(token, fetcher = fetch, concurrency = DEFAULT_CONCURRENCY) {
  const tags = await listCompanyCamPages("tags", token, fetcher);
  const wikiTags = tags.filter((tag) => (tag.display_value ?? tag.name ?? "").trim().toLowerCase() === "wiki");
  if (wikiTags.length === 0) throw new Error("CompanyCam wiki tag was not found");
  if (wikiTags.length > 1) throw new Error("CompanyCam returned multiple wiki tags");
  const wikiPhotos = await listCompanyCamPages(
    `photos?tag_ids[]=${encodeURIComponent(String(wikiTags[0].id))}`,
    token,
    fetcher
  );
  const publishablePhotos = wikiPhotos.flatMap((photo) => {
    const description = getPlainTextDescription(photo);
    return description === void 0 ? [] : [{ photo, description }];
  });
  const projectIds = [...new Set(publishablePhotos.map(({ photo }) => {
    if (photo.project_id === void 0 || photo.project_id === null) {
      throw new Error(`Wiki photo ${String(photo.id)} has no project`);
    }
    return String(photo.project_id);
  }))];
  const projects = await mapWithConcurrency(projectIds, concurrency, async (projectId) => {
    const response = await companyCamFetch(`${API_ROOT}/projects/${encodeURIComponent(projectId)}`, token, fetcher);
    if (!response.ok) throw new Error(`CompanyCam project ${projectId} fetch failed (${response.status})`);
    let project;
    try {
      project = await response.json();
    } catch {
      throw new Error(`CompanyCam project ${projectId} returned invalid JSON`);
    }
    const city = asString(project.address?.city, `city for project ${projectId}`);
    const state = asString(project.address?.state, `state for project ${projectId}`);
    return [projectId, { city, state }];
  });
  const projectMap = new Map(projects);
  const ids = /* @__PURE__ */ new Set();
  return publishablePhotos.map(({ photo, description }) => {
    const id = asString(String(photo.id), "photo id");
    if (ids.has(id)) throw new Error(`CompanyCam returned duplicate wiki photo ${id}`);
    ids.add(id);
    const project = projectMap.get(String(photo.project_id));
    if (!project) throw new Error(`CompanyCam project ${String(photo.project_id)} was not fetched`);
    const createdAt = asDateValue(photo.created_at, `created_at for photo ${id}`);
    const hasReliableImageVersion = photo.updated_at !== void 0;
    const updatedAt = hasReliableImageVersion ? asDateValue(photo.updated_at, `updated_at for photo ${id}`) : createdAt;
    return {
      id,
      slug: "",
      city: project.city,
      state: project.state,
      createdAt,
      updatedAt,
      hasReliableImageVersion,
      description,
      sourceImageUrl: getSourceImageUrl(photo)
    };
  });
}
function registryEntries(registry) {
  return registry instanceof Map ? [...registry.entries()] : Object.entries(registry);
}
function mergeRegistryInto(idToSlug, slugToId, entries) {
  for (const [rawId, rawSlug] of entries) {
    const id = String(rawId);
    const slug = String(rawSlug).trim();
    if (!id || !slug) continue;
    const previousSlug = idToSlug.get(id);
    const previousId = slugToId.get(slug);
    if (previousSlug && previousSlug !== slug || previousId && previousId !== id) {
      throw new Error(`Ambiguous Field Notes slug registry collision for ${id} / ${slug}`);
    }
    idToSlug.set(id, slug);
    slugToId.set(slug, id);
  }
}
function extractSlugRegistryFromHtml(html) {
  const registry = /* @__PURE__ */ new Map();
  const canonical = html.match(
    /(?:rel=["']canonical["'][^>]*href|href=["'][^"']+["'][^>]*rel=["']canonical["'])=["']?([^"' >]+)/i
  )?.[1] ?? html.match(/https?:\/\/[^"' ]+\/blog\/field-notes\/([^"'?# <]+)/i)?.[1];
  const slug = canonical?.includes("/blog/field-notes/") ? canonical.split("/blog/field-notes/")[1].split(/[/?#]/)[0] : canonical?.replace(/\.html$/, "");
  const image = html.match(/\/images\/field-notes\/([^/"'?# <]+)/i)?.[1];
  const explicitId = html.match(/data-post-id=["']([^"']+)["']/i)?.[1];
  const imageStem = image?.replace(/\.[a-z0-9]+$/i, "");
  const id = explicitId ?? imageStem?.match(/^\d+/)?.[0];
  if (slug && id) registry.set(id, slug.replace(/\.html$/, ""));
  return registry;
}
async function collectCachedSlugRegistry(rootDir) {
  const registry = /* @__PURE__ */ new Map();
  const roots = [
    path2.join(rootDir, "dist-cloudflare", "blog", "field-notes"),
    path2.join(rootDir, "blog", "field-notes")
  ];
  for (const directory of roots) {
    let entries;
    try {
      entries = await readdir(directory, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (!entry.isFile() || !entry.name.endsWith(".html")) continue;
      const filePath = path2.join(directory, entry.name);
      const html = await readFile2(filePath, "utf8");
      const fromHtml = extractSlugRegistryFromHtml(html);
      if (fromHtml.size === 0) continue;
      for (const [id, slug] of fromHtml) {
        if (registry.has(id)) continue;
        if ([...registry.values()].includes(slug)) {
          throw new Error(`Ambiguous Field Notes slug registry collision for ${id} / ${slug}`);
        }
        registry.set(id, slug);
      }
    }
  }
  return registry;
}
function assignStableFieldNoteSlugs(posts, previousPosts = [], seededRegistry = {}) {
  const idToSlug = /* @__PURE__ */ new Map();
  const slugToId = /* @__PURE__ */ new Map();
  mergeRegistryInto(idToSlug, slugToId, registryEntries(seededRegistry));
  mergeRegistryInto(idToSlug, slugToId, previousPosts.map((post) => [post.id, post.slug]));
  mergeRegistryInto(idToSlug, slugToId, posts.filter((post) => post.slug).map((post) => [post.id, post.slug]));
  const used = new Set(slugToId.keys());
  const missing = posts.filter((post) => !idToSlug.has(post.id)).slice().sort((a, b) => a.id.localeCompare(b.id));
  const nextSuffix = /* @__PURE__ */ new Map();
  for (const post of missing) {
    let base = titleToSlug(post.description);
    if (!base || base.length < 3) base = "field-note";
    let candidate = base;
    let suffix = nextSuffix.get(base) ?? 1;
    while (used.has(candidate)) {
      suffix += 1;
      candidate = `${base}-${suffix}`;
    }
    nextSuffix.set(base, suffix);
    used.add(candidate);
    idToSlug.set(post.id, candidate);
    slugToId.set(candidate, post.id);
  }
  return posts.map((post) => ({ ...post, slug: idToSlug.get(post.id) }));
}
async function readExistingManifest(manifestPath) {
  try {
    const source = await readFile2(manifestPath, "utf8");
    const manifest = JSON.parse(source);
    if (manifest.version !== 1 || !Array.isArray(manifest.posts)) {
      throw new Error("Existing Field Notes manifest has an unsupported shape");
    }
    const ids = /* @__PURE__ */ new Set();
    const slugs = /* @__PURE__ */ new Set();
    for (const post of manifest.posts) {
      if (!post || typeof post.id !== "string" || typeof post.slug !== "string") {
        throw new Error("Existing Field Notes manifest contains an invalid post");
      }
      if (ids.has(post.id) || slugs.has(post.slug)) {
        throw new Error("Existing Field Notes manifest contains duplicate IDs or slugs");
      }
      ids.add(post.id);
      slugs.add(post.slug);
    }
    return manifest;
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}
function getPaths(options) {
  const rootDir = path2.resolve(options.rootDir ?? process.cwd());
  const publicDir = path2.resolve(options.publicDir ?? options.outputDir ?? path2.join(rootDir, "client", "public"));
  return {
    rootDir,
    publicDir,
    manifestPath: path2.resolve(options.manifestPath ?? path2.join(publicDir, "data", "field-notes.json")),
    indexPath: path2.resolve(options.indexPath ?? path2.join(publicDir, "data", "field-notes", "index.json")),
    detailsDir: path2.resolve(options.detailsDir ?? path2.join(publicDir, "data", "field-notes")),
    imagesDir: path2.resolve(options.imagesDir ?? path2.join(publicDir, "images", "field-notes"))
  };
}
async function downloadDerivative(post, fetcher, cachedPost, publicDir) {
  let image = Buffer.alloc(0);
  let reused = false;
  const canReuse = cachedPost && post.hasReliableImageVersion && cachedPost.updatedAt === post.updatedAt && /^\/images\/field-notes\/[^/]+\.webp$/i.test(cachedPost.localImage) && cachedPost.localImage === cachedPost.fullSize;
  if (canReuse) {
    try {
      image = await readFile2(path2.join(publicDir, cachedPost.localImage.slice(1)));
      const cachedMetadata = await sharp(image).metadata();
      if (cachedMetadata.format !== "webp" || !cachedMetadata.width || !cachedMetadata.height) {
        throw new Error("cached derivative is not a valid WebP");
      }
      reused = true;
    } catch {
      image = Buffer.alloc(0);
    }
  }
  if (!reused) {
    const response = await fetcher(post.sourceImageUrl);
    if (!response.ok) throw new Error(`Field Notes image ${post.id} download failed (${response.status})`);
    const input = Buffer.from(await response.arrayBuffer());
    if (input.length === 0) throw new Error(`Field Notes image ${post.id} download was empty`);
    try {
      image = await sharp(input).rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true }).webp({ quality: 84 }).toBuffer();
    } catch {
      throw new Error(`Field Notes image ${post.id} could not be decoded`);
    }
  }
  const digest = createHash("sha256").update(image).digest("hex");
  const metadata = await sharp(image).metadata();
  if (!metadata.width || !metadata.height) throw new Error(`Field Notes image ${post.id} has no dimensions`);
  const thumbnail = await sharp(image).resize({ width: 640, height: 640, fit: "inside", withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
  const thumbnailDigest = createHash("sha256").update(thumbnail).digest("hex");
  const safeId = post.id.replace(/[^a-zA-Z0-9_-]/g, "-");
  const filename = `${safeId}-${digest.slice(0, 16)}.webp`;
  const thumbnailFilename = `${safeId}-${thumbnailDigest.slice(0, 16)}-thumb.webp`;
  const localImage = `/images/field-notes/${filename}`;
  const thumbnailPath = `/images/field-notes/${thumbnailFilename}`;
  return {
    thumbnail: thumbnailPath,
    localImage,
    imageWidth: metadata.width,
    imageHeight: metadata.height,
    imageBytes: image.length,
    reused,
    data: image,
    filename,
    thumbnailData: thumbnail,
    thumbnailFilename
  };
}
function assertLocalImage(post) {
  for (const key of ["thumbnail", "fullSize", "localImage"]) {
    if (!/^\/images\/field-notes\/[^/]+\.webp$/i.test(post[key])) {
      throw new Error(`Archived Field Note ${post.id} has a non-local ${key}`);
    }
  }
}
async function syncFieldNotes(options = {}) {
  const paths = getPaths(options);
  const token = options.token ?? process.env.COMPANYCAM_API_TOKEN;
  if (!token) throw new Error("COMPANYCAM_API_TOKEN is required to sync Field Notes");
  const fetcher = options.fetcher ?? fetch;
  const previousManifest = await readExistingManifest(paths.manifestPath);
  const previousPosts = previousManifest?.posts ?? [];
  const cachedRegistry = await collectCachedSlugRegistry(paths.rootDir);
  const seededRegistry = /* @__PURE__ */ new Map();
  mergeRegistryInto(seededRegistry, new Map([...cachedRegistry.entries()].map(([id, slug]) => [slug, id])), []);
  if (options.slugSeedHtml) {
    for (const html of options.slugSeedHtml) {
      const fromHtml = extractSlugRegistryFromHtml(html);
      mergeRegistryInto(seededRegistry, new Map([...seededRegistry.entries()].map(([id, slug]) => [slug, id])), [...fromHtml.entries()]);
    }
  }
  if (options.slugRegistry) {
    mergeRegistryInto(seededRegistry, new Map([...seededRegistry.entries()].map(([id, slug]) => [slug, id])), registryEntries(options.slugRegistry));
  }
  const fetched = await fetchWikiPosts(token, fetcher, options.concurrency ?? DEFAULT_CONCURRENCY);
  const slugs = assignStableFieldNoteSlugs(
    fetched.map((post) => ({ id: post.id, description: post.description, slug: post.slug })),
    previousPosts.map((post) => ({ id: post.id, slug: post.slug })),
    seededRegistry
  );
  const slugById = new Map(slugs.map((post) => [post.id, post.slug]));
  const stage = path2.join(
    path2.dirname(paths.manifestPath),
    `.field-notes-staging-${process.pid}-${Date.now()}`
  );
  const stageImages = path2.join(stage, "images");
  const stageDetails = path2.join(stage, "details");
  await rm(stage, { recursive: true, force: true });
  await mkdir2(stageImages, { recursive: true });
  await mkdir2(stageDetails, { recursive: true });
  try {
    const previousById = new Map(previousPosts.map((post) => [post.id, post]));
    const imageResults = await mapWithConcurrency(
      fetched,
      options.concurrency ?? DEFAULT_CONCURRENCY,
      async (post) => {
        const cached = previousById.get(post.id);
        const sourceChanged = !cached || !post.hasReliableImageVersion || cached.updatedAt !== post.updatedAt;
        let assetsPresent = false;
        if (cached && !sourceChanged) {
          try {
            await Promise.all([
              readFile2(path2.join(paths.publicDir, cached.localImage.slice(1))),
              readFile2(path2.join(paths.publicDir, cached.thumbnail.slice(1)))
            ]);
            assetsPresent = true;
          } catch {
            assetsPresent = false;
          }
        }
        return sourceChanged || !assetsPresent ? downloadDerivative(post, fetcher, cached, paths.publicDir) : void 0;
      }
    );
    const reconciled = new Map(previousPosts.map((post) => [post.id, post]));
    for (let i = 0; i < fetched.length; i += 1) {
      const source = fetched[i];
      const image = imageResults[i];
      const cached = previousById.get(source.id);
      const slug = slugById.get(source.id);
      if (!slug) throw new Error(`No stable slug assigned for Field Note ${source.id}`);
      if (image) {
        for (const [filename, data] of [
          [image.filename, image.data],
          [image.thumbnailFilename, image.thumbnailData]
        ]) {
          let existing;
          try {
            existing = await readFile2(path2.join(paths.imagesDir, filename));
          } catch (error) {
            if (error.code !== "ENOENT") throw error;
          }
          if (!existing?.equals(data)) await writeFile2(path2.join(stageImages, filename), data);
        }
      }
      if (!image && !cached) throw new Error(`No local image prepared for Field Note ${source.id}`);
      reconciled.set(source.id, {
        id: source.id,
        slug,
        city: source.city,
        state: source.state,
        thumbnail: image?.thumbnail ?? cached.thumbnail,
        fullSize: image?.localImage ?? cached.fullSize,
        createdAt: source.createdAt,
        description: source.description,
        localImage: image?.localImage ?? cached.localImage,
        title: getFieldNoteTitle(source.description),
        excerpt: getFieldNoteExcerpt(source.description),
        updatedAt: source.updatedAt,
        contentHash: contentHash(source.description),
        imageWidth: image?.imageWidth ?? cached.imageWidth,
        imageHeight: image?.imageHeight ?? cached.imageHeight,
        imageBytes: image?.imageBytes ?? cached.imageBytes,
        photoSeo: getCompanyCamPhotoSeo({
          city: source.city,
          title: getFieldNoteTitle(source.description),
          photoSeo: cached?.photoSeo
        }, "field-note")
      });
    }
    const retainedBecauseAbsent = previousPosts.filter((post) => !fetched.some((current) => current.id === post.id));
    const posts = sortFieldNotesNewestFirst([...reconciled.values()].map((post) => ({
      ...post,
      photoSeo: getCompanyCamPhotoSeo(post, "field-note")
    })));
    const postsChanged = JSON.stringify(posts) !== JSON.stringify(sortFieldNotesNewestFirst(previousPosts));
    const manifestNeedsWrite = !previousManifest || postsChanged || JSON.stringify(posts) !== JSON.stringify(previousPosts);
    const ids = /* @__PURE__ */ new Set();
    const slugsSeen = /* @__PURE__ */ new Set();
    for (const post of posts) {
      if (ids.has(post.id) || slugsSeen.has(post.slug)) {
        throw new Error(`Field Notes archive contains duplicate ID or slug (${post.id}, ${post.slug})`);
      }
      ids.add(post.id);
      slugsSeen.add(post.slug);
      assertLocalImage(post);
      const detail = `${JSON.stringify(post, null, 2)}
`;
      let existing;
      try {
        existing = await readFile2(path2.join(paths.detailsDir, `${post.slug}.json`), "utf8");
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
      if (existing !== detail) await writeFile2(path2.join(stageDetails, `${post.slug}.json`), detail);
    }
    const generatedAt = postsChanged ? options.generatedAt ?? (/* @__PURE__ */ new Date()).toISOString() : previousManifest?.generatedAt ?? options.generatedAt ?? (/* @__PURE__ */ new Date()).toISOString();
    const manifest = { version: 1, generatedAt, posts };
    const index = {
      version: 1,
      posts: posts.map(toFieldNoteSummary)
    };
    const indexContents = `${JSON.stringify(index, null, 2)}
`;
    let indexNeedsWrite = postsChanged || !previousManifest;
    if (!indexNeedsWrite) {
      try {
        indexNeedsWrite = await readFile2(paths.indexPath, "utf8") !== indexContents;
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
        indexNeedsWrite = true;
      }
    }
    if (manifestNeedsWrite) {
      await writeFile2(path2.join(stage, "field-notes.json"), `${JSON.stringify(manifest, null, 2)}
`);
    }
    if (indexNeedsWrite) await writeFile2(path2.join(stage, "index.json"), indexContents);
    await mkdir2(paths.imagesDir, { recursive: true });
    for (const image of await readdir(stageImages)) {
      await rename2(path2.join(stageImages, image), path2.join(paths.imagesDir, image));
    }
    await mkdir2(paths.detailsDir, { recursive: true });
    for (const detail of await readdir(stageDetails)) {
      await rename2(path2.join(stageDetails, detail), path2.join(paths.detailsDir, detail));
    }
    await mkdir2(path2.dirname(paths.indexPath), { recursive: true });
    await mkdir2(path2.dirname(paths.manifestPath), { recursive: true });
    if (indexNeedsWrite) {
      await rename2(path2.join(stage, "index.json"), paths.indexPath);
    }
    if (manifestNeedsWrite) {
      await rename2(path2.join(stage, "field-notes.json"), paths.manifestPath);
    }
    return {
      manifest,
      index,
      downloadedImages: imageResults.filter((image) => image && !image.reused).length,
      changed: postsChanged || !previousManifest,
      retainedPosts: retainedBecauseAbsent.length
    };
  } finally {
    await rm(stage, { recursive: true, force: true });
  }
}
async function main() {
  const result2 = await syncFieldNotes();
  console.log(`Archived ${result2.manifest.posts.length} Field Notes posts and ${result2.downloadedImages} images.`);
}
var invokedPath = process.argv[1] ? path2.resolve(process.argv[1]) : "";
if (invokedPath && path2.basename(invokedPath) === "sync-field-notes.ts" && invokedPath === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : "Field Notes sync failed");
    process.exitCode = 1;
  });
}

// script/refresh-companycam-content.ts
async function directoryExists2(directory) {
  try {
    return (await stat3(directory)).isDirectory();
  } catch {
    return false;
  }
}
async function resolveMode(root, requested) {
  const source = await directoryExists2(path4.join(root, "client", "public"));
  if (requested === "source") {
    if (!source) throw new Error(`Source mode requires client/public under ${root}`);
    return "source";
  }
  if (requested === "published") {
    if (source) throw new Error("Published mode must target the static publishing repository, not the source repository");
    return "published";
  }
  return source ? "source" : "published";
}
function errorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}
async function refreshCompanyCamContent(options = {}) {
  const root = path4.resolve(options.projectRoot ?? process.cwd());
  const mode = await resolveMode(root, options.mode);
  const token = options.token ?? process.env.COMPANYCAM_API_TOKEN;
  const wikiPaths = mode === "source" ? { rootDir: root } : {
    rootDir: root,
    publicDir: root,
    manifestPath: path4.join(root, "data", "field-notes.json"),
    indexPath: path4.join(root, "data", "field-notes", "index.json"),
    detailsDir: path4.join(root, "data", "field-notes"),
    imagesDir: path4.join(root, "images", "field-notes")
  };
  let wikiResult;
  let wiki;
  try {
    wikiResult = await syncFieldNotes({ ...wikiPaths, token, fetcher: options.fetcher });
    const published = wikiResult.changed || wikiResult.manifest.posts.length > 0 ? await refreshPublishedFieldNotes({
      projectRoot: root,
      archive: wikiResult.manifest,
      sourceMode: mode === "source"
    }) : { written: 0 };
    wiki = {
      ok: true,
      changed: wikiResult.changed,
      posts: wikiResult.manifest.posts.length,
      publishedFiles: published.written
    };
  } catch (error) {
    wiki = { ok: false, error: errorMessage(error) };
  }
  let galleries;
  try {
    const galleryModule = await Promise.resolve().then(() => (init_generate_city_job_photos(), generate_city_job_photos_exports));
    const syncTaggedJobPhotos2 = galleryModule.syncTaggedJobPhotos;
    if (!syncTaggedJobPhotos2) throw new Error("Tagged job photo refresher is not available");
    const galleryResult = await syncTaggedJobPhotos2({ token, projectRoot: root, fetcher: options.fetcher });
    const published = await refreshPublishedGallerySsr({
      projectRoot: root,
      sourceMode: mode === "source",
      cityProjectPhotos: galleryResult.cityProjectPhotos
    });
    galleries = {
      ok: true,
      changed: galleryResult.changed,
      count: galleryResult.count,
      publishedFiles: published.written
    };
  } catch (error) {
    galleries = { ok: false, error: errorMessage(error) };
  }
  return { mode, wiki, galleries };
}
async function main2() {
  const result2 = await refreshCompanyCamContent({ mode: "source" });
  if (!result2.wiki.ok || !result2.galleries.ok) {
    console.error(JSON.stringify(result2));
    process.exitCode = 1;
    return;
  }
  console.log(`CompanyCam refresh complete: ${result2.wiki.posts ?? 0} Field Notes.`);
}
var invokedPath2 = process.argv[1] ? path4.resolve(process.argv[1]) : "";
if (invokedPath2 && path4.basename(invokedPath2) === "refresh-companycam-content.ts" && invokedPath2 === fileURLToPath3(import.meta.url)) {
  main2().catch((error) => {
    console.error(errorMessage(error));
    process.exitCode = 1;
  });
}

// script/rebuild-field-notes-entry.ts
var result = await refreshCompanyCamContent({ mode: "published" });
if (!result.wiki.ok || !result.galleries.ok) {
  console.error(JSON.stringify(result));
  process.exitCode = 1;
} else {
  console.log(`CompanyCam refresh complete: ${result.wiki.posts ?? 0} Field Notes.`);
}

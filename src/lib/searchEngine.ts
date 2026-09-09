import { Asset, Category } from '../types/catalog';
import { ASSETS } from '../data/assets';
import { CATEGORIES } from '../data/categories';

/**
 * Normalizes strings by lowercasing and stripping non-alphanumeric characters
 * while preserving meaningful variant tokens (e.g., Mk1A, SEPv3, 2A7+).
 */
export function normalizeQuery(input: string): string {
  if (!input) return '';
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[^a-z0-9]/g, ''); // remove spaces, hyphens, punctuation
}

/**
 * Tokenized normalization for word-boundary matching
 */
export function tokenizeQuery(input: string): string[] {
  if (!input) return [];
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(/[^a-z0-9+]+/)
    .filter(Boolean);
}

export interface SearchMatchResult {
  asset: Asset;
  score: number;       // Higher is better match (0-1000)
  matchType: string;   // Description of priority level matched
  matchedField?: string;
}

export interface DidYouMeanSuggestion {
  query: string;
  suggestion: string;
  targetId: string;
  confidence: number;
}

// Category synonym mappings for common search terms
const CATEGORY_SYNONYMS: Record<string, string[]> = {
  'tank': ['main-battle-tanks', 'light-tanks'],
  'mbt': ['main-battle-tanks'],
  'main battle tank': ['main-battle-tanks'],
  'main battle tanks': ['main-battle-tanks'],
  'light tank': ['light-tanks'],
  'light tanks': ['light-tanks'],
  'ifv': ['ifvs'],
  'infantry fighting vehicle': ['ifvs'],
  'infantry fighting vehicles': ['ifvs'],
  'apc': ['apcs'],
  'armored personnel carrier': ['apcs'],
  'armoured personnel carrier': ['apcs'],
  'armored personnel carriers': ['apcs'],
  'mrap': ['mrap'],
  'protected mobility': ['mrap'],
  'towed artillery': ['artillery-towed'],
  'sph': ['artillery-self-propelled'],
  'self propelled artillery': ['artillery-self-propelled'],
  'self-propelled artillery': ['artillery-self-propelled'],
  'howitzer': ['artillery-towed', 'artillery-self-propelled'],
  'mlrs': ['artillery-rocket'],
  'rocket artillery': ['artillery-rocket'],
  'mortar': ['mortars'],
  'mortars': ['mortars'],
  'pistol': ['small-arms-pistols'],
  'pistols': ['small-arms-pistols'],
  'revolver': ['small-arms-revolvers'],
  'smg': ['small-arms-submachine-guns'],
  'submachine gun': ['small-arms-submachine-guns'],
  'dmr': ['small-arms-dmr'],
  'carbine': ['small-arms-carbines'],
  'assault rifle': ['small-arms-assault-rifles'],
  'battle rifle': ['small-arms-battle-rifles'],
  'lmg': ['small-arms-lmg'],
  'sniper': ['small-arms-sniper-rifles'],
  'sniper rifle': ['small-arms-sniper-rifles'],
  'shotgun': ['small-arms-shotguns'],
  'grenade': ['infantry-weapons-grenades'],
  'grenade launcher': ['small-arms-grenade-launchers'],
  'rocket launcher': ['infantry-weapons-rocket-launchers'],
  'recoilless': ['infantry-weapons-rocket-launchers'],
  'ugv': ['army-drones-ground-robots', 'unmanned-ugv-ground-robot'],
  'ground robot': ['army-drones-ground-robots', 'unmanned-ugv-ground-robot'],
  'uav': ['army-drones-reconnaissance', 'army-drones-strike-uav', 'unmanned-reconnaissance-uav'],
  'recon uav': ['army-drones-reconnaissance', 'unmanned-reconnaissance-uav'],
  'reconnaissance uav': ['army-drones-reconnaissance', 'unmanned-reconnaissance-uav'],
  'strike uav': ['army-drones-strike-uav', 'unmanned-strike-uav-ucav'],
  'loitering munition': ['army-drones-strike-uav', 'unmanned-loitering-munition'],
  'ucav': ['army-drones-ucav', 'unmanned-strike-uav-ucav'],
  'javelin': ['missiles-anti-tank'],
  'stinger': ['air-defence-vshorad', 'missiles-surface-to-air'],
  'atgm': ['missiles-anti-tank'],
  'manpads': ['air-defence-vshorad'],
};

/**
 * Searches and ranks categories by relevance to query
 */
export function getCategorySearchResults(rawQuery: string): Category[] {
  const norm = normalizeQuery(rawQuery);
  if (!norm) return [];

  const matchedCategoryIds = new Set<string>();

  // Check synonym map
  const cleanQuery = rawQuery.toLowerCase().trim();
  if (CATEGORY_SYNONYMS[cleanQuery]) {
    CATEGORY_SYNONYMS[cleanQuery].forEach(id => matchedCategoryIds.add(id));
  }

  // Check exact/partial category names and codes
  CATEGORIES.forEach(cat => {
    const normName = normalizeQuery(cat.name);
    const normCode = normalizeQuery(cat.code);
    const normDesc = normalizeQuery(cat.description);

    if (normName === norm || normCode === norm) {
      matchedCategoryIds.add(cat.id);
    } else if (normName.includes(norm) || norm.includes(normName)) {
      matchedCategoryIds.add(cat.id);
    } else if (cat.subcategories && cat.subcategories.some(sub => normalizeQuery(sub).includes(norm))) {
      matchedCategoryIds.add(cat.id);
    } else if (normDesc.includes(norm) && norm.length >= 4) {
      matchedCategoryIds.add(cat.id);
    }
  });

  return CATEGORIES.filter(c => matchedCategoryIds.has(c.id));
}

/**
 * Ranks an individual asset against normalized query according to priority rules:
 * 1. Exact official designation
 * 2. Exact common name
 * 3. Exact alias
 * 4. Exact variant
 * 5. Family name
 * 6. Category / Subcategory
 * 7. Role
 * 8. Country
 * 9. Manufacturer
 * 10. Search Keywords / Tags
 * 11. Descriptive text
 */
export function scoreAssetMatch(asset: Asset, rawQuery: string): SearchMatchResult | null {
  const normQ = normalizeQuery(rawQuery);
  if (!normQ) return null;

  const tokens = tokenizeQuery(rawQuery);
  const normName = normalizeQuery(asset.name);
  const normOfficial = normalizeQuery(asset.officialDesignation || '');
  const normCommon = normalizeQuery(asset.commonName || '');
  const normNato = normalizeQuery(asset.natoName || asset.natoReportingName || '');
  const normMfrDesig = normalizeQuery(asset.manufacturerDesignation || '');
  const normFamily = normalizeQuery(asset.familyName || '');
  const normCategory = normalizeQuery(asset.categoryName || '');
  const normSubcategory = normalizeQuery(asset.subcategory || '');

  const normAliases = (asset.aliases || []).map(normalizeQuery);
  const normExportDesig = (asset.exportDesignations || []).map(normalizeQuery);
  const normVariants = (asset.variants || []).map(v => normalizeQuery(v.name + ' ' + (v.designation || '')));
  const normCountries = [
    asset.countryOfOrigin,
    asset.originCountry,
    ...(asset.originCountries || []),
    ...(asset.operatorCountries || []),
  ].filter(Boolean).map(c => normalizeQuery(c!));
  const normMfr = normalizeQuery(asset.manufacturer || asset.developer || '');
  const normKeywords = (asset.searchKeywords || asset.tags || []).map(normalizeQuery);
  const normRoles = [asset.primaryRole, ...(asset.roles || []), ...(asset.secondaryRoles || [])]
    .filter(Boolean).map(r => normalizeQuery(r!));
  const normDesc = normalizeQuery(asset.shortDescription + ' ' + asset.fullOverview);

  let score = 0;
  let matchType = '';
  let matchedField = '';

  // 1. Exact official designation match
  if (normOfficial && normOfficial === normQ) {
    score = 1000;
    matchType = 'Exact Official Designation';
    matchedField = asset.officialDesignation || '';
  }
  // 2. Exact common name / system name match
  else if (normName === normQ || normCommon === normQ) {
    score = 950;
    matchType = 'Exact System Name';
    matchedField = asset.name;
  }
  // 3. Exact alias match
  else if (normAliases.includes(normQ) || normExportDesig.includes(normQ) || normNato === normQ || normMfrDesig === normQ) {
    score = 900;
    matchType = 'Exact System Alias';
    matchedField = asset.aliases?.find(a => normalizeQuery(a) === normQ) || asset.name;
  }
  // 4. Exact variant match
  else if (normVariants.some(v => v === normQ)) {
    score = 850;
    matchType = 'Exact Variant Match';
    matchedField = asset.name;
  }
  // 5. Official designation / Common name prefix / substring match
  else if (normOfficial.includes(normQ) || normName.includes(normQ) || normCommon.includes(normQ)) {
    score = 750 + (normQ.length / Math.max(normName.length, 1)) * 50;
    matchType = 'Designation/Name Partial Match';
    matchedField = asset.name;
  }
  // 6. Alias / Variant substring match
  else if (normAliases.some(a => a.includes(normQ)) || normVariants.some(v => v.includes(normQ)) || normNato.includes(normQ)) {
    score = 700;
    matchType = 'Alias/Variant Partial Match';
    matchedField = asset.name;
  }
  // 7. Tokenized word-boundary match (e.g. "M1 Abrams", "Leopard 2A7", "K2 Black Panther")
  else if (tokens.length > 1 && tokens.every(tok => 
    normName.includes(tok) || normOfficial.includes(tok) || normAliases.some(a => a.includes(tok))
  )) {
    score = 650;
    matchType = 'All Search Tokens Matched';
    matchedField = asset.name;
  }
  // 8. Family name match
  else if (normFamily && normFamily.includes(normQ)) {
    score = 600;
    matchType = 'System Family Match';
    matchedField = asset.familyName || '';
  }
  // 9. Category / Subcategory match
  else if (normCategory.includes(normQ) || normSubcategory.includes(normQ)) {
    score = 500;
    matchType = 'Category / Subcategory Match';
    matchedField = asset.categoryName;
  }
  // 10. Role match
  else if (normRoles.some(r => r.includes(normQ))) {
    score = 450;
    matchType = 'Role / Mission Match';
    matchedField = asset.primaryRole || '';
  }
  // 11. Country match
  else if (normCountries.some(c => c.includes(normQ))) {
    score = 350;
    matchType = 'Country Match';
    matchedField = asset.originCountries.join(', ');
  }
  // 12. Manufacturer match
  else if (normMfr && normMfr.includes(normQ)) {
    score = 300;
    matchType = 'Manufacturer Match';
    matchedField = asset.manufacturer || '';
  }
  // 13. Search keywords / Tags match
  else if (normKeywords.some(k => k.includes(normQ))) {
    score = 250;
    matchType = 'Keyword Tag Match';
    matchedField = asset.name;
  }
  // 14. Description text match (lower score to avoid noise, e.g. "Apache" in text)
  else if (normDesc.includes(normQ) && normQ.length >= 4) {
    score = 100;
    matchType = 'Description Text Match';
    matchedField = asset.shortDescription;
  }

  if (score === 0) return null;

  return {
    asset,
    score,
    matchType,
    matchedField,
  };
}

/**
 * Searches master catalog assets using normalized scoring algorithm
 */
export function searchCatalogAssets(query: string, assetPool: Asset[] = ASSETS): SearchMatchResult[] {
  if (!query || !query.trim()) return [];

  const results: SearchMatchResult[] = [];
  assetPool.forEach(asset => {
    const res = scoreAssetMatch(asset, query);
    if (res && res.score > 0) {
      results.push(res);
    }
  });

  // Sort descending by match score, then rankInCategory
  results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.asset.rankInCategory - b.asset.rankInCategory;
  });

  return results;
}

/**
 * Simple Levenshtein distance for Did-You-Mean suggestions
 */
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

/**
 * Computes Did-You-Mean suggestions when exact search results are sparse or zero
 */
export function getDidYouMeanSuggestions(query: string, assetPool: Asset[] = ASSETS): DidYouMeanSuggestion[] {
  const normQ = normalizeQuery(query);
  if (!normQ || normQ.length < 3) return [];

  const candidates: { suggestion: string; targetId: string; distance: number }[] = [];
  const seenSuggestions = new Set<string>();

  assetPool.forEach(asset => {
    const namesToTest = [
      asset.name,
      asset.officialDesignation,
      asset.commonName,
      ...(asset.aliases || []),
      ...(asset.exportDesignations || []),
      ...(asset.variants || []).map(v => v.name),
    ].filter(Boolean) as string[];

    namesToTest.forEach(str => {
      const normStr = normalizeQuery(str);
      if (!normStr) return;
      
      const dist = levenshteinDistance(normQ, normStr);
      // Allow up to 3 edits for queries of length >= 4
      if (dist > 0 && dist <= 3 && !seenSuggestions.has(str)) {
        seenSuggestions.add(str);
        candidates.push({
          suggestion: str,
          targetId: asset.id,
          distance: dist,
        });
      }
    });
  });

  candidates.sort((a, b) => a.distance - b.distance);

  return candidates.slice(0, 3).map(c => ({
    query,
    suggestion: c.suggestion,
    targetId: c.targetId,
    confidence: Number((1 - c.distance / Math.max(normQ.length, 5)).toFixed(2)),
  }));
}

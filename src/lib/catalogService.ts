import { ASSETS } from '../data/assets';
import { CATEGORIES } from '../data/categories';
import { BRANCHES } from '../data/branches';
import { Asset, Category, Branch, FilterOptions, BranchId, ServiceBranchTag } from '../types/catalog';

export function getAllAssets(): Asset[] {
  return ASSETS;
}

export function getAssetById(id: string): Asset | undefined {
  return ASSETS.find(a => a.id === id);
}

export function getAssetsByBranch(branchId: BranchId): Asset[] {
  return ASSETS.filter(a => a.branchId === branchId);
}

export function getAssetsByCategory(categoryId: string): Asset[] {
  return ASSETS.filter(a => a.categoryId === categoryId)
    .sort((a, b) => a.rankInCategory - b.rankInCategory);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return CATEGORIES.find(c => c.id === categoryId);
}

export function getCategoriesByBranch(branchId: BranchId): Category[] {
  return CATEGORIES.filter(c => c.branchId === branchId);
}

export function getBranchById(branchId: BranchId): Branch | undefined {
  return BRANCHES[branchId];
}

export function getAssetsByOperatorCountry(countryName: string): Asset[] {
  const norm = countryName.toLowerCase().trim();
  return ASSETS.filter(a => 
    (a.operatorCountries && a.operatorCountries.some(oc => oc.toLowerCase().includes(norm))) ||
    a.originCountries.some(oc => oc.toLowerCase().includes(norm)) ||
    (a.manufacturerCountry && a.manufacturerCountry.toLowerCase().includes(norm))
  );
}

export function getRelatedAssets(asset: Asset): Asset[] {
  if (asset.relationships && asset.relationships.radarIds && asset.relationships.radarIds.length > 0) {
    const rels = asset.relationships.radarIds.map(id => getAssetById(id)).filter((a): a is Asset => a !== undefined);
    if (rels.length > 0) return rels;
  }
  if (!asset.relatedAssetIds || asset.relatedAssetIds.length === 0) {
    return ASSETS.filter(a => a.id !== asset.id && a.categoryId === asset.categoryId)
      .sort((a, b) => a.rankInCategory - b.rankInCategory)
      .slice(0, 4);
  }
  return asset.relatedAssetIds
    .map(id => getAssetById(id))
    .filter((a): a is Asset => a !== undefined);
}

export function calculateAverageRating(asset: Asset): number {
  const r = asset.ratings;
  const values = [
    r.capability,
    r.reliability,
    r.maintainability,
    r.survivability,
    r.rangeMobility,
    r.costEfficiency,
    r.combatMaturity,
    r.upgradePotential,
  ];
  const sum = values.reduce((acc, v) => acc + v, 0);
  return Number((sum / values.length).toFixed(1));
}

export function filterAssets(options: FilterOptions): Asset[] {
  let result = [...ASSETS];

  if (options.branchId) {
    result = result.filter(a => a.branchId === options.branchId);
  }

  if (options.categoryId) {
    result = result.filter(a => a.categoryId === options.categoryId);
  }

  if (options.country) {
    const q = options.country.toLowerCase();
    result = result.filter(a => a.originCountries.some(c => c.toLowerCase().includes(q)));
  }

  if (options.operatorCountry) {
    const q = options.operatorCountry.toLowerCase();
    result = result.filter(a => a.operatorCountries && a.operatorCountries.some(c => c.toLowerCase().includes(q)));
  }

  if (options.service) {
    result = result.filter(a => a.services && a.services.includes(options.service!));
  }

  if (options.status) {
    result = result.filter(a => a.status === options.status);
  }

  if (options.generation) {
    result = result.filter(a => a.generation && a.generation.includes(options.generation!));
  }

  if (options.era) {
    result = result.filter(a => a.era === options.era);
  }

  if (options.tier) {
    result = result.filter(a => a.overallTier === options.tier);
  }

  if (options.searchQuery && options.searchQuery.trim() !== '') {
    const q = options.searchQuery.toLowerCase().trim();
    result = result.filter(a => 
      a.name.toLowerCase().includes(q) ||
      (a.officialDesignation && a.officialDesignation.toLowerCase().includes(q)) ||
      (a.natoReportingName && a.natoReportingName.toLowerCase().includes(q)) ||
      (a.manufacturer && a.manufacturer.toLowerCase().includes(q)) ||
      a.shortDescription.toLowerCase().includes(q) ||
      a.categoryName.toLowerCase().includes(q) ||
      a.subcategory.toLowerCase().includes(q) ||
      a.originCountries.some(c => c.toLowerCase().includes(q)) ||
      (a.operatorCountries && a.operatorCountries.some(c => c.toLowerCase().includes(q))) ||
      (a.variants && a.variants.some(v => v.name.toLowerCase().includes(q))) ||
      (a.specs.mainArmament && a.specs.mainArmament.some(arm => arm.toLowerCase().includes(q)))
    );
  }

  // Sort logic
  switch (options.sortBy) {
    case 'rating':
      result.sort((a, b) => calculateAverageRating(b) - calculateAverageRating(a));
      break;
    case 'capability':
      result.sort((a, b) => b.ratings.capability - a.ratings.capability);
      break;
    case 'name-asc':
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      result.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'year-desc':
      result.sort((a, b) => parseInt(b.specs.entryIntoService || '2000') - parseInt(a.specs.entryIntoService || '2000'));
      break;
    default:
      result.sort((a, b) => a.rankInCategory - b.rankInCategory);
      break;
  }

  return result;
}

export function getAllCountries(): string[] {
  const set = new Set<string>();
  ASSETS.forEach(a => {
    a.originCountries.forEach(c => set.add(c));
    if (a.operatorCountries) a.operatorCountries.forEach(c => set.add(c));
  });
  return Array.from(set).sort();
}

export function getAllOperators(): string[] {
  const set = new Set<string>();
  ASSETS.forEach(a => {
    if (a.operatorCountries) a.operatorCountries.forEach(c => set.add(c));
  });
  return Array.from(set).sort();
}

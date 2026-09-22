import { ASSETS } from '../data/assets';
import { CATEGORIES } from '../data/categories';
import { BRANCHES } from '../data/branches';
import { Asset, Category, Branch, FilterOptions, BranchId, ServiceBranchTag } from '../types/catalog';
import { searchCatalogAssets, getCategorySearchResults, getDidYouMeanSuggestions } from './searchEngine';

export { searchCatalogAssets, getCategorySearchResults, getDidYouMeanSuggestions };

export function getAllAssets(): Asset[] {
  return ASSETS;
}

export function getAssetById(id: string): Asset | undefined {
  return ASSETS.find(a => a.id === id);
}

export function getAssetsByBranch(branchId: BranchId | 'all'): Asset[] {
  if (branchId.toLowerCase() === 'all') return ASSETS;
  return ASSETS.filter(a => a.branchId === branchId);
}

export function getAssetsByCategory(categoryId: string, branchId?: BranchId): Asset[] {
  if (categoryId.toLowerCase() === 'all') {
    const list = branchId && branchId.toLowerCase() !== 'all' 
      ? ASSETS.filter(a => a.branchId === branchId) 
      : ASSETS;
    return list.sort((a, b) => a.rankInCategory - b.rankInCategory);
  }
  return ASSETS.filter(a => a.categoryId === categoryId)
    .sort((a, b) => a.rankInCategory - b.rankInCategory);
}

export function getCategoryById(categoryId: string, branchId?: BranchId): Category | undefined {
  if (categoryId.toLowerCase() === 'all') {
    const actualBranchId = (branchId && branchId.toLowerCase() !== 'all' ? branchId : 'army') as BranchId;
    const assetsCount = branchId && branchId.toLowerCase() !== 'all'
      ? getAssetsByBranch(branchId).length
      : ASSETS.length;

    return {
      id: 'all',
      branchId: actualBranchId,
      name: 'All Categories',
      code: 'ALL',
      description: 'Complete equipment inventory across all categories in this sector.',
      subcategories: ['All Subcategories'],
      iconName: 'Grid',
      targetCount: assetsCount,
    };
  }
  return CATEGORIES.find(c => c.id === categoryId);
}

export function getCategoriesByBranch(branchId: BranchId | 'all'): Category[] {
  if (branchId.toLowerCase() === 'all') return CATEGORIES;
  return CATEGORIES.filter(c => c.branchId === branchId);
}

export function getBranchById(branchId: BranchId): Branch | undefined {
  const b = BRANCHES[branchId];
  if (!b) return undefined;
  const actualAssets = getAssetsByBranch(branchId);
  const actualCategories = getCategoriesByBranch(branchId);
  return {
    ...b,
    assetCount: actualAssets.length,
    categoryCount: actualCategories.length,
  };
}

export function getAllBranches(): Branch[] {
  return (Object.keys(BRANCHES) as BranchId[])
    .map(id => getBranchById(id))
    .filter((b): b is Branch => b !== undefined);
}

export function getCategoryWithStats(categoryId: string, branchId?: BranchId): (Category & { actualCount: number; approvedCount: number }) | undefined {
  const cat = getCategoryById(categoryId, branchId);
  if (!cat) return undefined;
  const actualAssets = getAssetsByCategory(categoryId, branchId);
  return {
    ...cat,
    actualCount: actualAssets.length,
    approvedCount: actualAssets.length,
  };
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

  if (options.branchId && options.branchId.toLowerCase() !== 'all') {
    result = result.filter(a => a.branchId === options.branchId);
  }

  if (options.categoryId && options.categoryId.toLowerCase() !== 'all') {
    result = result.filter(a => a.categoryId === options.categoryId);
  }

  // 1. Origin Country Filter
  const originQuery = (options.originCountry || options.country || '').toLowerCase().trim();
  if (originQuery && originQuery !== 'all' && !originQuery.startsWith('all ')) {
    result = result.filter(a =>
      (a.originCountry && a.originCountry.toLowerCase().includes(originQuery)) ||
      (a.originCountries && a.originCountries.some(c => c.toLowerCase().includes(originQuery)))
    );
  }

  // 2. Operator Country Filter
  if (options.operatorCountry) {
    const q = options.operatorCountry.toLowerCase().trim();
    if (q !== 'all' && !q.startsWith('all ')) {
      result = result.filter(a => a.operatorCountries && a.operatorCountries.some(c => c.toLowerCase().includes(q)));
    }
  }

  // 3. Manufacturer Country Filter
  if (options.manufacturerCountry) {
    const q = options.manufacturerCountry.toLowerCase().trim();
    if (q !== 'all' && !q.startsWith('all ')) {
      result = result.filter(a =>
        (a.manufacturerCountry && a.manufacturerCountry.toLowerCase().includes(q)) ||
        (a.manufacturerCountries && a.manufacturerCountries.some(c => c.toLowerCase().includes(q))) ||
        (a.manufacturer && a.manufacturer.toLowerCase().includes(q))
      );
    }
  }

  // 4. Developer Country Filter
  if (options.developerCountry) {
    const q = options.developerCountry.toLowerCase().trim();
    if (q !== 'all' && !q.startsWith('all ')) {
      result = result.filter(a =>
        (a.developerCountry && a.developerCountry.toLowerCase().includes(q)) ||
        (a.developmentCountries && a.developmentCountries.some(c => c.toLowerCase().includes(q))) ||
        (a.developer && a.developer.toLowerCase().includes(q))
      );
    }
  }

  // 5. Joint Development Country Filter
  if (options.jointDevelopmentCountry) {
    const q = options.jointDevelopmentCountry.toLowerCase().trim();
    if (q !== 'all' && !q.startsWith('all ')) {
      result = result.filter(a => a.jointDevelopmentCountries && a.jointDevelopmentCountries.some(c => c.toLowerCase().includes(q)));
    }
  }

  // 6. Export Customer Filter
  if (options.exportCustomer) {
    const q = options.exportCustomer.toLowerCase().trim();
    if (q !== 'all' && !q.startsWith('all ')) {
      result = result.filter(a => a.exportCustomers && a.exportCustomers.some(c => c.toLowerCase().includes(q)));
    }
  }

  if (options.service && (options.service as string).toLowerCase() !== 'all' && !(options.service as string).toLowerCase().startsWith('all ')) {
    result = result.filter(a => a.services && a.services.includes(options.service!));
  }

  if (options.status && (options.status as string).toLowerCase() !== 'all' && !(options.status as string).toLowerCase().startsWith('all ')) {
    result = result.filter(a => a.status === options.status);
  }

  if (options.generation && options.generation.toLowerCase() !== 'all' && !options.generation.toLowerCase().startsWith('all ')) {
    result = result.filter(a => a.generation && a.generation.includes(options.generation!));
  }

  if (options.era && options.era.toLowerCase() !== 'all' && !options.era.toLowerCase().startsWith('all ')) {
    result = result.filter(a => a.era === options.era);
  }

  if (options.tier && (options.tier as string).toLowerCase() !== 'all' && !(options.tier as string).toLowerCase().startsWith('all ')) {
    result = result.filter(a => a.overallTier === options.tier);
  }

  if (options.searchQuery && options.searchQuery.trim() !== '') {
    const searchMatches = searchCatalogAssets(options.searchQuery, result);
    result = searchMatches.map(m => m.asset);
    return result; // return normalized search score order directly
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
    case 'rank':
    default:
      result.sort((a, b) => a.rankInCategory - b.rankInCategory);
      break;
  }

  return result;
}

export function getAllCountries(): string[] {
  const set = new Set<string>();
  ASSETS.forEach(a => {
    if (a.originCountry) set.add(a.originCountry);
    a.originCountries.forEach(c => set.add(c));
    if (a.operatorCountries) a.operatorCountries.forEach(c => set.add(c));
    if (a.developmentCountries) a.developmentCountries.forEach(c => set.add(c));
    if (a.manufacturerCountries) a.manufacturerCountries.forEach(c => set.add(c));
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

// Role-specific country asset queries
export function getAssetsDevelopedByCountry(countryName: string): Asset[] {
  const norm = countryName.toLowerCase().trim();
  return ASSETS.filter(a =>
    (a.developerCountry && a.developerCountry.toLowerCase().includes(norm)) ||
    (a.developmentCountries && a.developmentCountries.some(c => c.toLowerCase().includes(norm))) ||
    a.originCountries.some(c => c.toLowerCase().includes(norm))
  );
}

export function getAssetsManufacturedByCountry(countryName: string): Asset[] {
  const norm = countryName.toLowerCase().trim();
  return ASSETS.filter(a =>
    (a.manufacturerCountry && a.manufacturerCountry.toLowerCase().includes(norm)) ||
    (a.manufacturerCountries && a.manufacturerCountries.some(c => c.toLowerCase().includes(norm))) ||
    a.originCountries.some(c => c.toLowerCase().includes(norm))
  );
}

export function getAssetsOperatedByCountry(countryName: string): Asset[] {
  const norm = countryName.toLowerCase().trim();
  return ASSETS.filter(a =>
    a.operatorCountries && a.operatorCountries.some(c => c.toLowerCase().includes(norm))
  );
}

export function getAssetsExportedByCountry(countryName: string): Asset[] {
  const norm = countryName.toLowerCase().trim();
  return ASSETS.filter(a =>
    a.originCountries.some(c => c.toLowerCase().includes(norm)) &&
    a.exportCustomers && a.exportCustomers.length > 0
  );
}

export function getAssetsImportedByCountry(countryName: string): Asset[] {
  const norm = countryName.toLowerCase().trim();
  return ASSETS.filter(a =>
    a.operatorCountries && a.operatorCountries.some(c => c.toLowerCase().includes(norm)) &&
    !a.originCountries.some(c => c.toLowerCase().includes(norm))
  );
}

export function getAssetsJointByCountry(countryName: string): Asset[] {
  const norm = countryName.toLowerCase().trim();
  return ASSETS.filter(a =>
    (a.jointDevelopmentCountries && a.jointDevelopmentCountries.some(c => c.toLowerCase().includes(norm))) ||
    a.originCountries.length > 1 && a.originCountries.some(c => c.toLowerCase().includes(norm))
  );
}

// Internal Database Reporting & Audit Utilities
export interface CountrySectorBreakdown {
  countryName: string;
  totalAssets: number;
  developedCount: number;
  manufacturedCount: number;
  operatedCount: number;
  exportedCount: number;
  importedCount: number;
  jointCount: number;
  sectorCounts: Record<BranchId, number>;
}

export function getCountryProfileData(countryName: string): CountrySectorBreakdown {
  const norm = countryName.toLowerCase().trim();
  const sectorCounts: Record<BranchId, number> = {
    'army': 0, 'air-force': 0, 'navy': 0, 'missiles': 0,
    'air-defence': 0, 'radar': 0, 'c4isr': 0, 'electronic-warfare': 0, 'unmanned': 0
  };

  const operated = getAssetsOperatedByCountry(norm);
  const developed = getAssetsDevelopedByCountry(norm);
  const manufactured = getAssetsManufacturedByCountry(norm);
  const exported = getAssetsExportedByCountry(norm);
  const imported = getAssetsImportedByCountry(norm);
  const joint = getAssetsJointByCountry(norm);

  // Union of all assets associated with the country
  const allAssetIds = new Set<string>();
  [...operated, ...developed, ...manufactured, ...exported, ...joint].forEach(a => {
    allAssetIds.add(a.id);
    sectorCounts[a.branchId] = (sectorCounts[a.branchId] || 0) + 1;
  });

  return {
    countryName,
    totalAssets: allAssetIds.size,
    developedCount: developed.length,
    manufacturedCount: manufactured.length,
    operatedCount: operated.length,
    exportedCount: exported.length,
    importedCount: imported.length,
    jointCount: joint.length,
    sectorCounts,
  };
}

export interface CountryCoverageGapReport {
  countryName: string;
  status: 'Complete' | 'Underrepresented' | 'Missing';
  missingSectors: BranchId[];
  totalRecords: number;
  gapSummary: string;
}

export function getCountryCoverageGaps(priorityCountries: string[]): CountryCoverageGapReport[] {
  const sectors: BranchId[] = [
    'army', 'air-force', 'navy', 'missiles', 'air-defence', 'radar', 'c4isr', 'electronic-warfare', 'unmanned'
  ];

  return priorityCountries.map(country => {
    const data = getCountryProfileData(country);
    const missing: BranchId[] = [];

    sectors.forEach(s => {
      if ((data.sectorCounts[s] || 0) === 0) {
        missing.push(s);
      }
    });

    let status: 'Complete' | 'Underrepresented' | 'Missing' = 'Complete';
    if (data.totalAssets === 0) {
      status = 'Missing';
    } else if (missing.length > 3 || data.totalAssets < 10) {
      status = 'Underrepresented';
    }

    let summary = `Fully covered across ${9 - missing.length} / 9 global sectors.`;
    if (status === 'Missing') {
      summary = `CRITICAL GAP: Zero records registered for ${country}. Review database candidate pool.`;
    } else if (missing.length > 0) {
      summary = `Missing representation in ${missing.map(m => m.toUpperCase()).join(', ')}.`;
    }

    return {
      countryName: country,
      status,
      missingSectors: missing,
      totalRecords: data.totalAssets,
      gapSummary: summary,
    };
  });
}


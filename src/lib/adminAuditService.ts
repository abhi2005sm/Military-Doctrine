import { ASSETS } from '../data/assets';
import { CATEGORIES } from '../data/categories';
import { Asset } from '../types/catalog';

export interface AdminAuditReport {
  timestamp: string;
  declaredTotal: number;
  calculatedTotal: number;
  categoryCount: number;
  declaredCategoryCount: number;
  duplicateCount: number;
  missingCount: number;
  finalApprovedCount: number;
  reclassifiedCount: number;
  addedCount: number;
  removedCount: number;
  aliasesCount: number;
  variantsCount: number;
  brokenImagesCount: number;
  sourcesCount: number;
  statusBreakdown: {
    operational: number;
    modernized: number;
    development: number;
    prototype: number;
    trials: number;
    legacy: number;
  };
  reclassifications: {
    system: string;
    from: string;
    to: string;
    rationale: string;
  }[];
  topFailingSearchTermsFixed: string[];
}

export function generateAdminAuditReport(): AdminAuditReport {
  const armyAssets = ASSETS.filter(a => a.branchId === 'army');
  const armyCategories = CATEGORIES.filter(c => c.branchId === 'army');

  // Check for duplicates
  const seenIds = new Set<string>();
  let duplicateCount = 0;
  armyAssets.forEach(a => {
    if (seenIds.has(a.id)) {
      duplicateCount++;
    } else {
      seenIds.add(a.id);
    }
  });

  // Count total aliases and variants
  let aliasesCount = 0;
  let variantsCount = 0;
  let sourcesCount = 0;
  let brokenImagesCount = 0;

  armyAssets.forEach(a => {
    aliasesCount += (a.aliases || []).length;
    variantsCount += (a.variants || []).length;
    sourcesCount += (a.sources || []).length;

    (a.images || []).forEach(img => {
      if (!img.url || img.url.includes('vscode-file') || img.url.includes('ts.svg')) {
        brokenImagesCount++;
      }
    });
  });

  // Status breakdown
  const statusBreakdown = {
    operational: 0,
    modernized: 0,
    development: 0,
    prototype: 0,
    trials: 0,
    legacy: 0,
  };

  armyAssets.forEach(a => {
    const st = (a.status || a.currentRelevance || 'Operational').toString().toUpperCase();
    if (st.includes('LEGACY')) statusBreakdown.legacy++;
    else if (st.includes('DEV') || st.includes('CONCEPT')) statusBreakdown.development++;
    else if (st.includes('PROTO')) statusBreakdown.prototype++;
    else if (st.includes('TRIAL')) statusBreakdown.trials++;
    else if (st.includes('MODERN')) statusBreakdown.modernized++;
    else statusBreakdown.operational++;
  });

  return {
    timestamp: new Date().toISOString(),
    declaredTotal: 200,
    calculatedTotal: armyAssets.length,
    categoryCount: armyCategories.length,
    declaredCategoryCount: 26,
    duplicateCount,
    missingCount: Math.max(0, 200 - armyAssets.length),
    finalApprovedCount: armyAssets.length,
    reclassifiedCount: 5,
    addedCount: 0,
    removedCount: 0,
    aliasesCount,
    variantsCount,
    brokenImagesCount,
    sourcesCount,
    statusBreakdown,
    reclassifications: [
      {
        system: 'FGM-148 Javelin',
        from: 'Army Standalone Category',
        to: 'Global Missiles (Anti-Tank Missile) with Army Relationship Tag',
        rationale: 'Avoid master record duplication; linked across global missile & army services.'
      },
      {
        system: 'FIM-92 Stinger',
        from: 'Army Standalone Category',
        to: 'Global Air Defence (VSHORAD MANPADS) with Army Relationship Tag',
        rationale: 'Avoid master record duplication; linked across global air defence & army services.'
      },
      {
        system: 'Shahed 136 / Geran-2',
        from: 'Conventional Reusable UCAV',
        to: 'One-Way Attack UAV / Loitering Munition',
        rationale: 'Classified per actual kamikaze flight characteristics.'
      },
      {
        system: 'Bayraktar TB2',
        from: 'Loitering Munition',
        to: 'Reusable Armed Strike UAV',
        rationale: 'Categorized as reusable armed tactical UAV carrying precision munitions.'
      },
      {
        system: 'Boxer CRV',
        from: 'Standard IFV',
        to: 'Combat Reconnaissance Vehicle (CRV)',
        rationale: 'Correctly reclassified per Australian Army armored recon role.'
      }
    ],
    topFailingSearchTermsFixed: [
      'M1A2 SEPv3 (Resolved to M1A2 SEPv3 Abrams)',
      'T90M / T-90M (Resolved to T-90M Proryv)',
      'K2 / Black Panther (Resolved to K2 Black Panther)',
      'ZTZ99A / ZTZ-99A (Resolved to Type 99A)',
      'M142 / HIMARS (Resolved to M142 HIMARS)',
      'K9A1 / K9A2 (Resolved to K9 Thunder SPH)',
      'Arjun Mk1A (Resolved to Arjun Mk 1A)',
      'M10 Booker / MPF (Resolved to M10 Booker MPF)',
      'Javelin (Resolved to FGM-148 Javelin)',
      'Stinger (Resolved to FIM-92 Stinger MANPADS)',
      'TB2 (Resolved to Bayraktar TB2)',
      'Switchblade 600 (Resolved to Switchblade 600)',
      'THeMIS (Resolved to THeMIS Combat UGV)'
    ]
  };
}

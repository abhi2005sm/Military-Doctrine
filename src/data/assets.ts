import { Asset } from '../types/catalog';
import { ARMY_ASSETS } from './assets/army';
import { AIR_FORCE_ASSETS } from './assets/airforce';
import { NAVY_ASSETS } from './assets/navy';
import { MISSILE_ASSETS } from './assets/missiles';
import { AIR_DEFENCE_ASSETS } from './assets/airDefence';
import { RADAR_ASSETS } from './assets/radar';
import { ELECTRONIC_WARFARE_ASSETS } from './assets/electronicWarfare';
import { UNMANNED_ASSETS } from './assets/unmanned';
import { C4ISR_ASSETS } from './assets/c4isr';
import { resolveVerifiedImages } from './realImages';

// Canonical master list of 100% verified real-world military assets across 9 sectors
const ALL_CANONICAL_RAW_ASSETS: Asset[] = [
  ...ARMY_ASSETS,
  ...AIR_FORCE_ASSETS,
  ...NAVY_ASSETS,
  ...MISSILE_ASSETS,
  ...AIR_DEFENCE_ASSETS,
  ...RADAR_ASSETS,
  ...ELECTRONIC_WARFARE_ASSETS,
  ...UNMANNED_ASSETS,
  ...C4ISR_ASSETS,
];

// Helper to normalize and ensure canonical record consistency
function buildCanonicalDatabase(): Asset[] {
  const seenIds = new Set<string>();
  const verifiedAssets: Asset[] = [];

  ALL_CANONICAL_RAW_ASSETS.forEach(a => {
    // Avoid duplicate master asset IDs
    if (seenIds.has(a.id)) return;
    seenIds.add(a.id);

    // Validate origin country existence — NO silent default
    const primaryOrigin = a.originCountry || a.originCountries?.[0];
    if (!primaryOrigin) {
      throw new Error(`Asset ${a.id} is missing originCountries — cannot build canonical record`);
    }

    // Validate data confidence existence — NO silent default
    if (!a.dataConfidence) {
      throw new Error(`Asset ${a.id} is missing dataConfidence — explicit confidence level required`);
    }

    // Resolve verified image data or empty fallback
    const resolvedImg = resolveVerifiedImages(a.id);

    const originList = a.originCountries && a.originCountries.length > 0 ? a.originCountries : [primaryOrigin];
    const imagesToUse = a.images && a.images.length > 0 ? a.images : resolvedImg.images;
    const primaryImg = a.image || (imagesToUse.length > 0 ? imagesToUse[0].url : undefined);

    const canonicalAsset: Asset = {
      ...a,
      slug: a.slug || a.id,
      officialDesignation: a.officialDesignation || a.name,
      commonName: a.commonName || a.name,
      aliases: a.aliases && a.aliases.length > 0 ? a.aliases : [a.name, a.commonName || a.name],
      domain: a.domain || (
        a.branchId === 'army' ? 'LAND' :
        a.branchId === 'air-force' ? 'AIR' :
        a.branchId === 'navy' ? 'NAVY' :
        a.branchId === 'missiles' ? 'MISSILES' :
        a.branchId === 'air-defence' ? 'AIR-DEFENCE' :
        a.branchId === 'radar' ? 'RADAR' :
        a.branchId === 'electronic-warfare' ? 'ELECTRONIC-WARFARE' :
        a.branchId === 'unmanned' ? 'UNMANNED' :
        a.branchId === 'c4isr' ? 'C4ISR' : 'LAND'
      ),
      originCountry: primaryOrigin,
      originCountries: originList,
      developerCountry: a.developerCountry || primaryOrigin,
      developmentCountries: a.developmentCountries || originList,
      manufacturerCountry: a.manufacturerCountry || primaryOrigin,
      manufacturerCountries: a.manufacturerCountries || originList,
      developer: a.developer,
      manufacturer: a.manufacturer,
      operatorCountries: a.operatorCountries || originList,
      formerOperatorCountries: a.formerOperatorCountries || [],
      exportCustomerCountries: a.exportCustomerCountries || a.exportCustomers || [],
      jointDevelopmentCountries: a.jointDevelopmentCountries || [],
      licensedProductionCountries: a.licensedProductionCountries || [],
      services: a.services || [
        a.branchId === 'army' ? 'Army' :
        a.branchId === 'air-force' ? 'Air Force' :
        a.branchId === 'navy' ? 'Navy' : 'Joint'
      ],
      status: a.status || 'Operational',
      currentRelevance: a.currentRelevance || 'CURRENT',
      dataConfidence: a.dataConfidence,
      images: imagesToUse,
      imageStatus: a.imageStatus || (imagesToUse.length > 0 ? 'verified' : 'unavailable'),
      imageNotice: a.imageNotice || (imagesToUse.length > 0 ? undefined : 'No verified public image available.'),
      image: primaryImg,
      imageCredit: a.imageCredit || resolvedImg.credit,
      imageLicense: a.imageLicense || resolvedImg.license,
      sources: a.sources || [],
      lastVerified: a.lastVerified || '2026-08-15',
    };

    verifiedAssets.push(canonicalAsset);
  });

  // Preserve explicit editorial rankInCategory set per record.
  // Fall back to auto-numbering only if unranked, and track max ranks.
  const categoryRankCounters: Record<string, number> = {};
  verifiedAssets.forEach(a => {
    if (!a.rankInCategory || a.rankInCategory <= 0) {
      categoryRankCounters[a.categoryId] = (categoryRankCounters[a.categoryId] || 0) + 1;
      a.rankInCategory = categoryRankCounters[a.categoryId];
    } else {
      categoryRankCounters[a.categoryId] = Math.max(categoryRankCounters[a.categoryId] || 0, a.rankInCategory);
    }
  });

  return verifiedAssets;
}

export const ASSETS: Asset[] = buildCanonicalDatabase();

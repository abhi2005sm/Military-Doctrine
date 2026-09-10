import { ASSETS } from '../assets';
import { CATEGORIES } from '../categories';
import { BRANCHES } from '../branches';
import { validateCategoryGuardrail } from './categoryGuardrails';

export interface ValidationIssue {
  assetId: string;
  assetName: string;
  field: string;
  rule: string;
  value: string;
}

const FORBIDDEN_PATTERNS: { pattern: RegExp; description: string }[] = [
  { pattern: /System Mk-\d+/i, description: 'Fabricated "System Mk-X" designation' },
  { pattern: /Technical Platform/i, description: 'Synthetic "Technical Platform" suffix' },
  { pattern: /Standard Tactical Weapons Suite/i, description: 'Synthetic weapon suite specification' },
  { pattern: /High Output Defense Engine Array/i, description: 'Synthetic engine array specification' },
  { pattern: /Integrated Digital Fire-Control/i, description: 'Synthetic fire-control specification' },
  { pattern: /Defense Manufacturer/i, description: 'Synthetic defense manufacturer string' },
  { pattern: /Defense Developer/i, description: 'Synthetic defense developer string' },
  { pattern: /Operational Readiness: 98\.5%/i, description: 'Synthetic operational readiness metric' },
  { pattern: /Effective Scope: MBT-SPEC/i, description: 'Synthetic effective scope metric' },
];

export function validateCanonicalDatabase(): { passed: boolean; issues: ValidationIssue[]; totalAssets: number } {
  const issues: ValidationIssue[] = [];
  const seenIds = new Set<string>();
  const assetIdSet = new Set(ASSETS.map(a => a.id));

  const categoryIdSet = new Set(CATEGORIES.map(c => c.id));

  // --- CHECK RULE 2: BRANCH ASSET COUNT INTEGRITY ---
  Object.keys(BRANCHES).forEach(branchId => {
    const branch = BRANCHES[branchId];
    const liveCount = ASSETS.filter(a => a.branchId === branchId).length;
    if (branch.assetCount !== liveCount) {
      issues.push({
        assetId: `branch:${branchId}`,
        assetName: branch.name,
        field: 'assetCount',
        rule: 'Branch Asset Count Mismatch',
        value: `Reported assetCount (${branch.assetCount}) does not match live count (${liveCount})`,
      });
    }
  });

  ASSETS.forEach(asset => {
    // 1. Check duplicate IDs
    if (seenIds.has(asset.id)) {
      issues.push({
        assetId: asset.id,
        assetName: asset.name,
        field: 'id',
        rule: 'Duplicate Asset ID',
        value: asset.id,
      });
    }
    seenIds.add(asset.id);

    // 2. Check category existence
    if (!categoryIdSet.has(asset.categoryId)) {
      issues.push({
        assetId: asset.id,
        assetName: asset.name,
        field: 'categoryId',
        rule: 'Invalid / Mismatched Category ID',
        value: `Category '${asset.categoryId}' not found in CATEGORIES`,
      });
    }

    // --- CHECK RULE 1: FAKE IMAGE ATTRIBUTION ---
    if (asset.images && asset.images.length > 0) {
      asset.images.forEach((img, idx) => {
        if (img.url && img.url.includes('unsplash.com') && img.credit && /u\.s\.|photo by|navy photo|air force photo|army photo/i.test(img.credit)) {
          issues.push({
            assetId: asset.id,
            assetName: asset.name,
            field: `images[${idx}]`,
            rule: 'Fake Photo Attribution',
            value: `Unsplash stock photo URL paired with official military credit: '${img.credit}'`,
          });
        }
        if (!img.imageType) {
          issues.push({
            assetId: asset.id,
            assetName: asset.name,
            field: `images[${idx}].imageType`,
            rule: 'Missing Image Type Classification',
            value: `Image URL '${img.url}' missing explicit imageType field`,
          });
        }
      });
    }

    // --- CHECK RULE 3: MISSING dataConfidence / originCountries ---
    if (!asset.dataConfidence) {
      issues.push({
        assetId: asset.id,
        assetName: asset.name,
        field: 'dataConfidence',
        rule: 'Missing Explicit Data Confidence',
        value: 'dataConfidence field is undefined or empty',
      });
    }

    if (!asset.originCountries || asset.originCountries.length === 0 || !asset.originCountry) {
      issues.push({
        assetId: asset.id,
        assetName: asset.name,
        field: 'originCountries',
        rule: 'Missing Origin Country Data',
        value: 'originCountries array or originCountry string is empty',
      });
    }

    // --- CHECK RULE 4: RANKING INTEGRITY ---
    if (asset.rankInCategory && asset.rankInCategory <= 3) {
      if (!asset.rankingRationale || asset.rankingRationale.trim() === '') {
        issues.push({
          assetId: asset.id,
          assetName: asset.name,
          field: 'rankingRationale',
          rule: 'Top-3 Rank Missing Ranking Rationale',
          value: `Rank ${asset.rankInCategory} asset missing explicit rankingRationale`,
        });
      }
    }

    // --- CHECK RULE 5: CATEGORY CLASSIFICATION GUARDRAILS ---
    const guardrailCheck = validateCategoryGuardrail(asset.categoryId, asset.name, asset.subcategory || '', asset.shortDescription || '');
    if (!guardrailCheck.valid) {
      issues.push({
        assetId: asset.id,
        assetName: asset.name,
        field: 'categoryId/subcategory',
        rule: 'Category Guardrail Violation',
        value: guardrailCheck.reason || 'Invalid classification for category',
      });
    }

    // --- CHECK RULE 6: RELATIONSHIP INTEGRITY ---
    if (asset.relatedAssetIds) {
      asset.relatedAssetIds.forEach(relId => {
        if (!assetIdSet.has(relId)) {
          issues.push({
            assetId: asset.id,
            assetName: asset.name,
            field: 'relatedAssetIds',
            rule: 'Orphaned Relationship ID',
            value: `Referenced asset ID '${relId}' does not exist in ASSETS`,
          });
        }
      });
    }

    if (asset.relationships) {
      const relObj = asset.relationships;
      const allRelIds = [
        ...(relObj.radarIds || []),
        ...(relObj.missileIds || []),
        ...(relObj.c4isrIds || []),
        ...(relObj.airDefenceIds || []),
      ];
      allRelIds.forEach(relId => {
        if (!assetIdSet.has(relId)) {
          issues.push({
            assetId: asset.id,
            assetName: asset.name,
            field: 'relationships',
            rule: 'Orphaned System Relationship ID',
            value: `Referenced system ID '${relId}' does not exist in ASSETS`,
          });
        }
      });
    }

    // Stringify entire record to run regex pattern checks
    const fullText = JSON.stringify(asset);
    FORBIDDEN_PATTERNS.forEach(({ pattern, description }) => {
      if (pattern.test(fullText)) {
        issues.push({
          assetId: asset.id,
          assetName: asset.name,
          field: 'record',
          rule: description,
          value: fullText.slice(0, 100) + '...',
        });
      }
    });

    // Check name integrity
    if (!asset.name || asset.name.trim() === '') {
      issues.push({
        assetId: asset.id,
        assetName: asset.name || 'UNKNOWN',
        field: 'name',
        rule: 'Empty Primary Name',
        value: asset.name,
      });
    }

    // Check real designation integrity
    if (asset.officialDesignation && /System Mk-/i.test(asset.officialDesignation)) {
      issues.push({
        assetId: asset.id,
        assetName: asset.name,
        field: 'officialDesignation',
        rule: 'Synthetic Official Designation',
        value: asset.officialDesignation,
      });
    }
  });

  // --- CHECK RULE 7: DUPLICATE PLATFORM CHECK ---
  const normalizedNames = new Map<string, string>();
  ASSETS.forEach(asset => {
    const norm = asset.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (normalizedNames.has(norm)) {
      issues.push({
        assetId: asset.id,
        assetName: asset.name,
        field: 'name',
        rule: 'Near-Duplicate Platform Record',
        value: `Asset '${asset.name}' (${asset.id}) overlaps with '${normalizedNames.get(norm)}'`,
      });
    } else {
      normalizedNames.set(norm, asset.id);
    }
  });

  const passed = issues.length === 0;

  return {
    passed,
    issues,
    totalAssets: ASSETS.length,
  };
}

// Run standalone validation if invoked via CLI
if (require.main === module) {
  const result = validateCanonicalDatabase();
  console.log('====================================================');
  console.log('   GLOBAL MILITARY DATABASE CANONICAL AUDIT TEST    ');
  console.log('====================================================');
  console.log(`Total Canonical Assets Audited: ${result.totalAssets}`);
  console.log(`Audit Status: ${result.passed ? 'PASSED (100% Verified)' : 'FAILED'}`);
  console.log(`Total Issues Detected: ${result.issues.length}`);

  if (!result.passed) {
    console.error('\nVALIDATION FAILURES DETECTED:');
    result.issues.forEach((iss, idx) => {
      console.error(`${idx + 1}. [${iss.assetId}] Field '${iss.field}': Violation of '${iss.rule}' -> ${iss.value}`);
    });
    process.exit(1);
  } else {
    console.log('\nSUCCESS: ZERO synthetic military systems, fake photo attributions, or validation violations found.');
    process.exit(0);
  }
}

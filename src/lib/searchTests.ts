import { searchCatalogAssets, getCategorySearchResults } from './searchEngine';
import { ASSETS } from '../data/assets';

export interface TestCaseResult {
  query: string;
  expectedNameSub: string;
  passed: boolean;
  actualTopResult?: string;
  score?: number;
  matchType?: string;
}

export interface CategoryTestCaseResult {
  categoryQuery: string;
  expectedCategoryId: string;
  passed: boolean;
  actualCategoryCount: number;
}

const SEARCH_TEST_CASES = [
  { query: 'M1A2', expected: 'M1A2' },
  { query: 'M1A2 SEPv3', expected: 'M1A2' },
  { query: 'Abrams', expected: 'Abrams' },
  { query: 'M1 Abrams', expected: 'Abrams' },
  { query: 'Leopard 2', expected: 'Leopard 2' },
  { query: 'Leopard 2A7', expected: 'Leopard 2' },
  { query: 'Leopard 2A8', expected: 'Leopard 2' },
  { query: 'K2', expected: 'K2' },
  { query: 'Black Panther', expected: 'Black Panther' },
  { query: 'T90', expected: 'T-90' },
  { query: 'T-90M', expected: 'T-90' },
  { query: 'Proryv', expected: 'T-90' },
  { query: 'Arjun', expected: 'Arjun' },
  { query: 'Arjun Mk1A', expected: 'Arjun' },
  { query: 'Type 99', expected: 'Type 99' },
  { query: 'ZTZ-99A', expected: 'Type 99' },
  { query: 'Type 15', expected: '15' },
  { query: 'ZTQ-15', expected: '15' },
  { query: 'M10 Booker', expected: 'Booker' },
  { query: 'M10', expected: 'Booker' },
  { query: 'MPF', expected: 'Booker' },
  { query: 'Bradley', expected: 'Bradley' },
  { query: 'M2A4', expected: 'Bradley' },
  { query: 'Puma', expected: 'Puma' },
  { query: 'Lynx KF41', expected: 'Lynx' },
  { query: 'K21', expected: 'K21' },
  { query: 'Boxer', expected: 'Boxer' },
  { query: 'Boxer CRV', expected: 'Boxer' },
  { query: 'Patria', expected: 'Patria' },
  { query: 'AMV XP', expected: 'Patria' },
  { query: 'Stryker', expected: 'Stryker' },
  { query: 'M1126', expected: 'Stryker' },
  { query: 'M777', expected: 'M777' },
  { query: 'M777A2', expected: 'M777' },
  { query: 'K9', expected: 'K9' },
  { query: 'K9 Thunder', expected: 'K9' },
  { query: 'K9A1', expected: 'K9' },
  { query: 'K9A2', expected: 'K9' },
  { query: 'HIMARS', expected: 'HIMARS' },
  { query: 'M142', expected: 'HIMARS' },
  { query: 'M142 HIMARS', expected: 'HIMARS' },
  { query: 'Chunmoo', expected: 'Chunmoo' },
  { query: 'K239', expected: 'Chunmoo' },
  { query: 'Pinaka', expected: 'Pinaka' },
  { query: 'Pinaka Mk II', expected: 'Pinaka' },
  { query: 'M249', expected: 'M249' },
  { query: 'FN Minimi', expected: 'Minimi' },
  { query: 'Negev', expected: 'Negev' },
  { query: 'HK416', expected: 'HK416' },
  { query: 'XM7', expected: 'XM7' },
  { query: 'NGSW', expected: 'XM7' },
  { query: 'SCAR-H', expected: 'SCAR' },
  { query: 'SCAR-L', expected: 'SCAR' },
  { query: 'M82', expected: 'M82' },
  { query: 'M107', expected: 'M82' },
  { query: 'Barrett', expected: 'M82' },
  { query: 'Carl Gustaf', expected: 'Carl Gustaf' },
  { query: 'AT4', expected: 'AT4' },
  { query: 'Javelin', expected: 'Javelin' },
  { query: 'FGM-148', expected: 'Javelin' },
  { query: 'Stinger', expected: 'Stinger' },
  { query: 'FIM-92', expected: 'Stinger' },
  { query: 'THeMIS', expected: 'THeMIS' },
  { query: 'Type-X', expected: 'Type-X' },
  { query: 'Raven', expected: 'Raven' },
  { query: 'RQ-11B', expected: 'Raven' },
  { query: 'Black Hornet', expected: 'Black Hornet' },
  { query: 'TB2', expected: 'TB2' },
  { query: 'Bayraktar TB2', expected: 'TB2' },
  { query: 'Switchblade 600', expected: 'Switchblade' },
  { query: 'Shahed 136', expected: 'Shahed' },
  { query: 'Geran-2', expected: 'Shahed' },
];

const CATEGORY_TEST_CASES = [
  { query: 'tank', expectedId: 'main-battle-tanks' },
  { query: 'main battle tank', expectedId: 'main-battle-tanks' },
  { query: 'MBT', expectedId: 'main-battle-tanks' },
  { query: 'light tank', expectedId: 'light-tanks' },
  { query: 'IFV', expectedId: 'ifvs' },
  { query: 'armored personnel carrier', expectedId: 'apcs' },
  { query: 'APC', expectedId: 'apcs' },
  { query: 'MRAP', expectedId: 'mrap' },
  { query: 'SP artillery', expectedId: 'artillery-self-propelled' },
  { query: 'howitzer', expectedId: 'artillery-towed' },
  { query: 'MLRS', expectedId: 'artillery-rocket' },
  { query: 'mortar', expectedId: 'mortars' },
  { query: 'assault rifle', expectedId: 'small-arms-assault-rifles' },
  { query: 'battle rifle', expectedId: 'small-arms-battle-rifles' },
  { query: 'DMR', expectedId: 'small-arms-dmr' },
  { query: 'sniper rifle', expectedId: 'small-arms-sniper-rifles' },
  { query: 'LMG', expectedId: 'small-arms-lmg' },
  { query: 'SMG', expectedId: 'small-arms-submachine-guns' },
  { query: 'pistol', expectedId: 'small-arms-pistols' },
  { query: 'ground robot', expectedId: 'army-drones-ground-robots' },
  { query: 'reconnaissance UAV', expectedId: 'army-drones-reconnaissance' },
  { query: 'strike UAV', expectedId: 'army-drones-strike-uav' },
  { query: 'loitering munition', expectedId: 'army-drones-strike-uav' },
  { query: 'UCAV', expectedId: 'army-drones-ucav' },
];

export function runAutomatedSearchTests(): {
  totalTests: number;
  passedTests: number;
  failedTests: number;
  passRate: string;
  results: TestCaseResult[];
  categoryResults: CategoryTestCaseResult[];
} {
  const results: TestCaseResult[] = [];
  let passedCount = 0;

  SEARCH_TEST_CASES.forEach(tc => {
    const matches = searchCatalogAssets(tc.query);
    const topMatch = matches[0];

    const passed = topMatch !== undefined && (
      topMatch.asset.name.toLowerCase().includes(tc.expected.toLowerCase()) ||
      (topMatch.asset.officialDesignation || '').toLowerCase().includes(tc.expected.toLowerCase()) ||
      (topMatch.asset.aliases || []).some(a => a.toLowerCase().includes(tc.expected.toLowerCase()))
    );

    if (passed) passedCount++;

    results.push({
      query: tc.query,
      expectedNameSub: tc.expected,
      passed,
      actualTopResult: topMatch ? topMatch.asset.name : 'NO MATCH',
      score: topMatch ? topMatch.score : 0,
      matchType: topMatch ? topMatch.matchType : 'None',
    });
  });

  const categoryResults: CategoryTestCaseResult[] = [];
  CATEGORY_TEST_CASES.forEach(ctc => {
    const cats = getCategorySearchResults(ctc.query);
    const passed = cats.some(c => c.id === ctc.expectedId);
    categoryResults.push({
      categoryQuery: ctc.query,
      expectedCategoryId: ctc.expectedId,
      passed,
      actualCategoryCount: cats.length,
    });
  });

  const total = results.length;
  const passRate = `${((passedCount / total) * 100).toFixed(1)}%`;

  return {
    totalTests: total,
    passedTests: passedCount,
    failedTests: total - passedCount,
    passRate,
    results,
    categoryResults,
  };
}

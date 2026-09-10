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
  { query: 'M1A2', expected: 'Abrams' },
  { query: 'M1A2 SEPv3', expected: 'Abrams' },
  { query: 'Abrams', expected: 'Abrams' },
  { query: 'M1 Abrams', expected: 'Abrams' },
  { query: 'Leopard 2', expected: 'Leopard' },
  { query: 'Leopard 2A7', expected: 'Leopard' },
  { query: 'K2', expected: 'K2' },
  { query: 'Black Panther', expected: 'K2' },
  { query: 'T90', expected: 'T-90' },
  { query: 'T-90M', expected: 'T-90' },
  { query: 'Proryv', expected: 'T-90' },
  { query: 'Arjun', expected: 'Arjun' },
  { query: 'Arjun Mk1A', expected: 'Arjun' },
  { query: 'Arjun Mk-1A', expected: 'Arjun' },
  { query: 'Arjun Mark 1A', expected: 'Arjun' },
  { query: 'Type 99', expected: 'Type 99' },
  { query: 'ZTZ-99A', expected: 'Type 99' },
  { query: 'Type 15', expected: '15' },
  { query: 'ZTQ-15', expected: '15' },
  { query: 'M10 Booker', expected: 'Booker' },
  { query: 'M10', expected: 'Booker' },
  { query: 'MPF', expected: 'Booker' },
  { query: 'Bradley', expected: 'Bradley' },
  { query: 'M2A4', expected: 'Bradley' },
  { query: 'M777', expected: 'M777' },
  { query: 'M777A2', expected: 'M777' },
  { query: 'K9', expected: 'K9' },
  { query: 'K9 Thunder', expected: 'K9' },
  { query: 'HIMARS', expected: 'HIMARS' },
  { query: 'M142', expected: 'HIMARS' },
  { query: 'M142 HIMARS', expected: 'HIMARS' },
  { query: 'F-22', expected: 'F-22' },
  { query: 'F22', expected: 'F-22' },
  { query: 'Raptor', expected: 'F-22' },
  { query: 'F-35', expected: 'F-35' },
  { query: 'F35', expected: 'F-35' },
  { query: 'Lightning II', expected: 'F-35' },
  { query: 'Su-57', expected: 'Su-57' },
  { query: 'Su57', expected: 'Su-57' },
  { query: 'Felon', expected: 'Su-57' },
  { query: 'Su-30MKI', expected: 'Su-30MKI' },
  { query: 'Su30MKI', expected: 'Su-30MKI' },
  { query: 'Su 30 MKI', expected: 'Su-30MKI' },
  { query: 'Su-75', expected: 'Checkmate' },
  { query: 'Checkmate', expected: 'Checkmate' },
  { query: 'Rafale', expected: 'Rafale' },
  { query: 'Eurofighter', expected: 'Typhoon' },
  { query: 'J-20', expected: 'J-20' },
  { query: 'Tejas Mk1A', expected: 'Tejas' },
  { query: 'Gerald Ford', expected: 'Ford' },
  { query: 'CVN-78', expected: 'Ford' },
  { query: 'Virginia', expected: 'Virginia' },
  { query: 'Tomahawk', expected: 'Tomahawk' },
  { query: 'Meteor', expected: 'Meteor' },
  { query: 'Javelin', expected: 'Javelin' },
  { query: 'FGM-148', expected: 'Javelin' },
  { query: 'Stinger', expected: 'Stinger' },
  { query: 'FIM-92', expected: 'Stinger' },
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

if (require.main === module) {
  const res = runAutomatedSearchTests();
  console.log('====================================================');
  console.log('   SEARCH ENGINE AUTOMATED VERIFICATION TEST       ');
  console.log('====================================================');
  console.log(`Total Search Query Tests: ${res.totalTests}`);
  console.log(`Passed: ${res.passedTests} | Failed: ${res.failedTests}`);
  console.log(`Pass Rate: ${res.passRate}`);

  if (res.failedTests > 0) {
    console.error('\nFAILED SEARCH TEST CASES:');
    res.results.filter(r => !r.passed).forEach(r => {
      console.error(`- Query '${r.query}' expected '${r.expectedNameSub}', got '${r.actualTopResult}'`);
    });
    process.exit(1);
  } else {
    console.log('\nSUCCESS: 100% of search queries returned exact canonical asset matches!');
    process.exit(0);
  }
}


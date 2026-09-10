export interface CategoryRule {
  categoryId: string;
  allowedKeywords?: string[];
  forbiddenKeywords?: string[];
}

export const CATEGORY_GUARDRAILS: Record<string, CategoryRule> = {
  'submarines': {
    categoryId: 'submarines',
    allowedKeywords: ['ssn', 'ssbn', 'ssk', 'aip', 'submarine', 'subsurface', 'boat'],
    forbiddenKeywords: ['cruiser', 'destroyer', 'frigate', 'corvette', 'aircraft carrier', 'howitzer', 'fighter'],
  },
  'fighter-aircraft': {
    categoryId: 'fighter-aircraft',
    allowedKeywords: ['fighter', 'air superiority', 'multirole', 'interceptor', 'stealth', 'jet', 'combat aircraft'],
    forbiddenKeywords: ['helicopter', 'gunship', 'bomber', 'uav', 'ucav', 'tanker', 'transport howitzer'],
  },
  'destroyers': {
    categoryId: 'destroyers',
    allowedKeywords: ['destroyer', 'ddg', 'guided-missile destroyer', 'large destroyer', 'warship'],
    forbiddenKeywords: ['submarine', 'aircraft carrier', 'ssn', 'ssbn', 'howitzer', 'fighter'],
  },
  'aircraft-carriers': {
    categoryId: 'aircraft-carriers',
    allowedKeywords: ['carrier', 'aircraft carrier', 'supercarrier', 'catobar', 'stobar', 'stovl', 'cvn'],
    forbiddenKeywords: ['submarine', 'destroyer', 'frigate', 'corvette', 'howitzer', 'tank'],
  },
  'bombers': {
    categoryId: 'bombers',
    allowedKeywords: ['bomber', 'strategic bomber', 'stealth bomber', 'heavy strike'],
    forbiddenKeywords: ['fighter', 'helicopter', 'submarine', 'tank', 'howitzer'],
  },
  'main-battle-tanks': {
    categoryId: 'main-battle-tanks',
    allowedKeywords: ['mbt', 'main battle tank', 'heavy mbt', 'modern mbt', 'tank'],
    forbiddenKeywords: ['howitzer', 'sph', 'apc', 'ifv', 'helicopter', 'submarine', 'frigate'],
  },
  'artillery-self-propelled': {
    categoryId: 'artillery-self-propelled',
    allowedKeywords: ['sph', 'self-propelled', 'howitzer', 'artillery'],
    forbiddenKeywords: ['main battle tank', 'mbt', 'fighter', 'submarine', 'carrier'],
  },
  'ifvs': {
    categoryId: 'ifvs',
    allowedKeywords: ['ifv', 'infantry fighting vehicle', 'tracked ifv', 'wheeled ifv'],
    forbiddenKeywords: ['main battle tank', 'mbt', 'submarine', 'aircraft carrier'],
  },
  'apcs': {
    categoryId: 'apcs',
    allowedKeywords: ['apc', 'armoured personnel carrier', 'troop transport'],
    forbiddenKeywords: ['main battle tank', 'mbt', 'submarine', 'aircraft carrier'],
  },
};

export function validateCategoryGuardrail(categoryId: string, name: string, subcategory: string, shortDescription: string): { valid: boolean; reason?: string } {
  const rule = CATEGORY_GUARDRAILS[categoryId];
  if (!rule) return { valid: true };

  const textToScan = `${name} ${subcategory} ${shortDescription}`.toLowerCase();

  if (rule.forbiddenKeywords) {
    for (const forbidden of rule.forbiddenKeywords) {
      if (textToScan.includes(forbidden)) {
        return {
          valid: false,
          reason: `Asset text '${name}' contains forbidden term '${forbidden}' for category '${categoryId}'`,
        };
      }
    }
  }

  return { valid: true };
}

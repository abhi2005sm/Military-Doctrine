import { Branch } from '../types/catalog';
import { ASSETS } from './assets';
import { CATEGORIES } from './categories';

interface RawBranchDef {
  id: Branch['id'];
  name: string;
  code: string;
  subtitle: string;
  iconName: string;
  description: string;
  primaryRole: string;
  targetCount: number;
  featuredAssetIds: string[];
}

/**
 * featuredAssetIds below were audited against the live asset IDs that
 * actually exist in army.ts / airforce.ts / navy.ts / missiles.ts /
 * airDefence.ts / radar.ts / electronicWarfare.ts / unmanned.ts / c4isr.ts
 * as of this fix. Every ID listed here resolves to a real record.
 *
 * Previously this list contained several orphaned / misspelled IDs that
 * pointed to nothing (e.g. 'df26', 'tomahawk', 'aim120d', 'meteor',
 * 'spy-6-aesa', 'nebo-m', 'ibcs-c2', 'bctm-net', 'satcom-ultra',
 * 'tactical-mesh-c4', 'samshit-ew', 'scorpion-ew', 'dircom-suite',
 * 'switchblade-600', 'ea18g-growler', 'type-055-destroyer') — those have
 * been corrected or removed. c4isr and electronic-warfare currently only
 * have 2–4 real records each, so their featured lists are intentionally
 * short rather than padded with non-existent placeholders. Add more IDs
 * here only once the corresponding real record exists in its sector file.
 */
const RAW_BRANCHES: Record<string, RawBranchDef> = {
  army: {
    id: 'army',
    name: 'Army / Land Forces',
    code: 'ARM',
    subtitle: 'Main Battle Tanks, Armoured Vehicles, Artillery, Guns & Infantry Systems',
    iconName: 'ShieldAlert',
    description: 'Comprehensive inventory of land combat systems including main battle tanks, light tanks, IFVs, APCs, MRAPs, towed and self-propelled artillery, MLRS, mortars, guns, small arms, and ground robotics.',
    primaryRole: 'Land Domain Superiority & Tactical Surface Operations',
    targetCount: 205,
    featuredAssetIds: ['m1a2-abrams', 'leopard-2a7', 'k2-black-panther', 'm2a4-bradley', 'm777-howitzer', 'himars'],
  },
  'air-force': {
    id: 'air-force',
    name: 'Air Force / Air Component',
    code: 'AF',
    subtitle: 'Fighters, Interceptors, Attack Jets, Strategic Bombers, AWACS & Tankers',
    iconName: 'Plane',
    description: 'Aerial warfare assets spanning stealth air superiority fighters, multirole combat jets, heavy interceptors, attack aircraft, strategic bombers, AWACS, EW support, tankers, and tactical transports.',
    primaryRole: 'Air Dominance, Global Precision Strike & Aerial Reconnaissance',
    targetCount: 117,
    featuredAssetIds: ['f35-lightning-ii', 'f22-raptor', 'rafale-c', 'b2-spirit', 'su57-felon', 'eurofighter-typhoon'],
  },
  navy: {
    id: 'navy',
    name: 'Navy / Marine Forces',
    code: 'NAV',
    subtitle: 'Aircraft Carriers, Destroyers, Cruisers, Frigates, Submarines & Fleet Assets',
    iconName: 'Anchor',
    description: 'Naval fleet assets encompassing nuclear aircraft carriers, Aegis guided-missile destroyers, cruisers, ASW frigates, corvettes, SSBN/SSN/SSK attack submarines, fleet support, naval aircraft, and torpedoes.',
    primaryRole: 'Maritime Domain Awareness, Sea Control & Power Projection',
    targetCount: 203,
    featuredAssetIds: ['gerald-r-ford', 'arleigh-burke-flight-iii', 'virginia-class-ssn', 'type055-destroyer', 'sejong-great'],
  },
  missiles: {
    id: 'missiles',
    name: 'Global Missiles',
    code: 'MSL',
    subtitle: 'Surface-to-Surface, SAM, Air-to-Air, Cruise, Anti-Ship & Anti-Tank Missiles',
    iconName: 'Crosshair',
    description: 'Global sector housing strategic ballistic missiles, hypersonic weapons, BVR air-to-air missiles, anti-ship cruise missiles, standoff land attack weapons, and infantry anti-tank guided missiles.',
    primaryRole: 'Standoff Kinetic Precision Strike & Air Interception Across All Domains',
    targetCount: 150,
    featuredAssetIds: ['brahmos-missile', 'iskander-m', 'tomahawk-cruise-missile', 'aim120-amraam', 'meteor-missile', 'fgm148-javelin'],
  },
  'air-defence': {
    id: 'air-defence',
    name: 'Global Air Defence',
    code: 'AD',
    subtitle: 'VSHORAD, SHORAD, MRAD, LRAD, High Altitude, BMD & Counter-UAS',
    iconName: 'RadioTower',
    description: 'Integrated point and area air defense systems, anti-ballistic missile batteries, multi-tiered SAM networks, and counter-unmanned aerial strike platforms.',
    primaryRole: 'Integrated Air & Ballistic Missile Defence',
    targetCount: 80,
    featuredAssetIds: ['patriot-pac3', 's400-triumf', 'thaad', 'iron-dome', 'nasams3'],
  },
  radar: {
    id: 'radar',
    name: 'Global Radar & Sensors',
    code: 'RAD',
    subtitle: 'Air Surveillance, Fire-Control, AESA Arrays, Airborne & Counter-Battery',
    iconName: 'Radar',
    description: 'Ground-based air surveillance, fighter GaN AESA fire-control radars, AWACS arrays, naval multifunction radars, counter-battery locators, and passive sensor arrays.',
    primaryRole: 'Electromagnetic Sensing, Early Warning & Targeting',
    targetCount: 70,
    featuredAssetIds: ['an-apg-81', 'an-spy-6', 'an-tpy-2', 'giraffe-1x'],
  },
  c4isr: {
    id: 'c4isr',
    name: 'Global C4ISR & Command',
    code: 'C4I',
    subtitle: 'Command & Control, Battle Management, Data Links, Comms & Sensor Fusion',
    iconName: 'Cpu',
    description: 'Joint tactical data links, battlefield management systems, satellite communication networks, strategic intelligence processing hubs, and resilient command architectures.',
    primaryRole: 'Multi-Domain Network Integration & Command Connectivity',
    targetCount: 50,
    featuredAssetIds: ['link-16', 'ibcs-system'],
  },
  'electronic-warfare': {
    id: 'electronic-warfare',
    name: 'Global Electronic Warfare',
    code: 'EW',
    subtitle: 'Electronic Support, Electronic Attack, Protection, ESM, ECM & SIGINT',
    iconName: 'Zap',
    description: 'Airborne and ground-based radar jammers, communications interceptors, ELINT signal intelligence suites, directional infrared countermeasures (DIRCM), and cyber-electronic warfare.',
    primaryRole: 'Electromagnetic Spectrum Superiority & Offensive/Defensive Jamming',
    targetCount: 50,
    featuredAssetIds: ['ea-18g-growler', 'an-alq-249', 'krasukha-4', 'an-slq-32v7'],
  },
  unmanned: {
    id: 'unmanned',
    name: 'Global Unmanned Systems',
    code: 'UMS',
    subtitle: 'Recon UAV, UCAV, HALE, MALE, Loitering Munitions, UGV, USV & UUV',
    iconName: 'Bot',
    description: 'Unmanned aerial vehicles (UAV), stealth UCAVs, loitering munition kamikaze drones, unmanned ground combat vehicles (UGV), autonomous surface vessels (USV), and underwater vehicles (UUV).',
    primaryRole: 'Autonomous & Remotely Piloted Multi-Domain Operations',
    targetCount: 50,
    featuredAssetIds: ['bayraktar-tb2', 'mq9a-reaper', 'orca-xluuv', 'thermite-ugv', 'shahed-136'],
  },
};

export function getBranchAssetCount(branchId: string): number {
  return ASSETS.filter(a => a.branchId === branchId).length;
}

export function getBranchCategoryCount(branchId: string): number {
  return CATEGORIES.filter(c => c.branchId === branchId).length;
}

/**
 * Filters featuredAssetIds down to IDs that actually resolve to a live
 * asset record. This is a safety net on top of the manual audit above —
 * if a sector file ever drops an asset, the branch page will silently
 * stop showing it as featured instead of rendering a broken card.
 */
function getValidFeaturedIds(ids: string[]): string[] {
  const liveIds = new Set(ASSETS.map(a => a.id));
  return ids.filter(id => liveIds.has(id));
}

export function buildDynamicBranches(): Record<string, Branch> {
  const result: Record<string, Branch> = {};
  Object.keys(RAW_BRANCHES).forEach(id => {
    const raw = RAW_BRANCHES[id];
    const liveAssetCount = getBranchAssetCount(id);
    const liveCategoryCount = getBranchCategoryCount(id);
    result[id] = {
      ...raw,
      featuredAssetIds: getValidFeaturedIds(raw.featuredAssetIds),
      assetCount: liveAssetCount,
      categoryCount: liveCategoryCount,
      targetCount: raw.targetCount,
      actualCount: liveAssetCount,
      approvedCount: liveAssetCount,
    };
  });
  return result;
}

export const BRANCHES: Record<string, Branch> = buildDynamicBranches();
export const BRANCH_LIST: Branch[] = Object.values(BRANCHES);

export type CountryTier = 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Tier 4' | 'Tier 5' | 'Other Regional';

export type WorldRegion = 'North America' | 'Europe' | 'Asia-Pacific' | 'Middle East' | 'Latin America' | 'Africa';

export interface CountryProfile {
  id: string;
  name: string;
  flagEmoji: string;
  region: WorldRegion;
  priorityTier: CountryTier;
  tierDescription: string;
  defenceIndustryFocus: string[];
}

export const COUNTRY_REGISTRY: CountryProfile[] = [
  // TIER 1 — GLOBAL MILITARY / TECHNOLOGY LEADERS
  {
    id: 'united-states',
    name: 'United States',
    flagEmoji: '🇺🇸',
    region: 'North America',
    priorityTier: 'Tier 1',
    tierDescription: 'Global Technology & Military Leader',
    defenceIndustryFocus: ['Stealth Aviation', 'Naval Supercarriers', 'Precision Missiles', 'C4ISR', 'Nuclear Submarines'],
  },
  {
    id: 'china',
    name: 'China',
    flagEmoji: '🇨🇳',
    region: 'Asia-Pacific',
    priorityTier: 'Tier 1',
    tierDescription: 'Global Technology & Military Leader',
    defenceIndustryFocus: ['Hypersonic Strike', 'Naval Shipbuilding', '5th Gen Fighters', 'Long-Range SAM', 'Drone Swarms'],
  },
  {
    id: 'russia',
    name: 'Russia',
    flagEmoji: '🇷🇺',
    region: 'Europe',
    priorityTier: 'Tier 1',
    tierDescription: 'Global Technology & Military Leader',
    defenceIndustryFocus: ['Strategic Missiles', 'Air Defence Systems', 'Armored Vehicles', 'Submarines', 'Electronic Warfare'],
  },
  {
    id: 'india',
    name: 'India',
    flagEmoji: '🇮🇳',
    region: 'Asia-Pacific',
    priorityTier: 'Tier 1',
    tierDescription: 'Global Technology & Military Leader',
    defenceIndustryFocus: ['Supersonic Missiles', 'Air Defence', 'Indigenous Aircraft Carrier', 'Ballistic Missiles', 'Armored Systems'],
  },

  // TIER 2 — MAJOR EUROPEAN DEFENCE POWERS
  {
    id: 'france',
    name: 'France',
    flagEmoji: '🇫🇷',
    region: 'Europe',
    priorityTier: 'Tier 2',
    tierDescription: 'Major European Defence Power',
    defenceIndustryFocus: ['Multirole Fighters (Rafale)', 'Nuclear Submarines & Frigates', 'Missiles (Aster/Exocet)', 'Self-Propelled Artillery'],
  },
  {
    id: 'united-kingdom',
    name: 'United Kingdom',
    flagEmoji: '🇬🇧',
    region: 'Europe',
    priorityTier: 'Tier 2',
    tierDescription: 'Major European Defence Power',
    defenceIndustryFocus: ['Advanced Naval Frigates', 'Nuclear Attack Submarines', 'BVR Missiles (Meteor)', 'Radar & Avionics'],
  },
  {
    id: 'germany',
    name: 'Germany',
    flagEmoji: '🇩🇪',
    region: 'Europe',
    priorityTier: 'Tier 2',
    tierDescription: 'Major European Defence Power',
    defenceIndustryFocus: ['Main Battle Tanks (Leopard 2)', 'Self-Propelled Howitzers (PzH 2000)', 'AIP Submarines', 'Radar Systems (TRML-4D)'],
  },
  {
    id: 'italy',
    name: 'Italy',
    flagEmoji: '🇮🇹',
    region: 'Europe',
    priorityTier: 'Tier 2',
    tierDescription: 'Major European Defence Power',
    defenceIndustryFocus: ['Naval Vessels (FREMM)', 'Naval Guns (Oto Melara)', 'Military Helicopters (Leonardo)', 'Air Defence'],
  },
  {
    id: 'spain',
    name: 'Spain',
    flagEmoji: '🇪🇸',
    region: 'Europe',
    priorityTier: 'Tier 2',
    tierDescription: 'Major European Defence Power',
    defenceIndustryFocus: ['Aegis Frigates (F100)', 'Tactical Transport Aircraft (C295)', 'Armored Infantry Vehicles', 'Multinational Aviation'],
  },
  {
    id: 'sweden',
    name: 'Sweden',
    flagEmoji: '🇸🇪',
    region: 'Europe',
    priorityTier: 'Tier 2',
    tierDescription: 'Major European Defence Power',
    defenceIndustryFocus: ['Gripen Fighters', 'Gotland AIP Submarines', 'CV90 IFV', 'NLAW ATGM & Airborne EW'],
  },
  {
    id: 'poland',
    name: 'Poland',
    flagEmoji: '🇵🇱',
    region: 'Europe',
    priorityTier: 'Tier 2',
    tierDescription: 'Major European Defence Power',
    defenceIndustryFocus: ['Krab Artillery', 'Borsuk IFV', 'Poprad SHORAD', 'Warmate Loitering Munitions'],
  },

  // Additional European Powers
  {
    id: 'netherlands',
    name: 'Netherlands',
    flagEmoji: '🇳🇱',
    region: 'Europe',
    priorityTier: 'Tier 2',
    tierDescription: 'European Defence Contributor',
    defenceIndustryFocus: ['Naval Radar (Thales SMART-L/APAR)', 'Boxer IFV Co-Dev', 'De Zeven Provinciën Frigates'],
  },
  {
    id: 'norway',
    name: 'Norway',
    flagEmoji: '🇳🇴',
    region: 'Europe',
    priorityTier: 'Tier 2',
    tierDescription: 'European Defence Contributor',
    defenceIndustryFocus: ['Naval Strike Missile (NSM)', 'NASAMS Air Defence', 'Penguin ASM'],
  },
  {
    id: 'finland',
    name: 'Finland',
    flagEmoji: '🇫🇮',
    region: 'Europe',
    priorityTier: 'Tier 2',
    tierDescription: 'European Defence Contributor',
    defenceIndustryFocus: ['Patria AMV 8x8', 'Coastal Defence', 'Artillery Systems'],
  },
  {
    id: 'denmark',
    name: 'Denmark',
    flagEmoji: '🇩🇰',
    region: 'Europe',
    priorityTier: 'Tier 2',
    tierDescription: 'European Defence Contributor',
    defenceIndustryFocus: ['Iver Huitfeldt Air Defence Frigates', 'Terma EW & Radar Subsystems'],
  },
  {
    id: 'greece',
    name: 'Greece',
    flagEmoji: '🇬🇷',
    region: 'Europe',
    priorityTier: 'Tier 2',
    tierDescription: 'European Defence Contributor',
    defenceIndustryFocus: ['Naval Corvettes/Frigates', 'Air Defence Operator & Systems Upgrade'],
  },
  {
    id: 'czechia',
    name: 'Czechia',
    flagEmoji: '🇨🇿',
    region: 'Europe',
    priorityTier: 'Tier 2',
    tierDescription: 'European Defence Contributor',
    defenceIndustryFocus: ['DANA/CAESAR Artillery', 'CZ Small Arms (BREN 2)', 'L-159 Attack Jet', 'VERA-NG Passive Radar'],
  },
  {
    id: 'ukraine',
    name: 'Ukraine',
    flagEmoji: '🇺🇦',
    region: 'Europe',
    priorityTier: 'Tier 2',
    tierDescription: 'European Defence Power',
    defenceIndustryFocus: ['Stugna-P ATGM', 'Neptune Anti-Ship Missile', 'BTR-4 APC', 'Bohdana SPH', 'Naval Drone Warfare'],
  },

  // TIER 3 — MAJOR ASIAN / INDO-PACIFIC POWERS
  {
    id: 'japan',
    name: 'Japan',
    flagEmoji: '🇯🇵',
    region: 'Asia-Pacific',
    priorityTier: 'Tier 3',
    tierDescription: 'Major Asian / Indo-Pacific Power',
    defenceIndustryFocus: ['Type 10 MBT', 'Maya DDG & Taigei Submarines', 'Kawasaki P-1 MPA & C-2 Transport', 'AESA Radar'],
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    flagEmoji: '🇰🇷',
    region: 'Asia-Pacific',
    priorityTier: 'Tier 3',
    tierDescription: 'Major Asian / Indo-Pacific Power',
    defenceIndustryFocus: ['K2 Black Panther', 'K9 Thunder SPH', 'FA-50 Light Fighter', 'KM-SAM (Cheongung II)', 'KF-21 Boramae'],
  },
  {
    id: 'australia',
    name: 'Australia',
    flagEmoji: '🇦🇺',
    region: 'Asia-Pacific',
    priorityTier: 'Tier 3',
    tierDescription: 'Major Asian / Indo-Pacific Power',
    defenceIndustryFocus: ['Bushmaster PMV', 'CEAFAR Phased Array Radar', 'Ghost Bat Autonomous Jet', 'Hobart DDG'],
  },
  {
    id: 'israel',
    name: 'Israel',
    flagEmoji: '🇮🇱',
    region: 'Middle East',
    priorityTier: 'Tier 3',
    tierDescription: 'Major Asian / Middle Eastern Power',
    defenceIndustryFocus: ['Iron Dome / David\'s Sling', 'Merkava Mk 4M MBT', 'Spike ATGM Family', 'Heron/Hermes UAVs', 'EL/M AESA Radars'],
  },
  {
    id: 'turkiye',
    name: 'Türkiye',
    flagEmoji: '🇹🇷',
    region: 'Middle East',
    priorityTier: 'Tier 3',
    tierDescription: 'Major Asian / Middle Eastern Power',
    defenceIndustryFocus: ['Bayraktar TB2 & Kızılelma UCAVs', 'Altay MBT', 'MILGEM Frigates', 'HISAR Air Defence', 'Atmaca AShM'],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flagEmoji: '🇸🇬',
    region: 'Asia-Pacific',
    priorityTier: 'Tier 3',
    tierDescription: 'Indo-Pacific Regional Industry',
    defenceIndustryFocus: ['Terrex 3 8x8 APC', 'Formidable Frigates', 'Bionix IFV', 'Ultimax 100 LMG'],
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    flagEmoji: '🇮🇩',
    region: 'Asia-Pacific',
    priorityTier: 'Tier 3',
    tierDescription: 'Indo-Pacific Regional Industry',
    defenceIndustryFocus: ['Harimau Kaplan Medium Tank', 'CN-235/C295 Co-Dev', 'Submarine Fleet Expansion'],
  },
  {
    id: 'pakistan',
    name: 'Pakistan',
    flagEmoji: '🇵🇰',
    region: 'Asia-Pacific',
    priorityTier: 'Tier 3',
    tierDescription: 'Indo-Pacific Regional Power',
    defenceIndustryFocus: ['JF-17 Thunder Fighter', 'Al-Khalid MBT', 'Babar LACM', 'Zarrar MBT Upgrade'],
  },
  {
    id: 'taiwan',
    name: 'Taiwan',
    flagEmoji: '🇹🇼',
    region: 'Asia-Pacific',
    priorityTier: 'Tier 3',
    tierDescription: 'Indo-Pacific Defence Industry',
    defenceIndustryFocus: ['Hsiung Feng III Supersonic ASM', 'Tien Kung III SAM', 'F-CK-1 Ching-kuo Jet', 'Indigenous Defense Submarine'],
  },

  // TIER 4 — MAJOR MIDDLE EASTERN POWERS
  {
    id: 'saudi-arabia',
    name: 'Saudi Arabia',
    flagEmoji: '🇸🇦',
    region: 'Middle East',
    priorityTier: 'Tier 4',
    tierDescription: 'Major Middle Eastern Operator',
    defenceIndustryFocus: ['Major Operator of F-15SA, Typhoon, M1A2, Patriots', 'Local Assembly & Drone Production'],
  },
  {
    id: 'united-arab-emirates',
    name: 'United Arab Emirates',
    flagEmoji: '🇦🇪',
    region: 'Middle East',
    priorityTier: 'Tier 4',
    tierDescription: 'Major Middle Eastern Power & Producer',
    defenceIndustryFocus: ['EDGE Group Missiles & Drones', 'Nimr Armored Vehicles', 'Rabdan 8x8 IFV'],
  },
  {
    id: 'iran',
    name: 'Iran',
    flagEmoji: '🇮🇷',
    region: 'Middle East',
    priorityTier: 'Tier 4',
    tierDescription: 'Major Middle Eastern Regional Power',
    defenceIndustryFocus: ['Fateh/Zolfaghar Ballistic Missiles', 'Shahed 136 Loitering Munitions', 'Sayyad SAMs', 'Kaman UCAVs'],
  },

  // TIER 5 — OTHER DEFENCE INDUSTRIES / REGIONAL POWERS
  {
    id: 'brazil',
    name: 'Brazil',
    flagEmoji: '🇧🇷',
    region: 'Latin America',
    priorityTier: 'Tier 5',
    tierDescription: 'Important Defence Industry / Regional Power',
    defenceIndustryFocus: ['Embraer C-390 Transport', 'Super Tucano Attack Aircraft', 'Astros II MLRS', 'Guarani 6x8 APC'],
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    flagEmoji: '🇿🇦',
    region: 'Africa',
    priorityTier: 'Tier 5',
    tierDescription: 'Important Defence Industry / Regional Power',
    defenceIndustryFocus: ['Rooivalk Attack Helicopter', 'Umkhonto SAM', 'Mokopa ATGM', 'Ratel & Casspir MRAP'],
  },
  {
    id: 'canada',
    name: 'Canada',
    flagEmoji: '🇨🇦',
    region: 'North America',
    priorityTier: 'Tier 5',
    tierDescription: 'Important Defence Industry / Regional Power',
    defenceIndustryFocus: ['LAV 6.0 Armored Vehicles', 'WESCAM Electro-Optical Sensors', 'Bombardier ISR Aircraft'],
  },
  {
    id: 'belgium',
    name: 'Belgium',
    flagEmoji: '🇧🇪',
    region: 'Europe',
    priorityTier: 'Tier 5',
    tierDescription: 'European Defence Industry Leader',
    defenceIndustryFocus: ['FN Herstal Small Arms (Minimi, P90, SCAR)', 'John Cockerill Weapon Turrets'],
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    flagEmoji: '🇨🇭',
    region: 'Europe',
    priorityTier: 'Tier 5',
    tierDescription: 'European Precision Defence Producer',
    defenceIndustryFocus: ['Mowag Piranha APC', 'Oerlikon Skyguard/Skyshield 35mm Air Defence', 'Pilatus Military Trainers'],
  },
  {
    id: 'austria',
    name: 'Austria',
    flagEmoji: '🇦🇹',
    region: 'Europe',
    priorityTier: 'Tier 5',
    tierDescription: 'European Defence Industry Producer',
    defenceIndustryFocus: ['Glock Service Pistols', 'Pandur 6x6/8x8 APC', 'Steyr AUG Assault Rifle'],
  },
];

export function getAllCountryProfiles(): CountryProfile[] {
  return COUNTRY_REGISTRY;
}

export function getCountryProfileByName(name: string): CountryProfile | undefined {
  const norm = name.toLowerCase().trim();
  return COUNTRY_REGISTRY.find(c => c.name.toLowerCase() === norm || c.id === norm);
}

export function getCountriesByTier(tier: CountryTier): CountryProfile[] {
  return COUNTRY_REGISTRY.filter(c => c.priorityTier === tier);
}

export function getCountriesByRegion(region: WorldRegion): CountryProfile[] {
  return COUNTRY_REGISTRY.filter(c => c.region === region);
}

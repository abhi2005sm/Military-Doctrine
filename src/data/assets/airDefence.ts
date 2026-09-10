import { Asset } from '../../types/catalog';

export const AIR_DEFENCE_ASSETS: Asset[] = [
  // =========================================================================
  // 1. VSHORAD (air-defence-vshorad)
  // =========================================================================
  {
    id: 'fim92-stinger',
    name: 'FIM-92 Stinger',
    officialDesignation: 'FIM-92J Stinger MANPADS',
    commonName: 'Stinger',
    aliases: ['Stinger', 'FIM-92', 'FIM92', 'FIM-92J', 'Stinger MANPADS'],
    familyName: 'Stinger Air Defence Family',
    domain: 'AIR-DEFENCE',
    branchId: 'air-defence',
    categoryId: 'air-defence-vshorad',
    categoryName: 'Very Short Range Air Defence (VSHORAD)',
    subcategory: 'MANPADS Launcher',
    rankInCategory: 1,
    rankingRationale: 'NATO standard combat-proven man-portable air defense system with dual IR/UV seeker.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Ukraine', 'Germany', 'United Kingdom', 'Japan', 'South Korea', 'Taiwan', 'Netherlands', 'Italy', 'Poland'],
    developer: 'General Dynamics / Raytheon Missiles & Defense',
    manufacturer: 'Raytheon Missiles & Defense',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Army', 'Air Force', 'Navy', 'Joint'],
    searchKeywords: ['stinger', 'fim-92', 'manpads', 'vshorad', 'raytheon', 'air defense'],
    era: 'Modern (1992-2015)',
    shortDescription: 'Man-portable infrared-homing surface-to-air missile for low-altitude air defense against low-flying aircraft, helicopters, and UAVs.',
    fullOverview: 'The FIM-92 Stinger is the combat-proven standard MANPADS of NATO armed forces. Upgraded with proximity fuzing and dual-color IR/UV seekers, it engages low-altitude tactical aircraft, attack helicopters, and reconnaissance drones out to 4.8 km.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Raytheon Missiles & Defense Stinger Product Sheet',
    ratings: {
      capability: 4.8, reliability: 4.8, maintainability: 4.9, survivability: 4.2, rangeMobility: 4.9, costEfficiency: 4.7, combatMaturity: 5.0, upgradePotential: 4.4, offensive: 4.2, defensive: 4.9, precision: 4.7, technology: 4.5, logistics: 4.8
    },
    specs: {
      entryIntoService: '1981 (FIM-92J 2018)',
      crew: '1 to 2 Gunners',
      manufacturer: 'Raytheon Missiles & Defense',
      primaryRole: 'Very Short-Range Low-Altitude Air Defense',
      keyMetrics: [
        { label: 'Max Range', value: '4.8', unit: 'km', highlight: true },
        { label: 'Max Altitude', value: '3,800', unit: 'meters', highlight: true },
        { label: 'Guidance', value: 'Dual IR / UV Homing' }
      ],
      armament: ['1.02 kg High-Explosive Annular Blast Warhead'],
      propulsionPower: 'Solid propellant rocket motor',
      sensorsAvionics: ['Dual-color IR/UV rosette scanning seeker', 'Proximity Fuze']
    },
    relationships: {
      usedBy: ['Army', 'Air Force', 'Navy']
    },
    sources: [
      {
        title: 'FIM-92 Stinger Missile System Overview',
        url: 'https://www.peomissilesandspace.army.mil',
        publisher: 'U.S. Army PEO Missiles and Space',
        sourceType: 'official',
        accessedAt: '2026-07-20'
      }
    ]
  },

  // =========================================================================
  // 2. SHORAD (air-defence-shorad)
  // =========================================================================
  {
    id: 'iron-dome',
    name: 'Iron Dome',
    officialDesignation: 'Iron Dome Mobile Counter-Rocket, Artillery & Mortar System',
    commonName: 'Iron Dome',
    aliases: ['Iron Dome', 'Tamir', 'C-RAM Iron Dome'],
    familyName: 'Iron Dome Defense Family',
    domain: 'AIR-DEFENCE',
    branchId: 'air-defence',
    categoryId: 'air-defence-shorad',
    categoryName: 'Short Range (SHORAD)',
    subcategory: 'Mobile C-RAM & SHORAD Battery',
    rankInCategory: 1,
    rankingRationale: 'Battle-proven counter-rocket, artillery, and mortar (C-RAM) system with >90% interception rate.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel', 'United States'],
    operatorCountries: ['Israel', 'United States'],
    developer: 'Rafael Advanced Defense Systems / mTAMIR Joint Venture',
    manufacturer: 'Rafael Advanced Defense Systems / Raytheon Technologies',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Army', 'Joint'],
    searchKeywords: ['iron dome', 'rafael', 'tamir', 'c-ram', 'short range air defense', 'israel'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Combat-proven mobile short-range air defense system intercepting short-range rockets, artillery shells, mortars, and UAVs with >90% success rate.',
    fullOverview: 'Iron Dome is Rafael’s battle-proven counter-rocket, artillery, and mortar (C-RAM) system. Guided by EL/M-2084 MMR radar, its Tamir interceptors calculate trajectory in real-time, firing only at projectiles threatening populated zones.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Rafael Advanced Defense Systems Iron Dome Datasheet',
    ratings: {
      capability: 5.0, reliability: 4.9, maintainability: 4.6, survivability: 4.5, rangeMobility: 4.7, costEfficiency: 4.6, combatMaturity: 5.0, upgradePotential: 4.8, offensive: 3.5, defensive: 5.0, precision: 5.0, technology: 4.9, logistics: 4.6
    },
    specs: {
      entryIntoService: '2011',
      crew: 'Command Center Battery Operators',
      manufacturer: 'Rafael Advanced Defense Systems',
      primaryRole: 'Counter-Rocket, Artillery, Mortar (C-RAM) & Point Defense',
      keyMetrics: [
        { label: 'Intercept Range', value: '4 to 70', unit: 'km', highlight: true },
        { label: 'Success Rate', value: '90+', unit: '% Combat Verified', highlight: true },
        { label: 'Interceptor', value: 'Tamir Electro-Optical Seeker Missile' }
      ],
      armament: ['Tamir Active Seeker Fragmentation Missile'],
      propulsionPower: 'Solid rocket booster motor',
      sensorsAvionics: ['ELTA EL/M-2084 Active Electronically Scanned Array (AESA) Radar']
    },
    sources: [
      {
        title: 'Iron Dome System Specification Overview',
        url: 'https://www.rafael.co.il',
        publisher: 'Rafael Advanced Defense Systems',
        sourceType: 'official',
        accessedAt: '2026-07-12'
      }
    ]
  },

  // =========================================================================
  // 3. MRAD (air-defence-mrad)
  // =========================================================================
  {
    id: 'nasams3',
    name: 'NASAMS 3',
    officialDesignation: 'National Advanced Surface-to-Air Missile System 3',
    commonName: 'NASAMS 3',
    aliases: ['NASAMS', 'NASAMS 3', 'NASAMS-3', 'Kongsberg SAM'],
    familyName: 'NASAMS Air Defence Family',
    domain: 'AIR-DEFENCE',
    branchId: 'air-defence',
    categoryId: 'air-defence-mrad',
    categoryName: 'Medium Range (MRAD)',
    subcategory: 'Networked Medium Range SAM Battery',
    rankInCategory: 1,
    rankingRationale: 'Network-centric medium-range air defense battery firing AMRAAM and AIM-9X missiles.',
    originCountry: 'Norway',
    originCountries: ['Norway', 'United States'],
    developerCountries: ['Norway', 'United States'],
    manufacturerCountries: ['Norway', 'United States'],
    operatorCountries: ['Norway', 'United States', 'Ukraine', 'Australia', 'Finland', 'Netherlands', 'Spain', 'Lithuania'],
    developer: 'Kongsberg Defence & Aerospace / Raytheon',
    manufacturer: 'Kongsberg / Raytheon Technologies',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Air Force', 'Army'],
    searchKeywords: ['nasams', 'nasams 3', 'kongsberg', 'raytheon', 'amraam', 'mrad'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Network-centric medium-range air defense system launching AMRAAM, AMRAAM-ER, and AIM-9X Sidewinder interceptors.',
    fullOverview: 'NASAMS 3 is the upgraded iteration of the open-architecture air defense battery developed by Kongsberg and Raytheon. Firing air-launched missiles from ground canisters, it integrates Sentinel AN/MPQ-64F1 radar and Fire Distribution Centers (FDC).',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Kongsberg Defence & Aerospace NASAMS Datasheet',
    ratings: {
      capability: 4.8, reliability: 4.8, maintainability: 4.6, survivability: 4.6, rangeMobility: 4.7, costEfficiency: 4.5, combatMaturity: 4.9, upgradePotential: 4.9, offensive: 3.5, defensive: 4.9, precision: 4.9, technology: 4.8, logistics: 4.6
    },
    specs: {
      entryIntoService: '2019 (NASAMS 3 variant)',
      crew: 'Fire Distribution Center Battery Operators',
      manufacturer: 'Kongsberg / Raytheon',
      primaryRole: 'Medium-Range Point & Area Air Defense',
      keyMetrics: [
        { label: 'Max Range', value: '50', unit: 'km (AMRAAM-ER)', highlight: true },
        { label: 'Interceptor Options', value: 'AMRAAM / AMRAAM-ER / AIM-9X' }
      ],
      armament: ['AIM-120 C7/D AMRAAM & AMRAAM-ER Surface-Launched Missiles'],
      propulsionPower: 'Solid rocket motor',
      sensorsAvionics: ['AN/MPQ-64F1 Sentinel 3D Radar', 'Kongsberg Fire Distribution Center (FDC)']
    },
    sources: [
      {
        title: 'NASAMS Air Defence System Overview',
        url: 'https://www.kongsberg.com',
        publisher: 'Kongsberg Defence & Aerospace',
        sourceType: 'official',
        accessedAt: '2026-07-22'
      }
    ]
  },

  // =========================================================================
  // 4. LRAD (air-defence-lrad)
  // =========================================================================
  {
    id: 'patriot-pac3',
    name: 'Patriot PAC-3 MSE',
    officialDesignation: 'MIM-104 Patriot PAC-3 Missile Segment Enhancement',
    commonName: 'Patriot',
    aliases: ['Patriot', 'PAC-3', 'PAC3', 'MIM-104', 'Patriot PAC-3', 'PAC-3 MSE'],
    familyName: 'Patriot Air & Missile Defense Family',
    domain: 'AIR-DEFENCE',
    branchId: 'air-defence',
    categoryId: 'air-defence-lrad',
    categoryName: 'Long Range Air Defence (LRAD)',
    subcategory: 'Hit-to-Kill Kinetic Interceptor',
    rankInCategory: 1,
    rankingRationale: 'Premier hit-to-kill kinetic energy ballistic missile interceptor with Ka-band active radar homing.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Germany', 'Japan', 'South Korea', 'Taiwan', 'Netherlands', 'Poland', 'Romania', 'Saudi Arabia', 'Ukraine', 'United Arab Emirates', 'Spain', 'Greece'],
    developer: 'Lockheed Martin Missiles and Fire Control / Raytheon',
    manufacturer: 'Lockheed Martin / Raytheon Technologies',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Army', 'Joint'],
    searchKeywords: ['patriot', 'pac-3', 'pac3', 'mim-104', 'lockheed', 'raytheon', 'bmd', 'sam'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Premier hit-to-kill kinetic energy air and anti-ballistic missile defense system intercepting tactical ballistic and cruise missiles.',
    fullOverview: 'The Patriot PAC-3 MSE (Missile Segment Enhancement) is the benchmark hit-to-kill ballistic missile defense system. Featuring dual-pulse solid rocket motors and attitude control motors (ACM), it directly collides with incoming tactical ballistic missiles.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Lockheed Martin PAC-3 MSE Program Fact Sheet',
    ratings: {
      capability: 5.0, reliability: 4.8, maintainability: 4.1, survivability: 4.7, rangeMobility: 4.4, costEfficiency: 3.5, combatMaturity: 5.0, upgradePotential: 4.9, offensive: 4.0, defensive: 5.0, precision: 5.0, technology: 5.0, logistics: 4.1
    },
    specs: {
      entryIntoService: '2015 (MSE variant)',
      crew: '3 Battery Operators',
      manufacturer: 'Lockheed Martin Missiles and Fire Control',
      primaryRole: 'Hit-to-Kill Anti-Ballistic & Long-Range Air Defense',
      keyMetrics: [
        { label: 'Interceptor Ceiling', value: '36,000', unit: 'meters', highlight: true },
        { label: 'Operational Range', value: '120+', unit: 'km', highlight: true },
        { label: 'Guidance', value: 'Ka-band Active Radar Homing Hit-to-Kill' }
      ],
      armament: ['Direct Hit Kinetic Energy Penetrator + Lethality Enhancer'],
      propulsionPower: 'Dual-pulse solid rocket motor + 180 Attitude Control Motors',
      sensorsAvionics: ['AN/MPQ-65 / GhostEye AESA Radar', 'Ka-band Active Radar Seeker']
    },
    relationships: {
      usedBy: ['Army']
    },
    sources: [
      {
        title: 'PATRIOT PAC-3 MSE System Specification',
        url: 'https://www.lockheedmartin.com',
        publisher: 'Lockheed Martin Missiles & Fire Control',
        sourceType: 'official',
        accessedAt: '2026-08-05'
      }
    ]
  },
  {
    id: 's400-triumf',
    name: 'S-400 Triumf',
    officialDesignation: '9K81 S-400 Triumf Mobile Air Defence System',
    commonName: 'S-400',
    aliases: ['S-400', 'S400', 'Triumf', 'SA-21 Growler', '9M96E2', '40N6E'],
    familyName: 'S-300/S-400 Surface-to-Air Defense Family',
    domain: 'AIR-DEFENCE',
    branchId: 'air-defence',
    categoryId: 'air-defence-lrad',
    categoryName: 'Long Range Air Defence (LRAD)',
    subcategory: 'Long-Range Strategic SAM',
    rankInCategory: 2,
    rankingRationale: 'Mobile long-range multi-missile SAM complex engaging targets out to 400 km with 40N6E missiles.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: ['Russia', 'China', 'Türkiye', 'India', 'Belarus'],
    developer: 'Almaz-Antey Air and Space Defence Corporation',
    manufacturer: 'M.K. Kalashnikov Plant / Almaz-Antey',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Air Force', 'Army', 'Joint'],
    searchKeywords: ['s-400', 's400', 'triumf', 'almaz-antey', 'sam', 'long range sam', 'russia'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Mobile long-range multi-missile surface-to-air defense system operating 40N6E ultra-long-range missiles out to 400 km.',
    fullOverview: 'The S-400 Triumf is Russia’s flagship mobile strategic air defense complex. Utilizing multiple missile types (48N6DM, 9M96E2, 40N6E), it engages stealth aircraft, cruise missiles, and ballistic missiles simultaneously across variable altitude layers.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Almaz-Antey Official Product Catalog / Rosoboronexport',
    ratings: {
      capability: 5.0, reliability: 4.6, maintainability: 4.0, survivability: 4.7, rangeMobility: 4.8, costEfficiency: 4.1, combatMaturity: 4.9, upgradePotential: 4.7, offensive: 4.0, defensive: 5.0, precision: 4.8, technology: 4.8, logistics: 4.0
    },
    specs: {
      entryIntoService: '2007',
      crew: '4 Control Post Crew',
      manufacturer: 'Almaz-Antey Corporation',
      primaryRole: 'Strategic Long-Range Anti-Access Air Defense',
      keyMetrics: [
        { label: 'Max Engagement Range', value: '400', unit: 'km (40N6E)', highlight: true },
        { label: 'Radar Detection', value: '600', unit: 'km (91N6E)', highlight: true },
        { label: 'Max Target Velocity', value: '4,800', unit: 'm/s (Mach 14)' }
      ],
      armament: ['40N6E / 48N6DM / 9M96E2 Surface-to-Air Missiles'],
      propulsionPower: 'Solid propellant rocket motor',
      sensorsAvionics: ['91N6E Panoramic Radar', '92N6E Multi-Function Engagement Radar']
    },
    sources: [
      {
        title: 'S-400 Triumf Air Defence Missile System Manual',
        url: 'https://almaz-antey.ru',
        publisher: 'Almaz-Antey Defense Enterprise',
        sourceType: 'official',
        accessedAt: '2026-06-18'
      }
    ]
  },

  // =========================================================================
  // 5. HIGH ALTITUDE DEFENCE (air-defence-high-altitude)
  // =========================================================================
  {
    id: 'thaad',
    name: 'THAAD System',
    officialDesignation: 'Terminal High Altitude Area Defense System',
    commonName: 'THAAD',
    aliases: ['THAAD', 'TPY-2', 'Terminal High Altitude Area Defense'],
    familyName: 'THAAD Ballistic Missile Defense Family',
    domain: 'AIR-DEFENCE',
    branchId: 'air-defence',
    categoryId: 'air-defence-high-altitude',
    categoryName: 'High Altitude Defence',
    subcategory: 'High-Altitude Area Defence (THAAD)',
    rankInCategory: 1,
    rankingRationale: 'Exo-atmospheric and upper-endoatmospheric hit-to-kill ballistic missile defense system with AN/TPY-2 X-band radar.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'United Arab Emirates', 'Saudi Arabia'],
    developer: 'Lockheed Martin Missiles and Space',
    manufacturer: 'Lockheed Martin',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Army', 'Joint'],
    searchKeywords: ['thaad', 'lockheed', 'tpy-2', 'bmd', 'high altitude defense'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Exo-atmospheric hit-to-kill missile defense system designed to intercept short, medium, and intermediate-range ballistic missiles in their terminal phase.',
    fullOverview: 'THAAD (Terminal High Altitude Area Defense) is a key element of the U.S. Missile Defense Agency. Utilizing kinetic hit-to-kill interceptors without explosive warheads, it destroys high-speed ballistic threat reentry vehicles inside and outside the atmosphere using the AN/TPY-2 X-band radar.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Missile Defense Agency (MDA) THAAD Fact Sheet',
    ratings: {
      capability: 5.0, reliability: 4.8, maintainability: 4.2, survivability: 4.6, rangeMobility: 4.3, costEfficiency: 3.2, combatMaturity: 4.8, upgradePotential: 4.8, offensive: 3.5, defensive: 5.0, precision: 5.0, technology: 5.0, logistics: 4.0
    },
    specs: {
      entryIntoService: '2008',
      crew: 'Battery Tactical Control Center Operators',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Upper-Atmospheric & Exo-Atmospheric Kinetic BMD Interception',
      keyMetrics: [
        { label: 'Max Altitude', value: '150', unit: 'km (Exo-atmospheric)', highlight: true },
        { label: 'Operational Range', value: '200', unit: 'km', highlight: true },
        { label: 'Radar Range', value: '1,000+', unit: 'km (AN/TPY-2 X-band)' }
      ],
      armament: ['Kinetic Energy Hit-to-Kill Kill Vehicle (KKV)'],
      propulsionPower: 'Single-stage solid propellant rocket motor with thrust vectoring',
      sensorsAvionics: ['Raytheon AN/TPY-2 Phased-Array X-band Radar', 'Indium Antimonide IR Seeker']
    },
    sources: [
      {
        title: 'THAAD System Datasheet',
        url: 'https://www.mda.mil',
        publisher: 'U.S. Missile Defense Agency',
        sourceType: 'official',
        accessedAt: '2026-08-01'
      }
    ]
  },

  // =========================================================================
  // 6. COUNTER-UAS (air-defence-counter-uas)
  // =========================================================================
  {
    id: 'm-lids-cuas',
    name: 'M-LIDS C-UAS',
    officialDesignation: 'Mobile Low, Slow, Small Unmanned Aircraft Integrated Defeat System',
    commonName: 'M-LIDS',
    aliases: ['M-LIDS', 'MLIDS', 'C-UAS M-LIDS', 'Coyote C-UAS'],
    familyName: 'M-LIDS Counter-Drone Family',
    domain: 'AIR-DEFENCE',
    branchId: 'air-defence',
    categoryId: 'air-defence-counter-uas',
    categoryName: 'Counter-UAS / Anti-Drone',
    subcategory: 'Mobile Kinetic / RF Counter-UAS System',
    rankInCategory: 1,
    rankingRationale: 'Mobile counter-drone system using radar tracking, electronic jamming, and Coyote kinetic interceptors.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'Raytheon Technologies / SRC Inc.',
    manufacturer: 'Raytheon / Leonardo DRS',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Army'],
    searchKeywords: ['m-lids', 'mlids', 'c-uas', 'anti-drone', 'coyote', 'raytheon'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Mobile two-vehicle counter-drone system pairing Ku-band radar, electronic jammers, 30mmXM914 cannon, and Coyote interceptor drones.',
    fullOverview: 'M-LIDS (Mobile Low, Slow, Small Unmanned Aircraft Integrated Defeat System) is the US Army’s fielded mobile counter-UAS capability. Deployed on M-ATV MRAP vehicles, it detects Class 1-3 drone swarms using Ku720 radar and defeats them via electronic jamming or Coyote Block 2 kinetic interceptors.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Army PEO Missiles and Space M-LIDS Factsheet',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.4, rangeMobility: 4.9, costEfficiency: 4.4, combatMaturity: 4.7, upgradePotential: 4.9, offensive: 4.0, defensive: 5.0, precision: 4.9, technology: 4.9, logistics: 4.5
    },
    specs: {
      entryIntoService: '2020',
      crew: '2 Vehicle Operators',
      manufacturer: 'Raytheon / Leonardo DRS',
      primaryRole: 'Mobile Counter-Unmanned Aerial Systems (C-UAS) & Drone Swarm Defeat',
      keyMetrics: [
        { label: 'Radar Detection', value: 'Ku720', unit: '360-deg AESA Radar', highlight: true },
        { label: 'Interceptor', value: 'Coyote Block 2', unit: 'Kinetic Drone Interceptor' }
      ],
      armament: [
        'Coyote Block 2 Kinetic Interceptor Drones',
        '30mm XM914 Chain Gun firing Proximity Airburst Ammunition',
        'Electronic Warfare RF Directional Jammer'
      ],
      propulsionPower: 'M-ATV 4x4 Protected Mobility Vehicle',
      sensorsAvionics: ['SRC Silent Sentinel Ku-band Radar', 'Moog RIwP Remote Weapon Station']
    },
    sources: [
      {
        title: 'M-LIDS C-UAS Program Datasheet',
        url: 'https://www.army.mil',
        publisher: 'U.S. Army PEO Missiles and Space',
        sourceType: 'official',
        accessedAt: '2026-07-28'
      }
    ]
  }
];

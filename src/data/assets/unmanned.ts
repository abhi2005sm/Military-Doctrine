import { Asset } from '../../types/catalog';

export const UNMANNED_ASSETS: Asset[] = [
  {
    id: 'bayraktar-tb2',
    name: 'Bayraktar TB2',
    officialDesignation: 'Bayraktar TB2 Tactical Armed UAV',
    commonName: 'Bayraktar TB2',
    aliases: ['Bayraktar', 'TB2', 'Bayraktar TB2', 'TB-2', 'Baykar TB2'],
    familyName: 'Bayraktar Unmanned Aerial Vehicle Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-strike-uav-ucav',
    categoryName: 'Unmanned — Strike UAV / UCAV',
    subcategory: 'Reusable Armed Tactical Strike UAV',
    rankInCategory: 1,
    rankingRationale: 'Combat-proven tactical MALE strike UAV firing MAM-L laser micro-munitions.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: ['Türkiye', 'Ukraine', 'Azerbaijan', 'Poland', 'Pakistan', 'Qatar', 'Morocco', 'Ethiopia'],
    developer: 'Baykar Tech',
    manufacturer: 'Baykar Technologies',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Army', 'Air Force', 'Navy', 'Joint'],
    searchKeywords: ['bayraktar', 'tb2', 'baykar', 'uav', 'ucav', 'drone', 'turkey', 'mam-l'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Combat-proven medium-altitude long-endurance (MALE) tactical armed UAV firing laser-guided smart micro-munitions.',
    fullOverview: 'The Bayraktar TB2 is a medium-altitude long-endurance tactical UAV designed by Baykar. Armed with MAM-L and MAM-C laser-guided micro munitions, it provides persistent 27-hour ISR and precision strike capability against armored vehicles and air defense radars.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Baykar Tech TB2 Product Technical Manual',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.8, survivability: 4.2, rangeMobility: 4.7, costEfficiency: 4.9, combatMaturity: 5.0, upgradePotential: 4.6, offensive: 4.7, defensive: 3.8, precision: 4.8, technology: 4.6, logistics: 4.8
    },
    specs: {
      entryIntoService: '2014',
      crew: '3 Ground Control Station Operators',
      manufacturer: 'Baykar Tech',
      primaryRole: 'Tactical Persistent Reconnaissance & Micro-Laser Strike',
      keyMetrics: [
        { label: 'Endurance', value: '27', unit: 'hours', highlight: true },
        { label: 'Payload Capacity', value: '150', unit: 'kg', highlight: true },
        { label: 'Service Ceiling', value: '25,000', unit: 'ft' }
      ],
      armament: ['4x Roketsan MAM-L / MAM-C Laser-Guided Smart Munitions'],
      propulsionPower: 'Rotax 912 Internal Combustion Engine (100 hp)',
      sensorsAvionics: ['WESCAM MX-15D / Aselsan CATS Electro-Optical / IR Targeting Pod', 'Triple-redundant Flight Control Avionics']
    },
    sources: [
      {
        title: 'Bayraktar TB2 System Specification Sheet',
        url: 'https://www.baykartech.com',
        publisher: 'Baykar Technology',
        sourceType: 'official',
        accessedAt: '2026-07-28'
      }
    ]
  },
  {
    id: 'shahed-136',
    name: 'Shahed 136 / Geran-2',
    officialDesignation: 'Shahed 136 One-Way Attack UAV',
    commonName: 'Shahed 136',
    aliases: ['Shahed 136', 'Geran-2', 'Geran 2', 'Shahed-136', 'Shahed', 'Kamikaze Drone'],
    familyName: 'Shahed One-Way Attack UAV Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-loitering-munition',
    categoryName: 'Unmanned — Loitering Munition',
    subcategory: 'One-Way Attack UAV / Loitering Munition',
    rankInCategory: 1,
    rankingRationale: 'Cost-effective 2,500-km autonomous one-way attack loitering munition.',
    originCountry: 'Iran',
    originCountries: ['Iran'],
    developerCountries: ['Iran'],
    manufacturerCountries: ['Iran', 'Russia'],
    operatorCountries: ['Iran', 'Russia'],
    developer: 'Shahed Aviation Industries',
    manufacturer: 'HESA / Alabuga Special Economic Zone',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Army', 'Air Force', 'Joint'],
    searchKeywords: ['shahed 136', 'geran-2', 'geran 2', 'kamikaze drone', 'loitering munition', 'iran', 'russia'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range delta-wing one-way attack loitering munition delivering 50 kg warhead against fixed infrastructure targets.',
    fullOverview: 'The Shahed 136 (Russian designation Geran-2) is a low-cost delta-wing autonomous one-way attack UAV. Guided by satellite navigation, it flies low-altitude pre-programmed routes up to 2,500 km to strike static targets with a 50 kg high-explosive warhead.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Cost-Effective',
    sourceCitation: 'Public Intelligence & Defense Technical Reports',
    ratings: {
      capability: 4.4, reliability: 4.3, maintainability: 4.9, survivability: 3.6, rangeMobility: 5.0, costEfficiency: 5.0, combatMaturity: 5.0, upgradePotential: 4.2, offensive: 4.6, defensive: 3.0, precision: 4.2, technology: 3.8, logistics: 4.9
    },
    specs: {
      entryIntoService: '2021',
      crew: 'N/A (Pre-programmed Launch)',
      manufacturer: 'Shahed Aviation / HESA',
      primaryRole: 'Long-Range Autonomous Standoff Infrastructure Strike',
      keyMetrics: [
        { label: 'Operational Range', value: '2,500', unit: 'km', highlight: true },
        { label: 'Warhead Weight', value: '50', unit: 'kg High Explosive', highlight: true },
        { label: 'Speed', value: '185', unit: 'km/h' }
      ],
      armament: ['50 kg Fragmentation / Blast / Thermobaric Warhead'],
      propulsionPower: 'MD-550 50-hp 4-cylinder two-stroke piston engine',
      sensorsAvionics: ['Multi-Constellation Satellite Navigation (GLONASS/CRPA Anti-Jam)']
    },
    sources: [
      {
        title: 'Shahed 136 One-Way Attack UAV Technical Datasheet',
        url: 'https://www.janes.com',
        publisher: 'Jane’s Information Group',
        sourceType: 'reference',
        accessedAt: '2026-06-15'
      }
    ]
  },
  {
    id: 'mq9a-reaper',
    name: 'MQ-9A Reaper',
    officialDesignation: 'MQ-9A Reaper Remotely Piloted Aircraft System',
    commonName: 'MQ-9 Reaper',
    aliases: ['MQ-9', 'Reaper', 'MQ-9A', 'Predator B'],
    familyName: 'Predator / Reaper Remotely Piloted Aircraft Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-hale-male',
    categoryName: 'Unmanned — HALE / MALE Platforms',
    subcategory: 'Medium-Altitude Long-Endurance (MALE)',
    rankInCategory: 1,
    rankingRationale: 'Combat-proven MALE hunter-killer UAV with 27-hour endurance and Hellfire precision strike capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'United Kingdom', 'France', 'Italy', 'Netherlands', 'Spain'],
    developer: 'General Atomics Aeronautical Systems (GA-ASI)',
    manufacturer: 'General Atomics',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Air Force', 'Navy', 'Joint'],
    searchKeywords: ['mq-9a', 'reaper', 'predator b', 'general atomics', 'male uav', 'drone'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Combat-proven MALE hunter-killer unmanned aircraft featuring 27-hour endurance, SATCOM control, and Hellfire precision strike.',
    fullOverview: 'The General Atomics MQ-9A Reaper (Predator B) is the primary hunter-killer MALE UAV of the U.S. Air Force and allied forces. Powered by a Honeywell turboprop engine, it carries up to 4 AGM-114 Hellfire missiles and GBU-12 laser-guided bombs for persistent ISR and strike missions.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Air Force MQ-9A Reaper Fact Sheet / General Atomics',
    ratings: {
      capability: 4.8, reliability: 4.8, maintainability: 4.6, survivability: 4.1, rangeMobility: 4.9, costEfficiency: 4.4, combatMaturity: 5.0, upgradePotential: 4.8, offensive: 4.8, defensive: 3.8, precision: 5.0, technology: 4.8, logistics: 4.6
    },
    specs: {
      entryIntoService: '2007',
      crew: '2 Ground Control Station Operators (Pilot, Sensor Operator)',
      manufacturer: 'General Atomics Aeronautical Systems',
      primaryRole: 'MALE Hunter-Killer ISR & Precision Armed Engagement',
      keyMetrics: [
        { label: 'Flight Endurance', value: '27', unit: 'hours', highlight: true },
        { label: 'Payload Capacity', value: '1,700', unit: 'kg total (1,360 kg external)', highlight: true },
        { label: 'Service Ceiling', value: '50,000', unit: 'ft' }
      ],
      armament: [
        'Up to 4x AGM-114 Hellfire Missiles',
        '2x GBU-12 Paveway II Laser-Guided Bombs'
      ],
      propulsionPower: 'Honeywell TPE331-10 Turboprop Engine (900 shp)',
      sensorsAvionics: [
        'AN/DAS-1 Multi-Spectral Targeting System (MTS-B)',
        'AN/APY-8 Lynx Synthetic Aperture Radar (SAR)'
      ]
    },
    sources: [
      {
        title: 'MQ-9A Reaper Technical Datasheet',
        url: 'https://www.af.mil',
        publisher: 'U.S. Air Force',
        sourceType: 'official',
        accessedAt: '2026-07-29'
      }
    ]
  },
  {
    id: 'orca-xluuv',
    name: 'Orca XLUUV',
    officialDesignation: 'Orca Extra Large Unmanned Undersea Vehicle (XLUUV)',
    commonName: 'Orca XLUUV',
    aliases: ['Orca', 'XLUUV', 'Orca XLUUV', 'Boeing Orca'],
    familyName: 'Orca Autonomous Submarine Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-usv-uuv-auv-mine',
    categoryName: 'Unmanned — USV / UUV / AUV',
    subcategory: 'Extra Large Autonomous Submarine (XLUUV)',
    rankInCategory: 1,
    rankingRationale: 'US Navy extra-large autonomous unmanned undersea vehicle for long-range mine laying and covert ASW.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'Boeing Defense, Space & Security / Huntington Ingalls',
    manufacturer: 'Boeing',
    dataConfidence: 'VERIFIED',
    services: ['Navy'],
    searchKeywords: ['orca', 'xluuv', 'boeing', 'uuv', 'unmanned submarine', 'us navy'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: '85-ton autonomous diesel-electric submarine drone capable of 6,500 nautical mile unassisted ocean missions and seabed mine placement.',
    fullOverview: 'The Boeing Orca XLUUV is the US Navy’s first extra-large autonomous undersea vessel. Featuring a modular payload bay capable of carrying 8 tons of seabed mines or ASW sensors, it operates autonomously for months at sea without a crewed host submarine.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Navy NAVSEA Unmanned Maritime Systems Program Sheet / Boeing',
    ratings: {
      capability: 4.9, reliability: 4.5, maintainability: 4.3, survivability: 4.9, rangeMobility: 5.0, costEfficiency: 4.4, combatMaturity: 4.2, upgradePotential: 5.0, offensive: 4.7, defensive: 4.6, precision: 4.9, technology: 5.0, logistics: 4.4
    },
    specs: {
      entryIntoService: '2023',
      crew: 'Autonomous AI Navigation (Zero Crew)',
      manufacturer: 'Boeing',
      primaryRole: 'Long-Range Autonomous Undersea Mine Warfare & Reconnaissance',
      keyMetrics: [
        { label: 'Range', value: '6,500', unit: 'Nautical Miles', highlight: true },
        { label: 'Payload Capacity', value: '8', unit: 'Metric Tons Modular Bay', highlight: true },
        { label: 'Displacement', value: '85', unit: 'Submerged Metric Tons' }
      ],
      armament: ['Hammerhead Smart Sea Mines / Mk 54 Torpedoes'],
      propulsionPower: 'Hybrid Diesel-Electric / Lithium-ion Battery System',
      sensorsAvionics: ['Autonomous Seabed Navigation & Obstacle Avoidance Sonar']
    },
    sources: [
      {
        title: 'Orca Extra Large Unmanned Undersea Vehicle Overview',
        url: 'https://www.boeing.com',
        publisher: 'Boeing Defense, Space & Security',
        sourceType: 'official',
        accessedAt: '2026-07-12'
      }
    ]
  },
  {
    id: 'thermite-ugv',
    name: 'Thermite RS3 UGV',
    officialDesignation: 'Thermite RS3 Robotic Firefighting & Combat UGV',
    commonName: 'Thermite UGV',
    aliases: ['Thermite', 'Thermite RS3', 'RS3 UGV', 'Textron Thermite'],
    familyName: 'Thermite Ground Robot Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-ugv-ground-robot',
    categoryName: 'Unmanned — UGV / Ground Robots',
    subcategory: 'Tracked Heavy Tactical UGV',
    rankInCategory: 1,
    rankingRationale: 'Armed tactical ground combat robot equipped with remote weapon station and EOD manipulator arms.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'Howe & Howe Technologies / Textron Systems',
    manufacturer: 'Textron Systems',
    dataConfidence: 'VERIFIED',
    services: ['Army', 'Joint'],
    searchKeywords: ['thermite', 'thermite rs3', 'ugv', 'textron', 'ground robot', 'eod robot'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Industrial-grade tracked unmanned ground vehicle providing stand-off EOD bomb disposal, hazardous assault support, and payload transport.',
    fullOverview: 'The Thermite RS3 is a high-torque tracked unmanned ground vehicle manufactured by Textron Systems. Built to navigate extreme terrain and withstand high heat/explosive environments, it operates remotely via HD video camera feeds for EOD bomb disposal and tactical breaching.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Textron Systems Thermite UGV Datasheet',
    ratings: {
      capability: 4.6, reliability: 4.8, maintainability: 4.8, survivability: 4.5, rangeMobility: 4.6, costEfficiency: 4.6, combatMaturity: 4.6, upgradePotential: 4.7, offensive: 3.8, defensive: 4.6, precision: 4.7, technology: 4.7, logistics: 4.9
    },
    specs: {
      entryIntoService: '2020',
      crew: 'Remote Control Station Operator',
      manufacturer: 'Textron Systems',
      primaryRole: 'Hazardous EOD Bomb Clearance & Tactical Ground Assault Support',
      keyMetrics: [
        { label: 'Weight', value: '1,600', unit: 'kg', highlight: true },
        { label: 'Towing Capacity', value: '7,900', unit: 'kg Winch Pull', highlight: true }
      ],
      armament: ['Modular Remote Weapon Station (7.62mm / 12.7mm Machine Gun Option)'],
      propulsionPower: 'Kubota 24.8-hp Diesel Engine',
      sensorsAvionics: ['360-degree HD Optical & Thermal Infrared Camera Array']
    },
    sources: [
      {
        title: 'Thermite RS3 Robotic System Datasheet',
        url: 'https://www.textronsystems.com',
        publisher: 'Textron Systems',
        sourceType: 'official',
        accessedAt: '2026-06-28'
      }
    ]
  }
];

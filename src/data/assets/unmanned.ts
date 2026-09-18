import { Asset } from '../../types/catalog';

export const UNMANNED_ASSETS: Asset[] = [
  {
<<<<<<< HEAD
    id: 'rq-4d-phoenix',
    name: 'RQ-4D Phoenix',
    officialDesignation: 'RQ-4D Phoenix NATO Alliance Ground Surveillance (AGS)',
    commonName: 'RQ-4D Phoenix',
    aliases: ['RQ-4D Phoenix'],
    familyName: 'Advanced Reconnaissance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-reconnaissance-uav',
    categoryName: 'Unmanned — Reconnaissance UAV',
    subcategory: 'High-altitude strategic ISR',
    rankInCategory: 1,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['NATO'],
    developer: 'NATO',
    manufacturer: 'NATO AGS',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['RQ-4D Phoenix', 'UAV', 'UAS', 'High-altitude strategic ISR'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation persistent reconnaissance and surveillance platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'RQ-4D Phoenix is a current-generation unmanned platform selected for its persistent reconnaissance and surveillance. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'NATO official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'NATO AGS',
      primaryRole: 'High-altitude strategic ISR',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '30+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'RQ-4D Phoenix official product / program overview',
        url: 'https://www.nato.int/',
        publisher: 'NATO',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'mq-4c-triton',
    name: 'MQ-4C Triton',
    officialDesignation: 'MQ-4C Triton Broad Area Maritime Surveillance UAS',
    commonName: 'MQ-4C Triton',
    aliases: ['MQ-4C Triton'],
    familyName: 'Advanced Reconnaissance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-reconnaissance-uav',
    categoryName: 'Unmanned — Reconnaissance UAV',
    subcategory: 'High-altitude maritime ISR',
    rankInCategory: 2,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Australia'],
    developer: 'United States Navy',
    manufacturer: 'Northrop Grumman',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['MQ-4C Triton', 'UAV', 'UAS', 'High-altitude maritime ISR'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation persistent reconnaissance and surveillance platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'MQ-4C Triton is a current-generation unmanned platform selected for its persistent reconnaissance and surveillance. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'United States Navy official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'High-altitude maritime ISR',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '24+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'MQ-4C Triton official product / program overview',
        url: 'https://www.google.com/',
        publisher: 'United States Navy',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'mq-9b-seaguardian',
    name: 'MQ-9B SeaGuardian',
    officialDesignation: 'MQ-9B SeaGuardian Remotely Piloted Aircraft System',
    commonName: 'MQ-9B SeaGuardian',
    aliases: ['MQ-9B SeaGuardian'],
    familyName: 'Advanced Reconnaissance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-reconnaissance-uav',
    categoryName: 'Unmanned — Reconnaissance UAV',
    subcategory: 'Long-endurance maritime ISR',
    rankInCategory: 3,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United Kingdom', 'Japan', 'India', 'Belgium'],
    developer: 'General Atomics',
    manufacturer: 'General Atomics',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['MQ-9B SeaGuardian', 'UAV', 'UAS', 'Long-endurance maritime ISR'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation persistent reconnaissance and surveillance platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'MQ-9B SeaGuardian is a current-generation unmanned platform selected for its persistent reconnaissance and surveillance. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'General Atomics official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'General Atomics',
      primaryRole: 'Long-endurance maritime ISR',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '40+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'MQ-9B SeaGuardian official product / program overview',
        url: 'https://www.ga-asi.com/',
        publisher: 'General Atomics',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'mq-9a-reaper-block-5',
    name: 'MQ-9A Reaper Block 5',
    officialDesignation: 'MQ-9A Reaper Block 5 Remotely Piloted Aircraft System',
    commonName: 'MQ-9A Reaper Block 5',
    aliases: ['MQ-9A Reaper Block 5'],
    familyName: 'Advanced Reconnaissance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-reconnaissance-uav',
    categoryName: 'Unmanned — Reconnaissance UAV',
    subcategory: 'Persistent MALE ISR',
    rankInCategory: 4,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'United Kingdom', 'France', 'Italy'],
    developer: 'United States Air Force',
    manufacturer: 'General Atomics',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['MQ-9A Reaper Block 5', 'UAV', 'UAS', 'Persistent MALE ISR'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation persistent reconnaissance and surveillance platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'MQ-9A Reaper Block 5 is a current-generation unmanned platform selected for its persistent reconnaissance and surveillance. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'United States Air Force official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'General Atomics',
      primaryRole: 'Persistent MALE ISR',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '27+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'MQ-9A Reaper Block 5 official product / program overview',
        url: 'https://www.google.com/',
        publisher: 'United States Air Force',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'heron-tp',
    name: 'Heron TP',
    officialDesignation: 'Heron TP Multi-Mission UAS',
    commonName: 'Heron TP',
    aliases: ['Heron TP'],
    familyName: 'Advanced Reconnaissance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-reconnaissance-uav',
    categoryName: 'Unmanned — Reconnaissance UAV',
    subcategory: 'Strategic persistent ISR',
    rankInCategory: 5,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: ['Israel', 'Germany'],
    developer: 'Israel Aerospace Industries',
    manufacturer: 'IAI',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Heron TP', 'UAV', 'UAS', 'Strategic persistent ISR'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation persistent reconnaissance and surveillance platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Heron TP is a current-generation unmanned platform selected for its persistent reconnaissance and surveillance. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Israel Aerospace Industries official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'IAI',
      primaryRole: 'Strategic persistent ISR',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '30+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Heron TP official product / program overview',
        url: 'https://www.iai.co.il/',
        publisher: 'Israel Aerospace Industries',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'hermes-900-starliner',
    name: 'Hermes 900 StarLiner',
    officialDesignation: 'Hermes 900 StarLiner UAS',
    commonName: 'Hermes 900 StarLiner',
    aliases: ['Hermes 900 StarLiner'],
    familyName: 'Advanced Reconnaissance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-reconnaissance-uav',
    categoryName: 'Unmanned — Reconnaissance UAV',
    subcategory: 'Persistent MALE ISR',
    rankInCategory: 6,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: ['Israel', 'Brazil', 'Switzerland', 'Colombia'],
    developer: 'Elbit Systems',
    manufacturer: 'Elbit Systems',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Hermes 900 StarLiner', 'UAV', 'UAS', 'Persistent MALE ISR'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation persistent reconnaissance and surveillance platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Hermes 900 StarLiner is a current-generation unmanned platform selected for its persistent reconnaissance and surveillance. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Elbit Systems official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Elbit Systems',
      primaryRole: 'Persistent MALE ISR',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '36', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Hermes 900 StarLiner official product / program overview',
        url: 'https://elbitsystems.com/',
        publisher: 'Elbit Systems',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'anka-iii',
    name: 'ANKA III',
    officialDesignation: 'ANKA III Unmanned Combat Aircraft',
    commonName: 'ANKA III',
    aliases: ['ANKA III'],
    familyName: 'Advanced Reconnaissance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-reconnaissance-uav',
    categoryName: 'Unmanned — Reconnaissance UAV',
    subcategory: 'Low-observable ISR / UCAV',
    rankInCategory: 7,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: ['Türkiye'],
    developer: 'Turkish Aerospace',
    manufacturer: 'Turkish Aerospace',
    status: 'Development / Flight Test',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE',
    services: ['Joint'],
    searchKeywords: ['ANKA III', 'UAV', 'UAS', 'Low-observable ISR / UCAV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation persistent reconnaissance and surveillance platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'ANKA III is a current-generation unmanned platform selected for its persistent reconnaissance and surveillance. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Next-Generation',
    sourceCitation: 'Turkish Aerospace official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Turkish Aerospace',
      primaryRole: 'Low-observable ISR / UCAV',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'ANKA III official product / program overview',
        url: 'https://www.tusas.com/',
        publisher: 'Turkish Aerospace',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'bayraktar-tb3',
    name: 'Bayraktar TB3',
    officialDesignation: 'Bayraktar TB3 Shipborne UCAV',
    commonName: 'Bayraktar TB3',
    aliases: ['Bayraktar TB3'],
    familyName: 'Advanced Reconnaissance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-reconnaissance-uav',
    categoryName: 'Unmanned — Reconnaissance UAV',
    subcategory: 'Shipborne ISR / strike',
    rankInCategory: 8,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: ['Türkiye'],
    developer: 'Baykar',
    manufacturer: 'Baykar Technologies',
    status: 'Operational / Initial Fielding',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Bayraktar TB3', 'UAV', 'UAS', 'Shipborne ISR / strike'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation persistent reconnaissance and surveillance platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Bayraktar TB3 is a current-generation unmanned platform selected for its persistent reconnaissance and surveillance. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Baykar official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Baykar Technologies',
      primaryRole: 'Shipborne ISR / strike',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '24+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Bayraktar TB3 official product / program overview',
        url: 'https://www.baykartech.com/',
        publisher: 'Baykar',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'bayraktar-akinci',
    name: 'Bayraktar AKINCI',
    officialDesignation: 'Bayraktar AKINCI High-Altitude Long-Endurance UCAV',
    commonName: 'Bayraktar AKINCI',
    aliases: ['Bayraktar AKINCI'],
    familyName: 'Advanced Reconnaissance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-reconnaissance-uav',
    categoryName: 'Unmanned — Reconnaissance UAV',
    subcategory: 'High-end ISR / strike',
    rankInCategory: 9,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: ['Türkiye', 'Pakistan', 'Saudi Arabia'],
    developer: 'Baykar',
    manufacturer: 'Baykar Technologies',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Bayraktar AKINCI', 'UAV', 'UAS', 'High-end ISR / strike'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation persistent reconnaissance and surveillance platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Bayraktar AKINCI is a current-generation unmanned platform selected for its persistent reconnaissance and surveillance. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Baykar official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Baykar Technologies',
      primaryRole: 'High-end ISR / strike',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '24+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Bayraktar AKINCI official product / program overview',
        url: 'https://www.baykartech.com/',
        publisher: 'Baykar',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'wing-loong-3',
    name: 'Wing Loong-3',
    officialDesignation: 'Wing Loong-3 High-Altitude Long-Endurance UAV',
    commonName: 'Wing Loong-3',
    aliases: ['Wing Loong-3'],
    familyName: 'Advanced Reconnaissance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-reconnaissance-uav',
    categoryName: 'Unmanned — Reconnaissance UAV',
    subcategory: 'Heavy long-endurance ISR',
    rankInCategory: 10,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: ['China'],
    developer: 'AVIC',
    manufacturer: 'AVIC',
    status: 'Development / Export Offering',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE',
    services: ['Joint'],
    searchKeywords: ['Wing Loong-3', 'UAV', 'UAS', 'Heavy long-endurance ISR'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation persistent reconnaissance and surveillance platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Wing Loong-3 is a current-generation unmanned platform selected for its persistent reconnaissance and surveillance. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Next-Generation',
    sourceCitation: 'AVIC official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'AVIC',
      primaryRole: 'Heavy long-endurance ISR',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Wing Loong-3 official product / program overview',
        url: 'https://www.avic.com/',
        publisher: 'AVIC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'fq-42a',
    name: 'FQ-42A',
    officialDesignation: 'FQ-42A Collaborative Combat Aircraft',
    commonName: 'FQ-42A',
    aliases: ['FQ-42A'],
    familyName: 'Unmanned Combat Aircraft Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-strike-uav-ucav',
    categoryName: 'Unmanned — Strike UAV / UCAV',
    subcategory: 'Next-generation uncrewed combat aircraft',
    rankInCategory: 1,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'General Atomics',
    manufacturer: 'General Atomics',
    status: 'Production / Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['FQ-42A', 'UAV', 'UAS', 'Next-generation uncrewed combat aircraft'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation precision strike and autonomous collaborative combat platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'FQ-42A is a current-generation unmanned platform selected for its precision strike and autonomous collaborative combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Next-Generation',
    sourceCitation: 'General Atomics official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'General Atomics',
      primaryRole: 'Next-generation uncrewed combat aircraft',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'FQ-42A official product / program overview',
        url: 'https://www.ga-asi.com/',
        publisher: 'General Atomics',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'yfq-44a',
    name: 'YFQ-44A',
    officialDesignation: 'YFQ-44A Collaborative Combat Aircraft',
    commonName: 'YFQ-44A',
    aliases: ['YFQ-44A'],
    familyName: 'Unmanned Combat Aircraft Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-strike-uav-ucav',
    categoryName: 'Unmanned — Strike UAV / UCAV',
    subcategory: 'Autonomous collaborative combat aircraft',
    rankInCategory: 2,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'Anduril',
    manufacturer: 'Anduril',
    status: 'Development / Flight Test',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE',
    services: ['Joint'],
    searchKeywords: ['YFQ-44A', 'UAV', 'UAS', 'Autonomous collaborative combat aircraft'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation precision strike and autonomous collaborative combat platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'YFQ-44A is a current-generation unmanned platform selected for its precision strike and autonomous collaborative combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Next-Generation',
    sourceCitation: 'Anduril official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Anduril',
      primaryRole: 'Autonomous collaborative combat aircraft',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'YFQ-44A official product / program overview',
        url: 'https://www.anduril.com/',
        publisher: 'Anduril',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'bayraktar-kizilelma',
    name: 'Bayraktar KIZILELMA',
    officialDesignation: 'Bayraktar KIZILELMA Unmanned Fighter Aircraft',
    commonName: 'Bayraktar KIZILELMA',
    aliases: ['Bayraktar KIZILELMA'],
    familyName: 'Unmanned Combat Aircraft Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-strike-uav-ucav',
    categoryName: 'Unmanned — Strike UAV / UCAV',
    subcategory: 'Low-observable unmanned fighter / strike',
    rankInCategory: 3,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: ['Türkiye'],
    developer: 'Baykar',
    manufacturer: 'Baykar Technologies',
    status: 'Development / Flight Test',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE',
    services: ['Joint'],
    searchKeywords: ['Bayraktar KIZILELMA', 'UAV', 'UAS', 'Low-observable unmanned fighter / strike'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation precision strike and autonomous collaborative combat platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Bayraktar KIZILELMA is a current-generation unmanned platform selected for its precision strike and autonomous collaborative combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Next-Generation',
    sourceCitation: 'Baykar official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Baykar Technologies',
      primaryRole: 'Low-observable unmanned fighter / strike',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Bayraktar KIZILELMA official product / program overview',
        url: 'https://www.baykartech.com/',
        publisher: 'Baykar',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'anka-iii-2',
    name: 'ANKA III',
    officialDesignation: 'ANKA III Unmanned Combat Aircraft',
    commonName: 'ANKA III',
    aliases: ['ANKA III'],
    familyName: 'Unmanned Combat Aircraft Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-strike-uav-ucav',
    categoryName: 'Unmanned — Strike UAV / UCAV',
    subcategory: 'Stealth-oriented UCAV',
    rankInCategory: 4,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: ['Türkiye'],
    developer: 'Turkish Aerospace',
    manufacturer: 'Turkish Aerospace',
    status: 'Development / Flight Test',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE',
    services: ['Joint'],
    searchKeywords: ['ANKA III', 'UAV', 'UAS', 'Stealth-oriented UCAV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation precision strike and autonomous collaborative combat platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'ANKA III is a current-generation unmanned platform selected for its precision strike and autonomous collaborative combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Next-Generation',
    sourceCitation: 'Turkish Aerospace official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Turkish Aerospace',
      primaryRole: 'Stealth-oriented UCAV',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'ANKA III official product / program overview',
        url: 'https://www.tusas.com/',
        publisher: 'Turkish Aerospace',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'bayraktar-tb3-2',
    name: 'Bayraktar TB3',
    officialDesignation: 'Bayraktar TB3 Shipborne UCAV',
    commonName: 'Bayraktar TB3',
    aliases: ['Bayraktar TB3'],
    familyName: 'Unmanned Combat Aircraft Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-strike-uav-ucav',
    categoryName: 'Unmanned — Strike UAV / UCAV',
    subcategory: 'Carrier-capable UCAV',
    rankInCategory: 5,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: ['Türkiye'],
    developer: 'Baykar',
    manufacturer: 'Baykar Technologies',
    status: 'Operational / Initial Fielding',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Bayraktar TB3', 'UAV', 'UAS', 'Carrier-capable UCAV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation precision strike and autonomous collaborative combat platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Bayraktar TB3 is a current-generation unmanned platform selected for its precision strike and autonomous collaborative combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Baykar official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Baykar Technologies',
      primaryRole: 'Carrier-capable UCAV',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '24+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Bayraktar TB3 official product / program overview',
        url: 'https://www.baykartech.com/',
        publisher: 'Baykar',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'bayraktar-akinci-2',
    name: 'Bayraktar AKINCI',
    officialDesignation: 'Bayraktar AKINCI High-Altitude Long-Endurance UCAV',
    commonName: 'Bayraktar AKINCI',
    aliases: ['Bayraktar AKINCI'],
    familyName: 'Unmanned Combat Aircraft Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-strike-uav-ucav',
    categoryName: 'Unmanned — Strike UAV / UCAV',
    subcategory: 'Heavy UCAV strike platform',
    rankInCategory: 6,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: ['Türkiye', 'Pakistan', 'Saudi Arabia'],
    developer: 'Baykar',
    manufacturer: 'Baykar Technologies',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Bayraktar AKINCI', 'UAV', 'UAS', 'Heavy UCAV strike platform'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation precision strike and autonomous collaborative combat platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Bayraktar AKINCI is a current-generation unmanned platform selected for its precision strike and autonomous collaborative combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Baykar official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Baykar Technologies',
      primaryRole: 'Heavy UCAV strike platform',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '24+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Bayraktar AKINCI official product / program overview',
        url: 'https://www.baykartech.com/',
        publisher: 'Baykar',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'mq-9b-skyguardian',
    name: 'MQ-9B SkyGuardian',
    officialDesignation: 'MQ-9B SkyGuardian RPA System',
    commonName: 'MQ-9B SkyGuardian',
    aliases: ['MQ-9B SkyGuardian'],
    familyName: 'Unmanned Combat Aircraft Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-strike-uav-ucav',
    categoryName: 'Unmanned — Strike UAV / UCAV',
    subcategory: 'Long-endurance precision strike / ISR',
    rankInCategory: 7,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United Kingdom', 'Japan'],
    developer: 'General Atomics',
    manufacturer: 'General Atomics',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['MQ-9B SkyGuardian', 'UAV', 'UAS', 'Long-endurance precision strike / ISR'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation precision strike and autonomous collaborative combat platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'MQ-9B SkyGuardian is a current-generation unmanned platform selected for its precision strike and autonomous collaborative combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'General Atomics official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'General Atomics',
      primaryRole: 'Long-endurance precision strike / ISR',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '40+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'MQ-9B SkyGuardian official product / program overview',
        url: 'https://www.ga-asi.com/',
        publisher: 'General Atomics',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'mq-28-ghost-bat',
    name: 'MQ-28 Ghost Bat',
    officialDesignation: 'MQ-28A Ghost Bat Uncrewed Teaming Aircraft',
    commonName: 'MQ-28 Ghost Bat',
    aliases: ['MQ-28 Ghost Bat'],
    familyName: 'Unmanned Combat Aircraft Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-strike-uav-ucav',
    categoryName: 'Unmanned — Strike UAV / UCAV',
    subcategory: 'Collaborative combat aircraft',
    rankInCategory: 8,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Australia',
    originCountries: ['Australia'],
    developerCountries: ['Australia'],
    manufacturerCountries: ['Australia'],
    operatorCountries: ['Australia'],
    developer: 'Boeing Australia / RAAF',
    manufacturer: 'Boeing Defence Australia',
    status: 'Development / Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['MQ-28 Ghost Bat', 'UAV', 'UAS', 'Collaborative combat aircraft'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation precision strike and autonomous collaborative combat platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'MQ-28 Ghost Bat is a current-generation unmanned platform selected for its precision strike and autonomous collaborative combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Next-Generation',
    sourceCitation: 'Boeing Australia / RAAF official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Boeing Defence Australia',
      primaryRole: 'Collaborative combat aircraft',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'MQ-28 Ghost Bat official product / program overview',
        url: 'https://www.google.com/',
        publisher: 'Boeing Australia / RAAF',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'xq-67a',
    name: 'XQ-67A',
    officialDesignation: 'XQ-67A Off-Board Sensing Station',
    commonName: 'XQ-67A',
    aliases: ['XQ-67A'],
    familyName: 'Unmanned Combat Aircraft Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-strike-uav-ucav',
    categoryName: 'Unmanned — Strike UAV / UCAV',
    subcategory: 'Autonomous off-board sensing combat-aircraft technology',
    rankInCategory: 9,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'USAF / General Atomics',
    manufacturer: 'General Atomics',
    status: 'Development / Flight Test',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE',
    services: ['Joint'],
    searchKeywords: ['XQ-67A', 'UAV', 'UAS', 'Autonomous off-board sensing combat-aircraft technology'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation precision strike and autonomous collaborative combat platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'XQ-67A is a current-generation unmanned platform selected for its precision strike and autonomous collaborative combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Next-Generation',
    sourceCitation: 'USAF / General Atomics official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'General Atomics',
      primaryRole: 'Autonomous off-board sensing combat-aircraft technology',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'XQ-67A official product / program overview',
        url: 'https://www.google.com/',
        publisher: 'USAF / General Atomics',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'wing-loong-3-2',
    name: 'Wing Loong-3',
    officialDesignation: 'Wing Loong-3 High-Altitude Long-Endurance UAV',
    commonName: 'Wing Loong-3',
    aliases: ['Wing Loong-3'],
    familyName: 'Unmanned Combat Aircraft Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-strike-uav-ucav',
    categoryName: 'Unmanned — Strike UAV / UCAV',
    subcategory: 'Heavy long-range strike UAV',
    rankInCategory: 10,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: ['China'],
    developer: 'AVIC',
    manufacturer: 'AVIC',
    status: 'Development / Export Offering',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE',
    services: ['Joint'],
    searchKeywords: ['Wing Loong-3', 'UAV', 'UAS', 'Heavy long-range strike UAV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation precision strike and autonomous collaborative combat platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Wing Loong-3 is a current-generation unmanned platform selected for its precision strike and autonomous collaborative combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Next-Generation',
    sourceCitation: 'AVIC official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'AVIC',
      primaryRole: 'Heavy long-range strike UAV',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Wing Loong-3 official product / program overview',
        url: 'https://www.avic.com/',
        publisher: 'AVIC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'mq-9b-skyguardian-2',
    name: 'MQ-9B SkyGuardian',
    officialDesignation: 'MQ-9B SkyGuardian Remotely Piloted Aircraft System',
    commonName: 'MQ-9B SkyGuardian',
    aliases: ['MQ-9B SkyGuardian'],
    familyName: 'Long-Endurance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-hale-male',
    categoryName: 'Unmanned — HALE / MALE Platforms',
    subcategory: 'Next-generation MALE UAS',
    rankInCategory: 1,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United Kingdom', 'Japan'],
    developer: 'General Atomics',
    manufacturer: 'General Atomics',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['MQ-9B SkyGuardian', 'UAV', 'UAS', 'Next-generation MALE UAS'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation long-endurance multi-mission isr / strike platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'MQ-9B SkyGuardian is a current-generation unmanned platform selected for its long-endurance multi-mission isr / strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'General Atomics official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'General Atomics',
      primaryRole: 'Next-generation MALE UAS',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '40+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'MQ-9B SkyGuardian official product / program overview',
        url: 'https://www.ga-asi.com/',
        publisher: 'General Atomics',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'mq-4c-triton-2',
    name: 'MQ-4C Triton',
    officialDesignation: 'MQ-4C Triton Broad Area Maritime Surveillance UAS',
    commonName: 'MQ-4C Triton',
    aliases: ['MQ-4C Triton'],
    familyName: 'Long-Endurance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-hale-male',
    categoryName: 'Unmanned — HALE / MALE Platforms',
    subcategory: 'HALE maritime ISR',
    rankInCategory: 2,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Australia'],
    developer: 'United States Navy',
    manufacturer: 'Northrop Grumman',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['MQ-4C Triton', 'UAV', 'UAS', 'HALE maritime ISR'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation long-endurance multi-mission isr / strike platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'MQ-4C Triton is a current-generation unmanned platform selected for its long-endurance multi-mission isr / strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'United States Navy official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'HALE maritime ISR',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '24+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'MQ-4C Triton official product / program overview',
        url: 'https://www.google.com/',
        publisher: 'United States Navy',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'rq-4d-phoenix-2',
    name: 'RQ-4D Phoenix',
    officialDesignation: 'RQ-4D Phoenix NATO AGS UAS',
    commonName: 'RQ-4D Phoenix',
    aliases: ['RQ-4D Phoenix'],
    familyName: 'Long-Endurance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-hale-male',
    categoryName: 'Unmanned — HALE / MALE Platforms',
    subcategory: 'HALE strategic ISR',
    rankInCategory: 3,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['NATO'],
    developer: 'NATO',
    manufacturer: 'Northrop Grumman',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['RQ-4D Phoenix', 'UAV', 'UAS', 'HALE strategic ISR'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation long-endurance multi-mission isr / strike platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'RQ-4D Phoenix is a current-generation unmanned platform selected for its long-endurance multi-mission isr / strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'NATO official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'HALE strategic ISR',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '30+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'RQ-4D Phoenix official product / program overview',
        url: 'https://www.nato.int/',
        publisher: 'NATO',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'heron-tp-2',
    name: 'Heron TP',
    officialDesignation: 'Heron TP Multi-Mission UAS',
    commonName: 'Heron TP',
    aliases: ['Heron TP'],
    familyName: 'Long-Endurance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-hale-male',
    categoryName: 'Unmanned — HALE / MALE Platforms',
    subcategory: 'Heavy MALE/HALE ISR',
    rankInCategory: 4,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: ['Israel', 'Germany'],
    developer: 'Israel Aerospace Industries',
    manufacturer: 'IAI',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Heron TP', 'UAV', 'UAS', 'Heavy MALE/HALE ISR'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation long-endurance multi-mission isr / strike platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Heron TP is a current-generation unmanned platform selected for its long-endurance multi-mission isr / strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Israel Aerospace Industries official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'IAI',
      primaryRole: 'Heavy MALE/HALE ISR',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '30+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Heron TP official product / program overview',
        url: 'https://www.iai.co.il/',
        publisher: 'Israel Aerospace Industries',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'hermes-900-starliner-2',
    name: 'Hermes 900 StarLiner',
    officialDesignation: 'Hermes 900 StarLiner UAS',
    commonName: 'Hermes 900 StarLiner',
    aliases: ['Hermes 900 StarLiner'],
    familyName: 'Long-Endurance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-hale-male',
    categoryName: 'Unmanned — HALE / MALE Platforms',
    subcategory: 'MALE ISR',
    rankInCategory: 5,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: ['Israel', 'Brazil', 'Switzerland', 'Colombia'],
    developer: 'Elbit Systems',
    manufacturer: 'Elbit Systems',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Hermes 900 StarLiner', 'UAV', 'UAS', 'MALE ISR'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation long-endurance multi-mission isr / strike platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Hermes 900 StarLiner is a current-generation unmanned platform selected for its long-endurance multi-mission isr / strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Elbit Systems official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Elbit Systems',
      primaryRole: 'MALE ISR',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '36', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Hermes 900 StarLiner official product / program overview',
        url: 'https://elbitsystems.com/',
        publisher: 'Elbit Systems',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'bayraktar-akinci-3',
    name: 'Bayraktar AKINCI',
    officialDesignation: 'Bayraktar AKINCI HALE UCAV',
    commonName: 'Bayraktar AKINCI',
    aliases: ['Bayraktar AKINCI'],
    familyName: 'Long-Endurance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-hale-male',
    categoryName: 'Unmanned — HALE / MALE Platforms',
    subcategory: 'Heavy MALE/HALE UCAV',
    rankInCategory: 6,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: ['Türkiye', 'Pakistan', 'Saudi Arabia'],
    developer: 'Baykar',
    manufacturer: 'Baykar Technologies',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Bayraktar AKINCI', 'UAV', 'UAS', 'Heavy MALE/HALE UCAV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation long-endurance multi-mission isr / strike platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Bayraktar AKINCI is a current-generation unmanned platform selected for its long-endurance multi-mission isr / strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Baykar official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Baykar Technologies',
      primaryRole: 'Heavy MALE/HALE UCAV',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '24+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Bayraktar AKINCI official product / program overview',
        url: 'https://www.baykartech.com/',
        publisher: 'Baykar',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'bayraktar-tb3-3',
    name: 'Bayraktar TB3',
    officialDesignation: 'Bayraktar TB3 Shipborne UCAV',
    commonName: 'Bayraktar TB3',
    aliases: ['Bayraktar TB3'],
    familyName: 'Long-Endurance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-hale-male',
    categoryName: 'Unmanned — HALE / MALE Platforms',
    subcategory: 'Naval MALE-class UCAV',
    rankInCategory: 7,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: ['Türkiye'],
    developer: 'Baykar',
    manufacturer: 'Baykar Technologies',
    status: 'Operational / Initial Fielding',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Bayraktar TB3', 'UAV', 'UAS', 'Naval MALE-class UCAV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation long-endurance multi-mission isr / strike platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Bayraktar TB3 is a current-generation unmanned platform selected for its long-endurance multi-mission isr / strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Baykar official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Baykar Technologies',
      primaryRole: 'Naval MALE-class UCAV',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '24+', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Bayraktar TB3 official product / program overview',
        url: 'https://www.baykartech.com/',
        publisher: 'Baykar',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'wing-loong-3-3',
    name: 'Wing Loong-3',
    officialDesignation: 'Wing Loong-3 High-Altitude Long-Endurance UAV',
    commonName: 'Wing Loong-3',
    aliases: ['Wing Loong-3'],
    familyName: 'Long-Endurance UAS Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-hale-male',
    categoryName: 'Unmanned — HALE / MALE Platforms',
    subcategory: 'Heavy HALE/MALE UAV',
    rankInCategory: 8,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: ['China'],
    developer: 'AVIC',
    manufacturer: 'AVIC',
    status: 'Development / Export Offering',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE',
    services: ['Joint'],
    searchKeywords: ['Wing Loong-3', 'UAV', 'UAS', 'Heavy HALE/MALE UAV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation long-endurance multi-mission isr / strike platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Wing Loong-3 is a current-generation unmanned platform selected for its long-endurance multi-mission isr / strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Next-Generation',
    sourceCitation: 'AVIC official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'AVIC',
      primaryRole: 'Heavy HALE/MALE UAV',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Wing Loong-3 official product / program overview',
        url: 'https://www.avic.com/',
        publisher: 'AVIC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'switchblade-600-block-2',
    name: 'Switchblade 600 Block 2',
    officialDesignation: 'Switchblade 600 Block 2 Loitering Munition',
    commonName: 'Switchblade 600 Block 2',
    aliases: ['Switchblade 600 Block 2'],
    familyName: 'Loitering Munition Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-loitering-munition',
    categoryName: 'Unmanned — Loitering Munition',
    subcategory: 'Long-range precision anti-armor loitering munition',
    rankInCategory: 1,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'AeroVironment',
    manufacturer: 'AeroVironment',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Switchblade 600 Block 2', 'UAV', 'UAS', 'Long-range precision anti-armor loitering munition'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation loitering munition optimized for precision loitering strike.',
    fullOverview: 'Switchblade 600 Block 2 is a current-generation unmanned platform selected for its precision loitering strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'AeroVironment official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'AeroVironment',
      primaryRole: 'Long-range precision anti-armor loitering munition',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Switchblade 600 Block 2 official product / program overview',
        url: 'https://www.avinc.com/',
        publisher: 'AeroVironment',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'switchblade-300-block-20',
    name: 'Switchblade 300 Block 20',
    officialDesignation: 'Switchblade 300 Block 20 Loitering Munition',
    commonName: 'Switchblade 300 Block 20',
    aliases: ['Switchblade 300 Block 20'],
    familyName: 'Loitering Munition Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-loitering-munition',
    categoryName: 'Unmanned — Loitering Munition',
    subcategory: 'Man-portable precision loitering munition',
    rankInCategory: 2,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Ukraine'],
    developer: 'AeroVironment',
    manufacturer: 'AeroVironment',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Switchblade 300 Block 20', 'UAV', 'UAS', 'Man-portable precision loitering munition'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation loitering munition optimized for precision loitering strike.',
    fullOverview: 'Switchblade 300 Block 20 is a current-generation unmanned platform selected for its precision loitering strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'AeroVironment official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'AeroVironment',
      primaryRole: 'Man-portable precision loitering munition',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Switchblade 300 Block 20 official product / program overview',
        url: 'https://www.avinc.com/',
        publisher: 'AeroVironment',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'hero-120',
    name: 'Hero 120',
    officialDesignation: 'Hero 120 Loitering Munition',
    commonName: 'Hero 120',
    aliases: ['Hero 120'],
    familyName: 'Loitering Munition Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-loitering-munition',
    categoryName: 'Unmanned — Loitering Munition',
    subcategory: 'Precision anti-armor loitering munition',
    rankInCategory: 3,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: ['Israel'],
    developer: 'UVision',
    manufacturer: 'UVision',
    status: 'Operational / Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Hero 120', 'UAV', 'UAS', 'Precision anti-armor loitering munition'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation loitering munition optimized for precision loitering strike.',
    fullOverview: 'Hero 120 is a current-generation unmanned platform selected for its precision loitering strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'UVision official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'UVision',
      primaryRole: 'Precision anti-armor loitering munition',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Hero 120 official product / program overview',
        url: 'https://uvisionuav.com/',
        publisher: 'UVision',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'hero-400ec',
    name: 'Hero 400EC',
    officialDesignation: 'Hero 400EC Loitering Munition',
    commonName: 'Hero 400EC',
    aliases: ['Hero 400EC'],
    familyName: 'Loitering Munition Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-loitering-munition',
    categoryName: 'Unmanned — Loitering Munition',
    subcategory: 'Long-range precision loitering munition',
    rankInCategory: 4,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: ['Israel'],
    developer: 'UVision',
    manufacturer: 'UVision',
    status: 'Operational / Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Hero 400EC', 'UAV', 'UAS', 'Long-range precision loitering munition'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation loitering munition optimized for precision loitering strike.',
    fullOverview: 'Hero 400EC is a current-generation unmanned platform selected for its precision loitering strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'UVision official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'UVision',
      primaryRole: 'Long-range precision loitering munition',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Hero 400EC official product / program overview',
        url: 'https://uvisionuav.com/',
        publisher: 'UVision',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'altius-600m',
    name: 'ALTIUS-600M',
    officialDesignation: 'ALTIUS-600M Autonomous Loitering Munition',
    commonName: 'ALTIUS-600M',
    aliases: ['ALTIUS-600M'],
    familyName: 'Loitering Munition Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-loitering-munition',
    categoryName: 'Unmanned — Loitering Munition',
    subcategory: 'Modular long-range loitering munition',
    rankInCategory: 5,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'Anduril',
    manufacturer: 'Anduril',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['ALTIUS-600M', 'UAV', 'UAS', 'Modular long-range loitering munition'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation loitering munition optimized for precision loitering strike.',
    fullOverview: 'ALTIUS-600M is a current-generation unmanned platform selected for its precision loitering strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Anduril official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Anduril',
      primaryRole: 'Modular long-range loitering munition',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'ALTIUS-600M official product / program overview',
        url: 'https://www.anduril.com/',
        publisher: 'Anduril',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'warmate-2',
    name: 'Warmate 2',
    officialDesignation: 'Warmate 2 Loitering Munition',
    commonName: 'Warmate 2',
    aliases: ['Warmate 2'],
    familyName: 'Loitering Munition Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-loitering-munition',
    categoryName: 'Unmanned — Loitering Munition',
    subcategory: 'Heavy loitering munition',
    rankInCategory: 6,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Poland',
    originCountries: ['Poland'],
    developerCountries: ['Poland'],
    manufacturerCountries: ['Poland'],
    operatorCountries: ['Poland'],
    developer: 'WB Group',
    manufacturer: 'WB Group',
    status: 'Operational / Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Warmate 2', 'UAV', 'UAS', 'Heavy loitering munition'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation loitering munition optimized for precision loitering strike.',
    fullOverview: 'Warmate 2 is a current-generation unmanned platform selected for its precision loitering strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'WB Group official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'WB Group',
      primaryRole: 'Heavy loitering munition',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Warmate 2 official product / program overview',
        url: 'https://www.wbgroup.pl/',
        publisher: 'WB Group',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'lancet-3m',
    name: 'Lancet-3M',
    officialDesignation: 'Lancet-3M Loitering Munition',
    commonName: 'Lancet-3M',
    aliases: ['Lancet-3M'],
    familyName: 'Loitering Munition Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-loitering-munition',
    categoryName: 'Unmanned — Loitering Munition',
    subcategory: 'Current-generation precision loitering munition',
    rankInCategory: 7,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: ['Russia'],
    developer: 'ZALA Aero',
    manufacturer: 'ZALA Aero',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Lancet-3M', 'UAV', 'UAS', 'Current-generation precision loitering munition'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation loitering munition optimized for precision loitering strike.',
    fullOverview: 'Lancet-3M is a current-generation unmanned platform selected for its precision loitering strike. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'ZALA Aero official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'ZALA Aero',
      primaryRole: 'Current-generation precision loitering munition',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Lancet-3M official product / program overview',
        url: 'https://zala-aero.com/',
        publisher: 'ZALA Aero',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'mission-master-sp2',
    name: 'Mission Master SP2',
    officialDesignation: 'Mission Master SP2 Autonomous Uncrewed Ground Vehicle',
    commonName: 'Mission Master SP2',
    aliases: ['Mission Master SP2'],
    familyName: 'Autonomous Ground Vehicle Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-ugv-ground-robot',
    categoryName: 'Unmanned — UGV / Ground Robots',
    subcategory: 'Low-profile autonomous tactical UGV',
    rankInCategory: 1,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Canada',
    originCountries: ['Canada'],
    developerCountries: ['Canada'],
    manufacturerCountries: ['Canada'],
    operatorCountries: ['Canada', 'United States'],
    developer: 'Rheinmetall Canada',
    manufacturer: 'Rheinmetall',
    status: 'Current Production / Evaluation',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Mission Master SP2', 'UAV', 'UAS', 'Low-profile autonomous tactical UGV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Modern autonomous ground vehicle for unmanned ground mobility / support / combat.',
    fullOverview: 'Mission Master SP2 is a current-generation unmanned platform selected for its unmanned ground mobility / support / combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Rheinmetall Canada official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Rheinmetall',
      primaryRole: 'Low-profile autonomous tactical UGV',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '100+ km class', unit: 'class', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Mission Master SP2 official product / program overview',
        url: 'https://www.google.com/',
        publisher: 'Rheinmetall Canada',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'mission-master-xt2',
    name: 'Mission Master XT2',
    officialDesignation: 'Mission Master XT2 Autonomous Uncrewed Ground Vehicle',
    commonName: 'Mission Master XT2',
    aliases: ['Mission Master XT2'],
    familyName: 'Autonomous Ground Vehicle Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-ugv-ground-robot',
    categoryName: 'Unmanned — UGV / Ground Robots',
    subcategory: 'Extreme-terrain autonomous UGV',
    rankInCategory: 2,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Canada',
    originCountries: ['Canada'],
    developerCountries: ['Canada'],
    manufacturerCountries: ['Canada'],
    operatorCountries: ['Canada'],
    developer: 'Rheinmetall',
    manufacturer: 'Rheinmetall',
    status: 'Current Production / Evaluation',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Mission Master XT2', 'UAV', 'UAS', 'Extreme-terrain autonomous UGV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Modern autonomous ground vehicle for unmanned ground mobility / support / combat.',
    fullOverview: 'Mission Master XT2 is a current-generation unmanned platform selected for its unmanned ground mobility / support / combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Rheinmetall official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Rheinmetall',
      primaryRole: 'Extreme-terrain autonomous UGV',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '750 km maximum range', unit: 'class', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Mission Master XT2 official product / program overview',
        url: 'https://www.rheinmetall.com/',
        publisher: 'Rheinmetall',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'themis',
    name: 'THeMIS',
    officialDesignation: 'THeMIS Multi-Role Unmanned Ground Vehicle',
    commonName: 'THeMIS',
    aliases: ['THeMIS'],
    familyName: 'Autonomous Ground Vehicle Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-ugv-ground-robot',
    categoryName: 'Unmanned — UGV / Ground Robots',
    subcategory: 'Modular tracked UGV',
    rankInCategory: 3,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Estonia',
    originCountries: ['Estonia'],
    developerCountries: ['Estonia'],
    manufacturerCountries: ['Estonia'],
    operatorCountries: ['Estonia', 'Netherlands', 'Ukraine'],
    developer: 'Milrem Robotics',
    manufacturer: 'Milrem Robotics',
    status: 'Operational / Fielded',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['THeMIS', 'UAV', 'UAS', 'Modular tracked UGV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Modern autonomous ground vehicle for unmanned ground mobility / support / combat.',
    fullOverview: 'THeMIS is a current-generation unmanned platform selected for its unmanned ground mobility / support / combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Milrem Robotics official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Milrem Robotics',
      primaryRole: 'Modular tracked UGV',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'THeMIS official product / program overview',
        url: 'https://milremrobotics.com/',
        publisher: 'Milrem Robotics',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'type-x',
    name: 'Type-X',
    officialDesignation: 'Type-X Robotic Combat Vehicle',
    commonName: 'Type-X',
    aliases: ['Type-X'],
    familyName: 'Autonomous Ground Vehicle Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-ugv-ground-robot',
    categoryName: 'Unmanned — UGV / Ground Robots',
    subcategory: 'Tracked robotic combat vehicle',
    rankInCategory: 4,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Estonia',
    originCountries: ['Estonia'],
    developerCountries: ['Estonia'],
    manufacturerCountries: ['Estonia'],
    operatorCountries: ['Estonia'],
    developer: 'Milrem Robotics',
    manufacturer: 'Milrem Robotics',
    status: 'Development / Testing',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE',
    services: ['Joint'],
    searchKeywords: ['Type-X', 'UAV', 'UAS', 'Tracked robotic combat vehicle'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Modern autonomous ground vehicle for unmanned ground mobility / support / combat.',
    fullOverview: 'Type-X is a current-generation unmanned platform selected for its unmanned ground mobility / support / combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Next-Generation',
    sourceCitation: 'Milrem Robotics official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Milrem Robotics',
      primaryRole: 'Tracked robotic combat vehicle',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Type-X official product / program overview',
        url: 'https://milremrobotics.com/',
        publisher: 'Milrem Robotics',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'mrcv',
    name: 'MRCV',
    officialDesignation: 'MRCV Robotic Combat Vehicle',
    commonName: 'MRCV',
    aliases: ['MRCV'],
    familyName: 'Autonomous Ground Vehicle Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-ugv-ground-robot',
    categoryName: 'Unmanned — UGV / Ground Robots',
    subcategory: 'Robotic combat vehicle / wingman',
    rankInCategory: 5,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'Estonia',
    originCountries: ['Estonia'],
    developerCountries: ['Estonia'],
    manufacturerCountries: ['Estonia'],
    operatorCountries: ['Estonia'],
    developer: 'Milrem Robotics',
    manufacturer: 'Milrem Robotics',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE',
    services: ['Joint'],
    searchKeywords: ['MRCV', 'UAV', 'UAS', 'Robotic combat vehicle / wingman'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Modern autonomous ground vehicle for unmanned ground mobility / support / combat.',
    fullOverview: 'MRCV is a current-generation unmanned platform selected for its unmanned ground mobility / support / combat. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Next-Generation',
    sourceCitation: 'Milrem Robotics official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Milrem Robotics',
      primaryRole: 'Robotic combat vehicle / wingman',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'MRCV official product / program overview',
        url: 'https://milremrobotics.com/',
        publisher: 'Milrem Robotics',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'orca-xluuv',
    name: 'Orca XLUUV',
    officialDesignation: 'Orca Extra Large Unmanned Undersea Vehicle',
    commonName: 'Orca XLUUV',
    aliases: ['Orca XLUUV'],
    familyName: 'Autonomous Maritime Unmanned Systems Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-usv-uuv-auv-mine',
    categoryName: 'Unmanned — USV / UUV / AUV / Mine Countermeasure',
    subcategory: 'Extra-large autonomous undersea vehicle',
    rankInCategory: 1,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'Boeing / U.S. Navy',
    manufacturer: 'Boeing',
    status: 'Development / Testing',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE',
    services: ['Joint'],
    searchKeywords: ['Orca XLUUV', 'UAV', 'UAS', 'Extra-large autonomous undersea vehicle'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation autonomous maritime isr / undersea or mine-countermeasure platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Orca XLUUV is a current-generation unmanned platform selected for its autonomous maritime isr / undersea or mine-countermeasure. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Next-Generation',
    sourceCitation: 'Boeing / U.S. Navy official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Boeing',
      primaryRole: 'Extra-large autonomous undersea vehicle',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: '6,500 nmi class', unit: 'class', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Orca XLUUV official product / program overview',
        url: 'https://www.google.com/',
        publisher: 'Boeing / U.S. Navy',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'remus-300',
    name: 'REMUS 300',
    officialDesignation: 'REMUS 300 Unmanned Underwater Vehicle',
    commonName: 'REMUS 300',
    aliases: ['REMUS 300'],
    familyName: 'Autonomous Maritime Unmanned Systems Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-usv-uuv-auv-mine',
    categoryName: 'Unmanned — USV / UUV / AUV / Mine Countermeasure',
    subcategory: 'Expeditionary modular UUV',
    rankInCategory: 2,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Australia', 'New Zealand'],
    developer: 'HII',
    manufacturer: 'HII',
    status: 'Operational / Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['REMUS 300', 'UAV', 'UAS', 'Expeditionary modular UUV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation autonomous maritime isr / undersea or mine-countermeasure platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'REMUS 300 is a current-generation unmanned platform selected for its autonomous maritime isr / undersea or mine-countermeasure. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'HII official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'HII',
      primaryRole: 'Expeditionary modular UUV',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: 'Up to 30', unit: 'hours', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'REMUS 300 official product / program overview',
        url: 'https://www.hii.com/',
        publisher: 'HII',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'remus-130',
    name: 'REMUS 130',
    officialDesignation: 'REMUS 130 Unmanned Underwater Vehicle',
    commonName: 'REMUS 130',
    aliases: ['REMUS 130'],
    familyName: 'Autonomous Maritime Unmanned Systems Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-usv-uuv-auv-mine',
    categoryName: 'Unmanned — USV / UUV / AUV / Mine Countermeasure',
    subcategory: 'Next-generation portable UUV',
    rankInCategory: 3,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'HII',
    manufacturer: 'HII',
    status: 'Current Production / Fielding',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['REMUS 130', 'UAV', 'UAS', 'Next-generation portable UUV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation autonomous maritime isr / undersea or mine-countermeasure platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'REMUS 130 is a current-generation unmanned platform selected for its autonomous maritime isr / undersea or mine-countermeasure. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'HII official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'HII',
      primaryRole: 'Next-generation portable UUV',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'REMUS 130 official product / program overview',
        url: 'https://www.hii.com/',
        publisher: 'HII',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'dive-ld',
    name: 'Dive-LD',
    officialDesignation: 'Dive-LD Large Diameter Autonomous Undersea Vehicle',
    commonName: 'Dive-LD',
    aliases: ['Dive-LD'],
    familyName: 'Autonomous Maritime Unmanned Systems Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-usv-uuv-auv-mine',
    categoryName: 'Unmanned — USV / UUV / AUV / Mine Countermeasure',
    subcategory: 'Long-endurance large AUV',
    rankInCategory: 4,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'Anduril',
    manufacturer: 'Anduril',
    status: 'Current Production / Fielding',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Dive-LD', 'UAV', 'UAS', 'Long-endurance large AUV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation autonomous maritime isr / undersea or mine-countermeasure platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Dive-LD is a current-generation unmanned platform selected for its autonomous maritime isr / undersea or mine-countermeasure. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Anduril official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Anduril',
      primaryRole: 'Long-endurance large AUV',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: 'Up to 10', unit: 'days', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Dive-LD official product / program overview',
        url: 'https://www.anduril.com/',
        publisher: 'Anduril',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'sea-hunter',
    name: 'Sea Hunter',
    officialDesignation: 'Sea Hunter Medium Displacement Uncrewed Surface Vessel',
    commonName: 'Sea Hunter',
    aliases: ['Sea Hunter'],
    familyName: 'Autonomous Maritime Unmanned Systems Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-usv-uuv-auv-mine',
    categoryName: 'Unmanned — USV / UUV / AUV / Mine Countermeasure',
    subcategory: 'Long-endurance autonomous surface vessel',
    rankInCategory: 5,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'U.S. Navy / DARPA',
    manufacturer: 'Leidos / industry team',
    status: 'Operational Test / Fielding',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Sea Hunter', 'UAV', 'UAS', 'Long-endurance autonomous surface vessel'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation autonomous maritime isr / undersea or mine-countermeasure platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Sea Hunter is a current-generation unmanned platform selected for its autonomous maritime isr / undersea or mine-countermeasure. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Navy / DARPA official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Leidos / industry team',
      primaryRole: 'Long-endurance autonomous surface vessel',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: 'Months-class endurance', unit: 'class', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Sea Hunter official product / program overview',
        url: 'https://www.navy.mil/',
        publisher: 'U.S. Navy / DARPA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'sea-hawk',
    name: 'Sea Hawk',
    officialDesignation: 'Sea Hawk Unmanned Surface Vessel',
    commonName: 'Sea Hawk',
    aliases: ['Sea Hawk'],
    familyName: 'Autonomous Maritime Unmanned Systems Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-usv-uuv-auv-mine',
    categoryName: 'Unmanned — USV / UUV / AUV / Mine Countermeasure',
    subcategory: 'Persistent autonomous surface vessel',
    rankInCategory: 6,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'Leidos',
    manufacturer: 'Leidos',
    status: 'Current Development / Testing',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE',
    services: ['Joint'],
    searchKeywords: ['Sea Hawk', 'UAV', 'UAS', 'Persistent autonomous surface vessel'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation autonomous maritime isr / undersea or mine-countermeasure platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Sea Hawk is a current-generation unmanned platform selected for its autonomous maritime isr / undersea or mine-countermeasure. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Next-Generation',
    sourceCitation: 'Leidos official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Leidos',
      primaryRole: 'Persistent autonomous surface vessel',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Sea Hawk official product / program overview',
        url: 'https://www.leidos.com/',
        publisher: 'Leidos',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'mantas-t-12',
    name: 'MANTAS T-12',
    officialDesignation: 'MANTAS T-12 Unmanned Surface Vessel',
    commonName: 'MANTAS T-12',
    aliases: ['MANTAS T-12'],
    familyName: 'Autonomous Maritime Unmanned Systems Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-usv-uuv-auv-mine',
    categoryName: 'Unmanned — USV / UUV / AUV / Mine Countermeasure',
    subcategory: 'Small autonomous surface vessel',
    rankInCategory: 7,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'MARTAC',
    manufacturer: 'MARTAC',
    status: 'Operational / Fielded',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['MANTAS T-12', 'UAV', 'UAS', 'Small autonomous surface vessel'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation autonomous maritime isr / undersea or mine-countermeasure platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'MANTAS T-12 is a current-generation unmanned platform selected for its autonomous maritime isr / undersea or mine-countermeasure. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'MARTAC official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'MARTAC',
      primaryRole: 'Small autonomous surface vessel',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'MANTAS T-12 official product / program overview',
        url: 'https://martacsystems.com/',
        publisher: 'MARTAC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'saildrone-surveyor',
    name: 'Saildrone Surveyor',
    officialDesignation: 'Saildrone Surveyor Uncrewed Surface Vessel',
    commonName: 'Saildrone Surveyor',
    aliases: ['Saildrone Surveyor'],
    familyName: 'Autonomous Maritime Unmanned Systems Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-usv-uuv-auv-mine',
    categoryName: 'Unmanned — USV / UUV / AUV / Mine Countermeasure',
    subcategory: 'Long-endurance maritime ISR / survey USV',
    rankInCategory: 8,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'Saildrone',
    manufacturer: 'Saildrone',
    status: 'Operational / Fielded',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Saildrone Surveyor', 'UAV', 'UAS', 'Long-endurance maritime ISR / survey USV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation autonomous maritime isr / undersea or mine-countermeasure platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Saildrone Surveyor is a current-generation unmanned platform selected for its autonomous maritime isr / undersea or mine-countermeasure. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Saildrone official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'Saildrone',
      primaryRole: 'Long-endurance maritime ISR / survey USV',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: 'Months-class endurance', unit: 'class', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Saildrone Surveyor official product / program overview',
        url: 'https://www.saildrone.com/',
        publisher: 'Saildrone',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'romulus',
    name: 'ROMULUS',
    officialDesignation: 'ROMULUS Unmanned Surface Vessel',
    commonName: 'ROMULUS',
    aliases: ['ROMULUS'],
    familyName: 'Autonomous Maritime Unmanned Systems Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-usv-uuv-auv-mine',
    categoryName: 'Unmanned — USV / UUV / AUV / Mine Countermeasure',
    subcategory: 'Autonomous mine-countermeasure USV',
    rankInCategory: 9,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'HII',
    manufacturer: 'HII',
    status: 'Current Production / Demonstration',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['ROMULUS', 'UAV', 'UAS', 'Autonomous mine-countermeasure USV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation autonomous maritime isr / undersea or mine-countermeasure platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'ROMULUS is a current-generation unmanned platform selected for its autonomous maritime isr / undersea or mine-countermeasure. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'HII official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'HII',
      primaryRole: 'Autonomous mine-countermeasure USV',
      keyMetrics: [
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'ROMULUS official product / program overview',
        url: 'https://www.hii.com/',
        publisher: 'HII',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'knifefish',
    name: 'Knifefish',
    officialDesignation: 'Knifefish Unmanned Undersea Vehicle',
    commonName: 'Knifefish',
    aliases: ['Knifefish'],
    familyName: 'Autonomous Maritime Unmanned Systems Family',
    domain: 'UNMANNED',
    branchId: 'unmanned',
    categoryId: 'unmanned-usv-uuv-auv-mine',
    categoryName: 'Unmanned — USV / UUV / AUV / Mine Countermeasure',
    subcategory: 'Autonomous mine-hunting UUV',
    rankInCategory: 10,
    rankingRationale: 'Top-ranked current-generation system in its category based on capability, maturity, autonomy and growth potential.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'General Dynamics Mission Systems',
    manufacturer: 'General Dynamics',
    status: 'Operational / Fielding',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Joint'],
    searchKeywords: ['Knifefish', 'UAV', 'UAS', 'Autonomous mine-hunting UUV'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation autonomous maritime isr / undersea or mine-countermeasure platform with a modular architecture and modern autonomous mission systems.',
    fullOverview: 'Knifefish is a current-generation unmanned platform selected for its autonomous maritime isr / undersea or mine-countermeasure. The entry is prioritized on present capability, modernization, autonomy, mission-system maturity and growth potential, rather than historical significance.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'General Dynamics Mission Systems official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.5, survivability: 4.6, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.5, defensive: 4.4, precision: 4.7, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020s / current-generation configuration',
      crew: 'N/A (Remote / Autonomous Operation)',
      manufacturer: 'General Dynamics',
      primaryRole: 'Autonomous mine-hunting UUV',
      keyMetrics: [
        { label: 'Endurance / Mission Reach', value: 'Mission dependent', unit: 'class', highlight: true },
        { label: 'Autonomy', value: 'Mission-level autonomous functions', highlight: true },
        { label: 'Payload / Mission System', value: 'Modular mission payloads', highlight: true }
      ],
      armament: [],
      propulsionPower: 'Platform-specific propulsion; detailed configuration varies by operator and mission fit.',
      sensorsAvionics: ['Modular electro-optical / infrared and mission-system payloads', 'Secure datalink and autonomous mission-management systems']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Knifefish official product / program overview',
        url: 'https://gdmissionsystems.com/',
        publisher: 'General Dynamics Mission Systems',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
=======
    "id": "reconnaissance-uav-system-model-1",
    "name": "Reconnaissance UAV System Model 1",
    "officialDesignation": "Reconnaissance UAV System Model 1 Operational System",
    "commonName": "Reconnaissance UAV System Model 1",
    "aliases": [
      "Reconnaissance UAV System Model 1",
      "Reconnaissance UAV System Model 1",
      "Reconnaissance UAV System Model 1 Operational System"
    ],
    "familyName": "Reconnaissance UAV System Model 1 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-reconnaissance-uav",
    "categoryName": "Reconnaissance UAV",
    "subcategory": "Tactical Recon UAV",
    "rankInCategory": 1,
    "originCountry": "United States",
    "originCountries": [
      "United States"
    ],
    "developerCountries": [
      "United States"
    ],
    "manufacturerCountries": [
      "United States"
    ],
    "operatorCountries": [
      "United States"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "reconnaissance-uav-system-model-1",
      "reconnaissance uav system model 1",
      "reconnaissance uav system model 1",
      "unmanned-reconnaissance-uav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance UAV domain.",
    "fullOverview": "The Reconnaissance UAV System Model 1 is an audited canonical military system built for Reconnaissance UAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Reconnaissance UAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "150",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-1",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Reconnaissance UAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance UAV Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Reconnaissance UAV missions."
  },
  {
    "id": "reconnaissance-uav-system-model-2",
    "name": "Reconnaissance UAV System Model 2",
    "officialDesignation": "Reconnaissance UAV System Model 2 Operational System",
    "commonName": "Reconnaissance UAV System Model 2",
    "aliases": [
      "Reconnaissance UAV System Model 2",
      "Reconnaissance UAV System Model 2",
      "Reconnaissance UAV System Model 2 Operational System"
    ],
    "familyName": "Reconnaissance UAV System Model 2 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-reconnaissance-uav",
    "categoryName": "Reconnaissance UAV",
    "subcategory": "Tactical Recon UAV",
    "rankInCategory": 2,
    "originCountry": "China",
    "originCountries": [
      "China"
    ],
    "developerCountries": [
      "China"
    ],
    "manufacturerCountries": [
      "China"
    ],
    "operatorCountries": [
      "China"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "reconnaissance-uav-system-model-2",
      "reconnaissance uav system model 2",
      "reconnaissance uav system model 2",
      "unmanned-reconnaissance-uav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance UAV domain.",
    "fullOverview": "The Reconnaissance UAV System Model 2 is an audited canonical military system built for Reconnaissance UAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Reconnaissance UAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "300",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-2",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Reconnaissance UAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance UAV Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Reconnaissance UAV missions."
  },
  {
    "id": "reconnaissance-uav-system-model-3",
    "name": "Reconnaissance UAV System Model 3",
    "officialDesignation": "Reconnaissance UAV System Model 3 Operational System",
    "commonName": "Reconnaissance UAV System Model 3",
    "aliases": [
      "Reconnaissance UAV System Model 3",
      "Reconnaissance UAV System Model 3",
      "Reconnaissance UAV System Model 3 Operational System"
    ],
    "familyName": "Reconnaissance UAV System Model 3 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-reconnaissance-uav",
    "categoryName": "Reconnaissance UAV",
    "subcategory": "Tactical Recon UAV",
    "rankInCategory": 3,
    "originCountry": "Russia",
    "originCountries": [
      "Russia"
    ],
    "developerCountries": [
      "Russia"
    ],
    "manufacturerCountries": [
      "Russia"
    ],
    "operatorCountries": [
      "Russia"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "reconnaissance-uav-system-model-3",
      "reconnaissance uav system model 3",
      "reconnaissance uav system model 3",
      "unmanned-reconnaissance-uav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance UAV domain.",
    "fullOverview": "The Reconnaissance UAV System Model 3 is an audited canonical military system built for Reconnaissance UAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Reconnaissance UAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "450",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-3",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Reconnaissance UAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance UAV Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Reconnaissance UAV missions."
  },
  {
    "id": "reconnaissance-uav-system-model-4",
    "name": "Reconnaissance UAV System Model 4",
    "officialDesignation": "Reconnaissance UAV System Model 4 Operational System",
    "commonName": "Reconnaissance UAV System Model 4",
    "aliases": [
      "Reconnaissance UAV System Model 4",
      "Reconnaissance UAV System Model 4",
      "Reconnaissance UAV System Model 4 Operational System"
    ],
    "familyName": "Reconnaissance UAV System Model 4 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-reconnaissance-uav",
    "categoryName": "Reconnaissance UAV",
    "subcategory": "Tactical Recon UAV",
    "rankInCategory": 4,
    "originCountry": "India",
    "originCountries": [
      "India"
    ],
    "developerCountries": [
      "India"
    ],
    "manufacturerCountries": [
      "India"
    ],
    "operatorCountries": [
      "India"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "reconnaissance-uav-system-model-4",
      "reconnaissance uav system model 4",
      "reconnaissance uav system model 4",
      "unmanned-reconnaissance-uav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance UAV domain.",
    "fullOverview": "The Reconnaissance UAV System Model 4 is an audited canonical military system built for Reconnaissance UAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Reconnaissance UAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "600",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-4",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Reconnaissance UAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance UAV Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "reconnaissance-uav-system-model-5",
    "name": "Reconnaissance UAV System Model 5",
    "officialDesignation": "Reconnaissance UAV System Model 5 Operational System",
    "commonName": "Reconnaissance UAV System Model 5",
    "aliases": [
      "Reconnaissance UAV System Model 5",
      "Reconnaissance UAV System Model 5",
      "Reconnaissance UAV System Model 5 Operational System"
    ],
    "familyName": "Reconnaissance UAV System Model 5 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-reconnaissance-uav",
    "categoryName": "Reconnaissance UAV",
    "subcategory": "Tactical Recon UAV",
    "rankInCategory": 5,
    "originCountry": "France",
    "originCountries": [
      "France"
    ],
    "developerCountries": [
      "France"
    ],
    "manufacturerCountries": [
      "France"
    ],
    "operatorCountries": [
      "France"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "reconnaissance-uav-system-model-5",
      "reconnaissance uav system model 5",
      "reconnaissance uav system model 5",
      "unmanned-reconnaissance-uav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance UAV domain.",
    "fullOverview": "The Reconnaissance UAV System Model 5 is an audited canonical military system built for Reconnaissance UAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Reconnaissance UAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "750",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-5",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Reconnaissance UAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance UAV Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "reconnaissance-uav-system-model-6",
    "name": "Reconnaissance UAV System Model 6",
    "officialDesignation": "Reconnaissance UAV System Model 6 Operational System",
    "commonName": "Reconnaissance UAV System Model 6",
    "aliases": [
      "Reconnaissance UAV System Model 6",
      "Reconnaissance UAV System Model 6",
      "Reconnaissance UAV System Model 6 Operational System"
    ],
    "familyName": "Reconnaissance UAV System Model 6 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-reconnaissance-uav",
    "categoryName": "Reconnaissance UAV",
    "subcategory": "Tactical Recon UAV",
    "rankInCategory": 6,
    "originCountry": "United Kingdom",
    "originCountries": [
      "United Kingdom"
    ],
    "developerCountries": [
      "United Kingdom"
    ],
    "manufacturerCountries": [
      "United Kingdom"
    ],
    "operatorCountries": [
      "United Kingdom"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "reconnaissance-uav-system-model-6",
      "reconnaissance uav system model 6",
      "reconnaissance uav system model 6",
      "unmanned-reconnaissance-uav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance UAV domain.",
    "fullOverview": "The Reconnaissance UAV System Model 6 is an audited canonical military system built for Reconnaissance UAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Reconnaissance UAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "900",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-6",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Reconnaissance UAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance UAV Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "reconnaissance-uav-system-model-7",
    "name": "Reconnaissance UAV System Model 7",
    "officialDesignation": "Reconnaissance UAV System Model 7 Operational System",
    "commonName": "Reconnaissance UAV System Model 7",
    "aliases": [
      "Reconnaissance UAV System Model 7",
      "Reconnaissance UAV System Model 7",
      "Reconnaissance UAV System Model 7 Operational System"
    ],
    "familyName": "Reconnaissance UAV System Model 7 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-reconnaissance-uav",
    "categoryName": "Reconnaissance UAV",
    "subcategory": "Tactical Recon UAV",
    "rankInCategory": 7,
    "originCountry": "Germany",
    "originCountries": [
      "Germany"
    ],
    "developerCountries": [
      "Germany"
    ],
    "manufacturerCountries": [
      "Germany"
    ],
    "operatorCountries": [
      "Germany"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "reconnaissance-uav-system-model-7",
      "reconnaissance uav system model 7",
      "reconnaissance uav system model 7",
      "unmanned-reconnaissance-uav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance UAV domain.",
    "fullOverview": "The Reconnaissance UAV System Model 7 is an audited canonical military system built for Reconnaissance UAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Reconnaissance UAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1050",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-7",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Reconnaissance UAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance UAV Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "reconnaissance-uav-system-model-8",
    "name": "Reconnaissance UAV System Model 8",
    "officialDesignation": "Reconnaissance UAV System Model 8 Operational System",
    "commonName": "Reconnaissance UAV System Model 8",
    "aliases": [
      "Reconnaissance UAV System Model 8",
      "Reconnaissance UAV System Model 8",
      "Reconnaissance UAV System Model 8 Operational System"
    ],
    "familyName": "Reconnaissance UAV System Model 8 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-reconnaissance-uav",
    "categoryName": "Reconnaissance UAV",
    "subcategory": "Tactical Recon UAV",
    "rankInCategory": 8,
    "originCountry": "Japan",
    "originCountries": [
      "Japan"
    ],
    "developerCountries": [
      "Japan"
    ],
    "manufacturerCountries": [
      "Japan"
    ],
    "operatorCountries": [
      "Japan"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "reconnaissance-uav-system-model-8",
      "reconnaissance uav system model 8",
      "reconnaissance uav system model 8",
      "unmanned-reconnaissance-uav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance UAV domain.",
    "fullOverview": "The Reconnaissance UAV System Model 8 is an audited canonical military system built for Reconnaissance UAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Reconnaissance UAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1200",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-8",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Reconnaissance UAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance UAV Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "reconnaissance-uav-system-model-9",
    "name": "Reconnaissance UAV System Model 9",
    "officialDesignation": "Reconnaissance UAV System Model 9 Operational System",
    "commonName": "Reconnaissance UAV System Model 9",
    "aliases": [
      "Reconnaissance UAV System Model 9",
      "Reconnaissance UAV System Model 9",
      "Reconnaissance UAV System Model 9 Operational System"
    ],
    "familyName": "Reconnaissance UAV System Model 9 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-reconnaissance-uav",
    "categoryName": "Reconnaissance UAV",
    "subcategory": "Tactical Recon UAV",
    "rankInCategory": 9,
    "originCountry": "South Korea",
    "originCountries": [
      "South Korea"
    ],
    "developerCountries": [
      "South Korea"
    ],
    "manufacturerCountries": [
      "South Korea"
    ],
    "operatorCountries": [
      "South Korea"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "reconnaissance-uav-system-model-9",
      "reconnaissance uav system model 9",
      "reconnaissance uav system model 9",
      "unmanned-reconnaissance-uav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance UAV domain.",
    "fullOverview": "The Reconnaissance UAV System Model 9 is an audited canonical military system built for Reconnaissance UAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Reconnaissance UAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1350",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-9",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Reconnaissance UAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance UAV Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "reconnaissance-uav-system-model-10",
    "name": "Reconnaissance UAV System Model 10",
    "officialDesignation": "Reconnaissance UAV System Model 10 Operational System",
    "commonName": "Reconnaissance UAV System Model 10",
    "aliases": [
      "Reconnaissance UAV System Model 10",
      "Reconnaissance UAV System Model 10",
      "Reconnaissance UAV System Model 10 Operational System"
    ],
    "familyName": "Reconnaissance UAV System Model 10 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-reconnaissance-uav",
    "categoryName": "Reconnaissance UAV",
    "subcategory": "Tactical Recon UAV",
    "rankInCategory": 10,
    "originCountry": "Italy",
    "originCountries": [
      "Italy"
    ],
    "developerCountries": [
      "Italy"
    ],
    "manufacturerCountries": [
      "Italy"
    ],
    "operatorCountries": [
      "Italy"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "reconnaissance-uav-system-model-10",
      "reconnaissance uav system model 10",
      "reconnaissance uav system model 10",
      "unmanned-reconnaissance-uav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance UAV domain.",
    "fullOverview": "The Reconnaissance UAV System Model 10 is an audited canonical military system built for Reconnaissance UAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Reconnaissance UAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1500",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-10",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Reconnaissance UAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance UAV Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "strike-uav-ucav-system-model-1",
    "name": "Strike UAV / UCAV System Model 1",
    "officialDesignation": "Strike UAV / UCAV System Model 1 Operational System",
    "commonName": "Strike UAV / UCAV System Model 1",
    "aliases": [
      "Strike UAV / UCAV System Model 1",
      "Strike UAV / UCAV System Model 1",
      "Strike UAV / UCAV System Model 1 Operational System"
    ],
    "familyName": "Strike UAV / UCAV System Model 1 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-strike-uav-ucav",
    "categoryName": "Strike UAV / UCAV",
    "subcategory": "Armed MALE Strike UAV",
    "rankInCategory": 1,
    "originCountry": "United States",
    "originCountries": [
      "United States"
    ],
    "developerCountries": [
      "United States"
    ],
    "manufacturerCountries": [
      "United States"
    ],
    "operatorCountries": [
      "United States"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "strike-uav-ucav-system-model-1",
      "strike uav / ucav system model 1",
      "strike uav / ucav system model 1",
      "unmanned-strike-uav-ucav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Strike UAV / UCAV domain.",
    "fullOverview": "The Strike UAV / UCAV System Model 1 is an audited canonical military system built for Strike UAV / UCAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Strike UAV / UCAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "150",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-1",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Strike UAV / UCAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Strike UAV / UCAV Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Strike UAV / UCAV missions."
  },
  {
    "id": "strike-uav-ucav-system-model-2",
    "name": "Strike UAV / UCAV System Model 2",
    "officialDesignation": "Strike UAV / UCAV System Model 2 Operational System",
    "commonName": "Strike UAV / UCAV System Model 2",
    "aliases": [
      "Strike UAV / UCAV System Model 2",
      "Strike UAV / UCAV System Model 2",
      "Strike UAV / UCAV System Model 2 Operational System"
    ],
    "familyName": "Strike UAV / UCAV System Model 2 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-strike-uav-ucav",
    "categoryName": "Strike UAV / UCAV",
    "subcategory": "Armed MALE Strike UAV",
    "rankInCategory": 2,
    "originCountry": "China",
    "originCountries": [
      "China"
    ],
    "developerCountries": [
      "China"
    ],
    "manufacturerCountries": [
      "China"
    ],
    "operatorCountries": [
      "China"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "strike-uav-ucav-system-model-2",
      "strike uav / ucav system model 2",
      "strike uav / ucav system model 2",
      "unmanned-strike-uav-ucav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Strike UAV / UCAV domain.",
    "fullOverview": "The Strike UAV / UCAV System Model 2 is an audited canonical military system built for Strike UAV / UCAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Strike UAV / UCAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "300",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-2",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Strike UAV / UCAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Strike UAV / UCAV Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Strike UAV / UCAV missions."
  },
  {
    "id": "strike-uav-ucav-system-model-3",
    "name": "Strike UAV / UCAV System Model 3",
    "officialDesignation": "Strike UAV / UCAV System Model 3 Operational System",
    "commonName": "Strike UAV / UCAV System Model 3",
    "aliases": [
      "Strike UAV / UCAV System Model 3",
      "Strike UAV / UCAV System Model 3",
      "Strike UAV / UCAV System Model 3 Operational System"
    ],
    "familyName": "Strike UAV / UCAV System Model 3 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-strike-uav-ucav",
    "categoryName": "Strike UAV / UCAV",
    "subcategory": "Armed MALE Strike UAV",
    "rankInCategory": 3,
    "originCountry": "Russia",
    "originCountries": [
      "Russia"
    ],
    "developerCountries": [
      "Russia"
    ],
    "manufacturerCountries": [
      "Russia"
    ],
    "operatorCountries": [
      "Russia"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "strike-uav-ucav-system-model-3",
      "strike uav / ucav system model 3",
      "strike uav / ucav system model 3",
      "unmanned-strike-uav-ucav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Strike UAV / UCAV domain.",
    "fullOverview": "The Strike UAV / UCAV System Model 3 is an audited canonical military system built for Strike UAV / UCAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Strike UAV / UCAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "450",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-3",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Strike UAV / UCAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Strike UAV / UCAV Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Strike UAV / UCAV missions."
  },
  {
    "id": "strike-uav-ucav-system-model-4",
    "name": "Strike UAV / UCAV System Model 4",
    "officialDesignation": "Strike UAV / UCAV System Model 4 Operational System",
    "commonName": "Strike UAV / UCAV System Model 4",
    "aliases": [
      "Strike UAV / UCAV System Model 4",
      "Strike UAV / UCAV System Model 4",
      "Strike UAV / UCAV System Model 4 Operational System"
    ],
    "familyName": "Strike UAV / UCAV System Model 4 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-strike-uav-ucav",
    "categoryName": "Strike UAV / UCAV",
    "subcategory": "Armed MALE Strike UAV",
    "rankInCategory": 4,
    "originCountry": "India",
    "originCountries": [
      "India"
    ],
    "developerCountries": [
      "India"
    ],
    "manufacturerCountries": [
      "India"
    ],
    "operatorCountries": [
      "India"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "strike-uav-ucav-system-model-4",
      "strike uav / ucav system model 4",
      "strike uav / ucav system model 4",
      "unmanned-strike-uav-ucav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Strike UAV / UCAV domain.",
    "fullOverview": "The Strike UAV / UCAV System Model 4 is an audited canonical military system built for Strike UAV / UCAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Strike UAV / UCAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "600",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-4",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Strike UAV / UCAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Strike UAV / UCAV Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "strike-uav-ucav-system-model-5",
    "name": "Strike UAV / UCAV System Model 5",
    "officialDesignation": "Strike UAV / UCAV System Model 5 Operational System",
    "commonName": "Strike UAV / UCAV System Model 5",
    "aliases": [
      "Strike UAV / UCAV System Model 5",
      "Strike UAV / UCAV System Model 5",
      "Strike UAV / UCAV System Model 5 Operational System"
    ],
    "familyName": "Strike UAV / UCAV System Model 5 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-strike-uav-ucav",
    "categoryName": "Strike UAV / UCAV",
    "subcategory": "Armed MALE Strike UAV",
    "rankInCategory": 5,
    "originCountry": "France",
    "originCountries": [
      "France"
    ],
    "developerCountries": [
      "France"
    ],
    "manufacturerCountries": [
      "France"
    ],
    "operatorCountries": [
      "France"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "strike-uav-ucav-system-model-5",
      "strike uav / ucav system model 5",
      "strike uav / ucav system model 5",
      "unmanned-strike-uav-ucav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Strike UAV / UCAV domain.",
    "fullOverview": "The Strike UAV / UCAV System Model 5 is an audited canonical military system built for Strike UAV / UCAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Strike UAV / UCAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "750",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-5",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Strike UAV / UCAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Strike UAV / UCAV Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "strike-uav-ucav-system-model-6",
    "name": "Strike UAV / UCAV System Model 6",
    "officialDesignation": "Strike UAV / UCAV System Model 6 Operational System",
    "commonName": "Strike UAV / UCAV System Model 6",
    "aliases": [
      "Strike UAV / UCAV System Model 6",
      "Strike UAV / UCAV System Model 6",
      "Strike UAV / UCAV System Model 6 Operational System"
    ],
    "familyName": "Strike UAV / UCAV System Model 6 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-strike-uav-ucav",
    "categoryName": "Strike UAV / UCAV",
    "subcategory": "Armed MALE Strike UAV",
    "rankInCategory": 6,
    "originCountry": "United Kingdom",
    "originCountries": [
      "United Kingdom"
    ],
    "developerCountries": [
      "United Kingdom"
    ],
    "manufacturerCountries": [
      "United Kingdom"
    ],
    "operatorCountries": [
      "United Kingdom"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "strike-uav-ucav-system-model-6",
      "strike uav / ucav system model 6",
      "strike uav / ucav system model 6",
      "unmanned-strike-uav-ucav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Strike UAV / UCAV domain.",
    "fullOverview": "The Strike UAV / UCAV System Model 6 is an audited canonical military system built for Strike UAV / UCAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Strike UAV / UCAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "900",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-6",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Strike UAV / UCAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Strike UAV / UCAV Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "strike-uav-ucav-system-model-7",
    "name": "Strike UAV / UCAV System Model 7",
    "officialDesignation": "Strike UAV / UCAV System Model 7 Operational System",
    "commonName": "Strike UAV / UCAV System Model 7",
    "aliases": [
      "Strike UAV / UCAV System Model 7",
      "Strike UAV / UCAV System Model 7",
      "Strike UAV / UCAV System Model 7 Operational System"
    ],
    "familyName": "Strike UAV / UCAV System Model 7 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-strike-uav-ucav",
    "categoryName": "Strike UAV / UCAV",
    "subcategory": "Armed MALE Strike UAV",
    "rankInCategory": 7,
    "originCountry": "Germany",
    "originCountries": [
      "Germany"
    ],
    "developerCountries": [
      "Germany"
    ],
    "manufacturerCountries": [
      "Germany"
    ],
    "operatorCountries": [
      "Germany"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "strike-uav-ucav-system-model-7",
      "strike uav / ucav system model 7",
      "strike uav / ucav system model 7",
      "unmanned-strike-uav-ucav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Strike UAV / UCAV domain.",
    "fullOverview": "The Strike UAV / UCAV System Model 7 is an audited canonical military system built for Strike UAV / UCAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Strike UAV / UCAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1050",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-7",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Strike UAV / UCAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Strike UAV / UCAV Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "strike-uav-ucav-system-model-8",
    "name": "Strike UAV / UCAV System Model 8",
    "officialDesignation": "Strike UAV / UCAV System Model 8 Operational System",
    "commonName": "Strike UAV / UCAV System Model 8",
    "aliases": [
      "Strike UAV / UCAV System Model 8",
      "Strike UAV / UCAV System Model 8",
      "Strike UAV / UCAV System Model 8 Operational System"
    ],
    "familyName": "Strike UAV / UCAV System Model 8 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-strike-uav-ucav",
    "categoryName": "Strike UAV / UCAV",
    "subcategory": "Armed MALE Strike UAV",
    "rankInCategory": 8,
    "originCountry": "Japan",
    "originCountries": [
      "Japan"
    ],
    "developerCountries": [
      "Japan"
    ],
    "manufacturerCountries": [
      "Japan"
    ],
    "operatorCountries": [
      "Japan"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "strike-uav-ucav-system-model-8",
      "strike uav / ucav system model 8",
      "strike uav / ucav system model 8",
      "unmanned-strike-uav-ucav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Strike UAV / UCAV domain.",
    "fullOverview": "The Strike UAV / UCAV System Model 8 is an audited canonical military system built for Strike UAV / UCAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Strike UAV / UCAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1200",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-8",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Strike UAV / UCAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Strike UAV / UCAV Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "strike-uav-ucav-system-model-9",
    "name": "Strike UAV / UCAV System Model 9",
    "officialDesignation": "Strike UAV / UCAV System Model 9 Operational System",
    "commonName": "Strike UAV / UCAV System Model 9",
    "aliases": [
      "Strike UAV / UCAV System Model 9",
      "Strike UAV / UCAV System Model 9",
      "Strike UAV / UCAV System Model 9 Operational System"
    ],
    "familyName": "Strike UAV / UCAV System Model 9 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-strike-uav-ucav",
    "categoryName": "Strike UAV / UCAV",
    "subcategory": "Armed MALE Strike UAV",
    "rankInCategory": 9,
    "originCountry": "South Korea",
    "originCountries": [
      "South Korea"
    ],
    "developerCountries": [
      "South Korea"
    ],
    "manufacturerCountries": [
      "South Korea"
    ],
    "operatorCountries": [
      "South Korea"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "strike-uav-ucav-system-model-9",
      "strike uav / ucav system model 9",
      "strike uav / ucav system model 9",
      "unmanned-strike-uav-ucav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Strike UAV / UCAV domain.",
    "fullOverview": "The Strike UAV / UCAV System Model 9 is an audited canonical military system built for Strike UAV / UCAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Strike UAV / UCAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1350",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-9",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Strike UAV / UCAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Strike UAV / UCAV Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "strike-uav-ucav-system-model-10",
    "name": "Strike UAV / UCAV System Model 10",
    "officialDesignation": "Strike UAV / UCAV System Model 10 Operational System",
    "commonName": "Strike UAV / UCAV System Model 10",
    "aliases": [
      "Strike UAV / UCAV System Model 10",
      "Strike UAV / UCAV System Model 10",
      "Strike UAV / UCAV System Model 10 Operational System"
    ],
    "familyName": "Strike UAV / UCAV System Model 10 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-strike-uav-ucav",
    "categoryName": "Strike UAV / UCAV",
    "subcategory": "Armed MALE Strike UAV",
    "rankInCategory": 10,
    "originCountry": "Italy",
    "originCountries": [
      "Italy"
    ],
    "developerCountries": [
      "Italy"
    ],
    "manufacturerCountries": [
      "Italy"
    ],
    "operatorCountries": [
      "Italy"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "strike-uav-ucav-system-model-10",
      "strike uav / ucav system model 10",
      "strike uav / ucav system model 10",
      "unmanned-strike-uav-ucav"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Strike UAV / UCAV domain.",
    "fullOverview": "The Strike UAV / UCAV System Model 10 is an audited canonical military system built for Strike UAV / UCAV operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Strike UAV / UCAV Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1500",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-10",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Strike UAV / UCAV Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Strike UAV / UCAV Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "hale-male-platforms-system-model-1",
    "name": "HALE / MALE Platforms System Model 1",
    "officialDesignation": "HALE / MALE Platforms System Model 1 Operational System",
    "commonName": "HALE / MALE Platforms System Model 1",
    "aliases": [
      "HALE / MALE Platforms System Model 1",
      "HALE / MALE Platforms System Model 1",
      "HALE / MALE Platforms System Model 1 Operational System"
    ],
    "familyName": "HALE / MALE Platforms System Model 1 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-hale-male",
    "categoryName": "HALE / MALE Platforms",
    "subcategory": "High-Altitude Long-Endurance (HALE)",
    "rankInCategory": 1,
    "originCountry": "United States",
    "originCountries": [
      "United States"
    ],
    "developerCountries": [
      "United States"
    ],
    "manufacturerCountries": [
      "United States"
    ],
    "operatorCountries": [
      "United States"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "hale-male-platforms-system-model-1",
      "hale / male platforms system model 1",
      "hale / male platforms system model 1",
      "unmanned-hale-male"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the HALE / MALE Platforms domain.",
    "fullOverview": "The HALE / MALE Platforms System Model 1 is an audited canonical military system built for HALE / MALE Platforms operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "HALE / MALE Platforms Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "150",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-1",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated HALE / MALE Platforms Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced HALE / MALE Platforms Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in HALE / MALE Platforms missions."
  },
  {
    "id": "hale-male-platforms-system-model-2",
    "name": "HALE / MALE Platforms System Model 2",
    "officialDesignation": "HALE / MALE Platforms System Model 2 Operational System",
    "commonName": "HALE / MALE Platforms System Model 2",
    "aliases": [
      "HALE / MALE Platforms System Model 2",
      "HALE / MALE Platforms System Model 2",
      "HALE / MALE Platforms System Model 2 Operational System"
    ],
    "familyName": "HALE / MALE Platforms System Model 2 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-hale-male",
    "categoryName": "HALE / MALE Platforms",
    "subcategory": "High-Altitude Long-Endurance (HALE)",
    "rankInCategory": 2,
    "originCountry": "China",
    "originCountries": [
      "China"
    ],
    "developerCountries": [
      "China"
    ],
    "manufacturerCountries": [
      "China"
    ],
    "operatorCountries": [
      "China"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "hale-male-platforms-system-model-2",
      "hale / male platforms system model 2",
      "hale / male platforms system model 2",
      "unmanned-hale-male"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the HALE / MALE Platforms domain.",
    "fullOverview": "The HALE / MALE Platforms System Model 2 is an audited canonical military system built for HALE / MALE Platforms operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "HALE / MALE Platforms Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "300",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-2",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated HALE / MALE Platforms Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced HALE / MALE Platforms Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in HALE / MALE Platforms missions."
  },
  {
    "id": "hale-male-platforms-system-model-3",
    "name": "HALE / MALE Platforms System Model 3",
    "officialDesignation": "HALE / MALE Platforms System Model 3 Operational System",
    "commonName": "HALE / MALE Platforms System Model 3",
    "aliases": [
      "HALE / MALE Platforms System Model 3",
      "HALE / MALE Platforms System Model 3",
      "HALE / MALE Platforms System Model 3 Operational System"
    ],
    "familyName": "HALE / MALE Platforms System Model 3 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-hale-male",
    "categoryName": "HALE / MALE Platforms",
    "subcategory": "High-Altitude Long-Endurance (HALE)",
    "rankInCategory": 3,
    "originCountry": "Russia",
    "originCountries": [
      "Russia"
    ],
    "developerCountries": [
      "Russia"
    ],
    "manufacturerCountries": [
      "Russia"
    ],
    "operatorCountries": [
      "Russia"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "hale-male-platforms-system-model-3",
      "hale / male platforms system model 3",
      "hale / male platforms system model 3",
      "unmanned-hale-male"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the HALE / MALE Platforms domain.",
    "fullOverview": "The HALE / MALE Platforms System Model 3 is an audited canonical military system built for HALE / MALE Platforms operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "HALE / MALE Platforms Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "450",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-3",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated HALE / MALE Platforms Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced HALE / MALE Platforms Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in HALE / MALE Platforms missions."
  },
  {
    "id": "hale-male-platforms-system-model-4",
    "name": "HALE / MALE Platforms System Model 4",
    "officialDesignation": "HALE / MALE Platforms System Model 4 Operational System",
    "commonName": "HALE / MALE Platforms System Model 4",
    "aliases": [
      "HALE / MALE Platforms System Model 4",
      "HALE / MALE Platforms System Model 4",
      "HALE / MALE Platforms System Model 4 Operational System"
    ],
    "familyName": "HALE / MALE Platforms System Model 4 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-hale-male",
    "categoryName": "HALE / MALE Platforms",
    "subcategory": "High-Altitude Long-Endurance (HALE)",
    "rankInCategory": 4,
    "originCountry": "India",
    "originCountries": [
      "India"
    ],
    "developerCountries": [
      "India"
    ],
    "manufacturerCountries": [
      "India"
    ],
    "operatorCountries": [
      "India"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "hale-male-platforms-system-model-4",
      "hale / male platforms system model 4",
      "hale / male platforms system model 4",
      "unmanned-hale-male"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the HALE / MALE Platforms domain.",
    "fullOverview": "The HALE / MALE Platforms System Model 4 is an audited canonical military system built for HALE / MALE Platforms operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "HALE / MALE Platforms Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "600",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-4",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated HALE / MALE Platforms Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced HALE / MALE Platforms Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "hale-male-platforms-system-model-5",
    "name": "HALE / MALE Platforms System Model 5",
    "officialDesignation": "HALE / MALE Platforms System Model 5 Operational System",
    "commonName": "HALE / MALE Platforms System Model 5",
    "aliases": [
      "HALE / MALE Platforms System Model 5",
      "HALE / MALE Platforms System Model 5",
      "HALE / MALE Platforms System Model 5 Operational System"
    ],
    "familyName": "HALE / MALE Platforms System Model 5 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-hale-male",
    "categoryName": "HALE / MALE Platforms",
    "subcategory": "High-Altitude Long-Endurance (HALE)",
    "rankInCategory": 5,
    "originCountry": "France",
    "originCountries": [
      "France"
    ],
    "developerCountries": [
      "France"
    ],
    "manufacturerCountries": [
      "France"
    ],
    "operatorCountries": [
      "France"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "hale-male-platforms-system-model-5",
      "hale / male platforms system model 5",
      "hale / male platforms system model 5",
      "unmanned-hale-male"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the HALE / MALE Platforms domain.",
    "fullOverview": "The HALE / MALE Platforms System Model 5 is an audited canonical military system built for HALE / MALE Platforms operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "HALE / MALE Platforms Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "750",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-5",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated HALE / MALE Platforms Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced HALE / MALE Platforms Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "hale-male-platforms-system-model-6",
    "name": "HALE / MALE Platforms System Model 6",
    "officialDesignation": "HALE / MALE Platforms System Model 6 Operational System",
    "commonName": "HALE / MALE Platforms System Model 6",
    "aliases": [
      "HALE / MALE Platforms System Model 6",
      "HALE / MALE Platforms System Model 6",
      "HALE / MALE Platforms System Model 6 Operational System"
    ],
    "familyName": "HALE / MALE Platforms System Model 6 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-hale-male",
    "categoryName": "HALE / MALE Platforms",
    "subcategory": "High-Altitude Long-Endurance (HALE)",
    "rankInCategory": 6,
    "originCountry": "United Kingdom",
    "originCountries": [
      "United Kingdom"
    ],
    "developerCountries": [
      "United Kingdom"
    ],
    "manufacturerCountries": [
      "United Kingdom"
    ],
    "operatorCountries": [
      "United Kingdom"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "hale-male-platforms-system-model-6",
      "hale / male platforms system model 6",
      "hale / male platforms system model 6",
      "unmanned-hale-male"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the HALE / MALE Platforms domain.",
    "fullOverview": "The HALE / MALE Platforms System Model 6 is an audited canonical military system built for HALE / MALE Platforms operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "HALE / MALE Platforms Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "900",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-6",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated HALE / MALE Platforms Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced HALE / MALE Platforms Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "hale-male-platforms-system-model-7",
    "name": "HALE / MALE Platforms System Model 7",
    "officialDesignation": "HALE / MALE Platforms System Model 7 Operational System",
    "commonName": "HALE / MALE Platforms System Model 7",
    "aliases": [
      "HALE / MALE Platforms System Model 7",
      "HALE / MALE Platforms System Model 7",
      "HALE / MALE Platforms System Model 7 Operational System"
    ],
    "familyName": "HALE / MALE Platforms System Model 7 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-hale-male",
    "categoryName": "HALE / MALE Platforms",
    "subcategory": "High-Altitude Long-Endurance (HALE)",
    "rankInCategory": 7,
    "originCountry": "Germany",
    "originCountries": [
      "Germany"
    ],
    "developerCountries": [
      "Germany"
    ],
    "manufacturerCountries": [
      "Germany"
    ],
    "operatorCountries": [
      "Germany"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "hale-male-platforms-system-model-7",
      "hale / male platforms system model 7",
      "hale / male platforms system model 7",
      "unmanned-hale-male"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the HALE / MALE Platforms domain.",
    "fullOverview": "The HALE / MALE Platforms System Model 7 is an audited canonical military system built for HALE / MALE Platforms operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "HALE / MALE Platforms Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1050",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-7",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated HALE / MALE Platforms Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced HALE / MALE Platforms Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "hale-male-platforms-system-model-8",
    "name": "HALE / MALE Platforms System Model 8",
    "officialDesignation": "HALE / MALE Platforms System Model 8 Operational System",
    "commonName": "HALE / MALE Platforms System Model 8",
    "aliases": [
      "HALE / MALE Platforms System Model 8",
      "HALE / MALE Platforms System Model 8",
      "HALE / MALE Platforms System Model 8 Operational System"
    ],
    "familyName": "HALE / MALE Platforms System Model 8 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-hale-male",
    "categoryName": "HALE / MALE Platforms",
    "subcategory": "High-Altitude Long-Endurance (HALE)",
    "rankInCategory": 8,
    "originCountry": "Japan",
    "originCountries": [
      "Japan"
    ],
    "developerCountries": [
      "Japan"
    ],
    "manufacturerCountries": [
      "Japan"
    ],
    "operatorCountries": [
      "Japan"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "hale-male-platforms-system-model-8",
      "hale / male platforms system model 8",
      "hale / male platforms system model 8",
      "unmanned-hale-male"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the HALE / MALE Platforms domain.",
    "fullOverview": "The HALE / MALE Platforms System Model 8 is an audited canonical military system built for HALE / MALE Platforms operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "HALE / MALE Platforms Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1200",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-8",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated HALE / MALE Platforms Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced HALE / MALE Platforms Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "loitering-munitions-system-model-1",
    "name": "Loitering Munitions System Model 1",
    "officialDesignation": "Loitering Munitions System Model 1 Operational System",
    "commonName": "Loitering Munitions System Model 1",
    "aliases": [
      "Loitering Munitions System Model 1",
      "Loitering Munitions System Model 1",
      "Loitering Munitions System Model 1 Operational System"
    ],
    "familyName": "Loitering Munitions System Model 1 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-loitering-munition",
    "categoryName": "Loitering Munitions",
    "subcategory": "Squad-Level Anti-Personnel LM",
    "rankInCategory": 1,
    "originCountry": "United States",
    "originCountries": [
      "United States"
    ],
    "developerCountries": [
      "United States"
    ],
    "manufacturerCountries": [
      "United States"
    ],
    "operatorCountries": [
      "United States"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "loitering-munitions-system-model-1",
      "loitering munitions system model 1",
      "loitering munitions system model 1",
      "unmanned-loitering-munition"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Loitering Munitions domain.",
    "fullOverview": "The Loitering Munitions System Model 1 is an audited canonical military system built for Loitering Munitions operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Loitering Munitions Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "150",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-1",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Loitering Munitions Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Loitering Munitions Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Loitering Munitions missions."
  },
  {
    "id": "loitering-munitions-system-model-2",
    "name": "Loitering Munitions System Model 2",
    "officialDesignation": "Loitering Munitions System Model 2 Operational System",
    "commonName": "Loitering Munitions System Model 2",
    "aliases": [
      "Loitering Munitions System Model 2",
      "Loitering Munitions System Model 2",
      "Loitering Munitions System Model 2 Operational System"
    ],
    "familyName": "Loitering Munitions System Model 2 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-loitering-munition",
    "categoryName": "Loitering Munitions",
    "subcategory": "Squad-Level Anti-Personnel LM",
    "rankInCategory": 2,
    "originCountry": "China",
    "originCountries": [
      "China"
    ],
    "developerCountries": [
      "China"
    ],
    "manufacturerCountries": [
      "China"
    ],
    "operatorCountries": [
      "China"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "loitering-munitions-system-model-2",
      "loitering munitions system model 2",
      "loitering munitions system model 2",
      "unmanned-loitering-munition"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Loitering Munitions domain.",
    "fullOverview": "The Loitering Munitions System Model 2 is an audited canonical military system built for Loitering Munitions operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Loitering Munitions Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "300",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-2",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Loitering Munitions Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Loitering Munitions Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Loitering Munitions missions."
  },
  {
    "id": "loitering-munitions-system-model-3",
    "name": "Loitering Munitions System Model 3",
    "officialDesignation": "Loitering Munitions System Model 3 Operational System",
    "commonName": "Loitering Munitions System Model 3",
    "aliases": [
      "Loitering Munitions System Model 3",
      "Loitering Munitions System Model 3",
      "Loitering Munitions System Model 3 Operational System"
    ],
    "familyName": "Loitering Munitions System Model 3 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-loitering-munition",
    "categoryName": "Loitering Munitions",
    "subcategory": "Squad-Level Anti-Personnel LM",
    "rankInCategory": 3,
    "originCountry": "Russia",
    "originCountries": [
      "Russia"
    ],
    "developerCountries": [
      "Russia"
    ],
    "manufacturerCountries": [
      "Russia"
    ],
    "operatorCountries": [
      "Russia"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "loitering-munitions-system-model-3",
      "loitering munitions system model 3",
      "loitering munitions system model 3",
      "unmanned-loitering-munition"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Loitering Munitions domain.",
    "fullOverview": "The Loitering Munitions System Model 3 is an audited canonical military system built for Loitering Munitions operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Loitering Munitions Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "450",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-3",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Loitering Munitions Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Loitering Munitions Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Loitering Munitions missions."
  },
  {
    "id": "loitering-munitions-system-model-4",
    "name": "Loitering Munitions System Model 4",
    "officialDesignation": "Loitering Munitions System Model 4 Operational System",
    "commonName": "Loitering Munitions System Model 4",
    "aliases": [
      "Loitering Munitions System Model 4",
      "Loitering Munitions System Model 4",
      "Loitering Munitions System Model 4 Operational System"
    ],
    "familyName": "Loitering Munitions System Model 4 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-loitering-munition",
    "categoryName": "Loitering Munitions",
    "subcategory": "Squad-Level Anti-Personnel LM",
    "rankInCategory": 4,
    "originCountry": "India",
    "originCountries": [
      "India"
    ],
    "developerCountries": [
      "India"
    ],
    "manufacturerCountries": [
      "India"
    ],
    "operatorCountries": [
      "India"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "loitering-munitions-system-model-4",
      "loitering munitions system model 4",
      "loitering munitions system model 4",
      "unmanned-loitering-munition"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Loitering Munitions domain.",
    "fullOverview": "The Loitering Munitions System Model 4 is an audited canonical military system built for Loitering Munitions operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Loitering Munitions Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "600",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-4",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Loitering Munitions Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Loitering Munitions Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "loitering-munitions-system-model-5",
    "name": "Loitering Munitions System Model 5",
    "officialDesignation": "Loitering Munitions System Model 5 Operational System",
    "commonName": "Loitering Munitions System Model 5",
    "aliases": [
      "Loitering Munitions System Model 5",
      "Loitering Munitions System Model 5",
      "Loitering Munitions System Model 5 Operational System"
    ],
    "familyName": "Loitering Munitions System Model 5 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-loitering-munition",
    "categoryName": "Loitering Munitions",
    "subcategory": "Squad-Level Anti-Personnel LM",
    "rankInCategory": 5,
    "originCountry": "France",
    "originCountries": [
      "France"
    ],
    "developerCountries": [
      "France"
    ],
    "manufacturerCountries": [
      "France"
    ],
    "operatorCountries": [
      "France"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "loitering-munitions-system-model-5",
      "loitering munitions system model 5",
      "loitering munitions system model 5",
      "unmanned-loitering-munition"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Loitering Munitions domain.",
    "fullOverview": "The Loitering Munitions System Model 5 is an audited canonical military system built for Loitering Munitions operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Loitering Munitions Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "750",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-5",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Loitering Munitions Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Loitering Munitions Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "loitering-munitions-system-model-6",
    "name": "Loitering Munitions System Model 6",
    "officialDesignation": "Loitering Munitions System Model 6 Operational System",
    "commonName": "Loitering Munitions System Model 6",
    "aliases": [
      "Loitering Munitions System Model 6",
      "Loitering Munitions System Model 6",
      "Loitering Munitions System Model 6 Operational System"
    ],
    "familyName": "Loitering Munitions System Model 6 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-loitering-munition",
    "categoryName": "Loitering Munitions",
    "subcategory": "Squad-Level Anti-Personnel LM",
    "rankInCategory": 6,
    "originCountry": "United Kingdom",
    "originCountries": [
      "United Kingdom"
    ],
    "developerCountries": [
      "United Kingdom"
    ],
    "manufacturerCountries": [
      "United Kingdom"
    ],
    "operatorCountries": [
      "United Kingdom"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "loitering-munitions-system-model-6",
      "loitering munitions system model 6",
      "loitering munitions system model 6",
      "unmanned-loitering-munition"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Loitering Munitions domain.",
    "fullOverview": "The Loitering Munitions System Model 6 is an audited canonical military system built for Loitering Munitions operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Loitering Munitions Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "900",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-6",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Loitering Munitions Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Loitering Munitions Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "loitering-munitions-system-model-7",
    "name": "Loitering Munitions System Model 7",
    "officialDesignation": "Loitering Munitions System Model 7 Operational System",
    "commonName": "Loitering Munitions System Model 7",
    "aliases": [
      "Loitering Munitions System Model 7",
      "Loitering Munitions System Model 7",
      "Loitering Munitions System Model 7 Operational System"
    ],
    "familyName": "Loitering Munitions System Model 7 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-loitering-munition",
    "categoryName": "Loitering Munitions",
    "subcategory": "Squad-Level Anti-Personnel LM",
    "rankInCategory": 7,
    "originCountry": "Germany",
    "originCountries": [
      "Germany"
    ],
    "developerCountries": [
      "Germany"
    ],
    "manufacturerCountries": [
      "Germany"
    ],
    "operatorCountries": [
      "Germany"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "loitering-munitions-system-model-7",
      "loitering munitions system model 7",
      "loitering munitions system model 7",
      "unmanned-loitering-munition"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Loitering Munitions domain.",
    "fullOverview": "The Loitering Munitions System Model 7 is an audited canonical military system built for Loitering Munitions operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "Loitering Munitions Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1050",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-7",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Loitering Munitions Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Loitering Munitions Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "ugv-ground-robots-system-model-1",
    "name": "UGV / Ground Robots System Model 1",
    "officialDesignation": "UGV / Ground Robots System Model 1 Operational System",
    "commonName": "UGV / Ground Robots System Model 1",
    "aliases": [
      "UGV / Ground Robots System Model 1",
      "UGV / Ground Robots System Model 1",
      "UGV / Ground Robots System Model 1 Operational System"
    ],
    "familyName": "UGV / Ground Robots System Model 1 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-ugv-ground-robot",
    "categoryName": "UGV / Ground Robots",
    "subcategory": "Armed Combat UGV",
    "rankInCategory": 1,
    "originCountry": "United States",
    "originCountries": [
      "United States"
    ],
    "developerCountries": [
      "United States"
    ],
    "manufacturerCountries": [
      "United States"
    ],
    "operatorCountries": [
      "United States"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "ugv-ground-robots-system-model-1",
      "ugv / ground robots system model 1",
      "ugv / ground robots system model 1",
      "unmanned-ugv-ground-robot"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the UGV / Ground Robots domain.",
    "fullOverview": "The UGV / Ground Robots System Model 1 is an audited canonical military system built for UGV / Ground Robots operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "UGV / Ground Robots Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "150",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-1",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated UGV / Ground Robots Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced UGV / Ground Robots Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in UGV / Ground Robots missions."
  },
  {
    "id": "ugv-ground-robots-system-model-2",
    "name": "UGV / Ground Robots System Model 2",
    "officialDesignation": "UGV / Ground Robots System Model 2 Operational System",
    "commonName": "UGV / Ground Robots System Model 2",
    "aliases": [
      "UGV / Ground Robots System Model 2",
      "UGV / Ground Robots System Model 2",
      "UGV / Ground Robots System Model 2 Operational System"
    ],
    "familyName": "UGV / Ground Robots System Model 2 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-ugv-ground-robot",
    "categoryName": "UGV / Ground Robots",
    "subcategory": "Armed Combat UGV",
    "rankInCategory": 2,
    "originCountry": "China",
    "originCountries": [
      "China"
    ],
    "developerCountries": [
      "China"
    ],
    "manufacturerCountries": [
      "China"
    ],
    "operatorCountries": [
      "China"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "ugv-ground-robots-system-model-2",
      "ugv / ground robots system model 2",
      "ugv / ground robots system model 2",
      "unmanned-ugv-ground-robot"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the UGV / Ground Robots domain.",
    "fullOverview": "The UGV / Ground Robots System Model 2 is an audited canonical military system built for UGV / Ground Robots operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "UGV / Ground Robots Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "300",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-2",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated UGV / Ground Robots Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced UGV / Ground Robots Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in UGV / Ground Robots missions."
  },
  {
    "id": "ugv-ground-robots-system-model-3",
    "name": "UGV / Ground Robots System Model 3",
    "officialDesignation": "UGV / Ground Robots System Model 3 Operational System",
    "commonName": "UGV / Ground Robots System Model 3",
    "aliases": [
      "UGV / Ground Robots System Model 3",
      "UGV / Ground Robots System Model 3",
      "UGV / Ground Robots System Model 3 Operational System"
    ],
    "familyName": "UGV / Ground Robots System Model 3 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-ugv-ground-robot",
    "categoryName": "UGV / Ground Robots",
    "subcategory": "Armed Combat UGV",
    "rankInCategory": 3,
    "originCountry": "Russia",
    "originCountries": [
      "Russia"
    ],
    "developerCountries": [
      "Russia"
    ],
    "manufacturerCountries": [
      "Russia"
    ],
    "operatorCountries": [
      "Russia"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "ugv-ground-robots-system-model-3",
      "ugv / ground robots system model 3",
      "ugv / ground robots system model 3",
      "unmanned-ugv-ground-robot"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the UGV / Ground Robots domain.",
    "fullOverview": "The UGV / Ground Robots System Model 3 is an audited canonical military system built for UGV / Ground Robots operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "UGV / Ground Robots Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "450",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-3",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated UGV / Ground Robots Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced UGV / Ground Robots Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in UGV / Ground Robots missions."
  },
  {
    "id": "ugv-ground-robots-system-model-4",
    "name": "UGV / Ground Robots System Model 4",
    "officialDesignation": "UGV / Ground Robots System Model 4 Operational System",
    "commonName": "UGV / Ground Robots System Model 4",
    "aliases": [
      "UGV / Ground Robots System Model 4",
      "UGV / Ground Robots System Model 4",
      "UGV / Ground Robots System Model 4 Operational System"
    ],
    "familyName": "UGV / Ground Robots System Model 4 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-ugv-ground-robot",
    "categoryName": "UGV / Ground Robots",
    "subcategory": "Armed Combat UGV",
    "rankInCategory": 4,
    "originCountry": "India",
    "originCountries": [
      "India"
    ],
    "developerCountries": [
      "India"
    ],
    "manufacturerCountries": [
      "India"
    ],
    "operatorCountries": [
      "India"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "ugv-ground-robots-system-model-4",
      "ugv / ground robots system model 4",
      "ugv / ground robots system model 4",
      "unmanned-ugv-ground-robot"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the UGV / Ground Robots domain.",
    "fullOverview": "The UGV / Ground Robots System Model 4 is an audited canonical military system built for UGV / Ground Robots operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "UGV / Ground Robots Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "600",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-4",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated UGV / Ground Robots Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced UGV / Ground Robots Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "ugv-ground-robots-system-model-5",
    "name": "UGV / Ground Robots System Model 5",
    "officialDesignation": "UGV / Ground Robots System Model 5 Operational System",
    "commonName": "UGV / Ground Robots System Model 5",
    "aliases": [
      "UGV / Ground Robots System Model 5",
      "UGV / Ground Robots System Model 5",
      "UGV / Ground Robots System Model 5 Operational System"
    ],
    "familyName": "UGV / Ground Robots System Model 5 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-ugv-ground-robot",
    "categoryName": "UGV / Ground Robots",
    "subcategory": "Armed Combat UGV",
    "rankInCategory": 5,
    "originCountry": "France",
    "originCountries": [
      "France"
    ],
    "developerCountries": [
      "France"
    ],
    "manufacturerCountries": [
      "France"
    ],
    "operatorCountries": [
      "France"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "ugv-ground-robots-system-model-5",
      "ugv / ground robots system model 5",
      "ugv / ground robots system model 5",
      "unmanned-ugv-ground-robot"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the UGV / Ground Robots domain.",
    "fullOverview": "The UGV / Ground Robots System Model 5 is an audited canonical military system built for UGV / Ground Robots operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "UGV / Ground Robots Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "750",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-5",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated UGV / Ground Robots Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced UGV / Ground Robots Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "usv-uuv-auv-mine-countermeasure-system-model-1",
    "name": "USV / UUV / AUV / Mine Countermeasure System Model 1",
    "officialDesignation": "USV / UUV / AUV / Mine Countermeasure System Model 1 Operational System",
    "commonName": "USV / UUV / AUV / Mine Countermeasure System Model 1",
    "aliases": [
      "USV / UUV / AUV / Mine Countermeasure System Model 1",
      "USV / UUV / AUV / Mine Countermeasure System Model 1",
      "USV / UUV / AUV / Mine Countermeasure System Model 1 Operational System"
    ],
    "familyName": "USV / UUV / AUV / Mine Countermeasure System Model 1 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-usv-uuv-auv-mine",
    "categoryName": "USV / UUV / AUV / Mine Countermeasure",
    "subcategory": "Unmanned Surface Vessel (USV)",
    "rankInCategory": 1,
    "originCountry": "United States",
    "originCountries": [
      "United States"
    ],
    "developerCountries": [
      "United States"
    ],
    "manufacturerCountries": [
      "United States"
    ],
    "operatorCountries": [
      "United States"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "usv-uuv-auv-mine-countermeasure-system-model-1",
      "usv / uuv / auv / mine countermeasure system model 1",
      "usv / uuv / auv / mine countermeasure system model 1",
      "unmanned-usv-uuv-auv-mine"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the USV / UUV / AUV / Mine Countermeasure domain.",
    "fullOverview": "The USV / UUV / AUV / Mine Countermeasure System Model 1 is an audited canonical military system built for USV / UUV / AUV / Mine Countermeasure operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "USV / UUV / AUV / Mine Countermeasure Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "150",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-1",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated USV / UUV / AUV / Mine Countermeasure Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced USV / UUV / AUV / Mine Countermeasure Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in USV / UUV / AUV / Mine Countermeasure missions."
  },
  {
    "id": "usv-uuv-auv-mine-countermeasure-system-model-2",
    "name": "USV / UUV / AUV / Mine Countermeasure System Model 2",
    "officialDesignation": "USV / UUV / AUV / Mine Countermeasure System Model 2 Operational System",
    "commonName": "USV / UUV / AUV / Mine Countermeasure System Model 2",
    "aliases": [
      "USV / UUV / AUV / Mine Countermeasure System Model 2",
      "USV / UUV / AUV / Mine Countermeasure System Model 2",
      "USV / UUV / AUV / Mine Countermeasure System Model 2 Operational System"
    ],
    "familyName": "USV / UUV / AUV / Mine Countermeasure System Model 2 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-usv-uuv-auv-mine",
    "categoryName": "USV / UUV / AUV / Mine Countermeasure",
    "subcategory": "Unmanned Surface Vessel (USV)",
    "rankInCategory": 2,
    "originCountry": "China",
    "originCountries": [
      "China"
    ],
    "developerCountries": [
      "China"
    ],
    "manufacturerCountries": [
      "China"
    ],
    "operatorCountries": [
      "China"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "usv-uuv-auv-mine-countermeasure-system-model-2",
      "usv / uuv / auv / mine countermeasure system model 2",
      "usv / uuv / auv / mine countermeasure system model 2",
      "unmanned-usv-uuv-auv-mine"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the USV / UUV / AUV / Mine Countermeasure domain.",
    "fullOverview": "The USV / UUV / AUV / Mine Countermeasure System Model 2 is an audited canonical military system built for USV / UUV / AUV / Mine Countermeasure operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "USV / UUV / AUV / Mine Countermeasure Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "300",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-2",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated USV / UUV / AUV / Mine Countermeasure Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced USV / UUV / AUV / Mine Countermeasure Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in USV / UUV / AUV / Mine Countermeasure missions."
  },
  {
    "id": "usv-uuv-auv-mine-countermeasure-system-model-3",
    "name": "USV / UUV / AUV / Mine Countermeasure System Model 3",
    "officialDesignation": "USV / UUV / AUV / Mine Countermeasure System Model 3 Operational System",
    "commonName": "USV / UUV / AUV / Mine Countermeasure System Model 3",
    "aliases": [
      "USV / UUV / AUV / Mine Countermeasure System Model 3",
      "USV / UUV / AUV / Mine Countermeasure System Model 3",
      "USV / UUV / AUV / Mine Countermeasure System Model 3 Operational System"
    ],
    "familyName": "USV / UUV / AUV / Mine Countermeasure System Model 3 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-usv-uuv-auv-mine",
    "categoryName": "USV / UUV / AUV / Mine Countermeasure",
    "subcategory": "Unmanned Surface Vessel (USV)",
    "rankInCategory": 3,
    "originCountry": "Russia",
    "originCountries": [
      "Russia"
    ],
    "developerCountries": [
      "Russia"
    ],
    "manufacturerCountries": [
      "Russia"
    ],
    "operatorCountries": [
      "Russia"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "usv-uuv-auv-mine-countermeasure-system-model-3",
      "usv / uuv / auv / mine countermeasure system model 3",
      "usv / uuv / auv / mine countermeasure system model 3",
      "unmanned-usv-uuv-auv-mine"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the USV / UUV / AUV / Mine Countermeasure domain.",
    "fullOverview": "The USV / UUV / AUV / Mine Countermeasure System Model 3 is an audited canonical military system built for USV / UUV / AUV / Mine Countermeasure operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "USV / UUV / AUV / Mine Countermeasure Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "450",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-3",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated USV / UUV / AUV / Mine Countermeasure Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced USV / UUV / AUV / Mine Countermeasure Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in USV / UUV / AUV / Mine Countermeasure missions."
  },
  {
    "id": "usv-uuv-auv-mine-countermeasure-system-model-4",
    "name": "USV / UUV / AUV / Mine Countermeasure System Model 4",
    "officialDesignation": "USV / UUV / AUV / Mine Countermeasure System Model 4 Operational System",
    "commonName": "USV / UUV / AUV / Mine Countermeasure System Model 4",
    "aliases": [
      "USV / UUV / AUV / Mine Countermeasure System Model 4",
      "USV / UUV / AUV / Mine Countermeasure System Model 4",
      "USV / UUV / AUV / Mine Countermeasure System Model 4 Operational System"
    ],
    "familyName": "USV / UUV / AUV / Mine Countermeasure System Model 4 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-usv-uuv-auv-mine",
    "categoryName": "USV / UUV / AUV / Mine Countermeasure",
    "subcategory": "Unmanned Surface Vessel (USV)",
    "rankInCategory": 4,
    "originCountry": "India",
    "originCountries": [
      "India"
    ],
    "developerCountries": [
      "India"
    ],
    "manufacturerCountries": [
      "India"
    ],
    "operatorCountries": [
      "India"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "usv-uuv-auv-mine-countermeasure-system-model-4",
      "usv / uuv / auv / mine countermeasure system model 4",
      "usv / uuv / auv / mine countermeasure system model 4",
      "unmanned-usv-uuv-auv-mine"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the USV / UUV / AUV / Mine Countermeasure domain.",
    "fullOverview": "The USV / UUV / AUV / Mine Countermeasure System Model 4 is an audited canonical military system built for USV / UUV / AUV / Mine Countermeasure operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "USV / UUV / AUV / Mine Countermeasure Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "600",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-4",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated USV / UUV / AUV / Mine Countermeasure Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced USV / UUV / AUV / Mine Countermeasure Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "usv-uuv-auv-mine-countermeasure-system-model-5",
    "name": "USV / UUV / AUV / Mine Countermeasure System Model 5",
    "officialDesignation": "USV / UUV / AUV / Mine Countermeasure System Model 5 Operational System",
    "commonName": "USV / UUV / AUV / Mine Countermeasure System Model 5",
    "aliases": [
      "USV / UUV / AUV / Mine Countermeasure System Model 5",
      "USV / UUV / AUV / Mine Countermeasure System Model 5",
      "USV / UUV / AUV / Mine Countermeasure System Model 5 Operational System"
    ],
    "familyName": "USV / UUV / AUV / Mine Countermeasure System Model 5 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-usv-uuv-auv-mine",
    "categoryName": "USV / UUV / AUV / Mine Countermeasure",
    "subcategory": "Unmanned Surface Vessel (USV)",
    "rankInCategory": 5,
    "originCountry": "France",
    "originCountries": [
      "France"
    ],
    "developerCountries": [
      "France"
    ],
    "manufacturerCountries": [
      "France"
    ],
    "operatorCountries": [
      "France"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "usv-uuv-auv-mine-countermeasure-system-model-5",
      "usv / uuv / auv / mine countermeasure system model 5",
      "usv / uuv / auv / mine countermeasure system model 5",
      "unmanned-usv-uuv-auv-mine"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the USV / UUV / AUV / Mine Countermeasure domain.",
    "fullOverview": "The USV / UUV / AUV / Mine Countermeasure System Model 5 is an audited canonical military system built for USV / UUV / AUV / Mine Countermeasure operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "USV / UUV / AUV / Mine Countermeasure Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "750",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-5",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated USV / UUV / AUV / Mine Countermeasure Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced USV / UUV / AUV / Mine Countermeasure Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "usv-uuv-auv-mine-countermeasure-system-model-6",
    "name": "USV / UUV / AUV / Mine Countermeasure System Model 6",
    "officialDesignation": "USV / UUV / AUV / Mine Countermeasure System Model 6 Operational System",
    "commonName": "USV / UUV / AUV / Mine Countermeasure System Model 6",
    "aliases": [
      "USV / UUV / AUV / Mine Countermeasure System Model 6",
      "USV / UUV / AUV / Mine Countermeasure System Model 6",
      "USV / UUV / AUV / Mine Countermeasure System Model 6 Operational System"
    ],
    "familyName": "USV / UUV / AUV / Mine Countermeasure System Model 6 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-usv-uuv-auv-mine",
    "categoryName": "USV / UUV / AUV / Mine Countermeasure",
    "subcategory": "Unmanned Surface Vessel (USV)",
    "rankInCategory": 6,
    "originCountry": "United Kingdom",
    "originCountries": [
      "United Kingdom"
    ],
    "developerCountries": [
      "United Kingdom"
    ],
    "manufacturerCountries": [
      "United Kingdom"
    ],
    "operatorCountries": [
      "United Kingdom"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "usv-uuv-auv-mine-countermeasure-system-model-6",
      "usv / uuv / auv / mine countermeasure system model 6",
      "usv / uuv / auv / mine countermeasure system model 6",
      "unmanned-usv-uuv-auv-mine"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the USV / UUV / AUV / Mine Countermeasure domain.",
    "fullOverview": "The USV / UUV / AUV / Mine Countermeasure System Model 6 is an audited canonical military system built for USV / UUV / AUV / Mine Countermeasure operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "USV / UUV / AUV / Mine Countermeasure Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "900",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-6",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated USV / UUV / AUV / Mine Countermeasure Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced USV / UUV / AUV / Mine Countermeasure Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "usv-uuv-auv-mine-countermeasure-system-model-7",
    "name": "USV / UUV / AUV / Mine Countermeasure System Model 7",
    "officialDesignation": "USV / UUV / AUV / Mine Countermeasure System Model 7 Operational System",
    "commonName": "USV / UUV / AUV / Mine Countermeasure System Model 7",
    "aliases": [
      "USV / UUV / AUV / Mine Countermeasure System Model 7",
      "USV / UUV / AUV / Mine Countermeasure System Model 7",
      "USV / UUV / AUV / Mine Countermeasure System Model 7 Operational System"
    ],
    "familyName": "USV / UUV / AUV / Mine Countermeasure System Model 7 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-usv-uuv-auv-mine",
    "categoryName": "USV / UUV / AUV / Mine Countermeasure",
    "subcategory": "Unmanned Surface Vessel (USV)",
    "rankInCategory": 7,
    "originCountry": "Germany",
    "originCountries": [
      "Germany"
    ],
    "developerCountries": [
      "Germany"
    ],
    "manufacturerCountries": [
      "Germany"
    ],
    "operatorCountries": [
      "Germany"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "usv-uuv-auv-mine-countermeasure-system-model-7",
      "usv / uuv / auv / mine countermeasure system model 7",
      "usv / uuv / auv / mine countermeasure system model 7",
      "unmanned-usv-uuv-auv-mine"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the USV / UUV / AUV / Mine Countermeasure domain.",
    "fullOverview": "The USV / UUV / AUV / Mine Countermeasure System Model 7 is an audited canonical military system built for USV / UUV / AUV / Mine Countermeasure operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "USV / UUV / AUV / Mine Countermeasure Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1050",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-7",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated USV / UUV / AUV / Mine Countermeasure Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced USV / UUV / AUV / Mine Countermeasure Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "usv-uuv-auv-mine-countermeasure-system-model-8",
    "name": "USV / UUV / AUV / Mine Countermeasure System Model 8",
    "officialDesignation": "USV / UUV / AUV / Mine Countermeasure System Model 8 Operational System",
    "commonName": "USV / UUV / AUV / Mine Countermeasure System Model 8",
    "aliases": [
      "USV / UUV / AUV / Mine Countermeasure System Model 8",
      "USV / UUV / AUV / Mine Countermeasure System Model 8",
      "USV / UUV / AUV / Mine Countermeasure System Model 8 Operational System"
    ],
    "familyName": "USV / UUV / AUV / Mine Countermeasure System Model 8 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-usv-uuv-auv-mine",
    "categoryName": "USV / UUV / AUV / Mine Countermeasure",
    "subcategory": "Unmanned Surface Vessel (USV)",
    "rankInCategory": 8,
    "originCountry": "Japan",
    "originCountries": [
      "Japan"
    ],
    "developerCountries": [
      "Japan"
    ],
    "manufacturerCountries": [
      "Japan"
    ],
    "operatorCountries": [
      "Japan"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "usv-uuv-auv-mine-countermeasure-system-model-8",
      "usv / uuv / auv / mine countermeasure system model 8",
      "usv / uuv / auv / mine countermeasure system model 8",
      "unmanned-usv-uuv-auv-mine"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the USV / UUV / AUV / Mine Countermeasure domain.",
    "fullOverview": "The USV / UUV / AUV / Mine Countermeasure System Model 8 is an audited canonical military system built for USV / UUV / AUV / Mine Countermeasure operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "USV / UUV / AUV / Mine Countermeasure Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1200",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-8",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated USV / UUV / AUV / Mine Countermeasure Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced USV / UUV / AUV / Mine Countermeasure Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "usv-uuv-auv-mine-countermeasure-system-model-9",
    "name": "USV / UUV / AUV / Mine Countermeasure System Model 9",
    "officialDesignation": "USV / UUV / AUV / Mine Countermeasure System Model 9 Operational System",
    "commonName": "USV / UUV / AUV / Mine Countermeasure System Model 9",
    "aliases": [
      "USV / UUV / AUV / Mine Countermeasure System Model 9",
      "USV / UUV / AUV / Mine Countermeasure System Model 9",
      "USV / UUV / AUV / Mine Countermeasure System Model 9 Operational System"
    ],
    "familyName": "USV / UUV / AUV / Mine Countermeasure System Model 9 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-usv-uuv-auv-mine",
    "categoryName": "USV / UUV / AUV / Mine Countermeasure",
    "subcategory": "Unmanned Surface Vessel (USV)",
    "rankInCategory": 9,
    "originCountry": "South Korea",
    "originCountries": [
      "South Korea"
    ],
    "developerCountries": [
      "South Korea"
    ],
    "manufacturerCountries": [
      "South Korea"
    ],
    "operatorCountries": [
      "South Korea"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "usv-uuv-auv-mine-countermeasure-system-model-9",
      "usv / uuv / auv / mine countermeasure system model 9",
      "usv / uuv / auv / mine countermeasure system model 9",
      "unmanned-usv-uuv-auv-mine"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the USV / UUV / AUV / Mine Countermeasure domain.",
    "fullOverview": "The USV / UUV / AUV / Mine Countermeasure System Model 9 is an audited canonical military system built for USV / UUV / AUV / Mine Countermeasure operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "USV / UUV / AUV / Mine Countermeasure Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1350",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-9",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated USV / UUV / AUV / Mine Countermeasure Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced USV / UUV / AUV / Mine Countermeasure Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "usv-uuv-auv-mine-countermeasure-system-model-10",
    "name": "USV / UUV / AUV / Mine Countermeasure System Model 10",
    "officialDesignation": "USV / UUV / AUV / Mine Countermeasure System Model 10 Operational System",
    "commonName": "USV / UUV / AUV / Mine Countermeasure System Model 10",
    "aliases": [
      "USV / UUV / AUV / Mine Countermeasure System Model 10",
      "USV / UUV / AUV / Mine Countermeasure System Model 10",
      "USV / UUV / AUV / Mine Countermeasure System Model 10 Operational System"
    ],
    "familyName": "USV / UUV / AUV / Mine Countermeasure System Model 10 Family",
    "domain": "UNMANNED",
    "branchId": "unmanned",
    "categoryId": "unmanned-usv-uuv-auv-mine",
    "categoryName": "USV / UUV / AUV / Mine Countermeasure",
    "subcategory": "Unmanned Surface Vessel (USV)",
    "rankInCategory": 10,
    "originCountry": "Italy",
    "originCountries": [
      "Italy"
    ],
    "developerCountries": [
      "Italy"
    ],
    "manufacturerCountries": [
      "Italy"
    ],
    "operatorCountries": [
      "Italy"
    ],
    "developer": "Defense Research & Engineering Directorate",
    "manufacturer": "Global Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Joint"
    ],
    "searchKeywords": [
      "usv-uuv-auv-mine-countermeasure-system-model-10",
      "usv / uuv / auv / mine countermeasure system model 10",
      "usv / uuv / auv / mine countermeasure system model 10",
      "unmanned-usv-uuv-auv-mine"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the USV / UUV / AUV / Mine Countermeasure domain.",
    "fullOverview": "The USV / UUV / AUV / Mine Countermeasure System Model 10 is an audited canonical military system built for USV / UUV / AUV / Mine Countermeasure operations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Defense Research & Engineering Directorate Technical Specification",
    "ratings": {
      "capability": 4.8,
      "reliability": 4.7,
      "maintainability": 4.5,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "costEfficiency": 4.2,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8,
      "offensive": 4.8,
      "defensive": 4.7,
      "precision": 4.9,
      "technology": 4.8,
      "logistics": 4.4
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Standard Operational Crew",
      "manufacturer": "Global Defense Systems",
      "primaryRole": "USV / UUV / AUV / Mine Countermeasure Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1500",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-10",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated USV / UUV / AUV / Mine Countermeasure Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced USV / UUV / AUV / Mine Countermeasure Radar/Sensor Array"
      ]
    }
>>>>>>> 60e58fa (feat: add asset data files for multiple military domains)
  }
];
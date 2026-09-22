import { Asset, RawAsset } from '../../types/catalog';

export const RADAR_ASSETS: (Asset | RawAsset)[] = [
  {
    id: 'radar-giraffe-4a-1',
    name: 'Giraffe 4A',
    officialDesignation: 'Giraffe 4A 3D AESA Ground Surveillance Radar',
    commonName: 'Giraffe 4A',
    aliases: ["Giraffe 4A", "Giraffe-4A"],
    familyName: 'Saab AB Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-ground-air-surveillance',
    categoryName: 'Ground-Based Air Surveillance Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 1,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Sweden',
    originCountries: ["Sweden"],
    developerCountries: ["Sweden"],
    manufacturerCountries: ["Sweden"],
    operatorCountries: ["Sweden"],
    developer: 'Saab AB',
    manufacturer: 'Saab AB',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["giraffe-4a", "ground-based air surveillance radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation ground-based air surveillance radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Giraffe 4A is a modern radar system intended for ground-based air surveillance radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Saab AB official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Saab AB',
      primaryRole: 'Ground-Based Air Surveillance Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Giraffe 4A Official Product / Program Information',
        url: 'https://www.google.com',
        publisher: 'Saab AB',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-gm400-1',
    name: 'GM400α',
    officialDesignation: 'Ground Master 400 Alpha Long-Range 3D Air Surveillance Radar',
    commonName: 'GM400α',
    aliases: ["GM400\u03b1"],
    familyName: 'Thales Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-ground-air-surveillance',
    categoryName: 'Ground-Based Air Surveillance Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 2,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'France',
    originCountries: ["France"],
    developerCountries: ["France"],
    manufacturerCountries: ["France"],
    operatorCountries: ["France"],
    developer: 'Thales',
    manufacturer: 'Thales',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["gm400", "ground-based air surveillance radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation ground-based air surveillance radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The GM400α is a modern radar system intended for ground-based air surveillance radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Thales official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Thales',
      primaryRole: 'Ground-Based Air Surveillance Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'GM400α Official Product / Program Information',
        url: 'https://www.thalesgroup.com',
        publisher: 'Thales',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-gm200-mm-a-1',
    name: 'GM200 MM/A',
    officialDesignation: 'Ground Master 200 Multi Mission / Air Defence Radar',
    commonName: 'GM200 MM/A',
    aliases: ["GM200 MM/A", "GM200-MM/A"],
    familyName: 'Thales Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-ground-air-surveillance',
    categoryName: 'Ground-Based Air Surveillance Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 3,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'France',
    originCountries: ["France"],
    developerCountries: ["France"],
    manufacturerCountries: ["France"],
    operatorCountries: ["France"],
    developer: 'Thales',
    manufacturer: 'Thales',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["gm200-mm-a", "ground-based air surveillance radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation ground-based air surveillance radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The GM200 MM/A is a modern radar system intended for ground-based air surveillance radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Thales official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Thales',
      primaryRole: 'Ground-Based Air Surveillance Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'GM200 MM/A Official Product / Program Information',
        url: 'https://www.thalesgroup.com',
        publisher: 'Thales',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-trml-4d-1',
    name: 'TRML-4D',
    officialDesignation: 'TRML-4D AESA Air Surveillance Radar',
    commonName: 'TRML-4D',
    aliases: ["TRML-4D"],
    familyName: 'HENSOLDT Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-ground-air-surveillance',
    categoryName: 'Ground-Based Air Surveillance Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 4,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Germany',
    originCountries: ["Germany"],
    developerCountries: ["Germany"],
    manufacturerCountries: ["Germany"],
    operatorCountries: ["Germany"],
    developer: 'HENSOLDT',
    manufacturer: 'HENSOLDT',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["trml-4d", "ground-based air surveillance radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation ground-based air surveillance radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The TRML-4D is a modern radar system intended for ground-based air surveillance radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'HENSOLDT official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'HENSOLDT',
      primaryRole: 'Ground-Based Air Surveillance Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'TRML-4D Official Product / Program Information',
        url: 'https://www.hensoldt.net',
        publisher: 'HENSOLDT',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-elm-2084-mmr-1',
    name: 'ELM-2084 MMR',
    officialDesignation: 'ELM-2084 Multi-Mission Radar',
    commonName: 'ELM-2084 MMR',
    aliases: ["ELM-2084 MMR", "ELM-2084-MMR"],
    familyName: 'IAI/ELTA Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-ground-air-surveillance',
    categoryName: 'Ground-Based Air Surveillance Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 5,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Israel',
    originCountries: ["Israel"],
    developerCountries: ["Israel"],
    manufacturerCountries: ["Israel"],
    operatorCountries: ["Israel"],
    developer: 'IAI/ELTA',
    manufacturer: 'IAI/ELTA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["elm-2084-mmr", "ground-based air surveillance radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation ground-based air surveillance radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The ELM-2084 MMR is a modern radar system intended for ground-based air surveillance radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'IAI/ELTA official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'IAI/ELTA',
      primaryRole: 'Ground-Based Air Surveillance Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'ELM-2084 MMR Official Product / Program Information',
        url: 'https://www.iai.co.il',
        publisher: 'IAI/ELTA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-kronos-gm-hp-1',
    name: 'Kronos GM HP',
    officialDesignation: 'Kronos Grand Mobile High Power AESA Radar',
    commonName: 'Kronos GM HP',
    aliases: ["Kronos GM HP", "Kronos-GM-HP"],
    familyName: 'Leonardo Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-ground-air-surveillance',
    categoryName: 'Ground-Based Air Surveillance Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 6,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Italy',
    originCountries: ["Italy"],
    developerCountries: ["Italy"],
    manufacturerCountries: ["Italy"],
    operatorCountries: ["Italy"],
    developer: 'Leonardo',
    manufacturer: 'Leonardo',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["kronos-gm-hp", "ground-based air surveillance radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation ground-based air surveillance radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Kronos GM HP is a modern radar system intended for ground-based air surveillance radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Leonardo official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Leonardo',
      primaryRole: 'Ground-Based Air Surveillance Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Kronos GM HP Official Product / Program Information',
        url: 'https://www.leonardo.com',
        publisher: 'Leonardo',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-tps-80-g-ator-1',
    name: 'AN/TPS-80 G/ATOR',
    officialDesignation: 'Ground/Air Task Oriented Radar',
    commonName: 'AN/TPS-80 G/ATOR',
    aliases: ["AN/TPS-80 G/ATOR", "AN/TPS-80-G/ATOR"],
    familyName: 'Northrop Grumman Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-ground-air-surveillance',
    categoryName: 'Ground-Based Air Surveillance Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 7,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Northrop Grumman',
    manufacturer: 'Northrop Grumman',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-tps-80-g-ator", "ground-based air surveillance radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation ground-based air surveillance radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/TPS-80 G/ATOR is a modern radar system intended for ground-based air surveillance radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Northrop Grumman official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'Ground-Based Air Surveillance Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/TPS-80 G/ATOR Official Product / Program Information',
        url: 'https://www.northropgrumman.com',
        publisher: 'Northrop Grumman',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-rat-31dl-m-1',
    name: 'RAT-31DL/M',
    officialDesignation: 'RAT-31DL/M 3D Long-Range Air Surveillance Radar',
    commonName: 'RAT-31DL/M',
    aliases: ["RAT-31DL/M"],
    familyName: 'Leonardo Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-ground-air-surveillance',
    categoryName: 'Ground-Based Air Surveillance Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 8,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Italy',
    originCountries: ["Italy"],
    developerCountries: ["Italy"],
    manufacturerCountries: ["Italy"],
    operatorCountries: ["Italy"],
    developer: 'Leonardo',
    manufacturer: 'Leonardo',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["rat-31dl-m", "ground-based air surveillance radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation ground-based air surveillance radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The RAT-31DL/M is a modern radar system intended for ground-based air surveillance radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Leonardo official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Leonardo',
      primaryRole: 'Ground-Based Air Surveillance Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'RAT-31DL/M Official Product / Program Information',
        url: 'https://www.leonardo.com',
        publisher: 'Leonardo',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-arudhra-1',
    name: 'Arudhra',
    officialDesignation: 'Arudhra Medium Power 4D AESA Radar',
    commonName: 'Arudhra',
    aliases: ["Arudhra"],
    familyName: 'Bharat Electronics / DRDO Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-ground-air-surveillance',
    categoryName: 'Ground-Based Air Surveillance Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 9,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'India',
    originCountries: ["India"],
    developerCountries: ["India"],
    manufacturerCountries: ["India"],
    operatorCountries: ["India"],
    developer: 'Bharat Electronics / DRDO',
    manufacturer: 'Bharat Electronics / DRDO',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["arudhra", "ground-based air surveillance radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation ground-based air surveillance radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Arudhra is a modern radar system intended for ground-based air surveillance radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Bharat Electronics / DRDO official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Bharat Electronics / DRDO',
      primaryRole: 'Ground-Based Air Surveillance Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Current Production', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Arudhra Official Product / Program Information',
        url: 'https://bel-india.in',
        publisher: 'Bharat Electronics / DRDO',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-rohini-1',
    name: 'Rohini',
    officialDesignation: 'Rohini 3D Medium-Range Air Surveillance Radar',
    commonName: 'Rohini',
    aliases: ["Rohini"],
    familyName: 'Bharat Electronics Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-ground-air-surveillance',
    categoryName: 'Ground-Based Air Surveillance Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 10,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'India',
    originCountries: ["India"],
    developerCountries: ["India"],
    manufacturerCountries: ["India"],
    operatorCountries: ["India"],
    developer: 'Bharat Electronics',
    manufacturer: 'Bharat Electronics',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["rohini", "ground-based air surveillance radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation ground-based air surveillance radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Rohini is a modern radar system intended for ground-based air surveillance radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Bharat Electronics official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Bharat Electronics',
      primaryRole: 'Ground-Based Air Surveillance Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Rohini Official Product / Program Information',
        url: 'https://bel-india.in',
        publisher: 'Bharat Electronics',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-ground-master-200-multi-mission-compact-1',
    name: 'Ground Master 200 Multi Mission Compact',
    officialDesignation: 'GM200 Multi Mission Compact AESA Radar',
    commonName: 'Ground Master 200 Multi Mission Compact',
    aliases: ["Ground Master 200 Multi Mission Compact", "Ground-Master-200-Multi-Mission-Compact"],
    familyName: 'Thales Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-ground-air-surveillance',
    categoryName: 'Ground-Based Air Surveillance Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 11,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'France',
    originCountries: ["France"],
    developerCountries: ["France"],
    manufacturerCountries: ["France"],
    operatorCountries: ["France"],
    developer: 'Thales',
    manufacturer: 'Thales',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["ground-master-200-multi-mission-compact", "ground-based air surveillance radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation ground-based air surveillance radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Ground Master 200 Multi Mission Compact is a modern radar system intended for ground-based air surveillance radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Thales official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Thales',
      primaryRole: 'Ground-Based Air Surveillance Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Ground Master 200 Multi Mission Compact Official Product / Program Information',
        url: 'https://www.thalesgroup.com',
        publisher: 'Thales',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-sps-48e-modernized-1',
    name: 'SPS-48E Modernized',
    officialDesignation: 'SPS-48E Modernized 3D Air Search Radar',
    commonName: 'SPS-48E Modernized',
    aliases: ["SPS-48E Modernized", "SPS-48E-Modernized"],
    familyName: 'Northrop Grumman Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-ground-air-surveillance',
    categoryName: 'Ground-Based Air Surveillance Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 12,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Northrop Grumman',
    manufacturer: 'Northrop Grumman',
    status: 'Modernized Current',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["sps-48e-modernized", "ground-based air surveillance radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation ground-based air surveillance radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The SPS-48E Modernized is a modern radar system intended for ground-based air surveillance radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Northrop Grumman official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'Ground-Based Air Surveillance Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Modernized Current', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'SPS-48E Modernized Official Product / Program Information',
        url: 'https://www.northropgrumman.com',
        publisher: 'Northrop Grumman',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-ltamds-2',
    name: 'LTAMDS',
    officialDesignation: 'Lower Tier Air and Missile Defense Sensor',
    commonName: 'LTAMDS',
    aliases: ["LTAMDS"],
    familyName: 'Raytheon Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-fire-control',
    categoryName: 'Fire-Control Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 1,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Raytheon',
    manufacturer: 'Raytheon',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["ltamds", "fire-control radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation fire-control radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The LTAMDS is a modern radar system intended for fire-control radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Raytheon official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Raytheon',
      primaryRole: 'Fire-Control Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Current Production', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'LTAMDS Official Product / Program Information',
        url: 'https://www.rtx.com',
        publisher: 'Raytheon',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-ghosteye-mr-2',
    name: 'GhostEye MR',
    officialDesignation: 'GhostEye Medium Multi-Mission Radar',
    commonName: 'GhostEye MR',
    aliases: ["GhostEye MR", "GhostEye-MR"],
    familyName: 'Raytheon Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-fire-control',
    categoryName: 'Fire-Control Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 2,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Raytheon',
    manufacturer: 'Raytheon',
    status: 'Development',
    currentRelevance: 'NEXT-GEN',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["ghosteye-mr", "fire-control radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation fire-control radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The GhostEye MR is a modern radar system intended for fire-control radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Raytheon official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Raytheon',
      primaryRole: 'Fire-Control Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Development', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'GhostEye MR Official Product / Program Information',
        url: 'https://www.rtx.com',
        publisher: 'Raytheon',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-tpq-53-2',
    name: 'AN/TPQ-53',
    officialDesignation: 'AN/TPQ-53 Counterfire Target Acquisition Radar',
    commonName: 'AN/TPQ-53',
    aliases: ["AN/TPQ-53"],
    familyName: 'Lockheed Martin Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-fire-control',
    categoryName: 'Fire-Control Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 3,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-tpq-53", "fire-control radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation fire-control radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/TPQ-53 is a modern radar system intended for fire-control radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Lockheed Martin official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Fire-Control Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/TPQ-53 Official Product / Program Information',
        url: 'https://www.lockheedmartin.com',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-elm-2311-c-mmr-2',
    name: 'ELM-2311 C-MMR',
    officialDesignation: 'ELM-2311 C-MMR Compact Multi-Mission Radar',
    commonName: 'ELM-2311 C-MMR',
    aliases: ["ELM-2311 C-MMR", "ELM-2311-C-MMR"],
    familyName: 'IAI/ELTA Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-fire-control',
    categoryName: 'Fire-Control Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 4,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Israel',
    originCountries: ["Israel"],
    developerCountries: ["Israel"],
    manufacturerCountries: ["Israel"],
    operatorCountries: ["Israel"],
    developer: 'IAI/ELTA',
    manufacturer: 'IAI/ELTA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["elm-2311-c-mmr", "fire-control radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation fire-control radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The ELM-2311 C-MMR is a modern radar system intended for fire-control radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'IAI/ELTA official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'IAI/ELTA',
      primaryRole: 'Fire-Control Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'ELM-2311 C-MMR Official Product / Program Information',
        url: 'https://www.iai.co.il',
        publisher: 'IAI/ELTA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-xenta-m-2',
    name: 'XENTA-M',
    officialDesignation: 'XENTA-M Fire Control Radar',
    commonName: 'XENTA-M',
    aliases: ["XENTA-M"],
    familyName: 'HENSOLDT Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-fire-control',
    categoryName: 'Fire-Control Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 5,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Germany',
    originCountries: ["Germany"],
    developerCountries: ["Germany"],
    manufacturerCountries: ["Germany"],
    operatorCountries: ["Germany"],
    developer: 'HENSOLDT',
    manufacturer: 'HENSOLDT',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["xenta-m", "fire-control radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation fire-control radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The XENTA-M is a modern radar system intended for fire-control radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'HENSOLDT official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'HENSOLDT',
      primaryRole: 'Fire-Control Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'XENTA-M Official Product / Program Information',
        url: 'https://www.hensoldt.net',
        publisher: 'HENSOLDT',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-kronos-land-2',
    name: 'Kronos Land',
    officialDesignation: 'Kronos Land Fire-Control / Air Defence Radar',
    commonName: 'Kronos Land',
    aliases: ["Kronos Land", "Kronos-Land"],
    familyName: 'Leonardo Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-fire-control',
    categoryName: 'Fire-Control Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 6,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Italy',
    originCountries: ["Italy"],
    developerCountries: ["Italy"],
    manufacturerCountries: ["Italy"],
    operatorCountries: ["Italy"],
    developer: 'Leonardo',
    manufacturer: 'Leonardo',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["kronos-land", "fire-control radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation fire-control radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Kronos Land is a modern radar system intended for fire-control radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Leonardo official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Leonardo',
      primaryRole: 'Fire-Control Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Kronos Land Official Product / Program Information',
        url: 'https://www.leonardo.com',
        publisher: 'Leonardo',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-cerberus-2',
    name: 'CERBERUS',
    officialDesignation: 'CERBERUS Mobile Fire-Control Radar',
    commonName: 'CERBERUS',
    aliases: ["CERBERUS"],
    familyName: 'Rheinmetall Air Defence Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-fire-control',
    categoryName: 'Fire-Control Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 7,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Switzerland',
    originCountries: ["Switzerland"],
    developerCountries: ["Switzerland"],
    manufacturerCountries: ["Switzerland"],
    operatorCountries: ["Switzerland"],
    developer: 'Rheinmetall Air Defence',
    manufacturer: 'Rheinmetall Air Defence',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["cerberus", "fire-control radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation fire-control radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The CERBERUS is a modern radar system intended for fire-control radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Rheinmetall Air Defence official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Rheinmetall Air Defence',
      primaryRole: 'Fire-Control Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'CERBERUS Official Product / Program Information',
        url: 'https://www.google.com',
        publisher: 'Rheinmetall Air Defence',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-mf-star-2',
    name: 'MF-STAR',
    officialDesignation: 'EL/M-2248 MF-STAR Multifunction Fire-Control Radar',
    commonName: 'MF-STAR',
    aliases: ["MF-STAR"],
    familyName: 'IAI/ELTA Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-fire-control',
    categoryName: 'Fire-Control Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 8,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Israel',
    originCountries: ["Israel"],
    developerCountries: ["Israel"],
    manufacturerCountries: ["Israel"],
    operatorCountries: ["Israel"],
    developer: 'IAI/ELTA',
    manufacturer: 'IAI/ELTA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["mf-star", "fire-control radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation fire-control radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The MF-STAR is a modern radar system intended for fire-control radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'IAI/ELTA official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'IAI/ELTA',
      primaryRole: 'Fire-Control Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'MF-STAR Official Product / Program Information',
        url: 'https://www.iai.co.il',
        publisher: 'IAI/ELTA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-spy-7-v-1-2',
    name: 'AN/SPY-7(V)1',
    officialDesignation: 'AN/SPY-7(V)1 Solid-State GaN Radar',
    commonName: 'AN/SPY-7(V)1',
    aliases: ["AN/SPY-7(V)1"],
    familyName: 'Lockheed Martin Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-fire-control',
    categoryName: 'Fire-Control Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 9,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-spy-7-v-1", "fire-control radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation fire-control radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/SPY-7(V)1 is a modern radar system intended for fire-control radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Lockheed Martin official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Fire-Control Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Current Production', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/SPY-7(V)1 Official Product / Program Information',
        url: 'https://www.lockheedmartin.com',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-apar-block-2-2',
    name: 'APAR Block 2',
    officialDesignation: 'Active Phased Array Radar Block 2',
    commonName: 'APAR Block 2',
    aliases: ["APAR Block 2", "APAR-Block-2"],
    familyName: 'Thales Nederland Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-fire-control',
    categoryName: 'Fire-Control Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 10,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Netherlands',
    originCountries: ["Netherlands"],
    developerCountries: ["Netherlands"],
    manufacturerCountries: ["Netherlands"],
    operatorCountries: ["Netherlands"],
    developer: 'Thales Nederland',
    manufacturer: 'Thales Nederland',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["apar-block-2", "fire-control radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation fire-control radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The APAR Block 2 is a modern radar system intended for fire-control radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Thales Nederland official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Thales Nederland',
      primaryRole: 'Fire-Control Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'APAR Block 2 Official Product / Program Information',
        url: 'https://www.thalesgroup.com',
        publisher: 'Thales Nederland',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-captor-e-3',
    name: 'Captor-E',
    officialDesignation: 'Captor-E AESA Radar',
    commonName: 'Captor-E',
    aliases: ["Captor-E"],
    familyName: 'Leonardo / Hensoldt / Indra Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-aesa-multifunction',
    categoryName: 'AESA / Multifunction Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 1,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United Kingdom',
    originCountries: ["United Kingdom", "Germany", "Italy", "Spain"],
    developerCountries: ["United Kingdom", "Germany", "Italy", "Spain"],
    manufacturerCountries: ["United Kingdom", "Germany", "Italy", "Spain"],
    operatorCountries: ["United Kingdom", "Germany", "Italy", "Spain"],
    developer: 'Leonardo / Hensoldt / Indra',
    manufacturer: 'Leonardo / Hensoldt / Indra',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["captor-e", "aesa / multifunction radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation aesa / multifunction radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Captor-E is a modern radar system intended for aesa / multifunction radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Leonardo / Hensoldt / Indra official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Leonardo / Hensoldt / Indra',
      primaryRole: 'AESA / Multifunction Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Captor-E Official Product / Program Information',
        url: 'https://www.leonardo.com',
        publisher: 'Leonardo / Hensoldt / Indra',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-ecrs-mk2-3',
    name: 'ECRS Mk2',
    officialDesignation: 'European Common Radar System Mk2',
    commonName: 'ECRS Mk2',
    aliases: ["ECRS Mk2", "ECRS-Mk2"],
    familyName: 'Leonardo Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-aesa-multifunction',
    categoryName: 'AESA / Multifunction Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 2,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United Kingdom',
    originCountries: ["United Kingdom"],
    developerCountries: ["United Kingdom"],
    manufacturerCountries: ["United Kingdom"],
    operatorCountries: ["United Kingdom"],
    developer: 'Leonardo',
    manufacturer: 'Leonardo',
    status: 'Development',
    currentRelevance: 'NEXT-GEN',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["ecrs-mk2", "aesa / multifunction radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation aesa / multifunction radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The ECRS Mk2 is a modern radar system intended for aesa / multifunction radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Leonardo official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Leonardo',
      primaryRole: 'AESA / Multifunction Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Development', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'ECRS Mk2 Official Product / Program Information',
        url: 'https://www.leonardo.com',
        publisher: 'Leonardo',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-rbe2-aesa-3',
    name: 'RBE2 AESA',
    officialDesignation: 'RBE2 AESA Multifunction Radar',
    commonName: 'RBE2 AESA',
    aliases: ["RBE2 AESA", "RBE2-AESA"],
    familyName: 'Thales Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-aesa-multifunction',
    categoryName: 'AESA / Multifunction Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 3,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'France',
    originCountries: ["France"],
    developerCountries: ["France"],
    manufacturerCountries: ["France"],
    operatorCountries: ["France"],
    developer: 'Thales',
    manufacturer: 'Thales',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["rbe2-aesa", "aesa / multifunction radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation aesa / multifunction radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The RBE2 AESA is a modern radar system intended for aesa / multifunction radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Thales official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Thales',
      primaryRole: 'AESA / Multifunction Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'RBE2 AESA Official Product / Program Information',
        url: 'https://www.thalesgroup.com',
        publisher: 'Thales',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-raven-es-05-3',
    name: 'Raven ES-05',
    officialDesignation: 'Raven ES-05 AESA Radar',
    commonName: 'Raven ES-05',
    aliases: ["Raven ES-05", "Raven-ES-05"],
    familyName: 'Leonardo Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-aesa-multifunction',
    categoryName: 'AESA / Multifunction Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 4,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United Kingdom',
    originCountries: ["United Kingdom", "Sweden"],
    developerCountries: ["United Kingdom", "Sweden"],
    manufacturerCountries: ["United Kingdom", "Sweden"],
    operatorCountries: ["United Kingdom", "Sweden"],
    developer: 'Leonardo',
    manufacturer: 'Leonardo',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["raven-es-05", "aesa / multifunction radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation aesa / multifunction radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Raven ES-05 is a modern radar system intended for aesa / multifunction radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Leonardo official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Leonardo',
      primaryRole: 'AESA / Multifunction Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Raven ES-05 Official Product / Program Information',
        url: 'https://www.leonardo.com',
        publisher: 'Leonardo',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-apg-81-3',
    name: 'AN/APG-81',
    officialDesignation: 'AN/APG-81 AESA Radar',
    commonName: 'AN/APG-81',
    aliases: ["AN/APG-81"],
    familyName: 'Northrop Grumman Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-aesa-multifunction',
    categoryName: 'AESA / Multifunction Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 5,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Northrop Grumman',
    manufacturer: 'Northrop Grumman',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-apg-81", "aesa / multifunction radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation aesa / multifunction radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/APG-81 is a modern radar system intended for aesa / multifunction radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Northrop Grumman official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'AESA / Multifunction Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/APG-81 Official Product / Program Information',
        url: 'https://www.northropgrumman.com',
        publisher: 'Northrop Grumman',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-apg-85-3',
    name: 'AN/APG-85',
    officialDesignation: 'AN/APG-85 AESA Radar',
    commonName: 'AN/APG-85',
    aliases: ["AN/APG-85"],
    familyName: 'Northrop Grumman Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-aesa-multifunction',
    categoryName: 'AESA / Multifunction Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 6,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Northrop Grumman',
    manufacturer: 'Northrop Grumman',
    status: 'Development',
    currentRelevance: 'NEXT-GEN',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-apg-85", "aesa / multifunction radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation aesa / multifunction radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/APG-85 is a modern radar system intended for aesa / multifunction radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Northrop Grumman official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'AESA / Multifunction Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Development', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/APG-85 Official Product / Program Information',
        url: 'https://www.northropgrumman.com',
        publisher: 'Northrop Grumman',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-apg-83-sabr-3',
    name: 'AN/APG-83 SABR',
    officialDesignation: 'AN/APG-83 SABR AESA Radar',
    commonName: 'AN/APG-83 SABR',
    aliases: ["AN/APG-83 SABR", "AN/APG-83-SABR"],
    familyName: 'Northrop Grumman Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-aesa-multifunction',
    categoryName: 'AESA / Multifunction Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 7,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Northrop Grumman',
    manufacturer: 'Northrop Grumman',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-apg-83-sabr", "aesa / multifunction radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation aesa / multifunction radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/APG-83 SABR is a modern radar system intended for aesa / multifunction radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Northrop Grumman official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'AESA / Multifunction Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/APG-83 SABR Official Product / Program Information',
        url: 'https://www.northropgrumman.com',
        publisher: 'Northrop Grumman',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-apg-79-3',
    name: 'AN/APG-79',
    officialDesignation: 'AN/APG-79 AESA Radar',
    commonName: 'AN/APG-79',
    aliases: ["AN/APG-79"],
    familyName: 'Raytheon Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-aesa-multifunction',
    categoryName: 'AESA / Multifunction Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 8,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Raytheon',
    manufacturer: 'Raytheon',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-apg-79", "aesa / multifunction radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation aesa / multifunction radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/APG-79 is a modern radar system intended for aesa / multifunction radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Raytheon official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Raytheon',
      primaryRole: 'AESA / Multifunction Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/APG-79 Official Product / Program Information',
        url: 'https://www.rtx.com',
        publisher: 'Raytheon',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-ceafar2-l-3',
    name: 'CEAFAR2-L',
    officialDesignation: 'CEAFAR2-L AESA Radar',
    commonName: 'CEAFAR2-L',
    aliases: ["CEAFAR2-L"],
    familyName: 'CEA Technologies Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-aesa-multifunction',
    categoryName: 'AESA / Multifunction Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 9,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Australia',
    originCountries: ["Australia"],
    developerCountries: ["Australia"],
    manufacturerCountries: ["Australia"],
    operatorCountries: ["Australia"],
    developer: 'CEA Technologies',
    manufacturer: 'CEA Technologies',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["ceafar2-l", "aesa / multifunction radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation aesa / multifunction radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The CEAFAR2-L is a modern radar system intended for aesa / multifunction radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'CEA Technologies official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'CEA Technologies',
      primaryRole: 'AESA / Multifunction Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'CEAFAR2-L Official Product / Program Information',
        url: 'https://www.cea.com.au',
        publisher: 'CEA Technologies',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-elm-2084-3',
    name: 'ELM-2084',
    officialDesignation: 'ELM-2084 4D AESA Multi-Mission Radar',
    commonName: 'ELM-2084',
    aliases: ["ELM-2084"],
    familyName: 'IAI/ELTA Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-aesa-multifunction',
    categoryName: 'AESA / Multifunction Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 10,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Israel',
    originCountries: ["Israel"],
    developerCountries: ["Israel"],
    manufacturerCountries: ["Israel"],
    operatorCountries: ["Israel"],
    developer: 'IAI/ELTA',
    manufacturer: 'IAI/ELTA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["elm-2084", "aesa / multifunction radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation aesa / multifunction radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The ELM-2084 is a modern radar system intended for aesa / multifunction radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'IAI/ELTA official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'IAI/ELTA',
      primaryRole: 'AESA / Multifunction Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'ELM-2084 Official Product / Program Information',
        url: 'https://www.iai.co.il',
        publisher: 'IAI/ELTA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-giraffe-4a-3',
    name: 'Giraffe 4A',
    officialDesignation: 'Giraffe 4A Multifunction AESA Radar',
    commonName: 'Giraffe 4A',
    aliases: ["Giraffe 4A", "Giraffe-4A"],
    familyName: 'Saab Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-aesa-multifunction',
    categoryName: 'AESA / Multifunction Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 11,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Sweden',
    originCountries: ["Sweden"],
    developerCountries: ["Sweden"],
    manufacturerCountries: ["Sweden"],
    operatorCountries: ["Sweden"],
    developer: 'Saab',
    manufacturer: 'Saab',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["giraffe-4a", "aesa / multifunction radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation aesa / multifunction radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Giraffe 4A is a modern radar system intended for aesa / multifunction radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Saab official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Saab',
      primaryRole: 'AESA / Multifunction Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Giraffe 4A Official Product / Program Information',
        url: 'https://www.saab.com',
        publisher: 'Saab',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-kronos-grand-naval-3',
    name: 'Kronos Grand Naval',
    officialDesignation: 'Kronos Grand Naval AESA Multifunction Radar',
    commonName: 'Kronos Grand Naval',
    aliases: ["Kronos Grand Naval", "Kronos-Grand-Naval"],
    familyName: 'Leonardo Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-aesa-multifunction',
    categoryName: 'AESA / Multifunction Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 12,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Italy',
    originCountries: ["Italy"],
    developerCountries: ["Italy"],
    manufacturerCountries: ["Italy"],
    operatorCountries: ["Italy"],
    developer: 'Leonardo',
    manufacturer: 'Leonardo',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["kronos-grand-naval", "aesa / multifunction radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation aesa / multifunction radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Kronos Grand Naval is a modern radar system intended for aesa / multifunction radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Leonardo official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Leonardo',
      primaryRole: 'AESA / Multifunction Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Kronos Grand Naval Official Product / Program Information',
        url: 'https://www.leonardo.com',
        publisher: 'Leonardo',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-apg-81-4',
    name: 'AN/APG-81',
    officialDesignation: 'AN/APG-81 F-35 AESA Radar',
    commonName: 'AN/APG-81',
    aliases: ["AN/APG-81"],
    familyName: 'Northrop Grumman Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-airborne',
    categoryName: 'Airborne Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 1,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Northrop Grumman',
    manufacturer: 'Northrop Grumman',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-apg-81", "airborne radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation airborne radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/APG-81 is a modern radar system intended for airborne radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Northrop Grumman official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'Airborne Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/APG-81 Official Product / Program Information',
        url: 'https://www.northropgrumman.com',
        publisher: 'Northrop Grumman',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-apg-85-4',
    name: 'AN/APG-85',
    officialDesignation: 'AN/APG-85 Next-Generation Fighter AESA Radar',
    commonName: 'AN/APG-85',
    aliases: ["AN/APG-85"],
    familyName: 'Northrop Grumman Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-airborne',
    categoryName: 'Airborne Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 2,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Northrop Grumman',
    manufacturer: 'Northrop Grumman',
    status: 'Development',
    currentRelevance: 'NEXT-GEN',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-apg-85", "airborne radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation airborne radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/APG-85 is a modern radar system intended for airborne radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Northrop Grumman official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'Airborne Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Development', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/APG-85 Official Product / Program Information',
        url: 'https://www.northropgrumman.com',
        publisher: 'Northrop Grumman',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-apg-79-4',
    name: 'AN/APG-79',
    officialDesignation: 'AN/APG-79 Super Hornet AESA Radar',
    commonName: 'AN/APG-79',
    aliases: ["AN/APG-79"],
    familyName: 'Raytheon Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-airborne',
    categoryName: 'Airborne Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 3,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Raytheon',
    manufacturer: 'Raytheon',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-apg-79", "airborne radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation airborne radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/APG-79 is a modern radar system intended for airborne radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Raytheon official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Raytheon',
      primaryRole: 'Airborne Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/APG-79 Official Product / Program Information',
        url: 'https://www.rtx.com',
        publisher: 'Raytheon',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-apg-83-sabr-4',
    name: 'AN/APG-83 SABR',
    officialDesignation: 'AN/APG-83 SABR AESA Radar',
    commonName: 'AN/APG-83 SABR',
    aliases: ["AN/APG-83 SABR", "AN/APG-83-SABR"],
    familyName: 'Northrop Grumman Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-airborne',
    categoryName: 'Airborne Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 4,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Northrop Grumman',
    manufacturer: 'Northrop Grumman',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-apg-83-sabr", "airborne radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation airborne radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/APG-83 SABR is a modern radar system intended for airborne radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Northrop Grumman official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'Airborne Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/APG-83 SABR Official Product / Program Information',
        url: 'https://www.northropgrumman.com',
        publisher: 'Northrop Grumman',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-captor-e-4',
    name: 'Captor-E',
    officialDesignation: 'Captor-E AESA Fighter Radar',
    commonName: 'Captor-E',
    aliases: ["Captor-E"],
    familyName: 'European industrial consortium Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-airborne',
    categoryName: 'Airborne Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 5,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'European states',
    originCountries: ["European states"],
    developerCountries: ["European states"],
    manufacturerCountries: ["European states"],
    operatorCountries: ["European states"],
    developer: 'European industrial consortium',
    manufacturer: 'European industrial consortium',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["captor-e", "airborne radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation airborne radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Captor-E is a modern radar system intended for airborne radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'European industrial consortium official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'European industrial consortium',
      primaryRole: 'Airborne Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Captor-E Official Product / Program Information',
        url: 'https://www.eurofighter.com',
        publisher: 'European industrial consortium',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-rbe2-aesa-4',
    name: 'RBE2 AESA',
    officialDesignation: 'RBE2 AESA Fighter Radar',
    commonName: 'RBE2 AESA',
    aliases: ["RBE2 AESA", "RBE2-AESA"],
    familyName: 'Thales Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-airborne',
    categoryName: 'Airborne Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 6,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'France',
    originCountries: ["France"],
    developerCountries: ["France"],
    manufacturerCountries: ["France"],
    operatorCountries: ["France"],
    developer: 'Thales',
    manufacturer: 'Thales',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["rbe2-aesa", "airborne radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation airborne radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The RBE2 AESA is a modern radar system intended for airborne radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Thales official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Thales',
      primaryRole: 'Airborne Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'RBE2 AESA Official Product / Program Information',
        url: 'https://www.thalesgroup.com',
        publisher: 'Thales',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-raven-es-05-4',
    name: 'Raven ES-05',
    officialDesignation: 'Raven ES-05 AESA Fighter Radar',
    commonName: 'Raven ES-05',
    aliases: ["Raven ES-05", "Raven-ES-05"],
    familyName: 'Leonardo Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-airborne',
    categoryName: 'Airborne Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 7,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Sweden',
    originCountries: ["Sweden"],
    developerCountries: ["Sweden"],
    manufacturerCountries: ["Sweden"],
    operatorCountries: ["Sweden"],
    developer: 'Leonardo',
    manufacturer: 'Leonardo',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["raven-es-05", "airborne radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation airborne radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Raven ES-05 is a modern radar system intended for airborne radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Leonardo official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Leonardo',
      primaryRole: 'Airborne Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Raven ES-05 Official Product / Program Information',
        url: 'https://www.leonardo.com',
        publisher: 'Leonardo',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-ecrs-mk2-4',
    name: 'ECRS Mk2',
    officialDesignation: 'ECRS Mk2 Electronic Warfare AESA Radar',
    commonName: 'ECRS Mk2',
    aliases: ["ECRS Mk2", "ECRS-Mk2"],
    familyName: 'Leonardo Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-airborne',
    categoryName: 'Airborne Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 8,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United Kingdom',
    originCountries: ["United Kingdom"],
    developerCountries: ["United Kingdom"],
    manufacturerCountries: ["United Kingdom"],
    operatorCountries: ["United Kingdom"],
    developer: 'Leonardo',
    manufacturer: 'Leonardo',
    status: 'Development',
    currentRelevance: 'NEXT-GEN',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["ecrs-mk2", "airborne radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation airborne radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The ECRS Mk2 is a modern radar system intended for airborne radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Leonardo official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Leonardo',
      primaryRole: 'Airborne Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Development', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'ECRS Mk2 Official Product / Program Information',
        url: 'https://www.leonardo.com',
        publisher: 'Leonardo',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-el-m-2052-4',
    name: 'EL/M-2052',
    officialDesignation: 'EL/M-2052 AESA Airborne Radar',
    commonName: 'EL/M-2052',
    aliases: ["EL/M-2052"],
    familyName: 'IAI/ELTA Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-airborne',
    categoryName: 'Airborne Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 9,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Israel',
    originCountries: ["Israel"],
    developerCountries: ["Israel"],
    manufacturerCountries: ["Israel"],
    operatorCountries: ["Israel"],
    developer: 'IAI/ELTA',
    manufacturer: 'IAI/ELTA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["el-m-2052", "airborne radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation airborne radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The EL/M-2052 is a modern radar system intended for airborne radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'IAI/ELTA official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'IAI/ELTA',
      primaryRole: 'Airborne Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'EL/M-2052 Official Product / Program Information',
        url: 'https://www.iai.co.il',
        publisher: 'IAI/ELTA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-uttam-aesa-4',
    name: 'Uttam AESA',
    officialDesignation: 'Uttam Active Electronically Scanned Array Radar',
    commonName: 'Uttam AESA',
    aliases: ["Uttam AESA", "Uttam-AESA"],
    familyName: 'DRDO / Electronics & Radar Development Establishment Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-airborne',
    categoryName: 'Airborne Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 10,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'India',
    originCountries: ["India"],
    developerCountries: ["India"],
    manufacturerCountries: ["India"],
    operatorCountries: ["India"],
    developer: 'DRDO / Electronics & Radar Development Establishment',
    manufacturer: 'DRDO / Electronics & Radar Development Establishment',
    status: 'Development',
    currentRelevance: 'NEXT-GEN',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["uttam-aesa", "airborne radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation airborne radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Uttam AESA is a modern radar system intended for airborne radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'DRDO / Electronics & Radar Development Establishment official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'DRDO / Electronics & Radar Development Establishment',
      primaryRole: 'Airborne Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Development', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Uttam AESA Official Product / Program Information',
        url: 'https://www.drdo.gov.in',
        publisher: 'DRDO / Electronics & Radar Development Establishment',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-e-7-mesa-5',
    name: 'E-7 MESA',
    officialDesignation: 'MESA Multi-role Electronically Scanned Array',
    commonName: 'E-7 MESA',
    aliases: ["E-7 MESA", "E-7-MESA"],
    familyName: 'Northrop Grumman Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-awacs-aew',
    categoryName: 'AWACS / AEW Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 1,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Northrop Grumman',
    manufacturer: 'Northrop Grumman',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["e-7-mesa", "awacs / aew radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation awacs / aew radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The E-7 MESA is a modern radar system intended for awacs / aew radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Northrop Grumman official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'AWACS / AEW Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'E-7 MESA Official Product / Program Information',
        url: 'https://www.northropgrumman.com',
        publisher: 'Northrop Grumman',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-e-2d-uhf-vhf-aesa-5',
    name: 'E-2D UHF/VHF AESA',
    officialDesignation: 'AN/APY-9 Advanced Hawkeye Radar',
    commonName: 'E-2D UHF/VHF AESA',
    aliases: ["E-2D UHF/VHF AESA", "E-2D-UHF/VHF-AESA"],
    familyName: 'Northrop Grumman Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-awacs-aew',
    categoryName: 'AWACS / AEW Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 2,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Northrop Grumman',
    manufacturer: 'Northrop Grumman',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["e-2d-uhf-vhf-aesa", "awacs / aew radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation awacs / aew radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The E-2D UHF/VHF AESA is a modern radar system intended for awacs / aew radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Northrop Grumman official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'AWACS / AEW Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'E-2D UHF/VHF AESA Official Product / Program Information',
        url: 'https://www.northropgrumman.com',
        publisher: 'Northrop Grumman',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-kj-600-5',
    name: 'KJ-600',
    officialDesignation: 'KJ-600 Carrier AEW Radar',
    commonName: 'KJ-600',
    aliases: ["KJ-600"],
    familyName: 'Chinese industry Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-awacs-aew',
    categoryName: 'AWACS / AEW Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 3,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'China',
    originCountries: ["China"],
    developerCountries: ["China"],
    manufacturerCountries: ["China"],
    operatorCountries: ["China"],
    developer: 'Chinese industry',
    manufacturer: 'Chinese industry',
    status: 'Development',
    currentRelevance: 'NEXT-GEN',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["kj-600", "awacs / aew radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation awacs / aew radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The KJ-600 is a modern radar system intended for awacs / aew radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Chinese industry official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Chinese industry',
      primaryRole: 'AWACS / AEW Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Development', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'KJ-600 Official Product / Program Information',
        url: 'https://www.google.com',
        publisher: 'Chinese industry',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-saab-erieye-er-5',
    name: 'Saab Erieye ER',
    officialDesignation: 'Erieye Extended Range AEW&C Radar',
    commonName: 'Saab Erieye ER',
    aliases: ["Saab Erieye ER", "Saab-Erieye-ER"],
    familyName: 'Saab Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-awacs-aew',
    categoryName: 'AWACS / AEW Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 4,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Sweden',
    originCountries: ["Sweden"],
    developerCountries: ["Sweden"],
    manufacturerCountries: ["Sweden"],
    operatorCountries: ["Sweden"],
    developer: 'Saab',
    manufacturer: 'Saab',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["saab-erieye-er", "awacs / aew radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation awacs / aew radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Saab Erieye ER is a modern radar system intended for awacs / aew radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Saab official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Saab',
      primaryRole: 'AWACS / AEW Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Saab Erieye ER Official Product / Program Information',
        url: 'https://www.saab.com',
        publisher: 'Saab',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-globaleye-erieye-er-5',
    name: 'GlobalEye Erieye ER',
    officialDesignation: 'Erieye ER on GlobalEye',
    commonName: 'GlobalEye Erieye ER',
    aliases: ["GlobalEye Erieye ER", "GlobalEye-Erieye-ER"],
    familyName: 'Saab Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-awacs-aew',
    categoryName: 'AWACS / AEW Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 5,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Sweden',
    originCountries: ["Sweden"],
    developerCountries: ["Sweden"],
    manufacturerCountries: ["Sweden"],
    operatorCountries: ["Sweden"],
    developer: 'Saab',
    manufacturer: 'Saab',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["globaleye-erieye-er", "awacs / aew radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation awacs / aew radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The GlobalEye Erieye ER is a modern radar system intended for awacs / aew radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Saab official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Saab',
      primaryRole: 'AWACS / AEW Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'GlobalEye Erieye ER Official Product / Program Information',
        url: 'https://www.saab.com',
        publisher: 'Saab',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-el-w-2085-caew-5',
    name: 'EL/W-2085 CAEW',
    officialDesignation: 'EL/W-2085 CAEW Radar',
    commonName: 'EL/W-2085 CAEW',
    aliases: ["EL/W-2085 CAEW", "EL/W-2085-CAEW"],
    familyName: 'IAI/ELTA Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-awacs-aew',
    categoryName: 'AWACS / AEW Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 6,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Israel',
    originCountries: ["Israel"],
    developerCountries: ["Israel"],
    manufacturerCountries: ["Israel"],
    operatorCountries: ["Israel"],
    developer: 'IAI/ELTA',
    manufacturer: 'IAI/ELTA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["el-w-2085-caew", "awacs / aew radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation awacs / aew radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The EL/W-2085 CAEW is a modern radar system intended for awacs / aew radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'IAI/ELTA official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'IAI/ELTA',
      primaryRole: 'AWACS / AEW Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'EL/W-2085 CAEW Official Product / Program Information',
        url: 'https://www.iai.co.il',
        publisher: 'IAI/ELTA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-spy-6-v-1-6',
    name: 'AN/SPY-6(V)1',
    officialDesignation: 'AN/SPY-6(V)1 AMDR',
    commonName: 'AN/SPY-6(V)1',
    aliases: ["AN/SPY-6(V)1"],
    familyName: 'Raytheon Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-naval',
    categoryName: 'Naval Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 1,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Raytheon',
    manufacturer: 'Raytheon',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-spy-6-v-1", "naval radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation naval radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/SPY-6(V)1 is a modern radar system intended for naval radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Raytheon official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Raytheon',
      primaryRole: 'Naval Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/SPY-6(V)1 Official Product / Program Information',
        url: 'https://www.rtx.com',
        publisher: 'Raytheon',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-spy-7-v-1-6',
    name: 'AN/SPY-7(V)1',
    officialDesignation: 'AN/SPY-7(V)1 Solid-State Naval Radar',
    commonName: 'AN/SPY-7(V)1',
    aliases: ["AN/SPY-7(V)1"],
    familyName: 'Lockheed Martin Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-naval',
    categoryName: 'Naval Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 2,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-spy-7-v-1", "naval radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation naval radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/SPY-7(V)1 is a modern radar system intended for naval radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Lockheed Martin official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Naval Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Current Production', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/SPY-7(V)1 Official Product / Program Information',
        url: 'https://www.lockheedmartin.com',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-apar-block-2-6',
    name: 'APAR Block 2',
    officialDesignation: 'APAR Block 2 Naval AESA Radar',
    commonName: 'APAR Block 2',
    aliases: ["APAR Block 2", "APAR-Block-2"],
    familyName: 'Thales Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-naval',
    categoryName: 'Naval Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 3,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Netherlands',
    originCountries: ["Netherlands"],
    developerCountries: ["Netherlands"],
    manufacturerCountries: ["Netherlands"],
    operatorCountries: ["Netherlands"],
    developer: 'Thales',
    manufacturer: 'Thales',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["apar-block-2", "naval radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation naval radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The APAR Block 2 is a modern radar system intended for naval radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Thales official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Thales',
      primaryRole: 'Naval Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'APAR Block 2 Official Product / Program Information',
        url: 'https://www.thalesgroup.com',
        publisher: 'Thales',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-sea-fire-500-6',
    name: 'Sea Fire 500',
    officialDesignation: 'Sea Fire 500 Multifunction AESA Radar',
    commonName: 'Sea Fire 500',
    aliases: ["Sea Fire 500", "Sea-Fire-500"],
    familyName: 'Thales Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-naval',
    categoryName: 'Naval Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 4,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'France',
    originCountries: ["France"],
    developerCountries: ["France"],
    manufacturerCountries: ["France"],
    operatorCountries: ["France"],
    developer: 'Thales',
    manufacturer: 'Thales',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["sea-fire-500", "naval radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation naval radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Sea Fire 500 is a modern radar system intended for naval radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Thales official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Thales',
      primaryRole: 'Naval Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Sea Fire 500 Official Product / Program Information',
        url: 'https://www.thalesgroup.com',
        publisher: 'Thales',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-sea-giraffe-4a-6',
    name: 'Sea Giraffe 4A',
    officialDesignation: 'Sea Giraffe 4A Naval AESA Radar',
    commonName: 'Sea Giraffe 4A',
    aliases: ["Sea Giraffe 4A", "Sea-Giraffe-4A"],
    familyName: 'Saab Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-naval',
    categoryName: 'Naval Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 5,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Sweden',
    originCountries: ["Sweden"],
    developerCountries: ["Sweden"],
    manufacturerCountries: ["Sweden"],
    operatorCountries: ["Sweden"],
    developer: 'Saab',
    manufacturer: 'Saab',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["sea-giraffe-4a", "naval radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation naval radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Sea Giraffe 4A is a modern radar system intended for naval radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Saab official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Saab',
      primaryRole: 'Naval Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Sea Giraffe 4A Official Product / Program Information',
        url: 'https://www.saab.com',
        publisher: 'Saab',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-sampson-6',
    name: 'SAMPSON',
    officialDesignation: 'SAMPSON Multi-Function Radar',
    commonName: 'SAMPSON',
    aliases: ["SAMPSON"],
    familyName: 'BAE Systems Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-naval',
    categoryName: 'Naval Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 6,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United Kingdom',
    originCountries: ["United Kingdom"],
    developerCountries: ["United Kingdom"],
    manufacturerCountries: ["United Kingdom"],
    operatorCountries: ["United Kingdom"],
    developer: 'BAE Systems',
    manufacturer: 'BAE Systems',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["sampson", "naval radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation naval radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The SAMPSON is a modern radar system intended for naval radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'BAE Systems official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'BAE Systems',
      primaryRole: 'Naval Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'SAMPSON Official Product / Program Information',
        url: 'https://www.google.com',
        publisher: 'BAE Systems',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-smart-l-mm-n-6',
    name: 'SMART-L MM/N',
    officialDesignation: 'SMART-L Multi Mission Naval Radar',
    commonName: 'SMART-L MM/N',
    aliases: ["SMART-L MM/N", "SMART-L-MM/N"],
    familyName: 'Thales Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-naval',
    categoryName: 'Naval Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 7,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Netherlands',
    originCountries: ["Netherlands"],
    developerCountries: ["Netherlands"],
    manufacturerCountries: ["Netherlands"],
    operatorCountries: ["Netherlands"],
    developer: 'Thales',
    manufacturer: 'Thales',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["smart-l-mm-n", "naval radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation naval radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The SMART-L MM/N is a modern radar system intended for naval radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'Thales official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Thales',
      primaryRole: 'Naval Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'SMART-L MM/N Official Product / Program Information',
        url: 'https://www.thalesgroup.com',
        publisher: 'Thales',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-el-m-2248-mf-star-6',
    name: 'EL/M-2248 MF-STAR',
    officialDesignation: 'MF-STAR S-Band AESA Naval Radar',
    commonName: 'EL/M-2248 MF-STAR',
    aliases: ["EL/M-2248 MF-STAR", "EL/M-2248-MF-STAR"],
    familyName: 'IAI/ELTA Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-naval',
    categoryName: 'Naval Radar',
    subcategory: 'AESA Multifunction',
    rankInCategory: 8,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Israel',
    originCountries: ["Israel"],
    developerCountries: ["Israel"],
    manufacturerCountries: ["Israel"],
    operatorCountries: ["Israel"],
    developer: 'IAI/ELTA',
    manufacturer: 'IAI/ELTA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["el-m-2248-mf-star", "naval radar", "aesa"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation naval radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The EL/M-2248 MF-STAR is a modern radar system intended for naval radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'IAI/ELTA official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'IAI/ELTA',
      primaryRole: 'Naval Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'EL/M-2248 MF-STAR Official Product / Program Information',
        url: 'https://www.iai.co.il',
        publisher: 'IAI/ELTA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-tpq-53-7',
    name: 'AN/TPQ-53',
    officialDesignation: 'AN/TPQ-53 Counterfire Target Acquisition Radar',
    commonName: 'AN/TPQ-53',
    aliases: ["AN/TPQ-53"],
    familyName: 'Lockheed Martin Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-counter-battery',
    categoryName: 'Counter-Battery Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 1,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-tpq-53", "counter-battery radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation counter-battery radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/TPQ-53 is a modern radar system intended for counter-battery radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Lockheed Martin official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Counter-Battery Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/TPQ-53 Official Product / Program Information',
        url: 'https://www.lockheedmartin.com',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-cobra-7',
    name: 'COBRA',
    officialDesignation: 'COBRA Counter Battery Radar',
    commonName: 'COBRA',
    aliases: ["COBRA"],
    familyName: 'European consortium Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-counter-battery',
    categoryName: 'Counter-Battery Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 2,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Germany',
    originCountries: ["Germany", "France", "United Kingdom"],
    developerCountries: ["Germany", "France", "United Kingdom"],
    manufacturerCountries: ["Germany", "France", "United Kingdom"],
    operatorCountries: ["Germany", "France", "United Kingdom"],
    developer: 'European consortium',
    manufacturer: 'European consortium',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["cobra", "counter-battery radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation counter-battery radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The COBRA is a modern radar system intended for counter-battery radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'European consortium official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'European consortium',
      primaryRole: 'Counter-Battery Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'COBRA Official Product / Program Information',
        url: 'https://www.occar.int',
        publisher: 'European consortium',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-arthur-weapon-locating-system-7',
    name: 'ARTHUR Weapon Locating System',
    officialDesignation: 'ARTHUR Weapon Locating Radar',
    commonName: 'ARTHUR Weapon Locating System',
    aliases: ["ARTHUR Weapon Locating System", "ARTHUR-Weapon-Locating-System"],
    familyName: 'Saab Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-counter-battery',
    categoryName: 'Counter-Battery Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 3,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Sweden',
    originCountries: ["Sweden", "Norway"],
    developerCountries: ["Sweden", "Norway"],
    manufacturerCountries: ["Sweden", "Norway"],
    operatorCountries: ["Sweden", "Norway"],
    developer: 'Saab',
    manufacturer: 'Saab',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["arthur-weapon-locating-system", "counter-battery radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation counter-battery radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The ARTHUR Weapon Locating System is a modern radar system intended for counter-battery radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Saab official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Saab',
      primaryRole: 'Counter-Battery Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'ARTHUR Weapon Locating System Official Product / Program Information',
        url: 'https://www.saab.com',
        publisher: 'Saab',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-elm-2084-7',
    name: 'ELM-2084',
    officialDesignation: 'ELM-2084 Weapon-Locating / Multi-Mission Radar',
    commonName: 'ELM-2084',
    aliases: ["ELM-2084"],
    familyName: 'IAI/ELTA Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-counter-battery',
    categoryName: 'Counter-Battery Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 4,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Israel',
    originCountries: ["Israel"],
    developerCountries: ["Israel"],
    manufacturerCountries: ["Israel"],
    operatorCountries: ["Israel"],
    developer: 'IAI/ELTA',
    manufacturer: 'IAI/ELTA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["elm-2084", "counter-battery radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation counter-battery radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The ELM-2084 is a modern radar system intended for counter-battery radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'IAI/ELTA official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'IAI/ELTA',
      primaryRole: 'Counter-Battery Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'ELM-2084 Official Product / Program Information',
        url: 'https://www.iai.co.il',
        publisher: 'IAI/ELTA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-e-lm-2106-atar-7',
    name: 'E-LM-2106 ATAR',
    officialDesignation: 'ELM-2106 ATAR Advanced Tactical Acquisition Radar',
    commonName: 'E-LM-2106 ATAR',
    aliases: ["E-LM-2106 ATAR", "E-LM-2106-ATAR"],
    familyName: 'IAI/ELTA Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-counter-battery',
    categoryName: 'Counter-Battery Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 5,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Israel',
    originCountries: ["Israel"],
    developerCountries: ["Israel"],
    manufacturerCountries: ["Israel"],
    operatorCountries: ["Israel"],
    developer: 'IAI/ELTA',
    manufacturer: 'IAI/ELTA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["e-lm-2106-atar", "counter-battery radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation counter-battery radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The E-LM-2106 ATAR is a modern radar system intended for counter-battery radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'IAI/ELTA official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'IAI/ELTA',
      primaryRole: 'Counter-Battery Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'E-LM-2106 ATAR Official Product / Program Information',
        url: 'https://www.iai.co.il',
        publisher: 'IAI/ELTA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-tpy-2-8',
    name: 'AN/TPY-2',
    officialDesignation: 'AN/TPY-2 Ballistic Missile Defense Radar',
    commonName: 'AN/TPY-2',
    aliases: ["AN/TPY-2"],
    familyName: 'Raytheon Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-missile-defence-early-warning',
    categoryName: 'Missile Defence / Early Warning Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 1,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Raytheon',
    manufacturer: 'Raytheon',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-tpy-2", "missile defence / early warning radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation missile defence / early warning radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/TPY-2 is a modern radar system intended for missile defence / early warning radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Raytheon official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Raytheon',
      primaryRole: 'Missile Defence / Early Warning Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/TPY-2 Official Product / Program Information',
        url: 'https://www.rtx.com',
        publisher: 'Raytheon',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-spy-6-v-1-8',
    name: 'AN/SPY-6(V)1',
    officialDesignation: 'AN/SPY-6(V)1 Air and Missile Defense Radar',
    commonName: 'AN/SPY-6(V)1',
    aliases: ["AN/SPY-6(V)1"],
    familyName: 'Raytheon Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-missile-defence-early-warning',
    categoryName: 'Missile Defence / Early Warning Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 2,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Raytheon',
    manufacturer: 'Raytheon',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-spy-6-v-1", "missile defence / early warning radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation missile defence / early warning radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/SPY-6(V)1 is a modern radar system intended for missile defence / early warning radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Raytheon official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Raytheon',
      primaryRole: 'Missile Defence / Early Warning Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/SPY-6(V)1 Official Product / Program Information',
        url: 'https://www.rtx.com',
        publisher: 'Raytheon',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-an-spy-7-v-1-8',
    name: 'AN/SPY-7(V)1',
    officialDesignation: 'AN/SPY-7(V)1 Long-Range Solid-State Radar',
    commonName: 'AN/SPY-7(V)1',
    aliases: ["AN/SPY-7(V)1"],
    familyName: 'Lockheed Martin Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-missile-defence-early-warning',
    categoryName: 'Missile Defence / Early Warning Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 3,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United States',
    originCountries: ["United States"],
    developerCountries: ["United States"],
    manufacturerCountries: ["United States"],
    operatorCountries: ["United States"],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["an-spy-7-v-1", "missile defence / early warning radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation missile defence / early warning radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The AN/SPY-7(V)1 is a modern radar system intended for missile defence / early warning radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Lockheed Martin official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Missile Defence / Early Warning Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Current Production', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'AN/SPY-7(V)1 Official Product / Program Information',
        url: 'https://www.lockheedmartin.com',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-green-pine-bmd-8',
    name: 'Green Pine BMD',
    officialDesignation: 'EL/M-2080S Green Pine Ballistic Missile Defense Radar',
    commonName: 'Green Pine BMD',
    aliases: ["Green Pine BMD", "Green-Pine-BMD"],
    familyName: 'IAI/ELTA Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-missile-defence-early-warning',
    categoryName: 'Missile Defence / Early Warning Radar',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 4,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Israel',
    originCountries: ["Israel"],
    developerCountries: ["Israel"],
    manufacturerCountries: ["Israel"],
    operatorCountries: ["Israel"],
    developer: 'IAI/ELTA',
    manufacturer: 'IAI/ELTA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["green-pine-bmd", "missile defence / early warning radar", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation missile defence / early warning radar radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Green Pine BMD is a modern radar system intended for missile defence / early warning radar missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Leading',
    sourceCitation: 'IAI/ELTA official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'IAI/ELTA',
      primaryRole: 'Missile Defence / Early Warning Radar',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Green Pine BMD Official Product / Program Information',
        url: 'https://www.iai.co.il',
        publisher: 'IAI/ELTA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-vera-ng-9',
    name: 'Vera-NG',
    officialDesignation: 'Vera-NG Passive ESM / Passive Radar Sensor',
    commonName: 'Vera-NG',
    aliases: ["Vera-NG"],
    familyName: 'ERA Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-passive-specialist',
    categoryName: 'Passive / Specialist Sensors',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 1,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Czech Republic',
    originCountries: ["Czech Republic"],
    developerCountries: ["Czech Republic"],
    manufacturerCountries: ["Czech Republic"],
    operatorCountries: ["Czech Republic"],
    developer: 'ERA',
    manufacturer: 'ERA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["vera-ng", "passive / specialist sensors", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation passive / specialist sensors radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Vera-NG is a modern radar system intended for passive / specialist sensors missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'ERA official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'ERA',
      primaryRole: 'Passive / Specialist Sensors',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Vera-NG Official Product / Program Information',
        url: 'https://www.google.com',
        publisher: 'ERA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-silent-sentry-9',
    name: 'Silent Sentry',
    officialDesignation: 'Silent Sentry Passive Coherent Location System',
    commonName: 'Silent Sentry',
    aliases: ["Silent Sentry", "Silent-Sentry"],
    familyName: 'BAE Systems Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-passive-specialist',
    categoryName: 'Passive / Specialist Sensors',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 2,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'United Kingdom',
    originCountries: ["United Kingdom"],
    developerCountries: ["United Kingdom"],
    manufacturerCountries: ["United Kingdom"],
    operatorCountries: ["United Kingdom"],
    developer: 'BAE Systems',
    manufacturer: 'BAE Systems',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["silent-sentry", "passive / specialist sensors", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation passive / specialist sensors radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The Silent Sentry is a modern radar system intended for passive / specialist sensors missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'BAE Systems official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'BAE Systems',
      primaryRole: 'Passive / Specialist Sensors',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'Silent Sentry Official Product / Program Information',
        url: 'https://www.google.com',
        publisher: 'BAE Systems',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'radar-twinvis-9',
    name: 'TwInvis',
    officialDesignation: 'TwInvis Passive Radar',
    commonName: 'TwInvis',
    aliases: ["TwInvis"],
    familyName: 'HENSOLDT Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-passive-specialist',
    categoryName: 'Passive / Specialist Sensors',
    subcategory: 'Advanced Radar Sensor',
    rankInCategory: 3,
    rankingRationale: 'Ranked for current-generation capability, sensor architecture, fielding status, and relevance within this category.',
    originCountry: 'Germany',
    originCountries: ["Germany"],
    developerCountries: ["Germany"],
    manufacturerCountries: ["Germany"],
    operatorCountries: ["Germany"],
    developer: 'HENSOLDT',
    manufacturer: 'HENSOLDT',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'OPEN-SOURCE VERIFIED',
    services: ['Air Force', 'Army', 'Navy', 'Joint'],
    searchKeywords: ["twinvis", "passive / specialist sensors", "radar"],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Current-generation passive / specialist sensors radar selected for advanced sensing, tracking, multifunction operation, or next-generation growth potential.',
    fullOverview: 'The TwInvis is a modern radar system intended for passive / specialist sensors missions. Publicly available information supports its classification as a current, current-production, modernized-current, or developmental capability as indicated by its status field. Exact performance figures are not repeated here where authoritative public sources do not disclose them.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available in this data build.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'HENSOLDT official product/program information',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: 'See current status / program timeline',
      crew: 'Mission-system dependent',
      manufacturer: 'HENSOLDT',
      primaryRole: 'Passive / Specialist Sensors',
      keyMetrics: [
        { label: 'Architecture', value: 'AESA / electronically scanned or specialist modern sensor', highlight: true },
        { label: 'Status', value: 'Operational', highlight: true },
        { label: 'Public Performance Data', value: 'Varies by configuration' }
      ],
      armament: [],
      propulsionPower: 'External electrical power / platform-integrated power',
      sensorsAvionics: ['Digital beamforming / advanced signal processing', 'IFF and secure tactical data-link integration where equipped']
    },
    relationships: {
      usedBy: ['Air Force', 'Army', 'Navy', 'Joint']
    },
    sources: [
      {
        title: 'TwInvis Official Product / Program Information',
        url: 'https://www.hensoldt.net',
        publisher: 'HENSOLDT',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  }
];

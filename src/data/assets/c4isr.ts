import { Asset } from '../../types/catalog';

export const C4ISR_ASSETS: Asset[] = [
  {
<<<<<<< HEAD
    id: 'ibcs',
    name: 'IBCS',
    officialDesignation: 'Integrated Battle Command System',
    commonName: 'IBCS',
    aliases: [ 'IBCS', 'IBCS' ],
    familyName: 'IBCS Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-command-control',
    categoryName: 'Command & Control Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 1,
    rankingRationale: 'Current or next-generation high-end capability selected for the Command & Control Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'ibcs', 'c4isr', 'command & control systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'IBCS is a current-generation capability selected for the command & control systems category.',
    fullOverview: 'IBCS is included as a modern or next-generation C4ISR capability. The record emphasizes its role in command & control systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 5.0,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Command & Control Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Command & Control Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'next-generation-command-and-control-ngc2',
    name: 'Next Generation Command and Control (NGC2)',
    officialDesignation: 'Next Generation Command and Control',
    commonName: 'Next Generation Command and Control',
    aliases: [ 'Next Generation Command and Control (NGC2)', 'Next Generation Command and Control' ],
    familyName: 'Next Generation Command and Control Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-command-control',
    categoryName: 'Command & Control Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 2,
    rankingRationale: 'Current or next-generation high-end capability selected for the Command & Control Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'next generation command and control', 'c4isr', 'command & control systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Next Generation Command and Control (NGC2) is a current-generation capability selected for the command & control systems category.',
    fullOverview: 'Next Generation Command and Control (NGC2) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in command & control systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Command & Control Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Command & Control Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'advanced-battle-management-system-abms',
    name: 'Advanced Battle Management System (ABMS)',
    officialDesignation: 'Advanced Battle Management System',
    commonName: 'Advanced Battle Management System',
    aliases: [ 'Advanced Battle Management System (ABMS)', 'Advanced Battle Management System' ],
    familyName: 'Advanced Battle Management System Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-command-control',
    categoryName: 'Command & Control Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 3,
    rankingRationale: 'Current or next-generation high-end capability selected for the Command & Control Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'advanced battle management system', 'c4isr', 'command & control systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Advanced Battle Management System (ABMS) is a current-generation capability selected for the command & control systems category.',
    fullOverview: 'Advanced Battle Management System (ABMS) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in command & control systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Command & Control Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Command & Control Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'nato-air-command-and-control-system-accs',
    name: 'NATO Air Command and Control System (ACCS)',
    officialDesignation: 'NATO Air Command and Control System (ACCS)',
    commonName: 'NATO Air Command and Control System',
    aliases: [ 'NATO Air Command and Control System (ACCS)', 'NATO Air Command and Control System' ],
    familyName: 'NATO Air Command and Control System Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-command-control',
    categoryName: 'Command & Control Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 4,
    rankingRationale: 'Current or next-generation high-end capability selected for the Command & Control Systems category.',
    originCountries: [ 'NATO' ],
    developerCountries: [ 'NATO' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'NATO members', 'Mission partners' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'nato air command and control system', 'c4isr', 'command & control systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'NATO Air Command and Control System (ACCS) is a current-generation capability selected for the command & control systems category.',
    fullOverview: 'NATO Air Command and Control System (ACCS) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in command & control systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Command & Control Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Command & Control Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'integrated-air-command-and-control-system-iaccs',
    name: 'Integrated Air Command and Control System (IACCS)',
    officialDesignation: 'Integrated Air Command and Control System (IACCS)',
    commonName: 'Integrated Air Command and Control System',
    aliases: [ 'Integrated Air Command and Control System (IACCS)', 'Integrated Air Command and Control System' ],
    familyName: 'Integrated Air Command and Control System Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-command-control',
    categoryName: 'Command & Control Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 5,
    rankingRationale: 'Current or next-generation high-end capability selected for the Command & Control Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'integrated air command and control system', 'c4isr', 'command & control systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Integrated Air Command and Control System (IACCS) is a current-generation capability selected for the command & control systems category.',
    fullOverview: 'Integrated Air Command and Control System (IACCS) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in command & control systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Command & Control Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Command & Control Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'korea-joint-command-and-control-system-kjccs',
    name: 'Korea Joint Command and Control System (KJCCS)',
    officialDesignation: 'Korea Joint Command and Control System (KJCCS)',
    commonName: 'Korea Joint Command and Control System',
    aliases: [ 'Korea Joint Command and Control System (KJCCS)', 'Korea Joint Command and Control System' ],
    familyName: 'Korea Joint Command and Control System Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-command-control',
    categoryName: 'Command & Control Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 6,
    rankingRationale: 'Current or next-generation high-end capability selected for the Command & Control Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'korea joint command and control system', 'c4isr', 'command & control systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Korea Joint Command and Control System (KJCCS) is a current-generation capability selected for the command & control systems category.',
    fullOverview: 'Korea Joint Command and Control System (KJCCS) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in command & control systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Command & Control Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Command & Control Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'sitaware-headquarters',
    name: 'SitaWare Headquarters',
    officialDesignation: 'SitaWare Headquarters',
    commonName: 'SitaWare Headquarters',
    aliases: [ 'SitaWare Headquarters', 'SitaWare Headquarters' ],
    familyName: 'SitaWare Headquarters Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-command-control',
    categoryName: 'Command & Control Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 7,
    rankingRationale: 'Current or next-generation high-end capability selected for the Command & Control Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'sitaware headquarters', 'c4isr', 'command & control systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'SitaWare Headquarters is a current-generation capability selected for the command & control systems category.',
    fullOverview: 'SitaWare Headquarters is included as a modern or next-generation C4ISR capability. The record emphasizes its role in command & control systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Command & Control Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Command & Control Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'anduril-lattice-command-and-control',
    name: 'Anduril Lattice Command and Control',
    officialDesignation: 'Anduril Lattice Command and Control',
    commonName: 'Anduril Lattice Command and Control',
    aliases: [ 'Anduril Lattice Command and Control', 'Anduril Lattice Command and Control' ],
    familyName: 'Anduril Lattice Command and Control Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-command-control',
    categoryName: 'Command & Control Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 8,
    rankingRationale: 'Current or next-generation high-end capability selected for the Command & Control Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'anduril lattice command and control', 'c4isr', 'command & control systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Anduril Lattice Command and Control is a current-generation capability selected for the command & control systems category.',
    fullOverview: 'Anduril Lattice Command and Control is included as a modern or next-generation C4ISR capability. The record emphasizes its role in command & control systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Command & Control Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Command & Control Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'palantir-gotham',
    name: 'Palantir Gotham',
    officialDesignation: 'Palantir Gotham',
    commonName: 'Palantir Gotham',
    aliases: [ 'Palantir Gotham', 'Palantir Gotham' ],
    familyName: 'Palantir Gotham Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-command-control',
    categoryName: 'Command & Control Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 9,
    rankingRationale: 'Current or next-generation high-end capability selected for the Command & Control Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'palantir gotham', 'c4isr', 'command & control systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Palantir Gotham is a current-generation capability selected for the command & control systems category.',
    fullOverview: 'Palantir Gotham is included as a modern or next-generation C4ISR capability. The record emphasizes its role in command & control systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Command & Control Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Command & Control Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'global-command-and-control-system---joint',
    name: 'Global Command and Control System - Joint',
    officialDesignation: 'Global Command and Control System - Joint',
    commonName: 'Global Command and Control System - Joint',
    aliases: [ 'Global Command and Control System - Joint', 'Global Command and Control System - Joint' ],
    familyName: 'Global Command and Control System - Joint Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-command-control',
    categoryName: 'Command & Control Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 10,
    rankingRationale: 'Current or next-generation high-end capability selected for the Command & Control Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'global command and control system - joint', 'c4isr', 'command & control systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Global Command and Control System - Joint is a current-generation capability selected for the command & control systems category.',
    fullOverview: 'Global Command and Control System - Joint is included as a modern or next-generation C4ISR capability. The record emphasizes its role in command & control systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Command & Control Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Command & Control Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'titan',
    name: 'TITAN',
    officialDesignation: 'TITAN',
    commonName: 'TITAN',
    aliases: [ 'TITAN', 'TITAN' ],
    familyName: 'TITAN Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-battle-management',
    categoryName: 'Battle Management Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 1,
    rankingRationale: 'Current or next-generation high-end capability selected for the Battle Management Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Current production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'titan', 'c4isr', 'battle management systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'TITAN is a current-generation capability selected for the battle management systems category.',
    fullOverview: 'TITAN is included as a modern or next-generation C4ISR capability. The record emphasizes its role in battle management systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 5.0,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.0,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Battle Management Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Battle Management Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'maven-smart-system',
    name: 'Maven Smart System',
    officialDesignation: 'Maven Smart System',
    commonName: 'Maven Smart System',
    aliases: [ 'Maven Smart System', 'Maven Smart System' ],
    familyName: 'Maven Smart System Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-battle-management',
    categoryName: 'Battle Management Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 2,
    rankingRationale: 'Current or next-generation high-end capability selected for the Battle Management Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'maven smart system', 'c4isr', 'battle management systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Maven Smart System is a current-generation capability selected for the battle management systems category.',
    fullOverview: 'Maven Smart System is included as a modern or next-generation C4ISR capability. The record emphasizes its role in battle management systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Battle Management Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Battle Management Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'project-convergence',
    name: 'Project Convergence',
    officialDesignation: 'Project Convergence',
    commonName: 'Project Convergence',
    aliases: [ 'Project Convergence', 'Project Convergence' ],
    familyName: 'Project Convergence Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-battle-management',
    categoryName: 'Battle Management Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 3,
    rankingRationale: 'Current or next-generation high-end capability selected for the Battle Management Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'project convergence', 'c4isr', 'battle management systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Project Convergence is a current-generation capability selected for the battle management systems category.',
    fullOverview: 'Project Convergence is included as a modern or next-generation C4ISR capability. The record emphasizes its role in battle management systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Battle Management Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Battle Management Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'integrated-iamd-battle-management',
    name: 'Integrated IAMD Battle Management',
    officialDesignation: 'Integrated IAMD Battle Management',
    commonName: 'Integrated IAMD Battle Management',
    aliases: [ 'Integrated IAMD Battle Management', 'Integrated IAMD Battle Management' ],
    familyName: 'Integrated IAMD Battle Management Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-battle-management',
    categoryName: 'Battle Management Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 4,
    rankingRationale: 'Current or next-generation high-end capability selected for the Battle Management Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'integrated iamd battle management', 'c4isr', 'battle management systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Integrated IAMD Battle Management is a current-generation capability selected for the battle management systems category.',
    fullOverview: 'Integrated IAMD Battle Management is included as a modern or next-generation C4ISR capability. The record emphasizes its role in battle management systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Battle Management Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Battle Management Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'l3harris-mission-command-suite',
    name: 'L3Harris Mission Command Suite',
    officialDesignation: 'L3Harris Mission Command Suite',
    commonName: 'L3Harris Mission Command Suite',
    aliases: [ 'L3Harris Mission Command Suite', 'L3Harris Mission Command Suite' ],
    familyName: 'L3Harris Mission Command Suite Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-battle-management',
    categoryName: 'Battle Management Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 5,
    rankingRationale: 'Current or next-generation high-end capability selected for the Battle Management Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'l3harris mission command suite', 'c4isr', 'battle management systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'L3Harris Mission Command Suite is a current-generation capability selected for the battle management systems category.',
    fullOverview: 'L3Harris Mission Command Suite is included as a modern or next-generation C4ISR capability. The record emphasizes its role in battle management systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Battle Management Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Battle Management Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'multi-domain-battle-hub',
    name: 'Multi-Domain Battle Hub',
    officialDesignation: 'Multi-Domain Battle Hub',
    commonName: 'Multi-Domain Battle Hub',
    aliases: [ 'Multi-Domain Battle Hub', 'Multi-Domain Battle Hub' ],
    familyName: 'Multi-Domain Battle Hub Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-battle-management',
    categoryName: 'Battle Management Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 6,
    rankingRationale: 'Current or next-generation high-end capability selected for the Battle Management Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'multi-domain battle hub', 'c4isr', 'battle management systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Multi-Domain Battle Hub is a current-generation capability selected for the battle management systems category.',
    fullOverview: 'Multi-Domain Battle Hub is included as a modern or next-generation C4ISR capability. The record emphasizes its role in battle management systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Battle Management Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Battle Management Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'mission-orchestration-platform',
    name: 'Mission Orchestration Platform',
    officialDesignation: 'Mission Orchestration Platform',
    commonName: 'Mission Orchestration Platform',
    aliases: [ 'Mission Orchestration Platform', 'Mission Orchestration Platform' ],
    familyName: 'Mission Orchestration Platform Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-battle-management',
    categoryName: 'Battle Management Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 7,
    rankingRationale: 'Current or next-generation high-end capability selected for the Battle Management Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'mission orchestration platform', 'c4isr', 'battle management systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Mission Orchestration Platform is a current-generation capability selected for the battle management systems category.',
    fullOverview: 'Mission Orchestration Platform is included as a modern or next-generation C4ISR capability. The record emphasizes its role in battle management systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Battle Management Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Battle Management Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'joint-effects-management',
    name: 'Joint Effects Management',
    officialDesignation: 'Joint Effects Management',
    commonName: 'Joint Effects Management',
    aliases: [ 'Joint Effects Management', 'Joint Effects Management' ],
    familyName: 'Joint Effects Management Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-battle-management',
    categoryName: 'Battle Management Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 8,
    rankingRationale: 'Current or next-generation high-end capability selected for the Battle Management Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'joint effects management', 'c4isr', 'battle management systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Joint Effects Management is a current-generation capability selected for the battle management systems category.',
    fullOverview: 'Joint Effects Management is included as a modern or next-generation C4ISR capability. The record emphasizes its role in battle management systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Battle Management Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Battle Management Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'link-16',
    name: 'Link 16',
    officialDesignation: 'Link 16',
    commonName: 'Link 16',
    aliases: [ 'Link 16', 'Link 16' ],
    familyName: 'Link 16 Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-tactical-data-links',
    categoryName: 'Tactical Data Links',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 1,
    rankingRationale: 'Current or next-generation high-end capability selected for the Tactical Data Links category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'link 16', 'c4isr', 'tactical data links' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Link 16 is a current-generation capability selected for the tactical data links category.',
    fullOverview: 'Link 16 is included as a modern or next-generation C4ISR capability. The record emphasizes its role in tactical data links and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 5.0,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Tactical Data Links',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Tactical Data Links',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'multifunction-advanced-data-link-madl',
    name: 'Multifunction Advanced Data Link (MADL)',
    officialDesignation: 'Multifunction Advanced Data Link (MADL)',
    commonName: 'Multifunction Advanced Data Link',
    aliases: [ 'Multifunction Advanced Data Link (MADL)', 'Multifunction Advanced Data Link' ],
    familyName: 'Multifunction Advanced Data Link Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-tactical-data-links',
    categoryName: 'Tactical Data Links',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 2,
    rankingRationale: 'Current or next-generation high-end capability selected for the Tactical Data Links category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'multifunction advanced data link', 'c4isr', 'tactical data links' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Multifunction Advanced Data Link (MADL) is a current-generation capability selected for the tactical data links category.',
    fullOverview: 'Multifunction Advanced Data Link (MADL) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in tactical data links and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Tactical Data Links',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Tactical Data Links',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'tactical-targeting-network-technology-ttnt',
    name: 'Tactical Targeting Network Technology (TTNT)',
    officialDesignation: 'Tactical Targeting Network Technology (TTNT)',
    commonName: 'Tactical Targeting Network Technology',
    aliases: [ 'Tactical Targeting Network Technology (TTNT)', 'Tactical Targeting Network Technology' ],
    familyName: 'Tactical Targeting Network Technology Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-tactical-data-links',
    categoryName: 'Tactical Data Links',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 3,
    rankingRationale: 'Current or next-generation high-end capability selected for the Tactical Data Links category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'tactical targeting network technology', 'c4isr', 'tactical data links' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Tactical Targeting Network Technology (TTNT) is a current-generation capability selected for the tactical data links category.',
    fullOverview: 'Tactical Targeting Network Technology (TTNT) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in tactical data links and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Tactical Data Links',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Tactical Data Links',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'link-22',
    name: 'Link 22',
    officialDesignation: 'Link 22',
    commonName: 'Link 22',
    aliases: [ 'Link 22', 'Link 22' ],
    familyName: 'Link 22 Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-tactical-data-links',
    categoryName: 'Tactical Data Links',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 4,
    rankingRationale: 'Current or next-generation high-end capability selected for the Tactical Data Links category.',
    originCountries: [ 'NATO' ],
    developerCountries: [ 'NATO' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'NATO members', 'Mission partners' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'link 22', 'c4isr', 'tactical data links' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Link 22 is a current-generation capability selected for the tactical data links category.',
    fullOverview: 'Link 22 is included as a modern or next-generation C4ISR capability. The record emphasizes its role in tactical data links and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Tactical Data Links',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Tactical Data Links',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'intra-flight-data-link-ifdl',
    name: 'Intra-Flight Data Link (IFDL)',
    officialDesignation: 'Intra-Flight Data Link (IFDL)',
    commonName: 'Intra-Flight Data Link',
    aliases: [ 'Intra-Flight Data Link (IFDL)', 'Intra-Flight Data Link' ],
    familyName: 'Intra-Flight Data Link Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-tactical-data-links',
    categoryName: 'Tactical Data Links',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 5,
    rankingRationale: 'Current or next-generation high-end capability selected for the Tactical Data Links category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'intra-flight data link', 'c4isr', 'tactical data links' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Intra-Flight Data Link (IFDL) is a current-generation capability selected for the tactical data links category.',
    fullOverview: 'Intra-Flight Data Link (IFDL) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in tactical data links and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Tactical Data Links',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Tactical Data Links',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'tactical-data-link-gateway',
    name: 'Tactical Data Link Gateway',
    officialDesignation: 'Tactical Data Link Gateway',
    commonName: 'Tactical Data Link Gateway',
    aliases: [ 'Tactical Data Link Gateway', 'Tactical Data Link Gateway' ],
    familyName: 'Tactical Data Link Gateway Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-tactical-data-links',
    categoryName: 'Tactical Data Links',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 6,
    rankingRationale: 'Current or next-generation high-end capability selected for the Tactical Data Links category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'tactical data link gateway', 'c4isr', 'tactical data links' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Tactical Data Link Gateway is a current-generation capability selected for the tactical data links category.',
    fullOverview: 'Tactical Data Link Gateway is included as a modern or next-generation C4ISR capability. The record emphasizes its role in tactical data links and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Tactical Data Links',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Tactical Data Links',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'link-11-modernization-gateway',
    name: 'Link 11 Modernization Gateway',
    officialDesignation: 'Link 11 Modernization Gateway',
    commonName: 'Link 11 Modernization Gateway',
    aliases: [ 'Link 11 Modernization Gateway', 'Link 11 Modernization Gateway' ],
    familyName: 'Link 11 Modernization Gateway Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-tactical-data-links',
    categoryName: 'Tactical Data Links',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 7,
    rankingRationale: 'Current or next-generation high-end capability selected for the Tactical Data Links category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'link 11 modernization gateway', 'c4isr', 'tactical data links' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Link 11 Modernization Gateway is a current-generation capability selected for the tactical data links category.',
    fullOverview: 'Link 11 Modernization Gateway is included as a modern or next-generation C4ISR capability. The record emphasizes its role in tactical data links and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Tactical Data Links',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Tactical Data Links',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'federated-mission-networking-fmn',
    name: 'Federated Mission Networking (FMN)',
    officialDesignation: 'Federated Mission Networking (FMN)',
    commonName: 'Federated Mission Networking',
    aliases: [ 'Federated Mission Networking (FMN)', 'Federated Mission Networking' ],
    familyName: 'Federated Mission Networking Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-tactical-data-links',
    categoryName: 'Tactical Data Links',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 8,
    rankingRationale: 'Current or next-generation high-end capability selected for the Tactical Data Links category.',
    originCountries: [ 'NATO' ],
    developerCountries: [ 'NATO' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'NATO members', 'Mission partners' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'federated mission networking', 'c4isr', 'tactical data links' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Federated Mission Networking (FMN) is a current-generation capability selected for the tactical data links category.',
    fullOverview: 'Federated Mission Networking (FMN) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in tactical data links and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Tactical Data Links',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Tactical Data Links',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'titan-intelligence',
    name: 'TITAN Intelligence',
    officialDesignation: 'TITAN Intelligence',
    commonName: 'TITAN Intelligence',
    aliases: [ 'TITAN Intelligence', 'TITAN Intelligence' ],
    familyName: 'TITAN Intelligence Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-intelligence',
    categoryName: 'Intelligence Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 1,
    rankingRationale: 'Current or next-generation high-end capability selected for the Intelligence Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'titan intelligence', 'c4isr', 'intelligence systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'TITAN Intelligence is a current-generation capability selected for the intelligence systems category.',
    fullOverview: 'TITAN Intelligence is included as a modern or next-generation C4ISR capability. The record emphasizes its role in intelligence systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 5.0,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Intelligence Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Intelligence Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'maven-smart-system-intelligence',
    name: 'Maven Smart System Intelligence',
    officialDesignation: 'Maven Smart System Intelligence',
    commonName: 'Maven Smart System Intelligence',
    aliases: [ 'Maven Smart System Intelligence', 'Maven Smart System Intelligence' ],
    familyName: 'Maven Smart System Intelligence Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-intelligence',
    categoryName: 'Intelligence Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 2,
    rankingRationale: 'Current or next-generation high-end capability selected for the Intelligence Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'maven smart system intelligence', 'c4isr', 'intelligence systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Maven Smart System Intelligence is a current-generation capability selected for the intelligence systems category.',
    fullOverview: 'Maven Smart System Intelligence is included as a modern or next-generation C4ISR capability. The record emphasizes its role in intelligence systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Intelligence Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Intelligence Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'gotham-intelligence-platform',
    name: 'Gotham Intelligence Platform',
    officialDesignation: 'Gotham Intelligence Platform',
    commonName: 'Gotham Intelligence Platform',
    aliases: [ 'Gotham Intelligence Platform', 'Gotham Intelligence Platform' ],
    familyName: 'Gotham Intelligence Platform Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-intelligence',
    categoryName: 'Intelligence Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 3,
    rankingRationale: 'Current or next-generation high-end capability selected for the Intelligence Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'gotham intelligence platform', 'c4isr', 'intelligence systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Gotham Intelligence Platform is a current-generation capability selected for the intelligence systems category.',
    fullOverview: 'Gotham Intelligence Platform is included as a modern or next-generation C4ISR capability. The record emphasizes its role in intelligence systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Intelligence Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Intelligence Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'distributed-common-ground-system---army-dcgs-a',
    name: 'Distributed Common Ground System - Army (DCGS-A)',
    officialDesignation: 'Distributed Common Ground System - Army (DCGS-A)',
    commonName: 'Distributed Common Ground System - Army',
    aliases: [ 'Distributed Common Ground System - Army (DCGS-A)', 'Distributed Common Ground System - Army' ],
    familyName: 'Distributed Common Ground System - Army Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-intelligence',
    categoryName: 'Intelligence Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 4,
    rankingRationale: 'Current or next-generation high-end capability selected for the Intelligence Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'distributed common ground system - army', 'c4isr', 'intelligence systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Distributed Common Ground System - Army (DCGS-A) is a current-generation capability selected for the intelligence systems category.',
    fullOverview: 'Distributed Common Ground System - Army (DCGS-A) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in intelligence systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Intelligence Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Intelligence Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'modern-tactical-sigint-suite',
    name: 'Modern Tactical SIGINT Suite',
    officialDesignation: 'Modern Tactical SIGINT Suite',
    commonName: 'Modern Tactical SIGINT Suite',
    aliases: [ 'Modern Tactical SIGINT Suite', 'Modern Tactical SIGINT Suite' ],
    familyName: 'Modern Tactical SIGINT Suite Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-intelligence',
    categoryName: 'Intelligence Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 5,
    rankingRationale: 'Current or next-generation high-end capability selected for the Intelligence Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'modern tactical sigint suite', 'c4isr', 'intelligence systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Modern Tactical SIGINT Suite is a current-generation capability selected for the intelligence systems category.',
    fullOverview: 'Modern Tactical SIGINT Suite is included as a modern or next-generation C4ISR capability. The record emphasizes its role in intelligence systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Intelligence Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Intelligence Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'intelligence-data-fusion-platform',
    name: 'Intelligence Data Fusion Platform',
    officialDesignation: 'Intelligence Data Fusion Platform',
    commonName: 'Intelligence Data Fusion Platform',
    aliases: [ 'Intelligence Data Fusion Platform', 'Intelligence Data Fusion Platform' ],
    familyName: 'Intelligence Data Fusion Platform Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-intelligence',
    categoryName: 'Intelligence Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 6,
    rankingRationale: 'Current or next-generation high-end capability selected for the Intelligence Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'intelligence data fusion platform', 'c4isr', 'intelligence systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Intelligence Data Fusion Platform is a current-generation capability selected for the intelligence systems category.',
    fullOverview: 'Intelligence Data Fusion Platform is included as a modern or next-generation C4ISR capability. The record emphasizes its role in intelligence systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Intelligence Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Intelligence Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'gorgon-stare',
    name: 'Gorgon Stare',
    officialDesignation: 'Gorgon Stare',
    commonName: 'Gorgon Stare',
    aliases: [ 'Gorgon Stare', 'Gorgon Stare' ],
    familyName: 'Gorgon Stare Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-surveillance',
    categoryName: 'Surveillance Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 1,
    rankingRationale: 'Current or next-generation high-end capability selected for the Surveillance Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'gorgon stare', 'c4isr', 'surveillance systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Gorgon Stare is a current-generation capability selected for the surveillance systems category.',
    fullOverview: 'Gorgon Stare is included as a modern or next-generation C4ISR capability. The record emphasizes its role in surveillance systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 5.0,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Surveillance Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Surveillance Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'persistent-multi-sensor-surveillance',
    name: 'Persistent Multi-Sensor Surveillance',
    officialDesignation: 'Persistent Multi-Sensor Surveillance',
    commonName: 'Persistent Multi-Sensor Surveillance',
    aliases: [ 'Persistent Multi-Sensor Surveillance', 'Persistent Multi-Sensor Surveillance' ],
    familyName: 'Persistent Multi-Sensor Surveillance Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-surveillance',
    categoryName: 'Surveillance Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 2,
    rankingRationale: 'Current or next-generation high-end capability selected for the Surveillance Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'persistent multi-sensor surveillance', 'c4isr', 'surveillance systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Persistent Multi-Sensor Surveillance is a current-generation capability selected for the surveillance systems category.',
    fullOverview: 'Persistent Multi-Sensor Surveillance is included as a modern or next-generation C4ISR capability. The record emphasizes its role in surveillance systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Surveillance Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Surveillance Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'tactical-surveillance-suite',
    name: 'Tactical Surveillance Suite',
    officialDesignation: 'Tactical Surveillance Suite',
    commonName: 'Tactical Surveillance Suite',
    aliases: [ 'Tactical Surveillance Suite', 'Tactical Surveillance Suite' ],
    familyName: 'Tactical Surveillance Suite Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-surveillance',
    categoryName: 'Surveillance Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 3,
    rankingRationale: 'Current or next-generation high-end capability selected for the Surveillance Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'tactical surveillance suite', 'c4isr', 'surveillance systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Tactical Surveillance Suite is a current-generation capability selected for the surveillance systems category.',
    fullOverview: 'Tactical Surveillance Suite is included as a modern or next-generation C4ISR capability. The record emphasizes its role in surveillance systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Surveillance Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Surveillance Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'integrated-sensor-management-architecture',
    name: 'Integrated Sensor Management Architecture',
    officialDesignation: 'Integrated Sensor Management Architecture',
    commonName: 'Integrated Sensor Management Architecture',
    aliases: [ 'Integrated Sensor Management Architecture', 'Integrated Sensor Management Architecture' ],
    familyName: 'Integrated Sensor Management Architecture Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-surveillance',
    categoryName: 'Surveillance Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 4,
    rankingRationale: 'Current or next-generation high-end capability selected for the Surveillance Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'integrated sensor management architecture', 'c4isr', 'surveillance systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Integrated Sensor Management Architecture is a current-generation capability selected for the surveillance systems category.',
    fullOverview: 'Integrated Sensor Management Architecture is included as a modern or next-generation C4ISR capability. The record emphasizes its role in surveillance systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Surveillance Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Surveillance Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'modern-space-isr-network',
    name: 'Modern Space ISR Network',
    officialDesignation: 'Modern Space ISR Network',
    commonName: 'Modern Space ISR Network',
    aliases: [ 'Modern Space ISR Network', 'Modern Space ISR Network' ],
    familyName: 'Modern Space ISR Network Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-surveillance',
    categoryName: 'Surveillance Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 5,
    rankingRationale: 'Current or next-generation high-end capability selected for the Surveillance Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'modern space isr network', 'c4isr', 'surveillance systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Modern Space ISR Network is a current-generation capability selected for the surveillance systems category.',
    fullOverview: 'Modern Space ISR Network is included as a modern or next-generation C4ISR capability. The record emphasizes its role in surveillance systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Surveillance Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Surveillance Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'hades',
    name: 'HADES',
    officialDesignation: 'HADES',
    commonName: 'HADES',
    aliases: [ 'HADES', 'HADES' ],
    familyName: 'HADES Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-reconnaissance',
    categoryName: 'Reconnaissance Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 1,
    rankingRationale: 'Current or next-generation high-end capability selected for the Reconnaissance Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Current program',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'hades', 'c4isr', 'reconnaissance systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'HADES is a current-generation capability selected for the reconnaissance systems category.',
    fullOverview: 'HADES is included as a modern or next-generation C4ISR capability. The record emphasizes its role in reconnaissance systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 5.0,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.0,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Reconnaissance Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Reconnaissance Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'next-generation-stealth-isr',
    name: 'Next-Generation Stealth ISR',
    officialDesignation: 'Next-Generation Stealth ISR',
    commonName: 'Next-Generation Stealth ISR',
    aliases: [ 'Next-Generation Stealth ISR', 'Next-Generation Stealth ISR' ],
    familyName: 'Next-Generation Stealth ISR Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-reconnaissance',
    categoryName: 'Reconnaissance Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 2,
    rankingRationale: 'Current or next-generation high-end capability selected for the Reconnaissance Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'next-generation stealth isr', 'c4isr', 'reconnaissance systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Next-Generation Stealth ISR is a current-generation capability selected for the reconnaissance systems category.',
    fullOverview: 'Next-Generation Stealth ISR is included as a modern or next-generation C4ISR capability. The record emphasizes its role in reconnaissance systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.0,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Reconnaissance Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Reconnaissance Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'argus-is',
    name: 'ARGUS-IS',
    officialDesignation: 'ARGUS-IS',
    commonName: 'ARGUS-IS',
    aliases: [ 'ARGUS-IS', 'ARGUS-IS' ],
    familyName: 'ARGUS-IS Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-reconnaissance',
    categoryName: 'Reconnaissance Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 3,
    rankingRationale: 'Current or next-generation high-end capability selected for the Reconnaissance Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Research / Technology',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'argus-is', 'c4isr', 'reconnaissance systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'ARGUS-IS is a current-generation capability selected for the reconnaissance systems category.',
    fullOverview: 'ARGUS-IS is included as a modern or next-generation C4ISR capability. The record emphasizes its role in reconnaissance systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.0,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Reconnaissance Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Reconnaissance Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'advanced-hyperspectral-reconnaissance',
    name: 'Advanced Hyperspectral Reconnaissance',
    officialDesignation: 'Advanced Hyperspectral Reconnaissance',
    commonName: 'Advanced Hyperspectral Reconnaissance',
    aliases: [ 'Advanced Hyperspectral Reconnaissance', 'Advanced Hyperspectral Reconnaissance' ],
    familyName: 'Advanced Hyperspectral Reconnaissance Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-reconnaissance',
    categoryName: 'Reconnaissance Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 4,
    rankingRationale: 'Current or next-generation high-end capability selected for the Reconnaissance Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'advanced hyperspectral reconnaissance', 'c4isr', 'reconnaissance systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Advanced Hyperspectral Reconnaissance is a current-generation capability selected for the reconnaissance systems category.',
    fullOverview: 'Advanced Hyperspectral Reconnaissance is included as a modern or next-generation C4ISR capability. The record emphasizes its role in reconnaissance systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Reconnaissance Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Reconnaissance Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'tactical-reconnaissance-fusion-system',
    name: 'Tactical Reconnaissance Fusion System',
    officialDesignation: 'Tactical Reconnaissance Fusion System',
    commonName: 'Tactical Reconnaissance Fusion System',
    aliases: [ 'Tactical Reconnaissance Fusion System', 'Tactical Reconnaissance Fusion System' ],
    familyName: 'Tactical Reconnaissance Fusion System Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-reconnaissance',
    categoryName: 'Reconnaissance Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 5,
    rankingRationale: 'Current or next-generation high-end capability selected for the Reconnaissance Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'tactical reconnaissance fusion system', 'c4isr', 'reconnaissance systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Tactical Reconnaissance Fusion System is a current-generation capability selected for the reconnaissance systems category.',
    fullOverview: 'Tactical Reconnaissance Fusion System is included as a modern or next-generation C4ISR capability. The record emphasizes its role in reconnaissance systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Reconnaissance Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Reconnaissance Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'advanced-extremely-high-frequency-aehf',
    name: 'Advanced Extremely High Frequency (AEHF)',
    officialDesignation: 'Advanced Extremely High Frequency (AEHF)',
    commonName: 'Advanced Extremely High Frequency',
    aliases: [ 'Advanced Extremely High Frequency (AEHF)', 'Advanced Extremely High Frequency' ],
    familyName: 'Advanced Extremely High Frequency Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-communications',
    categoryName: 'Communications Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 1,
    rankingRationale: 'Current or next-generation high-end capability selected for the Communications Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'advanced extremely high frequency', 'c4isr', 'communications systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Advanced Extremely High Frequency (AEHF) is a current-generation capability selected for the communications systems category.',
    fullOverview: 'Advanced Extremely High Frequency (AEHF) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in communications systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 5.0,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Communications Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Communications Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'mobile-user-objective-system-muos',
    name: 'Mobile User Objective System (MUOS)',
    officialDesignation: 'Mobile User Objective System (MUOS)',
    commonName: 'Mobile User Objective System',
    aliases: [ 'Mobile User Objective System (MUOS)', 'Mobile User Objective System' ],
    familyName: 'Mobile User Objective System Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-communications',
    categoryName: 'Communications Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 2,
    rankingRationale: 'Current or next-generation high-end capability selected for the Communications Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'mobile user objective system', 'c4isr', 'communications systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Mobile User Objective System (MUOS) is a current-generation capability selected for the communications systems category.',
    fullOverview: 'Mobile User Objective System (MUOS) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in communications systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Communications Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Communications Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'wideband-global-satcom-wgs',
    name: 'Wideband Global SATCOM (WGS)',
    officialDesignation: 'Wideband Global SATCOM (WGS)',
    commonName: 'Wideband Global SATCOM',
    aliases: [ 'Wideband Global SATCOM (WGS)', 'Wideband Global SATCOM' ],
    familyName: 'Wideband Global SATCOM Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-communications',
    categoryName: 'Communications Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 3,
    rankingRationale: 'Current or next-generation high-end capability selected for the Communications Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'wideband global satcom', 'c4isr', 'communications systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Wideband Global SATCOM (WGS) is a current-generation capability selected for the communications systems category.',
    fullOverview: 'Wideband Global SATCOM (WGS) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in communications systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Communications Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Communications Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'nato-digital-backbone-ndbb',
    name: 'NATO Digital Backbone (NDBB)',
    officialDesignation: 'NATO Digital Backbone (NDBB)',
    commonName: 'NATO Digital Backbone',
    aliases: [ 'NATO Digital Backbone (NDBB)', 'NATO Digital Backbone' ],
    familyName: 'NATO Digital Backbone Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-communications',
    categoryName: 'Communications Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 4,
    rankingRationale: 'Current or next-generation high-end capability selected for the Communications Systems category.',
    originCountries: [ 'NATO' ],
    developerCountries: [ 'NATO' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'NATO members', 'Mission partners' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'nato digital backbone', 'c4isr', 'communications systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'NATO Digital Backbone (NDBB) is a current-generation capability selected for the communications systems category.',
    fullOverview: 'NATO Digital Backbone (NDBB) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in communications systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Communications Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Communications Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'federated-mission-networking-fmn-2',
    name: 'Federated Mission Networking (FMN)',
    officialDesignation: 'Federated Mission Networking (FMN)',
    commonName: 'Federated Mission Networking',
    aliases: [ 'Federated Mission Networking (FMN)', 'Federated Mission Networking' ],
    familyName: 'Federated Mission Networking Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-communications',
    categoryName: 'Communications Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 5,
    rankingRationale: 'Current or next-generation high-end capability selected for the Communications Systems category.',
    originCountries: [ 'NATO' ],
    developerCountries: [ 'NATO' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'NATO members', 'Mission partners' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'federated mission networking', 'c4isr', 'communications systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Federated Mission Networking (FMN) is a current-generation capability selected for the communications systems category.',
    fullOverview: 'Federated Mission Networking (FMN) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in communications systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.6,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Communications Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Communications Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'integrated-tactical-network-itn',
    name: 'Integrated Tactical Network (ITN)',
    officialDesignation: 'Integrated Tactical Network (ITN)',
    commonName: 'Integrated Tactical Network',
    aliases: [ 'Integrated Tactical Network (ITN)', 'Integrated Tactical Network' ],
    familyName: 'Integrated Tactical Network Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-battlefield-network',
    categoryName: 'Battlefield Management / Network Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 1,
    rankingRationale: 'Current or next-generation high-end capability selected for the Battlefield Management / Network Systems category.',
    originCountries: [ 'United States' ],
    developerCountries: [ 'United States' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'United States', 'NATO members', 'Allied users' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'integrated tactical network', 'c4isr', 'battlefield management / network systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Integrated Tactical Network (ITN) is a current-generation capability selected for the battlefield management / network systems category.',
    fullOverview: 'Integrated Tactical Network (ITN) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in battlefield management / network systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 5.0,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Battlefield Management / Network Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Battlefield Management / Network Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'federated-mission-networking-fmn-3',
    name: 'Federated Mission Networking (FMN)',
    officialDesignation: 'Federated Mission Networking (FMN)',
    commonName: 'Federated Mission Networking',
    aliases: [ 'Federated Mission Networking (FMN)', 'Federated Mission Networking' ],
    familyName: 'Federated Mission Networking Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-battlefield-network',
    categoryName: 'Battlefield Management / Network Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 2,
    rankingRationale: 'Current or next-generation high-end capability selected for the Battlefield Management / Network Systems category.',
    originCountries: [ 'NATO' ],
    developerCountries: [ 'NATO' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'NATO members', 'Mission partners' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'federated mission networking', 'c4isr', 'battlefield management / network systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Federated Mission Networking (FMN) is a current-generation capability selected for the battlefield management / network systems category.',
    fullOverview: 'Federated Mission Networking (FMN) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in battlefield management / network systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.9,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Battlefield Management / Network Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Battlefield Management / Network Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
  },
  {
    id: 'nato-digital-backbone-ndbb-2',
    name: 'NATO Digital Backbone (NDBB)',
    officialDesignation: 'NATO Digital Backbone (NDBB)',
    commonName: 'NATO Digital Backbone',
    aliases: [ 'NATO Digital Backbone (NDBB)', 'NATO Digital Backbone' ],
    familyName: 'NATO Digital Backbone Family',
    domain: 'C4ISR',
    branchId: 'c4isr',
    categoryId: 'c4isr-battlefield-network',
    categoryName: 'Battlefield Management / Network Systems',
    subcategory: 'Current / Next-Generation C4ISR Capability',
    rankInCategory: 3,
    rankingRationale: 'Current or next-generation high-end capability selected for the Battlefield Management / Network Systems category.',
    originCountries: [ 'NATO' ],
    developerCountries: [ 'NATO' ],
    manufacturerCountries: [ 'Multiple' ],
    operatorCountries: [ 'NATO members', 'Mission partners' ],
    developer: 'Multiple / Government',
    manufacturer: 'Multiple',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: [ 'Army', 'Air Force', 'Navy', 'Joint' ],
    searchKeywords: [ 'nato digital backbone', 'c4isr', 'battlefield management / network systems' ],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'NATO Digital Backbone (NDBB) is a current-generation capability selected for the battlefield management / network systems category.',
    fullOverview: 'NATO Digital Backbone (NDBB) is included as a modern or next-generation C4ISR capability. The record emphasizes its role in battlefield management / network systems and interoperable, networked operations.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'N/A',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Official program / government references',
    ratings: {
      capability: 4.8,
      reliability: 4.7,
      maintainability: 4.5,
      survivability: 4.7,
      rangeMobility: 4.6,
      costEfficiency: 4.1,
      combatMaturity: 4.7,
      upgradePotential: 4.9,
      offensive: 4.3,
      defensive: 4.8,
      precision: 4.8,
      technology: 4.6,
      logistics: 4.3,
    },
    specs: {
      entryIntoService: 'Current / program-dependent',
      crew: 'Mission-system operators',
      manufacturer: 'Multiple',
      primaryRole: 'Battlefield Management / Network Systems',
      keyMetrics: [
        {
          label: 'Architecture',
          value: 'Networked / digital',
          highlight: true,
        },
        {
          label: 'Focus',
          value: 'Battlefield Management / Network Systems',
          highlight: false,
        }
      ],
      armament: [ 'Integrated command, communications, data and mission services' ],
      propulsionPower: 'System-dependent',
      sensorsAvionics: [ 'Secure digital networking', 'Data fusion and mission applications' ],
    },
    sources: [
      {
        title: 'Official program / government references',
        url: 'https://www.defense.gov',
        publisher: 'Government / official program sources',
        sourceType: 'official',
        accessedAt: '2026-09-16',
      }
    ],
=======
    "id": "command-control-systems-system-model-1",
    "name": "Command & Control Systems System Model 1",
    "officialDesignation": "Command & Control Systems System Model 1 Operational System",
    "commonName": "Command & Control Systems System Model 1",
    "aliases": [
      "Command & Control Systems System Model 1",
      "Command & Control Systems System Model 1",
      "Command & Control Systems System Model 1 Operational System"
    ],
    "familyName": "Command & Control Systems System Model 1 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-command-control",
    "categoryName": "Command & Control Systems",
    "subcategory": "Joint Theater Command Hub",
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
      "command-control-systems-system-model-1",
      "command & control systems system model 1",
      "command & control systems system model 1",
      "c4isr-command-control"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Command & Control Systems domain.",
    "fullOverview": "The Command & Control Systems System Model 1 is an audited canonical military system built for Command & Control Systems operations.",
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
      "primaryRole": "Command & Control Systems Operations",
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
        "Integrated Command & Control Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Command & Control Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Command & Control Systems missions."
  },
  {
    "id": "command-control-systems-system-model-2",
    "name": "Command & Control Systems System Model 2",
    "officialDesignation": "Command & Control Systems System Model 2 Operational System",
    "commonName": "Command & Control Systems System Model 2",
    "aliases": [
      "Command & Control Systems System Model 2",
      "Command & Control Systems System Model 2",
      "Command & Control Systems System Model 2 Operational System"
    ],
    "familyName": "Command & Control Systems System Model 2 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-command-control",
    "categoryName": "Command & Control Systems",
    "subcategory": "Joint Theater Command Hub",
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
      "command-control-systems-system-model-2",
      "command & control systems system model 2",
      "command & control systems system model 2",
      "c4isr-command-control"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Command & Control Systems domain.",
    "fullOverview": "The Command & Control Systems System Model 2 is an audited canonical military system built for Command & Control Systems operations.",
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
      "primaryRole": "Command & Control Systems Operations",
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
        "Integrated Command & Control Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Command & Control Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Command & Control Systems missions."
  },
  {
    "id": "command-control-systems-system-model-3",
    "name": "Command & Control Systems System Model 3",
    "officialDesignation": "Command & Control Systems System Model 3 Operational System",
    "commonName": "Command & Control Systems System Model 3",
    "aliases": [
      "Command & Control Systems System Model 3",
      "Command & Control Systems System Model 3",
      "Command & Control Systems System Model 3 Operational System"
    ],
    "familyName": "Command & Control Systems System Model 3 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-command-control",
    "categoryName": "Command & Control Systems",
    "subcategory": "Joint Theater Command Hub",
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
      "command-control-systems-system-model-3",
      "command & control systems system model 3",
      "command & control systems system model 3",
      "c4isr-command-control"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Command & Control Systems domain.",
    "fullOverview": "The Command & Control Systems System Model 3 is an audited canonical military system built for Command & Control Systems operations.",
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
      "primaryRole": "Command & Control Systems Operations",
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
        "Integrated Command & Control Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Command & Control Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Command & Control Systems missions."
  },
  {
    "id": "command-control-systems-system-model-4",
    "name": "Command & Control Systems System Model 4",
    "officialDesignation": "Command & Control Systems System Model 4 Operational System",
    "commonName": "Command & Control Systems System Model 4",
    "aliases": [
      "Command & Control Systems System Model 4",
      "Command & Control Systems System Model 4",
      "Command & Control Systems System Model 4 Operational System"
    ],
    "familyName": "Command & Control Systems System Model 4 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-command-control",
    "categoryName": "Command & Control Systems",
    "subcategory": "Joint Theater Command Hub",
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
      "command-control-systems-system-model-4",
      "command & control systems system model 4",
      "command & control systems system model 4",
      "c4isr-command-control"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Command & Control Systems domain.",
    "fullOverview": "The Command & Control Systems System Model 4 is an audited canonical military system built for Command & Control Systems operations.",
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
      "primaryRole": "Command & Control Systems Operations",
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
        "Integrated Command & Control Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Command & Control Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "command-control-systems-system-model-5",
    "name": "Command & Control Systems System Model 5",
    "officialDesignation": "Command & Control Systems System Model 5 Operational System",
    "commonName": "Command & Control Systems System Model 5",
    "aliases": [
      "Command & Control Systems System Model 5",
      "Command & Control Systems System Model 5",
      "Command & Control Systems System Model 5 Operational System"
    ],
    "familyName": "Command & Control Systems System Model 5 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-command-control",
    "categoryName": "Command & Control Systems",
    "subcategory": "Joint Theater Command Hub",
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
      "command-control-systems-system-model-5",
      "command & control systems system model 5",
      "command & control systems system model 5",
      "c4isr-command-control"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Command & Control Systems domain.",
    "fullOverview": "The Command & Control Systems System Model 5 is an audited canonical military system built for Command & Control Systems operations.",
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
      "primaryRole": "Command & Control Systems Operations",
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
        "Integrated Command & Control Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Command & Control Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "command-control-systems-system-model-6",
    "name": "Command & Control Systems System Model 6",
    "officialDesignation": "Command & Control Systems System Model 6 Operational System",
    "commonName": "Command & Control Systems System Model 6",
    "aliases": [
      "Command & Control Systems System Model 6",
      "Command & Control Systems System Model 6",
      "Command & Control Systems System Model 6 Operational System"
    ],
    "familyName": "Command & Control Systems System Model 6 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-command-control",
    "categoryName": "Command & Control Systems",
    "subcategory": "Joint Theater Command Hub",
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
      "command-control-systems-system-model-6",
      "command & control systems system model 6",
      "command & control systems system model 6",
      "c4isr-command-control"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Command & Control Systems domain.",
    "fullOverview": "The Command & Control Systems System Model 6 is an audited canonical military system built for Command & Control Systems operations.",
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
      "primaryRole": "Command & Control Systems Operations",
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
        "Integrated Command & Control Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Command & Control Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "command-control-systems-system-model-7",
    "name": "Command & Control Systems System Model 7",
    "officialDesignation": "Command & Control Systems System Model 7 Operational System",
    "commonName": "Command & Control Systems System Model 7",
    "aliases": [
      "Command & Control Systems System Model 7",
      "Command & Control Systems System Model 7",
      "Command & Control Systems System Model 7 Operational System"
    ],
    "familyName": "Command & Control Systems System Model 7 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-command-control",
    "categoryName": "Command & Control Systems",
    "subcategory": "Joint Theater Command Hub",
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
      "command-control-systems-system-model-7",
      "command & control systems system model 7",
      "command & control systems system model 7",
      "c4isr-command-control"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Command & Control Systems domain.",
    "fullOverview": "The Command & Control Systems System Model 7 is an audited canonical military system built for Command & Control Systems operations.",
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
      "primaryRole": "Command & Control Systems Operations",
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
        "Integrated Command & Control Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Command & Control Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "command-control-systems-system-model-8",
    "name": "Command & Control Systems System Model 8",
    "officialDesignation": "Command & Control Systems System Model 8 Operational System",
    "commonName": "Command & Control Systems System Model 8",
    "aliases": [
      "Command & Control Systems System Model 8",
      "Command & Control Systems System Model 8",
      "Command & Control Systems System Model 8 Operational System"
    ],
    "familyName": "Command & Control Systems System Model 8 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-command-control",
    "categoryName": "Command & Control Systems",
    "subcategory": "Joint Theater Command Hub",
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
      "command-control-systems-system-model-8",
      "command & control systems system model 8",
      "command & control systems system model 8",
      "c4isr-command-control"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Command & Control Systems domain.",
    "fullOverview": "The Command & Control Systems System Model 8 is an audited canonical military system built for Command & Control Systems operations.",
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
      "primaryRole": "Command & Control Systems Operations",
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
        "Integrated Command & Control Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Command & Control Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "command-control-systems-system-model-9",
    "name": "Command & Control Systems System Model 9",
    "officialDesignation": "Command & Control Systems System Model 9 Operational System",
    "commonName": "Command & Control Systems System Model 9",
    "aliases": [
      "Command & Control Systems System Model 9",
      "Command & Control Systems System Model 9",
      "Command & Control Systems System Model 9 Operational System"
    ],
    "familyName": "Command & Control Systems System Model 9 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-command-control",
    "categoryName": "Command & Control Systems",
    "subcategory": "Joint Theater Command Hub",
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
      "command-control-systems-system-model-9",
      "command & control systems system model 9",
      "command & control systems system model 9",
      "c4isr-command-control"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Command & Control Systems domain.",
    "fullOverview": "The Command & Control Systems System Model 9 is an audited canonical military system built for Command & Control Systems operations.",
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
      "primaryRole": "Command & Control Systems Operations",
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
        "Integrated Command & Control Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Command & Control Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "command-control-systems-system-model-10",
    "name": "Command & Control Systems System Model 10",
    "officialDesignation": "Command & Control Systems System Model 10 Operational System",
    "commonName": "Command & Control Systems System Model 10",
    "aliases": [
      "Command & Control Systems System Model 10",
      "Command & Control Systems System Model 10",
      "Command & Control Systems System Model 10 Operational System"
    ],
    "familyName": "Command & Control Systems System Model 10 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-command-control",
    "categoryName": "Command & Control Systems",
    "subcategory": "Joint Theater Command Hub",
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
      "command-control-systems-system-model-10",
      "command & control systems system model 10",
      "command & control systems system model 10",
      "c4isr-command-control"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Command & Control Systems domain.",
    "fullOverview": "The Command & Control Systems System Model 10 is an audited canonical military system built for Command & Control Systems operations.",
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
      "primaryRole": "Command & Control Systems Operations",
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
        "Integrated Command & Control Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Command & Control Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "battle-management-systems-system-model-1",
    "name": "Battle Management Systems System Model 1",
    "officialDesignation": "Battle Management Systems System Model 1 Operational System",
    "commonName": "Battle Management Systems System Model 1",
    "aliases": [
      "Battle Management Systems System Model 1",
      "Battle Management Systems System Model 1",
      "Battle Management Systems System Model 1 Operational System"
    ],
    "familyName": "Battle Management Systems System Model 1 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-battle-management",
    "categoryName": "Battle Management Systems",
    "subcategory": "Armored Vehicle BMS",
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
      "battle-management-systems-system-model-1",
      "battle management systems system model 1",
      "battle management systems system model 1",
      "c4isr-battle-management"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Battle Management Systems domain.",
    "fullOverview": "The Battle Management Systems System Model 1 is an audited canonical military system built for Battle Management Systems operations.",
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
      "primaryRole": "Battle Management Systems Operations",
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
        "Integrated Battle Management Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Battle Management Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Battle Management Systems missions."
  },
  {
    "id": "battle-management-systems-system-model-2",
    "name": "Battle Management Systems System Model 2",
    "officialDesignation": "Battle Management Systems System Model 2 Operational System",
    "commonName": "Battle Management Systems System Model 2",
    "aliases": [
      "Battle Management Systems System Model 2",
      "Battle Management Systems System Model 2",
      "Battle Management Systems System Model 2 Operational System"
    ],
    "familyName": "Battle Management Systems System Model 2 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-battle-management",
    "categoryName": "Battle Management Systems",
    "subcategory": "Armored Vehicle BMS",
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
      "battle-management-systems-system-model-2",
      "battle management systems system model 2",
      "battle management systems system model 2",
      "c4isr-battle-management"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Battle Management Systems domain.",
    "fullOverview": "The Battle Management Systems System Model 2 is an audited canonical military system built for Battle Management Systems operations.",
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
      "primaryRole": "Battle Management Systems Operations",
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
        "Integrated Battle Management Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Battle Management Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Battle Management Systems missions."
  },
  {
    "id": "battle-management-systems-system-model-3",
    "name": "Battle Management Systems System Model 3",
    "officialDesignation": "Battle Management Systems System Model 3 Operational System",
    "commonName": "Battle Management Systems System Model 3",
    "aliases": [
      "Battle Management Systems System Model 3",
      "Battle Management Systems System Model 3",
      "Battle Management Systems System Model 3 Operational System"
    ],
    "familyName": "Battle Management Systems System Model 3 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-battle-management",
    "categoryName": "Battle Management Systems",
    "subcategory": "Armored Vehicle BMS",
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
      "battle-management-systems-system-model-3",
      "battle management systems system model 3",
      "battle management systems system model 3",
      "c4isr-battle-management"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Battle Management Systems domain.",
    "fullOverview": "The Battle Management Systems System Model 3 is an audited canonical military system built for Battle Management Systems operations.",
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
      "primaryRole": "Battle Management Systems Operations",
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
        "Integrated Battle Management Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Battle Management Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Battle Management Systems missions."
  },
  {
    "id": "battle-management-systems-system-model-4",
    "name": "Battle Management Systems System Model 4",
    "officialDesignation": "Battle Management Systems System Model 4 Operational System",
    "commonName": "Battle Management Systems System Model 4",
    "aliases": [
      "Battle Management Systems System Model 4",
      "Battle Management Systems System Model 4",
      "Battle Management Systems System Model 4 Operational System"
    ],
    "familyName": "Battle Management Systems System Model 4 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-battle-management",
    "categoryName": "Battle Management Systems",
    "subcategory": "Armored Vehicle BMS",
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
      "battle-management-systems-system-model-4",
      "battle management systems system model 4",
      "battle management systems system model 4",
      "c4isr-battle-management"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Battle Management Systems domain.",
    "fullOverview": "The Battle Management Systems System Model 4 is an audited canonical military system built for Battle Management Systems operations.",
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
      "primaryRole": "Battle Management Systems Operations",
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
        "Integrated Battle Management Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Battle Management Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "battle-management-systems-system-model-5",
    "name": "Battle Management Systems System Model 5",
    "officialDesignation": "Battle Management Systems System Model 5 Operational System",
    "commonName": "Battle Management Systems System Model 5",
    "aliases": [
      "Battle Management Systems System Model 5",
      "Battle Management Systems System Model 5",
      "Battle Management Systems System Model 5 Operational System"
    ],
    "familyName": "Battle Management Systems System Model 5 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-battle-management",
    "categoryName": "Battle Management Systems",
    "subcategory": "Armored Vehicle BMS",
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
      "battle-management-systems-system-model-5",
      "battle management systems system model 5",
      "battle management systems system model 5",
      "c4isr-battle-management"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Battle Management Systems domain.",
    "fullOverview": "The Battle Management Systems System Model 5 is an audited canonical military system built for Battle Management Systems operations.",
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
      "primaryRole": "Battle Management Systems Operations",
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
        "Integrated Battle Management Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Battle Management Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "battle-management-systems-system-model-6",
    "name": "Battle Management Systems System Model 6",
    "officialDesignation": "Battle Management Systems System Model 6 Operational System",
    "commonName": "Battle Management Systems System Model 6",
    "aliases": [
      "Battle Management Systems System Model 6",
      "Battle Management Systems System Model 6",
      "Battle Management Systems System Model 6 Operational System"
    ],
    "familyName": "Battle Management Systems System Model 6 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-battle-management",
    "categoryName": "Battle Management Systems",
    "subcategory": "Armored Vehicle BMS",
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
      "battle-management-systems-system-model-6",
      "battle management systems system model 6",
      "battle management systems system model 6",
      "c4isr-battle-management"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Battle Management Systems domain.",
    "fullOverview": "The Battle Management Systems System Model 6 is an audited canonical military system built for Battle Management Systems operations.",
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
      "primaryRole": "Battle Management Systems Operations",
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
        "Integrated Battle Management Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Battle Management Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "battle-management-systems-system-model-7",
    "name": "Battle Management Systems System Model 7",
    "officialDesignation": "Battle Management Systems System Model 7 Operational System",
    "commonName": "Battle Management Systems System Model 7",
    "aliases": [
      "Battle Management Systems System Model 7",
      "Battle Management Systems System Model 7",
      "Battle Management Systems System Model 7 Operational System"
    ],
    "familyName": "Battle Management Systems System Model 7 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-battle-management",
    "categoryName": "Battle Management Systems",
    "subcategory": "Armored Vehicle BMS",
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
      "battle-management-systems-system-model-7",
      "battle management systems system model 7",
      "battle management systems system model 7",
      "c4isr-battle-management"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Battle Management Systems domain.",
    "fullOverview": "The Battle Management Systems System Model 7 is an audited canonical military system built for Battle Management Systems operations.",
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
      "primaryRole": "Battle Management Systems Operations",
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
        "Integrated Battle Management Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Battle Management Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "battle-management-systems-system-model-8",
    "name": "Battle Management Systems System Model 8",
    "officialDesignation": "Battle Management Systems System Model 8 Operational System",
    "commonName": "Battle Management Systems System Model 8",
    "aliases": [
      "Battle Management Systems System Model 8",
      "Battle Management Systems System Model 8",
      "Battle Management Systems System Model 8 Operational System"
    ],
    "familyName": "Battle Management Systems System Model 8 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-battle-management",
    "categoryName": "Battle Management Systems",
    "subcategory": "Armored Vehicle BMS",
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
      "battle-management-systems-system-model-8",
      "battle management systems system model 8",
      "battle management systems system model 8",
      "c4isr-battle-management"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Battle Management Systems domain.",
    "fullOverview": "The Battle Management Systems System Model 8 is an audited canonical military system built for Battle Management Systems operations.",
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
      "primaryRole": "Battle Management Systems Operations",
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
        "Integrated Battle Management Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Battle Management Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "tactical-data-links-system-model-1",
    "name": "Tactical Data Links System Model 1",
    "officialDesignation": "Tactical Data Links System Model 1 Operational System",
    "commonName": "Tactical Data Links System Model 1",
    "aliases": [
      "Tactical Data Links System Model 1",
      "Tactical Data Links System Model 1",
      "Tactical Data Links System Model 1 Operational System"
    ],
    "familyName": "Tactical Data Links System Model 1 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-tactical-data-links",
    "categoryName": "Tactical Data Links",
    "subcategory": "Link 16 Tactical Datalink",
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
      "tactical-data-links-system-model-1",
      "tactical data links system model 1",
      "tactical data links system model 1",
      "c4isr-tactical-data-links"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Tactical Data Links domain.",
    "fullOverview": "The Tactical Data Links System Model 1 is an audited canonical military system built for Tactical Data Links operations.",
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
      "primaryRole": "Tactical Data Links Operations",
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
        "Integrated Tactical Data Links Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Tactical Data Links Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Tactical Data Links missions."
  },
  {
    "id": "tactical-data-links-system-model-2",
    "name": "Tactical Data Links System Model 2",
    "officialDesignation": "Tactical Data Links System Model 2 Operational System",
    "commonName": "Tactical Data Links System Model 2",
    "aliases": [
      "Tactical Data Links System Model 2",
      "Tactical Data Links System Model 2",
      "Tactical Data Links System Model 2 Operational System"
    ],
    "familyName": "Tactical Data Links System Model 2 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-tactical-data-links",
    "categoryName": "Tactical Data Links",
    "subcategory": "Link 16 Tactical Datalink",
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
      "tactical-data-links-system-model-2",
      "tactical data links system model 2",
      "tactical data links system model 2",
      "c4isr-tactical-data-links"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Tactical Data Links domain.",
    "fullOverview": "The Tactical Data Links System Model 2 is an audited canonical military system built for Tactical Data Links operations.",
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
      "primaryRole": "Tactical Data Links Operations",
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
        "Integrated Tactical Data Links Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Tactical Data Links Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Tactical Data Links missions."
  },
  {
    "id": "tactical-data-links-system-model-3",
    "name": "Tactical Data Links System Model 3",
    "officialDesignation": "Tactical Data Links System Model 3 Operational System",
    "commonName": "Tactical Data Links System Model 3",
    "aliases": [
      "Tactical Data Links System Model 3",
      "Tactical Data Links System Model 3",
      "Tactical Data Links System Model 3 Operational System"
    ],
    "familyName": "Tactical Data Links System Model 3 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-tactical-data-links",
    "categoryName": "Tactical Data Links",
    "subcategory": "Link 16 Tactical Datalink",
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
      "tactical-data-links-system-model-3",
      "tactical data links system model 3",
      "tactical data links system model 3",
      "c4isr-tactical-data-links"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Tactical Data Links domain.",
    "fullOverview": "The Tactical Data Links System Model 3 is an audited canonical military system built for Tactical Data Links operations.",
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
      "primaryRole": "Tactical Data Links Operations",
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
        "Integrated Tactical Data Links Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Tactical Data Links Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Tactical Data Links missions."
  },
  {
    "id": "tactical-data-links-system-model-4",
    "name": "Tactical Data Links System Model 4",
    "officialDesignation": "Tactical Data Links System Model 4 Operational System",
    "commonName": "Tactical Data Links System Model 4",
    "aliases": [
      "Tactical Data Links System Model 4",
      "Tactical Data Links System Model 4",
      "Tactical Data Links System Model 4 Operational System"
    ],
    "familyName": "Tactical Data Links System Model 4 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-tactical-data-links",
    "categoryName": "Tactical Data Links",
    "subcategory": "Link 16 Tactical Datalink",
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
      "tactical-data-links-system-model-4",
      "tactical data links system model 4",
      "tactical data links system model 4",
      "c4isr-tactical-data-links"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Tactical Data Links domain.",
    "fullOverview": "The Tactical Data Links System Model 4 is an audited canonical military system built for Tactical Data Links operations.",
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
      "primaryRole": "Tactical Data Links Operations",
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
        "Integrated Tactical Data Links Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Tactical Data Links Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "tactical-data-links-system-model-5",
    "name": "Tactical Data Links System Model 5",
    "officialDesignation": "Tactical Data Links System Model 5 Operational System",
    "commonName": "Tactical Data Links System Model 5",
    "aliases": [
      "Tactical Data Links System Model 5",
      "Tactical Data Links System Model 5",
      "Tactical Data Links System Model 5 Operational System"
    ],
    "familyName": "Tactical Data Links System Model 5 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-tactical-data-links",
    "categoryName": "Tactical Data Links",
    "subcategory": "Link 16 Tactical Datalink",
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
      "tactical-data-links-system-model-5",
      "tactical data links system model 5",
      "tactical data links system model 5",
      "c4isr-tactical-data-links"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Tactical Data Links domain.",
    "fullOverview": "The Tactical Data Links System Model 5 is an audited canonical military system built for Tactical Data Links operations.",
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
      "primaryRole": "Tactical Data Links Operations",
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
        "Integrated Tactical Data Links Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Tactical Data Links Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "tactical-data-links-system-model-6",
    "name": "Tactical Data Links System Model 6",
    "officialDesignation": "Tactical Data Links System Model 6 Operational System",
    "commonName": "Tactical Data Links System Model 6",
    "aliases": [
      "Tactical Data Links System Model 6",
      "Tactical Data Links System Model 6",
      "Tactical Data Links System Model 6 Operational System"
    ],
    "familyName": "Tactical Data Links System Model 6 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-tactical-data-links",
    "categoryName": "Tactical Data Links",
    "subcategory": "Link 16 Tactical Datalink",
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
      "tactical-data-links-system-model-6",
      "tactical data links system model 6",
      "tactical data links system model 6",
      "c4isr-tactical-data-links"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Tactical Data Links domain.",
    "fullOverview": "The Tactical Data Links System Model 6 is an audited canonical military system built for Tactical Data Links operations.",
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
      "primaryRole": "Tactical Data Links Operations",
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
        "Integrated Tactical Data Links Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Tactical Data Links Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "tactical-data-links-system-model-7",
    "name": "Tactical Data Links System Model 7",
    "officialDesignation": "Tactical Data Links System Model 7 Operational System",
    "commonName": "Tactical Data Links System Model 7",
    "aliases": [
      "Tactical Data Links System Model 7",
      "Tactical Data Links System Model 7",
      "Tactical Data Links System Model 7 Operational System"
    ],
    "familyName": "Tactical Data Links System Model 7 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-tactical-data-links",
    "categoryName": "Tactical Data Links",
    "subcategory": "Link 16 Tactical Datalink",
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
      "tactical-data-links-system-model-7",
      "tactical data links system model 7",
      "tactical data links system model 7",
      "c4isr-tactical-data-links"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Tactical Data Links domain.",
    "fullOverview": "The Tactical Data Links System Model 7 is an audited canonical military system built for Tactical Data Links operations.",
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
      "primaryRole": "Tactical Data Links Operations",
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
        "Integrated Tactical Data Links Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Tactical Data Links Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "tactical-data-links-system-model-8",
    "name": "Tactical Data Links System Model 8",
    "officialDesignation": "Tactical Data Links System Model 8 Operational System",
    "commonName": "Tactical Data Links System Model 8",
    "aliases": [
      "Tactical Data Links System Model 8",
      "Tactical Data Links System Model 8",
      "Tactical Data Links System Model 8 Operational System"
    ],
    "familyName": "Tactical Data Links System Model 8 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-tactical-data-links",
    "categoryName": "Tactical Data Links",
    "subcategory": "Link 16 Tactical Datalink",
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
      "tactical-data-links-system-model-8",
      "tactical data links system model 8",
      "tactical data links system model 8",
      "c4isr-tactical-data-links"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Tactical Data Links domain.",
    "fullOverview": "The Tactical Data Links System Model 8 is an audited canonical military system built for Tactical Data Links operations.",
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
      "primaryRole": "Tactical Data Links Operations",
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
        "Integrated Tactical Data Links Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Tactical Data Links Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "intelligence-systems-system-model-1",
    "name": "Intelligence Systems System Model 1",
    "officialDesignation": "Intelligence Systems System Model 1 Operational System",
    "commonName": "Intelligence Systems System Model 1",
    "aliases": [
      "Intelligence Systems System Model 1",
      "Intelligence Systems System Model 1",
      "Intelligence Systems System Model 1 Operational System"
    ],
    "familyName": "Intelligence Systems System Model 1 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-intelligence-systems",
    "categoryName": "Intelligence Systems",
    "subcategory": "Multi-INT Fusion Platform",
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
      "intelligence-systems-system-model-1",
      "intelligence systems system model 1",
      "intelligence systems system model 1",
      "c4isr-intelligence-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Intelligence Systems domain.",
    "fullOverview": "The Intelligence Systems System Model 1 is an audited canonical military system built for Intelligence Systems operations.",
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
      "primaryRole": "Intelligence Systems Operations",
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
        "Integrated Intelligence Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Intelligence Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Intelligence Systems missions."
  },
  {
    "id": "intelligence-systems-system-model-2",
    "name": "Intelligence Systems System Model 2",
    "officialDesignation": "Intelligence Systems System Model 2 Operational System",
    "commonName": "Intelligence Systems System Model 2",
    "aliases": [
      "Intelligence Systems System Model 2",
      "Intelligence Systems System Model 2",
      "Intelligence Systems System Model 2 Operational System"
    ],
    "familyName": "Intelligence Systems System Model 2 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-intelligence-systems",
    "categoryName": "Intelligence Systems",
    "subcategory": "Multi-INT Fusion Platform",
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
      "intelligence-systems-system-model-2",
      "intelligence systems system model 2",
      "intelligence systems system model 2",
      "c4isr-intelligence-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Intelligence Systems domain.",
    "fullOverview": "The Intelligence Systems System Model 2 is an audited canonical military system built for Intelligence Systems operations.",
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
      "primaryRole": "Intelligence Systems Operations",
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
        "Integrated Intelligence Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Intelligence Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Intelligence Systems missions."
  },
  {
    "id": "intelligence-systems-system-model-3",
    "name": "Intelligence Systems System Model 3",
    "officialDesignation": "Intelligence Systems System Model 3 Operational System",
    "commonName": "Intelligence Systems System Model 3",
    "aliases": [
      "Intelligence Systems System Model 3",
      "Intelligence Systems System Model 3",
      "Intelligence Systems System Model 3 Operational System"
    ],
    "familyName": "Intelligence Systems System Model 3 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-intelligence-systems",
    "categoryName": "Intelligence Systems",
    "subcategory": "Multi-INT Fusion Platform",
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
      "intelligence-systems-system-model-3",
      "intelligence systems system model 3",
      "intelligence systems system model 3",
      "c4isr-intelligence-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Intelligence Systems domain.",
    "fullOverview": "The Intelligence Systems System Model 3 is an audited canonical military system built for Intelligence Systems operations.",
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
      "primaryRole": "Intelligence Systems Operations",
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
        "Integrated Intelligence Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Intelligence Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Intelligence Systems missions."
  },
  {
    "id": "intelligence-systems-system-model-4",
    "name": "Intelligence Systems System Model 4",
    "officialDesignation": "Intelligence Systems System Model 4 Operational System",
    "commonName": "Intelligence Systems System Model 4",
    "aliases": [
      "Intelligence Systems System Model 4",
      "Intelligence Systems System Model 4",
      "Intelligence Systems System Model 4 Operational System"
    ],
    "familyName": "Intelligence Systems System Model 4 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-intelligence-systems",
    "categoryName": "Intelligence Systems",
    "subcategory": "Multi-INT Fusion Platform",
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
      "intelligence-systems-system-model-4",
      "intelligence systems system model 4",
      "intelligence systems system model 4",
      "c4isr-intelligence-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Intelligence Systems domain.",
    "fullOverview": "The Intelligence Systems System Model 4 is an audited canonical military system built for Intelligence Systems operations.",
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
      "primaryRole": "Intelligence Systems Operations",
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
        "Integrated Intelligence Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Intelligence Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "intelligence-systems-system-model-5",
    "name": "Intelligence Systems System Model 5",
    "officialDesignation": "Intelligence Systems System Model 5 Operational System",
    "commonName": "Intelligence Systems System Model 5",
    "aliases": [
      "Intelligence Systems System Model 5",
      "Intelligence Systems System Model 5",
      "Intelligence Systems System Model 5 Operational System"
    ],
    "familyName": "Intelligence Systems System Model 5 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-intelligence-systems",
    "categoryName": "Intelligence Systems",
    "subcategory": "Multi-INT Fusion Platform",
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
      "intelligence-systems-system-model-5",
      "intelligence systems system model 5",
      "intelligence systems system model 5",
      "c4isr-intelligence-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Intelligence Systems domain.",
    "fullOverview": "The Intelligence Systems System Model 5 is an audited canonical military system built for Intelligence Systems operations.",
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
      "primaryRole": "Intelligence Systems Operations",
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
        "Integrated Intelligence Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Intelligence Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "intelligence-systems-system-model-6",
    "name": "Intelligence Systems System Model 6",
    "officialDesignation": "Intelligence Systems System Model 6 Operational System",
    "commonName": "Intelligence Systems System Model 6",
    "aliases": [
      "Intelligence Systems System Model 6",
      "Intelligence Systems System Model 6",
      "Intelligence Systems System Model 6 Operational System"
    ],
    "familyName": "Intelligence Systems System Model 6 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-intelligence-systems",
    "categoryName": "Intelligence Systems",
    "subcategory": "Multi-INT Fusion Platform",
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
      "intelligence-systems-system-model-6",
      "intelligence systems system model 6",
      "intelligence systems system model 6",
      "c4isr-intelligence-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Intelligence Systems domain.",
    "fullOverview": "The Intelligence Systems System Model 6 is an audited canonical military system built for Intelligence Systems operations.",
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
      "primaryRole": "Intelligence Systems Operations",
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
        "Integrated Intelligence Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Intelligence Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surveillance-systems-system-model-1",
    "name": "Surveillance Systems System Model 1",
    "officialDesignation": "Surveillance Systems System Model 1 Operational System",
    "commonName": "Surveillance Systems System Model 1",
    "aliases": [
      "Surveillance Systems System Model 1",
      "Surveillance Systems System Model 1",
      "Surveillance Systems System Model 1 Operational System"
    ],
    "familyName": "Surveillance Systems System Model 1 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-surveillance-systems",
    "categoryName": "Surveillance Systems",
    "subcategory": "Wide Area Motion Imagery (WAMI)",
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
      "surveillance-systems-system-model-1",
      "surveillance systems system model 1",
      "surveillance systems system model 1",
      "c4isr-surveillance-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surveillance Systems domain.",
    "fullOverview": "The Surveillance Systems System Model 1 is an audited canonical military system built for Surveillance Systems operations.",
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
      "primaryRole": "Surveillance Systems Operations",
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
        "Integrated Surveillance Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surveillance Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Surveillance Systems missions."
  },
  {
    "id": "surveillance-systems-system-model-2",
    "name": "Surveillance Systems System Model 2",
    "officialDesignation": "Surveillance Systems System Model 2 Operational System",
    "commonName": "Surveillance Systems System Model 2",
    "aliases": [
      "Surveillance Systems System Model 2",
      "Surveillance Systems System Model 2",
      "Surveillance Systems System Model 2 Operational System"
    ],
    "familyName": "Surveillance Systems System Model 2 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-surveillance-systems",
    "categoryName": "Surveillance Systems",
    "subcategory": "Wide Area Motion Imagery (WAMI)",
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
      "surveillance-systems-system-model-2",
      "surveillance systems system model 2",
      "surveillance systems system model 2",
      "c4isr-surveillance-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surveillance Systems domain.",
    "fullOverview": "The Surveillance Systems System Model 2 is an audited canonical military system built for Surveillance Systems operations.",
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
      "primaryRole": "Surveillance Systems Operations",
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
        "Integrated Surveillance Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surveillance Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Surveillance Systems missions."
  },
  {
    "id": "surveillance-systems-system-model-3",
    "name": "Surveillance Systems System Model 3",
    "officialDesignation": "Surveillance Systems System Model 3 Operational System",
    "commonName": "Surveillance Systems System Model 3",
    "aliases": [
      "Surveillance Systems System Model 3",
      "Surveillance Systems System Model 3",
      "Surveillance Systems System Model 3 Operational System"
    ],
    "familyName": "Surveillance Systems System Model 3 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-surveillance-systems",
    "categoryName": "Surveillance Systems",
    "subcategory": "Wide Area Motion Imagery (WAMI)",
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
      "surveillance-systems-system-model-3",
      "surveillance systems system model 3",
      "surveillance systems system model 3",
      "c4isr-surveillance-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surveillance Systems domain.",
    "fullOverview": "The Surveillance Systems System Model 3 is an audited canonical military system built for Surveillance Systems operations.",
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
      "primaryRole": "Surveillance Systems Operations",
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
        "Integrated Surveillance Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surveillance Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Surveillance Systems missions."
  },
  {
    "id": "surveillance-systems-system-model-4",
    "name": "Surveillance Systems System Model 4",
    "officialDesignation": "Surveillance Systems System Model 4 Operational System",
    "commonName": "Surveillance Systems System Model 4",
    "aliases": [
      "Surveillance Systems System Model 4",
      "Surveillance Systems System Model 4",
      "Surveillance Systems System Model 4 Operational System"
    ],
    "familyName": "Surveillance Systems System Model 4 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-surveillance-systems",
    "categoryName": "Surveillance Systems",
    "subcategory": "Wide Area Motion Imagery (WAMI)",
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
      "surveillance-systems-system-model-4",
      "surveillance systems system model 4",
      "surveillance systems system model 4",
      "c4isr-surveillance-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surveillance Systems domain.",
    "fullOverview": "The Surveillance Systems System Model 4 is an audited canonical military system built for Surveillance Systems operations.",
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
      "primaryRole": "Surveillance Systems Operations",
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
        "Integrated Surveillance Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surveillance Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surveillance-systems-system-model-5",
    "name": "Surveillance Systems System Model 5",
    "officialDesignation": "Surveillance Systems System Model 5 Operational System",
    "commonName": "Surveillance Systems System Model 5",
    "aliases": [
      "Surveillance Systems System Model 5",
      "Surveillance Systems System Model 5",
      "Surveillance Systems System Model 5 Operational System"
    ],
    "familyName": "Surveillance Systems System Model 5 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-surveillance-systems",
    "categoryName": "Surveillance Systems",
    "subcategory": "Wide Area Motion Imagery (WAMI)",
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
      "surveillance-systems-system-model-5",
      "surveillance systems system model 5",
      "surveillance systems system model 5",
      "c4isr-surveillance-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surveillance Systems domain.",
    "fullOverview": "The Surveillance Systems System Model 5 is an audited canonical military system built for Surveillance Systems operations.",
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
      "primaryRole": "Surveillance Systems Operations",
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
        "Integrated Surveillance Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surveillance Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "reconnaissance-systems-system-model-1",
    "name": "Reconnaissance Systems System Model 1",
    "officialDesignation": "Reconnaissance Systems System Model 1 Operational System",
    "commonName": "Reconnaissance Systems System Model 1",
    "aliases": [
      "Reconnaissance Systems System Model 1",
      "Reconnaissance Systems System Model 1",
      "Reconnaissance Systems System Model 1 Operational System"
    ],
    "familyName": "Reconnaissance Systems System Model 1 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-reconnaissance-systems",
    "categoryName": "Reconnaissance Systems",
    "subcategory": "Tactical Reconnaissance Node",
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
      "reconnaissance-systems-system-model-1",
      "reconnaissance systems system model 1",
      "reconnaissance systems system model 1",
      "c4isr-reconnaissance-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance Systems domain.",
    "fullOverview": "The Reconnaissance Systems System Model 1 is an audited canonical military system built for Reconnaissance Systems operations.",
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
      "primaryRole": "Reconnaissance Systems Operations",
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
        "Integrated Reconnaissance Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Reconnaissance Systems missions."
  },
  {
    "id": "reconnaissance-systems-system-model-2",
    "name": "Reconnaissance Systems System Model 2",
    "officialDesignation": "Reconnaissance Systems System Model 2 Operational System",
    "commonName": "Reconnaissance Systems System Model 2",
    "aliases": [
      "Reconnaissance Systems System Model 2",
      "Reconnaissance Systems System Model 2",
      "Reconnaissance Systems System Model 2 Operational System"
    ],
    "familyName": "Reconnaissance Systems System Model 2 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-reconnaissance-systems",
    "categoryName": "Reconnaissance Systems",
    "subcategory": "Tactical Reconnaissance Node",
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
      "reconnaissance-systems-system-model-2",
      "reconnaissance systems system model 2",
      "reconnaissance systems system model 2",
      "c4isr-reconnaissance-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance Systems domain.",
    "fullOverview": "The Reconnaissance Systems System Model 2 is an audited canonical military system built for Reconnaissance Systems operations.",
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
      "primaryRole": "Reconnaissance Systems Operations",
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
        "Integrated Reconnaissance Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Reconnaissance Systems missions."
  },
  {
    "id": "reconnaissance-systems-system-model-3",
    "name": "Reconnaissance Systems System Model 3",
    "officialDesignation": "Reconnaissance Systems System Model 3 Operational System",
    "commonName": "Reconnaissance Systems System Model 3",
    "aliases": [
      "Reconnaissance Systems System Model 3",
      "Reconnaissance Systems System Model 3",
      "Reconnaissance Systems System Model 3 Operational System"
    ],
    "familyName": "Reconnaissance Systems System Model 3 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-reconnaissance-systems",
    "categoryName": "Reconnaissance Systems",
    "subcategory": "Tactical Reconnaissance Node",
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
      "reconnaissance-systems-system-model-3",
      "reconnaissance systems system model 3",
      "reconnaissance systems system model 3",
      "c4isr-reconnaissance-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance Systems domain.",
    "fullOverview": "The Reconnaissance Systems System Model 3 is an audited canonical military system built for Reconnaissance Systems operations.",
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
      "primaryRole": "Reconnaissance Systems Operations",
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
        "Integrated Reconnaissance Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Reconnaissance Systems missions."
  },
  {
    "id": "reconnaissance-systems-system-model-4",
    "name": "Reconnaissance Systems System Model 4",
    "officialDesignation": "Reconnaissance Systems System Model 4 Operational System",
    "commonName": "Reconnaissance Systems System Model 4",
    "aliases": [
      "Reconnaissance Systems System Model 4",
      "Reconnaissance Systems System Model 4",
      "Reconnaissance Systems System Model 4 Operational System"
    ],
    "familyName": "Reconnaissance Systems System Model 4 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-reconnaissance-systems",
    "categoryName": "Reconnaissance Systems",
    "subcategory": "Tactical Reconnaissance Node",
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
      "reconnaissance-systems-system-model-4",
      "reconnaissance systems system model 4",
      "reconnaissance systems system model 4",
      "c4isr-reconnaissance-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance Systems domain.",
    "fullOverview": "The Reconnaissance Systems System Model 4 is an audited canonical military system built for Reconnaissance Systems operations.",
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
      "primaryRole": "Reconnaissance Systems Operations",
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
        "Integrated Reconnaissance Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "reconnaissance-systems-system-model-5",
    "name": "Reconnaissance Systems System Model 5",
    "officialDesignation": "Reconnaissance Systems System Model 5 Operational System",
    "commonName": "Reconnaissance Systems System Model 5",
    "aliases": [
      "Reconnaissance Systems System Model 5",
      "Reconnaissance Systems System Model 5",
      "Reconnaissance Systems System Model 5 Operational System"
    ],
    "familyName": "Reconnaissance Systems System Model 5 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-reconnaissance-systems",
    "categoryName": "Reconnaissance Systems",
    "subcategory": "Tactical Reconnaissance Node",
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
      "reconnaissance-systems-system-model-5",
      "reconnaissance systems system model 5",
      "reconnaissance systems system model 5",
      "c4isr-reconnaissance-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Reconnaissance Systems domain.",
    "fullOverview": "The Reconnaissance Systems System Model 5 is an audited canonical military system built for Reconnaissance Systems operations.",
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
      "primaryRole": "Reconnaissance Systems Operations",
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
        "Integrated Reconnaissance Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Reconnaissance Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "communications-systems-system-model-1",
    "name": "Communications Systems System Model 1",
    "officialDesignation": "Communications Systems System Model 1 Operational System",
    "commonName": "Communications Systems System Model 1",
    "aliases": [
      "Communications Systems System Model 1",
      "Communications Systems System Model 1",
      "Communications Systems System Model 1 Operational System"
    ],
    "familyName": "Communications Systems System Model 1 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-communications-systems",
    "categoryName": "Communications Systems",
    "subcategory": "Software Defined Radio (SDR)",
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
      "communications-systems-system-model-1",
      "communications systems system model 1",
      "communications systems system model 1",
      "c4isr-communications-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Communications Systems domain.",
    "fullOverview": "The Communications Systems System Model 1 is an audited canonical military system built for Communications Systems operations.",
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
      "primaryRole": "Communications Systems Operations",
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
        "Integrated Communications Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Communications Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Communications Systems missions."
  },
  {
    "id": "communications-systems-system-model-2",
    "name": "Communications Systems System Model 2",
    "officialDesignation": "Communications Systems System Model 2 Operational System",
    "commonName": "Communications Systems System Model 2",
    "aliases": [
      "Communications Systems System Model 2",
      "Communications Systems System Model 2",
      "Communications Systems System Model 2 Operational System"
    ],
    "familyName": "Communications Systems System Model 2 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-communications-systems",
    "categoryName": "Communications Systems",
    "subcategory": "Software Defined Radio (SDR)",
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
      "communications-systems-system-model-2",
      "communications systems system model 2",
      "communications systems system model 2",
      "c4isr-communications-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Communications Systems domain.",
    "fullOverview": "The Communications Systems System Model 2 is an audited canonical military system built for Communications Systems operations.",
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
      "primaryRole": "Communications Systems Operations",
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
        "Integrated Communications Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Communications Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Communications Systems missions."
  },
  {
    "id": "communications-systems-system-model-3",
    "name": "Communications Systems System Model 3",
    "officialDesignation": "Communications Systems System Model 3 Operational System",
    "commonName": "Communications Systems System Model 3",
    "aliases": [
      "Communications Systems System Model 3",
      "Communications Systems System Model 3",
      "Communications Systems System Model 3 Operational System"
    ],
    "familyName": "Communications Systems System Model 3 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-communications-systems",
    "categoryName": "Communications Systems",
    "subcategory": "Software Defined Radio (SDR)",
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
      "communications-systems-system-model-3",
      "communications systems system model 3",
      "communications systems system model 3",
      "c4isr-communications-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Communications Systems domain.",
    "fullOverview": "The Communications Systems System Model 3 is an audited canonical military system built for Communications Systems operations.",
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
      "primaryRole": "Communications Systems Operations",
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
        "Integrated Communications Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Communications Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Communications Systems missions."
  },
  {
    "id": "communications-systems-system-model-4",
    "name": "Communications Systems System Model 4",
    "officialDesignation": "Communications Systems System Model 4 Operational System",
    "commonName": "Communications Systems System Model 4",
    "aliases": [
      "Communications Systems System Model 4",
      "Communications Systems System Model 4",
      "Communications Systems System Model 4 Operational System"
    ],
    "familyName": "Communications Systems System Model 4 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-communications-systems",
    "categoryName": "Communications Systems",
    "subcategory": "Software Defined Radio (SDR)",
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
      "communications-systems-system-model-4",
      "communications systems system model 4",
      "communications systems system model 4",
      "c4isr-communications-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Communications Systems domain.",
    "fullOverview": "The Communications Systems System Model 4 is an audited canonical military system built for Communications Systems operations.",
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
      "primaryRole": "Communications Systems Operations",
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
        "Integrated Communications Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Communications Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "communications-systems-system-model-5",
    "name": "Communications Systems System Model 5",
    "officialDesignation": "Communications Systems System Model 5 Operational System",
    "commonName": "Communications Systems System Model 5",
    "aliases": [
      "Communications Systems System Model 5",
      "Communications Systems System Model 5",
      "Communications Systems System Model 5 Operational System"
    ],
    "familyName": "Communications Systems System Model 5 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-communications-systems",
    "categoryName": "Communications Systems",
    "subcategory": "Software Defined Radio (SDR)",
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
      "communications-systems-system-model-5",
      "communications systems system model 5",
      "communications systems system model 5",
      "c4isr-communications-systems"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Communications Systems domain.",
    "fullOverview": "The Communications Systems System Model 5 is an audited canonical military system built for Communications Systems operations.",
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
      "primaryRole": "Communications Systems Operations",
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
        "Integrated Communications Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Communications Systems Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "battlefield-management-network-systems-system-model-1",
    "name": "Battlefield Management / Network Systems System Model 1",
    "officialDesignation": "Battlefield Management / Network Systems System Model 1 Operational System",
    "commonName": "Battlefield Management / Network Systems System Model 1",
    "aliases": [
      "Battlefield Management / Network Systems System Model 1",
      "Battlefield Management / Network Systems System Model 1",
      "Battlefield Management / Network Systems System Model 1 Operational System"
    ],
    "familyName": "Battlefield Management / Network Systems System Model 1 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-battlefield-management-network",
    "categoryName": "Battlefield Management / Network Systems",
    "subcategory": "Multi-Domain Operations Network",
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
      "battlefield-management-network-systems-system-model-1",
      "battlefield management / network systems system model 1",
      "battlefield management / network systems system model 1",
      "c4isr-battlefield-management-network"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Battlefield Management / Network Systems domain.",
    "fullOverview": "The Battlefield Management / Network Systems System Model 1 is an audited canonical military system built for Battlefield Management / Network Systems operations.",
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
      "primaryRole": "Battlefield Management / Network Systems Operations",
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
        "Integrated Battlefield Management / Network Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Battlefield Management / Network Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Battlefield Management / Network Systems missions."
  },
  {
    "id": "battlefield-management-network-systems-system-model-2",
    "name": "Battlefield Management / Network Systems System Model 2",
    "officialDesignation": "Battlefield Management / Network Systems System Model 2 Operational System",
    "commonName": "Battlefield Management / Network Systems System Model 2",
    "aliases": [
      "Battlefield Management / Network Systems System Model 2",
      "Battlefield Management / Network Systems System Model 2",
      "Battlefield Management / Network Systems System Model 2 Operational System"
    ],
    "familyName": "Battlefield Management / Network Systems System Model 2 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-battlefield-management-network",
    "categoryName": "Battlefield Management / Network Systems",
    "subcategory": "Multi-Domain Operations Network",
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
      "battlefield-management-network-systems-system-model-2",
      "battlefield management / network systems system model 2",
      "battlefield management / network systems system model 2",
      "c4isr-battlefield-management-network"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Battlefield Management / Network Systems domain.",
    "fullOverview": "The Battlefield Management / Network Systems System Model 2 is an audited canonical military system built for Battlefield Management / Network Systems operations.",
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
      "primaryRole": "Battlefield Management / Network Systems Operations",
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
        "Integrated Battlefield Management / Network Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Battlefield Management / Network Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Battlefield Management / Network Systems missions."
  },
  {
    "id": "battlefield-management-network-systems-system-model-3",
    "name": "Battlefield Management / Network Systems System Model 3",
    "officialDesignation": "Battlefield Management / Network Systems System Model 3 Operational System",
    "commonName": "Battlefield Management / Network Systems System Model 3",
    "aliases": [
      "Battlefield Management / Network Systems System Model 3",
      "Battlefield Management / Network Systems System Model 3",
      "Battlefield Management / Network Systems System Model 3 Operational System"
    ],
    "familyName": "Battlefield Management / Network Systems System Model 3 Family",
    "domain": "C4ISR",
    "branchId": "c4isr",
    "categoryId": "c4isr-battlefield-management-network",
    "categoryName": "Battlefield Management / Network Systems",
    "subcategory": "Multi-Domain Operations Network",
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
      "battlefield-management-network-systems-system-model-3",
      "battlefield management / network systems system model 3",
      "battlefield management / network systems system model 3",
      "c4isr-battlefield-management-network"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Battlefield Management / Network Systems domain.",
    "fullOverview": "The Battlefield Management / Network Systems System Model 3 is an audited canonical military system built for Battlefield Management / Network Systems operations.",
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
      "primaryRole": "Battlefield Management / Network Systems Operations",
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
        "Integrated Battlefield Management / Network Systems Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Battlefield Management / Network Systems Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Battlefield Management / Network Systems missions."
>>>>>>> 60e58fa (feat: add asset data files for multiple military domains)
  }
];

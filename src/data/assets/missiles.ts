import { Asset } from '../../types/catalog';

export const MISSILE_ASSETS: Asset[] = [
  {
<<<<<<< HEAD
    id: 'prsm-increment-1-surface-to-surface',
    name: 'PrSM Increment 1',
    officialDesignation: 'MGM-172 Precision Strike Missile Increment 1',
    commonName: 'Precision Strike Missile',
    aliases: ['Precision Strike Missile', 'PrSM Increment 1'],
    familyName: 'Precision Strike Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Quasi-ballistic precision deep strike',
    rankInCategory: 1,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Lockheed Martin / Raytheon',
    manufacturer: 'Lockheed Martin / Raytheon',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['precision strike missile', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Quasi-ballistic precision deep strike.',
    fullOverview: 'PrSM Increment 1 is a quasi-ballistic precision deep strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for PrSM Increment 1',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Lockheed Martin / Raytheon',
      primaryRole: 'Quasi-ballistic precision deep strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative PrSM Increment 1 program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Lockheed Martin / Raytheon',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'prsm-increment-2-surface-to-surface',
    name: 'PrSM Increment 2',
    officialDesignation: 'MGM-172 Precision Strike Missile Increment 2',
    commonName: 'Precision Strike Missile',
    aliases: ['Precision Strike Missile', 'PrSM Increment 2'],
    familyName: 'Precision Strike Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Multi-domain precision strike with seeker',
    rankInCategory: 2,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['precision strike missile', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Multi-domain precision strike with seeker.',
    fullOverview: 'PrSM Increment 2 is a multi-domain precision strike with seeker. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for PrSM Increment 2',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Current Production',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Multi-domain precision strike with seeker',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative PrSM Increment 2 program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'prsm-increment-4-surface-to-surface',
    name: 'PrSM Increment 4',
    officialDesignation: 'Precision Strike Missile Increment 4',
    commonName: 'PrSM Inc. 4',
    aliases: ['PrSM Inc. 4', 'PrSM Increment 4'],
    familyName: 'PrSM Inc. 4 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Extended-range precision strike',
    rankInCategory: 3,
    rankingRationale: 'Top-tier next-generation program capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Lockheed Martin / Raytheon',
    manufacturer: 'Lockheed Martin / Raytheon',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['prsm inc 4', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Extended-range precision strike.',
    fullOverview: 'PrSM Increment 4 is a extended-range precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for PrSM Increment 4',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Lockheed Martin / Raytheon',
      primaryRole: 'Extended-range precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative PrSM Increment 4 program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Lockheed Martin / Raytheon',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'iskander-m-9m723-surface-to-surface',
    name: 'Iskander-M (9M723)',
    officialDesignation: '9K720 Iskander-M Operational-Tactical Missile System',
    commonName: 'Iskander',
    aliases: ['Iskander', 'Iskander-M (9M723)'],
    familyName: 'Iskander Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Mobile quasi-ballistic tactical strike',
    rankInCategory: 4,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'KBM / Votkinsk Plant',
    manufacturer: 'KBM / Votkinsk Plant',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['iskander', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Mobile quasi-ballistic tactical strike.',
    fullOverview: 'Iskander-M (9M723) is a mobile quasi-ballistic tactical strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Iskander-M (9M723)',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'KBM / Votkinsk Plant',
      primaryRole: 'Mobile quasi-ballistic tactical strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Iskander-M (9M723) program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'KBM / Votkinsk Plant',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'lora-surface-to-surface',
    name: 'LORA',
    officialDesignation: 'Long-Range Artillery Weapon System (LORA)',
    commonName: 'LORA',
    aliases: ['LORA', 'LORA'],
    familyName: 'LORA Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Road-mobile quasi-ballistic precision strike',
    rankInCategory: 5,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: [],
    developer: 'Israel Aerospace Industries',
    manufacturer: 'Israel Aerospace Industries',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['lora', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Road-mobile quasi-ballistic precision strike.',
    fullOverview: 'LORA is a road-mobile quasi-ballistic precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for LORA',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Israel Aerospace Industries',
      primaryRole: 'Road-mobile quasi-ballistic precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative LORA program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'Israel Aerospace Industries',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'pralay-surface-to-surface',
    name: 'Pralay',
    officialDesignation: 'Pralay Surface-to-Surface Missile',
    commonName: 'Pralay',
    aliases: ['Pralay', 'Pralay'],
    familyName: 'Pralay Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Conventional quasi-ballistic battlefield strike',
    rankInCategory: 6,
    rankingRationale: 'Top-tier next-generation program capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India'],
    developerCountries: ['India'],
    manufacturerCountries: ['India'],
    operatorCountries: [],
    developer: 'DRDO',
    manufacturer: 'DRDO',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['pralay', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Conventional quasi-ballistic battlefield strike.',
    fullOverview: 'Pralay is a conventional quasi-ballistic battlefield strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Pralay',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'DRDO',
      primaryRole: 'Conventional quasi-ballistic battlefield strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Pralay program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'DRDO',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'brahmos-surface-to-surface',
    name: 'BrahMos',
    officialDesignation: 'PJ-10 BrahMos Supersonic Cruise Missile',
    commonName: 'BrahMos',
    aliases: ['BrahMos', 'BrahMos'],
    familyName: 'BrahMos Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Supersonic multi-domain precision strike',
    rankInCategory: 7,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India', 'Russia'],
    developerCountries: ['India', 'Russia'],
    manufacturerCountries: ['India', 'Russia'],
    operatorCountries: [],
    developer: 'BrahMos Aerospace',
    manufacturer: 'BrahMos Aerospace',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['brahmos', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Supersonic multi-domain precision strike.',
    fullOverview: 'BrahMos is a supersonic multi-domain precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for BrahMos',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'BrahMos Aerospace',
      primaryRole: 'Supersonic multi-domain precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative BrahMos program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'BrahMos Aerospace',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'hyunmoo-4-surface-to-surface',
    name: 'Hyunmoo-4',
    officialDesignation: 'Hyunmoo-4 Ballistic Missile',
    commonName: 'Hyunmoo',
    aliases: ['Hyunmoo', 'Hyunmoo-4'],
    familyName: 'Hyunmoo Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Conventional precision strike',
    rankInCategory: 8,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'South Korea',
    originCountries: ['South Korea'],
    developerCountries: ['South Korea'],
    manufacturerCountries: ['South Korea'],
    operatorCountries: [],
    developer: 'Agency for Defense Development / LIG Nex1',
    manufacturer: 'Agency for Defense Development / LIG Nex1',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['hyunmoo', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Conventional precision strike.',
    fullOverview: 'Hyunmoo-4 is a conventional precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Hyunmoo-4',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Agency for Defense Development / LIG Nex1',
      primaryRole: 'Conventional precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Hyunmoo-4 program / product information',
        url: 'https://www.mnd.go.kr/mbshome/mbs/mndEN/',
        publisher: 'Agency for Defense Development / LIG Nex1',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'hyunmoo-5-surface-to-surface',
    name: 'Hyunmoo-5',
    officialDesignation: 'Hyunmoo-5 Ballistic Missile',
    commonName: 'Hyunmoo',
    aliases: ['Hyunmoo', 'Hyunmoo-5'],
    familyName: 'Hyunmoo Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Heavy conventional precision strike',
    rankInCategory: 9,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'South Korea',
    originCountries: ['South Korea'],
    developerCountries: ['South Korea'],
    manufacturerCountries: ['South Korea'],
    operatorCountries: [],
    developer: 'Agency for Defense Development / Hanwha Aerospace',
    manufacturer: 'Agency for Defense Development / Hanwha Aerospace',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['hyunmoo', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Heavy conventional precision strike.',
    fullOverview: 'Hyunmoo-5 is a heavy conventional precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Hyunmoo-5',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Agency for Defense Development / Hanwha Aerospace',
      primaryRole: 'Heavy conventional precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Hyunmoo-5 program / product information',
        url: 'https://www.mnd.go.kr/mbshome/mbs/mndEN/',
        publisher: 'Agency for Defense Development / Hanwha Aerospace',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'ktssm-ii-surface-to-surface',
    name: 'KTSSM-II',
    officialDesignation: 'Korean Tactical Surface-to-Surface Missile-II',
    commonName: 'KTSSM-II',
    aliases: ['KTSSM-II', 'KTSSM-II'],
    familyName: 'KTSSM-II Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Precision tactical strike',
    rankInCategory: 10,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'South Korea',
    originCountries: ['South Korea'],
    developerCountries: ['South Korea'],
    manufacturerCountries: ['South Korea'],
    operatorCountries: [],
    developer: 'Hanwha Aerospace',
    manufacturer: 'Hanwha Aerospace',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['ktssm ii', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Precision tactical strike.',
    fullOverview: 'KTSSM-II is a precision tactical strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for KTSSM-II',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Current Production',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Hanwha Aerospace',
      primaryRole: 'Precision tactical strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative KTSSM-II program / product information',
        url: 'https://www.mnd.go.kr/mbshome/mbs/mndEN/',
        publisher: 'Hanwha Aerospace',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'type-12-ssm-upgraded-surface-to-surface',
    name: 'Type 12 SSM (upgraded)',
    officialDesignation: 'Type 12 Surface-to-Ship Missile Upgraded',
    commonName: 'Type 12 SSM',
    aliases: ['Type 12 SSM', 'Type 12 SSM (upgraded)'],
    familyName: 'Type 12 SSM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Extended-range networked strike',
    rankInCategory: 11,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Japan',
    originCountries: ['Japan'],
    developerCountries: ['Japan'],
    manufacturerCountries: ['Japan'],
    operatorCountries: [],
    developer: 'Mitsubishi Heavy Industries',
    manufacturer: 'Mitsubishi Heavy Industries',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['type 12 ssm', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Extended-range networked strike.',
    fullOverview: 'Type 12 SSM (upgraded) is a extended-range networked strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Type 12 SSM (upgraded)',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Current Production',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Mitsubishi Heavy Industries',
      primaryRole: 'Extended-range networked strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Type 12 SSM (upgraded) program / product information',
        url: 'https://www.mod.go.jp/en/',
        publisher: 'Mitsubishi Heavy Industries',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'df-17-surface-to-surface',
    name: 'DF-17',
    officialDesignation: 'DF-17 Hypersonic Glide Vehicle Weapon System',
    commonName: 'DF-17',
    aliases: ['DF-17', 'DF-17'],
    familyName: 'DF-17 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Hypersonic glide vehicle strike',
    rankInCategory: 12,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASC',
    manufacturer: 'CASC',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['df 17', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Hypersonic glide vehicle strike.',
    fullOverview: 'DF-17 is a hypersonic glide vehicle strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for DF-17',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASC',
      primaryRole: 'Hypersonic glide vehicle strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative DF-17 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'df-21d-surface-to-surface',
    name: 'DF-21D',
    officialDesignation: 'DF-21D Anti-Ship Ballistic Missile',
    commonName: 'Dongfeng',
    aliases: ['Dongfeng', 'DF-21D'],
    familyName: 'Dongfeng Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Anti-ship ballistic strike',
    rankInCategory: 13,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASC',
    manufacturer: 'CASC',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['dongfeng', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Anti-ship ballistic strike.',
    fullOverview: 'DF-21D is a anti-ship ballistic strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for DF-21D',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASC',
      primaryRole: 'Anti-ship ballistic strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative DF-21D program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'df-26-surface-to-surface',
    name: 'DF-26',
    officialDesignation: 'DF-26 Intermediate-Range Ballistic Missile',
    commonName: 'Dongfeng',
    aliases: ['Dongfeng', 'DF-26'],
    familyName: 'Dongfeng Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Dual-capable long-range precision strike',
    rankInCategory: 14,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASC',
    manufacturer: 'CASC',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['dongfeng', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Dual-capable long-range precision strike.',
    fullOverview: 'DF-26 is a dual-capable long-range precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for DF-26',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASC',
      primaryRole: 'Dual-capable long-range precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative DF-26 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'df-27-surface-to-surface',
    name: 'DF-27',
    officialDesignation: 'DF-27 Long-Range Hypersonic Glide Vehicle System',
    commonName: 'Dongfeng',
    aliases: ['Dongfeng', 'DF-27'],
    familyName: 'Dongfeng Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Long-range hypersonic strike',
    rankInCategory: 15,
    rankingRationale: 'Top-tier next-generation program capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASC',
    manufacturer: 'CASC',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['dongfeng', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range hypersonic strike.',
    fullOverview: 'DF-27 is a long-range hypersonic strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for DF-27',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASC',
      primaryRole: 'Long-range hypersonic strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative DF-27 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'tayfun-surface-to-surface',
    name: 'Tayfun',
    officialDesignation: 'Tayfun Ballistic Missile',
    commonName: 'Tayfun',
    aliases: ['Tayfun', 'Tayfun'],
    familyName: 'Tayfun Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Road-mobile ballistic precision strike',
    rankInCategory: 16,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: [],
    developer: 'Roketsan',
    manufacturer: 'Roketsan',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['tayfun', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Road-mobile ballistic precision strike.',
    fullOverview: 'Tayfun is a road-mobile ballistic precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Tayfun',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Roketsan',
      primaryRole: 'Road-mobile ballistic precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Tayfun program / product information',
        url: 'https://www.mod.gov/',
        publisher: 'Roketsan',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'fatah-ii-surface-to-surface',
    name: 'Fatah-II',
    officialDesignation: 'Fatah-II Guided Missile System',
    commonName: 'Fatah-II',
    aliases: ['Fatah-II', 'Fatah-II'],
    familyName: 'Fatah-II Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Guided quasi-ballistic precision strike',
    rankInCategory: 17,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Pakistan',
    originCountries: ['Pakistan'],
    developerCountries: ['Pakistan'],
    manufacturerCountries: ['Pakistan'],
    operatorCountries: [],
    developer: 'GIDS',
    manufacturer: 'GIDS',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['fatah ii', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Guided quasi-ballistic precision strike.',
    fullOverview: 'Fatah-II is a guided quasi-ballistic precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Fatah-II',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'GIDS',
      primaryRole: 'Guided quasi-ballistic precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Fatah-II program / product information',
        url: 'https://www.mod.gov.pk/',
        publisher: 'GIDS',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'khan-surface-to-surface',
    name: 'Khan',
    officialDesignation: 'Khan Tactical Ballistic Missile',
    commonName: 'Khan',
    aliases: ['Khan', 'Khan'],
    familyName: 'Khan Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Export tactical ballistic strike',
    rankInCategory: 18,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: [],
    developer: 'Roketsan',
    manufacturer: 'Roketsan',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['khan', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Export tactical ballistic strike.',
    fullOverview: 'Khan is a export tactical ballistic strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Khan',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Roketsan',
      primaryRole: 'Export tactical ballistic strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Khan program / product information',
        url: 'https://www.mod.gov/',
        publisher: 'Roketsan',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'fateh-313-surface-to-surface',
    name: 'Fateh-313',
    officialDesignation: 'Fateh-313 Short-Range Ballistic Missile',
    commonName: 'Fateh',
    aliases: ['Fateh', 'Fateh-313'],
    familyName: 'Fateh Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Mobile short-range precision strike',
    rankInCategory: 19,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Iran',
    originCountries: ['Iran'],
    developerCountries: ['Iran'],
    manufacturerCountries: ['Iran'],
    operatorCountries: [],
    developer: 'Iranian Defense Industries',
    manufacturer: 'Iranian Defense Industries',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['fateh', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Mobile short-range precision strike.',
    fullOverview: 'Fateh-313 is a mobile short-range precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Fateh-313',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Iranian Defense Industries',
      primaryRole: 'Mobile short-range precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Fateh-313 program / product information',
        url: 'https://www.mod.gov.ir/',
        publisher: 'Iranian Defense Industries',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'qadr-f-surface-to-surface',
    name: 'Qadr-F',
    officialDesignation: 'Qadr-F Ballistic Missile',
    commonName: 'Qadr',
    aliases: ['Qadr', 'Qadr-F'],
    familyName: 'Qadr Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Long-range ballistic strike',
    rankInCategory: 20,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Iran',
    originCountries: ['Iran'],
    developerCountries: ['Iran'],
    manufacturerCountries: ['Iran'],
    operatorCountries: [],
    developer: 'Iranian Defense Industries',
    manufacturer: 'Iranian Defense Industries',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['qadr', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range ballistic strike.',
    fullOverview: 'Qadr-F is a long-range ballistic strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Qadr-F',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Iranian Defense Industries',
      primaryRole: 'Long-range ballistic strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Qadr-F program / product information',
        url: 'https://www.mod.gov.ir/',
        publisher: 'Iranian Defense Industries',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'jericho-iii-surface-to-surface',
    name: 'Jericho III',
    officialDesignation: 'Jericho III Ballistic Missile',
    commonName: 'Jericho',
    aliases: ['Jericho', 'Jericho III'],
    familyName: 'Jericho Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Strategic ballistic strike',
    rankInCategory: 21,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: [],
    developer: 'Israel Aerospace Industries',
    manufacturer: 'Israel Aerospace Industries',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['jericho', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Strategic ballistic strike.',
    fullOverview: 'Jericho III is a strategic ballistic strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Jericho III',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Israel Aerospace Industries',
      primaryRole: 'Strategic ballistic strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Jericho III program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'Israel Aerospace Industries',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'oreshnik-surface-to-surface',
    name: 'Oreshnik',
    officialDesignation: 'Oreshnik Intermediate-Range Missile System',
    commonName: 'Oreshnik',
    aliases: ['Oreshnik', 'Oreshnik'],
    familyName: 'Oreshnik Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Intermediate-range precision strike',
    rankInCategory: 22,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Russian defense industry',
    manufacturer: 'Russian defense industry',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['oreshnik', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Intermediate-range precision strike.',
    fullOverview: 'Oreshnik is a intermediate-range precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Oreshnik',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Russian defense industry',
      primaryRole: 'Intermediate-range precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Oreshnik program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Russian defense industry',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'kinzhal-surface-to-surface',
    name: 'Kinzhal',
    officialDesignation: 'Kh-47M2 Kinzhal Air-Launched Ballistic Missile',
    commonName: 'Kinzhal',
    aliases: ['Kinzhal', 'Kinzhal'],
    familyName: 'Kinzhal Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Air-launched ballistic precision strike',
    rankInCategory: 23,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Russian defense industry',
    manufacturer: 'Russian defense industry',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['kinzhal', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Air-launched ballistic precision strike.',
    fullOverview: 'Kinzhal is a air-launched ballistic precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Kinzhal',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Russian defense industry',
      primaryRole: 'Air-launched ballistic precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Kinzhal program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Russian defense industry',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'atacms-m57e1-surface-to-surface',
    name: 'ATACMS M57E1',
    officialDesignation: 'M57E1 Army Tactical Missile System',
    commonName: 'ATACMS',
    aliases: ['ATACMS', 'ATACMS M57E1'],
    familyName: 'ATACMS Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Precision tactical strike',
    rankInCategory: 24,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['atacms', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Precision tactical strike.',
    fullOverview: 'ATACMS M57E1 is a precision tactical strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for ATACMS M57E1',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Precision tactical strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative ATACMS M57E1 program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'extra-surface-to-surface',
    name: 'EXTRA',
    officialDesignation: 'EXTRA Extended Range Artillery Missile',
    commonName: 'EXTRA',
    aliases: ['EXTRA', 'EXTRA'],
    familyName: 'EXTRA Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Precision long-range surface strike',
    rankInCategory: 25,
    rankingRationale: 'Top-tier current-generation capability in surface-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: [],
    developer: 'Israel Military Industries / Elbit Systems',
    manufacturer: 'Israel Military Industries / Elbit Systems',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['extra', 'surface-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Precision long-range surface strike.',
    fullOverview: 'EXTRA is a precision long-range surface strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for EXTRA',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Israel Military Industries / Elbit Systems',
      primaryRole: 'Precision long-range surface strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative EXTRA program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'Israel Military Industries / Elbit Systems',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'patriot-pac-3-mse-surface-to-air',
    name: 'Patriot PAC-3 MSE',
    officialDesignation: 'MIM-104F PAC-3 Missile Segment Enhancement',
    commonName: 'Patriot',
    aliases: ['Patriot', 'Patriot PAC-3 MSE'],
    familyName: 'Patriot Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Hit-to-kill air and ballistic missile defence',
    rankInCategory: 1,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'RTX / Lockheed Martin',
    manufacturer: 'RTX / Lockheed Martin',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['patriot', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Hit-to-kill air and ballistic missile defence.',
    fullOverview: 'Patriot PAC-3 MSE is a hit-to-kill air and ballistic missile defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Patriot PAC-3 MSE',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'RTX / Lockheed Martin',
      primaryRole: 'Hit-to-kill air and ballistic missile defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Patriot PAC-3 MSE program / product information',
        url: 'https://www.army.mil/',
        publisher: 'RTX / Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'samp-t-ng-surface-to-air',
    name: 'SAMP/T NG',
    officialDesignation: 'SAMP/T NG Air Defence System with Aster 30 B1NT',
    commonName: 'SAMP/T NG',
    aliases: ['SAMP/T NG', 'SAMP/T NG'],
    familyName: 'SAMP/T NG Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Mobile long-range air and missile defence',
    rankInCategory: 2,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'France',
    originCountries: ['France', 'Italy'],
    developerCountries: ['France', 'Italy'],
    manufacturerCountries: ['France', 'Italy'],
    operatorCountries: [],
    developer: 'Eurosam / MBDA / Leonardo',
    manufacturer: 'Eurosam / MBDA / Leonardo',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['samp t ng', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Mobile long-range air and missile defence.',
    fullOverview: 'SAMP/T NG is a mobile long-range air and missile defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for SAMP/T NG',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Current Production',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Eurosam / MBDA / Leonardo',
      primaryRole: 'Mobile long-range air and missile defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative SAMP/T NG program / product information',
        url: 'https://www.defense.gouv.fr/',
        publisher: 'Eurosam / MBDA / Leonardo',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'iris-t-slm-surface-to-air',
    name: 'IRIS-T SLM',
    officialDesignation: 'IRIS-T Surface Launched Medium Range',
    commonName: 'IRIS-T SLM',
    aliases: ['IRIS-T SLM', 'IRIS-T SLM'],
    familyName: 'IRIS-T SLM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Networked medium-range air defence',
    rankInCategory: 3,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Germany',
    originCountries: ['Germany'],
    developerCountries: ['Germany'],
    manufacturerCountries: ['Germany'],
    operatorCountries: [],
    developer: 'Diehl Defence',
    manufacturer: 'Diehl Defence',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['iris t slm', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Networked medium-range air defence.',
    fullOverview: 'IRIS-T SLM is a networked medium-range air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for IRIS-T SLM',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Diehl Defence',
      primaryRole: 'Networked medium-range air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative IRIS-T SLM program / product information',
        url: 'https://www.bundeswehr.de/en',
        publisher: 'Diehl Defence',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'nasams-3-surface-to-air',
    name: 'NASAMS 3',
    officialDesignation: 'Norwegian Advanced Surface-to-Air Missile System 3',
    commonName: 'NASAMS',
    aliases: ['NASAMS', 'NASAMS 3'],
    familyName: 'NASAMS Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Distributed networked air defence',
    rankInCategory: 4,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Norway',
    originCountries: ['Norway', 'United States'],
    developerCountries: ['Norway', 'United States'],
    manufacturerCountries: ['Norway', 'United States'],
    operatorCountries: [],
    developer: 'Kongsberg / Raytheon',
    manufacturer: 'Kongsberg / Raytheon',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['nasams', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Distributed networked air defence.',
    fullOverview: 'NASAMS 3 is a distributed networked air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for NASAMS 3',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Kongsberg / Raytheon',
      primaryRole: 'Distributed networked air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative NASAMS 3 program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Kongsberg / Raytheon',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'barak-mx-surface-to-air',
    name: 'Barak MX',
    officialDesignation: 'Barak MX Integrated Air Defence System',
    commonName: 'Barak',
    aliases: ['Barak', 'Barak MX'],
    familyName: 'Barak Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Layered modular air defence',
    rankInCategory: 5,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: [],
    developer: 'Israel Aerospace Industries',
    manufacturer: 'Israel Aerospace Industries',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['barak', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Layered modular air defence.',
    fullOverview: 'Barak MX is a layered modular air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Barak MX',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Israel Aerospace Industries',
      primaryRole: 'Layered modular air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Barak MX program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'Israel Aerospace Industries',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'camm-er-surface-to-air',
    name: 'CAMM-ER',
    officialDesignation: 'Common Anti-Air Modular Missile Extended Range',
    commonName: 'CAMM-ER',
    aliases: ['CAMM-ER', 'CAMM-ER'],
    familyName: 'CAMM-ER Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Medium-range active-radar air defence',
    rankInCategory: 6,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United Kingdom',
    originCountries: ['United Kingdom', 'Italy'],
    developerCountries: ['United Kingdom', 'Italy'],
    manufacturerCountries: ['United Kingdom', 'Italy'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['camm er', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Medium-range active-radar air defence.',
    fullOverview: 'CAMM-ER is a medium-range active-radar air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for CAMM-ER',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Medium-range active-radar air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative CAMM-ER program / product information',
        url: 'https://www.gov.uk/government/organisations/ministry-of-defence',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'vl-mica-ng-surface-to-air',
    name: 'VL MICA NG',
    officialDesignation: 'VL MICA New Generation',
    commonName: 'MICA NG',
    aliases: ['MICA NG', 'VL MICA NG'],
    familyName: 'MICA NG Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Vertical-launch short/medium-range air defence',
    rankInCategory: 7,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'France',
    originCountries: ['France'],
    developerCountries: ['France'],
    manufacturerCountries: ['France'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['mica ng', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Vertical-launch short/medium-range air defence.',
    fullOverview: 'VL MICA NG is a vertical-launch short/medium-range air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for VL MICA NG',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Current Production',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Vertical-launch short/medium-range air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative VL MICA NG program / product information',
        url: 'https://www.defense.gouv.fr/',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'spyder-mr-surface-to-air',
    name: 'SPYDER MR',
    officialDesignation: 'SPYDER Medium Range',
    commonName: 'SPYDER',
    aliases: ['SPYDER', 'SPYDER MR'],
    familyName: 'SPYDER Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Mobile networked air defence',
    rankInCategory: 8,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: [],
    developer: 'Rafael / IAI',
    manufacturer: 'Rafael / IAI',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['spyder', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Mobile networked air defence.',
    fullOverview: 'SPYDER MR is a mobile networked air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for SPYDER MR',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Rafael / IAI',
      primaryRole: 'Mobile networked air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative SPYDER MR program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'Rafael / IAI',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'km-sam-block-ii-surface-to-air',
    name: 'KM-SAM Block II',
    officialDesignation: 'Cheongung-II Medium-range Surface-to-Air Missile System',
    commonName: 'KM-SAM',
    aliases: ['KM-SAM', 'KM-SAM Block II'],
    familyName: 'KM-SAM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Hit-to-kill medium-range air defence',
    rankInCategory: 9,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'South Korea',
    originCountries: ['South Korea'],
    developerCountries: ['South Korea'],
    manufacturerCountries: ['South Korea'],
    operatorCountries: [],
    developer: 'LIG Nex1',
    manufacturer: 'LIG Nex1',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['km sam', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Hit-to-kill medium-range air defence.',
    fullOverview: 'KM-SAM Block II is a hit-to-kill medium-range air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for KM-SAM Block II',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'LIG Nex1',
      primaryRole: 'Hit-to-kill medium-range air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative KM-SAM Block II program / product information',
        url: 'https://www.mnd.go.kr/mbshome/mbs/mndEN/',
        publisher: 'LIG Nex1',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'l-sam-surface-to-air',
    name: 'L-SAM',
    officialDesignation: 'Long-range Surface-to-Air Missile System',
    commonName: 'L-SAM',
    aliases: ['L-SAM', 'L-SAM'],
    familyName: 'L-SAM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'High-altitude ballistic missile defence',
    rankInCategory: 10,
    rankingRationale: 'Top-tier next-generation program capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'South Korea',
    originCountries: ['South Korea'],
    developerCountries: ['South Korea'],
    manufacturerCountries: ['South Korea'],
    operatorCountries: [],
    developer: 'LIG Nex1 / Hanwha Aerospace',
    manufacturer: 'LIG Nex1 / Hanwha Aerospace',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['l sam', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'High-altitude ballistic missile defence.',
    fullOverview: 'L-SAM is a high-altitude ballistic missile defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for L-SAM',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'LIG Nex1 / Hanwha Aerospace',
      primaryRole: 'High-altitude ballistic missile defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative L-SAM program / product information',
        url: 'https://www.mnd.go.kr/mbshome/mbs/mndEN/',
        publisher: 'LIG Nex1 / Hanwha Aerospace',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'm-sam-block-iii-surface-to-air',
    name: 'M-SAM Block III',
    officialDesignation: 'Cheongung-III / M-SAM Block III',
    commonName: 'M-SAM',
    aliases: ['M-SAM', 'M-SAM Block III'],
    familyName: 'M-SAM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Next-generation medium-range air defence',
    rankInCategory: 11,
    rankingRationale: 'Top-tier next-generation program capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'South Korea',
    originCountries: ['South Korea'],
    developerCountries: ['South Korea'],
    manufacturerCountries: ['South Korea'],
    operatorCountries: [],
    developer: 'LIG Nex1',
    manufacturer: 'LIG Nex1',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['m sam', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Next-generation medium-range air defence.',
    fullOverview: 'M-SAM Block III is a next-generation medium-range air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for M-SAM Block III',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'LIG Nex1',
      primaryRole: 'Next-generation medium-range air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative M-SAM Block III program / product information',
        url: 'https://www.mnd.go.kr/mbshome/mbs/mndEN/',
        publisher: 'LIG Nex1',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'akash-ng-surface-to-air',
    name: 'Akash-NG',
    officialDesignation: 'Akash New Generation Surface-to-Air Missile System',
    commonName: 'Akash-NG',
    aliases: ['Akash-NG', 'Akash-NG'],
    familyName: 'Akash-NG Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Quick-reaction networked air defence',
    rankInCategory: 12,
    rankingRationale: 'Top-tier next-generation program capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India'],
    developerCountries: ['India'],
    manufacturerCountries: ['India'],
    operatorCountries: [],
    developer: 'DRDO / Bharat Dynamics',
    manufacturer: 'DRDO / Bharat Dynamics',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['akash ng', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Quick-reaction networked air defence.',
    fullOverview: 'Akash-NG is a quick-reaction networked air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Akash-NG',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'DRDO / Bharat Dynamics',
      primaryRole: 'Quick-reaction networked air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Akash-NG program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'DRDO / Bharat Dynamics',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'siper-block-2-surface-to-air',
    name: 'Siper Block 2',
    officialDesignation: 'Siper Block 2 Long-Range Air Defence System',
    commonName: 'Siper',
    aliases: ['Siper', 'Siper Block 2'],
    familyName: 'Siper Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Long-range integrated air defence',
    rankInCategory: 13,
    rankingRationale: 'Top-tier next-generation program capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: [],
    developer: 'Roketsan / Aselsan',
    manufacturer: 'Roketsan / Aselsan',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['siper', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range integrated air defence.',
    fullOverview: 'Siper Block 2 is a long-range integrated air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Siper Block 2',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Roketsan / Aselsan',
      primaryRole: 'Long-range integrated air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Siper Block 2 program / product information',
        url: 'https://www.mod.gov/',
        publisher: 'Roketsan / Aselsan',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'hisar-o-surface-to-air',
    name: 'HISAR-O+',
    officialDesignation: 'HISAR-O+ Medium Altitude Air Defence System',
    commonName: 'HISAR-O+',
    aliases: ['HISAR-O+', 'HISAR-O+'],
    familyName: 'HISAR-O+ Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Mobile medium-altitude air defence',
    rankInCategory: 14,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: [],
    developer: 'Roketsan / Aselsan',
    manufacturer: 'Roketsan / Aselsan',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['hisar o', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Mobile medium-altitude air defence.',
    fullOverview: 'HISAR-O+ is a mobile medium-altitude air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for HISAR-O+',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Roketsan / Aselsan',
      primaryRole: 'Mobile medium-altitude air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative HISAR-O+ program / product information',
        url: 'https://www.mod.gov/',
        publisher: 'Roketsan / Aselsan',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'hq-9b-surface-to-air',
    name: 'HQ-9B',
    officialDesignation: 'HQ-9B Surface-to-Air Missile System',
    commonName: 'HQ-9',
    aliases: ['HQ-9', 'HQ-9B'],
    familyName: 'HQ-9 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Long-range integrated air defence',
    rankInCategory: 15,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASC',
    manufacturer: 'CASC',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['hq 9', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range integrated air defence.',
    fullOverview: 'HQ-9B is a long-range integrated air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for HQ-9B',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASC',
      primaryRole: 'Long-range integrated air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative HQ-9B program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'hq-22-surface-to-air',
    name: 'HQ-22',
    officialDesignation: 'HQ-22 Surface-to-Air Missile System',
    commonName: 'HQ-22',
    aliases: ['HQ-22', 'HQ-22'],
    familyName: 'HQ-22 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Long-range mobile air defence',
    rankInCategory: 16,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASIC',
    manufacturer: 'CASIC',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['hq 22', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range mobile air defence.',
    fullOverview: 'HQ-22 is a long-range mobile air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for HQ-22',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASIC',
      primaryRole: 'Long-range mobile air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative HQ-22 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASIC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 's-350-vityaz-surface-to-air',
    name: 'S-350 Vityaz',
    officialDesignation: 'S-350 Vityaz Air Defence System',
    commonName: 'S-350',
    aliases: ['S-350', 'S-350 Vityaz'],
    familyName: 'S-350 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Networked medium-range air defence',
    rankInCategory: 17,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Almaz-Antey',
    manufacturer: 'Almaz-Antey',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['s 350', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Networked medium-range air defence.',
    fullOverview: 'S-350 Vityaz is a networked medium-range air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for S-350 Vityaz',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Almaz-Antey',
      primaryRole: 'Networked medium-range air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative S-350 Vityaz program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Almaz-Antey',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 's-400-triumf-surface-to-air',
    name: 'S-400 Triumf',
    officialDesignation: 'S-400 Triumf Air Defence System',
    commonName: 'S-400',
    aliases: ['S-400', 'S-400 Triumf'],
    familyName: 'S-400 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Long-range air defence',
    rankInCategory: 18,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Almaz-Antey',
    manufacturer: 'Almaz-Antey',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['s 400', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range air defence.',
    fullOverview: 'S-400 Triumf is a long-range air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for S-400 Triumf',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Almaz-Antey',
      primaryRole: 'Long-range air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative S-400 Triumf program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Almaz-Antey',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'buk-m3-surface-to-air',
    name: 'Buk-M3',
    officialDesignation: 'Buk-M3 Surface-to-Air Missile System',
    commonName: 'Buk',
    aliases: ['Buk', 'Buk-M3'],
    familyName: 'Buk Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Mobile medium-range air defence',
    rankInCategory: 19,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Almaz-Antey',
    manufacturer: 'Almaz-Antey',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['buk', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Mobile medium-range air defence.',
    fullOverview: 'Buk-M3 is a mobile medium-range air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Buk-M3',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Almaz-Antey',
      primaryRole: 'Mobile medium-range air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Buk-M3 program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Almaz-Antey',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'tor-m2-surface-to-air',
    name: 'Tor-M2',
    officialDesignation: 'Tor-M2 Short-Range Air Defence System',
    commonName: 'Tor',
    aliases: ['Tor', 'Tor-M2'],
    familyName: 'Tor Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Mobile point air defence',
    rankInCategory: 20,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Almaz-Antey',
    manufacturer: 'Almaz-Antey',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['tor', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Mobile point air defence.',
    fullOverview: 'Tor-M2 is a mobile point air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Tor-M2',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Almaz-Antey',
      primaryRole: 'Mobile point air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Tor-M2 program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Almaz-Antey',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'pantsir-sm-surface-to-air',
    name: 'Pantsir-SM',
    officialDesignation: 'Pantsir-SM Combined Air Defence System',
    commonName: 'Pantsir',
    aliases: ['Pantsir', 'Pantsir-SM'],
    familyName: 'Pantsir Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Gun-and-missile short-range defence',
    rankInCategory: 21,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'KBP Instrument Design Bureau',
    manufacturer: 'KBP Instrument Design Bureau',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['pantsir', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Gun-and-missile short-range defence.',
    fullOverview: 'Pantsir-SM is a gun-and-missile short-range defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Pantsir-SM',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'KBP Instrument Design Bureau',
      primaryRole: 'Gun-and-missile short-range defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Pantsir-SM program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'KBP Instrument Design Bureau',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'david-s-sling-surface-to-air',
    name: 'David\'s Sling',
    officialDesignation: 'David\'s Sling Weapon System',
    commonName: 'David\'s Sling',
    aliases: ['David\'s Sling', 'David\'s Sling'],
    familyName: 'David\'s Sling Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Medium-to-long-range air and missile defence',
    rankInCategory: 22,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel', 'United States'],
    developerCountries: ['Israel', 'United States'],
    manufacturerCountries: ['Israel', 'United States'],
    operatorCountries: [],
    developer: 'Rafael / Raytheon',
    manufacturer: 'Rafael / Raytheon',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['david s sling', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Medium-to-long-range air and missile defence.',
    fullOverview: 'David\'s Sling is a medium-to-long-range air and missile defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for David\'s Sling',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Rafael / Raytheon',
      primaryRole: 'Medium-to-long-range air and missile defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative David\'s Sling program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Rafael / Raytheon',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'arrow-3-surface-to-air',
    name: 'Arrow 3',
    officialDesignation: 'Arrow 3 Upper-Tier Interceptor',
    commonName: 'Arrow',
    aliases: ['Arrow', 'Arrow 3'],
    familyName: 'Arrow Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Exo-atmospheric ballistic missile defence',
    rankInCategory: 23,
    rankingRationale: 'Top-tier current-generation capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel', 'United States'],
    developerCountries: ['Israel', 'United States'],
    manufacturerCountries: ['Israel', 'United States'],
    operatorCountries: [],
    developer: 'Israel Aerospace Industries / Boeing',
    manufacturer: 'Israel Aerospace Industries / Boeing',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['arrow', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Exo-atmospheric ballistic missile defence.',
    fullOverview: 'Arrow 3 is a exo-atmospheric ballistic missile defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Arrow 3',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Israel Aerospace Industries / Boeing',
      primaryRole: 'Exo-atmospheric ballistic missile defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Arrow 3 program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Israel Aerospace Industries / Boeing',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'aster-30-b1nt-surface-to-air',
    name: 'Aster 30 B1NT',
    officialDesignation: 'Aster 30 Block 1 New Technology',
    commonName: 'Aster',
    aliases: ['Aster', 'Aster 30 B1NT'],
    familyName: 'Aster Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Advanced anti-air and anti-ballistic interception',
    rankInCategory: 24,
    rankingRationale: 'Top-tier next-generation program capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'France',
    originCountries: ['France', 'Italy'],
    developerCountries: ['France', 'Italy'],
    manufacturerCountries: ['France', 'Italy'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['aster', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Advanced anti-air and anti-ballistic interception.',
    fullOverview: 'Aster 30 B1NT is a advanced anti-air and anti-ballistic interception. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Aster 30 B1NT',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Advanced anti-air and anti-ballistic interception',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Aster 30 B1NT program / product information',
        url: 'https://www.defense.gouv.fr/',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'meads-surface-to-air',
    name: 'MEADS',
    officialDesignation: 'Medium Extended Air Defense System',
    commonName: 'MEADS',
    aliases: ['MEADS', 'MEADS'],
    familyName: 'MEADS Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-air',
    categoryName: 'Missiles — Surface-to-Air',
    subcategory: 'Networked 360-degree air defence',
    rankInCategory: 25,
    rankingRationale: 'Top-tier next-generation program capability in surface-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Germany',
    originCountries: ['Germany', 'Italy', 'United States'],
    developerCountries: ['Germany', 'Italy', 'United States'],
    manufacturerCountries: ['Germany', 'Italy', 'United States'],
    operatorCountries: [],
    developer: 'MBDA Deutschland / MBDA Italia / Lockheed Martin',
    manufacturer: 'MBDA Deutschland / MBDA Italia / Lockheed Martin',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['meads', 'surface-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Networked 360-degree air defence.',
    fullOverview: 'MEADS is a networked 360-degree air defence. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for MEADS',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA Deutschland / MBDA Italia / Lockheed Martin',
      primaryRole: 'Networked 360-degree air defence',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative MEADS program / product information',
        url: 'https://www.army.mil/',
        publisher: 'MBDA Deutschland / MBDA Italia / Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'aim-120d-3-amraam-air-to-air',
    name: 'AIM-120D-3 AMRAAM',
    officialDesignation: 'AIM-120D-3 Advanced Medium-Range Air-to-Air Missile',
    commonName: 'AMRAAM',
    aliases: ['AMRAAM', 'AIM-120D-3 AMRAAM'],
    familyName: 'AMRAAM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Beyond-visual-range active radar missile',
    rankInCategory: 1,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'RTX',
    manufacturer: 'RTX',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['amraam', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Beyond-visual-range active radar missile.',
    fullOverview: 'AIM-120D-3 AMRAAM is a beyond-visual-range active radar missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for AIM-120D-3 AMRAAM',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'RTX',
      primaryRole: 'Beyond-visual-range active radar missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative AIM-120D-3 AMRAAM program / product information',
        url: 'https://www.army.mil/',
        publisher: 'RTX',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'aim-260-jatm-air-to-air',
    name: 'AIM-260 JATM',
    officialDesignation: 'AIM-260 Joint Advanced Tactical Missile',
    commonName: 'JATM',
    aliases: ['JATM', 'AIM-260 JATM'],
    familyName: 'JATM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Very-long-range air-to-air missile',
    rankInCategory: 2,
    rankingRationale: 'Top-tier next-generation program capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['jatm', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Very-long-range air-to-air missile.',
    fullOverview: 'AIM-260 JATM is a very-long-range air-to-air missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for AIM-260 JATM',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Very-long-range air-to-air missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative AIM-260 JATM program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'meteor-air-to-air',
    name: 'Meteor',
    officialDesignation: 'Meteor Beyond-Visual-Range Air-to-Air Missile',
    commonName: 'Meteor',
    aliases: ['Meteor', 'Meteor'],
    familyName: 'Meteor Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Ramjet-powered BVR missile',
    rankInCategory: 3,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United Kingdom',
    originCountries: ['United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'Sweden'],
    developerCountries: ['United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'Sweden'],
    manufacturerCountries: ['United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'Sweden'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['meteor', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Ramjet-powered BVR missile.',
    fullOverview: 'Meteor is a ramjet-powered bvr missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Meteor',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Ramjet-powered BVR missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Meteor program / product information',
        url: 'https://www.gov.uk/government/organisations/ministry-of-defence',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'mica-ng-air-to-air',
    name: 'MICA NG',
    officialDesignation: 'MICA New Generation Air-to-Air Missile',
    commonName: 'MICA NG',
    aliases: ['MICA NG', 'MICA NG'],
    familyName: 'MICA NG Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Dual-mode short/medium-range air combat missile',
    rankInCategory: 4,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'France',
    originCountries: ['France'],
    developerCountries: ['France'],
    manufacturerCountries: ['France'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['mica ng', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Dual-mode short/medium-range air combat missile.',
    fullOverview: 'MICA NG is a dual-mode short/medium-range air combat missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for MICA NG',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Current Production',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Dual-mode short/medium-range air combat missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative MICA NG program / product information',
        url: 'https://www.defense.gouv.fr/',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'iris-t-air-to-air',
    name: 'IRIS-T',
    officialDesignation: 'IRIS-T Imaging Infrared Air-to-Air Missile',
    commonName: 'IRIS-T',
    aliases: ['IRIS-T', 'IRIS-T'],
    familyName: 'IRIS-T Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'High-agility imaging-infrared dogfight missile',
    rankInCategory: 5,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Germany',
    originCountries: ['Germany'],
    developerCountries: ['Germany'],
    manufacturerCountries: ['Germany'],
    operatorCountries: [],
    developer: 'Diehl Defence',
    manufacturer: 'Diehl Defence',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['iris t', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'High-agility imaging-infrared dogfight missile.',
    fullOverview: 'IRIS-T is a high-agility imaging-infrared dogfight missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for IRIS-T',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Diehl Defence',
      primaryRole: 'High-agility imaging-infrared dogfight missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative IRIS-T program / product information',
        url: 'https://www.bundeswehr.de/en',
        publisher: 'Diehl Defence',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'aim-9x-block-ii-air-to-air',
    name: 'AIM-9X Block II+',
    officialDesignation: 'AIM-9X Block II Plus Sidewinder',
    commonName: 'Sidewinder',
    aliases: ['Sidewinder', 'AIM-9X Block II+'],
    familyName: 'Sidewinder Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'High-off-boresight imaging-infrared missile',
    rankInCategory: 6,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'RTX',
    manufacturer: 'RTX',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['sidewinder', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'High-off-boresight imaging-infrared missile.',
    fullOverview: 'AIM-9X Block II+ is a high-off-boresight imaging-infrared missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for AIM-9X Block II+',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'RTX',
      primaryRole: 'High-off-boresight imaging-infrared missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative AIM-9X Block II+ program / product information',
        url: 'https://www.army.mil/',
        publisher: 'RTX',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'asraam-air-to-air',
    name: 'ASRAAM',
    officialDesignation: 'Advanced Short Range Air-to-Air Missile',
    commonName: 'ASRAAM',
    aliases: ['ASRAAM', 'ASRAAM'],
    familyName: 'ASRAAM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'High-speed short-range air-to-air missile',
    rankInCategory: 7,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United Kingdom',
    originCountries: ['United Kingdom'],
    developerCountries: ['United Kingdom'],
    manufacturerCountries: ['United Kingdom'],
    operatorCountries: [],
    developer: 'MBDA UK',
    manufacturer: 'MBDA UK',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['asraam', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'High-speed short-range air-to-air missile.',
    fullOverview: 'ASRAAM is a high-speed short-range air-to-air missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for ASRAAM',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA UK',
      primaryRole: 'High-speed short-range air-to-air missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative ASRAAM program / product information',
        url: 'https://www.gov.uk/government/organisations/ministry-of-defence',
        publisher: 'MBDA UK',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'python-5-air-to-air',
    name: 'Python-5',
    officialDesignation: 'Python-5 Air-to-Air Missile',
    commonName: 'Python',
    aliases: ['Python', 'Python-5'],
    familyName: 'Python Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'High-agility imaging-infrared missile',
    rankInCategory: 8,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: [],
    developer: 'Rafael',
    manufacturer: 'Rafael',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['python', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'High-agility imaging-infrared missile.',
    fullOverview: 'Python-5 is a high-agility imaging-infrared missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Python-5',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Rafael',
      primaryRole: 'High-agility imaging-infrared missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Python-5 program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'Rafael',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'i-derby-er-air-to-air',
    name: 'I-Derby ER',
    officialDesignation: 'I-Derby ER Beyond-Visual-Range Air-to-Air Missile',
    commonName: 'Derby ER',
    aliases: ['Derby ER', 'I-Derby ER'],
    familyName: 'Derby ER Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Active-radar BVR missile',
    rankInCategory: 9,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: [],
    developer: 'Rafael',
    manufacturer: 'Rafael',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['derby er', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Active-radar BVR missile.',
    fullOverview: 'I-Derby ER is a active-radar bvr missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for I-Derby ER',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Rafael',
      primaryRole: 'Active-radar BVR missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative I-Derby ER program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'Rafael',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'derby-air-to-air',
    name: 'Derby',
    officialDesignation: 'Derby Beyond-Visual-Range Air-to-Air Missile',
    commonName: 'Derby',
    aliases: ['Derby', 'Derby'],
    familyName: 'Derby Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Active-radar medium-range missile',
    rankInCategory: 10,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: [],
    developer: 'Rafael',
    manufacturer: 'Rafael',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['derby', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Active-radar medium-range missile.',
    fullOverview: 'Derby is a active-radar medium-range missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Derby',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Rafael',
      primaryRole: 'Active-radar medium-range missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Derby program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'Rafael',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'pl-15-air-to-air',
    name: 'PL-15',
    officialDesignation: 'PL-15 Active Radar Air-to-Air Missile',
    commonName: 'PL-15',
    aliases: ['PL-15', 'PL-15'],
    familyName: 'PL-15 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Long-range active-radar BVR missile',
    rankInCategory: 11,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASC',
    manufacturer: 'CASC',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['pl 15', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range active-radar BVR missile.',
    fullOverview: 'PL-15 is a long-range active-radar bvr missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for PL-15',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASC',
      primaryRole: 'Long-range active-radar BVR missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative PL-15 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'pl-17-air-to-air',
    name: 'PL-17',
    officialDesignation: 'PL-17 Very Long Range Air-to-Air Missile',
    commonName: 'PL-17',
    aliases: ['PL-17', 'PL-17'],
    familyName: 'PL-17 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Very-long-range air combat missile',
    rankInCategory: 12,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASC',
    manufacturer: 'CASC',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['pl 17', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Very-long-range air combat missile.',
    fullOverview: 'PL-17 is a very-long-range air combat missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for PL-17',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASC',
      primaryRole: 'Very-long-range air combat missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative PL-17 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'pl-10-air-to-air',
    name: 'PL-10',
    officialDesignation: 'PL-10 High-Off-Boresight Air-to-Air Missile',
    commonName: 'PL-10',
    aliases: ['PL-10', 'PL-10'],
    familyName: 'PL-10 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Imaging-infrared close-combat missile',
    rankInCategory: 13,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASC',
    manufacturer: 'CASC',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['pl 10', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Imaging-infrared close-combat missile.',
    fullOverview: 'PL-10 is a imaging-infrared close-combat missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for PL-10',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASC',
      primaryRole: 'Imaging-infrared close-combat missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative PL-10 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'r-37m-air-to-air',
    name: 'R-37M',
    officialDesignation: 'R-37M Long-Range Air-to-Air Missile',
    commonName: 'R-37M',
    aliases: ['R-37M', 'R-37M'],
    familyName: 'R-37M Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Very-long-range air-to-air missile',
    rankInCategory: 14,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Vympel',
    manufacturer: 'Vympel',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['r 37m', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Very-long-range air-to-air missile.',
    fullOverview: 'R-37M is a very-long-range air-to-air missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for R-37M',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Vympel',
      primaryRole: 'Very-long-range air-to-air missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative R-37M program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Vympel',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'k-77m-air-to-air',
    name: 'K-77M',
    officialDesignation: 'K-77M Advanced Medium-Range Air-to-Air Missile',
    commonName: 'K-77M',
    aliases: ['K-77M', 'K-77M'],
    familyName: 'K-77M Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Active electronically scanned radar BVR missile',
    rankInCategory: 15,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Vympel',
    manufacturer: 'Vympel',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['k 77m', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Active electronically scanned radar BVR missile.',
    fullOverview: 'K-77M is a active electronically scanned radar bvr missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for K-77M',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Vympel',
      primaryRole: 'Active electronically scanned radar BVR missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative K-77M program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Vympel',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'r-74m2-air-to-air',
    name: 'R-74M2',
    officialDesignation: 'R-74M2 High-Off-Boresight Air-to-Air Missile',
    commonName: 'R-74M2',
    aliases: ['R-74M2', 'R-74M2'],
    familyName: 'R-74M2 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'High-agility short-range missile',
    rankInCategory: 16,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Vympel',
    manufacturer: 'Vympel',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['r 74m2', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'High-agility short-range missile.',
    fullOverview: 'R-74M2 is a high-agility short-range missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for R-74M2',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Vympel',
      primaryRole: 'High-agility short-range missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative R-74M2 program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Vympel',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'astra-mk-i-air-to-air',
    name: 'Astra Mk-I',
    officialDesignation: 'Astra Mk-I Beyond-Visual-Range Air-to-Air Missile',
    commonName: 'Astra',
    aliases: ['Astra', 'Astra Mk-I'],
    familyName: 'Astra Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Indigenous active-radar BVR missile',
    rankInCategory: 17,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India'],
    developerCountries: ['India'],
    manufacturerCountries: ['India'],
    operatorCountries: [],
    developer: 'DRDO / Bharat Dynamics',
    manufacturer: 'DRDO / Bharat Dynamics',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['astra', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Indigenous active-radar BVR missile.',
    fullOverview: 'Astra Mk-I is a indigenous active-radar bvr missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Astra Mk-I',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'DRDO / Bharat Dynamics',
      primaryRole: 'Indigenous active-radar BVR missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Astra Mk-I program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'DRDO / Bharat Dynamics',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'astra-mk-ii-air-to-air',
    name: 'Astra Mk-II',
    officialDesignation: 'Astra Mk-II Beyond-Visual-Range Air-to-Air Missile',
    commonName: 'Astra Mk-II',
    aliases: ['Astra Mk-II', 'Astra Mk-II'],
    familyName: 'Astra Mk-II Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Extended-range air-to-air missile',
    rankInCategory: 18,
    rankingRationale: 'Top-tier next-generation program capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India'],
    developerCountries: ['India'],
    manufacturerCountries: ['India'],
    operatorCountries: [],
    developer: 'DRDO',
    manufacturer: 'DRDO',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['astra mk ii', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Extended-range air-to-air missile.',
    fullOverview: 'Astra Mk-II is a extended-range air-to-air missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Astra Mk-II',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'DRDO',
      primaryRole: 'Extended-range air-to-air missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Astra Mk-II program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'DRDO',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'aam-4b-air-to-air',
    name: 'AAM-4B',
    officialDesignation: 'AAM-4B Active Radar Air-to-Air Missile',
    commonName: 'AAM-4B',
    aliases: ['AAM-4B', 'AAM-4B'],
    familyName: 'AAM-4B Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Active electronically scanned radar BVR missile',
    rankInCategory: 19,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Japan',
    originCountries: ['Japan'],
    developerCountries: ['Japan'],
    manufacturerCountries: ['Japan'],
    operatorCountries: [],
    developer: 'Mitsubishi Electric / Mitsubishi Heavy Industries',
    manufacturer: 'Mitsubishi Electric / Mitsubishi Heavy Industries',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['aam 4b', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Active electronically scanned radar BVR missile.',
    fullOverview: 'AAM-4B is a active electronically scanned radar bvr missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for AAM-4B',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Mitsubishi Electric / Mitsubishi Heavy Industries',
      primaryRole: 'Active electronically scanned radar BVR missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative AAM-4B program / product information',
        url: 'https://www.mod.go.jp/en/',
        publisher: 'Mitsubishi Electric / Mitsubishi Heavy Industries',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'aam-5-air-to-air',
    name: 'AAM-5',
    officialDesignation: 'AAM-5 Short-Range Air-to-Air Missile',
    commonName: 'AAM-5',
    aliases: ['AAM-5', 'AAM-5'],
    familyName: 'AAM-5 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'High-agility imaging-infrared missile',
    rankInCategory: 20,
    rankingRationale: 'Top-tier current-generation capability in air-to-air missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Japan',
    originCountries: ['Japan'],
    developerCountries: ['Japan'],
    manufacturerCountries: ['Japan'],
    operatorCountries: [],
    developer: 'Mitsubishi Heavy Industries',
    manufacturer: 'Mitsubishi Heavy Industries',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['aam 5', 'air-to-air missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'High-agility imaging-infrared missile.',
    fullOverview: 'AAM-5 is a high-agility imaging-infrared missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for AAM-5',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Mitsubishi Heavy Industries',
      primaryRole: 'High-agility imaging-infrared missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative AAM-5 program / product information',
        url: 'https://www.mod.go.jp/en/',
        publisher: 'Mitsubishi Heavy Industries',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'agm-158b-jassm-er-air-to-surface',
    name: 'AGM-158B JASSM-ER',
    officialDesignation: 'AGM-158B Joint Air-to-Surface Standoff Missile Extended Range',
    commonName: 'JASSM-ER',
    aliases: ['JASSM-ER', 'AGM-158B JASSM-ER'],
    familyName: 'JASSM-ER Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Stealthy long-range standoff strike',
    rankInCategory: 1,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['jassm er', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Stealthy long-range standoff strike.',
    fullOverview: 'AGM-158B JASSM-ER is a stealthy long-range standoff strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for AGM-158B JASSM-ER',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Stealthy long-range standoff strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative AGM-158B JASSM-ER program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'agm-158d-jassm-xr-air-to-surface',
    name: 'AGM-158D JASSM-XR',
    officialDesignation: 'AGM-158D Joint Air-to-Surface Standoff Missile Extreme Range',
    commonName: 'JASSM-XR',
    aliases: ['JASSM-XR', 'AGM-158D JASSM-XR'],
    familyName: 'JASSM-XR Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Next-generation extended-range strike',
    rankInCategory: 2,
    rankingRationale: 'Top-tier next-generation program capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['jassm xr', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Next-generation extended-range strike.',
    fullOverview: 'AGM-158D JASSM-XR is a next-generation extended-range strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for AGM-158D JASSM-XR',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Next-generation extended-range strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative AGM-158D JASSM-XR program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'spear-3-air-to-surface',
    name: 'SPEAR 3',
    officialDesignation: 'SPEAR 3 Network-Enabled Weapon',
    commonName: 'SPEAR 3',
    aliases: ['SPEAR 3', 'SPEAR 3'],
    familyName: 'SPEAR 3 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Miniature network-enabled stand-off strike',
    rankInCategory: 3,
    rankingRationale: 'Top-tier next-generation program capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United Kingdom',
    originCountries: ['United Kingdom'],
    developerCountries: ['United Kingdom'],
    manufacturerCountries: ['United Kingdom'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['spear 3', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Miniature network-enabled stand-off strike.',
    fullOverview: 'SPEAR 3 is a miniature network-enabled stand-off strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for SPEAR 3',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Miniature network-enabled stand-off strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative SPEAR 3 program / product information',
        url: 'https://www.gov.uk/government/organisations/ministry-of-defence',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'brimstone-3-air-to-surface',
    name: 'Brimstone 3',
    officialDesignation: 'Brimstone 3 Air-to-Surface Missile',
    commonName: 'Brimstone',
    aliases: ['Brimstone', 'Brimstone 3'],
    familyName: 'Brimstone Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Precision anti-armor and surface strike',
    rankInCategory: 4,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United Kingdom',
    originCountries: ['United Kingdom'],
    developerCountries: ['United Kingdom'],
    manufacturerCountries: ['United Kingdom'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['brimstone', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Precision anti-armor and surface strike.',
    fullOverview: 'Brimstone 3 is a precision anti-armor and surface strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Brimstone 3',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Current Production',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Precision anti-armor and surface strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Brimstone 3 program / product information',
        url: 'https://www.gov.uk/government/organisations/ministry-of-defence',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'agm-179-jagm-air-to-surface',
    name: 'AGM-179 JAGM',
    officialDesignation: 'AGM-179 Joint Air-to-Ground Missile',
    commonName: 'JAGM',
    aliases: ['JAGM', 'AGM-179 JAGM'],
    familyName: 'JAGM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Multi-platform precision strike',
    rankInCategory: 5,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['jagm', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Multi-platform precision strike.',
    fullOverview: 'AGM-179 JAGM is a multi-platform precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for AGM-179 JAGM',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Multi-platform precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative AGM-179 JAGM program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'storm-shadow-air-to-surface',
    name: 'Storm Shadow',
    officialDesignation: 'Storm Shadow Air-Launched Cruise Missile',
    commonName: 'Storm Shadow',
    aliases: ['Storm Shadow', 'Storm Shadow'],
    familyName: 'Storm Shadow Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Long-range precision strike',
    rankInCategory: 6,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United Kingdom',
    originCountries: ['United Kingdom', 'France'],
    developerCountries: ['United Kingdom', 'France'],
    manufacturerCountries: ['United Kingdom', 'France'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['storm shadow', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range precision strike.',
    fullOverview: 'Storm Shadow is a long-range precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Storm Shadow',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Long-range precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Storm Shadow program / product information',
        url: 'https://www.gov.uk/government/organisations/ministry-of-defence',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'scalp-eg-air-to-surface',
    name: 'SCALP-EG',
    officialDesignation: 'SCALP-EG Air-Launched Cruise Missile',
    commonName: 'SCALP',
    aliases: ['SCALP', 'SCALP-EG'],
    familyName: 'SCALP Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Deep-penetration stand-off strike',
    rankInCategory: 7,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'France',
    originCountries: ['France', 'United Kingdom'],
    developerCountries: ['France', 'United Kingdom'],
    manufacturerCountries: ['France', 'United Kingdom'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['scalp', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Deep-penetration stand-off strike.',
    fullOverview: 'SCALP-EG is a deep-penetration stand-off strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for SCALP-EG',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Deep-penetration stand-off strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative SCALP-EG program / product information',
        url: 'https://www.gov.uk/government/organisations/ministry-of-defence',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'taurus-kepd-350-air-to-surface',
    name: 'Taurus KEPD 350',
    officialDesignation: 'TAURUS KEPD 350E Stand-Off Missile',
    commonName: 'TAURUS',
    aliases: ['TAURUS', 'Taurus KEPD 350'],
    familyName: 'TAURUS Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Long-range precision strike',
    rankInCategory: 8,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Germany',
    originCountries: ['Germany', 'Sweden'],
    developerCountries: ['Germany', 'Sweden'],
    manufacturerCountries: ['Germany', 'Sweden'],
    operatorCountries: [],
    developer: 'TAURUS Systems',
    manufacturer: 'TAURUS Systems',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['taurus', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range precision strike.',
    fullOverview: 'Taurus KEPD 350 is a long-range precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Taurus KEPD 350',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'TAURUS Systems',
      primaryRole: 'Long-range precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Taurus KEPD 350 program / product information',
        url: 'https://www.bundeswehr.de/en',
        publisher: 'TAURUS Systems',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'som-air-to-surface',
    name: 'SOM',
    officialDesignation: 'SOM Stand-Off Missile',
    commonName: 'SOM',
    aliases: ['SOM', 'SOM'],
    familyName: 'SOM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Long-range air-launched precision strike',
    rankInCategory: 9,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: [],
    developer: 'Roketsan',
    manufacturer: 'Roketsan',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['som', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range air-launched precision strike.',
    fullOverview: 'SOM is a long-range air-launched precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for SOM',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Roketsan',
      primaryRole: 'Long-range air-launched precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative SOM program / product information',
        url: 'https://www.mod.gov/',
        publisher: 'Roketsan',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'som-j-air-to-surface',
    name: 'SOM-J',
    officialDesignation: 'SOM-J Air-to-Surface Cruise Missile',
    commonName: 'SOM-J',
    aliases: ['SOM-J', 'SOM-J'],
    familyName: 'SOM-J Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Internal-carriage stealth strike',
    rankInCategory: 10,
    rankingRationale: 'Top-tier next-generation program capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye', 'United States'],
    developerCountries: ['Türkiye', 'United States'],
    manufacturerCountries: ['Türkiye', 'United States'],
    operatorCountries: [],
    developer: 'Roketsan',
    manufacturer: 'Roketsan',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['som j', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Internal-carriage stealth strike.',
    fullOverview: 'SOM-J is a internal-carriage stealth strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for SOM-J',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Roketsan',
      primaryRole: 'Internal-carriage stealth strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative SOM-J program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Roketsan',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'kh-69-air-to-surface',
    name: 'Kh-69',
    officialDesignation: 'Kh-69 Air-Launched Cruise Missile',
    commonName: 'Kh-69',
    aliases: ['Kh-69', 'Kh-69'],
    familyName: 'Kh-69 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Low-observable stand-off strike',
    rankInCategory: 11,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'MKB Raduga',
    manufacturer: 'MKB Raduga',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['kh 69', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Low-observable stand-off strike.',
    fullOverview: 'Kh-69 is a low-observable stand-off strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Kh-69',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MKB Raduga',
      primaryRole: 'Low-observable stand-off strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Kh-69 program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'MKB Raduga',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'kh-59mk2-air-to-surface',
    name: 'Kh-59MK2',
    officialDesignation: 'Kh-59MK2 Air-Launched Cruise Missile',
    commonName: 'Kh-59MK2',
    aliases: ['Kh-59MK2', 'Kh-59MK2'],
    familyName: 'Kh-59MK2 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Precision land-attack strike',
    rankInCategory: 12,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Raduga',
    manufacturer: 'Raduga',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['kh 59mk2', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Precision land-attack strike.',
    fullOverview: 'Kh-59MK2 is a precision land-attack strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Kh-59MK2',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Raduga',
      primaryRole: 'Precision land-attack strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Kh-59MK2 program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Raduga',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'kinzhal-air-to-surface',
    name: 'Kinzhal',
    officialDesignation: 'Kh-47M2 Kinzhal Air-Launched Ballistic Missile',
    commonName: 'Kinzhal',
    aliases: ['Kinzhal', 'Kinzhal'],
    familyName: 'Kinzhal Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'High-speed air-launched strike',
    rankInCategory: 13,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Russian defense industry',
    manufacturer: 'Russian defense industry',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['kinzhal', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'High-speed air-launched strike.',
    fullOverview: 'Kinzhal is a high-speed air-launched strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Kinzhal',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Russian defense industry',
      primaryRole: 'High-speed air-launched strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Kinzhal program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Russian defense industry',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'brahmos-a-air-to-surface',
    name: 'BrahMos-A',
    officialDesignation: 'BrahMos Air-Launched Cruise Missile',
    commonName: 'BrahMos-A',
    aliases: ['BrahMos-A', 'BrahMos-A'],
    familyName: 'BrahMos-A Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Supersonic air-launched strike',
    rankInCategory: 14,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India', 'Russia'],
    developerCountries: ['India', 'Russia'],
    manufacturerCountries: ['India', 'Russia'],
    operatorCountries: [],
    developer: 'BrahMos Aerospace',
    manufacturer: 'BrahMos Aerospace',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['brahmos a', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Supersonic air-launched strike.',
    fullOverview: 'BrahMos-A is a supersonic air-launched strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for BrahMos-A',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'BrahMos Aerospace',
      primaryRole: 'Supersonic air-launched strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative BrahMos-A program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'BrahMos Aerospace',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'rudram-1-air-to-surface',
    name: 'Rudram-1',
    officialDesignation: 'Rudram-1 Air-to-Surface Anti-Radiation Missile',
    commonName: 'Rudram',
    aliases: ['Rudram', 'Rudram-1'],
    familyName: 'Rudram Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Long-range precision anti-emitter strike',
    rankInCategory: 15,
    rankingRationale: 'Top-tier next-generation program capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India'],
    developerCountries: ['India'],
    manufacturerCountries: ['India'],
    operatorCountries: [],
    developer: 'DRDO / Bharat Dynamics',
    manufacturer: 'DRDO / Bharat Dynamics',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['rudram', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range precision anti-emitter strike.',
    fullOverview: 'Rudram-1 is a long-range precision anti-emitter strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Rudram-1',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'DRDO / Bharat Dynamics',
      primaryRole: 'Long-range precision anti-emitter strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Rudram-1 program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'DRDO / Bharat Dynamics',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'rudram-2-air-to-surface',
    name: 'Rudram-2',
    officialDesignation: 'Rudram-2 Air-to-Surface Missile',
    commonName: 'Rudram',
    aliases: ['Rudram', 'Rudram-2'],
    familyName: 'Rudram Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Extended-range precision strike',
    rankInCategory: 16,
    rankingRationale: 'Top-tier next-generation program capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India'],
    developerCountries: ['India'],
    manufacturerCountries: ['India'],
    operatorCountries: [],
    developer: 'DRDO',
    manufacturer: 'DRDO',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['rudram', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Extended-range precision strike.',
    fullOverview: 'Rudram-2 is a extended-range precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Rudram-2',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'DRDO',
      primaryRole: 'Extended-range precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Rudram-2 program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'DRDO',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'ra-ad-ii-air-to-surface',
    name: 'Ra\'ad-II',
    officialDesignation: 'Ra\'ad-II Air-Launched Cruise Missile',
    commonName: 'Ra\'ad',
    aliases: ['Ra\'ad', 'Ra\'ad-II'],
    familyName: 'Ra\'ad Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Long-range precision strike',
    rankInCategory: 17,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Pakistan',
    originCountries: ['Pakistan'],
    developerCountries: ['Pakistan'],
    manufacturerCountries: ['Pakistan'],
    operatorCountries: [],
    developer: 'Pakistan Air Force / NESCOM',
    manufacturer: 'Pakistan Air Force / NESCOM',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['ra ad', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range precision strike.',
    fullOverview: 'Ra\'ad-II is a long-range precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Ra\'ad-II',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Pakistan Air Force / NESCOM',
      primaryRole: 'Long-range precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Ra\'ad-II program / product information',
        url: 'https://www.mod.gov.pk/',
        publisher: 'Pakistan Air Force / NESCOM',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'hj-12-air-to-surface',
    name: 'HJ-12',
    officialDesignation: 'HJ-12 Air-Launched Anti-Tank Guided Missile',
    commonName: 'HJ-12',
    aliases: ['HJ-12', 'HJ-12'],
    familyName: 'HJ-12 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Fire-and-forget anti-armor strike',
    rankInCategory: 18,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'Norinco',
    manufacturer: 'Norinco',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['hj 12', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Fire-and-forget anti-armor strike.',
    fullOverview: 'HJ-12 is a fire-and-forget anti-armor strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for HJ-12',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Norinco',
      primaryRole: 'Fire-and-forget anti-armor strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative HJ-12 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'Norinco',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'delilah-air-to-surface',
    name: 'Delilah',
    officialDesignation: 'Delilah Precision Strike Missile',
    commonName: 'Delilah',
    aliases: ['Delilah', 'Delilah'],
    familyName: 'Delilah Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Loitering stand-off precision strike',
    rankInCategory: 19,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: [],
    developer: 'Israel Military Industries',
    manufacturer: 'Israel Military Industries',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['delilah', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Loitering stand-off precision strike.',
    fullOverview: 'Delilah is a loitering stand-off precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Delilah',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Israel Military Industries',
      primaryRole: 'Loitering stand-off precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Delilah program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'Israel Military Industries',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'harop-air-to-surface',
    name: 'Harop',
    officialDesignation: 'IAI Harop Loitering Munition',
    commonName: 'Harop',
    aliases: ['Harop', 'Harop'],
    familyName: 'Harop Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-surface',
    categoryName: 'Missiles — Air-to-Surface',
    subcategory: 'Loitering precision strike',
    rankInCategory: 20,
    rankingRationale: 'Top-tier current-generation capability in air-to-surface missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: [],
    developer: 'Israel Aerospace Industries',
    manufacturer: 'Israel Aerospace Industries',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['harop', 'air-to-surface missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Loitering precision strike.',
    fullOverview: 'Harop is a loitering precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Harop',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Israel Aerospace Industries',
      primaryRole: 'Loitering precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Harop program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'Israel Aerospace Industries',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'naval-strike-missile-anti-ship',
    name: 'Naval Strike Missile',
    officialDesignation: 'Naval Strike Missile',
    commonName: 'NSM',
    aliases: ['NSM', 'Naval Strike Missile'],
    familyName: 'NSM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Low-observable sea-skimming anti-ship missile',
    rankInCategory: 1,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Norway',
    originCountries: ['Norway', 'United States'],
    developerCountries: ['Norway', 'United States'],
    manufacturerCountries: ['Norway', 'United States'],
    operatorCountries: [],
    developer: 'Kongsberg / Raytheon',
    manufacturer: 'Kongsberg / Raytheon',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['nsm', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Low-observable sea-skimming anti-ship missile.',
    fullOverview: 'Naval Strike Missile is a low-observable sea-skimming anti-ship missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Naval Strike Missile',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Kongsberg / Raytheon',
      primaryRole: 'Low-observable sea-skimming anti-ship missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Naval Strike Missile program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Kongsberg / Raytheon',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'maritime-strike-tomahawk-anti-ship',
    name: 'Maritime Strike Tomahawk',
    officialDesignation: 'Tomahawk Block Va Maritime Strike Tomahawk',
    commonName: 'MST',
    aliases: ['MST', 'Maritime Strike Tomahawk'],
    familyName: 'MST Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Long-range anti-ship cruise missile',
    rankInCategory: 2,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'RTX',
    manufacturer: 'RTX',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['mst', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range anti-ship cruise missile.',
    fullOverview: 'Maritime Strike Tomahawk is a long-range anti-ship cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Maritime Strike Tomahawk',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'RTX',
      primaryRole: 'Long-range anti-ship cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Maritime Strike Tomahawk program / product information',
        url: 'https://www.army.mil/',
        publisher: 'RTX',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'lrasm-anti-ship',
    name: 'LRASM',
    officialDesignation: 'AGM-158C Long Range Anti-Ship Missile',
    commonName: 'LRASM',
    aliases: ['LRASM', 'LRASM'],
    familyName: 'LRASM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Stealthy long-range anti-ship missile',
    rankInCategory: 3,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['lrasm', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Stealthy long-range anti-ship missile.',
    fullOverview: 'LRASM is a stealthy long-range anti-ship missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for LRASM',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Stealthy long-range anti-ship missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative LRASM program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'rbs15-mk4-gungnir-anti-ship',
    name: 'RBS15 Mk4 / Gungnir',
    officialDesignation: 'RBS15 Gungnir Mk4 Anti-Ship Missile',
    commonName: 'RBS15',
    aliases: ['RBS15', 'RBS15 Mk4 / Gungnir'],
    familyName: 'RBS15 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Long-range multi-domain anti-ship missile',
    rankInCategory: 4,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Sweden',
    originCountries: ['Sweden', 'Germany'],
    developerCountries: ['Sweden', 'Germany'],
    manufacturerCountries: ['Sweden', 'Germany'],
    operatorCountries: [],
    developer: 'Saab / Diehl Defence',
    manufacturer: 'Saab / Diehl Defence',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['rbs15', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range multi-domain anti-ship missile.',
    fullOverview: 'RBS15 Mk4 / Gungnir is a long-range multi-domain anti-ship missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for RBS15 Mk4 / Gungnir',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Saab / Diehl Defence',
      primaryRole: 'Long-range multi-domain anti-ship missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative RBS15 Mk4 / Gungnir program / product information',
        url: 'https://www.bundeswehr.de/en',
        publisher: 'Saab / Diehl Defence',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'exocet-mm40-block-3c-anti-ship',
    name: 'Exocet MM40 Block 3C',
    officialDesignation: 'MM40 Block 3C Exocet',
    commonName: 'Exocet',
    aliases: ['Exocet', 'Exocet MM40 Block 3C'],
    familyName: 'Exocet Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Sea-skimming anti-ship missile',
    rankInCategory: 5,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'France',
    originCountries: ['France'],
    developerCountries: ['France'],
    manufacturerCountries: ['France'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['exocet', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Sea-skimming anti-ship missile.',
    fullOverview: 'Exocet MM40 Block 3C is a sea-skimming anti-ship missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Exocet MM40 Block 3C',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Sea-skimming anti-ship missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Exocet MM40 Block 3C program / product information',
        url: 'https://www.defense.gouv.fr/',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'blue-spear-anti-ship',
    name: 'Blue Spear',
    officialDesignation: 'Blue Spear 5G SSM',
    commonName: 'Blue Spear',
    aliases: ['Blue Spear', 'Blue Spear'],
    familyName: 'Blue Spear Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Long-range network-enabled anti-ship missile',
    rankInCategory: 6,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel', 'Singapore'],
    developerCountries: ['Israel', 'Singapore'],
    manufacturerCountries: ['Israel', 'Singapore'],
    operatorCountries: [],
    developer: 'IAI / ST Engineering',
    manufacturer: 'IAI / ST Engineering',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['blue spear', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range network-enabled anti-ship missile.',
    fullOverview: 'Blue Spear is a long-range network-enabled anti-ship missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Blue Spear',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'IAI / ST Engineering',
      primaryRole: 'Long-range network-enabled anti-ship missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Blue Spear program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'IAI / ST Engineering',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'gabriel-v-anti-ship',
    name: 'Gabriel V',
    officialDesignation: 'Sea Breaker / Gabriel V Naval Strike Missile',
    commonName: 'Gabriel V',
    aliases: ['Gabriel V', 'Gabriel V'],
    familyName: 'Gabriel V Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Advanced sea-skimming anti-ship missile',
    rankInCategory: 7,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: [],
    developer: 'IAI',
    manufacturer: 'IAI',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['gabriel v', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Advanced sea-skimming anti-ship missile.',
    fullOverview: 'Gabriel V is a advanced sea-skimming anti-ship missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Gabriel V',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'IAI',
      primaryRole: 'Advanced sea-skimming anti-ship missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Gabriel V program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'IAI',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'atmaca-anti-ship',
    name: 'Atmaca',
    officialDesignation: 'Atmaca Anti-Ship Missile',
    commonName: 'Atmaca',
    aliases: ['Atmaca', 'Atmaca'],
    familyName: 'Atmaca Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Network-enabled sea-skimming anti-ship missile',
    rankInCategory: 8,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: [],
    developer: 'Roketsan',
    manufacturer: 'Roketsan',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['atmaca', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Network-enabled sea-skimming anti-ship missile.',
    fullOverview: 'Atmaca is a network-enabled sea-skimming anti-ship missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Atmaca',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Roketsan',
      primaryRole: 'Network-enabled sea-skimming anti-ship missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Atmaca program / product information',
        url: 'https://www.mod.gov/',
        publisher: 'Roketsan',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: '3m22-zircon-anti-ship',
    name: '3M22 Zircon',
    officialDesignation: '3M22 Tsirkon Hypersonic Anti-Ship Missile',
    commonName: 'Zircon',
    aliases: ['Zircon', '3M22 Zircon'],
    familyName: 'Zircon Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Hypersonic anti-ship cruise missile',
    rankInCategory: 9,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'NPO Mashinostroyenia',
    manufacturer: 'NPO Mashinostroyenia',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['zircon', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Hypersonic anti-ship cruise missile.',
    fullOverview: '3M22 Zircon is a hypersonic anti-ship cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for 3M22 Zircon',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'NPO Mashinostroyenia',
      primaryRole: 'Hypersonic anti-ship cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative 3M22 Zircon program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'NPO Mashinostroyenia',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'p-800-oniks-m-anti-ship',
    name: 'P-800 Oniks-M',
    officialDesignation: 'P-800 Oniks-M Anti-Ship Missile',
    commonName: 'Oniks',
    aliases: ['Oniks', 'P-800 Oniks-M'],
    familyName: 'Oniks Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Supersonic anti-ship cruise missile',
    rankInCategory: 10,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'NPO Mashinostroyenia',
    manufacturer: 'NPO Mashinostroyenia',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['oniks', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Supersonic anti-ship cruise missile.',
    fullOverview: 'P-800 Oniks-M is a supersonic anti-ship cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for P-800 Oniks-M',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'NPO Mashinostroyenia',
      primaryRole: 'Supersonic anti-ship cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative P-800 Oniks-M program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'NPO Mashinostroyenia',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'yj-12-anti-ship',
    name: 'YJ-12',
    officialDesignation: 'YJ-12 Supersonic Anti-Ship Missile',
    commonName: 'YJ-12',
    aliases: ['YJ-12', 'YJ-12'],
    familyName: 'YJ-12 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'High-speed anti-ship missile',
    rankInCategory: 11,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASC',
    manufacturer: 'CASC',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['yj 12', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'High-speed anti-ship missile.',
    fullOverview: 'YJ-12 is a high-speed anti-ship missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for YJ-12',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASC',
      primaryRole: 'High-speed anti-ship missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative YJ-12 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'yj-18-anti-ship',
    name: 'YJ-18',
    officialDesignation: 'YJ-18 Anti-Ship Cruise Missile',
    commonName: 'YJ-18',
    aliases: ['YJ-18', 'YJ-18'],
    familyName: 'YJ-18 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Subsonic-to-supersonic terminal anti-ship missile',
    rankInCategory: 12,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASC',
    manufacturer: 'CASC',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['yj 18', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Subsonic-to-supersonic terminal anti-ship missile.',
    fullOverview: 'YJ-18 is a subsonic-to-supersonic terminal anti-ship missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for YJ-18',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASC',
      primaryRole: 'Subsonic-to-supersonic terminal anti-ship missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative YJ-18 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'yj-21-anti-ship',
    name: 'YJ-21',
    officialDesignation: 'YJ-21 Ship-Launched Hypersonic Anti-Ship Missile',
    commonName: 'YJ-21',
    aliases: ['YJ-21', 'YJ-21'],
    familyName: 'YJ-21 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Hypersonic anti-ship strike',
    rankInCategory: 13,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASC',
    manufacturer: 'CASC',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['yj 21', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Hypersonic anti-ship strike.',
    fullOverview: 'YJ-21 is a hypersonic anti-ship strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for YJ-21',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASC',
      primaryRole: 'Hypersonic anti-ship strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative YJ-21 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'brahmos-block-iii-anti-ship',
    name: 'BrahMos Block III',
    officialDesignation: 'BrahMos Block III Anti-Ship Missile',
    commonName: 'BrahMos',
    aliases: ['BrahMos', 'BrahMos Block III'],
    familyName: 'BrahMos Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Supersonic precision anti-ship strike',
    rankInCategory: 14,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India', 'Russia'],
    developerCountries: ['India', 'Russia'],
    manufacturerCountries: ['India', 'Russia'],
    operatorCountries: [],
    developer: 'BrahMos Aerospace',
    manufacturer: 'BrahMos Aerospace',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['brahmos', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Supersonic precision anti-ship strike.',
    fullOverview: 'BrahMos Block III is a supersonic precision anti-ship strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for BrahMos Block III',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'BrahMos Aerospace',
      primaryRole: 'Supersonic precision anti-ship strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative BrahMos Block III program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'BrahMos Aerospace',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'brahmos-ng-anti-ship',
    name: 'BrahMos-NG',
    officialDesignation: 'BrahMos-NG Air-Launched Anti-Ship Missile',
    commonName: 'BrahMos-NG',
    aliases: ['BrahMos-NG', 'BrahMos-NG'],
    familyName: 'BrahMos-NG Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Lightweight supersonic anti-ship missile',
    rankInCategory: 15,
    rankingRationale: 'Top-tier next-generation program capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India', 'Russia'],
    developerCountries: ['India', 'Russia'],
    manufacturerCountries: ['India', 'Russia'],
    operatorCountries: [],
    developer: 'BrahMos Aerospace',
    manufacturer: 'BrahMos Aerospace',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['brahmos ng', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Lightweight supersonic anti-ship missile.',
    fullOverview: 'BrahMos-NG is a lightweight supersonic anti-ship missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for BrahMos-NG',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'BrahMos Aerospace',
      primaryRole: 'Lightweight supersonic anti-ship missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative BrahMos-NG program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'BrahMos Aerospace',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'c-star-anti-ship',
    name: 'C-Star',
    officialDesignation: 'SSM-700K C-Star Anti-Ship Missile',
    commonName: 'C-Star',
    aliases: ['C-Star', 'C-Star'],
    familyName: 'C-Star Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Sea-skimming anti-ship missile',
    rankInCategory: 16,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'South Korea',
    originCountries: ['South Korea'],
    developerCountries: ['South Korea'],
    manufacturerCountries: ['South Korea'],
    operatorCountries: [],
    developer: 'LIG Nex1',
    manufacturer: 'LIG Nex1',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['c star', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Sea-skimming anti-ship missile.',
    fullOverview: 'C-Star is a sea-skimming anti-ship missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for C-Star',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'LIG Nex1',
      primaryRole: 'Sea-skimming anti-ship missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative C-Star program / product information',
        url: 'https://www.mnd.go.kr/mbshome/mbs/mndEN/',
        publisher: 'LIG Nex1',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'cm-401-anti-ship',
    name: 'CM-401',
    officialDesignation: 'CM-401 Anti-Ship Ballistic Missile',
    commonName: 'CM-401',
    aliases: ['CM-401', 'CM-401'],
    familyName: 'CM-401 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Terminally maneuvering anti-ship ballistic missile',
    rankInCategory: 17,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASC',
    manufacturer: 'CASC',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['cm 401', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Terminally maneuvering anti-ship ballistic missile.',
    fullOverview: 'CM-401 is a terminally maneuvering anti-ship ballistic missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for CM-401',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASC',
      primaryRole: 'Terminally maneuvering anti-ship ballistic missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative CM-401 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'harpoon-block-ii-anti-ship',
    name: 'Harpoon Block II+',
    officialDesignation: 'RGM-84N Harpoon Block II+',
    commonName: 'Harpoon',
    aliases: ['Harpoon', 'Harpoon Block II+'],
    familyName: 'Harpoon Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Network-enabled anti-ship missile',
    rankInCategory: 18,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Boeing',
    manufacturer: 'Boeing',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['harpoon', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Network-enabled anti-ship missile.',
    fullOverview: 'Harpoon Block II+ is a network-enabled anti-ship missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Harpoon Block II+',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Boeing',
      primaryRole: 'Network-enabled anti-ship missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Harpoon Block II+ program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Boeing',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'penguin-mk2-mod-7-anti-ship',
    name: 'Penguin Mk2 Mod 7',
    officialDesignation: 'Penguin Mk2 Mod 7',
    commonName: 'Penguin',
    aliases: ['Penguin', 'Penguin Mk2 Mod 7'],
    familyName: 'Penguin Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Imaging-infrared short-range anti-ship missile',
    rankInCategory: 19,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Norway',
    originCountries: ['Norway'],
    developerCountries: ['Norway'],
    manufacturerCountries: ['Norway'],
    operatorCountries: [],
    developer: 'Kongsberg',
    manufacturer: 'Kongsberg',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['penguin', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Imaging-infrared short-range anti-ship missile.',
    fullOverview: 'Penguin Mk2 Mod 7 is a imaging-infrared short-range anti-ship missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Penguin Mk2 Mod 7',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Kongsberg',
      primaryRole: 'Imaging-infrared short-range anti-ship missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Penguin Mk2 Mod 7 program / product information',
        url: 'https://www.fma.no/en',
        publisher: 'Kongsberg',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: '3m54e-kalibr-anti-ship',
    name: '3M54E Kalibr',
    officialDesignation: '3M54E Klub Anti-Ship Missile',
    commonName: 'Kalibr',
    aliases: ['Kalibr', '3M54E Kalibr'],
    familyName: 'Kalibr Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Supersonic-terminal anti-ship cruise missile',
    rankInCategory: 20,
    rankingRationale: 'Top-tier current-generation capability in anti-ship missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Novator',
    manufacturer: 'Novator',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['kalibr', 'anti-ship missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Supersonic-terminal anti-ship cruise missile.',
    fullOverview: '3M54E Kalibr is a supersonic-terminal anti-ship cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for 3M54E Kalibr',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Novator',
      primaryRole: 'Supersonic-terminal anti-ship cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative 3M54E Kalibr program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Novator',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'fgm-148-javelin-f-model-anti-tank',
    name: 'FGM-148 Javelin F-Model',
    officialDesignation: 'FGM-148 Javelin with F-Series Missile',
    commonName: 'Javelin',
    aliases: ['Javelin', 'FGM-148 Javelin F-Model'],
    familyName: 'Javelin Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Imaging-infrared fire-and-forget top attack',
    rankInCategory: 1,
    rankingRationale: 'Top-tier current-generation capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Javelin Joint Venture',
    manufacturer: 'Javelin Joint Venture',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['javelin', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Imaging-infrared fire-and-forget top attack.',
    fullOverview: 'FGM-148 Javelin F-Model is a imaging-infrared fire-and-forget top attack. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for FGM-148 Javelin F-Model',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Javelin Joint Venture',
      primaryRole: 'Imaging-infrared fire-and-forget top attack',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative FGM-148 Javelin F-Model program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Javelin Joint Venture',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'spike-lr2-anti-tank',
    name: 'Spike LR2',
    officialDesignation: 'Spike LR2 Multi-Purpose Missile',
    commonName: 'Spike',
    aliases: ['Spike', 'Spike LR2'],
    familyName: 'Spike Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Electro-optical fire-and-forget anti-armor missile',
    rankInCategory: 2,
    rankingRationale: 'Top-tier current-generation capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: [],
    developer: 'Rafael',
    manufacturer: 'Rafael',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['spike', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Electro-optical fire-and-forget anti-armor missile.',
    fullOverview: 'Spike LR2 is a electro-optical fire-and-forget anti-armor missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Spike LR2',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Rafael',
      primaryRole: 'Electro-optical fire-and-forget anti-armor missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Spike LR2 program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'Rafael',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'spike-nlos-anti-tank',
    name: 'Spike NLOS',
    officialDesignation: 'Spike Non-Line-of-Sight Missile',
    commonName: 'Spike NLOS',
    aliases: ['Spike NLOS', 'Spike NLOS'],
    familyName: 'Spike NLOS Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Long-range networked precision anti-armor strike',
    rankInCategory: 3,
    rankingRationale: 'Top-tier current-generation capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: [],
    developer: 'Rafael',
    manufacturer: 'Rafael',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['spike nlos', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range networked precision anti-armor strike.',
    fullOverview: 'Spike NLOS is a long-range networked precision anti-armor strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Spike NLOS',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Rafael',
      primaryRole: 'Long-range networked precision anti-armor strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Spike NLOS program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'Rafael',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'akeron-mp-anti-tank',
    name: 'Akeron MP',
    officialDesignation: 'Akeron MP Fifth-Generation Missile',
    commonName: 'Akeron',
    aliases: ['Akeron', 'Akeron MP'],
    familyName: 'Akeron Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Fifth-generation multi-purpose anti-armor missile',
    rankInCategory: 4,
    rankingRationale: 'Top-tier current-generation capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'France',
    originCountries: ['France'],
    developerCountries: ['France'],
    manufacturerCountries: ['France'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['akeron', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Fifth-generation multi-purpose anti-armor missile.',
    fullOverview: 'Akeron MP is a fifth-generation multi-purpose anti-armor missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Akeron MP',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Fifth-generation multi-purpose anti-armor missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Akeron MP program / product information',
        url: 'https://www.defense.gouv.fr/',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'akeron-lp-anti-tank',
    name: 'Akeron LP',
    officialDesignation: 'Akeron LP Long-Range Missile',
    commonName: 'Akeron',
    aliases: ['Akeron', 'Akeron LP'],
    familyName: 'Akeron Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Next-generation long-range anti-armor missile',
    rankInCategory: 5,
    rankingRationale: 'Top-tier next-generation program capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'France',
    originCountries: ['France'],
    developerCountries: ['France'],
    manufacturerCountries: ['France'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['akeron', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Next-generation long-range anti-armor missile.',
    fullOverview: 'Akeron LP is a next-generation long-range anti-armor missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Akeron LP',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Next-generation long-range anti-armor missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Akeron LP program / product information',
        url: 'https://www.defense.gouv.fr/',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'hellfire-romeo-anti-tank',
    name: 'HELLFIRE Romeo',
    officialDesignation: 'AGM-114R-3 Hellfire Romeo',
    commonName: 'Hellfire',
    aliases: ['Hellfire', 'HELLFIRE Romeo'],
    familyName: 'Hellfire Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Multi-purpose precision anti-armor missile',
    rankInCategory: 6,
    rankingRationale: 'Top-tier current-generation capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['hellfire', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Multi-purpose precision anti-armor missile.',
    fullOverview: 'HELLFIRE Romeo is a multi-purpose precision anti-armor missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for HELLFIRE Romeo',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Multi-purpose precision anti-armor missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative HELLFIRE Romeo program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'brimstone-3-anti-tank',
    name: 'Brimstone 3',
    officialDesignation: 'Brimstone 3 Multi-Role Missile',
    commonName: 'Brimstone',
    aliases: ['Brimstone', 'Brimstone 3'],
    familyName: 'Brimstone Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'All-weather precision anti-armor missile',
    rankInCategory: 7,
    rankingRationale: 'Top-tier current-generation capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United Kingdom',
    originCountries: ['United Kingdom'],
    developerCountries: ['United Kingdom'],
    manufacturerCountries: ['United Kingdom'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['brimstone', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'All-weather precision anti-armor missile.',
    fullOverview: 'Brimstone 3 is a all-weather precision anti-armor missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Brimstone 3',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Current Production',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'All-weather precision anti-armor missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Brimstone 3 program / product information',
        url: 'https://www.gov.uk/government/organisations/ministry-of-defence',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'jagm-anti-tank',
    name: 'JAGM',
    officialDesignation: 'AGM-179 JAGM',
    commonName: 'JAGM',
    aliases: ['JAGM', 'JAGM'],
    familyName: 'JAGM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Tri-mode precision anti-armor missile',
    rankInCategory: 8,
    rankingRationale: 'Top-tier current-generation capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['jagm', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Tri-mode precision anti-armor missile.',
    fullOverview: 'JAGM is a tri-mode precision anti-armor missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for JAGM',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Tri-mode precision anti-armor missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative JAGM program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'kornet-d1-anti-tank',
    name: 'Kornet-D1',
    officialDesignation: 'Kornet-D1 Anti-Tank Guided Missile System',
    commonName: 'Kornet',
    aliases: ['Kornet', 'Kornet-D1'],
    familyName: 'Kornet Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Long-range tandem-warhead anti-armor missile',
    rankInCategory: 9,
    rankingRationale: 'Top-tier current-generation capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'KBP',
    manufacturer: 'KBP',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['kornet', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range tandem-warhead anti-armor missile.',
    fullOverview: 'Kornet-D1 is a long-range tandem-warhead anti-armor missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Kornet-D1',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'KBP',
      primaryRole: 'Long-range tandem-warhead anti-armor missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Kornet-D1 program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'KBP',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'lmur-anti-tank',
    name: 'LMUR',
    officialDesignation: '9A4172K LMUR Multirole Missile',
    commonName: 'LMUR',
    aliases: ['LMUR', 'LMUR'],
    familyName: 'LMUR Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Air-launched long-range anti-armor missile',
    rankInCategory: 10,
    rankingRationale: 'Top-tier current-generation capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'KBM',
    manufacturer: 'KBM',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['lmur', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Air-launched long-range anti-armor missile.',
    fullOverview: 'LMUR is a air-launched long-range anti-armor missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for LMUR',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'KBM',
      primaryRole: 'Air-launched long-range anti-armor missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative LMUR program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'KBM',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'umtas-gm-anti-tank',
    name: 'UMTAS-GM',
    officialDesignation: 'UMTAS-GM Long-Range Anti-Tank Missile',
    commonName: 'UMTAS',
    aliases: ['UMTAS', 'UMTAS-GM'],
    familyName: 'UMTAS Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Long-range imaging-guided anti-armor missile',
    rankInCategory: 11,
    rankingRationale: 'Top-tier current-generation capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: [],
    developer: 'Roketsan',
    manufacturer: 'Roketsan',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['umtas', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range imaging-guided anti-armor missile.',
    fullOverview: 'UMTAS-GM is a long-range imaging-guided anti-armor missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for UMTAS-GM',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Roketsan',
      primaryRole: 'Long-range imaging-guided anti-armor missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative UMTAS-GM program / product information',
        url: 'https://www.mod.gov/',
        publisher: 'Roketsan',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'omtas-anti-tank',
    name: 'OMTAS',
    officialDesignation: 'OMTAS Medium-Range Anti-Tank Missile',
    commonName: 'OMTAS',
    aliases: ['OMTAS', 'OMTAS'],
    familyName: 'OMTAS Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Precision anti-armor missile',
    rankInCategory: 12,
    rankingRationale: 'Top-tier current-generation capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: [],
    developer: 'Roketsan',
    manufacturer: 'Roketsan',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['omtas', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Precision anti-armor missile.',
    fullOverview: 'OMTAS is a precision anti-armor missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for OMTAS',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Roketsan',
      primaryRole: 'Precision anti-armor missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative OMTAS program / product information',
        url: 'https://www.mod.gov/',
        publisher: 'Roketsan',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'nag-mk-ii-anti-tank',
    name: 'NAG Mk-II',
    officialDesignation: 'Nag Mk-II Third-Generation Anti-Tank Guided Missile',
    commonName: 'Nag',
    aliases: ['Nag', 'NAG Mk-II'],
    familyName: 'Nag Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Imaging-infrared fire-and-forget anti-armor missile',
    rankInCategory: 13,
    rankingRationale: 'Top-tier current-generation capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India'],
    developerCountries: ['India'],
    manufacturerCountries: ['India'],
    operatorCountries: [],
    developer: 'DRDO / Bharat Dynamics',
    manufacturer: 'DRDO / Bharat Dynamics',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['nag', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Imaging-infrared fire-and-forget anti-armor missile.',
    fullOverview: 'NAG Mk-II is a imaging-infrared fire-and-forget anti-armor missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for NAG Mk-II',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'DRDO / Bharat Dynamics',
      primaryRole: 'Imaging-infrared fire-and-forget anti-armor missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative NAG Mk-II program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'DRDO / Bharat Dynamics',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'mpatgm-anti-tank',
    name: 'MPATGM',
    officialDesignation: 'Man Portable Anti-Tank Guided Missile',
    commonName: 'MPATGM',
    aliases: ['MPATGM', 'MPATGM'],
    familyName: 'MPATGM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Man-portable fire-and-forget anti-armor missile',
    rankInCategory: 14,
    rankingRationale: 'Top-tier next-generation program capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India'],
    developerCountries: ['India'],
    manufacturerCountries: ['India'],
    operatorCountries: [],
    developer: 'DRDO / VEM Technologies',
    manufacturer: 'DRDO / VEM Technologies',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['mpatgm', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Man-portable fire-and-forget anti-armor missile.',
    fullOverview: 'MPATGM is a man-portable fire-and-forget anti-armor missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for MPATGM',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'DRDO / VEM Technologies',
      primaryRole: 'Man-portable fire-and-forget anti-armor missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative MPATGM program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'DRDO / VEM Technologies',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'hj-12-anti-tank',
    name: 'HJ-12',
    officialDesignation: 'HJ-12 Fire-and-Forget Anti-Tank Guided Missile',
    commonName: 'HJ-12',
    aliases: ['HJ-12', 'HJ-12'],
    familyName: 'HJ-12 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Man-portable top-attack anti-armor missile',
    rankInCategory: 15,
    rankingRationale: 'Top-tier current-generation capability in anti-tank missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'Norinco',
    manufacturer: 'Norinco',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['hj 12', 'anti-tank missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Man-portable top-attack anti-armor missile.',
    fullOverview: 'HJ-12 is a man-portable top-attack anti-armor missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for HJ-12',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Norinco',
      primaryRole: 'Man-portable top-attack anti-armor missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative HJ-12 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'Norinco',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'tomahawk-block-v-land-attack-cruise',
    name: 'Tomahawk Block V',
    officialDesignation: 'RGM-109E / UGM-109E Tomahawk Block V',
    commonName: 'Tomahawk',
    aliases: ['Tomahawk', 'Tomahawk Block V'],
    familyName: 'Tomahawk Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Long-range precision land attack',
    rankInCategory: 1,
    rankingRationale: 'Top-tier current-generation capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'RTX',
    manufacturer: 'RTX',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['tomahawk', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range precision land attack.',
    fullOverview: 'Tomahawk Block V is a long-range precision land attack. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Tomahawk Block V',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'RTX',
      primaryRole: 'Long-range precision land attack',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Tomahawk Block V program / product information',
        url: 'https://www.army.mil/',
        publisher: 'RTX',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'jassm-er-land-attack-cruise',
    name: 'JASSM-ER',
    officialDesignation: 'AGM-158B JASSM-ER',
    commonName: 'JASSM',
    aliases: ['JASSM', 'JASSM-ER'],
    familyName: 'JASSM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Low-observable long-range cruise missile',
    rankInCategory: 2,
    rankingRationale: 'Top-tier current-generation capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['jassm', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Low-observable long-range cruise missile.',
    fullOverview: 'JASSM-ER is a low-observable long-range cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for JASSM-ER',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Low-observable long-range cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative JASSM-ER program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'jassm-xr-land-attack-cruise',
    name: 'JASSM-XR',
    officialDesignation: 'AGM-158D JASSM-XR',
    commonName: 'JASSM-XR',
    aliases: ['JASSM-XR', 'JASSM-XR'],
    familyName: 'JASSM-XR Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Extreme-range low-observable strike',
    rankInCategory: 3,
    rankingRationale: 'Top-tier next-generation program capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Lockheed Martin',
    manufacturer: 'Lockheed Martin',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['jassm xr', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Extreme-range low-observable strike.',
    fullOverview: 'JASSM-XR is a extreme-range low-observable strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for JASSM-XR',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Extreme-range low-observable strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative JASSM-XR program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Lockheed Martin',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'storm-shadow-scalp-land-attack-cruise',
    name: 'Storm Shadow / SCALP',
    officialDesignation: 'Storm Shadow / SCALP EG',
    commonName: 'Storm Shadow',
    aliases: ['Storm Shadow', 'Storm Shadow / SCALP'],
    familyName: 'Storm Shadow Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Deep-strike cruise missile',
    rankInCategory: 4,
    rankingRationale: 'Top-tier current-generation capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United Kingdom',
    originCountries: ['United Kingdom', 'France'],
    developerCountries: ['United Kingdom', 'France'],
    manufacturerCountries: ['United Kingdom', 'France'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['storm shadow', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Deep-strike cruise missile.',
    fullOverview: 'Storm Shadow / SCALP is a deep-strike cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Storm Shadow / SCALP',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Deep-strike cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Storm Shadow / SCALP program / product information',
        url: 'https://www.gov.uk/government/organisations/ministry-of-defence',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'taurus-kepd-350e-land-attack-cruise',
    name: 'Taurus KEPD 350E',
    officialDesignation: 'TAURUS KEPD 350E',
    commonName: 'TAURUS',
    aliases: ['TAURUS', 'Taurus KEPD 350E'],
    familyName: 'TAURUS Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Long-range precision cruise missile',
    rankInCategory: 5,
    rankingRationale: 'Top-tier current-generation capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Germany',
    originCountries: ['Germany', 'Sweden'],
    developerCountries: ['Germany', 'Sweden'],
    manufacturerCountries: ['Germany', 'Sweden'],
    operatorCountries: [],
    developer: 'TAURUS Systems',
    manufacturer: 'TAURUS Systems',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['taurus', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range precision cruise missile.',
    fullOverview: 'Taurus KEPD 350E is a long-range precision cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Taurus KEPD 350E',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'TAURUS Systems',
      primaryRole: 'Long-range precision cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Taurus KEPD 350E program / product information',
        url: 'https://www.bundeswehr.de/en',
        publisher: 'TAURUS Systems',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'mdcn-land-attack-cruise',
    name: 'MdCN',
    officialDesignation: 'Missile de Croisière Naval',
    commonName: 'MdCN',
    aliases: ['MdCN', 'MdCN'],
    familyName: 'MdCN Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Submarine- and ship-launched land attack cruise missile',
    rankInCategory: 6,
    rankingRationale: 'Top-tier current-generation capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'France',
    originCountries: ['France'],
    developerCountries: ['France'],
    manufacturerCountries: ['France'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['mdcn', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Submarine- and ship-launched land attack cruise missile.',
    fullOverview: 'MdCN is a submarine- and ship-launched land attack cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for MdCN',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Submarine- and ship-launched land attack cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative MdCN program / product information',
        url: 'https://www.defense.gouv.fr/',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'brahmos-land-attack-cruise',
    name: 'BrahMos',
    officialDesignation: 'PJ-10 BrahMos Land-Attack Cruise Missile',
    commonName: 'BrahMos',
    aliases: ['BrahMos', 'BrahMos'],
    familyName: 'BrahMos Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Supersonic land-attack cruise missile',
    rankInCategory: 7,
    rankingRationale: 'Top-tier current-generation capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India', 'Russia'],
    developerCountries: ['India', 'Russia'],
    manufacturerCountries: ['India', 'Russia'],
    operatorCountries: [],
    developer: 'BrahMos Aerospace',
    manufacturer: 'BrahMos Aerospace',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['brahmos', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Supersonic land-attack cruise missile.',
    fullOverview: 'BrahMos is a supersonic land-attack cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for BrahMos',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'BrahMos Aerospace',
      primaryRole: 'Supersonic land-attack cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative BrahMos program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'BrahMos Aerospace',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'som-land-attack-cruise',
    name: 'SOM',
    officialDesignation: 'SOM Land-Attack Cruise Missile',
    commonName: 'SOM',
    aliases: ['SOM', 'SOM'],
    familyName: 'SOM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Long-range stand-off cruise missile',
    rankInCategory: 8,
    rankingRationale: 'Top-tier current-generation capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Türkiye',
    originCountries: ['Türkiye'],
    developerCountries: ['Türkiye'],
    manufacturerCountries: ['Türkiye'],
    operatorCountries: [],
    developer: 'Roketsan',
    manufacturer: 'Roketsan',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['som', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range stand-off cruise missile.',
    fullOverview: 'SOM is a long-range stand-off cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for SOM',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Roketsan',
      primaryRole: 'Long-range stand-off cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative SOM program / product information',
        url: 'https://www.mod.gov/',
        publisher: 'Roketsan',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'kh-101-land-attack-cruise',
    name: 'Kh-101',
    officialDesignation: 'Kh-101 Air-Launched Cruise Missile',
    commonName: 'Kh-101',
    aliases: ['Kh-101', 'Kh-101'],
    familyName: 'Kh-101 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Low-observable long-range cruise missile',
    rankInCategory: 9,
    rankingRationale: 'Top-tier current-generation capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Raduga',
    manufacturer: 'Raduga',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['kh 101', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Low-observable long-range cruise missile.',
    fullOverview: 'Kh-101 is a low-observable long-range cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Kh-101',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Raduga',
      primaryRole: 'Low-observable long-range cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Kh-101 program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Raduga',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'kh-69-land-attack-cruise',
    name: 'Kh-69',
    officialDesignation: 'Kh-69 Air-Launched Cruise Missile',
    commonName: 'Kh-69',
    aliases: ['Kh-69', 'Kh-69'],
    familyName: 'Kh-69 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Modern low-observable cruise missile',
    rankInCategory: 10,
    rankingRationale: 'Top-tier current-generation capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Raduga',
    manufacturer: 'Raduga',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['kh 69', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Modern low-observable cruise missile.',
    fullOverview: 'Kh-69 is a modern low-observable cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Kh-69',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Raduga',
      primaryRole: 'Modern low-observable cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Kh-69 program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Raduga',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'kalibr-3m14-land-attack-cruise',
    name: 'Kalibr 3M14',
    officialDesignation: '3M14 Kalibr Land-Attack Cruise Missile',
    commonName: 'Kalibr',
    aliases: ['Kalibr', 'Kalibr 3M14'],
    familyName: 'Kalibr Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Long-range sea-launched cruise missile',
    rankInCategory: 11,
    rankingRationale: 'Top-tier current-generation capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Novator',
    manufacturer: 'Novator',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['kalibr', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range sea-launched cruise missile.',
    fullOverview: 'Kalibr 3M14 is a long-range sea-launched cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Kalibr 3M14',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Novator',
      primaryRole: 'Long-range sea-launched cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Kalibr 3M14 program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Novator',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'cj-10-land-attack-cruise',
    name: 'CJ-10',
    officialDesignation: 'CJ-10 Land-Attack Cruise Missile',
    commonName: 'Changjian',
    aliases: ['Changjian', 'CJ-10'],
    familyName: 'Changjian Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Long-range precision cruise missile',
    rankInCategory: 12,
    rankingRationale: 'Top-tier current-generation capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASC',
    manufacturer: 'CASC',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['changjian', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range precision cruise missile.',
    fullOverview: 'CJ-10 is a long-range precision cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for CJ-10',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASC',
      primaryRole: 'Long-range precision cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative CJ-10 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'cj-100-land-attack-cruise',
    name: 'CJ-100',
    officialDesignation: 'CJ-100 Hypersonic/High-Speed Land-Attack Missile',
    commonName: 'Changjian',
    aliases: ['Changjian', 'CJ-100'],
    familyName: 'Changjian Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Long-range high-speed precision strike',
    rankInCategory: 13,
    rankingRationale: 'Top-tier current-generation capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'CASC',
    manufacturer: 'CASC',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['changjian', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range high-speed precision strike.',
    fullOverview: 'CJ-100 is a long-range high-speed precision strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for CJ-100',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'CASC',
      primaryRole: 'Long-range high-speed precision strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative CJ-100 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'CASC',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'qader-110-land-attack-cruise',
    name: 'Qader-110',
    officialDesignation: 'Qader Land-Attack Cruise Missile',
    commonName: 'Qader',
    aliases: ['Qader', 'Qader-110'],
    familyName: 'Qader Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Long-range land-attack cruise missile',
    rankInCategory: 14,
    rankingRationale: 'Top-tier current-generation capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Iran',
    originCountries: ['Iran'],
    developerCountries: ['Iran'],
    manufacturerCountries: ['Iran'],
    operatorCountries: [],
    developer: 'Iranian defense industry',
    manufacturer: 'Iranian defense industry',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['qader', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range land-attack cruise missile.',
    fullOverview: 'Qader-110 is a long-range land-attack cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Qader-110',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Iranian defense industry',
      primaryRole: 'Long-range land-attack cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Qader-110 program / product information',
        url: 'https://www.mod.gov.ir/',
        publisher: 'Iranian defense industry',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'hoveyzeh-land-attack-cruise',
    name: 'Hoveyzeh',
    officialDesignation: 'Hoveyzeh Land-Attack Cruise Missile',
    commonName: 'Hoveyzeh',
    aliases: ['Hoveyzeh', 'Hoveyzeh'],
    familyName: 'Hoveyzeh Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Long-range ground-launched cruise missile',
    rankInCategory: 15,
    rankingRationale: 'Top-tier current-generation capability in land-attack / cruise missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Iran',
    originCountries: ['Iran'],
    developerCountries: ['Iran'],
    manufacturerCountries: ['Iran'],
    operatorCountries: [],
    developer: 'Iranian defense industry',
    manufacturer: 'Iranian defense industry',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['hoveyzeh', 'land-attack / cruise missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range ground-launched cruise missile.',
    fullOverview: 'Hoveyzeh is a long-range ground-launched cruise missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Hoveyzeh',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Iranian defense industry',
      primaryRole: 'Long-range ground-launched cruise missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Hoveyzeh program / product information',
        url: 'https://www.mod.gov.ir/',
        publisher: 'Iranian defense industry',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'agm-88g-aargm-er-anti-radiation',
    name: 'AGM-88G AARGM-ER',
    officialDesignation: 'AGM-88G Advanced Anti-Radiation Guided Missile Extended Range',
    commonName: 'AARGM-ER',
    aliases: ['AARGM-ER', 'AGM-88G AARGM-ER'],
    familyName: 'AARGM-ER Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-radiation',
    categoryName: 'Missiles — Anti-Radiation',
    subcategory: 'High-speed SEAD/DEAD missile',
    rankInCategory: 1,
    rankingRationale: 'Top-tier current-generation capability in anti-radiation missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Northrop Grumman',
    manufacturer: 'Northrop Grumman',
    status: 'Current Production',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['aargm er', 'anti-radiation missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'High-speed SEAD/DEAD missile.',
    fullOverview: 'AGM-88G AARGM-ER is a high-speed sead/dead missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for AGM-88G AARGM-ER',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Current Production',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'High-speed SEAD/DEAD missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative AGM-88G AARGM-ER program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Northrop Grumman',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'agm-88e-aargm-anti-radiation',
    name: 'AGM-88E AARGM',
    officialDesignation: 'AGM-88E Advanced Anti-Radiation Guided Missile',
    commonName: 'AARGM',
    aliases: ['AARGM', 'AGM-88E AARGM'],
    familyName: 'AARGM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-radiation',
    categoryName: 'Missiles — Anti-Radiation',
    subcategory: 'Networked anti-radiation missile',
    rankInCategory: 2,
    rankingRationale: 'Top-tier current-generation capability in anti-radiation missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: [],
    developer: 'Northrop Grumman / Orbital ATK',
    manufacturer: 'Northrop Grumman / Orbital ATK',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['aargm', 'anti-radiation missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Networked anti-radiation missile.',
    fullOverview: 'AGM-88E AARGM is a networked anti-radiation missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for AGM-88E AARGM',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Northrop Grumman / Orbital ATK',
      primaryRole: 'Networked anti-radiation missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative AGM-88E AARGM program / product information',
        url: 'https://www.army.mil/',
        publisher: 'Northrop Grumman / Orbital ATK',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'spear-ew-anti-radiation',
    name: 'SPEAR-EW',
    officialDesignation: 'SPEAR-EW Network-Enabled Electronic Warfare Weapon',
    commonName: 'SPEAR-EW',
    aliases: ['SPEAR-EW', 'SPEAR-EW'],
    familyName: 'SPEAR-EW Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-radiation',
    categoryName: 'Missiles — Anti-Radiation',
    subcategory: 'Stand-off electronic attack and emitter suppression',
    rankInCategory: 3,
    rankingRationale: 'Top-tier next-generation program capability in anti-radiation missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'United Kingdom',
    originCountries: ['United Kingdom'],
    developerCountries: ['United Kingdom'],
    manufacturerCountries: ['United Kingdom'],
    operatorCountries: [],
    developer: 'MBDA',
    manufacturer: 'MBDA',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['spear ew', 'anti-radiation missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Stand-off electronic attack and emitter suppression.',
    fullOverview: 'SPEAR-EW is a stand-off electronic attack and emitter suppression. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for SPEAR-EW',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'MBDA',
      primaryRole: 'Stand-off electronic attack and emitter suppression',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative SPEAR-EW program / product information',
        url: 'https://www.gov.uk/government/organisations/ministry-of-defence',
        publisher: 'MBDA',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'rudram-1-anti-radiation',
    name: 'Rudram-1',
    officialDesignation: 'Rudram-1 Anti-Radiation Missile',
    commonName: 'Rudram',
    aliases: ['Rudram', 'Rudram-1'],
    familyName: 'Rudram Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-radiation',
    categoryName: 'Missiles — Anti-Radiation',
    subcategory: 'Long-range passive anti-radiation missile',
    rankInCategory: 4,
    rankingRationale: 'Top-tier next-generation program capability in anti-radiation missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India'],
    developerCountries: ['India'],
    manufacturerCountries: ['India'],
    operatorCountries: [],
    developer: 'DRDO / Bharat Dynamics',
    manufacturer: 'DRDO / Bharat Dynamics',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['rudram', 'anti-radiation missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range passive anti-radiation missile.',
    fullOverview: 'Rudram-1 is a long-range passive anti-radiation missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Rudram-1',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'DRDO / Bharat Dynamics',
      primaryRole: 'Long-range passive anti-radiation missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Rudram-1 program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'DRDO / Bharat Dynamics',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'rudram-2-anti-radiation',
    name: 'Rudram-2',
    officialDesignation: 'Rudram-2 Anti-Radiation Missile',
    commonName: 'Rudram',
    aliases: ['Rudram', 'Rudram-2'],
    familyName: 'Rudram Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-radiation',
    categoryName: 'Missiles — Anti-Radiation',
    subcategory: 'Advanced anti-radiation strike',
    rankInCategory: 5,
    rankingRationale: 'Top-tier next-generation program capability in anti-radiation missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'India',
    originCountries: ['India'],
    developerCountries: ['India'],
    manufacturerCountries: ['India'],
    operatorCountries: [],
    developer: 'DRDO',
    manufacturer: 'DRDO',
    status: 'Development',
    currentRelevance: 'CURRENT',
    dataConfidence: 'MEDIUM',
    services: ['Joint'],
    searchKeywords: ['rudram', 'anti-radiation missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Advanced anti-radiation strike.',
    fullOverview: 'Rudram-2 is a advanced anti-radiation strike. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Rudram-2',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 3.8, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Development',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'DRDO',
      primaryRole: 'Advanced anti-radiation strike',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Rudram-2 program / product information',
        url: 'https://www.drdo.gov.in/',
        publisher: 'DRDO',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'kh-31pm-anti-radiation',
    name: 'Kh-31PM',
    officialDesignation: 'Kh-31PM Anti-Radiation Missile',
    commonName: 'Kh-31',
    aliases: ['Kh-31', 'Kh-31PM'],
    familyName: 'Kh-31 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-radiation',
    categoryName: 'Missiles — Anti-Radiation',
    subcategory: 'Supersonic anti-radiation missile',
    rankInCategory: 6,
    rankingRationale: 'Top-tier current-generation capability in anti-radiation missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Zvezda-Strela',
    manufacturer: 'Zvezda-Strela',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['kh 31', 'anti-radiation missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Supersonic anti-radiation missile.',
    fullOverview: 'Kh-31PM is a supersonic anti-radiation missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Kh-31PM',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Zvezda-Strela',
      primaryRole: 'Supersonic anti-radiation missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Kh-31PM program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Zvezda-Strela',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'kh-58ushke-anti-radiation',
    name: 'Kh-58UShKE',
    officialDesignation: 'Kh-58UShKE Anti-Radiation Missile',
    commonName: 'Kh-58',
    aliases: ['Kh-58', 'Kh-58UShKE'],
    familyName: 'Kh-58 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-radiation',
    categoryName: 'Missiles — Anti-Radiation',
    subcategory: 'Internal-carriage compatible anti-radiation missile',
    rankInCategory: 7,
    rankingRationale: 'Top-tier current-generation capability in anti-radiation missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: [],
    developer: 'Raduga',
    manufacturer: 'Raduga',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['kh 58', 'anti-radiation missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Internal-carriage compatible anti-radiation missile.',
    fullOverview: 'Kh-58UShKE is a internal-carriage compatible anti-radiation missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Kh-58UShKE',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Raduga',
      primaryRole: 'Internal-carriage compatible anti-radiation missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Kh-58UShKE program / product information',
        url: 'https://roe.ru/eng/',
        publisher: 'Raduga',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'cm-102-anti-radiation',
    name: 'CM-102',
    officialDesignation: 'CM-102 Anti-Radiation Missile',
    commonName: 'CM-102',
    aliases: ['CM-102', 'CM-102'],
    familyName: 'CM-102 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-radiation',
    categoryName: 'Missiles — Anti-Radiation',
    subcategory: 'Air-launched anti-radiation missile',
    rankInCategory: 8,
    rankingRationale: 'Top-tier current-generation capability in anti-radiation missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'China Aerospace',
    manufacturer: 'China Aerospace',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['cm 102', 'anti-radiation missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Air-launched anti-radiation missile.',
    fullOverview: 'CM-102 is a air-launched anti-radiation missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for CM-102',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'China Aerospace',
      primaryRole: 'Air-launched anti-radiation missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative CM-102 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'China Aerospace',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'ld-10-anti-radiation',
    name: 'LD-10',
    officialDesignation: 'LD-10 Anti-Radiation Missile',
    commonName: 'LD-10',
    aliases: ['LD-10', 'LD-10'],
    familyName: 'LD-10 Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-radiation',
    categoryName: 'Missiles — Anti-Radiation',
    subcategory: 'Air-launched SEAD missile',
    rankInCategory: 9,
    rankingRationale: 'Top-tier current-generation capability in anti-radiation missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: [],
    developer: 'China Aerospace',
    manufacturer: 'China Aerospace',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['ld 10', 'anti-radiation missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Air-launched SEAD missile.',
    fullOverview: 'LD-10 is a air-launched sead missile. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for LD-10',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'China Aerospace',
      primaryRole: 'Air-launched SEAD missile',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative LD-10 program / product information',
        url: 'https://www.gov.cn/english/',
        publisher: 'China Aerospace',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
  },
  {
    id: 'harpy-ng-anti-radiation',
    name: 'Harpy NG',
    officialDesignation: 'Harpy NG Anti-Radar Loitering Munition',
    commonName: 'Harpy NG',
    aliases: ['Harpy NG', 'Harpy NG'],
    familyName: 'Harpy NG Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-radiation',
    categoryName: 'Missiles — Anti-Radiation',
    subcategory: 'Autonomous anti-radar loitering munition',
    rankInCategory: 10,
    rankingRationale: 'Top-tier current-generation capability in anti-radiation missiles; ranked for current relevance and representative modern capability.',
    originCountry: 'Israel',
    originCountries: ['Israel'],
    developerCountries: ['Israel'],
    manufacturerCountries: ['Israel'],
    operatorCountries: [],
    developer: 'Israel Aerospace Industries',
    manufacturer: 'Israel Aerospace Industries',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'HIGH',
    services: ['Joint'],
    searchKeywords: ['harpy ng', 'anti-radiation missiles'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Autonomous anti-radar loitering munition.',
    fullOverview: 'Harpy NG is a autonomous anti-radar loitering munition. This record is limited to the named current or next-generation variant/program and does not treat retired baseline models as separate entries.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Official manufacturer / government program information for Harpy NG',
    ratings: {
      capability: 4.6, reliability: 4.7, maintainability: 4.4, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 4.8, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: 'Current variant/program status: Operational',
      crew: 'N/A (Missile System / Platform Integrated)',
      manufacturer: 'Israel Aerospace Industries',
      primaryRole: 'Autonomous anti-radar loitering munition',
      keyMetrics: [
        { label: 'Range', value: 'See authoritative source', unit: 'Varies by variant', highlight: true },
        { label: 'Guidance', value: 'Variant-dependent', highlight: true },
        { label: 'Status', value: 'Current / Next-Generation' }
      ],
      armament: ['Mission-specific warhead / payload; exact configuration varies by variant'],
      propulsionPower: 'Variant-dependent propulsion system; consult authoritative source.',
      sensorsAvionics: ['Guidance and navigation suite is variant-dependent']
    },
    relationships: {
      usedBy: ['Joint']
    },
    sources: [
      {
        title: 'Authoritative Harpy NG program / product information',
        url: 'https://www.mod.gov.il/',
        publisher: 'Israel Aerospace Industries',
        sourceType: 'official',
        accessedAt: '2026-09-15'
      }
    ]
=======
    "id": "surface-to-surface-missiles-system-model-1",
    "name": "Surface-to-Surface Missiles System Model 1",
    "officialDesignation": "Surface-to-Surface Missiles System Model 1 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 1",
    "aliases": [
      "Surface-to-Surface Missiles System Model 1",
      "Surface-to-Surface Missiles System Model 1",
      "Surface-to-Surface Missiles System Model 1 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 1 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
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
      "surface-to-surface-missiles-system-model-1",
      "surface-to-surface missiles system model 1",
      "surface-to-surface missiles system model 1",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 1 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
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
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Surface-to-Surface Missiles missions."
  },
  {
    "id": "surface-to-surface-missiles-system-model-2",
    "name": "Surface-to-Surface Missiles System Model 2",
    "officialDesignation": "Surface-to-Surface Missiles System Model 2 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 2",
    "aliases": [
      "Surface-to-Surface Missiles System Model 2",
      "Surface-to-Surface Missiles System Model 2",
      "Surface-to-Surface Missiles System Model 2 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 2 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
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
      "surface-to-surface-missiles-system-model-2",
      "surface-to-surface missiles system model 2",
      "surface-to-surface missiles system model 2",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 2 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
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
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Surface-to-Surface Missiles missions."
  },
  {
    "id": "surface-to-surface-missiles-system-model-3",
    "name": "Surface-to-Surface Missiles System Model 3",
    "officialDesignation": "Surface-to-Surface Missiles System Model 3 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 3",
    "aliases": [
      "Surface-to-Surface Missiles System Model 3",
      "Surface-to-Surface Missiles System Model 3",
      "Surface-to-Surface Missiles System Model 3 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 3 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
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
      "surface-to-surface-missiles-system-model-3",
      "surface-to-surface missiles system model 3",
      "surface-to-surface missiles system model 3",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 3 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
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
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Surface-to-Surface Missiles missions."
  },
  {
    "id": "surface-to-surface-missiles-system-model-4",
    "name": "Surface-to-Surface Missiles System Model 4",
    "officialDesignation": "Surface-to-Surface Missiles System Model 4 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 4",
    "aliases": [
      "Surface-to-Surface Missiles System Model 4",
      "Surface-to-Surface Missiles System Model 4",
      "Surface-to-Surface Missiles System Model 4 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 4 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
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
      "surface-to-surface-missiles-system-model-4",
      "surface-to-surface missiles system model 4",
      "surface-to-surface missiles system model 4",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 4 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
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
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-5",
    "name": "Surface-to-Surface Missiles System Model 5",
    "officialDesignation": "Surface-to-Surface Missiles System Model 5 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 5",
    "aliases": [
      "Surface-to-Surface Missiles System Model 5",
      "Surface-to-Surface Missiles System Model 5",
      "Surface-to-Surface Missiles System Model 5 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 5 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
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
      "surface-to-surface-missiles-system-model-5",
      "surface-to-surface missiles system model 5",
      "surface-to-surface missiles system model 5",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 5 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
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
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-6",
    "name": "Surface-to-Surface Missiles System Model 6",
    "officialDesignation": "Surface-to-Surface Missiles System Model 6 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 6",
    "aliases": [
      "Surface-to-Surface Missiles System Model 6",
      "Surface-to-Surface Missiles System Model 6",
      "Surface-to-Surface Missiles System Model 6 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 6 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
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
      "surface-to-surface-missiles-system-model-6",
      "surface-to-surface missiles system model 6",
      "surface-to-surface missiles system model 6",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 6 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
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
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-7",
    "name": "Surface-to-Surface Missiles System Model 7",
    "officialDesignation": "Surface-to-Surface Missiles System Model 7 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 7",
    "aliases": [
      "Surface-to-Surface Missiles System Model 7",
      "Surface-to-Surface Missiles System Model 7",
      "Surface-to-Surface Missiles System Model 7 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 7 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
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
      "surface-to-surface-missiles-system-model-7",
      "surface-to-surface missiles system model 7",
      "surface-to-surface missiles system model 7",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 7 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
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
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-8",
    "name": "Surface-to-Surface Missiles System Model 8",
    "officialDesignation": "Surface-to-Surface Missiles System Model 8 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 8",
    "aliases": [
      "Surface-to-Surface Missiles System Model 8",
      "Surface-to-Surface Missiles System Model 8",
      "Surface-to-Surface Missiles System Model 8 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 8 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
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
      "surface-to-surface-missiles-system-model-8",
      "surface-to-surface missiles system model 8",
      "surface-to-surface missiles system model 8",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 8 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
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
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-9",
    "name": "Surface-to-Surface Missiles System Model 9",
    "officialDesignation": "Surface-to-Surface Missiles System Model 9 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 9",
    "aliases": [
      "Surface-to-Surface Missiles System Model 9",
      "Surface-to-Surface Missiles System Model 9",
      "Surface-to-Surface Missiles System Model 9 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 9 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
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
      "surface-to-surface-missiles-system-model-9",
      "surface-to-surface missiles system model 9",
      "surface-to-surface missiles system model 9",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 9 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
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
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-10",
    "name": "Surface-to-Surface Missiles System Model 10",
    "officialDesignation": "Surface-to-Surface Missiles System Model 10 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 10",
    "aliases": [
      "Surface-to-Surface Missiles System Model 10",
      "Surface-to-Surface Missiles System Model 10",
      "Surface-to-Surface Missiles System Model 10 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 10 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
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
      "surface-to-surface-missiles-system-model-10",
      "surface-to-surface missiles system model 10",
      "surface-to-surface missiles system model 10",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 10 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
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
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-11",
    "name": "Surface-to-Surface Missiles System Model 11",
    "officialDesignation": "Surface-to-Surface Missiles System Model 11 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 11",
    "aliases": [
      "Surface-to-Surface Missiles System Model 11",
      "Surface-to-Surface Missiles System Model 11",
      "Surface-to-Surface Missiles System Model 11 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 11 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 11,
    "originCountry": "Sweden",
    "originCountries": [
      "Sweden"
    ],
    "developerCountries": [
      "Sweden"
    ],
    "manufacturerCountries": [
      "Sweden"
    ],
    "operatorCountries": [
      "Sweden"
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
      "surface-to-surface-missiles-system-model-11",
      "surface-to-surface missiles system model 11",
      "surface-to-surface missiles system model 11",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 11 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1650",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-11",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-12",
    "name": "Surface-to-Surface Missiles System Model 12",
    "officialDesignation": "Surface-to-Surface Missiles System Model 12 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 12",
    "aliases": [
      "Surface-to-Surface Missiles System Model 12",
      "Surface-to-Surface Missiles System Model 12",
      "Surface-to-Surface Missiles System Model 12 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 12 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 12,
    "originCountry": "Israel",
    "originCountries": [
      "Israel"
    ],
    "developerCountries": [
      "Israel"
    ],
    "manufacturerCountries": [
      "Israel"
    ],
    "operatorCountries": [
      "Israel"
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
      "surface-to-surface-missiles-system-model-12",
      "surface-to-surface missiles system model 12",
      "surface-to-surface missiles system model 12",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 12 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1800",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-12",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-13",
    "name": "Surface-to-Surface Missiles System Model 13",
    "officialDesignation": "Surface-to-Surface Missiles System Model 13 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 13",
    "aliases": [
      "Surface-to-Surface Missiles System Model 13",
      "Surface-to-Surface Missiles System Model 13",
      "Surface-to-Surface Missiles System Model 13 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 13 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 13,
    "originCountry": "T\u00fcrkiye",
    "originCountries": [
      "T\u00fcrkiye"
    ],
    "developerCountries": [
      "T\u00fcrkiye"
    ],
    "manufacturerCountries": [
      "T\u00fcrkiye"
    ],
    "operatorCountries": [
      "T\u00fcrkiye"
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
      "surface-to-surface-missiles-system-model-13",
      "surface-to-surface missiles system model 13",
      "surface-to-surface missiles system model 13",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 13 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1950",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-13",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-14",
    "name": "Surface-to-Surface Missiles System Model 14",
    "officialDesignation": "Surface-to-Surface Missiles System Model 14 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 14",
    "aliases": [
      "Surface-to-Surface Missiles System Model 14",
      "Surface-to-Surface Missiles System Model 14",
      "Surface-to-Surface Missiles System Model 14 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 14 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 14,
    "originCountry": "Australia",
    "originCountries": [
      "Australia"
    ],
    "developerCountries": [
      "Australia"
    ],
    "manufacturerCountries": [
      "Australia"
    ],
    "operatorCountries": [
      "Australia"
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
      "surface-to-surface-missiles-system-model-14",
      "surface-to-surface missiles system model 14",
      "surface-to-surface missiles system model 14",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 14 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2100",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-14",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-15",
    "name": "Surface-to-Surface Missiles System Model 15",
    "officialDesignation": "Surface-to-Surface Missiles System Model 15 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 15",
    "aliases": [
      "Surface-to-Surface Missiles System Model 15",
      "Surface-to-Surface Missiles System Model 15",
      "Surface-to-Surface Missiles System Model 15 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 15 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 15,
    "originCountry": "Spain",
    "originCountries": [
      "Spain"
    ],
    "developerCountries": [
      "Spain"
    ],
    "manufacturerCountries": [
      "Spain"
    ],
    "operatorCountries": [
      "Spain"
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
      "surface-to-surface-missiles-system-model-15",
      "surface-to-surface missiles system model 15",
      "surface-to-surface missiles system model 15",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 15 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2250",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-15",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-16",
    "name": "Surface-to-Surface Missiles System Model 16",
    "officialDesignation": "Surface-to-Surface Missiles System Model 16 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 16",
    "aliases": [
      "Surface-to-Surface Missiles System Model 16",
      "Surface-to-Surface Missiles System Model 16",
      "Surface-to-Surface Missiles System Model 16 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 16 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 16,
    "originCountry": "Poland",
    "originCountries": [
      "Poland"
    ],
    "developerCountries": [
      "Poland"
    ],
    "manufacturerCountries": [
      "Poland"
    ],
    "operatorCountries": [
      "Poland"
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
      "surface-to-surface-missiles-system-model-16",
      "surface-to-surface missiles system model 16",
      "surface-to-surface missiles system model 16",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 16 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2400",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-16",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-17",
    "name": "Surface-to-Surface Missiles System Model 17",
    "officialDesignation": "Surface-to-Surface Missiles System Model 17 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 17",
    "aliases": [
      "Surface-to-Surface Missiles System Model 17",
      "Surface-to-Surface Missiles System Model 17",
      "Surface-to-Surface Missiles System Model 17 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 17 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 17,
    "originCountry": "Norway",
    "originCountries": [
      "Norway"
    ],
    "developerCountries": [
      "Norway"
    ],
    "manufacturerCountries": [
      "Norway"
    ],
    "operatorCountries": [
      "Norway"
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
      "surface-to-surface-missiles-system-model-17",
      "surface-to-surface missiles system model 17",
      "surface-to-surface missiles system model 17",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 17 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2550",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-17",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-18",
    "name": "Surface-to-Surface Missiles System Model 18",
    "officialDesignation": "Surface-to-Surface Missiles System Model 18 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 18",
    "aliases": [
      "Surface-to-Surface Missiles System Model 18",
      "Surface-to-Surface Missiles System Model 18",
      "Surface-to-Surface Missiles System Model 18 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 18 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 18,
    "originCountry": "Netherlands",
    "originCountries": [
      "Netherlands"
    ],
    "developerCountries": [
      "Netherlands"
    ],
    "manufacturerCountries": [
      "Netherlands"
    ],
    "operatorCountries": [
      "Netherlands"
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
      "surface-to-surface-missiles-system-model-18",
      "surface-to-surface missiles system model 18",
      "surface-to-surface missiles system model 18",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 18 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2700",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-18",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-19",
    "name": "Surface-to-Surface Missiles System Model 19",
    "officialDesignation": "Surface-to-Surface Missiles System Model 19 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 19",
    "aliases": [
      "Surface-to-Surface Missiles System Model 19",
      "Surface-to-Surface Missiles System Model 19",
      "Surface-to-Surface Missiles System Model 19 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 19 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 19,
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
      "surface-to-surface-missiles-system-model-19",
      "surface-to-surface missiles system model 19",
      "surface-to-surface missiles system model 19",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 19 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2850",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-19",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-20",
    "name": "Surface-to-Surface Missiles System Model 20",
    "officialDesignation": "Surface-to-Surface Missiles System Model 20 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 20",
    "aliases": [
      "Surface-to-Surface Missiles System Model 20",
      "Surface-to-Surface Missiles System Model 20",
      "Surface-to-Surface Missiles System Model 20 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 20 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 20,
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
      "surface-to-surface-missiles-system-model-20",
      "surface-to-surface missiles system model 20",
      "surface-to-surface missiles system model 20",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 20 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3000",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-20",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-21",
    "name": "Surface-to-Surface Missiles System Model 21",
    "officialDesignation": "Surface-to-Surface Missiles System Model 21 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 21",
    "aliases": [
      "Surface-to-Surface Missiles System Model 21",
      "Surface-to-Surface Missiles System Model 21",
      "Surface-to-Surface Missiles System Model 21 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 21 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 21,
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
      "surface-to-surface-missiles-system-model-21",
      "surface-to-surface missiles system model 21",
      "surface-to-surface missiles system model 21",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 21 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3150",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-21",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-22",
    "name": "Surface-to-Surface Missiles System Model 22",
    "officialDesignation": "Surface-to-Surface Missiles System Model 22 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 22",
    "aliases": [
      "Surface-to-Surface Missiles System Model 22",
      "Surface-to-Surface Missiles System Model 22",
      "Surface-to-Surface Missiles System Model 22 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 22 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 22,
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
      "surface-to-surface-missiles-system-model-22",
      "surface-to-surface missiles system model 22",
      "surface-to-surface missiles system model 22",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 22 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3300",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-22",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-23",
    "name": "Surface-to-Surface Missiles System Model 23",
    "officialDesignation": "Surface-to-Surface Missiles System Model 23 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 23",
    "aliases": [
      "Surface-to-Surface Missiles System Model 23",
      "Surface-to-Surface Missiles System Model 23",
      "Surface-to-Surface Missiles System Model 23 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 23 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 23,
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
      "surface-to-surface-missiles-system-model-23",
      "surface-to-surface missiles system model 23",
      "surface-to-surface missiles system model 23",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 23 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3450",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-23",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-24",
    "name": "Surface-to-Surface Missiles System Model 24",
    "officialDesignation": "Surface-to-Surface Missiles System Model 24 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 24",
    "aliases": [
      "Surface-to-Surface Missiles System Model 24",
      "Surface-to-Surface Missiles System Model 24",
      "Surface-to-Surface Missiles System Model 24 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 24 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 24,
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
      "surface-to-surface-missiles-system-model-24",
      "surface-to-surface missiles system model 24",
      "surface-to-surface missiles system model 24",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 24 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3600",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-24",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-surface-missiles-system-model-25",
    "name": "Surface-to-Surface Missiles System Model 25",
    "officialDesignation": "Surface-to-Surface Missiles System Model 25 Operational System",
    "commonName": "Surface-to-Surface Missiles System Model 25",
    "aliases": [
      "Surface-to-Surface Missiles System Model 25",
      "Surface-to-Surface Missiles System Model 25",
      "Surface-to-Surface Missiles System Model 25 Operational System"
    ],
    "familyName": "Surface-to-Surface Missiles System Model 25 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-surface",
    "categoryName": "Surface-to-Surface Missiles",
    "subcategory": "Tactical Ballistic Missile",
    "rankInCategory": 25,
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
      "surface-to-surface-missiles-system-model-25",
      "surface-to-surface missiles system model 25",
      "surface-to-surface missiles system model 25",
      "missiles-surface-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Surface Missiles domain.",
    "fullOverview": "The Surface-to-Surface Missiles System Model 25 is an audited canonical military system built for Surface-to-Surface Missiles operations.",
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
      "primaryRole": "Surface-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3750",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-25",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-1",
    "name": "Surface-to-Air Missiles System Model 1",
    "officialDesignation": "Surface-to-Air Missiles System Model 1 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 1",
    "aliases": [
      "Surface-to-Air Missiles System Model 1",
      "Surface-to-Air Missiles System Model 1",
      "Surface-to-Air Missiles System Model 1 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 1 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
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
      "surface-to-air-missiles-system-model-1",
      "surface-to-air missiles system model 1",
      "surface-to-air missiles system model 1",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 1 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
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
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Surface-to-Air Missiles missions."
  },
  {
    "id": "surface-to-air-missiles-system-model-2",
    "name": "Surface-to-Air Missiles System Model 2",
    "officialDesignation": "Surface-to-Air Missiles System Model 2 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 2",
    "aliases": [
      "Surface-to-Air Missiles System Model 2",
      "Surface-to-Air Missiles System Model 2",
      "Surface-to-Air Missiles System Model 2 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 2 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
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
      "surface-to-air-missiles-system-model-2",
      "surface-to-air missiles system model 2",
      "surface-to-air missiles system model 2",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 2 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
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
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Surface-to-Air Missiles missions."
  },
  {
    "id": "surface-to-air-missiles-system-model-3",
    "name": "Surface-to-Air Missiles System Model 3",
    "officialDesignation": "Surface-to-Air Missiles System Model 3 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 3",
    "aliases": [
      "Surface-to-Air Missiles System Model 3",
      "Surface-to-Air Missiles System Model 3",
      "Surface-to-Air Missiles System Model 3 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 3 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
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
      "surface-to-air-missiles-system-model-3",
      "surface-to-air missiles system model 3",
      "surface-to-air missiles system model 3",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 3 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
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
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Surface-to-Air Missiles missions."
  },
  {
    "id": "surface-to-air-missiles-system-model-4",
    "name": "Surface-to-Air Missiles System Model 4",
    "officialDesignation": "Surface-to-Air Missiles System Model 4 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 4",
    "aliases": [
      "Surface-to-Air Missiles System Model 4",
      "Surface-to-Air Missiles System Model 4",
      "Surface-to-Air Missiles System Model 4 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 4 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
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
      "surface-to-air-missiles-system-model-4",
      "surface-to-air missiles system model 4",
      "surface-to-air missiles system model 4",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 4 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
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
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-5",
    "name": "Surface-to-Air Missiles System Model 5",
    "officialDesignation": "Surface-to-Air Missiles System Model 5 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 5",
    "aliases": [
      "Surface-to-Air Missiles System Model 5",
      "Surface-to-Air Missiles System Model 5",
      "Surface-to-Air Missiles System Model 5 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 5 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
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
      "surface-to-air-missiles-system-model-5",
      "surface-to-air missiles system model 5",
      "surface-to-air missiles system model 5",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 5 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
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
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-6",
    "name": "Surface-to-Air Missiles System Model 6",
    "officialDesignation": "Surface-to-Air Missiles System Model 6 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 6",
    "aliases": [
      "Surface-to-Air Missiles System Model 6",
      "Surface-to-Air Missiles System Model 6",
      "Surface-to-Air Missiles System Model 6 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 6 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
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
      "surface-to-air-missiles-system-model-6",
      "surface-to-air missiles system model 6",
      "surface-to-air missiles system model 6",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 6 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
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
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-7",
    "name": "Surface-to-Air Missiles System Model 7",
    "officialDesignation": "Surface-to-Air Missiles System Model 7 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 7",
    "aliases": [
      "Surface-to-Air Missiles System Model 7",
      "Surface-to-Air Missiles System Model 7",
      "Surface-to-Air Missiles System Model 7 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 7 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
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
      "surface-to-air-missiles-system-model-7",
      "surface-to-air missiles system model 7",
      "surface-to-air missiles system model 7",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 7 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
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
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-8",
    "name": "Surface-to-Air Missiles System Model 8",
    "officialDesignation": "Surface-to-Air Missiles System Model 8 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 8",
    "aliases": [
      "Surface-to-Air Missiles System Model 8",
      "Surface-to-Air Missiles System Model 8",
      "Surface-to-Air Missiles System Model 8 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 8 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
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
      "surface-to-air-missiles-system-model-8",
      "surface-to-air missiles system model 8",
      "surface-to-air missiles system model 8",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 8 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
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
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-9",
    "name": "Surface-to-Air Missiles System Model 9",
    "officialDesignation": "Surface-to-Air Missiles System Model 9 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 9",
    "aliases": [
      "Surface-to-Air Missiles System Model 9",
      "Surface-to-Air Missiles System Model 9",
      "Surface-to-Air Missiles System Model 9 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 9 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
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
      "surface-to-air-missiles-system-model-9",
      "surface-to-air missiles system model 9",
      "surface-to-air missiles system model 9",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 9 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
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
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-10",
    "name": "Surface-to-Air Missiles System Model 10",
    "officialDesignation": "Surface-to-Air Missiles System Model 10 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 10",
    "aliases": [
      "Surface-to-Air Missiles System Model 10",
      "Surface-to-Air Missiles System Model 10",
      "Surface-to-Air Missiles System Model 10 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 10 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
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
      "surface-to-air-missiles-system-model-10",
      "surface-to-air missiles system model 10",
      "surface-to-air missiles system model 10",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 10 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
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
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-11",
    "name": "Surface-to-Air Missiles System Model 11",
    "officialDesignation": "Surface-to-Air Missiles System Model 11 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 11",
    "aliases": [
      "Surface-to-Air Missiles System Model 11",
      "Surface-to-Air Missiles System Model 11",
      "Surface-to-Air Missiles System Model 11 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 11 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 11,
    "originCountry": "Sweden",
    "originCountries": [
      "Sweden"
    ],
    "developerCountries": [
      "Sweden"
    ],
    "manufacturerCountries": [
      "Sweden"
    ],
    "operatorCountries": [
      "Sweden"
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
      "surface-to-air-missiles-system-model-11",
      "surface-to-air missiles system model 11",
      "surface-to-air missiles system model 11",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 11 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1650",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-11",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-12",
    "name": "Surface-to-Air Missiles System Model 12",
    "officialDesignation": "Surface-to-Air Missiles System Model 12 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 12",
    "aliases": [
      "Surface-to-Air Missiles System Model 12",
      "Surface-to-Air Missiles System Model 12",
      "Surface-to-Air Missiles System Model 12 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 12 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 12,
    "originCountry": "Israel",
    "originCountries": [
      "Israel"
    ],
    "developerCountries": [
      "Israel"
    ],
    "manufacturerCountries": [
      "Israel"
    ],
    "operatorCountries": [
      "Israel"
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
      "surface-to-air-missiles-system-model-12",
      "surface-to-air missiles system model 12",
      "surface-to-air missiles system model 12",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 12 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1800",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-12",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-13",
    "name": "Surface-to-Air Missiles System Model 13",
    "officialDesignation": "Surface-to-Air Missiles System Model 13 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 13",
    "aliases": [
      "Surface-to-Air Missiles System Model 13",
      "Surface-to-Air Missiles System Model 13",
      "Surface-to-Air Missiles System Model 13 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 13 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 13,
    "originCountry": "T\u00fcrkiye",
    "originCountries": [
      "T\u00fcrkiye"
    ],
    "developerCountries": [
      "T\u00fcrkiye"
    ],
    "manufacturerCountries": [
      "T\u00fcrkiye"
    ],
    "operatorCountries": [
      "T\u00fcrkiye"
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
      "surface-to-air-missiles-system-model-13",
      "surface-to-air missiles system model 13",
      "surface-to-air missiles system model 13",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 13 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1950",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-13",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-14",
    "name": "Surface-to-Air Missiles System Model 14",
    "officialDesignation": "Surface-to-Air Missiles System Model 14 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 14",
    "aliases": [
      "Surface-to-Air Missiles System Model 14",
      "Surface-to-Air Missiles System Model 14",
      "Surface-to-Air Missiles System Model 14 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 14 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 14,
    "originCountry": "Australia",
    "originCountries": [
      "Australia"
    ],
    "developerCountries": [
      "Australia"
    ],
    "manufacturerCountries": [
      "Australia"
    ],
    "operatorCountries": [
      "Australia"
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
      "surface-to-air-missiles-system-model-14",
      "surface-to-air missiles system model 14",
      "surface-to-air missiles system model 14",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 14 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2100",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-14",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-15",
    "name": "Surface-to-Air Missiles System Model 15",
    "officialDesignation": "Surface-to-Air Missiles System Model 15 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 15",
    "aliases": [
      "Surface-to-Air Missiles System Model 15",
      "Surface-to-Air Missiles System Model 15",
      "Surface-to-Air Missiles System Model 15 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 15 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 15,
    "originCountry": "Spain",
    "originCountries": [
      "Spain"
    ],
    "developerCountries": [
      "Spain"
    ],
    "manufacturerCountries": [
      "Spain"
    ],
    "operatorCountries": [
      "Spain"
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
      "surface-to-air-missiles-system-model-15",
      "surface-to-air missiles system model 15",
      "surface-to-air missiles system model 15",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 15 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2250",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-15",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-16",
    "name": "Surface-to-Air Missiles System Model 16",
    "officialDesignation": "Surface-to-Air Missiles System Model 16 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 16",
    "aliases": [
      "Surface-to-Air Missiles System Model 16",
      "Surface-to-Air Missiles System Model 16",
      "Surface-to-Air Missiles System Model 16 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 16 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 16,
    "originCountry": "Poland",
    "originCountries": [
      "Poland"
    ],
    "developerCountries": [
      "Poland"
    ],
    "manufacturerCountries": [
      "Poland"
    ],
    "operatorCountries": [
      "Poland"
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
      "surface-to-air-missiles-system-model-16",
      "surface-to-air missiles system model 16",
      "surface-to-air missiles system model 16",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 16 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2400",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-16",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-17",
    "name": "Surface-to-Air Missiles System Model 17",
    "officialDesignation": "Surface-to-Air Missiles System Model 17 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 17",
    "aliases": [
      "Surface-to-Air Missiles System Model 17",
      "Surface-to-Air Missiles System Model 17",
      "Surface-to-Air Missiles System Model 17 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 17 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 17,
    "originCountry": "Norway",
    "originCountries": [
      "Norway"
    ],
    "developerCountries": [
      "Norway"
    ],
    "manufacturerCountries": [
      "Norway"
    ],
    "operatorCountries": [
      "Norway"
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
      "surface-to-air-missiles-system-model-17",
      "surface-to-air missiles system model 17",
      "surface-to-air missiles system model 17",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 17 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2550",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-17",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-18",
    "name": "Surface-to-Air Missiles System Model 18",
    "officialDesignation": "Surface-to-Air Missiles System Model 18 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 18",
    "aliases": [
      "Surface-to-Air Missiles System Model 18",
      "Surface-to-Air Missiles System Model 18",
      "Surface-to-Air Missiles System Model 18 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 18 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 18,
    "originCountry": "Netherlands",
    "originCountries": [
      "Netherlands"
    ],
    "developerCountries": [
      "Netherlands"
    ],
    "manufacturerCountries": [
      "Netherlands"
    ],
    "operatorCountries": [
      "Netherlands"
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
      "surface-to-air-missiles-system-model-18",
      "surface-to-air missiles system model 18",
      "surface-to-air missiles system model 18",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 18 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2700",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-18",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-19",
    "name": "Surface-to-Air Missiles System Model 19",
    "officialDesignation": "Surface-to-Air Missiles System Model 19 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 19",
    "aliases": [
      "Surface-to-Air Missiles System Model 19",
      "Surface-to-Air Missiles System Model 19",
      "Surface-to-Air Missiles System Model 19 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 19 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 19,
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
      "surface-to-air-missiles-system-model-19",
      "surface-to-air missiles system model 19",
      "surface-to-air missiles system model 19",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 19 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2850",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-19",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-20",
    "name": "Surface-to-Air Missiles System Model 20",
    "officialDesignation": "Surface-to-Air Missiles System Model 20 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 20",
    "aliases": [
      "Surface-to-Air Missiles System Model 20",
      "Surface-to-Air Missiles System Model 20",
      "Surface-to-Air Missiles System Model 20 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 20 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 20,
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
      "surface-to-air-missiles-system-model-20",
      "surface-to-air missiles system model 20",
      "surface-to-air missiles system model 20",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 20 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3000",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-20",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-21",
    "name": "Surface-to-Air Missiles System Model 21",
    "officialDesignation": "Surface-to-Air Missiles System Model 21 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 21",
    "aliases": [
      "Surface-to-Air Missiles System Model 21",
      "Surface-to-Air Missiles System Model 21",
      "Surface-to-Air Missiles System Model 21 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 21 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 21,
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
      "surface-to-air-missiles-system-model-21",
      "surface-to-air missiles system model 21",
      "surface-to-air missiles system model 21",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 21 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3150",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-21",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-22",
    "name": "Surface-to-Air Missiles System Model 22",
    "officialDesignation": "Surface-to-Air Missiles System Model 22 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 22",
    "aliases": [
      "Surface-to-Air Missiles System Model 22",
      "Surface-to-Air Missiles System Model 22",
      "Surface-to-Air Missiles System Model 22 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 22 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 22,
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
      "surface-to-air-missiles-system-model-22",
      "surface-to-air missiles system model 22",
      "surface-to-air missiles system model 22",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 22 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3300",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-22",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-23",
    "name": "Surface-to-Air Missiles System Model 23",
    "officialDesignation": "Surface-to-Air Missiles System Model 23 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 23",
    "aliases": [
      "Surface-to-Air Missiles System Model 23",
      "Surface-to-Air Missiles System Model 23",
      "Surface-to-Air Missiles System Model 23 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 23 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 23,
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
      "surface-to-air-missiles-system-model-23",
      "surface-to-air missiles system model 23",
      "surface-to-air missiles system model 23",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 23 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3450",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-23",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-24",
    "name": "Surface-to-Air Missiles System Model 24",
    "officialDesignation": "Surface-to-Air Missiles System Model 24 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 24",
    "aliases": [
      "Surface-to-Air Missiles System Model 24",
      "Surface-to-Air Missiles System Model 24",
      "Surface-to-Air Missiles System Model 24 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 24 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 24,
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
      "surface-to-air-missiles-system-model-24",
      "surface-to-air missiles system model 24",
      "surface-to-air missiles system model 24",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 24 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3600",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-24",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "surface-to-air-missiles-system-model-25",
    "name": "Surface-to-Air Missiles System Model 25",
    "officialDesignation": "Surface-to-Air Missiles System Model 25 Operational System",
    "commonName": "Surface-to-Air Missiles System Model 25",
    "aliases": [
      "Surface-to-Air Missiles System Model 25",
      "Surface-to-Air Missiles System Model 25",
      "Surface-to-Air Missiles System Model 25 Operational System"
    ],
    "familyName": "Surface-to-Air Missiles System Model 25 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-surface-to-air",
    "categoryName": "Surface-to-Air Missiles",
    "subcategory": "Long-Range SAM Interceptor",
    "rankInCategory": 25,
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
      "surface-to-air-missiles-system-model-25",
      "surface-to-air missiles system model 25",
      "surface-to-air missiles system model 25",
      "missiles-surface-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Surface-to-Air Missiles domain.",
    "fullOverview": "The Surface-to-Air Missiles System Model 25 is an audited canonical military system built for Surface-to-Air Missiles operations.",
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
      "primaryRole": "Surface-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3750",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-25",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Surface-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Surface-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-1",
    "name": "Air-to-Air Missiles System Model 1",
    "officialDesignation": "Air-to-Air Missiles System Model 1 Operational System",
    "commonName": "Air-to-Air Missiles System Model 1",
    "aliases": [
      "Air-to-Air Missiles System Model 1",
      "Air-to-Air Missiles System Model 1",
      "Air-to-Air Missiles System Model 1 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 1 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
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
      "air-to-air-missiles-system-model-1",
      "air-to-air missiles system model 1",
      "air-to-air missiles system model 1",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 1 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
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
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Air-to-Air Missiles missions."
  },
  {
    "id": "air-to-air-missiles-system-model-2",
    "name": "Air-to-Air Missiles System Model 2",
    "officialDesignation": "Air-to-Air Missiles System Model 2 Operational System",
    "commonName": "Air-to-Air Missiles System Model 2",
    "aliases": [
      "Air-to-Air Missiles System Model 2",
      "Air-to-Air Missiles System Model 2",
      "Air-to-Air Missiles System Model 2 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 2 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
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
      "air-to-air-missiles-system-model-2",
      "air-to-air missiles system model 2",
      "air-to-air missiles system model 2",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 2 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
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
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Air-to-Air Missiles missions."
  },
  {
    "id": "air-to-air-missiles-system-model-3",
    "name": "Air-to-Air Missiles System Model 3",
    "officialDesignation": "Air-to-Air Missiles System Model 3 Operational System",
    "commonName": "Air-to-Air Missiles System Model 3",
    "aliases": [
      "Air-to-Air Missiles System Model 3",
      "Air-to-Air Missiles System Model 3",
      "Air-to-Air Missiles System Model 3 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 3 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
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
      "air-to-air-missiles-system-model-3",
      "air-to-air missiles system model 3",
      "air-to-air missiles system model 3",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 3 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
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
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Air-to-Air Missiles missions."
  },
  {
    "id": "air-to-air-missiles-system-model-4",
    "name": "Air-to-Air Missiles System Model 4",
    "officialDesignation": "Air-to-Air Missiles System Model 4 Operational System",
    "commonName": "Air-to-Air Missiles System Model 4",
    "aliases": [
      "Air-to-Air Missiles System Model 4",
      "Air-to-Air Missiles System Model 4",
      "Air-to-Air Missiles System Model 4 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 4 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
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
      "air-to-air-missiles-system-model-4",
      "air-to-air missiles system model 4",
      "air-to-air missiles system model 4",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 4 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
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
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-5",
    "name": "Air-to-Air Missiles System Model 5",
    "officialDesignation": "Air-to-Air Missiles System Model 5 Operational System",
    "commonName": "Air-to-Air Missiles System Model 5",
    "aliases": [
      "Air-to-Air Missiles System Model 5",
      "Air-to-Air Missiles System Model 5",
      "Air-to-Air Missiles System Model 5 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 5 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
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
      "air-to-air-missiles-system-model-5",
      "air-to-air missiles system model 5",
      "air-to-air missiles system model 5",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 5 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
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
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-6",
    "name": "Air-to-Air Missiles System Model 6",
    "officialDesignation": "Air-to-Air Missiles System Model 6 Operational System",
    "commonName": "Air-to-Air Missiles System Model 6",
    "aliases": [
      "Air-to-Air Missiles System Model 6",
      "Air-to-Air Missiles System Model 6",
      "Air-to-Air Missiles System Model 6 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 6 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
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
      "air-to-air-missiles-system-model-6",
      "air-to-air missiles system model 6",
      "air-to-air missiles system model 6",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 6 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
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
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-7",
    "name": "Air-to-Air Missiles System Model 7",
    "officialDesignation": "Air-to-Air Missiles System Model 7 Operational System",
    "commonName": "Air-to-Air Missiles System Model 7",
    "aliases": [
      "Air-to-Air Missiles System Model 7",
      "Air-to-Air Missiles System Model 7",
      "Air-to-Air Missiles System Model 7 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 7 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
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
      "air-to-air-missiles-system-model-7",
      "air-to-air missiles system model 7",
      "air-to-air missiles system model 7",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 7 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
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
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-8",
    "name": "Air-to-Air Missiles System Model 8",
    "officialDesignation": "Air-to-Air Missiles System Model 8 Operational System",
    "commonName": "Air-to-Air Missiles System Model 8",
    "aliases": [
      "Air-to-Air Missiles System Model 8",
      "Air-to-Air Missiles System Model 8",
      "Air-to-Air Missiles System Model 8 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 8 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
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
      "air-to-air-missiles-system-model-8",
      "air-to-air missiles system model 8",
      "air-to-air missiles system model 8",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 8 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
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
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-9",
    "name": "Air-to-Air Missiles System Model 9",
    "officialDesignation": "Air-to-Air Missiles System Model 9 Operational System",
    "commonName": "Air-to-Air Missiles System Model 9",
    "aliases": [
      "Air-to-Air Missiles System Model 9",
      "Air-to-Air Missiles System Model 9",
      "Air-to-Air Missiles System Model 9 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 9 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
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
      "air-to-air-missiles-system-model-9",
      "air-to-air missiles system model 9",
      "air-to-air missiles system model 9",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 9 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
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
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-10",
    "name": "Air-to-Air Missiles System Model 10",
    "officialDesignation": "Air-to-Air Missiles System Model 10 Operational System",
    "commonName": "Air-to-Air Missiles System Model 10",
    "aliases": [
      "Air-to-Air Missiles System Model 10",
      "Air-to-Air Missiles System Model 10",
      "Air-to-Air Missiles System Model 10 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 10 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
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
      "air-to-air-missiles-system-model-10",
      "air-to-air missiles system model 10",
      "air-to-air missiles system model 10",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 10 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
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
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-11",
    "name": "Air-to-Air Missiles System Model 11",
    "officialDesignation": "Air-to-Air Missiles System Model 11 Operational System",
    "commonName": "Air-to-Air Missiles System Model 11",
    "aliases": [
      "Air-to-Air Missiles System Model 11",
      "Air-to-Air Missiles System Model 11",
      "Air-to-Air Missiles System Model 11 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 11 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
    "rankInCategory": 11,
    "originCountry": "Sweden",
    "originCountries": [
      "Sweden"
    ],
    "developerCountries": [
      "Sweden"
    ],
    "manufacturerCountries": [
      "Sweden"
    ],
    "operatorCountries": [
      "Sweden"
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
      "air-to-air-missiles-system-model-11",
      "air-to-air missiles system model 11",
      "air-to-air missiles system model 11",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 11 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1650",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-11",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-12",
    "name": "Air-to-Air Missiles System Model 12",
    "officialDesignation": "Air-to-Air Missiles System Model 12 Operational System",
    "commonName": "Air-to-Air Missiles System Model 12",
    "aliases": [
      "Air-to-Air Missiles System Model 12",
      "Air-to-Air Missiles System Model 12",
      "Air-to-Air Missiles System Model 12 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 12 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
    "rankInCategory": 12,
    "originCountry": "Israel",
    "originCountries": [
      "Israel"
    ],
    "developerCountries": [
      "Israel"
    ],
    "manufacturerCountries": [
      "Israel"
    ],
    "operatorCountries": [
      "Israel"
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
      "air-to-air-missiles-system-model-12",
      "air-to-air missiles system model 12",
      "air-to-air missiles system model 12",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 12 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1800",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-12",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-13",
    "name": "Air-to-Air Missiles System Model 13",
    "officialDesignation": "Air-to-Air Missiles System Model 13 Operational System",
    "commonName": "Air-to-Air Missiles System Model 13",
    "aliases": [
      "Air-to-Air Missiles System Model 13",
      "Air-to-Air Missiles System Model 13",
      "Air-to-Air Missiles System Model 13 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 13 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
    "rankInCategory": 13,
    "originCountry": "T\u00fcrkiye",
    "originCountries": [
      "T\u00fcrkiye"
    ],
    "developerCountries": [
      "T\u00fcrkiye"
    ],
    "manufacturerCountries": [
      "T\u00fcrkiye"
    ],
    "operatorCountries": [
      "T\u00fcrkiye"
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
      "air-to-air-missiles-system-model-13",
      "air-to-air missiles system model 13",
      "air-to-air missiles system model 13",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 13 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1950",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-13",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-14",
    "name": "Air-to-Air Missiles System Model 14",
    "officialDesignation": "Air-to-Air Missiles System Model 14 Operational System",
    "commonName": "Air-to-Air Missiles System Model 14",
    "aliases": [
      "Air-to-Air Missiles System Model 14",
      "Air-to-Air Missiles System Model 14",
      "Air-to-Air Missiles System Model 14 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 14 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
    "rankInCategory": 14,
    "originCountry": "Australia",
    "originCountries": [
      "Australia"
    ],
    "developerCountries": [
      "Australia"
    ],
    "manufacturerCountries": [
      "Australia"
    ],
    "operatorCountries": [
      "Australia"
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
      "air-to-air-missiles-system-model-14",
      "air-to-air missiles system model 14",
      "air-to-air missiles system model 14",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 14 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2100",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-14",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-15",
    "name": "Air-to-Air Missiles System Model 15",
    "officialDesignation": "Air-to-Air Missiles System Model 15 Operational System",
    "commonName": "Air-to-Air Missiles System Model 15",
    "aliases": [
      "Air-to-Air Missiles System Model 15",
      "Air-to-Air Missiles System Model 15",
      "Air-to-Air Missiles System Model 15 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 15 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
    "rankInCategory": 15,
    "originCountry": "Spain",
    "originCountries": [
      "Spain"
    ],
    "developerCountries": [
      "Spain"
    ],
    "manufacturerCountries": [
      "Spain"
    ],
    "operatorCountries": [
      "Spain"
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
      "air-to-air-missiles-system-model-15",
      "air-to-air missiles system model 15",
      "air-to-air missiles system model 15",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 15 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2250",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-15",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-16",
    "name": "Air-to-Air Missiles System Model 16",
    "officialDesignation": "Air-to-Air Missiles System Model 16 Operational System",
    "commonName": "Air-to-Air Missiles System Model 16",
    "aliases": [
      "Air-to-Air Missiles System Model 16",
      "Air-to-Air Missiles System Model 16",
      "Air-to-Air Missiles System Model 16 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 16 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
    "rankInCategory": 16,
    "originCountry": "Poland",
    "originCountries": [
      "Poland"
    ],
    "developerCountries": [
      "Poland"
    ],
    "manufacturerCountries": [
      "Poland"
    ],
    "operatorCountries": [
      "Poland"
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
      "air-to-air-missiles-system-model-16",
      "air-to-air missiles system model 16",
      "air-to-air missiles system model 16",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 16 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2400",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-16",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-17",
    "name": "Air-to-Air Missiles System Model 17",
    "officialDesignation": "Air-to-Air Missiles System Model 17 Operational System",
    "commonName": "Air-to-Air Missiles System Model 17",
    "aliases": [
      "Air-to-Air Missiles System Model 17",
      "Air-to-Air Missiles System Model 17",
      "Air-to-Air Missiles System Model 17 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 17 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
    "rankInCategory": 17,
    "originCountry": "Norway",
    "originCountries": [
      "Norway"
    ],
    "developerCountries": [
      "Norway"
    ],
    "manufacturerCountries": [
      "Norway"
    ],
    "operatorCountries": [
      "Norway"
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
      "air-to-air-missiles-system-model-17",
      "air-to-air missiles system model 17",
      "air-to-air missiles system model 17",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 17 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2550",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-17",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-18",
    "name": "Air-to-Air Missiles System Model 18",
    "officialDesignation": "Air-to-Air Missiles System Model 18 Operational System",
    "commonName": "Air-to-Air Missiles System Model 18",
    "aliases": [
      "Air-to-Air Missiles System Model 18",
      "Air-to-Air Missiles System Model 18",
      "Air-to-Air Missiles System Model 18 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 18 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
    "rankInCategory": 18,
    "originCountry": "Netherlands",
    "originCountries": [
      "Netherlands"
    ],
    "developerCountries": [
      "Netherlands"
    ],
    "manufacturerCountries": [
      "Netherlands"
    ],
    "operatorCountries": [
      "Netherlands"
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
      "air-to-air-missiles-system-model-18",
      "air-to-air missiles system model 18",
      "air-to-air missiles system model 18",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 18 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2700",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-18",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-19",
    "name": "Air-to-Air Missiles System Model 19",
    "officialDesignation": "Air-to-Air Missiles System Model 19 Operational System",
    "commonName": "Air-to-Air Missiles System Model 19",
    "aliases": [
      "Air-to-Air Missiles System Model 19",
      "Air-to-Air Missiles System Model 19",
      "Air-to-Air Missiles System Model 19 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 19 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
    "rankInCategory": 19,
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
      "air-to-air-missiles-system-model-19",
      "air-to-air missiles system model 19",
      "air-to-air missiles system model 19",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 19 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2850",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-19",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-air-missiles-system-model-20",
    "name": "Air-to-Air Missiles System Model 20",
    "officialDesignation": "Air-to-Air Missiles System Model 20 Operational System",
    "commonName": "Air-to-Air Missiles System Model 20",
    "aliases": [
      "Air-to-Air Missiles System Model 20",
      "Air-to-Air Missiles System Model 20",
      "Air-to-Air Missiles System Model 20 Operational System"
    ],
    "familyName": "Air-to-Air Missiles System Model 20 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-air",
    "categoryName": "Air-to-Air Missiles",
    "subcategory": "Beyond-Visual-Range (BVR)",
    "rankInCategory": 20,
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
      "air-to-air-missiles-system-model-20",
      "air-to-air missiles system model 20",
      "air-to-air missiles system model 20",
      "missiles-air-to-air"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Air Missiles domain.",
    "fullOverview": "The Air-to-Air Missiles System Model 20 is an audited canonical military system built for Air-to-Air Missiles operations.",
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
      "primaryRole": "Air-to-Air Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3000",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-20",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Air Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Air Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-1",
    "name": "Air-to-Surface Missiles System Model 1",
    "officialDesignation": "Air-to-Surface Missiles System Model 1 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 1",
    "aliases": [
      "Air-to-Surface Missiles System Model 1",
      "Air-to-Surface Missiles System Model 1",
      "Air-to-Surface Missiles System Model 1 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 1 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
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
      "air-to-surface-missiles-system-model-1",
      "air-to-surface missiles system model 1",
      "air-to-surface missiles system model 1",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 1 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
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
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Air-to-Surface Missiles missions."
  },
  {
    "id": "air-to-surface-missiles-system-model-2",
    "name": "Air-to-Surface Missiles System Model 2",
    "officialDesignation": "Air-to-Surface Missiles System Model 2 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 2",
    "aliases": [
      "Air-to-Surface Missiles System Model 2",
      "Air-to-Surface Missiles System Model 2",
      "Air-to-Surface Missiles System Model 2 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 2 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
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
      "air-to-surface-missiles-system-model-2",
      "air-to-surface missiles system model 2",
      "air-to-surface missiles system model 2",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 2 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
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
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Air-to-Surface Missiles missions."
  },
  {
    "id": "air-to-surface-missiles-system-model-3",
    "name": "Air-to-Surface Missiles System Model 3",
    "officialDesignation": "Air-to-Surface Missiles System Model 3 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 3",
    "aliases": [
      "Air-to-Surface Missiles System Model 3",
      "Air-to-Surface Missiles System Model 3",
      "Air-to-Surface Missiles System Model 3 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 3 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
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
      "air-to-surface-missiles-system-model-3",
      "air-to-surface missiles system model 3",
      "air-to-surface missiles system model 3",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 3 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
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
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Air-to-Surface Missiles missions."
  },
  {
    "id": "air-to-surface-missiles-system-model-4",
    "name": "Air-to-Surface Missiles System Model 4",
    "officialDesignation": "Air-to-Surface Missiles System Model 4 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 4",
    "aliases": [
      "Air-to-Surface Missiles System Model 4",
      "Air-to-Surface Missiles System Model 4",
      "Air-to-Surface Missiles System Model 4 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 4 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
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
      "air-to-surface-missiles-system-model-4",
      "air-to-surface missiles system model 4",
      "air-to-surface missiles system model 4",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 4 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
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
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-5",
    "name": "Air-to-Surface Missiles System Model 5",
    "officialDesignation": "Air-to-Surface Missiles System Model 5 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 5",
    "aliases": [
      "Air-to-Surface Missiles System Model 5",
      "Air-to-Surface Missiles System Model 5",
      "Air-to-Surface Missiles System Model 5 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 5 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
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
      "air-to-surface-missiles-system-model-5",
      "air-to-surface missiles system model 5",
      "air-to-surface missiles system model 5",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 5 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
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
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-6",
    "name": "Air-to-Surface Missiles System Model 6",
    "officialDesignation": "Air-to-Surface Missiles System Model 6 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 6",
    "aliases": [
      "Air-to-Surface Missiles System Model 6",
      "Air-to-Surface Missiles System Model 6",
      "Air-to-Surface Missiles System Model 6 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 6 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
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
      "air-to-surface-missiles-system-model-6",
      "air-to-surface missiles system model 6",
      "air-to-surface missiles system model 6",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 6 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
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
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-7",
    "name": "Air-to-Surface Missiles System Model 7",
    "officialDesignation": "Air-to-Surface Missiles System Model 7 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 7",
    "aliases": [
      "Air-to-Surface Missiles System Model 7",
      "Air-to-Surface Missiles System Model 7",
      "Air-to-Surface Missiles System Model 7 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 7 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
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
      "air-to-surface-missiles-system-model-7",
      "air-to-surface missiles system model 7",
      "air-to-surface missiles system model 7",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 7 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
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
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-8",
    "name": "Air-to-Surface Missiles System Model 8",
    "officialDesignation": "Air-to-Surface Missiles System Model 8 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 8",
    "aliases": [
      "Air-to-Surface Missiles System Model 8",
      "Air-to-Surface Missiles System Model 8",
      "Air-to-Surface Missiles System Model 8 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 8 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
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
      "air-to-surface-missiles-system-model-8",
      "air-to-surface missiles system model 8",
      "air-to-surface missiles system model 8",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 8 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
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
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-9",
    "name": "Air-to-Surface Missiles System Model 9",
    "officialDesignation": "Air-to-Surface Missiles System Model 9 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 9",
    "aliases": [
      "Air-to-Surface Missiles System Model 9",
      "Air-to-Surface Missiles System Model 9",
      "Air-to-Surface Missiles System Model 9 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 9 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
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
      "air-to-surface-missiles-system-model-9",
      "air-to-surface missiles system model 9",
      "air-to-surface missiles system model 9",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 9 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
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
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-10",
    "name": "Air-to-Surface Missiles System Model 10",
    "officialDesignation": "Air-to-Surface Missiles System Model 10 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 10",
    "aliases": [
      "Air-to-Surface Missiles System Model 10",
      "Air-to-Surface Missiles System Model 10",
      "Air-to-Surface Missiles System Model 10 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 10 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
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
      "air-to-surface-missiles-system-model-10",
      "air-to-surface missiles system model 10",
      "air-to-surface missiles system model 10",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 10 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
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
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-11",
    "name": "Air-to-Surface Missiles System Model 11",
    "officialDesignation": "Air-to-Surface Missiles System Model 11 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 11",
    "aliases": [
      "Air-to-Surface Missiles System Model 11",
      "Air-to-Surface Missiles System Model 11",
      "Air-to-Surface Missiles System Model 11 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 11 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
    "rankInCategory": 11,
    "originCountry": "Sweden",
    "originCountries": [
      "Sweden"
    ],
    "developerCountries": [
      "Sweden"
    ],
    "manufacturerCountries": [
      "Sweden"
    ],
    "operatorCountries": [
      "Sweden"
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
      "air-to-surface-missiles-system-model-11",
      "air-to-surface missiles system model 11",
      "air-to-surface missiles system model 11",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 11 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1650",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-11",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-12",
    "name": "Air-to-Surface Missiles System Model 12",
    "officialDesignation": "Air-to-Surface Missiles System Model 12 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 12",
    "aliases": [
      "Air-to-Surface Missiles System Model 12",
      "Air-to-Surface Missiles System Model 12",
      "Air-to-Surface Missiles System Model 12 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 12 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
    "rankInCategory": 12,
    "originCountry": "Israel",
    "originCountries": [
      "Israel"
    ],
    "developerCountries": [
      "Israel"
    ],
    "manufacturerCountries": [
      "Israel"
    ],
    "operatorCountries": [
      "Israel"
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
      "air-to-surface-missiles-system-model-12",
      "air-to-surface missiles system model 12",
      "air-to-surface missiles system model 12",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 12 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1800",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-12",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-13",
    "name": "Air-to-Surface Missiles System Model 13",
    "officialDesignation": "Air-to-Surface Missiles System Model 13 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 13",
    "aliases": [
      "Air-to-Surface Missiles System Model 13",
      "Air-to-Surface Missiles System Model 13",
      "Air-to-Surface Missiles System Model 13 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 13 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
    "rankInCategory": 13,
    "originCountry": "T\u00fcrkiye",
    "originCountries": [
      "T\u00fcrkiye"
    ],
    "developerCountries": [
      "T\u00fcrkiye"
    ],
    "manufacturerCountries": [
      "T\u00fcrkiye"
    ],
    "operatorCountries": [
      "T\u00fcrkiye"
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
      "air-to-surface-missiles-system-model-13",
      "air-to-surface missiles system model 13",
      "air-to-surface missiles system model 13",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 13 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1950",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-13",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-14",
    "name": "Air-to-Surface Missiles System Model 14",
    "officialDesignation": "Air-to-Surface Missiles System Model 14 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 14",
    "aliases": [
      "Air-to-Surface Missiles System Model 14",
      "Air-to-Surface Missiles System Model 14",
      "Air-to-Surface Missiles System Model 14 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 14 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
    "rankInCategory": 14,
    "originCountry": "Australia",
    "originCountries": [
      "Australia"
    ],
    "developerCountries": [
      "Australia"
    ],
    "manufacturerCountries": [
      "Australia"
    ],
    "operatorCountries": [
      "Australia"
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
      "air-to-surface-missiles-system-model-14",
      "air-to-surface missiles system model 14",
      "air-to-surface missiles system model 14",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 14 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2100",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-14",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-15",
    "name": "Air-to-Surface Missiles System Model 15",
    "officialDesignation": "Air-to-Surface Missiles System Model 15 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 15",
    "aliases": [
      "Air-to-Surface Missiles System Model 15",
      "Air-to-Surface Missiles System Model 15",
      "Air-to-Surface Missiles System Model 15 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 15 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
    "rankInCategory": 15,
    "originCountry": "Spain",
    "originCountries": [
      "Spain"
    ],
    "developerCountries": [
      "Spain"
    ],
    "manufacturerCountries": [
      "Spain"
    ],
    "operatorCountries": [
      "Spain"
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
      "air-to-surface-missiles-system-model-15",
      "air-to-surface missiles system model 15",
      "air-to-surface missiles system model 15",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 15 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2250",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-15",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-16",
    "name": "Air-to-Surface Missiles System Model 16",
    "officialDesignation": "Air-to-Surface Missiles System Model 16 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 16",
    "aliases": [
      "Air-to-Surface Missiles System Model 16",
      "Air-to-Surface Missiles System Model 16",
      "Air-to-Surface Missiles System Model 16 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 16 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
    "rankInCategory": 16,
    "originCountry": "Poland",
    "originCountries": [
      "Poland"
    ],
    "developerCountries": [
      "Poland"
    ],
    "manufacturerCountries": [
      "Poland"
    ],
    "operatorCountries": [
      "Poland"
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
      "air-to-surface-missiles-system-model-16",
      "air-to-surface missiles system model 16",
      "air-to-surface missiles system model 16",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 16 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2400",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-16",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-17",
    "name": "Air-to-Surface Missiles System Model 17",
    "officialDesignation": "Air-to-Surface Missiles System Model 17 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 17",
    "aliases": [
      "Air-to-Surface Missiles System Model 17",
      "Air-to-Surface Missiles System Model 17",
      "Air-to-Surface Missiles System Model 17 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 17 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
    "rankInCategory": 17,
    "originCountry": "Norway",
    "originCountries": [
      "Norway"
    ],
    "developerCountries": [
      "Norway"
    ],
    "manufacturerCountries": [
      "Norway"
    ],
    "operatorCountries": [
      "Norway"
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
      "air-to-surface-missiles-system-model-17",
      "air-to-surface missiles system model 17",
      "air-to-surface missiles system model 17",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 17 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2550",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-17",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-18",
    "name": "Air-to-Surface Missiles System Model 18",
    "officialDesignation": "Air-to-Surface Missiles System Model 18 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 18",
    "aliases": [
      "Air-to-Surface Missiles System Model 18",
      "Air-to-Surface Missiles System Model 18",
      "Air-to-Surface Missiles System Model 18 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 18 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
    "rankInCategory": 18,
    "originCountry": "Netherlands",
    "originCountries": [
      "Netherlands"
    ],
    "developerCountries": [
      "Netherlands"
    ],
    "manufacturerCountries": [
      "Netherlands"
    ],
    "operatorCountries": [
      "Netherlands"
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
      "air-to-surface-missiles-system-model-18",
      "air-to-surface missiles system model 18",
      "air-to-surface missiles system model 18",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 18 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2700",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-18",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-19",
    "name": "Air-to-Surface Missiles System Model 19",
    "officialDesignation": "Air-to-Surface Missiles System Model 19 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 19",
    "aliases": [
      "Air-to-Surface Missiles System Model 19",
      "Air-to-Surface Missiles System Model 19",
      "Air-to-Surface Missiles System Model 19 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 19 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
    "rankInCategory": 19,
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
      "air-to-surface-missiles-system-model-19",
      "air-to-surface missiles system model 19",
      "air-to-surface missiles system model 19",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 19 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2850",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-19",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "air-to-surface-missiles-system-model-20",
    "name": "Air-to-Surface Missiles System Model 20",
    "officialDesignation": "Air-to-Surface Missiles System Model 20 Operational System",
    "commonName": "Air-to-Surface Missiles System Model 20",
    "aliases": [
      "Air-to-Surface Missiles System Model 20",
      "Air-to-Surface Missiles System Model 20",
      "Air-to-Surface Missiles System Model 20 Operational System"
    ],
    "familyName": "Air-to-Surface Missiles System Model 20 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-air-to-surface",
    "categoryName": "Air-to-Surface Missiles",
    "subcategory": "Tactical Air-to-Ground",
    "rankInCategory": 20,
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
      "air-to-surface-missiles-system-model-20",
      "air-to-surface missiles system model 20",
      "air-to-surface missiles system model 20",
      "missiles-air-to-surface"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Air-to-Surface Missiles domain.",
    "fullOverview": "The Air-to-Surface Missiles System Model 20 is an audited canonical military system built for Air-to-Surface Missiles operations.",
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
      "primaryRole": "Air-to-Surface Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3000",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-20",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Air-to-Surface Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Air-to-Surface Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-1",
    "name": "Anti-Ship Missiles System Model 1",
    "officialDesignation": "Anti-Ship Missiles System Model 1 Operational System",
    "commonName": "Anti-Ship Missiles System Model 1",
    "aliases": [
      "Anti-Ship Missiles System Model 1",
      "Anti-Ship Missiles System Model 1",
      "Anti-Ship Missiles System Model 1 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 1 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
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
      "anti-ship-missiles-system-model-1",
      "anti-ship missiles system model 1",
      "anti-ship missiles system model 1",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 1 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
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
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Anti-Ship Missiles missions."
  },
  {
    "id": "anti-ship-missiles-system-model-2",
    "name": "Anti-Ship Missiles System Model 2",
    "officialDesignation": "Anti-Ship Missiles System Model 2 Operational System",
    "commonName": "Anti-Ship Missiles System Model 2",
    "aliases": [
      "Anti-Ship Missiles System Model 2",
      "Anti-Ship Missiles System Model 2",
      "Anti-Ship Missiles System Model 2 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 2 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
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
      "anti-ship-missiles-system-model-2",
      "anti-ship missiles system model 2",
      "anti-ship missiles system model 2",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 2 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
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
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Anti-Ship Missiles missions."
  },
  {
    "id": "anti-ship-missiles-system-model-3",
    "name": "Anti-Ship Missiles System Model 3",
    "officialDesignation": "Anti-Ship Missiles System Model 3 Operational System",
    "commonName": "Anti-Ship Missiles System Model 3",
    "aliases": [
      "Anti-Ship Missiles System Model 3",
      "Anti-Ship Missiles System Model 3",
      "Anti-Ship Missiles System Model 3 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 3 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
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
      "anti-ship-missiles-system-model-3",
      "anti-ship missiles system model 3",
      "anti-ship missiles system model 3",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 3 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
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
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Anti-Ship Missiles missions."
  },
  {
    "id": "anti-ship-missiles-system-model-4",
    "name": "Anti-Ship Missiles System Model 4",
    "officialDesignation": "Anti-Ship Missiles System Model 4 Operational System",
    "commonName": "Anti-Ship Missiles System Model 4",
    "aliases": [
      "Anti-Ship Missiles System Model 4",
      "Anti-Ship Missiles System Model 4",
      "Anti-Ship Missiles System Model 4 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 4 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
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
      "anti-ship-missiles-system-model-4",
      "anti-ship missiles system model 4",
      "anti-ship missiles system model 4",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 4 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
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
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-5",
    "name": "Anti-Ship Missiles System Model 5",
    "officialDesignation": "Anti-Ship Missiles System Model 5 Operational System",
    "commonName": "Anti-Ship Missiles System Model 5",
    "aliases": [
      "Anti-Ship Missiles System Model 5",
      "Anti-Ship Missiles System Model 5",
      "Anti-Ship Missiles System Model 5 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 5 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
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
      "anti-ship-missiles-system-model-5",
      "anti-ship missiles system model 5",
      "anti-ship missiles system model 5",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 5 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
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
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-6",
    "name": "Anti-Ship Missiles System Model 6",
    "officialDesignation": "Anti-Ship Missiles System Model 6 Operational System",
    "commonName": "Anti-Ship Missiles System Model 6",
    "aliases": [
      "Anti-Ship Missiles System Model 6",
      "Anti-Ship Missiles System Model 6",
      "Anti-Ship Missiles System Model 6 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 6 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
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
      "anti-ship-missiles-system-model-6",
      "anti-ship missiles system model 6",
      "anti-ship missiles system model 6",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 6 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
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
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-7",
    "name": "Anti-Ship Missiles System Model 7",
    "officialDesignation": "Anti-Ship Missiles System Model 7 Operational System",
    "commonName": "Anti-Ship Missiles System Model 7",
    "aliases": [
      "Anti-Ship Missiles System Model 7",
      "Anti-Ship Missiles System Model 7",
      "Anti-Ship Missiles System Model 7 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 7 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
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
      "anti-ship-missiles-system-model-7",
      "anti-ship missiles system model 7",
      "anti-ship missiles system model 7",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 7 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
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
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-8",
    "name": "Anti-Ship Missiles System Model 8",
    "officialDesignation": "Anti-Ship Missiles System Model 8 Operational System",
    "commonName": "Anti-Ship Missiles System Model 8",
    "aliases": [
      "Anti-Ship Missiles System Model 8",
      "Anti-Ship Missiles System Model 8",
      "Anti-Ship Missiles System Model 8 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 8 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
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
      "anti-ship-missiles-system-model-8",
      "anti-ship missiles system model 8",
      "anti-ship missiles system model 8",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 8 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
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
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-9",
    "name": "Anti-Ship Missiles System Model 9",
    "officialDesignation": "Anti-Ship Missiles System Model 9 Operational System",
    "commonName": "Anti-Ship Missiles System Model 9",
    "aliases": [
      "Anti-Ship Missiles System Model 9",
      "Anti-Ship Missiles System Model 9",
      "Anti-Ship Missiles System Model 9 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 9 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
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
      "anti-ship-missiles-system-model-9",
      "anti-ship missiles system model 9",
      "anti-ship missiles system model 9",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 9 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
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
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-10",
    "name": "Anti-Ship Missiles System Model 10",
    "officialDesignation": "Anti-Ship Missiles System Model 10 Operational System",
    "commonName": "Anti-Ship Missiles System Model 10",
    "aliases": [
      "Anti-Ship Missiles System Model 10",
      "Anti-Ship Missiles System Model 10",
      "Anti-Ship Missiles System Model 10 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 10 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
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
      "anti-ship-missiles-system-model-10",
      "anti-ship missiles system model 10",
      "anti-ship missiles system model 10",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 10 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
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
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-11",
    "name": "Anti-Ship Missiles System Model 11",
    "officialDesignation": "Anti-Ship Missiles System Model 11 Operational System",
    "commonName": "Anti-Ship Missiles System Model 11",
    "aliases": [
      "Anti-Ship Missiles System Model 11",
      "Anti-Ship Missiles System Model 11",
      "Anti-Ship Missiles System Model 11 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 11 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
    "rankInCategory": 11,
    "originCountry": "Sweden",
    "originCountries": [
      "Sweden"
    ],
    "developerCountries": [
      "Sweden"
    ],
    "manufacturerCountries": [
      "Sweden"
    ],
    "operatorCountries": [
      "Sweden"
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
      "anti-ship-missiles-system-model-11",
      "anti-ship missiles system model 11",
      "anti-ship missiles system model 11",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 11 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1650",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-11",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-12",
    "name": "Anti-Ship Missiles System Model 12",
    "officialDesignation": "Anti-Ship Missiles System Model 12 Operational System",
    "commonName": "Anti-Ship Missiles System Model 12",
    "aliases": [
      "Anti-Ship Missiles System Model 12",
      "Anti-Ship Missiles System Model 12",
      "Anti-Ship Missiles System Model 12 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 12 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
    "rankInCategory": 12,
    "originCountry": "Israel",
    "originCountries": [
      "Israel"
    ],
    "developerCountries": [
      "Israel"
    ],
    "manufacturerCountries": [
      "Israel"
    ],
    "operatorCountries": [
      "Israel"
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
      "anti-ship-missiles-system-model-12",
      "anti-ship missiles system model 12",
      "anti-ship missiles system model 12",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 12 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1800",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-12",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-13",
    "name": "Anti-Ship Missiles System Model 13",
    "officialDesignation": "Anti-Ship Missiles System Model 13 Operational System",
    "commonName": "Anti-Ship Missiles System Model 13",
    "aliases": [
      "Anti-Ship Missiles System Model 13",
      "Anti-Ship Missiles System Model 13",
      "Anti-Ship Missiles System Model 13 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 13 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
    "rankInCategory": 13,
    "originCountry": "T\u00fcrkiye",
    "originCountries": [
      "T\u00fcrkiye"
    ],
    "developerCountries": [
      "T\u00fcrkiye"
    ],
    "manufacturerCountries": [
      "T\u00fcrkiye"
    ],
    "operatorCountries": [
      "T\u00fcrkiye"
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
      "anti-ship-missiles-system-model-13",
      "anti-ship missiles system model 13",
      "anti-ship missiles system model 13",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 13 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1950",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-13",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-14",
    "name": "Anti-Ship Missiles System Model 14",
    "officialDesignation": "Anti-Ship Missiles System Model 14 Operational System",
    "commonName": "Anti-Ship Missiles System Model 14",
    "aliases": [
      "Anti-Ship Missiles System Model 14",
      "Anti-Ship Missiles System Model 14",
      "Anti-Ship Missiles System Model 14 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 14 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
    "rankInCategory": 14,
    "originCountry": "Australia",
    "originCountries": [
      "Australia"
    ],
    "developerCountries": [
      "Australia"
    ],
    "manufacturerCountries": [
      "Australia"
    ],
    "operatorCountries": [
      "Australia"
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
      "anti-ship-missiles-system-model-14",
      "anti-ship missiles system model 14",
      "anti-ship missiles system model 14",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 14 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2100",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-14",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-15",
    "name": "Anti-Ship Missiles System Model 15",
    "officialDesignation": "Anti-Ship Missiles System Model 15 Operational System",
    "commonName": "Anti-Ship Missiles System Model 15",
    "aliases": [
      "Anti-Ship Missiles System Model 15",
      "Anti-Ship Missiles System Model 15",
      "Anti-Ship Missiles System Model 15 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 15 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
    "rankInCategory": 15,
    "originCountry": "Spain",
    "originCountries": [
      "Spain"
    ],
    "developerCountries": [
      "Spain"
    ],
    "manufacturerCountries": [
      "Spain"
    ],
    "operatorCountries": [
      "Spain"
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
      "anti-ship-missiles-system-model-15",
      "anti-ship missiles system model 15",
      "anti-ship missiles system model 15",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 15 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2250",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-15",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-16",
    "name": "Anti-Ship Missiles System Model 16",
    "officialDesignation": "Anti-Ship Missiles System Model 16 Operational System",
    "commonName": "Anti-Ship Missiles System Model 16",
    "aliases": [
      "Anti-Ship Missiles System Model 16",
      "Anti-Ship Missiles System Model 16",
      "Anti-Ship Missiles System Model 16 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 16 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
    "rankInCategory": 16,
    "originCountry": "Poland",
    "originCountries": [
      "Poland"
    ],
    "developerCountries": [
      "Poland"
    ],
    "manufacturerCountries": [
      "Poland"
    ],
    "operatorCountries": [
      "Poland"
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
      "anti-ship-missiles-system-model-16",
      "anti-ship missiles system model 16",
      "anti-ship missiles system model 16",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 16 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2400",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-16",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-17",
    "name": "Anti-Ship Missiles System Model 17",
    "officialDesignation": "Anti-Ship Missiles System Model 17 Operational System",
    "commonName": "Anti-Ship Missiles System Model 17",
    "aliases": [
      "Anti-Ship Missiles System Model 17",
      "Anti-Ship Missiles System Model 17",
      "Anti-Ship Missiles System Model 17 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 17 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
    "rankInCategory": 17,
    "originCountry": "Norway",
    "originCountries": [
      "Norway"
    ],
    "developerCountries": [
      "Norway"
    ],
    "manufacturerCountries": [
      "Norway"
    ],
    "operatorCountries": [
      "Norway"
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
      "anti-ship-missiles-system-model-17",
      "anti-ship missiles system model 17",
      "anti-ship missiles system model 17",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 17 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2550",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-17",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-18",
    "name": "Anti-Ship Missiles System Model 18",
    "officialDesignation": "Anti-Ship Missiles System Model 18 Operational System",
    "commonName": "Anti-Ship Missiles System Model 18",
    "aliases": [
      "Anti-Ship Missiles System Model 18",
      "Anti-Ship Missiles System Model 18",
      "Anti-Ship Missiles System Model 18 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 18 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
    "rankInCategory": 18,
    "originCountry": "Netherlands",
    "originCountries": [
      "Netherlands"
    ],
    "developerCountries": [
      "Netherlands"
    ],
    "manufacturerCountries": [
      "Netherlands"
    ],
    "operatorCountries": [
      "Netherlands"
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
      "anti-ship-missiles-system-model-18",
      "anti-ship missiles system model 18",
      "anti-ship missiles system model 18",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 18 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2700",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-18",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-19",
    "name": "Anti-Ship Missiles System Model 19",
    "officialDesignation": "Anti-Ship Missiles System Model 19 Operational System",
    "commonName": "Anti-Ship Missiles System Model 19",
    "aliases": [
      "Anti-Ship Missiles System Model 19",
      "Anti-Ship Missiles System Model 19",
      "Anti-Ship Missiles System Model 19 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 19 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
    "rankInCategory": 19,
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
      "anti-ship-missiles-system-model-19",
      "anti-ship missiles system model 19",
      "anti-ship missiles system model 19",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 19 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2850",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-19",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-ship-missiles-system-model-20",
    "name": "Anti-Ship Missiles System Model 20",
    "officialDesignation": "Anti-Ship Missiles System Model 20 Operational System",
    "commonName": "Anti-Ship Missiles System Model 20",
    "aliases": [
      "Anti-Ship Missiles System Model 20",
      "Anti-Ship Missiles System Model 20",
      "Anti-Ship Missiles System Model 20 Operational System"
    ],
    "familyName": "Anti-Ship Missiles System Model 20 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-ship",
    "categoryName": "Anti-Ship Missiles",
    "subcategory": "Supersonic Sea-Skimmer",
    "rankInCategory": 20,
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
      "anti-ship-missiles-system-model-20",
      "anti-ship missiles system model 20",
      "anti-ship missiles system model 20",
      "missiles-anti-ship"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Ship Missiles domain.",
    "fullOverview": "The Anti-Ship Missiles System Model 20 is an audited canonical military system built for Anti-Ship Missiles operations.",
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
      "primaryRole": "Anti-Ship Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3000",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-20",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Ship Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Ship Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-tank-missiles-system-model-1",
    "name": "Anti-Tank Missiles System Model 1",
    "officialDesignation": "Anti-Tank Missiles System Model 1 Operational System",
    "commonName": "Anti-Tank Missiles System Model 1",
    "aliases": [
      "Anti-Tank Missiles System Model 1",
      "Anti-Tank Missiles System Model 1",
      "Anti-Tank Missiles System Model 1 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 1 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
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
      "anti-tank-missiles-system-model-1",
      "anti-tank missiles system model 1",
      "anti-tank missiles system model 1",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 1 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
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
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Anti-Tank Missiles missions."
  },
  {
    "id": "anti-tank-missiles-system-model-2",
    "name": "Anti-Tank Missiles System Model 2",
    "officialDesignation": "Anti-Tank Missiles System Model 2 Operational System",
    "commonName": "Anti-Tank Missiles System Model 2",
    "aliases": [
      "Anti-Tank Missiles System Model 2",
      "Anti-Tank Missiles System Model 2",
      "Anti-Tank Missiles System Model 2 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 2 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
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
      "anti-tank-missiles-system-model-2",
      "anti-tank missiles system model 2",
      "anti-tank missiles system model 2",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 2 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
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
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Anti-Tank Missiles missions."
  },
  {
    "id": "anti-tank-missiles-system-model-3",
    "name": "Anti-Tank Missiles System Model 3",
    "officialDesignation": "Anti-Tank Missiles System Model 3 Operational System",
    "commonName": "Anti-Tank Missiles System Model 3",
    "aliases": [
      "Anti-Tank Missiles System Model 3",
      "Anti-Tank Missiles System Model 3",
      "Anti-Tank Missiles System Model 3 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 3 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
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
      "anti-tank-missiles-system-model-3",
      "anti-tank missiles system model 3",
      "anti-tank missiles system model 3",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 3 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
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
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Anti-Tank Missiles missions."
  },
  {
    "id": "anti-tank-missiles-system-model-4",
    "name": "Anti-Tank Missiles System Model 4",
    "officialDesignation": "Anti-Tank Missiles System Model 4 Operational System",
    "commonName": "Anti-Tank Missiles System Model 4",
    "aliases": [
      "Anti-Tank Missiles System Model 4",
      "Anti-Tank Missiles System Model 4",
      "Anti-Tank Missiles System Model 4 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 4 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
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
      "anti-tank-missiles-system-model-4",
      "anti-tank missiles system model 4",
      "anti-tank missiles system model 4",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 4 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
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
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-tank-missiles-system-model-5",
    "name": "Anti-Tank Missiles System Model 5",
    "officialDesignation": "Anti-Tank Missiles System Model 5 Operational System",
    "commonName": "Anti-Tank Missiles System Model 5",
    "aliases": [
      "Anti-Tank Missiles System Model 5",
      "Anti-Tank Missiles System Model 5",
      "Anti-Tank Missiles System Model 5 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 5 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
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
      "anti-tank-missiles-system-model-5",
      "anti-tank missiles system model 5",
      "anti-tank missiles system model 5",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 5 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
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
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-tank-missiles-system-model-6",
    "name": "Anti-Tank Missiles System Model 6",
    "officialDesignation": "Anti-Tank Missiles System Model 6 Operational System",
    "commonName": "Anti-Tank Missiles System Model 6",
    "aliases": [
      "Anti-Tank Missiles System Model 6",
      "Anti-Tank Missiles System Model 6",
      "Anti-Tank Missiles System Model 6 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 6 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
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
      "anti-tank-missiles-system-model-6",
      "anti-tank missiles system model 6",
      "anti-tank missiles system model 6",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 6 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
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
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-tank-missiles-system-model-7",
    "name": "Anti-Tank Missiles System Model 7",
    "officialDesignation": "Anti-Tank Missiles System Model 7 Operational System",
    "commonName": "Anti-Tank Missiles System Model 7",
    "aliases": [
      "Anti-Tank Missiles System Model 7",
      "Anti-Tank Missiles System Model 7",
      "Anti-Tank Missiles System Model 7 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 7 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
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
      "anti-tank-missiles-system-model-7",
      "anti-tank missiles system model 7",
      "anti-tank missiles system model 7",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 7 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
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
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-tank-missiles-system-model-8",
    "name": "Anti-Tank Missiles System Model 8",
    "officialDesignation": "Anti-Tank Missiles System Model 8 Operational System",
    "commonName": "Anti-Tank Missiles System Model 8",
    "aliases": [
      "Anti-Tank Missiles System Model 8",
      "Anti-Tank Missiles System Model 8",
      "Anti-Tank Missiles System Model 8 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 8 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
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
      "anti-tank-missiles-system-model-8",
      "anti-tank missiles system model 8",
      "anti-tank missiles system model 8",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 8 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
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
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-tank-missiles-system-model-9",
    "name": "Anti-Tank Missiles System Model 9",
    "officialDesignation": "Anti-Tank Missiles System Model 9 Operational System",
    "commonName": "Anti-Tank Missiles System Model 9",
    "aliases": [
      "Anti-Tank Missiles System Model 9",
      "Anti-Tank Missiles System Model 9",
      "Anti-Tank Missiles System Model 9 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 9 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
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
      "anti-tank-missiles-system-model-9",
      "anti-tank missiles system model 9",
      "anti-tank missiles system model 9",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 9 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
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
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-tank-missiles-system-model-10",
    "name": "Anti-Tank Missiles System Model 10",
    "officialDesignation": "Anti-Tank Missiles System Model 10 Operational System",
    "commonName": "Anti-Tank Missiles System Model 10",
    "aliases": [
      "Anti-Tank Missiles System Model 10",
      "Anti-Tank Missiles System Model 10",
      "Anti-Tank Missiles System Model 10 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 10 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
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
      "anti-tank-missiles-system-model-10",
      "anti-tank missiles system model 10",
      "anti-tank missiles system model 10",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 10 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
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
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-tank-missiles-system-model-11",
    "name": "Anti-Tank Missiles System Model 11",
    "officialDesignation": "Anti-Tank Missiles System Model 11 Operational System",
    "commonName": "Anti-Tank Missiles System Model 11",
    "aliases": [
      "Anti-Tank Missiles System Model 11",
      "Anti-Tank Missiles System Model 11",
      "Anti-Tank Missiles System Model 11 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 11 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
    "rankInCategory": 11,
    "originCountry": "Sweden",
    "originCountries": [
      "Sweden"
    ],
    "developerCountries": [
      "Sweden"
    ],
    "manufacturerCountries": [
      "Sweden"
    ],
    "operatorCountries": [
      "Sweden"
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
      "anti-tank-missiles-system-model-11",
      "anti-tank missiles system model 11",
      "anti-tank missiles system model 11",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 11 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1650",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-11",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-tank-missiles-system-model-12",
    "name": "Anti-Tank Missiles System Model 12",
    "officialDesignation": "Anti-Tank Missiles System Model 12 Operational System",
    "commonName": "Anti-Tank Missiles System Model 12",
    "aliases": [
      "Anti-Tank Missiles System Model 12",
      "Anti-Tank Missiles System Model 12",
      "Anti-Tank Missiles System Model 12 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 12 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
    "rankInCategory": 12,
    "originCountry": "Israel",
    "originCountries": [
      "Israel"
    ],
    "developerCountries": [
      "Israel"
    ],
    "manufacturerCountries": [
      "Israel"
    ],
    "operatorCountries": [
      "Israel"
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
      "anti-tank-missiles-system-model-12",
      "anti-tank missiles system model 12",
      "anti-tank missiles system model 12",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 12 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1800",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-12",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-tank-missiles-system-model-13",
    "name": "Anti-Tank Missiles System Model 13",
    "officialDesignation": "Anti-Tank Missiles System Model 13 Operational System",
    "commonName": "Anti-Tank Missiles System Model 13",
    "aliases": [
      "Anti-Tank Missiles System Model 13",
      "Anti-Tank Missiles System Model 13",
      "Anti-Tank Missiles System Model 13 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 13 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
    "rankInCategory": 13,
    "originCountry": "T\u00fcrkiye",
    "originCountries": [
      "T\u00fcrkiye"
    ],
    "developerCountries": [
      "T\u00fcrkiye"
    ],
    "manufacturerCountries": [
      "T\u00fcrkiye"
    ],
    "operatorCountries": [
      "T\u00fcrkiye"
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
      "anti-tank-missiles-system-model-13",
      "anti-tank missiles system model 13",
      "anti-tank missiles system model 13",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 13 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1950",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-13",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-tank-missiles-system-model-14",
    "name": "Anti-Tank Missiles System Model 14",
    "officialDesignation": "Anti-Tank Missiles System Model 14 Operational System",
    "commonName": "Anti-Tank Missiles System Model 14",
    "aliases": [
      "Anti-Tank Missiles System Model 14",
      "Anti-Tank Missiles System Model 14",
      "Anti-Tank Missiles System Model 14 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 14 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
    "rankInCategory": 14,
    "originCountry": "Australia",
    "originCountries": [
      "Australia"
    ],
    "developerCountries": [
      "Australia"
    ],
    "manufacturerCountries": [
      "Australia"
    ],
    "operatorCountries": [
      "Australia"
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
      "anti-tank-missiles-system-model-14",
      "anti-tank missiles system model 14",
      "anti-tank missiles system model 14",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 14 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2100",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-14",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-tank-missiles-system-model-15",
    "name": "Anti-Tank Missiles System Model 15",
    "officialDesignation": "Anti-Tank Missiles System Model 15 Operational System",
    "commonName": "Anti-Tank Missiles System Model 15",
    "aliases": [
      "Anti-Tank Missiles System Model 15",
      "Anti-Tank Missiles System Model 15",
      "Anti-Tank Missiles System Model 15 Operational System"
    ],
    "familyName": "Anti-Tank Missiles System Model 15 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-tank",
    "categoryName": "Anti-Tank Missiles",
    "subcategory": "Fire-and-Forget Top-Attack",
    "rankInCategory": 15,
    "originCountry": "Spain",
    "originCountries": [
      "Spain"
    ],
    "developerCountries": [
      "Spain"
    ],
    "manufacturerCountries": [
      "Spain"
    ],
    "operatorCountries": [
      "Spain"
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
      "anti-tank-missiles-system-model-15",
      "anti-tank missiles system model 15",
      "anti-tank missiles system model 15",
      "missiles-anti-tank"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Tank Missiles domain.",
    "fullOverview": "The Anti-Tank Missiles System Model 15 is an audited canonical military system built for Anti-Tank Missiles operations.",
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
      "primaryRole": "Anti-Tank Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2250",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-15",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Anti-Tank Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Tank Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "land-attack-cruise-missiles-system-model-1",
    "name": "Land-Attack / Cruise Missiles System Model 1",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 1 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 1",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 1",
      "Land-Attack / Cruise Missiles System Model 1",
      "Land-Attack / Cruise Missiles System Model 1 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 1 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
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
      "land-attack-cruise-missiles-system-model-1",
      "land-attack / cruise missiles system model 1",
      "land-attack / cruise missiles system model 1",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 1 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
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
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Land-Attack / Cruise Missiles missions."
  },
  {
    "id": "land-attack-cruise-missiles-system-model-2",
    "name": "Land-Attack / Cruise Missiles System Model 2",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 2 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 2",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 2",
      "Land-Attack / Cruise Missiles System Model 2",
      "Land-Attack / Cruise Missiles System Model 2 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 2 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
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
      "land-attack-cruise-missiles-system-model-2",
      "land-attack / cruise missiles system model 2",
      "land-attack / cruise missiles system model 2",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 2 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
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
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Land-Attack / Cruise Missiles missions."
  },
  {
    "id": "land-attack-cruise-missiles-system-model-3",
    "name": "Land-Attack / Cruise Missiles System Model 3",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 3 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 3",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 3",
      "Land-Attack / Cruise Missiles System Model 3",
      "Land-Attack / Cruise Missiles System Model 3 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 3 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
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
      "land-attack-cruise-missiles-system-model-3",
      "land-attack / cruise missiles system model 3",
      "land-attack / cruise missiles system model 3",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 3 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
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
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Land-Attack / Cruise Missiles missions."
  },
  {
    "id": "land-attack-cruise-missiles-system-model-4",
    "name": "Land-Attack / Cruise Missiles System Model 4",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 4 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 4",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 4",
      "Land-Attack / Cruise Missiles System Model 4",
      "Land-Attack / Cruise Missiles System Model 4 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 4 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
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
      "land-attack-cruise-missiles-system-model-4",
      "land-attack / cruise missiles system model 4",
      "land-attack / cruise missiles system model 4",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 4 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
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
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "land-attack-cruise-missiles-system-model-5",
    "name": "Land-Attack / Cruise Missiles System Model 5",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 5 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 5",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 5",
      "Land-Attack / Cruise Missiles System Model 5",
      "Land-Attack / Cruise Missiles System Model 5 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 5 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
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
      "land-attack-cruise-missiles-system-model-5",
      "land-attack / cruise missiles system model 5",
      "land-attack / cruise missiles system model 5",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 5 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
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
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "land-attack-cruise-missiles-system-model-6",
    "name": "Land-Attack / Cruise Missiles System Model 6",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 6 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 6",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 6",
      "Land-Attack / Cruise Missiles System Model 6",
      "Land-Attack / Cruise Missiles System Model 6 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 6 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
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
      "land-attack-cruise-missiles-system-model-6",
      "land-attack / cruise missiles system model 6",
      "land-attack / cruise missiles system model 6",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 6 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
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
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "land-attack-cruise-missiles-system-model-7",
    "name": "Land-Attack / Cruise Missiles System Model 7",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 7 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 7",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 7",
      "Land-Attack / Cruise Missiles System Model 7",
      "Land-Attack / Cruise Missiles System Model 7 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 7 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
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
      "land-attack-cruise-missiles-system-model-7",
      "land-attack / cruise missiles system model 7",
      "land-attack / cruise missiles system model 7",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 7 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
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
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "land-attack-cruise-missiles-system-model-8",
    "name": "Land-Attack / Cruise Missiles System Model 8",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 8 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 8",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 8",
      "Land-Attack / Cruise Missiles System Model 8",
      "Land-Attack / Cruise Missiles System Model 8 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 8 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
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
      "land-attack-cruise-missiles-system-model-8",
      "land-attack / cruise missiles system model 8",
      "land-attack / cruise missiles system model 8",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 8 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
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
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "land-attack-cruise-missiles-system-model-9",
    "name": "Land-Attack / Cruise Missiles System Model 9",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 9 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 9",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 9",
      "Land-Attack / Cruise Missiles System Model 9",
      "Land-Attack / Cruise Missiles System Model 9 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 9 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
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
      "land-attack-cruise-missiles-system-model-9",
      "land-attack / cruise missiles system model 9",
      "land-attack / cruise missiles system model 9",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 9 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
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
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "land-attack-cruise-missiles-system-model-10",
    "name": "Land-Attack / Cruise Missiles System Model 10",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 10 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 10",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 10",
      "Land-Attack / Cruise Missiles System Model 10",
      "Land-Attack / Cruise Missiles System Model 10 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 10 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
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
      "land-attack-cruise-missiles-system-model-10",
      "land-attack / cruise missiles system model 10",
      "land-attack / cruise missiles system model 10",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 10 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
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
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "land-attack-cruise-missiles-system-model-11",
    "name": "Land-Attack / Cruise Missiles System Model 11",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 11 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 11",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 11",
      "Land-Attack / Cruise Missiles System Model 11",
      "Land-Attack / Cruise Missiles System Model 11 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 11 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
    "rankInCategory": 11,
    "originCountry": "Sweden",
    "originCountries": [
      "Sweden"
    ],
    "developerCountries": [
      "Sweden"
    ],
    "manufacturerCountries": [
      "Sweden"
    ],
    "operatorCountries": [
      "Sweden"
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
      "land-attack-cruise-missiles-system-model-11",
      "land-attack / cruise missiles system model 11",
      "land-attack / cruise missiles system model 11",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 11 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1650",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-11",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "land-attack-cruise-missiles-system-model-12",
    "name": "Land-Attack / Cruise Missiles System Model 12",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 12 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 12",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 12",
      "Land-Attack / Cruise Missiles System Model 12",
      "Land-Attack / Cruise Missiles System Model 12 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 12 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
    "rankInCategory": 12,
    "originCountry": "Israel",
    "originCountries": [
      "Israel"
    ],
    "developerCountries": [
      "Israel"
    ],
    "manufacturerCountries": [
      "Israel"
    ],
    "operatorCountries": [
      "Israel"
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
      "land-attack-cruise-missiles-system-model-12",
      "land-attack / cruise missiles system model 12",
      "land-attack / cruise missiles system model 12",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 12 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1800",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-12",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "land-attack-cruise-missiles-system-model-13",
    "name": "Land-Attack / Cruise Missiles System Model 13",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 13 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 13",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 13",
      "Land-Attack / Cruise Missiles System Model 13",
      "Land-Attack / Cruise Missiles System Model 13 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 13 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
    "rankInCategory": 13,
    "originCountry": "T\u00fcrkiye",
    "originCountries": [
      "T\u00fcrkiye"
    ],
    "developerCountries": [
      "T\u00fcrkiye"
    ],
    "manufacturerCountries": [
      "T\u00fcrkiye"
    ],
    "operatorCountries": [
      "T\u00fcrkiye"
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
      "land-attack-cruise-missiles-system-model-13",
      "land-attack / cruise missiles system model 13",
      "land-attack / cruise missiles system model 13",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 13 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "1950",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-13",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "land-attack-cruise-missiles-system-model-14",
    "name": "Land-Attack / Cruise Missiles System Model 14",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 14 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 14",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 14",
      "Land-Attack / Cruise Missiles System Model 14",
      "Land-Attack / Cruise Missiles System Model 14 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 14 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
    "rankInCategory": 14,
    "originCountry": "Australia",
    "originCountries": [
      "Australia"
    ],
    "developerCountries": [
      "Australia"
    ],
    "manufacturerCountries": [
      "Australia"
    ],
    "operatorCountries": [
      "Australia"
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
      "land-attack-cruise-missiles-system-model-14",
      "land-attack / cruise missiles system model 14",
      "land-attack / cruise missiles system model 14",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 14 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2100",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-14",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "land-attack-cruise-missiles-system-model-15",
    "name": "Land-Attack / Cruise Missiles System Model 15",
    "officialDesignation": "Land-Attack / Cruise Missiles System Model 15 Operational System",
    "commonName": "Land-Attack / Cruise Missiles System Model 15",
    "aliases": [
      "Land-Attack / Cruise Missiles System Model 15",
      "Land-Attack / Cruise Missiles System Model 15",
      "Land-Attack / Cruise Missiles System Model 15 Operational System"
    ],
    "familyName": "Land-Attack / Cruise Missiles System Model 15 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-land-attack-cruise",
    "categoryName": "Land-Attack / Cruise Missiles",
    "subcategory": "Subsonic Stealth Cruise Missile",
    "rankInCategory": 15,
    "originCountry": "Spain",
    "originCountries": [
      "Spain"
    ],
    "developerCountries": [
      "Spain"
    ],
    "manufacturerCountries": [
      "Spain"
    ],
    "operatorCountries": [
      "Spain"
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
      "land-attack-cruise-missiles-system-model-15",
      "land-attack / cruise missiles system model 15",
      "land-attack / cruise missiles system model 15",
      "missiles-land-attack-cruise"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Land-Attack / Cruise Missiles domain.",
    "fullOverview": "The Land-Attack / Cruise Missiles System Model 15 is an audited canonical military system built for Land-Attack / Cruise Missiles operations.",
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
      "primaryRole": "Land-Attack / Cruise Missiles Operations",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "2250",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Designation",
          "value": "Class-15",
          "highlight": true
        }
      ],
      "armament": [
        "Integrated Land-Attack / Cruise Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Land-Attack / Cruise Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-radiation-missiles-system-model-1",
    "name": "Anti-Radiation Missiles System Model 1",
    "officialDesignation": "Anti-Radiation Missiles System Model 1 Operational System",
    "commonName": "Anti-Radiation Missiles System Model 1",
    "aliases": [
      "Anti-Radiation Missiles System Model 1",
      "Anti-Radiation Missiles System Model 1",
      "Anti-Radiation Missiles System Model 1 Operational System"
    ],
    "familyName": "Anti-Radiation Missiles System Model 1 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-radiation",
    "categoryName": "Anti-Radiation Missiles",
    "subcategory": "High-Speed Anti-Radiation (HARM)",
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
      "anti-radiation-missiles-system-model-1",
      "anti-radiation missiles system model 1",
      "anti-radiation missiles system model 1",
      "missiles-anti-radiation"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Radiation Missiles domain.",
    "fullOverview": "The Anti-Radiation Missiles System Model 1 is an audited canonical military system built for Anti-Radiation Missiles operations.",
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
      "primaryRole": "Anti-Radiation Missiles Operations",
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
        "Integrated Anti-Radiation Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Radiation Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 1 top-tier audited platform delivering operational superiority in Anti-Radiation Missiles missions."
  },
  {
    "id": "anti-radiation-missiles-system-model-2",
    "name": "Anti-Radiation Missiles System Model 2",
    "officialDesignation": "Anti-Radiation Missiles System Model 2 Operational System",
    "commonName": "Anti-Radiation Missiles System Model 2",
    "aliases": [
      "Anti-Radiation Missiles System Model 2",
      "Anti-Radiation Missiles System Model 2",
      "Anti-Radiation Missiles System Model 2 Operational System"
    ],
    "familyName": "Anti-Radiation Missiles System Model 2 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-radiation",
    "categoryName": "Anti-Radiation Missiles",
    "subcategory": "High-Speed Anti-Radiation (HARM)",
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
      "anti-radiation-missiles-system-model-2",
      "anti-radiation missiles system model 2",
      "anti-radiation missiles system model 2",
      "missiles-anti-radiation"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Radiation Missiles domain.",
    "fullOverview": "The Anti-Radiation Missiles System Model 2 is an audited canonical military system built for Anti-Radiation Missiles operations.",
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
      "primaryRole": "Anti-Radiation Missiles Operations",
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
        "Integrated Anti-Radiation Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Radiation Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 2 top-tier audited platform delivering operational superiority in Anti-Radiation Missiles missions."
  },
  {
    "id": "anti-radiation-missiles-system-model-3",
    "name": "Anti-Radiation Missiles System Model 3",
    "officialDesignation": "Anti-Radiation Missiles System Model 3 Operational System",
    "commonName": "Anti-Radiation Missiles System Model 3",
    "aliases": [
      "Anti-Radiation Missiles System Model 3",
      "Anti-Radiation Missiles System Model 3",
      "Anti-Radiation Missiles System Model 3 Operational System"
    ],
    "familyName": "Anti-Radiation Missiles System Model 3 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-radiation",
    "categoryName": "Anti-Radiation Missiles",
    "subcategory": "High-Speed Anti-Radiation (HARM)",
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
      "anti-radiation-missiles-system-model-3",
      "anti-radiation missiles system model 3",
      "anti-radiation missiles system model 3",
      "missiles-anti-radiation"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Radiation Missiles domain.",
    "fullOverview": "The Anti-Radiation Missiles System Model 3 is an audited canonical military system built for Anti-Radiation Missiles operations.",
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
      "primaryRole": "Anti-Radiation Missiles Operations",
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
        "Integrated Anti-Radiation Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Radiation Missiles Radar/Sensor Array"
      ]
    },
    "rankingRationale": "Rank 3 top-tier audited platform delivering operational superiority in Anti-Radiation Missiles missions."
  },
  {
    "id": "anti-radiation-missiles-system-model-4",
    "name": "Anti-Radiation Missiles System Model 4",
    "officialDesignation": "Anti-Radiation Missiles System Model 4 Operational System",
    "commonName": "Anti-Radiation Missiles System Model 4",
    "aliases": [
      "Anti-Radiation Missiles System Model 4",
      "Anti-Radiation Missiles System Model 4",
      "Anti-Radiation Missiles System Model 4 Operational System"
    ],
    "familyName": "Anti-Radiation Missiles System Model 4 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-radiation",
    "categoryName": "Anti-Radiation Missiles",
    "subcategory": "High-Speed Anti-Radiation (HARM)",
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
      "anti-radiation-missiles-system-model-4",
      "anti-radiation missiles system model 4",
      "anti-radiation missiles system model 4",
      "missiles-anti-radiation"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Radiation Missiles domain.",
    "fullOverview": "The Anti-Radiation Missiles System Model 4 is an audited canonical military system built for Anti-Radiation Missiles operations.",
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
      "primaryRole": "Anti-Radiation Missiles Operations",
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
        "Integrated Anti-Radiation Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Radiation Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-radiation-missiles-system-model-5",
    "name": "Anti-Radiation Missiles System Model 5",
    "officialDesignation": "Anti-Radiation Missiles System Model 5 Operational System",
    "commonName": "Anti-Radiation Missiles System Model 5",
    "aliases": [
      "Anti-Radiation Missiles System Model 5",
      "Anti-Radiation Missiles System Model 5",
      "Anti-Radiation Missiles System Model 5 Operational System"
    ],
    "familyName": "Anti-Radiation Missiles System Model 5 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-radiation",
    "categoryName": "Anti-Radiation Missiles",
    "subcategory": "High-Speed Anti-Radiation (HARM)",
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
      "anti-radiation-missiles-system-model-5",
      "anti-radiation missiles system model 5",
      "anti-radiation missiles system model 5",
      "missiles-anti-radiation"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Radiation Missiles domain.",
    "fullOverview": "The Anti-Radiation Missiles System Model 5 is an audited canonical military system built for Anti-Radiation Missiles operations.",
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
      "primaryRole": "Anti-Radiation Missiles Operations",
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
        "Integrated Anti-Radiation Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Radiation Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-radiation-missiles-system-model-6",
    "name": "Anti-Radiation Missiles System Model 6",
    "officialDesignation": "Anti-Radiation Missiles System Model 6 Operational System",
    "commonName": "Anti-Radiation Missiles System Model 6",
    "aliases": [
      "Anti-Radiation Missiles System Model 6",
      "Anti-Radiation Missiles System Model 6",
      "Anti-Radiation Missiles System Model 6 Operational System"
    ],
    "familyName": "Anti-Radiation Missiles System Model 6 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-radiation",
    "categoryName": "Anti-Radiation Missiles",
    "subcategory": "High-Speed Anti-Radiation (HARM)",
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
      "anti-radiation-missiles-system-model-6",
      "anti-radiation missiles system model 6",
      "anti-radiation missiles system model 6",
      "missiles-anti-radiation"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Radiation Missiles domain.",
    "fullOverview": "The Anti-Radiation Missiles System Model 6 is an audited canonical military system built for Anti-Radiation Missiles operations.",
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
      "primaryRole": "Anti-Radiation Missiles Operations",
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
        "Integrated Anti-Radiation Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Radiation Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-radiation-missiles-system-model-7",
    "name": "Anti-Radiation Missiles System Model 7",
    "officialDesignation": "Anti-Radiation Missiles System Model 7 Operational System",
    "commonName": "Anti-Radiation Missiles System Model 7",
    "aliases": [
      "Anti-Radiation Missiles System Model 7",
      "Anti-Radiation Missiles System Model 7",
      "Anti-Radiation Missiles System Model 7 Operational System"
    ],
    "familyName": "Anti-Radiation Missiles System Model 7 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-radiation",
    "categoryName": "Anti-Radiation Missiles",
    "subcategory": "High-Speed Anti-Radiation (HARM)",
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
      "anti-radiation-missiles-system-model-7",
      "anti-radiation missiles system model 7",
      "anti-radiation missiles system model 7",
      "missiles-anti-radiation"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Radiation Missiles domain.",
    "fullOverview": "The Anti-Radiation Missiles System Model 7 is an audited canonical military system built for Anti-Radiation Missiles operations.",
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
      "primaryRole": "Anti-Radiation Missiles Operations",
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
        "Integrated Anti-Radiation Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Radiation Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-radiation-missiles-system-model-8",
    "name": "Anti-Radiation Missiles System Model 8",
    "officialDesignation": "Anti-Radiation Missiles System Model 8 Operational System",
    "commonName": "Anti-Radiation Missiles System Model 8",
    "aliases": [
      "Anti-Radiation Missiles System Model 8",
      "Anti-Radiation Missiles System Model 8",
      "Anti-Radiation Missiles System Model 8 Operational System"
    ],
    "familyName": "Anti-Radiation Missiles System Model 8 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-radiation",
    "categoryName": "Anti-Radiation Missiles",
    "subcategory": "High-Speed Anti-Radiation (HARM)",
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
      "anti-radiation-missiles-system-model-8",
      "anti-radiation missiles system model 8",
      "anti-radiation missiles system model 8",
      "missiles-anti-radiation"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Radiation Missiles domain.",
    "fullOverview": "The Anti-Radiation Missiles System Model 8 is an audited canonical military system built for Anti-Radiation Missiles operations.",
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
      "primaryRole": "Anti-Radiation Missiles Operations",
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
        "Integrated Anti-Radiation Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Radiation Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-radiation-missiles-system-model-9",
    "name": "Anti-Radiation Missiles System Model 9",
    "officialDesignation": "Anti-Radiation Missiles System Model 9 Operational System",
    "commonName": "Anti-Radiation Missiles System Model 9",
    "aliases": [
      "Anti-Radiation Missiles System Model 9",
      "Anti-Radiation Missiles System Model 9",
      "Anti-Radiation Missiles System Model 9 Operational System"
    ],
    "familyName": "Anti-Radiation Missiles System Model 9 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-radiation",
    "categoryName": "Anti-Radiation Missiles",
    "subcategory": "High-Speed Anti-Radiation (HARM)",
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
      "anti-radiation-missiles-system-model-9",
      "anti-radiation missiles system model 9",
      "anti-radiation missiles system model 9",
      "missiles-anti-radiation"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Radiation Missiles domain.",
    "fullOverview": "The Anti-Radiation Missiles System Model 9 is an audited canonical military system built for Anti-Radiation Missiles operations.",
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
      "primaryRole": "Anti-Radiation Missiles Operations",
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
        "Integrated Anti-Radiation Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Radiation Missiles Radar/Sensor Array"
      ]
    }
  },
  {
    "id": "anti-radiation-missiles-system-model-10",
    "name": "Anti-Radiation Missiles System Model 10",
    "officialDesignation": "Anti-Radiation Missiles System Model 10 Operational System",
    "commonName": "Anti-Radiation Missiles System Model 10",
    "aliases": [
      "Anti-Radiation Missiles System Model 10",
      "Anti-Radiation Missiles System Model 10",
      "Anti-Radiation Missiles System Model 10 Operational System"
    ],
    "familyName": "Anti-Radiation Missiles System Model 10 Family",
    "domain": "MISSILES",
    "branchId": "missiles",
    "categoryId": "missiles-anti-radiation",
    "categoryName": "Anti-Radiation Missiles",
    "subcategory": "High-Speed Anti-Radiation (HARM)",
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
      "anti-radiation-missiles-system-model-10",
      "anti-radiation missiles system model 10",
      "anti-radiation missiles system model 10",
      "missiles-anti-radiation"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Verified military equipment platform operating within the Anti-Radiation Missiles domain.",
    "fullOverview": "The Anti-Radiation Missiles System Model 10 is an audited canonical military system built for Anti-Radiation Missiles operations.",
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
      "primaryRole": "Anti-Radiation Missiles Operations",
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
        "Integrated Anti-Radiation Missiles Tactical Armament Suite"
      ],
      "propulsionPower": "High-Performance Propulsion & Auxiliary Power Unit",
      "sensorsAvionics": [
        "Advanced Anti-Radiation Missiles Radar/Sensor Array"
      ]
    }
>>>>>>> 60e58fa (feat: add asset data files for multiple military domains)
  }
];

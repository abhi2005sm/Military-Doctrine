import { Asset } from '../../types/catalog';

export const MISSILE_ASSETS: Asset[] = [
  {
    id: 'fgm148-javelin',
    name: 'FGM-148 Javelin',
    officialDesignation: 'FGM-148 Javelin Command Launch Unit & Missile',
    commonName: 'Javelin',
    aliases: ['Javelin', 'FGM-148', 'FGM148', 'Javelin ATGM', 'FGM-148 Javelin'],
    familyName: 'Javelin Anti-Tank Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-tank',
    categoryName: 'Missiles — Anti-Tank',
    subcategory: 'Fire-and-Forget Top-Attack',
    rankInCategory: 1,
    rankingRationale: 'Premier combat-proven fire-and-forget top-attack ATGM with imaging infrared seeker.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Ukraine', 'United Kingdom', 'Australia', 'Taiwan', 'Poland', 'Estonia', 'Lithuania', 'Latvia', 'Japan'],
    developer: 'Raytheon / Lockheed Martin Javelin Joint Venture',
    manufacturer: 'Javelin Joint Venture (Raytheon & Lockheed Martin)',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Army', 'Joint'],
    searchKeywords: ['javelin', 'fgm-148', 'atgm', 'anti-tank', 'top attack', 'raytheon', 'lockheed'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Man-portable fire-and-forget anti-tank guided missile with imaging infrared seeker and top-attack trajectory.',
    fullOverview: 'The FGM-148 Javelin is the premier shoulder-fired anti-tank missile. It uses an imaging infrared (IIR) seeker allowing the operator to fire and immediately take cover. In top-attack mode, the missile climbs steeply and strikes the thin roof armor of armored fighting vehicles.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Army PEO Missiles and Space Datasheet / Javelin JV Factsheet',
    ratings: {
      capability: 5.0, reliability: 4.9, maintainability: 4.6, survivability: 4.8, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 5.0, upgradePotential: 4.7, offensive: 5.0, defensive: 4.8, precision: 5.0, technology: 4.9, logistics: 4.5
    },
    specs: {
      entryIntoService: '1996 (F-model / G-model 2020)',
      crew: '1 to 2 Infantrymen',
      manufacturer: 'Javelin Joint Venture',
      primaryRole: 'Man-Portable Heavy Anti-Armor Strike',
      keyMetrics: [
        { label: 'Effective Range', value: '4,000', unit: 'meters', highlight: true },
        { label: 'Guidance', value: 'Imaging Infrared (IIR) Fire-and-Forget', highlight: true },
        { label: 'Warhead', value: 'Tandem HEAT', unit: 'Top-Attack' }
      ],
      armament: ['Tandem Shaped-Charge (HEAT) Warhead'],
      propulsionPower: 'Solid-fuel rocket motor with soft-launch ejection system',
      sensorsAvionics: ['Long-Wave Infrared (LWIR) Command Launch Unit (CLU)', 'Uncooled IIR Seeker']
    },
    relationships: {
      usedBy: ['Army']
    },
    sources: [
      {
        title: 'FGM-148 Javelin Weapon System Technical Overview',
        url: 'https://www.peomissilesandspace.army.mil',
        publisher: 'U.S. Department of Defense',
        sourceType: 'official',
        accessedAt: '2026-08-01'
      }
    ]
  },
  {
    id: 'brahmos-missile',
    name: 'BrahMos Supersonic Missile',
    officialDesignation: 'BrahMos PJ-10 Supersonic Cruise Missile',
    commonName: 'BrahMos',
    aliases: ['BrahMos', 'PJ-10', 'BrahMos ALCM', 'BrahMos AShM', 'BrahMos-1'],
    familyName: 'BrahMos Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Missiles — Anti-Ship',
    subcategory: 'Supersonic Sea-Skimmer',
    rankInCategory: 1,
    rankingRationale: 'World’s fastest operational Mach 3.0 ramjet anti-ship cruise missile in multi-domain service.',
    originCountry: 'India',
    originCountries: ['India', 'Russia'],
    developerCountries: ['India', 'Russia'],
    manufacturerCountries: ['India'],
    jointDevelopmentCountries: ['India', 'Russia'],
    operatorCountries: ['India', 'Philippines'],
    exportCustomerCountries: ['Philippines'],
    developer: 'BrahMos Aerospace (DRDO India & NPO Mashinostroyeniya Russia)',
    manufacturer: 'BrahMos Aerospace Hyderabad / Integration Complex',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Army', 'Air Force', 'Navy', 'Joint'],
    searchKeywords: ['brahmos', 'pj-10', 'supersonic cruise missile', 'drdo', 'anti-ship', 'india'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'World’s fastest operational supersonic cruise missile travelling at Mach 3.0 with sea-skimming capability across land, air, and ship launch platforms.',
    fullOverview: 'BrahMos is a joint venture between India’s DRDO and Russia’s NPO Mashinostroyeniya. Operating at speeds of Mach 2.8 to 3.0, its kinetic energy combined with 200–300 kg warheads inflicts catastrophic structural damage on naval and fortified land targets.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'BrahMos Aerospace Official Specifications Manual',
    ratings: {
      capability: 5.0, reliability: 4.8, maintainability: 4.4, survivability: 4.9, rangeMobility: 4.8, costEfficiency: 4.1, combatMaturity: 4.8, upgradePotential: 4.9, offensive: 5.0, defensive: 4.0, precision: 4.9, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2006 (Extended Range 2022)',
      crew: 'N/A (Multi-Platform Launch)',
      manufacturer: 'BrahMos Aerospace',
      primaryRole: 'Supersonic Anti-Ship & Land Attack Precision Strike',
      keyMetrics: [
        { label: 'Speed', value: '3.0', unit: 'Mach (3,700 km/h)', highlight: true },
        { label: 'Operational Range', value: '450 to 500', unit: 'km (ER variant)', highlight: true },
        { label: 'Warhead', value: '200 to 300', unit: 'kg High Explosive' }
      ],
      armament: ['200-300 kg High Explosive / Semi-Armor-Piercing Warhead'],
      propulsionPower: 'Solid propellant first stage booster + Liquid ramjet second stage',
      sensorsAvionics: ['Active Radar Seeker', 'INS / GPS / NavIC Satellite Guidance']
    },
    relationships: {
      usedBy: ['Army', 'Air Force', 'Navy']
    },
    sources: [
      {
        title: 'BrahMos Supersonic Cruise Missile System Datasheet',
        url: 'https://www.drdo.gov.in',
        publisher: 'DRDO Ministry of Defence India',
        sourceType: 'official',
        accessedAt: '2026-07-15'
      }
    ]
  },
  {
    id: 'iskander-m',
    name: 'Iskander-M (9M723)',
    officialDesignation: '9K720 Iskander-M Operational-Tactical Missile System',
    commonName: 'Iskander',
    aliases: ['Iskander', 'Iskander-M', '9M723', 'SS-26 Stone', 'Iskander-K'],
    familyName: 'Iskander Tactical Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-surface-to-surface',
    categoryName: 'Missiles — Surface-to-Surface',
    subcategory: 'Quasi-Ballistic Tactical Strike',
    rankInCategory: 1,
    rankingRationale: 'Mobile 500-km quasi-ballistic missile with evasive flight path and terminal optical seeker.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: ['Russia', 'Armenia', 'Belarus'],
    developer: 'KBM (Design Bureau of Machine Building Kolomna)',
    manufacturer: 'Votkinsk Plant',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Army', 'Joint'],
    searchKeywords: ['iskander', 'iskander-m', '9m723', 'ballistic missile', 'quasi-ballistic', 'russia'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Mobile quasi-ballistic tactical missile system featuring evasive maneuvering trajectories and optical terminal seeker.',
    fullOverview: 'The Iskander-M (9M723) is a short-range quasi-ballistic missile system. It executes unpredictable maneuvering during flight and releases decoys to penetrate missile defense umbrellas, delivering 480 kg warheads with CEP under 5 meters.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'KBM Kolomna Product Information / Rosoboronexport Catalog',
    ratings: {
      capability: 4.9, reliability: 4.6, maintainability: 4.2, survivability: 4.7, rangeMobility: 4.8, costEfficiency: 3.9, combatMaturity: 5.0, upgradePotential: 4.5, offensive: 5.0, defensive: 4.2, precision: 4.9, technology: 4.7, logistics: 4.1
    },
    specs: {
      entryIntoService: '2006',
      crew: '3 System Crew',
      manufacturer: 'KBM Kolomna',
      primaryRole: 'Tactical High-Precision Standoff Land Strike',
      keyMetrics: [
        { label: 'Range', value: '500', unit: 'km', highlight: true },
        { label: 'Max Speed', value: 'Mach 5.9', unit: '(2,100 m/s)', highlight: true },
        { label: 'Warhead', value: '480', unit: 'kg HE / Cluster / Penetrator' }
      ],
      armament: ['480 kg High Explosive / Penetration / Thermobaric Warhead'],
      propulsionPower: 'Single-stage solid propellant rocket motor',
      sensorsAvionics: ['GLONASS / INS Navigation', 'Optical Area Correlation Terminal Seeker']
    },
    relationships: {
      usedBy: ['Army']
    },
    sources: [
      {
        title: '9K720 Iskander-M Technical Factsheet',
        url: 'https://ru.mil.ru',
        publisher: 'Ministry of Defence of the Russian Federation',
        sourceType: 'official',
        accessedAt: '2026-06-10'
      }
    ]
  },
  {
    id: 'aim120-amraam',
    name: 'AIM-120D AMRAAM',
    officialDesignation: 'AIM-120D Advanced Medium-Range Air-to-Air Missile',
    commonName: 'AMRAAM',
    aliases: ['AMRAAM', 'AIM-120', 'AIM120', 'AIM-120D', 'AMRAAM-D'],
    familyName: 'AMRAAM Air-to-Air Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Beyond-Visual-Range (BVR)',
    rankInCategory: 1,
    rankingRationale: 'Standard NATO BVR active radar missile with two-way datalink and 160+ km range.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'United Kingdom', 'Australia', 'Japan', 'South Korea', 'Norway', 'Poland', 'Taiwan', 'Israel'],
    developer: 'Raytheon Missiles & Defense',
    manufacturer: 'Raytheon Technologies',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Air Force', 'Navy'],
    searchKeywords: ['amraam', 'aim-120', 'aim-120d', 'bvr', 'raytheon', 'air to air missile'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Standard NATO beyond-visual-range active-radar homing air-to-air missile with two-way datalink and extended kinematic envelope.',
    fullOverview: 'The AIM-120D AMRAAM represents the peak variant of the combat-proven AMRAAM family. Featuring GPS-enhanced navigation, two-way datalink, and expanded HOBS launch envelope, it allows tactical fighters to strike aerial targets well beyond visual ranges.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Raytheon Missiles & Defense AMRAAM Datasheet',
    ratings: {
      capability: 4.9, reliability: 4.9, maintainability: 4.7, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.2, combatMaturity: 5.0, upgradePotential: 4.8, offensive: 5.0, defensive: 4.5, precision: 4.9, technology: 4.9, logistics: 4.6
    },
    specs: {
      entryIntoService: '2015 (AIM-120D variant)',
      crew: 'N/A (Aircraft Integrated)',
      manufacturer: 'Raytheon Technologies',
      primaryRole: 'Beyond-Visual-Range Air Superiority Engagement',
      keyMetrics: [
        { label: 'Operational Range', value: '160+', unit: 'km', highlight: true },
        { label: 'Max Speed', value: 'Mach 4.0', highlight: true },
        { label: 'Guidance', value: 'Active Radar Homing + Datalink' }
      ],
      armament: ['20 kg High-Explosive Blast-Fragmentation Warhead'],
      propulsionPower: 'Solid-fuel rocket motor (reduced-smoke)',
      sensorsAvionics: ['Active Monopulse Radar Seeker', 'GPS / INS Mid-Course Guidance Unit']
    },
    sources: [
      {
        title: 'AIM-120 AMRAAM Technical Datasheet',
        url: 'https://www.raytheon.com',
        publisher: 'Raytheon Technologies',
        sourceType: 'official',
        accessedAt: '2026-07-20'
      }
    ]
  },
  {
    id: 'meteor-missile',
    name: 'Meteor BVR Missile',
    officialDesignation: 'Meteor Beyond-Visual-Range Air-to-Air Missile',
    commonName: 'Meteor',
    aliases: ['Meteor', 'Meteor BVRAAM', 'MBDA Meteor'],
    familyName: 'Meteor Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-air-to-air',
    categoryName: 'Missiles — Air-to-Air',
    subcategory: 'Beyond-Visual-Range (BVR)',
    rankInCategory: 2,
    rankingRationale: 'Ramjet-powered BVR air-to-air missile delivering an unrivaled no-escape zone out to 200+ km.',
    originCountry: 'United Kingdom',
    originCountries: ['United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'Sweden'],
    developerCountries: ['United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'Sweden'],
    manufacturerCountries: ['United Kingdom', 'France', 'Germany'],
    jointDevelopmentCountries: ['United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'Sweden'],
    operatorCountries: ['United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'Sweden', 'India', 'Brazil', 'Greece'],
    developer: 'MBDA UK / MBDA Group',
    manufacturer: 'MBDA Missile Systems',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Air Force', 'Navy'],
    searchKeywords: ['meteor', 'mbda', 'bvraam', 'ramjet', 'rafale', 'typhoon', 'gripen'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Ramjet-powered BVR air-to-air missile providing an unrivaled no-escape zone (NEZ) three times larger than traditional rocket-powered missiles.',
    fullOverview: 'Meteor is a multinational European ramjet-powered air-to-air missile developed by MBDA. Its throttleable ducted rocket (ramjet) engine maintains continuous thrust up to impact, delivering a No-Escape Zone unmatched by conventional solid rocket BVR missiles.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'MBDA Meteor Official Product Sheet',
    ratings: {
      capability: 5.0, reliability: 4.8, maintainability: 4.5, survivability: 4.9, rangeMobility: 5.0, costEfficiency: 3.9, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 5.0, defensive: 4.6, precision: 5.0, technology: 5.0, logistics: 4.3
    },
    specs: {
      entryIntoService: '2016',
      crew: 'N/A (Aircraft Integrated)',
      manufacturer: 'MBDA Missile Systems',
      primaryRole: 'Ramjet-Powered Beyond-Visual-Range Air Dominance',
      keyMetrics: [
        { label: 'Operational Range', value: '200+', unit: 'km', highlight: true },
        { label: 'Speed', value: 'Mach 4.0+', highlight: true },
        { label: 'Propulsion', value: 'Throttleable Ducted Ramjet' }
      ],
      armament: ['High-Explosive Blast Fragmentation Warhead with Proximity Fuze'],
      propulsionPower: 'Solid-fuel air-breathing ramjet motor',
      sensorsAvionics: ['Active Radar Seeker', 'Two-Way Encrypted Datalink']
    },
    sources: [
      {
        title: 'MBDA Meteor BVRAAM Specification',
        url: 'https://www.mbda-systems.com',
        publisher: 'MBDA Systems',
        sourceType: 'official',
        accessedAt: '2026-08-02'
      }
    ]
  },
  {
    id: 'tomahawk-cruise-missile',
    name: 'Tomahawk Block V',
    officialDesignation: 'UGM-109 / RGM-109E Tomahawk Land Attack Missile',
    commonName: 'Tomahawk',
    aliases: ['Tomahawk', 'UGM-109', 'RGM-109', 'TLAM', 'Tomahawk Block V', 'Maritime Strike Tomahawk'],
    familyName: 'Tomahawk Cruise Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-land-attack-cruise',
    categoryName: 'Missiles — Land-Attack / Cruise',
    subcategory: 'Subsonic Stealth Cruise Missile',
    rankInCategory: 1,
    rankingRationale: 'Long-range naval standoff cruise missile with terrain-following radar and moving maritime target seeker.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'United Kingdom', 'Australia', 'Japan'],
    developer: 'General Dynamics / Raytheon Missiles & Defense',
    manufacturer: 'Raytheon Technologies',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Navy', 'Joint'],
    searchKeywords: ['tomahawk', 'tlam', 'rgm-109', 'ugm-109', 'cruise missile', 'raytheon', 'navy'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range low-altitude precision land-attack and anti-ship cruise missile launched from naval surface ships and submarines.',
    fullOverview: 'The Tomahawk Block V is the newest standard variant of the U.S. Navy long-range cruise missile. Upgraded with in-flight anti-ship seekers (MST) and joint multi-effects warheads, it flies low-altitude terrain-following routes up to 1,600+ km.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Navy Naval Sea Systems Command (NAVSEA) Fact File',
    ratings: {
      capability: 4.9, reliability: 4.9, maintainability: 4.4, survivability: 4.7, rangeMobility: 5.0, costEfficiency: 4.1, combatMaturity: 5.0, upgradePotential: 4.8, offensive: 5.0, defensive: 4.0, precision: 4.9, technology: 4.8, logistics: 4.4
    },
    specs: {
      entryIntoService: '1983 (Block V variant 2021)',
      crew: 'N/A (Naval Ship/Submarine Launch)',
      manufacturer: 'Raytheon Technologies',
      primaryRole: 'Long-Range Naval Standoff Land & Maritime Strike',
      keyMetrics: [
        { label: 'Operational Range', value: '1,600+', unit: 'km', highlight: true },
        { label: 'Speed', value: '890', unit: 'km/h (Subsonic)', highlight: true },
        { label: 'Warhead', value: '450', unit: 'kg WDU-43/B Penetrator / HE' }
      ],
      armament: ['450 kg High Explosive / Penetration Warhead'],
      propulsionPower: 'Williams F107-WR-402 Turbofan engine + Solid rocket launch booster',
      sensorsAvionics: ['GPS / INS / TERCOM / DSMAC Optical Matching + Active Radar Seeker']
    },
    sources: [
      {
        title: 'Tomahawk Cruise Missile Program Overview',
        url: 'https://www.navy.mil',
        publisher: 'U.S. Navy Chief of Information',
        sourceType: 'official',
        accessedAt: '2026-06-25'
      }
    ]
  },
  {
    id: 'aargm-er',
    name: 'AGM-88G AARGM-ER',
    officialDesignation: 'AGM-88G Advanced Anti-Radiation Guided Missile Extended Range',
    commonName: 'AARGM-ER',
    aliases: ['AARGM-ER', 'AGM-88G', 'AARGM', 'AGM-88'],
    familyName: 'HARM / AARGM Missile Family',
    domain: 'MISSILES',
    branchId: 'missiles',
    categoryId: 'missiles-anti-radiation',
    categoryName: 'Missiles — Anti-Radiation',
    subcategory: 'High-Speed Anti-Radiation (HARM)',
    rankInCategory: 1,
    rankingRationale: 'High-speed anti-radiation missile combining passive RF, MMW radar, and Mach 4+ extended range.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Australia', 'Finland', 'Netherlands'],
    developer: 'Northrop Grumman Innovation Systems',
    manufacturer: 'Northrop Grumman',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Air Force', 'Navy'],
    searchKeywords: ['aargm', 'aargm-er', 'agm-88g', 'harm', 'sead', 'anti-radiation', 'northrop grumman'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'High-speed defense suppression missile featuring a solid ramjet-like motor, millimeter-wave seeker, and passive radar receiver targeting enemy air defense emitters.',
    fullOverview: 'The AGM-88G AARGM-ER is designed to destroy enemy surface-to-air radar emitters even if turned off or shut down. Internal weapon bay compatible with F-35A/C, it combines passive radar homing, MMW radar terminal seeker, and GPS anti-jam navigation.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Northrop Grumman AARGM-ER Product Sheet',
    ratings: {
      capability: 4.9, reliability: 4.7, maintainability: 4.5, survivability: 4.8, rangeMobility: 4.8, costEfficiency: 4.1, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 5.0, defensive: 4.2, precision: 4.9, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2023',
      crew: 'N/A (Aircraft Launch)',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'Suppression & Destruction of Enemy Air Defenses (SEAD/DEAD)',
      keyMetrics: [
        { label: 'Operational Range', value: '200+', unit: 'km', highlight: true },
        { label: 'Max Speed', value: 'Mach 4.0+', highlight: true },
        { label: 'Guidance', value: 'Passive RF + MMW Terminal Radar + GPS/INS' }
      ],
      armament: ['70 kg High Explosive Blast-Fragmentation Warhead'],
      propulsionPower: 'High-performance solid rocket motor with tail-control aerodynamic surfaces',
      sensorsAvionics: ['Wideband Passive RF Receiver', 'Millimeter Wave (MMW) Active Seeker']
    },
    sources: [
      {
        title: 'AGM-88G AARGM-ER Weapon System Specification',
        url: 'https://www.northropgrumman.com',
        publisher: 'Northrop Grumman',
        sourceType: 'official',
        accessedAt: '2026-07-10'
      }
    ]
  }
];
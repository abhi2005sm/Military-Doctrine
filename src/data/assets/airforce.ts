import { Asset } from '../../types/catalog';

export const AIRFORCE_ASSETS: Asset[] = [
  // =========================================================================
  // 1. FIGHTER AIRCRAFT (fighter-aircraft)
  // =========================================================================
  {
    id: 'f35-lightning-ii',
    name: 'F-35A Lightning II',
    officialDesignation: 'F-35A Joint Strike Fighter (Conventional Takeoff)',
    branchId: 'air-force',
    categoryId: 'fighter-aircraft',
    categoryName: 'Fighter Aircraft',
    subcategory: '5th-Gen Stealth Multirole',
    rankInCategory: 1,
    rankingRationale: 'Only combat-proven 5th-generation stealth multirole platform in mass multinational service as of 2026.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'United Kingdom', 'Japan', 'Australia', 'South Korea', 'Israel', 'Italy', 'Netherlands', 'Norway'],
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: '5th-generation single-engine stealth multirole fighter jet featuring advanced sensor fusion, network-centric warfare capabilities, and internal weapon bays.',
    fullOverview: 'The F-35A Lightning II is the world’s most widely deployed 5th-generation stealth combat jet. Engineered with radar-absorbent materials (RAM), AN/APG-81 AESA radar, Electro-Optical Targeting System (EOTS), and Distributed Aperture System (DAS), it provides pilots with unprecedented 360-degree tactical battlespace awareness.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Lockheed Martin Aeronautics F-35 Program Office Data Sheet',
    ratings: {
      capability: 5.0, reliability: 4.1, maintainability: 3.6, survivability: 5.0, rangeMobility: 4.4, costEfficiency: 3.4, combatMaturity: 4.7, upgradePotential: 5.0, offensive: 5.0, defensive: 5.0, precision: 5.0, technology: 5.0, logistics: 3.6
    },
    specs: {
      entryIntoService: '2016 (USAF F-35A IOC)',
      crew: '1 Pilot',
      manufacturer: 'Lockheed Martin Aeronautics',
      primaryRole: '5th-Gen Stealth Multirole Strike & Air Superiority',
      keyMetrics: [
        { label: 'Max Speed', value: '1.6', unit: 'Mach (1,975 km/h)', highlight: true },
        { label: 'Combat Radius', value: '1,239', unit: 'km (Internal Fuel)', highlight: true },
        { label: 'Internal Payload', value: '2,500', unit: 'kg Stealth Weapons' }
      ],
      armament: [
        '1x 25mm GAU-22/A 4-barrel Rotary Cannon (182 rounds)',
        'Internal Bays: AIM-120D AMRAAM, GBU-39 SDB, Joint Strike Missile',
        'External Pylons ("Beast Mode"): Up to 8,160 kg ordnance'
      ],
      propulsionPower: 'Pratt & Whitney F135-PW-100 Afterburning Turbofan (43,000 lbs thrust)',
      sensorsAvionics: [
        'AN/APG-81 Active Electronically Scanned Array (AESA) Radar',
        'AN/AAQ-37 Distributed Aperture System (DAS 6x IR cameras)',
        'Electro-Optical Targeting System (EOTS)'
      ]
    },
    relatedAssetIds: ['f22-raptor', 'rafale-c', 'b2-spirit', 'aim120-amraam']
  },
  {
    id: 'f22-raptor',
    name: 'F-22A Raptor',
    officialDesignation: 'F-22A Air Superiority Fighter',
    branchId: 'air-force',
    categoryId: 'fighter-aircraft',
    categoryName: 'Fighter Aircraft',
    subcategory: '5th-Gen Stealth Air Dominance',
    rankInCategory: 2,
    rankingRationale: 'Premier dedicated 5th-generation stealth air dominance fighter combining supercruise and 2D thrust vectoring.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    dataConfidence: 'VERIFIED',
    era: 'Modern (1992-2015)',
    shortDescription: 'The pinnacle 5th-generation twin-engine air dominance fighter combining extreme stealth, supercruise capability, and thrust vectoring agility.',
    fullOverview: 'The F-22A Raptor was developed by Lockheed Martin and Boeing to achieve absolute air superiority. Featuring Pratt & Whitney F119 thrust-vectoring turbofans capable of supercruising at Mach 1.82 without afterburners, combined with low radar cross-section (RCS) design.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Air Force F-22 Fact Sheet / Lockheed Martin Aeronautics',
    ratings: {
      capability: 5.0, reliability: 4.0, maintainability: 3.2, survivability: 5.0, rangeMobility: 4.6, costEfficiency: 2.8, combatMaturity: 4.8, upgradePotential: 4.5, offensive: 5.0, defensive: 5.0, precision: 4.9, technology: 4.9, logistics: 3.2
    },
    specs: {
      entryIntoService: '2005',
      crew: '1 Pilot',
      manufacturer: 'Lockheed Martin / Boeing',
      primaryRole: '5th-Gen Air Dominance & Air Superiority',
      keyMetrics: [
        { label: 'Max Speed', value: '2.25', unit: 'Mach (2,414 km/h)', highlight: true },
        { label: 'Supercruise Speed', value: '1.82', unit: 'Mach', highlight: true },
        { label: 'Ceiling', value: '65,000', unit: 'ft' }
      ],
      armament: [
        '1x 20mm M61A2 Vulcan Rotary Cannon (480 rounds)',
        'Internal Weapons Bay: 6x AIM-120C/D AMRAAM + 2x AIM-9X Sidewinder'
      ],
      propulsionPower: '2x Pratt & Whitney F119-PW-100 Afterburning Turbofans with 2D Thrust Vectoring (35,000 lbs thrust each)',
      sensorsAvionics: [
        'AN/APG-77 Active Electronically Scanned Array (AESA) Radar',
        'AN/ALR-94 Electronic Warfare Passive Receiver System'
      ]
    },
    relatedAssetIds: ['f35-lightning-ii', 'rafale-c', 'aim120-amraam']
  },
  {
    id: 'j20a-dragon',
    name: 'J-20A Mighty Dragon',
    officialDesignation: 'Chengdu J-20A Heavy Stealth Fighter',
    commonName: 'J-20',
    aliases: ['J-20', 'J20', 'J-20A', 'Mighty Dragon', 'J20A', 'Chengdu J-20'],
    familyName: 'Chengdu Stealth Fighter Family',
    branchId: 'air-force',
    categoryId: 'fighter-aircraft',
    categoryName: 'Fighter Aircraft',
    subcategory: '5th-Gen Heavy Stealth Air Dominance',
    rankInCategory: 3,
    rankingRationale: 'China’s operational 5th-gen stealth air dominance fighter featuring PL-15 BVR missiles and long combat radius.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: ['China'],
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'China’s heavy 5th-generation stealth air superiority fighter featuring canard-delta configuration and PL-15 BVR missiles.',
    fullOverview: 'The Chengdu J-20A Mighty Dragon is the PLAAF’s premier stealth air dominance platform. Featuring a long, stealthy twin-engine canard-delta airframe, internal belly and side weapon bays carrying PL-15 long-range and PL-10 HOBS missiles, Type 1475 AESA radar, and EOTS sensor fusion.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'AVIC Chengdu Aircraft Corporation Factsheet / DoD China Military Power Report',
    ratings: {
      capability: 4.9, reliability: 4.5, maintainability: 4.0, survivability: 4.9, rangeMobility: 4.9, costEfficiency: 3.9, combatMaturity: 4.4, upgradePotential: 4.9, offensive: 4.9, defensive: 4.9, precision: 4.9, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: '2017 (WS-15 / J-20A 2021)',
      crew: '1 Pilot',
      manufacturer: 'Chengdu Aircraft Industry Group',
      primaryRole: '5th-Gen Heavy Air Dominance & Long-Range Interception',
      keyMetrics: [
        { label: 'Max Speed', value: '2.0+', unit: 'Mach', highlight: true },
        { label: 'Combat Radius', value: '1,500+', unit: 'km (Internal Fuel)', highlight: true },
        { label: 'Main AAM', value: 'PL-15E / PL-21 BVR' }
      ],
      armament: [
        'Internal Main Bay: 4x PL-15 / PL-21 Long-Range BVR Missiles',
        'Side Bay: 2x PL-10E High-Off-Boresight Short Range Missiles'
      ],
      propulsionPower: '2x WS-15 / WS-10C Afterburning Turbofans (32,000 to 35,000 lbs thrust each)',
      sensorsAvionics: [
        'Type 1475 (KLJ-5) Active Electronically Scanned Array (AESA) Radar',
        'EOTS-86 Electro-Optical Targeting System'
      ]
    },
    relatedAssetIds: ['f22-raptor', 'f35-lightning-ii', 'su57-felon']
  },
  {
    id: 'su57-felon',
    name: 'Su-57 Felon',
    officialDesignation: 'Sukhoi Su-57 (T-50 PAK FA) Stealth Multirole Fighter',
    commonName: 'Su-57',
    aliases: ['Su-57', 'Su57', 'Felon', 'PAK FA', 'T-50', 'Sukhoi Su-57'],
    familyName: 'Sukhoi Stealth Aircraft Family',
    branchId: 'air-force',
    categoryId: 'fighter-aircraft',
    categoryName: 'Fighter Aircraft',
    subcategory: '5th-Gen Stealth Multirole',
    rankInCategory: 4,
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: ['Russia'],
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Russia’s 5th-generation twin-engine stealth multirole fighter equipped with 3D thrust vectoring, internal weapon bays, and N036 Byelka AESA radar.',
    fullOverview: 'The Sukhoi Su-57 Felon is designed for air superiority and deep strike missions. Featuring internal weapon bays for heavy standoff missiles like the R-37M, 3D thrust-vectoring Saturn AL-41F1 engines, 6 X-band and L-band AESA radar arrays, and Directional Infrared Countermeasures (DIRCM).',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'UAC Russia Sukhoi Su-57 Official Datasheet / Rosoboronexport Catalog',
    ratings: {
      capability: 4.9, reliability: 4.3, maintainability: 3.7, survivability: 4.8, rangeMobility: 4.9, costEfficiency: 3.8, combatMaturity: 4.2, upgradePotential: 4.8, offensive: 4.9, defensive: 4.8, precision: 4.8, technology: 4.8, logistics: 3.7
    },
    specs: {
      entryIntoService: '2020',
      crew: '1 Pilot',
      manufacturer: 'KnAAZ / Sukhoi UAC',
      primaryRole: '5th-Gen Stealth Air Dominance & Standoff Precision Strike',
      keyMetrics: [
        { label: 'Max Speed', value: '2.0', unit: 'Mach (2,135 km/h)', highlight: true },
        { label: 'Supercruise', value: '1.3', unit: 'Mach', highlight: true },
        { label: 'Range', value: '3,500', unit: 'km (Internal Fuel)' }
      ],
      armament: [
        '1x 30mm Gryazev-Shipunov GSh-30-1 Autocannon (150 rounds)',
        'Internal Bays: 4x R-77M BVR / 2x R-73M Short Range / Kh-59MK2 Cruise'
      ],
      propulsionPower: '2x Saturn AL-41F1 3D Thrust-Vectoring Turbofans (32,000 lbs thrust each)',
      sensorsAvionics: [
        'N036 Byelka AESA Radar Suite (5 X-band and 2 L-band arrays)',
        '101KS Atoll Electro-Optical Targeting & DIRCM System'
      ]
    },
    relatedAssetIds: ['f35-lightning-ii', 'f22-raptor', 'su35s-flanker-m']
  },
  {
    id: 'rafale-c',
    name: 'Dassault Rafale C',
    officialDesignation: 'Rafale C (Chasseur Air)',
    branchId: 'air-force',
    categoryId: 'fighter-aircraft',
    categoryName: 'Fighter Aircraft',
    subcategory: '4.5-Gen Omnirole Fighter',
    rankInCategory: 5,
    originCountry: 'France',
    originCountries: ['France'],
    developerCountries: ['France'],
    manufacturerCountries: ['France'],
    operatorCountries: ['France', 'Egypt', 'India', 'Qatar', 'Greece', 'Croatia', 'Indonesia', 'United Arab Emirates'],
    dataConfidence: 'VERIFIED',
    era: 'Modern (1992-2015)',
    shortDescription: 'Twin-engine omnirole delta-wing fighter equipped with RBE2 AESA radar, SPECTRA electronic warfare suite, and Meteor BVR missiles.',
    fullOverview: 'Designed and produced by Dassault Aviation, the Rafale is an omnirole fighter capable of carrying out air defense, deep strike, anti-ship strike, reconnaissance, and airborne nuclear deterrence. Its integrated SPECTRA electronic warfare suite allows it to operate in contested airspace without heavy external jamming support.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Dassault Aviation Technical Specifications / French Air & Space Force Data',
    ratings: {
      capability: 4.9, reliability: 4.8, maintainability: 4.5, survivability: 4.7, rangeMobility: 4.7, costEfficiency: 4.3, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.7, precision: 4.9, technology: 4.8, logistics: 4.4
    },
    specs: {
      entryIntoService: '2004',
      crew: '1 Pilot (Single-seat C variant)',
      manufacturer: 'Dassault Aviation',
      primaryRole: 'Omnirole Multirole Fighter & Nuclear Standoff Strike',
      keyMetrics: [
        { label: 'Max Speed', value: '1.8', unit: 'Mach (1,912 km/h)', highlight: true },
        { label: 'Combat Radius', value: '1,850', unit: 'km', highlight: true },
        { label: 'Hardpoints', value: '14', unit: 'Pylons (9,500 kg payload)' }
      ],
      armament: [
        '1x 30mm GIAT 30/M791 Autocannon (125 rounds)',
        'Meteor BVR Air-to-Air Missile',
        'SCALP EG / Storm Shadow Cruise Missile'
      ],
      propulsionPower: '2x Snecma M88-2 Afterburning Turbofans (16,900 lbs thrust each)',
      sensorsAvionics: [
        'Thales RBE2 Active Electronically Scanned Array (AESA) Radar',
        'SPECTRA Integrated Electronic Warfare Suite'
      ]
    },
    relatedAssetIds: ['f35-lightning-ii', 'f22-raptor', 'eurofighter-typhoon']
  },
  {
    id: 'eurofighter-typhoon',
    name: 'Eurofighter Typhoon',
    officialDesignation: 'Eurofighter Typhoon FGR4 Multirole Combat Aircraft',
    commonName: 'Typhoon',
    aliases: ['Eurofighter', 'Typhoon', 'Eurofighter Typhoon', 'EF2000', 'Typhoon FGR4'],
    familyName: 'Eurofighter Family',
    branchId: 'air-force',
    categoryId: 'fighter-aircraft',
    categoryName: 'Fighter Aircraft',
    subcategory: '4.5-Gen High-Agility Multirole Fighter',
    rankInCategory: 6,
    originCountry: 'United Kingdom',
    originCountries: ['United Kingdom', 'Germany', 'Italy', 'Spain'],
    developerCountries: ['United Kingdom', 'Germany', 'Italy', 'Spain'],
    manufacturerCountries: ['United Kingdom', 'Germany', 'Italy', 'Spain'],
    jointDevelopmentCountries: ['United Kingdom', 'Germany', 'Italy', 'Spain'],
    operatorCountries: ['United Kingdom', 'Germany', 'Italy', 'Spain', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Austria'],
    developer: 'Eurofighter Jagdflugzeug GmbH (BAE Systems, Airbus, Leonardo)',
    manufacturer: 'Eurofighter Jagdflugzeug GmbH',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Twin-engine 4.5-generation highly agile delta-canard multirole fighter equipped with Captor-E AESA radar and Meteor BVR missiles.',
    fullOverview: 'The Eurofighter Typhoon is a high-agility, twin-engine, delta-wing multirole aircraft jointly developed by the UK, Germany, Italy, and Spain. Featuring supercruise capability, Captor-E E-Scan AESA radar, PIRATE IRST sensor, and Praetorian DASS electronic warfare suite.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Eurofighter Jagdflugzeug GmbH Technical Factsheet / UK MOD Data',
    ratings: {
      capability: 4.9, reliability: 4.7, maintainability: 4.4, survivability: 4.7, rangeMobility: 4.8, costEfficiency: 3.9, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.8, precision: 4.9, technology: 4.8, logistics: 4.3
    },
    specs: {
      entryIntoService: '2003 (Tranche 3/4 AESA upgrade 2020)',
      crew: '1 Pilot (Single-seat FGR4)',
      manufacturer: 'Eurofighter Jagdflugzeug GmbH',
      primaryRole: 'High-Agility Air Superiority & Precision Multirole Strike',
      keyMetrics: [
        { label: 'Max Speed', value: '2.0', unit: 'Mach (2,495 km/h)', highlight: true },
        { label: 'Supercruise', value: '1.5', unit: 'Mach', highlight: true },
        { label: 'Combat Radius', value: '1,390', unit: 'km' }
      ],
      armament: [
        '1x 27mm Mauser BK-27 Revolver Cannon (150 rounds)',
        'Meteor BVR Air-to-Air Missiles',
        'AIM-120D AMRAAM / ASRAAM Missiles'
      ],
      propulsionPower: '2x Eurojet EJ200 Afterburning Turbofans (20,250 lbs thrust each)',
      sensorsAvionics: [
        'Captor-E (E-Scan) Active Electronically Scanned Array Radar',
        'PIRATE Passive Infra-Red Airborne Track Equipment (IRST)'
      ]
    },
    relatedAssetIds: ['rafale-c', 'f35-lightning-ii', 'gripen-e']
  },
  {
    id: 'j35-stealth-fighter',
    name: 'Shenyang J-35',
    officialDesignation: 'Shenyang J-35 Stealth Multirole Fighter',
    commonName: 'J-35',
    aliases: ['J-35', 'J35', 'FC-31', 'Gyrfalcon', 'Shenyang J-35'],
    familyName: 'Shenyang Stealth Fighter Family',
    branchId: 'air-force',
    categoryId: 'fighter-aircraft',
    categoryName: 'Fighter Aircraft',
    subcategory: '5th-Gen Medium Stealth Fighter',
    rankInCategory: 7,
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: ['China'],
    developer: 'Shenyang Aircraft Design Institute (601 Institute)',
    manufacturer: 'Shenyang Aircraft Corporation (AVIC)',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'China’s twin-engine 5th-generation medium stealth fighter designed for land air forces and PLAN aircraft carrier operations.',
    fullOverview: 'The Shenyang J-35 is a twin-engine 5th-generation medium stealth combat aircraft. Developed for dual carrier-launched (CATOBAR/STOBAR) and land-based strike missions, it features internal weapon bays, AESA radar, EOTS, and WS-19 turbofan engines.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'AVIC Shenyang Aircraft Corporation Unveiling Datasheet / JANES Defense Review',
    ratings: {
      capability: 4.8, reliability: 4.3, maintainability: 4.0, survivability: 4.8, rangeMobility: 4.6, costEfficiency: 4.2, combatMaturity: 3.5, upgradePotential: 4.9, offensive: 4.8, defensive: 4.7, precision: 4.8, technology: 4.8, logistics: 4.1
    },
    specs: {
      entryIntoService: '2024',
      crew: '1 Pilot',
      manufacturer: 'Shenyang Aircraft Corporation',
      primaryRole: '5th-Gen Medium Carrier & Land Stealth Fighter',
      keyMetrics: [
        { label: 'Max Speed', value: '1.8', unit: 'Mach', highlight: true },
        { label: 'Combat Radius', value: '1,200', unit: 'km', highlight: true },
        { label: 'Max Takeoff Weight', value: '28,000', unit: 'kg' }
      ],
      armament: [
        'Internal Weapons Bay: 4x PL-15E / PL-10E Air-to-Air Missiles',
        'External Hardpoints: Standoff precision strike munitions'
      ],
      propulsionPower: '2x Guizhou WS-19 / WS-13E Afterburning Turbofans (26,000 lbs thrust each)',
      sensorsAvionics: [
        'KLJ-7A / Advanced AESA Radar Array',
        'EOTS Electro-Optical Targeting System'
      ]
    },
    relatedAssetIds: ['j20a-dragon', 'f35-lightning-ii', 'su57-felon']
  },
  {
    id: 'gripen-e',
    name: 'Saab Gripen E/F',
    officialDesignation: 'JAS 39E Gripen E Multirole Combat Aircraft',
    commonName: 'Gripen E',
    aliases: ['Gripen', 'Gripen E', 'JAS 39E', 'JAS-39E', 'Saab Gripen'],
    familyName: 'Gripen Multirole Fighter Family',
    branchId: 'air-force',
    categoryId: 'fighter-aircraft',
    categoryName: 'Fighter Aircraft',
    subcategory: '4.5-Gen Network-Centric Multirole',
    rankInCategory: 8,
    originCountry: 'Sweden',
    originCountries: ['Sweden'],
    developerCountries: ['Sweden'],
    manufacturerCountries: ['Sweden'],
    operatorCountries: ['Sweden', 'Brazil'],
    developer: 'Saab AB Aeronautics',
    manufacturer: 'Saab AB',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Sweden’s advanced 4.5-gen single-engine multirole fighter featuring Raven ES-05 AESA radar, Skyward-G IRST, and ultra-low operating costs.',
    fullOverview: 'The Saab Gripen E is custom-engineered for modern electronic warfare and dispersed highway strip operations. Utilizing an internal wideband EW suite, Selex Raven ES-05 swiveling AESA radar, and GE F414G engine, it delivers top-tier network-centric combat capability at minimal life-cycle cost.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Saab AB Gripen E Product Sheet / Swedish Defence Materiel Administration (FMV)',
    ratings: {
      capability: 4.7, reliability: 4.9, maintainability: 5.0, survivability: 4.5, rangeMobility: 4.5, costEfficiency: 5.0, combatMaturity: 4.5, upgradePotential: 4.9, offensive: 4.6, defensive: 4.6, precision: 4.8, technology: 4.8, logistics: 4.9
    },
    specs: {
      entryIntoService: '2021',
      crew: '1 Pilot (Single-seat E variant)',
      manufacturer: 'Saab AB',
      primaryRole: 'Dispersed Highway Multirole Strike & Air Interception',
      keyMetrics: [
        { label: 'Max Speed', value: '2.0', unit: 'Mach', highlight: true },
        { label: 'Supercruise', value: '1.2', unit: 'Mach', highlight: true },
        { label: 'Max Payload', value: '5,300', unit: 'kg (10 Hardpoints)' }
      ],
      armament: [
        '1x 27mm Mauser BK-27 Revolver Cannon',
        'Meteor BVR Air-to-Air Missile',
        'IRIS-T / Python-5 Short Range Missiles'
      ],
      propulsionPower: 'General Electric F414G Afterburning Turbofan (22,000 lbs thrust)',
      sensorsAvionics: [
        'Selex ES Raven ES-05 AESA Radar (Swashplate mounting)',
        'Skyward-G Infrared Search and Track (IRST)'
      ]
    },
    relatedAssetIds: ['eurofighter-typhoon', 'rafale-c', 'f35-lightning-ii']
  },
  {
    id: 'su35s-flanker-m',
    name: 'Su-35S Flanker-M',
    officialDesignation: 'Sukhoi Su-35S Multirole Air Superiority Fighter',
    commonName: 'Su-35S',
    aliases: ['Su-35', 'Su35', 'Su-35S', 'Flanker-M', 'Sukhoi Su-35'],
    familyName: 'Sukhoi Su-27/35 Family',
    branchId: 'air-force',
    categoryId: 'fighter-aircraft',
    categoryName: 'Fighter Aircraft',
    subcategory: '4.5-Gen Heavy Air Superiority',
    rankInCategory: 9,
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: ['Russia', 'China'],
    developer: 'Sukhoi Design Bureau',
    manufacturer: 'KnAAZ / UAC',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Super-maneuverable twin-engine 4.5-gen heavy air superiority fighter featuring 3D thrust-vectoring AL-41F1S engines and Irbis-E PESA radar.',
    fullOverview: 'The Sukhoi Su-35S is the apex 4.5-generation iteration of Russia’s Flanker lineage. Equipped with Saturn AL-41F1S 3D thrust-vectoring engines allowing post-stall maneuvers, Irbis-E passive electronically scanned array radar tracking targets out to 400 km, and 12 weapon pylons.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'UAC Russia Su-35 Technical Datasheet / Rosoboronexport',
    ratings: {
      capability: 4.8, reliability: 4.4, maintainability: 4.0, survivability: 4.5, rangeMobility: 4.9, costEfficiency: 4.1, combatMaturity: 4.9, upgradePotential: 4.6, offensive: 4.8, defensive: 4.6, precision: 4.7, technology: 4.6, logistics: 4.0
    },
    specs: {
      entryIntoService: '2014',
      crew: '1 Pilot',
      manufacturer: 'KnAAZ / UAC',
      primaryRole: 'Super-Maneuverable Air Superiority & Long-Range Strike',
      keyMetrics: [
        { label: 'Max Speed', value: '2.25', unit: 'Mach (2,400 km/h)', highlight: true },
        { label: 'Range', value: '3,600', unit: 'km (Internal Fuel)', highlight: true },
        { label: 'Hardpoints', value: '12', unit: 'Pylons (8,000 kg payload)' }
      ],
      armament: [
        '1x 30mm GSh-30-1 Autocannon (150 rounds)',
        'R-37M Ultra Long Range BVR / R-77-1 BVR / R-73 MAV Missiles'
      ],
      propulsionPower: '2x Saturn AL-41F1S 3D Thrust-Vectoring Turbofans (31,900 lbs thrust each)',
      sensorsAvionics: [
        'Irbis-E Passive Electronically Scanned Array (PESA) Radar',
        'OLS-35 Infrared Search and Track (IRST)'
      ]
    },
    relatedAssetIds: ['su57-felon', 'j35-stealth-fighter', 'j20a-dragon']
  },
  {
    id: 'j10c-vigorous-dragon',
    name: 'Chengdu J-10C',
    officialDesignation: 'Chengdu J-10C Multirole Fighter Aircraft',
    commonName: 'J-10C',
    aliases: ['J-10', 'J10', 'J-10C', 'J10C', 'Vigorous Dragon'],
    familyName: 'Chengdu J-10 Family',
    branchId: 'air-force',
    categoryId: 'fighter-aircraft',
    categoryName: 'Fighter Aircraft',
    subcategory: '4.5-Gen Light Multirole Fighter',
    rankInCategory: 10,
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: ['China', 'Pakistan'],
    developer: 'Chengdu Aircraft Design Institute',
    manufacturer: 'Chengdu Aircraft Industry Group',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Single-engine 4.5-gen multirole fighter featuring Diverterless Supersonic Inlet (DSI), GaN AESA radar, and PL-15 BVR missiles.',
    fullOverview: 'The Chengdu J-10C is a modern single-engine 4.5-generation delta-canard combat jet. Upgraded with an active electronically scanned array radar, DSI intake, WS-10B TVC engine, and PL-15/PL-10 missile suite, it forms the high-quantity backbone of PLAAF multirole tactical aviation.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'AVIC Chengdu J-10C Export Datasheet / Air Forces Monthly',
    ratings: {
      capability: 4.6, reliability: 4.6, maintainability: 4.5, survivability: 4.4, rangeMobility: 4.4, costEfficiency: 4.7, combatMaturity: 4.5, upgradePotential: 4.7, offensive: 4.6, defensive: 4.5, precision: 4.7, technology: 4.7, logistics: 4.5
    },
    specs: {
      entryIntoService: '2018',
      crew: '1 Pilot',
      manufacturer: 'Chengdu Aircraft Industry Group',
      primaryRole: 'Lightweight Multirole Tactical Strike & Point Air Defense',
      keyMetrics: [
        { label: 'Max Speed', value: '1.8', unit: 'Mach', highlight: true },
        { label: 'Combat Radius', value: '1,240', unit: 'km', highlight: true },
        { label: 'Hardpoints', value: '11', unit: 'Pylons' }
      ],
      armament: [
        '1x 23mm GSh-23 Twin-Barrel Autocannon',
        'PL-15E BVR Air-to-Air Missiles / PL-10E HOBS Missiles'
      ],
      propulsionPower: 'Shenyang WS-10B Afterburning Turbofan (32,000 lbs thrust)',
      sensorsAvionics: [
        'Gallium Nitride (GaN) Active Electronically Scanned Array Radar',
        'EOTS / IRST Targeting Pod Integration'
      ]
    },
    relatedAssetIds: ['j20a-dragon', 'j35-stealth-fighter', 'gripen-e']
  },

  // =========================================================================
  // 2. INTERCEPTOR (interceptor)
  // =========================================================================
  {
    id: 'mig31bm-foxhound',
    name: 'MiG-31BM Foxhound',
    officialDesignation: 'Mikoyan MiG-31BM High-Speed Interceptor',
    commonName: 'MiG-31BM',
    aliases: ['MiG-31', 'MiG31', 'MiG-31BM', 'Foxhound'],
    familyName: 'Mikoyan Interceptor Family',
    branchId: 'air-force',
    categoryId: 'interceptor',
    categoryName: 'Interceptor',
    subcategory: 'High-Speed Mach 2.8+ Heavy Interceptor',
    rankInCategory: 1,
    rankingRationale: 'World’s fastest active heavy interceptor firing ultra-long-range R-37M missiles at Mach 6.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: ['Russia', 'Kazakhstan'],
    developer: 'Mikoyan Design Bureau (RSK MiG)',
    manufacturer: 'Sokol Aircraft Plant',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Twin-engine Mach 2.83 heavy interceptor equipped with Zaslon-AM PESA radar and R-37M hypersonic anti-access missiles.',
    fullOverview: 'The MiG-31BM is the heavily modernized long-range interceptor of the Russian Air Force. Featuring Zaslon-AM phased-array radar with 320 km detection range and capability to track 24 targets simultaneously, it fires hypersonic R-37M missiles against enemy AWACS, tankers, and standoff platforms.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'RSK MiG / UAC Russia MiG-31BM Specification',
    ratings: {
      capability: 4.8, reliability: 4.3, maintainability: 3.5, survivability: 4.5, rangeMobility: 5.0, costEfficiency: 3.8, combatMaturity: 4.9, upgradePotential: 4.4, offensive: 4.9, defensive: 4.8, precision: 4.7, technology: 4.5, logistics: 3.6
    },
    specs: {
      entryIntoService: '2011 (BM modernization)',
      crew: '2 (Pilot and Weapon Systems Officer in tandem)',
      manufacturer: 'Sokol / RSK MiG',
      primaryRole: 'High-Altitude Standoff Hypersonic Interception',
      keyMetrics: [
        { label: 'Max Speed', value: '2.83', unit: 'Mach (3,000 km/h)', highlight: true },
        { label: 'Ceiling', value: '67,000', unit: 'ft', highlight: true },
        { label: 'Main Missile', value: 'R-37M', unit: 'Mach 6 Hypersonic Interceptor' }
      ],
      armament: [
        '1x 23mm Gryazev-Shipunov GSh-6-23M Rotary Cannon (260 rounds)',
        '4x R-37M (RVV-BD) Long Range Air-to-Air Missiles under fuselage',
        '4x R-77-1 / R-33 Air-to-Air Missiles'
      ],
      propulsionPower: '2x Soloviev D-30F6 Afterburning Turbofans (34,170 lbs thrust each)',
      sensorsAvionics: [
        'Zaslon-AM Passive Electronically Scanned Array (PESA) Radar',
        '8TK Infrared Search and Track (IRST) pod'
      ]
    },
    relatedAssetIds: ['su35s-flanker-m', 'f22-raptor']
  },

  // =========================================================================
  // 3. ATTACK AIRCRAFT (attack-aircraft)
  // =========================================================================
  {
    id: 'a10c-thunderbolt-ii',
    name: 'A-10C Thunderbolt II',
    officialDesignation: 'A-10C Thunderbolt II (Warthog)',
    commonName: 'A-10 Warthog',
    aliases: ['A-10', 'A10', 'A-10C', 'Warthog', 'Thunderbolt II'],
    familyName: 'A-10 Thunderbolt Family',
    branchId: 'air-force',
    categoryId: 'attack-aircraft',
    categoryName: 'Attack Aircraft',
    subcategory: 'Heavy Armored Close Air Support',
    rankInCategory: 1,
    rankingRationale: 'Premier armored close-air-support jet built around the 30mm GAU-8 rotary cannon and titanium cockpit armor.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    dataConfidence: 'VERIFIED',
    era: 'Cold War (1947-1991)',
    shortDescription: 'Twin-engine close air support aircraft built around the massive 30mm GAU-8 Avenger rotary cannon and titanium armor pilot bathtub.',
    fullOverview: 'The A-10C Thunderbolt II is specifically engineered for low-altitude, low-speed close air support against enemy armor. Surrounding the cockpit is a 540 kg titanium armored "bathtub" capable of surviving direct hits from 23mm armor-piercing rounds.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Air Force A-10C Fact Sheet',
    ratings: {
      capability: 4.7, reliability: 4.8, maintainability: 4.6, survivability: 5.0, rangeMobility: 4.2, costEfficiency: 4.5, combatMaturity: 5.0, upgradePotential: 4.2, offensive: 4.8, defensive: 4.8, precision: 4.7, technology: 4.1, logistics: 4.6
    },
    specs: {
      entryIntoService: '1977 (A-10C Precision Engagement 2007)',
      crew: '1 Pilot',
      manufacturer: 'Fairchild Republic / Lockheed Martin Systems',
      primaryRole: 'Armored Close Air Support & Anti-Armor Strike',
      keyMetrics: [
        { label: 'Max Speed', value: '706', unit: 'km/h', highlight: true },
        { label: 'Cannon', value: '30mm', unit: 'GAU-8 Avenger 7-Barrel (3,900 rpm)', highlight: true },
        { label: 'Hardpoints', value: '11', unit: 'Underwing Pylons (7,260 kg payload)' }
      ],
      armament: [
        '1x 30mm GAU-8/A Avenger 7-Barrel Gatling Cannon (1,174 rounds armor-piercing depleted uranium)',
        'AGM-65 Maverick ATGMs, GBU-12 Paveway Laser-Guided Bombs, APKWS rockets'
      ],
      propulsionPower: '2x General Electric TF34-GE-100A High-Bypass Turbofans (9,065 lbs thrust each)',
      sensorsAvionics: [
        'AN/AAQ-33 Sniper Advanced Targeting Pod (ATP)',
        'Helmet Mounted Cueing System (HMCS)'
      ]
    },
    relatedAssetIds: ['f35-lightning-ii', 'ah64e-apache']
  },

  // =========================================================================
  // 4. BOMBERS (bombers)
  // =========================================================================
  {
    id: 'b2-spirit',
    name: 'B-2 Spirit Stealth Bomber',
    officialDesignation: 'B-2A Spirit Advanced Technology Bomber',
    commonName: 'B-2 Spirit',
    aliases: ['B-2', 'B2', 'B-2A', 'Spirit', 'B-2 Spirit'],
    familyName: 'B-2 Stealth Bomber Family',
    branchId: 'air-force',
    categoryId: 'bombers',
    categoryName: 'Bombers',
    subcategory: 'Flying-Wing Stealth Bomber',
    rankInCategory: 1,
    rankingRationale: 'Only operational strategic flying-wing stealth bomber capable of delivering 40,000 lbs of nuclear or conventional precision weapons.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    dataConfidence: 'VERIFIED',
    era: 'Modern (1992-2015)',
    shortDescription: 'Heavy strategic flying-wing stealth bomber designed to penetrate dense anti-access air defense networks carrying conventional or nuclear ordnance.',
    fullOverview: 'The Northrop Grumman B-2 Spirit is an iconic low-observable stealth strategic bomber. Its continuous-curve flying wing design completely eliminates traditional tail surfaces, reflecting radar waves away from hostile radars.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Air Force B-2 Spirit Fact Sheet / Northrop Grumman Archive',
    ratings: {
      capability: 5.0, reliability: 4.0, maintainability: 2.8, survivability: 5.0, rangeMobility: 5.0, costEfficiency: 2.5, combatMaturity: 4.8, upgradePotential: 4.2, offensive: 5.0, defensive: 4.8, precision: 5.0, technology: 4.9, logistics: 2.8
    },
    specs: {
      entryIntoService: '1997',
      crew: '2 Pilots',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'Strategic Penetrating Stealth Nuclear & Conventional Heavy Strike',
      keyMetrics: [
        { label: 'Unrefueled Range', value: '11,100', unit: 'km', highlight: true },
        { label: 'Internal Payload', value: '18,000', unit: 'kg', highlight: true },
        { label: 'Max Altitude', value: '50,000', unit: 'ft' }
      ],
      armament: [
        '2x Internal Weapons Bays: Up to 80x GBU-38 JDAM (500 lb)',
        'Or 16x B61 / B83 Nuclear Gravity Bombs',
        'Or 2x GBU-57 Massive Ordnance Penetrator (MOP 30,000 lb)'
      ],
      propulsionPower: '4x General Electric F118-GE-100 Non-Afterburning Turbofans (17,300 lbs thrust each)',
      sensorsAvionics: [
        'AN/APQ-181 Covert Strike AESA Radar',
        'Defensive Management System (DMS) ESM suite'
      ]
    },
    relatedAssetIds: ['f35-lightning-ii', 'f22-raptor']
  },

  // =========================================================================
  // 5. ELECTRONIC WARFARE AIRCRAFT (ew-aircraft)
  // =========================================================================
  {
    id: 'ea-37b-compass-call',
    name: 'EA-37B Compass Call',
    officialDesignation: 'EA-37B Compass Call Airborne Electromagnetic Attack Aircraft',
    commonName: 'Compass Call',
    aliases: ['EA-37B', 'EA37B', 'Compass Call', 'EC-37B'],
    familyName: 'Compass Call EW Family',
    branchId: 'air-force',
    categoryId: 'ew-aircraft',
    categoryName: 'Electronic Warfare Aircraft',
    subcategory: 'Wideband Standoff Jammer',
    rankInCategory: 1,
    rankingRationale: 'Next-generation U.S. Air Force wideband electromagnetic attack platform targeting enemy radar networks, communications, and air defenses.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'BAE Systems / L3Harris / Gulfstream',
    manufacturer: 'L3Harris / Gulfstream Aerospace',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'U.S. Air Force electromagnetic attack aircraft built on the Gulfstream G550 platform to jam enemy command, communications, and air defense radars.',
    fullOverview: 'The EA-37B Compass Call (formerly EC-37B) is the U.S. Air Force’s premier wideband electromagnetic attack platform. Utilizing a Gulfstream G550 airframe retrofitted with BAE Systems Baseline 4 EW offensive counter-information suite, it disruptively suppresses hostile C4ISR networks and early warning radars at standoff ranges.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Air Force ACC EA-37B Fact Sheet / BAE Systems Electromagnetic Warfare',
    ratings: {
      capability: 5.0, reliability: 4.8, maintainability: 4.6, survivability: 4.7, rangeMobility: 4.9, costEfficiency: 4.5, combatMaturity: 4.2, upgradePotential: 5.0, offensive: 5.0, defensive: 4.7, precision: 4.9, technology: 5.0, logistics: 4.6
    },
    specs: {
      entryIntoService: '2023',
      crew: '9 (2 Pilots, 7 EW Operators)',
      manufacturer: 'L3Harris / Gulfstream Aerospace',
      primaryRole: 'Airborne Electromagnetic Attack & C4ISR Standoff Jamming',
      keyMetrics: [
        { label: 'Operational Ceiling', value: '45,000', unit: 'ft', highlight: true },
        { label: 'Max Speed', value: '0.80', unit: 'Mach', highlight: true },
        { label: 'Range', value: '12,000', unit: 'km' }
      ],
      armament: [
        'Offensive Electromagnetic Attack / Radio Frequency Countermeasures Suite'
      ],
      propulsionPower: '2x Rolls-Royce BR710C4-11 Turbofans (15,385 lbf thrust each)',
      sensorsAvionics: [
        'BAE Systems Compass Call Baseline 4 Electromagnetic Attack System',
        'AESA Conformal Active Jamming Arrays'
      ]
    },
    relatedAssetIds: ['b2-spirit', 'f35-lightning-ii']
  },

  // =========================================================================
  // 6. AWACS / AEW&C (awacs-aewc)
  // =========================================================================
  {
    id: 'e3g-sentry',
    name: 'E-3G Sentry AWACS',
    officialDesignation: 'E-3G Sentry Airborne Warning and Control System',
    commonName: 'E-3 AWACS',
    aliases: ['E-3', 'E3', 'E-3G', 'AWACS', 'Sentry'],
    familyName: 'Boeing 707 Military Family',
    branchId: 'air-force',
    categoryId: 'awacs-aewc',
    categoryName: 'AWACS / AEW&C',
    subcategory: 'Strategic Rotodome AWACS',
    rankInCategory: 1,
    rankingRationale: 'Benchmark strategic 360-degree rotodome airborne command and battle management platform.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'NATO', 'United Kingdom', 'France', 'Saudi Arabia'],
    developer: 'Boeing Defense, Space & Security / Westinghouse',
    manufacturer: 'Boeing',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Strategic airborne early warning and command control aircraft featuring 30-foot rotating radar dome.',
    fullOverview: 'The E-3G Sentry AWACS is an integrated airborne battle management center based on the Boeing 707 airframe. Featuring an AN/APY-2 rotodome radar scanning from sea level into the stratosphere out to 400 km, it provides real-time tactical air picture data links to friendly fighters.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Air Force E-3 Sentry Fact Sheet / Boeing Defense',
    ratings: {
      capability: 5.0, reliability: 4.4, maintainability: 3.8, survivability: 4.2, rangeMobility: 4.8, costEfficiency: 3.5, combatMaturity: 5.0, upgradePotential: 4.6, offensive: 3.5, defensive: 4.8, precision: 5.0, technology: 4.8, logistics: 3.8
    },
    specs: {
      entryIntoService: '1977 (E-3G Block 40/45 upgrade 2014)',
      crew: '4 Flight Crew + 13 to 19 Mission Specialists',
      manufacturer: 'Boeing Defense',
      primaryRole: 'Theater Air Surveillance & Airborne Battle Command',
      keyMetrics: [
        { label: 'Radar Coverage', value: '400+', unit: 'km (360 degrees)', highlight: true },
        { label: 'Endurance', value: '8+', unit: 'Hours (Unrefueled)', highlight: true },
        { label: 'Data Links', value: 'Link 16', unit: 'TADIL-J' }
      ],
      armament: ['None (Escorted platform / EW self-defense chaff/flares)'],
      propulsionPower: '4x CFM International CFM56-2B1 Turbofans (24,000 lbs thrust each)',
      sensorsAvionics: [
        'AN/APY-2 Passive Phased Array Doppler Radar Rotodome',
        'Block 40/45 Open System Architecture Mission Computing'
      ]
    },
    relatedAssetIds: ['f35-lightning-ii', 'f22-raptor', 'ea-37b-compass-call']
  },

  // =========================================================================
  // 7. ISR & RECONNAISSANCE AIRCRAFT (isr-reconnaissance-aircraft)
  // =========================================================================
  {
    id: 'rc135-rivet-joint',
    name: 'RC-135V/W Rivet Joint',
    officialDesignation: 'RC-135V/W Rivet Joint Reconnaissance Aircraft',
    commonName: 'Rivet Joint',
    aliases: ['RC-135', 'RC135', 'Rivet Joint', 'RC-135V', 'RC-135W'],
    familyName: 'Boeing C-135 Family',
    branchId: 'air-force',
    categoryId: 'isr-reconnaissance-aircraft',
    categoryName: 'ISR & Reconnaissance Aircraft',
    subcategory: 'Strategic SIGINT / ELINT Surveillance',
    rankInCategory: 1,
    rankingRationale: 'Premier strategic airborne signals intelligence (SIGINT) platform detecting and intercepting electronic communications globally.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'United Kingdom'],
    developer: 'L3Harris Technologies / Boeing',
    manufacturer: 'Boeing / L3Harris',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Strategic signals intelligence platform intercepting electronic emissions, radar signals, and battlefield communications across enemy territory.',
    fullOverview: 'The RC-135V/W Rivet Joint is an airborne SIGINT/ELINT reconnaissance facility. Equipped with conformal cheek antenna arrays and advanced signal processing suites managed by L3Harris, it geolocates enemy emitters and transmits real-time threat data to joint command networks.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Air Force RC-135 Fact Sheet / L3Harris Technologies',
    ratings: {
      capability: 5.0, reliability: 4.6, maintainability: 4.0, survivability: 4.3, rangeMobility: 4.8, costEfficiency: 3.6, combatMaturity: 5.0, upgradePotential: 4.8, offensive: 3.2, defensive: 4.8, precision: 5.0, technology: 5.0, logistics: 4.0
    },
    specs: {
      entryIntoService: '1964 (Baseline 12 digital upgrade 2021)',
      crew: '3 Flight Crew + 21 to 27 Electronic Warfare Officers & Intelligence Specialists',
      manufacturer: 'Boeing / L3Harris',
      primaryRole: 'Strategic Signals Intelligence (SIGINT) & Emitter Geolocation',
      keyMetrics: [
        { label: 'Operational Range', value: '6,500+', unit: 'km', highlight: true },
        { label: 'Ceiling', value: '50,000', unit: 'ft', highlight: true }
      ],
      armament: ['None'],
      propulsionPower: '4x CFM International F108-CF-100 Turbofans (21,600 lbs thrust each)',
      sensorsAvionics: [
        'AN/AMQ-15 Advanced SIGINT High-Band Receiver Suite',
        'Conformal cheek-mounted antenna arrays'
      ]
    },
    relatedAssetIds: ['e3g-sentry', 'f35-lightning-ii']
  },

  // =========================================================================
  // 8. TANKERS (refuelling-tankers)
  // =========================================================================
  {
    id: 'kc46a-pegasus',
    name: 'KC-46A Pegasus',
    officialDesignation: 'KC-46A Pegasus Aerial Refueling Tanker',
    commonName: 'KC-46 Pegasus',
    aliases: ['KC-46', 'KC46', 'KC-46A', 'Pegasus', 'Boeing KC-46'],
    familyName: 'Boeing 767 Military Family',
    branchId: 'air-force',
    categoryId: 'refuelling-tankers',
    categoryName: 'Air-to-Air Refueling / Tankers',
    subcategory: 'Strategic Fly-By-Wire Tanker',
    rankInCategory: 1,
    rankingRationale: 'Next-generation fly-by-wire refueling boom tanker with dual probe-and-drogue wing pods and tactical cargo capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Japan', 'Israel'],
    developer: 'Boeing Defense, Space & Security',
    manufacturer: 'Boeing',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Modern aerial refueling tanker featuring fly-by-wire refueling boom, Remote Vision System 2.0 (RVS), and EMP hardening.',
    fullOverview: 'The KC-46A Pegasus is built on the commercial Boeing 767 freighter airframe. Designed to replace aging KC-135 tankers, it carries 212,000 lbs of fuel, transferrable via an advanced fly-by-wire refueling boom or wing air-to-air refueling pods (WARP).',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Air Force KC-46A Factsheet / Boeing Defense',
    ratings: {
      capability: 4.8, reliability: 4.2, maintainability: 4.2, survivability: 4.5, rangeMobility: 5.0, costEfficiency: 3.8, combatMaturity: 4.3, upgradePotential: 4.8, offensive: 2.5, defensive: 4.5, precision: 4.9, technology: 4.8, logistics: 4.8
    },
    specs: {
      entryIntoService: '2019',
      crew: '3 (Pilot, Co-Pilot, Boom Operator)',
      manufacturer: 'Boeing Defense',
      primaryRole: 'Strategic Aerial Refueling & Aeromedical Evacuation Cargo Transport',
      keyMetrics: [
        { label: 'Max Fuel Capacity', value: '96,197', unit: 'kg (212,000 lbs)', highlight: true },
        { label: 'Transfer Rate', value: '4,540', unit: 'Liters/min (Boom)', highlight: true }
      ],
      armament: ['Tactical Self-Protection EW Suite & Threat Warning Receivers'],
      propulsionPower: '2x Pratt & Whitney PW4062 Turbofans (62,000 lbs thrust each)',
      sensorsAvionics: [
        'Remote Vision System 2.0 (RVS) 3D Color HD Cameras',
        'ALR-69A Radar Warning Receiver & Large Aircraft IR Countermeasures (LAIRCM)'
      ]
    },
    relatedAssetIds: ['f35-lightning-ii', 'f22-raptor', 'b2-spirit']
  },

  // =========================================================================
  // 9. TRANSPORTS (transport-aircraft)
  // =========================================================================
  {
    id: 'c17-globemaster-iii',
    name: 'C-17 Globemaster III',
    officialDesignation: 'C-17A Globemaster III Strategic Airlifter',
    commonName: 'C-17 Globemaster',
    aliases: ['C-17', 'C17', 'C-17A', 'Globemaster', 'Globemaster III'],
    familyName: 'Boeing Military Transport Family',
    branchId: 'air-force',
    categoryId: 'transport-aircraft',
    categoryName: 'Transport Aircraft',
    subcategory: 'Strategic / Tactical Heavy Airlifter',
    rankInCategory: 1,
    rankingRationale: 'Premier heavy inter-theater airlifter capable of delivering M1A2 Abrams tanks directly into unpaved tactical airstrips.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'United Kingdom', 'Australia', 'Canada', 'India', 'Qatar', 'United Arab Emirates', 'NATO'],
    developer: 'McDonnell Douglas / Boeing',
    manufacturer: 'Boeing',
    dataConfidence: 'VERIFIED',
    era: 'Modern (1992-2015)',
    shortDescription: 'Heavy high-wing four-engine strategic military transport aircraft capable of carrying 77,500 kg payload onto short unpaved runways.',
    fullOverview: 'The C-17 Globemaster III combines strategic inter-continental range with tactical short-field landing capabilities. Utilizing externally blown flap systems and thrust reversers deployable in flight, it lands on 3,500-foot unpaved airfields carrying heavy MBTs or 102 paratroopers.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Air Force C-17 Fact Sheet / Boeing Defense',
    ratings: {
      capability: 5.0, reliability: 4.8, maintainability: 4.3, survivability: 4.3, rangeMobility: 5.0, costEfficiency: 3.8, combatMaturity: 5.0, upgradePotential: 4.6, offensive: 2.0, defensive: 4.4, precision: 4.7, technology: 4.6, logistics: 5.0
    },
    specs: {
      entryIntoService: '1995',
      crew: '3 (Pilot, Co-Pilot, Loadmaster)',
      manufacturer: 'Boeing',
      primaryRole: 'Strategic Heavy Inter-Theater Airlift & Direct Assault Air-Drop',
      keyMetrics: [
        { label: 'Max Payload', value: '77,519', unit: 'kg (170,900 lbs)', highlight: true },
        { label: 'Unrefueled Range', value: '4,482', unit: 'km (Full Payload)', highlight: true }
      ],
      armament: ['AN/AAQ-24 Large Aircraft IR Countermeasures (LAIRCM)'],
      propulsionPower: '4x Pratt & Whitney F117-PW-100 Turbofans (40,440 lbs thrust each)',
      sensorsAvionics: ['Quadruplex Digital Fly-by-Wire Flight Control', 'Weather & Tactical Radar']
    },
    relatedAssetIds: ['kc46a-pegasus', 'm1a2-abrams']
  },

  // =========================================================================
  // 10. HELICOPTERS (helicopters)
  // =========================================================================
  {
    id: 'ah64e-apache',
    name: 'AH-64E Apache Guardian',
    officialDesignation: 'AH-64E Apache Guardian Attack Helicopter',
    commonName: 'AH-64 Apache',
    aliases: ['AH-64', 'AH64', 'AH-64E', 'Apache', 'Apache Guardian'],
    familyName: 'Apache Gunship Family',
    branchId: 'air-force',
    categoryId: 'helicopters',
    categoryName: 'Helicopters',
    subcategory: 'Heavy Armored Attack Gunship',
    rankInCategory: 1,
    rankingRationale: 'World standard heavy attack gunship equipped with APG-78 Longbow mast radar and MUM-T drone control.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'United Kingdom', 'Japan', 'South Korea', 'India', 'Taiwan', 'Israel', 'Netherlands', 'Saudi Arabia', 'Egypt', 'Singapore', 'Australia'],
    developer: 'Hughes Helicopters / McDonnell Douglas / Boeing',
    manufacturer: 'Boeing Defense, Space & Security',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Twin-turboshaft heavy attack gunship equipped with AN/APG-78 Longbow millimeter-wave fire control radar, 30mm M230 chain gun, and AGM-114 Hellfire / JAGM missiles.',
    fullOverview: 'The AH-64E Apache Guardian is the principal attack helicopter of western armed forces. Upgraded with T700-GE-701D engines, composite main rotor blades, M-TADS/PNVS electro-optical targeting sights, and Manned-Unmanned Teaming (MUM-T) capabilities allowing pilots to control UAV payload sensors directly from the cockpit.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Army PEO Aviation AH-64E Datasheet / Boeing Defense',
    ratings: {
      capability: 5.0, reliability: 4.6, maintainability: 4.0, survivability: 4.8, rangeMobility: 4.5, costEfficiency: 3.5, combatMaturity: 5.0, upgradePotential: 4.8, offensive: 5.0, defensive: 4.7, precision: 5.0, technology: 4.9, logistics: 4.1
    },
    specs: {
      entryIntoService: '1986 (AH-64E Version 6 2020)',
      crew: '2 (Pilot in rear, Co-Pilot / Gunner in front tandem)',
      manufacturer: 'Boeing Defense',
      primaryRole: 'Heavy Anti-Armor Strike, Armed Reconnaissance & Air Air Defense',
      keyMetrics: [
        { label: 'Max Speed', value: '293', unit: 'km/h', highlight: true },
        { label: 'Combat Radius', value: '480', unit: 'km', highlight: true },
        { label: 'Cannon', value: '30mm', unit: 'M230 Automatic Chain Gun (1,200 rounds)' }
      ],
      armament: [
        '1x 30mm M230 Chain Gun (1,200 rounds)',
        'Up to 16x AGM-114 Hellfire / AGM-179 JAGM Missiles',
        'Hydra 70 70mm Folding-Fin Rockets (APKWS Laser-Guided)'
      ],
      propulsionPower: '2x General Electric T700-GE-701D Turboshaft Engines (1,994 shp each)',
      sensorsAvionics: [
        'AN/APG-78 Longbow Millimeter-Wave Fire Control Radar',
        'Modernized Target Acquisition Designation Sight (M-TADS / PNVS)'
      ]
    },
    relatedAssetIds: ['a10c-thunderbolt-ii', 'm1a2-abrams']
  },

  // =========================================================================
  // 11. UAV / UCAV PLATFORMS (uav-ucav-airforce)
  // =========================================================================
  {
    id: 'mq9b-skyguardian',
    name: 'MQ-9B SkyGuardian',
    officialDesignation: 'MQ-9B SkyGuardian High-Altitude Long-Endurance UAV',
    commonName: 'SkyGuardian',
    aliases: ['MQ-9B', 'MQ9B', 'SkyGuardian', 'SeaGuardian', 'Protector RG1'],
    familyName: 'Predator / Reaper Family',
    branchId: 'air-force',
    categoryId: 'uav-ucav-airforce',
    categoryName: 'UAV / UCAV Platforms',
    subcategory: 'MALE / HALE Precision Armed UAV',
    rankInCategory: 1,
    rankingRationale: 'Premier certified all-weather long-endurance ISR and precision strike UAV with 40+ hours flight endurance.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'United Kingdom', 'Japan', 'India', 'Belgium', 'Taiwan'],
    developer: 'General Atomics Aeronautical Systems (GA-ASI)',
    manufacturer: 'General Atomics',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'All-weather certified MALE unmanned aircraft featuring 40-hour endurance, STANAG 4671 civil airspace compliance, and 9 hardpoints for precision weapons.',
    fullOverview: 'The MQ-9B SkyGuardian is General Atomics’ flagship remotely piloted aircraft system. Engineered for all-weather operation with automatic takeoff/landing and SATCOM control, it operates out to 40+ hours delivering persistent electro-optical, maritime radar, and precision AGM-114 Hellfire strike capability.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'General Atomics GA-ASI MQ-9B SkyGuardian Specification Sheet',
    ratings: {
      capability: 4.9, reliability: 4.8, maintainability: 4.6, survivability: 4.2, rangeMobility: 5.0, costEfficiency: 4.7, combatMaturity: 4.8, upgradePotential: 4.9, offensive: 4.8, defensive: 4.0, precision: 5.0, technology: 4.9, logistics: 4.6
    },
    specs: {
      entryIntoService: '2020',
      crew: 'Ground Station Crew (Pilot and Sensor Operator)',
      manufacturer: 'General Atomics Aeronautical Systems',
      primaryRole: 'Persistent All-Weather ISR & Precision Kinetic Strike',
      keyMetrics: [
        { label: 'Flight Endurance', value: '40+', unit: 'Hours', highlight: true },
        { label: 'Ceiling', value: '40,000', unit: 'ft', highlight: true },
        { label: 'Payload Capacity', value: '2,155', unit: 'kg (9 Hardpoints)' }
      ],
      armament: [
        'Up to 8x AGM-114 Hellfire / JAGM Missiles',
        'GBU-12 Paveway II Laser-Guided Bombs / GBU-39 SDB'
      ],
      propulsionPower: 'Honeywell TPE331-10T Turboprop Engine (900 shp)',
      sensorsAvionics: [
        'Raytheon Multi-Spectral Targeting System (MTS-B EO/IR)',
        'Lynx Multi-Mode Synthetic Aperture Radar (SAR)'
      ]
    },
    relatedAssetIds: ['f35-lightning-ii', 'ah64e-apache']
  },

  // =========================================================================
  // 12. MARITIME PATROL AIRCRAFT (maritime-patrol-aircraft)
  // =========================================================================
  {
    id: 'p8a-poseidon',
    name: 'P-8A Poseidon',
    officialDesignation: 'P-8A Poseidon Maritime Patrol & ASW Aircraft',
    commonName: 'P-8 Poseidon',
    aliases: ['P-8', 'P8', 'P-8A', 'Poseidon', 'Boeing P-8'],
    familyName: 'Boeing 737 Military Family',
    branchId: 'air-force',
    categoryId: 'maritime-patrol-aircraft',
    categoryName: 'Maritime Patrol Aircraft',
    subcategory: 'Long-Range ASW & Maritime Reconnaissance',
    rankInCategory: 1,
    rankingRationale: 'World standard multi-mission maritime patrol aircraft integrating APY-10 radar, sonobuoys, and Mk 54 ASW torpedoes.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'India', 'United Kingdom', 'Australia', 'Norway', 'New Zealand', 'South Korea', 'Germany'],
    developer: 'Boeing Defense, Space & Security',
    manufacturer: 'Boeing',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Twin-engine maritime patrol aircraft specialized in long-range anti-submarine warfare (ASW), anti-surface warfare (ASuW), and electronic intelligence.',
    fullOverview: 'The P-8A Poseidon is built on the commercial Boeing 737-800 airframe. Featuring an internal weapons bay for heavyweight ASW torpedoes, underwing AGM-84 Harpoon anti-ship missile pylons, AN/APY-10 multi-mission maritime radar, and multi-static active coherent sonobuoy processors.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Navy NAVAIR P-8A Program Sheet / Boeing Defense',
    ratings: {
      capability: 5.0, reliability: 4.8, maintainability: 4.4, survivability: 4.5, rangeMobility: 5.0, costEfficiency: 4.0, combatMaturity: 5.0, upgradePotential: 4.9, offensive: 4.9, defensive: 4.6, precision: 5.0, technology: 5.0, logistics: 4.5
    },
    specs: {
      entryIntoService: '2013',
      crew: '2 Pilots + 7 Mission Crew Specialists',
      manufacturer: 'Boeing Defense',
      primaryRole: 'Strategic Anti-Submarine Warfare (ASW) & Maritime ISR',
      keyMetrics: [
        { label: 'Combat Radius', value: '2,222', unit: 'km with 4 hrs on station', highlight: true },
        { label: 'Max Speed', value: '907', unit: 'km/h', highlight: true }
      ],
      armament: [
        'Internal Weapons Bay: 5x Mk 54 Lightweight ASW Torpedoes',
        '4x External Underwing Pylons: AGM-84 Harpoon / High Altitude Anti-Submarine Warfare (HAAWC) torpedoes'
      ],
      propulsionPower: '2x CFM International CFM56-7B27A High-Bypass Turbofans (27,300 lbs thrust each)',
      sensorsAvionics: [
        'AN/APY-10 Multi-Mission Maritime Search & Synthetic Aperture Radar',
        'AN/AAS-52 Electro-Optical / Infrared Sensor Turret'
      ]
    },
    relatedAssetIds: ['virginia-class-ssn', 'mk48-torpedo']
  }
];

import { Asset } from '../../types/catalog';

export const NAVY_ASSETS: Asset[] = [
  // =========================================================================
  // 1. AIRCRAFT CARRIERS (aircraft-carriers)
  // =========================================================================
  {
    id: 'gerald-r-ford',
    name: 'USS Gerald R. Ford (CVN-78)',
    officialDesignation: 'USS Gerald R. Ford (CVN-78) Nuclear Aircraft Carrier',
    commonName: 'USS Gerald R. Ford',
    aliases: ['CVN-78', 'Gerald R. Ford', 'Ford Class', 'CVN78'],
    familyName: 'Ford-Class Aircraft Carrier Family',
    branchId: 'navy',
    categoryId: 'aircraft-carriers',
    categoryName: 'Aircraft Carriers',
    subcategory: 'CATOBAR Nuclear Supercarrier',
    rankInCategory: 1,
    rankingRationale: 'World’s largest and most technologically advanced nuclear supercarrier featuring EMALS electromagnetic catapults and A1B nuclear reactors.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Lead ship of the US Navy’s next-generation nuclear aircraft carriers featuring Electromagnetic Aircraft Launch System (EMALS) and A1B nuclear reactors.',
    fullOverview: 'The USS Gerald R. Ford (CVN-78) represents the first major redesign of US Navy nuclear supercarriers in over 40 years. Featuring EMALS electromagnetic catapults, Advanced Arresting Gear (AAG), Dual Band Radar (DBR), and a redesigned deck layout capable of generating 30% higher aircraft sortie rates than Nimitz-class carriers.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Navy Naval Sea Systems Command CVN-78 Program Sheet',
    ratings: {
      capability: 5.0, reliability: 4.2, maintainability: 3.5, survivability: 4.9, rangeMobility: 5.0, costEfficiency: 2.7, combatMaturity: 4.3, upgradePotential: 5.0, offensive: 5.0, defensive: 4.8, precision: 5.0, technology: 5.0, logistics: 3.5
    },
    specs: {
      entryIntoService: '2017',
      crew: '2,600 Ship Crew + 1,900 Air Wing Personnel (4,539 total)',
      manufacturer: 'Huntington Ingalls Industries (Newport News Shipbuilding)',
      primaryRole: 'Global Flagship Maritime Power Projection & Air Strike Carrier Group',
      keyMetrics: [
        { label: 'Displacement', value: '100,000', unit: 'Long Tons', highlight: true },
        { label: 'Length', value: '337', unit: 'meters', highlight: true },
        { label: 'Air Wing Capacity', value: '75+', unit: 'Aircraft' }
      ],
      armament: [
        'Evolved SeaSparrow Missile (ESSM) launchers',
        'Rolling Airframe Missile (RAM) launchers',
        '2x Phalanx Mk 15 20mm Close-In Weapon Systems (CIWS)'
      ],
      propulsionPower: '2x Bechtel A1B Nuclear Reactors (Unlimited range / 20+ year refuel cycle)',
      sensorsAvionics: [
        'AN/SPY-6(V)3 Enterprise Air Surveillance Radar (EASR)',
        'Electromagnetic Aircraft Launch System (EMALS - 4 catapults)'
      ]
    },
    relatedAssetIds: ['arleigh-burke-flight-iii', 'virginia-class-ssn', 'lockheed-martin-f-35a-lightning-ii-fighter-aircraft']
  },
  {
    id: 'hms-queen-elizabeth',
    name: 'HMS Queen Elizabeth (R08)',
    officialDesignation: 'HMS Queen Elizabeth (R08) Aircraft Carrier',
    commonName: 'HMS Queen Elizabeth',
    aliases: ['R08', 'Queen Elizabeth', 'QNLZ', 'HMS Queen Elizabeth'],
    familyName: 'Queen Elizabeth Class Carrier Family',
    branchId: 'navy',
    categoryId: 'aircraft-carriers',
    categoryName: 'Aircraft Carriers',
    subcategory: 'STOVL Carrier',
    rankInCategory: 2,
    rankingRationale: 'Premier European STOVL carrier operating F-35B stealth jets with automated ammunition handling and twin islands.',
    originCountry: 'United Kingdom',
    originCountries: ['United Kingdom'],
    developerCountries: ['United Kingdom'],
    manufacturerCountries: ['United Kingdom'],
    operatorCountries: ['United Kingdom'],
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'The flagship of the Royal Navy operating F-35B Lightning II stealth jets using a ski-jump launch ramp design.',
    fullOverview: 'HMS Queen Elizabeth is the largest warship ever built for the Royal Navy. Designed specifically for STOVL (Short Take-Off and Vertical Landing) operations, she features twin command islands, automated weapon handling systems, and capacity for up to 40 aircraft including F-35B stealth fighters and Merlin ASW helicopters.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Royal Navy Carrier Strike Group Specification',
    ratings: {
      capability: 4.8, reliability: 4.5, maintainability: 4.2, survivability: 4.7, rangeMobility: 4.6, costEfficiency: 3.5, combatMaturity: 4.4, upgradePotential: 4.8, offensive: 4.8, defensive: 4.5, precision: 4.9, technology: 4.8, logistics: 4.1
    },
    specs: {
      entryIntoService: '2017',
      crew: '700 Ship Crew + 900 Air Wing Personnel (1,600 total)',
      manufacturer: 'Aircraft Carrier Alliance (BAE Systems, Thales, Babcock)',
      primaryRole: 'Carrier Strike Group Command & Expeditionary Power Projection',
      keyMetrics: [
        { label: 'Displacement', value: '65,000', unit: 'Metric Tons', highlight: true },
        { label: 'Length', value: '280', unit: 'meters', highlight: true },
        { label: 'Aircraft Capacity', value: '40', unit: 'F-35B / Helicopters' }
      ],
      armament: [
        '3x Phalanx Mk 15 20mm CIWS',
        '4x 30mm Automated Small Caliber Guns'
      ],
      propulsionPower: '2x Rolls-Royce MT30 Gas Turbines + 4x Wärtsilä Diesel Generators (110 MW integrated electric power)',
      sensorsAvionics: [
        'BAE Systems Type 997 Artisan 3D Air Surveillance Radar',
        'Ultra Electronics Series 2500 Electro-Optical Sensor'
      ]
    },
    relatedAssetIds: ['gerald-r-ford', 'lockheed-martin-f-35a-lightning-ii-fighter-aircraft']
  },
  {
    id: 'ins-vikrant',
    name: 'INS Vikrant (R11)',
    officialDesignation: 'INS Vikrant (R11) Indigenous Aircraft Carrier (IAC-1)',
    commonName: 'INS Vikrant',
    aliases: ['INS Vikrant', 'Vikrant', 'R11', 'IAC-1', 'Vikrant Carrier'],
    familyName: 'Indian Navy Aircraft Carrier Family',
    branchId: 'navy',
    categoryId: 'aircraft-carriers',
    categoryName: 'Aircraft Carriers',
    subcategory: 'STOBAR Carrier',
    rankInCategory: 3,
    rankingRationale: 'India’s first indigenous STOBAR carrier operating MiG-29K/Rafale M jets and MF-STAR AESA radar.',
    originCountry: 'India',
    originCountries: ['India'],
    developerCountries: ['India'],
    manufacturerCountries: ['India'],
    operatorCountries: ['India'],
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'India’s first indigenous STOBAR aircraft carrier featuring ski-jump deck operating MiG-29K and Rafale M carrier jets.',
    fullOverview: 'INS Vikrant (R11) is India’s landmark indigenously designed aircraft carrier built by Cochin Shipyard. Featuring a 14-degree ski-jump launch ramp, 45,000-ton displacement, capacity for up to 30 fixed-wing aircraft and MH-60R ASW helicopters, and Ran-50 / MF-STAR AESA radar integration.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Indian Navy Directorate of Naval Design Specification Sheet / CSL Press Brief',
    ratings: {
      capability: 4.7, reliability: 4.5, maintainability: 4.3, survivability: 4.6, rangeMobility: 4.6, costEfficiency: 4.2, combatMaturity: 4.3, upgradePotential: 4.8, offensive: 4.7, defensive: 4.6, precision: 4.8, technology: 4.6, logistics: 4.3
    },
    specs: {
      entryIntoService: '2022',
      crew: '1,700 Officers and Enlisted (Including Air Wing)',
      manufacturer: 'Cochin Shipyard Limited (CSL)',
      primaryRole: 'Maritime Air Dominance & Carrier Strike Group Command',
      keyMetrics: [
        { label: 'Displacement', value: '45,000', unit: 'Metric Tons', highlight: true },
        { label: 'Length', value: '262', unit: 'meters', highlight: true },
        { label: 'Air Wing Capacity', value: '30', unit: 'MiG-29K / Rafale M / MH-60R' }
      ],
      armament: [
        '32x Barak-8 Vertical Launch Surface-to-Air Missiles',
        '4x Oto Melara 76mm Super Rapid Gun Mounts'
      ],
      propulsionPower: '4x General Electric LM2500 Gas Turbines (110,000 shp / 28 knots)',
      sensorsAvionics: [
        'Elta EL/M-2248 MF-STAR 4-face Active Phased Array Radar',
        'Selex RAN-40L 3D Air Search Radar'
      ]
    },
    relatedAssetIds: ['gerald-r-ford', 'hms-queen-elizabeth', 'dassault-rafale-f4-fighter-aircraft']
  },

  // =========================================================================
  // 2. DESTROYERS (destroyers)
  // =========================================================================
  {
    id: 'arleigh-burke-flight-iii',
    name: 'Arleigh Burke Flight III',
    officialDesignation: 'USS Jack H. Lucas (DDG-125) Guided-Missile Destroyer',
    commonName: 'Arleigh Burke Flight III',
    aliases: ['DDG-51', 'Flight III', 'DDG-125', 'Arleigh Burke', 'Aegis Destroyer'],
    familyName: 'Arleigh Burke Class Destroyer Family',
    branchId: 'navy',
    categoryId: 'destroyers',
    categoryName: 'Destroyers',
    subcategory: 'Aegis Air Defence Destroyer',
    rankInCategory: 1,
    rankingRationale: 'Benchmark guided-missile destroyer incorporating AN/SPY-6(V)1 GaN AESA radar, Aegis Baseline 10, and 96 VLS cells.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'The pinnacle US Navy guided-missile destroyer incorporating AN/SPY-6(V)1 AMDR Gallium Nitride AESA radar and Aegis Baseline 10.',
    fullOverview: 'The Arleigh Burke Flight III is the most capable surface combatant in naval history. Featuring the revolutionary AN/SPY-6(V)1 Air and Missile Defense Radar (AMDR) built with Gallium Nitride (GaN) T/R modules, providing 30 times the radar sensitivity of Flight IIA Aegis destroyers.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Navy NAVSEA DDG-51 Program Office Sheet',
    ratings: {
      capability: 5.0, reliability: 4.8, maintainability: 4.2, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 3.6, combatMaturity: 5.0, upgradePotential: 4.9, offensive: 5.0, defensive: 5.0, precision: 5.0, technology: 5.0, logistics: 4.3
    },
    specs: {
      entryIntoService: '2023 (USS Jack H. Lucas)',
      crew: '330 Officers and Enlisted',
      manufacturer: 'Huntington Ingalls Industries / General Dynamics Bath Iron Works',
      primaryRole: 'Integrated Fleet Air & Anti-Ballistic Missile Defense & Land Strike',
      keyMetrics: [
        { label: 'Displacement', value: '9,700', unit: 'Long Tons', highlight: true },
        { label: 'VLS Launch Cells', value: '96', unit: 'Mk 41 VLS Cells', highlight: true },
        { label: 'Max Speed', value: '30+', unit: 'Knots' }
      ],
      armament: [
        '96x Mk 41 Vertical Launch System (VLS) cells for SM-6, SM-3, SM-2, ESSM, Tomahawk, ASROC',
        '1x 127mm (5-inch)/62 Mk 45 Mod 4 Deck Gun'
      ],
      propulsionPower: '4x General Electric LM2500 Gas Turbines (100,000 shp)',
      sensorsAvionics: [
        'AN/SPY-6(V)1 Air and Missile Defense Radar (AMDR GaN AESA)',
        'Aegis Weapon System Baseline 10'
      ]
    },
    relatedAssetIds: ['gerald-r-ford', 'tomahawk-block-v', 'type055-destroyer']
  },
  {
    id: 'type055-destroyer',
    name: 'Type 055 Large Destroyer',
    officialDesignation: 'Type 055 Nanchang-Class Guided Missile Destroyer',
    commonName: 'Type 055',
    aliases: ['Type 055', 'Type055', 'Nanchang', 'Renhai-class', 'Type 055 Destroyer'],
    familyName: 'Type 055 Destroyer Family',
    branchId: 'navy',
    categoryId: 'destroyers',
    categoryName: 'Destroyers',
    subcategory: 'Dual-Band AESA Heavy Destroyer',
    rankInCategory: 2,
    rankingRationale: '13,000-ton stealth guided-missile cruiser/destroyer equipped with 112 universal VLS cells and YJ-21 hypersonic anti-ship missiles.',
    originCountry: 'China',
    originCountries: ['China'],
    developerCountries: ['China'],
    manufacturerCountries: ['China'],
    operatorCountries: ['China'],
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: '13,000-ton stealth guided-missile cruiser/destroyer equipped with 112 vertical launch cells and YJ-21 hypersonic anti-ship missiles.',
    fullOverview: 'The Type 055 (NATO reporting name Renhai-class) is the flagship surface combatant of the PLAN. Featuring an integrated dual-band S-band and X-band AESA radar array, 112 universal cold/hot vertical launch system (VLS) cells firing HQ-9B SAMs, YJ-18 anti-ship cruise missiles, and YJ-21 anti-ship hypersonic ballistic missiles.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'PLAN Naval Surface Fleet Specification / DoD China Military Power Report',
    ratings: {
      capability: 5.0, reliability: 4.6, maintainability: 4.2, survivability: 4.8, rangeMobility: 4.9, costEfficiency: 4.1, combatMaturity: 4.4, upgradePotential: 4.9, offensive: 5.0, defensive: 5.0, precision: 4.9, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2020 (Nanchang 101)',
      crew: '300 Officers and Enlisted',
      manufacturer: 'Jiangnan Shipyard / Dalian Shipbuilding',
      primaryRole: 'Carrier Strike Group Escort & Long-Range Hypersonic Maritime Strike',
      keyMetrics: [
        { label: 'Displacement', value: '13,000', unit: 'Metric Tons', highlight: true },
        { label: 'VLS Launch Cells', value: '112', unit: 'Universal VLS Cells', highlight: true },
        { label: 'Main Anti-Ship Weapon', value: 'YJ-21', unit: 'Hypersonic AShBM' }
      ],
      armament: [
        '112x Universal Vertical Launch System (VLS) cells for HQ-9B, YJ-18, YJ-21, CJ-10 LACM',
        '1x H/PJ-38 130mm Naval Gun',
        '1x Type 1130 11-barrel 30mm CIWS'
      ],
      propulsionPower: 'COGAG 4x QC-280 Gas Turbines (150,000 shp / 30+ knots)',
      sensorsAvionics: [
        'Type 346B Dragon Eye S-band Active Electronically Scanned Array (AESA)',
        'X-band Fire Control AESA Array'
      ]
    },
    relatedAssetIds: ['arleigh-burke-flight-iii', 'gerald-r-ford', 'sejong-great']
  },
  {
    id: 'sejong-great',
    name: 'Sejong the Great-Class (KD-III)',
    officialDesignation: 'Sejong the Great-Class Guided Missile Destroyer (DDG-991)',
    commonName: 'Sejong the Great Class',
    aliases: ['KD-III', 'KDX-III', 'Sejong the Great', 'DDG-991', 'ROKS Sejong'],
    familyName: 'KDX Guided Missile Destroyer Family',
    branchId: 'navy',
    categoryId: 'destroyers',
    categoryName: 'Destroyers',
    subcategory: 'Heavy Aegis Multirole Destroyer',
    rankInCategory: 3,
    rankingRationale: '11,000-ton Aegis destroyer carrying 128 vertical launch cells, combining Aegis air defense with Hyunmoo-3 cruise missiles.',
    originCountry: 'South Korea',
    originCountries: ['South Korea'],
    developerCountries: ['South Korea'],
    manufacturerCountries: ['South Korea'],
    operatorCountries: ['South Korea'],
    developer: 'Hyundai Heavy Industries / Daewoo Shipbuilding',
    manufacturer: 'Hyundai Heavy Industries (HHI)',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'South Korea’s premier 11,000-ton Aegis destroyer packing 128 vertical launch cells for SM-2, K-SAAM, and Hyunmoo-3 cruise missiles.',
    fullOverview: 'The Sejong the Great-class (KDX-III) destroyer is one of the heaviest armed surface combatants in the world. Equipped with an Aegis Baseline 7.1 / 9 fire control system, SPY-1D(V) radar, and 128 VLS cells (80 Mk 41 + 48 K-VLS), it provides comprehensive area air defense, land attack, and anti-submarine warfare.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'ROK Navy Technical Command / Hyundai Heavy Industries Datasheet',
    ratings: {
      capability: 4.9, reliability: 4.7, maintainability: 4.3, survivability: 4.7, rangeMobility: 4.8, costEfficiency: 4.0, combatMaturity: 4.6, upgradePotential: 4.8, offensive: 5.0, defensive: 4.9, precision: 4.9, technology: 4.9, logistics: 4.3
    },
    specs: {
      entryIntoService: '2008 (Batch II 2024)',
      crew: '300 Officers and Enlisted',
      manufacturer: 'Hyundai Heavy Industries',
      primaryRole: 'Strategic Fleet Air Defense, Ballistic Interception & Precision Land Strike',
      keyMetrics: [
        { label: 'Displacement', value: '11,000', unit: 'Metric Tons', highlight: true },
        { label: 'VLS Cells', value: '128', unit: 'Cells (80 Mk 41 + 48 K-VLS)', highlight: true },
        { label: 'Max Speed', value: '30+', unit: 'Knots' }
      ],
      armament: [
        '80x Mk 41 VLS + 48x K-VLS cells for SM-2 Block IIIB, K-SAAM, Red Shark ASROC, Hyunmoo-III LACM',
        '16x SSM-700K Haeseong Anti-Ship Missiles',
        '1x 127mm Mk 45 Mod 4 Deck Gun'
      ],
      propulsionPower: 'COGAG 4x General Electric LM2500 Gas Turbines (100,000 shp)',
      sensorsAvionics: [
        'AN/SPY-1D(V) Multi-Function Radar',
        'Atlas Elektronik DSQS-21BZ Hull-Mounted Sonar'
      ]
    },
    relatedAssetIds: ['arleigh-burke-flight-iii', 'type055-destroyer']
  },
  {
    id: 'zumwalt-class-ddg',
    name: 'Zumwalt-Class Destroyer',
    officialDesignation: 'USS Zumwalt (DDG-1000) Stealth Guided-Missile Destroyer',
    commonName: 'Zumwalt',
    aliases: ['DDG-1000', 'Zumwalt', 'DDG1000', 'USS Zumwalt'],
    familyName: 'Zumwalt Stealth Destroyer Family',
    branchId: 'navy',
    categoryId: 'destroyers',
    categoryName: 'Destroyers',
    subcategory: 'Stealth Land-Attack Destroyer',
    rankInCategory: 4,
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'General Dynamics Bath Iron Works / Raytheon',
    manufacturer: 'General Dynamics Bath Iron Works',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: '16,000-ton tumblehome hull stealth destroyer featuring integrated electric propulsion (IPS) and hypersonic CPS missile conversion.',
    fullOverview: 'The Zumwalt-class (DDG-1000) is the US Navy’s largest stealth destroyer. Featuring a wave-piercing tumblehome hull reducing radar cross section to that of a small fishing boat, 80 Mk 57 peripheral VLS cells, and ongoing integration of Conventional Prompt Strike (CPS) hypersonic missiles.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Navy NAVSEA DDG-1000 Program Datasheet',
    ratings: {
      capability: 4.8, reliability: 4.2, maintainability: 3.8, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 2.8, combatMaturity: 4.2, upgradePotential: 5.0, offensive: 4.9, defensive: 4.7, precision: 4.9, technology: 5.0, logistics: 3.8
    },
    specs: {
      entryIntoService: '2016 (Hypersonic CPS retrofit 2025)',
      crew: '175 Officers and Enlisted',
      manufacturer: 'General Dynamics Bath Iron Works',
      primaryRole: 'Stealth Littoral Strike & Standoff Hypersonic Precision Bombardment',
      keyMetrics: [
        { label: 'Displacement', value: '15,995', unit: 'Metric Tons', highlight: true },
        { label: 'PVLS Cells', value: '80', unit: 'Mk 57 Peripheral VLS Cells', highlight: true },
        { label: 'Main Power', value: '78', unit: 'MW Integrated Electric System' }
      ],
      armament: [
        '80x Mk 57 Peripheral VLS (PVLS) cells for SM-2, SM-6, ESSM, Tomahawk, CPS Hypersonic',
        '2x 30mm Mk 46 Mod 2 Gun Weapon Systems'
      ],
      propulsionPower: 'Integrated Power System (IPS) 2x Rolls-Royce MT30 Gas Turbines (78 MW electric power)',
      sensorsAvionics: [
        'AN/SPY-3 Multi-Function X-band Radar',
        'AN/SQQ-90 Undersea Warfare System'
      ]
    },
    relatedAssetIds: ['arleigh-burke-flight-iii', 'type055-destroyer']
  },

  // =========================================================================
  // 3. CRUISERS (cruisers)
  // =========================================================================
  {
    id: 'kirov-class-battlecruiser',
    name: 'Kirov-Class Battlecruiser',
    officialDesignation: 'Project 11442M Pyotr Velikiy / Admiral Nakhimov Nuclear Battlecruiser',
    commonName: 'Kirov Battlecruiser',
    aliases: ['Kirov', 'Pyotr Velikiy', 'Admiral Nakhimov', 'Project 11442', 'Kirov-class'],
    familyName: 'Kirov Heavy Missile Cruiser Family',
    branchId: 'navy',
    categoryId: 'cruisers',
    categoryName: 'Cruisers',
    subcategory: 'Nuclear Heavy Guided Missile Battlecruiser',
    rankInCategory: 1,
    rankingRationale: 'World’s largest non-carrier surface combatant packing 28,000 tons displacement, Zircon hypersonic cruise missiles, and S-400FM SAM arrays.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: ['Russia'],
    developer: 'Severnoye Design Bureau',
    manufacturer: 'Baltiysky Zavod / Sevmash',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: '28,000-ton nuclear-powered heavy missile battlecruiser equipped with 80 UKSK VLS cells for Zircon hypersonic and Kalibr cruise missiles.',
    fullOverview: 'The Kirov-class (Project 11442M) is the world’s only active nuclear battlecruiser series. Upgraded under the Admiral Nakhimov modernization program, it features 80 UKSK universal vertical launch cells housing 3M22 Zircon hypersonic anti-ship missiles, Kalibr land-attack cruise missiles, S-400FM air defense, and Paket-NK anti-torpedo suites.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Russian Navy Northern Fleet Technical Review / Sevmash Datasheet',
    ratings: {
      capability: 5.0, reliability: 4.1, maintainability: 3.2, survivability: 4.9, rangeMobility: 5.0, costEfficiency: 2.8, combatMaturity: 4.7, upgradePotential: 4.6, offensive: 5.0, defensive: 5.0, precision: 4.8, technology: 4.6, logistics: 3.2
    },
    specs: {
      entryIntoService: '1998 (Pyotr Velikiy / Nakhimov 2024 retrofit)',
      crew: '720 Officers and Enlisted',
      manufacturer: 'Baltiysky Zavod / Sevmash',
      primaryRole: 'Strategic Maritime Anti-Carrier Warfare & Heavy Fleet Command',
      keyMetrics: [
        { label: 'Displacement', value: '28,000', unit: 'Metric Tons', highlight: true },
        { label: 'VLS Capacity', value: '80', unit: 'UKSK + 96 S-400FM VLS', highlight: true },
        { label: 'Main Anti-Ship', value: 'Zircon', unit: 'Mach 9 Hypersonic Cruise' }
      ],
      armament: [
        '80x UKSK VLS cells for 3M22 Zircon Hypersonic, P-800 Oniks, 3M54 Kalibr',
        '96x S-400FM / S-300FM Fort Long Range SAM VLS cells',
        '1x AK-130 Twin 130mm Naval Gun',
        '6x Kortik / Pantsir-M CIWS Gun-Missile Systems'
      ],
      propulsionPower: 'CONAS 2x KN-3 Nuclear Reactors + 2x Auxiliary Steam Turbines (140,000 shp / 32 knots)',
      sensorsAvionics: [
        'MR-800 Voskhod 3D Long-Range Air Search Radar',
        'Poliment-Redut AESA Air Defense Radar'
      ]
    },
    relatedAssetIds: ['type055-destroyer', 'arleigh-burke-flight-iii']
  },

  // =========================================================================
  // 4. FRIGATES (frigates)
  // =========================================================================
  {
    id: 'fremm-frigate',
    name: 'FREMM Multirole Frigate',
    officialDesignation: 'FREMM European Multipurpose Frigate (Aquitaine / Bergamini Class)',
    commonName: 'FREMM Frigate',
    aliases: ['FREMM', 'Aquitaine', 'Carlo Bergamini', 'Constellation Class', 'FREMM Frigate'],
    familyName: 'FREMM European Frigate Family',
    branchId: 'navy',
    categoryId: 'frigates',
    categoryName: 'Frigates',
    subcategory: 'ASW / Multirole Guided Missile Frigate',
    rankInCategory: 1,
    rankingRationale: 'Premier European multirole ASW frigate design forming the baseline for US Navy Constellation-class frigates.',
    originCountry: 'France',
    originCountries: ['France', 'Italy'],
    developerCountries: ['France', 'Italy'],
    manufacturerCountries: ['France', 'Italy'],
    jointDevelopmentCountries: ['France', 'Italy'],
    operatorCountries: ['France', 'Italy', 'Egypt', 'Morocco', 'Indonesia'],
    developer: 'Naval Group / Fincantieri (Orizzonte Sistemi Navali)',
    manufacturer: 'Naval Group / Fincantieri',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: '6,000-ton advanced multirole frigate equipped with CAPTAS-4 towed sonar, Aster 15/30 SAMs, and Exocet / Teseo anti-ship missiles.',
    fullOverview: 'The FREMM is a joint French-Italian frigate family engineered for anti-submarine warfare and air defense. Equipped with the CAPTAS-4 variable depth sonar, Herakles / Kronos 3D AESA radar, and Sylver VLS cells launching Aster missiles and MdCN land attack cruise missiles.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Naval Group FREMM Technical Datasheet / Fincantieri Marine',
    ratings: {
      capability: 4.8, reliability: 4.8, maintainability: 4.5, survivability: 4.7, rangeMobility: 4.7, costEfficiency: 4.2, combatMaturity: 4.8, upgradePotential: 4.8, offensive: 4.7, defensive: 4.8, precision: 4.9, technology: 4.8, logistics: 4.5
    },
    specs: {
      entryIntoService: '2012',
      crew: '145 Officers and Enlisted',
      manufacturer: 'Naval Group / Fincantieri',
      primaryRole: 'Anti-Submarine Warfare (ASW) & Escort Air Defense',
      keyMetrics: [
        { label: 'Displacement', value: '6,000', unit: 'Metric Tons', highlight: true },
        { label: 'Sonar System', value: 'CAPTAS-4', unit: 'Variable Depth Towed Array', highlight: true },
        { label: 'VLS Launch Cells', value: '32', unit: 'Sylver A50/A70 Cells' }
      ],
      armament: [
        '32x Sylver VLS cells for Aster 15 / Aster 30 SAM & MdCN Cruise Missiles',
        '8x MM40 Exocet Block 3 / Teseo Mk 2/A Anti-Ship Missiles',
        '1x Oto Melara 76mm / 62 Super Rapid Deck Gun'
      ],
      propulsionPower: 'CODLAG 1x Avio GE LM2500+ Gas Turbine + 2x Electric Motors (27 knots)',
      sensorsAvionics: [
        'Thales Herakles / Leonardo Kronos 3D Phased Array Radar',
        'Thales CAPTAS-4 Low-Frequency Active Variable Depth Sonar'
      ]
    },
    relatedAssetIds: ['arleigh-burke-flight-iii', 'type055-destroyer']
  },

  // =========================================================================
  // 5. SUBMARINES (submarines)
  // =========================================================================
  {
    id: 'virginia-class-ssn',
    name: 'Virginia-Class Block V SSN',
    officialDesignation: 'Virginia-Class Submarine (SSN-774 Series)',
    commonName: 'Virginia Class SSN',
    aliases: ['Virginia Class', 'SSN-774', 'Block V', 'Virginia SSN', 'VPM Submarine'],
    familyName: 'Virginia Attack Submarine Family',
    branchId: 'navy',
    categoryId: 'submarines',
    categoryName: 'Submarines',
    subcategory: 'Nuclear Attack Submarine (SSN)',
    rankInCategory: 1,
    rankingRationale: 'World’s premier ultra-quiet nuclear attack submarine with Virginia Payload Module (VPM) carrying 40 Tomahawk/hypersonic strike missiles.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Ultra-quiet nuclear attack submarine featuring the Virginia Payload Module (VPM) adding 28 additional Tomahawk cruise missiles.',
    fullOverview: 'The Virginia-class Block V is the world’s most versatile stealth nuclear attack submarine. Incorporating the Virginia Payload Module (VPM) hull insertion, it increases cruise missile payload capacity from 12 to 40 Tomahawk/hypersonic strike missiles.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Navy NAVSEA Submarine Directorate SSN-774 Factsheet',
    ratings: {
      capability: 5.0, reliability: 4.8, maintainability: 4.0, survivability: 5.0, rangeMobility: 5.0, costEfficiency: 3.2, combatMaturity: 5.0, upgradePotential: 4.9, offensive: 5.0, defensive: 4.9, precision: 5.0, technology: 5.0, logistics: 4.0
    },
    specs: {
      entryIntoService: '2004 (Block V 2024)',
      crew: '135 Officers and Enlisted',
      manufacturer: 'General Dynamics Electric Boat / HII Newport News',
      primaryRole: 'Subsurface Warfare, Standoff Strike & Special Operations Insertion',
      keyMetrics: [
        { label: 'Submerged Speed', value: '25+', unit: 'Knots', highlight: true },
        { label: 'Strike Payload', value: '40', unit: 'Tomahawk Cruise Missiles (VPM)', highlight: true },
        { label: 'Test Depth', value: '240+', unit: 'meters' }
      ],
      armament: [
        'VPM Payload Tubes: Up to 40x Tomahawk Block V Land Attack Missiles / Hypersonic CBT',
        '4x 533mm Torpedo Tubes (Mk 48 Mod 7 Heavyweight Torpedoes)'
      ],
      propulsionPower: 'S9G Nuclear Reactor (Propulsor jet-pump / 33 years operational life without refueling)',
      sensorsAvionics: [
        'AN/BQQ-10 Advanced Sonobuoys & Bow Large Aperture Bow (LAB) Sonar',
        'Kollmorgen AN/BVS-1 Photonics Masts'
      ]
    },
    relatedAssetIds: ['gerald-r-ford', 'tomahawk-block-v', 'mk48-torpedo', 'astute-class-ssn']
  },
  {
    id: 'astute-class-ssn',
    name: 'Astute-Class SSN',
    officialDesignation: 'Astute-Class Nuclear Powered Attack Submarine',
    commonName: 'Astute Class SSN',
    aliases: ['Astute', 'Astute Class', 'HMS Astute', 'S119', 'Astute SSN'],
    familyName: 'Astute Attack Submarine Family',
    branchId: 'navy',
    categoryId: 'submarines',
    categoryName: 'Submarines',
    subcategory: 'Nuclear Attack Submarine (SSN)',
    rankInCategory: 2,
    rankingRationale: 'Royal Navy’s flagship nuclear attack submarine featuring Sonar 2076 processing array and Spearfish heavyweight torpedoes.',
    originCountry: 'United Kingdom',
    originCountries: ['United Kingdom'],
    developerCountries: ['United Kingdom'],
    manufacturerCountries: ['United Kingdom'],
    operatorCountries: ['United Kingdom'],
    developer: 'BAE Systems Maritime – Submarines',
    manufacturer: 'BAE Systems Barrow-in-Furness',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: '7,400-ton nuclear attack submarine featuring Sonar 2076 acoustic suite, 38 Spearfish torpedoes, and Tomahawk Block V missiles.',
    fullOverview: 'The Astute-class is the Royal Navy’s premier nuclear attack submarine. Engineered with Rolls-Royce PWR2 nuclear reactors requiring no refueling over 25 years of service, Sonar 2076 acoustic array, and capacity for 38 Spearfish wire-guided torpedoes and Tomahawk V land-attack cruise missiles.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Royal Navy Submarine Service Specification / BAE Systems Maritime',
    ratings: {
      capability: 4.9, reliability: 4.7, maintainability: 4.1, survivability: 4.9, rangeMobility: 5.0, costEfficiency: 3.4, combatMaturity: 4.7, upgradePotential: 4.8, offensive: 4.9, defensive: 4.9, precision: 5.0, technology: 4.9, logistics: 4.1
    },
    specs: {
      entryIntoService: '2010',
      crew: '98 Officers and Enlisted (Capacity 109)',
      manufacturer: 'BAE Systems Submarines',
      primaryRole: 'Subsurface Fleet Defense, Anti-Submarine Warfare & Land Attack',
      keyMetrics: [
        { label: 'Displacement', value: '7,400', unit: 'Submerged Metric Tons', highlight: true },
        { label: 'Weapons Capacity', value: '38', unit: 'Spearfish Torpedoes / Tomahawks', highlight: true }
      ],
      armament: [
        '6x 533mm Torpedo Tubes firing Spearfish Heavyweight Torpedoes',
        'Tomahawk Block V Land Attack Cruise Missiles'
      ],
      propulsionPower: 'Rolls-Royce PWR2 Nuclear Reactor + Alstom Steam Turbines (Jet-pump propulsor)',
      sensorsAvionics: [
        'Thales Sonar 2076 Integrated Passive/Active Sonar Suite',
        'Thales Optronics CM010 Non-Hull-Penetrating Search Mast'
      ]
    },
    relatedAssetIds: ['virginia-class-ssn', 'tomahawk-block-v', 'suffren-barracuda-ssn']
  },
  {
    id: 'suffren-barracuda-ssn',
    name: 'Suffren-Class (Barracuda) SSN',
    officialDesignation: 'Suffren-Class (Barracuda Program) Nuclear Attack Submarine',
    commonName: 'Suffren SSN',
    aliases: ['Suffren', 'Barracuda', 'Barracuda SSN', 'Suffren-class'],
    familyName: 'Barracuda Nuclear Submarine Family',
    branchId: 'navy',
    categoryId: 'submarines',
    categoryName: 'Submarines',
    subcategory: 'Nuclear Attack Submarine (SSN)',
    rankInCategory: 3,
    rankingRationale: 'France’s stealthy nuclear attack submarine featuring F21 torpedoes, MdCN naval cruise missiles, and PSIM special forces hangar.',
    originCountry: 'France',
    originCountries: ['France'],
    developerCountries: ['France'],
    manufacturerCountries: ['France'],
    operatorCountries: ['France'],
    developer: 'Naval Group / TechnicAtome',
    manufacturer: 'Naval Group Cherbourg',
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: '5,300-ton stealth nuclear attack submarine equipped with K15 nuclear reactor, MdCN naval cruise missiles, and F21 Artemis torpedoes.',
    fullOverview: 'The Suffren-class (Barracuda program) is France’s newest nuclear-powered attack submarine. Designed by Naval Group, it features low acoustic signatures, hybrid K15 nuclear propulsion, 20 heavy weapons store capacity including MdCN land-attack cruise missiles, F21 wire-guided torpedoes, and dry deck shelter (DDS) for combat swimmers.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Naval Group Suffren SSN Factsheet / French DGA',
    ratings: {
      capability: 4.8, reliability: 4.8, maintainability: 4.3, survivability: 4.8, rangeMobility: 5.0, costEfficiency: 3.8, combatMaturity: 4.5, upgradePotential: 4.8, offensive: 4.8, defensive: 4.8, precision: 4.9, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: '2022 (Suffren IOC)',
      crew: '65 Officers and Enlisted + 15 Special Forces Commando capacity',
      manufacturer: 'Naval Group',
      primaryRole: 'Submarine Fleet Escort, Intelligence & Naval Cruise Strike',
      keyMetrics: [
        { label: 'Displacement', value: '5,300', unit: 'Submerged Metric Tons', highlight: true },
        { label: 'Weapon Payload', value: '20', unit: 'Heavy Ordnance Stores' }
      ],
      armament: [
        '4x 533mm Torpedo Tubes for F21 Artemis Heavyweight Torpedoes',
        'MdCN (Missile de Croisière Naval) Naval Land Attack Cruise Missiles',
        'SM39 Exocet Anti-Ship Missiles'
      ],
      propulsionPower: 'TechnicAtome K15 Nuclear Reactor (150 MWt) + Hybrid Electric Motor (Pump-jet propulsor)',
      sensorsAvionics: [
        'Thales UMS 3000 Sonar Suite with Flank Arrays',
        'Saab Sagem Optronic Mast'
      ]
    },
    relatedAssetIds: ['virginia-class-ssn', 'astute-class-ssn']
  },

  // =========================================================================
  // 6. NAVAL MISSILES (missiles-anti-ship)
  // =========================================================================
  {
    id: 'tomahawk-block-v',
    name: 'Tomahawk Block V (RGM-109E/UGM-109E)',
    officialDesignation: 'Tomahawk Land Attack Missile (TLAM) Block V',
    commonName: 'Tomahawk Block V',
    aliases: ['Tomahawk', 'TLAM', 'Block V', 'RGM-109E', 'UGM-109E', 'Tomahawk Cruise Missile'],
    familyName: 'Tomahawk Cruise Missile Family',
    branchId: 'navy',
    categoryId: 'missiles-anti-ship',
    categoryName: 'Naval Missiles',
    subcategory: 'Submarine/Surface Standoff Land Cruise Missile',
    rankInCategory: 1,
    rankingRationale: 'Combat-proven long-range naval cruise missile with 1,600+ km range, anti-jam GPS, and moving maritime target capability.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'United Kingdom', 'Japan', 'Australia'],
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Long-range precision standoff cruise missile with dual-mode maritime anti-ship target seeker (MST) and satellite re-targeting capability.',
    fullOverview: 'The Tomahawk Block V is the current evolution of the iconic naval cruise missile. Featuring an upgraded navigation unit with anti-jam GPS, satellite data link in-flight target re-routing, and Maritime Strike Tomahawk (MST) capability for engaging moving ships at sea out to 1,600 km.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Raytheon Missiles & Defense Tomahawk Specification Sheet',
    ratings: {
      capability: 5.0, reliability: 4.8, maintainability: 4.6, survivability: 4.7, rangeMobility: 5.0, costEfficiency: 4.1, combatMaturity: 5.0, upgradePotential: 4.8, offensive: 5.0, defensive: 4.0, precision: 5.0, technology: 4.9, logistics: 4.5
    },
    specs: {
      entryIntoService: '2021 (Block V)',
      crew: 'N/A (Ship/Submarine Ordnance)',
      manufacturer: 'Raytheon Missiles & Defense',
      primaryRole: 'Long-Range Precision Land Attack & Anti-Ship Standoff Strike',
      keyMetrics: [
        { label: 'Operational Range', value: '1,600+', unit: 'km', highlight: true },
        { label: 'Speed', value: '0.74', unit: 'Mach Subsonic Sea-Skimming', highlight: true },
        { label: 'Warhead', value: '450', unit: 'kg High-Explosive Penetrator' }
      ],
      armament: ['450 kg WDU-42/B Unitary Penetrator Warhead'],
      propulsionPower: 'Williams F107-WR-402 Turbofan Engine + Solid Rocket Booster',
      sensorsAvionics: [
        'Anti-Jam GPS / INS Navigation',
        'TERCOM & DSMAC Optical Matching',
        'Two-Way Satellite Data Link'
      ]
    },
    relatedAssetIds: ['arleigh-burke-flight-iii', 'virginia-class-ssn']
  },

  // =========================================================================
  // 7. TORPEDOES (navy-torpedoes)
  // =========================================================================
  {
    id: 'mk48-torpedo',
    name: 'Mk 48 Mod 7 CBASS',
    officialDesignation: 'Mark 48 Mod 7 Common Broadband Advanced Sonar System Torpedo',
    commonName: 'Mk 48 Torpedo',
    aliases: ['Mk 48', 'Mk-48', 'Mod 7 CBASS', 'Mk 48 Torpedo', 'CBASS'],
    familyName: 'Mk 48 Torpedo Family',
    branchId: 'navy',
    categoryId: 'navy-torpedoes',
    categoryName: 'Navy Torpedoes',
    subcategory: '533mm Wire-Guided Heavyweight',
    rankInCategory: 1,
    rankingRationale: 'Heavyweight 533mm submarine-launched wire-guided torpedo with digital broadband active/passive sonar homing.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Australia', 'Canada', 'Netherlands', 'Taiwan'],
    dataConfidence: 'VERIFIED',
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Heavyweight 533mm submarine-launched wire-guided torpedo with digital broadband sonar homing against deep quiet submarines and surface targets.',
    fullOverview: 'The Mk 48 Mod 7 CBASS (Common Broadband Advanced Sonar System) is the primary anti-submarine and anti-surface weapon of the US Navy submarine fleet. Transmitting and receiving acoustic signals across a wide frequency band.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Navy NAVSEA Undersea Warfare Directorate Datasheet',
    ratings: {
      capability: 4.9, reliability: 4.8, maintainability: 4.5, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.3, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.2, precision: 5.0, technology: 4.9, logistics: 4.5
    },
    specs: {
      entryIntoService: '2008 (Mod 7 CBASS variant)',
      crew: 'N/A (Submarine Ordnance)',
      manufacturer: 'Lockheed Martin / Naval Undersea Warfare Center',
      primaryRole: 'Submarine Heavyweight Anti-Submarine & Anti-Ship Torpedo Strike',
      keyMetrics: [
        { label: 'Caliber', value: '533', unit: 'mm (21 inches)', highlight: true },
        { label: 'Effective Range', value: '50+', unit: 'km', highlight: true },
        { label: 'Speed', value: '55+', unit: 'Knots' }
      ],
      armament: ['292 kg High-Explosive PBXN-103 Warhead'],
      propulsionPower: 'Piston Engine using Otto Fuel II liquid monopropellant',
      sensorsAvionics: [
        'Broadband Active/Passive Acoustic Sonar Seeker',
        'Fiber-Optic Guidance Wire Data Link'
      ]
    },
    relatedAssetIds: ['virginia-class-ssn', 'tomahawk-block-v']
  }
];

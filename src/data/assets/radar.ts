import { Asset } from '../../types/catalog';

export const RADAR_ASSETS: Asset[] = [
  {
    id: 'an-apg-81',
    name: 'AN/APG-81 AESA Radar',
    officialDesignation: 'AN/APG-81 Active Electronically Scanned Array Radar',
    commonName: 'AN/APG-81',
    aliases: ['AN/APG-81', 'APG-81', 'APG81', 'F-35 AESA Radar'],
    familyName: 'Northrop Grumman APG Airborne Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-airborne',
    categoryName: 'Airborne Radar',
    subcategory: 'Fighter Nose-Mounted AESA',
    rankInCategory: 1,
    rankingRationale: 'F-35 multi-role GaN AESA nose radar integrating synthetic aperture ground mapping and electronic attack.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'United Kingdom', 'Australia', 'Japan', 'South Korea', 'Israel', 'Netherlands', 'Norway', 'Italy', 'Poland'],
    developer: 'Northrop Grumman Mission Systems',
    manufacturer: 'Northrop Grumman',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Air Force', 'Navy', 'Joint'],
    searchKeywords: ['an/apg-81', 'apg-81', 'f-35 radar', 'aesa radar', 'northrop grumman', 'airborne radar'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Active Electronically Scanned Array (AESA) radar system equipping the F-35 Lightning II with long-range air-to-air tracking, SAR mapping, and electronic attack.',
    fullOverview: 'The AN/APG-81 is the primary radar for all F-35 variants. Utilizing GaAs/GaN T/R modules, it provides long-range air-to-air tracking, ultra-high-resolution Synthetic Aperture Radar (SAR) ground imaging, passive geolocation, and high-power offensive EW electronic attack.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Northrop Grumman AN/APG-81 Product Datasheet',
    ratings: {
      capability: 5.0, reliability: 4.8, maintainability: 4.6, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 4.0, combatMaturity: 4.9, upgradePotential: 5.0, offensive: 4.9, defensive: 5.0, precision: 5.0, technology: 5.0, logistics: 4.5
    },
    specs: {
      entryIntoService: '2015',
      crew: 'N/A (F-35 Integrated)',
      manufacturer: 'Northrop Grumman Mission Systems',
      primaryRole: 'Multifunction Airborne AESA Surveillance, Targeting & Electronic Warfare',
      keyMetrics: [
        { label: 'T/R Modules', value: '1,676', unit: 'Solid-State Transmit/Receive', highlight: true },
        { label: 'SAR Resolution', value: 'Sub-Meter', highlight: true },
        { label: 'Frequency Band', value: 'X-Band AESA' }
      ],
      armament: ['Integrated Electronic Attack / RF Energy Beam Weapon capability'],
      propulsionPower: 'Liquid-cooled avionics cooling loop',
      sensorsAvionics: ['Integrated CNIC / EOTS / DAS Interface']
    },
    sources: [
      {
        title: 'AN/APG-81 AESA Radar System Overview',
        url: 'https://www.northropgrumman.com',
        publisher: 'Northrop Grumman Corporation',
        sourceType: 'official',
        accessedAt: '2026-07-05'
      }
    ]
  },
  {
    id: 'an-spy-6',
    name: 'AN/SPY-6 Air and Missile Defense Radar',
    officialDesignation: 'AN/SPY-6(V)1 Air and Missile Defense Radar',
    commonName: 'AN/SPY-6',
    aliases: ['AN/SPY-6', 'SPY-6', 'SPY6', 'AMDR', 'AN/SPY-6(V)1'],
    familyName: 'Raytheon SPY Naval Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-naval',
    categoryName: 'Naval Radar',
    subcategory: '4-Face Fixed Panel AESA',
    rankInCategory: 1,
    rankingRationale: 'U.S. Navy Arleigh Burke Flight III 3D GaN S-band AESA array delivering +15 dB higher sensitivity.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'Raytheon Missiles & Defense',
    manufacturer: 'Raytheon Technologies',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Navy'],
    searchKeywords: ['an/spy-6', 'spy-6', 'amdr', 'arleigh burke flight iii', 'raytheon', 'naval radar', 'aesa'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: '3D Gallium Nitride (GaN) S-band AESA radar array providing integrated air and anti-ballistic missile defense for U.S. Navy Arleigh Burke Flight III destroyers.',
    fullOverview: 'The AN/SPY-6(V)1 Air and Missile Defense Radar (AMDR) is built with modular Radar Modular Assemblies (RMAs) using Gallium Nitride (GaN) semiconductors. Delivering +15 dB higher sensitivity than AN/SPY-1D(V), it simultaneously tracks horizon air threats, ballistic missiles, and surface combatants.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Navy NAVSEA / Raytheon SPY-6 Technical Fact Sheet',
    ratings: {
      capability: 5.0, reliability: 4.9, maintainability: 4.7, survivability: 4.9, rangeMobility: 4.5, costEfficiency: 3.8, combatMaturity: 4.6, upgradePotential: 5.0, offensive: 4.5, defensive: 5.0, precision: 5.0, technology: 5.0, logistics: 4.4
    },
    specs: {
      entryIntoService: '2023 (DDG-125 Jack H. Lucas)',
      crew: '4 Ship CIC Console Operators',
      manufacturer: 'Raytheon Technologies',
      primaryRole: 'Integrated Naval Air & Anti-Ballistic Missile Defense Surveillance',
      keyMetrics: [
        { label: 'Sensitivity vs SPY-1D', value: '+15', unit: 'dB (30x capability boost)', highlight: true },
        { label: 'Semiconductor', value: 'Gallium Nitride (GaN)', highlight: true },
        { label: 'Configuration', value: '4-Face 37-RMA Fixed Arrays' }
      ],
      armament: ['Aegis Weapon System / SM-3 / SM-6 Target Illumination'],
      propulsionPower: 'High-capacity shipboard auxiliary cooling loop',
      sensorsAvionics: ['Integrated Digital Signal Processor & Beamformer']
    },
    sources: [
      {
        title: 'AN/SPY-6(V) Radar Family Specifications',
        url: 'https://www.raytheon.com',
        publisher: 'Raytheon Technologies',
        sourceType: 'official',
        accessedAt: '2026-06-30'
      }
    ]
  },
  {
    id: 'an-tpy-2',
    name: 'AN/TPY-2 Radar',
    officialDesignation: 'AN/TPY-2 Army Navy / Transportable Radar Surveillance',
    commonName: 'AN/TPY-2',
    aliases: ['AN/TPY-2', 'TPY-2', 'TPY2', 'THAAD Radar'],
    familyName: 'Raytheon High-Altitude Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-missile-defence-early-warning',
    categoryName: 'Missile Defence / Early Warning Radar',
    subcategory: 'X-Band Missile Defence Radar (TPY-2)',
    rankInCategory: 1,
    rankingRationale: 'X-band 25,344 T/R module transportable radar acquiring ballistic missiles up to 3,000 km range.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Japan', 'Israel', 'Türkiye', 'Saudi Arabia', 'United Arab Emirates'],
    developer: 'Raytheon Missiles & Defense',
    manufacturer: 'Raytheon Technologies',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Army', 'Joint'],
    searchKeywords: ['an/tpy-2', 'tpy-2', 'thaad radar', 'x-band radar', 'ballistic missile radar', 'raytheon'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'High-resolution transportable X-band AESA phased array radar acquiring and tracking ballistic missiles at ranges up to 3,000 km.',
    fullOverview: 'The AN/TPY-2 is a mobile X-band high-altitude ballistic missile surveillance radar. Operating in Forward-Based Mode (FBM) or Terminal Mode (TM with THAAD), its 25,344 T/R module array detects ballistic missile boost and re-entry phases thousands of kilometers away.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Missile Defense Agency AN/TPY-2 Fact Sheet',
    ratings: {
      capability: 5.0, reliability: 4.8, maintainability: 4.2, survivability: 4.6, rangeMobility: 4.3, costEfficiency: 3.5, combatMaturity: 5.0, upgradePotential: 4.8, offensive: 3.5, defensive: 5.0, precision: 5.0, technology: 5.0, logistics: 4.1
    },
    specs: {
      entryIntoService: '2006',
      crew: '6 Operators & System Engineers',
      manufacturer: 'Raytheon Technologies',
      primaryRole: 'Strategic Long-Range Ballistic Missile Early Warning & Intercept Guidance',
      keyMetrics: [
        { label: 'Detection Range', value: '3,000', unit: 'km', highlight: true },
        { label: 'T/R Modules', value: '25,344', unit: 'Solid-State X-Band', highlight: true },
        { label: 'Mobility', value: 'Air-Transportable C-17 / C-5' }
      ],
      armament: ['Direct Target Data Feed to THAAD / Patriot / Aegis BMD'],
      propulsionPower: 'Heavy Duty Trailer Diesel Power Unit',
      sensorsAvionics: ['X-Band Active Electronically Scanned Array']
    },
    sources: [
      {
        title: 'AN/TPY-2 Ballistic Missile Defense Radar Overview',
        url: 'https://www.mda.mil',
        publisher: 'U.S. Missile Defense Agency',
        sourceType: 'official',
        accessedAt: '2026-08-01'
      }
    ]
  },
  {
    id: 'giraffe-1x',
    name: 'Giraffe 1X Radar',
    officialDesignation: 'Giraffe 1X 3D Tactical Radar',
    commonName: 'Giraffe 1X',
    aliases: ['Giraffe 1X', 'Giraffe', 'Saab Giraffe 1X'],
    familyName: 'Saab Giraffe Radar Family',
    domain: 'RADAR',
    branchId: 'radar',
    categoryId: 'radar-ground-air-surveillance',
    categoryName: 'Ground-Based Air Surveillance Radar',
    subcategory: '3D Tactical Air Surveillance',
    rankInCategory: 1,
    rankingRationale: 'Ultralight 150-kg 3D GaN AESA radar delivering 75-km 360-degree surveillance and micro-UAV detection.',
    originCountry: 'Sweden',
    originCountries: ['Sweden'],
    developerCountries: ['Sweden'],
    manufacturerCountries: ['Sweden'],
    operatorCountries: ['Sweden', 'United Kingdom', 'United States'],
    developer: 'Saab AB Electronic Defence Systems',
    manufacturer: 'Saab AB',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Army', 'Air Force', 'Joint'],
    searchKeywords: ['giraffe 1x', 'saab giraffe', '3d radar', 'c-uas radar', 'saab', 'tactical radar'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Ultralight 3D GaN AESA radar weighing under 150 kg providing 75 km 360-degree air surveillance, C-UAS drone detection, and RAM counter-battery tracking.',
    fullOverview: 'The Saab Giraffe 1X is an extremely compact 3D AESA air surveillance radar. Engineered for ground tactical vehicles and stationary posts, it simultaneously tracks micro-UAV drones, low-altitude aircraft, mortars, and rocket launches while on the move.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Saab AB Giraffe 1X Product Manual',
    ratings: {
      capability: 4.8, reliability: 4.9, maintainability: 4.9, survivability: 4.6, rangeMobility: 5.0, costEfficiency: 4.5, combatMaturity: 4.6, upgradePotential: 4.8, offensive: 3.8, defensive: 4.9, precision: 4.8, technology: 4.9, logistics: 4.9
    },
    specs: {
      entryIntoService: '2017',
      crew: '1 Operator / Automated Remote',
      manufacturer: 'Saab AB',
      primaryRole: 'Mobile Short-Range 3D Air Surveillance & Counter-UAS Radar',
      keyMetrics: [
        { label: 'Weight', value: '150', unit: 'kg Total Antenna Array', highlight: true },
        { label: 'Instrumented Range', value: '75', unit: 'km', highlight: true },
        { label: 'Target Types', value: 'UAVs, Aircraft, RAM (Rocket/Artillery/Mortar)' }
      ],
      armament: ['Integrated Target Data Link to VSHORAD / C-UAS Effectors'],
      propulsionPower: 'Vehicle 24V DC / Auxiliary Generator',
      sensorsAvionics: ['Gallium Nitride (GaN) X-Band 3D AESA']
    },
    sources: [
      {
        title: 'Saab Giraffe 1X 3D Radar Factsheet',
        url: 'https://www.saab.com',
        publisher: 'Saab AB',
        sourceType: 'official',
        accessedAt: '2026-07-22'
      }
    ]
  }
];

import { Asset } from '../../types/catalog';

export const ARMY_ASSETS: Asset[] = [
  // =========================================================================
  // 1. MAIN BATTLE TANKS (main-battle-tanks)
  // =========================================================================
  {
    id: 'm1a2-abrams',
    name: 'M1A2 SEPv3 Abrams',
    officialDesignation: 'Tank, Combat, Full Tracked: 120mm Gun M1A2',
    commonName: 'M1 Abrams',
    aliases: ['M1A2', 'M1A2 SEPv3', 'Abrams', 'M1 Abrams', 'Abrams SEPv3', 'M1A2 SEP v3', 'SEPv3', 'M1A2 SEPv2'],
    familyName: 'Abrams Main Battle Tank Family',
    domain: 'LAND',
    branchId: 'army',
    categoryId: 'main-battle-tanks',
    categoryName: 'Main Battle Tanks',
    subcategory: 'Heavy MBT',
    rankInCategory: 1,
    rankingRationale: 'Premier heavy MBT featuring 3GEN FLIR thermal optics, depleted uranium composite armor, and Trophy active protection system.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Poland', 'Australia', 'Saudi Arabia', 'Kuwait', 'Egypt', 'Taiwan', 'Ukraine'],
    dataConfidence: 'VERIFIED',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    searchKeywords: ['m1a2', 'abrams', 'sepv3', 'm1', 'mbt', 'tank', 'trophy aps', 'chobham'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'The premier main battle tank of the US Army, featuring Chobham depleted uranium composite armor, 120mm smoothbore cannon, and Trophy active protection system.',
    fullOverview: 'The M1A2 SEPv3 (System Enhancement Package Version 3) is the flagship iteration of the Abrams main battle tank. Upgrades include improved line-replaceable units, vehicle health management systems, joint tactical radio systems, line-replaceable unit (LRU) architecture, enhanced FLIR thermal sights, dynamic climate control, and full integration of the Trophy Active Protection System (APS) to intercept incoming ATGMs and RPG rockets.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Army PEO Ground Combat Systems Factsheet / Jane’s All the World’s Tanks',
    ratings: {
      capability: 4.9, reliability: 4.2, maintainability: 3.5, survivability: 4.9, rangeMobility: 4.1, costEfficiency: 3.2, combatMaturity: 5.0, upgradePotential: 4.6, offensive: 4.9, defensive: 5.0, precision: 4.8, technology: 4.8, logistics: 3.4
    },
    specs: {
      entryIntoService: '2020 (SEPv3 variant)',
      crew: '4 (Commander, Gunner, Loader, Driver)',
      manufacturer: 'General Dynamics Land Systems',
      primaryRole: 'Armored Direct-Fire Mobile Protected Strike & Heavy Defense',
      keyMetrics: [
        { label: 'Combat Weight', value: '73.6', unit: 'Metric Tons', highlight: true },
        { label: 'Max Road Speed', value: '67', unit: 'km/h', highlight: true },
        { label: 'Operational Range', value: '426', unit: 'km' },
        { label: 'Main Gun Caliber', value: '120', unit: 'mm M256 Smoothbore' }
      ],
      armament: [
        '120mm M256 L/44 Smoothbore Cannon (42 rounds)',
        '1x .50 cal (12.7mm) M2HB Machine Gun (CROW Remote Station)',
        '2x 7.62mm M240 Machine Guns (1 coaxial, 1 loader pintle)'
      ],
      propulsionPower: 'Honeywell AGT1500 Multi-Fuel Gas Turbine Engine (1,500 hp)',
      sensorsAvionics: [
        '3rd-Gen Forward-Looking Infrared (3GEN FLIR)',
        'Commander Independent Thermal Viewer (CITV)',
        'Trophy Active Protection System Radar (4x AESA panels)'
      ]
    },
    relatedAssetIds: ['leopard-2a7', 'k2-black-panther', 'm2a4-bradley']
  },
  {
    id: 'leopard-2a7',
    name: 'Leopard 2A7+',
    officialDesignation: 'Kampfpanzer Leopard 2A7+',
    commonName: 'Leopard 2',
    aliases: ['Leopard 2', 'Leopard 2A7', 'Leopard 2A7+', 'Leopard 2A8', 'Leopard2', 'Leo 2A7'],
    familyName: 'Leopard 2 Main Battle Tank Family',
    domain: 'LAND',
    branchId: 'army',
    categoryId: 'main-battle-tanks',
    categoryName: 'Main Battle Tanks',
    subcategory: 'Modern MBT',
    rankInCategory: 2,
    rankingRationale: 'State-of-the-art European MBT featuring high-velocity Rheinmetall 120mm L/55 gun and 360-degree modular passive armor.',
    originCountry: 'Germany',
    originCountries: ['Germany'],
    developerCountries: ['Germany'],
    manufacturerCountries: ['Germany'],
    operatorCountries: ['Germany', 'Denmark', 'Hungary', 'Norway', 'Singapore', 'Greece', 'Spain'],
    dataConfidence: 'VERIFIED',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    searchKeywords: ['leopard 2', 'leopard 2a7', 'leopard 2a8', 'kmw', 'knds', 'rheinmetall', 'mbt', 'tank'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Germany’s state-of-the-art main battle tank equipped with the long-barrel Rheinmetall 120mm L/55 gun, modular 360-degree passive protection, and APU power system.',
    fullOverview: 'The Leopard 2A7+ is optimized for high-intensity conventional armored warfare and urban combat operations. Featuring reinforced hull bottom mine protection, modular armor packages, programmable airburst HE ammunition capability, climate control for crew, and advanced PERI RTWL panoramic commander optics.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Krauss-Maffei Wegmann (KMW) Product Portfolio / Bundeswehr Technical Datasheet',
    ratings: {
      capability: 4.9, reliability: 4.7, maintainability: 4.1, survivability: 4.8, rangeMobility: 4.5, costEfficiency: 3.5, combatMaturity: 4.8, upgradePotential: 4.7, offensive: 4.9, defensive: 4.8, precision: 4.9, technology: 4.8, logistics: 4.0
    },
    specs: {
      entryIntoService: '2014 (A7 baseline)',
      crew: '4 (Commander, Gunner, Loader, Driver)',
      manufacturer: 'KNDS (Krauss-Maffei Wegmann & Nexter)',
      primaryRole: 'Heavy Armored Combat & Superior Land Engagement',
      keyMetrics: [
        { label: 'Combat Weight', value: '67.5', unit: 'Metric Tons', highlight: true },
        { label: 'Max Road Speed', value: '70', unit: 'km/h', highlight: true },
        { label: 'Operational Range', value: '450', unit: 'km' },
        { label: 'Main Gun Caliber', value: '120', unit: 'mm L/55 Smoothbore' }
      ],
      armament: [
        'Rheinmetall 120mm L/55 Smoothbore Gun (42 rounds)',
        '1x 7.62mm MG3A1 Coaxial Machine Gun',
        '1x FLW 200 Remote Weapon Station'
      ],
      propulsionPower: 'MTU MB 873 Ka-501 V-12 Twin-Turbo Diesel (1,500 hp)',
      sensorsAvionics: [
        'PERI RTWL Commander Thermal Panoramic Sight',
        'EMES 15 Fire Control Computer & Laser Rangefinder'
      ]
    },
    relatedAssetIds: ['m1a2-abrams', 'k2-black-panther', 'cv90-ifv']
  },
  {
    id: 'k2-black-panther',
    name: 'K2 Black Panther',
    officialDesignation: 'K2 Heung-Ryong (Black Panther)',
    commonName: 'Black Panther',
    aliases: ['K2', 'K2 Black Panther', 'Black Panther', 'K2A1', 'K2PL', 'K2 Heung-Ryong'],
    familyName: 'K2 Black Panther Family',
    domain: 'LAND',
    branchId: 'army',
    categoryId: 'main-battle-tanks',
    categoryName: 'Main Battle Tanks',
    subcategory: 'Modern MBT',
    rankInCategory: 3,
    rankingRationale: 'High-mobility MBT featuring hydropneumatic in-arm suspension for mountainous terrain and automatic loader.',
    originCountry: 'South Korea',
    originCountries: ['South Korea'],
    developerCountries: ['South Korea'],
    manufacturerCountries: ['South Korea'],
    operatorCountries: ['South Korea', 'Poland'],
    dataConfidence: 'VERIFIED',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    searchKeywords: ['k2', 'black panther', 'hyundai rotem', 'rok army', 'mbt', 'tank'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'High-tech South Korean main battle tank featuring an autoloader, hydropneumatic in-arm suspension, millimetric radar, and KSTAM top-attack smart munitions.',
    fullOverview: 'Designed by ADD and manufactured by Hyundai Rotem, the K2 Black Panther is engineered for mountainous terrain and modern digital network-centric warfare. Its hydropneumatic suspension enables the tank to kneel, sit, or lean to increase cannon elevation angles, while its autoloader reduces crew complement to 3.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Hyundai Rotem Defense Systems Catalog / DAPA Public Datasheet',
    ratings: {
      capability: 4.8, reliability: 4.5, maintainability: 4.4, survivability: 4.6, rangeMobility: 4.9, costEfficiency: 3.8, combatMaturity: 3.9, upgradePotential: 4.8, offensive: 4.9, defensive: 4.6, precision: 4.8, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: '2014',
      crew: '3 (Commander, Gunner, Driver - Autoloaded)',
      manufacturer: 'Hyundai Rotem',
      primaryRole: 'High-Mobility Networked Main Battle Tank',
      keyMetrics: [
        { label: 'Combat Weight', value: '55.0', unit: 'Metric Tons', highlight: true },
        { label: 'Max Road Speed', value: '70', unit: 'km/h', highlight: true },
        { label: 'Main Gun Caliber', value: '120', unit: 'mm L/55 Smoothbore' }
      ],
      armament: [
        'Hyundai WIA 120mm L/55 Smoothbore Gun with 16-round Autoloader belt',
        '1x 12.7mm K6 Heavy Machine Gun',
        '1x 7.62mm Coaxial Machine Gun'
      ],
      propulsionPower: 'Hyundai Doosan Infracore DV27K 4-stroke V12 Diesel (1,500 hp)',
      sensorsAvionics: [
        'Millimeter-band Radar tracking system',
        'CWC Korean Commander Panoramic Sight'
      ]
    },
    relatedAssetIds: ['m1a2-abrams', 'leopard-2a7', 'pzh-2000-sph']
  },
  {
    id: 't14-armata',
    name: 'T-14 Armata',
    officialDesignation: 'T-14 Armata Main Battle Tank (Object 148)',
    commonName: 'T-14 Armata',
    aliases: ['T-14', 'T14', 'Armata', 'Object 148', 'T-14 Armata'],
    familyName: 'Armata Universal Combat Platform Family',
    domain: 'LAND',
    branchId: 'army',
    categoryId: 'main-battle-tanks',
    categoryName: 'Main Battle Tanks',
    subcategory: 'Next-Gen Unmanned Turret MBT',
    rankInCategory: 4,
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: ['Russia'],
    dataConfidence: 'HIGH',
    status: 'DEVELOPMENT',
    currentRelevance: 'PROTOTYPE',
    searchKeywords: ['t-14', 'armata', 't14', 'unmanned turret', 'afganit aps', 'uralvagonzavod'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Next-generation Russian MBT architecture featuring an isolated armored crew capsule, fully automated unmanned turret, and Afghanit active protection system.',
    fullOverview: 'The T-14 Armata is Russia’s next-generation heavy armored platform. It features an innovative design separating the 3-person crew in a heavily reinforced armored capsule in the front hull, while the 125mm 2A82-1M smoothbore cannon is operated in an unmanned, fully remote turret. Note: Maintained in low-rate initial evaluation/testing status as of 2026.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Uralvagonzavod Technical Presentation / Rosoboronexport Datasheet',
    ratings: {
      capability: 4.7, reliability: 3.5, maintainability: 3.2, survivability: 4.8, rangeMobility: 4.5, costEfficiency: 3.0, combatMaturity: 2.2, upgradePotential: 4.9, offensive: 4.8, defensive: 4.8, precision: 4.6, technology: 4.9, logistics: 3.2
    },
    specs: {
      entryIntoService: '2021 (Evaluation / Limited Trials)',
      crew: '3 (Commander, Gunner, Driver in Hull Capsule)',
      manufacturer: 'Uralvagonzavod',
      primaryRole: 'Next-Gen Armored Direct Fire & Unmanned Turret Technology Demonstrator',
      keyMetrics: [
        { label: 'Combat Weight', value: '55.0', unit: 'Metric Tons', highlight: true },
        { label: 'Max Speed', value: '75', unit: 'km/h', highlight: true },
        { label: 'Main Cannon', value: '125', unit: 'mm 2A82-1M Smoothbore' }
      ],
      armament: [
        '125mm 2A82-1M Smoothbore Cannon with 45-round Autoloader',
        '1x 12.7mm Kord Remote Weapon Station'
      ],
      propulsionPower: 'ChTZ 12N360 (A-85-3A) X-engine Turbocharged Diesel (1,500 hp)',
      sensorsAvionics: [
        'Afghanit Hard-Kill / Soft-Kill Active Protection System (AESA radar panels)',
        'Malachit Modular Explosive Reactive Armor'
      ]
    },
    relatedAssetIds: ['m1a2-abrams', 'leopard-2a7', 'k2-black-panther']
  },

  // =========================================================================
  // 2. LIGHT TANKS (light-tanks)
  // =========================================================================
  {
    id: 'm10-booker',
    name: 'M10 Booker MPF',
    officialDesignation: 'Mobile Protected Firepower (MPF) M10',
    commonName: 'M10 Booker',
    aliases: ['M10', 'Booker', 'MPF', 'M10 Booker', 'M10 Booker MPF'],
    familyName: 'M10 Mobile Protected Firepower Family',
    domain: 'LAND',
    branchId: 'army',
    categoryId: 'light-tanks',
    categoryName: 'Light Tanks',
    subcategory: 'Light Assault Tank',
    rankInCategory: 1,
    rankingRationale: 'Modern air-transportable 38-ton light assault tank providing organic 105mm direct fire support to airborne and light infantry.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    dataConfidence: 'VERIFIED',
    status: 'Production',
    currentRelevance: 'CURRENT',
    searchKeywords: ['m10', 'booker', 'mpf', 'm10 booker', 'light tank', 'us army'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Air-transportable tracked armored vehicle providing organic heavy direct-fire support to US Army Infantry Brigade Combat Teams (IBCTs).',
    fullOverview: 'The M10 Booker is the US Army’s newest mobile protected firepower platform. Built on a GDLS chassis with an M1A2 SEPv3 turret control system, it bridges the gap between light infantry and heavy Abrams armor packages.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'U.S. Army PEO Ground Combat Systems MPF Program Sheet',
    ratings: {
      capability: 4.5, reliability: 4.4, maintainability: 4.5, survivability: 4.0, rangeMobility: 4.7, costEfficiency: 4.1, combatMaturity: 3.4, upgradePotential: 4.6, offensive: 4.6, defensive: 4.0, precision: 4.7, technology: 4.6, logistics: 4.5
    },
    specs: {
      entryIntoService: '2023',
      crew: '4 (Commander, Gunner, Loader, Driver)',
      manufacturer: 'General Dynamics Land Systems',
      primaryRole: 'Infantry Mobile Protected Direct-Fire Support',
      keyMetrics: [
        { label: 'Combat Weight', value: '38.0', unit: 'Metric Tons', highlight: true },
        { label: 'Max Speed', value: '65', unit: 'km/h', highlight: true },
        { label: 'Main Cannon', value: '105', unit: 'mm M35' }
      ],
      armament: [
        '105mm M35 Rifled Cannon',
        '1x .50 cal M2HB Machine Gun',
        '1x 7.62mm M240 Coaxial Machine Gun'
      ],
      propulsionPower: 'MTU 8V199 TE23 Diesel Engine (800 hp)',
      sensorsAvionics: ['Raytheon Thermal Sights', 'Digital Fire Control System']
    },
    relatedAssetIds: ['m1a2-abrams', 'm2a4-bradley']
  },

  // =========================================================================
  // 3. INFANTRY FIGHTING VEHICLES (ifvs)
  // =========================================================================
  {
    id: 'cv90-ifv',
    name: 'CV90 IFV (Strf 90)',
    officialDesignation: 'Combat Vehicle 90 (Stridsfordon 90)',
    commonName: 'CV90',
    aliases: ['CV90', 'CV-90', 'Strf 90', 'CV90 MkIV', 'Stridsfordon 90'],
    familyName: 'CV90 Armored Combat Vehicle Family',
    domain: 'LAND',
    branchId: 'army',
    categoryId: 'ifvs',
    categoryName: 'Infantry Fighting Vehicles',
    subcategory: 'Tracked Heavy IFV',
    rankInCategory: 1,
    rankingRationale: 'Combat-proven modular European tracked IFV featuring 40mm Bofors / 35mm Bushmaster autocannon and active protection system.',
    originCountry: 'Sweden',
    originCountries: ['Sweden'],
    developerCountries: ['Sweden'],
    manufacturerCountries: ['Sweden'],
    operatorCountries: ['Sweden', 'Norway', 'Finland', 'Denmark', 'Netherlands', 'Switzerland', 'Estonia', 'Slovakia', 'Czech Republic', 'Ukraine'],
    developer: 'FMV / BAE Systems Hägglunds',
    manufacturer: 'BAE Systems Hägglunds',
    dataConfidence: 'VERIFIED',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    searchKeywords: ['cv90', 'cv-90', 'strf 90', 'bae hägglunds', 'ifv', 'bofors'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Highly versatile Swedish tracked infantry fighting vehicle equipped with Bofors 40mm or Bushmaster 35mm autocannon and rubber tracks.',
    fullOverview: 'The CV90 (Combat Vehicle 90) is BAE Systems Hägglunds’ premier tracked IFV. Known for extreme mobility in snow and mud, rubber continuous tracks reducing acoustic signature, modular composite armor, automated fire control, and ATGM launcher integration.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'BAE Systems Hägglunds CV90 MkIV Product Specification',
    ratings: {
      capability: 4.9, reliability: 4.8, maintainability: 4.5, survivability: 4.7, rangeMobility: 4.9, costEfficiency: 4.2, combatMaturity: 4.9, upgradePotential: 4.8, offensive: 4.8, defensive: 4.7, precision: 4.9, technology: 4.8, logistics: 4.5
    },
    specs: {
      entryIntoService: '1993 (MkIV variant 2021)',
      crew: '3 Crew + 8 Dismounted Infantry',
      manufacturer: 'BAE Systems Hägglunds',
      primaryRole: 'Mechanized Infantry Tactical Assault & Direct Fire Support',
      keyMetrics: [
        { label: 'Combat Weight', value: '37.0', unit: 'Metric Tons', highlight: true },
        { label: 'Max Road Speed', value: '70', unit: 'km/h', highlight: true },
        { label: 'Main Autocannon', value: '40mm / 35mm', unit: 'Bofors / Bushmaster III' }
      ],
      armament: [
        '40mm Bofors L/70 Autocannon (or 35mm Bushmaster III)',
        'Spike LR2 ATGM Twin Launcher',
        '1x 7.62mm Coaxial Machine Gun'
      ],
      propulsionPower: 'Scania DC16 V8 Turbocharged Diesel Engine (1,000 hp)',
      sensorsAvionics: [
        'Saab Universal Tank and Anti-Aircraft System (UTAAS) Fire Control',
        'Iron Fist Active Protection System'
      ]
    },
    relatedAssetIds: ['m2a4-bradley', 'leopard-2a7', 'bmp3-ifv']
  },
  {
    id: 'm2a4-bradley',
    name: 'M2A4 Bradley IFV',
    officialDesignation: 'M2A4 Bradley Infantry Fighting Vehicle',
    commonName: 'M2 Bradley',
    aliases: ['M2', 'M2A4', 'Bradley', 'M2 Bradley', 'M2A3 Bradley'],
    familyName: 'Bradley Fighting Vehicle Family',
    domain: 'LAND',
    branchId: 'army',
    categoryId: 'ifvs',
    categoryName: 'Infantry Fighting Vehicles',
    subcategory: 'Tracked IFV',
    rankInCategory: 2,
    rankingRationale: 'Combat-proven US Army IFV integrating 25mm Bushmaster autocannon, TOW-2B ATGM launcher, and digitized BFV C4ISR.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Saudi Arabia', 'Lebanon', 'Croatia', 'Ukraine'],
    developer: 'FMC Corporation / BAE Systems Land & Armaments',
    manufacturer: 'BAE Systems',
    dataConfidence: 'VERIFIED',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    searchKeywords: ['m2a4', 'bradley', 'm2 bradley', 'ifv', 'tow missile', 'bae systems'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Digitized US Army armored tracked infantry fighting vehicle firing 25mm M242 Bushmaster cannon and dual TOW-2B ATGMs.',
    fullOverview: 'The M2A4 Bradley is the newest modernized iteration of the battle-proven Bradley Fighting Vehicle. Upgrades include an upgraded 675 hp Cummins VTA-903E engine, digitized high-definition thermal sights, Iron Fist active protection system integration, and enhanced suspension capability.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Army PEO Ground Combat Systems Bradley Factsheet',
    ratings: {
      capability: 4.8, reliability: 4.6, maintainability: 4.2, survivability: 4.6, rangeMobility: 4.5, costEfficiency: 3.8, combatMaturity: 5.0, upgradePotential: 4.6, offensive: 4.9, defensive: 4.6, precision: 4.8, technology: 4.7, logistics: 4.2
    },
    specs: {
      entryIntoService: '1981 (M2A4 variant 2022)',
      crew: '3 Crew + 6 to 7 Infantry Squad',
      manufacturer: 'BAE Systems',
      primaryRole: 'Mechanized Infantry Transport & Armored Reconnaissance Strike',
      keyMetrics: [
        { label: 'Combat Weight', value: '36.2', unit: 'Metric Tons', highlight: true },
        { label: 'Max Speed', value: '66', unit: 'km/h', highlight: true },
        { label: 'ATGM Launcher', value: 'TOW-2B', unit: 'Dual Tube Launcher' }
      ],
      armament: [
        '25mm M242 Bushmaster Chain Gun (900 rounds)',
        'Twin TOW-2B / TOW-2A Wire-Guided Anti-Tank Missile Launcher',
        '1x 7.62mm M240C Coaxial Machine Gun'
      ],
      propulsionPower: 'Cummins VTA-903E V8 Turbocharged Diesel (675 hp)',
      sensorsAvionics: [
        'Improved Bradley Acquisition Subsystem (IBAS) 2GEN FLIR',
        'Commander Independent Viewer (CIV)'
      ]
    },
    relatedAssetIds: ['m1a2-abrams', 'cv90-ifv', 'bmp3-ifv']
  },
  {
    id: 'bmp3-ifv',
    name: 'BMP-3 IFV',
    officialDesignation: 'BMP-3 Tracked Infantry Fighting Vehicle',
    commonName: 'BMP-3',
    aliases: ['BMP-3', 'BMP3', 'BMP-3M', 'Kurganmashzavod BMP-3'],
    familyName: 'BMP Infantry Fighting Vehicle Family',
    domain: 'LAND',
    branchId: 'army',
    categoryId: 'ifvs',
    categoryName: 'Infantry Fighting Vehicles',
    subcategory: 'Amphibious Heavy Firepower IFV',
    rankInCategory: 3,
    rankingRationale: 'Amphibious Russian IFV combining low-pressure 100mm 2A70 gun (firing 9M117 ATGMs) and coaxial 30mm 2A72 autocannon.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: ['Russia', 'United Arab Emirates', 'Kuwait', 'Venezuela', 'Indonesia', 'Cyprus'],
    developer: 'Kurganmashzavod',
    manufacturer: 'Kurganmashzavod / Rostec',
    dataConfidence: 'VERIFIED',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    searchKeywords: ['bmp-3', 'bmp3', 'bmp-3m', 'kurganmashzavod', 'ifv', '9m117'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Heavy-firepower amphibious Russian IFV carrying a dual 100mm rifled cannon and 30mm autocannon in a single turret module.',
    fullOverview: 'The BMP-3 is Russia’s flagship amphibious infantry fighting vehicle. Renowned for its unique armament suite pairing a 100mm 2A70 low-pressure rifled gun capable of firing high-explosive shells and 9M117 Bastion ATGMs alongside a coaxial 30mm 2A72 autocannon.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'Very Good',
    sourceCitation: 'Kurganmashzavod Technical Datasheet / Rosoboronexport Catalog',
    ratings: {
      capability: 4.7, reliability: 4.3, maintainability: 4.2, survivability: 4.1, rangeMobility: 4.8, costEfficiency: 4.5, combatMaturity: 4.8, upgradePotential: 4.4, offensive: 4.9, defensive: 4.1, precision: 4.6, technology: 4.4, logistics: 4.2
    },
    specs: {
      entryIntoService: '1987 (BMP-3M modernization 2018)',
      crew: '3 Crew + 7 Squad Infantry',
      manufacturer: 'Kurganmashzavod',
      primaryRole: 'Amphibious Armored Infantry Support & Direct Fire Engagement',
      keyMetrics: [
        { label: 'Combat Weight', value: '18.7', unit: 'Metric Tons', highlight: true },
        { label: 'Max Speed', value: '70', unit: 'km/h (10 km/h water)', highlight: true },
        { label: 'Dual Armament', value: '100mm + 30mm', unit: '2A70 + 2A72 Cannons' }
      ],
      armament: [
        '100mm 2A70 Low-Pressure Gun / Missile Launcher (40 rounds + 8x 9M117 Bastion ATGMs)',
        '30mm 2A72 Autocannon (500 rounds)',
        '3x 7.62mm PKT Machine Guns (1 coaxial, 2 bow bow-mounted)'
      ],
      propulsionPower: 'UTD-19 V10 4-stroke Diesel Engine (500 hp)',
      sensorsAvionics: [
        'Sosna-U Thermal Imaging Sight',
        'Vesna Digital Fire Control System'
      ]
    },
    relatedAssetIds: ['cv90-ifv', 'm2a4-bradley']
  },

  // =========================================================================
  // 4. ARTILLERY — SELF-PROPELLED (artillery-self-propelled)
  // =========================================================================
  {
    id: 'pzh-2000-sph',
    name: 'PzH 2000 Howitzer',
    officialDesignation: 'Panzerhaubitze 2000 155mm Self-Propelled Howitzer',
    commonName: 'PzH 2000',
    aliases: ['PzH 2000', 'PzH2000', 'Panzerhaubitze 2000', 'PzH 2000 SPH'],
    familyName: 'PzH 2000 Artillery Family',
    domain: 'LAND',
    branchId: 'army',
    categoryId: 'artillery-self-propelled',
    categoryName: 'Artillery — Self-Propelled',
    subcategory: 'Tracked Automated 155mm SPH',
    rankInCategory: 1,
    rankingRationale: 'World standard 155mm/L52 automated self-propelled howitzer delivering 10-round per minute burst rate and MRSI precision fire.',
    originCountry: 'Germany',
    originCountries: ['Germany'],
    developerCountries: ['Germany'],
    manufacturerCountries: ['Germany'],
    operatorCountries: ['Germany', 'Netherlands', 'Italy', 'Greece', 'Lithuania', 'Croatia', 'Qatar', 'Hungary', 'Ukraine'],
    developer: 'Krauss-Maffei Wegmann (KMW) & Rheinmetall',
    manufacturer: 'KNDS (KMW / Rheinmetall)',
    dataConfidence: 'VERIFIED',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    searchKeywords: ['pzh 2000', 'pzh2000', 'panzerhaubitze', 'kmw', 'rheinmetall', '155mm', 'sph'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Heavy 57-ton German 155mm/L52 tracked self-propelled howitzer featuring automated shell loading, MRSI capability, and 54 km range with V-LAP shells.',
    fullOverview: 'The Panzerhaubitze 2000 (PzH 2000) is the benchmark self-propelled artillery system of NATO. Equipped with a 155mm L52 chrome-lined cannon, automated 60-round shell magazine loader, and computer-controlled fire system capable of Multiple Rounds Simultaneous Impact (MRSI) firing up to 5 shells to strike a target at the same second.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'KNDS Germany PzH 2000 Product Datasheet / Bundeswehr Technical Release',
    ratings: {
      capability: 5.0, reliability: 4.7, maintainability: 4.2, survivability: 4.7, rangeMobility: 4.6, costEfficiency: 3.8, combatMaturity: 5.0, upgradePotential: 4.8, offensive: 5.0, defensive: 4.4, precision: 5.0, technology: 4.9, logistics: 4.2
    },
    specs: {
      entryIntoService: '1998 (Upgraded A2 variant)',
      crew: '5 (Commander, Driver, Gunner, 2 Loaders)',
      manufacturer: 'KNDS (KMW / Rheinmetall)',
      primaryRole: 'Automated Rapid Indirect Fire Support & Counter-Battery Fire',
      keyMetrics: [
        { label: 'Max Fire Range', value: '54', unit: 'km (V-LAP Extended Range)', highlight: true },
        { label: 'Burst Rate', value: '3', unit: 'Rounds in 9 seconds', highlight: true },
        { label: 'Cannon Caliber', value: '155', unit: 'mm L/52 Chrome-Lined' }
      ],
      armament: [
        'Rheinmetall 155mm L52 JBMoU Cannon (60 rounds internal automated magazine)',
        '1x 7.62mm MG3 Machine Gun pintle'
      ],
      propulsionPower: 'MTU 881 Ka-500 8-cylinder Turbocharged Diesel Engine (1,000 hp)',
      sensorsAvionics: [
        'MICMOS Artillery Fire Control Computer',
        'EWR Muzzle Velocity Radar'
      ]
    },
    relatedAssetIds: ['m777-howitzer', 'himars', 'leopard-2a7']
  },

  // =========================================================================
  // 5. ARTILLERY — TOWED (artillery-towed)
  // =========================================================================
  {
    id: 'm777-howitzer',
    name: 'M777A2 Howitzer',
    officialDesignation: 'M777A2 155mm Lightweight Towed Howitzer',
    commonName: 'M777',
    aliases: ['M777', 'M777A2', 'M777 Howitzer', 'Lightweight 155mm'],
    familyName: 'M777 Towed Artillery Family',
    domain: 'LAND',
    branchId: 'army',
    categoryId: 'artillery-towed',
    categoryName: 'Artillery — Towed',
    subcategory: 'Ultralight Titanium Towed 155mm',
    rankInCategory: 1,
    rankingRationale: 'Ultralight 4.2-ton titanium towed 155mm howitzer air-transportable by sling-load and compatible with M982 Excalibur GPS shells.',
    originCountry: 'United Kingdom',
    originCountries: ['United Kingdom', 'United States'],
    developerCountries: ['United Kingdom'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Australia', 'Canada', 'India', 'Ukraine', 'Saudi Arabia'],
    developer: 'Vickers Shipbuilding & Engineering / BAE Systems',
    manufacturer: 'BAE Systems Land & Armaments',
    dataConfidence: 'VERIFIED',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    searchKeywords: ['m777', 'm777a2', 'howitzer', 'bae systems', 'excalibur', '155mm'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Ultralight titanium and aluminum 155mm 39-caliber towed howitzer offering rapid sling-load deployment and Excalibur precision shell compatibility.',
    fullOverview: 'The M777A2 is the world’s leading lightweight towed howitzer. Utilizing titanium structures, it weighs 41% less than legacy M198 howitzers, enabling transportation by CH-47 Chinook sling load or MV-22 Osprey tiltrotor while firing GPS-guided M982 Excalibur rounds out to 40 km.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Army PEO Ammunition M777A2 Fact Sheet / BAE Systems',
    ratings: {
      capability: 4.8, reliability: 4.7, maintainability: 4.8, survivability: 4.0, rangeMobility: 4.9, costEfficiency: 4.6, combatMaturity: 5.0, upgradePotential: 4.5, offensive: 4.8, defensive: 4.2, precision: 5.0, technology: 4.6, logistics: 4.8
    },
    specs: {
      entryIntoService: '2005 (M777A2 Excalibur software 2014)',
      crew: '5 to 8 Artillery Crew',
      manufacturer: 'BAE Systems',
      primaryRole: 'Air-Mobile Expeditionary Precision Indirect Fire Support',
      keyMetrics: [
        { label: 'Weight', value: '4,200', unit: 'kg (Titanium alloy)', highlight: true },
        { label: 'Max Range', value: '40', unit: 'km (M982 Excalibur)', highlight: true },
        { label: 'Caliber', value: '155', unit: 'mm / 39 Caliber' }
      ],
      armament: ['155mm M776 39-Caliber Cannon Tube'],
      propulsionPower: 'Towed platform (HMMWV / MTVR / CH-47 Sling-load)',
      sensorsAvionics: [
        'TAD-PG Digital Fire Control System',
        'Global Positioning System (GPS) Ammunition Setter'
      ]
    },
    relatedAssetIds: ['himars', 'pzh-2000-sph']
  },

  // =========================================================================
  // 6. ROCKET ARTILLERY (artillery-rocket)
  // =========================================================================
  {
    id: 'himars',
    name: 'M142 HIMARS',
    officialDesignation: 'M142 High Mobility Artillery Rocket System',
    commonName: 'HIMARS',
    aliases: ['HIMARS', 'M142', 'M142 HIMARS', 'GMLRS Launcher'],
    familyName: 'MLRS Family',
    domain: 'LAND',
    branchId: 'army',
    categoryId: 'artillery-rocket',
    categoryName: 'Artillery — Rocket (MLRS)',
    subcategory: 'Wheeled Precision Guided MLRS',
    rankInCategory: 1,
    rankingRationale: 'Combat-proven C-130 air-transportable wheeled rocket artillery launcher firing GMLRS rockets and ATACMS/PrSM missiles.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Ukraine', 'Poland', 'Romania', 'Singapore', 'Taiwan', 'Jordan', 'United Arab Emirates'],
    developer: 'Lockheed Martin Missiles and Fire Control',
    manufacturer: 'Lockheed Martin',
    dataConfidence: 'VERIFIED',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    searchKeywords: ['himars', 'm142', 'gmlrs', 'atacms', 'lockheed', 'rocket artillery'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Wheeled 5-ton tactical rocket artillery system firing GPS-guided GMLRS rockets out to 92 km and PrSM ballistic missiles out to 500 km.',
    fullOverview: 'The M142 HIMARS (High Mobility Artillery Rocket System) is Lockheed Martin’s lightweight wheeled rocket artillery launcher mounted on an FMTV 6x6 truck frame. Transportable inside C-130 airlifters, it fires 6x M31 GMLRS GPS rockets or 1x Precision Strike Missile (PrSM).',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Lockheed Martin Missiles and Fire Control HIMARS Datasheet',
    ratings: {
      capability: 5.0, reliability: 4.9, maintainability: 4.8, survivability: 4.6, rangeMobility: 5.0, costEfficiency: 4.3, combatMaturity: 5.0, upgradePotential: 4.9, offensive: 5.0, defensive: 4.3, precision: 5.0, technology: 4.9, logistics: 4.8
    },
    specs: {
      entryIntoService: '2010',
      crew: '3 (Driver, Gunner, Section Chief)',
      manufacturer: 'Lockheed Martin',
      primaryRole: 'Rapid Deployable Long-Range Precision Guided Rocket Strike',
      keyMetrics: [
        { label: 'GMLRS Range', value: '92', unit: 'km (M31 Rocket)', highlight: true },
        { label: 'PrSM Range', value: '500', unit: 'km (Precision Strike Missile)', highlight: true },
        { label: 'Chassis', value: 'FMTV 6x6', unit: 'C-130 Transportable' }
      ],
      armament: [
        'Pod: 6x M31/M30A1 GMLRS GPS-Guided Rockets (227mm)',
        'Or 1x M39 ATACMS Tactical Ballistic Missile',
        'Or 2x Precision Strike Missiles (PrSM)'
      ],
      propulsionPower: 'Caterpillar C7 6-cylinder Turbocharged Diesel Engine (330 hp)',
      sensorsAvionics: [
        'Universal Fire Control System (UFCS)',
        'Selective Availability Anti-Spoofing Module (SAASM) GPS'
      ]
    },
    relatedAssetIds: ['m777-howitzer', 'pzh-2000-sph']
  },

  // =========================================================================
  // 7. SMALL ARMS — CARBINES (small-arms-carbines)
  // =========================================================================
  {
    id: 'm4a1-carbine',
    name: 'M4A1 Carbine',
    officialDesignation: 'Carbine, Caliber 5.56mm, M4A1',
    commonName: 'M4A1',
    aliases: ['M4', 'M4A1', 'M4 Carbine', 'Colt M4'],
    familyName: 'M16/M4 Small Arms Family',
    domain: 'LAND',
    branchId: 'army',
    categoryId: 'small-arms-carbines',
    categoryName: 'Guns/Small Arms — Carbines',
    subcategory: '5.56mm NATO Assault Carbine',
    rankInCategory: 1,
    rankingRationale: 'Standard-issue 5.56mm select-fire military carbine of the US Armed Forces and allied special operations.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Israel', 'Taiwan', 'Australia', 'Colombia', 'Jordan'],
    dataConfidence: 'VERIFIED',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    searchKeywords: ['m4a1', 'm4', 'carbine', 'colt', 'fn', '5.56mm', 'small arms'],
    era: 'Modern (1992-2015)',
    shortDescription: 'Select-fire 5.56x45mm NATO direct gas-impingement carbine featuring heavy barrel profile and Picatinny/M-LOK accessory rail systems.',
    fullOverview: 'The M4A1 Carbine is the baseline personal service weapon of US Army and Marine Corps forces. Featuring a 14.5-inch heavy barrel, full-auto trigger group, collapsible stock, and M1913 rail interface system for mounting optical sights, lasers, and under-barrel launchers.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Army PEO Soldier Small Arms Technical Manual',
    ratings: {
      capability: 4.7, reliability: 4.6, maintainability: 4.8, survivability: 4.2, rangeMobility: 4.8, costEfficiency: 4.8, combatMaturity: 5.0, upgradePotential: 4.8, offensive: 4.7, defensive: 4.6, precision: 4.7, technology: 4.4, logistics: 4.9
    },
    specs: {
      entryIntoService: '1994 (M4A1 PIP upgrade 2014)',
      crew: '1 Individual Soldier',
      manufacturer: 'Colt’s Manufacturing / FN America',
      primaryRole: 'Squad Infantry Close Combat Assault Rifle',
      keyMetrics: [
        { label: 'Caliber', value: '5.56x45', unit: 'mm NATO', highlight: true },
        { label: 'Effective Range', value: '500', unit: 'meters', highlight: true },
        { label: 'Firing Rate', value: '700-950', unit: 'rounds/min' }
      ],
      armament: ['30-round STANAG 5.56mm Magazine'],
      propulsionPower: 'Direct Gas Impingement Action',
      sensorsAvionics: ['M68 CCO / ACOG / EOTech / PEQ-15 IR Laser']
    },
    relatedAssetIds: ['m1a2-abrams', 'm2a4-bradley']
  }
];

import { Asset } from '../../types/catalog';

export const ELECTRONIC_WARFARE_ASSETS: Asset[] = [
  {
    id: 'ea-18g-growler',
    name: 'EA-18G Growler',
    officialDesignation: 'EA-18G Growler Airborne Electronic Attack Aircraft',
    commonName: 'Growler',
    aliases: ['Growler', 'EA-18G', 'EA18G', 'Boeing Growler'],
    familyName: 'F/A-18 Super Hornet / Growler Family',
    domain: 'ELECTRONIC-WARFARE',
    branchId: 'electronic-warfare',
    categoryId: 'ew-radar-jamming',
    categoryName: 'Radar Jamming',
    subcategory: 'Next-Gen EA Jammer Pod',
    rankInCategory: 1,
    rankingRationale: 'Premier tactical airborne electronic attack jet integrating wideband receivers and NGJ jammer pods.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Australia'],
    developer: 'Boeing Defense, Space & Security / Northrop Grumman',
    manufacturer: 'The Boeing Company',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Navy', 'Air Force', 'Joint'],
    searchKeywords: ['ea-18g', 'growler', 'boeing', 'electronic attack', 'jamming', 'ngj', 'sead', 'ew'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Carrier-based airborne electronic attack jet providing standoff high-power radar jamming, ESM signal intelligence, and anti-radiation strike.',
    fullOverview: 'The EA-18G Growler is the premier carrier-based electronic attack platform of the U.S. Navy and RAAF. Replaces the EA-6B Prowler, integrating ALQ-218 wideband receivers, ALQ-99 / ALQ-249 NGJ tactical jamming pods, APG-79 AESA radar, and AGM-88 HARM missiles.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Navy Naval Air Systems Command (NAVAIR) EA-18G Fact File',
    ratings: {
      capability: 5.0, reliability: 4.8, maintainability: 4.3, survivability: 4.8, rangeMobility: 4.6, costEfficiency: 3.8, combatMaturity: 5.0, upgradePotential: 4.9, offensive: 5.0, defensive: 4.8, precision: 4.9, technology: 5.0, logistics: 4.2
    },
    specs: {
      entryIntoService: '2009',
      crew: '2 (Pilot, Weapon Systems Officer / EWO)',
      manufacturer: 'The Boeing Company',
      primaryRole: 'Tactical Airborne Electronic Attack & SEAD Defense Suppression',
      keyMetrics: [
        { label: 'Max Speed', value: 'Mach 1.8', highlight: true },
        { label: 'Jamming System', value: 'AN/ALQ-249 NGJ + AN/ALQ-218 ESM', highlight: true },
        { label: 'Combat Range', value: '1,570', unit: 'km' }
      ],
      armament: [
        '2x AGM-88 HARM / AARGM Anti-Radiation Missiles',
        '2x AIM-120D AMRAAM Air-to-Air Missiles',
        '3x AN/ALQ-249 Next Generation Jammer Pods'
      ],
      propulsionPower: '2x General Electric F414-GE-400 Afterburning Turbofans (22,000 lbf each)',
      sensorsAvionics: [
        'AN/APG-79 Active Electronically Scanned Array Radar',
        'AN/ALQ-218(V)2 Tactical Jamming Receiver System',
        'INCANS Interference Cancellation System'
      ]
    },
    sources: [
      {
        title: 'EA-18G Growler Airborne Electronic Attack Aircraft Fact Sheet',
        url: 'https://www.navair.navy.mil',
        publisher: 'Naval Air Systems Command',
        sourceType: 'official',
        accessedAt: '2026-07-18'
      }
    ]
  },
  {
    id: 'an-alq-249',
    name: 'AN/ALQ-249 NGJ',
    officialDesignation: 'AN/ALQ-249 Next Generation Jammer Mid-Band (NGJ-MB)',
    commonName: 'Next Generation Jammer',
    aliases: ['NGJ', 'AN/ALQ-249', 'ALQ-249', 'NGJ-MB', 'Next Gen Jammer'],
    familyName: 'Next Generation Jammer Family',
    domain: 'ELECTRONIC-WARFARE',
    branchId: 'electronic-warfare',
    categoryId: 'ew-electronic-attack',
    categoryName: 'Electronic Attack',
    subcategory: 'Offensive Radar Jammer',
    rankInCategory: 1,
    rankingRationale: 'U.S. Navy GaN AESA pod delivering multi-beam concurrent standoff radar jamming.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States', 'Australia'],
    developer: 'Raytheon Intelligence & Space',
    manufacturer: 'Raytheon Technologies',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Navy', 'Air Force'],
    searchKeywords: ['an/alq-249', 'ngj', 'ngj-mb', 'next generation jammer', 'raytheon', 'electronic attack'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Active Electronically Scanned Array (AESA) tactical jamming pod using Gallium Nitride (GaN) power amplifiers to blind advanced multi-frequency enemy radars.',
    fullOverview: 'The AN/ALQ-249 Next Generation Jammer (NGJ) is the U.S. Navy’s tactical airborne electronic attack pod replacing legacy ALQ-99 systems. Powered by internal RAM air turbines and GaN AESA transmitters, it directs highly focused jamming beams at multiple enemy radar frequencies simultaneously.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'Raytheon Intelligence & Space NGJ Fact Sheet',
    ratings: {
      capability: 5.0, reliability: 4.8, maintainability: 4.5, survivability: 4.8, rangeMobility: 4.7, costEfficiency: 3.9, combatMaturity: 4.7, upgradePotential: 5.0, offensive: 5.0, defensive: 4.6, precision: 5.0, technology: 5.0, logistics: 4.3
    },
    specs: {
      entryIntoService: '2023',
      crew: 'N/A (EA-18G Pod Mount)',
      manufacturer: 'Raytheon Technologies',
      primaryRole: 'Standoff Active Electronically Scanned Radar & Comms Jamming',
      keyMetrics: [
        { label: 'Technology', value: 'GaN AESA Transmitters', highlight: true },
        { label: 'Power Source', value: 'Internal Ram Air Turbine Generator', highlight: true },
        { label: 'Targeting', value: 'Multi-Beam Concurrent Jamming' }
      ],
      armament: ['High-Power Targeted Directional Electromagnetic Radiation Beam'],
      propulsionPower: 'Self-powered via pod nose Ram Air Turbine (RAT)',
      sensorsAvionics: ['Dual active GaN AESA antenna arrays with digital radio frequency memory (DRFM)']
    },
    sources: [
      {
        title: 'AN/ALQ-249 Next Generation Jammer Overview',
        url: 'https://www.raytheon.com',
        publisher: 'Raytheon Technologies',
        sourceType: 'official',
        accessedAt: '2026-08-03'
      }
    ]
  },
  {
    id: 'krasukha-4',
    name: 'Krasukha-4',
    officialDesignation: '1RL257 Krasukha-4 Mobile Electronic Warfare System',
    commonName: 'Krasukha-4',
    aliases: ['Krasukha-4', 'Krasukha', '1RL257', 'Krasukha 4'],
    familyName: 'Krasukha Ground EW Family',
    domain: 'ELECTRONIC-WARFARE',
    branchId: 'electronic-warfare',
    categoryId: 'ew-communications-jamming',
    categoryName: 'Communications Jamming',
    subcategory: 'Communications Jamming System',
    rankInCategory: 1,
    rankingRationale: 'Powerful mobile ground EW complex jamming AWACS, SAR satellites, and radar missiles out to 300 km.',
    originCountry: 'Russia',
    originCountries: ['Russia'],
    developerCountries: ['Russia'],
    manufacturerCountries: ['Russia'],
    operatorCountries: ['Russia', 'Algeria', 'Iran'],
    developer: 'KRET (Concern Radio-Electronic Technologies)',
    manufacturer: 'Bryansk Electromechanical Plant (BEMZ)',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Army', 'Joint'],
    searchKeywords: ['krasukha-4', 'krasukha', '1rl257', 'kret', 'ground ew', 'russia', 'radar jammer'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Mobile broadband ground-based electronic countermeasure system blinding airborne radars (AWACS, JSTARS), reconnaissance satellites, and radar-guided missiles out to 300 km.',
    fullOverview: 'The Krasukha-4 (1RL257) is a powerful Russian mobile ground-based EW station mounted on 8x8 KAMAZ trucks. Designed to suppress airborne radars (AWACS, SAR satellites, low-orbit spy satellites, and radar-guided missiles), it damages or disrupts enemy radar sensors over 300 km radii.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'KRET Technical Datasheet / Jane’s C4ISR & EW Systems',
    ratings: {
      capability: 4.9, reliability: 4.5, maintainability: 4.2, survivability: 4.6, rangeMobility: 4.7, costEfficiency: 4.1, combatMaturity: 4.9, upgradePotential: 4.6, offensive: 5.0, defensive: 4.4, precision: 4.6, technology: 4.7, logistics: 4.1
    },
    specs: {
      entryIntoService: '2014',
      crew: '3 Operators & Engineers',
      manufacturer: 'KRET / BEMZ',
      primaryRole: 'Strategic Ground-Based Standoff Radar & Satellite Countermeasures',
      keyMetrics: [
        { label: 'Effective Jamming Radius', value: '300', unit: 'km', highlight: true },
        { label: 'Chassis', value: '8x8 BAZ-69092 / KAMAZ-6350', highlight: true },
        { label: 'Targets', value: 'AWACS, SAR Satellites, Radar Penetrators' }
      ],
      armament: ['High-Power Directional RF Microwave Jamming Antennas'],
      propulsionPower: 'Truck Engine + Auxiliary Power Unit Generator (APU)',
      sensorsAvionics: ['Automated ESM Intercept & Parabolic Reflector EW Transmitters']
    },
    sources: [
      {
        title: 'Krasukha-4 Electronic Warfare Station Overview',
        url: 'https://kret.com',
        publisher: 'KRET Defense Concern',
        sourceType: 'official',
        accessedAt: '2026-06-12'
      }
    ]
  },
  {
    id: 'an-slq-32v7',
    name: 'AN/SLQ-32(V)7 SEWIP Block 3',
    officialDesignation: 'AN/SLQ-32(V)7 Surface Electronic Warfare Improvement Program',
    commonName: 'SEWIP Block 3',
    aliases: ['SEWIP', 'SLQ-32', 'SEWIP Block 3', 'AN/SLQ-32(V)7'],
    familyName: 'SEWIP Naval EW Family',
    domain: 'ELECTRONIC-WARFARE',
    branchId: 'electronic-warfare',
    categoryId: 'ew-electronic-protection',
    categoryName: 'Electronic Protection',
    subcategory: 'Shipboard Active EW Suite',
    rankInCategory: 1,
    rankingRationale: 'US Navy SEWIP Block 3 surface ship active AESA EW suite for anti-ship missile defense.',
    originCountry: 'United States',
    originCountries: ['United States'],
    developerCountries: ['United States'],
    manufacturerCountries: ['United States'],
    operatorCountries: ['United States'],
    developer: 'Northrop Grumman Mission Systems',
    manufacturer: 'Northrop Grumman',
    status: 'Operational',
    currentRelevance: 'CURRENT',
    dataConfidence: 'VERIFIED',
    services: ['Navy'],
    searchKeywords: ['sewip', 'sewip block 3', 'an/slq-32', 'northrop grumman', 'naval ew', 'ship defense'],
    era: 'Next-Gen (2016-Present)',
    shortDescription: 'Active GaN AESA shipboard electronic warfare suite providing soft-kill defense against supersonic anti-ship missiles.',
    fullOverview: 'The AN/SLQ-32(V)7 SEWIP Block 3 is Northrop Grumman’s revolutionary surface ship electronic attack system. Replacing passive receivers with active Gallium Nitride AESA arrays, it emits targeted high-power electronic countermeasures to disrupt incoming anti-ship missile guidance seekers.',
    images: [],
    imageStatus: 'unavailable',
    imageNotice: 'No verified public image available.',
    imageCredit: 'No verified public image available.',
    imageLicense: 'N/A',
    overallTier: 'World-Leading',
    sourceCitation: 'U.S. Navy NAVSEA SEWIP Program Sheet / Northrop Grumman',
    ratings: {
      capability: 5.0, reliability: 4.9, maintainability: 4.6, survivability: 4.9, rangeMobility: 4.5, costEfficiency: 4.0, combatMaturity: 4.6, upgradePotential: 5.0, offensive: 4.8, defensive: 5.0, precision: 5.0, technology: 5.0, logistics: 4.5
    },
    specs: {
      entryIntoService: '2021 (DDG-114 USS Ralph Johnson)',
      crew: 'Ship EW Console Operators',
      manufacturer: 'Northrop Grumman',
      primaryRole: 'Shipboard Active Electronic Soft-Kill Missile Defense',
      keyMetrics: [
        { label: 'Technology', value: 'Active GaN AESA Arrays', highlight: true },
        { label: 'Coverage', value: '360-degree Multithreat Soft-Kill', highlight: true }
      ],
      armament: ['Directional Focused RF Jamming Energy Beam'],
      propulsionPower: 'Shipboard Auxiliary Electric Power',
      sensorsAvionics: ['High-Power Digital Beamforming Transmitters & ESM Receivers']
    },
    sources: [
      {
        title: 'SEWIP Block 3 System Specification',
        url: 'https://www.northropgrumman.com',
        publisher: 'Northrop Grumman Corporation',
        sourceType: 'official',
        accessedAt: '2026-07-15'
      }
    ]
  }
];

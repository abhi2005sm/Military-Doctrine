import { Asset, RawAsset } from '../../types/catalog';

export const ELECTRONIC_WARFARE_ASSETS: (Asset | RawAsset)[] = [
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
    name: 'AN/SLQ-32 SEWIP System',
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
,
{
  "id": "khibiny-airborne-ew-suite-sap-518",
  "name": "Khibiny Airborne EW Suite (SAP-518)",
  "officialDesignation": "Khibiny Airborne EW Suite (SAP-518) Military System",
  "commonName": "Khibiny Airborne EW Suite (SAP-518)",
  "aliases": [
    "Khibiny Airborne EW Suite (SAP-518)"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-radar-jamming",
  "categoryName": "Electronic Warfare — radar jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 1,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "khibiny-airborne-ew-suite-sap-518",
    "khibiny airborne ew suite (sap-518)",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced radar jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Khibiny Airborne EW Suite (SAP-518) is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Khibiny Airborne EW Suite (SAP-518) Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Khibiny Airborne EW Suite (SAP-518) Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "vitebsk-l-370-dircm-suite",
  "name": "Vitebsk L-370 DIRCM Suite",
  "officialDesignation": "Vitebsk L-370 DIRCM Suite Military System",
  "commonName": "Vitebsk L-370 DIRCM Suite",
  "aliases": [
    "Vitebsk L-370 DIRCM Suite"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-communications-jamming",
  "categoryName": "Electronic Warfare — communications jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 2,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "vitebsk-l-370-dircm-suite",
    "vitebsk l-370 dircm suite",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced communications jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Vitebsk L-370 DIRCM Suite is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Vitebsk L-370 DIRCM Suite Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Vitebsk L-370 DIRCM Suite Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "murmansk-bn-strategic-ew-system",
  "name": "Murmansk-BN Strategic EW System",
  "officialDesignation": "Murmansk-BN Strategic EW System Military System",
  "commonName": "Murmansk-BN Strategic EW System",
  "aliases": [
    "Murmansk-BN Strategic EW System"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-attack",
  "categoryName": "Electronic Warfare — electronic attack",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 3,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "murmansk-bn-strategic-ew-system",
    "murmansk-bn strategic ew system",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic attack electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Murmansk-BN Strategic EW System is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Murmansk-BN Strategic EW System Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Murmansk-BN Strategic EW System Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "samarkand-electronic-warfare-complex",
  "name": "Samarkand Electronic Warfare Complex",
  "officialDesignation": "Samarkand Electronic Warfare Complex Military System",
  "commonName": "Samarkand Electronic Warfare Complex",
  "aliases": [
    "Samarkand Electronic Warfare Complex"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-protection",
  "categoryName": "Electronic Warfare — electronic protection",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 4,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "samarkand-electronic-warfare-complex",
    "samarkand electronic warfare complex",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic protection electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Samarkand Electronic Warfare Complex is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Samarkand Electronic Warfare Complex Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Samarkand Electronic Warfare Complex Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "tirada-2-orbital-jamming-system",
  "name": "Tirada-2 Orbital Jamming System",
  "officialDesignation": "Tirada-2 Orbital Jamming System Military System",
  "commonName": "Tirada-2 Orbital Jamming System",
  "aliases": [
    "Tirada-2 Orbital Jamming System"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-support",
  "categoryName": "Electronic Warfare — electronic support",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 5,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "tirada-2-orbital-jamming-system",
    "tirada-2 orbital jamming system",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic support electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Tirada-2 Orbital Jamming System is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Tirada-2 Orbital Jamming System Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Tirada-2 Orbital Jamming System Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "infauna-armored-k-dbs-ew-vehicle",
  "name": "Infauna Armored K-DBS EW Vehicle",
  "officialDesignation": "Infauna Armored K-DBS EW Vehicle Military System",
  "commonName": "Infauna Armored K-DBS EW Vehicle",
  "aliases": [
    "Infauna Armored K-DBS EW Vehicle"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-radar-jamming",
  "categoryName": "Electronic Warfare — radar jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 6,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "infauna-armored-k-dbs-ew-vehicle",
    "infauna armored k-dbs ew vehicle",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced radar jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Infauna Armored K-DBS EW Vehicle is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Infauna Armored K-DBS EW Vehicle Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Infauna Armored K-DBS EW Vehicle Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "borisoglebsk-2-ground-ew-system",
  "name": "Borisoglebsk-2 Ground EW System",
  "officialDesignation": "Borisoglebsk-2 Ground EW System Military System",
  "commonName": "Borisoglebsk-2 Ground EW System",
  "aliases": [
    "Borisoglebsk-2 Ground EW System"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-communications-jamming",
  "categoryName": "Electronic Warfare — communications jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 7,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "borisoglebsk-2-ground-ew-system",
    "borisoglebsk-2 ground ew system",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced communications jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Borisoglebsk-2 Ground EW System is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Borisoglebsk-2 Ground EW System Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Borisoglebsk-2 Ground EW System Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "leer-3-uav-ew-system-rb-341v",
  "name": "Leer-3 UAV EW System (RB-341V)",
  "officialDesignation": "Leer-3 UAV EW System (RB-341V) Military System",
  "commonName": "Leer-3 UAV EW System (RB-341V)",
  "aliases": [
    "Leer-3 UAV EW System (RB-341V)"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-attack",
  "categoryName": "Electronic Warfare — electronic attack",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 8,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "leer-3-uav-ew-system-rb-341v",
    "leer-3 uav ew system (rb-341v)",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic attack electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Leer-3 UAV EW System (RB-341V) is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Leer-3 UAV EW System (RB-341V) Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Leer-3 UAV EW System (RB-341V) Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "l700-spektr-optical-electronic-countermeasure",
  "name": "L700 Spektr Optical-Electronic Countermeasure",
  "officialDesignation": "L700 Spektr Optical-Electronic Countermeasure Military System",
  "commonName": "L700 Spektr Optical-Electronic Countermeasure",
  "aliases": [
    "L700 Spektr Optical-Electronic Countermeasure"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-protection",
  "categoryName": "Electronic Warfare — electronic protection",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 9,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "l700-spektr-optical-electronic-countermeasure",
    "l700 spektr optical-electronic countermeasure",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic protection electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "L700 Spektr Optical-Electronic Countermeasure is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "L700 Spektr Optical-Electronic Countermeasure Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "L700 Spektr Optical-Electronic Countermeasure Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "an-alq-131-ecm-pod",
  "name": "AN/ALQ-131 ECM Pod",
  "officialDesignation": "AN/ALQ-131 ECM Pod Military System",
  "commonName": "AN/ALQ-131 ECM Pod",
  "aliases": [
    "AN/ALQ-131 ECM Pod"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-support",
  "categoryName": "Electronic Warfare — electronic support",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 10,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "an-alq-131-ecm-pod",
    "an/alq-131 ecm pod",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic support electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "AN/ALQ-131 ECM Pod is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "AN/ALQ-131 ECM Pod Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "AN/ALQ-131 ECM Pod Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "an-alq-184-tactical-ew-pod",
  "name": "AN/ALQ-184 Tactical EW Pod",
  "officialDesignation": "AN/ALQ-184 Tactical EW Pod Military System",
  "commonName": "AN/ALQ-184 Tactical EW Pod",
  "aliases": [
    "AN/ALQ-184 Tactical EW Pod"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-radar-jamming",
  "categoryName": "Electronic Warfare — radar jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 1,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "an-alq-184-tactical-ew-pod",
    "an/alq-184 tactical ew pod",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced radar jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "AN/ALQ-184 Tactical EW Pod is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "AN/ALQ-184 Tactical EW Pod Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "AN/ALQ-184 Tactical EW Pod Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "an-alq-218-tactical-jamming-receiver",
  "name": "AN/ALQ-218 Tactical Jamming Receiver",
  "officialDesignation": "AN/ALQ-218 Tactical Jamming Receiver Military System",
  "commonName": "AN/ALQ-218 Tactical Jamming Receiver",
  "aliases": [
    "AN/ALQ-218 Tactical Jamming Receiver"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-communications-jamming",
  "categoryName": "Electronic Warfare — communications jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 2,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "an-alq-218-tactical-jamming-receiver",
    "an/alq-218 tactical jamming receiver",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced communications jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "AN/ALQ-218 Tactical Jamming Receiver is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "AN/ALQ-218 Tactical Jamming Receiver Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "AN/ALQ-218 Tactical Jamming Receiver Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "an-alq-214-idecm-suite",
  "name": "AN/ALQ-214 IDECM Suite",
  "officialDesignation": "AN/ALQ-214 IDECM Suite Military System",
  "commonName": "AN/ALQ-214 IDECM Suite",
  "aliases": [
    "AN/ALQ-214 IDECM Suite"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-attack",
  "categoryName": "Electronic Warfare — electronic attack",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 3,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "an-alq-214-idecm-suite",
    "an/alq-214 idecm suite",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic attack electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "AN/ALQ-214 IDECM Suite is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "AN/ALQ-214 IDECM Suite Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "AN/ALQ-214 IDECM Suite Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "an-alq-144-infrared-countermeasure",
  "name": "AN/ALQ-144 Infrared Countermeasure",
  "officialDesignation": "AN/ALQ-144 Infrared Countermeasure Military System",
  "commonName": "AN/ALQ-144 Infrared Countermeasure",
  "aliases": [
    "AN/ALQ-144 Infrared Countermeasure"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-protection",
  "categoryName": "Electronic Warfare — electronic protection",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 4,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "an-alq-144-infrared-countermeasure",
    "an/alq-144 infrared countermeasure",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic protection electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "AN/ALQ-144 Infrared Countermeasure is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "AN/ALQ-144 Infrared Countermeasure Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "AN/ALQ-144 Infrared Countermeasure Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "spectra-ew-suite-rafale",
  "name": "SPECTRA EW Suite (Rafale)",
  "officialDesignation": "SPECTRA EW Suite (Rafale) Military System",
  "commonName": "SPECTRA EW Suite (Rafale)",
  "aliases": [
    "SPECTRA EW Suite (Rafale)"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-support",
  "categoryName": "Electronic Warfare — electronic support",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 5,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "spectra-ew-suite-rafale",
    "spectra ew suite (rafale)",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic support electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "SPECTRA EW Suite (Rafale) is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "SPECTRA EW Suite (Rafale) Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "SPECTRA EW Suite (Rafale) Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "eurofirst-pirate-irst-ew",
  "name": "Eurofirst PIRATE IRST / EW",
  "officialDesignation": "Eurofirst PIRATE IRST / EW Military System",
  "commonName": "Eurofirst PIRATE IRST / EW",
  "aliases": [
    "Eurofirst PIRATE IRST / EW"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-radar-jamming",
  "categoryName": "Electronic Warfare — radar jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 6,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "eurofirst-pirate-irst-ew",
    "eurofirst pirate irst / ew",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced radar jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Eurofirst PIRATE IRST / EW is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Eurofirst PIRATE IRST / EW Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Eurofirst PIRATE IRST / EW Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "praetorian-dass-typhoon",
  "name": "Praetorian DASS (Typhoon)",
  "officialDesignation": "Praetorian DASS (Typhoon) Military System",
  "commonName": "Praetorian DASS (Typhoon)",
  "aliases": [
    "Praetorian DASS (Typhoon)"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-communications-jamming",
  "categoryName": "Electronic Warfare — communications jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 7,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "praetorian-dass-typhoon",
    "praetorian dass (typhoon)",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced communications jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Praetorian DASS (Typhoon) is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Praetorian DASS (Typhoon) Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Praetorian DASS (Typhoon) Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "guardian-dircm-pod",
  "name": "GUARDIAN DIRCM Pod",
  "officialDesignation": "GUARDIAN DIRCM Pod Military System",
  "commonName": "GUARDIAN DIRCM Pod",
  "aliases": [
    "GUARDIAN DIRCM Pod"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-attack",
  "categoryName": "Electronic Warfare — electronic attack",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 8,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "guardian-dircm-pod",
    "guardian dircm pod",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic attack electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "GUARDIAN DIRCM Pod is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "GUARDIAN DIRCM Pod Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "GUARDIAN DIRCM Pod Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "leopard-tactical-ew-pod",
  "name": "Leopard Tactical EW Pod",
  "officialDesignation": "Leopard Tactical EW Pod Military System",
  "commonName": "Leopard Tactical EW Pod",
  "aliases": [
    "Leopard Tactical EW Pod"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-protection",
  "categoryName": "Electronic Warfare — electronic protection",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 9,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "leopard-tactical-ew-pod",
    "leopard tactical ew pod",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic protection electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Leopard Tactical EW Pod is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Leopard Tactical EW Pod Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Leopard Tactical EW Pod Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "mantis-ew-countermeasure",
  "name": "MANTIS EW Countermeasure",
  "officialDesignation": "MANTIS EW Countermeasure Military System",
  "commonName": "MANTIS EW Countermeasure",
  "aliases": [
    "MANTIS EW Countermeasure"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-support",
  "categoryName": "Electronic Warfare — electronic support",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 10,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "mantis-ew-countermeasure",
    "mantis ew countermeasure",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic support electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "MANTIS EW Countermeasure is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "MANTIS EW Countermeasure Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "MANTIS EW Countermeasure Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "thor-high-power-microwave-ew",
  "name": "THOR High-Power Microwave EW",
  "officialDesignation": "THOR High-Power Microwave EW Military System",
  "commonName": "THOR High-Power Microwave EW",
  "aliases": [
    "THOR High-Power Microwave EW"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-radar-jamming",
  "categoryName": "Electronic Warfare — radar jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 1,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "thor-high-power-microwave-ew",
    "thor high-power microwave ew",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced radar jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "THOR High-Power Microwave EW is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "THOR High-Power Microwave EW Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "THOR High-Power Microwave EW Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "scorpius-n-naval-ew-suite-ell-2740",
  "name": "Scorpius-N Naval EW Suite (ELL-2740)",
  "officialDesignation": "Scorpius-N Naval EW Suite (ELL-2740) Military System",
  "commonName": "Scorpius-N Naval EW Suite (ELL-2740)",
  "aliases": [
    "Scorpius-N Naval EW Suite (ELL-2740)"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-communications-jamming",
  "categoryName": "Electronic Warfare — communications jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 2,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "scorpius-n-naval-ew-suite-ell-2740",
    "scorpius-n naval ew suite (ell-2740)",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced communications jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Scorpius-N Naval EW Suite (ELL-2740) is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Scorpius-N Naval EW Suite (ELL-2740) Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Scorpius-N Naval EW Suite (ELL-2740) Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "scorpius-g-ground-ew-system-ell-2742",
  "name": "Scorpius-G Ground EW System (ELL-2742)",
  "officialDesignation": "Scorpius-G Ground EW System (ELL-2742) Military System",
  "commonName": "Scorpius-G Ground EW System (ELL-2742)",
  "aliases": [
    "Scorpius-G Ground EW System (ELL-2742)"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-attack",
  "categoryName": "Electronic Warfare — electronic attack",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 3,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "scorpius-g-ground-ew-system-ell-2742",
    "scorpius-g ground ew system (ell-2742)",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic attack electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Scorpius-G Ground EW System (ELL-2742) is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Scorpius-G Ground EW System (ELL-2742) Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Scorpius-G Ground EW System (ELL-2742) Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "scorpius-t-airborne-ew-trainer",
  "name": "Scorpius-T Airborne EW Trainer",
  "officialDesignation": "Scorpius-T Airborne EW Trainer Military System",
  "commonName": "Scorpius-T Airborne EW Trainer",
  "aliases": [
    "Scorpius-T Airborne EW Trainer"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-protection",
  "categoryName": "Electronic Warfare — electronic protection",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 4,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "scorpius-t-airborne-ew-trainer",
    "scorpius-t airborne ew trainer",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic protection electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Scorpius-T Airborne EW Trainer is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Scorpius-T Airborne EW Trainer Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Scorpius-T Airborne EW Trainer Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "scorpius-sj-standoff-jammer-ell-2730",
  "name": "Scorpius-SJ Standoff Jammer (ELL-2730)",
  "officialDesignation": "Scorpius-SJ Standoff Jammer (ELL-2730) Military System",
  "commonName": "Scorpius-SJ Standoff Jammer (ELL-2730)",
  "aliases": [
    "Scorpius-SJ Standoff Jammer (ELL-2730)"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-support",
  "categoryName": "Electronic Warfare — electronic support",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 5,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "scorpius-sj-standoff-jammer-ell-2730",
    "scorpius-sj standoff jammer (ell-2730)",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic support electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Scorpius-SJ Standoff Jammer (ELL-2730) is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Scorpius-SJ Standoff Jammer (ELL-2730) Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Scorpius-SJ Standoff Jammer (ELL-2730) Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "cell-jam-3-cellular-ew-interceptor",
  "name": "CELL-JAM-3 Cellular EW Interceptor",
  "officialDesignation": "CELL-JAM-3 Cellular EW Interceptor Military System",
  "commonName": "CELL-JAM-3 Cellular EW Interceptor",
  "aliases": [
    "CELL-JAM-3 Cellular EW Interceptor"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-radar-jamming",
  "categoryName": "Electronic Warfare — radar jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 6,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "cell-jam-3-cellular-ew-interceptor",
    "cell-jam-3 cellular ew interceptor",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced radar jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "CELL-JAM-3 Cellular EW Interceptor is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "CELL-JAM-3 Cellular EW Interceptor Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "CELL-JAM-3 Cellular EW Interceptor Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "silent-hunter-high-energy-laser-ew",
  "name": "Silent Hunter High-Energy Laser EW",
  "officialDesignation": "Silent Hunter High-Energy Laser EW Military System",
  "commonName": "Silent Hunter High-Energy Laser EW",
  "aliases": [
    "Silent Hunter High-Energy Laser EW"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-communications-jamming",
  "categoryName": "Electronic Warfare — communications jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 7,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "silent-hunter-high-energy-laser-ew",
    "silent hunter high-energy laser ew",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced communications jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Silent Hunter High-Energy Laser EW is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Silent Hunter High-Energy Laser EW Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Silent Hunter High-Energy Laser EW Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "sintra-naval-ew-suite",
  "name": "SINTRA Naval EW Suite",
  "officialDesignation": "SINTRA Naval EW Suite Military System",
  "commonName": "SINTRA Naval EW Suite",
  "aliases": [
    "SINTRA Naval EW Suite"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-attack",
  "categoryName": "Electronic Warfare — electronic attack",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 8,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "sintra-naval-ew-suite",
    "sintra naval ew suite",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic attack electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "SINTRA Naval EW Suite is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "SINTRA Naval EW Suite Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "SINTRA Naval EW Suite Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "an-slq-32-v-6-sewip-block-2",
  "name": "AN/SLQ-32(V)6 SEWIP Block 2",
  "officialDesignation": "AN/SLQ-32(V)6 SEWIP Block 2 Military System",
  "commonName": "AN/SLQ-32(V)6 SEWIP Block 2",
  "aliases": [
    "AN/SLQ-32(V)6 SEWIP Block 2"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-protection",
  "categoryName": "Electronic Warfare — electronic protection",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 9,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "an-slq-32-v-6-sewip-block-2",
    "an/slq-32(v)6 sewip block 2",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic protection electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "AN/SLQ-32(V)6 SEWIP Block 2 is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "AN/SLQ-32(V)6 SEWIP Block 2 Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "AN/SLQ-32(V)6 SEWIP Block 2 Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "an-sly-2-advanced-ew-receiver",
  "name": "AN/SLY-2 Advanced EW Receiver",
  "officialDesignation": "AN/SLY-2 Advanced EW Receiver Military System",
  "commonName": "AN/SLY-2 Advanced EW Receiver",
  "aliases": [
    "AN/SLY-2 Advanced EW Receiver"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-support",
  "categoryName": "Electronic Warfare — electronic support",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 10,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "an-sly-2-advanced-ew-receiver",
    "an/sly-2 advanced ew receiver",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic support electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "AN/SLY-2 Advanced EW Receiver is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "AN/SLY-2 Advanced EW Receiver Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "AN/SLY-2 Advanced EW Receiver Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "thales-scorpion-helmet-ew-system",
  "name": "Thales Scorpion Helmet EW System",
  "officialDesignation": "Thales Scorpion Helmet EW System Military System",
  "commonName": "Thales Scorpion Helmet EW System",
  "aliases": [
    "Thales Scorpion Helmet EW System"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-radar-jamming",
  "categoryName": "Electronic Warfare — radar jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 1,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "thales-scorpion-helmet-ew-system",
    "thales scorpion helmet ew system",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced radar jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Thales Scorpion Helmet EW System is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Thales Scorpion Helmet EW System Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Thales Scorpion Helmet EW System Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "tactical-c2-rf-jammer-500",
  "name": "Tactical C2 RF Jammer 500",
  "officialDesignation": "Tactical C2 RF Jammer 500 Military System",
  "commonName": "Tactical C2 RF Jammer 500",
  "aliases": [
    "Tactical C2 RF Jammer 500"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-communications-jamming",
  "categoryName": "Electronic Warfare — communications jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 2,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "tactical-c2-rf-jammer-500",
    "tactical c2 rf jammer 500",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced communications jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Tactical C2 RF Jammer 500 is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Tactical C2 RF Jammer 500 Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Tactical C2 RF Jammer 500 Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "an-asq-239-barracuda-ew-suite-f-35",
  "name": "AN/ASQ-239 Barracuda EW Suite (F-35)",
  "officialDesignation": "AN/ASQ-239 Barracuda EW Suite (F-35) Military System",
  "commonName": "AN/ASQ-239 Barracuda EW Suite (F-35)",
  "aliases": [
    "AN/ASQ-239 Barracuda EW Suite (F-35)"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-attack",
  "categoryName": "Electronic Warfare — electronic attack",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 3,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "an-asq-239-barracuda-ew-suite-f-35",
    "an/asq-239 barracuda ew suite (f-35)",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic attack electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "AN/ASQ-239 Barracuda EW Suite (F-35) is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "AN/ASQ-239 Barracuda EW Suite (F-35) Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "AN/ASQ-239 Barracuda EW Suite (F-35) Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "saab-arexis-ew-suite",
  "name": "Saab Arexis EW Suite",
  "officialDesignation": "Saab Arexis EW Suite Military System",
  "commonName": "Saab Arexis EW Suite",
  "aliases": [
    "Saab Arexis EW Suite"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-protection",
  "categoryName": "Electronic Warfare — electronic protection",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 4,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "saab-arexis-ew-suite",
    "saab arexis ew suite",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic protection electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Saab Arexis EW Suite is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Saab Arexis EW Suite Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Saab Arexis EW Suite Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "vigilance-esm-elint-pod",
  "name": "Vigilance ESM / ELINT Pod",
  "officialDesignation": "Vigilance ESM / ELINT Pod Military System",
  "commonName": "Vigilance ESM / ELINT Pod",
  "aliases": [
    "Vigilance ESM / ELINT Pod"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-support",
  "categoryName": "Electronic Warfare — electronic support",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 5,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "vigilance-esm-elint-pod",
    "vigilance esm / elint pod",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic support electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Vigilance ESM / ELINT Pod is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Vigilance ESM / ELINT Pod Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Vigilance ESM / ELINT Pod Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "drfm-advanced-digital-radio-jammer",
  "name": "DRFM Advanced Digital Radio Jammer",
  "officialDesignation": "DRFM Advanced Digital Radio Jammer Military System",
  "commonName": "DRFM Advanced Digital Radio Jammer",
  "aliases": [
    "DRFM Advanced Digital Radio Jammer"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-radar-jamming",
  "categoryName": "Electronic Warfare — radar jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 6,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "drfm-advanced-digital-radio-jammer",
    "drfm advanced digital radio jammer",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced radar jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "DRFM Advanced Digital Radio Jammer is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "DRFM Advanced Digital Radio Jammer Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "DRFM Advanced Digital Radio Jammer Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "titan-c-uas-rf-sensor",
  "name": "Titan C-UAS RF Sensor",
  "officialDesignation": "Titan C-UAS RF Sensor Military System",
  "commonName": "Titan C-UAS RF Sensor",
  "aliases": [
    "Titan C-UAS RF Sensor"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-communications-jamming",
  "categoryName": "Electronic Warfare — communications jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 7,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "titan-c-uas-rf-sensor",
    "titan c-uas rf sensor",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced communications jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Titan C-UAS RF Sensor is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Titan C-UAS RF Sensor Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Titan C-UAS RF Sensor Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "blade-c-uas-radar-ew-pod",
  "name": "Blade C-UAS Radar & EW Pod",
  "officialDesignation": "Blade C-UAS Radar & EW Pod Military System",
  "commonName": "Blade C-UAS Radar & EW Pod",
  "aliases": [
    "Blade C-UAS Radar & EW Pod"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-attack",
  "categoryName": "Electronic Warfare — electronic attack",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 8,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "blade-c-uas-radar-ew-pod",
    "blade c-uas radar & ew pod",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic attack electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Blade C-UAS Radar & EW Pod is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Blade C-UAS Radar & EW Pod Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Blade C-UAS Radar & EW Pod Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "enforceair-cyber-c-uas",
  "name": "EnforceAir Cyber C-UAS",
  "officialDesignation": "EnforceAir Cyber C-UAS Military System",
  "commonName": "EnforceAir Cyber C-UAS",
  "aliases": [
    "EnforceAir Cyber C-UAS"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-protection",
  "categoryName": "Electronic Warfare — electronic protection",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 9,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "enforceair-cyber-c-uas",
    "enforceair cyber c-uas",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic protection electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "EnforceAir Cyber C-UAS is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "EnforceAir Cyber C-UAS Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "EnforceAir Cyber C-UAS Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "sentrycs-cyber-anti-drone-system",
  "name": "SentryCS Cyber Anti-Drone System",
  "officialDesignation": "SentryCS Cyber Anti-Drone System Military System",
  "commonName": "SentryCS Cyber Anti-Drone System",
  "aliases": [
    "SentryCS Cyber Anti-Drone System"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-support",
  "categoryName": "Electronic Warfare — electronic support",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 10,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "sentrycs-cyber-anti-drone-system",
    "sentrycs cyber anti-drone system",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic support electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "SentryCS Cyber Anti-Drone System is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "SentryCS Cyber Anti-Drone System Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "SentryCS Cyber Anti-Drone System Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "dedronetracker-sensor-grid",
  "name": "DedroneTracker Sensor Grid",
  "officialDesignation": "DedroneTracker Sensor Grid Military System",
  "commonName": "DedroneTracker Sensor Grid",
  "aliases": [
    "DedroneTracker Sensor Grid"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-radar-jamming",
  "categoryName": "Electronic Warfare — radar jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 1,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "dedronetracker-sensor-grid",
    "dedronetracker sensor grid",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced radar jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "DedroneTracker Sensor Grid is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "DedroneTracker Sensor Grid Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "DedroneTracker Sensor Grid Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "dronehunter-f700-autonomous-interceptor",
  "name": "DroneHunter F700 Autonomous Interceptor",
  "officialDesignation": "DroneHunter F700 Autonomous Interceptor Military System",
  "commonName": "DroneHunter F700 Autonomous Interceptor",
  "aliases": [
    "DroneHunter F700 Autonomous Interceptor"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-communications-jamming",
  "categoryName": "Electronic Warfare — communications jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 2,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "dronehunter-f700-autonomous-interceptor",
    "dronehunter f700 autonomous interceptor",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced communications jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "DroneHunter F700 Autonomous Interceptor is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "DroneHunter F700 Autonomous Interceptor Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "DroneHunter F700 Autonomous Interceptor Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "dronegun-mk4-directional-jammer",
  "name": "DroneGun Mk4 Directional Jammer",
  "officialDesignation": "DroneGun Mk4 Directional Jammer Military System",
  "commonName": "DroneGun Mk4 Directional Jammer",
  "aliases": [
    "DroneGun Mk4 Directional Jammer"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-attack",
  "categoryName": "Electronic Warfare — electronic attack",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 3,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "dronegun-mk4-directional-jammer",
    "dronegun mk4 directional jammer",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic attack electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "DroneGun Mk4 Directional Jammer is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "DroneGun Mk4 Directional Jammer Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "DroneGun Mk4 Directional Jammer Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "mesmer-counter-drone-ew-array",
  "name": "Mesmer Counter-Drone EW Array",
  "officialDesignation": "Mesmer Counter-Drone EW Array Military System",
  "commonName": "Mesmer Counter-Drone EW Array",
  "aliases": [
    "Mesmer Counter-Drone EW Array"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-protection",
  "categoryName": "Electronic Warfare — electronic protection",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 4,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "mesmer-counter-drone-ew-array",
    "mesmer counter-drone ew array",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic protection electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Mesmer Counter-Drone EW Array is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Mesmer Counter-Drone EW Array Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Mesmer Counter-Drone EW Array Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "skywall-patrol-net-interceptor",
  "name": "Skywall Patrol Net Interceptor",
  "officialDesignation": "Skywall Patrol Net Interceptor Military System",
  "commonName": "Skywall Patrol Net Interceptor",
  "aliases": [
    "Skywall Patrol Net Interceptor"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-electronic-support",
  "categoryName": "Electronic Warfare — electronic support",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 5,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "skywall-patrol-net-interceptor",
    "skywall patrol net interceptor",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced electronic support electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "Skywall Patrol Net Interceptor is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Skywall Patrol Net Interceptor Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "Skywall Patrol Net Interceptor Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "sps-3000-airborne-esm-receiver",
  "name": "SPS-3000 Airborne ESM Receiver",
  "officialDesignation": "SPS-3000 Airborne ESM Receiver Military System",
  "commonName": "SPS-3000 Airborne ESM Receiver",
  "aliases": [
    "SPS-3000 Airborne ESM Receiver"
  ],
  "familyName": "Electronic Warfare Family",
  "domain": "ELECTRONIC-WARFARE",
  "branchId": "electronic-warfare",
  "categoryId": "ew-radar-jamming",
  "categoryName": "Electronic Warfare — radar jamming",
  "subcategory": "Advanced EW Suite",
  "rankInCategory": 6,
  "rankingRationale": "Canonical database inclusion.",
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
  "developer": "Defense Electronic Systems",
  "manufacturer": "Defense Electronic Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Joint"
  ],
  "searchKeywords": [
    "sps-3000-airborne-esm-receiver",
    "sps-3000 airborne esm receiver",
    "ew",
    "electronic warfare",
    "jamming"
  ],
  "era": "2015–Present",
  "shortDescription": "Advanced radar jamming electronic warfare architecture for multi-domain signal intelligence and radar suppression.",
  "fullOverview": "SPS-3000 Airborne ESM Receiver is a high-performance electronic warfare system designed for standoff frequency jamming, threat receiver intercept, signal intelligence, and RF deception.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "SPS-3000 Airborne ESM Receiver Technical Specification",
  "specs": {
    "entryIntoService": "2018",
    "crew": "Mission-system dependent",
    "manufacturer": "Defense Electronic Systems",
    "primaryRole": "Electronic Warfare & Electromagnetic Spectrum Operations",
    "keyMetrics": [
      {
        "label": "Frequency Range",
        "value": "0.5 - 40 GHz",
        "highlight": true
      },
      {
        "label": "Effective Jamming Range",
        "value": "150 km",
        "highlight": true
      }
    ],
    "armament": [
      "High-Power Directed RF Electromagnetic Countermeasure Beam"
    ],
    "propulsionPower": "Platform-integrated Electrical Generator",
    "sensorsAvionics": [
      "Gallium Nitride (GaN) AESA Antennas & DRFM Signal Processors"
    ],
    "technicalDetails": {}
  },
  "sources": [
    {
      "title": "SPS-3000 Airborne ESM Receiver Product Sheet",
      "accessedAt": "2026-09-01"
    }
  ]
}
];

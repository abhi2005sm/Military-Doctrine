import { Asset } from '../../types/catalog';
import { AirDefenceSystemSpecs } from '@/schema/airDefence';

export const AIR_DEFENCE_ASSETS: Asset[] = [
  {
    "id": "rbs-70-ng",
    "name": "RBS 70 NG",
    "officialDesignation": "RBS 70 NG Ground-Based Air Defence System",
    "commonName": "RBS 70 NG",
    "aliases": [
      "RBS 70 NG",
      "RBS 70 NG Ground-Based Air Defence System"
    ],
    "familyName": "RBS 70 NG Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Very Short Range Air Defence (VSHORAD)",
    "subcategory": "MANPADS / VSHORAD",
    "rankInCategory": 1,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "Sweden",
      "Finland",
      "Czech Republic",
      "Brazil",
      "Latvia",
      "Lithuania",
      "Thailand"
    ],
    "developer": "Saab",
    "manufacturer": "Saab",
    "serviceEntry": "2011",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "rbs 70 ng",
      "air-defence-vshorad",
      "manpads / vshorad"
    ],
    "era": "Modern (1992-2015)",
    "generation": "Modern (1992-2015)",
    "shortDescription": "RBS 70 NG is a modern VSHORAD system using an unjammable laser beam-riding missile with automatic target tracking and night capability.",
    "fullOverview": "RBS 70 NG is a modern VSHORAD system using an unjammable laser beam-riding missile with automatic target tracking and night capability.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Saab RBS 70 NG Product Information",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.8,
      "logistics": 4.7,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "airDefenceSpecs": {
      "id": "rbs-70-ng",
      "name": "RBS 70 NG",
      "officialDesignation": "RBS 70 NG Ground-Based Air Defence System",
      "alternateNames": [
        "RBS 70 NG",
        "RBS 70 NG Ground-Based Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Very Short Range Air Defence (VSHORAD)",
      "subcategory": "MANPADS / VSHORAD",
      "airDefenceCategory": "VSHORAD",
      "tierClassification": "Man-Portable (MANPADS)",
      "country": "Sweden",
      "manufacturer": "Saab",
      "operator": [
        "Sweden",
        "Finland",
        "Czech Republic",
        "Brazil",
        "Latvia",
        "Lithuania",
        "Thailand"
      ],
      "serviceEntryYear": 2011,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "RBS 70 NG is a modern VSHORAD system using an unjammable laser beam-riding missile with automatic target tracking and night capability.",
      "performance": {
        "maxEngagementRangeKm": 9,
        "minEngagementRangeKm": 0.25,
        "maxEngagementAltitudeM": 5000,
        "simultaneousEngagements": 1
      },
      "batteryArchitecture": {
        "launcherType": "Shoulder-Fired",
        "readyToFirePerLauncher": 1,
        "mobility": "Man-Portable"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Saab Tactical 3D Radar",
        "radarArchitecture": "None (Optical/Laser only)",
        "opticalTrackingChannels": [
          "Automatic target tracker",
          "Thermal sight",
          "Night sight",
          "Laser transmitter"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Bolide",
        "guidanceMethod": "Laser Beam-Riding (SACLOS)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Giraffe C2 link"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Saab RBS 70 NG Product Information",
          "url": "https://www.saab.com/products/rbs-70-ng",
          "publisher": "Saab RBS 70 NG Product Information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    },
    "specs": {
      "entryIntoService": "2011",
      "crew": "3 (Commander, Gunner, Target Tracker)",
      "manufacturer": "Saab",
      "primaryRole": "Very Short-Range Low-Altitude Air Defence",
      "weightDisplacement": "87 kg (Tripod, Sight & Launch Tube)",
      "maxSpeed": "Mach 2.0 (Bolide Interceptor Speed)",
      "operationalRange": "0.25 – 9.0 km",
      "serviceCeilingDepth": "5,000 m (Max Altitude)",
      "mainArmament": [
        "Bolide Interceptor Missile (Laser Beam-Riding SACLOS, HE Blast-Fragmentation)"
      ],
      "sensorsAvionics": [
        "Automatic Target Tracker",
        "Thermal Sight",
        "Night Sight",
        "Laser Transmitter",
        "Giraffe C2 Link"
      ],
      "keyMetrics": [
        {
          "label": "Max Engagement Range",
          "value": "9.0",
          "unit": "km",
          "highlight": true
        },
        {
          "label": "Min Engagement Range",
          "value": "0.25",
          "unit": "km"
        },
        {
          "label": "Max Altitude",
          "value": "5,000",
          "unit": "m",
          "highlight": true
        },
        {
          "label": "Guidance",
          "value": "Laser Beam-Riding",
          "unit": ""
        },
        {
          "label": "Mobility",
          "value": "Man-Portable",
          "unit": ""
        }
      ],
      "armament": [
        "Bolide Interceptor Missile"
      ],
      "propulsionPower": "Laser Beam-Riding Rocket Motor"
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Saab RBS 70 NG Product Information",
        "url": "https://www.saab.com/products/rbs-70-ng",
        "publisher": "Saab RBS 70 NG Product Information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ]
  },
  {
    "id": "mistral-3",
    "name": "Mistral 3",
    "officialDesignation": "Mistral 3 Very Short-Range Air Defence Missile",
    "commonName": "Mistral 3",
    "aliases": [
      "Mistral 3",
      "Mistral 3 Very Short-Range Air Defence Missile"
    ],
    "familyName": "Mistral 3 Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Very Short Range Air Defence (VSHORAD)",
    "subcategory": "MANPADS / VSHORAD",
    "rankInCategory": 2,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('France', 'https://military-doctrine.vercel.app/country?country=France')",
      "('Belgium', 'https://military-doctrine.vercel.app/country?country=Belgium')",
      "('Estonia', 'https://military-doctrine.vercel.app/country?country=Estonia')",
      "('Finland', 'https://military-doctrine.vercel.app/country?country=Finland')",
      "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')",
      "('Spain', 'https://military-doctrine.vercel.app/country?country=Spain')",
      "('Indonesia', 'https://military-doctrine.vercel.app/country?country=Indonesia')"
    ],
    "developer": "MBDA",
    "manufacturer": "MBDA",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "mistral 3",
      "air-defence-vshorad",
      "manpads / vshorad"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Mistral 3 is a current-generation imaging-infrared fire-and-forget interceptor for low-altitude aircraft, helicopters and unmanned threats.",
    "fullOverview": "Mistral 3 is a current-generation imaging-infrared fire-and-forget interceptor for low-altitude aircraft, helicopters and unmanned threats.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "MBDA Mistral Product Information",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.7,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2018 (Mistral 3)",
      "crew": "Battery / system operators",
      "manufacturer": "MBDA",
      "primaryRole": "Very Short-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "8",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "System configuration dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Imaging infrared seeker",
        "Electro-optical sight",
        "Launch-unit fire control"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "MBDA Mistral Product Information",
        "url": "https://www.mbda-systems.com/product/mistral/",
        "publisher": "MBDA Mistral Product Information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "mistral-3",
      "name": "Mistral 3",
      "officialDesignation": "Mistral 3 Very Short-Range Air Defence Missile",
      "alternateNames": [
        "Mistral 3",
        "Mistral 3 Very Short-Range Air Defence Missile"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Very Short Range Air Defence (VSHORAD)",
      "subcategory": "MANPADS / VSHORAD",
      "airDefenceCategory": "VSHORAD",
      "tierClassification": "Man-Portable (MANPADS)",
      "country": "France",
      "manufacturer": "MBDA",
      "operator": [
        "('France', 'https://military-doctrine.vercel.app/country?country=France')",
        "('Belgium', 'https://military-doctrine.vercel.app/country?country=Belgium')",
        "('Estonia', 'https://military-doctrine.vercel.app/country?country=Estonia')",
        "('Finland', 'https://military-doctrine.vercel.app/country?country=Finland')",
        "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')",
        "('Spain', 'https://military-doctrine.vercel.app/country?country=Spain')",
        "('Indonesia', 'https://military-doctrine.vercel.app/country?country=Indonesia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Mistral 3 is a current-generation imaging-infrared fire-and-forget interceptor for low-altitude aircraft, helicopters and unmanned threats.",
      "performance": {
        "maxEngagementRangeKm": 8,
        "simultaneousEngagements": 1
      },
      "batteryArchitecture": {
        "launcherType": "Shoulder-Fired",
        "readyToFirePerLauncher": 1,
        "mobility": "Man-Portable"
      },
      "radarAndSensors": {
        "integratedRadarModel": "MBDA Tactical 3D Radar",
        "radarArchitecture": "None (Optical/Laser only)",
        "opticalTrackingChannels": [
          "Imaging Infrared (IIR) Seeker",
          "Electro-Optical Sight",
          "Thermal Sight"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Mistral 3 Interceptor",
        "guidanceMethod": "Imaging Infrared (IIR)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "LICORNE C2 Link",
          "Link 16"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "MBDA Mistral Product Information",
          "url": "https://www.mbda-systems.com/product/mistral/",
          "publisher": "MBDA Mistral Product Information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "piorun",
    "name": "Piorun",
    "officialDesignation": "Piorun Portable Anti-Aircraft Missile System",
    "commonName": "Piorun",
    "aliases": [
      "Piorun",
      "Piorun Portable Anti-Aircraft Missile System"
    ],
    "familyName": "Piorun Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Very Short Range Air Defence (VSHORAD)",
    "subcategory": "MANPADS / VSHORAD",
    "rankInCategory": 3,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')",
      "('Estonia', 'https://military-doctrine.vercel.app/country?country=Estonia')",
      "('Norway', 'https://military-doctrine.vercel.app/country?country=Norway')",
      "('Slovakia', 'https://military-doctrine.vercel.app/country?country=Slovakia')"
    ],
    "developer": "Mesko",
    "manufacturer": "Mesko",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "piorun",
      "air-defence-vshorad",
      "manpads / vshorad"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Piorun is a modern Polish man-portable infrared/ultraviolet guided missile designed for low-altitude aircraft and unmanned targets.",
    "fullOverview": "Piorun is a modern Polish man-portable infrared/ultraviolet guided missile designed for low-altitude aircraft and unmanned targets.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "MESKO Piorun Product Information",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.6,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "2019",
      "crew": "Battery / system operators",
      "manufacturer": "Mesko",
      "primaryRole": "Man-Portable Very Short-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "6.5",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "19.5 kg class system",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Imaging/dual-band IR-UV seeker",
        "Laser proximity fuze",
        "Day/night launcher sight"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "MESKO Piorun Product Information",
        "url": "https://www.mesko.com.pl/",
        "publisher": "MESKO Piorun Product Information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "piorun",
      "name": "Piorun",
      "officialDesignation": "Piorun Portable Anti-Aircraft Missile System",
      "alternateNames": [
        "Piorun",
        "Piorun Portable Anti-Aircraft Missile System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Very Short Range Air Defence (VSHORAD)",
      "subcategory": "MANPADS / VSHORAD",
      "airDefenceCategory": "VSHORAD",
      "tierClassification": "Man-Portable (MANPADS)",
      "country": "Poland",
      "manufacturer": "Mesko",
      "operator": [
        "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')",
        "('Estonia', 'https://military-doctrine.vercel.app/country?country=Estonia')",
        "('Norway', 'https://military-doctrine.vercel.app/country?country=Norway')",
        "('Slovakia', 'https://military-doctrine.vercel.app/country?country=Slovakia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Piorun is a modern Polish man-portable infrared/ultraviolet guided missile designed for low-altitude aircraft and unmanned targets.",
      "performance": {
        "maxEngagementRangeKm": 6.5,
        "simultaneousEngagements": 1
      },
      "batteryArchitecture": {
        "launcherType": "Shoulder-Fired",
        "readyToFirePerLauncher": 1,
        "mobility": "Man-Portable"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Mesko Tactical 3D Radar",
        "radarArchitecture": "None (Optical/Laser only)",
        "opticalTrackingChannels": [
          "Dual-Band IR/UV Seeker",
          "Laser Proximity Fuze Sight"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Piorun Interceptor Missile",
        "guidanceMethod": "Infrared Homing (IR/UV)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Rega C2 Link"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "MESKO Piorun Product Information",
          "url": "https://www.mesko.com.pl/",
          "publisher": "MESKO Piorun Product Information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "fim-92j-stinger",
    "name": "FIM-92J Stinger",
    "officialDesignation": "FIM-92J Stinger MANPADS",
    "commonName": "FIM-92J Stinger",
    "aliases": [
      "FIM-92J Stinger",
      "FIM-92J Stinger MANPADS"
    ],
    "familyName": "FIM-92J Stinger Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Very Short Range Air Defence (VSHORAD)",
    "subcategory": "MANPADS / VSHORAD",
    "rankInCategory": 4,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')",
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
      "('United Kingdom', 'https://military-doctrine.vercel.app/country?country=United%20Kingdom')",
      "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')",
      "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
      "('Taiwan', 'https://military-doctrine.vercel.app/country?country=Taiwan')",
      "('Netherlands', 'https://military-doctrine.vercel.app/country?country=Netherlands')",
      "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')",
      "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')"
    ],
    "developer": "Raytheon Missiles & Defense",
    "manufacturer": "Raytheon Missiles & Defense",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "fim-92j stinger",
      "air-defence-vshorad",
      "manpads / vshorad"
    ],
    "era": "Cold War / Modernized (1970-1991)",
    "shortDescription": "The FIM-92J is a modernized Stinger variant with updated fuze and seeker improvements and remains a current operational VSHORAD capability.",
    "fullOverview": "The FIM-92J is a modernized Stinger variant with updated fuze and seeker improvements and remains a current operational VSHORAD capability.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "U.S. Army PEO Missiles and Space / Raytheon Stinger",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.6,
      "precision": 4.6,
      "technology": 4.7,
      "logistics": 4.6,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "1981 (FIM-92J 2018)",
      "crew": "Battery / system operators",
      "manufacturer": "Raytheon Missiles & Defense",
      "primaryRole": "Very Short-Range Low-Altitude Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "4.8",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "15.2 kg class launcher/missile",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Dual-band IR/UV seeker",
        "Proximity/impact fuze",
        "IFF and missile electronics"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "U.S. Army PEO Missiles and Space / Raytheon Stinger",
        "url": "https://www.peomissilesandspace.army.mil/",
        "publisher": "U.S. Army PEO Missiles and Space / Raytheon Stinger",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "fim-92j-stinger",
      "name": "FIM-92J Stinger",
      "officialDesignation": "FIM-92J Stinger MANPADS",
      "alternateNames": [
        "FIM-92J Stinger",
        "FIM-92J Stinger MANPADS"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Very Short Range Air Defence (VSHORAD)",
      "subcategory": "MANPADS / VSHORAD",
      "airDefenceCategory": "VSHORAD",
      "tierClassification": "Man-Portable (MANPADS)",
      "country": "United States",
      "manufacturer": "Raytheon Missiles & Defense",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')",
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
        "('United Kingdom', 'https://military-doctrine.vercel.app/country?country=United%20Kingdom')",
        "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')",
        "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
        "('Taiwan', 'https://military-doctrine.vercel.app/country?country=Taiwan')",
        "('Netherlands', 'https://military-doctrine.vercel.app/country?country=Netherlands')",
        "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')",
        "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Cold War / Modernized (1970-1991)",
      "description": "The FIM-92J is a modernized Stinger variant with updated fuze and seeker improvements and remains a current operational VSHORAD capability.",
      "performance": {
        "maxEngagementRangeKm": 4.8,
        "simultaneousEngagements": 1
      },
      "batteryArchitecture": {
        "launcherType": "Shoulder-Fired",
        "readyToFirePerLauncher": 1,
        "mobility": "Man-Portable"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Raytheon Missiles & Defense Tactical 3D Radar",
        "radarArchitecture": "None (Optical/Laser only)",
        "opticalTrackingChannels": [
          "Dual-Band IR/UV Rosette Seeker",
          "AN/PAS-18 Thermal Sight"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "FIM-92J Stinger Missile",
        "guidanceMethod": "Infrared Homing (IR/UV)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "FAAD C2 Link"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "U.S. Army PEO Missiles and Space / Raytheon Stinger",
          "url": "https://www.peomissilesandspace.army.mil/",
          "publisher": "U.S. Army PEO Missiles and Space / Raytheon Stinger",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "starstreak-hvm",
    "name": "Starstreak HVM",
    "officialDesignation": "Starstreak High Velocity Missile System",
    "commonName": "Starstreak HVM",
    "aliases": [
      "Starstreak HVM",
      "Starstreak High Velocity Missile System"
    ],
    "familyName": "Starstreak HVM Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Very Short Range Air Defence (VSHORAD)",
    "subcategory": "MANPADS / VSHORAD",
    "rankInCategory": 5,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United Kingdom', 'https://military-doctrine.vercel.app/country?country=United%20Kingdom')",
      "('South Africa', 'https://military-doctrine.vercel.app/country?country=South%20Africa')",
      "('Thailand', 'https://military-doctrine.vercel.app/country?country=Thailand')",
      "('Indonesia', 'https://military-doctrine.vercel.app/country?country=Indonesia')"
    ],
    "developer": "Thales UK",
    "manufacturer": "Thales UK",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "starstreak hvm",
      "air-defence-vshorad",
      "manpads / vshorad"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "Starstreak uses laser beam-riding guidance and high-speed kinetic darts to engage helicopters, aircraft and other low-altitude threats.",
    "fullOverview": "Starstreak uses laser beam-riding guidance and high-speed kinetic darts to engage helicopters, aircraft and other low-altitude threats.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Thales Starstreak Air Defence Information",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.6,
      "survivability": 4.5,
      "rangeMobility": 4.6,
      "precision": 4.6,
      "technology": 4.6,
      "logistics": 4.6,
      "costEfficiency": 4.5,
      "combatMaturity": 4.6,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "1997 (current HVM family)",
      "crew": "Battery / system operators",
      "manufacturer": "Thales UK",
      "primaryRole": "Very Short-Range High-Speed Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "7",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Mach 3+",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "System configuration dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Thermal/optical sight",
        "Laser command guidance",
        "Automatic target tracking options"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Thales Starstreak Air Defence Information",
        "url": "https://www.thalesgroup.com/",
        "publisher": "Thales Starstreak Air Defence Information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "starstreak-hvm",
      "name": "Starstreak HVM",
      "officialDesignation": "Starstreak High Velocity Missile System",
      "alternateNames": [
        "Starstreak HVM",
        "Starstreak High Velocity Missile System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Very Short Range Air Defence (VSHORAD)",
      "subcategory": "MANPADS / VSHORAD",
      "airDefenceCategory": "VSHORAD",
      "tierClassification": "Man-Portable (MANPADS)",
      "country": "United Kingdom",
      "manufacturer": "Thales UK",
      "operator": [
        "('United Kingdom', 'https://military-doctrine.vercel.app/country?country=United%20Kingdom')",
        "('South Africa', 'https://military-doctrine.vercel.app/country?country=South%20Africa')",
        "('Thailand', 'https://military-doctrine.vercel.app/country?country=Thailand')",
        "('Indonesia', 'https://military-doctrine.vercel.app/country?country=Indonesia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "Starstreak uses laser beam-riding guidance and high-speed kinetic darts to engage helicopters, aircraft and other low-altitude threats.",
      "performance": {
        "maxEngagementRangeKm": 7,
        "simultaneousEngagements": 1
      },
      "batteryArchitecture": {
        "launcherType": "Shoulder-Fired",
        "readyToFirePerLauncher": 3,
        "mobility": "Man-Portable"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Thales UK Tactical 3D Radar",
        "radarArchitecture": "None (Optical/Laser only)",
        "opticalTrackingChannels": [
          "Laser Beam-Riding Matrix",
          "Thermal Sight"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Starstreak Kinetic Dart",
        "guidanceMethod": "Laser Beam-Riding (SACLOS)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "GBAD C2 Link"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Thales Starstreak Air Defence Information",
          "url": "https://www.thalesgroup.com/",
          "publisher": "Thales Starstreak Air Defence Information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "9k333-verba",
    "name": "9K333 Verba",
    "officialDesignation": "9K333 Verba Man-Portable Air Defence System",
    "commonName": "9K333 Verba",
    "aliases": [
      "9K333 Verba",
      "9K333 Verba Man-Portable Air Defence System"
    ],
    "familyName": "9K333 Verba Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Very Short Range Air Defence (VSHORAD)",
    "subcategory": "MANPADS / VSHORAD",
    "rankInCategory": 6,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')",
      "('Belarus', 'https://military-doctrine.vercel.app/country?country=Belarus')",
      "('Armenia', 'https://military-doctrine.vercel.app/country?country=Armenia')"
    ],
    "developer": "KBM",
    "manufacturer": "KBM",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "9k333 verba",
      "air-defence-vshorad",
      "manpads / vshorad"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "Verba is a multispectral infrared/ultraviolet MANPADS family intended to improve target discrimination in clutter and against countermeasures.",
    "fullOverview": "Verba is a multispectral infrared/ultraviolet MANPADS family intended to improve target discrimination in clutter and against countermeasures.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "KBM / Rosoboronexport Verba Product Information",
    "ratings": {
      "capability": 4.5,
      "offensive": 4.5,
      "defensive": 4.6,
      "reliability": 4.5,
      "maintainability": 4.6,
      "survivability": 4.5,
      "rangeMobility": 4.6,
      "precision": 4.6,
      "technology": 4.6,
      "logistics": 4.5,
      "costEfficiency": 4.5,
      "combatMaturity": 4.6,
      "upgradePotential": 4.6
    },
    "specs": {
      "entryIntoService": "2014",
      "crew": "Battery / system operators",
      "manufacturer": "KBM",
      "primaryRole": "Multispectral Very Short-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "6.4",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "17 kg class system",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Three-band IR/UV seeker",
        "Launcher sight",
        "Proximity fuze"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "KBM / Rosoboronexport Verba Product Information",
        "url": "https://roe.ru/",
        "publisher": "KBM / Rosoboronexport Verba Product Information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "9k333-verba",
      "name": "9K333 Verba",
      "officialDesignation": "9K333 Verba Man-Portable Air Defence System",
      "alternateNames": [
        "9K333 Verba",
        "9K333 Verba Man-Portable Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Very Short Range Air Defence (VSHORAD)",
      "subcategory": "MANPADS / VSHORAD",
      "airDefenceCategory": "VSHORAD",
      "tierClassification": "Man-Portable (MANPADS)",
      "country": "Russia",
      "manufacturer": "KBM",
      "operator": [
        "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')",
        "('Belarus', 'https://military-doctrine.vercel.app/country?country=Belarus')",
        "('Armenia', 'https://military-doctrine.vercel.app/country?country=Armenia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "Verba is a multispectral infrared/ultraviolet MANPADS family intended to improve target discrimination in clutter and against countermeasures.",
      "performance": {
        "maxEngagementRangeKm": 6.4,
        "simultaneousEngagements": 1
      },
      "batteryArchitecture": {
        "launcherType": "Shoulder-Fired",
        "readyToFirePerLauncher": 1,
        "mobility": "Man-Portable"
      },
      "radarAndSensors": {
        "integratedRadarModel": "KBM Tactical 3D Radar",
        "radarArchitecture": "None (Optical/Laser only)",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "9K333 Verba Interceptor",
        "guidanceMethod": "Infrared Homing (IR/UV)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "KBM / Rosoboronexport Verba Product Information",
          "url": "https://roe.ru/",
          "publisher": "KBM / Rosoboronexport Verba Product Information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "sungur",
    "name": "SUNGUR",
    "officialDesignation": "SUNGUR Low-Altitude Air Defence Missile System",
    "commonName": "SUNGUR",
    "aliases": [
      "SUNGUR",
      "SUNGUR Low-Altitude Air Defence Missile System"
    ],
    "familyName": "SUNGUR Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Very Short Range Air Defence (VSHORAD)",
    "subcategory": "MANPADS / VSHORAD",
    "rankInCategory": 7,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Türkiye",
    "originCountries": [
      "Türkiye"
    ],
    "developerCountries": [
      "Türkiye"
    ],
    "manufacturerCountries": [
      "Türkiye"
    ],
    "operatorCountries": [
      "('Türkiye', 'https://military-doctrine.vercel.app/country?country=T%C3%BCrkiye')"
    ],
    "developer": "Roketsan",
    "manufacturer": "Roketsan",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "sungur",
      "air-defence-vshorad",
      "manpads / vshorad"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "SUNGUR is a current Turkish low-altitude missile system designed for portable and vehicle-mounted use against aircraft and UAVs.",
    "fullOverview": "SUNGUR is a current Turkish low-altitude missile system designed for portable and vehicle-mounted use against aircraft and UAVs.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Roketsan SUNGUR Product Information",
    "ratings": {
      "capability": 4.5,
      "offensive": 4.4,
      "defensive": 4.6,
      "reliability": 4.5,
      "maintainability": 4.6,
      "survivability": 4.5,
      "rangeMobility": 4.6,
      "precision": 4.5,
      "technology": 4.6,
      "logistics": 4.5,
      "costEfficiency": 4.5,
      "combatMaturity": 4.6,
      "upgradePotential": 4.6
    },
    "specs": {
      "entryIntoService": "2022",
      "crew": "Battery / system operators",
      "manufacturer": "Roketsan",
      "primaryRole": "Very Short-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "8",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Vehicle/launcher configuration dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Imaging infrared seeker",
        "Electro-optical sight",
        "Networked target cueing"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Roketsan SUNGUR Product Information",
        "url": "https://www.roketsan.com.tr/",
        "publisher": "Roketsan SUNGUR Product Information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "sungur",
      "name": "SUNGUR",
      "officialDesignation": "SUNGUR Low-Altitude Air Defence Missile System",
      "alternateNames": [
        "SUNGUR",
        "SUNGUR Low-Altitude Air Defence Missile System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Very Short Range Air Defence (VSHORAD)",
      "subcategory": "MANPADS / VSHORAD",
      "airDefenceCategory": "VSHORAD",
      "tierClassification": "Man-Portable (MANPADS)",
      "country": "Türkiye",
      "manufacturer": "Roketsan",
      "operator": [
        "('Türkiye', 'https://military-doctrine.vercel.app/country?country=T%C3%BCrkiye')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "SUNGUR is a current Turkish low-altitude missile system designed for portable and vehicle-mounted use against aircraft and UAVs.",
      "performance": {
        "maxEngagementRangeKm": 8,
        "simultaneousEngagements": 1
      },
      "batteryArchitecture": {
        "launcherType": "Shoulder-Fired",
        "readyToFirePerLauncher": 1,
        "mobility": "Man-Portable"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Roketsan Tactical 3D Radar",
        "radarArchitecture": "None (Optical/Laser only)",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "SUNGUR Interceptor",
        "guidanceMethod": "Infrared Homing (IR/UV)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Roketsan SUNGUR Product Information",
          "url": "https://www.roketsan.com.tr/",
          "publisher": "Roketsan SUNGUR Product Information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "chiron",
    "name": "Chiron",
    "officialDesignation": "KP-SAM Chiron Air Defence Missile System",
    "commonName": "Chiron",
    "aliases": [
      "Chiron",
      "KP-SAM Chiron Air Defence Missile System"
    ],
    "familyName": "Chiron Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Very Short Range Air Defence (VSHORAD)",
    "subcategory": "MANPADS / VSHORAD",
    "rankInCategory": 8,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
      "('Indonesia', 'https://military-doctrine.vercel.app/country?country=Indonesia')",
      "('Peru', 'https://military-doctrine.vercel.app/country?country=Peru')"
    ],
    "developer": "LIG Nex1",
    "manufacturer": "LIG Nex1",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "chiron",
      "air-defence-vshorad",
      "manpads / vshorad"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "Chiron is a modernized Korean man-portable air-defence missile system using imaging infrared guidance and networked target information.",
    "fullOverview": "Chiron is a modernized Korean man-portable air-defence missile system using imaging infrared guidance and networked target information.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "LIG Nex1 Air Defence Product Information",
    "ratings": {
      "capability": 4.5,
      "offensive": 4.4,
      "defensive": 4.6,
      "reliability": 4.5,
      "maintainability": 4.5,
      "survivability": 4.4,
      "rangeMobility": 4.5,
      "precision": 4.5,
      "technology": 4.5,
      "logistics": 4.5,
      "costEfficiency": 4.4,
      "combatMaturity": 4.5,
      "upgradePotential": 4.6
    },
    "specs": {
      "entryIntoService": "2005 (current service modernization)",
      "crew": "Battery / system operators",
      "manufacturer": "LIG Nex1",
      "primaryRole": "Very Short-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "7",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "System configuration dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Imaging infrared seeker",
        "Launcher electro-optics",
        "IFF/target cueing"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "LIG Nex1 Air Defence Product Information",
        "url": "https://www.lignex1.com/",
        "publisher": "LIG Nex1 Air Defence Product Information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "chiron",
      "name": "Chiron",
      "officialDesignation": "KP-SAM Chiron Air Defence Missile System",
      "alternateNames": [
        "Chiron",
        "KP-SAM Chiron Air Defence Missile System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Very Short Range Air Defence (VSHORAD)",
      "subcategory": "MANPADS / VSHORAD",
      "airDefenceCategory": "VSHORAD",
      "tierClassification": "Man-Portable (MANPADS)",
      "country": "South Korea",
      "manufacturer": "LIG Nex1",
      "operator": [
        "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
        "('Indonesia', 'https://military-doctrine.vercel.app/country?country=Indonesia')",
        "('Peru', 'https://military-doctrine.vercel.app/country?country=Peru')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "Chiron is a modernized Korean man-portable air-defence missile system using imaging infrared guidance and networked target information.",
      "performance": {
        "maxEngagementRangeKm": 7,
        "simultaneousEngagements": 1
      },
      "batteryArchitecture": {
        "launcherType": "Shoulder-Fired",
        "readyToFirePerLauncher": 1,
        "mobility": "Man-Portable"
      },
      "radarAndSensors": {
        "integratedRadarModel": "LIG Nex1 Tactical 3D Radar",
        "radarArchitecture": "None (Optical/Laser only)",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Chiron Interceptor",
        "guidanceMethod": "Infrared Homing (IR/UV)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "LIG Nex1 Air Defence Product Information",
          "url": "https://www.lignex1.com/",
          "publisher": "LIG Nex1 Air Defence Product Information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "hybrid-biho",
    "name": "Hybrid Biho",
    "officialDesignation": "Hybrid Biho Air Defence System",
    "commonName": "Hybrid Biho",
    "aliases": [
      "Hybrid Biho",
      "Hybrid Biho Air Defence System"
    ],
    "familyName": "Hybrid Biho Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Very Short Range Air Defence (VSHORAD)",
    "subcategory": "MANPADS / VSHORAD",
    "rankInCategory": 9,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')"
    ],
    "developer": "Hanwha Aerospace",
    "manufacturer": "Hanwha Aerospace",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "hybrid biho",
      "air-defence-vshorad",
      "manpads / vshorad"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "Hybrid Biho combines a radar-directed cannon system with short-range missiles for mobile low-altitude defence against aircraft and UAVs.",
    "fullOverview": "Hybrid Biho combines a radar-directed cannon system with short-range missiles for mobile low-altitude defence against aircraft and UAVs.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Hanwha Aerospace Air Defence Information",
    "ratings": {
      "capability": 4.5,
      "offensive": 4.4,
      "defensive": 4.6,
      "reliability": 4.5,
      "maintainability": 4.5,
      "survivability": 4.4,
      "rangeMobility": 4.5,
      "precision": 4.5,
      "technology": 4.5,
      "logistics": 4.5,
      "costEfficiency": 4.4,
      "combatMaturity": 4.5,
      "upgradePotential": 4.5
    },
    "specs": {
      "entryIntoService": "2010s (modernized configuration)",
      "crew": "Battery / system operators",
      "manufacturer": "Hanwha Aerospace",
      "primaryRole": "Mobile Gun-and-Missile VSHORAD",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "7",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Tracked configuration",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "3D surveillance radar",
        "EO/IR tracker",
        "Fire-control radar"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Hanwha Aerospace Air Defence Information",
        "url": "https://www.hanwhaaerospace.com/",
        "publisher": "Hanwha Aerospace Air Defence Information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "hybrid-biho",
      "name": "Hybrid Biho",
      "officialDesignation": "Hybrid Biho Air Defence System",
      "alternateNames": [
        "Hybrid Biho",
        "Hybrid Biho Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Very Short Range Air Defence (VSHORAD)",
      "subcategory": "MANPADS / VSHORAD",
      "airDefenceCategory": "VSHORAD",
      "tierClassification": "Man-Portable (MANPADS)",
      "country": "South Korea",
      "manufacturer": "Hanwha Aerospace",
      "operator": [
        "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "Hybrid Biho combines a radar-directed cannon system with short-range missiles for mobile low-altitude defence against aircraft and UAVs.",
      "performance": {
        "maxEngagementRangeKm": 7,
        "simultaneousEngagements": 1
      },
      "batteryArchitecture": {
        "launcherType": "Shoulder-Fired",
        "readyToFirePerLauncher": 1,
        "mobility": "Man-Portable"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Hanwha Aerospace Tactical 3D Radar",
        "radarArchitecture": "None (Optical/Laser only)",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Hybrid Biho Interceptor",
        "guidanceMethod": "Infrared Homing (IR/UV)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Hanwha Aerospace Air Defence Information",
          "url": "https://www.hanwhaaerospace.com/",
          "publisher": "Hanwha Aerospace Air Defence Information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "iris-t-sls-mk-iii",
    "name": "IRIS-T SLS Mk III",
    "officialDesignation": "IRIS-T SLS Mk III Mobile Short-Range Air Defence",
    "commonName": "IRIS-T SLS Mk III",
    "aliases": [
      "IRIS-T SLS Mk III",
      "IRIS-T SLS Mk III Mobile Short-Range Air Defence"
    ],
    "familyName": "IRIS-T SLS Mk III Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Very Short Range Air Defence (VSHORAD)",
    "subcategory": "MANPADS / VSHORAD",
    "rankInCategory": 10,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Germany (procurement/program)', 'https://military-doctrine.vercel.app/country?country=Germany%20%28procurement/program%29')"
    ],
    "developer": "Diehl Defence",
    "manufacturer": "Diehl Defence",
    "dataConfidence": "HIGH",
    "status": "In Development",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "iris-t sls mk iii",
      "air-defence-vshorad",
      "manpads / vshorad"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "IRIS-T SLS Mk III is the latest-generation mobile short-range configuration using the IRIS-T interceptor with modular radar and C2 integration.",
    "fullOverview": "IRIS-T SLS Mk III is the latest-generation mobile short-range configuration using the IRIS-T interceptor with modular radar and C2 integration.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Diehl Defence IRIS-T SLS Mk III",
    "ratings": {
      "capability": 4.4,
      "offensive": 4.3,
      "defensive": 4.5,
      "reliability": 4.4,
      "maintainability": 4.5,
      "survivability": 4.4,
      "rangeMobility": 4.5,
      "precision": 4.4,
      "technology": 4.5,
      "logistics": 4.4,
      "costEfficiency": 4.4,
      "combatMaturity": 4.5,
      "upgradePotential": 4.5
    },
    "specs": {
      "entryIntoService": "Development / current-generation demonstrator",
      "crew": "Battery / system operators",
      "manufacturer": "Diehl Defence",
      "primaryRole": "Mobile Very Short- to Short-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "12",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Vehicle configuration dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Giraffe 1X / Spexer class radar options",
        "EO/IR sensors",
        "Networked C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Diehl Defence IRIS-T SLS Mk III",
        "url": "https://www.diehl.com/defence/en/",
        "publisher": "Diehl Defence IRIS-T SLS Mk III",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "iris-t-sls-mk-iii",
      "name": "IRIS-T SLS Mk III",
      "officialDesignation": "IRIS-T SLS Mk III Mobile Short-Range Air Defence",
      "alternateNames": [
        "IRIS-T SLS Mk III",
        "IRIS-T SLS Mk III Mobile Short-Range Air Defence"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Very Short Range Air Defence (VSHORAD)",
      "subcategory": "MANPADS / VSHORAD",
      "airDefenceCategory": "VSHORAD",
      "tierClassification": "Man-Portable (MANPADS)",
      "country": "Germany",
      "manufacturer": "Diehl Defence",
      "operator": [
        "('Germany (procurement/program)', 'https://military-doctrine.vercel.app/country?country=Germany%20%28procurement/program%29')"
      ],
      "serviceEntryYear": 2015,
      "status": "In Development",
      "generation": "Next-Gen (2016-Present)",
      "description": "IRIS-T SLS Mk III is the latest-generation mobile short-range configuration using the IRIS-T interceptor with modular radar and C2 integration.",
      "performance": {
        "maxEngagementRangeKm": 12,
        "simultaneousEngagements": 1
      },
      "batteryArchitecture": {
        "launcherType": "Shoulder-Fired",
        "readyToFirePerLauncher": 1,
        "mobility": "Man-Portable"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Diehl Defence Tactical 3D Radar",
        "radarArchitecture": "None (Optical/Laser only)",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "IRIS-T SLS Mk III Interceptor",
        "guidanceMethod": "Infrared Homing (IR/UV)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Diehl Defence IRIS-T SLS Mk III",
          "url": "https://www.diehl.com/defence/en/",
          "publisher": "Diehl Defence IRIS-T SLS Mk III",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "skyranger-30",
    "name": "Skyranger 30",
    "officialDesignation": "Skyranger 30 Mobile Air Defence System",
    "commonName": "Skyranger 30",
    "aliases": [
      "Skyranger 30",
      "Skyranger 30 Mobile Air Defence System"
    ],
    "familyName": "Skyranger 30 Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Short Range (SHORAD)",
    "subcategory": "Mobile SHORAD",
    "rankInCategory": 1,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
      "('Austria', 'https://military-doctrine.vercel.app/country?country=Austria')",
      "('Netherlands', 'https://military-doctrine.vercel.app/country?country=Netherlands')",
      "('Denmark', 'https://military-doctrine.vercel.app/country?country=Denmark')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
    ],
    "developer": "Rheinmetall",
    "manufacturer": "Rheinmetall",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "skyranger 30",
      "air-defence-shorad",
      "mobile shorad"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Skyranger 30 combines a 30 mm programmable-airburst cannon, radar, electro-optics and optional short-range missiles for current drone and low-altitude threats.",
    "fullOverview": "Skyranger 30 combines a 30 mm programmable-airburst cannon, radar, electro-optics and optional short-range missiles for current drone and low-altitude threats.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Rheinmetall Skyranger 30",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.8,
      "reliability": 4.8,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.8,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "Rheinmetall",
      "primaryRole": "Mobile Gun-and-Missile Short-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Turret/carrier dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Search radar",
        "Tracking radar",
        "Electro-optical sensors"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Rheinmetall Skyranger 30",
        "url": "https://www.rheinmetall.com/en/products/air-defence-systems/mobile-air-defence-skyranger",
        "publisher": "Rheinmetall Skyranger 30",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "skyranger-30",
      "name": "Skyranger 30",
      "officialDesignation": "Skyranger 30 Mobile Air Defence System",
      "alternateNames": [
        "Skyranger 30",
        "Skyranger 30 Mobile Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile SHORAD",
      "airDefenceCategory": "SHORAD",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "Germany",
      "manufacturer": "Rheinmetall",
      "operator": [
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
        "('Austria', 'https://military-doctrine.vercel.app/country?country=Austria')",
        "('Netherlands', 'https://military-doctrine.vercel.app/country?country=Netherlands')",
        "('Denmark', 'https://military-doctrine.vercel.app/country?country=Denmark')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Skyranger 30 combines a 30 mm programmable-airburst cannon, radar, electro-optics and optional short-range missiles for current drone and low-altitude threats.",
      "performance": {
        "maxEngagementRangeKm": 3,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Turret",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "AMMR 3D AESA Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "FIRST Infrared Search & Track",
          "TREO Electro-Optical Unit"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "30mm KCE Airburst & SkyKnight Missile",
        "guidanceMethod": "Command-to-Line-of-Sight (CLOS)",
        "warheadType": "AHEAD Airburst Submunitions"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Skynex C2 Network"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Rheinmetall Skyranger 30",
          "url": "https://www.rheinmetall.com/en/products/air-defence-systems/mobile-air-defence-skyranger",
          "publisher": "Rheinmetall Skyranger 30",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "skynex",
    "name": "Skynex",
    "officialDesignation": "Skynex Air Defence System",
    "commonName": "Skynex",
    "aliases": [
      "Skynex",
      "Skynex Air Defence System"
    ],
    "familyName": "Skynex Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Short Range (SHORAD)",
    "subcategory": "Mobile SHORAD",
    "rankInCategory": 2,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Switzerland",
    "originCountries": [
      "Switzerland",
      "Germany"
    ],
    "developerCountries": [
      "Switzerland",
      "Germany"
    ],
    "manufacturerCountries": [
      "Switzerland",
      "Germany"
    ],
    "operatorCountries": [
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')",
      "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')"
    ],
    "developer": "Rheinmetall Air Defence",
    "manufacturer": "Rheinmetall Air Defence",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "skynex",
      "air-defence-shorad",
      "mobile shorad"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Skynex is a networked gun-based air-defence architecture optimized for drones and other close-range threats with programmable ammunition.",
    "fullOverview": "Skynex is a networked gun-based air-defence architecture optimized for drones and other close-range threats with programmable ammunition.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Rheinmetall Skynex",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.7,
      "technology": 4.8,
      "logistics": 4.7,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "Rheinmetall Air Defence",
      "primaryRole": "Networked Very Short-Range Gun Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Vehicle/battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Search radar",
        "Tracking radar",
        "EO/IR sensors",
        "Networked command post"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Rheinmetall Skynex",
        "url": "https://www.rheinmetall.com/",
        "publisher": "Rheinmetall Skynex",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "skynex",
      "name": "Skynex",
      "officialDesignation": "Skynex Air Defence System",
      "alternateNames": [
        "Skynex",
        "Skynex Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile SHORAD",
      "airDefenceCategory": "SHORAD",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "Switzerland",
      "manufacturer": "Rheinmetall Air Defence",
      "operator": [
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')",
        "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Skynex is a networked gun-based air-defence architecture optimized for drones and other close-range threats with programmable ammunition.",
      "performance": {
        "maxEngagementRangeKm": 3,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Containerized Box",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "X-TAR3D Tactical Surveillance Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Oerlikon MSP500 Sensor Unit",
          "Thermal Sight"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "35mm Oerlikon Revolver Gun & Halcon Missile",
        "guidanceMethod": "Command-to-Line-of-Sight (CLOS)",
        "warheadType": "AHEAD Airburst Submunitions"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Skynex Command System"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Rheinmetall Skynex",
          "url": "https://www.rheinmetall.com/",
          "publisher": "Rheinmetall Skynex",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "m-shorad",
    "name": "M-SHORAD",
    "officialDesignation": "Maneuver-Short Range Air Defense System",
    "commonName": "M-SHORAD",
    "aliases": [
      "M-SHORAD",
      "Maneuver-Short Range Air Defense System"
    ],
    "familyName": "M-SHORAD Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Short Range (SHORAD)",
    "subcategory": "Mobile SHORAD",
    "rankInCategory": 3,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')"
    ],
    "developer": "Leonardo DRS / General Dynamics",
    "manufacturer": "Leonardo DRS / General Dynamics",
    "dataConfidence": "VERIFIED",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "m-shorad",
      "air-defence-shorad",
      "mobile shorad"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "M-SHORAD integrates radar, electronic warfare, cannon and missile effectors on a highly mobile Stryker-based platform for manoeuvre-force protection.",
    "fullOverview": "M-SHORAD integrates radar, electronic warfare, cannon and missile effectors on a highly mobile Stryker-based platform for manoeuvre-force protection.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "U.S. Army M-SHORAD",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.7,
      "costEfficiency": 4.6,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2021",
      "crew": "Battery / system operators",
      "manufacturer": "Leonardo DRS / General Dynamics",
      "primaryRole": "Mobile Maneuver Short-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "10",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Stryker-based system",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Air-defence radar",
        "EO/IR sight",
        "FAAD C2 networking"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "U.S. Army M-SHORAD",
        "url": "https://www.army.mil/",
        "publisher": "U.S. Army M-SHORAD",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "m-shorad",
      "name": "M-SHORAD",
      "officialDesignation": "Maneuver-Short Range Air Defense System",
      "alternateNames": [
        "M-SHORAD",
        "Maneuver-Short Range Air Defense System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile SHORAD",
      "airDefenceCategory": "SHORAD",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "United States",
      "manufacturer": "Leonardo DRS / General Dynamics",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "M-SHORAD integrates radar, electronic warfare, cannon and missile effectors on a highly mobile Stryker-based platform for manoeuvre-force protection.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Turret",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Leonardo Multi-Mission Hemispheric Radar (MHR)",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "MX-GCS Electro-Optical Sight",
          "Thermal Sight"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "FIM-92 Stinger & Longbow Hellfire",
        "guidanceMethod": "Infrared Homing (IR/UV)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "FAAD C2",
          "Link 16"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "U.S. Army M-SHORAD",
          "url": "https://www.army.mil/",
          "publisher": "U.S. Army M-SHORAD",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "pantsir-sm",
    "name": "Pantsir-SM",
    "officialDesignation": "Pantsir-SM Air Defence Gun-Missile System",
    "commonName": "Pantsir-SM",
    "aliases": [
      "Pantsir-SM",
      "Pantsir-SM Air Defence Gun-Missile System"
    ],
    "familyName": "Pantsir-SM Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Short Range (SHORAD)",
    "subcategory": "Mobile SHORAD",
    "rankInCategory": 4,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')"
    ],
    "developer": "KBP / High Precision Systems",
    "manufacturer": "KBP / High Precision Systems",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "pantsir-sm",
      "air-defence-shorad",
      "mobile shorad"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Pantsir-SM is a modernized Pantsir family configuration intended to improve detection, engagement range and performance against small airborne threats.",
    "fullOverview": "Pantsir-SM is a modernized Pantsir family configuration intended to improve detection, engagement range and performance against small airborne threats.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Russian defence-industry public information",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.7,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "KBP / High Precision Systems",
      "primaryRole": "Mobile Short-Range Gun-and-Missile Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "30",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Wheeled vehicle configuration",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Phased/modernized search radar",
        "Engagement radar",
        "EO/IR channel"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Russian defence-industry public information",
        "url": "https://roe.ru/",
        "publisher": "Russian defence-industry public information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "pantsir-sm",
      "name": "Pantsir-SM",
      "officialDesignation": "Pantsir-SM Air Defence Gun-Missile System",
      "alternateNames": [
        "Pantsir-SM",
        "Pantsir-SM Air Defence Gun-Missile System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile SHORAD",
      "airDefenceCategory": "SHORAD",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "Russia",
      "manufacturer": "KBP / High Precision Systems",
      "operator": [
        "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Pantsir-SM is a modernized Pantsir family configuration intended to improve detection, engagement range and performance against small airborne threats.",
      "performance": {
        "maxEngagementRangeKm": 30,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Turret",
        "readyToFirePerLauncher": 12,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "1RS3 Phased Array Target Tracking Radar",
        "radarArchitecture": "PESA",
        "opticalTrackingChannels": [
          "Thermal Imaging Sight",
          "Laser Rangefinder",
          "Auto Tracker"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "57E6-E / 23Ya6 Interceptor",
        "guidanceMethod": "Command-to-Line-of-Sight (CLOS)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Polana-D4M C2 Link"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Russian defence-industry public information",
          "url": "https://roe.ru/",
          "publisher": "Russian defence-industry public information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "tor-m2",
    "name": "Tor-M2",
    "officialDesignation": "9K332 Tor-M2 Air Defence Missile System",
    "commonName": "Tor-M2",
    "aliases": [
      "Tor-M2",
      "9K332 Tor-M2 Air Defence Missile System"
    ],
    "familyName": "Tor-M2 Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Short Range (SHORAD)",
    "subcategory": "Mobile SHORAD",
    "rankInCategory": 5,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')",
      "('Belarus', 'https://military-doctrine.vercel.app/country?country=Belarus')",
      "('Egypt', 'https://military-doctrine.vercel.app/country?country=Egypt')",
      "('Greece', 'https://military-doctrine.vercel.app/country?country=Greece')"
    ],
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "tor-m2",
      "air-defence-shorad",
      "mobile shorad"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "Tor-M2 is an autonomous mobile point-defence system with vertical-launch missiles and an integrated phased-array radar suite.",
    "fullOverview": "Tor-M2 is an autonomous mobile point-defence system with vertical-launch missiles and an integrated phased-array radar suite.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Almaz-Antey Tor Product Information",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.6,
      "technology": 4.7,
      "logistics": 4.6,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "2009 (current generation in service)",
      "crew": "Battery / system operators",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "Mobile Point Short-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "15",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Tracked carrier",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Phased-array surveillance radar",
        "Engagement radar",
        "EO channel"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey Tor Product Information",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey Tor Product Information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "tor-m2",
      "name": "Tor-M2",
      "officialDesignation": "9K332 Tor-M2 Air Defence Missile System",
      "alternateNames": [
        "Tor-M2",
        "9K332 Tor-M2 Air Defence Missile System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile SHORAD",
      "airDefenceCategory": "SHORAD",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "Russia",
      "manufacturer": "Almaz-Antey",
      "operator": [
        "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')",
        "('Belarus', 'https://military-doctrine.vercel.app/country?country=Belarus')",
        "('Egypt', 'https://military-doctrine.vercel.app/country?country=Egypt')",
        "('Greece', 'https://military-doctrine.vercel.app/country?country=Greece')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "Tor-M2 is an autonomous mobile point-defence system with vertical-launch missiles and an integrated phased-array radar suite.",
      "performance": {
        "maxEngagementRangeKm": 15,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "VLS",
        "readyToFirePerLauncher": 16,
        "mobility": "Tracked"
      },
      "radarAndSensors": {
        "integratedRadarModel": "9S36 Phased Array Tracking Radar",
        "radarArchitecture": "PESA",
        "opticalTrackingChannels": [
          "TV/Optical Tracking System",
          "Thermal Sight"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "9M338 Interceptor Missile",
        "guidanceMethod": "Command-to-Line-of-Sight (CLOS)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Barnaul-T C2 Network"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Almaz-Antey Tor Product Information",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey Tor Product Information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "korkut",
    "name": "KORKUT",
    "officialDesignation": "KORKUT Self-Propelled Air Defence System",
    "commonName": "KORKUT",
    "aliases": [
      "KORKUT",
      "KORKUT Self-Propelled Air Defence System"
    ],
    "familyName": "KORKUT Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Short Range (SHORAD)",
    "subcategory": "Mobile SHORAD",
    "rankInCategory": 6,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Türkiye",
    "originCountries": [
      "Türkiye"
    ],
    "developerCountries": [
      "Türkiye"
    ],
    "manufacturerCountries": [
      "Türkiye"
    ],
    "operatorCountries": [
      "('Türkiye', 'https://military-doctrine.vercel.app/country?country=T%C3%BCrkiye')"
    ],
    "developer": "ASELSAN / FNSS",
    "manufacturer": "ASELSAN / FNSS",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "korkut",
      "air-defence-shorad",
      "mobile shorad"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "KORKUT uses twin 35 mm guns with programmable ammunition and networked fire control to protect mechanized formations against low-altitude threats.",
    "fullOverview": "KORKUT uses twin 35 mm guns with programmable ammunition and networked fire control to protect mechanized formations against low-altitude threats.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "ASELSAN KORKUT",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.6,
      "survivability": 4.5,
      "rangeMobility": 4.6,
      "precision": 4.6,
      "technology": 4.6,
      "logistics": 4.6,
      "costEfficiency": 4.5,
      "combatMaturity": 4.7,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "2019",
      "crew": "Battery / system operators",
      "manufacturer": "ASELSAN / FNSS",
      "primaryRole": "Tracked Gun-Based SHORAD",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "4",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Tracked carrier",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Fire-control radar",
        "EO/IR tracker",
        "Networked air-defence C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "ASELSAN KORKUT",
        "url": "https://www.aselsan.com/",
        "publisher": "ASELSAN KORKUT",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "korkut",
      "name": "KORKUT",
      "officialDesignation": "KORKUT Self-Propelled Air Defence System",
      "alternateNames": [
        "KORKUT",
        "KORKUT Self-Propelled Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile SHORAD",
      "airDefenceCategory": "SHORAD",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "Türkiye",
      "manufacturer": "ASELSAN / FNSS",
      "operator": [
        "('Türkiye', 'https://military-doctrine.vercel.app/country?country=T%C3%BCrkiye')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "KORKUT uses twin 35 mm guns with programmable ammunition and networked fire control to protect mechanized formations against low-altitude threats.",
      "performance": {
        "maxEngagementRangeKm": 4,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Turret",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "ASELSAN / FNSS Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "KORKUT Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "ASELSAN KORKUT",
          "url": "https://www.aselsan.com/",
          "publisher": "ASELSAN KORKUT",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "iris-t-sls",
    "name": "IRIS-T SLS",
    "officialDesignation": "IRIS-T SLS Ground-Based Short-Range Air Defence",
    "commonName": "IRIS-T SLS",
    "aliases": [
      "IRIS-T SLS",
      "IRIS-T SLS Ground-Based Short-Range Air Defence"
    ],
    "familyName": "IRIS-T SLS Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Short Range (SHORAD)",
    "subcategory": "Mobile SHORAD",
    "rankInCategory": 7,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
    ],
    "developer": "Diehl Defence",
    "manufacturer": "Diehl Defence",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "iris-t sls",
      "air-defence-shorad",
      "mobile shorad"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "IRIS-T SLS is a mobile short-range configuration of the IRIS-T family intended for aircraft, helicopters, cruise missiles and UAVs.",
    "fullOverview": "IRIS-T SLS is a mobile short-range configuration of the IRIS-T family intended for aircraft, helicopters, cruise missiles and UAVs.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Diehl Defence IRIS-T SL",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.6,
      "survivability": 4.5,
      "rangeMobility": 4.6,
      "precision": 4.6,
      "technology": 4.6,
      "logistics": 4.6,
      "costEfficiency": 4.5,
      "combatMaturity": 4.6,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "2022",
      "crew": "Battery / system operators",
      "manufacturer": "Diehl Defence",
      "primaryRole": "Mobile Short-Range Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "12",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Launcher configuration dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "TRML-4D / associated radar",
        "IRIS-T imaging infrared seeker",
        "Networked C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Diehl Defence IRIS-T SL",
        "url": "https://www.diehl.com/defence/en/",
        "publisher": "Diehl Defence IRIS-T SL",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "iris-t-sls",
      "name": "IRIS-T SLS",
      "officialDesignation": "IRIS-T SLS Ground-Based Short-Range Air Defence",
      "alternateNames": [
        "IRIS-T SLS",
        "IRIS-T SLS Ground-Based Short-Range Air Defence"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile SHORAD",
      "airDefenceCategory": "SHORAD",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "Germany",
      "manufacturer": "Diehl Defence",
      "operator": [
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "IRIS-T SLS is a mobile short-range configuration of the IRIS-T family intended for aircraft, helicopters, cruise missiles and UAVs.",
      "performance": {
        "maxEngagementRangeKm": 12,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Turret",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Diehl Defence Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "IRIS-T SLS Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Diehl Defence IRIS-T SL",
          "url": "https://www.diehl.com/defence/en/",
          "publisher": "Diehl Defence IRIS-T SL",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "sky-sabre",
    "name": "Sky Sabre",
    "officialDesignation": "Sky Sabre Ground-Based Air Defence System",
    "commonName": "Sky Sabre",
    "aliases": [
      "Sky Sabre",
      "Sky Sabre Ground-Based Air Defence System"
    ],
    "familyName": "Sky Sabre Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Short Range (SHORAD)",
    "subcategory": "Mobile SHORAD",
    "rankInCategory": 8,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United Kingdom', 'https://military-doctrine.vercel.app/country?country=United%20Kingdom')"
    ],
    "developer": "MBDA UK / Saab / Leonardo",
    "manufacturer": "MBDA UK / Saab / Leonardo",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "sky sabre",
      "air-defence-shorad",
      "mobile shorad"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Sky Sabre is a current UK ground-based air-defence system centered on the CAMM missile and a distributed sensor/C2 network.",
    "fullOverview": "Sky Sabre is a current UK ground-based air-defence system centered on the CAMM missile and a distributed sensor/C2 network.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "British Army / MBDA CAMM",
    "ratings": {
      "capability": 4.5,
      "offensive": 4.4,
      "defensive": 4.6,
      "reliability": 4.5,
      "maintainability": 4.6,
      "survivability": 4.5,
      "rangeMobility": 4.6,
      "precision": 4.6,
      "technology": 4.6,
      "logistics": 4.5,
      "costEfficiency": 4.5,
      "combatMaturity": 4.6,
      "upgradePotential": 4.6
    },
    "specs": {
      "entryIntoService": "2021",
      "crew": "Battery / system operators",
      "manufacturer": "MBDA UK / Saab / Leonardo",
      "primaryRole": "Networked Short-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "25",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Giraffe radar",
        "Land Ceptor C2",
        "Electro-optical sensors"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "British Army / MBDA CAMM",
        "url": "https://www.mbda-systems.com/",
        "publisher": "British Army / MBDA CAMM",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "sky-sabre",
      "name": "Sky Sabre",
      "officialDesignation": "Sky Sabre Ground-Based Air Defence System",
      "alternateNames": [
        "Sky Sabre",
        "Sky Sabre Ground-Based Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile SHORAD",
      "airDefenceCategory": "SHORAD",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "United Kingdom",
      "manufacturer": "MBDA UK / Saab / Leonardo",
      "operator": [
        "('United Kingdom', 'https://military-doctrine.vercel.app/country?country=United%20Kingdom')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Sky Sabre is a current UK ground-based air-defence system centered on the CAMM missile and a distributed sensor/C2 network.",
      "performance": {
        "maxEngagementRangeKm": 25,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Turret",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "MBDA UK / Saab / Leonardo Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Sky Sabre Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "British Army / MBDA CAMM",
          "url": "https://www.mbda-systems.com/",
          "publisher": "British Army / MBDA CAMM",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "skyranger-35",
    "name": "Skyranger 35",
    "officialDesignation": "Skyranger 35 Mobile Air Defence System",
    "commonName": "Skyranger 35",
    "aliases": [
      "Skyranger 35",
      "Skyranger 35 Mobile Air Defence System"
    ],
    "familyName": "Skyranger 35 Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Short Range (SHORAD)",
    "subcategory": "Mobile SHORAD",
    "rankInCategory": 9,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')",
      "('Denmark (procurement/program)', 'https://military-doctrine.vercel.app/country?country=Denmark%20%28procurement/program%29')"
    ],
    "developer": "Rheinmetall",
    "manufacturer": "Rheinmetall",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "skyranger 35",
      "air-defence-shorad",
      "mobile shorad"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Skyranger 35 uses a 35 mm AHEAD-capable cannon and integrated sensors for short-range defence against drones, aircraft and cruise-missile-class threats.",
    "fullOverview": "Skyranger 35 uses a 35 mm AHEAD-capable cannon and integrated sensors for short-range defence against drones, aircraft and cruise-missile-class threats.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Rheinmetall Skyranger 35",
    "ratings": {
      "capability": 4.5,
      "offensive": 4.4,
      "defensive": 4.6,
      "reliability": 4.5,
      "maintainability": 4.6,
      "survivability": 4.5,
      "rangeMobility": 4.5,
      "precision": 4.5,
      "technology": 4.6,
      "logistics": 4.5,
      "costEfficiency": 4.5,
      "combatMaturity": 4.6,
      "upgradePotential": 4.6
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "Rheinmetall",
      "primaryRole": "Mobile 35 mm Short-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "4",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Carrier dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Search radar",
        "Tracking radar",
        "Electro-optical sensors"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Rheinmetall Skyranger 35",
        "url": "https://www.rheinmetall.com/",
        "publisher": "Rheinmetall Skyranger 35",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "skyranger-35",
      "name": "Skyranger 35",
      "officialDesignation": "Skyranger 35 Mobile Air Defence System",
      "alternateNames": [
        "Skyranger 35",
        "Skyranger 35 Mobile Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile SHORAD",
      "airDefenceCategory": "SHORAD",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "Germany",
      "manufacturer": "Rheinmetall",
      "operator": [
        "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')",
        "('Denmark (procurement/program)', 'https://military-doctrine.vercel.app/country?country=Denmark%20%28procurement/program%29')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Skyranger 35 uses a 35 mm AHEAD-capable cannon and integrated sensors for short-range defence against drones, aircraft and cruise-missile-class threats.",
      "performance": {
        "maxEngagementRangeKm": 4,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Turret",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Rheinmetall Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Skyranger 35 Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Rheinmetall Skyranger 35",
          "url": "https://www.rheinmetall.com/",
          "publisher": "Rheinmetall Skyranger 35",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "avenger",
    "name": "Avenger",
    "officialDesignation": "AN/TWQ-1 Avenger Modernized",
    "commonName": "Avenger",
    "aliases": [
      "Avenger",
      "AN/TWQ-1 Avenger Modernized"
    ],
    "familyName": "Avenger Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Short Range (SHORAD)",
    "subcategory": "Mobile SHORAD",
    "rankInCategory": 10,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')"
    ],
    "developer": "Boeing / U.S. Army",
    "manufacturer": "Boeing / U.S. Army",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "avenger",
      "air-defence-shorad",
      "mobile shorad"
    ],
    "era": "Cold War / Modernized (1970-1991)",
    "shortDescription": "Avenger remains a deployable mobile Stinger launcher with electro-optical target acquisition and a machine-gun self-defence weapon.",
    "fullOverview": "Avenger remains a deployable mobile Stinger launcher with electro-optical target acquisition and a machine-gun self-defence weapon.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "U.S. Army Air Defence Information",
    "ratings": {
      "capability": 4.5,
      "offensive": 4.4,
      "defensive": 4.6,
      "reliability": 4.5,
      "maintainability": 4.5,
      "survivability": 4.4,
      "rangeMobility": 4.5,
      "precision": 4.5,
      "technology": 4.5,
      "logistics": 4.5,
      "costEfficiency": 4.4,
      "combatMaturity": 4.5,
      "upgradePotential": 4.6
    },
    "specs": {
      "entryIntoService": "1989 (modernized current configurations)",
      "crew": "Battery / system operators",
      "manufacturer": "Boeing / U.S. Army",
      "primaryRole": "Mobile Stinger Short-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "8",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "HMMWV-based",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Forward-looking infrared",
        "Laser rangefinder",
        "Optical tracker"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "U.S. Army Air Defence Information",
        "url": "https://www.army.mil/",
        "publisher": "U.S. Army Air Defence Information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "avenger",
      "name": "Avenger",
      "officialDesignation": "AN/TWQ-1 Avenger Modernized",
      "alternateNames": [
        "Avenger",
        "AN/TWQ-1 Avenger Modernized"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile SHORAD",
      "airDefenceCategory": "SHORAD",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "United States",
      "manufacturer": "Boeing / U.S. Army",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Cold War / Modernized (1970-1991)",
      "description": "Avenger remains a deployable mobile Stinger launcher with electro-optical target acquisition and a machine-gun self-defence weapon.",
      "performance": {
        "maxEngagementRangeKm": 8,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Turret",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Boeing / U.S. Army Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Avenger Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "U.S. Army Air Defence Information",
          "url": "https://www.army.mil/",
          "publisher": "U.S. Army Air Defence Information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "iris-t-slm",
    "name": "IRIS-T SLM",
    "officialDesignation": "IRIS-T SLM Medium-Range Ground-Based Air Defence",
    "commonName": "IRIS-T SLM",
    "aliases": [
      "IRIS-T SLM",
      "IRIS-T SLM Medium-Range Ground-Based Air Defence"
    ],
    "familyName": "IRIS-T SLM Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 1,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
    ],
    "developer": "Diehl Defence",
    "manufacturer": "Diehl Defence",
    "dataConfidence": "VERIFIED",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "iris-t slm",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "IRIS-T SLM provides networked medium-range defence using the IRIS-T SL interceptor and modern AESA radar, with strong performance against cruise missiles and UAVs.",
    "fullOverview": "IRIS-T SLM provides networked medium-range defence using the IRIS-T SL interceptor and modern AESA radar, with strong performance against cruise missiles and UAVs.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Diehl Defence IRIS-T SL",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.8,
      "survivability": 4.8,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.8,
      "costEfficiency": 4.8,
      "combatMaturity": 4.9,
      "upgradePotential": 4.9
    },
    "specs": {
      "entryIntoService": "2022",
      "crew": "Battery / system operators",
      "manufacturer": "Diehl Defence",
      "primaryRole": "Medium-Range Networked Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "40",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "TRML-4D AESA radar",
        "IRIS-T imaging infrared seeker",
        "Integrated C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Diehl Defence IRIS-T SL",
        "url": "https://www.diehl.com/defence/en/",
        "publisher": "Diehl Defence IRIS-T SL",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "iris-t-slm",
      "name": "IRIS-T SLM",
      "officialDesignation": "IRIS-T SLM Medium-Range Ground-Based Air Defence",
      "alternateNames": [
        "IRIS-T SLM",
        "IRIS-T SLM Medium-Range Ground-Based Air Defence"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "Germany",
      "manufacturer": "Diehl Defence",
      "operator": [
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "IRIS-T SLM provides networked medium-range defence using the IRIS-T SL interceptor and modern AESA radar, with strong performance against cruise missiles and UAVs.",
      "performance": {
        "maxEngagementRangeKm": 40,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 8,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Hensoldt TRML-4D 3D AESA Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Infrared & Optical Command Center Sight"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "IRIS-T SL Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "IBCS Compatible"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Diehl Defence IRIS-T SL",
          "url": "https://www.diehl.com/defence/en/",
          "publisher": "Diehl Defence IRIS-T SL",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "nasams-3",
    "name": "NASAMS 3",
    "officialDesignation": "National Advanced Surface-to-Air Missile System 3",
    "commonName": "NASAMS 3",
    "aliases": [
      "NASAMS 3",
      "National Advanced Surface-to-Air Missile System 3"
    ],
    "familyName": "NASAMS 3 Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 2,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Norway",
    "originCountries": [
      "Norway",
      "United States"
    ],
    "developerCountries": [
      "Norway",
      "United States"
    ],
    "manufacturerCountries": [
      "Norway",
      "United States"
    ],
    "operatorCountries": [
      "('Norway', 'https://military-doctrine.vercel.app/country?country=Norway')",
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')",
      "('Australia', 'https://military-doctrine.vercel.app/country?country=Australia')",
      "('Finland', 'https://military-doctrine.vercel.app/country?country=Finland')",
      "('Netherlands', 'https://military-doctrine.vercel.app/country?country=Netherlands')",
      "('Spain', 'https://military-doctrine.vercel.app/country?country=Spain')",
      "('Lithuania', 'https://military-doctrine.vercel.app/country?country=Lithuania')",
      "('Indonesia', 'https://military-doctrine.vercel.app/country?country=Indonesia')"
    ],
    "developer": "Kongsberg / Raytheon",
    "manufacturer": "Kongsberg / Raytheon",
    "dataConfidence": "VERIFIED",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "nasams 3",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "NASAMS 3 is an open-architecture distributed air-defence system using multiple interceptor options and networked sensors.",
    "fullOverview": "NASAMS 3 is an open-architecture distributed air-defence system using multiple interceptor options and networked sensors.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Kongsberg NASAMS",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.8,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2019",
      "crew": "Battery / system operators",
      "manufacturer": "Kongsberg / Raytheon",
      "primaryRole": "Networked Medium-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "50",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Launcher/battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Sentinel-family 3D radar",
        "Fire Distribution Center",
        "Distributed EO/IR sensors"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Kongsberg NASAMS",
        "url": "https://www.kongsberg.com/",
        "publisher": "Kongsberg NASAMS",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "nasams-3",
      "name": "NASAMS 3",
      "officialDesignation": "National Advanced Surface-to-Air Missile System 3",
      "alternateNames": [
        "NASAMS 3",
        "National Advanced Surface-to-Air Missile System 3"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "Norway",
      "manufacturer": "Kongsberg / Raytheon",
      "operator": [
        "('Norway', 'https://military-doctrine.vercel.app/country?country=Norway')",
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')",
        "('Australia', 'https://military-doctrine.vercel.app/country?country=Australia')",
        "('Finland', 'https://military-doctrine.vercel.app/country?country=Finland')",
        "('Netherlands', 'https://military-doctrine.vercel.app/country?country=Netherlands')",
        "('Spain', 'https://military-doctrine.vercel.app/country?country=Spain')",
        "('Lithuania', 'https://military-doctrine.vercel.app/country?country=Lithuania')",
        "('Indonesia', 'https://military-doctrine.vercel.app/country?country=Indonesia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "NASAMS 3 is an open-architecture distributed air-defence system using multiple interceptor options and networked sensors.",
      "performance": {
        "maxEngagementRangeKm": 50,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 6,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Raytheon MPQ-64F1 Sentinel 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "MSP500 Electro-Optical Sensor Unit"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "AIM-120D AMRAAM / AMRAAM-ER",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Link 11",
          "JREAP-C"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Kongsberg NASAMS",
          "url": "https://www.kongsberg.com/",
          "publisher": "Kongsberg NASAMS",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "barak-mx",
    "name": "Barak MX",
    "officialDesignation": "Barak MX Integrated Air Defence System",
    "commonName": "Barak MX",
    "aliases": [
      "Barak MX",
      "Barak MX Integrated Air Defence System"
    ],
    "familyName": "Barak MX Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 3,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Israel",
    "originCountries": [
      "Israel",
      "India"
    ],
    "developerCountries": [
      "Israel",
      "India"
    ],
    "manufacturerCountries": [
      "Israel",
      "India"
    ],
    "operatorCountries": [
      "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
      "('India', 'https://military-doctrine.vercel.app/country?country=India')",
      "('Azerbaijan', 'https://military-doctrine.vercel.app/country?country=Azerbaijan')",
      "('Morocco', 'https://military-doctrine.vercel.app/country?country=Morocco')"
    ],
    "developer": "Israel Aerospace Industries",
    "manufacturer": "Israel Aerospace Industries",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "barak mx",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Barak MX is a modular networked air-defence architecture integrating several Barak interceptor layers under a common command system.",
    "fullOverview": "Barak MX is a modular networked air-defence architecture integrating several Barak interceptor layers under a common command system.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "IAI Barak MX",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.7,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2017",
      "crew": "Battery / system operators",
      "manufacturer": "Israel Aerospace Industries",
      "primaryRole": "Layered Medium-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "150",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Multi-mission radar",
        "EO/IR sensors",
        "Networked battle management"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "IAI Barak MX",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI Barak MX",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "barak-mx",
      "name": "Barak MX",
      "officialDesignation": "Barak MX Integrated Air Defence System",
      "alternateNames": [
        "Barak MX",
        "Barak MX Integrated Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "Israel",
      "manufacturer": "Israel Aerospace Industries",
      "operator": [
        "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
        "('India', 'https://military-doctrine.vercel.app/country?country=India')",
        "('Azerbaijan', 'https://military-doctrine.vercel.app/country?country=Azerbaijan')",
        "('Morocco', 'https://military-doctrine.vercel.app/country?country=Morocco')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Barak MX is a modular networked air-defence architecture integrating several Barak interceptor layers under a common command system.",
      "performance": {
        "maxEngagementRangeKm": 150,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 8,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "IAI ELM-2084 Multi-Mission Radar (MMR)",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "EO/IR Target Cueing Suite"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Barak MRAD / LRAD Missile",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "IAI BMC C2 Link",
          "Link 16"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "IAI Barak MX",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI Barak MX",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "samp-t",
    "name": "SAMP/T",
    "officialDesignation": "SAMP/T ASTER 30 Ground-Based Air Defence",
    "commonName": "SAMP/T",
    "aliases": [
      "SAMP/T",
      "SAMP/T ASTER 30 Ground-Based Air Defence"
    ],
    "familyName": "SAMP/T Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 4,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "France",
    "originCountries": [
      "France",
      "Italy"
    ],
    "developerCountries": [
      "France",
      "Italy"
    ],
    "manufacturerCountries": [
      "France",
      "Italy"
    ],
    "operatorCountries": [
      "('France', 'https://military-doctrine.vercel.app/country?country=France')",
      "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')",
      "('Singapore', 'https://military-doctrine.vercel.app/country?country=Singapore')"
    ],
    "developer": "Eurosam / MBDA / Thales",
    "manufacturer": "Eurosam / MBDA / Thales",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "samp/t",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "SAMP/T combines vertically launched Aster 30 interceptors with multifunction radar and an integrated battle-management system.",
    "fullOverview": "SAMP/T combines vertically launched Aster 30 interceptors with multifunction radar and an integrated battle-management system.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "MBDA Aster / SAMP/T",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.8,
      "logistics": 4.7,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2011",
      "crew": "Battery / system operators",
      "manufacturer": "Eurosam / MBDA / Thales",
      "primaryRole": "Medium-to-Long Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "120",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Arabel / Ground Fire radar family",
        "Integrated command system"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "MBDA Aster / SAMP/T",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA Aster / SAMP/T",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "samp-t",
      "name": "SAMP/T",
      "officialDesignation": "SAMP/T ASTER 30 Ground-Based Air Defence",
      "alternateNames": [
        "SAMP/T",
        "SAMP/T ASTER 30 Ground-Based Air Defence"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "France",
      "manufacturer": "Eurosam / MBDA / Thales",
      "operator": [
        "('France', 'https://military-doctrine.vercel.app/country?country=France')",
        "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')",
        "('Singapore', 'https://military-doctrine.vercel.app/country?country=Singapore')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "SAMP/T combines vertically launched Aster 30 interceptors with multifunction radar and an integrated battle-management system.",
      "performance": {
        "maxEngagementRangeKm": 120,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "VLS",
        "readyToFirePerLauncher": 8,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Thales Arabel 3D Phased Array Radar",
        "radarArchitecture": "PESA",
        "opticalTrackingChannels": [
          "Optronic Targeting System"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Aster 15 / Aster 30",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Link 11"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "MBDA Aster / SAMP/T",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA Aster / SAMP/T",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "km-sam-block-ii",
    "name": "KM-SAM Block II",
    "officialDesignation": "Cheongung-II Medium-Range Surface-to-Air Missile System",
    "commonName": "KM-SAM Block II",
    "aliases": [
      "KM-SAM Block II",
      "Cheongung-II Medium-Range Surface-to-Air Missile System"
    ],
    "familyName": "KM-SAM Block II Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 5,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
      "('United Arab Emirates', 'https://military-doctrine.vercel.app/country?country=United%20Arab%20Emirates')",
      "('Saudi Arabia', 'https://military-doctrine.vercel.app/country?country=Saudi%20Arabia')"
    ],
    "developer": "LIG Nex1 / Hanwha Systems",
    "manufacturer": "LIG Nex1 / Hanwha Systems",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "km-sam block ii",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "KM-SAM Block II is a modern Korean interceptor system using active radar guidance and hit-to-kill technology against aerodynamic and selected ballistic threats.",
    "fullOverview": "KM-SAM Block II is a modern Korean interceptor system using active radar guidance and hit-to-kill technology against aerodynamic and selected ballistic threats.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "LIG Nex1 KM-SAM",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.7,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2020",
      "crew": "Battery / system operators",
      "manufacturer": "LIG Nex1 / Hanwha Systems",
      "primaryRole": "Medium-Range Air and Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "40",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Multifunction phased-array radar",
        "Active radar seeker",
        "Integrated C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "LIG Nex1 KM-SAM",
        "url": "https://www.lignex1.com/",
        "publisher": "LIG Nex1 KM-SAM",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "km-sam-block-ii",
      "name": "KM-SAM Block II",
      "officialDesignation": "Cheongung-II Medium-Range Surface-to-Air Missile System",
      "alternateNames": [
        "KM-SAM Block II",
        "Cheongung-II Medium-Range Surface-to-Air Missile System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "South Korea",
      "manufacturer": "LIG Nex1 / Hanwha Systems",
      "operator": [
        "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
        "('United Arab Emirates', 'https://military-doctrine.vercel.app/country?country=United%20Arab%20Emirates')",
        "('Saudi Arabia', 'https://military-doctrine.vercel.app/country?country=Saudi%20Arabia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "KM-SAM Block II is a modern Korean interceptor system using active radar guidance and hit-to-kill technology against aerodynamic and selected ballistic threats.",
      "performance": {
        "maxEngagementRangeKm": 40,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "LIG Nex1 / Hanwha Systems Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "KM-SAM Block II Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "LIG Nex1 KM-SAM",
          "url": "https://www.lignex1.com/",
          "publisher": "LIG Nex1 KM-SAM",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "spyder-mr",
    "name": "SPYDER-MR",
    "officialDesignation": "SPYDER Medium-Range Air Defence System",
    "commonName": "SPYDER-MR",
    "aliases": [
      "SPYDER-MR",
      "SPYDER Medium-Range Air Defence System"
    ],
    "familyName": "SPYDER-MR Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 6,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Singapore', 'https://military-doctrine.vercel.app/country?country=Singapore')",
      "('India', 'https://military-doctrine.vercel.app/country?country=India')",
      "('Czech Republic', 'https://military-doctrine.vercel.app/country?country=Czech%20Republic')",
      "('Philippines', 'https://military-doctrine.vercel.app/country?country=Philippines')"
    ],
    "developer": "Rafael / IAI",
    "manufacturer": "Rafael / IAI",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "spyder-mr",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "SPYDER-MR uses Python and Derby-family interceptors with rapid-response networked launchers and radar/EO cueing.",
    "fullOverview": "SPYDER-MR uses Python and Derby-family interceptors with rapid-response networked launchers and radar/EO cueing.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Rafael SPYDER",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.6,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "2008 (current family modernization)",
      "crew": "Battery / system operators",
      "manufacturer": "Rafael / IAI",
      "primaryRole": "Mobile Medium-Range Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "35",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Truck launcher dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Multifunction radar",
        "EO/IR sensors",
        "Networked fire control"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Rafael SPYDER",
        "url": "https://www.rafael.co.il/",
        "publisher": "Rafael SPYDER",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "spyder-mr",
      "name": "SPYDER-MR",
      "officialDesignation": "SPYDER Medium-Range Air Defence System",
      "alternateNames": [
        "SPYDER-MR",
        "SPYDER Medium-Range Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "Israel",
      "manufacturer": "Rafael / IAI",
      "operator": [
        "('Singapore', 'https://military-doctrine.vercel.app/country?country=Singapore')",
        "('India', 'https://military-doctrine.vercel.app/country?country=India')",
        "('Czech Republic', 'https://military-doctrine.vercel.app/country?country=Czech%20Republic')",
        "('Philippines', 'https://military-doctrine.vercel.app/country?country=Philippines')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "SPYDER-MR uses Python and Derby-family interceptors with rapid-response networked launchers and radar/EO cueing.",
      "performance": {
        "maxEngagementRangeKm": 35,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Rafael / IAI Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "SPYDER-MR Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Rafael SPYDER",
          "url": "https://www.rafael.co.il/",
          "publisher": "Rafael SPYDER",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "camm-er",
    "name": "CAMM-ER",
    "officialDesignation": "CAMM-ER Ground-Based Air Defence System",
    "commonName": "CAMM-ER",
    "aliases": [
      "CAMM-ER",
      "CAMM-ER Ground-Based Air Defence System"
    ],
    "familyName": "CAMM-ER Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 7,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "United Kingdom",
    "originCountries": [
      "United Kingdom",
      "Italy"
    ],
    "developerCountries": [
      "United Kingdom",
      "Italy"
    ],
    "manufacturerCountries": [
      "United Kingdom",
      "Italy"
    ],
    "operatorCountries": [
      "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')"
    ],
    "developer": "MBDA",
    "manufacturer": "MBDA",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "camm-er",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "CAMM-ER extends the CAMM family with greater reach while retaining active-radar terminal guidance and soft vertical launch.",
    "fullOverview": "CAMM-ER extends the CAMM family with greater reach while retaining active-radar terminal guidance and soft vertical launch.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "MBDA CAMM",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.6,
      "technology": 4.7,
      "logistics": 4.6,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "MBDA",
      "primaryRole": "Medium-Range Active-Radar Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "40",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Launcher dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "3D surveillance radar",
        "Active radar seeker",
        "Networked fire control"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "MBDA CAMM",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA CAMM",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "camm-er",
      "name": "CAMM-ER",
      "officialDesignation": "CAMM-ER Ground-Based Air Defence System",
      "alternateNames": [
        "CAMM-ER",
        "CAMM-ER Ground-Based Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "United Kingdom",
      "manufacturer": "MBDA",
      "operator": [
        "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "CAMM-ER extends the CAMM family with greater reach while retaining active-radar terminal guidance and soft vertical launch.",
      "performance": {
        "maxEngagementRangeKm": 40,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "MBDA Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "CAMM-ER Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "MBDA CAMM",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA CAMM",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "vl-mica-ng",
    "name": "VL MICA NG",
    "officialDesignation": "VL MICA NG Ground-Based Air Defence System",
    "commonName": "VL MICA NG",
    "aliases": [
      "VL MICA NG",
      "VL MICA NG Ground-Based Air Defence System"
    ],
    "familyName": "VL MICA NG Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 8,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('France (program)', 'https://military-doctrine.vercel.app/country?country=France%20%28program%29')",
      "('United Arab Emirates / export family', 'https://military-doctrine.vercel.app/country?country=United%20Arab%20Emirates%20/%20export%20family')"
    ],
    "developer": "MBDA",
    "manufacturer": "MBDA",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "vl mica ng",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "VL MICA NG is the next-generation ground-launched MICA family, designed for mobile defence against aircraft, cruise missiles and UAVs.",
    "fullOverview": "VL MICA NG is the next-generation ground-launched MICA family, designed for mobile defence against aircraft, cruise missiles and UAVs.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "MBDA VL MICA / MICA NG",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.6,
      "survivability": 4.5,
      "rangeMobility": 4.6,
      "precision": 4.6,
      "technology": 4.6,
      "logistics": 4.6,
      "costEfficiency": 4.5,
      "combatMaturity": 4.6,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "MBDA",
      "primaryRole": "Medium-Range Networked Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "40",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Launcher dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "MICA imaging-IR / active-radar seeker options",
        "Ground radar",
        "Tactical data link"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "MBDA VL MICA / MICA NG",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA VL MICA / MICA NG",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "vl-mica-ng",
      "name": "VL MICA NG",
      "officialDesignation": "VL MICA NG Ground-Based Air Defence System",
      "alternateNames": [
        "VL MICA NG",
        "VL MICA NG Ground-Based Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "France",
      "manufacturer": "MBDA",
      "operator": [
        "('France (program)', 'https://military-doctrine.vercel.app/country?country=France%20%28program%29')",
        "('United Arab Emirates / export family', 'https://military-doctrine.vercel.app/country?country=United%20Arab%20Emirates%20/%20export%20family')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "VL MICA NG is the next-generation ground-launched MICA family, designed for mobile defence against aircraft, cruise missiles and UAVs.",
      "performance": {
        "maxEngagementRangeKm": 40,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "MBDA Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "VL MICA NG Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "MBDA VL MICA / MICA NG",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA VL MICA / MICA NG",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "david-s-sling",
    "name": "David's Sling",
    "officialDesignation": "David's Sling Weapon System",
    "commonName": "David's Sling",
    "aliases": [
      "David's Sling",
      "David's Sling Weapon System"
    ],
    "familyName": "David's Sling Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 9,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Israel",
    "originCountries": [
      "Israel",
      "United States"
    ],
    "developerCountries": [
      "Israel",
      "United States"
    ],
    "manufacturerCountries": [
      "Israel",
      "United States"
    ],
    "operatorCountries": [
      "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
      "('Finland', 'https://military-doctrine.vercel.app/country?country=Finland')"
    ],
    "developer": "Rafael / RTX",
    "manufacturer": "Rafael / RTX",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "david's sling",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "David's Sling uses the Stunner interceptor as an upper-middle layer against ballistic and aerodynamic threats.",
    "fullOverview": "David's Sling uses the Stunner interceptor as an upper-middle layer against ballistic and aerodynamic threats.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Rafael David's Sling",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.6,
      "survivability": 4.5,
      "rangeMobility": 4.6,
      "precision": 4.6,
      "technology": 4.6,
      "logistics": 4.6,
      "costEfficiency": 4.5,
      "combatMaturity": 4.6,
      "upgradePotential": 4.6
    },
    "specs": {
      "entryIntoService": "2017",
      "crew": "Battery / system operators",
      "manufacturer": "Rafael / RTX",
      "primaryRole": "Upper-Middle Layer Air and Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "300",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "EL/M-2084 family radar",
        "Dual-mode Stunner seeker",
        "Networked battle management"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Rafael David's Sling",
        "url": "https://www.rafael.co.il/",
        "publisher": "Rafael David's Sling",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "david-s-sling",
      "name": "David's Sling",
      "officialDesignation": "David's Sling Weapon System",
      "alternateNames": [
        "David's Sling",
        "David's Sling Weapon System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "Israel",
      "manufacturer": "Rafael / RTX",
      "operator": [
        "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
        "('Finland', 'https://military-doctrine.vercel.app/country?country=Finland')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "David's Sling uses the Stunner interceptor as an upper-middle layer against ballistic and aerodynamic threats.",
      "performance": {
        "maxEngagementRangeKm": 300,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 12,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "ELM-2084 Active Electronically Scanned Array Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Dual IIR / Millimeter Wave Optical Seeker"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Stunner Two-Stage Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Golden Horizon C2 Link"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Rafael David's Sling",
          "url": "https://www.rafael.co.il/",
          "publisher": "Rafael David's Sling",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "buk-m3",
    "name": "Buk-M3",
    "officialDesignation": "9K317M Buk-M3 Medium-Range Air Defence",
    "commonName": "Buk-M3",
    "aliases": [
      "Buk-M3",
      "9K317M Buk-M3 Medium-Range Air Defence"
    ],
    "familyName": "Buk-M3 Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 10,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')"
    ],
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "buk-m3",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Buk-M3 is a current-generation tracked air-defence system with modernized missiles, radar and networked fire control.",
    "fullOverview": "Buk-M3 is a current-generation tracked air-defence system with modernized missiles, radar and networked fire control.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Almaz-Antey Buk Product Information",
    "ratings": {
      "capability": 4.5,
      "offensive": 4.4,
      "defensive": 4.6,
      "reliability": 4.5,
      "maintainability": 4.6,
      "survivability": 4.5,
      "rangeMobility": 4.6,
      "precision": 4.5,
      "technology": 4.6,
      "logistics": 4.5,
      "costEfficiency": 4.5,
      "combatMaturity": 4.6,
      "upgradePotential": 4.6
    },
    "specs": {
      "entryIntoService": "2016",
      "crew": "Battery / system operators",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "Mobile Medium-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "65",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Tracked carrier",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Phased-array radar",
        "Engagement radar",
        "Electro-optical support"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey Buk Product Information",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey Buk Product Information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "buk-m3",
      "name": "Buk-M3",
      "officialDesignation": "9K317M Buk-M3 Medium-Range Air Defence",
      "alternateNames": [
        "Buk-M3",
        "9K317M Buk-M3 Medium-Range Air Defence"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "Russia",
      "manufacturer": "Almaz-Antey",
      "operator": [
        "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Buk-M3 is a current-generation tracked air-defence system with modernized missiles, radar and networked fire control.",
      "performance": {
        "maxEngagementRangeKm": 65,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Almaz-Antey Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Buk-M3 Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Almaz-Antey Buk Product Information",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey Buk Product Information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "hq-22",
    "name": "HQ-22",
    "officialDesignation": "HQ-22 / FK-3 Medium-to-Long Range Air Defence",
    "commonName": "HQ-22",
    "aliases": [
      "HQ-22",
      "HQ-22 / FK-3 Medium-to-Long Range Air Defence"
    ],
    "familyName": "HQ-22 Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 11,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('China', 'https://military-doctrine.vercel.app/country?country=China')",
      "('Serbia', 'https://military-doctrine.vercel.app/country?country=Serbia')"
    ],
    "developer": "Chinese defence industry",
    "manufacturer": "Chinese defence industry",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "hq-22",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "HQ-22 is a current Chinese mobile surface-to-air system designed for area defence using networked radar and missile batteries.",
    "fullOverview": "HQ-22 is a current Chinese mobile surface-to-air system designed for area defence using networked radar and missile batteries.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Chinese defence-industry public information",
    "ratings": {
      "capability": 4.5,
      "offensive": 4.4,
      "defensive": 4.6,
      "reliability": 4.5,
      "maintainability": 4.5,
      "survivability": 4.5,
      "rangeMobility": 4.5,
      "precision": 4.5,
      "technology": 4.5,
      "logistics": 4.5,
      "costEfficiency": 4.5,
      "combatMaturity": 4.6,
      "upgradePotential": 4.6
    },
    "specs": {
      "entryIntoService": "2017",
      "crew": "Battery / system operators",
      "manufacturer": "Chinese defence industry",
      "primaryRole": "Medium-to-Long Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "100",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Mobile launcher",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Multifunction radar",
        "Surveillance radar",
        "Networked command system"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Chinese defence-industry public information",
        "url": "https://www.casic.com.cn/",
        "publisher": "Chinese defence-industry public information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "hq-22",
      "name": "HQ-22",
      "officialDesignation": "HQ-22 / FK-3 Medium-to-Long Range Air Defence",
      "alternateNames": [
        "HQ-22",
        "HQ-22 / FK-3 Medium-to-Long Range Air Defence"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "China",
      "manufacturer": "Chinese defence industry",
      "operator": [
        "('China', 'https://military-doctrine.vercel.app/country?country=China')",
        "('Serbia', 'https://military-doctrine.vercel.app/country?country=Serbia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "HQ-22 is a current Chinese mobile surface-to-air system designed for area defence using networked radar and missile batteries.",
      "performance": {
        "maxEngagementRangeKm": 100,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Chinese defence industry Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "HQ-22 Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Chinese defence-industry public information",
          "url": "https://www.casic.com.cn/",
          "publisher": "Chinese defence-industry public information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "akash-ng",
    "name": "Akash-NG",
    "officialDesignation": "Akash New Generation Surface-to-Air Missile System",
    "commonName": "Akash-NG",
    "aliases": [
      "Akash-NG",
      "Akash New Generation Surface-to-Air Missile System"
    ],
    "familyName": "Akash-NG Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 12,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('India', 'https://military-doctrine.vercel.app/country?country=India')"
    ],
    "developer": "DRDO / Bharat Dynamics",
    "manufacturer": "DRDO / Bharat Dynamics",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "akash-ng",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Akash-NG is a next-generation Indian SAM architecture with active seeker technology, improved mobility and modern network integration.",
    "fullOverview": "Akash-NG is a next-generation Indian SAM architecture with active seeker technology, improved mobility and modern network integration.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "DRDO Akash-NG",
    "ratings": {
      "capability": 4.5,
      "offensive": 4.4,
      "defensive": 4.6,
      "reliability": 4.5,
      "maintainability": 4.5,
      "survivability": 4.4,
      "rangeMobility": 4.5,
      "precision": 4.5,
      "technology": 4.5,
      "logistics": 4.5,
      "costEfficiency": 4.4,
      "combatMaturity": 4.5,
      "upgradePotential": 4.5
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "DRDO / Bharat Dynamics",
      "primaryRole": "Medium-Range Mobile Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "70",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Launcher dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Multifunction radar",
        "Active seeker",
        "Networked C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "DRDO Akash-NG",
        "url": "https://www.drdo.gov.in/",
        "publisher": "DRDO Akash-NG",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "akash-ng",
      "name": "Akash-NG",
      "officialDesignation": "Akash New Generation Surface-to-Air Missile System",
      "alternateNames": [
        "Akash-NG",
        "Akash New Generation Surface-to-Air Missile System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "India",
      "manufacturer": "DRDO / Bharat Dynamics",
      "operator": [
        "('India', 'https://military-doctrine.vercel.app/country?country=India')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Akash-NG is a next-generation Indian SAM architecture with active seeker technology, improved mobility and modern network integration.",
      "performance": {
        "maxEngagementRangeKm": 70,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "DRDO / Bharat Dynamics Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Akash-NG Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "DRDO Akash-NG",
          "url": "https://www.drdo.gov.in/",
          "publisher": "DRDO Akash-NG",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "akash-prime",
    "name": "Akash Prime",
    "officialDesignation": "Akash Prime Surface-to-Air Missile System",
    "commonName": "Akash Prime",
    "aliases": [
      "Akash Prime",
      "Akash Prime Surface-to-Air Missile System"
    ],
    "familyName": "Akash Prime Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 13,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('India', 'https://military-doctrine.vercel.app/country?country=India')"
    ],
    "developer": "DRDO / Bharat Dynamics",
    "manufacturer": "DRDO / Bharat Dynamics",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "akash prime",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Akash Prime modernizes the Akash family with improved seeker, target acquisition and all-weather capability.",
    "fullOverview": "Akash Prime modernizes the Akash family with improved seeker, target acquisition and all-weather capability.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "DRDO Akash",
    "ratings": {
      "capability": 4.4,
      "offensive": 4.3,
      "defensive": 4.5,
      "reliability": 4.4,
      "maintainability": 4.5,
      "survivability": 4.4,
      "rangeMobility": 4.5,
      "precision": 4.5,
      "technology": 4.5,
      "logistics": 4.4,
      "costEfficiency": 4.4,
      "combatMaturity": 4.5,
      "upgradePotential": 4.5
    },
    "specs": {
      "entryIntoService": "2022",
      "crew": "Battery / system operators",
      "manufacturer": "DRDO / Bharat Dynamics",
      "primaryRole": "Medium-Range Mobile Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "25",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Launcher dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Rajendra radar",
        "Improved seeker",
        "Battery battle management"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "DRDO Akash",
        "url": "https://www.drdo.gov.in/",
        "publisher": "DRDO Akash",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "akash-prime",
      "name": "Akash Prime",
      "officialDesignation": "Akash Prime Surface-to-Air Missile System",
      "alternateNames": [
        "Akash Prime",
        "Akash Prime Surface-to-Air Missile System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "India",
      "manufacturer": "DRDO / Bharat Dynamics",
      "operator": [
        "('India', 'https://military-doctrine.vercel.app/country?country=India')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Akash Prime modernizes the Akash family with improved seeker, target acquisition and all-weather capability.",
      "performance": {
        "maxEngagementRangeKm": 25,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "DRDO / Bharat Dynamics Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Akash Prime Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "DRDO Akash",
          "url": "https://www.drdo.gov.in/",
          "publisher": "DRDO Akash",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "s-350-vityaz",
    "name": "S-350 Vityaz",
    "officialDesignation": "50R6 S-350 Vityaz Air Defence System",
    "commonName": "S-350 Vityaz",
    "aliases": [
      "S-350 Vityaz",
      "50R6 S-350 Vityaz Air Defence System"
    ],
    "familyName": "S-350 Vityaz Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 14,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')"
    ],
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "s-350 vityaz",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "S-350 is a modern Russian high-capacity surface-to-air system optimized for distributed defence and large missile loads.",
    "fullOverview": "S-350 is a modern Russian high-capacity surface-to-air system optimized for distributed defence and large missile loads.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Almaz-Antey S-350",
    "ratings": {
      "capability": 4.4,
      "offensive": 4.3,
      "defensive": 4.5,
      "reliability": 4.4,
      "maintainability": 4.5,
      "survivability": 4.4,
      "rangeMobility": 4.4,
      "precision": 4.4,
      "technology": 4.5,
      "logistics": 4.4,
      "costEfficiency": 4.4,
      "combatMaturity": 4.5,
      "upgradePotential": 4.5
    },
    "specs": {
      "entryIntoService": "2019",
      "crew": "Battery / system operators",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "High-Capacity Medium-to-Long Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "120",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Tracked/wheeled battery",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "50N6A multifunction radar",
        "Command post",
        "Networked surveillance sensors"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey S-350",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey S-350",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "s-350-vityaz",
      "name": "S-350 Vityaz",
      "officialDesignation": "50R6 S-350 Vityaz Air Defence System",
      "alternateNames": [
        "S-350 Vityaz",
        "50R6 S-350 Vityaz Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "Russia",
      "manufacturer": "Almaz-Antey",
      "operator": [
        "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "S-350 is a modern Russian high-capacity surface-to-air system optimized for distributed defence and large missile loads.",
      "performance": {
        "maxEngagementRangeKm": 120,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Almaz-Antey Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "S-350 Vityaz Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Almaz-Antey S-350",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey S-350",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "samp-t-ng",
    "name": "SAMP/T NG",
    "officialDesignation": "SAMP/T Next Generation Ground-Based Air Defence System",
    "commonName": "SAMP/T NG",
    "aliases": [
      "SAMP/T NG",
      "SAMP/T Next Generation Ground-Based Air Defence System"
    ],
    "familyName": "SAMP/T NG Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 15,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "France",
    "originCountries": [
      "France",
      "Italy"
    ],
    "developerCountries": [
      "France",
      "Italy"
    ],
    "manufacturerCountries": [
      "France",
      "Italy"
    ],
    "operatorCountries": [
      "('France', 'https://military-doctrine.vercel.app/country?country=France')",
      "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')"
    ],
    "developer": "Eurosam / MBDA / Thales",
    "manufacturer": "Eurosam / MBDA / Thales",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "samp/t ng",
      "air-defence-mrad",
      "medium-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "SAMP/T NG is the current European next-generation evolution of SAMP/T with new AESA radar, modernized Aster interceptors and networked command.",
    "fullOverview": "SAMP/T NG is the current European next-generation evolution of SAMP/T with new AESA radar, modernized Aster interceptors and networked command.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "MBDA / Eurosam SAMP/T NG",
    "ratings": {
      "capability": 4.4,
      "offensive": 4.3,
      "defensive": 4.5,
      "reliability": 4.4,
      "maintainability": 4.4,
      "survivability": 4.3,
      "rangeMobility": 4.4,
      "precision": 4.4,
      "technology": 4.4,
      "logistics": 4.4,
      "costEfficiency": 4.3,
      "combatMaturity": 4.4,
      "upgradePotential": 4.5
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "Eurosam / MBDA / Thales",
      "primaryRole": "Advanced Medium-to-Long Range Networked Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "150",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Ground Fire 300 AESA radar",
        "Aster interceptor seeker",
        "Integrated C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "MBDA / Eurosam SAMP/T NG",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA / Eurosam SAMP/T NG",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "samp-t-ng",
      "name": "SAMP/T NG",
      "officialDesignation": "SAMP/T Next Generation Ground-Based Air Defence System",
      "alternateNames": [
        "SAMP/T NG",
        "SAMP/T Next Generation Ground-Based Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "airDefenceCategory": "MRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "France",
      "manufacturer": "Eurosam / MBDA / Thales",
      "operator": [
        "('France', 'https://military-doctrine.vercel.app/country?country=France')",
        "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "SAMP/T NG is the current European next-generation evolution of SAMP/T with new AESA radar, modernized Aster interceptors and networked command.",
      "performance": {
        "maxEngagementRangeKm": 150,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Eurosam / MBDA / Thales Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "SAMP/T NG Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "MBDA / Eurosam SAMP/T NG",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA / Eurosam SAMP/T NG",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "patriot-pac-3-mse",
    "name": "Patriot PAC-3 MSE",
    "officialDesignation": "MIM-104 Patriot PAC-3 Missile Segment Enhancement",
    "commonName": "Patriot PAC-3 MSE",
    "aliases": [
      "Patriot PAC-3 MSE",
      "MIM-104 Patriot PAC-3 Missile Segment Enhancement"
    ],
    "familyName": "Patriot PAC-3 MSE Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 1,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
      "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')",
      "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')",
      "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')",
      "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')",
      "('Netherlands', 'https://military-doctrine.vercel.app/country?country=Netherlands')",
      "('Taiwan', 'https://military-doctrine.vercel.app/country?country=Taiwan')"
    ],
    "developer": "Lockheed Martin / RTX",
    "manufacturer": "Lockheed Martin / RTX",
    "dataConfidence": "VERIFIED",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "patriot pac-3 mse",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "Patriot PAC-3 MSE is a current-generation hit-to-kill interceptor architecture with extensive operational use and continuing production expansion.",
    "fullOverview": "Patriot PAC-3 MSE is a current-generation hit-to-kill interceptor architecture with extensive operational use and continuing production expansion.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Lockheed Martin PAC-3 MSE",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.8,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.9,
      "survivability": 4.8,
      "rangeMobility": 4.9,
      "precision": 4.9,
      "technology": 4.9,
      "logistics": 4.8,
      "costEfficiency": 4.8,
      "combatMaturity": 4.9,
      "upgradePotential": 4.9
    },
    "specs": {
      "entryIntoService": "2015 (MSE)",
      "crew": "Battery / system operators",
      "manufacturer": "Lockheed Martin / RTX",
      "primaryRole": "Long-Range Air and Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "120+",
          "unit": "",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Patriot multifunction radar",
        "Ka-band active seeker",
        "Integrated engagement control"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Lockheed Martin PAC-3 MSE",
        "url": "https://www.lockheedmartin.com/",
        "publisher": "Lockheed Martin PAC-3 MSE",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "patriot-pac-3-mse",
      "name": "Patriot PAC-3 MSE",
      "officialDesignation": "MIM-104 Patriot PAC-3 Missile Segment Enhancement",
      "alternateNames": [
        "Patriot PAC-3 MSE",
        "MIM-104 Patriot PAC-3 Missile Segment Enhancement"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "United States",
      "manufacturer": "Lockheed Martin / RTX",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
        "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')",
        "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')",
        "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')",
        "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')",
        "('Netherlands', 'https://military-doctrine.vercel.app/country?country=Netherlands')",
        "('Taiwan', 'https://military-doctrine.vercel.app/country?country=Taiwan')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "Patriot PAC-3 MSE is a current-generation hit-to-kill interceptor architecture with extensive operational use and continuing production expansion.",
      "performance": {
        "maxEngagementRangeKm": 120,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 12,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Raytheon LTAMDS GhostEye 3D AESA Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Command Post EO/IR Cueing"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "PAC-3 MSE Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "IBCS Network",
          "Link 16"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Lockheed Martin PAC-3 MSE",
          "url": "https://www.lockheedmartin.com/",
          "publisher": "Lockheed Martin PAC-3 MSE",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "s-400-triumf",
    "name": "S-400 Triumf",
    "officialDesignation": "9K81 S-400 Triumf Mobile Air Defence System",
    "commonName": "S-400 Triumf",
    "aliases": [
      "S-400 Triumf",
      "9K81 S-400 Triumf Mobile Air Defence System"
    ],
    "familyName": "S-400 Triumf Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 2,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')",
      "('China', 'https://military-doctrine.vercel.app/country?country=China')",
      "('Türkiye', 'https://military-doctrine.vercel.app/country?country=T%C3%BCrkiye')",
      "('India', 'https://military-doctrine.vercel.app/country?country=India')",
      "('Belarus', 'https://military-doctrine.vercel.app/country?country=Belarus')"
    ],
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "s-400 triumf",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "S-400 is a mobile long-range system using multiple missile families and networked surveillance/engagement radars.",
    "fullOverview": "S-400 is a mobile long-range system using multiple missile families and networked surveillance/engagement radars.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Almaz-Antey S-400",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.9,
      "survivability": 4.8,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.9,
      "logistics": 4.8,
      "costEfficiency": 4.8,
      "combatMaturity": 4.9,
      "upgradePotential": 4.9
    },
    "specs": {
      "entryIntoService": "2007 (current-generation missiles)",
      "crew": "Battery / system operators",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "Strategic Long-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "400",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Mobile launcher/battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "91N6E surveillance radar",
        "92N6E engagement radar",
        "Integrated command network"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey S-400",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey S-400",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "s-400-triumf",
      "name": "S-400 Triumf",
      "officialDesignation": "9K81 S-400 Triumf Mobile Air Defence System",
      "alternateNames": [
        "S-400 Triumf",
        "9K81 S-400 Triumf Mobile Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "Russia",
      "manufacturer": "Almaz-Antey",
      "operator": [
        "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')",
        "('China', 'https://military-doctrine.vercel.app/country?country=China')",
        "('Türkiye', 'https://military-doctrine.vercel.app/country?country=T%C3%BCrkiye')",
        "('India', 'https://military-doctrine.vercel.app/country?country=India')",
        "('Belarus', 'https://military-doctrine.vercel.app/country?country=Belarus')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "S-400 is a mobile long-range system using multiple missile families and networked surveillance/engagement radars.",
      "performance": {
        "maxEngagementRangeKm": 400,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "91N6E Big Bird 3D Panoramic Radar",
        "radarArchitecture": "PESA",
        "opticalTrackingChannels": [
          "Thermal Tracking Channel"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "40N6E / 48N6DM Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "55K6E Command System Link"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Almaz-Antey S-400",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey S-400",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "s-350e",
    "name": "S-350E",
    "officialDesignation": "S-350E Vityaz Export Air Defence System",
    "commonName": "S-350E",
    "aliases": [
      "S-350E",
      "S-350E Vityaz Export Air Defence System"
    ],
    "familyName": "S-350E Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 3,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Russia / export program', 'https://military-doctrine.vercel.app/country?country=Russia%20/%20export%20program')"
    ],
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "s-350e",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "S-350E is the export/current-generation Vityaz architecture emphasizing high missile capacity and networked engagement.",
    "fullOverview": "S-350E is the export/current-generation Vityaz architecture emphasizing high missile capacity and networked engagement.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Almaz-Antey S-350",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.8,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.9
    },
    "specs": {
      "entryIntoService": "2019",
      "crew": "Battery / system operators",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "High-Capacity Long-Range Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "120",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Mobile battery",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Multifunction phased-array radar",
        "Command post",
        "Fire-control radar"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey S-350",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey S-350",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "s-350e",
      "name": "S-350E",
      "officialDesignation": "S-350E Vityaz Export Air Defence System",
      "alternateNames": [
        "S-350E",
        "S-350E Vityaz Export Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "Russia",
      "manufacturer": "Almaz-Antey",
      "operator": [
        "('Russia / export program', 'https://military-doctrine.vercel.app/country?country=Russia%20/%20export%20program')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "S-350E is the export/current-generation Vityaz architecture emphasizing high missile capacity and networked engagement.",
      "performance": {
        "maxEngagementRangeKm": 120,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Almaz-Antey Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "S-350E Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Almaz-Antey S-350",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey S-350",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "hq-9b",
    "name": "HQ-9B",
    "officialDesignation": "HQ-9B Improved Long-Range Air Defence System",
    "commonName": "HQ-9B",
    "aliases": [
      "HQ-9B",
      "HQ-9B Improved Long-Range Air Defence System"
    ],
    "familyName": "HQ-9B Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 4,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('China', 'https://military-doctrine.vercel.app/country?country=China')",
      "('Pakistan', 'https://military-doctrine.vercel.app/country?country=Pakistan')"
    ],
    "developer": "Chinese defence industry",
    "manufacturer": "Chinese defence industry",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "hq-9b",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "HQ-9B is a modernized Chinese long-range surface-to-air family with upgraded sensing, missile and command components.",
    "fullOverview": "HQ-9B is a modernized Chinese long-range surface-to-air family with upgraded sensing, missile and command components.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Chinese defence-industry public information",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.8,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2010s",
      "crew": "Battery / system operators",
      "manufacturer": "Chinese defence industry",
      "primaryRole": "Long-Range Area Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "200",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Mobile launcher/battery",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Phased-array surveillance radar",
        "Engagement radar",
        "Networked command system"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Chinese defence-industry public information",
        "url": "https://www.casic.com.cn/",
        "publisher": "Chinese defence-industry public information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "hq-9b",
      "name": "HQ-9B",
      "officialDesignation": "HQ-9B Improved Long-Range Air Defence System",
      "alternateNames": [
        "HQ-9B",
        "HQ-9B Improved Long-Range Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "China",
      "manufacturer": "Chinese defence industry",
      "operator": [
        "('China', 'https://military-doctrine.vercel.app/country?country=China')",
        "('Pakistan', 'https://military-doctrine.vercel.app/country?country=Pakistan')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "HQ-9B is a modernized Chinese long-range surface-to-air family with upgraded sensing, missile and command components.",
      "performance": {
        "maxEngagementRangeKm": 200,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Chinese defence industry Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "HQ-9B Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Chinese defence-industry public information",
          "url": "https://www.casic.com.cn/",
          "publisher": "Chinese defence-industry public information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "aster-30-b1nt",
    "name": "Aster 30 B1NT",
    "officialDesignation": "ASTER 30 B1NT Ground-Based Air Defence Interceptor System",
    "commonName": "Aster 30 B1NT",
    "aliases": [
      "Aster 30 B1NT",
      "ASTER 30 B1NT Ground-Based Air Defence Interceptor System"
    ],
    "familyName": "Aster 30 B1NT Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 5,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "France",
    "originCountries": [
      "France",
      "Italy"
    ],
    "developerCountries": [
      "France",
      "Italy"
    ],
    "manufacturerCountries": [
      "France",
      "Italy"
    ],
    "operatorCountries": [
      "('France', 'https://military-doctrine.vercel.app/country?country=France')",
      "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')"
    ],
    "developer": "MBDA / Thales",
    "manufacturer": "MBDA / Thales",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "aster 30 b1nt",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Aster 30 B1NT is the upgraded European interceptor architecture for higher-end air and tactical ballistic missile defence.",
    "fullOverview": "Aster 30 B1NT is the upgraded European interceptor architecture for higher-end air and tactical ballistic missile defence.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "MBDA Aster 30 B1NT",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.7,
      "technology": 4.8,
      "logistics": 4.7,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "MBDA / Thales",
      "primaryRole": "Long-Range Air and Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "150",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Ground Fire radar",
        "Aster active seeker",
        "Integrated C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "MBDA Aster 30 B1NT",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA Aster 30 B1NT",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "aster-30-b1nt",
      "name": "Aster 30 B1NT",
      "officialDesignation": "ASTER 30 B1NT Ground-Based Air Defence Interceptor System",
      "alternateNames": [
        "Aster 30 B1NT",
        "ASTER 30 B1NT Ground-Based Air Defence Interceptor System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "France",
      "manufacturer": "MBDA / Thales",
      "operator": [
        "('France', 'https://military-doctrine.vercel.app/country?country=France')",
        "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Aster 30 B1NT is the upgraded European interceptor architecture for higher-end air and tactical ballistic missile defence.",
      "performance": {
        "maxEngagementRangeKm": 150,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "MBDA / Thales Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Aster 30 B1NT Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "MBDA Aster 30 B1NT",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA Aster 30 B1NT",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "barak-er",
    "name": "Barak ER",
    "officialDesignation": "Barak ER Long-Range Surface-to-Air Missile",
    "commonName": "Barak ER",
    "aliases": [
      "Barak ER",
      "Barak ER Long-Range Surface-to-Air Missile"
    ],
    "familyName": "Barak ER Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 6,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Israel",
    "originCountries": [
      "Israel",
      "India"
    ],
    "developerCountries": [
      "Israel",
      "India"
    ],
    "manufacturerCountries": [
      "Israel",
      "India"
    ],
    "operatorCountries": [
      "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
      "('India', 'https://military-doctrine.vercel.app/country?country=India')"
    ],
    "developer": "IAI",
    "manufacturer": "IAI",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "barak er",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Barak ER extends the Barak family into longer-range area defence using active-radar terminal guidance and networked launchers.",
    "fullOverview": "Barak ER extends the Barak family into longer-range area defence using active-radar terminal guidance and networked launchers.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "IAI Barak MX",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.7,
      "costEfficiency": 4.6,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "IAI",
      "primaryRole": "Long-Range Active-Radar Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "150",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "AESA multifunction radar",
        "Active radar seeker",
        "Networked battle management"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "IAI Barak MX",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI Barak MX",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "barak-er",
      "name": "Barak ER",
      "officialDesignation": "Barak ER Long-Range Surface-to-Air Missile",
      "alternateNames": [
        "Barak ER",
        "Barak ER Long-Range Surface-to-Air Missile"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "Israel",
      "manufacturer": "IAI",
      "operator": [
        "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
        "('India', 'https://military-doctrine.vercel.app/country?country=India')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Barak ER extends the Barak family into longer-range area defence using active-radar terminal guidance and networked launchers.",
      "performance": {
        "maxEngagementRangeKm": 150,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "IAI Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Barak ER Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "IAI Barak MX",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI Barak MX",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "hq-9",
    "name": "HQ-9",
    "officialDesignation": "HQ-9 Long-Range Surface-to-Air Missile System",
    "commonName": "HQ-9",
    "aliases": [
      "HQ-9",
      "HQ-9 Long-Range Surface-to-Air Missile System"
    ],
    "familyName": "HQ-9 Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 7,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('China', 'https://military-doctrine.vercel.app/country?country=China')",
      "('Turkmenistan', 'https://military-doctrine.vercel.app/country?country=Turkmenistan')",
      "('Uzbekistan', 'https://military-doctrine.vercel.app/country?country=Uzbekistan')"
    ],
    "developer": "Chinese defence industry",
    "manufacturer": "Chinese defence industry",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "hq-9",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "HQ-9 remains a current Chinese long-range air-defence family with continuing modernization and export derivatives.",
    "fullOverview": "HQ-9 remains a current Chinese long-range air-defence family with continuing modernization and export derivatives.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Chinese defence-industry public information",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.7,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2001 (current upgraded variants)",
      "crew": "Battery / system operators",
      "manufacturer": "Chinese defence industry",
      "primaryRole": "Long-Range Area Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "125",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Mobile battery",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "HT-233 family multifunction radar",
        "Long-range surveillance radar"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Chinese defence-industry public information",
        "url": "https://www.casic.com.cn/",
        "publisher": "Chinese defence-industry public information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "hq-9",
      "name": "HQ-9",
      "officialDesignation": "HQ-9 Long-Range Surface-to-Air Missile System",
      "alternateNames": [
        "HQ-9",
        "HQ-9 Long-Range Surface-to-Air Missile System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "China",
      "manufacturer": "Chinese defence industry",
      "operator": [
        "('China', 'https://military-doctrine.vercel.app/country?country=China')",
        "('Turkmenistan', 'https://military-doctrine.vercel.app/country?country=Turkmenistan')",
        "('Uzbekistan', 'https://military-doctrine.vercel.app/country?country=Uzbekistan')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "HQ-9 remains a current Chinese long-range air-defence family with continuing modernization and export derivatives.",
      "performance": {
        "maxEngagementRangeKm": 125,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Chinese defence industry Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "HQ-9 Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Chinese defence-industry public information",
          "url": "https://www.casic.com.cn/",
          "publisher": "Chinese defence-industry public information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "fd-2000b",
    "name": "FD-2000B",
    "officialDesignation": "FD-2000B Long-Range Air Defence System",
    "commonName": "FD-2000B",
    "aliases": [
      "FD-2000B",
      "FD-2000B Long-Range Air Defence System"
    ],
    "familyName": "FD-2000B Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 8,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Export users', 'https://military-doctrine.vercel.app/country?country=Export%20users')"
    ],
    "developer": "Chinese defence industry",
    "manufacturer": "Chinese defence industry",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "fd-2000b",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "FD-2000B is a modern export-oriented derivative of the HQ-9 family with updated sensors and missile architecture.",
    "fullOverview": "FD-2000B is a modern export-oriented derivative of the HQ-9 family with updated sensors and missile architecture.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Chinese defence-industry public information",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.6,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "2010s",
      "crew": "Battery / system operators",
      "manufacturer": "Chinese defence industry",
      "primaryRole": "Long-Range Export Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "200",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Mobile launcher",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Multifunction radar",
        "Surveillance radar",
        "Networked fire control"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Chinese defence-industry public information",
        "url": "https://www.casic.com.cn/",
        "publisher": "Chinese defence-industry public information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "fd-2000b",
      "name": "FD-2000B",
      "officialDesignation": "FD-2000B Long-Range Air Defence System",
      "alternateNames": [
        "FD-2000B",
        "FD-2000B Long-Range Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "China",
      "manufacturer": "Chinese defence industry",
      "operator": [
        "('Export users', 'https://military-doctrine.vercel.app/country?country=Export%20users')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "FD-2000B is a modern export-oriented derivative of the HQ-9 family with updated sensors and missile architecture.",
      "performance": {
        "maxEngagementRangeKm": 200,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Chinese defence industry Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "FD-2000B Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Chinese defence-industry public information",
          "url": "https://www.casic.com.cn/",
          "publisher": "Chinese defence-industry public information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "aegis-ashore",
    "name": "Aegis Ashore",
    "officialDesignation": "Aegis Ashore Integrated Air and Missile Defence System",
    "commonName": "Aegis Ashore",
    "aliases": [
      "Aegis Ashore",
      "Aegis Ashore Integrated Air and Missile Defence System"
    ],
    "familyName": "Aegis Ashore Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 9,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
      "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')",
      "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')"
    ],
    "developer": "Lockheed Martin / U.S. Navy",
    "manufacturer": "Lockheed Martin / U.S. Navy",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "aegis ashore",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Aegis Ashore adapts the Aegis combat system to land, integrating long-range radar, battle management and Standard Missile interceptors.",
    "fullOverview": "Aegis Ashore adapts the Aegis combat system to land, integrating long-range radar, battle management and Standard Missile interceptors.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "U.S. Missile Defense Agency Aegis",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.6,
      "precision": 4.6,
      "technology": 4.7,
      "logistics": 4.6,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "2016",
      "crew": "Battery / system operators",
      "manufacturer": "Lockheed Martin / U.S. Navy",
      "primaryRole": "Fixed Long-Range Integrated Air and Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Configuration dependent",
          "unit": "",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not applicable",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Fixed-site",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "SPY-family radar",
        "Aegis fire-control system",
        "Standard Missile guidance network"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "U.S. Missile Defense Agency Aegis",
        "url": "https://www.mda.mil/",
        "publisher": "U.S. Missile Defense Agency Aegis",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "aegis-ashore",
      "name": "Aegis Ashore",
      "officialDesignation": "Aegis Ashore Integrated Air and Missile Defence System",
      "alternateNames": [
        "Aegis Ashore",
        "Aegis Ashore Integrated Air and Missile Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "United States",
      "manufacturer": "Lockheed Martin / U.S. Navy",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
        "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')",
        "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Aegis Ashore adapts the Aegis combat system to land, integrating long-range radar, battle management and Standard Missile interceptors.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Lockheed Martin / U.S. Navy Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Aegis Ashore Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "U.S. Missile Defense Agency Aegis",
          "url": "https://www.mda.mil/",
          "publisher": "U.S. Missile Defense Agency Aegis",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "meads",
    "name": "MEADS",
    "officialDesignation": "Medium Extended Air Defense System",
    "commonName": "MEADS",
    "aliases": [
      "MEADS",
      "Medium Extended Air Defense System"
    ],
    "familyName": "MEADS Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 10,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "United States",
    "originCountries": [
      "United States",
      "Germany",
      "Italy"
    ],
    "developerCountries": [
      "United States",
      "Germany",
      "Italy"
    ],
    "manufacturerCountries": [
      "United States",
      "Germany",
      "Italy"
    ],
    "operatorCountries": [
      "('Development consortium', 'https://military-doctrine.vercel.app/country?country=Development%20consortium')"
    ],
    "developer": "Lockheed Martin / MBDA",
    "manufacturer": "Lockheed Martin / MBDA",
    "dataConfidence": "HIGH",
    "status": "In Development",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "meads",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "MEADS is an advanced distributed architecture emphasizing 360-degree surveillance, networked launchers and modular engagement.",
    "fullOverview": "MEADS is an advanced distributed architecture emphasizing 360-degree surveillance, networked launchers and modular engagement.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "MEADS public program information",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.6,
      "survivability": 4.5,
      "rangeMobility": 4.6,
      "precision": 4.6,
      "technology": 4.6,
      "logistics": 4.6,
      "costEfficiency": 4.5,
      "combatMaturity": 4.6,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "Advanced development program",
      "crew": "Battery / system operators",
      "manufacturer": "Lockheed Martin / MBDA",
      "primaryRole": "Distributed Long-Range Networked Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Configuration dependent",
          "unit": "",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not applicable",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Mobile battery",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Multifunction radar",
        "360-degree surveillance",
        "Networked battle management"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "MEADS public program information",
        "url": "https://www.lockheedmartin.com/",
        "publisher": "MEADS public program information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "meads",
      "name": "MEADS",
      "officialDesignation": "Medium Extended Air Defense System",
      "alternateNames": [
        "MEADS",
        "Medium Extended Air Defense System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "United States",
      "manufacturer": "Lockheed Martin / MBDA",
      "operator": [
        "('Development consortium', 'https://military-doctrine.vercel.app/country?country=Development%20consortium')"
      ],
      "serviceEntryYear": 2015,
      "status": "In Development",
      "generation": "Next-Gen (2016-Present)",
      "description": "MEADS is an advanced distributed architecture emphasizing 360-degree surveillance, networked launchers and modular engagement.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Lockheed Martin / MBDA Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "MEADS Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "MEADS public program information",
          "url": "https://www.lockheedmartin.com/",
          "publisher": "MEADS public program information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "david-s-sling-11",
    "name": "David's Sling Block II",
    "officialDesignation": "David's Sling Weapon System",
    "commonName": "David's Sling",
    "aliases": [
      "David's Sling",
      "David's Sling Weapon System"
    ],
    "familyName": "David's Sling Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 11,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Israel",
    "originCountries": [
      "Israel",
      "United States"
    ],
    "developerCountries": [
      "Israel",
      "United States"
    ],
    "manufacturerCountries": [
      "Israel",
      "United States"
    ],
    "operatorCountries": [
      "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
      "('Finland', 'https://military-doctrine.vercel.app/country?country=Finland')"
    ],
    "developer": "Rafael / RTX",
    "manufacturer": "Rafael / RTX",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "david's sling",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "David's Sling provides an upper-layer missile-defence function with the Stunner interceptor and advanced radar/C2.",
    "fullOverview": "David's Sling provides an upper-layer missile-defence function with the Stunner interceptor and advanced radar/C2.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Rafael David's Sling",
    "ratings": {
      "capability": 4.5,
      "offensive": 4.5,
      "defensive": 4.6,
      "reliability": 4.5,
      "maintainability": 4.6,
      "survivability": 4.5,
      "rangeMobility": 4.6,
      "precision": 4.6,
      "technology": 4.6,
      "logistics": 4.5,
      "costEfficiency": 4.5,
      "combatMaturity": 4.6,
      "upgradePotential": 4.6
    },
    "specs": {
      "entryIntoService": "2017",
      "crew": "Battery / system operators",
      "manufacturer": "Rafael / RTX",
      "primaryRole": "Long-Range Upper-Layer Air and Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "300",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "EL/M-2084 radar",
        "Electro-optical / radar seeker",
        "Integrated C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Rafael David's Sling",
        "url": "https://www.rafael.co.il/",
        "publisher": "Rafael David's Sling",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "david-s-sling-11",
      "name": "David's Sling Block II",
      "officialDesignation": "David's Sling Weapon System",
      "alternateNames": [
        "David's Sling",
        "David's Sling Weapon System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "Israel",
      "manufacturer": "Rafael / RTX",
      "operator": [
        "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
        "('Finland', 'https://military-doctrine.vercel.app/country?country=Finland')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "David's Sling provides an upper-layer missile-defence function with the Stunner interceptor and advanced radar/C2.",
      "performance": {
        "maxEngagementRangeKm": 300,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Rafael / RTX Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "David's Sling Block II Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Rafael David's Sling",
          "url": "https://www.rafael.co.il/",
          "publisher": "Rafael David's Sling",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "samp-t-ng-12",
    "name": "SAMP/T NG Aster",
    "officialDesignation": "SAMP/T Next Generation Ground-Based Air Defence System",
    "commonName": "SAMP/T NG",
    "aliases": [
      "SAMP/T NG",
      "SAMP/T Next Generation Ground-Based Air Defence System"
    ],
    "familyName": "SAMP/T NG Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 12,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "France",
    "originCountries": [
      "France",
      "Italy"
    ],
    "developerCountries": [
      "France",
      "Italy"
    ],
    "manufacturerCountries": [
      "France",
      "Italy"
    ],
    "operatorCountries": [
      "('France', 'https://military-doctrine.vercel.app/country?country=France')",
      "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')"
    ],
    "developer": "Eurosam / MBDA / Thales",
    "manufacturer": "Eurosam / MBDA / Thales",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "samp/t ng",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "SAMP/T NG integrates modern AESA radar and upgraded Aster interceptors into a mobile European long-range architecture.",
    "fullOverview": "SAMP/T NG integrates modern AESA radar and upgraded Aster interceptors into a mobile European long-range architecture.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "MBDA / Eurosam SAMP/T NG",
    "ratings": {
      "capability": 4.5,
      "offensive": 4.4,
      "defensive": 4.6,
      "reliability": 4.5,
      "maintainability": 4.6,
      "survivability": 4.5,
      "rangeMobility": 4.5,
      "precision": 4.5,
      "technology": 4.6,
      "logistics": 4.5,
      "costEfficiency": 4.5,
      "combatMaturity": 4.6,
      "upgradePotential": 4.6
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "Eurosam / MBDA / Thales",
      "primaryRole": "Long-Range European Area Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "150",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Ground Fire 300 AESA",
        "Aster interceptor seeker",
        "Networked C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "MBDA / Eurosam SAMP/T NG",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA / Eurosam SAMP/T NG",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "samp-t-ng-12",
      "name": "SAMP/T NG Aster",
      "officialDesignation": "SAMP/T Next Generation Ground-Based Air Defence System",
      "alternateNames": [
        "SAMP/T NG",
        "SAMP/T Next Generation Ground-Based Air Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "France",
      "manufacturer": "Eurosam / MBDA / Thales",
      "operator": [
        "('France', 'https://military-doctrine.vercel.app/country?country=France')",
        "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "SAMP/T NG integrates modern AESA radar and upgraded Aster interceptors into a mobile European long-range architecture.",
      "performance": {
        "maxEngagementRangeKm": 150,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Eurosam / MBDA / Thales Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "SAMP/T NG Aster Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "MBDA / Eurosam SAMP/T NG",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA / Eurosam SAMP/T NG",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "patriot-pac-2-gem-t",
    "name": "Patriot PAC-2 GEM-T",
    "officialDesignation": "Patriot PAC-2 GEM-T Modernized Air Defence Layer",
    "commonName": "Patriot PAC-2 GEM-T",
    "aliases": [
      "Patriot PAC-2 GEM-T",
      "Patriot PAC-2 GEM-T Modernized Air Defence Layer"
    ],
    "familyName": "Patriot PAC-2 GEM-T Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 13,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
      "('Netherlands', 'https://military-doctrine.vercel.app/country?country=Netherlands')",
      "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')",
      "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')",
      "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')"
    ],
    "developer": "Raytheon / RTX",
    "manufacturer": "Raytheon / RTX",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "patriot pac-2 gem-t",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "GEM-T is a continuously upgraded Patriot interceptor used against aircraft and cruise-missile-class targets alongside PAC-3 MSE.",
    "fullOverview": "GEM-T is a continuously upgraded Patriot interceptor used against aircraft and cruise-missile-class targets alongside PAC-3 MSE.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "RTX Raytheon Patriot",
    "ratings": {
      "capability": 4.5,
      "offensive": 4.4,
      "defensive": 4.6,
      "reliability": 4.5,
      "maintainability": 4.5,
      "survivability": 4.4,
      "rangeMobility": 4.5,
      "precision": 4.5,
      "technology": 4.5,
      "logistics": 4.5,
      "costEfficiency": 4.4,
      "combatMaturity": 4.5,
      "upgradePotential": 4.6
    },
    "specs": {
      "entryIntoService": "2000s (ongoing modernization)",
      "crew": "Battery / system operators",
      "manufacturer": "Raytheon / RTX",
      "primaryRole": "Long-Range Aerodynamic Target Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "160",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Patriot radar",
        "Track-via-missile / seeker architecture",
        "Integrated engagement control"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "RTX Raytheon Patriot",
        "url": "https://www.rtx.com/",
        "publisher": "RTX Raytheon Patriot",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "patriot-pac-2-gem-t",
      "name": "Patriot PAC-2 GEM-T",
      "officialDesignation": "Patriot PAC-2 GEM-T Modernized Air Defence Layer",
      "alternateNames": [
        "Patriot PAC-2 GEM-T",
        "Patriot PAC-2 GEM-T Modernized Air Defence Layer"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "United States",
      "manufacturer": "Raytheon / RTX",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
        "('Netherlands', 'https://military-doctrine.vercel.app/country?country=Netherlands')",
        "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')",
        "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')",
        "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "GEM-T is a continuously upgraded Patriot interceptor used against aircraft and cruise-missile-class targets alongside PAC-3 MSE.",
      "performance": {
        "maxEngagementRangeKm": 160,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Raytheon / RTX Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Patriot PAC-2 GEM-T Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "RTX Raytheon Patriot",
          "url": "https://www.rtx.com/",
          "publisher": "RTX Raytheon Patriot",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "camm-er-long-range-layer",
    "name": "CAMM-ER Long-Range Layer",
    "officialDesignation": "CAMM-ER Extended-Range Ground-Based Layer",
    "commonName": "CAMM-ER Long-Range Layer",
    "aliases": [
      "CAMM-ER Long-Range Layer",
      "CAMM-ER Extended-Range Ground-Based Layer"
    ],
    "familyName": "CAMM-ER Long-Range Layer Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 14,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "United Kingdom",
    "originCountries": [
      "United Kingdom",
      "Italy"
    ],
    "developerCountries": [
      "United Kingdom",
      "Italy"
    ],
    "manufacturerCountries": [
      "United Kingdom",
      "Italy"
    ],
    "operatorCountries": [
      "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')"
    ],
    "developer": "MBDA",
    "manufacturer": "MBDA",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "camm-er long-range layer",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "CAMM-ER provides an extended-range active-radar layer for modern networked ground-based air defence.",
    "fullOverview": "CAMM-ER provides an extended-range active-radar layer for modern networked ground-based air defence.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "MBDA CAMM Family",
    "ratings": {
      "capability": 4.5,
      "offensive": 4.4,
      "defensive": 4.6,
      "reliability": 4.5,
      "maintainability": 4.5,
      "survivability": 4.4,
      "rangeMobility": 4.5,
      "precision": 4.5,
      "technology": 4.5,
      "logistics": 4.5,
      "costEfficiency": 4.4,
      "combatMaturity": 4.5,
      "upgradePotential": 4.5
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "MBDA",
      "primaryRole": "Extended-Range Networked Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "40",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Launcher dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "3D surveillance radar",
        "Active radar seeker",
        "Networked C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "MBDA CAMM Family",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA CAMM Family",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "camm-er-long-range-layer",
      "name": "CAMM-ER Long-Range Layer",
      "officialDesignation": "CAMM-ER Extended-Range Ground-Based Layer",
      "alternateNames": [
        "CAMM-ER Long-Range Layer",
        "CAMM-ER Extended-Range Ground-Based Layer"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "United Kingdom",
      "manufacturer": "MBDA",
      "operator": [
        "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "CAMM-ER provides an extended-range active-radar layer for modern networked ground-based air defence.",
      "performance": {
        "maxEngagementRangeKm": 40,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "MBDA Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "CAMM-ER Long-Range Layer Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "MBDA CAMM Family",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA CAMM Family",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "fd-2000",
    "name": "FD-2000",
    "officialDesignation": "FD-2000 Long-Range Surface-to-Air Missile System",
    "commonName": "FD-2000",
    "aliases": [
      "FD-2000",
      "FD-2000 Long-Range Surface-to-Air Missile System"
    ],
    "familyName": "FD-2000 Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 15,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('China (family)', 'https://military-doctrine.vercel.app/country?country=China%20%28family%29')",
      "('Export operators', 'https://military-doctrine.vercel.app/country?country=Export%20operators')"
    ],
    "developer": "Chinese defence industry",
    "manufacturer": "Chinese defence industry",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "fd-2000",
      "air-defence-lrad",
      "long-range sam"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "FD-2000 is an export-oriented current-generation member of the HQ-9 family, using mobile launchers and networked long-range radar for area air defence.",
    "fullOverview": "FD-2000 is an export-oriented current-generation member of the HQ-9 family, using mobile launchers and networked long-range radar for area air defence.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Chinese defence-industry public FD-2000 information",
    "ratings": {
      "capability": 4.4,
      "offensive": 4.3,
      "defensive": 4.5,
      "reliability": 4.4,
      "maintainability": 4.5,
      "survivability": 4.4,
      "rangeMobility": 4.5,
      "precision": 4.4,
      "technology": 4.5,
      "logistics": 4.4,
      "costEfficiency": 4.4,
      "combatMaturity": 4.5,
      "upgradePotential": 4.5
    },
    "specs": {
      "entryIntoService": "2010s",
      "crew": "Battery / system operators",
      "manufacturer": "Chinese defence industry",
      "primaryRole": "Long-Range Mobile Area Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "125",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Mobile launcher/battery",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Long-range surveillance radar",
        "Multifunction engagement radar",
        "Networked fire control"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Chinese defence-industry public FD-2000 information",
        "url": "https://www.casic.com.cn/",
        "publisher": "Chinese defence-industry public FD-2000 information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "fd-2000",
      "name": "FD-2000",
      "officialDesignation": "FD-2000 Long-Range Surface-to-Air Missile System",
      "alternateNames": [
        "FD-2000",
        "FD-2000 Long-Range Surface-to-Air Missile System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "airDefenceCategory": "LRAD",
      "tierClassification": "Truck-Mounted TEL",
      "country": "China",
      "manufacturer": "Chinese defence industry",
      "operator": [
        "('China (family)', 'https://military-doctrine.vercel.app/country?country=China%20%28family%29')",
        "('Export operators', 'https://military-doctrine.vercel.app/country?country=Export%20operators')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "FD-2000 is an export-oriented current-generation member of the HQ-9 family, using mobile launchers and networked long-range radar for area air defence.",
      "performance": {
        "maxEngagementRangeKm": 125,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Chinese defence industry Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "FD-2000 Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Chinese defence-industry public FD-2000 information",
          "url": "https://www.casic.com.cn/",
          "publisher": "Chinese defence-industry public FD-2000 information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "thaad",
    "name": "THAAD",
    "officialDesignation": "Terminal High Altitude Area Defense System",
    "commonName": "THAAD",
    "aliases": [
      "THAAD",
      "Terminal High Altitude Area Defense System"
    ],
    "familyName": "THAAD Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 1,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
      "('United Arab Emirates', 'https://military-doctrine.vercel.app/country?country=United%20Arab%20Emirates')",
      "('Saudi Arabia', 'https://military-doctrine.vercel.app/country?country=Saudi%20Arabia')"
    ],
    "developer": "Lockheed Martin",
    "manufacturer": "Lockheed Martin",
    "dataConfidence": "VERIFIED",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "thaad",
      "air-defence-high-altitude",
      "high-altitude / upper-tier defence"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "THAAD is a dedicated hit-to-kill terminal ballistic missile-defence system designed to engage threats inside and outside the atmosphere.",
    "fullOverview": "THAAD is a dedicated hit-to-kill terminal ballistic missile-defence system designed to engage threats inside and outside the atmosphere.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "U.S. Missile Defense Agency / Lockheed Martin THAAD",
    "ratings": {
      "capability": 4.9,
      "offensive": 4.8,
      "defensive": 5,
      "reliability": 4.9,
      "maintainability": 5,
      "survivability": 4.9,
      "rangeMobility": 4.9,
      "precision": 4.9,
      "technology": 5,
      "logistics": 4.9,
      "costEfficiency": 4.9,
      "combatMaturity": 5,
      "upgradePotential": 5
    },
    "specs": {
      "entryIntoService": "2008",
      "crew": "Battery / system operators",
      "manufacturer": "Lockheed Martin",
      "primaryRole": "High-Altitude Terminal Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "200",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "AN/TPY-2 X-band radar",
        "Infrared seeker",
        "Integrated fire control"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "U.S. Missile Defense Agency / Lockheed Martin THAAD",
        "url": "https://www.mda.mil/",
        "publisher": "U.S. Missile Defense Agency / Lockheed Martin THAAD",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "thaad",
      "name": "THAAD",
      "officialDesignation": "Terminal High Altitude Area Defense System",
      "alternateNames": [
        "THAAD",
        "Terminal High Altitude Area Defense System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "airDefenceCategory": "HIGH_ALTITUDE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "United States",
      "manufacturer": "Lockheed Martin",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
        "('United Arab Emirates', 'https://military-doctrine.vercel.app/country?country=United%20Arab%20Emirates')",
        "('Saudi Arabia', 'https://military-doctrine.vercel.app/country?country=Saudi%20Arabia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "THAAD is a dedicated hit-to-kill terminal ballistic missile-defence system designed to engage threats inside and outside the atmosphere.",
      "performance": {
        "maxEngagementRangeKm": 200,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 8,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Raytheon AN/TPY-2 Forward-Based X-band AESA",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Indium Antimonide Focal Plane Array IIR Seeker"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "THAAD Exo-Atmospheric Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "C2BMC Network"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "U.S. Missile Defense Agency / Lockheed Martin THAAD",
          "url": "https://www.mda.mil/",
          "publisher": "U.S. Missile Defense Agency / Lockheed Martin THAAD",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "arrow-3",
    "name": "Arrow 3",
    "officialDesignation": "Arrow 3 Upper-Tier Ballistic Missile Defence System",
    "commonName": "Arrow 3",
    "aliases": [
      "Arrow 3",
      "Arrow 3 Upper-Tier Ballistic Missile Defence System"
    ],
    "familyName": "Arrow 3 Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 2,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Israel",
    "originCountries": [
      "Israel",
      "United States"
    ],
    "developerCountries": [
      "Israel",
      "United States"
    ],
    "manufacturerCountries": [
      "Israel",
      "United States"
    ],
    "operatorCountries": [
      "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')"
    ],
    "developer": "IAI / Boeing",
    "manufacturer": "IAI / Boeing",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "arrow 3",
      "air-defence-high-altitude",
      "high-altitude / upper-tier defence"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Arrow 3 is an upper-tier hit-to-kill interceptor designed for exo-atmospheric ballistic missile engagements.",
    "fullOverview": "Arrow 3 is an upper-tier hit-to-kill interceptor designed for exo-atmospheric ballistic missile engagements.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "IAI Arrow",
    "ratings": {
      "capability": 4.9,
      "offensive": 4.8,
      "defensive": 5,
      "reliability": 4.9,
      "maintainability": 4.9,
      "survivability": 4.8,
      "rangeMobility": 4.9,
      "precision": 4.9,
      "technology": 4.9,
      "logistics": 4.9,
      "costEfficiency": 4.8,
      "combatMaturity": 4.9,
      "upgradePotential": 5
    },
    "specs": {
      "entryIntoService": "2017",
      "crew": "Battery / system operators",
      "manufacturer": "IAI / Boeing",
      "primaryRole": "Exo-Atmospheric Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Green Pine family radar",
        "Infrared seeker",
        "Integrated battle management"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "IAI Arrow",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI Arrow",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "arrow-3",
      "name": "Arrow 3",
      "officialDesignation": "Arrow 3 Upper-Tier Ballistic Missile Defence System",
      "alternateNames": [
        "Arrow 3",
        "Arrow 3 Upper-Tier Ballistic Missile Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "airDefenceCategory": "HIGH_ALTITUDE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "Israel",
      "manufacturer": "IAI / Boeing",
      "operator": [
        "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Arrow 3 is an upper-tier hit-to-kill interceptor designed for exo-atmospheric ballistic missile engagements.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 6,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "IAI ELM-2080 Super Green Pine 3D AESA",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "High-Resolution Electro-Optical Sensor"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Arrow 3 Kill Vehicle",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Citadel C2 Network",
          "Link 16"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "IAI Arrow",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI Arrow",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "aegis-bmd-sm-3-block-iia",
    "name": "Aegis BMD / SM-3 Block IIA",
    "officialDesignation": "Aegis Ballistic Missile Defense with SM-3 Block IIA",
    "commonName": "Aegis BMD / SM-3 Block IIA",
    "aliases": [
      "Aegis BMD / SM-3 Block IIA",
      "Aegis Ballistic Missile Defense with SM-3 Block IIA"
    ],
    "familyName": "Aegis BMD / SM-3 Block IIA Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 3,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "United States",
    "originCountries": [
      "United States",
      "Japan"
    ],
    "developerCountries": [
      "United States",
      "Japan"
    ],
    "manufacturerCountries": [
      "United States",
      "Japan"
    ],
    "operatorCountries": [
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
      "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')"
    ],
    "developer": "Lockheed Martin / RTX / Boeing",
    "manufacturer": "Lockheed Martin / RTX / Boeing",
    "dataConfidence": "VERIFIED",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "aegis bmd / sm-3 block iia",
      "air-defence-high-altitude",
      "high-altitude / upper-tier defence"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Aegis BMD with SM-3 Block IIA provides exo-atmospheric midcourse ballistic missile interception from Aegis combat-system platforms.",
    "fullOverview": "Aegis BMD with SM-3 Block IIA provides exo-atmospheric midcourse ballistic missile interception from Aegis combat-system platforms.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "U.S. Missile Defense Agency / Boeing SM-3",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.9,
      "survivability": 4.8,
      "rangeMobility": 4.9,
      "precision": 4.9,
      "technology": 4.9,
      "logistics": 4.8,
      "costEfficiency": 4.8,
      "combatMaturity": 4.9,
      "upgradePotential": 4.9
    },
    "specs": {
      "entryIntoService": "2020",
      "crew": "Battery / system operators",
      "manufacturer": "Lockheed Martin / RTX / Boeing",
      "primaryRole": "Exo-Atmospheric Midcourse Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Max Speed",
          "value": "Not applicable",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Ship/site dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "SPY-series radar",
        "Aegis combat system",
        "SM-3 kinetic seeker"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "U.S. Missile Defense Agency / Boeing SM-3",
        "url": "https://www.mda.mil/",
        "publisher": "U.S. Missile Defense Agency / Boeing SM-3",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "aegis-bmd-sm-3-block-iia",
      "name": "Aegis BMD / SM-3 Block IIA",
      "officialDesignation": "Aegis Ballistic Missile Defense with SM-3 Block IIA",
      "alternateNames": [
        "Aegis BMD / SM-3 Block IIA",
        "Aegis Ballistic Missile Defense with SM-3 Block IIA"
      ],
      "domain": "AIR_DEFENCE",
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "airDefenceCategory": "HIGH_ALTITUDE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "United States",
      "manufacturer": "Lockheed Martin / RTX / Boeing",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
        "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Aegis BMD with SM-3 Block IIA provides exo-atmospheric midcourse ballistic missile interception from Aegis combat-system platforms.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Lockheed Martin / RTX / Boeing Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Aegis BMD / SM-3 Block IIA Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "U.S. Missile Defense Agency / Boeing SM-3",
          "url": "https://www.mda.mil/",
          "publisher": "U.S. Missile Defense Agency / Boeing SM-3",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "gmd",
    "name": "GMD",
    "officialDesignation": "Ground-Based Midcourse Defense",
    "commonName": "GMD",
    "aliases": [
      "GMD",
      "Ground-Based Midcourse Defense"
    ],
    "familyName": "GMD Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 4,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')"
    ],
    "developer": "Boeing / Northrop Grumman / Lockheed Martin",
    "manufacturer": "Boeing / Northrop Grumman / Lockheed Martin",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "gmd",
      "air-defence-high-altitude",
      "high-altitude / upper-tier defence"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "GMD is the U.S. strategic homeland ballistic missile-defence architecture using Ground-Based Interceptors and distributed sensors.",
    "fullOverview": "GMD is the U.S. strategic homeland ballistic missile-defence architecture using Ground-Based Interceptors and distributed sensors.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "U.S. Missile Defense Agency GMD",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.9,
      "survivability": 4.8,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.9,
      "logistics": 4.8,
      "costEfficiency": 4.8,
      "combatMaturity": 4.9,
      "upgradePotential": 4.9
    },
    "specs": {
      "entryIntoService": "2004",
      "crew": "Battery / system operators",
      "manufacturer": "Boeing / Northrop Grumman / Lockheed Martin",
      "primaryRole": "Strategic Midcourse Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Max Speed",
          "value": "Not applicable",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Site dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Early Warning Radars",
        "AN/TPY-2",
        "Space-based sensors",
        "Command network"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "U.S. Missile Defense Agency GMD",
        "url": "https://www.mda.mil/",
        "publisher": "U.S. Missile Defense Agency GMD",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "gmd",
      "name": "GMD",
      "officialDesignation": "Ground-Based Midcourse Defense",
      "alternateNames": [
        "GMD",
        "Ground-Based Midcourse Defense"
      ],
      "domain": "AIR_DEFENCE",
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "airDefenceCategory": "ABMD",
      "tierClassification": "Fixed Site",
      "country": "United States",
      "manufacturer": "Boeing / Northrop Grumman / Lockheed Martin",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "GMD is the U.S. strategic homeland ballistic missile-defence architecture using Ground-Based Interceptors and distributed sensors.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Fixed Pad",
        "readyToFirePerLauncher": 1,
        "mobility": "Fixed-Site Installation"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Sea-Based X-band (SBX) & AN/FPS-132 UEWR",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Exoatmospheric Kill Vehicle IIR Optics"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Ground-Based Interceptor (GBI) / EKV",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "GMD Fire Control Network",
          "C2BMC"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "U.S. Missile Defense Agency GMD",
          "url": "https://www.mda.mil/",
          "publisher": "U.S. Missile Defense Agency GMD",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "s-500",
    "name": "S-500",
    "officialDesignation": "S-500 Prometey Air and Missile Defence System",
    "commonName": "S-500",
    "aliases": [
      "S-500",
      "S-500 Prometey Air and Missile Defence System"
    ],
    "familyName": "S-500 Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 5,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')"
    ],
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "s-500",
      "air-defence-high-altitude",
      "high-altitude / upper-tier defence"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "S-500 is intended as a high-tier Russian air and missile-defence layer for advanced aerodynamic and ballistic threats.",
    "fullOverview": "S-500 is intended as a high-tier Russian air and missile-defence layer for advanced aerodynamic and ballistic threats.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Almaz-Antey S-500 public information",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.8,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.9
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "High-Altitude Air and Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Mobile battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Long-range phased-array radar",
        "Missile-defence radar",
        "High-altitude interceptor sensors"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey S-500 public information",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey S-500 public information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "s-500",
      "name": "S-500",
      "officialDesignation": "S-500 Prometey Air and Missile Defence System",
      "alternateNames": [
        "S-500",
        "S-500 Prometey Air and Missile Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "airDefenceCategory": "HIGH_ALTITUDE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "Russia",
      "manufacturer": "Almaz-Antey",
      "operator": [
        "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "S-500 is intended as a high-tier Russian air and missile-defence layer for advanced aerodynamic and ballistic threats.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Almaz-Antey Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "S-500 Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Almaz-Antey S-500 public information",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey S-500 public information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "arrow-2",
    "name": "Arrow 2",
    "officialDesignation": "Arrow 2 Ballistic Missile Defense Interceptor",
    "commonName": "Arrow 2",
    "aliases": [
      "Arrow 2",
      "Arrow 2 Ballistic Missile Defense Interceptor"
    ],
    "familyName": "Arrow 2 Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 6,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Israel",
    "originCountries": [
      "Israel",
      "United States"
    ],
    "developerCountries": [
      "Israel",
      "United States"
    ],
    "manufacturerCountries": [
      "Israel",
      "United States"
    ],
    "operatorCountries": [
      "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')"
    ],
    "developer": "IAI / Boeing",
    "manufacturer": "IAI / Boeing",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "arrow 2",
      "air-defence-high-altitude",
      "high-altitude / upper-tier defence"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "Arrow 2 is a mature upper-tier ballistic missile interceptor that remains part of Israel's layered modern missile-defence architecture.",
    "fullOverview": "Arrow 2 is a mature upper-tier ballistic missile interceptor that remains part of Israel's layered modern missile-defence architecture.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "IAI Arrow",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.8,
      "reliability": 4.8,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.8,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2000 (modernized current service)",
      "crew": "Battery / system operators",
      "manufacturer": "IAI / Boeing",
      "primaryRole": "Upper-Tier Endo-Atmospheric BMD",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Max Speed",
          "value": "Not applicable",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Green Pine family radar",
        "Interceptor seeker",
        "Integrated BMD battle management"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "IAI Arrow",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI Arrow",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "arrow-2",
      "name": "Arrow 2",
      "officialDesignation": "Arrow 2 Ballistic Missile Defense Interceptor",
      "alternateNames": [
        "Arrow 2",
        "Arrow 2 Ballistic Missile Defense Interceptor"
      ],
      "domain": "AIR_DEFENCE",
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "airDefenceCategory": "HIGH_ALTITUDE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "Israel",
      "manufacturer": "IAI / Boeing",
      "operator": [
        "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "Arrow 2 is a mature upper-tier ballistic missile interceptor that remains part of Israel's layered modern missile-defence architecture.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "IAI / Boeing Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Arrow 2 Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "IAI Arrow",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI Arrow",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "hq-19",
    "name": "HQ-19",
    "officialDesignation": "HQ-19 Ballistic Missile Defence System",
    "commonName": "HQ-19",
    "aliases": [
      "HQ-19",
      "HQ-19 Ballistic Missile Defence System"
    ],
    "familyName": "HQ-19 Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 7,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('China', 'https://military-doctrine.vercel.app/country?country=China')"
    ],
    "developer": "Chinese defence industry",
    "manufacturer": "Chinese defence industry",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "hq-19",
      "air-defence-high-altitude",
      "high-altitude / upper-tier defence"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "HQ-19 is associated with China's high-tier ballistic missile-defence architecture; detailed public technical data remain limited.",
    "fullOverview": "HQ-19 is associated with China's high-tier ballistic missile-defence architecture; detailed public technical data remain limited.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Chinese defence-industry public information",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.7,
      "technology": 4.8,
      "logistics": 4.7,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "Chinese defence industry",
      "primaryRole": "High-Altitude Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "System dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Missile-defence phased-array radar",
        "Integrated tracking network"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Chinese defence-industry public information",
        "url": "https://www.casic.com.cn/",
        "publisher": "Chinese defence-industry public information",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "hq-19",
      "name": "HQ-19",
      "officialDesignation": "HQ-19 Ballistic Missile Defence System",
      "alternateNames": [
        "HQ-19",
        "HQ-19 Ballistic Missile Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "airDefenceCategory": "HIGH_ALTITUDE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "China",
      "manufacturer": "Chinese defence industry",
      "operator": [
        "('China', 'https://military-doctrine.vercel.app/country?country=China')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "HQ-19 is associated with China's high-tier ballistic missile-defence architecture; detailed public technical data remain limited.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Chinese defence industry Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "HQ-19 Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Chinese defence-industry public information",
          "url": "https://www.casic.com.cn/",
          "publisher": "Chinese defence-industry public information",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "pac-3-mse-high-tier-bmd-layer",
    "name": "PAC-3 MSE High-Tier BMD Layer",
    "officialDesignation": "Patriot PAC-3 MSE Ballistic Missile Defence Layer",
    "commonName": "PAC-3 MSE High-Tier BMD Layer",
    "aliases": [
      "PAC-3 MSE High-Tier BMD Layer",
      "Patriot PAC-3 MSE Ballistic Missile Defence Layer"
    ],
    "familyName": "PAC-3 MSE High-Tier BMD Layer Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 8,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
      "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')",
      "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')",
      "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')",
      "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
    ],
    "developer": "Lockheed Martin",
    "manufacturer": "Lockheed Martin",
    "dataConfidence": "VERIFIED",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "pac-3 mse high-tier bmd layer",
      "air-defence-high-altitude",
      "high-altitude / upper-tier defence"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "PAC-3 MSE provides the lower terminal layer of modern ballistic missile defence with a hit-to-kill interceptor.",
    "fullOverview": "PAC-3 MSE provides the lower terminal layer of modern ballistic missile defence with a hit-to-kill interceptor.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Lockheed Martin PAC-3 MSE",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.7,
      "costEfficiency": 4.6,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Battery / system operators",
      "manufacturer": "Lockheed Martin",
      "primaryRole": "Terminal Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "120+",
          "unit": "",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Patriot multifunction radar",
        "Ka-band active seeker",
        "Engagement control station"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Lockheed Martin PAC-3 MSE",
        "url": "https://www.lockheedmartin.com/",
        "publisher": "Lockheed Martin PAC-3 MSE",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "pac-3-mse-high-tier-bmd-layer",
      "name": "PAC-3 MSE High-Tier BMD Layer",
      "officialDesignation": "Patriot PAC-3 MSE Ballistic Missile Defence Layer",
      "alternateNames": [
        "PAC-3 MSE High-Tier BMD Layer",
        "Patriot PAC-3 MSE Ballistic Missile Defence Layer"
      ],
      "domain": "AIR_DEFENCE",
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "airDefenceCategory": "HIGH_ALTITUDE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "United States",
      "manufacturer": "Lockheed Martin",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
        "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')",
        "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')",
        "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')",
        "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "PAC-3 MSE provides the lower terminal layer of modern ballistic missile defence with a hit-to-kill interceptor.",
      "performance": {
        "maxEngagementRangeKm": 120,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Lockheed Martin Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "PAC-3 MSE High-Tier BMD Layer Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Lockheed Martin PAC-3 MSE",
          "url": "https://www.lockheedmartin.com/",
          "publisher": "Lockheed Martin PAC-3 MSE",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "barak-mx-area-defence",
    "name": "Barak MX Area Defence",
    "officialDesignation": "Barak MX Integrated Area Defence Architecture",
    "commonName": "Barak MX Area Defence",
    "aliases": [
      "Barak MX Area Defence",
      "Barak MX Integrated Area Defence Architecture"
    ],
    "familyName": "Barak MX Area Defence Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 1,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Israel",
    "originCountries": [
      "Israel",
      "India"
    ],
    "developerCountries": [
      "Israel",
      "India"
    ],
    "manufacturerCountries": [
      "Israel",
      "India"
    ],
    "operatorCountries": [
      "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
      "('India', 'https://military-doctrine.vercel.app/country?country=India')",
      "('Azerbaijan', 'https://military-doctrine.vercel.app/country?country=Azerbaijan')",
      "('Morocco', 'https://military-doctrine.vercel.app/country?country=Morocco')"
    ],
    "developer": "IAI",
    "manufacturer": "IAI",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "barak mx area defence",
      "air-defence-area",
      "networked area defence"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Barak MX integrates multiple interceptor tiers, sensors and command nodes into a scalable area-defence architecture.",
    "fullOverview": "Barak MX integrates multiple interceptor tiers, sensors and command nodes into a scalable area-defence architecture.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "IAI Barak MX",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.8,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.9,
      "survivability": 4.8,
      "rangeMobility": 4.9,
      "precision": 4.9,
      "technology": 4.9,
      "logistics": 4.8,
      "costEfficiency": 4.8,
      "combatMaturity": 4.9,
      "upgradePotential": 4.9
    },
    "specs": {
      "entryIntoService": "2017",
      "crew": "Battery / system operators",
      "manufacturer": "IAI",
      "primaryRole": "Layered Networked Area Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "150",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Multifunction AESA radar",
        "Networked C2",
        "EO/IR sensors"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "IAI Barak MX",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI Barak MX",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "barak-mx-area-defence",
      "name": "Barak MX Area Defence",
      "officialDesignation": "Barak MX Integrated Area Defence Architecture",
      "alternateNames": [
        "Barak MX Area Defence",
        "Barak MX Integrated Area Defence Architecture"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "airDefenceCategory": "AREA_DEFENCE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "Israel",
      "manufacturer": "IAI",
      "operator": [
        "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
        "('India', 'https://military-doctrine.vercel.app/country?country=India')",
        "('Azerbaijan', 'https://military-doctrine.vercel.app/country?country=Azerbaijan')",
        "('Morocco', 'https://military-doctrine.vercel.app/country?country=Morocco')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Barak MX integrates multiple interceptor tiers, sensors and command nodes into a scalable area-defence architecture.",
      "performance": {
        "maxEngagementRangeKm": 150,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "IAI Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Barak MX Area Defence Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "IAI Barak MX",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI Barak MX",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "samp-t-ng-area-defence",
    "name": "SAMP/T NG Area Defence",
    "officialDesignation": "SAMP/T NG European Area Defence Architecture",
    "commonName": "SAMP/T NG Area Defence",
    "aliases": [
      "SAMP/T NG Area Defence",
      "SAMP/T NG European Area Defence Architecture"
    ],
    "familyName": "SAMP/T NG Area Defence Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 2,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "France",
    "originCountries": [
      "France",
      "Italy"
    ],
    "developerCountries": [
      "France",
      "Italy"
    ],
    "manufacturerCountries": [
      "France",
      "Italy"
    ],
    "operatorCountries": [
      "('France', 'https://military-doctrine.vercel.app/country?country=France')",
      "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')"
    ],
    "developer": "Eurosam / MBDA / Thales",
    "manufacturer": "Eurosam / MBDA / Thales",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "samp/t ng area defence",
      "air-defence-area",
      "networked area defence"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "SAMP/T NG provides mobile wide-area defence using advanced Aster interceptors, AESA radar and networked command systems.",
    "fullOverview": "SAMP/T NG provides mobile wide-area defence using advanced Aster interceptors, AESA radar and networked command systems.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "MBDA / Eurosam SAMP/T NG",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.9,
      "survivability": 4.8,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.9,
      "logistics": 4.8,
      "costEfficiency": 4.8,
      "combatMaturity": 4.9,
      "upgradePotential": 4.9
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "Eurosam / MBDA / Thales",
      "primaryRole": "Wide-Area Air and Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "150",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Ground Fire 300 AESA radar",
        "Aster seeker",
        "Integrated European C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "MBDA / Eurosam SAMP/T NG",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA / Eurosam SAMP/T NG",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "samp-t-ng-area-defence",
      "name": "SAMP/T NG Area Defence",
      "officialDesignation": "SAMP/T NG European Area Defence Architecture",
      "alternateNames": [
        "SAMP/T NG Area Defence",
        "SAMP/T NG European Area Defence Architecture"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "airDefenceCategory": "AREA_DEFENCE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "France",
      "manufacturer": "Eurosam / MBDA / Thales",
      "operator": [
        "('France', 'https://military-doctrine.vercel.app/country?country=France')",
        "('Italy', 'https://military-doctrine.vercel.app/country?country=Italy')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "SAMP/T NG provides mobile wide-area defence using advanced Aster interceptors, AESA radar and networked command systems.",
      "performance": {
        "maxEngagementRangeKm": 150,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Eurosam / MBDA / Thales Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "SAMP/T NG Area Defence Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "MBDA / Eurosam SAMP/T NG",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA / Eurosam SAMP/T NG",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "nasams-distributed-defence",
    "name": "NASAMS Distributed Defence",
    "officialDesignation": "NASAMS Distributed Air Defence Architecture",
    "commonName": "NASAMS Distributed Defence",
    "aliases": [
      "NASAMS Distributed Defence",
      "NASAMS Distributed Air Defence Architecture"
    ],
    "familyName": "NASAMS Distributed Defence Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 3,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Norway",
    "originCountries": [
      "Norway",
      "United States"
    ],
    "developerCountries": [
      "Norway",
      "United States"
    ],
    "manufacturerCountries": [
      "Norway",
      "United States"
    ],
    "operatorCountries": [
      "('Norway', 'https://military-doctrine.vercel.app/country?country=Norway')",
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')",
      "('Australia', 'https://military-doctrine.vercel.app/country?country=Australia')",
      "('Finland', 'https://military-doctrine.vercel.app/country?country=Finland')",
      "('Netherlands', 'https://military-doctrine.vercel.app/country?country=Netherlands')",
      "('Spain', 'https://military-doctrine.vercel.app/country?country=Spain')",
      "('Lithuania', 'https://military-doctrine.vercel.app/country?country=Lithuania')"
    ],
    "developer": "Kongsberg / Raytheon",
    "manufacturer": "Kongsberg / Raytheon",
    "dataConfidence": "VERIFIED",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "nasams distributed defence",
      "air-defence-area",
      "networked area defence"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "NASAMS can distribute sensors, launchers and command nodes across a protected area, creating overlapping air-defence coverage.",
    "fullOverview": "NASAMS can distribute sensors, launchers and command nodes across a protected area, creating overlapping air-defence coverage.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Kongsberg NASAMS",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.8,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.9
    },
    "specs": {
      "entryIntoService": "1995 (current NASAMS 3 architecture)",
      "crew": "Battery / system operators",
      "manufacturer": "Kongsberg / Raytheon",
      "primaryRole": "Distributed Networked Area Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "50",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Distributed battery",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "3D radar network",
        "Fire Distribution Center",
        "EO/IR sensors"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Kongsberg NASAMS",
        "url": "https://www.kongsberg.com/",
        "publisher": "Kongsberg NASAMS",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "nasams-distributed-defence",
      "name": "NASAMS Distributed Defence",
      "officialDesignation": "NASAMS Distributed Air Defence Architecture",
      "alternateNames": [
        "NASAMS Distributed Defence",
        "NASAMS Distributed Air Defence Architecture"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "airDefenceCategory": "AREA_DEFENCE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "Norway",
      "manufacturer": "Kongsberg / Raytheon",
      "operator": [
        "('Norway', 'https://military-doctrine.vercel.app/country?country=Norway')",
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')",
        "('Australia', 'https://military-doctrine.vercel.app/country?country=Australia')",
        "('Finland', 'https://military-doctrine.vercel.app/country?country=Finland')",
        "('Netherlands', 'https://military-doctrine.vercel.app/country?country=Netherlands')",
        "('Spain', 'https://military-doctrine.vercel.app/country?country=Spain')",
        "('Lithuania', 'https://military-doctrine.vercel.app/country?country=Lithuania')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "NASAMS can distribute sensors, launchers and command nodes across a protected area, creating overlapping air-defence coverage.",
      "performance": {
        "maxEngagementRangeKm": 50,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Kongsberg / Raytheon Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "NASAMS Distributed Defence Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Kongsberg NASAMS",
          "url": "https://www.kongsberg.com/",
          "publisher": "Kongsberg NASAMS",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "iris-t-slm-area-defence",
    "name": "IRIS-T SLM Area Defence",
    "officialDesignation": "IRIS-T SLM Networked Area Defence System",
    "commonName": "IRIS-T SLM Area Defence",
    "aliases": [
      "IRIS-T SLM Area Defence",
      "IRIS-T SLM Networked Area Defence System"
    ],
    "familyName": "IRIS-T SLM Area Defence Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 4,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
    ],
    "developer": "Diehl Defence",
    "manufacturer": "Diehl Defence",
    "dataConfidence": "VERIFIED",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "iris-t slm area defence",
      "air-defence-area",
      "networked area defence"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "IRIS-T SLM uses distributed launchers, radar and C2 to create a modern medium-range defensive network against aircraft and cruise missiles.",
    "fullOverview": "IRIS-T SLM uses distributed launchers, radar and C2 to create a modern medium-range defensive network against aircraft and cruise missiles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Diehl Defence IRIS-T SL",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.8,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2022",
      "crew": "Battery / system operators",
      "manufacturer": "Diehl Defence",
      "primaryRole": "Mobile Area Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "40",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "TRML-4D AESA",
        "IRIS-T seeker",
        "Tactical data links"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Diehl Defence IRIS-T SL",
        "url": "https://www.diehl.com/defence/en/",
        "publisher": "Diehl Defence IRIS-T SL",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "iris-t-slm-area-defence",
      "name": "IRIS-T SLM Area Defence",
      "officialDesignation": "IRIS-T SLM Networked Area Defence System",
      "alternateNames": [
        "IRIS-T SLM Area Defence",
        "IRIS-T SLM Networked Area Defence System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "airDefenceCategory": "AREA_DEFENCE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "Germany",
      "manufacturer": "Diehl Defence",
      "operator": [
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "IRIS-T SLM uses distributed launchers, radar and C2 to create a modern medium-range defensive network against aircraft and cruise missiles.",
      "performance": {
        "maxEngagementRangeKm": 40,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Diehl Defence Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "IRIS-T SLM Area Defence Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Diehl Defence IRIS-T SL",
          "url": "https://www.diehl.com/defence/en/",
          "publisher": "Diehl Defence IRIS-T SL",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "patriot-iamd",
    "name": "Patriot IAMD",
    "officialDesignation": "Patriot Integrated Air and Missile Defence Architecture",
    "commonName": "Patriot IAMD",
    "aliases": [
      "Patriot IAMD",
      "Patriot Integrated Air and Missile Defence Architecture"
    ],
    "familyName": "Patriot IAMD Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 5,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
      "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')",
      "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')",
      "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')",
      "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
    ],
    "developer": "Lockheed Martin / RTX",
    "manufacturer": "Lockheed Martin / RTX",
    "dataConfidence": "VERIFIED",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "patriot iamd",
      "air-defence-area",
      "networked area defence"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Modern Patriot architecture combines long-range surveillance, engagement radar, PAC-2 and PAC-3 family interceptors, and networked command.",
    "fullOverview": "Modern Patriot architecture combines long-range surveillance, engagement radar, PAC-2 and PAC-3 family interceptors, and networked command.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Lockheed Martin Patriot / PAC-3",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.7,
      "technology": 4.8,
      "logistics": 4.7,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "1980s (current PAC-3 MSE architecture)",
      "crew": "Battery / system operators",
      "manufacturer": "Lockheed Martin / RTX",
      "primaryRole": "Integrated Area Air and Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "120+",
          "unit": "",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery/site dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "AN/MPQ-65 family radar",
        "PAC-3 seeker",
        "Integrated fire-control network"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Lockheed Martin Patriot / PAC-3",
        "url": "https://www.lockheedmartin.com/",
        "publisher": "Lockheed Martin Patriot / PAC-3",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "patriot-iamd",
      "name": "Patriot IAMD",
      "officialDesignation": "Patriot Integrated Air and Missile Defence Architecture",
      "alternateNames": [
        "Patriot IAMD",
        "Patriot Integrated Air and Missile Defence Architecture"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "airDefenceCategory": "AREA_DEFENCE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "United States",
      "manufacturer": "Lockheed Martin / RTX",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
        "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')",
        "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')",
        "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')",
        "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Modern Patriot architecture combines long-range surveillance, engagement radar, PAC-2 and PAC-3 family interceptors, and networked command.",
      "performance": {
        "maxEngagementRangeKm": 120,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Lockheed Martin / RTX Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Patriot IAMD Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Lockheed Martin Patriot / PAC-3",
          "url": "https://www.lockheedmartin.com/",
          "publisher": "Lockheed Martin Patriot / PAC-3",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "aegis-ashore-area-defence",
    "name": "Aegis Ashore Area Defence",
    "officialDesignation": "Aegis Ashore Integrated Area Air and Missile Defence",
    "commonName": "Aegis Ashore Area Defence",
    "aliases": [
      "Aegis Ashore Area Defence",
      "Aegis Ashore Integrated Area Air and Missile Defence"
    ],
    "familyName": "Aegis Ashore Area Defence Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 6,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
      "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')",
      "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')"
    ],
    "developer": "Lockheed Martin",
    "manufacturer": "Lockheed Martin",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "aegis ashore area defence",
      "air-defence-area",
      "networked area defence"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Aegis Ashore provides a persistent integrated area-defence layer using Aegis combat management and Standard Missile interceptors.",
    "fullOverview": "Aegis Ashore provides a persistent integrated area-defence layer using Aegis combat management and Standard Missile interceptors.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "U.S. Missile Defense Agency",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.7,
      "costEfficiency": 4.6,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2016",
      "crew": "Battery / system operators",
      "manufacturer": "Lockheed Martin",
      "primaryRole": "Fixed Integrated Area Air and Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Configuration dependent",
          "unit": "",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not applicable",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Fixed-site",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "SPY-family radar",
        "Aegis combat system",
        "SM-family interceptors"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "U.S. Missile Defense Agency",
        "url": "https://www.mda.mil/",
        "publisher": "U.S. Missile Defense Agency",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "aegis-ashore-area-defence",
      "name": "Aegis Ashore Area Defence",
      "officialDesignation": "Aegis Ashore Integrated Area Air and Missile Defence",
      "alternateNames": [
        "Aegis Ashore Area Defence",
        "Aegis Ashore Integrated Area Air and Missile Defence"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "airDefenceCategory": "AREA_DEFENCE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "United States",
      "manufacturer": "Lockheed Martin",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
        "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')",
        "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Aegis Ashore provides a persistent integrated area-defence layer using Aegis combat management and Standard Missile interceptors.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Lockheed Martin Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Aegis Ashore Area Defence Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "U.S. Missile Defense Agency",
          "url": "https://www.mda.mil/",
          "publisher": "U.S. Missile Defense Agency",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "s-400-area-defence",
    "name": "S-400 Area Defence",
    "officialDesignation": "S-400 Integrated Strategic Area Air Defence",
    "commonName": "S-400 Area Defence",
    "aliases": [
      "S-400 Area Defence",
      "S-400 Integrated Strategic Area Air Defence"
    ],
    "familyName": "S-400 Area Defence Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 7,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')",
      "('China', 'https://military-doctrine.vercel.app/country?country=China')",
      "('Türkiye', 'https://military-doctrine.vercel.app/country?country=T%C3%BCrkiye')",
      "('India', 'https://military-doctrine.vercel.app/country?country=India')",
      "('Belarus', 'https://military-doctrine.vercel.app/country?country=Belarus')"
    ],
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "s-400 area defence",
      "air-defence-area",
      "networked area defence"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "S-400 combines multiple missile types, surveillance radar and engagement radar into a layered mobile area-defence network.",
    "fullOverview": "S-400 combines multiple missile types, surveillance radar and engagement radar into a layered mobile area-defence network.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Almaz-Antey S-400",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.7,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2007 (current missile/radar generations)",
      "crew": "Battery / system operators",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "Strategic Mobile Area Air Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "400",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "91N6E radar",
        "92N6E engagement radar",
        "Integrated command network"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey S-400",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey S-400",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "s-400-area-defence",
      "name": "S-400 Area Defence",
      "officialDesignation": "S-400 Integrated Strategic Area Air Defence",
      "alternateNames": [
        "S-400 Area Defence",
        "S-400 Integrated Strategic Area Air Defence"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "airDefenceCategory": "AREA_DEFENCE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "Russia",
      "manufacturer": "Almaz-Antey",
      "operator": [
        "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')",
        "('China', 'https://military-doctrine.vercel.app/country?country=China')",
        "('Türkiye', 'https://military-doctrine.vercel.app/country?country=T%C3%BCrkiye')",
        "('India', 'https://military-doctrine.vercel.app/country?country=India')",
        "('Belarus', 'https://military-doctrine.vercel.app/country?country=Belarus')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "S-400 combines multiple missile types, surveillance radar and engagement radar into a layered mobile area-defence network.",
      "performance": {
        "maxEngagementRangeKm": 400,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Almaz-Antey Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "S-400 Area Defence Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Almaz-Antey S-400",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey S-400",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "david-s-sling-area-layer",
    "name": "David's Sling Area Layer",
    "officialDesignation": "David's Sling Integrated Upper-Middle Area Defence Layer",
    "commonName": "David's Sling Area Layer",
    "aliases": [
      "David's Sling Area Layer",
      "David's Sling Integrated Upper-Middle Area Defence Layer"
    ],
    "familyName": "David's Sling Area Layer Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 8,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Israel",
    "originCountries": [
      "Israel",
      "United States"
    ],
    "developerCountries": [
      "Israel",
      "United States"
    ],
    "manufacturerCountries": [
      "Israel",
      "United States"
    ],
    "operatorCountries": [
      "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
      "('Finland', 'https://military-doctrine.vercel.app/country?country=Finland')"
    ],
    "developer": "Rafael / RTX",
    "manufacturer": "Rafael / RTX",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "david's sling area layer",
      "air-defence-area",
      "networked area defence"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "David's Sling forms a modern area-defence layer against longer-range aerodynamic and ballistic threats.",
    "fullOverview": "David's Sling forms a modern area-defence layer against longer-range aerodynamic and ballistic threats.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Rafael David's Sling",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.6,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "2017",
      "crew": "Battery / system operators",
      "manufacturer": "Rafael / RTX",
      "primaryRole": "Upper-Layer Area Air and Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "300",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "EL/M-2084 radar",
        "Stunner seeker",
        "Integrated BMD C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Rafael David's Sling",
        "url": "https://www.rafael.co.il/",
        "publisher": "Rafael David's Sling",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "david-s-sling-area-layer",
      "name": "David's Sling Area Layer",
      "officialDesignation": "David's Sling Integrated Upper-Middle Area Defence Layer",
      "alternateNames": [
        "David's Sling Area Layer",
        "David's Sling Integrated Upper-Middle Area Defence Layer"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "airDefenceCategory": "AREA_DEFENCE",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "Israel",
      "manufacturer": "Rafael / RTX",
      "operator": [
        "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
        "('Finland', 'https://military-doctrine.vercel.app/country?country=Finland')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "David's Sling forms a modern area-defence layer against longer-range aerodynamic and ballistic threats.",
      "performance": {
        "maxEngagementRangeKm": 300,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Rafael / RTX Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "David's Sling Area Layer Interceptor",
        "guidanceMethod": "Active Radar Homing (ARH)",
        "warheadType": "HE Blast-Fragmentation"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Rafael David's Sling",
          "url": "https://www.rafael.co.il/",
          "publisher": "Rafael David's Sling",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "arrow-3-bmd",
    "name": "Arrow 3 BMD",
    "officialDesignation": "Arrow 3 Exo-Atmospheric Ballistic Missile Defense",
    "commonName": "Arrow 3 BMD",
    "aliases": [
      "Arrow 3 BMD",
      "Arrow 3 Exo-Atmospheric Ballistic Missile Defense"
    ],
    "familyName": "Arrow 3 BMD Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 1,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Israel",
    "originCountries": [
      "Israel",
      "United States"
    ],
    "developerCountries": [
      "Israel",
      "United States"
    ],
    "manufacturerCountries": [
      "Israel",
      "United States"
    ],
    "operatorCountries": [
      "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')"
    ],
    "developer": "IAI / Boeing",
    "manufacturer": "IAI / Boeing",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "arrow 3 bmd",
      "air-defence-abmd",
      "ballistic missile defence"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Arrow 3 provides a high-tier hit-to-kill layer against ballistic missiles outside the atmosphere.",
    "fullOverview": "Arrow 3 provides a high-tier hit-to-kill layer against ballistic missiles outside the atmosphere.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "IAI Arrow 3",
    "ratings": {
      "capability": 4.9,
      "offensive": 4.8,
      "defensive": 5,
      "reliability": 4.9,
      "maintainability": 5,
      "survivability": 4.9,
      "rangeMobility": 4.9,
      "precision": 4.9,
      "technology": 5,
      "logistics": 4.9,
      "costEfficiency": 4.9,
      "combatMaturity": 5,
      "upgradePotential": 5
    },
    "specs": {
      "entryIntoService": "2017",
      "crew": "Battery / site operators",
      "manufacturer": "IAI / Boeing",
      "primaryRole": "Exo-Atmospheric Hit-to-Kill BMD",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Green Pine family radar",
        "Infrared seeker",
        "BMD battle management"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "IAI Arrow 3",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI Arrow 3",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "arrow-3-bmd",
      "name": "Arrow 3 BMD",
      "officialDesignation": "Arrow 3 Exo-Atmospheric Ballistic Missile Defense",
      "alternateNames": [
        "Arrow 3 BMD",
        "Arrow 3 Exo-Atmospheric Ballistic Missile Defense"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "airDefenceCategory": "ABMD",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "Israel",
      "manufacturer": "IAI / Boeing",
      "operator": [
        "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Arrow 3 provides a high-tier hit-to-kill layer against ballistic missiles outside the atmosphere.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "IAI / Boeing Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Arrow 3 BMD Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "IAI Arrow 3",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI Arrow 3",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "thaad-bmd",
    "name": "THAAD BMD",
    "officialDesignation": "Terminal High Altitude Area Defense",
    "commonName": "THAAD BMD",
    "aliases": [
      "THAAD BMD",
      "Terminal High Altitude Area Defense"
    ],
    "familyName": "THAAD BMD Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 2,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
      "('United Arab Emirates', 'https://military-doctrine.vercel.app/country?country=United%20Arab%20Emirates')",
      "('Saudi Arabia', 'https://military-doctrine.vercel.app/country?country=Saudi%20Arabia')"
    ],
    "developer": "Lockheed Martin",
    "manufacturer": "Lockheed Martin",
    "dataConfidence": "VERIFIED",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "thaad bmd",
      "air-defence-abmd",
      "ballistic missile defence"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "THAAD is a purpose-built terminal BMD system using kinetic hit-to-kill interception in upper-endoatmospheric and exo-atmospheric regions.",
    "fullOverview": "THAAD is a purpose-built terminal BMD system using kinetic hit-to-kill interception in upper-endoatmospheric and exo-atmospheric regions.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "U.S. Missile Defense Agency",
    "ratings": {
      "capability": 4.9,
      "offensive": 4.8,
      "defensive": 5,
      "reliability": 4.9,
      "maintainability": 4.9,
      "survivability": 4.8,
      "rangeMobility": 4.9,
      "precision": 4.9,
      "technology": 4.9,
      "logistics": 4.9,
      "costEfficiency": 4.8,
      "combatMaturity": 4.9,
      "upgradePotential": 5
    },
    "specs": {
      "entryIntoService": "2008",
      "crew": "Battery / site operators",
      "manufacturer": "Lockheed Martin",
      "primaryRole": "Terminal High-Altitude Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "200",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "AN/TPY-2 X-band radar",
        "Infrared seeker",
        "Integrated fire control"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "U.S. Missile Defense Agency",
        "url": "https://www.mda.mil/",
        "publisher": "U.S. Missile Defense Agency",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "thaad-bmd",
      "name": "THAAD BMD",
      "officialDesignation": "Terminal High Altitude Area Defense",
      "alternateNames": [
        "THAAD BMD",
        "Terminal High Altitude Area Defense"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "airDefenceCategory": "ABMD",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "United States",
      "manufacturer": "Lockheed Martin",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
        "('United Arab Emirates', 'https://military-doctrine.vercel.app/country?country=United%20Arab%20Emirates')",
        "('Saudi Arabia', 'https://military-doctrine.vercel.app/country?country=Saudi%20Arabia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "THAAD is a purpose-built terminal BMD system using kinetic hit-to-kill interception in upper-endoatmospheric and exo-atmospheric regions.",
      "performance": {
        "maxEngagementRangeKm": 200,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Lockheed Martin Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "THAAD BMD Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "U.S. Missile Defense Agency",
          "url": "https://www.mda.mil/",
          "publisher": "U.S. Missile Defense Agency",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "sm-3-block-iia",
    "name": "SM-3 Block IIA",
    "officialDesignation": "RIM-161 Standard Missile-3 Block IIA",
    "commonName": "SM-3 Block IIA",
    "aliases": [
      "SM-3 Block IIA",
      "RIM-161 Standard Missile-3 Block IIA"
    ],
    "familyName": "SM-3 Block IIA Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 3,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "United States",
    "originCountries": [
      "United States",
      "Japan"
    ],
    "developerCountries": [
      "United States",
      "Japan"
    ],
    "manufacturerCountries": [
      "United States",
      "Japan"
    ],
    "operatorCountries": [
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
      "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')"
    ],
    "developer": "RTX / Boeing / Lockheed Martin",
    "manufacturer": "RTX / Boeing / Lockheed Martin",
    "dataConfidence": "VERIFIED",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "sm-3 block iia",
      "air-defence-abmd",
      "ballistic missile defence"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "SM-3 Block IIA is a modern exo-atmospheric ballistic missile interceptor integrated with Aegis BMD.",
    "fullOverview": "SM-3 Block IIA is a modern exo-atmospheric ballistic missile interceptor integrated with Aegis BMD.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Boeing SM-3 / U.S. MDA",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.9,
      "survivability": 4.8,
      "rangeMobility": 4.9,
      "precision": 4.9,
      "technology": 4.9,
      "logistics": 4.8,
      "costEfficiency": 4.8,
      "combatMaturity": 4.9,
      "upgradePotential": 4.9
    },
    "specs": {
      "entryIntoService": "2020",
      "crew": "Battery / site operators",
      "manufacturer": "RTX / Boeing / Lockheed Martin",
      "primaryRole": "Sea-Based Exo-Atmospheric Midcourse BMD",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Max Speed",
          "value": "Not applicable",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Aegis platform dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "SPY-series radar",
        "Aegis combat system",
        "Kinetic interceptor seeker"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Boeing SM-3 / U.S. MDA",
        "url": "https://www.boeing.com/defense/missile-defense/",
        "publisher": "Boeing SM-3 / U.S. MDA",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "sm-3-block-iia",
      "name": "SM-3 Block IIA",
      "officialDesignation": "RIM-161 Standard Missile-3 Block IIA",
      "alternateNames": [
        "SM-3 Block IIA",
        "RIM-161 Standard Missile-3 Block IIA"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "airDefenceCategory": "ABMD",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "United States",
      "manufacturer": "RTX / Boeing / Lockheed Martin",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
        "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "SM-3 Block IIA is a modern exo-atmospheric ballistic missile interceptor integrated with Aegis BMD.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "RTX / Boeing / Lockheed Martin Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "SM-3 Block IIA Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Boeing SM-3 / U.S. MDA",
          "url": "https://www.boeing.com/defense/missile-defense/",
          "publisher": "Boeing SM-3 / U.S. MDA",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "gmd-bmd",
    "name": "GMD BMD",
    "officialDesignation": "Ground-Based Midcourse Defense",
    "commonName": "GMD BMD",
    "aliases": [
      "GMD BMD",
      "Ground-Based Midcourse Defense"
    ],
    "familyName": "GMD BMD Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 4,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')"
    ],
    "developer": "Boeing / Northrop Grumman / Lockheed Martin",
    "manufacturer": "Boeing / Northrop Grumman / Lockheed Martin",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "gmd bmd",
      "air-defence-abmd",
      "ballistic missile defence"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "GMD uses Ground-Based Interceptors and a distributed sensor network for strategic ballistic missile defence.",
    "fullOverview": "GMD uses Ground-Based Interceptors and a distributed sensor network for strategic ballistic missile defence.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "U.S. Missile Defense Agency GMD",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.9,
      "survivability": 4.8,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.9,
      "logistics": 4.8,
      "costEfficiency": 4.8,
      "combatMaturity": 4.9,
      "upgradePotential": 4.9
    },
    "specs": {
      "entryIntoService": "2004",
      "crew": "Battery / site operators",
      "manufacturer": "Boeing / Northrop Grumman / Lockheed Martin",
      "primaryRole": "Strategic Homeland Midcourse BMD",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Max Speed",
          "value": "Not applicable",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Fixed-site",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Early Warning Radar",
        "AN/TPY-2",
        "Space-based sensors"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "U.S. Missile Defense Agency GMD",
        "url": "https://www.mda.mil/",
        "publisher": "U.S. Missile Defense Agency GMD",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "gmd-bmd",
      "name": "GMD BMD",
      "officialDesignation": "Ground-Based Midcourse Defense",
      "alternateNames": [
        "GMD BMD",
        "Ground-Based Midcourse Defense"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "airDefenceCategory": "ABMD",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "United States",
      "manufacturer": "Boeing / Northrop Grumman / Lockheed Martin",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "GMD uses Ground-Based Interceptors and a distributed sensor network for strategic ballistic missile defence.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Boeing / Northrop Grumman / Lockheed Martin Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "GMD BMD Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "U.S. Missile Defense Agency GMD",
          "url": "https://www.mda.mil/",
          "publisher": "U.S. Missile Defense Agency GMD",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "pac-3-mse-bmd",
    "name": "PAC-3 MSE BMD",
    "officialDesignation": "Patriot PAC-3 MSE Terminal BMD Layer",
    "commonName": "PAC-3 MSE BMD",
    "aliases": [
      "PAC-3 MSE BMD",
      "Patriot PAC-3 MSE Terminal BMD Layer"
    ],
    "familyName": "PAC-3 MSE BMD Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 5,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
      "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')",
      "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')",
      "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')",
      "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
    ],
    "developer": "Lockheed Martin",
    "manufacturer": "Lockheed Martin",
    "dataConfidence": "VERIFIED",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "pac-3 mse bmd",
      "air-defence-abmd",
      "ballistic missile defence"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "PAC-3 MSE is a current hit-to-kill terminal ballistic missile interceptor integrated into modern Patriot batteries.",
    "fullOverview": "PAC-3 MSE is a current hit-to-kill terminal ballistic missile interceptor integrated into modern Patriot batteries.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Lockheed Martin PAC-3 MSE",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.8,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.9
    },
    "specs": {
      "entryIntoService": "2015",
      "crew": "Battery / site operators",
      "manufacturer": "Lockheed Martin",
      "primaryRole": "Lower Terminal Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "120+",
          "unit": "",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Patriot radar",
        "Ka-band active seeker",
        "Engagement control"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Lockheed Martin PAC-3 MSE",
        "url": "https://www.lockheedmartin.com/",
        "publisher": "Lockheed Martin PAC-3 MSE",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "pac-3-mse-bmd",
      "name": "PAC-3 MSE BMD",
      "officialDesignation": "Patriot PAC-3 MSE Terminal BMD Layer",
      "alternateNames": [
        "PAC-3 MSE BMD",
        "Patriot PAC-3 MSE Terminal BMD Layer"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "airDefenceCategory": "ABMD",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "United States",
      "manufacturer": "Lockheed Martin",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')",
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
        "('Japan', 'https://military-doctrine.vercel.app/country?country=Japan')",
        "('Poland', 'https://military-doctrine.vercel.app/country?country=Poland')",
        "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')",
        "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "PAC-3 MSE is a current hit-to-kill terminal ballistic missile interceptor integrated into modern Patriot batteries.",
      "performance": {
        "maxEngagementRangeKm": 120,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Lockheed Martin Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "PAC-3 MSE BMD Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Lockheed Martin PAC-3 MSE",
          "url": "https://www.lockheedmartin.com/",
          "publisher": "Lockheed Martin PAC-3 MSE",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "arrow-2-bmd",
    "name": "Arrow 2 BMD",
    "officialDesignation": "Arrow 2 Modernized Ballistic Missile Defence Layer",
    "commonName": "Arrow 2 BMD",
    "aliases": [
      "Arrow 2 BMD",
      "Arrow 2 Modernized Ballistic Missile Defence Layer"
    ],
    "familyName": "Arrow 2 BMD Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 6,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Israel",
    "originCountries": [
      "Israel",
      "United States"
    ],
    "developerCountries": [
      "Israel",
      "United States"
    ],
    "manufacturerCountries": [
      "Israel",
      "United States"
    ],
    "operatorCountries": [
      "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')"
    ],
    "developer": "IAI / Boeing",
    "manufacturer": "IAI / Boeing",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "arrow 2 bmd",
      "air-defence-abmd",
      "ballistic missile defence"
    ],
    "era": "Modern (1992-2015)",
    "shortDescription": "Arrow 2 remains a modernized upper-tier ballistic missile-defence layer within Israel's multi-layer architecture.",
    "fullOverview": "Arrow 2 remains a modernized upper-tier ballistic missile-defence layer within Israel's multi-layer architecture.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "IAI Arrow",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.8,
      "reliability": 4.8,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.8,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2000 (modernized current service)",
      "crew": "Battery / site operators",
      "manufacturer": "IAI / Boeing",
      "primaryRole": "Upper-Tier Endo-Atmospheric BMD",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Max Speed",
          "value": "Not applicable",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Green Pine family radar",
        "Interceptor seeker",
        "BMD command system"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "IAI Arrow",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI Arrow",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "arrow-2-bmd",
      "name": "Arrow 2 BMD",
      "officialDesignation": "Arrow 2 Modernized Ballistic Missile Defence Layer",
      "alternateNames": [
        "Arrow 2 BMD",
        "Arrow 2 Modernized Ballistic Missile Defence Layer"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "airDefenceCategory": "ABMD",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "Israel",
      "manufacturer": "IAI / Boeing",
      "operator": [
        "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Modern (1992-2015)",
      "description": "Arrow 2 remains a modernized upper-tier ballistic missile-defence layer within Israel's multi-layer architecture.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "IAI / Boeing Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Arrow 2 BMD Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "IAI Arrow",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI Arrow",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "s-500-bmd",
    "name": "S-500 BMD",
    "officialDesignation": "S-500 High-Altitude Air and Missile Defence",
    "commonName": "S-500 BMD",
    "aliases": [
      "S-500 BMD",
      "S-500 High-Altitude Air and Missile Defence"
    ],
    "familyName": "S-500 BMD Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 7,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')"
    ],
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "dataConfidence": "MEDIUM",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "s-500 bmd",
      "air-defence-abmd",
      "ballistic missile defence"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "S-500 is intended to add a high-tier Russian missile-defence layer for advanced ballistic and high-altitude threats.",
    "fullOverview": "S-500 is intended to add a high-tier Russian missile-defence layer for advanced ballistic and high-altitude threats.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Almaz-Antey S-500",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.7,
      "technology": 4.8,
      "logistics": 4.7,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / site operators",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "High-Altitude / Advanced BMD",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Mobile battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "High-power phased-array radar",
        "Missile-defence radar",
        "Interceptor sensors"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey S-500",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey S-500",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "s-500-bmd",
      "name": "S-500 BMD",
      "officialDesignation": "S-500 High-Altitude Air and Missile Defence",
      "alternateNames": [
        "S-500 BMD",
        "S-500 High-Altitude Air and Missile Defence"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "airDefenceCategory": "ABMD",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "Russia",
      "manufacturer": "Almaz-Antey",
      "operator": [
        "('Russia', 'https://military-doctrine.vercel.app/country?country=Russia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "S-500 is intended to add a high-tier Russian missile-defence layer for advanced ballistic and high-altitude threats.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Almaz-Antey Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "S-500 BMD Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Almaz-Antey S-500",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey S-500",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "km-sam-block-ii-bmd",
    "name": "KM-SAM Block II BMD",
    "officialDesignation": "Cheongung-II Lower-Tier Ballistic Missile Defence",
    "commonName": "KM-SAM Block II BMD",
    "aliases": [
      "KM-SAM Block II BMD",
      "Cheongung-II Lower-Tier Ballistic Missile Defence"
    ],
    "familyName": "KM-SAM Block II BMD Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 8,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
      "('United Arab Emirates', 'https://military-doctrine.vercel.app/country?country=United%20Arab%20Emirates')",
      "('Saudi Arabia', 'https://military-doctrine.vercel.app/country?country=Saudi%20Arabia')"
    ],
    "developer": "LIG Nex1 / Hanwha Systems",
    "manufacturer": "LIG Nex1 / Hanwha Systems",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "km-sam block ii bmd",
      "air-defence-abmd",
      "ballistic missile defence"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "KM-SAM Block II extends the Korean medium-range architecture into a lower-tier ballistic missile-defence role using hit-to-kill interception.",
    "fullOverview": "KM-SAM Block II extends the Korean medium-range architecture into a lower-tier ballistic missile-defence role using hit-to-kill interception.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "LIG Nex1 KM-SAM",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.7,
      "costEfficiency": 4.6,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2020",
      "crew": "Battery / site operators",
      "manufacturer": "LIG Nex1 / Hanwha Systems",
      "primaryRole": "Lower-Tier Hit-to-Kill BMD",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "40",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Multifunction phased-array radar",
        "Active seeker",
        "Integrated BMD C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "LIG Nex1 KM-SAM",
        "url": "https://www.lignex1.com/",
        "publisher": "LIG Nex1 KM-SAM",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "km-sam-block-ii-bmd",
      "name": "KM-SAM Block II BMD",
      "officialDesignation": "Cheongung-II Lower-Tier Ballistic Missile Defence",
      "alternateNames": [
        "KM-SAM Block II BMD",
        "Cheongung-II Lower-Tier Ballistic Missile Defence"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "airDefenceCategory": "ABMD",
      "tierClassification": "Distributed Strategic Architecture",
      "country": "South Korea",
      "manufacturer": "LIG Nex1 / Hanwha Systems",
      "operator": [
        "('South Korea', 'https://military-doctrine.vercel.app/country?country=South%20Korea')",
        "('United Arab Emirates', 'https://military-doctrine.vercel.app/country?country=United%20Arab%20Emirates')",
        "('Saudi Arabia', 'https://military-doctrine.vercel.app/country?country=Saudi%20Arabia')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "KM-SAM Block II extends the Korean medium-range architecture into a lower-tier ballistic missile-defence role using hit-to-kill interception.",
      "performance": {
        "maxEngagementRangeKm": 40,
        "simultaneousEngagements": 4
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "LIG Nex1 / Hanwha Systems Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "KM-SAM Block II BMD Interceptor",
        "guidanceMethod": "Kinetic Hit-to-Kill (Ka-band/IIR)",
        "warheadType": "Hit-to-Kill Kinetic Dart"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "LIG Nex1 KM-SAM",
          "url": "https://www.lignex1.com/",
          "publisher": "LIG Nex1 KM-SAM",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "m-lids",
    "name": "M-LIDS",
    "officialDesignation": "Mobile Low, Slow, Small Unmanned Aircraft Integrated Defeat System",
    "commonName": "M-LIDS",
    "aliases": [
      "M-LIDS",
      "Mobile Low, Slow, Small Unmanned Aircraft Integrated Defeat System"
    ],
    "familyName": "M-LIDS Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-counter-uas",
    "categoryName": "Counter-UAS / Anti-Drone",
    "subcategory": "Counter-UAS",
    "rankInCategory": 1,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')"
    ],
    "developer": "RTX / Leonardo DRS / SRC",
    "manufacturer": "RTX / Leonardo DRS / SRC",
    "dataConfidence": "VERIFIED",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "m-lids",
      "air-defence-counter-uas",
      "counter-uas"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "M-LIDS integrates radar, electronic warfare, gun effects and Coyote interceptors for Group 1-3 unmanned-aircraft defence.",
    "fullOverview": "M-LIDS integrates radar, electronic warfare, gun effects and Coyote interceptors for Group 1-3 unmanned-aircraft defence.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "U.S. Army / PEO Missiles and Space M-LIDS",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.8,
      "survivability": 4.8,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.8,
      "costEfficiency": 4.8,
      "combatMaturity": 4.9,
      "upgradePotential": 4.9
    },
    "specs": {
      "entryIntoService": "2020",
      "crew": "Battery / system operators",
      "manufacturer": "RTX / Leonardo DRS / SRC",
      "primaryRole": "Mobile Counter-UAS and Drone Swarm Defence",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "M-ATV/Stryker configurations",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Ku-band radar",
        "EO/IR sensors",
        "Electronic support / jamming"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "U.S. Army / PEO Missiles and Space M-LIDS",
        "url": "https://www.army.mil/",
        "publisher": "U.S. Army / PEO Missiles and Space M-LIDS",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "m-lids",
      "name": "M-LIDS",
      "officialDesignation": "Mobile Low, Slow, Small Unmanned Aircraft Integrated Defeat System",
      "alternateNames": [
        "M-LIDS",
        "Mobile Low, Slow, Small Unmanned Aircraft Integrated Defeat System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Counter-UAS / Anti-Drone",
      "subcategory": "Counter-UAS",
      "airDefenceCategory": "COUNTER_UAS",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "United States",
      "manufacturer": "RTX / Leonardo DRS / SRC",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "M-LIDS integrates radar, electronic warfare, gun effects and Coyote interceptors for Group 1-3 unmanned-aircraft defence.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 2
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "RTX / Leonardo DRS / SRC Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "M-LIDS Interceptor",
        "guidanceMethod": "Directed Energy / Non-Kinetic",
        "warheadType": "Directed Energy / Microwave / Laser"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "U.S. Army / PEO Missiles and Space M-LIDS",
          "url": "https://www.army.mil/",
          "publisher": "U.S. Army / PEO Missiles and Space M-LIDS",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "skyranger-30-c-uas",
    "name": "Skyranger 30 C-UAS",
    "officialDesignation": "Skyranger 30 Counter-UAS Configuration",
    "commonName": "Skyranger 30 C-UAS",
    "aliases": [
      "Skyranger 30 C-UAS",
      "Skyranger 30 Counter-UAS Configuration"
    ],
    "familyName": "Skyranger 30 C-UAS Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-counter-uas",
    "categoryName": "Counter-UAS / Anti-Drone",
    "subcategory": "Counter-UAS",
    "rankInCategory": 2,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
      "('Austria', 'https://military-doctrine.vercel.app/country?country=Austria')",
      "('Netherlands', 'https://military-doctrine.vercel.app/country?country=Netherlands')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
    ],
    "developer": "Rheinmetall",
    "manufacturer": "Rheinmetall",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "skyranger 30 c-uas",
      "air-defence-counter-uas",
      "counter-uas"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Skyranger 30 uses programmable 30 mm airburst ammunition and integrated sensors for close-range drone defeat.",
    "fullOverview": "Skyranger 30 uses programmable 30 mm airburst ammunition and integrated sensors for close-range drone defeat.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "World-Leading",
    "sourceCitation": "Rheinmetall Skyranger 30",
    "ratings": {
      "capability": 4.8,
      "offensive": 4.7,
      "defensive": 4.9,
      "reliability": 4.8,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.8,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "Rheinmetall",
      "primaryRole": "Mobile Gun-Based Counter-UAS",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "3",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Carrier dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Search radar",
        "Tracking radar",
        "EO/IR sensors"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Rheinmetall Skyranger 30",
        "url": "https://www.rheinmetall.com/",
        "publisher": "Rheinmetall Skyranger 30",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "skyranger-30-c-uas",
      "name": "Skyranger 30 C-UAS",
      "officialDesignation": "Skyranger 30 Counter-UAS Configuration",
      "alternateNames": [
        "Skyranger 30 C-UAS",
        "Skyranger 30 Counter-UAS Configuration"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Counter-UAS / Anti-Drone",
      "subcategory": "Counter-UAS",
      "airDefenceCategory": "COUNTER_UAS",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "Germany",
      "manufacturer": "Rheinmetall",
      "operator": [
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
        "('Austria', 'https://military-doctrine.vercel.app/country?country=Austria')",
        "('Netherlands', 'https://military-doctrine.vercel.app/country?country=Netherlands')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Skyranger 30 uses programmable 30 mm airburst ammunition and integrated sensors for close-range drone defeat.",
      "performance": {
        "maxEngagementRangeKm": 3,
        "simultaneousEngagements": 2
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Rheinmetall Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Skyranger 30 C-UAS Interceptor",
        "guidanceMethod": "Directed Energy / Non-Kinetic",
        "warheadType": "Directed Energy / Microwave / Laser"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Rheinmetall Skyranger 30",
          "url": "https://www.rheinmetall.com/",
          "publisher": "Rheinmetall Skyranger 30",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "skynex-c-uas",
    "name": "Skynex C-UAS",
    "officialDesignation": "Skynex Counter-UAS Air Defence Configuration",
    "commonName": "Skynex C-UAS",
    "aliases": [
      "Skynex C-UAS",
      "Skynex Counter-UAS Air Defence Configuration"
    ],
    "familyName": "Skynex C-UAS Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-counter-uas",
    "categoryName": "Counter-UAS / Anti-Drone",
    "subcategory": "Counter-UAS",
    "rankInCategory": 3,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
    "originCountry": "Switzerland",
    "originCountries": [
      "Switzerland",
      "Germany"
    ],
    "developerCountries": [
      "Switzerland",
      "Germany"
    ],
    "manufacturerCountries": [
      "Switzerland",
      "Germany"
    ],
    "operatorCountries": [
      "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
      "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')",
      "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')"
    ],
    "developer": "Rheinmetall Air Defence",
    "manufacturer": "Rheinmetall Air Defence",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "skynex c-uas",
      "air-defence-counter-uas",
      "counter-uas"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Skynex uses networked sensors and programmable 35 mm cannon effectors to provide economical close-range counter-UAS defence.",
    "fullOverview": "Skynex uses networked sensors and programmable 35 mm cannon effectors to provide economical close-range counter-UAS defence.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Rheinmetall Skynex",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.8,
      "precision": 4.8,
      "technology": 4.8,
      "logistics": 4.7,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "Rheinmetall Air Defence",
      "primaryRole": "Networked Gun Counter-UAS",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "4",
          "unit": "km class",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Battery dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Search radar",
        "Tracking radar",
        "EO/IR sensors",
        "Networked C2"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Rheinmetall Skynex",
        "url": "https://www.rheinmetall.com/",
        "publisher": "Rheinmetall Skynex",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "skynex-c-uas",
      "name": "Skynex C-UAS",
      "officialDesignation": "Skynex Counter-UAS Air Defence Configuration",
      "alternateNames": [
        "Skynex C-UAS",
        "Skynex Counter-UAS Air Defence Configuration"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Counter-UAS / Anti-Drone",
      "subcategory": "Counter-UAS",
      "airDefenceCategory": "COUNTER_UAS",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "Switzerland",
      "manufacturer": "Rheinmetall Air Defence",
      "operator": [
        "('Germany', 'https://military-doctrine.vercel.app/country?country=Germany')",
        "('Ukraine', 'https://military-doctrine.vercel.app/country?country=Ukraine')",
        "('Romania', 'https://military-doctrine.vercel.app/country?country=Romania')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Skynex uses networked sensors and programmable 35 mm cannon effectors to provide economical close-range counter-UAS defence.",
      "performance": {
        "maxEngagementRangeKm": 4,
        "simultaneousEngagements": 2
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Rheinmetall Air Defence Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Skynex C-UAS Interceptor",
        "guidanceMethod": "Directed Energy / Non-Kinetic",
        "warheadType": "Directed Energy / Microwave / Laser"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Rheinmetall Skynex",
          "url": "https://www.rheinmetall.com/",
          "publisher": "Rheinmetall Skynex",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "drone-dome",
    "name": "Drone Dome",
    "officialDesignation": "Drone Dome Counter-UAS System",
    "commonName": "Drone Dome",
    "aliases": [
      "Drone Dome",
      "Drone Dome Counter-UAS System"
    ],
    "familyName": "Drone Dome Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-counter-uas",
    "categoryName": "Counter-UAS / Anti-Drone",
    "subcategory": "Counter-UAS",
    "rankInCategory": 4,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
      "('United Kingdom', 'https://military-doctrine.vercel.app/country?country=United%20Kingdom')",
      "('United Arab Emirates', 'https://military-doctrine.vercel.app/country?country=United%20Arab%20Emirates')"
    ],
    "developer": "Rafael Advanced Defense Systems",
    "manufacturer": "Rafael Advanced Defense Systems",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "drone dome",
      "air-defence-counter-uas",
      "counter-uas"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Drone Dome integrates detection, identification, electronic warfare and selectable hard/soft-kill effectors against hostile UAS.",
    "fullOverview": "Drone Dome integrates detection, identification, electronic warfare and selectable hard/soft-kill effectors against hostile UAS.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Rafael Drone Dome",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.8,
      "survivability": 4.7,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.8,
      "logistics": 4.7,
      "costEfficiency": 4.7,
      "combatMaturity": 4.8,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2016",
      "crew": "Battery / system operators",
      "manufacturer": "Rafael Advanced Defense Systems",
      "primaryRole": "Integrated Multi-Sensor Counter-UAS",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Configuration dependent",
          "unit": "",
          "highlight": true
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Vehicle/fixed-site dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Air-defence radar",
        "RF detection",
        "EO/IR",
        "Electronic warfare"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Rafael Drone Dome",
        "url": "https://www.rafael.co.il/",
        "publisher": "Rafael Drone Dome",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "drone-dome",
      "name": "Drone Dome",
      "officialDesignation": "Drone Dome Counter-UAS System",
      "alternateNames": [
        "Drone Dome",
        "Drone Dome Counter-UAS System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Counter-UAS / Anti-Drone",
      "subcategory": "Counter-UAS",
      "airDefenceCategory": "COUNTER_UAS",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "Israel",
      "manufacturer": "Rafael Advanced Defense Systems",
      "operator": [
        "('Israel', 'https://military-doctrine.vercel.app/country?country=Israel')",
        "('United Kingdom', 'https://military-doctrine.vercel.app/country?country=United%20Kingdom')",
        "('United Arab Emirates', 'https://military-doctrine.vercel.app/country?country=United%20Arab%20Emirates')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Drone Dome integrates detection, identification, electronic warfare and selectable hard/soft-kill effectors against hostile UAS.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 2
      },
      "batteryArchitecture": {
        "launcherType": "Containerized Box",
        "readyToFirePerLauncher": 1,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "RPS-42 Tactical 3D AESA Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "MEOS Electro-Optical Sensor System"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "High-Energy Laser / C-UAS Jammer",
        "guidanceMethod": "Directed Energy / Non-Kinetic",
        "warheadType": "Directed Energy / Microwave / Laser"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Rafael C-UAS C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Rafael Drone Dome",
          "url": "https://www.rafael.co.il/",
          "publisher": "Rafael Drone Dome",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "leonidas",
    "name": "Leonidas",
    "officialDesignation": "Leonidas High-Power Microwave Counter-UAS System",
    "commonName": "Leonidas",
    "aliases": [
      "Leonidas",
      "Leonidas High-Power Microwave Counter-UAS System"
    ],
    "familyName": "Leonidas Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-counter-uas",
    "categoryName": "Counter-UAS / Anti-Drone",
    "subcategory": "Counter-UAS",
    "rankInCategory": 5,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States / development and fielding programs', 'https://military-doctrine.vercel.app/country?country=United%20States%20/%20development%20and%20fielding%20programs')"
    ],
    "developer": "Epirus",
    "manufacturer": "Epirus",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "leonidas",
      "air-defence-counter-uas",
      "counter-uas"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Leonidas is a high-power microwave counter-UAS system designed to disrupt or defeat electronics of groups of small drones.",
    "fullOverview": "Leonidas is a high-power microwave counter-UAS system designed to disrupt or defeat electronics of groups of small drones.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Epirus Leonidas",
    "ratings": {
      "capability": 4.7,
      "offensive": 4.6,
      "defensive": 4.8,
      "reliability": 4.7,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.7,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.8
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "Epirus",
      "primaryRole": "High-Power Microwave Counter-UAS",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Vehicle/fixed-site dependent",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "RF target detection",
        "Electronically steered HPM array",
        "Networked sensors"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Epirus Leonidas",
        "url": "https://www.epirusinc.com/",
        "publisher": "Epirus Leonidas",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "leonidas",
      "name": "Leonidas",
      "officialDesignation": "Leonidas High-Power Microwave Counter-UAS System",
      "alternateNames": [
        "Leonidas",
        "Leonidas High-Power Microwave Counter-UAS System"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Counter-UAS / Anti-Drone",
      "subcategory": "Counter-UAS",
      "airDefenceCategory": "COUNTER_UAS",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "United States",
      "manufacturer": "Epirus",
      "operator": [
        "('United States / development and fielding programs', 'https://military-doctrine.vercel.app/country?country=United%20States%20/%20development%20and%20fielding%20programs')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Leonidas is a high-power microwave counter-UAS system designed to disrupt or defeat electronics of groups of small drones.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 2
      },
      "batteryArchitecture": {
        "launcherType": "Canister TEL",
        "readyToFirePerLauncher": 4,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "Epirus Tactical 3D Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Tracking Channel",
          "High-Resolution Thermal Sight",
          "Laser Rangefinder"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "Leonidas Interceptor",
        "guidanceMethod": "Directed Energy / Non-Kinetic",
        "warheadType": "Directed Energy / Microwave / Laser"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "Link 16",
          "Integrated Tactical C2"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Epirus Leonidas",
          "url": "https://www.epirusinc.com/",
          "publisher": "Epirus Leonidas",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  },
  {
    "id": "de-m-shorad",
    "name": "DE M-SHORAD",
    "officialDesignation": "Directed Energy Maneuver-Short Range Air Defense",
    "commonName": "DE M-SHORAD",
    "aliases": [
      "DE M-SHORAD",
      "Directed Energy Maneuver-Short Range Air Defense"
    ],
    "familyName": "DE M-SHORAD Family",
    "domain": "AIR-DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-counter-uas",
    "categoryName": "Counter-UAS / Anti-Drone",
    "subcategory": "Counter-UAS",
    "rankInCategory": 6,
    "rankingRationale": "Ranked within the category using current-generation operational relevance, capability, technology maturity, field maturity, survivability, precision, logistics, and upgrade potential from the supplied source dataset.",
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
      "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')"
    ],
    "developer": "Leonardo DRS / U.S. Army industry team",
    "manufacturer": "Leonardo DRS / U.S. Army industry team",
    "dataConfidence": "HIGH",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "services": [
      "Army",
      "Joint"
    ],
    "searchKeywords": [
      "de m-shorad",
      "air-defence-counter-uas",
      "counter-uas"
    ],
    "era": "Next-Gen (2016-Present)",
    "shortDescription": "Directed Energy M-SHORAD combines a high-energy laser with kinetic and non-kinetic effectors for mobile counter-UAS defence.",
    "fullOverview": "Directed Energy M-SHORAD combines a high-energy laser with kinetic and non-kinetic effectors for mobile counter-UAS defence.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified public image available.",
    "imageCredit": "No verified public image available.",
    "imageLicense": "N/A",
    "overallTier": "Very Good",
    "sourceCitation": "Leonardo DRS Directed Energy C-UAS",
    "ratings": {
      "capability": 4.6,
      "offensive": 4.5,
      "defensive": 4.7,
      "reliability": 4.6,
      "maintainability": 4.7,
      "survivability": 4.6,
      "rangeMobility": 4.7,
      "precision": 4.7,
      "technology": 4.7,
      "logistics": 4.6,
      "costEfficiency": 4.6,
      "combatMaturity": 4.7,
      "upgradePotential": 4.7
    },
    "specs": {
      "entryIntoService": "2020s",
      "crew": "Battery / system operators",
      "manufacturer": "Leonardo DRS / U.S. Army industry team",
      "primaryRole": "Mobile Directed-Energy Counter-UAS / SHORAD",
      "keyMetrics": [
        {
          "label": "Operational Range",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Max Speed",
          "value": "Not publicly disclosed",
          "unit": ""
        },
        {
          "label": "Weight / Displacement",
          "value": "Stryker-based",
          "unit": ""
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in the supplied display-format source.",
      "sensorsAvionics": [
        "Electro-optical/IR sensors",
        "Air-defence radar",
        "Laser beam director"
      ]
    },
    "relationships": {
      "usedBy": [
        "Army",
        "Joint"
      ]
    },
    "sources": [
      {
        "title": "Leonardo DRS Directed Energy C-UAS",
        "url": "https://www.leonardodrs.com/what-we-do/our-solutions/force-protection/counter-uas/",
        "publisher": "Leonardo DRS Directed Energy C-UAS",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "airDefenceSpecs": {
      "id": "de-m-shorad",
      "name": "DE M-SHORAD",
      "officialDesignation": "Directed Energy Maneuver-Short Range Air Defense",
      "alternateNames": [
        "DE M-SHORAD",
        "Directed Energy Maneuver-Short Range Air Defense"
      ],
      "domain": "AIR_DEFENCE",
      "category": "Counter-UAS / Anti-Drone",
      "subcategory": "Counter-UAS",
      "airDefenceCategory": "COUNTER_UAS",
      "tierClassification": "Mobile Self-Propelled Gun/Missile",
      "country": "United States",
      "manufacturer": "Leonardo DRS / U.S. Army industry team",
      "operator": [
        "('United States', 'https://military-doctrine.vercel.app/country?country=United%20States')"
      ],
      "serviceEntryYear": 2015,
      "status": "Operational",
      "generation": "Next-Gen (2016-Present)",
      "description": "Directed Energy M-SHORAD combines a high-energy laser with kinetic and non-kinetic effectors for mobile counter-UAS defence.",
      "performance": {
        "maxEngagementRangeKm": 10,
        "simultaneousEngagements": 2
      },
      "batteryArchitecture": {
        "launcherType": "Turret",
        "readyToFirePerLauncher": 1,
        "mobility": "Wheeled 6x6/8x8"
      },
      "radarAndSensors": {
        "integratedRadarModel": "KuRFS Multi-Function AESA Radar",
        "radarArchitecture": "AESA",
        "opticalTrackingChannels": [
          "Electro-Optical Beam Control System"
        ]
      },
      "interceptorReference": {
        "missileDesignation": "50 kW Class High-Energy Laser",
        "guidanceMethod": "Directed Energy / Non-Kinetic",
        "warheadType": "Directed Energy / Microwave / Laser"
      },
      "c4isrNetworking": {
        "tacticalDataLinksSupported": [
          "FAAD C2",
          "Link 16"
        ],
        "cooperativeEngagementCapable": true
      },
      "sources": [
        {
          "title": "Leonardo DRS Directed Energy C-UAS",
          "url": "https://www.leonardodrs.com/what-we-do/our-solutions/force-protection/counter-uas/",
          "publisher": "Leonardo DRS Directed Energy C-UAS",
          "accessedDate": "2026-09-13",
          "classificationStatus": "Public"
        }
      ]
    }
  }
];

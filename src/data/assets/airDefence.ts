import { Asset, RawAsset } from '../../types/catalog';

// AIR DEFENCE
// Source fields are preserved under sourceData; original nested technical data is preserved under specs.technicalDetails.

export const AIR_DEFENCE_ASSETS: (Asset | RawAsset)[] = [
  {
    "id": "rbs-70-ng-vshorad",
    "name": "RBS 70 NG",
    "officialDesignation": "RBS 70 NG Ground-Based Very Short Range Air Defence System",
    "commonName": "RBS 70 NG",
    "aliases": [
      "RBS 70 NG",
      "Bolide System"
    ],
    "familyName": "Very Short Range (VSHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Air Defence — Very Short Range (VSHORAD)",
    "subcategory": "Laser Beam-Riding MANPADS / VSHORAD",
    "rankInCategory": 1,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Thailand",
      "Ukraine"
    ],
    "developer": "Saab Dynamics",
    "manufacturer": "Saab Dynamics",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "RBS 70 NG",
      "RBS 70 NG Ground-Based Very Short Range Air Defence System",
      "Bolide System",
      "Laser Beam-Riding MANPADS / VSHORAD",
      "Very Short Range (VSHORAD)"
    ],
    "era": "2009–Present",
    "shortDescription": "Laser beam-riding VSHORAD system utilizing unjammable coded laser guidance and automatic target tracking for precision low-altitude engagement.",
    "fullOverview": "Laser beam-riding VSHORAD system utilizing unjammable coded laser guidance and automatic target tracking for precision low-altitude engagement.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Saab RBS 70 NG Product Information",
    "specs": {
      "entryIntoService": "2011",
      "crew": "N/A",
      "manufacturer": "Saab Dynamics",
      "primaryRole": "Laser Beam-Riding MANPADS / VSHORAD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "1.1",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Coded Laser Beam-Riding (SACLOS)",
        "seekerType: Laser Receiver",
        "radarSystem: Optional Giraffe C2 integration / standalone optical unit",
        "opticalTracking: Automatic Target Tracker with Thermal / Night Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 87,
          "launcherType": "Tripod-mounted aiming unit with night sight",
          "mobility": "MAN_PORTABLE",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 9,
          "minEngagementRangeKm": 0.25,
          "maxEngagementAltitudeM": 5000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2
        },
        "guidance": {
          "guidanceSystems": [
            "Coded Laser Beam-Riding (SACLOS)"
          ],
          "seekerType": "Laser Receiver",
          "warheadType": "High-Explosive Pre-fragmented Shaped Charge",
          "warheadWeightKg": 1.1
        },
        "sensors": {
          "radarSystem": "Optional Giraffe C2 integration / standalone optical unit",
          "opticalTracking": "Automatic Target Tracker with Thermal / Night Sight",
          "simultaneousEngagements": 1
        }
      },
      "developmentYear": 2009,
      "serviceEntryYear": 2011,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Sweden",
        "Finland",
        "Czech Republic",
        "Brazil",
        "Latvia",
        "Lithuania",
        "Thailand",
        "Ukraine"
      ]
    },
    "sources": [
      {
        "title": "Saab RBS 70 NG Product Information",
        "url": "https://www.saab.com/products/rbs-70-ng",
        "publisher": "Saab AB",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "rbs-70-ng-vshorad",
      "name": "RBS 70 NG",
      "officialDesignation": "RBS 70 NG Ground-Based Very Short Range Air Defence System",
      "alternateNames": [
        "RBS 70 NG",
        "Bolide System"
      ],
      "category": "Very Short Range (VSHORAD)",
      "subcategory": "Laser Beam-Riding MANPADS / VSHORAD",
      "domain": "AIR_DEFENCE",
      "country": "Sweden",
      "originCountries": [
        "Sweden"
      ],
      "manufacturer": "Saab Dynamics",
      "operators": [
        "Sweden",
        "Finland",
        "Czech Republic",
        "Brazil",
        "Latvia",
        "Lithuania",
        "Thailand",
        "Ukraine"
      ],
      "developmentYear": 2009,
      "serviceEntryYear": 2011,
      "status": "Active",
      "generation": "N/A",
      "description": "Laser beam-riding VSHORAD system utilizing unjammable coded laser guidance and automatic target tracking for precision low-altitude engagement.",
      "specs": {
        "physical": {
          "systemWeightKg": 87,
          "launcherType": "Tripod-mounted aiming unit with night sight",
          "mobility": "MAN_PORTABLE",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 9,
          "minEngagementRangeKm": 0.25,
          "maxEngagementAltitudeM": 5000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2
        },
        "guidance": {
          "guidanceSystems": [
            "Coded Laser Beam-Riding (SACLOS)"
          ],
          "seekerType": "Laser Receiver",
          "warheadType": "High-Explosive Pre-fragmented Shaped Charge",
          "warheadWeightKg": 1.1
        },
        "sensors": {
          "radarSystem": "Optional Giraffe C2 integration / standalone optical unit",
          "opticalTracking": "Automatic Target Tracker with Thermal / Night Sight",
          "simultaneousEngagements": 1
        }
      },
      "sources": [
        {
          "title": "Saab RBS 70 NG Product Information",
          "url": "https://www.saab.com/products/rbs-70-ng",
          "publisher": "Saab AB",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "mistral-3-atlas-rc",
    "name": "Mistral 3",
    "officialDesignation": "MBDA Mistral 3 Very Short-Range Air Defence Missile",
    "commonName": "Mistral 3",
    "aliases": [
      "Mistral 3",
      "SATCP"
    ],
    "familyName": "Very Short Range (VSHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Air Defence — Very Short Range (VSHORAD)",
    "subcategory": "Imaging Infrared MANPADS / VSHORAD",
    "rankInCategory": 2,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "France",
      "Belgium",
      "Estonia",
      "Finland",
      "Italy",
      "Spain",
      "Indonesia",
      "Serbia"
    ],
    "developer": "MBDA Missile Systems",
    "manufacturer": "MBDA Missile Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Mistral 3",
      "MBDA Mistral 3 Very Short-Range Air Defence Missile",
      "SATCP",
      "Imaging Infrared MANPADS / VSHORAD",
      "Very Short Range (VSHORAD)"
    ],
    "era": "2010–Present",
    "shortDescription": "Fire-and-forget short-range air defense missile featuring an advanced imaging infrared seeker with superior counter-countermeasure rejection.",
    "fullOverview": "Fire-and-forget short-range air defense missile featuring an advanced imaging infrared seeker with superior counter-countermeasure rejection.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "MBDA Mistral Product Information",
    "specs": {
      "entryIntoService": "2018",
      "crew": "N/A",
      "manufacturer": "MBDA Missile Systems",
      "primaryRole": "Imaging Infrared MANPADS / VSHORAD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "2.95",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Imaging Infrared (IIR) Multi-element Seeker",
        "seekerType: Imaging Infrared",
        "radarSystem: Optional Licorne C2 radar interface",
        "opticalTracking: Thermal sight / Day-night aiming unit"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 19.7,
          "launcherType": "Shoulder-fired or tripod launcher (ALBI / SIMBAD)",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 8,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 3000,
          "minEngagementAltitudeM": 5,
          "maxInterceptorSpeedMach": 2.7
        },
        "guidance": {
          "guidanceSystems": [
            "Imaging Infrared (IIR) Multi-element Seeker"
          ],
          "seekerType": "Imaging Infrared",
          "warheadType": "High-Explosive Tungsten Ball Fragmentation",
          "warheadWeightKg": 2.95
        },
        "sensors": {
          "radarSystem": "Optional Licorne C2 radar interface",
          "opticalTracking": "Thermal sight / Day-night aiming unit",
          "simultaneousEngagements": 1
        }
      },
      "developmentYear": 2010,
      "serviceEntryYear": 2018,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "France",
        "Belgium",
        "Estonia",
        "Finland",
        "Italy",
        "Spain",
        "Indonesia",
        "Serbia"
      ]
    },
    "sources": [
      {
        "title": "MBDA Mistral Product Information",
        "url": "https://www.mbda-systems.com/product/mistral/",
        "publisher": "MBDA Systems",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "mistral-3-vshorad",
      "name": "Mistral 3",
      "officialDesignation": "MBDA Mistral 3 Very Short-Range Air Defence Missile",
      "alternateNames": [
        "Mistral 3",
        "SATCP"
      ],
      "category": "Very Short Range (VSHORAD)",
      "subcategory": "Imaging Infrared MANPADS / VSHORAD",
      "domain": "AIR_DEFENCE",
      "country": "France",
      "originCountries": [
        "France"
      ],
      "manufacturer": "MBDA Missile Systems",
      "operators": [
        "France",
        "Belgium",
        "Estonia",
        "Finland",
        "Italy",
        "Spain",
        "Indonesia",
        "Serbia"
      ],
      "developmentYear": 2010,
      "serviceEntryYear": 2018,
      "status": "Active",
      "generation": "N/A",
      "description": "Fire-and-forget short-range air defense missile featuring an advanced imaging infrared seeker with superior counter-countermeasure rejection.",
      "specs": {
        "physical": {
          "systemWeightKg": 19.7,
          "launcherType": "Shoulder-fired or tripod launcher (ALBI / SIMBAD)",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 8,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 3000,
          "minEngagementAltitudeM": 5,
          "maxInterceptorSpeedMach": 2.7
        },
        "guidance": {
          "guidanceSystems": [
            "Imaging Infrared (IIR) Multi-element Seeker"
          ],
          "seekerType": "Imaging Infrared",
          "warheadType": "High-Explosive Tungsten Ball Fragmentation",
          "warheadWeightKg": 2.95
        },
        "sensors": {
          "radarSystem": "Optional Licorne C2 radar interface",
          "opticalTracking": "Thermal sight / Day-night aiming unit",
          "simultaneousEngagements": 1
        }
      },
      "sources": [
        {
          "title": "MBDA Mistral Product Information",
          "url": "https://www.mbda-systems.com/product/mistral/",
          "publisher": "MBDA Systems",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "piorun-manpads-poland",
    "name": "Piorun",
    "officialDesignation": "Piorun Portable Anti-Aircraft Missile System (Grom-M derivative)",
    "commonName": "Piorun",
    "aliases": [
      "Piorun",
      "Grom-M"
    ],
    "familyName": "Very Short Range (VSHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Air Defence — Very Short Range (VSHORAD)",
    "subcategory": "Infrared/Ultraviolet MANPADS",
    "rankInCategory": 3,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Poland",
      "Ukraine",
      "Estonia",
      "Norway",
      "Slovakia",
      "United States"
    ],
    "developer": "Mesko",
    "manufacturer": "Mesko",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Piorun",
      "Piorun Portable Anti-Aircraft Missile System (Grom-M derivative)",
      "Grom-M",
      "Infrared/Ultraviolet MANPADS",
      "Very Short Range (VSHORAD)"
    ],
    "era": "2015–Present",
    "shortDescription": "Polish man-portable air defense missile equipped with a dual-band infrared/ultraviolet seeker and proximity fuze for countering small drones and jets.",
    "fullOverview": "Polish man-portable air defense missile equipped with a dual-band infrared/ultraviolet seeker and proximity fuze for countering small drones and jets.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "MESKO Piorun Product Information",
    "specs": {
      "entryIntoService": "2019",
      "crew": "N/A",
      "manufacturer": "Mesko",
      "primaryRole": "Infrared/Ultraviolet MANPADS",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "1.82",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Dual-band IR/UV Optical Seeker",
        "seekerType: Infrared / Ultraviolet Dual-Band",
        "radarSystem: Optional Rega C2 radar link",
        "opticalTracking: Day/Night thermal integrated sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 19.5,
          "launcherType": "Shoulder-fired launch tube with digital sight",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 6.5,
          "minEngagementRangeKm": 0.4,
          "maxEngagementAltitudeM": 4000,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2.5
        },
        "guidance": {
          "guidanceSystems": [
            "Dual-band IR/UV Optical Seeker"
          ],
          "seekerType": "Infrared / Ultraviolet Dual-Band",
          "warheadType": "High-Explosive Fragmentation with Proximity Fuze",
          "warheadWeightKg": 1.82
        },
        "sensors": {
          "radarSystem": "Optional Rega C2 radar link",
          "opticalTracking": "Day/Night thermal integrated sight",
          "simultaneousEngagements": 1
        }
      },
      "developmentYear": 2015,
      "serviceEntryYear": 2019,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Poland",
        "Ukraine",
        "Estonia",
        "Norway",
        "Slovakia",
        "United States"
      ]
    },
    "sources": [
      {
        "title": "MESKO Piorun Product Information",
        "url": "https://www.mesko.com.pl/",
        "publisher": "Mesko S.A.",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "piorun-manpads-poland",
      "name": "Piorun",
      "officialDesignation": "Piorun Portable Anti-Aircraft Missile System (Grom-M derivative)",
      "alternateNames": [
        "Piorun",
        "Grom-M"
      ],
      "category": "Very Short Range (VSHORAD)",
      "subcategory": "Infrared/Ultraviolet MANPADS",
      "domain": "AIR_DEFENCE",
      "country": "Poland",
      "originCountries": [
        "Poland"
      ],
      "manufacturer": "Mesko",
      "operators": [
        "Poland",
        "Ukraine",
        "Estonia",
        "Norway",
        "Slovakia",
        "United States"
      ],
      "developmentYear": 2015,
      "serviceEntryYear": 2019,
      "status": "Active",
      "generation": "N/A",
      "description": "Polish man-portable air defense missile equipped with a dual-band infrared/ultraviolet seeker and proximity fuze for countering small drones and jets.",
      "specs": {
        "physical": {
          "systemWeightKg": 19.5,
          "launcherType": "Shoulder-fired launch tube with digital sight",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 6.5,
          "minEngagementRangeKm": 0.4,
          "maxEngagementAltitudeM": 4000,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2.5
        },
        "guidance": {
          "guidanceSystems": [
            "Dual-band IR/UV Optical Seeker"
          ],
          "seekerType": "Infrared / Ultraviolet Dual-Band",
          "warheadType": "High-Explosive Fragmentation with Proximity Fuze",
          "warheadWeightKg": 1.82
        },
        "sensors": {
          "radarSystem": "Optional Rega C2 radar link",
          "opticalTracking": "Day/Night thermal integrated sight",
          "simultaneousEngagements": 1
        }
      },
      "sources": [
        {
          "title": "MESKO Piorun Product Information",
          "url": "https://www.mesko.com.pl/",
          "publisher": "Mesko S.A.",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "fim-92j-stinger-vshorad",
    "name": "FIM-92J Stinger",
    "officialDesignation": "FIM-92J Stinger Block I MANPADS",
    "commonName": "FIM-92J Stinger",
    "aliases": [
      "FIM-92J",
      "Stinger Block I"
    ],
    "familyName": "Very Short Range (VSHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Air Defence — Very Short Range (VSHORAD)",
    "subcategory": "Infrared Homing MANPADS",
    "rankInCategory": 4,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States",
      "Ukraine",
      "Germany",
      "Japan",
      "South Korea",
      "Taiwan",
      "Italy",
      "Poland"
    ],
    "developer": "Raytheon Technologies",
    "manufacturer": "Raytheon Technologies",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "FIM-92J Stinger",
      "FIM-92J Stinger Block I MANPADS",
      "FIM-92J",
      "Stinger Block I",
      "Infrared Homing MANPADS",
      "Very Short Range (VSHORAD)"
    ],
    "era": "2012–Present",
    "shortDescription": "Modernized Stinger MANPADS with upgraded proximity fuze and advanced processor seeker to defeat small unmanned aerial systems.",
    "fullOverview": "Modernized Stinger MANPADS with upgraded proximity fuze and advanced processor seeker to defeat small unmanned aerial systems.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "U.S. Army PEO Missiles and Space Stinger File",
    "specs": {
      "entryIntoService": "2018",
      "crew": "N/A",
      "manufacturer": "Raytheon Technologies",
      "primaryRole": "Infrared Homing MANPADS",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "3",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Passive Optical / Infrared Rosette Scan Seeker",
        "seekerType: Passive Infrared (IR/UV)",
        "radarSystem: FAAD C2 network integration",
        "opticalTracking: AN/PAS-18 Thermal Night Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 15.2,
          "launcherType": "Shoulder-fired launch tube assembly",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 4.8,
          "minEngagementRangeKm": 0.2,
          "maxEngagementAltitudeM": 3800,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2.2
        },
        "guidance": {
          "guidanceSystems": [
            "Passive Optical / Infrared Rosette Scan Seeker"
          ],
          "seekerType": "Passive Infrared (IR/UV)",
          "warheadType": "Annular Blast-Fragmentation with Proximity/Impact Fuze",
          "warheadWeightKg": 3
        },
        "sensors": {
          "radarSystem": "FAAD C2 network integration",
          "opticalTracking": "AN/PAS-18 Thermal Night Sight",
          "simultaneousEngagements": 1
        }
      },
      "developmentYear": 2012,
      "serviceEntryYear": 2018,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States",
        "Ukraine",
        "Germany",
        "Japan",
        "South Korea",
        "Taiwan",
        "Italy",
        "Poland"
      ]
    },
    "sources": [
      {
        "title": "U.S. Army PEO Missiles and Space Stinger File",
        "url": "https://www.peomissilesandspace.army.mil/",
        "publisher": "U.S. Army",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "fim-92j-stinger-vshorad",
      "name": "FIM-92J Stinger",
      "officialDesignation": "FIM-92J Stinger Block I MANPADS",
      "alternateNames": [
        "FIM-92J",
        "Stinger Block I"
      ],
      "category": "Very Short Range (VSHORAD)",
      "subcategory": "Infrared Homing MANPADS",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Raytheon Technologies",
      "operators": [
        "United States",
        "Ukraine",
        "Germany",
        "Japan",
        "South Korea",
        "Taiwan",
        "Italy",
        "Poland"
      ],
      "developmentYear": 2012,
      "serviceEntryYear": 2018,
      "status": "Active",
      "generation": "N/A",
      "description": "Modernized Stinger MANPADS with upgraded proximity fuze and advanced processor seeker to defeat small unmanned aerial systems.",
      "specs": {
        "physical": {
          "systemWeightKg": 15.2,
          "launcherType": "Shoulder-fired launch tube assembly",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 4.8,
          "minEngagementRangeKm": 0.2,
          "maxEngagementAltitudeM": 3800,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2.2
        },
        "guidance": {
          "guidanceSystems": [
            "Passive Optical / Infrared Rosette Scan Seeker"
          ],
          "seekerType": "Passive Infrared (IR/UV)",
          "warheadType": "Annular Blast-Fragmentation with Proximity/Impact Fuze",
          "warheadWeightKg": 3
        },
        "sensors": {
          "radarSystem": "FAAD C2 network integration",
          "opticalTracking": "AN/PAS-18 Thermal Night Sight",
          "simultaneousEngagements": 1
        }
      },
      "sources": [
        {
          "title": "U.S. Army PEO Missiles and Space Stinger File",
          "url": "https://www.peomissilesandspace.army.mil/",
          "publisher": "U.S. Army",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "starstreak-hvm-vshorad",
    "name": "Starstreak HVM",
    "officialDesignation": "Starstreak High Velocity Missile System",
    "commonName": "Starstreak HVM",
    "aliases": [
      "Starstreak HVM",
      "Starburst derivative"
    ],
    "familyName": "Very Short Range (VSHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Air Defence — Very Short Range (VSHORAD)",
    "subcategory": "Laser Beam-Riding High-Speed Dart VSHORAD",
    "rankInCategory": 5,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United Kingdom",
      "South Africa",
      "Thailand",
      "Indonesia",
      "Ukraine"
    ],
    "developer": "Thales UK",
    "manufacturer": "Thales UK",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Starstreak HVM",
      "Starstreak High Velocity Missile System",
      "Starburst derivative",
      "Laser Beam-Riding High-Speed Dart VSHORAD",
      "Very Short Range (VSHORAD)"
    ],
    "era": "1980–Present",
    "shortDescription": "Mach 3+ VSHORAD system releasing three laser-guided kinetic tungsten darts to pierce armored aircraft and helicopters.",
    "fullOverview": "Mach 3+ VSHORAD system releasing three laser-guided kinetic tungsten darts to pierce armored aircraft and helicopters.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Thales Starstreak Air Defence Information",
    "specs": {
      "entryIntoService": "1997",
      "crew": "N/A",
      "manufacturer": "Thales UK",
      "primaryRole": "Laser Beam-Riding High-Speed Dart VSHORAD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0.9",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Semi-Automatic Laser Beam-Riding (SACLOS)",
        "seekerType: Laser Beam Rider",
        "radarSystem: GBAD C2 network tactical radar cueing",
        "opticalTracking: Stabilized Thermal/Optical Aiming Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 16.8,
          "launcherType": "Shoulder-fired or lightweight multi-launcher (LML)",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 7,
          "minEngagementRangeKm": 0.3,
          "maxEngagementAltitudeM": 5000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 3.5
        },
        "guidance": {
          "guidanceSystems": [
            "Semi-Automatic Laser Beam-Riding (SACLOS)"
          ],
          "seekerType": "Laser Beam Rider",
          "warheadType": "Three Independent Kinetic Tungsten Darts with Delayed Fuzes",
          "warheadWeightKg": 0.9
        },
        "sensors": {
          "radarSystem": "GBAD C2 network tactical radar cueing",
          "opticalTracking": "Stabilized Thermal/Optical Aiming Sight",
          "simultaneousEngagements": 1
        }
      },
      "developmentYear": 1980,
      "serviceEntryYear": 1997,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United Kingdom",
        "South Africa",
        "Thailand",
        "Indonesia",
        "Ukraine"
      ]
    },
    "sources": [
      {
        "title": "Thales Starstreak Air Defence Information",
        "url": "https://www.thalesgroup.com/",
        "publisher": "Thales UK",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "starstreak-hvm-vshorad",
      "name": "Starstreak HVM",
      "officialDesignation": "Starstreak High Velocity Missile System",
      "alternateNames": [
        "Starstreak HVM",
        "Starburst derivative"
      ],
      "category": "Very Short Range (VSHORAD)",
      "subcategory": "Laser Beam-Riding High-Speed Dart VSHORAD",
      "domain": "AIR_DEFENCE",
      "country": "United Kingdom",
      "originCountries": [
        "United Kingdom"
      ],
      "manufacturer": "Thales UK",
      "operators": [
        "United Kingdom",
        "South Africa",
        "Thailand",
        "Indonesia",
        "Ukraine"
      ],
      "developmentYear": 1980,
      "serviceEntryYear": 1997,
      "status": "Active",
      "generation": "N/A",
      "description": "Mach 3+ VSHORAD system releasing three laser-guided kinetic tungsten darts to pierce armored aircraft and helicopters.",
      "specs": {
        "physical": {
          "systemWeightKg": 16.8,
          "launcherType": "Shoulder-fired or lightweight multi-launcher (LML)",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 7,
          "minEngagementRangeKm": 0.3,
          "maxEngagementAltitudeM": 5000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 3.5
        },
        "guidance": {
          "guidanceSystems": [
            "Semi-Automatic Laser Beam-Riding (SACLOS)"
          ],
          "seekerType": "Laser Beam Rider",
          "warheadType": "Three Independent Kinetic Tungsten Darts with Delayed Fuzes",
          "warheadWeightKg": 0.9
        },
        "sensors": {
          "radarSystem": "GBAD C2 network tactical radar cueing",
          "opticalTracking": "Stabilized Thermal/Optical Aiming Sight",
          "simultaneousEngagements": 1
        }
      },
      "sources": [
        {
          "title": "Thales Starstreak Air Defence Information",
          "url": "https://www.thalesgroup.com/",
          "publisher": "Thales UK",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "9k333-verba-vshorad",
    "name": "9K333 Verba",
    "officialDesignation": "9K333 Verba Man-Portable Air Defence System (SA-25)",
    "commonName": "9K333 Verba",
    "aliases": [
      "9K333 Verba",
      "SA-25"
    ],
    "familyName": "Very Short Range (VSHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Air Defence — Very Short Range (VSHORAD)",
    "subcategory": "Multispectral Infrared MANPADS",
    "rankInCategory": 6,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Russia",
      "Belarus",
      "Armenia"
    ],
    "developer": "KBM Kolomna",
    "manufacturer": "KBM Kolomna",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "9K333 Verba",
      "9K333 Verba Man-Portable Air Defence System (SA-25)",
      "SA-25",
      "Multispectral Infrared MANPADS",
      "Very Short Range (VSHORAD)"
    ],
    "era": "2007–Present",
    "shortDescription": "Advanced Russian MANPADS utilizing a 3-band multispectral optical seeker to defeat modern directional infrared countermeasures (DIRCM).",
    "fullOverview": "Advanced Russian MANPADS utilizing a 3-band multispectral optical seeker to defeat modern directional infrared countermeasures (DIRCM).",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "KBM / Rosoboronexport Verba Product Information",
    "specs": {
      "entryIntoService": "2014",
      "crew": "N/A",
      "manufacturer": "KBM Kolomna",
      "primaryRole": "Multispectral Infrared MANPADS",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "1.5",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Three-band optical seeker (UV, near-IR, mid-IR)",
        "seekerType: Triple-band UV/IR",
        "radarSystem: Barnaul-T C2 network integration",
        "opticalTracking: Integrated optical day/night sight with IFF"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 17.2,
          "launcherType": "Shoulder-fired launch tube assembly with IFF interrogator",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 6.4,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 4500,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2
        },
        "guidance": {
          "guidanceSystems": [
            "Three-band optical seeker (UV, near-IR, mid-IR)"
          ],
          "seekerType": "Triple-band UV/IR",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 1.5
        },
        "sensors": {
          "radarSystem": "Barnaul-T C2 network integration",
          "opticalTracking": "Integrated optical day/night sight with IFF",
          "simultaneousEngagements": 1
        }
      },
      "developmentYear": 2007,
      "serviceEntryYear": 2014,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Russia",
        "Belarus",
        "Armenia"
      ]
    },
    "sources": [
      {
        "title": "KBM / Rosoboronexport Verba Product Information",
        "url": "https://roe.ru/",
        "publisher": "Rosoboronexport",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "9k333-verba-vshorad",
      "name": "9K333 Verba",
      "officialDesignation": "9K333 Verba Man-Portable Air Defence System (SA-25)",
      "alternateNames": [
        "9K333 Verba",
        "SA-25"
      ],
      "category": "Very Short Range (VSHORAD)",
      "subcategory": "Multispectral Infrared MANPADS",
      "domain": "AIR_DEFENCE",
      "country": "Russia",
      "originCountries": [
        "Russia"
      ],
      "manufacturer": "KBM Kolomna",
      "operators": [
        "Russia",
        "Belarus",
        "Armenia"
      ],
      "developmentYear": 2007,
      "serviceEntryYear": 2014,
      "status": "Active",
      "generation": "N/A",
      "description": "Advanced Russian MANPADS utilizing a 3-band multispectral optical seeker to defeat modern directional infrared countermeasures (DIRCM).",
      "specs": {
        "physical": {
          "systemWeightKg": 17.2,
          "launcherType": "Shoulder-fired launch tube assembly with IFF interrogator",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 6.4,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 4500,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2
        },
        "guidance": {
          "guidanceSystems": [
            "Three-band optical seeker (UV, near-IR, mid-IR)"
          ],
          "seekerType": "Triple-band UV/IR",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 1.5
        },
        "sensors": {
          "radarSystem": "Barnaul-T C2 network integration",
          "opticalTracking": "Integrated optical day/night sight with IFF",
          "simultaneousEngagements": 1
        }
      },
      "sources": [
        {
          "title": "KBM / Rosoboronexport Verba Product Information",
          "url": "https://roe.ru/",
          "publisher": "Rosoboronexport",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "sungur-vshorad-turkey",
    "name": "SUNGUR VSHORAD",
    "officialDesignation": "SUNGUR Low-Altitude Air Defence Missile System",
    "commonName": "SUNGUR VSHORAD",
    "aliases": [
      "SUNGUR"
    ],
    "familyName": "Very Short Range (VSHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Air Defence — Very Short Range (VSHORAD)",
    "subcategory": "Imaging Infrared MANPADS / Vehicle VSHORAD",
    "rankInCategory": 7,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Türkiye"
    ],
    "developer": "Roketsan",
    "manufacturer": "Roketsan",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "SUNGUR VSHORAD",
      "SUNGUR Low-Altitude Air Defence Missile System",
      "SUNGUR",
      "Imaging Infrared MANPADS / Vehicle VSHORAD",
      "Very Short Range (VSHORAD)"
    ],
    "era": "2018–Present",
    "shortDescription": "Turkish portable and vehicle-mounted air defense missile system incorporating an imaging infrared seeker and high-explosive fragmentation warhead.",
    "fullOverview": "Turkish portable and vehicle-mounted air defense missile system incorporating an imaging infrared seeker and high-explosive fragmentation warhead.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Roketsan SUNGUR Product Information",
    "specs": {
      "entryIntoService": "2022",
      "crew": "N/A",
      "manufacturer": "Roketsan",
      "primaryRole": "Imaging Infrared MANPADS / Vehicle VSHORAD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "2",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Imaging Infrared (IIR) Seeker",
        "seekerType: Imaging Infrared",
        "radarSystem: Aselsan tactical radar integration",
        "opticalTracking: Electro-Optical / Thermal Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 18,
          "launcherType": "Shoulder-fired or armored vehicle pod (VURSEL)",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 8,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 4000,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2.2
        },
        "guidance": {
          "guidanceSystems": [
            "Imaging Infrared (IIR) Seeker"
          ],
          "seekerType": "Imaging Infrared",
          "warheadType": "HE Blast-Fragmentation",
          "warheadWeightKg": 2
        },
        "sensors": {
          "radarSystem": "Aselsan tactical radar integration",
          "opticalTracking": "Electro-Optical / Thermal Sight",
          "simultaneousEngagements": 1
        }
      },
      "developmentYear": 2018,
      "serviceEntryYear": 2022,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Türkiye"
      ]
    },
    "sources": [
      {
        "title": "Roketsan SUNGUR Product Information",
        "url": "https://www.roketsan.com.tr/",
        "publisher": "Roketsan",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "sungur-vshorad-turkey",
      "name": "SUNGUR VSHORAD",
      "officialDesignation": "SUNGUR Low-Altitude Air Defence Missile System",
      "alternateNames": [
        "SUNGUR"
      ],
      "category": "Very Short Range (VSHORAD)",
      "subcategory": "Imaging Infrared MANPADS / Vehicle VSHORAD",
      "domain": "AIR_DEFENCE",
      "country": "Türkiye",
      "originCountries": [
        "Türkiye"
      ],
      "manufacturer": "Roketsan",
      "operators": [
        "Türkiye"
      ],
      "developmentYear": 2018,
      "serviceEntryYear": 2022,
      "status": "Active",
      "generation": "N/A",
      "description": "Turkish portable and vehicle-mounted air defense missile system incorporating an imaging infrared seeker and high-explosive fragmentation warhead.",
      "specs": {
        "physical": {
          "systemWeightKg": 18,
          "launcherType": "Shoulder-fired or armored vehicle pod (VURSEL)",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 8,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 4000,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2.2
        },
        "guidance": {
          "guidanceSystems": [
            "Imaging Infrared (IIR) Seeker"
          ],
          "seekerType": "Imaging Infrared",
          "warheadType": "HE Blast-Fragmentation",
          "warheadWeightKg": 2
        },
        "sensors": {
          "radarSystem": "Aselsan tactical radar integration",
          "opticalTracking": "Electro-Optical / Thermal Sight",
          "simultaneousEngagements": 1
        }
      },
      "sources": [
        {
          "title": "Roketsan SUNGUR Product Information",
          "url": "https://www.roketsan.com.tr/",
          "publisher": "Roketsan",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "kp-sam-chiron-vshorad",
    "name": "Chiron (KP-SAM)",
    "officialDesignation": "KP-SAM Chiron Air Defence Missile System (Shingung)",
    "commonName": "Chiron (KP-SAM)",
    "aliases": [
      "Chiron",
      "Shingung",
      "KP-SAM"
    ],
    "familyName": "Very Short Range (VSHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Air Defence — Very Short Range (VSHORAD)",
    "subcategory": "Two-Color Infrared MANPADS",
    "rankInCategory": 8,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "South Korea",
      "Indonesia",
      "Peru"
    ],
    "developer": "LIG Nex1",
    "manufacturer": "LIG Nex1",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Chiron (KP-SAM)",
      "KP-SAM Chiron Air Defence Missile System (Shingung)",
      "Chiron",
      "Shingung",
      "KP-SAM",
      "Two-Color Infrared MANPADS",
      "Very Short Range (VSHORAD)"
    ],
    "era": "1995–Present",
    "shortDescription": "South Korean man-portable air defense system equipped with a two-color infrared seeker and IFF system to reject countermeasures.",
    "fullOverview": "South Korean man-portable air defense system equipped with a two-color infrared seeker and IFF system to reject countermeasures.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "LIG Nex1 Air Defence Product Information",
    "specs": {
      "entryIntoService": "2005",
      "crew": "N/A",
      "manufacturer": "LIG Nex1",
      "primaryRole": "Two-Color Infrared MANPADS",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "2",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Two-color (IR/UV) optical seeker",
        "seekerType: Dual-band IR/UV",
        "radarSystem: Networked target cueing receiver",
        "opticalTracking: Launcher electro-optics and IFF interrogator"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 19.5,
          "launcherType": "Shoulder-fired launch tube assembly",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 7,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 3500,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2.1
        },
        "guidance": {
          "guidanceSystems": [
            "Two-color (IR/UV) optical seeker"
          ],
          "seekerType": "Dual-band IR/UV",
          "warheadType": "High-Explosive Fragmentation with Proximity Fuze",
          "warheadWeightKg": 2
        },
        "sensors": {
          "radarSystem": "Networked target cueing receiver",
          "opticalTracking": "Launcher electro-optics and IFF interrogator",
          "simultaneousEngagements": 1
        }
      },
      "developmentYear": 1995,
      "serviceEntryYear": 2005,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "South Korea",
        "Indonesia",
        "Peru"
      ]
    },
    "sources": [
      {
        "title": "LIG Nex1 Air Defence Product Information",
        "url": "https://www.lignex1.com/",
        "publisher": "LIG Nex1",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "kp-sam-chiron-vshorad",
      "name": "Chiron (KP-SAM)",
      "officialDesignation": "KP-SAM Chiron Air Defence Missile System (Shingung)",
      "alternateNames": [
        "Chiron",
        "Shingung",
        "KP-SAM"
      ],
      "category": "Very Short Range (VSHORAD)",
      "subcategory": "Two-Color Infrared MANPADS",
      "domain": "AIR_DEFENCE",
      "country": "South Korea",
      "originCountries": [
        "South Korea"
      ],
      "manufacturer": "LIG Nex1",
      "operators": [
        "South Korea",
        "Indonesia",
        "Peru"
      ],
      "developmentYear": 1995,
      "serviceEntryYear": 2005,
      "status": "Active",
      "generation": "N/A",
      "description": "South Korean man-portable air defense system equipped with a two-color infrared seeker and IFF system to reject countermeasures.",
      "specs": {
        "physical": {
          "systemWeightKg": 19.5,
          "launcherType": "Shoulder-fired launch tube assembly",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 7,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 3500,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2.1
        },
        "guidance": {
          "guidanceSystems": [
            "Two-color (IR/UV) optical seeker"
          ],
          "seekerType": "Dual-band IR/UV",
          "warheadType": "High-Explosive Fragmentation with Proximity Fuze",
          "warheadWeightKg": 2
        },
        "sensors": {
          "radarSystem": "Networked target cueing receiver",
          "opticalTracking": "Launcher electro-optics and IFF interrogator",
          "simultaneousEngagements": 1
        }
      },
      "sources": [
        {
          "title": "LIG Nex1 Air Defence Product Information",
          "url": "https://www.lignex1.com/",
          "publisher": "LIG Nex1",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "an-twq-1-avenger-vshorad",
    "name": "AN/TWQ-1 Avenger",
    "officialDesignation": "AN/TWQ-1 Avenger Mobile Stinger Air Defence System",
    "commonName": "AN/TWQ-1 Avenger",
    "aliases": [
      "Avenger",
      "Pedestal Mounted Stinger"
    ],
    "familyName": "Very Short Range (VSHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Air Defence — Very Short Range (VSHORAD)",
    "subcategory": "Vehicle-Mounted Stinger VSHORAD",
    "rankInCategory": 9,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States",
      "Ukraine"
    ],
    "developer": "Boeing / U.S. Army",
    "manufacturer": "Boeing / U.S. Army",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "AN/TWQ-1 Avenger",
      "AN/TWQ-1 Avenger Mobile Stinger Air Defence System",
      "Avenger",
      "Pedestal Mounted Stinger",
      "Vehicle-Mounted Stinger VSHORAD",
      "Very Short Range (VSHORAD)"
    ],
    "era": "1984–Present",
    "shortDescription": "Gyrostabilized turret mounted on a HMMWV chassis carrying 8 ready-to-fire Stinger missiles and a .50 caliber heavy machine gun.",
    "fullOverview": "Gyrostabilized turret mounted on a HMMWV chassis carrying 8 ready-to-fire Stinger missiles and a .50 caliber heavy machine gun.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "U.S. Army Air Defence Information",
    "specs": {
      "entryIntoService": "1989",
      "crew": "N/A",
      "manufacturer": "Boeing / U.S. Army",
      "primaryRole": "Vehicle-Mounted Stinger VSHORAD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "3",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Stinger Passive Infrared Guidance",
        "Forward-Looking Infrared (FLIR)",
        "seekerType: Passive Infrared",
        "radarSystem: FAAD C2 network interface",
        "opticalTracking: FLIR and Laser Rangefinder"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 3900,
          "launcherType": "Turret on HMMWV platform",
          "mobility": "WHEELED_TEL",
          "crewSize": 2
        },
        "performance": {
          "maxEngagementRangeKm": 8,
          "minEngagementRangeKm": 0.2,
          "maxEngagementAltitudeM": 3800,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2.2
        },
        "guidance": {
          "guidanceSystems": [
            "Stinger Passive Infrared Guidance",
            "Forward-Looking Infrared (FLIR)"
          ],
          "seekerType": "Passive Infrared",
          "warheadType": "Annular Blast-Fragmentation",
          "warheadWeightKg": 3
        },
        "sensors": {
          "radarSystem": "FAAD C2 network interface",
          "opticalTracking": "FLIR and Laser Rangefinder",
          "simultaneousEngagements": 2
        }
      },
      "developmentYear": 1984,
      "serviceEntryYear": 1989,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States",
        "Ukraine"
      ]
    },
    "sources": [
      {
        "title": "U.S. Army Air Defence Information",
        "url": "https://www.army.mil/",
        "publisher": "U.S. Army",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "an-twq-1-avenger-vshorad",
      "name": "AN/TWQ-1 Avenger",
      "officialDesignation": "AN/TWQ-1 Avenger Mobile Stinger Air Defence System",
      "alternateNames": [
        "Avenger",
        "Pedestal Mounted Stinger"
      ],
      "category": "Very Short Range (VSHORAD)",
      "subcategory": "Vehicle-Mounted Stinger VSHORAD",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Boeing / U.S. Army",
      "operators": [
        "United States",
        "Ukraine"
      ],
      "developmentYear": 1984,
      "serviceEntryYear": 1989,
      "status": "Active",
      "generation": "N/A",
      "description": "Gyrostabilized turret mounted on a HMMWV chassis carrying 8 ready-to-fire Stinger missiles and a .50 caliber heavy machine gun.",
      "specs": {
        "physical": {
          "systemWeightKg": 3900,
          "launcherType": "Turret on HMMWV platform",
          "mobility": "WHEELED_TEL",
          "crewSize": 2
        },
        "performance": {
          "maxEngagementRangeKm": 8,
          "minEngagementRangeKm": 0.2,
          "maxEngagementAltitudeM": 3800,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2.2
        },
        "guidance": {
          "guidanceSystems": [
            "Stinger Passive Infrared Guidance",
            "Forward-Looking Infrared (FLIR)"
          ],
          "seekerType": "Passive Infrared",
          "warheadType": "Annular Blast-Fragmentation",
          "warheadWeightKg": 3
        },
        "sensors": {
          "radarSystem": "FAAD C2 network interface",
          "opticalTracking": "FLIR and Laser Rangefinder",
          "simultaneousEngagements": 2
        }
      },
      "sources": [
        {
          "title": "U.S. Army Air Defence Information",
          "url": "https://www.army.mil/",
          "publisher": "U.S. Army",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "9k38-igla-manpads",
    "name": "9K38 Igla (SA-18)",
    "officialDesignation": "9K38 Igla Man-Portable Air Defence System",
    "commonName": "9K38 Igla (SA-18)",
    "aliases": [
      "Igla",
      "SA-18"
    ],
    "familyName": "Very Short Range (VSHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-vshorad",
    "categoryName": "Air Defence — Very Short Range (VSHORAD)",
    "subcategory": "Infrared Homing MANPADS",
    "rankInCategory": 10,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
    "originCountry": "Soviet Union",
    "originCountries": [
      "Soviet Union"
    ],
    "developerCountries": [
      "Soviet Union"
    ],
    "manufacturerCountries": [
      "Soviet Union"
    ],
    "operatorCountries": [
      "Russia",
      "India",
      "Vietnam",
      "Serbia",
      "Various international operators"
    ],
    "developer": "KBM Kolomna",
    "manufacturer": "KBM Kolomna",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "9K38 Igla (SA-18)",
      "9K38 Igla Man-Portable Air Defence System",
      "Igla",
      "SA-18",
      "Infrared Homing MANPADS",
      "Very Short Range (VSHORAD)"
    ],
    "era": "1971–Present",
    "shortDescription": "Soviet-era man-portable air defense missile system featuring a nitrogen-cooled infrared seeker and logical target selection logic.",
    "fullOverview": "Soviet-era man-portable air defense missile system featuring a nitrogen-cooled infrared seeker and logical target selection logic.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Rosoboronexport Igla Technical Manual",
    "specs": {
      "entryIntoService": "1983",
      "crew": "N/A",
      "manufacturer": "KBM Kolomna",
      "primaryRole": "Infrared Homing MANPADS",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "1.27",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Infrared homing seeker with background-suppression logic",
        "seekerType: Passive Infrared",
        "radarSystem: Portable radar or visual cueing",
        "opticalTracking: Optical day sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 17.9,
          "launcherType": "Shoulder-fired launch tube assembly",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 5.2,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 3500,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 1.9
        },
        "guidance": {
          "guidanceSystems": [
            "Infrared homing seeker with background-suppression logic"
          ],
          "seekerType": "Passive Infrared",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 1.27
        },
        "sensors": {
          "radarSystem": "Portable radar or visual cueing",
          "opticalTracking": "Optical day sight",
          "simultaneousEngagements": 1
        }
      },
      "developmentYear": 1971,
      "serviceEntryYear": 1983,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Russia",
        "India",
        "Vietnam",
        "Serbia",
        "Various international operators"
      ]
    },
    "sources": [
      {
        "title": "Rosoboronexport Igla Technical Manual",
        "url": "https://roe.ru/",
        "publisher": "Rosoboronexport",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "9k38-igla-manpads",
      "name": "9K38 Igla (SA-18)",
      "officialDesignation": "9K38 Igla Man-Portable Air Defence System",
      "alternateNames": [
        "Igla",
        "SA-18"
      ],
      "category": "Very Short Range (VSHORAD)",
      "subcategory": "Infrared Homing MANPADS",
      "domain": "AIR_DEFENCE",
      "country": "Soviet Union",
      "originCountries": [
        "Soviet Union"
      ],
      "manufacturer": "KBM Kolomna",
      "operators": [
        "Russia",
        "India",
        "Vietnam",
        "Serbia",
        "Various international operators"
      ],
      "developmentYear": 1971,
      "serviceEntryYear": 1983,
      "status": "Active",
      "generation": "N/A",
      "description": "Soviet-era man-portable air defense missile system featuring a nitrogen-cooled infrared seeker and logical target selection logic.",
      "specs": {
        "physical": {
          "systemWeightKg": 17.9,
          "launcherType": "Shoulder-fired launch tube assembly",
          "mobility": "MAN_PORTABLE",
          "crewSize": 1
        },
        "performance": {
          "maxEngagementRangeKm": 5.2,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 3500,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 1.9
        },
        "guidance": {
          "guidanceSystems": [
            "Infrared homing seeker with background-suppression logic"
          ],
          "seekerType": "Passive Infrared",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 1.27
        },
        "sensors": {
          "radarSystem": "Portable radar or visual cueing",
          "opticalTracking": "Optical day sight",
          "simultaneousEngagements": 1
        }
      },
      "sources": [
        {
          "title": "Rosoboronexport Igla Technical Manual",
          "url": "https://roe.ru/",
          "publisher": "Rosoboronexport",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "skyranger-30-shorad",
    "name": "Skyranger 30",
    "officialDesignation": "Skyranger 30 Mobile Air Defence System",
    "commonName": "Skyranger 30",
    "aliases": [
      "Skyranger 30"
    ],
    "familyName": "Short Range (SHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Air Defence — Short Range (SHORAD)",
    "subcategory": "Mobile Gun-and-Missile SHORAD",
    "rankInCategory": 1,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Germany",
      "Austria",
      "Netherlands",
      "Denmark",
      "Ukraine"
    ],
    "developer": "Rheinmetall",
    "manufacturer": "Rheinmetall",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Skyranger 30",
      "Skyranger 30 Mobile Air Defence System",
      "Mobile Gun-and-Missile SHORAD",
      "Short Range (SHORAD)"
    ],
    "era": "2018–Present",
    "shortDescription": "Mobile air defense turret combining a 30mm programmable airburst cannon, AESA radar, EO/IR sensors, and short-range missiles.",
    "fullOverview": "Mobile air defense turret combining a 30mm programmable airburst cannon, AESA radar, EO/IR sensors, and short-range missiles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Rheinmetall Skyranger 30 Product Information",
    "specs": {
      "entryIntoService": "2024",
      "crew": "N/A",
      "manufacturer": "Rheinmetall",
      "primaryRole": "Mobile Gun-and-Missile SHORAD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0.22",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Command-to-Line-of-Sight (CLOS)",
        "Radar Tracking",
        "seekerType: Command Guided / Laser",
        "radarSystem: AMMR 3D AESA Radar Suite",
        "opticalTracking: FIRST IRST & TREO Electro-Optical Sensor Unit"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 2500,
          "launcherType": "Turret system for wheeled/tracked carriers",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 3,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 3000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2
        },
        "guidance": {
          "guidanceSystems": [
            "Command-to-Line-of-Sight (CLOS)",
            "Radar Tracking"
          ],
          "seekerType": "Command Guided / Laser",
          "warheadType": "AHEAD Airburst Submunitions",
          "warheadWeightKg": 0.22
        },
        "sensors": {
          "radarSystem": "AMMR 3D AESA Radar Suite",
          "opticalTracking": "FIRST IRST & TREO Electro-Optical Sensor Unit",
          "simultaneousEngagements": 4
        }
      },
      "developmentYear": 2018,
      "serviceEntryYear": 2024,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Germany",
        "Austria",
        "Netherlands",
        "Denmark",
        "Ukraine"
      ]
    },
    "sources": [
      {
        "title": "Rheinmetall Skyranger 30 Product Information",
        "url": "https://www.rheinmetall.com/",
        "publisher": "Rheinmetall",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "skyranger-30-shorad",
      "name": "Skyranger 30",
      "officialDesignation": "Skyranger 30 Mobile Air Defence System",
      "alternateNames": [
        "Skyranger 30"
      ],
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile Gun-and-Missile SHORAD",
      "domain": "AIR_DEFENCE",
      "country": "Germany",
      "originCountries": [
        "Germany"
      ],
      "manufacturer": "Rheinmetall",
      "operators": [
        "Germany",
        "Austria",
        "Netherlands",
        "Denmark",
        "Ukraine"
      ],
      "developmentYear": 2018,
      "serviceEntryYear": 2024,
      "status": "Active",
      "generation": "N/A",
      "description": "Mobile air defense turret combining a 30mm programmable airburst cannon, AESA radar, EO/IR sensors, and short-range missiles.",
      "specs": {
        "physical": {
          "systemWeightKg": 2500,
          "launcherType": "Turret system for wheeled/tracked carriers",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 3,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 3000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2
        },
        "guidance": {
          "guidanceSystems": [
            "Command-to-Line-of-Sight (CLOS)",
            "Radar Tracking"
          ],
          "seekerType": "Command Guided / Laser",
          "warheadType": "AHEAD Airburst Submunitions",
          "warheadWeightKg": 0.22
        },
        "sensors": {
          "radarSystem": "AMMR 3D AESA Radar Suite",
          "opticalTracking": "FIRST IRST & TREO Electro-Optical Sensor Unit",
          "simultaneousEngagements": 4
        }
      },
      "sources": [
        {
          "title": "Rheinmetall Skyranger 30 Product Information",
          "url": "https://www.rheinmetall.com/",
          "publisher": "Rheinmetall",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "skynex-air-defence-system",
    "name": "Skynex",
    "officialDesignation": "Skynex Air Defence Architecture",
    "commonName": "Skynex",
    "aliases": [
      "Skynex"
    ],
    "familyName": "Short Range (SHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Air Defence — Short Range (SHORAD)",
    "subcategory": "Networked Gun-Based SHORAD",
    "rankInCategory": 2,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Germany",
      "Ukraine",
      "Romania"
    ],
    "developer": "Rheinmetall Air Defence",
    "manufacturer": "Rheinmetall Air Defence",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Skynex",
      "Skynex Air Defence Architecture",
      "Networked Gun-Based SHORAD",
      "Short Range (SHORAD)"
    ],
    "era": "2016–Present",
    "shortDescription": "Networked anti-drone and short-range air defense system using Oerlikon Revolver Gun 35mm cannons and the Skymaster command control network.",
    "fullOverview": "Networked anti-drone and short-range air defense system using Oerlikon Revolver Gun 35mm cannons and the Skymaster command control network.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Rheinmetall Skynex Product Information",
    "specs": {
      "entryIntoService": "2021",
      "crew": "N/A",
      "manufacturer": "Rheinmetall Air Defence",
      "primaryRole": "Networked Gun-Based SHORAD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0.35",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "X-TAR3D Radar Tracking",
        "AHEAD programmable muzzle time fuze",
        "seekerType: Radar / Optical Tracking",
        "radarSystem: X-TAR3D Tactical Surveillance Radar",
        "opticalTracking: Oerlikon MSP500 Sensor Unit (EO/IR/Laser)"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 3200,
          "launcherType": "Towed or truck-mounted Oerlikon Revolver Gun Mk3",
          "mobility": "TOWED",
          "crewSize": 2
        },
        "performance": {
          "maxEngagementRangeKm": 4,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 4000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2.2
        },
        "guidance": {
          "guidanceSystems": [
            "X-TAR3D Radar Tracking",
            "AHEAD programmable muzzle time fuze"
          ],
          "seekerType": "Radar / Optical Tracking",
          "warheadType": "AHEAD Airburst Submunitions",
          "warheadWeightKg": 0.35
        },
        "sensors": {
          "radarSystem": "X-TAR3D Tactical Surveillance Radar",
          "opticalTracking": "Oerlikon MSP500 Sensor Unit (EO/IR/Laser)",
          "simultaneousEngagements": 4
        }
      },
      "developmentYear": 2016,
      "serviceEntryYear": 2021,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Germany",
        "Ukraine",
        "Romania"
      ]
    },
    "sources": [
      {
        "title": "Rheinmetall Skynex Product Information",
        "url": "https://www.rheinmetall.com/",
        "publisher": "Rheinmetall",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "skynex-air-defence-system",
      "name": "Skynex",
      "officialDesignation": "Skynex Air Defence Architecture",
      "alternateNames": [
        "Skynex"
      ],
      "category": "Short Range (SHORAD)",
      "subcategory": "Networked Gun-Based SHORAD",
      "domain": "AIR_DEFENCE",
      "country": "Switzerland",
      "originCountries": [
        "Switzerland",
        "Germany"
      ],
      "manufacturer": "Rheinmetall Air Defence",
      "operators": [
        "Germany",
        "Ukraine",
        "Romania"
      ],
      "developmentYear": 2016,
      "serviceEntryYear": 2021,
      "status": "Active",
      "generation": "N/A",
      "description": "Networked anti-drone and short-range air defense system using Oerlikon Revolver Gun 35mm cannons and the Skymaster command control network.",
      "specs": {
        "physical": {
          "systemWeightKg": 3200,
          "launcherType": "Towed or truck-mounted Oerlikon Revolver Gun Mk3",
          "mobility": "TOWED",
          "crewSize": 2
        },
        "performance": {
          "maxEngagementRangeKm": 4,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 4000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2.2
        },
        "guidance": {
          "guidanceSystems": [
            "X-TAR3D Radar Tracking",
            "AHEAD programmable muzzle time fuze"
          ],
          "seekerType": "Radar / Optical Tracking",
          "warheadType": "AHEAD Airburst Submunitions",
          "warheadWeightKg": 0.35
        },
        "sensors": {
          "radarSystem": "X-TAR3D Tactical Surveillance Radar",
          "opticalTracking": "Oerlikon MSP500 Sensor Unit (EO/IR/Laser)",
          "simultaneousEngagements": 4
        }
      },
      "sources": [
        {
          "title": "Rheinmetall Skynex Product Information",
          "url": "https://www.rheinmetall.com/",
          "publisher": "Rheinmetall",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "m-shorad-stryker",
    "name": "M-SHORAD",
    "officialDesignation": "Maneuver-Short Range Air Defense (M-SHORAD) System",
    "commonName": "M-SHORAD",
    "aliases": [
      "M-SHORAD",
      "IM-SHORAD"
    ],
    "familyName": "Short Range (SHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Air Defence — Short Range (SHORAD)",
    "subcategory": "Mobile Stryker SHORAD",
    "rankInCategory": 3,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States (US Army)"
    ],
    "developer": "Leonardo DRS / General Dynamics Land Systems",
    "manufacturer": "Leonardo DRS / General Dynamics Land Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "M-SHORAD",
      "Maneuver-Short Range Air Defense (M-SHORAD) System",
      "IM-SHORAD",
      "Mobile Stryker SHORAD",
      "Short Range (SHORAD)"
    ],
    "era": "2018–Present",
    "shortDescription": "Stryker A1 combat vehicle equipped with an RIwP turret packing Hellfire missiles, Stinger missiles, a 30mm chain gun, and multi-mission hemispheric radar.",
    "fullOverview": "Stryker A1 combat vehicle equipped with an RIwP turret packing Hellfire missiles, Stinger missiles, a 30mm chain gun, and multi-mission hemispheric radar.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "U.S. Army M-SHORAD Program Office File",
    "specs": {
      "entryIntoService": "2021",
      "crew": "N/A",
      "manufacturer": "Leonardo DRS / General Dynamics Land Systems",
      "primaryRole": "Mobile Stryker SHORAD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "9",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Stinger IR/UV Guidance",
        "Hellfire Semi-Active Laser",
        "seekerType: Passive IR / Laser",
        "radarSystem: Leonardo Multi-Mission Hemispheric Radar (MHR) AESA",
        "opticalTracking: MX-GCS Electro-Optical Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 18500,
          "launcherType": "Reconfigurable Integrated-weapon Platform (RIwP) turret on Stryker",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 10,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 5000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 3
        },
        "guidance": {
          "guidanceSystems": [
            "Stinger IR/UV Guidance",
            "Hellfire Semi-Active Laser"
          ],
          "seekerType": "Passive IR / Laser",
          "warheadType": "HE Blast-Fragmentation / Tandem HEAT",
          "warheadWeightKg": 9
        },
        "sensors": {
          "radarSystem": "Leonardo Multi-Mission Hemispheric Radar (MHR) AESA",
          "opticalTracking": "MX-GCS Electro-Optical Sight",
          "simultaneousEngagements": 4
        }
      },
      "developmentYear": 2018,
      "serviceEntryYear": 2021,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States (US Army)"
      ]
    },
    "sources": [
      {
        "title": "U.S. Army M-SHORAD Program Office File",
        "url": "https://www.army.mil/",
        "publisher": "U.S. Army",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "m-shorad-stryker",
      "name": "M-SHORAD",
      "officialDesignation": "Maneuver-Short Range Air Defense (M-SHORAD) System",
      "alternateNames": [
        "M-SHORAD",
        "IM-SHORAD"
      ],
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile Stryker SHORAD",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Leonardo DRS / General Dynamics Land Systems",
      "operators": [
        "United States (US Army)"
      ],
      "developmentYear": 2018,
      "serviceEntryYear": 2021,
      "status": "Active",
      "generation": "N/A",
      "description": "Stryker A1 combat vehicle equipped with an RIwP turret packing Hellfire missiles, Stinger missiles, a 30mm chain gun, and multi-mission hemispheric radar.",
      "specs": {
        "physical": {
          "systemWeightKg": 18500,
          "launcherType": "Reconfigurable Integrated-weapon Platform (RIwP) turret on Stryker",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 10,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 5000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 3
        },
        "guidance": {
          "guidanceSystems": [
            "Stinger IR/UV Guidance",
            "Hellfire Semi-Active Laser"
          ],
          "seekerType": "Passive IR / Laser",
          "warheadType": "HE Blast-Fragmentation / Tandem HEAT",
          "warheadWeightKg": 9
        },
        "sensors": {
          "radarSystem": "Leonardo Multi-Mission Hemispheric Radar (MHR) AESA",
          "opticalTracking": "MX-GCS Electro-Optical Sight",
          "simultaneousEngagements": 4
        }
      },
      "sources": [
        {
          "title": "U.S. Army M-SHORAD Program Office File",
          "url": "https://www.army.mil/",
          "publisher": "U.S. Army",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "pantsir-sm-shorad",
    "name": "Pantsir-SM",
    "officialDesignation": "Pantsir-SM Air Defence Gun-Missile System",
    "commonName": "Pantsir-SM",
    "aliases": [
      "Pantsir-SM",
      "SA-22 Greyhound"
    ],
    "familyName": "Short Range (SHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Air Defence — Short Range (SHORAD)",
    "subcategory": "Mobile Gun-and-Missile SHORAD",
    "rankInCategory": 4,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
    "developer": "KBP / High Precision Systems",
    "manufacturer": "KBP / High Precision Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Pantsir-SM",
      "Pantsir-SM Air Defence Gun-Missile System",
      "SA-22 Greyhound",
      "Mobile Gun-and-Missile SHORAD",
      "Short Range (SHORAD)"
    ],
    "era": "2016–Present",
    "shortDescription": "Truck-mounted gun-missile system combining high-speed two-stage surface-to-air missiles and twin 30mm automatic cannons with AESA targeting radar.",
    "fullOverview": "Truck-mounted gun-missile system combining high-speed two-stage surface-to-air missiles and twin 30mm automatic cannons with AESA targeting radar.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Russian Defence-Industry Public Information: Pantsir-SM",
    "specs": {
      "entryIntoService": "2020",
      "crew": "N/A",
      "manufacturer": "KBP / High Precision Systems",
      "primaryRole": "Mobile Gun-and-Missile SHORAD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "20",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Radio Command Guidance via tracking radar and EO channel",
        "seekerType: Command Guided",
        "radarSystem: 1RS3 Phased Array Target Tracking Radar + Search AESA",
        "opticalTracking: Thermal Imaging Sight and Laser Rangefinder"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 30000,
          "launcherType": "Wheeled 8x8 KamAZ chassis with integrated turret",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 30,
          "minEngagementRangeKm": 1.2,
          "maxEngagementAltitudeM": 15000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 5
        },
        "guidance": {
          "guidanceSystems": [
            "Radio Command Guidance via tracking radar and EO channel"
          ],
          "seekerType": "Command Guided",
          "warheadType": "Continuous-Rod High-Explosive Fragmentation",
          "warheadWeightKg": 20
        },
        "sensors": {
          "radarSystem": "1RS3 Phased Array Target Tracking Radar + Search AESA",
          "opticalTracking": "Thermal Imaging Sight and Laser Rangefinder",
          "simultaneousEngagements": 4
        }
      },
      "developmentYear": 2016,
      "serviceEntryYear": 2020,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Russia"
      ]
    },
    "sources": [
      {
        "title": "Russian Defence-Industry Public Information: Pantsir-SM",
        "url": "https://roe.ru/",
        "publisher": "Rosoboronexport",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "pantsir-sm-shorad",
      "name": "Pantsir-SM",
      "officialDesignation": "Pantsir-SM Air Defence Gun-Missile System",
      "alternateNames": [
        "Pantsir-SM",
        "SA-22 Greyhound"
      ],
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile Gun-and-Missile SHORAD",
      "domain": "AIR_DEFENCE",
      "country": "Russia",
      "originCountries": [
        "Russia"
      ],
      "manufacturer": "KBP / High Precision Systems",
      "operators": [
        "Russia"
      ],
      "developmentYear": 2016,
      "serviceEntryYear": 2020,
      "status": "Active",
      "generation": "N/A",
      "description": "Truck-mounted gun-missile system combining high-speed two-stage surface-to-air missiles and twin 30mm automatic cannons with AESA targeting radar.",
      "specs": {
        "physical": {
          "systemWeightKg": 30000,
          "launcherType": "Wheeled 8x8 KamAZ chassis with integrated turret",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 30,
          "minEngagementRangeKm": 1.2,
          "maxEngagementAltitudeM": 15000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 5
        },
        "guidance": {
          "guidanceSystems": [
            "Radio Command Guidance via tracking radar and EO channel"
          ],
          "seekerType": "Command Guided",
          "warheadType": "Continuous-Rod High-Explosive Fragmentation",
          "warheadWeightKg": 20
        },
        "sensors": {
          "radarSystem": "1RS3 Phased Array Target Tracking Radar + Search AESA",
          "opticalTracking": "Thermal Imaging Sight and Laser Rangefinder",
          "simultaneousEngagements": 4
        }
      },
      "sources": [
        {
          "title": "Russian Defence-Industry Public Information: Pantsir-SM",
          "url": "https://roe.ru/",
          "publisher": "Rosoboronexport",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "tor-m2-shorad",
    "name": "Tor-M2",
    "officialDesignation": "9K332 Tor-M2 Tracked Short-Range Air Defence System",
    "commonName": "Tor-M2",
    "aliases": [
      "Tor-M2",
      "SA-15 Gauntlet"
    ],
    "familyName": "Short Range (SHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Air Defence — Short Range (SHORAD)",
    "subcategory": "Tracked Autonomous SHORAD",
    "rankInCategory": 5,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Russia",
      "Belarus",
      "Egypt",
      "Greece"
    ],
    "developer": "Almaz-Antey / Kupol Electromechanical Plant",
    "manufacturer": "Almaz-Antey / Kupol Electromechanical Plant",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Tor-M2",
      "9K332 Tor-M2 Tracked Short-Range Air Defence System",
      "SA-15 Gauntlet",
      "Tracked Autonomous SHORAD",
      "Short Range (SHORAD)"
    ],
    "era": "2007–Present",
    "shortDescription": "Fully autonomous tracked air defense system carrying 16 vertical-launch missiles with active phased-array radar for on-the-move tactical tracking.",
    "fullOverview": "Fully autonomous tracked air defense system carrying 16 vertical-launch missiles with active phased-array radar for on-the-move tactical tracking.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Almaz-Antey Tor Product Information",
    "specs": {
      "entryIntoService": "2009",
      "crew": "N/A",
      "manufacturer": "Almaz-Antey / Kupol Electromechanical Plant",
      "primaryRole": "Tracked Autonomous SHORAD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "15",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Radio Command Guidance via 9S36 radar tracking",
        "seekerType: Command Guided",
        "radarSystem: 9S36 Phased Array Tracking Radar + Surveillance AESA",
        "opticalTracking: TV/Optical Tracking System and Thermal Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 34000,
          "launcherType": "Tracked chassis with 16 vertical launch cells",
          "mobility": "TRACKED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 15,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 10000,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2.8
        },
        "guidance": {
          "guidanceSystems": [
            "Radio Command Guidance via 9S36 radar tracking"
          ],
          "seekerType": "Command Guided",
          "warheadType": "HE Blast-Fragmentation",
          "warheadWeightKg": 15
        },
        "sensors": {
          "radarSystem": "9S36 Phased Array Tracking Radar + Surveillance AESA",
          "opticalTracking": "TV/Optical Tracking System and Thermal Sight",
          "simultaneousEngagements": 4
        }
      },
      "developmentYear": 2007,
      "serviceEntryYear": 2009,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Russia",
        "Belarus",
        "Egypt",
        "Greece"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey Tor Product Information",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "tor-m2-shorad",
      "name": "Tor-M2",
      "officialDesignation": "9K332 Tor-M2 Tracked Short-Range Air Defence System",
      "alternateNames": [
        "Tor-M2",
        "SA-15 Gauntlet"
      ],
      "category": "Short Range (SHORAD)",
      "subcategory": "Tracked Autonomous SHORAD",
      "domain": "AIR_DEFENCE",
      "country": "Russia",
      "originCountries": [
        "Russia"
      ],
      "manufacturer": "Almaz-Antey / Kupol Electromechanical Plant",
      "operators": [
        "Russia",
        "Belarus",
        "Egypt",
        "Greece"
      ],
      "developmentYear": 2007,
      "serviceEntryYear": 2009,
      "status": "Active",
      "generation": "N/A",
      "description": "Fully autonomous tracked air defense system carrying 16 vertical-launch missiles with active phased-array radar for on-the-move tactical tracking.",
      "specs": {
        "physical": {
          "systemWeightKg": 34000,
          "launcherType": "Tracked chassis with 16 vertical launch cells",
          "mobility": "TRACKED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 15,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 10000,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2.8
        },
        "guidance": {
          "guidanceSystems": [
            "Radio Command Guidance via 9S36 radar tracking"
          ],
          "seekerType": "Command Guided",
          "warheadType": "HE Blast-Fragmentation",
          "warheadWeightKg": 15
        },
        "sensors": {
          "radarSystem": "9S36 Phased Array Tracking Radar + Surveillance AESA",
          "opticalTracking": "TV/Optical Tracking System and Thermal Sight",
          "simultaneousEngagements": 4
        }
      },
      "sources": [
        {
          "title": "Almaz-Antey Tor Product Information",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "korkut-sp-shorad",
    "name": "KORKUT",
    "officialDesignation": "KORKUT Self-Propelled 35mm Air Defence System",
    "commonName": "KORKUT",
    "aliases": [
      "Korkut SPAAG"
    ],
    "familyName": "Short Range (SHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Air Defence — Short Range (SHORAD)",
    "subcategory": "Tracked Gun-Based SHORAD",
    "rankInCategory": 6,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Türkiye"
    ],
    "developer": "ASELSAN / FNSS",
    "manufacturer": "ASELSAN / FNSS",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "KORKUT",
      "KORKUT Self-Propelled 35mm Air Defence System",
      "Korkut SPAAG",
      "Tracked Gun-Based SHORAD",
      "Short Range (SHORAD)"
    ],
    "era": "2010–Present",
    "shortDescription": "Tracked armored anti-aircraft gun system utilizing twin 35mm cannons firing programmable airburst ammunition paired with a command vehicle.",
    "fullOverview": "Tracked armored anti-aircraft gun system utilizing twin 35mm cannons firing programmable airburst ammunition paired with a command vehicle.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "ASELSAN KORKUT System Brochure",
    "specs": {
      "entryIntoService": "2019",
      "crew": "N/A",
      "manufacturer": "ASELSAN / FNSS",
      "primaryRole": "Tracked Gun-Based SHORAD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0.75",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Fire-control radar with muzzle velocity radar and laser rangefinder",
        "seekerType: Radar / Optical Tracking",
        "radarSystem: ASELSAN 3D Search Radar on Command Vehicle",
        "opticalTracking: Electro-Optical Tracking Channel and Thermal Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 30000,
          "launcherType": "Unmanned twin-35mm turret on ACV-30 tracked chassis",
          "mobility": "TRACKED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 4,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 3000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2
        },
        "guidance": {
          "guidanceSystems": [
            "Fire-control radar with muzzle velocity radar and laser rangefinder"
          ],
          "seekerType": "Radar / Optical Tracking",
          "warheadType": "AHEAD Programmable Airburst Submunitions",
          "warheadWeightKg": 0.75
        },
        "sensors": {
          "radarSystem": "ASELSAN 3D Search Radar on Command Vehicle",
          "opticalTracking": "Electro-Optical Tracking Channel and Thermal Sight",
          "simultaneousEngagements": 2
        }
      },
      "developmentYear": 2010,
      "serviceEntryYear": 2019,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Türkiye"
      ]
    },
    "sources": [
      {
        "title": "ASELSAN KORKUT System Brochure",
        "url": "https://www.aselsan.com/",
        "publisher": "ASELSAN",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "korkut-sp-shorad",
      "name": "KORKUT",
      "officialDesignation": "KORKUT Self-Propelled 35mm Air Defence System",
      "alternateNames": [
        "Korkut SPAAG"
      ],
      "category": "Short Range (SHORAD)",
      "subcategory": "Tracked Gun-Based SHORAD",
      "domain": "AIR_DEFENCE",
      "country": "Türkiye",
      "originCountries": [
        "Türkiye"
      ],
      "manufacturer": "ASELSAN / FNSS",
      "operators": [
        "Türkiye"
      ],
      "developmentYear": 2010,
      "serviceEntryYear": 2019,
      "status": "Active",
      "generation": "N/A",
      "description": "Tracked armored anti-aircraft gun system utilizing twin 35mm cannons firing programmable airburst ammunition paired with a command vehicle.",
      "specs": {
        "physical": {
          "systemWeightKg": 30000,
          "launcherType": "Unmanned twin-35mm turret on ACV-30 tracked chassis",
          "mobility": "TRACKED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 4,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 3000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2
        },
        "guidance": {
          "guidanceSystems": [
            "Fire-control radar with muzzle velocity radar and laser rangefinder"
          ],
          "seekerType": "Radar / Optical Tracking",
          "warheadType": "AHEAD Programmable Airburst Submunitions",
          "warheadWeightKg": 0.75
        },
        "sensors": {
          "radarSystem": "ASELSAN 3D Search Radar on Command Vehicle",
          "opticalTracking": "Electro-Optical Tracking Channel and Thermal Sight",
          "simultaneousEngagements": 2
        }
      },
      "sources": [
        {
          "title": "ASELSAN KORKUT System Brochure",
          "url": "https://www.aselsan.com/",
          "publisher": "ASELSAN",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "iris-t-sls-mk-iii-shorad",
    "name": "IRIS-T SLS Mk III",
    "officialDesignation": "IRIS-T SLS Mk III Short-Range Air Defence System",
    "commonName": "IRIS-T SLS Mk III",
    "aliases": [
      "IRIS-T SLS Mk III"
    ],
    "familyName": "Short Range (SHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Air Defence — Short Range (SHORAD)",
    "subcategory": "Mobile Short-Range Missile SHORAD",
    "rankInCategory": 7,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Germany (Program)"
    ],
    "developer": "Diehl Defence",
    "manufacturer": "Diehl Defence",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "IRIS-T SLS Mk III",
      "IRIS-T SLS Mk III Short-Range Air Defence System",
      "Mobile Short-Range Missile SHORAD",
      "Short Range (SHORAD)"
    ],
    "era": "2018–Present",
    "shortDescription": "Mobile short-range air defense missile system utilizing infrared-homing IRIS-T interceptors mounted on armored tactical vehicles.",
    "fullOverview": "Mobile short-range air defense missile system utilizing infrared-homing IRIS-T interceptors mounted on armored tactical vehicles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Diehl Defence IRIS-T SLS Mk III Specifications",
    "specs": {
      "entryIntoService": "2022",
      "crew": "N/A",
      "manufacturer": "Diehl Defence",
      "primaryRole": "Mobile Short-Range Missile SHORAD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "11.4",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Imaging Infrared (IIR) Seeker with two-way datalink",
        "seekerType: Imaging Infrared",
        "radarSystem: Giraffe 1X / Spexer tactical radar options",
        "opticalTracking: Electro-Optical / Thermal Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 15000,
          "launcherType": "Vehicle-mounted canister launcher rails (4 ready rounds)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 12,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 8000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 3
        },
        "guidance": {
          "guidanceSystems": [
            "Imaging Infrared (IIR) Seeker with two-way datalink"
          ],
          "seekerType": "Imaging Infrared",
          "warheadType": "HE Blast-Fragmentation",
          "warheadWeightKg": 11.4
        },
        "sensors": {
          "radarSystem": "Giraffe 1X / Spexer tactical radar options",
          "opticalTracking": "Electro-Optical / Thermal Sight",
          "simultaneousEngagements": 4
        }
      },
      "developmentYear": 2018,
      "serviceEntryYear": 2022,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Germany (Program)"
      ]
    },
    "sources": [
      {
        "title": "Diehl Defence IRIS-T SLS Mk III Specifications",
        "url": "https://www.diehl.com/defence/en/",
        "publisher": "Diehl Defence",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "iris-t-sls-mk-iii-shorad",
      "name": "IRIS-T SLS Mk III",
      "officialDesignation": "IRIS-T SLS Mk III Short-Range Air Defence System",
      "alternateNames": [
        "IRIS-T SLS Mk III"
      ],
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile Short-Range Missile SHORAD",
      "domain": "AIR_DEFENCE",
      "country": "Germany",
      "originCountries": [
        "Germany"
      ],
      "manufacturer": "Diehl Defence",
      "operators": [
        "Germany (Program)"
      ],
      "developmentYear": 2018,
      "serviceEntryYear": 2022,
      "status": "Active",
      "generation": "N/A",
      "description": "Mobile short-range air defense missile system utilizing infrared-homing IRIS-T interceptors mounted on armored tactical vehicles.",
      "specs": {
        "physical": {
          "systemWeightKg": 15000,
          "launcherType": "Vehicle-mounted canister launcher rails (4 ready rounds)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 12,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 8000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 3
        },
        "guidance": {
          "guidanceSystems": [
            "Imaging Infrared (IIR) Seeker with two-way datalink"
          ],
          "seekerType": "Imaging Infrared",
          "warheadType": "HE Blast-Fragmentation",
          "warheadWeightKg": 11.4
        },
        "sensors": {
          "radarSystem": "Giraffe 1X / Spexer tactical radar options",
          "opticalTracking": "Electro-Optical / Thermal Sight",
          "simultaneousEngagements": 4
        }
      },
      "sources": [
        {
          "title": "Diehl Defence IRIS-T SLS Mk III Specifications",
          "url": "https://www.diehl.com/defence/en/",
          "publisher": "Diehl Defence",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "sky-sabre-shorad-uk",
    "name": "Sky Sabre",
    "officialDesignation": "Sky Sabre Ground-Based Air Defence System (CAMM)",
    "commonName": "Sky Sabre",
    "aliases": [
      "Sky Sabre",
      "Land Ceptor"
    ],
    "familyName": "Short Range (SHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Air Defence — Short Range (SHORAD)",
    "subcategory": "Networked Short-Range Air Defense System",
    "rankInCategory": 8,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United Kingdom (British Army)"
    ],
    "developer": "MBDA UK / Saab / Leonardo",
    "manufacturer": "MBDA UK / Saab / Leonardo",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Sky Sabre",
      "Sky Sabre Ground-Based Air Defence System (CAMM)",
      "Land Ceptor",
      "Networked Short-Range Air Defense System",
      "Short Range (SHORAD)"
    ],
    "era": "2012–Present",
    "shortDescription": "Modern UK short-range air defense system combining the active-radar CAMM (Common Anti-air Modular Missile) with Giraffe Agile Multi-Beam 3D radar.",
    "fullOverview": "Modern UK short-range air defense system combining the active-radar CAMM (Common Anti-air Modular Missile) with Giraffe Agile Multi-Beam 3D radar.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "British Army / MBDA CAMM Information",
    "specs": {
      "entryIntoService": "2021",
      "crew": "N/A",
      "manufacturer": "MBDA UK / Saab / Leonardo",
      "primaryRole": "Networked Short-Range Air Defense System",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "10",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Active Radar Homing (ARH) Seeker",
        "Two-Way Datalink",
        "seekerType: Active Radar",
        "radarSystem: Saab Giraffe Agile Multi-Beam (AMB) 3D Radar",
        "opticalTracking: Integrated EO/IR Tracking System"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 14000,
          "launcherType": "MANPADS-derived or truck-mounted vertical canister launcher",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 25,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 10000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 3
        },
        "guidance": {
          "guidanceSystems": [
            "Active Radar Homing (ARH) Seeker",
            "Two-Way Datalink"
          ],
          "seekerType": "Active Radar",
          "warheadType": "HE Blast-Fragmentation",
          "warheadWeightKg": 10
        },
        "sensors": {
          "radarSystem": "Saab Giraffe Agile Multi-Beam (AMB) 3D Radar",
          "opticalTracking": "Integrated EO/IR Tracking System",
          "simultaneousEngagements": 24
        }
      },
      "developmentYear": 2012,
      "serviceEntryYear": 2021,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United Kingdom (British Army)"
      ]
    },
    "sources": [
      {
        "title": "British Army / MBDA CAMM Information",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA Systems",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "sky-sabre-shorad-uk",
      "name": "Sky Sabre",
      "officialDesignation": "Sky Sabre Ground-Based Air Defence System (CAMM)",
      "alternateNames": [
        "Sky Sabre",
        "Land Ceptor"
      ],
      "category": "Short Range (SHORAD)",
      "subcategory": "Networked Short-Range Air Defense System",
      "domain": "AIR_DEFENCE",
      "country": "United Kingdom",
      "originCountries": [
        "United Kingdom"
      ],
      "manufacturer": "MBDA UK / Saab / Leonardo",
      "operators": [
        "United Kingdom (British Army)"
      ],
      "developmentYear": 2012,
      "serviceEntryYear": 2021,
      "status": "Active",
      "generation": "N/A",
      "description": "Modern UK short-range air defense system combining the active-radar CAMM (Common Anti-air Modular Missile) with Giraffe Agile Multi-Beam 3D radar.",
      "specs": {
        "physical": {
          "systemWeightKg": 14000,
          "launcherType": "MANPADS-derived or truck-mounted vertical canister launcher",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 25,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 10000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 3
        },
        "guidance": {
          "guidanceSystems": [
            "Active Radar Homing (ARH) Seeker",
            "Two-Way Datalink"
          ],
          "seekerType": "Active Radar",
          "warheadType": "HE Blast-Fragmentation",
          "warheadWeightKg": 10
        },
        "sensors": {
          "radarSystem": "Saab Giraffe Agile Multi-Beam (AMB) 3D Radar",
          "opticalTracking": "Integrated EO/IR Tracking System",
          "simultaneousEngagements": 24
        }
      },
      "sources": [
        {
          "title": "British Army / MBDA CAMM Information",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA Systems",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "skyranger-35-shorad",
    "name": "Skyranger 35",
    "officialDesignation": "Skyranger 35 Mobile Air Defence System",
    "commonName": "Skyranger 35",
    "aliases": [
      "Skyranger 35"
    ],
    "familyName": "Short Range (SHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Air Defence — Short Range (SHORAD)",
    "subcategory": "Mobile Gun-Based SHORAD",
    "rankInCategory": 9,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Romania",
      "Denmark"
    ],
    "developer": "Rheinmetall",
    "manufacturer": "Rheinmetall",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Skyranger 35",
      "Skyranger 35 Mobile Air Defence System",
      "Mobile Gun-Based SHORAD",
      "Short Range (SHORAD)"
    ],
    "era": "2015–Present",
    "shortDescription": "Armored turret system mounting a 35mm Oerlikon revolver cannon with AHEAD programmable airburst ammunition for point defense.",
    "fullOverview": "Armored turret system mounting a 35mm Oerlikon revolver cannon with AHEAD programmable airburst ammunition for point defense.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Rheinmetall Skyranger 35 Product Sheet",
    "specs": {
      "entryIntoService": "2020",
      "crew": "N/A",
      "manufacturer": "Rheinmetall",
      "primaryRole": "Mobile Gun-Based SHORAD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0.35",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Radar Tracking & Laser Rangefinding",
        "AHEAD Muzzle Time Programming",
        "seekerType: Radar / Optical Tracking",
        "radarSystem: Rheinmetall Tactical 3D AESA Radar",
        "opticalTracking: Electro-Optical Tracking Channel and Thermal Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 4200,
          "launcherType": "Turret system for wheeled or tracked carriers",
          "mobility": "TRACKED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 4,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 4000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2.2
        },
        "guidance": {
          "guidanceSystems": [
            "Radar Tracking & Laser Rangefinding",
            "AHEAD Muzzle Time Programming"
          ],
          "seekerType": "Radar / Optical Tracking",
          "warheadType": "AHEAD Airburst Submunitions",
          "warheadWeightKg": 0.35
        },
        "sensors": {
          "radarSystem": "Rheinmetall Tactical 3D AESA Radar",
          "opticalTracking": "Electro-Optical Tracking Channel and Thermal Sight",
          "simultaneousEngagements": 2
        }
      },
      "developmentYear": 2015,
      "serviceEntryYear": 2020,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Romania",
        "Denmark"
      ]
    },
    "sources": [
      {
        "title": "Rheinmetall Skyranger 35 Product Sheet",
        "url": "https://www.rheinmetall.com/",
        "publisher": "Rheinmetall",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "skyranger-35-shorad",
      "name": "Skyranger 35",
      "officialDesignation": "Skyranger 35 Mobile Air Defence System",
      "alternateNames": [
        "Skyranger 35"
      ],
      "category": "Short Range (SHORAD)",
      "subcategory": "Mobile Gun-Based SHORAD",
      "domain": "AIR_DEFENCE",
      "country": "Germany",
      "originCountries": [
        "Germany"
      ],
      "manufacturer": "Rheinmetall",
      "operators": [
        "Romania",
        "Denmark"
      ],
      "developmentYear": 2015,
      "serviceEntryYear": 2020,
      "status": "Active",
      "generation": "N/A",
      "description": "Armored turret system mounting a 35mm Oerlikon revolver cannon with AHEAD programmable airburst ammunition for point defense.",
      "specs": {
        "physical": {
          "systemWeightKg": 4200,
          "launcherType": "Turret system for wheeled or tracked carriers",
          "mobility": "TRACKED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 4,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 4000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2.2
        },
        "guidance": {
          "guidanceSystems": [
            "Radar Tracking & Laser Rangefinding",
            "AHEAD Muzzle Time Programming"
          ],
          "seekerType": "Radar / Optical Tracking",
          "warheadType": "AHEAD Airburst Submunitions",
          "warheadWeightKg": 0.35
        },
        "sensors": {
          "radarSystem": "Rheinmetall Tactical 3D AESA Radar",
          "opticalTracking": "Electro-Optical Tracking Channel and Thermal Sight",
          "simultaneousEngagements": 2
        }
      },
      "sources": [
        {
          "title": "Rheinmetall Skyranger 35 Product Sheet",
          "url": "https://www.rheinmetall.com/",
          "publisher": "Rheinmetall",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "avenger-modernized-shorad",
    "name": "Avenger Modernized",
    "officialDesignation": "AN/TWQ-1 Avenger Modernized SHORAD",
    "commonName": "Avenger Modernized",
    "aliases": [
      "Avenger Modernized"
    ],
    "familyName": "Short Range (SHORAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-shorad",
    "categoryName": "Air Defence — Short Range (SHORAD)",
    "subcategory": "Vehicle-Mounted Stinger SHORAD",
    "rankInCategory": 10,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
    "developer": "Boeing / U.S. Army",
    "manufacturer": "Boeing / U.S. Army",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Avenger Modernized",
      "AN/TWQ-1 Avenger Modernized SHORAD",
      "Vehicle-Mounted Stinger SHORAD",
      "Short Range (SHORAD)"
    ],
    "era": "1985–Present",
    "shortDescription": "HMMWV-mounted pedestal air defense system carrying 8 Stinger missiles and a .50 caliber machine gun, updated with modern IFF and digital displays.",
    "fullOverview": "HMMWV-mounted pedestal air defense system carrying 8 Stinger missiles and a .50 caliber machine gun, updated with modern IFF and digital displays.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "U.S. Army Air Defence Information: Avenger",
    "specs": {
      "entryIntoService": "1989",
      "crew": "N/A",
      "manufacturer": "Boeing / U.S. Army",
      "primaryRole": "Vehicle-Mounted Stinger SHORAD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "3",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Stinger Passive Infrared Guidance",
        "Forward-Looking Infrared (FLIR)",
        "seekerType: Passive Infrared",
        "radarSystem: FAAD C2 network receiver",
        "opticalTracking: FLIR, Laser Rangefinder, and Optical Tracker"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 3900,
          "launcherType": "Pedestal turret on HMMWV platform",
          "mobility": "WHEELED_TEL",
          "crewSize": 2
        },
        "performance": {
          "maxEngagementRangeKm": 8,
          "minEngagementRangeKm": 0.2,
          "maxEngagementAltitudeM": 3800,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2.2
        },
        "guidance": {
          "guidanceSystems": [
            "Stinger Passive Infrared Guidance",
            "Forward-Looking Infrared (FLIR)"
          ],
          "seekerType": "Passive Infrared",
          "warheadType": "Annular Blast-Fragmentation",
          "warheadWeightKg": 3
        },
        "sensors": {
          "radarSystem": "FAAD C2 network receiver",
          "opticalTracking": "FLIR, Laser Rangefinder, and Optical Tracker",
          "simultaneousEngagements": 2
        }
      },
      "developmentYear": 1985,
      "serviceEntryYear": 1989,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States"
      ]
    },
    "sources": [
      {
        "title": "U.S. Army Air Defence Information: Avenger",
        "url": "https://www.army.mil/",
        "publisher": "U.S. Army",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "avenger-modernized-shorad",
      "name": "Avenger Modernized",
      "officialDesignation": "AN/TWQ-1 Avenger Modernized SHORAD",
      "alternateNames": [
        "Avenger Modernized"
      ],
      "category": "Short Range (SHORAD)",
      "subcategory": "Vehicle-Mounted Stinger SHORAD",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Boeing / U.S. Army",
      "operators": [
        "United States"
      ],
      "developmentYear": 1985,
      "serviceEntryYear": 1989,
      "status": "Active",
      "generation": "N/A",
      "description": "HMMWV-mounted pedestal air defense system carrying 8 Stinger missiles and a .50 caliber machine gun, updated with modern IFF and digital displays.",
      "specs": {
        "physical": {
          "systemWeightKg": 3900,
          "launcherType": "Pedestal turret on HMMWV platform",
          "mobility": "WHEELED_TEL",
          "crewSize": 2
        },
        "performance": {
          "maxEngagementRangeKm": 8,
          "minEngagementRangeKm": 0.2,
          "maxEngagementAltitudeM": 3800,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 2.2
        },
        "guidance": {
          "guidanceSystems": [
            "Stinger Passive Infrared Guidance",
            "Forward-Looking Infrared (FLIR)"
          ],
          "seekerType": "Passive Infrared",
          "warheadType": "Annular Blast-Fragmentation",
          "warheadWeightKg": 3
        },
        "sensors": {
          "radarSystem": "FAAD C2 network receiver",
          "opticalTracking": "FLIR, Laser Rangefinder, and Optical Tracker",
          "simultaneousEngagements": 2
        }
      },
      "sources": [
        {
          "title": "U.S. Army Air Defence Information: Avenger",
          "url": "https://www.army.mil/",
          "publisher": "U.S. Army",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "iris-t-slm-mrad",
    "name": "IRIS-T SLM",
    "officialDesignation": "IRIS-T SLM Surface-to-Air Missile System",
    "commonName": "IRIS-T SLM",
    "aliases": [
      "IRIS-T SLM",
      "Surface-Launched Medium Range"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "Medium-Range Surface-to-Air Missile System",
    "rankInCategory": 1,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Germany",
      "Ukraine",
      "Egypt",
      "Sweden"
    ],
    "developer": "Diehl Defence",
    "manufacturer": "Diehl Defence",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "IRIS-T SLM",
      "IRIS-T SLM Surface-to-Air Missile System",
      "Surface-Launched Medium Range",
      "Medium-Range Surface-to-Air Missile System",
      "Medium Range (MRAD)"
    ],
    "era": "2007–Present",
    "shortDescription": "Ground-based medium-range air defense system utilizing vertically launched IRIS-T SL missiles and the TRML-4D AESA radar.",
    "fullOverview": "Ground-based medium-range air defense system utilizing vertically launched IRIS-T SL missiles and the TRML-4D AESA radar.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Diehl Defence IRIS-T SLM System Datasheet",
    "specs": {
      "entryIntoService": "2022",
      "crew": "N/A",
      "manufacturer": "Diehl Defence",
      "primaryRole": "Medium-Range Surface-to-Air Missile System",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "11.4",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "GPS/INS midcourse",
        "Imaging Infrared (IIR) Seeker",
        "Two-Way Datalink",
        "terminalGuidance: Imaging Infrared Homing",
        "radarSystem: Hensoldt TRML-4D 3D AESA Radar",
        "opticalTracking: Electro-Optical / Infrared Fire-Control Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 14000,
          "launcherType": "Truck-mounted vertical canister launcher (8 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 40,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 20000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 3
        },
        "guidance": {
          "guidanceSystems": [
            "GPS/INS midcourse",
            "Imaging Infrared (IIR) Seeker",
            "Two-Way Datalink"
          ],
          "terminalGuidance": "Imaging Infrared Homing",
          "warheadType": "High-Explosive Blast-Fragmentation with Proximity Fuze",
          "warheadWeightKg": 11.4
        },
        "sensors": {
          "radarSystem": "Hensoldt TRML-4D 3D AESA Radar",
          "opticalTracking": "Electro-Optical / Infrared Fire-Control Director",
          "simultaneousEngagements": 24
        }
      },
      "developmentYear": 2007,
      "serviceEntryYear": 2022,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Germany",
        "Ukraine",
        "Egypt",
        "Sweden"
      ]
    },
    "sources": [
      {
        "title": "Diehl Defence IRIS-T SLM System Datasheet",
        "url": "https://www.diehl.com/defence/en/",
        "publisher": "Diehl Defence",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "iris-t-slm-mrad",
      "name": "IRIS-T SLM",
      "officialDesignation": "IRIS-T SLM Surface-to-Air Missile System",
      "alternateNames": [
        "IRIS-T SLM",
        "Surface-Launched Medium Range"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range Surface-to-Air Missile System",
      "domain": "AIR_DEFENCE",
      "country": "Germany",
      "originCountries": [
        "Germany"
      ],
      "manufacturer": "Diehl Defence",
      "operators": [
        "Germany",
        "Ukraine",
        "Egypt",
        "Sweden"
      ],
      "developmentYear": 2007,
      "serviceEntryYear": 2022,
      "status": "Active",
      "generation": "N/A",
      "description": "Ground-based medium-range air defense system utilizing vertically launched IRIS-T SL missiles and the TRML-4D AESA radar.",
      "specs": {
        "physical": {
          "systemWeightKg": 14000,
          "launcherType": "Truck-mounted vertical canister launcher (8 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 40,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 20000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 3
        },
        "guidance": {
          "guidanceSystems": [
            "GPS/INS midcourse",
            "Imaging Infrared (IIR) Seeker",
            "Two-Way Datalink"
          ],
          "terminalGuidance": "Imaging Infrared Homing",
          "warheadType": "High-Explosive Blast-Fragmentation with Proximity Fuze",
          "warheadWeightKg": 11.4
        },
        "sensors": {
          "radarSystem": "Hensoldt TRML-4D 3D AESA Radar",
          "opticalTracking": "Electro-Optical / Infrared Fire-Control Director",
          "simultaneousEngagements": 24
        }
      },
      "sources": [
        {
          "title": "Diehl Defence IRIS-T SLM System Datasheet",
          "url": "https://www.diehl.com/defence/en/",
          "publisher": "Diehl Defence",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "nasams-3-mrad",
    "name": "NASAMS 3",
    "officialDesignation": "National Advanced Surface-to-Air Missile System 3",
    "commonName": "NASAMS 3",
    "aliases": [
      "NASAMS 3",
      "NASAMS-MR"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "Networked Medium-Range Air Defense System",
    "rankInCategory": 2,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Norway",
      "United States",
      "Ukraine",
      "Australia",
      "Lithuania",
      "Hungary",
      "Qatar",
      "Oman",
      "Indonesia"
    ],
    "developer": "Kongsberg Defence & Aerospace / Raytheon",
    "manufacturer": "Kongsberg Defence & Aerospace / Raytheon",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "NASAMS 3",
      "National Advanced Surface-to-Air Missile System 3",
      "NASAMS-MR",
      "Networked Medium-Range Air Defense System",
      "Medium Range (MRAD)"
    ],
    "era": "2007–Present",
    "shortDescription": "Distributed medium-range air defense architecture firing AMRAAM, AMRAAM-ER, and AIM-9X missiles connected via a Fire Distribution Center.",
    "fullOverview": "Distributed medium-range air defense architecture firing AMRAAM, AMRAAM-ER, and AIM-9X missiles connected via a Fire Distribution Center.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Kongsberg / Raytheon NASAMS 3 Specification",
    "specs": {
      "entryIntoService": "2019",
      "crew": "N/A",
      "manufacturer": "Kongsberg Defence & Aerospace / Raytheon",
      "primaryRole": "Networked Medium-Range Air Defense System",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "22",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Two-Way Datalink",
        "Active Radar Homing (ARH)",
        "terminalGuidance: Active Monopulse Radar Homing",
        "radarSystem: Raytheon AN/MPQ-64F1 Sentinel 3D AESA Radar",
        "opticalTracking: Multi-Sensor Electro-Optical Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 9500,
          "launcherType": "Multi-missile canister launcher (6 ready rounds)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 50,
          "minEngagementRangeKm": 2,
          "maxEngagementAltitudeM": 21000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4
        },
        "guidance": {
          "guidanceSystems": [
            "Two-Way Datalink",
            "Active Radar Homing (ARH)"
          ],
          "terminalGuidance": "Active Monopulse Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 22
        },
        "sensors": {
          "radarSystem": "Raytheon AN/MPQ-64F1 Sentinel 3D AESA Radar",
          "opticalTracking": "Multi-Sensor Electro-Optical Director",
          "simultaneousEngagements": 72
        }
      },
      "developmentYear": 2007,
      "serviceEntryYear": 2019,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Norway",
        "United States",
        "Ukraine",
        "Australia",
        "Lithuania",
        "Hungary",
        "Qatar",
        "Oman",
        "Indonesia"
      ]
    },
    "sources": [
      {
        "title": "Kongsberg / Raytheon NASAMS 3 Specification",
        "url": "https://www.kongsberg.com/",
        "publisher": "Kongsberg",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "nasams-3-mrad",
      "name": "NASAMS 3",
      "officialDesignation": "National Advanced Surface-to-Air Missile System 3",
      "alternateNames": [
        "NASAMS 3",
        "NASAMS-MR"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "Networked Medium-Range Air Defense System",
      "domain": "AIR_DEFENCE",
      "country": "Norway",
      "originCountries": [
        "Norway",
        "United States"
      ],
      "manufacturer": "Kongsberg Defence & Aerospace / Raytheon",
      "operators": [
        "Norway",
        "United States",
        "Ukraine",
        "Australia",
        "Lithuania",
        "Hungary",
        "Qatar",
        "Oman",
        "Indonesia"
      ],
      "developmentYear": 2007,
      "serviceEntryYear": 2019,
      "status": "Active",
      "generation": "N/A",
      "description": "Distributed medium-range air defense architecture firing AMRAAM, AMRAAM-ER, and AIM-9X missiles connected via a Fire Distribution Center.",
      "specs": {
        "physical": {
          "systemWeightKg": 9500,
          "launcherType": "Multi-missile canister launcher (6 ready rounds)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 50,
          "minEngagementRangeKm": 2,
          "maxEngagementAltitudeM": 21000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4
        },
        "guidance": {
          "guidanceSystems": [
            "Two-Way Datalink",
            "Active Radar Homing (ARH)"
          ],
          "terminalGuidance": "Active Monopulse Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 22
        },
        "sensors": {
          "radarSystem": "Raytheon AN/MPQ-64F1 Sentinel 3D AESA Radar",
          "opticalTracking": "Multi-Sensor Electro-Optical Director",
          "simultaneousEngagements": 72
        }
      },
      "sources": [
        {
          "title": "Kongsberg / Raytheon NASAMS 3 Specification",
          "url": "https://www.kongsberg.com/",
          "publisher": "Kongsberg",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "barak-mx-mrad",
    "name": "Barak MX (MRAD)",
    "officialDesignation": "Barak MX Integrated Medium-Range Air Defence System",
    "commonName": "Barak MX (MRAD)",
    "aliases": [
      "Barak MX MRAD",
      "Barak-8 MR"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "Modular Medium-Range SAM",
    "rankInCategory": 3,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Israel",
      "India",
      "Azerbaijan",
      "Morocco"
    ],
    "developer": "Israel Aerospace Industries (IAI)",
    "manufacturer": "Israel Aerospace Industries (IAI)",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Barak MX (MRAD)",
      "Barak MX Integrated Medium-Range Air Defence System",
      "Barak MX MRAD",
      "Barak-8 MR",
      "Modular Medium-Range SAM",
      "Medium Range (MRAD)"
    ],
    "era": "2012–Present",
    "shortDescription": "Modular medium-range air defense system using active radar homing interceptors and multi-mission AESA radars for 360-degree defense.",
    "fullOverview": "Modular medium-range air defense system using active radar homing interceptors and multi-mission AESA radars for 360-degree defense.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "IAI Barak MX Medium Range Specifications",
    "specs": {
      "entryIntoService": "2017",
      "crew": "N/A",
      "manufacturer": "Israel Aerospace Industries (IAI)",
      "primaryRole": "Modular Medium-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "60",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Active RF Seeker",
        "Two-Way Datalink",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: IAI EL/M-2084 Multi-Mission AESA Radar",
        "opticalTracking: Electro-Optical / Thermal Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 12000,
          "launcherType": "Vertical Canister Launch Pods (8 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 35,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 16000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active RF Seeker",
            "Two-Way Datalink"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 60
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2084 Multi-Mission AESA Radar",
          "opticalTracking": "Electro-Optical / Thermal Director",
          "simultaneousEngagements": 30
        }
      },
      "developmentYear": 2012,
      "serviceEntryYear": 2017,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Israel",
        "India",
        "Azerbaijan",
        "Morocco"
      ]
    },
    "sources": [
      {
        "title": "IAI Barak MX Medium Range Specifications",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "barak-mx-mrad",
      "name": "Barak MX (MRAD)",
      "officialDesignation": "Barak MX Integrated Medium-Range Air Defence System",
      "alternateNames": [
        "Barak MX MRAD",
        "Barak-8 MR"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "Modular Medium-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "Israel",
      "originCountries": [
        "Israel",
        "India"
      ],
      "manufacturer": "Israel Aerospace Industries (IAI)",
      "operators": [
        "Israel",
        "India",
        "Azerbaijan",
        "Morocco"
      ],
      "developmentYear": 2012,
      "serviceEntryYear": 2017,
      "status": "Active",
      "generation": "N/A",
      "description": "Modular medium-range air defense system using active radar homing interceptors and multi-mission AESA radars for 360-degree defense.",
      "specs": {
        "physical": {
          "systemWeightKg": 12000,
          "launcherType": "Vertical Canister Launch Pods (8 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 35,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 16000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active RF Seeker",
            "Two-Way Datalink"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 60
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2084 Multi-Mission AESA Radar",
          "opticalTracking": "Electro-Optical / Thermal Director",
          "simultaneousEngagements": 30
        }
      },
      "sources": [
        {
          "title": "IAI Barak MX Medium Range Specifications",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "samp-t-mrad",
    "name": "SAMP/T",
    "officialDesignation": "SAMP/T Mamba Air Defence System (Aster 30)",
    "commonName": "SAMP/T",
    "aliases": [
      "SAMP/T",
      "Mamba"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "Medium-to-Long Range Air Defence System",
    "rankInCategory": 4,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "France",
      "Italy",
      "Singapore",
      "Ukraine"
    ],
    "developer": "Eurosam (MBDA & Thales)",
    "manufacturer": "Eurosam (MBDA & Thales)",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "SAMP/T",
      "SAMP/T Mamba Air Defence System (Aster 30)",
      "Mamba",
      "Medium-to-Long Range Air Defence System",
      "Medium Range (MRAD)"
    ],
    "era": "1990–Present",
    "shortDescription": "Advanced European land-based air defense system utilizing vertical-launch Aster 30 missiles and Arabel phased-array radar.",
    "fullOverview": "Advanced European land-based air defense system utilizing vertical-launch Aster 30 missiles and Arabel phased-array radar.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "MBDA / Eurosam SAMP/T Technical Manual",
    "specs": {
      "entryIntoService": "2011",
      "crew": "N/A",
      "manufacturer": "Eurosam (MBDA & Thales)",
      "primaryRole": "Medium-to-Long Range Air Defence System",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "20",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Active Radar Homing Seeker",
        "Data Link",
        "terminalGuidance: Active Radar Homing with aerodynamic/lateral thruster control",
        "radarSystem: Thales Arabel 3D Phased Array Radar",
        "opticalTracking: Optional Electro-Optical Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 31000,
          "launcherType": "Truck-mounted vertical canister launcher (8 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 120,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 20000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active Radar Homing Seeker",
            "Data Link"
          ],
          "terminalGuidance": "Active Radar Homing with aerodynamic/lateral thruster control",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 20
        },
        "sensors": {
          "radarSystem": "Thales Arabel 3D Phased Array Radar",
          "opticalTracking": "Optional Electro-Optical Director",
          "simultaneousEngagements": 16
        }
      },
      "developmentYear": 1990,
      "serviceEntryYear": 2011,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "France",
        "Italy",
        "Singapore",
        "Ukraine"
      ]
    },
    "sources": [
      {
        "title": "MBDA / Eurosam SAMP/T Technical Manual",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA Systems",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "samp-t-mrad",
      "name": "SAMP/T",
      "officialDesignation": "SAMP/T Mamba Air Defence System (Aster 30)",
      "alternateNames": [
        "SAMP/T",
        "Mamba"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-to-Long Range Air Defence System",
      "domain": "AIR_DEFENCE",
      "country": "France",
      "originCountries": [
        "France",
        "Italy"
      ],
      "manufacturer": "Eurosam (MBDA & Thales)",
      "operators": [
        "France",
        "Italy",
        "Singapore",
        "Ukraine"
      ],
      "developmentYear": 1990,
      "serviceEntryYear": 2011,
      "status": "Active",
      "generation": "N/A",
      "description": "Advanced European land-based air defense system utilizing vertical-launch Aster 30 missiles and Arabel phased-array radar.",
      "specs": {
        "physical": {
          "systemWeightKg": 31000,
          "launcherType": "Truck-mounted vertical canister launcher (8 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 120,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 20000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active Radar Homing Seeker",
            "Data Link"
          ],
          "terminalGuidance": "Active Radar Homing with aerodynamic/lateral thruster control",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 20
        },
        "sensors": {
          "radarSystem": "Thales Arabel 3D Phased Array Radar",
          "opticalTracking": "Optional Electro-Optical Director",
          "simultaneousEngagements": 16
        }
      },
      "sources": [
        {
          "title": "MBDA / Eurosam SAMP/T Technical Manual",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA Systems",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "km-sam-cheongung-ii",
    "name": "KM-SAM Block II (Cheongung-II)",
    "officialDesignation": "KM-SAM Block II Medium Range Surface-to-Air Missile System",
    "commonName": "KM-SAM Block II (Cheongung-II)",
    "aliases": [
      "Cheongung-II",
      "M-SAM"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "Medium-Range Surface-to-Air Missile",
    "rankInCategory": 5,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "South Korea",
      "United Arab Emirates",
      "Saudi Arabia"
    ],
    "developer": "LIG Nex1 / Hanwha Systems",
    "manufacturer": "LIG Nex1 / Hanwha Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "KM-SAM Block II (Cheongung-II)",
      "KM-SAM Block II Medium Range Surface-to-Air Missile System",
      "Cheongung-II",
      "M-SAM",
      "Medium-Range Surface-to-Air Missile",
      "Medium Range (MRAD)"
    ],
    "era": "2012–Present",
    "shortDescription": "South Korean medium-range air defense system featuring cold-launch vertical tubes, active radar homing, and hit-to-kill ballistic defense capability.",
    "fullOverview": "South Korean medium-range air defense system featuring cold-launch vertical tubes, active radar homing, and hit-to-kill ballistic defense capability.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "LIG Nex1 Cheongung-II System Specifications",
    "specs": {
      "entryIntoService": "2020",
      "crew": "N/A",
      "manufacturer": "LIG Nex1 / Hanwha Systems",
      "primaryRole": "Medium-Range Surface-to-Air Missile",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "30",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Active Radar Homing Seeker",
        "Two-Way Datalink",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: Hanwha Systems Multi-Function AESA Radar",
        "opticalTracking: Electro-Optical Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 15000,
          "launcherType": "Truck-mounted vertical canister launcher (8 ready rounds)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 40,
          "minEngagementRangeKm": 2,
          "maxEngagementAltitudeM": 20000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active Radar Homing Seeker",
            "Two-Way Datalink"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation / Hit-to-Kill",
          "warheadWeightKg": 30
        },
        "sensors": {
          "radarSystem": "Hanwha Systems Multi-Function AESA Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 6
        }
      },
      "developmentYear": 2012,
      "serviceEntryYear": 2020,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "South Korea",
        "United Arab Emirates",
        "Saudi Arabia"
      ]
    },
    "sources": [
      {
        "title": "LIG Nex1 Cheongung-II System Specifications",
        "url": "https://www.lignex1.com/",
        "publisher": "LIG Nex1",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "km-sam-cheongung-ii",
      "name": "KM-SAM Block II (Cheongung-II)",
      "officialDesignation": "KM-SAM Block II Medium Range Surface-to-Air Missile System",
      "alternateNames": [
        "Cheongung-II",
        "M-SAM"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range Surface-to-Air Missile",
      "domain": "AIR_DEFENCE",
      "country": "South Korea",
      "originCountries": [
        "South Korea"
      ],
      "manufacturer": "LIG Nex1 / Hanwha Systems",
      "operators": [
        "South Korea",
        "United Arab Emirates",
        "Saudi Arabia"
      ],
      "developmentYear": 2012,
      "serviceEntryYear": 2020,
      "status": "Active",
      "generation": "N/A",
      "description": "South Korean medium-range air defense system featuring cold-launch vertical tubes, active radar homing, and hit-to-kill ballistic defense capability.",
      "specs": {
        "physical": {
          "systemWeightKg": 15000,
          "launcherType": "Truck-mounted vertical canister launcher (8 ready rounds)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 40,
          "minEngagementRangeKm": 2,
          "maxEngagementAltitudeM": 20000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active Radar Homing Seeker",
            "Two-Way Datalink"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation / Hit-to-Kill",
          "warheadWeightKg": 30
        },
        "sensors": {
          "radarSystem": "Hanwha Systems Multi-Function AESA Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 6
        }
      },
      "sources": [
        {
          "title": "LIG Nex1 Cheongung-II System Specifications",
          "url": "https://www.lignex1.com/",
          "publisher": "LIG Nex1",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "spyder-mr-system",
    "name": "SPYDER-MR",
    "officialDesignation": "SPYDER-MR Medium Range Mobile Air Defence System",
    "commonName": "SPYDER-MR",
    "aliases": [
      "SPYDER-MR"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "Mobile Medium-Range Air Defense System",
    "rankInCategory": 6,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Israel",
      "India",
      "Singapore",
      "Czech Republic",
      "Philippines"
    ],
    "developer": "Rafael Advanced Defense Systems / IAI",
    "manufacturer": "Rafael Advanced Defense Systems / IAI",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "SPYDER-MR",
      "SPYDER-MR Medium Range Mobile Air Defence System",
      "Mobile Medium-Range Air Defense System",
      "Medium Range (MRAD)"
    ],
    "era": "2005–Present",
    "shortDescription": "Quick-reaction mobile air defense system using Python-5 and Derby missiles launched from trucks with booster stages for extended range.",
    "fullOverview": "Quick-reaction mobile air defense system using Python-5 and Derby missiles launched from trucks with booster stages for extended range.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Rafael SPYDER-MR System Overview",
    "specs": {
      "entryIntoService": "2008",
      "crew": "N/A",
      "manufacturer": "Rafael Advanced Defense Systems / IAI",
      "primaryRole": "Mobile Medium-Range Air Defense System",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "23",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Active Radar Homing (Derby)",
        "Imaging Infrared (Python-5)",
        "terminalGuidance: Active Radar or IIR Homing",
        "radarSystem: IAI EL/M-2084 Multi-Mission Radar",
        "opticalTracking: Toplite Electro-Optical Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 14000,
          "launcherType": "Truck-mounted canister launcher (4-8 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 35,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 16000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4
        },
        "guidance": {
          "guidanceSystems": [
            "Active Radar Homing (Derby)",
            "Imaging Infrared (Python-5)"
          ],
          "terminalGuidance": "Active Radar or IIR Homing",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 23
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2084 Multi-Mission Radar",
          "opticalTracking": "Toplite Electro-Optical Director",
          "simultaneousEngagements": 12
        }
      },
      "developmentYear": 2005,
      "serviceEntryYear": 2008,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Israel",
        "India",
        "Singapore",
        "Czech Republic",
        "Philippines"
      ]
    },
    "sources": [
      {
        "title": "Rafael SPYDER-MR System Overview",
        "url": "https://www.rafael.co.il/",
        "publisher": "Rafael",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "spyder-mr-system",
      "name": "SPYDER-MR",
      "officialDesignation": "SPYDER-MR Medium Range Mobile Air Defence System",
      "alternateNames": [
        "SPYDER-MR"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "Mobile Medium-Range Air Defense System",
      "domain": "AIR_DEFENCE",
      "country": "Israel",
      "originCountries": [
        "Israel"
      ],
      "manufacturer": "Rafael Advanced Defense Systems / IAI",
      "operators": [
        "Israel",
        "India",
        "Singapore",
        "Czech Republic",
        "Philippines"
      ],
      "developmentYear": 2005,
      "serviceEntryYear": 2008,
      "status": "Active",
      "generation": "N/A",
      "description": "Quick-reaction mobile air defense system using Python-5 and Derby missiles launched from trucks with booster stages for extended range.",
      "specs": {
        "physical": {
          "systemWeightKg": 14000,
          "launcherType": "Truck-mounted canister launcher (4-8 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 35,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 16000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4
        },
        "guidance": {
          "guidanceSystems": [
            "Active Radar Homing (Derby)",
            "Imaging Infrared (Python-5)"
          ],
          "terminalGuidance": "Active Radar or IIR Homing",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 23
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2084 Multi-Mission Radar",
          "opticalTracking": "Toplite Electro-Optical Director",
          "simultaneousEngagements": 12
        }
      },
      "sources": [
        {
          "title": "Rafael SPYDER-MR System Overview",
          "url": "https://www.rafael.co.il/",
          "publisher": "Rafael",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "camm-er-land-ceptor",
    "name": "CAMM-ER Land Ceptor",
    "officialDesignation": "CAMM-ER Ground-Based Air Defence System",
    "commonName": "CAMM-ER Land Ceptor",
    "aliases": [
      "CAMM-ER",
      "Land Ceptor ER"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "Active Radar Medium-Range SAM",
    "rankInCategory": 7,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United Kingdom",
      "Italy"
    ],
    "developer": "MBDA Missile Systems",
    "manufacturer": "MBDA Missile Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "CAMM-ER Land Ceptor",
      "CAMM-ER Ground-Based Air Defence System",
      "CAMM-ER",
      "Land Ceptor ER",
      "Active Radar Medium-Range SAM",
      "Medium Range (MRAD)"
    ],
    "era": "2013–Present",
    "shortDescription": "Extended-range development of the CAMM missile featuring a larger rocket booster, soft vertical launch, and active RF seeker guidance.",
    "fullOverview": "Extended-range development of the CAMM missile featuring a larger rocket booster, soft vertical launch, and active RF seeker guidance.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "MBDA CAMM-ER Technical Datasheet",
    "specs": {
      "entryIntoService": "2022",
      "crew": "N/A",
      "manufacturer": "MBDA Missile Systems",
      "primaryRole": "Active Radar Medium-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "10",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Active Radio Frequency (RF) Seeker",
        "Two-Way Datalink",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: Saab Giraffe 4A / Leonardo Kronos AESA Radar",
        "opticalTracking: Electro-Optical Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 1600,
          "launcherType": "Truck-mounted canister pallet (8 ready rounds)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 40,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 10000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 3
        },
        "guidance": {
          "guidanceSystems": [
            "Active Radio Frequency (RF) Seeker",
            "Two-Way Datalink"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 10
        },
        "sensors": {
          "radarSystem": "Saab Giraffe 4A / Leonardo Kronos AESA Radar",
          "opticalTracking": "Electro-Optical Sight",
          "simultaneousEngagements": 24
        }
      },
      "developmentYear": 2013,
      "serviceEntryYear": 2022,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United Kingdom",
        "Italy"
      ]
    },
    "sources": [
      {
        "title": "MBDA CAMM-ER Technical Datasheet",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA Systems",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "camm-er-land-ceptor",
      "name": "CAMM-ER Land Ceptor",
      "officialDesignation": "CAMM-ER Ground-Based Air Defence System",
      "alternateNames": [
        "CAMM-ER",
        "Land Ceptor ER"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "Active Radar Medium-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "United Kingdom",
      "originCountries": [
        "United Kingdom",
        "Italy"
      ],
      "manufacturer": "MBDA Missile Systems",
      "operators": [
        "United Kingdom",
        "Italy"
      ],
      "developmentYear": 2013,
      "serviceEntryYear": 2022,
      "status": "Active",
      "generation": "N/A",
      "description": "Extended-range development of the CAMM missile featuring a larger rocket booster, soft vertical launch, and active RF seeker guidance.",
      "specs": {
        "physical": {
          "systemWeightKg": 1600,
          "launcherType": "Truck-mounted canister pallet (8 ready rounds)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 40,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 10000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 3
        },
        "guidance": {
          "guidanceSystems": [
            "Active Radio Frequency (RF) Seeker",
            "Two-Way Datalink"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 10
        },
        "sensors": {
          "radarSystem": "Saab Giraffe 4A / Leonardo Kronos AESA Radar",
          "opticalTracking": "Electro-Optical Sight",
          "simultaneousEngagements": 24
        }
      },
      "sources": [
        {
          "title": "MBDA CAMM-ER Technical Datasheet",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA Systems",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "vl-mica-mrad",
    "name": "VL MICA NG",
    "officialDesignation": "Vertical Launch MICA Next Generation Air Defence System",
    "commonName": "VL MICA NG",
    "aliases": [
      "VL MICA NG"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "Vertical Launch Medium-Range SAM",
    "rankInCategory": 8,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "France",
      "United Arab Emirates",
      "Oman",
      "Egypt"
    ],
    "developer": "MBDA Missile Systems",
    "manufacturer": "MBDA Missile Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "VL MICA NG",
      "Vertical Launch MICA Next Generation Air Defence System",
      "Vertical Launch Medium-Range SAM",
      "Medium Range (MRAD)"
    ],
    "era": "2015–Present",
    "shortDescription": "Vertical launch air defense system utilizing MICA missiles with dual-option active radar or imaging infrared seekers.",
    "fullOverview": "Vertical launch air defense system utilizing MICA missiles with dual-option active radar or imaging infrared seekers.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "MBDA VL MICA NG Technical Specifications",
    "specs": {
      "entryIntoService": "2021",
      "crew": "N/A",
      "manufacturer": "MBDA Missile Systems",
      "primaryRole": "Vertical Launch Medium-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "12",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Active Radar (EM) or Imaging Infrared (IR) Seeker",
        "terminalGuidance: Active Radar or IIR Homing",
        "radarSystem: Thales Ground Fire / Thales Master AESA Radar",
        "opticalTracking: STIR EO/IR Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 112,
          "launcherType": "Vertical canister launch pods (4-8 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 40,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 9000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4
        },
        "guidance": {
          "guidanceSystems": [
            "Active Radar (EM) or Imaging Infrared (IR) Seeker"
          ],
          "terminalGuidance": "Active Radar or IIR Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 12
        },
        "sensors": {
          "radarSystem": "Thales Ground Fire / Thales Master AESA Radar",
          "opticalTracking": "STIR EO/IR Director",
          "simultaneousEngagements": 8
        }
      },
      "developmentYear": 2015,
      "serviceEntryYear": 2021,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "France",
        "United Arab Emirates",
        "Oman",
        "Egypt"
      ]
    },
    "sources": [
      {
        "title": "MBDA VL MICA NG Technical Specifications",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA Systems",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "vl-mica-mrad",
      "name": "VL MICA NG",
      "officialDesignation": "Vertical Launch MICA Next Generation Air Defence System",
      "alternateNames": [
        "VL MICA NG"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "Vertical Launch Medium-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "France",
      "originCountries": [
        "France"
      ],
      "manufacturer": "MBDA Missile Systems",
      "operators": [
        "France",
        "United Arab Emirates",
        "Oman",
        "Egypt"
      ],
      "developmentYear": 2015,
      "serviceEntryYear": 2021,
      "status": "Active",
      "generation": "N/A",
      "description": "Vertical launch air defense system utilizing MICA missiles with dual-option active radar or imaging infrared seekers.",
      "specs": {
        "physical": {
          "systemWeightKg": 112,
          "launcherType": "Vertical canister launch pods (4-8 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 40,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 9000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4
        },
        "guidance": {
          "guidanceSystems": [
            "Active Radar (EM) or Imaging Infrared (IR) Seeker"
          ],
          "terminalGuidance": "Active Radar or IIR Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 12
        },
        "sensors": {
          "radarSystem": "Thales Ground Fire / Thales Master AESA Radar",
          "opticalTracking": "STIR EO/IR Director",
          "simultaneousEngagements": 8
        }
      },
      "sources": [
        {
          "title": "MBDA VL MICA NG Technical Specifications",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA Systems",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "buk-m3-viking-mrad",
    "name": "Buk-M3 (Viking)",
    "officialDesignation": "9K317M Buk-M3 / Viking Medium-Range Air Defence System",
    "commonName": "Buk-M3 (Viking)",
    "aliases": [
      "Buk-M3",
      "Viking",
      "SA-20 Viking"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "Tracked Medium-Range SAM System",
    "rankInCategory": 9,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
    "developer": "Almaz-Antey / Tikhomirov Scientific Research Institute",
    "manufacturer": "Almaz-Antey / Tikhomirov Scientific Research Institute",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Buk-M3 (Viking)",
      "9K317M Buk-M3 / Viking Medium-Range Air Defence System",
      "Buk-M3",
      "Viking",
      "SA-20 Viking",
      "Tracked Medium-Range SAM System",
      "Medium Range (MRAD)"
    ],
    "era": "2007–Present",
    "shortDescription": "Advanced tracked medium-range air defense missile system firing containerized active and semi-active radar homing missiles out to 70 km.",
    "fullOverview": "Advanced tracked medium-range air defense missile system firing containerized active and semi-active radar homing missiles out to 70 km.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Almaz-Antey Buk-M3 Viking Product Information",
    "specs": {
      "entryIntoService": "2016",
      "crew": "N/A",
      "manufacturer": "Almaz-Antey / Tikhomirov Scientific Research Institute",
      "primaryRole": "Tracked Medium-Range SAM System",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "70",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Active Radar Homing (9M317M)",
        "Semi-Active Radar Homing",
        "terminalGuidance: Active / Semi-Active Radar Homing",
        "radarSystem: 9S36M Phased Array Engagement Radar + Surveillance AESA",
        "opticalTracking: Electro-Optical Direct Tracker"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 35000,
          "launcherType": "Tracked TELAR with 6 containerized missiles",
          "mobility": "TRACKED_TEL",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 70,
          "minEngagementRangeKm": 2.5,
          "maxEngagementAltitudeM": 35000,
          "minEngagementAltitudeM": 15,
          "maxInterceptorSpeedMach": 15.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active Radar Homing (9M317M)",
            "Semi-Active Radar Homing"
          ],
          "terminalGuidance": "Active / Semi-Active Radar Homing",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 70
        },
        "sensors": {
          "radarSystem": "9S36M Phased Array Engagement Radar + Surveillance AESA",
          "opticalTracking": "Electro-Optical Direct Tracker",
          "simultaneousEngagements": 36
        }
      },
      "developmentYear": 2007,
      "serviceEntryYear": 2016,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Russia"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey Buk-M3 Viking Product Information",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "buk-m3-viking-mrad",
      "name": "Buk-M3 (Viking)",
      "officialDesignation": "9K317M Buk-M3 / Viking Medium-Range Air Defence System",
      "alternateNames": [
        "Buk-M3",
        "Viking",
        "SA-20 Viking"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "Tracked Medium-Range SAM System",
      "domain": "AIR_DEFENCE",
      "country": "Russia",
      "originCountries": [
        "Russia"
      ],
      "manufacturer": "Almaz-Antey / Tikhomirov Scientific Research Institute",
      "operators": [
        "Russia"
      ],
      "developmentYear": 2007,
      "serviceEntryYear": 2016,
      "status": "Active",
      "generation": "N/A",
      "description": "Advanced tracked medium-range air defense missile system firing containerized active and semi-active radar homing missiles out to 70 km.",
      "specs": {
        "physical": {
          "systemWeightKg": 35000,
          "launcherType": "Tracked TELAR with 6 containerized missiles",
          "mobility": "TRACKED_TEL",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 70,
          "minEngagementRangeKm": 2.5,
          "maxEngagementAltitudeM": 35000,
          "minEngagementAltitudeM": 15,
          "maxInterceptorSpeedMach": 15.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active Radar Homing (9M317M)",
            "Semi-Active Radar Homing"
          ],
          "terminalGuidance": "Active / Semi-Active Radar Homing",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 70
        },
        "sensors": {
          "radarSystem": "9S36M Phased Array Engagement Radar + Surveillance AESA",
          "opticalTracking": "Electro-Optical Direct Tracker",
          "simultaneousEngagements": 36
        }
      },
      "sources": [
        {
          "title": "Almaz-Antey Buk-M3 Viking Product Information",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "hq-16b-mrad",
    "name": "HQ-16B",
    "officialDesignation": "Hongqi-16B Medium-Range Surface-to-Air Missile System",
    "commonName": "HQ-16B",
    "aliases": [
      "HQ-16B",
      "LY-80"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "Truck-Mounted Medium-Range SAM",
    "rankInCategory": 10,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "People's Liberation Army Air Force (PLAAF)",
      "Pakistan"
    ],
    "developer": "CASIC",
    "manufacturer": "CASIC",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "HQ-16B",
      "Hongqi-16B Medium-Range Surface-to-Air Missile System",
      "LY-80",
      "Truck-Mounted Medium-Range SAM",
      "Medium Range (MRAD)"
    ],
    "era": "2005–Present",
    "shortDescription": "Medium-range air defense system mounted on a 6x6 truck chassis, featuring vertical launch canisters and semi-active radar homing guidance.",
    "fullOverview": "Medium-range air defense system mounted on a 6x6 truck chassis, featuring vertical launch canisters and semi-active radar homing guidance.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "CASIC HQ-16B System Specification",
    "specs": {
      "entryIntoService": "2011",
      "crew": "N/A",
      "manufacturer": "CASIC",
      "primaryRole": "Truck-Mounted Medium-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "165",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Midcourse Command Datalink",
        "Semi-Active Radar Homing (SARH)",
        "terminalGuidance: Semi-Active Radar Homing",
        "radarSystem: IBIS-200 / Type 382 Phased Array Radar",
        "opticalTracking: Electro-Optical Tracking System"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 22000,
          "launcherType": "6x6 Truck Transporter Erector Launcher (6 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 70,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 18500,
          "minEngagementAltitudeM": 15,
          "maxInterceptorSpeedMach": 4.2
        },
        "guidance": {
          "guidanceSystems": [
            "Midcourse Command Datalink",
            "Semi-Active Radar Homing (SARH)"
          ],
          "terminalGuidance": "Semi-Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 165
        },
        "sensors": {
          "radarSystem": "IBIS-200 / Type 382 Phased Array Radar",
          "opticalTracking": "Electro-Optical Tracking System",
          "simultaneousEngagements": 6
        }
      },
      "developmentYear": 2005,
      "serviceEntryYear": 2011,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "People's Liberation Army Air Force (PLAAF)",
        "Pakistan"
      ]
    },
    "sources": [
      {
        "title": "CASIC HQ-16B System Specification",
        "url": "https://www.casic.com.cn/",
        "publisher": "CASIC",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "hq-16b-mrad",
      "name": "HQ-16B",
      "officialDesignation": "Hongqi-16B Medium-Range Surface-to-Air Missile System",
      "alternateNames": [
        "HQ-16B",
        "LY-80"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "Truck-Mounted Medium-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "China",
      "originCountries": [
        "China"
      ],
      "manufacturer": "CASIC",
      "operators": [
        "People's Liberation Army Air Force (PLAAF)",
        "Pakistan"
      ],
      "developmentYear": 2005,
      "serviceEntryYear": 2011,
      "status": "Active",
      "generation": "N/A",
      "description": "Medium-range air defense system mounted on a 6x6 truck chassis, featuring vertical launch canisters and semi-active radar homing guidance.",
      "specs": {
        "physical": {
          "systemWeightKg": 22000,
          "launcherType": "6x6 Truck Transporter Erector Launcher (6 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 70,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 18500,
          "minEngagementAltitudeM": 15,
          "maxInterceptorSpeedMach": 4.2
        },
        "guidance": {
          "guidanceSystems": [
            "Midcourse Command Datalink",
            "Semi-Active Radar Homing (SARH)"
          ],
          "terminalGuidance": "Semi-Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 165
        },
        "sensors": {
          "radarSystem": "IBIS-200 / Type 382 Phased Array Radar",
          "opticalTracking": "Electro-Optical Tracking System",
          "simultaneousEngagements": 6
        }
      },
      "sources": [
        {
          "title": "CASIC HQ-16B System Specification",
          "url": "https://www.casic.com.cn/",
          "publisher": "CASIC",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "akash-ng-mrad",
    "name": "Akash-NG",
    "officialDesignation": "Akash New Generation Medium-Range Air Defence System",
    "commonName": "Akash-NG",
    "aliases": [
      "Akash-NG"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "Active Seeker Medium-Range SAM",
    "rankInCategory": 11,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Indian Army",
      "Indian Air Force"
    ],
    "developer": "DRDO / Bharat Dynamics Limited",
    "manufacturer": "DRDO / Bharat Dynamics Limited",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Akash-NG",
      "Akash New Generation Medium-Range Air Defence System",
      "Active Seeker Medium-Range SAM",
      "Medium Range (MRAD)"
    ],
    "era": "2016–Present",
    "shortDescription": "Next-generation Indian medium-range air defense missile utilizing a dual-pulse solid rocket motor and an active RF seeker.",
    "fullOverview": "Next-generation Indian medium-range air defense missile utilizing a dual-pulse solid rocket motor and an active RF seeker.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "DRDO Akash-NG Technical Manual",
    "specs": {
      "entryIntoService": "2022",
      "crew": "N/A",
      "manufacturer": "DRDO / Bharat Dynamics Limited",
      "primaryRole": "Active Seeker Medium-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "60",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation System",
        "Active Radio Frequency (RF) Seeker",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: Swathi / DRDO Multi-Function AESA Radar",
        "opticalTracking: Electro-Optical Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 720,
          "launcherType": "Truck-mounted canister TEL",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 70,
          "minEngagementRangeKm": 4,
          "maxEngagementAltitudeM": 20000,
          "minEngagementAltitudeM": 30,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation System",
            "Active Radio Frequency (RF) Seeker"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "Pre-fragmented High Explosive",
          "warheadWeightKg": 60
        },
        "sensors": {
          "radarSystem": "Swathi / DRDO Multi-Function AESA Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 8
        }
      },
      "developmentYear": 2016,
      "serviceEntryYear": 2022,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Indian Army",
        "Indian Air Force"
      ]
    },
    "sources": [
      {
        "title": "DRDO Akash-NG Technical Manual",
        "url": "https://www.drdo.gov.in/",
        "publisher": "DRDO",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "akash-ng-mrad",
      "name": "Akash-NG",
      "officialDesignation": "Akash New Generation Medium-Range Air Defence System",
      "alternateNames": [
        "Akash-NG"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "Active Seeker Medium-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "India",
      "originCountries": [
        "India"
      ],
      "manufacturer": "DRDO / Bharat Dynamics Limited",
      "operators": [
        "Indian Army",
        "Indian Air Force"
      ],
      "developmentYear": 2016,
      "serviceEntryYear": 2022,
      "status": "Active",
      "generation": "N/A",
      "description": "Next-generation Indian medium-range air defense missile utilizing a dual-pulse solid rocket motor and an active RF seeker.",
      "specs": {
        "physical": {
          "systemWeightKg": 720,
          "launcherType": "Truck-mounted canister TEL",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 70,
          "minEngagementRangeKm": 4,
          "maxEngagementAltitudeM": 20000,
          "minEngagementAltitudeM": 30,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation System",
            "Active Radio Frequency (RF) Seeker"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "Pre-fragmented High Explosive",
          "warheadWeightKg": 60
        },
        "sensors": {
          "radarSystem": "Swathi / DRDO Multi-Function AESA Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 8
        }
      },
      "sources": [
        {
          "title": "DRDO Akash-NG Technical Manual",
          "url": "https://www.drdo.gov.in/",
          "publisher": "DRDO",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "s-350-vityaz-mrad",
    "name": "S-350 Vityaz",
    "officialDesignation": "50R6 S-350 Vityaz Medium-to-Long Range Air Defence",
    "commonName": "S-350 Vityaz",
    "aliases": [
      "S-350 Vityaz",
      "50R6"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "High-Capacity Medium-Range SAM",
    "rankInCategory": 12,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "S-350 Vityaz",
      "50R6 S-350 Vityaz Medium-to-Long Range Air Defence",
      "50R6",
      "High-Capacity Medium-Range SAM",
      "Medium Range (MRAD)"
    ],
    "era": "2007–Present",
    "shortDescription": "High-capacity medium-range air defense battery utilizing 12-canister launchers mounted on BAZ 8x8 trucks, firing 9M96 and 9M100 missiles.",
    "fullOverview": "High-capacity medium-range air defense battery utilizing 12-canister launchers mounted on BAZ 8x8 trucks, firing 9M96 and 9M100 missiles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Almaz-Antey S-350 Vityaz Product File",
    "specs": {
      "entryIntoService": "2019",
      "crew": "N/A",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "High-Capacity Medium-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "24",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Active Radar Homing",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: 50N6A Multi-Function AESA Radar",
        "opticalTracking: Electro-Optical Sight System"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 38000,
          "launcherType": "BAZ 8x8 Truck with 12 vertical launch canisters",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 120,
          "minEngagementRangeKm": 1.5,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 6
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active Radar Homing"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Fragmentation with Directional Blast",
          "warheadWeightKg": 24
        },
        "sensors": {
          "radarSystem": "50N6A Multi-Function AESA Radar",
          "opticalTracking": "Electro-Optical Sight System",
          "simultaneousEngagements": 16
        }
      },
      "developmentYear": 2007,
      "serviceEntryYear": 2019,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Russia"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey S-350 Vityaz Product File",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "s-350-vityaz-mrad",
      "name": "S-350 Vityaz",
      "officialDesignation": "50R6 S-350 Vityaz Medium-to-Long Range Air Defence",
      "alternateNames": [
        "S-350 Vityaz",
        "50R6"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "High-Capacity Medium-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "Russia",
      "originCountries": [
        "Russia"
      ],
      "manufacturer": "Almaz-Antey",
      "operators": [
        "Russia"
      ],
      "developmentYear": 2007,
      "serviceEntryYear": 2019,
      "status": "Active",
      "generation": "N/A",
      "description": "High-capacity medium-range air defense battery utilizing 12-canister launchers mounted on BAZ 8x8 trucks, firing 9M96 and 9M100 missiles.",
      "specs": {
        "physical": {
          "systemWeightKg": 38000,
          "launcherType": "BAZ 8x8 Truck with 12 vertical launch canisters",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 120,
          "minEngagementRangeKm": 1.5,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 6
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active Radar Homing"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Fragmentation with Directional Blast",
          "warheadWeightKg": 24
        },
        "sensors": {
          "radarSystem": "50N6A Multi-Function AESA Radar",
          "opticalTracking": "Electro-Optical Sight System",
          "simultaneousEngagements": 16
        }
      },
      "sources": [
        {
          "title": "Almaz-Antey S-350 Vityaz Product File",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "barak-8-mrad",
    "name": "Barak-8 MR",
    "officialDesignation": "Barak-8 Medium-Range Surface-to-Air Missile System",
    "commonName": "Barak-8 MR",
    "aliases": [
      "Barak-8 MR",
      "MRSAM"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "Medium-Range Surface-to-Air Missile",
    "rankInCategory": 13,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Israel",
      "India",
      "Azerbaijan"
    ],
    "developer": "IAI / DRDO / Rafael",
    "manufacturer": "IAI / DRDO / Rafael",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Barak-8 MR",
      "Barak-8 Medium-Range Surface-to-Air Missile System",
      "MRSAM",
      "Medium-Range Surface-to-Air Missile",
      "Medium Range (MRAD)"
    ],
    "era": "2006–Present",
    "shortDescription": "Medium-range air defense system featuring a dual-pulse rocket motor and active radar homing seeker for countering aircraft and missiles.",
    "fullOverview": "Medium-range air defense system featuring a dual-pulse rocket motor and active radar homing seeker for countering aircraft and missiles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "IAI Barak-8 MR Technical Overview",
    "specs": {
      "entryIntoService": "2016",
      "crew": "N/A",
      "manufacturer": "IAI / DRDO / Rafael",
      "primaryRole": "Medium-Range Surface-to-Air Missile",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "60",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Active RF Seeker",
        "Two-Way Datalink",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: IAI EL/M-2248 MF-STAR AESA Radar",
        "opticalTracking: Electro-Optical Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 275,
          "launcherType": "Vertical launch canister pods (8 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 70,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 16000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2
        },
        "guidance": {
          "guidanceSystems": [
            "Active RF Seeker",
            "Two-Way Datalink"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 60
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2248 MF-STAR AESA Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 12
        }
      },
      "developmentYear": 2006,
      "serviceEntryYear": 2016,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Israel",
        "India",
        "Azerbaijan"
      ]
    },
    "sources": [
      {
        "title": "IAI Barak-8 MR Technical Overview",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "barak-8-mrad",
      "name": "Barak-8 MR",
      "officialDesignation": "Barak-8 Medium-Range Surface-to-Air Missile System",
      "alternateNames": [
        "Barak-8 MR",
        "MRSAM"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range Surface-to-Air Missile",
      "domain": "AIR_DEFENCE",
      "country": "Israel",
      "originCountries": [
        "Israel",
        "India"
      ],
      "manufacturer": "IAI / DRDO / Rafael",
      "operators": [
        "Israel",
        "India",
        "Azerbaijan"
      ],
      "developmentYear": 2006,
      "serviceEntryYear": 2016,
      "status": "Active",
      "generation": "N/A",
      "description": "Medium-range air defense system featuring a dual-pulse rocket motor and active radar homing seeker for countering aircraft and missiles.",
      "specs": {
        "physical": {
          "systemWeightKg": 275,
          "launcherType": "Vertical launch canister pods (8 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 70,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 16000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2
        },
        "guidance": {
          "guidanceSystems": [
            "Active RF Seeker",
            "Two-Way Datalink"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 60
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2248 MF-STAR AESA Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 12
        }
      },
      "sources": [
        {
          "title": "IAI Barak-8 MR Technical Overview",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "hq-16c-mrad",
    "name": "HQ-16C",
    "officialDesignation": "HQ-16C Improved Medium-Range Air Defence System",
    "commonName": "HQ-16C",
    "aliases": [
      "HQ-16C"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 14,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "People's Liberation Army Air Force (PLAAF)",
      "Pakistan"
    ],
    "developer": "CASIC",
    "manufacturer": "CASIC",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "HQ-16C",
      "HQ-16C Improved Medium-Range Air Defence System",
      "Medium-Range SAM",
      "Medium Range (MRAD)"
    ],
    "era": "2012–Present",
    "shortDescription": "Upgraded version of the HQ-16 family with extended range and enhanced electronic counter-countermeasures for medium-altitude defense.",
    "fullOverview": "Upgraded version of the HQ-16 family with extended range and enhanced electronic counter-countermeasures for medium-altitude defense.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "CASIC HQ-16C Specifications",
    "specs": {
      "entryIntoService": "2018",
      "crew": "N/A",
      "manufacturer": "CASIC",
      "primaryRole": "Medium-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "165",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Midcourse Command Link",
        "Semi-Active/Active Radar Homing",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: Type 382 / IBIS-200 AESA Radar",
        "opticalTracking: Electro-Optical Tracking Channel"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 22000,
          "launcherType": "6x6 Truck Transporter Erector Launcher (6 ready rounds)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 70,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 18500,
          "minEngagementAltitudeM": 15,
          "maxInterceptorSpeedMach": 4.2
        },
        "guidance": {
          "guidanceSystems": [
            "Midcourse Command Link",
            "Semi-Active/Active Radar Homing"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 165
        },
        "sensors": {
          "radarSystem": "Type 382 / IBIS-200 AESA Radar",
          "opticalTracking": "Electro-Optical Tracking Channel",
          "simultaneousEngagements": 8
        }
      },
      "developmentYear": 2012,
      "serviceEntryYear": 2018,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "People's Liberation Army Air Force (PLAAF)",
        "Pakistan"
      ]
    },
    "sources": [
      {
        "title": "CASIC HQ-16C Specifications",
        "url": "https://www.casic.com.cn/",
        "publisher": "CASIC",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "hq-16c-mrad",
      "name": "HQ-16C",
      "officialDesignation": "HQ-16C Improved Medium-Range Air Defence System",
      "alternateNames": [
        "HQ-16C"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "China",
      "originCountries": [
        "China"
      ],
      "manufacturer": "CASIC",
      "operators": [
        "People's Liberation Army Air Force (PLAAF)",
        "Pakistan"
      ],
      "developmentYear": 2012,
      "serviceEntryYear": 2018,
      "status": "Active",
      "generation": "N/A",
      "description": "Upgraded version of the HQ-16 family with extended range and enhanced electronic counter-countermeasures for medium-altitude defense.",
      "specs": {
        "physical": {
          "systemWeightKg": 22000,
          "launcherType": "6x6 Truck Transporter Erector Launcher (6 ready rounds)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 70,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 18500,
          "minEngagementAltitudeM": 15,
          "maxInterceptorSpeedMach": 4.2
        },
        "guidance": {
          "guidanceSystems": [
            "Midcourse Command Link",
            "Semi-Active/Active Radar Homing"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 165
        },
        "sensors": {
          "radarSystem": "Type 382 / IBIS-200 AESA Radar",
          "opticalTracking": "Electro-Optical Tracking Channel",
          "simultaneousEngagements": 8
        }
      },
      "sources": [
        {
          "title": "CASIC HQ-16C Specifications",
          "url": "https://www.casic.com.cn/",
          "publisher": "CASIC",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "aspide-2000-mrad",
    "name": "Aspide 2000",
    "officialDesignation": "Spada / Aspide 2000 Medium-Range Air Defence System",
    "commonName": "Aspide 2000",
    "aliases": [
      "Aspide 2000",
      "Spada 2000"
    ],
    "familyName": "Medium Range (MRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-mrad",
    "categoryName": "Air Defence — Medium Range (MRAD)",
    "subcategory": "Medium-Range SAM",
    "rankInCategory": 15,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Italy",
      "Spain",
      "Pakistan",
      "Cyprus",
      "Thailand"
    ],
    "developer": "Alenia Spazio / MBDA",
    "manufacturer": "Alenia Spazio / MBDA",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Aspide 2000",
      "Spada / Aspide 2000 Medium-Range Air Defence System",
      "Spada 2000",
      "Medium-Range SAM",
      "Medium Range (MRAD)"
    ],
    "era": "1970–Present",
    "shortDescription": "Medium-range air defense missile system derived from the AIM-7 Sparrow air-to-air missile, optimized for point and area defense.",
    "fullOverview": "Medium-range air defense missile system derived from the AIM-7 Sparrow air-to-air missile, optimized for point and area defense.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "MBDA Aspide 2000 Technical Overview",
    "specs": {
      "entryIntoService": "2000",
      "crew": "N/A",
      "manufacturer": "Alenia Spazio / MBDA",
      "primaryRole": "Medium-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "30",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inverse Monopulse Semi-Active Radar Homing",
        "terminalGuidance: Semi-Active Radar Homing",
        "radarSystem: Selenia Aspide Fire Control Radar",
        "opticalTracking: Optional Optical Tracker"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 240,
          "launcherType": "Towed or truck-mounted launcher (6 ready rounds)",
          "mobility": "TOWED",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 25,
          "minEngagementRangeKm": 1.5,
          "maxEngagementAltitudeM": 10000,
          "minEngagementAltitudeM": 15,
          "maxInterceptorSpeedMach": 4
        },
        "guidance": {
          "guidanceSystems": [
            "Inverse Monopulse Semi-Active Radar Homing"
          ],
          "terminalGuidance": "Semi-Active Radar Homing",
          "warheadType": "Continuous-Rod High-Explosive",
          "warheadWeightKg": 30
        },
        "sensors": {
          "radarSystem": "Selenia Aspide Fire Control Radar",
          "opticalTracking": "Optional Optical Tracker",
          "simultaneousEngagements": 4
        }
      },
      "developmentYear": 1970,
      "serviceEntryYear": 2000,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Italy",
        "Spain",
        "Pakistan",
        "Cyprus",
        "Thailand"
      ]
    },
    "sources": [
      {
        "title": "MBDA Aspide 2000 Technical Overview",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "aspide-2000-mrad",
      "name": "Aspide 2000",
      "officialDesignation": "Spada / Aspide 2000 Medium-Range Air Defence System",
      "alternateNames": [
        "Aspide 2000",
        "Spada 2000"
      ],
      "category": "Medium Range (MRAD)",
      "subcategory": "Medium-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "Italy",
      "originCountries": [
        "Italy"
      ],
      "manufacturer": "Alenia Spazio / MBDA",
      "operators": [
        "Italy",
        "Spain",
        "Pakistan",
        "Cyprus",
        "Thailand"
      ],
      "developmentYear": 1970,
      "serviceEntryYear": 2000,
      "status": "Active",
      "generation": "N/A",
      "description": "Medium-range air defense missile system derived from the AIM-7 Sparrow air-to-air missile, optimized for point and area defense.",
      "specs": {
        "physical": {
          "systemWeightKg": 240,
          "launcherType": "Towed or truck-mounted launcher (6 ready rounds)",
          "mobility": "TOWED",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 25,
          "minEngagementRangeKm": 1.5,
          "maxEngagementAltitudeM": 10000,
          "minEngagementAltitudeM": 15,
          "maxInterceptorSpeedMach": 4
        },
        "guidance": {
          "guidanceSystems": [
            "Inverse Monopulse Semi-Active Radar Homing"
          ],
          "terminalGuidance": "Semi-Active Radar Homing",
          "warheadType": "Continuous-Rod High-Explosive",
          "warheadWeightKg": 30
        },
        "sensors": {
          "radarSystem": "Selenia Aspide Fire Control Radar",
          "opticalTracking": "Optional Optical Tracker",
          "simultaneousEngagements": 4
        }
      },
      "sources": [
        {
          "title": "MBDA Aspide 2000 Technical Overview",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "patriot-pac-3-mse-lrad",
    "name": "Patriot PAC-3 MSE",
    "officialDesignation": "MIM-104F Patriot Missile Segment Enhancement",
    "commonName": "Patriot PAC-3 MSE",
    "aliases": [
      "PAC-3 MSE",
      "MIM-104F"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM / BMD",
    "rankInCategory": 1,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States",
      "Germany",
      "Japan",
      "Ukraine",
      "Poland",
      "Romania",
      "South Korea",
      "Netherlands",
      "Taiwan"
    ],
    "developer": "Lockheed Martin / RTX",
    "manufacturer": "Lockheed Martin / RTX",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Patriot PAC-3 MSE",
      "MIM-104F Patriot Missile Segment Enhancement",
      "PAC-3 MSE",
      "MIM-104F",
      "Long-Range SAM / BMD",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "2004–Present",
    "shortDescription": "Long-range air defense and anti-ballistic missile system using hit-to-kill interceptors and advanced AESA radar integration.",
    "fullOverview": "Long-range air defense and anti-ballistic missile system using hit-to-kill interceptors and advanced AESA radar integration.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Lockheed Martin PAC-3 MSE Specifications",
    "specs": {
      "entryIntoService": "2015",
      "crew": "N/A",
      "manufacturer": "Lockheed Martin / RTX",
      "primaryRole": "Long-Range SAM / BMD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "73",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Ka-band Active Radar Seeker",
        "Inertial Navigation",
        "Command Uplink",
        "terminalGuidance: Active Ka-Band Radar Homing + Altitude Control Motors",
        "radarSystem: Raytheon AN/MPQ-65 / LTAMDS GhostEye 3D AESA Radar",
        "opticalTracking: Engagement Control Station EO/IR Integration"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 312,
          "launcherType": "M903 Canister Launcher Station (12 PAC-3 MSE missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 120,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 36000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 5
        },
        "guidance": {
          "guidanceSystems": [
            "Ka-band Active Radar Seeker",
            "Inertial Navigation",
            "Command Uplink"
          ],
          "terminalGuidance": "Active Ka-Band Radar Homing + Altitude Control Motors",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 73
        },
        "sensors": {
          "radarSystem": "Raytheon AN/MPQ-65 / LTAMDS GhostEye 3D AESA Radar",
          "opticalTracking": "Engagement Control Station EO/IR Integration",
          "simultaneousEngagements": 9
        }
      },
      "developmentYear": 2004,
      "serviceEntryYear": 2015,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States",
        "Germany",
        "Japan",
        "Ukraine",
        "Poland",
        "Romania",
        "South Korea",
        "Netherlands",
        "Taiwan"
      ]
    },
    "sources": [
      {
        "title": "Lockheed Martin PAC-3 MSE Specifications",
        "url": "https://www.lockheedmartin.com/",
        "publisher": "Lockheed Martin",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "patriot-pac-3-mse-lrad",
      "name": "Patriot PAC-3 MSE",
      "officialDesignation": "MIM-104F Patriot Missile Segment Enhancement",
      "alternateNames": [
        "PAC-3 MSE",
        "MIM-104F"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM / BMD",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Lockheed Martin / RTX",
      "operators": [
        "United States",
        "Germany",
        "Japan",
        "Ukraine",
        "Poland",
        "Romania",
        "South Korea",
        "Netherlands",
        "Taiwan"
      ],
      "developmentYear": 2004,
      "serviceEntryYear": 2015,
      "status": "Active",
      "generation": "N/A",
      "description": "Long-range air defense and anti-ballistic missile system using hit-to-kill interceptors and advanced AESA radar integration.",
      "specs": {
        "physical": {
          "systemWeightKg": 312,
          "launcherType": "M903 Canister Launcher Station (12 PAC-3 MSE missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 120,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 36000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 5
        },
        "guidance": {
          "guidanceSystems": [
            "Ka-band Active Radar Seeker",
            "Inertial Navigation",
            "Command Uplink"
          ],
          "terminalGuidance": "Active Ka-Band Radar Homing + Altitude Control Motors",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 73
        },
        "sensors": {
          "radarSystem": "Raytheon AN/MPQ-65 / LTAMDS GhostEye 3D AESA Radar",
          "opticalTracking": "Engagement Control Station EO/IR Integration",
          "simultaneousEngagements": 9
        }
      },
      "sources": [
        {
          "title": "Lockheed Martin PAC-3 MSE Specifications",
          "url": "https://www.lockheedmartin.com/",
          "publisher": "Lockheed Martin",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "s-400-triumf-lrad",
    "name": "S-400 Triumf",
    "officialDesignation": "9K81 S-400 Triumf Long-Range Air Defence System",
    "commonName": "S-400 Triumf",
    "aliases": [
      "S-400 Triumf",
      "SA-21 Growler"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 2,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Russia",
      "China",
      "Turkey",
      "India",
      "Belarus"
    ],
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "S-400 Triumf",
      "9K81 S-400 Triumf Long-Range Air Defence System",
      "SA-21 Growler",
      "Long-Range SAM",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "1999–Present",
    "shortDescription": "Strategic long-range air defense system deploying multiple missile types (40N6, 48N6) up to 400 km against complex aerial targets.",
    "fullOverview": "Strategic long-range air defense system deploying multiple missile types (40N6, 48N6) up to 400 km against complex aerial targets.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Almaz-Antey S-400 Technical Specifications",
    "specs": {
      "entryIntoService": "2007",
      "crew": "N/A",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "Long-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "150",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Command Guidance",
        "Active Radar Homing Terminal Seeker",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: 91N6E Big Bird Panorama Radar + 92N6E Engagement Radar",
        "opticalTracking: Electro-Optical Tracking System"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 1893,
          "launcherType": "5P85TE2 / 5P85SM2-01 Transporter Erector Launcher (4 tubes)",
          "mobility": "WHEELED_TEL",
          "crewSize": 5
        },
        "performance": {
          "maxEngagementRangeKm": 400,
          "minEngagementRangeKm": 20,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 14
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Command Guidance",
            "Active Radar Homing Terminal Seeker"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Fragmentation / Directional Blast",
          "warheadWeightKg": 150
        },
        "sensors": {
          "radarSystem": "91N6E Big Bird Panorama Radar + 92N6E Engagement Radar",
          "opticalTracking": "Electro-Optical Tracking System",
          "simultaneousEngagements": 36
        }
      },
      "developmentYear": 1999,
      "serviceEntryYear": 2007,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Russia",
        "China",
        "Turkey",
        "India",
        "Belarus"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey S-400 Technical Specifications",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "s-400-triumf-lrad",
      "name": "S-400 Triumf",
      "officialDesignation": "9K81 S-400 Triumf Long-Range Air Defence System",
      "alternateNames": [
        "S-400 Triumf",
        "SA-21 Growler"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "Russia",
      "originCountries": [
        "Russia"
      ],
      "manufacturer": "Almaz-Antey",
      "operators": [
        "Russia",
        "China",
        "Turkey",
        "India",
        "Belarus"
      ],
      "developmentYear": 1999,
      "serviceEntryYear": 2007,
      "status": "Active",
      "generation": "N/A",
      "description": "Strategic long-range air defense system deploying multiple missile types (40N6, 48N6) up to 400 km against complex aerial targets.",
      "specs": {
        "physical": {
          "systemWeightKg": 1893,
          "launcherType": "5P85TE2 / 5P85SM2-01 Transporter Erector Launcher (4 tubes)",
          "mobility": "WHEELED_TEL",
          "crewSize": 5
        },
        "performance": {
          "maxEngagementRangeKm": 400,
          "minEngagementRangeKm": 20,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 14
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Command Guidance",
            "Active Radar Homing Terminal Seeker"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Fragmentation / Directional Blast",
          "warheadWeightKg": 150
        },
        "sensors": {
          "radarSystem": "91N6E Big Bird Panorama Radar + 92N6E Engagement Radar",
          "opticalTracking": "Electro-Optical Tracking System",
          "simultaneousEngagements": 36
        }
      },
      "sources": [
        {
          "title": "Almaz-Antey S-400 Technical Specifications",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "hq-9b-lrad",
    "name": "HQ-9B",
    "officialDesignation": "HQ-9B Long-Range Surface-to-Air Missile System",
    "commonName": "HQ-9B",
    "aliases": [
      "HQ-9B"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 3,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "China",
      "Pakistan"
    ],
    "developer": "CASIC",
    "manufacturer": "CASIC",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "HQ-9B",
      "HQ-9B Long-Range Surface-to-Air Missile System",
      "Long-Range SAM",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "2005–Present",
    "shortDescription": "Advanced Chinese long-range air defense system featuring active radar homing interceptors and advanced digital AESA engagement radars.",
    "fullOverview": "Advanced Chinese long-range air defense system featuring active radar homing interceptors and advanced digital AESA engagement radars.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "CASIC HQ-9B System Specification",
    "specs": {
      "entryIntoService": "2015",
      "crew": "N/A",
      "manufacturer": "CASIC",
      "primaryRole": "Long-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "180",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Midcourse Command Guidance",
        "Active Radar Homing Terminal Seeker",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: HT-233 / Type 305B AESA Multifunction Radar",
        "opticalTracking: Electro-Optical Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 1300,
          "launcherType": "8x8 Truck Transporter Erector Launcher (4 canister tubes)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 250,
          "minEngagementRangeKm": 6,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 25,
          "maxInterceptorSpeedMach": 6
        },
        "guidance": {
          "guidanceSystems": [
            "Midcourse Command Guidance",
            "Active Radar Homing Terminal Seeker"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "Directional Blast-Fragmentation",
          "warheadWeightKg": 180
        },
        "sensors": {
          "radarSystem": "HT-233 / Type 305B AESA Multifunction Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 50
        }
      },
      "developmentYear": 2005,
      "serviceEntryYear": 2015,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "China",
        "Pakistan"
      ]
    },
    "sources": [
      {
        "title": "CASIC HQ-9B System Specification",
        "url": "https://www.casic.com.cn/",
        "publisher": "CASIC",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "hq-9b-lrad",
      "name": "HQ-9B",
      "officialDesignation": "HQ-9B Long-Range Surface-to-Air Missile System",
      "alternateNames": [
        "HQ-9B"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "China",
      "originCountries": [
        "China"
      ],
      "manufacturer": "CASIC",
      "operators": [
        "China",
        "Pakistan"
      ],
      "developmentYear": 2005,
      "serviceEntryYear": 2015,
      "status": "Active",
      "generation": "N/A",
      "description": "Advanced Chinese long-range air defense system featuring active radar homing interceptors and advanced digital AESA engagement radars.",
      "specs": {
        "physical": {
          "systemWeightKg": 1300,
          "launcherType": "8x8 Truck Transporter Erector Launcher (4 canister tubes)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 250,
          "minEngagementRangeKm": 6,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 25,
          "maxInterceptorSpeedMach": 6
        },
        "guidance": {
          "guidanceSystems": [
            "Midcourse Command Guidance",
            "Active Radar Homing Terminal Seeker"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "Directional Blast-Fragmentation",
          "warheadWeightKg": 180
        },
        "sensors": {
          "radarSystem": "HT-233 / Type 305B AESA Multifunction Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 50
        }
      },
      "sources": [
        {
          "title": "CASIC HQ-9B System Specification",
          "url": "https://www.casic.com.cn/",
          "publisher": "CASIC",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "aster-30-b1nt-lrad",
    "name": "Aster 30 Block 1NT",
    "officialDesignation": "ASTER 30 Block 1NT Ground-Based Air Defence System",
    "commonName": "Aster 30 Block 1NT",
    "aliases": [
      "Aster 30 B1NT",
      "SAMP/T NG Interceptor"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM / Ballistic Missile Defence",
    "rankInCategory": 4,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "France",
      "Italy"
    ],
    "developer": "Eurosam (MBDA & Thales)",
    "manufacturer": "Eurosam (MBDA & Thales)",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Aster 30 Block 1NT",
      "ASTER 30 Block 1NT Ground-Based Air Defence System",
      "Aster 30 B1NT",
      "SAMP/T NG Interceptor",
      "Long-Range SAM / Ballistic Missile Defence",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "2016–Present",
    "shortDescription": "Long-range air and missile defense interceptor equipped with a Ka-band active radar seeker capable of intercepting 1,500-km class ballistic missiles.",
    "fullOverview": "Long-range air and missile defense interceptor equipped with a Ka-band active radar seeker capable of intercepting 1,500-km class ballistic missiles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "MBDA Aster 30 Block 1NT Specifications",
    "specs": {
      "entryIntoService": "2024",
      "crew": "N/A",
      "manufacturer": "Eurosam (MBDA & Thales)",
      "primaryRole": "Long-Range SAM / Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "20",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Ka-band Active Radar Seeker",
        "terminalGuidance: Ka-band Active Radar Homing",
        "radarSystem: Thales Ground Fire 300 AESA Radar",
        "opticalTracking: Electro-Optical Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 450,
          "launcherType": "Truck-mounted canister vertical launcher (8 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 150,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 25000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Ka-band Active Radar Seeker"
          ],
          "terminalGuidance": "Ka-band Active Radar Homing",
          "warheadType": "PIF-PAF Lateral Thruster and Blast-Fragmentation",
          "warheadWeightKg": 20
        },
        "sensors": {
          "radarSystem": "Thales Ground Fire 300 AESA Radar",
          "opticalTracking": "Electro-Optical Sight",
          "simultaneousEngagements": 16
        }
      },
      "developmentYear": 2016,
      "serviceEntryYear": 2024,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "France",
        "Italy"
      ]
    },
    "sources": [
      {
        "title": "MBDA Aster 30 Block 1NT Specifications",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA Systems",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "aster-30-b1nt-lrad",
      "name": "Aster 30 Block 1NT",
      "officialDesignation": "ASTER 30 Block 1NT Ground-Based Air Defence System",
      "alternateNames": [
        "Aster 30 B1NT",
        "SAMP/T NG Interceptor"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM / Ballistic Missile Defence",
      "domain": "AIR_DEFENCE",
      "country": "France",
      "originCountries": [
        "France",
        "Italy"
      ],
      "manufacturer": "Eurosam (MBDA & Thales)",
      "operators": [
        "France",
        "Italy"
      ],
      "developmentYear": 2016,
      "serviceEntryYear": 2024,
      "status": "Active",
      "generation": "N/A",
      "description": "Long-range air and missile defense interceptor equipped with a Ka-band active radar seeker capable of intercepting 1,500-km class ballistic missiles.",
      "specs": {
        "physical": {
          "systemWeightKg": 450,
          "launcherType": "Truck-mounted canister vertical launcher (8 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 150,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 25000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Ka-band Active Radar Seeker"
          ],
          "terminalGuidance": "Ka-band Active Radar Homing",
          "warheadType": "PIF-PAF Lateral Thruster and Blast-Fragmentation",
          "warheadWeightKg": 20
        },
        "sensors": {
          "radarSystem": "Thales Ground Fire 300 AESA Radar",
          "opticalTracking": "Electro-Optical Sight",
          "simultaneousEngagements": 16
        }
      },
      "sources": [
        {
          "title": "MBDA Aster 30 Block 1NT Specifications",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA Systems",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "barak-8-er-lrad",
    "name": "Barak-8 ER (LRAD)",
    "officialDesignation": "Barak-8 Extended Range Surface-to-Air Missile System",
    "commonName": "Barak-8 ER (LRAD)",
    "aliases": [
      "Barak-8 ER",
      "MR-SAM / LR-SAM"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 5,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Israel",
      "India",
      "Azerbaijan",
      "Morocco"
    ],
    "developer": "IAI / DRDO",
    "manufacturer": "IAI / DRDO",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Barak-8 ER (LRAD)",
      "Barak-8 Extended Range Surface-to-Air Missile System",
      "Barak-8 ER",
      "MR-SAM / LR-SAM",
      "Long-Range SAM",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "2010–Present",
    "shortDescription": "Long-range air and missile defense system utilizing a dual-pulse rocket motor booster and active RF seeker to engage threats out to 150 km.",
    "fullOverview": "Long-range air and missile defense system utilizing a dual-pulse rocket motor booster and active RF seeker to engage threats out to 150 km.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "IAI Barak-8 ER Product Datasheet",
    "specs": {
      "entryIntoService": "2017",
      "crew": "N/A",
      "manufacturer": "IAI / DRDO",
      "primaryRole": "Long-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "60",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Two-Way Datalink",
        "Active RF Seeker",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: IAI EL/M-2084 / MF-STAR AESA Radar",
        "opticalTracking: Electro-Optical Tracking Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 350,
          "launcherType": "Truck-mounted vertical canister launcher (8-16 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 150,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Two-Way Datalink",
            "Active RF Seeker"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation with Proximity Fuze",
          "warheadWeightKg": 60
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2084 / MF-STAR AESA Radar",
          "opticalTracking": "Electro-Optical Tracking Director",
          "simultaneousEngagements": 30
        }
      },
      "developmentYear": 2010,
      "serviceEntryYear": 2017,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Israel",
        "India",
        "Azerbaijan",
        "Morocco"
      ]
    },
    "sources": [
      {
        "title": "IAI Barak-8 ER Product Datasheet",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "barak-8-er-lrad",
      "name": "Barak-8 ER (LRAD)",
      "officialDesignation": "Barak-8 Extended Range Surface-to-Air Missile System",
      "alternateNames": [
        "Barak-8 ER",
        "MR-SAM / LR-SAM"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "Israel",
      "originCountries": [
        "Israel",
        "India"
      ],
      "manufacturer": "IAI / DRDO",
      "operators": [
        "Israel",
        "India",
        "Azerbaijan",
        "Morocco"
      ],
      "developmentYear": 2010,
      "serviceEntryYear": 2017,
      "status": "Active",
      "generation": "N/A",
      "description": "Long-range air and missile defense system utilizing a dual-pulse rocket motor booster and active RF seeker to engage threats out to 150 km.",
      "specs": {
        "physical": {
          "systemWeightKg": 350,
          "launcherType": "Truck-mounted vertical canister launcher (8-16 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 150,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Two-Way Datalink",
            "Active RF Seeker"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation with Proximity Fuze",
          "warheadWeightKg": 60
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2084 / MF-STAR AESA Radar",
          "opticalTracking": "Electro-Optical Tracking Director",
          "simultaneousEngagements": 30
        }
      },
      "sources": [
        {
          "title": "IAI Barak-8 ER Product Datasheet",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "s-300pmv2-favorit",
    "name": "S-300PMU2 Favorit",
    "officialDesignation": "9K81M S-300PMU2 Favorit Long-Range Air Defence",
    "commonName": "S-300PMU2 Favorit",
    "aliases": [
      "S-300PMU2",
      "SA-20 Gargoyle"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 6,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Russia",
      "China",
      "Iran",
      "Vietnam",
      "Syria"
    ],
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "S-300PMU2 Favorit",
      "9K81M S-300PMU2 Favorit Long-Range Air Defence",
      "S-300PMU2",
      "SA-20 Gargoyle",
      "Long-Range SAM",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "1995–Present",
    "shortDescription": "Highly capable long-range air defense system utilizing 48N6E2 missiles to engage ballistic and aerodynamic targets across 200 km.",
    "fullOverview": "Highly capable long-range air defense system utilizing 48N6E2 missiles to engage ballistic and aerodynamic targets across 200 km.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Almaz-Antey S-300PMU2 Technical Data",
    "specs": {
      "entryIntoService": "1997",
      "crew": "N/A",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "Long-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "145",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Command Guidance",
        "Semi-Active Radar Homing",
        "terminalGuidance: Semi-Active Radar Homing",
        "radarSystem: 64N6E Big Bird Surveillance Radar + 30N6E2 Engagement Radar",
        "opticalTracking: Electro-Optical Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 1800,
          "launcherType": "5P85SE Transporter Erector Launcher (4 canister tubes)",
          "mobility": "WHEELED_TEL",
          "crewSize": 5
        },
        "performance": {
          "maxEngagementRangeKm": 200,
          "minEngagementRangeKm": 5,
          "maxEngagementAltitudeM": 27000,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 6
        },
        "guidance": {
          "guidanceSystems": [
            "Command Guidance",
            "Semi-Active Radar Homing"
          ],
          "terminalGuidance": "Semi-Active Radar Homing",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 145
        },
        "sensors": {
          "radarSystem": "64N6E Big Bird Surveillance Radar + 30N6E2 Engagement Radar",
          "opticalTracking": "Electro-Optical Sight",
          "simultaneousEngagements": 36
        }
      },
      "developmentYear": 1995,
      "serviceEntryYear": 1997,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Russia",
        "China",
        "Iran",
        "Vietnam",
        "Syria"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey S-300PMU2 Technical Data",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "s-300pmv2-favorit",
      "name": "S-300PMU2 Favorit",
      "officialDesignation": "9K81M S-300PMU2 Favorit Long-Range Air Defence",
      "alternateNames": [
        "S-300PMU2",
        "SA-20 Gargoyle"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "Russia",
      "originCountries": [
        "Russia"
      ],
      "manufacturer": "Almaz-Antey",
      "operators": [
        "Russia",
        "China",
        "Iran",
        "Vietnam",
        "Syria"
      ],
      "developmentYear": 1995,
      "serviceEntryYear": 1997,
      "status": "Active",
      "generation": "N/A",
      "description": "Highly capable long-range air defense system utilizing 48N6E2 missiles to engage ballistic and aerodynamic targets across 200 km.",
      "specs": {
        "physical": {
          "systemWeightKg": 1800,
          "launcherType": "5P85SE Transporter Erector Launcher (4 canister tubes)",
          "mobility": "WHEELED_TEL",
          "crewSize": 5
        },
        "performance": {
          "maxEngagementRangeKm": 200,
          "minEngagementRangeKm": 5,
          "maxEngagementAltitudeM": 27000,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 6
        },
        "guidance": {
          "guidanceSystems": [
            "Command Guidance",
            "Semi-Active Radar Homing"
          ],
          "terminalGuidance": "Semi-Active Radar Homing",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 145
        },
        "sensors": {
          "radarSystem": "64N6E Big Bird Surveillance Radar + 30N6E2 Engagement Radar",
          "opticalTracking": "Electro-Optical Sight",
          "simultaneousEngagements": 36
        }
      },
      "sources": [
        {
          "title": "Almaz-Antey S-300PMU2 Technical Data",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "sam-ho-swat-system",
    "name": "Cheongung / KM-SAM",
    "officialDesignation": "KM-SAM Medium-to-Long Range Air Defence System",
    "commonName": "Cheongung / KM-SAM",
    "aliases": [
      "Cheongung",
      "M-SAM"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 7,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "South Korea",
      "UAE",
      "Saudi Arabia"
    ],
    "developer": "LIG Nex1 / Hanwha Systems",
    "manufacturer": "LIG Nex1 / Hanwha Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Cheongung / KM-SAM",
      "KM-SAM Medium-to-Long Range Air Defence System",
      "Cheongung",
      "M-SAM",
      "Long-Range SAM",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "2006–Present",
    "shortDescription": "Advanced air defense system developed with Russian tech assistance from Almaz-Antey, featuring cold-launch vertical tubes and active radar homing.",
    "fullOverview": "Advanced air defense system developed with Russian tech assistance from Almaz-Antey, featuring cold-launch vertical tubes and active radar homing.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "LIG Nex1 Cheongung System Manual",
    "specs": {
      "entryIntoService": "2015",
      "crew": "N/A",
      "manufacturer": "LIG Nex1 / Hanwha Systems",
      "primaryRole": "Long-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "30",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Active Radar Homing Seeker",
        "Inertial Navigation",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: Hanwha Systems 3D AESA Multifunction Radar",
        "opticalTracking: Electro-Optical Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 400,
          "launcherType": "Truck-mounted vertical launch canister cells (8 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 40,
          "minEngagementRangeKm": 2,
          "maxEngagementAltitudeM": 20000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Active Radar Homing Seeker",
            "Inertial Navigation"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 30
        },
        "sensors": {
          "radarSystem": "Hanwha Systems 3D AESA Multifunction Radar",
          "opticalTracking": "Electro-Optical Sight",
          "simultaneousEngagements": 6
        }
      },
      "developmentYear": 2006,
      "serviceEntryYear": 2015,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "South Korea",
        "UAE",
        "Saudi Arabia"
      ]
    },
    "sources": [
      {
        "title": "LIG Nex1 Cheongung System Manual",
        "url": "https://www.lignex1.com/",
        "publisher": "LIG Nex1",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "sam-ho-swat-system",
      "name": "Cheongung / KM-SAM",
      "officialDesignation": "KM-SAM Medium-to-Long Range Air Defence System",
      "alternateNames": [
        "Cheongung",
        "M-SAM"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "South Korea",
      "originCountries": [
        "South Korea"
      ],
      "manufacturer": "LIG Nex1 / Hanwha Systems",
      "operators": [
        "South Korea",
        "UAE",
        "Saudi Arabia"
      ],
      "developmentYear": 2006,
      "serviceEntryYear": 2015,
      "status": "Active",
      "generation": "N/A",
      "description": "Advanced air defense system developed with Russian tech assistance from Almaz-Antey, featuring cold-launch vertical tubes and active radar homing.",
      "specs": {
        "physical": {
          "systemWeightKg": 400,
          "launcherType": "Truck-mounted vertical launch canister cells (8 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 40,
          "minEngagementRangeKm": 2,
          "maxEngagementAltitudeM": 20000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Active Radar Homing Seeker",
            "Inertial Navigation"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 30
        },
        "sensors": {
          "radarSystem": "Hanwha Systems 3D AESA Multifunction Radar",
          "opticalTracking": "Electro-Optical Sight",
          "simultaneousEngagements": 6
        }
      },
      "sources": [
        {
          "title": "LIG Nex1 Cheongung System Manual",
          "url": "https://www.lignex1.com/",
          "publisher": "LIG Nex1",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "hq-9-original-lrad",
    "name": "HQ-9",
    "officialDesignation": "HQ-9 Long-Range Surface-to-Air Missile System",
    "commonName": "HQ-9",
    "aliases": [
      "HQ-9",
      "FT-2000"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 8,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "China",
      "Turkmenistan",
      "Uzbekistan"
    ],
    "developer": "CASIC",
    "manufacturer": "CASIC",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "HQ-9",
      "HQ-9 Long-Range Surface-to-Air Missile System",
      "FT-2000",
      "Long-Range SAM",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "1980–Present",
    "shortDescription": "China’s foundational indigenous long-range air defense system, incorporating phased-array tracking radars and command-guided vertical-launch missiles.",
    "fullOverview": "China’s foundational indigenous long-range air defense system, incorporating phased-array tracking radars and command-guided vertical-launch missiles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "CASIC HQ-9 Technical Specifications",
    "specs": {
      "entryIntoService": "2001",
      "crew": "N/A",
      "manufacturer": "CASIC",
      "primaryRole": "Long-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "180",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Track-via-Missile (TVM)",
        "Active Radar Terminal Seeker",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: HT-233 C-band Phased Array Radar",
        "opticalTracking: Electro-Optical Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 1300,
          "launcherType": "8x8 Truck Transporter Erector Launcher (4 tubes)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 125,
          "minEngagementRangeKm": 6,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 25,
          "maxInterceptorSpeedMach": 4.2
        },
        "guidance": {
          "guidanceSystems": [
            "Track-via-Missile (TVM)",
            "Active Radar Terminal Seeker"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "Directional Blast-Fragmentation",
          "warheadWeightKg": 180
        },
        "sensors": {
          "radarSystem": "HT-233 C-band Phased Array Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 50
        }
      },
      "developmentYear": 1980,
      "serviceEntryYear": 2001,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "China",
        "Turkmenistan",
        "Uzbekistan"
      ]
    },
    "sources": [
      {
        "title": "CASIC HQ-9 Technical Specifications",
        "url": "https://www.casic.com.cn/",
        "publisher": "CASIC",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "hq-9-original-lrad",
      "name": "HQ-9",
      "officialDesignation": "HQ-9 Long-Range Surface-to-Air Missile System",
      "alternateNames": [
        "HQ-9",
        "FT-2000"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "China",
      "originCountries": [
        "China"
      ],
      "manufacturer": "CASIC",
      "operators": [
        "China",
        "Turkmenistan",
        "Uzbekistan"
      ],
      "developmentYear": 1980,
      "serviceEntryYear": 2001,
      "status": "Active",
      "generation": "N/A",
      "description": "China’s foundational indigenous long-range air defense system, incorporating phased-array tracking radars and command-guided vertical-launch missiles.",
      "specs": {
        "physical": {
          "systemWeightKg": 1300,
          "launcherType": "8x8 Truck Transporter Erector Launcher (4 tubes)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 125,
          "minEngagementRangeKm": 6,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 25,
          "maxInterceptorSpeedMach": 4.2
        },
        "guidance": {
          "guidanceSystems": [
            "Track-via-Missile (TVM)",
            "Active Radar Terminal Seeker"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "Directional Blast-Fragmentation",
          "warheadWeightKg": 180
        },
        "sensors": {
          "radarSystem": "HT-233 C-band Phased Array Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 50
        }
      },
      "sources": [
        {
          "title": "CASIC HQ-9 Technical Specifications",
          "url": "https://www.casic.com.cn/",
          "publisher": "CASIC",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "spyder-lr-lrad",
    "name": "SPYDER-LR",
    "officialDesignation": "SPYDER-LR Long Range Mobile Air Defence System",
    "commonName": "SPYDER-LR",
    "aliases": [
      "SPYDER-LR"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 9,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Israel",
      "India",
      "Vietnam",
      "Czech Republic"
    ],
    "developer": "Rafael Advanced Defense Systems / IAI",
    "manufacturer": "Rafael Advanced Defense Systems / IAI",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "SPYDER-LR",
      "SPYDER-LR Long Range Mobile Air Defence System",
      "Long-Range SAM",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "2005–Present",
    "shortDescription": "Long-range variant of the SPYDER air defense system using Python-5 and Derby-ER missiles fitted with booster rocket stages.",
    "fullOverview": "Long-range variant of the SPYDER air defense system using Python-5 and Derby-ER missiles fitted with booster rocket stages.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Rafael SPYDER-LR Product Specifications",
    "specs": {
      "entryIntoService": "2010",
      "crew": "N/A",
      "manufacturer": "Rafael Advanced Defense Systems / IAI",
      "primaryRole": "Long-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "23",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Active Radar Homing (Derby-ER)",
        "Imaging Infrared (Python-5)",
        "terminalGuidance: Active Radar or IIR Homing",
        "radarSystem: IAI EL/M-2084 Multi-Mission AESA Radar",
        "opticalTracking: Toplite EO/IR Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 14000,
          "launcherType": "Truck-mounted canister launcher (4-8 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 80,
          "minEngagementRangeKm": 2,
          "maxEngagementAltitudeM": 16000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4
        },
        "guidance": {
          "guidanceSystems": [
            "Active Radar Homing (Derby-ER)",
            "Imaging Infrared (Python-5)"
          ],
          "terminalGuidance": "Active Radar or IIR Homing",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 23
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2084 Multi-Mission AESA Radar",
          "opticalTracking": "Toplite EO/IR Director",
          "simultaneousEngagements": 12
        }
      },
      "developmentYear": 2005,
      "serviceEntryYear": 2010,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Israel",
        "India",
        "Vietnam",
        "Czech Republic"
      ]
    },
    "sources": [
      {
        "title": "Rafael SPYDER-LR Product Specifications",
        "url": "https://www.rafael.co.il/",
        "publisher": "Rafael",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "spyder-lr-lrad",
      "name": "SPYDER-LR",
      "officialDesignation": "SPYDER-LR Long Range Mobile Air Defence System",
      "alternateNames": [
        "SPYDER-LR"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "Israel",
      "originCountries": [
        "Israel"
      ],
      "manufacturer": "Rafael Advanced Defense Systems / IAI",
      "operators": [
        "Israel",
        "India",
        "Vietnam",
        "Czech Republic"
      ],
      "developmentYear": 2005,
      "serviceEntryYear": 2010,
      "status": "Active",
      "generation": "N/A",
      "description": "Long-range variant of the SPYDER air defense system using Python-5 and Derby-ER missiles fitted with booster rocket stages.",
      "specs": {
        "physical": {
          "systemWeightKg": 14000,
          "launcherType": "Truck-mounted canister launcher (4-8 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 80,
          "minEngagementRangeKm": 2,
          "maxEngagementAltitudeM": 16000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4
        },
        "guidance": {
          "guidanceSystems": [
            "Active Radar Homing (Derby-ER)",
            "Imaging Infrared (Python-5)"
          ],
          "terminalGuidance": "Active Radar or IIR Homing",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 23
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2084 Multi-Mission AESA Radar",
          "opticalTracking": "Toplite EO/IR Director",
          "simultaneousEngagements": 12
        }
      },
      "sources": [
        {
          "title": "Rafael SPYDER-LR Product Specifications",
          "url": "https://www.rafael.co.il/",
          "publisher": "Rafael",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "sam-buccaneer-lrad",
    "name": "HQ-9C / HQ-19 Long Range",
    "officialDesignation": "HQ-19 Strategic Ballistic & Air Defence System",
    "commonName": "HQ-9C / HQ-19 Long Range",
    "aliases": [
      "HQ-19",
      "HQ-9C"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Strategic Long-Range SAM / BMD",
    "rankInCategory": 10,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "People's Liberation Army Air Force (PLAAF)"
    ],
    "developer": "CASIC",
    "manufacturer": "CASIC",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "HQ-9C / HQ-19 Long Range",
      "HQ-19 Strategic Ballistic & Air Defence System",
      "HQ-19",
      "HQ-9C",
      "Strategic Long-Range SAM / BMD",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "2010–Present",
    "shortDescription": "High-tier strategic Chinese air and missile defense system featuring kinetic hit-to-kill interceptors for upper atmospheric theater defense.",
    "fullOverview": "High-tier strategic Chinese air and missile defense system featuring kinetic hit-to-kill interceptors for upper atmospheric theater defense.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "CASIC Strategic Air Defense Systems Record",
    "specs": {
      "entryIntoService": "2019",
      "crew": "N/A",
      "manufacturer": "CASIC",
      "primaryRole": "Strategic Long-Range SAM / BMD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "50",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Active AESA Radar Seeker",
        "Infrared Seeker",
        "terminalGuidance: Hit-to-Kill Kinetic Divert Control",
        "radarSystem: Large phased-array long-range surveillance and fire-control radar",
        "opticalTracking: High-Resolution Electro-Optical Sensor"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 25000,
          "launcherType": "Heavy 8x8 Truck Transporter Erector Launcher",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 400,
          "minEngagementRangeKm": 20,
          "maxEngagementAltitudeM": 100000,
          "minEngagementAltitudeM": 100,
          "maxInterceptorSpeedMach": 12
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active AESA Radar Seeker",
            "Infrared Seeker"
          ],
          "terminalGuidance": "Hit-to-Kill Kinetic Divert Control",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 50
        },
        "sensors": {
          "radarSystem": "Large phased-array long-range surveillance and fire-control radar",
          "opticalTracking": "High-Resolution Electro-Optical Sensor",
          "simultaneousEngagements": 36
        }
      },
      "developmentYear": 2010,
      "serviceEntryYear": 2019,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "People's Liberation Army Air Force (PLAAF)"
      ]
    },
    "sources": [
      {
        "title": "CASIC Strategic Air Defense Systems Record",
        "url": "https://www.casic.com.cn/",
        "publisher": "CASIC",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "sam-buccaneer-lrad",
      "name": "HQ-9C / HQ-19 Long Range",
      "officialDesignation": "HQ-19 Strategic Ballistic & Air Defence System",
      "alternateNames": [
        "HQ-19",
        "HQ-9C"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Strategic Long-Range SAM / BMD",
      "domain": "AIR_DEFENCE",
      "country": "China",
      "originCountries": [
        "China"
      ],
      "manufacturer": "CASIC",
      "operators": [
        "People's Liberation Army Air Force (PLAAF)"
      ],
      "developmentYear": 2010,
      "serviceEntryYear": 2019,
      "status": "Active",
      "generation": "N/A",
      "description": "High-tier strategic Chinese air and missile defense system featuring kinetic hit-to-kill interceptors for upper atmospheric theater defense.",
      "specs": {
        "physical": {
          "systemWeightKg": 25000,
          "launcherType": "Heavy 8x8 Truck Transporter Erector Launcher",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 400,
          "minEngagementRangeKm": 20,
          "maxEngagementAltitudeM": 100000,
          "minEngagementAltitudeM": 100,
          "maxInterceptorSpeedMach": 12
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active AESA Radar Seeker",
            "Infrared Seeker"
          ],
          "terminalGuidance": "Hit-to-Kill Kinetic Divert Control",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 50
        },
        "sensors": {
          "radarSystem": "Large phased-array long-range surveillance and fire-control radar",
          "opticalTracking": "High-Resolution Electro-Optical Sensor",
          "simultaneousEngagements": 36
        }
      },
      "sources": [
        {
          "title": "CASIC Strategic Air Defense Systems Record",
          "url": "https://www.casic.com.cn/",
          "publisher": "CASIC",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "mim-104-patriot-pac-2-lrad",
    "name": "Patriot PAC-2",
    "officialDesignation": "MIM-104C Patriot PAC-2 Air Defence System",
    "commonName": "Patriot PAC-2",
    "aliases": [
      "MIM-104C",
      "Patriot PAC-2"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 11,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States",
      "Saudi Arabia",
      "Greece",
      "Spain",
      "Taiwan"
    ],
    "developer": "Raytheon Technologies",
    "manufacturer": "Raytheon Technologies",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Patriot PAC-2",
      "MIM-104C Patriot PAC-2 Air Defence System",
      "MIM-104C",
      "Long-Range SAM",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "1976–Present",
    "shortDescription": "Legacy long-range air defense system firing semi-active radar homing missiles with large fragmentation warheads against high-speed aircraft.",
    "fullOverview": "Legacy long-range air defense system firing semi-active radar homing missiles with large fragmentation warheads against high-speed aircraft.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Raytheon Patriot PAC-2 System Manual",
    "specs": {
      "entryIntoService": "1990",
      "crew": "N/A",
      "manufacturer": "Raytheon Technologies",
      "primaryRole": "Long-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "90",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Track-via-Missile (TVM) guidance link",
        "terminalGuidance: Semi-Active Radar Homing",
        "radarSystem: Raytheon AN/MPQ-53 / AN/MPQ-65 C-band Radar",
        "opticalTracking: Engagement Control Station Tracking Suite"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 900,
          "launcherType": "M901 Trailer Launcher (4 canister tubes)",
          "mobility": "TOWED",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 160,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 24200,
          "minEngagementAltitudeM": 60,
          "maxInterceptorSpeedMach": 4.1
        },
        "guidance": {
          "guidanceSystems": [
            "Track-via-Missile (TVM) guidance link"
          ],
          "terminalGuidance": "Semi-Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation with Proximity Fuze",
          "warheadWeightKg": 90
        },
        "sensors": {
          "radarSystem": "Raytheon AN/MPQ-53 / AN/MPQ-65 C-band Radar",
          "opticalTracking": "Engagement Control Station Tracking Suite",
          "simultaneousEngagements": 8
        }
      },
      "developmentYear": 1976,
      "serviceEntryYear": 1990,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States",
        "Saudi Arabia",
        "Greece",
        "Spain",
        "Taiwan"
      ]
    },
    "sources": [
      {
        "title": "Raytheon Patriot PAC-2 System Manual",
        "url": "https://www.rtx.com/",
        "publisher": "RTX",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "mim-104-patriot-pac-2-lrad",
      "name": "Patriot PAC-2",
      "officialDesignation": "MIM-104C Patriot PAC-2 Air Defence System",
      "alternateNames": [
        "MIM-104C",
        "Patriot PAC-2"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Raytheon Technologies",
      "operators": [
        "United States",
        "Saudi Arabia",
        "Greece",
        "Spain",
        "Taiwan"
      ],
      "developmentYear": 1976,
      "serviceEntryYear": 1990,
      "status": "Active",
      "generation": "N/A",
      "description": "Legacy long-range air defense system firing semi-active radar homing missiles with large fragmentation warheads against high-speed aircraft.",
      "specs": {
        "physical": {
          "systemWeightKg": 900,
          "launcherType": "M901 Trailer Launcher (4 canister tubes)",
          "mobility": "TOWED",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 160,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 24200,
          "minEngagementAltitudeM": 60,
          "maxInterceptorSpeedMach": 4.1
        },
        "guidance": {
          "guidanceSystems": [
            "Track-via-Missile (TVM) guidance link"
          ],
          "terminalGuidance": "Semi-Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation with Proximity Fuze",
          "warheadWeightKg": 90
        },
        "sensors": {
          "radarSystem": "Raytheon AN/MPQ-53 / AN/MPQ-65 C-band Radar",
          "opticalTracking": "Engagement Control Station Tracking Suite",
          "simultaneousEngagements": 8
        }
      },
      "sources": [
        {
          "title": "Raytheon Patriot PAC-2 System Manual",
          "url": "https://www.rtx.com/",
          "publisher": "RTX",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "s-300v4-antey-4000",
    "name": "S-300V4 (Antey-4000)",
    "officialDesignation": "9K81M2 S-300V4 / Antey-4000 Long-Range Air Defence",
    "commonName": "S-300V4 (Antey-4000)",
    "aliases": [
      "S-300V4",
      "Antey-4000",
      "SA-23 Gladiator/Giant"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Tracked Long-Range SAM / BMD",
    "rankInCategory": 12,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
    "developer": "Almaz-Antey / Novator",
    "manufacturer": "Almaz-Antey / Novator",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "S-300V4 (Antey-4000)",
      "9K81M2 S-300V4 / Antey-4000 Long-Range Air Defence",
      "S-300V4",
      "Antey-4000",
      "SA-23 Gladiator/Giant",
      "Tracked Long-Range SAM / BMD",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "2010–Present",
    "shortDescription": "Tracked mobile long-range air defense system specifically designed for anti-ballistic missile and anti-aircraft defense of field armies.",
    "fullOverview": "Tracked mobile long-range air defense system specifically designed for anti-ballistic missile and anti-aircraft defense of field armies.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Almaz-Antey S-300V4 Technical Manual",
    "specs": {
      "entryIntoService": "2016",
      "crew": "N/A",
      "manufacturer": "Almaz-Antey / Novator",
      "primaryRole": "Tracked Long-Range SAM / BMD",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "150",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Command Guidance",
        "Active/Semi-Active Radar Homing",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: 9S32M Multi-Channel Guidance Radar + Grill Pan Radar",
        "opticalTracking: Electro-Optical Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 47000,
          "launcherType": "Tracked Transporter Erector Launcher and Radar (TELAR)",
          "mobility": "TRACKED_TEL",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 400,
          "minEngagementRangeKm": 5,
          "maxEngagementAltitudeM": 35000,
          "minEngagementAltitudeM": 25,
          "maxInterceptorSpeedMach": 7.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Command Guidance",
            "Active/Semi-Active Radar Homing"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "Directional Blast-Fragmentation",
          "warheadWeightKg": 150
        },
        "sensors": {
          "radarSystem": "9S32M Multi-Channel Guidance Radar + Grill Pan Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 24
        }
      },
      "developmentYear": 2010,
      "serviceEntryYear": 2016,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Russia"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey S-300V4 Technical Manual",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "s-300v4-antey-4000",
      "name": "S-300V4 (Antey-4000)",
      "officialDesignation": "9K81M2 S-300V4 / Antey-4000 Long-Range Air Defence",
      "alternateNames": [
        "S-300V4",
        "Antey-4000",
        "SA-23 Gladiator/Giant"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Tracked Long-Range SAM / BMD",
      "domain": "AIR_DEFENCE",
      "country": "Russia",
      "originCountries": [
        "Russia"
      ],
      "manufacturer": "Almaz-Antey / Novator",
      "operators": [
        "Russia"
      ],
      "developmentYear": 2010,
      "serviceEntryYear": 2016,
      "status": "Active",
      "generation": "N/A",
      "description": "Tracked mobile long-range air defense system specifically designed for anti-ballistic missile and anti-aircraft defense of field armies.",
      "specs": {
        "physical": {
          "systemWeightKg": 47000,
          "launcherType": "Tracked Transporter Erector Launcher and Radar (TELAR)",
          "mobility": "TRACKED_TEL",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 400,
          "minEngagementRangeKm": 5,
          "maxEngagementAltitudeM": 35000,
          "minEngagementAltitudeM": 25,
          "maxInterceptorSpeedMach": 7.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Command Guidance",
            "Active/Semi-Active Radar Homing"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "Directional Blast-Fragmentation",
          "warheadWeightKg": 150
        },
        "sensors": {
          "radarSystem": "9S32M Multi-Channel Guidance Radar + Grill Pan Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 24
        }
      },
      "sources": [
        {
          "title": "Almaz-Antey S-300V4 Technical Manual",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "barak-8lr-lrad",
    "name": "Barak-8 LR / LRSAM",
    "officialDesignation": "Barak-8 Long Range Surface-to-Air Missile System",
    "commonName": "Barak-8 LR / LRSAM",
    "aliases": [
      "Barak-8 LR",
      "LRSAM"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 13,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Israel",
      "India"
    ],
    "developer": "IAI / DRDO",
    "manufacturer": "IAI / DRDO",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Barak-8 LR / LRSAM",
      "Barak-8 Long Range Surface-to-Air Missile System",
      "Barak-8 LR",
      "LRSAM",
      "Long-Range SAM",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "2012–Present",
    "shortDescription": "Long-range air defense variant utilizing a dual-pulse booster and active radar homing seeker to protect high-value national infrastructure.",
    "fullOverview": "Long-range air defense variant utilizing a dual-pulse booster and active radar homing seeker to protect high-value national infrastructure.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "IAI Barak-8 LR Specifications",
    "specs": {
      "entryIntoService": "2017",
      "crew": "N/A",
      "manufacturer": "IAI / DRDO",
      "primaryRole": "Long-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "60",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Two-Way Datalink",
        "Active RF Seeker",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: IAI EL/M-2084 AESA Radar",
        "opticalTracking: Electro-Optical Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 275,
          "launcherType": "Vertical launch canister pods (8 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 100,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Two-Way Datalink",
            "Active RF Seeker"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 60
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2084 AESA Radar",
          "opticalTracking": "Electro-Optical Sight",
          "simultaneousEngagements": 20
        }
      },
      "developmentYear": 2012,
      "serviceEntryYear": 2017,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Israel",
        "India"
      ]
    },
    "sources": [
      {
        "title": "IAI Barak-8 LR Specifications",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "barak-8lr-lrad",
      "name": "Barak-8 LR / LRSAM",
      "officialDesignation": "Barak-8 Long Range Surface-to-Air Missile System",
      "alternateNames": [
        "Barak-8 LR",
        "LRSAM"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "Israel",
      "originCountries": [
        "Israel",
        "India"
      ],
      "manufacturer": "IAI / DRDO",
      "operators": [
        "Israel",
        "India"
      ],
      "developmentYear": 2012,
      "serviceEntryYear": 2017,
      "status": "Active",
      "generation": "N/A",
      "description": "Long-range air defense variant utilizing a dual-pulse booster and active radar homing seeker to protect high-value national infrastructure.",
      "specs": {
        "physical": {
          "systemWeightKg": 275,
          "launcherType": "Vertical launch canister pods (8 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 100,
          "minEngagementRangeKm": 0.5,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Two-Way Datalink",
            "Active RF Seeker"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 60
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2084 AESA Radar",
          "opticalTracking": "Electro-Optical Sight",
          "simultaneousEngagements": 20
        }
      },
      "sources": [
        {
          "title": "IAI Barak-8 LR Specifications",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "mta-sam-long-range-india",
    "name": "MR-SAM / LR-SAM India",
    "officialDesignation": "Medium & Long Range Surface-to-Air Missile System (MRSAM / LRSAM)",
    "commonName": "MR-SAM / LR-SAM India",
    "aliases": [
      "MRSAM Army/Air Force variant"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 14,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
    "originCountry": "India",
    "originCountries": [
      "India",
      "Israel"
    ],
    "developerCountries": [
      "India",
      "Israel"
    ],
    "manufacturerCountries": [
      "India",
      "Israel"
    ],
    "operatorCountries": [
      "Indian Army",
      "Indian Air Force",
      "Indian Navy"
    ],
    "developer": "Bharat Dynamics Limited / IAI",
    "manufacturer": "Bharat Dynamics Limited / IAI",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "MR-SAM / LR-SAM India",
      "Medium & Long Range Surface-to-Air Missile System (MRSAM / LRSAM)",
      "MRSAM Army/Air Force variant",
      "Long-Range SAM",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "2011–Present",
    "shortDescription": "Jointly developed Indian-Israeli long-range air defense missile system providing area air defense coverage for strategic military installations.",
    "fullOverview": "Jointly developed Indian-Israeli long-range air defense missile system providing area air defense coverage for strategic military installations.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "BDL MRSAM / LRSAM System Information",
    "specs": {
      "entryIntoService": "2020",
      "crew": "N/A",
      "manufacturer": "Bharat Dynamics Limited / IAI",
      "primaryRole": "Long-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "60",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Active RF Seeker",
        "Inertial Navigation",
        "Two-Way Datalink",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: MF-STAR / EL/M-2084 AESA Radar",
        "opticalTracking: Electro-Optical Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 275,
          "launcherType": "Truck-mounted vertical canister launcher (8 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 100,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 25000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Active RF Seeker",
            "Inertial Navigation",
            "Two-Way Datalink"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 60
        },
        "sensors": {
          "radarSystem": "MF-STAR / EL/M-2084 AESA Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 16
        }
      },
      "developmentYear": 2011,
      "serviceEntryYear": 2020,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Indian Army",
        "Indian Air Force",
        "Indian Navy"
      ]
    },
    "sources": [
      {
        "title": "BDL MRSAM / LRSAM System Information",
        "url": "https://bdl-india.in/",
        "publisher": "Bharat Dynamics Limited",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "mta-sam-long-range-india",
      "name": "MR-SAM / LR-SAM India",
      "officialDesignation": "Medium & Long Range Surface-to-Air Missile System (MRSAM / LRSAM)",
      "alternateNames": [
        "MRSAM Army/Air Force variant"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "India",
      "originCountries": [
        "India",
        "Israel"
      ],
      "manufacturer": "Bharat Dynamics Limited / IAI",
      "operators": [
        "Indian Army",
        "Indian Air Force",
        "Indian Navy"
      ],
      "developmentYear": 2011,
      "serviceEntryYear": 2020,
      "status": "Active",
      "generation": "N/A",
      "description": "Jointly developed Indian-Israeli long-range air defense missile system providing area air defense coverage for strategic military installations.",
      "specs": {
        "physical": {
          "systemWeightKg": 275,
          "launcherType": "Truck-mounted vertical canister launcher (8 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 100,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 25000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Active RF Seeker",
            "Inertial Navigation",
            "Two-Way Datalink"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 60
        },
        "sensors": {
          "radarSystem": "MF-STAR / EL/M-2084 AESA Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 16
        }
      },
      "sources": [
        {
          "title": "BDL MRSAM / LRSAM System Information",
          "url": "https://bdl-india.in/",
          "publisher": "Bharat Dynamics Limited",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "hq-9b-lrad-record-2",
    "name": "HQ-9B Long Range Air Defence",
    "officialDesignation": "HQ-9B Long-Range Air Defence System",
    "commonName": "HQ-9B Long Range Air Defence",
    "aliases": [
      "HQ-9B LRAD"
    ],
    "familyName": "Long Range Air Defence (LRAD) Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-lrad",
    "categoryName": "Air Defence — Long Range Air Defence (LRAD)",
    "subcategory": "Long-Range SAM",
    "rankInCategory": 15,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "People's Liberation Army Air Force (PLAAF)"
    ],
    "developer": "CASIC",
    "manufacturer": "CASIC",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "HQ-9B Long Range Air Defence",
      "HQ-9B Long-Range Air Defence System",
      "HQ-9B LRAD",
      "Long-Range SAM",
      "Long Range Air Defence (LRAD)"
    ],
    "era": "2010–Present",
    "shortDescription": "Long-range air defense configuration of the HQ-9B system providing extensive area coverage against advanced combat jets and cruise missiles.",
    "fullOverview": "Long-range air defense configuration of the HQ-9B system providing extensive area coverage against advanced combat jets and cruise missiles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "CASIC HQ-9B Long Range Specifications",
    "specs": {
      "entryIntoService": "2016",
      "crew": "N/A",
      "manufacturer": "CASIC",
      "primaryRole": "Long-Range SAM",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "180",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Midcourse Command Guidance",
        "Active Radar Homing Terminal Seeker",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: HT-233 / Type 305B AESA Multifunction Radar",
        "opticalTracking: Electro-Optical Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 1300,
          "launcherType": "8x8 Truck Transporter Erector Launcher (4 tubes)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 250,
          "minEngagementRangeKm": 6,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 25,
          "maxInterceptorSpeedMach": 6
        },
        "guidance": {
          "guidanceSystems": [
            "Midcourse Command Guidance",
            "Active Radar Homing Terminal Seeker"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "Directional Blast-Fragmentation",
          "warheadWeightKg": 180
        },
        "sensors": {
          "radarSystem": "HT-233 / Type 305B AESA Multifunction Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 50
        }
      },
      "developmentYear": 2010,
      "serviceEntryYear": 2016,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "People's Liberation Army Air Force (PLAAF)"
      ]
    },
    "sources": [
      {
        "title": "CASIC HQ-9B Long Range Specifications",
        "url": "https://www.casic.com.cn/",
        "publisher": "CASIC",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "hq-9b-lrad-record-2",
      "name": "HQ-9B Long Range Air Defence",
      "officialDesignation": "HQ-9B Long-Range Air Defence System",
      "alternateNames": [
        "HQ-9B LRAD"
      ],
      "category": "Long Range Air Defence (LRAD)",
      "subcategory": "Long-Range SAM",
      "domain": "AIR_DEFENCE",
      "country": "China",
      "originCountries": [
        "China"
      ],
      "manufacturer": "CASIC",
      "operators": [
        "People's Liberation Army Air Force (PLAAF)"
      ],
      "developmentYear": 2010,
      "serviceEntryYear": 2016,
      "status": "Active",
      "generation": "N/A",
      "description": "Long-range air defense configuration of the HQ-9B system providing extensive area coverage against advanced combat jets and cruise missiles.",
      "specs": {
        "physical": {
          "systemWeightKg": 1300,
          "launcherType": "8x8 Truck Transporter Erector Launcher (4 tubes)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 250,
          "minEngagementRangeKm": 6,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 25,
          "maxInterceptorSpeedMach": 6
        },
        "guidance": {
          "guidanceSystems": [
            "Midcourse Command Guidance",
            "Active Radar Homing Terminal Seeker"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "Directional Blast-Fragmentation",
          "warheadWeightKg": 180
        },
        "sensors": {
          "radarSystem": "HT-233 / Type 305B AESA Multifunction Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 50
        }
      },
      "sources": [
        {
          "title": "CASIC HQ-9B Long Range Specifications",
          "url": "https://www.casic.com.cn/",
          "publisher": "CASIC",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "thaad-high-altitude",
    "name": "THAAD",
    "officialDesignation": "Terminal High Altitude Area Defense System",
    "commonName": "THAAD",
    "aliases": [
      "THAAD",
      "Terminal High Altitude Area Defense"
    ],
    "familyName": "High Altitude Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "Air Defence — High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 1,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States",
      "United Arab Emirates",
      "Saudi Arabia"
    ],
    "developer": "Lockheed Martin",
    "manufacturer": "Lockheed Martin",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "THAAD",
      "Terminal High Altitude Area Defense System",
      "Terminal High Altitude Area Defense",
      "High-Altitude / Upper-Tier Defence",
      "High Altitude Defence"
    ],
    "era": "1992–Present",
    "shortDescription": "Purpose-built terminal and upper-tier hit-to-kill ballistic missile defense system operating inside and outside the atmosphere.",
    "fullOverview": "Purpose-built terminal and upper-tier hit-to-kill ballistic missile defense system operating inside and outside the atmosphere.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "U.S. Missile Defense Agency / Lockheed Martin THAAD",
    "specs": {
      "entryIntoService": "2008",
      "crew": "N/A",
      "manufacturer": "Lockheed Martin",
      "primaryRole": "High-Altitude / Upper-Tier Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Infrared Homing Seeker",
        "terminalGuidance: Indium Antimonide Focal Plane Array IIR Seeker",
        "radarSystem: Raytheon AN/TPY-2 X-band Forward-Based AESA Radar",
        "opticalTracking: Exo-atmospheric Infrared Seeker"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 40000,
          "launcherType": "Truck-mounted TEL with 8 interceptor canisters",
          "mobility": "WHEELED_TEL",
          "crewSize": 9
        },
        "performance": {
          "maxEngagementRangeKm": 200,
          "minEngagementRangeKm": 15,
          "maxEngagementAltitudeM": 150000,
          "minEngagementAltitudeM": 40000,
          "maxInterceptorSpeedMach": 8.2
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Infrared Homing Seeker"
          ],
          "terminalGuidance": "Indium Antimonide Focal Plane Array IIR Seeker",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "Raytheon AN/TPY-2 X-band Forward-Based AESA Radar",
          "opticalTracking": "Exo-atmospheric Infrared Seeker",
          "simultaneousEngagements": 8
        }
      },
      "developmentYear": 1992,
      "serviceEntryYear": 2008,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States",
        "United Arab Emirates",
        "Saudi Arabia"
      ]
    },
    "sources": [
      {
        "title": "U.S. Missile Defense Agency / Lockheed Martin THAAD",
        "url": "https://www.mda.mil/",
        "publisher": "U.S. Missile Defense Agency",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "thaad-high-altitude",
      "name": "THAAD",
      "officialDesignation": "Terminal High Altitude Area Defense System",
      "alternateNames": [
        "THAAD",
        "Terminal High Altitude Area Defense"
      ],
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Lockheed Martin",
      "operators": [
        "United States",
        "United Arab Emirates",
        "Saudi Arabia"
      ],
      "developmentYear": 1992,
      "serviceEntryYear": 2008,
      "status": "Active",
      "generation": "N/A",
      "description": "Purpose-built terminal and upper-tier hit-to-kill ballistic missile defense system operating inside and outside the atmosphere.",
      "specs": {
        "physical": {
          "systemWeightKg": 40000,
          "launcherType": "Truck-mounted TEL with 8 interceptor canisters",
          "mobility": "WHEELED_TEL",
          "crewSize": 9
        },
        "performance": {
          "maxEngagementRangeKm": 200,
          "minEngagementRangeKm": 15,
          "maxEngagementAltitudeM": 150000,
          "minEngagementAltitudeM": 40000,
          "maxInterceptorSpeedMach": 8.2
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Infrared Homing Seeker"
          ],
          "terminalGuidance": "Indium Antimonide Focal Plane Array IIR Seeker",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "Raytheon AN/TPY-2 X-band Forward-Based AESA Radar",
          "opticalTracking": "Exo-atmospheric Infrared Seeker",
          "simultaneousEngagements": 8
        }
      },
      "sources": [
        {
          "title": "U.S. Missile Defense Agency / Lockheed Martin THAAD",
          "url": "https://www.mda.mil/",
          "publisher": "U.S. Missile Defense Agency",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "arrow-3-high-altitude",
    "name": "Arrow 3",
    "officialDesignation": "Arrow 3 Upper-Tier Ballistic Missile Defence System",
    "commonName": "Arrow 3",
    "aliases": [
      "Arrow 3",
      "Hetz 3"
    ],
    "familyName": "High Altitude Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "Air Defence — High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 2,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Israel",
      "Germany"
    ],
    "developer": "IAI / Boeing",
    "manufacturer": "IAI / Boeing",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Arrow 3",
      "Arrow 3 Upper-Tier Ballistic Missile Defence System",
      "Hetz 3",
      "High-Altitude / Upper-Tier Defence",
      "High Altitude Defence"
    ],
    "era": "2008–Present",
    "shortDescription": "Exo-atmospheric hit-to-kill ballistic missile interceptor designed to destroy long-range ballistic missiles in space before re-entry.",
    "fullOverview": "Exo-atmospheric hit-to-kill ballistic missile interceptor designed to destroy long-range ballistic missiles in space before re-entry.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "IAI Arrow 3 Product Brochure",
    "specs": {
      "entryIntoService": "2017",
      "crew": "N/A",
      "manufacturer": "IAI / Boeing",
      "primaryRole": "High-Altitude / Upper-Tier Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Stellar Guidance",
        "Electro-Optical / IIR Seeker",
        "terminalGuidance: Kinetic Hit-to-Kill Kill Vehicle",
        "radarSystem: IAI ELM-2080 Super Green Pine 3D AESA Radar",
        "opticalTracking: Electro-Optical Tracking Channel"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 2000,
          "launcherType": "Vertical multi-canister TEL truck",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 2400,
          "minEngagementRangeKm": 100,
          "maxEngagementAltitudeM": 100000,
          "minEngagementAltitudeM": 50000,
          "maxInterceptorSpeedMach": 9
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Stellar Guidance",
            "Electro-Optical / IIR Seeker"
          ],
          "terminalGuidance": "Kinetic Hit-to-Kill Kill Vehicle",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "IAI ELM-2080 Super Green Pine 3D AESA Radar",
          "opticalTracking": "Electro-Optical Tracking Channel",
          "simultaneousEngagements": 14
        }
      },
      "developmentYear": 2008,
      "serviceEntryYear": 2017,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Israel",
        "Germany"
      ]
    },
    "sources": [
      {
        "title": "IAI Arrow 3 Product Brochure",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "arrow-3-high-altitude",
      "name": "Arrow 3",
      "officialDesignation": "Arrow 3 Upper-Tier Ballistic Missile Defence System",
      "alternateNames": [
        "Arrow 3",
        "Hetz 3"
      ],
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "domain": "AIR_DEFENCE",
      "country": "Israel",
      "originCountries": [
        "Israel",
        "United States"
      ],
      "manufacturer": "IAI / Boeing",
      "operators": [
        "Israel",
        "Germany"
      ],
      "developmentYear": 2008,
      "serviceEntryYear": 2017,
      "status": "Active",
      "generation": "N/A",
      "description": "Exo-atmospheric hit-to-kill ballistic missile interceptor designed to destroy long-range ballistic missiles in space before re-entry.",
      "specs": {
        "physical": {
          "systemWeightKg": 2000,
          "launcherType": "Vertical multi-canister TEL truck",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 2400,
          "minEngagementRangeKm": 100,
          "maxEngagementAltitudeM": 100000,
          "minEngagementAltitudeM": 50000,
          "maxInterceptorSpeedMach": 9
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Stellar Guidance",
            "Electro-Optical / IIR Seeker"
          ],
          "terminalGuidance": "Kinetic Hit-to-Kill Kill Vehicle",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "IAI ELM-2080 Super Green Pine 3D AESA Radar",
          "opticalTracking": "Electro-Optical Tracking Channel",
          "simultaneousEngagements": 14
        }
      },
      "sources": [
        {
          "title": "IAI Arrow 3 Product Brochure",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "s-500-prometey-high-altitude",
    "name": "S-500 Prometey",
    "officialDesignation": "S-500 Prometey Air and Space Defence System",
    "commonName": "S-500 Prometey",
    "aliases": [
      "S-500",
      "Prometey",
      "55R6M"
    ],
    "familyName": "High Altitude Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "Air Defence — High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 3,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "S-500 Prometey",
      "S-500 Prometey Air and Space Defence System",
      "S-500",
      "Prometey",
      "55R6M",
      "High-Altitude / Upper-Tier Defence",
      "High Altitude Defence"
    ],
    "era": "2009–Present",
    "shortDescription": "Strategic high-altitude air and space defense system designed to intercept intercontinental ballistic missiles, hypersonic weapons, and low-Earth-orbit satellites.",
    "fullOverview": "Strategic high-altitude air and space defense system designed to intercept intercontinental ballistic missiles, hypersonic weapons, and low-Earth-orbit satellites.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Almaz-Antey S-500 Prometey Specifications",
    "specs": {
      "entryIntoService": "2021",
      "crew": "N/A",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "High-Altitude / Upper-Tier Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "100",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Active Radar / Optical Homing",
        "terminalGuidance: Active Radar / Kinetic Hit-to-Kill",
        "radarSystem: 91N6A(M) Acquisition & 77T6 ABM Engagement Radars",
        "opticalTracking: Infrared Optical Tracker"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 45000,
          "launcherType": "BAZ-69096 10x10 Heavy Transporter Erector Launcher",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 600,
          "minEngagementRangeKm": 50,
          "maxEngagementAltitudeM": 200000,
          "minEngagementAltitudeM": 5000,
          "maxInterceptorSpeedMach": 20
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active Radar / Optical Homing"
          ],
          "terminalGuidance": "Active Radar / Kinetic Hit-to-Kill",
          "warheadType": "High-Explosive Fragmentation / Kinetic Impact",
          "warheadWeightKg": 100
        },
        "sensors": {
          "radarSystem": "91N6A(M) Acquisition & 77T6 ABM Engagement Radars",
          "opticalTracking": "Infrared Optical Tracker",
          "simultaneousEngagements": 10
        }
      },
      "developmentYear": 2009,
      "serviceEntryYear": 2021,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Russia"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey S-500 Prometey Specifications",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "s-500-prometey-high-altitude",
      "name": "S-500 Prometey",
      "officialDesignation": "S-500 Prometey Air and Space Defence System",
      "alternateNames": [
        "S-500",
        "Prometey",
        "55R6M"
      ],
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "domain": "AIR_DEFENCE",
      "country": "Russia",
      "originCountries": [
        "Russia"
      ],
      "manufacturer": "Almaz-Antey",
      "operators": [
        "Russia"
      ],
      "developmentYear": 2009,
      "serviceEntryYear": 2021,
      "status": "Active",
      "generation": "N/A",
      "description": "Strategic high-altitude air and space defense system designed to intercept intercontinental ballistic missiles, hypersonic weapons, and low-Earth-orbit satellites.",
      "specs": {
        "physical": {
          "systemWeightKg": 45000,
          "launcherType": "BAZ-69096 10x10 Heavy Transporter Erector Launcher",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 600,
          "minEngagementRangeKm": 50,
          "maxEngagementAltitudeM": 200000,
          "minEngagementAltitudeM": 5000,
          "maxInterceptorSpeedMach": 20
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active Radar / Optical Homing"
          ],
          "terminalGuidance": "Active Radar / Kinetic Hit-to-Kill",
          "warheadType": "High-Explosive Fragmentation / Kinetic Impact",
          "warheadWeightKg": 100
        },
        "sensors": {
          "radarSystem": "91N6A(M) Acquisition & 77T6 ABM Engagement Radars",
          "opticalTracking": "Infrared Optical Tracker",
          "simultaneousEngagements": 10
        }
      },
      "sources": [
        {
          "title": "Almaz-Antey S-500 Prometey Specifications",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "aegis-bmd-sm-3-high-altitude",
    "name": "Aegis BMD / SM-3 Block IIA",
    "officialDesignation": "RIM-161 Standard Missile-3 Block IIA High Altitude Layer",
    "commonName": "Aegis BMD / SM-3 Block IIA",
    "aliases": [
      "SM-3 Block IIA Ashore / Shipborne"
    ],
    "familyName": "High Altitude Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "Air Defence — High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 4,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States",
      "Japan",
      "Romania (Ashore)",
      "Poland (Ashore)"
    ],
    "developer": "RTX / Boeing / Lockheed Martin",
    "manufacturer": "RTX / Boeing / Lockheed Martin",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Aegis BMD / SM-3 Block IIA",
      "RIM-161 Standard Missile-3 Block IIA High Altitude Layer",
      "SM-3 Block IIA Ashore / Shipborne",
      "High-Altitude / Upper-Tier Defence",
      "High Altitude Defence"
    ],
    "era": "2006–Present",
    "shortDescription": "Exo-atmospheric midcourse ballistic missile interceptor utilizing a kinetic warhead to destroy medium and intermediate-range ballistic missiles in space.",
    "fullOverview": "Exo-atmospheric midcourse ballistic missile interceptor utilizing a kinetic warhead to destroy medium and intermediate-range ballistic missiles in space.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "U.S. Missile Defense Agency SM-3 Block IIA Factsheet",
    "specs": {
      "entryIntoService": "2020",
      "crew": "N/A",
      "manufacturer": "RTX / Boeing / Lockheed Martin",
      "primaryRole": "High-Altitude / Upper-Tier Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "GPS/INS midcourse",
        "LWIR (Long-Wavelength Infrared) Seeker",
        "terminalGuidance: Kinetic Warhead Infrared Homing",
        "radarSystem: AN/SPY-1D(V) or AN/SPY-6 AESA Radar",
        "opticalTracking: Exo-atmospheric Infrared Seeker"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 1500,
          "launcherType": "Mk 41 VLS or Aegis Ashore Vertical Launch System",
          "mobility": "FIXED_SITE",
          "crewSize": 10
        },
        "performance": {
          "maxEngagementRangeKm": 2500,
          "minEngagementRangeKm": 200,
          "maxEngagementAltitudeM": 1000000,
          "minEngagementAltitudeM": 80000,
          "maxInterceptorSpeedMach": 15.2
        },
        "guidance": {
          "guidanceSystems": [
            "GPS/INS midcourse",
            "LWIR (Long-Wavelength Infrared) Seeker"
          ],
          "terminalGuidance": "Kinetic Warhead Infrared Homing",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "AN/SPY-1D(V) or AN/SPY-6 AESA Radar",
          "opticalTracking": "Exo-atmospheric Infrared Seeker",
          "simultaneousEngagements": 12
        }
      },
      "developmentYear": 2006,
      "serviceEntryYear": 2020,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States",
        "Japan",
        "Romania (Ashore)",
        "Poland (Ashore)"
      ]
    },
    "sources": [
      {
        "title": "U.S. Missile Defense Agency SM-3 Block IIA Factsheet",
        "url": "https://www.mda.mil/",
        "publisher": "U.S. MDA",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "aegis-bmd-sm-3-high-altitude",
      "name": "Aegis BMD / SM-3 Block IIA",
      "officialDesignation": "RIM-161 Standard Missile-3 Block IIA High Altitude Layer",
      "alternateNames": [
        "SM-3 Block IIA Ashore / Shipborne"
      ],
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States",
        "Japan"
      ],
      "manufacturer": "RTX / Boeing / Lockheed Martin",
      "operators": [
        "United States",
        "Japan",
        "Romania (Ashore)",
        "Poland (Ashore)"
      ],
      "developmentYear": 2006,
      "serviceEntryYear": 2020,
      "status": "Active",
      "generation": "N/A",
      "description": "Exo-atmospheric midcourse ballistic missile interceptor utilizing a kinetic warhead to destroy medium and intermediate-range ballistic missiles in space.",
      "specs": {
        "physical": {
          "systemWeightKg": 1500,
          "launcherType": "Mk 41 VLS or Aegis Ashore Vertical Launch System",
          "mobility": "FIXED_SITE",
          "crewSize": 10
        },
        "performance": {
          "maxEngagementRangeKm": 2500,
          "minEngagementRangeKm": 200,
          "maxEngagementAltitudeM": 1000000,
          "minEngagementAltitudeM": 80000,
          "maxInterceptorSpeedMach": 15.2
        },
        "guidance": {
          "guidanceSystems": [
            "GPS/INS midcourse",
            "LWIR (Long-Wavelength Infrared) Seeker"
          ],
          "terminalGuidance": "Kinetic Warhead Infrared Homing",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "AN/SPY-1D(V) or AN/SPY-6 AESA Radar",
          "opticalTracking": "Exo-atmospheric Infrared Seeker",
          "simultaneousEngagements": 12
        }
      },
      "sources": [
        {
          "title": "U.S. Missile Defense Agency SM-3 Block IIA Factsheet",
          "url": "https://www.mda.mil/",
          "publisher": "U.S. MDA",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "gmd-strategic-high-altitude",
    "name": "GMD (Ground-Based Midcourse Defense)",
    "officialDesignation": "Ground-Based Midcourse Defense Interceptor System",
    "commonName": "GMD (Ground-Based Midcourse Defense)",
    "aliases": [
      "GMD",
      "GBI"
    ],
    "familyName": "High Altitude Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "Air Defence — High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 5,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States (Fort Greely, Alaska & Vandenberg SFB, California)"
    ],
    "developer": "Boeing / Northrop Grumman",
    "manufacturer": "Boeing / Northrop Grumman",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "GMD (Ground-Based Midcourse Defense)",
      "Ground-Based Midcourse Defense Interceptor System",
      "GMD",
      "GBI",
      "High-Altitude / Upper-Tier Defence",
      "High Altitude Defence"
    ],
    "era": "1998–Present",
    "shortDescription": "Strategic national missile defense system designed to intercept long-range intercontinental ballistic missiles in their midcourse flight phase.",
    "fullOverview": "Strategic national missile defense system designed to intercept long-range intercontinental ballistic missiles in their midcourse flight phase.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "U.S. Missile Defense Agency GMD Overview",
    "specs": {
      "entryIntoService": "2004",
      "crew": "N/A",
      "manufacturer": "Boeing / Northrop Grumman",
      "primaryRole": "High-Altitude / Upper-Tier Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "64",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Stellar-Inertial Guidance",
        "Exoatmospheric Kill Vehicle (EKV) Seeker",
        "terminalGuidance: Multi-band infrared and visible spectrum sensors",
        "radarSystem: Sea-Based X-Band Radar (SBX) + Upgraded Early Warning Radars",
        "opticalTracking: EKV Infrared Seeker"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 22600,
          "launcherType": "Underground silo-based three-stage booster",
          "mobility": "FIXED_SITE",
          "crewSize": 12
        },
        "performance": {
          "maxEngagementRangeKm": 5000,
          "minEngagementRangeKm": 500,
          "maxEngagementAltitudeM": 2000000,
          "minEngagementAltitudeM": 100000,
          "maxInterceptorSpeedMach": 25
        },
        "guidance": {
          "guidanceSystems": [
            "Stellar-Inertial Guidance",
            "Exoatmospheric Kill Vehicle (EKV) Seeker"
          ],
          "terminalGuidance": "Multi-band infrared and visible spectrum sensors",
          "warheadType": "Hit-to-Kill Exoatmospheric Kill Vehicle",
          "warheadWeightKg": 64
        },
        "sensors": {
          "radarSystem": "Sea-Based X-Band Radar (SBX) + Upgraded Early Warning Radars",
          "opticalTracking": "EKV Infrared Seeker",
          "simultaneousEngagements": 20
        }
      },
      "developmentYear": 1998,
      "serviceEntryYear": 2004,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States (Fort Greely, Alaska & Vandenberg SFB, California)"
      ]
    },
    "sources": [
      {
        "title": "U.S. Missile Defense Agency GMD Overview",
        "url": "https://www.mda.mil/",
        "publisher": "U.S. MDA",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "gmd-strategic-high-altitude",
      "name": "GMD (Ground-Based Midcourse Defense)",
      "officialDesignation": "Ground-Based Midcourse Defense Interceptor System",
      "alternateNames": [
        "GMD",
        "GBI"
      ],
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Boeing / Northrop Grumman",
      "operators": [
        "United States (Fort Greely, Alaska & Vandenberg SFB, California)"
      ],
      "developmentYear": 1998,
      "serviceEntryYear": 2004,
      "status": "Active",
      "generation": "N/A",
      "description": "Strategic national missile defense system designed to intercept long-range intercontinental ballistic missiles in their midcourse flight phase.",
      "specs": {
        "physical": {
          "systemWeightKg": 22600,
          "launcherType": "Underground silo-based three-stage booster",
          "mobility": "FIXED_SITE",
          "crewSize": 12
        },
        "performance": {
          "maxEngagementRangeKm": 5000,
          "minEngagementRangeKm": 500,
          "maxEngagementAltitudeM": 2000000,
          "minEngagementAltitudeM": 100000,
          "maxInterceptorSpeedMach": 25
        },
        "guidance": {
          "guidanceSystems": [
            "Stellar-Inertial Guidance",
            "Exoatmospheric Kill Vehicle (EKV) Seeker"
          ],
          "terminalGuidance": "Multi-band infrared and visible spectrum sensors",
          "warheadType": "Hit-to-Kill Exoatmospheric Kill Vehicle",
          "warheadWeightKg": 64
        },
        "sensors": {
          "radarSystem": "Sea-Based X-Band Radar (SBX) + Upgraded Early Warning Radars",
          "opticalTracking": "EKV Infrared Seeker",
          "simultaneousEngagements": 20
        }
      },
      "sources": [
        {
          "title": "U.S. Missile Defense Agency GMD Overview",
          "url": "https://www.mda.mil/",
          "publisher": "U.S. MDA",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "hq-26-naval-bmd",
    "name": "HQ-26 Naval BMD",
    "officialDesignation": "HQ-26 High-Altitude Naval Anti-Ballistic Missile",
    "commonName": "HQ-26 Naval BMD",
    "aliases": [
      "HQ-26"
    ],
    "familyName": "High Altitude Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "Air Defence — High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 6,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "People's Liberation Army Navy (PLAN)"
    ],
    "developer": "CASIC",
    "manufacturer": "CASIC",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "HQ-26 Naval BMD",
      "HQ-26 High-Altitude Naval Anti-Ballistic Missile",
      "HQ-26",
      "High-Altitude / Upper-Tier Defence",
      "High Altitude Defence"
    ],
    "era": "2013–Present",
    "shortDescription": "Ship-borne upper-tier anti-ballistic missile comparable to the US Standard Missile-3, deployed from universal VLS destroyers.",
    "fullOverview": "Ship-borne upper-tier anti-ballistic missile comparable to the US Standard Missile-3, deployed from universal VLS destroyers.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "PLAN Naval Missile Development Brief",
    "specs": {
      "entryIntoService": "2022",
      "crew": "N/A",
      "manufacturer": "CASIC",
      "primaryRole": "High-Altitude / Upper-Tier Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Active/Passive Infrared Seeker",
        "terminalGuidance: Kinetic Hit-to-Kill Seeker",
        "radarSystem: Type 346B Dragon Eye S-band AESA Radar",
        "opticalTracking: Infrared Seeker Guidance"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 1500,
          "launcherType": "Universal VLS ship cells",
          "mobility": "FIXED_SITE",
          "crewSize": 0
        },
        "performance": {
          "maxEngagementRangeKm": 500,
          "minEngagementRangeKm": 50,
          "maxEngagementAltitudeM": 400000,
          "minEngagementAltitudeM": 80000,
          "maxInterceptorSpeedMach": 10
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active/Passive Infrared Seeker"
          ],
          "terminalGuidance": "Kinetic Hit-to-Kill Seeker",
          "warheadType": "Hit-to-Kill Kinetic Warhead",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "Type 346B Dragon Eye S-band AESA Radar",
          "opticalTracking": "Infrared Seeker Guidance",
          "simultaneousEngagements": 8
        }
      },
      "developmentYear": 2013,
      "serviceEntryYear": 2022,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "People's Liberation Army Navy (PLAN)"
      ]
    },
    "sources": [
      {
        "title": "PLAN Naval Missile Development Brief",
        "url": "https://www.casic.com.cn/",
        "publisher": "CASIC",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "hq-26-naval-bmd",
      "name": "HQ-26 Naval BMD",
      "officialDesignation": "HQ-26 High-Altitude Naval Anti-Ballistic Missile",
      "alternateNames": [
        "HQ-26"
      ],
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "domain": "AIR_DEFENCE",
      "country": "China",
      "originCountries": [
        "China"
      ],
      "manufacturer": "CASIC",
      "operators": [
        "People's Liberation Army Navy (PLAN)"
      ],
      "developmentYear": 2013,
      "serviceEntryYear": 2022,
      "status": "Active",
      "generation": "N/A",
      "description": "Ship-borne upper-tier anti-ballistic missile comparable to the US Standard Missile-3, deployed from universal VLS destroyers.",
      "specs": {
        "physical": {
          "systemWeightKg": 1500,
          "launcherType": "Universal VLS ship cells",
          "mobility": "FIXED_SITE",
          "crewSize": 0
        },
        "performance": {
          "maxEngagementRangeKm": 500,
          "minEngagementRangeKm": 50,
          "maxEngagementAltitudeM": 400000,
          "minEngagementAltitudeM": 80000,
          "maxInterceptorSpeedMach": 10
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active/Passive Infrared Seeker"
          ],
          "terminalGuidance": "Kinetic Hit-to-Kill Seeker",
          "warheadType": "Hit-to-Kill Kinetic Warhead",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "Type 346B Dragon Eye S-band AESA Radar",
          "opticalTracking": "Infrared Seeker Guidance",
          "simultaneousEngagements": 8
        }
      },
      "sources": [
        {
          "title": "PLAN Naval Missile Development Brief",
          "url": "https://www.casic.com.cn/",
          "publisher": "CASIC",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "s-500-prometey-high-tier",
    "name": "S-500 Prometey (High Altitude)",
    "officialDesignation": "S-500 Prometey Strategic Air and Space Defence System",
    "commonName": "S-500 Prometey (High Altitude)",
    "aliases": [
      "S-500 Prometey"
    ],
    "familyName": "High Altitude Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "Air Defence — High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 7,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "S-500 Prometey (High Altitude)",
      "S-500 Prometey Strategic Air and Space Defence System",
      "S-500 Prometey",
      "High-Altitude / Upper-Tier Defence",
      "High Altitude Defence"
    ],
    "era": "2010–Present",
    "shortDescription": "Strategic air and space defense system capable of exoatmospheric interception of ballistic missiles and hypersonic glide vehicles.",
    "fullOverview": "Strategic air and space defense system capable of exoatmospheric interception of ballistic missiles and hypersonic glide vehicles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Almaz-Antey S-500 Prometey Specifications",
    "specs": {
      "entryIntoService": "2021",
      "crew": "N/A",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "High-Altitude / Upper-Tier Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "100",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Active Radar / Optical Homing",
        "terminalGuidance: Kinetic Hit-to-Kill / Fragmenting",
        "radarSystem: 77T6 ABM Engagement Radar + 91N6A(M) Acquisition Radar",
        "opticalTracking: Infrared Optical Tracker"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 45000,
          "launcherType": "BAZ-69096 10x10 Transporter Erector Launcher",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 600,
          "minEngagementRangeKm": 50,
          "maxEngagementAltitudeM": 200000,
          "minEngagementAltitudeM": 5000,
          "maxInterceptorSpeedMach": 20
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active Radar / Optical Homing"
          ],
          "terminalGuidance": "Kinetic Hit-to-Kill / Fragmenting",
          "warheadType": "Hit-to-Kill / HE Fragmentation",
          "warheadWeightKg": 100
        },
        "sensors": {
          "radarSystem": "77T6 ABM Engagement Radar + 91N6A(M) Acquisition Radar",
          "opticalTracking": "Infrared Optical Tracker",
          "simultaneousEngagements": 10
        }
      },
      "developmentYear": 2010,
      "serviceEntryYear": 2021,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Russia"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey S-500 Prometey Specifications",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "s-500-prometey-high-tier",
      "name": "S-500 Prometey (High Altitude)",
      "officialDesignation": "S-500 Prometey Strategic Air and Space Defence System",
      "alternateNames": [
        "S-500 Prometey"
      ],
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "domain": "AIR_DEFENCE",
      "country": "Russia",
      "originCountries": [
        "Russia"
      ],
      "manufacturer": "Almaz-Antey",
      "operators": [
        "Russia"
      ],
      "developmentYear": 2010,
      "serviceEntryYear": 2021,
      "status": "Active",
      "generation": "N/A",
      "description": "Strategic air and space defense system capable of exoatmospheric interception of ballistic missiles and hypersonic glide vehicles.",
      "specs": {
        "physical": {
          "systemWeightKg": 45000,
          "launcherType": "BAZ-69096 10x10 Transporter Erector Launcher",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 600,
          "minEngagementRangeKm": 50,
          "maxEngagementAltitudeM": 200000,
          "minEngagementAltitudeM": 5000,
          "maxInterceptorSpeedMach": 20
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active Radar / Optical Homing"
          ],
          "terminalGuidance": "Kinetic Hit-to-Kill / Fragmenting",
          "warheadType": "Hit-to-Kill / HE Fragmentation",
          "warheadWeightKg": 100
        },
        "sensors": {
          "radarSystem": "77T6 ABM Engagement Radar + 91N6A(M) Acquisition Radar",
          "opticalTracking": "Infrared Optical Tracker",
          "simultaneousEngagements": 10
        }
      },
      "sources": [
        {
          "title": "Almaz-Antey S-500 Prometey Specifications",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "arrow-2-high-altitude",
    "name": "Arrow 2",
    "officialDesignation": "Arrow 2 (Hetz 2) Theater Ballistic Missile Defence System",
    "commonName": "Arrow 2",
    "aliases": [
      "Arrow 2",
      "Hetz 2"
    ],
    "familyName": "High Altitude Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-high-altitude",
    "categoryName": "Air Defence — High Altitude Defence",
    "subcategory": "High-Altitude / Upper-Tier Defence",
    "rankInCategory": 8,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Israel"
    ],
    "developer": "IAI / Boeing",
    "manufacturer": "IAI / Boeing",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Arrow 2",
      "Arrow 2 (Hetz 2) Theater Ballistic Missile Defence System",
      "Hetz 2",
      "High-Altitude / Upper-Tier Defence",
      "High Altitude Defence"
    ],
    "era": "1986–Present",
    "shortDescription": "Two-stage solid-propellant theater ballistic missile defense system operating in the upper atmosphere to intercept incoming medium-range missiles.",
    "fullOverview": "Two-stage solid-propellant theater ballistic missile defense system operating in the upper atmosphere to intercept incoming medium-range missiles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "IAI Arrow 2 Product Information",
    "specs": {
      "entryIntoService": "2000",
      "crew": "N/A",
      "manufacturer": "IAI / Boeing",
      "primaryRole": "High-Altitude / Upper-Tier Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "150",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Dual-Mode Radio Frequency / Optical Seeker",
        "terminalGuidance: Radar/Optical Homing with proximity blast fragmentation",
        "radarSystem: IAI EL/M-2080 Green Pine AESA Radar",
        "opticalTracking: Electro-Optical Tracking Channel"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 2000,
          "launcherType": "Road-mobile vertical container TEL",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 300,
          "minEngagementRangeKm": 20,
          "maxEngagementAltitudeM": 50000,
          "minEngagementAltitudeM": 10000,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Dual-Mode Radio Frequency / Optical Seeker"
          ],
          "terminalGuidance": "Radar/Optical Homing with proximity blast fragmentation",
          "warheadType": "Directional Blast-Fragmentation",
          "warheadWeightKg": 150
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2080 Green Pine AESA Radar",
          "opticalTracking": "Electro-Optical Tracking Channel",
          "simultaneousEngagements": 14
        }
      },
      "developmentYear": 1986,
      "serviceEntryYear": 2000,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Israel"
      ]
    },
    "sources": [
      {
        "title": "IAI Arrow 2 Product Information",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "arrow-2-high-altitude",
      "name": "Arrow 2",
      "officialDesignation": "Arrow 2 (Hetz 2) Theater Ballistic Missile Defence System",
      "alternateNames": [
        "Arrow 2",
        "Hetz 2"
      ],
      "category": "High Altitude Defence",
      "subcategory": "High-Altitude / Upper-Tier Defence",
      "domain": "AIR_DEFENCE",
      "country": "Israel",
      "originCountries": [
        "Israel",
        "United States"
      ],
      "manufacturer": "IAI / Boeing",
      "operators": [
        "Israel"
      ],
      "developmentYear": 1986,
      "serviceEntryYear": 2000,
      "status": "Active",
      "generation": "N/A",
      "description": "Two-stage solid-propellant theater ballistic missile defense system operating in the upper atmosphere to intercept incoming medium-range missiles.",
      "specs": {
        "physical": {
          "systemWeightKg": 2000,
          "launcherType": "Road-mobile vertical container TEL",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 300,
          "minEngagementRangeKm": 20,
          "maxEngagementAltitudeM": 50000,
          "minEngagementAltitudeM": 10000,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Dual-Mode Radio Frequency / Optical Seeker"
          ],
          "terminalGuidance": "Radar/Optical Homing with proximity blast fragmentation",
          "warheadType": "Directional Blast-Fragmentation",
          "warheadWeightKg": 150
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2080 Green Pine AESA Radar",
          "opticalTracking": "Electro-Optical Tracking Channel",
          "simultaneousEngagements": 14
        }
      },
      "sources": [
        {
          "title": "IAI Arrow 2 Product Information",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "barak-mx-area-defence-sys",
    "name": "Barak MX Area Defence",
    "officialDesignation": "Barak MX Integrated Area Air and Missile Defence System",
    "commonName": "Barak MX Area Defence",
    "aliases": [
      "Barak MX Area Defence"
    ],
    "familyName": "Area Defence Systems Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Air Defence — Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 1,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Israel",
      "India",
      "Azerbaijan",
      "Morocco"
    ],
    "developer": "IAI",
    "manufacturer": "IAI",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Barak MX Area Defence",
      "Barak MX Integrated Area Air and Missile Defence System",
      "Networked Area Defence",
      "Area Defence Systems"
    ],
    "era": "2012–Present",
    "shortDescription": "Modular networked area air defense architecture combining multiple interceptor tiers, active AESA radars, and decentralized C2 nodes.",
    "fullOverview": "Modular networked area air defense architecture combining multiple interceptor tiers, active AESA radars, and decentralized C2 nodes.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "IAI Barak MX Area Defence Information",
    "specs": {
      "entryIntoService": "2017",
      "crew": "N/A",
      "manufacturer": "IAI",
      "primaryRole": "Networked Area Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "60",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Active Radar Homing (ARH)",
        "Two-Way Datalink",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: IAI EL/M-2084 Multi-Mission AESA Radar",
        "opticalTracking: Electro-Optical Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 12000,
          "launcherType": "Vertical launch canister pods (8-16 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 150,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Active Radar Homing (ARH)",
            "Two-Way Datalink"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 60
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2084 Multi-Mission AESA Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 30
        }
      },
      "developmentYear": 2012,
      "serviceEntryYear": 2017,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Israel",
        "India",
        "Azerbaijan",
        "Morocco"
      ]
    },
    "sources": [
      {
        "title": "IAI Barak MX Area Defence Information",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "barak-mx-area-defence-sys",
      "name": "Barak MX Area Defence",
      "officialDesignation": "Barak MX Integrated Area Air and Missile Defence System",
      "alternateNames": [
        "Barak MX Area Defence"
      ],
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "domain": "AIR_DEFENCE",
      "country": "Israel",
      "originCountries": [
        "Israel",
        "India"
      ],
      "manufacturer": "IAI",
      "operators": [
        "Israel",
        "India",
        "Azerbaijan",
        "Morocco"
      ],
      "developmentYear": 2012,
      "serviceEntryYear": 2017,
      "status": "Active",
      "generation": "N/A",
      "description": "Modular networked area air defense architecture combining multiple interceptor tiers, active AESA radars, and decentralized C2 nodes.",
      "specs": {
        "physical": {
          "systemWeightKg": 12000,
          "launcherType": "Vertical launch canister pods (8-16 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 150,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Active Radar Homing (ARH)",
            "Two-Way Datalink"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 60
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2084 Multi-Mission AESA Radar",
          "opticalTracking": "Electro-Optical Director",
          "simultaneousEngagements": 30
        }
      },
      "sources": [
        {
          "title": "IAI Barak MX Area Defence Information",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "samp-t-ng-area-defence-sys",
    "name": "SAMP/T NG Area Defence",
    "officialDesignation": "SAMP/T NG European Area Air Defence Architecture",
    "commonName": "SAMP/T NG Area Defence",
    "aliases": [
      "SAMP/T NG Area Defence"
    ],
    "familyName": "Area Defence Systems Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Air Defence — Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 2,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "France",
      "Italy"
    ],
    "developer": "Eurosam / MBDA / Thales",
    "manufacturer": "Eurosam / MBDA / Thales",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "SAMP/T NG Area Defence",
      "SAMP/T NG European Area Air Defence Architecture",
      "Networked Area Defence",
      "Area Defence Systems"
    ],
    "era": "2016–Present",
    "shortDescription": "European networked wide-area air and missile defense architecture utilizing Ground Fire 300 AESA radar and upgraded Aster 30 B1NT interceptors.",
    "fullOverview": "European networked wide-area air and missile defense architecture utilizing Ground Fire 300 AESA radar and upgraded Aster 30 B1NT interceptors.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "MBDA / Eurosam SAMP/T NG Area Defence Technical Overview",
    "specs": {
      "entryIntoService": "2024",
      "crew": "N/A",
      "manufacturer": "Eurosam / MBDA / Thales",
      "primaryRole": "Networked Area Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "20",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Ka-band Active Radar Seeker",
        "terminalGuidance: Ka-band Active Radar Homing",
        "radarSystem: Thales Ground Fire 300 AESA Radar",
        "opticalTracking: Electro-Optical Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 31000,
          "launcherType": "Truck-mounted vertical canister launcher (8 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 150,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 25000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Ka-band Active Radar Seeker"
          ],
          "terminalGuidance": "Ka-band Active Radar Homing",
          "warheadType": "PIF-PAF Lateral Thruster and Blast-Fragmentation",
          "warheadWeightKg": 20
        },
        "sensors": {
          "radarSystem": "Thales Ground Fire 300 AESA Radar",
          "opticalTracking": "Electro-Optical Sight",
          "simultaneousEngagements": 20
        }
      },
      "developmentYear": 2016,
      "serviceEntryYear": 2024,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "France",
        "Italy"
      ]
    },
    "sources": [
      {
        "title": "MBDA / Eurosam SAMP/T NG Area Defence Technical Overview",
        "url": "https://www.mbda-systems.com/",
        "publisher": "MBDA Systems",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "samp-t-ng-area-defence-sys",
      "name": "SAMP/T NG Area Defence",
      "officialDesignation": "SAMP/T NG European Area Air Defence Architecture",
      "alternateNames": [
        "SAMP/T NG Area Defence"
      ],
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "domain": "AIR_DEFENCE",
      "country": "France",
      "originCountries": [
        "France",
        "Italy"
      ],
      "manufacturer": "Eurosam / MBDA / Thales",
      "operators": [
        "France",
        "Italy"
      ],
      "developmentYear": 2016,
      "serviceEntryYear": 2024,
      "status": "Active",
      "generation": "N/A",
      "description": "European networked wide-area air and missile defense architecture utilizing Ground Fire 300 AESA radar and upgraded Aster 30 B1NT interceptors.",
      "specs": {
        "physical": {
          "systemWeightKg": 31000,
          "launcherType": "Truck-mounted vertical canister launcher (8 cells)",
          "mobility": "WHEELED_TEL",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 150,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 25000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Ka-band Active Radar Seeker"
          ],
          "terminalGuidance": "Ka-band Active Radar Homing",
          "warheadType": "PIF-PAF Lateral Thruster and Blast-Fragmentation",
          "warheadWeightKg": 20
        },
        "sensors": {
          "radarSystem": "Thales Ground Fire 300 AESA Radar",
          "opticalTracking": "Electro-Optical Sight",
          "simultaneousEngagements": 20
        }
      },
      "sources": [
        {
          "title": "MBDA / Eurosam SAMP/T NG Area Defence Technical Overview",
          "url": "https://www.mbda-systems.com/",
          "publisher": "MBDA Systems",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "nasams-distributed-defence-sys",
    "name": "NASAMS Distributed Defence",
    "officialDesignation": "NASAMS Distributed Air Defence Architecture",
    "commonName": "NASAMS Distributed Defence",
    "aliases": [
      "NASAMS Distributed Defence"
    ],
    "familyName": "Area Defence Systems Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Air Defence — Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 3,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Norway",
      "United States",
      "Ukraine",
      "Australia",
      "Finland",
      "Netherlands",
      "Spain",
      "Lithuania"
    ],
    "developer": "Kongsberg / Raytheon",
    "manufacturer": "Kongsberg / Raytheon",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "NASAMS Distributed Defence",
      "NASAMS Distributed Air Defence Architecture",
      "Networked Area Defence",
      "Area Defence Systems"
    ],
    "era": "2005–Present",
    "shortDescription": "Distributed network of radar sensors, fire distribution centers, and canister launchers creating overlapping medium-to-long range defensive envelopes.",
    "fullOverview": "Distributed network of radar sensors, fire distribution centers, and canister launchers creating overlapping medium-to-long range defensive envelopes.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Kongsberg / Raytheon NASAMS Architecture",
    "specs": {
      "entryIntoService": "2010",
      "crew": "N/A",
      "manufacturer": "Kongsberg / Raytheon",
      "primaryRole": "Networked Area Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "22",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Two-Way Datalink",
        "Active Radar Homing (ARH)",
        "terminalGuidance: Active Monopulse Radar Homing",
        "radarSystem: Raytheon AN/MPQ-64F1 Sentinel 3D AESA Radar",
        "opticalTracking: Multi-Sensor Electro-Optical Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 9500,
          "launcherType": "Multi-missile canister launcher (6 ready rounds)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 50,
          "minEngagementRangeKm": 2,
          "maxEngagementAltitudeM": 21000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4
        },
        "guidance": {
          "guidanceSystems": [
            "Two-Way Datalink",
            "Active Radar Homing (ARH)"
          ],
          "terminalGuidance": "Active Monopulse Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 22
        },
        "sensors": {
          "radarSystem": "Raytheon AN/MPQ-64F1 Sentinel 3D AESA Radar",
          "opticalTracking": "Multi-Sensor Electro-Optical Director",
          "simultaneousEngagements": 72
        }
      },
      "developmentYear": 2005,
      "serviceEntryYear": 2010,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Norway",
        "United States",
        "Ukraine",
        "Australia",
        "Finland",
        "Netherlands",
        "Spain",
        "Lithuania"
      ]
    },
    "sources": [
      {
        "title": "Kongsberg / Raytheon NASAMS Architecture",
        "url": "https://www.kongsberg.com/",
        "publisher": "Kongsberg",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "nasams-distributed-defence-sys",
      "name": "NASAMS Distributed Defence",
      "officialDesignation": "NASAMS Distributed Air Defence Architecture",
      "alternateNames": [
        "NASAMS Distributed Defence"
      ],
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "domain": "AIR_DEFENCE",
      "country": "Norway",
      "originCountries": [
        "Norway",
        "United States"
      ],
      "manufacturer": "Kongsberg / Raytheon",
      "operators": [
        "Norway",
        "United States",
        "Ukraine",
        "Australia",
        "Finland",
        "Netherlands",
        "Spain",
        "Lithuania"
      ],
      "developmentYear": 2005,
      "serviceEntryYear": 2010,
      "status": "Active",
      "generation": "N/A",
      "description": "Distributed network of radar sensors, fire distribution centers, and canister launchers creating overlapping medium-to-long range defensive envelopes.",
      "specs": {
        "physical": {
          "systemWeightKg": 9500,
          "launcherType": "Multi-missile canister launcher (6 ready rounds)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 50,
          "minEngagementRangeKm": 2,
          "maxEngagementAltitudeM": 21000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 4
        },
        "guidance": {
          "guidanceSystems": [
            "Two-Way Datalink",
            "Active Radar Homing (ARH)"
          ],
          "terminalGuidance": "Active Monopulse Radar Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 22
        },
        "sensors": {
          "radarSystem": "Raytheon AN/MPQ-64F1 Sentinel 3D AESA Radar",
          "opticalTracking": "Multi-Sensor Electro-Optical Director",
          "simultaneousEngagements": 72
        }
      },
      "sources": [
        {
          "title": "Kongsberg / Raytheon NASAMS Architecture",
          "url": "https://www.kongsberg.com/",
          "publisher": "Kongsberg",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "iris-t-slm-area-defence-sys",
    "name": "IRIS-T SLM Area Defence",
    "officialDesignation": "IRIS-T SLM Networked Area Defence System",
    "commonName": "IRIS-T SLM Area Defence",
    "aliases": [
      "IRIS-T SLM Area Defence"
    ],
    "familyName": "Area Defence Systems Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Air Defence — Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 4,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Germany",
      "Ukraine"
    ],
    "developer": "Diehl Defence",
    "manufacturer": "Diehl Defence",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "IRIS-T SLM Area Defence",
      "IRIS-T SLM Networked Area Defence System",
      "Networked Area Defence",
      "Area Defence Systems"
    ],
    "era": "2007–Present",
    "shortDescription": "Networked medium-range air defense fire unit combining TRML-4D AESA radar with vertical launch IRIS-T SLM missiles.",
    "fullOverview": "Networked medium-range air defense fire unit combining TRML-4D AESA radar with vertical launch IRIS-T SLM missiles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Diehl Defence IRIS-T SLM Area Defence Specification",
    "specs": {
      "entryIntoService": "2022",
      "crew": "N/A",
      "manufacturer": "Diehl Defence",
      "primaryRole": "Networked Area Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "11.4",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "GPS/INS midcourse",
        "Imaging Infrared (IIR) Seeker",
        "terminalGuidance: Imaging Infrared Homing",
        "radarSystem: Hensoldt TRML-4D 3D AESA Radar",
        "opticalTracking: Electro-Optical / Infrared Fire-Control Director"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 14000,
          "launcherType": "Truck-mounted vertical canister launcher (8 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 40,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 20000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 3
        },
        "guidance": {
          "guidanceSystems": [
            "GPS/INS midcourse",
            "Imaging Infrared (IIR) Seeker"
          ],
          "terminalGuidance": "Imaging Infrared Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 11.4
        },
        "sensors": {
          "radarSystem": "Hensoldt TRML-4D 3D AESA Radar",
          "opticalTracking": "Electro-Optical / Infrared Fire-Control Director",
          "simultaneousEngagements": 24
        }
      },
      "developmentYear": 2007,
      "serviceEntryYear": 2022,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Germany",
        "Ukraine"
      ]
    },
    "sources": [
      {
        "title": "Diehl Defence IRIS-T SLM Area Defence Specification",
        "url": "https://www.diehl.com/defence/en/",
        "publisher": "Diehl Defence",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "iris-t-slm-area-defence-sys",
      "name": "IRIS-T SLM Area Defence",
      "officialDesignation": "IRIS-T SLM Networked Area Defence System",
      "alternateNames": [
        "IRIS-T SLM Area Defence"
      ],
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "domain": "AIR_DEFENCE",
      "country": "Germany",
      "originCountries": [
        "Germany"
      ],
      "manufacturer": "Diehl Defence",
      "operators": [
        "Germany",
        "Ukraine"
      ],
      "developmentYear": 2007,
      "serviceEntryYear": 2022,
      "status": "Active",
      "generation": "N/A",
      "description": "Networked medium-range air defense fire unit combining TRML-4D AESA radar with vertical launch IRIS-T SLM missiles.",
      "specs": {
        "physical": {
          "systemWeightKg": 14000,
          "launcherType": "Truck-mounted vertical canister launcher (8 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 40,
          "minEngagementRangeKm": 1,
          "maxEngagementAltitudeM": 20000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 3
        },
        "guidance": {
          "guidanceSystems": [
            "GPS/INS midcourse",
            "Imaging Infrared (IIR) Seeker"
          ],
          "terminalGuidance": "Imaging Infrared Homing",
          "warheadType": "High-Explosive Blast-Fragmentation",
          "warheadWeightKg": 11.4
        },
        "sensors": {
          "radarSystem": "Hensoldt TRML-4D 3D AESA Radar",
          "opticalTracking": "Electro-Optical / Infrared Fire-Control Director",
          "simultaneousEngagements": 24
        }
      },
      "sources": [
        {
          "title": "Diehl Defence IRIS-T SLM Area Defence Specification",
          "url": "https://www.diehl.com/defence/en/",
          "publisher": "Diehl Defence",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "patriot-iamd-area-defence",
    "name": "Patriot IAMD",
    "officialDesignation": "Patriot Integrated Air and Missile Defence Architecture",
    "commonName": "Patriot IAMD",
    "aliases": [
      "Patriot IAMD"
    ],
    "familyName": "Area Defence Systems Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Air Defence — Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 5,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States",
      "Germany",
      "Japan",
      "Poland",
      "Romania",
      "South Korea",
      "Ukraine"
    ],
    "developer": "Lockheed Martin / RTX",
    "manufacturer": "Lockheed Martin / RTX",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Patriot IAMD",
      "Patriot Integrated Air and Missile Defence Architecture",
      "Networked Area Defence",
      "Area Defence Systems"
    ],
    "era": "2000–Present",
    "shortDescription": "Comprehensive integrated air and missile defense architecture uniting AN/MPQ-65 / LTAMDS radars, engagement control stations, and PAC-2/PAC-3 launchers.",
    "fullOverview": "Comprehensive integrated air and missile defense architecture uniting AN/MPQ-65 / LTAMDS radars, engagement control stations, and PAC-2/PAC-3 launchers.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Lockheed Martin / RTX Patriot IAMD Overview",
    "specs": {
      "entryIntoService": "2015",
      "crew": "N/A",
      "manufacturer": "Lockheed Martin / RTX",
      "primaryRole": "Networked Area Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "73",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Track-via-Missile",
        "Ka-band Active Radar Homing",
        "terminalGuidance: Active Radar / TVM Homing",
        "radarSystem: Raytheon LTAMDS GhostEye 3D AESA Radar",
        "opticalTracking: Engagement Control Station EO/IR Integration"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 35000,
          "launcherType": "M903 Canister Launcher Station (12-16 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 160,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 36000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 5
        },
        "guidance": {
          "guidanceSystems": [
            "Track-via-Missile",
            "Ka-band Active Radar Homing"
          ],
          "terminalGuidance": "Active Radar / TVM Homing",
          "warheadType": "Hit-to-Kill / HE Blast-Fragmentation",
          "warheadWeightKg": 73
        },
        "sensors": {
          "radarSystem": "Raytheon LTAMDS GhostEye 3D AESA Radar",
          "opticalTracking": "Engagement Control Station EO/IR Integration",
          "simultaneousEngagements": 16
        }
      },
      "developmentYear": 2000,
      "serviceEntryYear": 2015,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States",
        "Germany",
        "Japan",
        "Poland",
        "Romania",
        "South Korea",
        "Ukraine"
      ]
    },
    "sources": [
      {
        "title": "Lockheed Martin / RTX Patriot IAMD Overview",
        "url": "https://www.lockheedmartin.com/",
        "publisher": "Lockheed Martin",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "patriot-iamd-area-defence",
      "name": "Patriot IAMD",
      "officialDesignation": "Patriot Integrated Air and Missile Defence Architecture",
      "alternateNames": [
        "Patriot IAMD"
      ],
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Lockheed Martin / RTX",
      "operators": [
        "United States",
        "Germany",
        "Japan",
        "Poland",
        "Romania",
        "South Korea",
        "Ukraine"
      ],
      "developmentYear": 2000,
      "serviceEntryYear": 2015,
      "status": "Active",
      "generation": "N/A",
      "description": "Comprehensive integrated air and missile defense architecture uniting AN/MPQ-65 / LTAMDS radars, engagement control stations, and PAC-2/PAC-3 launchers.",
      "specs": {
        "physical": {
          "systemWeightKg": 35000,
          "launcherType": "M903 Canister Launcher Station (12-16 missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 4
        },
        "performance": {
          "maxEngagementRangeKm": 160,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 36000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 5
        },
        "guidance": {
          "guidanceSystems": [
            "Track-via-Missile",
            "Ka-band Active Radar Homing"
          ],
          "terminalGuidance": "Active Radar / TVM Homing",
          "warheadType": "Hit-to-Kill / HE Blast-Fragmentation",
          "warheadWeightKg": 73
        },
        "sensors": {
          "radarSystem": "Raytheon LTAMDS GhostEye 3D AESA Radar",
          "opticalTracking": "Engagement Control Station EO/IR Integration",
          "simultaneousEngagements": 16
        }
      },
      "sources": [
        {
          "title": "Lockheed Martin / RTX Patriot IAMD Overview",
          "url": "https://www.lockheedmartin.com/",
          "publisher": "Lockheed Martin",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "aegis-ashore-area-defence-sys",
    "name": "Aegis Ashore Area Defence",
    "officialDesignation": "Aegis Ashore Integrated Area Air and Missile Defence",
    "commonName": "Aegis Ashore Area Defence",
    "aliases": [
      "Aegis Ashore"
    ],
    "familyName": "Area Defence Systems Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Air Defence — Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 6,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States",
      "Romania",
      "Poland"
    ],
    "developer": "Lockheed Martin",
    "manufacturer": "Lockheed Martin",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Aegis Ashore Area Defence",
      "Aegis Ashore Integrated Area Air and Missile Defence",
      "Aegis Ashore",
      "Networked Area Defence",
      "Area Defence Systems"
    ],
    "era": "2009–Present",
    "shortDescription": "Land-based variant of the Aegis combat system providing persistent regional air and missile defense via SPY-1 radars and Mk 41 VLS cells.",
    "fullOverview": "Land-based variant of the Aegis combat system providing persistent regional air and missile defense via SPY-1 radars and Mk 41 VLS cells.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "U.S. Missile Defense Agency Aegis Ashore Factsheet",
    "specs": {
      "entryIntoService": "2016",
      "crew": "N/A",
      "manufacturer": "Lockheed Martin",
      "primaryRole": "Networked Area Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "50",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Aegis Weapon System",
        "Active Radar / Semi-Active Homing",
        "terminalGuidance: Active Radar / Kinetic Hit-to-Kill",
        "radarSystem: AN/SPY-1D(V) S-band Phased Array Radar",
        "opticalTracking: Integrated C2 Optical Display"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 100000,
          "launcherType": "Fixed Deckhouse Superstructure with Mk 41 VLS Cells (24-48 cells)",
          "mobility": "FIXED_SITE",
          "crewSize": 30
        },
        "performance": {
          "maxEngagementRangeKm": 500,
          "minEngagementRangeKm": 10,
          "maxEngagementAltitudeM": 500000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 15
        },
        "guidance": {
          "guidanceSystems": [
            "Aegis Weapon System",
            "Active Radar / Semi-Active Homing"
          ],
          "terminalGuidance": "Active Radar / Kinetic Hit-to-Kill",
          "warheadType": "Hit-to-Kill / HE Fragmentation",
          "warheadWeightKg": 50
        },
        "sensors": {
          "radarSystem": "AN/SPY-1D(V) S-band Phased Array Radar",
          "opticalTracking": "Integrated C2 Optical Display",
          "simultaneousEngagements": 40
        }
      },
      "developmentYear": 2009,
      "serviceEntryYear": 2016,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States",
        "Romania",
        "Poland"
      ]
    },
    "sources": [
      {
        "title": "U.S. Missile Defense Agency Aegis Ashore Factsheet",
        "url": "https://www.mda.mil/",
        "publisher": "U.S. MDA",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "aegis-ashore-area-defence-sys",
      "name": "Aegis Ashore Area Defence",
      "officialDesignation": "Aegis Ashore Integrated Area Air and Missile Defence",
      "alternateNames": [
        "Aegis Ashore"
      ],
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Lockheed Martin",
      "operators": [
        "United States",
        "Romania",
        "Poland"
      ],
      "developmentYear": 2009,
      "serviceEntryYear": 2016,
      "status": "Active",
      "generation": "N/A",
      "description": "Land-based variant of the Aegis combat system providing persistent regional air and missile defense via SPY-1 radars and Mk 41 VLS cells.",
      "specs": {
        "physical": {
          "systemWeightKg": 100000,
          "launcherType": "Fixed Deckhouse Superstructure with Mk 41 VLS Cells (24-48 cells)",
          "mobility": "FIXED_SITE",
          "crewSize": 30
        },
        "performance": {
          "maxEngagementRangeKm": 500,
          "minEngagementRangeKm": 10,
          "maxEngagementAltitudeM": 500000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 15
        },
        "guidance": {
          "guidanceSystems": [
            "Aegis Weapon System",
            "Active Radar / Semi-Active Homing"
          ],
          "terminalGuidance": "Active Radar / Kinetic Hit-to-Kill",
          "warheadType": "Hit-to-Kill / HE Fragmentation",
          "warheadWeightKg": 50
        },
        "sensors": {
          "radarSystem": "AN/SPY-1D(V) S-band Phased Array Radar",
          "opticalTracking": "Integrated C2 Optical Display",
          "simultaneousEngagements": 40
        }
      },
      "sources": [
        {
          "title": "U.S. Missile Defense Agency Aegis Ashore Factsheet",
          "url": "https://www.mda.mil/",
          "publisher": "U.S. MDA",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "s-400-area-defence-sys",
    "name": "S-400 Area Defence",
    "officialDesignation": "S-400 Integrated Strategic Area Air Defence",
    "commonName": "S-400 Area Defence",
    "aliases": [
      "S-400 Area Defence"
    ],
    "familyName": "Area Defence Systems Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-area-defence",
    "categoryName": "Air Defence — Area Defence Systems",
    "subcategory": "Networked Area Defence",
    "rankInCategory": 7,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Russia",
      "China",
      "Türkiye",
      "India",
      "Belarus"
    ],
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "S-400 Area Defence",
      "S-400 Integrated Strategic Area Air Defence",
      "Networked Area Defence",
      "Area Defence Systems"
    ],
    "era": "1999–Present",
    "shortDescription": "Multi-tiered strategic air defense network linking 91N6 surveillance radars, 92N6 engagement radars, and multiple TEL batteries.",
    "fullOverview": "Multi-tiered strategic air defense network linking 91N6 surveillance radars, 92N6 engagement radars, and multiple TEL batteries.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Almaz-Antey S-400 Area Defence System Information",
    "specs": {
      "entryIntoService": "2007",
      "crew": "N/A",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "Networked Area Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "150",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Command Guidance",
        "Active Radar Homing",
        "terminalGuidance: Active Radar Homing",
        "radarSystem: 91N6E Big Bird & 92N6E Grave Stone Radar Suite",
        "opticalTracking: Electro-Optical Tracking Channel"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 40000,
          "launcherType": "5P85TE2 Transporter Erector Launcher (4 tubes)",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 400,
          "minEngagementRangeKm": 20,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 14
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Command Guidance",
            "Active Radar Homing"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 150
        },
        "sensors": {
          "radarSystem": "91N6E Big Bird & 92N6E Grave Stone Radar Suite",
          "opticalTracking": "Electro-Optical Tracking Channel",
          "simultaneousEngagements": 80
        }
      },
      "developmentYear": 1999,
      "serviceEntryYear": 2007,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Russia",
        "China",
        "Türkiye",
        "India",
        "Belarus"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey S-400 Area Defence System Information",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "s-400-area-defence-sys",
      "name": "S-400 Area Defence",
      "officialDesignation": "S-400 Integrated Strategic Area Air Defence",
      "alternateNames": [
        "S-400 Area Defence"
      ],
      "category": "Area Defence Systems",
      "subcategory": "Networked Area Defence",
      "domain": "AIR_DEFENCE",
      "country": "Russia",
      "originCountries": [
        "Russia"
      ],
      "manufacturer": "Almaz-Antey",
      "operators": [
        "Russia",
        "China",
        "Türkiye",
        "India",
        "Belarus"
      ],
      "developmentYear": 1999,
      "serviceEntryYear": 2007,
      "status": "Active",
      "generation": "N/A",
      "description": "Multi-tiered strategic air defense network linking 91N6 surveillance radars, 92N6 engagement radars, and multiple TEL batteries.",
      "specs": {
        "physical": {
          "systemWeightKg": 40000,
          "launcherType": "5P85TE2 Transporter Erector Launcher (4 tubes)",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 400,
          "minEngagementRangeKm": 20,
          "maxEngagementAltitudeM": 30000,
          "minEngagementAltitudeM": 10,
          "maxInterceptorSpeedMach": 14
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Command Guidance",
            "Active Radar Homing"
          ],
          "terminalGuidance": "Active Radar Homing",
          "warheadType": "High-Explosive Fragmentation",
          "warheadWeightKg": 150
        },
        "sensors": {
          "radarSystem": "91N6E Big Bird & 92N6E Grave Stone Radar Suite",
          "opticalTracking": "Electro-Optical Tracking Channel",
          "simultaneousEngagements": 80
        }
      },
      "sources": [
        {
          "title": "Almaz-Antey S-400 Area Defence System Information",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "arrow-3-abmd-system",
    "name": "Arrow 3",
    "officialDesignation": "Arrow 3 Exo-Atmospheric Ballistic Missile Defence System",
    "commonName": "Arrow 3",
    "aliases": [
      "Arrow 3",
      "Hetz 3"
    ],
    "familyName": "Anti-Ballistic Missile Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Air Defence — Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 1,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Israel",
      "Germany"
    ],
    "developer": "IAI / Boeing",
    "manufacturer": "IAI / Boeing",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Arrow 3",
      "Arrow 3 Exo-Atmospheric Ballistic Missile Defence System",
      "Hetz 3",
      "Ballistic Missile Defence",
      "Anti-Ballistic Missile Defence"
    ],
    "era": "2008–Present",
    "shortDescription": "Exo-atmospheric ballistic missile defense interceptor utilizing direct kinetic impact (hit-to-kill) to destroy ballistic missiles in space.",
    "fullOverview": "Exo-atmospheric ballistic missile defense interceptor utilizing direct kinetic impact (hit-to-kill) to destroy ballistic missiles in space.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "IAI Arrow 3 BMD Product Information",
    "specs": {
      "entryIntoService": "2017",
      "crew": "N/A",
      "manufacturer": "IAI / Boeing",
      "primaryRole": "Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Stellar Guidance",
        "Electro-Optical / IIR Seeker",
        "terminalGuidance: Kinetic Hit-to-Kill Kill Vehicle",
        "radarSystem: IAI EL/M-2080 Super Green Pine AESA Radar",
        "opticalTracking: Exo-Atmospheric Infrared Seeker"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 2000,
          "launcherType": "Road-mobile vertical canister container TEL",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 2400,
          "minEngagementRangeKm": 100,
          "maxEngagementAltitudeM": 100000,
          "minEngagementAltitudeM": 50000,
          "maxInterceptorSpeedMach": 9
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Stellar Guidance",
            "Electro-Optical / IIR Seeker"
          ],
          "terminalGuidance": "Kinetic Hit-to-Kill Kill Vehicle",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2080 Super Green Pine AESA Radar",
          "opticalTracking": "Exo-Atmospheric Infrared Seeker",
          "simultaneousEngagements": 14
        }
      },
      "developmentYear": 2008,
      "serviceEntryYear": 2017,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Israel",
        "Germany"
      ]
    },
    "sources": [
      {
        "title": "IAI Arrow 3 BMD Product Information",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "arrow-3-abmd-system",
      "name": "Arrow 3",
      "officialDesignation": "Arrow 3 Exo-Atmospheric Ballistic Missile Defence System",
      "alternateNames": [
        "Arrow 3",
        "Hetz 3"
      ],
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "domain": "AIR_DEFENCE",
      "country": "Israel",
      "originCountries": [
        "Israel",
        "United States"
      ],
      "manufacturer": "IAI / Boeing",
      "operators": [
        "Israel",
        "Germany"
      ],
      "developmentYear": 2008,
      "serviceEntryYear": 2017,
      "status": "Active",
      "generation": "N/A",
      "description": "Exo-atmospheric ballistic missile defense interceptor utilizing direct kinetic impact (hit-to-kill) to destroy ballistic missiles in space.",
      "specs": {
        "physical": {
          "systemWeightKg": 2000,
          "launcherType": "Road-mobile vertical canister container TEL",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 2400,
          "minEngagementRangeKm": 100,
          "maxEngagementAltitudeM": 100000,
          "minEngagementAltitudeM": 50000,
          "maxInterceptorSpeedMach": 9
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Stellar Guidance",
            "Electro-Optical / IIR Seeker"
          ],
          "terminalGuidance": "Kinetic Hit-to-Kill Kill Vehicle",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2080 Super Green Pine AESA Radar",
          "opticalTracking": "Exo-Atmospheric Infrared Seeker",
          "simultaneousEngagements": 14
        }
      },
      "sources": [
        {
          "title": "IAI Arrow 3 BMD Product Information",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "thaad-abmd-system",
    "name": "THAAD",
    "officialDesignation": "Terminal High Altitude Area Defense System",
    "commonName": "THAAD",
    "aliases": [
      "THAAD",
      "Terminal High Altitude Area Defense"
    ],
    "familyName": "Anti-Ballistic Missile Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Air Defence — Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 2,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States",
      "UAE",
      "Saudi Arabia"
    ],
    "developer": "Lockheed Martin",
    "manufacturer": "Lockheed Martin",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "THAAD",
      "Terminal High Altitude Area Defense System",
      "Terminal High Altitude Area Defense",
      "Ballistic Missile Defence",
      "Anti-Ballistic Missile Defence"
    ],
    "era": "1992–Present",
    "shortDescription": "Terminal high-altitude anti-ballistic missile defense battery designed to intercept short-, medium-, and intermediate-range ballistic missiles.",
    "fullOverview": "Terminal high-altitude anti-ballistic missile defense battery designed to intercept short-, medium-, and intermediate-range ballistic missiles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "U.S. Missile Defense Agency THAAD System Information",
    "specs": {
      "entryIntoService": "2008",
      "crew": "N/A",
      "manufacturer": "Lockheed Martin",
      "primaryRole": "Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Infrared Seeker",
        "terminalGuidance: Indium Antimonide Focal Plane Array IIR Seeker",
        "radarSystem: Raytheon AN/TPY-2 X-band Forward-Based AESA Radar",
        "opticalTracking: Infrared Seeker Guidance"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 40000,
          "launcherType": "Truck-mounted TEL with 8 interceptor canisters",
          "mobility": "WHEELED_TEL",
          "crewSize": 9
        },
        "performance": {
          "maxEngagementRangeKm": 200,
          "minEngagementRangeKm": 15,
          "maxEngagementAltitudeM": 150000,
          "minEngagementAltitudeM": 40000,
          "maxInterceptorSpeedMach": 8.2
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Infrared Seeker"
          ],
          "terminalGuidance": "Indium Antimonide Focal Plane Array IIR Seeker",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "Raytheon AN/TPY-2 X-band Forward-Based AESA Radar",
          "opticalTracking": "Infrared Seeker Guidance",
          "simultaneousEngagements": 8
        }
      },
      "developmentYear": 1992,
      "serviceEntryYear": 2008,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States",
        "UAE",
        "Saudi Arabia"
      ]
    },
    "sources": [
      {
        "title": "U.S. Missile Defense Agency THAAD System Information",
        "url": "https://www.mda.mil/",
        "publisher": "U.S. MDA",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "thaad-abmd-system",
      "name": "THAAD",
      "officialDesignation": "Terminal High Altitude Area Defense System",
      "alternateNames": [
        "THAAD",
        "Terminal High Altitude Area Defense"
      ],
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Lockheed Martin",
      "operators": [
        "United States",
        "UAE",
        "Saudi Arabia"
      ],
      "developmentYear": 1992,
      "serviceEntryYear": 2008,
      "status": "Active",
      "generation": "N/A",
      "description": "Terminal high-altitude anti-ballistic missile defense battery designed to intercept short-, medium-, and intermediate-range ballistic missiles.",
      "specs": {
        "physical": {
          "systemWeightKg": 40000,
          "launcherType": "Truck-mounted TEL with 8 interceptor canisters",
          "mobility": "WHEELED_TEL",
          "crewSize": 9
        },
        "performance": {
          "maxEngagementRangeKm": 200,
          "minEngagementRangeKm": 15,
          "maxEngagementAltitudeM": 150000,
          "minEngagementAltitudeM": 40000,
          "maxInterceptorSpeedMach": 8.2
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Infrared Seeker"
          ],
          "terminalGuidance": "Indium Antimonide Focal Plane Array IIR Seeker",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "Raytheon AN/TPY-2 X-band Forward-Based AESA Radar",
          "opticalTracking": "Infrared Seeker Guidance",
          "simultaneousEngagements": 8
        }
      },
      "sources": [
        {
          "title": "U.S. Missile Defense Agency THAAD System Information",
          "url": "https://www.mda.mil/",
          "publisher": "U.S. MDA",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "aegis-bmd-sm-3-ii-system",
    "name": "Aegis BMD / SM-3 Block IIA",
    "officialDesignation": "RIM-161 Standard Missile-3 Block IIA",
    "commonName": "Aegis BMD / SM-3 Block IIA",
    "aliases": [
      "SM-3 Block IIA",
      "Aegis BMD"
    ],
    "familyName": "Anti-Ballistic Missile Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Air Defence — Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 3,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States",
      "Japan",
      "Romania",
      "Poland"
    ],
    "developer": "RTX / Boeing / Lockheed Martin",
    "manufacturer": "RTX / Boeing / Lockheed Martin",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Aegis BMD / SM-3 Block IIA",
      "RIM-161 Standard Missile-3 Block IIA",
      "SM-3 Block IIA",
      "Aegis BMD",
      "Ballistic Missile Defence",
      "Anti-Ballistic Missile Defence"
    ],
    "era": "2006–Present",
    "shortDescription": "Exo-atmospheric interceptor missile integrated with Aegis combat systems on warships and land sites, providing midcourse ballistic missile defense.",
    "fullOverview": "Exo-atmospheric interceptor missile integrated with Aegis combat systems on warships and land sites, providing midcourse ballistic missile defense.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "U.S. Missile Defense Agency SM-3 Block IIA Product File",
    "specs": {
      "entryIntoService": "2020",
      "crew": "N/A",
      "manufacturer": "RTX / Boeing / Lockheed Martin",
      "primaryRole": "Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "GPS/INS midcourse",
        "LWIR Seeker",
        "terminalGuidance: Kinetic Warhead Infrared Homing",
        "radarSystem: AN/SPY-1D(V) or AN/SPY-6 AESA Radar",
        "opticalTracking: Exo-Atmospheric Infrared Seeker"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 1500,
          "launcherType": "Mk 41 VLS or Aegis Ashore System",
          "mobility": "FIXED_SITE",
          "crewSize": 10
        },
        "performance": {
          "maxEngagementRangeKm": 2500,
          "minEngagementRangeKm": 200,
          "maxEngagementAltitudeM": 1000000,
          "minEngagementAltitudeM": 80000,
          "maxInterceptorSpeedMach": 15.2
        },
        "guidance": {
          "guidanceSystems": [
            "GPS/INS midcourse",
            "LWIR Seeker"
          ],
          "terminalGuidance": "Kinetic Warhead Infrared Homing",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "AN/SPY-1D(V) or AN/SPY-6 AESA Radar",
          "opticalTracking": "Exo-Atmospheric Infrared Seeker",
          "simultaneousEngagements": 12
        }
      },
      "developmentYear": 2006,
      "serviceEntryYear": 2020,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States",
        "Japan",
        "Romania",
        "Poland"
      ]
    },
    "sources": [
      {
        "title": "U.S. Missile Defense Agency SM-3 Block IIA Product File",
        "url": "https://www.mda.mil/",
        "publisher": "U.S. MDA",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "aegis-bmd-sm-3-ii-system",
      "name": "Aegis BMD / SM-3 Block IIA",
      "officialDesignation": "RIM-161 Standard Missile-3 Block IIA",
      "alternateNames": [
        "SM-3 Block IIA",
        "Aegis BMD"
      ],
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States",
        "Japan"
      ],
      "manufacturer": "RTX / Boeing / Lockheed Martin",
      "operators": [
        "United States",
        "Japan",
        "Romania",
        "Poland"
      ],
      "developmentYear": 2006,
      "serviceEntryYear": 2020,
      "status": "Active",
      "generation": "N/A",
      "description": "Exo-atmospheric interceptor missile integrated with Aegis combat systems on warships and land sites, providing midcourse ballistic missile defense.",
      "specs": {
        "physical": {
          "systemWeightKg": 1500,
          "launcherType": "Mk 41 VLS or Aegis Ashore System",
          "mobility": "FIXED_SITE",
          "crewSize": 10
        },
        "performance": {
          "maxEngagementRangeKm": 2500,
          "minEngagementRangeKm": 200,
          "maxEngagementAltitudeM": 1000000,
          "minEngagementAltitudeM": 80000,
          "maxInterceptorSpeedMach": 15.2
        },
        "guidance": {
          "guidanceSystems": [
            "GPS/INS midcourse",
            "LWIR Seeker"
          ],
          "terminalGuidance": "Kinetic Warhead Infrared Homing",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "AN/SPY-1D(V) or AN/SPY-6 AESA Radar",
          "opticalTracking": "Exo-Atmospheric Infrared Seeker",
          "simultaneousEngagements": 12
        }
      },
      "sources": [
        {
          "title": "U.S. Missile Defense Agency SM-3 Block IIA Product File",
          "url": "https://www.mda.mil/",
          "publisher": "U.S. MDA",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "gmd-bmd-system",
    "name": "GMD BMD",
    "officialDesignation": "Ground-Based Midcourse Defense System",
    "commonName": "GMD BMD",
    "aliases": [
      "GMD BMD",
      "GBI"
    ],
    "familyName": "Anti-Ballistic Missile Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Air Defence — Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 4,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
    "developer": "Boeing / Northrop Grumman / Lockheed Martin",
    "manufacturer": "Boeing / Northrop Grumman / Lockheed Martin",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "GMD BMD",
      "Ground-Based Midcourse Defense System",
      "GBI",
      "Ballistic Missile Defence",
      "Anti-Ballistic Missile Defence"
    ],
    "era": "1998–Present",
    "shortDescription": "Strategic national missile defense architecture using silos in Alaska and California to intercept incoming intercontinental ballistic missiles.",
    "fullOverview": "Strategic national missile defense architecture using silos in Alaska and California to intercept incoming intercontinental ballistic missiles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "U.S. Missile Defense Agency GMD System Information",
    "specs": {
      "entryIntoService": "2004",
      "crew": "N/A",
      "manufacturer": "Boeing / Northrop Grumman / Lockheed Martin",
      "primaryRole": "Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "64",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Stellar-Inertial Guidance",
        "Exoatmospheric Kill Vehicle (EKV) Seeker",
        "terminalGuidance: Multi-band infrared and visible spectrum sensors",
        "radarSystem: Sea-Based X-Band Radar (SBX) + Upgraded Early Warning Radars",
        "opticalTracking: EKV Infrared Seeker"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 22600,
          "launcherType": "Underground Hardened Launch Silo",
          "mobility": "FIXED_SITE",
          "crewSize": 12
        },
        "performance": {
          "maxEngagementRangeKm": 5000,
          "minEngagementRangeKm": 500,
          "maxEngagementAltitudeM": 2000000,
          "minEngagementAltitudeM": 100000,
          "maxInterceptorSpeedMach": 25
        },
        "guidance": {
          "guidanceSystems": [
            "Stellar-Inertial Guidance",
            "Exoatmospheric Kill Vehicle (EKV) Seeker"
          ],
          "terminalGuidance": "Multi-band infrared and visible spectrum sensors",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 64
        },
        "sensors": {
          "radarSystem": "Sea-Based X-Band Radar (SBX) + Upgraded Early Warning Radars",
          "opticalTracking": "EKV Infrared Seeker",
          "simultaneousEngagements": 20
        }
      },
      "developmentYear": 1998,
      "serviceEntryYear": 2004,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States"
      ]
    },
    "sources": [
      {
        "title": "U.S. Missile Defense Agency GMD System Information",
        "url": "https://www.mda.mil/",
        "publisher": "U.S. MDA",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "gmd-bmd-system",
      "name": "GMD BMD",
      "officialDesignation": "Ground-Based Midcourse Defense System",
      "alternateNames": [
        "GMD BMD",
        "GBI"
      ],
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Boeing / Northrop Grumman / Lockheed Martin",
      "operators": [
        "United States"
      ],
      "developmentYear": 1998,
      "serviceEntryYear": 2004,
      "status": "Active",
      "generation": "N/A",
      "description": "Strategic national missile defense architecture using silos in Alaska and California to intercept incoming intercontinental ballistic missiles.",
      "specs": {
        "physical": {
          "systemWeightKg": 22600,
          "launcherType": "Underground Hardened Launch Silo",
          "mobility": "FIXED_SITE",
          "crewSize": 12
        },
        "performance": {
          "maxEngagementRangeKm": 5000,
          "minEngagementRangeKm": 500,
          "maxEngagementAltitudeM": 2000000,
          "minEngagementAltitudeM": 100000,
          "maxInterceptorSpeedMach": 25
        },
        "guidance": {
          "guidanceSystems": [
            "Stellar-Inertial Guidance",
            "Exoatmospheric Kill Vehicle (EKV) Seeker"
          ],
          "terminalGuidance": "Multi-band infrared and visible spectrum sensors",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 64
        },
        "sensors": {
          "radarSystem": "Sea-Based X-Band Radar (SBX) + Upgraded Early Warning Radars",
          "opticalTracking": "EKV Infrared Seeker",
          "simultaneousEngagements": 20
        }
      },
      "sources": [
        {
          "title": "U.S. Missile Defense Agency GMD System Information",
          "url": "https://www.mda.mil/",
          "publisher": "U.S. MDA",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "pac-3-mse-bmd-system",
    "name": "PAC-3 MSE BMD",
    "officialDesignation": "Patriot PAC-3 MSE Terminal BMD Layer",
    "commonName": "PAC-3 MSE BMD",
    "aliases": [
      "PAC-3 MSE BMD"
    ],
    "familyName": "Anti-Ballistic Missile Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Air Defence — Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 5,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States",
      "Germany",
      "Japan",
      "Poland",
      "Romania",
      "South Korea",
      "Ukraine"
    ],
    "developer": "Lockheed Martin",
    "manufacturer": "Lockheed Martin",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "PAC-3 MSE BMD",
      "Patriot PAC-3 MSE Terminal BMD Layer",
      "Ballistic Missile Defence",
      "Anti-Ballistic Missile Defence"
    ],
    "era": "2004–Present",
    "shortDescription": "Terminal hit-to-kill interceptor integrated into Patriot batteries for close-in ballistic missile defense.",
    "fullOverview": "Terminal hit-to-kill interceptor integrated into Patriot batteries for close-in ballistic missile defense.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Lockheed Martin PAC-3 MSE BMD Specifications",
    "specs": {
      "entryIntoService": "2015",
      "crew": "N/A",
      "manufacturer": "Lockheed Martin",
      "primaryRole": "Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "73",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Ka-band Active Radar Seeker",
        "Inertial Navigation",
        "terminalGuidance: Active Ka-Band Radar Homing + Attitude Control Motors",
        "radarSystem: Raytheon AN/MPQ-65 / LTAMDS GhostEye 3D AESA Radar",
        "opticalTracking: Engagement Control Station EO/IR Integration"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 312,
          "launcherType": "M903 Canister Launcher Station (12 PAC-3 MSE missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 120,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 36000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 5
        },
        "guidance": {
          "guidanceSystems": [
            "Ka-band Active Radar Seeker",
            "Inertial Navigation"
          ],
          "terminalGuidance": "Active Ka-Band Radar Homing + Attitude Control Motors",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 73
        },
        "sensors": {
          "radarSystem": "Raytheon AN/MPQ-65 / LTAMDS GhostEye 3D AESA Radar",
          "opticalTracking": "Engagement Control Station EO/IR Integration",
          "simultaneousEngagements": 9
        }
      },
      "developmentYear": 2004,
      "serviceEntryYear": 2015,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States",
        "Germany",
        "Japan",
        "Poland",
        "Romania",
        "South Korea",
        "Ukraine"
      ]
    },
    "sources": [
      {
        "title": "Lockheed Martin PAC-3 MSE BMD Specifications",
        "url": "https://www.lockheedmartin.com/",
        "publisher": "Lockheed Martin",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "pac-3-mse-bmd-system",
      "name": "PAC-3 MSE BMD",
      "officialDesignation": "Patriot PAC-3 MSE Terminal BMD Layer",
      "alternateNames": [
        "PAC-3 MSE BMD"
      ],
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Lockheed Martin",
      "operators": [
        "United States",
        "Germany",
        "Japan",
        "Poland",
        "Romania",
        "South Korea",
        "Ukraine"
      ],
      "developmentYear": 2004,
      "serviceEntryYear": 2015,
      "status": "Active",
      "generation": "N/A",
      "description": "Terminal hit-to-kill interceptor integrated into Patriot batteries for close-in ballistic missile defense.",
      "specs": {
        "physical": {
          "systemWeightKg": 312,
          "launcherType": "M903 Canister Launcher Station (12 PAC-3 MSE missiles)",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 120,
          "minEngagementRangeKm": 3,
          "maxEngagementAltitudeM": 36000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 5
        },
        "guidance": {
          "guidanceSystems": [
            "Ka-band Active Radar Seeker",
            "Inertial Navigation"
          ],
          "terminalGuidance": "Active Ka-Band Radar Homing + Attitude Control Motors",
          "warheadType": "Hit-to-Kill Kinetic Dart",
          "warheadWeightKg": 73
        },
        "sensors": {
          "radarSystem": "Raytheon AN/MPQ-65 / LTAMDS GhostEye 3D AESA Radar",
          "opticalTracking": "Engagement Control Station EO/IR Integration",
          "simultaneousEngagements": 9
        }
      },
      "sources": [
        {
          "title": "Lockheed Martin PAC-3 MSE BMD Specifications",
          "url": "https://www.lockheedmartin.com/",
          "publisher": "Lockheed Martin",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "arrow-2-bmd-system",
    "name": "Arrow 2 BMD",
    "officialDesignation": "Arrow 2 Modernized Ballistic Missile Defence Layer",
    "commonName": "Arrow 2 BMD",
    "aliases": [
      "Arrow 2 BMD",
      "Hetz 2 BMD"
    ],
    "familyName": "Anti-Ballistic Missile Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Air Defence — Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 6,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Israel"
    ],
    "developer": "IAI / Boeing",
    "manufacturer": "IAI / Boeing",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Arrow 2 BMD",
      "Arrow 2 Modernized Ballistic Missile Defence Layer",
      "Hetz 2 BMD",
      "Ballistic Missile Defence",
      "Anti-Ballistic Missile Defence"
    ],
    "era": "1986–Present",
    "shortDescription": "Endo-atmospheric upper-tier ballistic missile interceptor designed to destroy short- and medium-range ballistic missiles.",
    "fullOverview": "Endo-atmospheric upper-tier ballistic missile interceptor designed to destroy short- and medium-range ballistic missiles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "IAI Arrow 2 BMD Information",
    "specs": {
      "entryIntoService": "2000",
      "crew": "N/A",
      "manufacturer": "IAI / Boeing",
      "primaryRole": "Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "150",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Dual-Mode Radio Frequency / Optical Seeker",
        "terminalGuidance: Radar/Optical Homing with proximity blast fragmentation",
        "radarSystem: IAI EL/M-2080 Green Pine AESA Radar",
        "opticalTracking: Electro-Optical Tracking Channel"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 2000,
          "launcherType": "Road-mobile vertical container TEL",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 300,
          "minEngagementRangeKm": 20,
          "maxEngagementAltitudeM": 50000,
          "minEngagementAltitudeM": 10000,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Dual-Mode Radio Frequency / Optical Seeker"
          ],
          "terminalGuidance": "Radar/Optical Homing with proximity blast fragmentation",
          "warheadType": "Directional Blast-Fragmentation",
          "warheadWeightKg": 150
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2080 Green Pine AESA Radar",
          "opticalTracking": "Electro-Optical Tracking Channel",
          "simultaneousEngagements": 14
        }
      },
      "developmentYear": 1986,
      "serviceEntryYear": 2000,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Israel"
      ]
    },
    "sources": [
      {
        "title": "IAI Arrow 2 BMD Information",
        "url": "https://www.iai.co.il/",
        "publisher": "IAI",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "arrow-2-bmd-system",
      "name": "Arrow 2 BMD",
      "officialDesignation": "Arrow 2 Modernized Ballistic Missile Defence Layer",
      "alternateNames": [
        "Arrow 2 BMD",
        "Hetz 2 BMD"
      ],
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "domain": "AIR_DEFENCE",
      "country": "Israel",
      "originCountries": [
        "Israel",
        "United States"
      ],
      "manufacturer": "IAI / Boeing",
      "operators": [
        "Israel"
      ],
      "developmentYear": 1986,
      "serviceEntryYear": 2000,
      "status": "Active",
      "generation": "N/A",
      "description": "Endo-atmospheric upper-tier ballistic missile interceptor designed to destroy short- and medium-range ballistic missiles.",
      "specs": {
        "physical": {
          "systemWeightKg": 2000,
          "launcherType": "Road-mobile vertical container TEL",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 300,
          "minEngagementRangeKm": 20,
          "maxEngagementAltitudeM": 50000,
          "minEngagementAltitudeM": 10000,
          "maxInterceptorSpeedMach": 4.5
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Dual-Mode Radio Frequency / Optical Seeker"
          ],
          "terminalGuidance": "Radar/Optical Homing with proximity blast fragmentation",
          "warheadType": "Directional Blast-Fragmentation",
          "warheadWeightKg": 150
        },
        "sensors": {
          "radarSystem": "IAI EL/M-2080 Green Pine AESA Radar",
          "opticalTracking": "Electro-Optical Tracking Channel",
          "simultaneousEngagements": 14
        }
      },
      "sources": [
        {
          "title": "IAI Arrow 2 BMD Information",
          "url": "https://www.iai.co.il/",
          "publisher": "IAI",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "s-500-bmd-system",
    "name": "S-500 BMD",
    "officialDesignation": "S-500 Prometey Ballistic Missile Defence System",
    "commonName": "S-500 BMD",
    "aliases": [
      "S-500 BMD",
      "55R6M BMD"
    ],
    "familyName": "Anti-Ballistic Missile Defence Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-anti-ballistic",
    "categoryName": "Air Defence — Anti-Ballistic Missile Defence",
    "subcategory": "Ballistic Missile Defence",
    "rankInCategory": 7,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
    "developer": "Almaz-Antey",
    "manufacturer": "Almaz-Antey",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "S-500 BMD",
      "S-500 Prometey Ballistic Missile Defence System",
      "55R6M BMD",
      "Ballistic Missile Defence",
      "Anti-Ballistic Missile Defence"
    ],
    "era": "2009–Present",
    "shortDescription": "Strategic anti-ballistic and anti-satellite missile system providing high-tier defense against intercontinental ballistic missiles and hypersonic weapons.",
    "fullOverview": "Strategic anti-ballistic and anti-satellite missile system providing high-tier defense against intercontinental ballistic missiles and hypersonic weapons.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Almaz-Antey S-500 BMD System Specifications",
    "specs": {
      "entryIntoService": "2021",
      "crew": "N/A",
      "manufacturer": "Almaz-Antey",
      "primaryRole": "Ballistic Missile Defence",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "100",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Inertial Navigation",
        "Active Radar / Optical Homing",
        "terminalGuidance: Kinetic Hit-to-Kill / Fragmenting",
        "radarSystem: 77T6 ABM Engagement Radar + 91N6A(M) Acquisition Radar",
        "opticalTracking: Infrared Optical Tracker"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 45000,
          "launcherType": "BAZ-69096 10x10 Transporter Erector Launcher",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 600,
          "minEngagementRangeKm": 50,
          "maxEngagementAltitudeM": 200000,
          "minEngagementAltitudeM": 5000,
          "maxInterceptorSpeedMach": 20
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active Radar / Optical Homing"
          ],
          "terminalGuidance": "Kinetic Hit-to-Kill / Fragmenting",
          "warheadType": "Hit-to-Kill / HE Fragmentation",
          "warheadWeightKg": 100
        },
        "sensors": {
          "radarSystem": "77T6 ABM Engagement Radar + 91N6A(M) Acquisition Radar",
          "opticalTracking": "Infrared Optical Tracker",
          "simultaneousEngagements": 10
        }
      },
      "developmentYear": 2009,
      "serviceEntryYear": 2021,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Russia"
      ]
    },
    "sources": [
      {
        "title": "Almaz-Antey S-500 BMD System Specifications",
        "url": "https://almaz-antey.ru/",
        "publisher": "Almaz-Antey",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "s-500-bmd-system",
      "name": "S-500 BMD",
      "officialDesignation": "S-500 Prometey Ballistic Missile Defence System",
      "alternateNames": [
        "S-500 BMD",
        "55R6M BMD"
      ],
      "category": "Anti-Ballistic Missile Defence",
      "subcategory": "Ballistic Missile Defence",
      "domain": "AIR_DEFENCE",
      "country": "Russia",
      "originCountries": [
        "Russia"
      ],
      "manufacturer": "Almaz-Antey",
      "operators": [
        "Russia"
      ],
      "developmentYear": 2009,
      "serviceEntryYear": 2021,
      "status": "Active",
      "generation": "N/A",
      "description": "Strategic anti-ballistic and anti-satellite missile system providing high-tier defense against intercontinental ballistic missiles and hypersonic weapons.",
      "specs": {
        "physical": {
          "systemWeightKg": 45000,
          "launcherType": "BAZ-69096 10x10 Transporter Erector Launcher",
          "mobility": "WHEELED_TEL",
          "crewSize": 6
        },
        "performance": {
          "maxEngagementRangeKm": 600,
          "minEngagementRangeKm": 50,
          "maxEngagementAltitudeM": 200000,
          "minEngagementAltitudeM": 5000,
          "maxInterceptorSpeedMach": 20
        },
        "guidance": {
          "guidanceSystems": [
            "Inertial Navigation",
            "Active Radar / Optical Homing"
          ],
          "terminalGuidance": "Kinetic Hit-to-Kill / Fragmenting",
          "warheadType": "Hit-to-Kill / HE Fragmentation",
          "warheadWeightKg": 100
        },
        "sensors": {
          "radarSystem": "77T6 ABM Engagement Radar + 91N6A(M) Acquisition Radar",
          "opticalTracking": "Infrared Optical Tracker",
          "simultaneousEngagements": 10
        }
      },
      "sources": [
        {
          "title": "Almaz-Antey S-500 BMD System Specifications",
          "url": "https://almaz-antey.ru/",
          "publisher": "Almaz-Antey",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "m-lids-cuas",
    "name": "M-LIDS",
    "officialDesignation": "Mobile Low, Slow, Small Unmanned Aircraft Integrated Defeat System",
    "commonName": "M-LIDS",
    "aliases": [
      "M-LIDS",
      "C-UAS Stryker"
    ],
    "familyName": "Counter-UAS / Anti-Drone Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-counter-uas",
    "categoryName": "Air Defence — Counter-UAS / Anti-Drone",
    "subcategory": "Counter-UAS",
    "rankInCategory": 1,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States (US Army)"
    ],
    "developer": "RTX / Leonardo DRS / SRC",
    "manufacturer": "RTX / Leonardo DRS / SRC",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "M-LIDS",
      "Mobile Low, Slow, Small Unmanned Aircraft Integrated Defeat System",
      "C-UAS Stryker",
      "Counter-UAS",
      "Counter-UAS / Anti-Drone"
    ],
    "era": "2017–Present",
    "shortDescription": "Vehicle-mounted counter-UAS system combining Ku-band radar, electronic warfare jammers, 30mm chain guns, and Coyote interceptor missiles.",
    "fullOverview": "Vehicle-mounted counter-UAS system combining Ku-band radar, electronic warfare jammers, 30mm chain guns, and Coyote interceptor missiles.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "U.S. Army PEO Missiles and Space M-LIDS Factsheet",
    "specs": {
      "entryIntoService": "2020",
      "crew": "N/A",
      "manufacturer": "RTX / Leonardo DRS / SRC",
      "primaryRole": "Counter-UAS",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "4",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Radio Frequency Jamming",
        "Coyote Interceptor Active Seeker",
        "terminalGuidance: Active Seeker / Electronic Jamming",
        "radarSystem: KuRFS Multi-Function AESA Radar",
        "opticalTracking: MX-GCS Electro-Optical / Infrared Sensor Suite"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 18000,
          "launcherType": "Stryker or M-ATV vehicle integration with modular turrets",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 10,
          "minEngagementRangeKm": 0.2,
          "maxEngagementAltitudeM": 3000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 1.2
        },
        "guidance": {
          "guidanceSystems": [
            "Radio Frequency Jamming",
            "Coyote Interceptor Active Seeker"
          ],
          "terminalGuidance": "Active Seeker / Electronic Jamming",
          "warheadType": "High-Explosive Airburst / Non-Kinetic EW",
          "warheadWeightKg": 4
        },
        "sensors": {
          "radarSystem": "KuRFS Multi-Function AESA Radar",
          "opticalTracking": "MX-GCS Electro-Optical / Infrared Sensor Suite",
          "simultaneousEngagements": 2
        }
      },
      "developmentYear": 2017,
      "serviceEntryYear": 2020,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States (US Army)"
      ]
    },
    "sources": [
      {
        "title": "U.S. Army PEO Missiles and Space M-LIDS Factsheet",
        "url": "https://www.army.mil/",
        "publisher": "U.S. Army",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "m-lids-cuas",
      "name": "M-LIDS",
      "officialDesignation": "Mobile Low, Slow, Small Unmanned Aircraft Integrated Defeat System",
      "alternateNames": [
        "M-LIDS",
        "C-UAS Stryker"
      ],
      "category": "Counter-UAS / Anti-Drone",
      "subcategory": "Counter-UAS",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "RTX / Leonardo DRS / SRC",
      "operators": [
        "United States (US Army)"
      ],
      "developmentYear": 2017,
      "serviceEntryYear": 2020,
      "status": "Active",
      "generation": "N/A",
      "description": "Vehicle-mounted counter-UAS system combining Ku-band radar, electronic warfare jammers, 30mm chain guns, and Coyote interceptor missiles.",
      "specs": {
        "physical": {
          "systemWeightKg": 18000,
          "launcherType": "Stryker or M-ATV vehicle integration with modular turrets",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 10,
          "minEngagementRangeKm": 0.2,
          "maxEngagementAltitudeM": 3000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 1.2
        },
        "guidance": {
          "guidanceSystems": [
            "Radio Frequency Jamming",
            "Coyote Interceptor Active Seeker"
          ],
          "terminalGuidance": "Active Seeker / Electronic Jamming",
          "warheadType": "High-Explosive Airburst / Non-Kinetic EW",
          "warheadWeightKg": 4
        },
        "sensors": {
          "radarSystem": "KuRFS Multi-Function AESA Radar",
          "opticalTracking": "MX-GCS Electro-Optical / Infrared Sensor Suite",
          "simultaneousEngagements": 2
        }
      },
      "sources": [
        {
          "title": "U.S. Army PEO Missiles and Space M-LIDS Factsheet",
          "url": "https://www.army.mil/",
          "publisher": "U.S. Army",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "skyranger-30-cuas-sys",
    "name": "Skyranger 30 C-UAS",
    "officialDesignation": "Skyranger 30 Counter-UAS Configuration",
    "commonName": "Skyranger 30 C-UAS",
    "aliases": [
      "Skyranger 30 C-UAS"
    ],
    "familyName": "Counter-UAS / Anti-Drone Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-counter-uas",
    "categoryName": "Air Defence — Counter-UAS / Anti-Drone",
    "subcategory": "Counter-UAS",
    "rankInCategory": 2,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Germany",
      "Austria",
      "Netherlands",
      "Ukraine"
    ],
    "developer": "Rheinmetall",
    "manufacturer": "Rheinmetall",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Skyranger 30 C-UAS",
      "Skyranger 30 Counter-UAS Configuration",
      "Counter-UAS",
      "Counter-UAS / Anti-Drone"
    ],
    "era": "2018–Present",
    "shortDescription": "Turret system optimized for countering drone swarms using a 30mm programmable airburst cannon and integrated AESA radar/EO/IR sensors.",
    "fullOverview": "Turret system optimized for countering drone swarms using a 30mm programmable airburst cannon and integrated AESA radar/EO/IR sensors.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Rheinmetall Skyranger 30 C-UAS Product Information",
    "specs": {
      "entryIntoService": "2024",
      "crew": "N/A",
      "manufacturer": "Rheinmetall",
      "primaryRole": "Counter-UAS",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0.22",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Command-to-Line-of-Sight (CLOS)",
        "Radar Tracking",
        "terminalGuidance: AHEAD Time-Programmed Airburst",
        "radarSystem: AMMR 3D AESA Radar",
        "opticalTracking: FIRST IRST & TREO Electro-Optical Sensor Unit"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 2500,
          "launcherType": "Armored combat vehicle turret mount",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 3,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 3000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2
        },
        "guidance": {
          "guidanceSystems": [
            "Command-to-Line-of-Sight (CLOS)",
            "Radar Tracking"
          ],
          "terminalGuidance": "AHEAD Time-Programmed Airburst",
          "warheadType": "AHEAD Airburst Submunitions",
          "warheadWeightKg": 0.22
        },
        "sensors": {
          "radarSystem": "AMMR 3D AESA Radar",
          "opticalTracking": "FIRST IRST & TREO Electro-Optical Sensor Unit",
          "simultaneousEngagements": 2
        }
      },
      "developmentYear": 2018,
      "serviceEntryYear": 2024,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Germany",
        "Austria",
        "Netherlands",
        "Ukraine"
      ]
    },
    "sources": [
      {
        "title": "Rheinmetall Skyranger 30 C-UAS Product Information",
        "url": "https://www.rheinmetall.com/",
        "publisher": "Rheinmetall",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "skyranger-30-cuas-sys",
      "name": "Skyranger 30 C-UAS",
      "officialDesignation": "Skyranger 30 Counter-UAS Configuration",
      "alternateNames": [
        "Skyranger 30 C-UAS"
      ],
      "category": "Counter-UAS / Anti-Drone",
      "subcategory": "Counter-UAS",
      "domain": "AIR_DEFENCE",
      "country": "Germany",
      "originCountries": [
        "Germany"
      ],
      "manufacturer": "Rheinmetall",
      "operators": [
        "Germany",
        "Austria",
        "Netherlands",
        "Ukraine"
      ],
      "developmentYear": 2018,
      "serviceEntryYear": 2024,
      "status": "Active",
      "generation": "N/A",
      "description": "Turret system optimized for countering drone swarms using a 30mm programmable airburst cannon and integrated AESA radar/EO/IR sensors.",
      "specs": {
        "physical": {
          "systemWeightKg": 2500,
          "launcherType": "Armored combat vehicle turret mount",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 3,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 3000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2
        },
        "guidance": {
          "guidanceSystems": [
            "Command-to-Line-of-Sight (CLOS)",
            "Radar Tracking"
          ],
          "terminalGuidance": "AHEAD Time-Programmed Airburst",
          "warheadType": "AHEAD Airburst Submunitions",
          "warheadWeightKg": 0.22
        },
        "sensors": {
          "radarSystem": "AMMR 3D AESA Radar",
          "opticalTracking": "FIRST IRST & TREO Electro-Optical Sensor Unit",
          "simultaneousEngagements": 2
        }
      },
      "sources": [
        {
          "title": "Rheinmetall Skyranger 30 C-UAS Product Information",
          "url": "https://www.rheinmetall.com/",
          "publisher": "Rheinmetall",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "skynex-cuas-sys",
    "name": "Skynex C-UAS",
    "officialDesignation": "Skynex Counter-UAS Air Defence Configuration",
    "commonName": "Skynex C-UAS",
    "aliases": [
      "Skynex C-UAS"
    ],
    "familyName": "Counter-UAS / Anti-Drone Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-counter-uas",
    "categoryName": "Air Defence — Counter-UAS / Anti-Drone",
    "subcategory": "Counter-UAS",
    "rankInCategory": 3,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Germany",
      "Ukraine",
      "Romania"
    ],
    "developer": "Rheinmetall Air Defence",
    "manufacturer": "Rheinmetall Air Defence",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Skynex C-UAS",
      "Skynex Counter-UAS Air Defence Configuration",
      "Counter-UAS",
      "Counter-UAS / Anti-Drone"
    ],
    "era": "2016–Present",
    "shortDescription": "Networked counter-UAS air defense architecture utilizing Oerlikon Revolver Gun 35mm cannons with programmable airburst ammunition.",
    "fullOverview": "Networked counter-UAS air defense architecture utilizing Oerlikon Revolver Gun 35mm cannons with programmable airburst ammunition.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Rheinmetall Skynex C-UAS Technical Documentation",
    "specs": {
      "entryIntoService": "2021",
      "crew": "N/A",
      "manufacturer": "Rheinmetall Air Defence",
      "primaryRole": "Counter-UAS",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0.35",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "X-TAR3D Radar Tracking",
        "AHEAD Muzzle Programming",
        "terminalGuidance: AHEAD Time-Programmed Airburst",
        "radarSystem: X-TAR3D Tactical Surveillance Radar",
        "opticalTracking: Oerlikon MSP500 Sensor Unit (EO/IR/Laser)"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 3200,
          "launcherType": "Towed Oerlikon Revolver Gun Mk3",
          "mobility": "TOWED",
          "crewSize": 2
        },
        "performance": {
          "maxEngagementRangeKm": 4,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 4000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2.2
        },
        "guidance": {
          "guidanceSystems": [
            "X-TAR3D Radar Tracking",
            "AHEAD Muzzle Programming"
          ],
          "terminalGuidance": "AHEAD Time-Programmed Airburst",
          "warheadType": "AHEAD Airburst Submunitions",
          "warheadWeightKg": 0.35
        },
        "sensors": {
          "radarSystem": "X-TAR3D Tactical Surveillance Radar",
          "opticalTracking": "Oerlikon MSP500 Sensor Unit (EO/IR/Laser)",
          "simultaneousEngagements": 2
        }
      },
      "developmentYear": 2016,
      "serviceEntryYear": 2021,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Germany",
        "Ukraine",
        "Romania"
      ]
    },
    "sources": [
      {
        "title": "Rheinmetall Skynex C-UAS Technical Documentation",
        "url": "https://www.rheinmetall.com/",
        "publisher": "Rheinmetall",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "skynex-cuas-sys",
      "name": "Skynex C-UAS",
      "officialDesignation": "Skynex Counter-UAS Air Defence Configuration",
      "alternateNames": [
        "Skynex C-UAS"
      ],
      "category": "Counter-UAS / Anti-Drone",
      "subcategory": "Counter-UAS",
      "domain": "AIR_DEFENCE",
      "country": "Switzerland",
      "originCountries": [
        "Switzerland",
        "Germany"
      ],
      "manufacturer": "Rheinmetall Air Defence",
      "operators": [
        "Germany",
        "Ukraine",
        "Romania"
      ],
      "developmentYear": 2016,
      "serviceEntryYear": 2021,
      "status": "Active",
      "generation": "N/A",
      "description": "Networked counter-UAS air defense architecture utilizing Oerlikon Revolver Gun 35mm cannons with programmable airburst ammunition.",
      "specs": {
        "physical": {
          "systemWeightKg": 3200,
          "launcherType": "Towed Oerlikon Revolver Gun Mk3",
          "mobility": "TOWED",
          "crewSize": 2
        },
        "performance": {
          "maxEngagementRangeKm": 4,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 4000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 2.2
        },
        "guidance": {
          "guidanceSystems": [
            "X-TAR3D Radar Tracking",
            "AHEAD Muzzle Programming"
          ],
          "terminalGuidance": "AHEAD Time-Programmed Airburst",
          "warheadType": "AHEAD Airburst Submunitions",
          "warheadWeightKg": 0.35
        },
        "sensors": {
          "radarSystem": "X-TAR3D Tactical Surveillance Radar",
          "opticalTracking": "Oerlikon MSP500 Sensor Unit (EO/IR/Laser)",
          "simultaneousEngagements": 2
        }
      },
      "sources": [
        {
          "title": "Rheinmetall Skynex C-UAS Technical Documentation",
          "url": "https://www.rheinmetall.com/",
          "publisher": "Rheinmetall",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "drone-dome-cuas-sys",
    "name": "Drone Dome",
    "officialDesignation": "Drone Dome Counter-UAS System",
    "commonName": "Drone Dome",
    "aliases": [
      "Drone Dome"
    ],
    "familyName": "Counter-UAS / Anti-Drone Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-counter-uas",
    "categoryName": "Air Defence — Counter-UAS / Anti-Drone",
    "subcategory": "Counter-UAS",
    "rankInCategory": 4,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "Israel",
      "United Kingdom",
      "United Arab Emirates"
    ],
    "developer": "Rafael Advanced Defense Systems",
    "manufacturer": "Rafael Advanced Defense Systems",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Drone Dome",
      "Drone Dome Counter-UAS System",
      "Counter-UAS",
      "Counter-UAS / Anti-Drone"
    ],
    "era": "2014–Present",
    "shortDescription": "Multi-sensor counter-UAS system combining active AESA radar, RF detection, electro-optical tracking, and directional radio frequency jammers.",
    "fullOverview": "Multi-sensor counter-UAS system combining active AESA radar, RF detection, electro-optical tracking, and directional radio frequency jammers.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Rafael Drone Dome Product Information",
    "specs": {
      "entryIntoService": "2016",
      "crew": "N/A",
      "manufacturer": "Rafael Advanced Defense Systems",
      "primaryRole": "Counter-UAS",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Directional RF Jamming",
        "Electro-Optical tracking",
        "terminalGuidance: Non-kinetic RF Disruption / Optional Laser Soft-Kill",
        "radarSystem: RPS-42 Tactical 3D AESA Radar",
        "opticalTracking: MEOS Electro-Optical Sensor System"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 1500,
          "launcherType": "Containerized / Vehicle-mounted jammer and sensor mast",
          "mobility": "WHEELED_TEL",
          "crewSize": 2
        },
        "performance": {
          "maxEngagementRangeKm": 10,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 3000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 1
        },
        "guidance": {
          "guidanceSystems": [
            "Directional RF Jamming",
            "Electro-Optical tracking"
          ],
          "terminalGuidance": "Non-kinetic RF Disruption / Optional Laser Soft-Kill",
          "warheadType": "Directed Energy / Microwave / Laser",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "RPS-42 Tactical 3D AESA Radar",
          "opticalTracking": "MEOS Electro-Optical Sensor System",
          "simultaneousEngagements": 2
        }
      },
      "developmentYear": 2014,
      "serviceEntryYear": 2016,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "Israel",
        "United Kingdom",
        "United Arab Emirates"
      ]
    },
    "sources": [
      {
        "title": "Rafael Drone Dome Product Information",
        "url": "https://www.rafael.co.il/",
        "publisher": "Rafael",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "drone-dome-cuas-sys",
      "name": "Drone Dome",
      "officialDesignation": "Drone Dome Counter-UAS System",
      "alternateNames": [
        "Drone Dome"
      ],
      "category": "Counter-UAS / Anti-Drone",
      "subcategory": "Counter-UAS",
      "domain": "AIR_DEFENCE",
      "country": "Israel",
      "originCountries": [
        "Israel"
      ],
      "manufacturer": "Rafael Advanced Defense Systems",
      "operators": [
        "Israel",
        "United Kingdom",
        "United Arab Emirates"
      ],
      "developmentYear": 2014,
      "serviceEntryYear": 2016,
      "status": "Active",
      "generation": "N/A",
      "description": "Multi-sensor counter-UAS system combining active AESA radar, RF detection, electro-optical tracking, and directional radio frequency jammers.",
      "specs": {
        "physical": {
          "systemWeightKg": 1500,
          "launcherType": "Containerized / Vehicle-mounted jammer and sensor mast",
          "mobility": "WHEELED_TEL",
          "crewSize": 2
        },
        "performance": {
          "maxEngagementRangeKm": 10,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 3000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 1
        },
        "guidance": {
          "guidanceSystems": [
            "Directional RF Jamming",
            "Electro-Optical tracking"
          ],
          "terminalGuidance": "Non-kinetic RF Disruption / Optional Laser Soft-Kill",
          "warheadType": "Directed Energy / Microwave / Laser",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "RPS-42 Tactical 3D AESA Radar",
          "opticalTracking": "MEOS Electro-Optical Sensor System",
          "simultaneousEngagements": 2
        }
      },
      "sources": [
        {
          "title": "Rafael Drone Dome Product Information",
          "url": "https://www.rafael.co.il/",
          "publisher": "Rafael",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "leonidas-hp-microwave",
    "name": "Leonidas",
    "officialDesignation": "Leonidas High-Power Microwave Counter-UAS System",
    "commonName": "Leonidas",
    "aliases": [
      "Leonidas HPM"
    ],
    "familyName": "Counter-UAS / Anti-Drone Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-counter-uas",
    "categoryName": "Air Defence — Counter-UAS / Anti-Drone",
    "subcategory": "Counter-UAS",
    "rankInCategory": 5,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States (US Army & USMC evaluation programs)"
    ],
    "developer": "Epirus",
    "manufacturer": "Epirus",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "Leonidas",
      "Leonidas High-Power Microwave Counter-UAS System",
      "Leonidas HPM",
      "Counter-UAS",
      "Counter-UAS / Anti-Drone"
    ],
    "era": "2018–Present",
    "shortDescription": "Solid-state high-power microwave (HPM) system capable of disabling individual drones or entire drone swarms simultaneously without kinetic ammunition.",
    "fullOverview": "Solid-state high-power microwave (HPM) system capable of disabling individual drones or entire drone swarms simultaneously without kinetic ammunition.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Epirus Leonidas High-Power Microwave Datasheet",
    "specs": {
      "entryIntoService": "2021",
      "crew": "N/A",
      "manufacturer": "Epirus",
      "primaryRole": "Counter-UAS",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Electronically Steered High-Power Microwave Beam",
        "RF Target Detection",
        "terminalGuidance: Directed Energy Microwave Pulse",
        "radarSystem: Integrated RF Target Detection & Tracking Array",
        "opticalTracking: Electro-Optical / Infrared Camera Unit"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 1200,
          "launcherType": "Trailer or truck-mounted solid-state HPM panel array",
          "mobility": "WHEELED_TEL",
          "crewSize": 2
        },
        "performance": {
          "maxEngagementRangeKm": 5,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 2000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 1
        },
        "guidance": {
          "guidanceSystems": [
            "Electronically Steered High-Power Microwave Beam",
            "RF Target Detection"
          ],
          "terminalGuidance": "Directed Energy Microwave Pulse",
          "warheadType": "High-Power Microwave Directed Energy",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "Integrated RF Target Detection & Tracking Array",
          "opticalTracking": "Electro-Optical / Infrared Camera Unit",
          "simultaneousEngagements": 100
        }
      },
      "developmentYear": 2018,
      "serviceEntryYear": 2021,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States (US Army & USMC evaluation programs)"
      ]
    },
    "sources": [
      {
        "title": "Epirus Leonidas High-Power Microwave Datasheet",
        "url": "https://www.epirusinc.com/",
        "publisher": "Epirus",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "leonidas-hp-microwave",
      "name": "Leonidas",
      "officialDesignation": "Leonidas High-Power Microwave Counter-UAS System",
      "alternateNames": [
        "Leonidas HPM"
      ],
      "category": "Counter-UAS / Anti-Drone",
      "subcategory": "Counter-UAS",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Epirus",
      "operators": [
        "United States (US Army & USMC evaluation programs)"
      ],
      "developmentYear": 2018,
      "serviceEntryYear": 2021,
      "status": "Active",
      "generation": "N/A",
      "description": "Solid-state high-power microwave (HPM) system capable of disabling individual drones or entire drone swarms simultaneously without kinetic ammunition.",
      "specs": {
        "physical": {
          "systemWeightKg": 1200,
          "launcherType": "Trailer or truck-mounted solid-state HPM panel array",
          "mobility": "WHEELED_TEL",
          "crewSize": 2
        },
        "performance": {
          "maxEngagementRangeKm": 5,
          "minEngagementRangeKm": 0.1,
          "maxEngagementAltitudeM": 2000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 1
        },
        "guidance": {
          "guidanceSystems": [
            "Electronically Steered High-Power Microwave Beam",
            "RF Target Detection"
          ],
          "terminalGuidance": "Directed Energy Microwave Pulse",
          "warheadType": "High-Power Microwave Directed Energy",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "Integrated RF Target Detection & Tracking Array",
          "opticalTracking": "Electro-Optical / Infrared Camera Unit",
          "simultaneousEngagements": 100
        }
      },
      "sources": [
        {
          "title": "Epirus Leonidas High-Power Microwave Datasheet",
          "url": "https://www.epirusinc.com/",
          "publisher": "Epirus",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  },
  {
    "id": "de-m-shorad-laser",
    "name": "DE M-SHORAD",
    "officialDesignation": "Directed Energy Maneuver-Short Range Air Defense (50kW Laser)",
    "commonName": "DE M-SHORAD",
    "aliases": [
      "DE M-SHORAD",
      "Stryker Laser"
    ],
    "familyName": "Counter-UAS / Anti-Drone Family",
    "domain": "AIR_DEFENCE",
    "branchId": "air-defence",
    "categoryId": "air-defence-counter-uas",
    "categoryName": "Air Defence — Counter-UAS / Anti-Drone",
    "subcategory": "Counter-UAS",
    "rankInCategory": 6,
    "rankingRationale": "Source order preserved from the supplied dataset; no new capability ranking was invented.",
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
      "United States (US Army)"
    ],
    "developer": "Leonardo DRS / U.S. Army Industry Team",
    "manufacturer": "Leonardo DRS / U.S. Army Industry Team",
    "status": "Operational",
    "currentRelevance": "CURRENT",
    "dataConfidence": "VERIFIED",
    "services": [
      "Air Defence"
    ],
    "searchKeywords": [
      "DE M-SHORAD",
      "Directed Energy Maneuver-Short Range Air Defense (50kW Laser)",
      "Stryker Laser",
      "Counter-UAS",
      "Counter-UAS / Anti-Drone"
    ],
    "era": "2019–Present",
    "shortDescription": "Stryker-mounted 50kW-class high-energy laser weapon system designed to burn out incoming drones, rockets, artillery, and mortar threats.",
    "fullOverview": "Stryker-mounted 50kW-class high-energy laser weapon system designed to burn out incoming drones, rockets, artillery, and mortar threats.",
    "images": [],
    "imageStatus": "unavailable",
    "imageNotice": "No verified image was supplied in the source catalog.",
    "imageCredit": "N/A",
    "imageLicense": "N/A",
    "sourceCitation": "Leonardo DRS Directed Energy C-UAS Specification",
    "specs": {
      "entryIntoService": "2022",
      "crew": "N/A",
      "manufacturer": "Leonardo DRS / U.S. Army Industry Team",
      "primaryRole": "Counter-UAS",
      "keyMetrics": [
        {
          "label": "Warhead Weight",
          "value": "0",
          "unit": "kg",
          "highlight": false
        }
      ],
      "armament": [],
      "propulsionPower": "Not specified in source.",
      "sensorsAvionics": [
        "Electro-Optical Beam Control System",
        "Laser Director",
        "terminalGuidance: High-Energy Laser Beam Spot",
        "radarSystem: KuRFS Multi-Function AESA Radar",
        "opticalTracking: Electro-Optical Beam Control System & Thermal Sight"
      ],
      "technicalDetails": {
        "physical": {
          "systemWeightKg": 19000,
          "launcherType": "Stryker A1 combat vehicle with high-energy laser turret",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 10,
          "minEngagementRangeKm": 0.2,
          "maxEngagementAltitudeM": 3000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 1
        },
        "guidance": {
          "guidanceSystems": [
            "Electro-Optical Beam Control System",
            "Laser Director"
          ],
          "terminalGuidance": "High-Energy Laser Beam Spot",
          "warheadType": "50kW Class High-Energy Laser Beam",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "KuRFS Multi-Function AESA Radar",
          "opticalTracking": "Electro-Optical Beam Control System & Thermal Sight",
          "simultaneousEngagements": 2
        }
      },
      "developmentYear": 2019,
      "serviceEntryYear": 2022,
      "generation": "N/A"
    },
    "relationships": {
      "usedBy": [
        "United States (US Army)"
      ]
    },
    "sources": [
      {
        "title": "Leonardo DRS Directed Energy C-UAS Specification",
        "url": "https://www.leonardodrs.com/",
        "publisher": "Leonardo DRS",
        "sourceType": "official",
        "accessedAt": "2026-09-13"
      }
    ],
    "sourceData": {
      "id": "de-m-shorad-laser",
      "name": "DE M-SHORAD",
      "officialDesignation": "Directed Energy Maneuver-Short Range Air Defense (50kW Laser)",
      "alternateNames": [
        "DE M-SHORAD",
        "Stryker Laser"
      ],
      "category": "Counter-UAS / Anti-Drone",
      "subcategory": "Counter-UAS",
      "domain": "AIR_DEFENCE",
      "country": "United States",
      "originCountries": [
        "United States"
      ],
      "manufacturer": "Leonardo DRS / U.S. Army Industry Team",
      "operators": [
        "United States (US Army)"
      ],
      "developmentYear": 2019,
      "serviceEntryYear": 2022,
      "status": "Active",
      "generation": "N/A",
      "description": "Stryker-mounted 50kW-class high-energy laser weapon system designed to burn out incoming drones, rockets, artillery, and mortar threats.",
      "specs": {
        "physical": {
          "systemWeightKg": 19000,
          "launcherType": "Stryker A1 combat vehicle with high-energy laser turret",
          "mobility": "WHEELED_TEL",
          "crewSize": 3
        },
        "performance": {
          "maxEngagementRangeKm": 10,
          "minEngagementRangeKm": 0.2,
          "maxEngagementAltitudeM": 3000,
          "minEngagementAltitudeM": 0,
          "maxInterceptorSpeedMach": 1
        },
        "guidance": {
          "guidanceSystems": [
            "Electro-Optical Beam Control System",
            "Laser Director"
          ],
          "terminalGuidance": "High-Energy Laser Beam Spot",
          "warheadType": "50kW Class High-Energy Laser Beam",
          "warheadWeightKg": 0
        },
        "sensors": {
          "radarSystem": "KuRFS Multi-Function AESA Radar",
          "opticalTracking": "Electro-Optical Beam Control System & Thermal Sight",
          "simultaneousEngagements": 2
        }
      },
      "sources": [
        {
          "title": "Leonardo DRS Directed Energy C-UAS Specification",
          "url": "https://www.leonardodrs.com/",
          "publisher": "Leonardo DRS",
          "sourceType": "official",
          "accessedAt": "2026-09-13"
        }
      ]
    }
  }
,
{
  "id": "iron-beam-helws",
  "name": "Iron Beam",
  "officialDesignation": "Iron Beam High-Energy Laser Air Defence System",
  "commonName": "Iron Beam",
  "aliases": [
    "Iron Beam HELWS",
    "Magen Or"
  ],
  "familyName": "High-Energy Laser Family",
  "domain": "AIR_DEFENCE",
  "branchId": "air-defence",
  "categoryId": "air-defence-counter-uas",
  "categoryName": "Air Defence — Counter-UAS / Anti-Drone",
  "subcategory": "100kW High-Energy Laser Air Defence",
  "rankInCategory": 1,
  "rankingRationale": "100kW solid-state laser interceptor delivering zero-cost per-shot interception against rockets, mortars, and drones.",
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
  "developer": "Rafael Advanced Defense Systems",
  "manufacturer": "Rafael Advanced Defense Systems",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Air Defence"
  ],
  "searchKeywords": [
    "iron beam",
    "rafael",
    "laser",
    "helws",
    "c-uas",
    "israel air defense"
  ],
  "era": "2020–Present",
  "shortDescription": "100kW class high-energy laser air defense system designed to intercept rockets, artillery, mortars, and unmanned aerial vehicles.",
  "fullOverview": "Iron Beam is Rafael's ground-based 100kW high-energy laser weapon system. It complements Iron Dome by targeting short-range rockets, mortars, and UAVs with speed-of-light directed energy pulses at negligible cost per engagement.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "Rafael Iron Beam High-Energy Laser Technical Datasheet",
  "specs": {
    "entryIntoService": "2024",
    "crew": "2 Operators",
    "manufacturer": "Rafael Advanced Defense Systems",
    "primaryRole": "100kW High-Energy Laser Air Defence",
    "keyMetrics": [
      {
        "label": "Max Engagement Range",
        "value": "7",
        "unit": "km",
        "highlight": true
      },
      {
        "label": "Laser Power Output",
        "value": "100",
        "unit": "kW",
        "highlight": true
      }
    ],
    "armament": [
      "100kW Fiber-Optic Solid-State Laser Transmitter Beam"
    ],
    "propulsionPower": "Containerized High-Output Mobile Diesel Electrical Generator",
    "sensorsAvionics": [
      "Thermal Electro-Optical Target Acquisition & Beam Steering Suite"
    ],
    "technicalDetails": {
      "physical": {
        "systemWeightKg": 8500,
        "launcherType": "Containerized Laser Turret Mast"
      },
      "performance": {
        "maxEngagementRangeKm": 7,
        "maxEngagementAltitudeM": 4000
      }
    }
  },
  "sources": [
    {
      "title": "Rafael Iron Beam Technical Specifications",
      "accessedAt": "2026-09-01"
    }
  ]
},
{
  "id": "vampire-cuas-system",
  "name": "VAMPIRE C-UAS",
  "officialDesignation": "Vehicle-Agnostic Modular Palletized ISR Rocket Equipment (VAMPIRE)",
  "commonName": "VAMPIRE",
  "aliases": [
    "L3Harris VAMPIRE",
    "VAMPIRE C-UAS"
  ],
  "familyName": "Counter-UAS / Anti-Drone Family",
  "domain": "AIR_DEFENCE",
  "branchId": "air-defence",
  "categoryId": "air-defence-counter-uas",
  "categoryName": "Air Defence — Counter-UAS / Anti-Drone",
  "subcategory": "Modular Vehicle-Mounted Counter-UAS",
  "rankInCategory": 2,
  "rankingRationale": "Palletized C-UAS launcher deploying APKWS II laser-guided 70mm rockets against Class 1-3 UAVs.",
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
    "United States",
    "Ukraine"
  ],
  "developer": "L3Harris Technologies",
  "manufacturer": "L3Harris Technologies",
  "status": "Operational",
  "currentRelevance": "CURRENT",
  "dataConfidence": "VERIFIED",
  "services": [
    "Air Defence",
    "Army"
  ],
  "searchKeywords": [
    "vampire",
    "l3harris",
    "apkws",
    "c-uas",
    "anti-drone",
    "ukraine"
  ],
  "era": "2021–Present",
  "shortDescription": "Palletized 4-cell 70mm rocket launcher utilizing laser-guided APKWS rockets with proximity fuzes for precision drone destruction.",
  "fullOverview": "The L3Harris VAMPIRE is a portable kit mounted on pickup trucks or tactical vehicles. Features a 4-pack launcher for AGR-20 APKWS laser-guided 70mm rockets and WESCAM MX-10 RSTA electro-optical targeting ball.",
  "images": [],
  "imageStatus": "unavailable",
  "imageNotice": "No verified public image available.",
  "imageCredit": "N/A",
  "imageLicense": "N/A",
  "sourceCitation": "L3Harris VAMPIRE System Overview",
  "specs": {
    "entryIntoService": "2023",
    "crew": "2 (Driver & Gunner)",
    "manufacturer": "L3Harris Technologies",
    "primaryRole": "Modular Vehicle-Mounted Counter-UAS",
    "keyMetrics": [
      {
        "label": "Effective Range",
        "value": "6",
        "unit": "km",
        "highlight": true
      },
      {
        "label": "Ordnance",
        "value": "70mm Laser-Guided APKWS II",
        "highlight": true
      }
    ],
    "armament": [
      "4-Pack 70mm Launcher for AGR-20 APKWS II Guided Rockets"
    ],
    "propulsionPower": "Vehicle Electrical System",
    "sensorsAvionics": [
      "L3Harris WESCAM MX-10D EO/IR Sensor & Laser Designator"
    ],
    "technicalDetails": {
      "physical": {
        "systemWeightKg": 650,
        "launcherType": "4-Cell LAND-LGR Rocket Pod"
      },
      "performance": {
        "maxEngagementRangeKm": 6,
        "maxEngagementAltitudeM": 3500
      }
    }
  },
  "sources": [
    {
      "title": "L3Harris VAMPIRE Datasheet",
      "accessedAt": "2026-08-15"
    }
  ]
}
];

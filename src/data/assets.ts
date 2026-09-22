import { Asset, RawAsset } from '../types/catalog';
import { ARMY_ASSETS } from './assets/army';
import { AIR_FORCE_ASSETS } from './assets/airforce';
import { NAVY_ASSETS } from './assets/navy';
import { MISSILE_ASSETS } from './assets/missiles';
import { AIR_DEFENCE_ASSETS } from './assets/airDefence';
import { RADAR_ASSETS } from './assets/radar';
import { ELECTRONIC_WARFARE_ASSETS } from './assets/electronicWarfare';
import { UNMANNED_ASSETS } from './assets/unmanned';
import { C4ISR_ASSETS } from './assets/c4isr';
import { resolveVerifiedImages } from './realImages';

// Canonical master list of 100% verified real-world military assets across 9 sectors
const ALL_CANONICAL_RAW_ASSETS: (Asset | RawAsset)[] = [
  ...ARMY_ASSETS,
  ...AIR_FORCE_ASSETS,
  ...NAVY_ASSETS,
  ...MISSILE_ASSETS,
  ...AIR_DEFENCE_ASSETS,
  ...RADAR_ASSETS,
  ...ELECTRONIC_WARFARE_ASSETS,
  ...UNMANNED_ASSETS,
  ...C4ISR_ASSETS,
];

import { CategorySpecs, SpecMetric } from '../types/catalog';

function formatPropulsionStr(str: string): string {
  if (!str) return 'Not publicly disclosed';
  if (str.includes('|') || str.includes(':')) {
    const parts = str.split('|').map(p => p.trim());
    const kvMap: Record<string, string> = {};
    parts.forEach(p => {
      const idx = p.indexOf(':');
      if (idx !== -1) {
        kvMap[p.slice(0, idx).trim()] = p.slice(idx + 1).trim();
      }
    });

    const type = kvMap['type'] ? kvMap['type'].replace(/_/g, ' ') : (kvMap['motorType'] || '');
    const power = kvMap['totalPowerShp'] ? `${Number(kvMap['totalPowerShp']).toLocaleString()} SHP` : (kvMap['powerHp'] ? `${kvMap['powerHp']} HP` : '');
    const engines = kvMap['enginesCount'] ? `${kvMap['enginesCount']} engine(s)` : '';
    const shafts = kvMap['shaftsCount'] ? `${kvMap['shaftsCount']} shaft(s)` : '';
    const fuel = kvMap['fuelType'] ? kvMap['fuelType'] : '';

    const summaryParts = [type, power, engines, shafts, fuel].filter(Boolean);
    if (summaryParts.length > 0) return summaryParts.join(', ');
  }
  return str;
}

function extractCanonicalSpecs(a: any): CategorySpecs {
  const existingSpecs = a.specs || {};
  const sdSpecs = a.sourceData?.specs || {};
  const tech = existingSpecs.technicalDetails || a.technicalDetails || sdSpecs.technicalDetails || {};
  const ad = a.airDefenceSpecs || {};
  
  // Sector specific nested objects
  const dims = tech.dimensions || tech.airframe || tech.physical || {};
  const mob = tech.mobility || tech.performance || tech.speedAndRange || {};
  const crewObj = tech.crew || tech.personnel || {};
  const armObj = tech.armament || tech.weapons || tech.defenses || tech.weaponStation || {};
  const sensObj = tech.sensors || tech.avionics || tech.guidance || tech.communicationsAndMedical || {};
  const propObj = tech.propulsion || tech.engines || {};

  // Collect all raw keyMetrics from any source
  const rawKeyMetrics: any[] = [
    ...(Array.isArray(existingSpecs.keyMetrics) ? existingSpecs.keyMetrics : []),
    ...(Array.isArray(a.keyMetrics) ? a.keyMetrics : []),
    ...(Array.isArray(sdSpecs.keyMetrics) ? sdSpecs.keyMetrics : []),
  ];

  const kmMap = new Map<string, string>();
  rawKeyMetrics.forEach((km: any) => {
    if (km && km.label && km.value !== undefined && km.value !== null) {
      const valStr = km.unit ? `${km.value} ${km.unit}`.trim() : String(km.value).trim();
      kmMap.set(km.label.toLowerCase().trim(), valStr);
    }
  });

  // 1. Crew Complement
  let crewVal = existingSpecs.crew && existingSpecs.crew !== 'N/A' && existingSpecs.crew !== 'Unknown' && existingSpecs.crew !== 'Mission-system dependent' ? existingSpecs.crew : undefined;
  if (!crewVal && crewObj.totalPersonnel !== undefined) {
    crewVal = `${crewObj.totalPersonnel.toLocaleString()} Total Crew`;
    if (crewObj.shipCrew && crewObj.airWingPersonnel) {
      crewVal += ` (${crewObj.shipCrew.toLocaleString()} Ship Crew + ${crewObj.airWingPersonnel.toLocaleString()} Air Wing)`;
    }
  } else if (!crewVal && crewObj.totalSeating !== undefined) {
    crewVal = `${crewObj.totalSeating} Total Seats (${crewObj.crewCount || 2} Crew + ${crewObj.troopSeats || 0} Troops)`;
  } else if (!crewVal && crewObj.crewCount !== undefined) {
    crewVal = `${crewObj.crewCount} Crew`;
    if (crewObj.troopSeats) crewVal += ` (+ ${crewObj.troopSeats} Troops)`;
  } else if (!crewVal && crewObj.totalCrew !== undefined) {
    crewVal = String(crewObj.totalCrew);
    if (crewObj.roles && Array.isArray(crewObj.roles) && crewObj.roles.length > 0) {
      const rolesList = crewObj.roles.map((r: any) => typeof r === 'string' ? r : (r.role || r.name)).filter(Boolean).join(', ');
      if (rolesList) crewVal += ` (${rolesList})`;
    } else if (crewObj.autoloader) {
      crewVal += ` (Automated Loader)`;
    }
  } else if (!crewVal && crewObj.count !== undefined) {
    crewVal = `${crewObj.count} (${crewObj.seating || 'Standard'})`;
  } else if (!crewVal && crewObj.shipCrew !== undefined) {
    crewVal = `${crewObj.shipCrew.toLocaleString()} Ship Crew`;
  } else if (!crewVal && ad.crewComplement !== undefined) {
    crewVal = String(ad.crewComplement);
  } else if (!crewVal && kmMap.has('crew')) {
    crewVal = kmMap.get('crew');
  } else if (!crewVal && a.crew) {
    crewVal = String(a.crew);
  }
  if (!crewVal && (a.branchId === 'unmanned' || a.categoryId?.includes('uav') || a.categoryId?.includes('drone'))) {
    crewVal = 'Unmanned (Remote / Autonomous Operation)';
  }

  // 2. Weight / Displacement
  let weightVal = existingSpecs.weightDisplacement && existingSpecs.weightDisplacement !== 'Not publicly disclosed' ? existingSpecs.weightDisplacement : undefined;
  if (!weightVal && dims.combatWeightTonnes) {
    weightVal = `${dims.combatWeightTonnes} tonnes (combat weight)`;
  } else if (!weightVal && dims.grossVehicleWeightTonnes) {
    weightVal = `${dims.grossVehicleWeightTonnes} tonnes (GVW)`;
    if (dims.payloadCapacityKg) weightVal += ` / ${dims.payloadCapacityKg.toLocaleString()} kg payload`;
  } else if (!weightVal && dims.displacementTonnes) {
    weightVal = `${dims.displacementTonnes.toLocaleString()} tonnes (displacement)`;
  } else if (!weightVal && dims.displacementTons) {
    weightVal = `${dims.displacementTons.toLocaleString()} tons (displacement)`;
  } else if (!weightVal && dims.maxTakeoffWeightKg) {
    weightVal = `${dims.maxTakeoffWeightKg.toLocaleString()} kg (MTOW)`;
    if (dims.emptyWeightKg) weightVal += ` / ${dims.emptyWeightKg.toLocaleString()} kg (empty weight)`;
  } else if (!weightVal && dims.emptyWeightKg) {
    weightVal = `${dims.emptyWeightKg.toLocaleString()} kg (empty weight)`;
  } else if (!weightVal && dims.launchWeightKg) {
    weightVal = `Launch Weight: ${dims.launchWeightKg.toLocaleString()} kg`;
    if (dims.warheadWeightKg) weightVal += ` (Warhead: ${dims.warheadWeightKg.toLocaleString()} kg)`;
  } else if (!weightVal && dims.weightKg) {
    weightVal = `${dims.weightKg.toLocaleString()} kg`;
  } else if (!weightVal && ad.batteryArchitecture?.launcherWeightKg) {
    weightVal = `${ad.batteryArchitecture.launcherWeightKg.toLocaleString()} kg (launcher)`;
  } else if (!weightVal && ad.interceptorReference?.missileWeightKg) {
    weightVal = `${ad.interceptorReference.missileWeightKg.toLocaleString()} kg (interceptor weight)`;
  } else if (!weightVal && kmMap.has('launch weight')) {
    weightVal = `Launch Weight: ${kmMap.get('launch weight')}`;
    if (kmMap.has('warhead weight')) weightVal += ` (Warhead: ${kmMap.get('warhead weight')})`;
  } else if (!weightVal && kmMap.has('warhead weight')) {
    weightVal = `Warhead: ${kmMap.get('warhead weight')}`;
  } else if (!weightVal && kmMap.has('weight')) {
    weightVal = kmMap.get('weight');
  } else if (!weightVal && a.weight) {
    weightVal = String(a.weight);
  }

  // 3. Max Speed
  let speedVal = existingSpecs.maxSpeed && existingSpecs.maxSpeed !== 'Not publicly disclosed' ? existingSpecs.maxSpeed : undefined;
  if (!speedVal && mob.maxRoadSpeedKmh) {
    speedVal = `${mob.maxRoadSpeedKmh} km/h (road speed)`;
    if (mob.crossCountrySpeedKmh) speedVal += ` / ${mob.crossCountrySpeedKmh} km/h (cross-country)`;
  } else if (!speedVal && mob.maxSpeedKnots) {
    speedVal = `${mob.maxSpeedKnots} knots`;
  } else if (!speedVal && mob.maxSpeedKmh) {
    speedVal = `${mob.maxSpeedKmh} km/h`;
    if (mob.maxMach) speedVal += ` (Mach ${mob.maxMach})`;
  } else if (!speedVal && mob.maxMach) {
    speedVal = `Mach ${mob.maxMach}`;
  } else if (!speedVal && ad.interceptorReference?.maxSpeedMach) {
    speedVal = `Mach ${ad.interceptorReference.maxSpeedMach}`;
  } else if (!speedVal && kmMap.has('max speed')) {
    speedVal = kmMap.get('max speed');
  } else if (!speedVal && kmMap.has('maximum speed')) {
    speedVal = kmMap.get('maximum speed');
  } else if (!speedVal && kmMap.has('maximum mach')) {
    speedVal = `Mach ${kmMap.get('maximum mach')}`;
  } else if (!speedVal && a.maxSpeed) {
    speedVal = String(a.maxSpeed);
  }

  // 4. Operational Range
  let rangeVal = existingSpecs.operationalRange && existingSpecs.operationalRange !== 'Not publicly disclosed' ? existingSpecs.operationalRange : undefined;
  if (!rangeVal && mob.operationalRangeKm) {
    rangeVal = `${mob.operationalRangeKm.toLocaleString()} km`;
    if (mob.ferryRangeKm) rangeVal += ` (${mob.ferryRangeKm.toLocaleString()} km ferry range)`;
    else if (mob.combatRadiusKm) rangeVal += ` (${mob.combatRadiusKm.toLocaleString()} km combat radius)`;
  } else if (!rangeVal && mob.maximumRangeKm) {
    rangeVal = `${mob.maximumRangeKm.toLocaleString()} km max range`;
    if (mob.minimumRangeKm) rangeVal += ` (min range ${mob.minimumRangeKm} km)`;
  } else if (!rangeVal && mob.combatRadiusKm) {
    rangeVal = `${mob.combatRadiusKm.toLocaleString()} km combat radius`;
  } else if (!rangeVal && mob.rangeNauticalMiles) {
    rangeVal = `${mob.rangeNauticalMiles.toLocaleString()} nmi`;
  } else if (!rangeVal && ad.performance?.maxEngagementRangeKm) {
    rangeVal = `${ad.performance.maxEngagementRangeKm} km (max engagement range)`;
  } else if (!rangeVal && kmMap.has('operational range')) {
    rangeVal = kmMap.get('operational range');
  } else if (!rangeVal && kmMap.has('maximum range')) {
    rangeVal = kmMap.get('maximum range');
  } else if (!rangeVal && kmMap.has('combat radius')) {
    rangeVal = kmMap.get('combat radius');
  } else if (!rangeVal && kmMap.has('combat range')) {
    rangeVal = kmMap.get('combat range');
  } else if (!rangeVal && kmMap.has('endurance / mission reach')) {
    rangeVal = kmMap.get('endurance / mission reach');
  } else if (!rangeVal && a.range) {
    rangeVal = String(a.range);
  }

  // 5. Propulsion / Engine Power
  let powerVal = existingSpecs.propulsionPower || existingSpecs.enginePower;
  if (powerVal) {
    powerVal = formatPropulsionStr(powerVal);
  }
  if (!powerVal || powerVal === 'Not publicly disclosed' || powerVal === 'Not specified in source.') {
    if (mob.engineModel || mob.powerHp || mob.powerKw) {
      const parts = [];
      if (mob.engineModel) parts.push(mob.engineModel);
      if (mob.engineType) parts.push(`(${mob.engineType.replace(/_/g, ' ')})`);
      if (mob.powerHp) parts.push(`${mob.powerHp.toLocaleString()} hp`);
      if (mob.powerKw) parts.push(`(${mob.powerKw.toLocaleString()} kW)`);
      powerVal = parts.join(' ');
    } else if (propObj.model || propObj.type || propObj.motorType) {
      const parts = [];
      if (propObj.model) parts.push(propObj.model);
      if (propObj.motorType) parts.push(propObj.motorType);
      if (propObj.type) parts.push(propObj.type.replace(/_/g, ' '));
      if (propObj.dryThrustKnPerEngine) parts.push(`${propObj.dryThrustKnPerEngine} kN dry thrust`);
      if (propObj.afterburningThrustKnPerEngine) parts.push(`(${propObj.afterburningThrustKnPerEngine} kN wet thrust)`);
      if (propObj.totalPowerShp) parts.push(`${propObj.totalPowerShp.toLocaleString()} SHP`);
      if (propObj.fuelType) parts.push(`Fuel: ${propObj.fuelType}`);
      powerVal = parts.join(' ');
    } else if (kmMap.has('power source')) {
      powerVal = kmMap.get('power source');
    } else if (a.enginePower || a.propulsion) {
      powerVal = a.enginePower || a.propulsion;
    }
  }

  // 6. Main Armament & Ordnance
  let mainArm: string[] = [];
  if (existingSpecs.mainArmament && existingSpecs.mainArmament.length > 0) {
    mainArm = existingSpecs.mainArmament.map((item: string) => {
      if (item.includes('warheadType:') || item.includes('warheadWeightKg:')) {
        return item.replace(/warheadType:|warheadWeightKg:/g, '').trim();
      }
      return item;
    }).filter(Boolean);
  }

  if (mainArm.length === 0) {
    const list: string[] = [];
    if (armObj.weapons && Array.isArray(armObj.weapons)) {
      armObj.weapons.forEach((w: any) => {
        if (typeof w === 'string') list.push(w);
        else if (w.name) list.push(w.name);
      });
    }
    if (armObj.mainArmament) {
      if (Array.isArray(armObj.mainArmament)) {
        armObj.mainArmament.forEach((item: any) => {
          if (typeof item === 'string') list.push(item);
          else list.push(`${item.name || item.model || 'Main Armament'} ${item.caliberMm ? item.caliberMm + 'mm' : ''} ${item.barrelLengthCalibers ? 'L/' + item.barrelLengthCalibers : ''}`.trim());
        });
      } else if (typeof armObj.mainArmament === 'object') {
        const item = armObj.mainArmament;
        const str = `${item.name || item.model || item.type || 'Main Gun'} ${item.caliberMm ? item.caliberMm + 'mm' : ''} ${item.barrelLengthCalibers ? 'L/' + item.barrelLengthCalibers : ''}`.trim();
        if (str) list.push(str);
      }
    }
    if (armObj.internalGun?.weapon) {
      list.push(`${armObj.internalGun.weapon} (${armObj.internalGun.caliberMm || 20}mm cannon, ${armObj.internalGun.rounds || 0} rds)`);
    }
    if (armObj.typicalLoadout && Array.isArray(armObj.typicalLoadout)) {
      armObj.typicalLoadout.forEach((w: any) => {
        if (typeof w === 'string') list.push(w);
        else if (w.name) list.push(w.name);
      });
    }
    if (armObj.samSystems && Array.isArray(armObj.samSystems)) {
      armObj.samSystems.forEach((s: any) => {
        if (s.name) list.push(`${s.name} (${s.cellsCount || s.totalCapacity || ''} cells)`);
      });
    }
    if (armObj.ciwsSystems && Array.isArray(armObj.ciwsSystems)) {
      armObj.ciwsSystems.forEach((c: any) => {
        if (c.name) list.push(c.name);
      });
    }
    if (dims.warheadType) {
      list.push(`Warhead: ${dims.warheadType}${dims.warheadWeightKg ? ' (' + dims.warheadWeightKg + ' kg)' : ''}`);
    }
    if (ad.interceptorReference?.missileDesignation) {
      list.push(`${ad.interceptorReference.missileDesignation} (${ad.interceptorReference.guidanceMethod || 'Guided'})`);
    }
    if (kmMap.has('warhead weight')) {
      list.push(`Warhead Payload: ${kmMap.get('warhead weight')}`);
    }
    if (list.length > 0) mainArm = list;
  }

  // 7. Sensors & Avionics Suite
  let sensors: string[] = [];
  if (existingSpecs.sensorsAvionics && existingSpecs.sensorsAvionics.length > 0) {
    sensors = existingSpecs.sensorsAvionics.map((item: string) => {
      if (item.includes('terminalGuidance:') || item.includes('seekerType:')) {
        return item.replace(/terminalGuidance:|seekerType:/g, '').trim();
      }
      return item;
    }).filter(Boolean);
  }

  if (sensors.length === 0) {
    const list: string[] = [];
    if (sensObj.c4isrSuite) list.push(`C4ISR Suite: ${sensObj.c4isrSuite}`);
    if (sensObj.gunnerSight) list.push(`Gunner Sight: ${sensObj.gunnerSight}`);
    if (sensObj.commanderPanoramicSight) list.push(`Commander Sight: ${sensObj.commanderPanoramicSight}`);
    if (sensObj.fireControlSystem) list.push(`FCS: ${sensObj.fireControlSystem}`);
    if (sensObj.battleManagementSystem) list.push(`BMS: ${sensObj.battleManagementSystem}`);
    if (sensObj.radar) list.push(`Radar: ${typeof sensObj.radar === 'string' ? sensObj.radar : (sensObj.radar.model || sensObj.radar.name || 'Multifunction Radar')}`);
    if (sensObj.targeting) list.push(`Targeting: ${sensObj.targeting}`);
    if (sensObj.ew) list.push(`EW Suite: ${sensObj.ew}`);
    if (sensObj.guidanceSystems && Array.isArray(sensObj.guidanceSystems)) {
      list.push(`Guidance: ${sensObj.guidanceSystems.join(', ')}`);
    }
    if (sensObj.terminalGuidance) list.push(`Terminal Guidance: ${sensObj.terminalGuidance}`);
    if (sensObj.seekerType) list.push(`Seeker Type: ${sensObj.seekerType}`);
    if (ad.radarAndSensors?.radarArchitecture) list.push(`Radar: ${ad.radarAndSensors.radarArchitecture}`);
    if (kmMap.has('targeting')) list.push(`Targeting & Guidance: ${kmMap.get('targeting')}`);
    if (list.length > 0) sensors = list;
  }

  // Assemble consolidated formatted SpecMetric array
  const formattedKeyMetrics: SpecMetric[] = [];
  
  // Include raw key metrics from source
  rawKeyMetrics.forEach((km: any) => {
    if (km && km.label && km.value !== undefined && km.value !== null) {
      formattedKeyMetrics.push({
        label: km.label,
        value: km.unit ? `${km.value} ${km.unit}`.trim() : String(km.value).trim(),
        highlight: km.highlight || false,
      });
    }
  });

  // Ensure core metrics are present in keyMetrics if available
  if (rangeVal && rangeVal !== 'Not publicly disclosed' && !formattedKeyMetrics.some(m => m.label.toLowerCase().includes('range'))) {
    formattedKeyMetrics.push({ label: 'Operational Range', value: rangeVal, highlight: true });
  }
  if (speedVal && speedVal !== 'Not publicly disclosed' && !formattedKeyMetrics.some(m => m.label.toLowerCase().includes('speed'))) {
    formattedKeyMetrics.push({ label: 'Max Speed', value: speedVal, highlight: true });
  }
  if (weightVal && weightVal !== 'Not publicly disclosed' && !formattedKeyMetrics.some(m => m.label.toLowerCase().includes('weight') || m.label.toLowerCase().includes('displacement'))) {
    formattedKeyMetrics.push({ label: 'Weight / Displacement', value: weightVal });
  }
  if (crewVal && crewVal !== 'N/A' && crewVal !== 'Unknown' && !formattedKeyMetrics.some(m => m.label.toLowerCase().includes('crew'))) {
    formattedKeyMetrics.push({ label: 'Crew Complement', value: crewVal });
  }

  return {
    ...existingSpecs,
    crew: crewVal || 'N/A',
    weightDisplacement: weightVal || 'Not publicly disclosed',
    maxSpeed: speedVal || 'Not publicly disclosed',
    operationalRange: rangeVal || 'Not publicly disclosed',
    propulsionPower: powerVal || 'Not publicly disclosed',
    mainArmament: mainArm,
    sensorsAvionics: sensors,
    entryIntoService: existingSpecs.entryIntoService || a.serviceEntryYear || a.specs?.serviceEntryYear || a.serviceEntry || 'Not specified',
    primaryRole: existingSpecs.primaryRole || a.primaryRole || a.subcategory || 'Tactical Military System',
    manufacturer: existingSpecs.manufacturer || a.manufacturer || a.originCountries?.[0] || 'Defense Industrial Sector',
    keyMetrics: formattedKeyMetrics,
  };
}

// Helper to normalize and ensure canonical record consistency
function buildCanonicalDatabase(): Asset[] {
  const seenIds = new Set<string>();
  const verifiedAssets: Asset[] = [];

  ALL_CANONICAL_RAW_ASSETS.forEach(a => {
    // Avoid duplicate master asset IDs
    if (seenIds.has(a.id)) return;
    seenIds.add(a.id);

    // Validate origin country existence — NO silent default
    const primaryOrigin = a.originCountry || a.originCountries?.[0];
    if (!primaryOrigin) {
      throw new Error(`Asset ${a.id} is missing originCountries — cannot build canonical record`);
    }

    // Validate data confidence existence — NO silent default
    if (!a.dataConfidence) {
      throw new Error(`Asset ${a.id} is missing dataConfidence — explicit confidence level required`);
    }

    // Resolve verified image data or empty fallback
    const resolvedImg = resolveVerifiedImages(a.id);

    const originList = a.originCountries && a.originCountries.length > 0 ? a.originCountries : [primaryOrigin];
    const imagesToUse = a.images && a.images.length > 0 ? a.images : resolvedImg.images;
    const primaryImg = a.image || (imagesToUse.length > 0 ? imagesToUse[0].url : undefined);

    const canonicalAsset: Asset = {
      ...a,
      slug: a.slug || a.id,
      officialDesignation: a.officialDesignation || a.name,
      commonName: a.commonName || a.name,
      aliases: a.aliases && a.aliases.length > 0 ? a.aliases : [a.name, a.commonName || a.name],
      domain: a.domain || (
        a.branchId === 'army' ? 'LAND' :
        a.branchId === 'air-force' ? 'AIR' :
        a.branchId === 'navy' ? 'NAVY' :
        a.branchId === 'missiles' ? 'MISSILES' :
        a.branchId === 'air-defence' ? 'AIR-DEFENCE' :
        a.branchId === 'radar' ? 'RADAR' :
        a.branchId === 'electronic-warfare' ? 'ELECTRONIC-WARFARE' :
        a.branchId === 'unmanned' ? 'UNMANNED' :
        a.branchId === 'c4isr' ? 'C4ISR' : 'LAND'
      ),
      originCountry: primaryOrigin,
      originCountries: originList,
      developerCountry: a.developerCountry || primaryOrigin,
      developmentCountries: a.developmentCountries || originList,
      manufacturerCountry: a.manufacturerCountry || primaryOrigin,
      manufacturerCountries: a.manufacturerCountries || originList,
      developer: a.developer,
      manufacturer: a.manufacturer,
      operatorCountries: (a.operatorCountries || originList).map(c => {
        if (typeof c === 'string' && (c.startsWith("('") || c.startsWith("(\""))) {
          const m = c.match(/\('(.*?)',|\("(.*?)",/);
          if (m) return m[1] || m[2];
        }
        return c;
      }),
      serviceEntry: a.serviceEntry || a.specs?.entryIntoService || (a.airDefenceSpecs?.serviceEntryYear ? String(a.airDefenceSpecs.serviceEntryYear) : undefined),
      formerOperatorCountries: a.formerOperatorCountries || [],
      exportCustomerCountries: a.exportCustomerCountries || a.exportCustomers || [],
      jointDevelopmentCountries: a.jointDevelopmentCountries || [],
      licensedProductionCountries: a.licensedProductionCountries || [],
      services: a.services || [
        a.branchId === 'army' ? 'Army' :
        a.branchId === 'air-force' ? 'Air Force' :
        a.branchId === 'navy' ? 'Navy' : 'Joint'
      ],
      status: a.status || 'Operational',
      currentRelevance: a.currentRelevance || 'CURRENT',
      dataConfidence: a.dataConfidence,
      images: imagesToUse,
      imageStatus: a.imageStatus || (imagesToUse.length > 0 ? 'verified' : 'unavailable'),
      imageNotice: a.imageNotice || (imagesToUse.length > 0 ? undefined : 'No verified public image available.'),
      image: primaryImg,
      imageCredit: a.imageCredit || resolvedImg.credit,
      imageLicense: a.imageLicense || resolvedImg.license,
      sources: a.sources || [],
      lastVerified: a.lastVerified || '2026-08-15',
      specs: extractCanonicalSpecs(a),
      ratings: a.ratings || {
        capability: 3,
        reliability: 3,
        maintainability: 3,
        survivability: 3,
        rangeMobility: 3,
        costEfficiency: 3,
        combatMaturity: 3,
        upgradePotential: 3
      },
      overallTier: a.overallTier || 'Good',
    };

    verifiedAssets.push(canonicalAsset);
  });

  // Preserve explicit editorial rankInCategory set per record.
  // Fall back to auto-numbering only if unranked, and track max ranks.
  const categoryRankCounters: Record<string, number> = {};
  verifiedAssets.forEach(a => {
    if (!a.rankInCategory || a.rankInCategory <= 0) {
      categoryRankCounters[a.categoryId] = (categoryRankCounters[a.categoryId] || 0) + 1;
      a.rankInCategory = categoryRankCounters[a.categoryId];
    } else {
      categoryRankCounters[a.categoryId] = Math.max(categoryRankCounters[a.categoryId] || 0, a.rankInCategory);
    }
  });

  return verifiedAssets;
}

export const ASSETS: Asset[] = buildCanonicalDatabase();

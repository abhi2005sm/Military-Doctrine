import { BaseMilitaryRecord, MountedWeaponRef } from "./core";

export type AirDefenceCategory =
  | "VSHORAD"
  | "SHORAD"
  | "MRAD"
  | "LRAD"
  | "HIGH_ALTITUDE"
  | "AREA_DEFENCE"
  | "ABMD"
  | "COUNTER_UAS";

export interface AirDefenceSystemSpecs extends BaseMilitaryRecord {
  domain: "AIR_DEFENCE";
  airDefenceCategory: AirDefenceCategory;
  tierClassification:
    | "Man-Portable (MANPADS)"
    | "Mobile Self-Propelled Gun/Missile"
    | "Towed Launcher Battery"
    | "Truck-Mounted TEL"
    | "Distributed Strategic Architecture"
    | "Fixed Site";

  performance: {
    minEngagementRangeKm?: number;
    maxEngagementRangeKm: number;
    minEngagementAltitudeM?: number;
    maxEngagementAltitudeM?: number;
    reactionTimeSeconds?: number;
    maxTargetSpeedMach?: number;
    simultaneousEngagements?: number;
    simultaneousTrackingLimit?: number;
  };

  batteryArchitecture: {
    launcherType: "Shoulder-Fired" | "Turret" | "Canister TEL" | "VLS" | "Containerized Box" | "Fixed Pad";
    launchersPerBattery?: number;
    readyToFirePerLauncher: number;
    totalBatteryReloadMissiles?: number;
    reloadTimeMinutes?: number;
    mobility: "Man-Portable" | "Tracked" | "Wheeled 6x6/8x8" | "Towed" | "Fixed-Site Installation";
    fordingOrAirTransportable?: string;
  };

  radarAndSensors: {
    integratedRadarModel?: string;
    radarArchitecture?: "AESA" | "PESA" | "Pulse-Doppler" | "Passive Array" | "None (Optical/Laser only)";
    radarDetectionRangeKm?: number;
    opticalTrackingChannels: string[]; // e.g., ["Thermal Imaging", "Laser Rangefinder", "Auto-Tracker"]
    electronicProtectionFeatures?: string[];
  };

  interceptorReference: {
    missileRecordId?: string; // Foreign key linking to Missiles database
    missileDesignation: string;
    guidanceMethod:
      | "Laser Beam-Riding (SACLOS)"
      | "Infrared Homing (IR/UV)"
      | "Imaging Infrared (IIR)"
      | "Active Radar Homing (ARH)"
      | "Track-Via-Missile (TVM)"
      | "Command-to-Line-of-Sight (CLOS)"
      | "Kinetic Hit-to-Kill (Ka-band/IIR)"
      | "Directed Energy / Non-Kinetic";
    warheadType: "HE Blast-Fragmentation" | "Hit-to-Kill Kinetic Dart" | "Directed Energy / Microwave / Laser" | "AHEAD Airburst Submunitions";
  };

  integratedGuns?: MountedWeaponRef;
  c4isrNetworking: {
    tacticalDataLinksSupported: string[];
    cooperativeEngagementCapable: boolean;
  };
}

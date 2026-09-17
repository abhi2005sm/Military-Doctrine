export interface SourceReference {
  title: string;
  url: string;
  publisher?: string;
  accessedDate?: string;
  classificationStatus?: string;
}

export interface BaseMilitaryRecord {
  id: string;
  name: string;
  officialDesignation: string;
  alternateNames?: string[];
  domain: string;
  category: string;
  subcategory?: string;
  country?: string;
  manufacturer?: string;
  operator?: string[];
  serviceEntryYear?: number;
  status?: string;
  generation?: string;
  description?: string;
  sources?: SourceReference[];
}

export interface MountedWeaponRef {
  type?: string;
  designation?: string;
  weaponDesignation?: string;
  caliberMm?: number;
  rateOfFireRpm?: number;
  effectiveRangeKm?: number;
}

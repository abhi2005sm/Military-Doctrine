import { AirDefenceSystemSpecs } from '@/schema/airDefence';

export type BranchId = 
  | 'army' 
  | 'air-force' 
  | 'navy' 
  | 'missiles' 
  | 'air-defence' 
  | 'radar' 
  | 'c4isr' 
  | 'electronic-warfare' 
  | 'unmanned';

export type SectorId = BranchId;

export type TierBadge = 
  | 'World-Leading'
  | 'Very Good'
  | 'Good'
  | 'Cost-Effective'
  | 'Maintenance-Friendly'
  | 'Legacy'
  | 'Limited'
  | (string & {});

export type EraCategory = 
  | 'Cold War (1947-1991)'
  | 'Cold War / Modernized (1970-1991)'
  | 'Modern (1992-2015)'
  | 'Next-Gen (2016-Present)'
  | 'Legacy System'
  | 'Legacy / Historical'
  | (string & {});

export type DevelopmentStatus =
  | 'Concept'
  | 'Prototype'
  | 'Testing'
  | 'Production'
  | 'Operational'
  | 'Upgrade'
  | 'Retired'
  | 'Cancelled'
  | 'Development'
  | 'In Development'
  | (string & {});

export type ServiceBranchTag = 'Army' | 'Air Force' | 'Navy' | 'Joint' | 'Other' | (string & {});

export interface RatingScores {
  capability: number;        // 1-5 scale
  reliability: number;       // 1-5 scale
  maintainability: number;   // 1-5 scale
  survivability: number;     // 1-5 scale
  rangeMobility: number;     // 1-5 scale
  costEfficiency: number;    // 1-5 scale
  combatMaturity: number;    // 1-5 scale
  upgradePotential: number;  // 1-5 scale
  offensive?: number;        // 1-5 scale
  defensive?: number;        // 1-5 scale
  precision?: number;        // 1-5 scale
  technology?: number;       // 1-5 scale
  logistics?: number;        // 1-5 scale
}

export interface SpecMetric {
  label: string;
  value: string;
  unit?: string;
  highlight?: boolean;
}

export interface CategorySpecs {
  // General & Category Specific
  crew?: string;
  length?: string;             // in meters or text
  widthBeam?: string;          // in meters or text
  heightDraft?: string;        // in meters or text
  weightDisplacement?: string; // in kg/tons
  enginePower?: string;        // in kW / hp
  maxSpeed?: string;           // in km/h / knots / Mach
  cruiseSpeed?: string;
  operationalRange?: string;   // in km
  serviceCeilingDepth?: string;// in m
  
  // Weapons & Electronics
  mainArmament?: string[];
  secondaryArmament?: string[];
  payloadHardpoints?: string[];
  sensorsAvionics?: string[];
  electronicWarfareSuite?: string[];
  radarSystem?: string[];
  protectionArmor?: string[];
  
  // Meta
  entryIntoService?: string;
  manufacturer?: string;
  primaryRole?: string;
  keyMetrics?: (SpecMetric | string)[];
  [key: string]: any;
}

export interface AssetImage {
  url: string;
  sourceUrl?: string;
  sourceName?: string;
  photographer?: string;
  credit: string;
  license: string;
  copyright?: string;
  imageType?: 'photo' | 'official-diagram' | 'technical-drawing' | 'satellite' | 'other' | string;
  verified?: boolean;
  verifiedAt?: string;
  angle?: string;       // e.g. "Front", "Side", "Rear", "Top / Overhead", "Front 3/4", "Rear 3/4", "Operational", "Interior", "MULTIPLE VIEWS"
  imageStatus?: 'verified' | 'unverified' | 'unavailable';
  type?: string;
}

export interface SourceItem {
  title: string;
  url: string;
  publisher: string;
  sourceType: 'official' | 'government' | 'reference' | 'defence-publication' | string;
  accessedAt: string;
  publicationDate?: string;
  accessDate?: string;
  claimSupported?: string;
}

export interface VariantItem {
  id?: string;
  name: string;
  designation?: string;
  description?: string;
  serviceEntry?: string;
  variantType?: string;
}

export interface TimelineData {
  firstAnnouncement?: string;
  developmentStart?: string;
  firstPrototype?: string;
  firstTest?: string;
  firstFlightTest?: string;
  firstFlight?: string;
  productionStart?: string;
  serviceEntry?: string;
  retirement?: string;
  currentStatus?: string;
  lastKnownUpgrade?: string;
}

export interface AnalyticalSection {
  capabilitySummary: string;
  primaryStrengths: string[];
  knownLimitations: string[];
  technologyAssessment: string;
  operationalRole: string;
  logisticsSupport?: string;
  modernizationPotential?: string;
  exportSignificance?: string;
  ecosystemIntegration?: string;
  comparisonWithSimilar?: string;
  bestSuitedFor: string[];
}

export interface SystemRelationships {
  radarIds?: string[];
  missileIds?: string[];
  c4isrIds?: string[];
  airDefenceIds?: string[];
  parentSystemId?: string;
  childVariantIds?: string[];
  usedBy?: ServiceBranchTag[];
  operatedBy?: string[];
  developedBy?: string[];
  manufacturedBy?: string[];
  variantOf?: string;
  parentPlatform?: string;
  sameFamily?: string[];
  relatedSystem?: string[];
  usedWith?: string[];
  carrierFor?: string[];
  sensorOn?: string[];
  weaponOn?: string[];
}

export type MasterStatus =
  | 'CURRENT'
  | 'MODERNIZED'
  | 'EMERGING'
  | 'DEVELOPMENT'
  | 'PROTOTYPE'
  | 'TRIALS'
  | 'LEGACY'
  | 'RETIRED'
  | 'CANCELLED'
  | DevelopmentStatus
  | (string & {});

export type DataConfidence =
  | 'VERIFIED'
  | 'HIGH'
  | 'MEDIUM'
  | 'LOW'
  | 'ESTIMATED'
  | 'DISPUTED'
  | 'NOT_PUBLICLY_DISCLOSED'
  | 'NOT-PUBLICLY-DISCLOSED'
  | (string & {});

export interface Asset {
  id: string;
  slug?: string;
  name: string;
  officialDesignation?: string;
  commonName?: string;
  aliases?: string[];
  natoName?: string;
  natoReportingName?: string;
  manufacturerDesignation?: string;
  exportDesignations?: string[];

  familyName?: string;
  parentPlatform?: string;
  variantOf?: string;
  variantType?: string;

  domain?: 'LAND' | 'AIR' | 'AIR-FORCE' | 'NAVY' | 'MISSILES' | 'AIR-DEFENCE' | 'RADAR' | 'C4ISR' | 'ELECTRONIC-WARFARE' | 'UNMANNED';
  branchId: BranchId;
  categoryId: string;
  categoryName: string;
  category?: string;
  subcategory: string;
  type?: string;
  rankInCategory: number;    // 1 to 30
  rankingRationale?: string; // Editorial / capability justification for ranking

  roles?: string[];
  primaryRole?: string;
  secondaryRoles?: string[];
  missions?: string[];
  missionTypes?: string[];
  operatingEnvironment?: string[] | string;
  operationalEnvironment?: string;

  countryOfOrigin?: string;
  originCountry?: string;
  originCountries: string[];
  manufacturerCountry?: string;
  manufacturerCountries?: string[];
  developerCountry?: string;
  developerCountries?: string[];
  developmentCountries?: string[];
  manufacturer?: string;
  developer?: string;
  designer?: string;

  operators?: string[];
  operatorCountries?: string[];
  formerOperators?: string[];
  formerOperatorCountries?: string[];
  exportCustomers?: string[];
  exportCustomerCountries?: string[];
  jointDevelopmentCountries?: string[];
  licensedProductionCountries?: string[];

  generation?: string;       // e.g. "5th Generation", "Gen 4.5", "AESA / Modern Tech Level"
  era: EraCategory;

  developmentStart?: string;
  prototype?: string;
  firstTest?: string;
  firstFlight?: string;
  productionStart?: string;
  serviceEntry?: string;

  upgradePrograms?: string[];
  modernizationPrograms?: string[];

  status?: MasterStatus;
  currentRelevance?: MasterStatus;

  searchKeywords?: string[];
  tags?: string[];

  services?: ServiceBranchTag[];
  timeline?: TimelineData;
  shortDescription: string;
  fullOverview: string;
  classification?: 'Strategic' | 'Operational' | 'Tactical';

  images: AssetImage[];      // multi-angle / verified military imagery
  imageStatus?: 'verified' | 'unverified' | 'unavailable';
  imageNotice?: string;
  image?: string;            // fallback primary image URL
  imageCredit?: string;
  imageLicense?: string;

  specifications?: CategorySpecs;
  specs: CategorySpecs;
  airDefenceSpecs?: AirDefenceSystemSpecs;
  ratings: RatingScores;
  overallTier: TierBadge;

  analysis?: AnalyticalSection;
  relationships?: SystemRelationships;
  comparableSystems?: string[];
  relatedSystems?: string[];
  relatedAssetIds?: string[];
  variants?: VariantItem[];
  sources?: SourceItem[];
  sourceCitation: string;

  dataConfidence?: DataConfidence;
  confidence?: 'High' | 'Medium' | 'Low' | DataConfidence;
  lastVerified?: string;
}

export interface Category {
  id: string;
  branchId: BranchId;
  name: string;
  code: string;
  description: string;
  subcategories: string[];
  iconName: string;
  targetCount?: number;
  sampleAssetIds?: string[];
}

export interface Branch {
  id: BranchId;
  name: string;
  code: string;
  subtitle: string;
  iconName: string;
  description: string;
  primaryRole: string;
  assetCount: number;
  categoryCount: number;
  targetCount?: number;
  actualCount?: number;
  approvedCount?: number;
  featuredAssetIds: string[];
}

export interface FilterOptions {
  searchQuery: string;
  branchId?: BranchId;
  categoryId?: string;
  country?: string;
  originCountry?: string;
  operatorCountry?: string;
  manufacturerCountry?: string;
  developerCountry?: string;
  jointDevelopmentCountry?: string;
  exportCustomer?: string;
  service?: ServiceBranchTag;
  status?: DevelopmentStatus;
  generation?: string;
  era?: string;
  tier?: TierBadge;
  sortBy?: 'rank' | 'rating' | 'name-asc' | 'name-desc' | 'year-desc' | 'capability' | 'range' | 'speed' | 'weight';
}

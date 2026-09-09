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
  | 'Legacy';

export type EraCategory = 
  | 'Cold War (1947-1991)'
  | 'Modern (1992-2015)'
  | 'Next-Gen (2016-Present)'
  | 'Legacy System';

export type DevelopmentStatus =
  | 'Concept'
  | 'Prototype'
  | 'Testing'
  | 'Production'
  | 'Operational'
  | 'Upgrade'
  | 'Retired'
  | 'Cancelled';

export type ServiceBranchTag = 'Army' | 'Air Force' | 'Navy' | 'Joint' | 'Other';

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
  keyMetrics?: SpecMetric[];
  [key: string]: any;
}

export interface AssetImage {
  url: string;
  sourceUrl?: string;
  sourceName?: string;
  angle?: string;       // e.g. "Front Three-Quarter", "Side Profile", "Top Down / Overhead", "Rear"
  credit: string;
  license: string;
  imageStatus?: 'verified' | 'unverified';
  type?: string;
}

export interface SourceItem {
  title: string;
  url: string;
  publisher: string;
  sourceType: 'official' | 'government' | 'reference' | 'defence-publication';
  accessedAt: string;
}

export interface VariantItem {
  id?: string;
  name: string;
  designation?: string;
  description?: string;
  serviceEntry?: string;
}

export interface TimelineData {
  firstAnnouncement?: string;
  developmentStart?: string;
  firstPrototype?: string;
  firstFlightTest?: string;
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
}

export interface Asset {
  id: string;
  name: string;
  officialDesignation?: string;
  commonName?: string;
  natoReportingName?: string;
  branchId: BranchId;
  categoryId: string;
  categoryName: string;
  subcategory: string;
  rankInCategory: number;    // 1 to 30
  originCountries: string[];
  manufacturerCountry?: string;
  developerCountry?: string;
  manufacturer?: string;
  developer?: string;
  designer?: string;
  operatorCountries?: string[];
  formerOperators?: string[];
  exportCustomers?: string[];
  services?: ServiceBranchTag[];
  status?: DevelopmentStatus;
  timeline?: TimelineData;
  era: EraCategory;
  shortDescription: string;
  fullOverview: string;
  primaryRole?: string;
  secondaryRoles?: string[];
  missionTypes?: string[];
  operationalEnvironment?: string;
  classification?: 'Strategic' | 'Operational' | 'Tactical';
  generation?: string;       // e.g. "5th Generation", "Gen 4.5", "AESA / Modern Tech Level"
  images: AssetImage[];      // 1 for weapons, 3+ for vehicles/ships/aircraft
  image?: string;            // fallback primary image URL
  imageCredit?: string;
  imageLicense?: string;
  specs: CategorySpecs;
  ratings: RatingScores;
  overallTier: TierBadge;
  analysis?: AnalyticalSection;
  relationships?: SystemRelationships;
  variants?: VariantItem[];
  sources?: SourceItem[];
  sourceCitation: string;
  confidence?: 'High' | 'Medium' | 'Low';
  lastVerified?: string;
  relatedAssetIds?: string[];
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
  featuredAssetIds: string[];
}

export interface FilterOptions {
  searchQuery: string;
  branchId?: BranchId;
  categoryId?: string;
  country?: string;
  operatorCountry?: string;
  service?: ServiceBranchTag;
  status?: DevelopmentStatus;
  generation?: string;
  era?: string;
  tier?: TierBadge;
  sortBy: 'rating' | 'name-asc' | 'name-desc' | 'year-desc' | 'capability' | 'range' | 'speed' | 'weight';
}

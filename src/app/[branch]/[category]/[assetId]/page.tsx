'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAssetById, getCategoryById, getBranchById, getRelatedAssets, calculateAverageRating } from '../../../../lib/catalogService';
import { ASSETS } from '../../../../data/assets';
import { TierBadge } from '../../../../components/ui/TierBadge';
import { RatingBarChart } from '../../../../components/ui/RatingBarChart';
import { AssetGallery } from '../../../../components/catalog/AssetGallery';
import { AssetCard } from '../../../../components/catalog/AssetCard';
import { AssetDetailActions } from '../../../../components/catalog/AssetDetailActions';
import { ChevronRight, Globe, FileText, ArrowLeft, Award, ShieldAlert, Cpu, CheckCircle2, AlertTriangle, Layers, Calendar, ExternalLink, RefreshCw } from 'lucide-react';

interface AssetDetailPageProps {
  params: {
    branch: string;
    category: string;
    assetId: string;
  };
}

export default function AssetDetailPage({ params }: AssetDetailPageProps) {
  const asset = getAssetById(params.assetId);
  const [unitSystem, setUnitSystem] = useState<'SI' | 'Imperial'>('SI');

  if (!asset) {
    notFound();
  }

  const branch = getBranchById(asset.branchId)!;
  const category = getCategoryById(asset.categoryId)!;
  const relatedAssets = getRelatedAssets(asset);
  const avgRating = calculateAverageRating(asset);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 bg-slate-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between gap-2 font-mono text-xs text-slate-500">
        <div className="flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-slate-900 transition-colors">Catalog</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/${branch.id}`} className="hover:text-slate-900 transition-colors capitalize">{branch.name}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/${branch.id}/${category.id}`} className="hover:text-slate-900 transition-colors">{category.name}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold">{asset.name}</span>
        </div>

        <Link
          href={`/${branch.id}/${category.id}`}
          className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 font-mono text-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Category</span>
        </Link>
      </div>

      {/* Main Grid: Left Column Gallery & Facts, Right Column Specifications & Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Sticky Media Gallery & Key Specs (5 cols) */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-20">
          <div className="bg-white border border-slate-200 p-4 space-y-4 rounded-sm shadow-xs">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="px-2.5 py-0.5 bg-slate-900 text-white font-bold rounded-sm">
                RANK #{asset.rankInCategory} IN {category.code}
              </span>
              <TierBadge tier={asset.overallTier} size="md" />
            </div>

            {/* Multi-Angle Real Image & Vector Silhouette Gallery */}
            <AssetGallery
              images={asset.images}
              assetName={asset.name}
              categoryName={category.name.toUpperCase()}
              categoryId={asset.categoryId}
              branchId={asset.branchId}
              originCountries={asset.originCountries}
              manufacturer={asset.manufacturer || asset.originCountries[0]}
              rankInCategory={asset.rankInCategory}
              fallbackImage={asset.image}
              fallbackCredit={asset.imageCredit}
              fallbackLicense={asset.imageLicense}
            />

            {/* Service & Operator Badges */}
            <div className="p-3 bg-slate-50 border border-slate-200 font-mono text-xs space-y-2 rounded-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-[10px] font-sans uppercase font-bold">Primary Origin</span>
                <span className="font-bold text-slate-900">{asset.originCountries.join(', ')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-[10px] font-sans uppercase font-bold">Manufacturer</span>
                <span className="font-semibold text-slate-800">{asset.manufacturer || asset.originCountries[0]}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-[10px] font-sans uppercase font-bold">Status</span>
                <span className="px-2 py-0.5 bg-[#1B3A5C] text-white text-[10px] font-bold rounded-xs">
                  {asset.status || 'Operational'}
                </span>
              </div>
            </div>

            {/* Compare Action Button */}
            <div className="pt-2">
              <AssetDetailActions assetId={asset.id} />
            </div>
          </div>
        </div>

        {/* Right Column: Record Identity, Overview, Specs, Analysis, Sources (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Identity Header Box */}
          <div className="bg-white border border-slate-200 p-6 space-y-4 rounded-sm shadow-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap font-mono text-xs">
                <span className="px-2 py-0.5 bg-[#1B3A5C] text-white font-bold rounded-sm">
                  {category.code}
                </span>
                <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-900 rounded-sm">
                  {asset.subcategory}
                </span>
                <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 rounded-sm">
                  {asset.generation || asset.era}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                {asset.name}
              </h1>

              {asset.officialDesignation && (
                <p className="text-xs font-mono text-slate-500">
                  Official Designation: <span className="text-slate-800 font-semibold">{asset.officialDesignation}</span>
                </p>
              )}
            </div>

            {/* Origin & Service Details */}
            <div className="flex flex-wrap items-center gap-4 py-3 border-y border-slate-200 font-mono text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#1B3A5C]" />
                <span className="font-semibold text-slate-900">{asset.originCountries.join(', ')}</span>
              </div>
              <span>•</span>
              <div>
                <span className="text-slate-500">SERVICE ENTRY: </span>
                <span className="font-semibold text-slate-900">{asset.serviceEntry || asset.specs.entryIntoService || 'Unknown'}</span>
              </div>
              <span>•</span>
              <div>
                <span className="text-slate-500">MANUFACTURER: </span>
                <span className="font-semibold text-slate-900">{asset.manufacturer || asset.originCountries[0]}</span>
              </div>
            </div>

            {/* Prose Overview */}
            <div className="space-y-2 pt-1 font-sans">
              <h3 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">System Overview & Mission Role</h3>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {asset.fullOverview}
              </div>
            </div>
          </div>

          {/* Technical Specifications Table with SI / Imperial Switcher */}
          <div className="bg-white border border-slate-200 p-6 space-y-4 rounded-sm shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight font-sans uppercase flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#1B3A5C]" />
                TECHNICAL SPECIFICATIONS
              </h2>

              {/* SI / Imperial Conversion Switcher */}
              <div className="flex items-center gap-2 font-mono text-xs bg-slate-100 p-1 border border-slate-200 rounded-sm">
                <span className="text-slate-500 text-[10px] font-sans font-semibold px-1">Units:</span>
                <button
                  onClick={() => setUnitSystem('SI')}
                  className={`px-2 py-0.5 rounded-xs transition-colors ${unitSystem === 'SI' ? 'bg-[#1B3A5C] text-white font-bold' : 'text-slate-700 hover:text-slate-900'}`}
                >
                  SI Metric
                </button>
                <button
                  onClick={() => setUnitSystem('Imperial')}
                  className={`px-2 py-0.5 rounded-xs transition-colors ${unitSystem === 'Imperial' ? 'bg-[#1B3A5C] text-white font-bold' : 'text-slate-700 hover:text-slate-900'}`}
                >
                  Imperial
                </button>
              </div>
            </div>

            <div className="border border-slate-200 divide-y divide-slate-200 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-slate-50">
                <span className="font-sans font-semibold text-slate-600">Primary Mission Role:</span>
                <span className="sm:col-span-2 font-semibold text-slate-900 text-left">{asset.specs.primaryRole || asset.primaryRole || 'Tactical Combat Operations'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3">
                <span className="font-sans font-semibold text-slate-600">Crew Complement:</span>
                <span className="sm:col-span-2 text-slate-900 text-left">{asset.specs.crew || 'Unknown'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-slate-50">
                <span className="font-sans font-semibold text-slate-600">Entry Into Service:</span>
                <span className="sm:col-span-2 text-slate-900 text-left">{asset.specs.entryIntoService || 'Unknown'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3">
                <span className="font-sans font-semibold text-slate-600">Weight / Displacement:</span>
                <span className="sm:col-span-2 text-slate-900 text-left">
                  {asset.specs.weightDisplacement || 'Not publicly disclosed'}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-slate-50">
                <span className="font-sans font-semibold text-slate-600">Max Speed:</span>
                <span className="sm:col-span-2 text-slate-900 text-left">
                  {asset.specs.maxSpeed || 'Not publicly disclosed'}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3">
                <span className="font-sans font-semibold text-slate-600">Operational Range:</span>
                <span className="sm:col-span-2 text-slate-900 text-left">
                  {asset.specs.operationalRange || 'Not publicly disclosed'}
                </span>
              </div>
              {asset.specs.mainArmament && asset.specs.mainArmament.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 bg-slate-50">
                  <span className="font-sans font-semibold text-slate-600">Armament & Ordnance:</span>
                  <div className="sm:col-span-2 space-y-1 text-slate-900">
                    {asset.specs.mainArmament.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#1B3A5C]">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {asset.specs.sensorsAvionics && asset.specs.sensorsAvionics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3">
                  <span className="font-sans font-semibold text-slate-600">Sensors & Avionics Suite:</span>
                  <div className="sm:col-span-2 space-y-1 text-slate-900">
                    {asset.specs.sensorsAvionics.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#1B3A5C]">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Air Defence Domain Architecture & Interceptor Specs */}
          {asset.airDefenceSpecs && (
            <div className="bg-white border border-slate-200 p-6 space-y-4 rounded-sm shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h2 className="text-base font-bold text-slate-900 tracking-tight font-sans uppercase flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#1B3A5C]" />
                  AIR DEFENCE DOMAIN ARCHITECTURE & INTERCEPTOR SPECS
                </h2>
                <span className="px-2.5 py-0.5 bg-[#1B3A5C] text-white font-mono text-[10px] font-bold rounded-xs">
                  {asset.airDefenceSpecs.tierClassification}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                {/* Performance & Engagement Envelope */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm space-y-2">
                  <h3 className="font-sans font-bold text-[#1B3A5C] text-xs uppercase">
                    Engagement Envelope
                  </h3>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between border-b border-slate-200/60 pb-1">
                      <span className="text-slate-500">Max Engagement Range:</span>
                      <span className="font-bold text-slate-900">{asset.airDefenceSpecs.performance.maxEngagementRangeKm} km</span>
                    </div>
                    {asset.airDefenceSpecs.performance.minEngagementRangeKm && (
                      <div className="flex justify-between border-b border-slate-200/60 pb-1">
                        <span className="text-slate-500">Min Engagement Range:</span>
                        <span className="font-bold text-slate-900">{asset.airDefenceSpecs.performance.minEngagementRangeKm} km</span>
                      </div>
                    )}
                    {asset.airDefenceSpecs.performance.maxEngagementAltitudeM && (
                      <div className="flex justify-between border-b border-slate-200/60 pb-1">
                        <span className="text-slate-500">Max Engagement Altitude:</span>
                        <span className="font-bold text-slate-900">{asset.airDefenceSpecs.performance.maxEngagementAltitudeM.toLocaleString()} m</span>
                      </div>
                    )}
                    <div className="flex justify-between pb-1">
                      <span className="text-slate-500">Simultaneous Engagements:</span>
                      <span className="font-bold text-slate-900">{asset.airDefenceSpecs.performance.simultaneousEngagements || 1} Target</span>
                    </div>
                  </div>
                </div>

                {/* Battery & Launcher Architecture */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm space-y-2">
                  <h3 className="font-sans font-bold text-[#1B3A5C] text-xs uppercase">
                    Launcher Architecture
                  </h3>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between border-b border-slate-200/60 pb-1">
                      <span className="text-slate-500">Launcher Type:</span>
                      <span className="font-bold text-slate-900">{asset.airDefenceSpecs.batteryArchitecture.launcherType}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-1">
                      <span className="text-slate-500">Mobility Classification:</span>
                      <span className="font-bold text-slate-900">{asset.airDefenceSpecs.batteryArchitecture.mobility}</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-slate-500">Ready To Fire Per Launcher:</span>
                      <span className="font-bold text-slate-900">{asset.airDefenceSpecs.batteryArchitecture.readyToFirePerLauncher} Missile(s)</span>
                    </div>
                  </div>
                </div>

                {/* Interceptor Reference */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm space-y-2">
                  <h3 className="font-sans font-bold text-[#1B3A5C] text-xs uppercase">
                    Interceptor Ordnance
                  </h3>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between border-b border-slate-200/60 pb-1">
                      <span className="text-slate-500">Missile Designation:</span>
                      <span className="font-bold text-slate-900">{asset.airDefenceSpecs.interceptorReference.missileDesignation}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-1">
                      <span className="text-slate-500">Guidance Method:</span>
                      <span className="font-bold text-slate-900">{asset.airDefenceSpecs.interceptorReference.guidanceMethod}</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-slate-500">Warhead Type:</span>
                      <span className="font-bold text-slate-900">{asset.airDefenceSpecs.interceptorReference.warheadType}</span>
                    </div>
                  </div>
                </div>

                {/* Sensors & C4ISR Networking */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm space-y-2">
                  <h3 className="font-sans font-bold text-[#1B3A5C] text-xs uppercase">
                    Sensors & C4ISR Linkages
                  </h3>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between border-b border-slate-200/60 pb-1">
                      <span className="text-slate-500">Radar Architecture:</span>
                      <span className="font-bold text-slate-900">{asset.airDefenceSpecs.radarAndSensors.radarArchitecture || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-1">
                      <span className="text-slate-500">Tactical Data Links:</span>
                      <span className="font-bold text-slate-900">{asset.airDefenceSpecs.c4isrNetworking.tacticalDataLinksSupported.join(', ') || 'Standard C2'}</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-slate-500">Cooperative Engagement:</span>
                      <span className="font-bold text-[#1B3A5C]">
                        {asset.airDefenceSpecs.c4isrNetworking.cooperativeEngagementCapable ? 'Capable' : 'Not Supported'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Development Timeline */}
          {asset.timeline && (
            <div className="bg-white border border-slate-200 p-6 space-y-4 rounded-sm shadow-xs">
              <h2 className="text-base font-bold text-slate-900 tracking-tight font-sans uppercase flex items-center gap-2 border-b border-slate-200 pb-3">
                <Calendar className="w-4 h-4 text-[#1B3A5C]" />
                DEVELOPMENT & SERVICE TIMELINE
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm">
                  <span className="text-[10px] text-slate-500 uppercase font-sans font-bold block">Development Start</span>
                  <span className="font-bold text-slate-900">{asset.timeline.developmentStart || 'N/A'}</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm">
                  <span className="text-[10px] text-slate-500 uppercase font-sans font-bold block">First Prototype</span>
                  <span className="font-bold text-slate-900">{asset.timeline.firstPrototype || 'N/A'}</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm">
                  <span className="text-[10px] text-slate-500 uppercase font-sans font-bold block">Service Entry</span>
                  <span className="font-bold text-slate-900">{asset.timeline.serviceEntry || asset.specs.entryIntoService || 'N/A'}</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm">
                  <span className="text-[10px] text-slate-500 uppercase font-sans font-bold block">Current Status</span>
                  <span className="font-bold text-[#1B3A5C]">{asset.timeline.currentStatus || asset.status || 'Operational'}</span>
                </div>
              </div>
            </div>
          )}

          {/* Operator Countries */}
          {((asset.operatorCountries && asset.operatorCountries.length > 0) || asset.originCountries) && (
            <div className="bg-white border border-slate-200 p-6 space-y-4 rounded-sm shadow-xs">
              <h2 className="text-base font-bold text-slate-900 tracking-tight font-sans uppercase flex items-center gap-2 border-b border-slate-200 pb-3">
                <Globe className="w-4 h-4 text-[#1B3A5C]" />
                OPERATOR COUNTRIES ({(asset.operatorCountries || asset.originCountries).length})
              </h2>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {(asset.operatorCountries || asset.originCountries).map(country => (
                  <Link
                    key={country}
                    href={`/country?country=${encodeURIComponent(country)}`}
                    className="px-3 py-1 bg-slate-100 hover:bg-[#1B3A5C] hover:text-white border border-slate-200 text-slate-800 rounded-sm transition-colors"
                  >
                    {country}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Analytical Section */}
          {asset.analysis && (
            <div className="bg-white border border-slate-200 p-6 space-y-6 rounded-sm shadow-xs">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-base font-bold text-slate-900 tracking-tight font-sans uppercase flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-[#1B3A5C]" />
                  ANALYTICAL EVALUATION & ASSESSMENT
                </h2>
                <p className="text-xs font-mono text-slate-500 mt-0.5">
                  Factual technological evaluation based on publicly available defense datasheets
                </p>
              </div>

              <div className="space-y-4 font-sans text-xs sm:text-sm">
                <div>
                  <h4 className="font-mono font-bold text-slate-900 uppercase text-xs mb-1">Capability Summary</h4>
                  <p className="text-slate-700 leading-relaxed">{asset.analysis.capabilitySummary}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-sm space-y-2">
                    <h5 className="font-mono font-bold text-emerald-950 text-xs flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      Primary Strengths
                    </h5>
                    <ul className="space-y-1 text-slate-800 text-xs list-disc list-inside">
                      {asset.analysis.primaryStrengths.map((str, idx) => (
                        <li key={idx}>{str}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-sm space-y-2">
                    <h5 className="font-mono font-bold text-amber-950 text-xs flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                      Known Limitations
                    </h5>
                    <ul className="space-y-1 text-slate-800 text-xs list-disc list-inside">
                      {asset.analysis.knownLimitations.map((lim, idx) => (
                        <li key={idx}>{lim}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {asset.analysis.bestSuitedFor && asset.analysis.bestSuitedFor.length > 0 && (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm space-y-1">
                    <h5 className="font-mono font-bold text-slate-900 text-xs">Best Suited For</h5>
                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                      {asset.analysis.bestSuitedFor.map((item, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-white border border-slate-200 text-slate-800 rounded-xs">
                          • {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quantitative Capability Indicators */}
          <div className="bg-white border border-slate-200 p-6 space-y-4 rounded-sm shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h2 className="text-base font-bold text-slate-900 tracking-tight font-sans uppercase flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600" />
                  RELATIVE ANALYTICAL CAPABILITY INDICATORS
                </h2>
                <p className="text-[11px] font-mono text-amber-800 mt-0.5">
                  Explicit Methodology Notice: Relative analytical indicators (1.0 to 5.0 scale), not official military ratings.
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-[#1B3A5C]">
                INDEX: {avgRating} / 5.0
              </span>
            </div>

            <RatingBarChart ratings={asset.ratings} />
          </div>

          {/* Sources & Citations */}
          <div className="bg-white border border-slate-200 p-6 space-y-4 rounded-sm shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight font-sans uppercase flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#1B3A5C]" />
                AUTHORITATIVE SOURCES & REFERENCES
              </h2>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 font-mono text-[10px] font-bold rounded-xs">
                CONFIDENCE: {asset.confidence || 'HIGH'}
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {asset.sources && asset.sources.length > 0 ? (
                asset.sources.map((src, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-sm flex items-center justify-between gap-4">
                    <div>
                      <span className="font-bold text-slate-900 block">{src.title}</span>
                      <span className="text-[11px] text-slate-500">{src.publisher} • Type: {src.sourceType} • Accessed: {src.accessedAt}</span>
                    </div>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-white border border-slate-200 hover:bg-[#1B3A5C] hover:text-white transition-colors text-[11px] flex items-center gap-1 shrink-0 rounded-xs"
                    >
                      <span>Source Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))
              ) : (
                <div className="p-3 bg-slate-50 border border-slate-200 text-slate-700">
                  <span>Source Citation: {asset.sourceCitation}</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Related Systems */}
      {relatedAssets.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 tracking-tight font-sans uppercase">
              RELATED PLATFORMS & SYSTEM LINKAGES
            </h2>
            <Link
              href={`/${branch.id}/${category.id}`}
              className="font-mono text-xs font-semibold text-[#1B3A5C] hover:underline"
            >
              View Full Category Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedAssets.map((rel, index) => (
              <AssetCard key={rel.id} asset={rel} displayIndex={index + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

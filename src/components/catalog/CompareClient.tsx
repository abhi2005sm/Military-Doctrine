'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCompare } from '../../context/CompareContext';
import { ASSETS } from '../../data/assets';
import { getAssetById, calculateAverageRating, getAllCountries, getCountryProfileData } from '../../lib/catalogService';
import { getCountryProfileByName } from '../../data/countries';
import { BRANCHES } from '../../data/branches';
import { TierBadge } from '../ui/TierBadge';
import { RatingBarChart } from '../ui/RatingBarChart';
import { SlidersHorizontal, Plus, X, Trash2, Globe, Shield, ArrowRight, Check, FileText, BarChart3, Layers } from 'lucide-react';
import { BranchId } from '../../types/catalog';

type CompareMode = 'assets' | 'countries';

export function CompareClient() {
  const { compareIds, compareAssets, addToCompare, removeFromCompare, clearCompare } = useCompare();
  const [compareMode, setCompareMode] = useState<CompareMode>('assets');
  const [selectedAssetId, setSelectedAssetId] = useState('');

  // Country Comparison state (max 4 countries)
  const allCountries = useMemo(() => getAllCountries(), []);
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['United States', 'China', 'Russia', 'India']);
  const [addCountryInput, setAddCountryInput] = useState<string>('');

  const handleAddSelectedAsset = () => {
    if (selectedAssetId) {
      addToCompare(selectedAssetId);
      setSelectedAssetId('');
    }
  };

  const handleAddCountry = (country: string) => {
    if (country && !selectedCountries.includes(country) && selectedCountries.length < 4) {
      setSelectedCountries([...selectedCountries, country]);
      setAddCountryInput('');
    }
  };

  const handleRemoveCountry = (country: string) => {
    setSelectedCountries(selectedCountries.filter(c => c !== country));
  };

  const availableAssets = ASSETS.filter(a => !compareIds.includes(a.id));
  const availableCountries = allCountries.filter(c => !selectedCountries.includes(c));

  // Country stats computation for selected countries
  const countryComparisonData = useMemo(() => {
    return selectedCountries.map(cName => {
      const prof = getCountryProfileByName(cName);
      const stats = getCountryProfileData(cName);

      // Additional breakdown stats
      const countryAssets = ASSETS.filter(a =>
        a.originCountries.includes(cName) ||
        (a.operatorCountries && a.operatorCountries.includes(cName))
      );
      const worldLeadingCount = countryAssets.filter(a => a.overallTier === 'World-Leading').length;
      const nextGenCount = countryAssets.filter(a => a.era.includes('Next-Gen')).length;

      return {
        profile: prof,
        stats,
        worldLeadingCount,
        nextGenCount,
      };
    });
  }, [selectedCountries]);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 min-h-screen bg-slate-50">
      {/* Top Comparator Header */}
      <div className="bg-slate-900 text-white rounded-sm p-6 sm:p-8 border border-slate-800 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-sky-950 border border-sky-800 text-sky-400 font-mono text-xs rounded-xs">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>UNCLASSIFIED OSINT COMPARISON MATRIX</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
              {compareMode === 'assets' ? 'Side-by-Side Asset Comparison Matrix' : 'Country Defence Technology Inventory Comparator'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl font-sans leading-relaxed">
              {compareMode === 'assets'
                ? 'Compare firepower, survivability, specs, armament, and lifecycle ratings across up to 4 global military platforms.'
                : 'Compare publicly documented defence technology inventories, industrial production, and 9-sector equipment balances across up to 4 global powers.'}
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center bg-slate-950 p-1 border border-slate-800 rounded-sm font-mono text-xs shrink-0">
            <button
              onClick={() => setCompareMode('assets')}
              className={`px-3 py-1.5 rounded-xs transition-colors flex items-center gap-1.5 ${
                compareMode === 'assets' ? 'bg-[#1B3A5C] text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Platform Comparator</span>
            </button>

            <button
              onClick={() => setCompareMode('countries')}
              className={`px-3 py-1.5 rounded-xs transition-colors flex items-center gap-1.5 ${
                compareMode === 'countries' ? 'bg-[#1B3A5C] text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>Country Inventory</span>
            </button>
          </div>
        </div>

        {/* Dynamic Toolbar depending on mode */}
        {compareMode === 'assets' ? (
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-1">
              <span className="text-slate-400 shrink-0">ADD PLATFORM TO MATRIX:</span>
              <select
                value={selectedAssetId}
                onChange={e => setSelectedAssetId(e.target.value)}
                className="w-full sm:w-auto flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-xs text-white text-xs focus:outline-none focus:border-sky-500"
              >
                <option value="">Select an asset from catalog...</option>
                {availableAssets.map(a => (
                  <option key={a.id} value={a.id}>
                    [{a.branchId.toUpperCase()}] {a.name} ({a.categoryName} - {a.originCountries.join(', ')})
                  </option>
                ))}
              </select>
              <button
                onClick={handleAddSelectedAsset}
                disabled={!selectedAssetId}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-semibold rounded-xs transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Platform</span>
              </button>
            </div>

            {compareAssets.length > 0 && (
              <button
                onClick={clearCompare}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-red-950 text-slate-300 hover:text-red-300 border border-slate-700 rounded-xs transition-colors shrink-0"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear Selection</span>
              </button>
            )}
          </div>
        ) : (
          <div className="pt-4 border-t border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-1">
                <span className="text-slate-400 shrink-0">ADD NATION TO MATRIX:</span>
                <select
                  value={addCountryInput}
                  onChange={e => handleAddCountry(e.target.value)}
                  disabled={selectedCountries.length >= 4}
                  className="w-full sm:w-auto flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-xs text-white text-xs focus:outline-none focus:border-sky-500"
                >
                  <option value="">Select a nation to compare (Max 4)...</option>
                  {availableCountries.map(c => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preset Buttons */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-slate-400 text-[11px]">PRESETS:</span>
                <button
                  onClick={() => setSelectedCountries(['United States', 'China', 'Russia', 'India'])}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xs text-[11px]"
                >
                  Tier 1 Leaders
                </button>
                <button
                  onClick={() => setSelectedCountries(['Germany', 'France', 'United Kingdom', 'Italy'])}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xs text-[11px]"
                >
                  Major European
                </button>
                <button
                  onClick={() => setSelectedCountries(['Japan', 'South Korea', 'Australia', 'Türkiye'])}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xs text-[11px]"
                >
                  Indo-Pacific & Mid-East
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      {compareMode === 'assets' ? (
        /* ASSET COMPARISON MATRIX VIEW */
        compareAssets.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-sm p-12 text-center space-y-4 shadow-card">
            <SlidersHorizontal className="w-12 h-12 text-slate-300 mx-auto" />
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 font-sans">
                No assets selected for platform comparison
              </h3>
              <p className="text-xs font-mono text-slate-500 max-w-md mx-auto">
                Select assets above or click &quot;Compare&quot; on any catalog card to add platforms to this matrix.
              </p>
            </div>
            <div className="flex justify-center gap-2 pt-2 flex-wrap font-mono text-xs">
              {['m1a2-abrams', 'leopard-2a7', 'lockheed-martin-f-35a-lightning-ii-fighter-aircraft', 'dassault-rafale-f4-fighter-aircraft'].map(presetId => {
                const item = getAssetById(presetId);
                if (!item) return null;
                return (
                  <button
                    key={presetId}
                    onClick={() => addToCompare(presetId)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 rounded-xs transition-colors"
                  >
                    + Add {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-8 overflow-x-auto">
            {/* Asset Cards Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-w-[700px]">
              {compareAssets.map(asset => {
                const avgRating = calculateAverageRating(asset);
                return (
                  <div
                    key={asset.id}
                    className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-card flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/10] bg-slate-900">
                      <img
                        src={asset.images?.[0]?.url || asset.image || 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'}
                        alt={asset.name}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => removeFromCompare(asset.id)}
                        className="absolute top-2 right-2 p-1.5 bg-slate-950/80 hover:bg-red-600 text-white rounded-xs transition-colors"
                        title="Remove from matrix"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-slate-950/80 text-slate-200 text-[10px] font-mono rounded-xs border border-slate-700">
                        {asset.branchId.toUpperCase()} • {asset.categoryName}
                      </div>
                    </div>

                    <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-1">
                          <h3 className="font-bold text-slate-900 text-base line-clamp-1">{asset.name}</h3>
                          <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded-xs border">
                            {avgRating}
                          </span>
                        </div>
                        <TierBadge tier={asset.overallTier} size="sm" />
                        <div className="text-[11px] font-mono text-slate-500 truncate pt-1">
                          {asset.originCountries.join(', ')} • {asset.era}
                        </div>
                      </div>

                      <Link
                        href={`/${asset.branchId}/${asset.categoryId}/${asset.id}`}
                        className="w-full inline-flex items-center justify-center gap-1 bg-slate-900 hover:bg-sky-900 text-white font-mono text-xs py-2 rounded-xs transition-colors"
                      >
                        <span>Full Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Specifications Matrix Table */}
            <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-card font-mono text-xs min-w-[700px]">
              <div className="p-4 bg-slate-900 text-white font-bold border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>SIDE-BY-SIDE TECHNICAL SPECIFICATIONS MATRIX</span>
                </div>
              </div>

              <div className="divide-y divide-slate-200">
                <div className="grid grid-cols-5 p-3 hover:bg-slate-50 transition-colors">
                  <div className="font-bold text-slate-700">Service Entry</div>
                  {compareAssets.map(a => (
                    <div key={a.id} className="text-slate-900 font-medium px-2">{a.specs.entryIntoService}</div>
                  ))}
                </div>

                <div className="grid grid-cols-5 p-3 bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="font-bold text-slate-700">Crew Size</div>
                  {compareAssets.map(a => (
                    <div key={a.id} className="text-slate-900 px-2">{a.specs.crew}</div>
                  ))}
                </div>

                <div className="grid grid-cols-5 p-3 hover:bg-slate-50 transition-colors">
                  <div className="font-bold text-slate-700">Manufacturer</div>
                  {compareAssets.map(a => (
                    <div key={a.id} className="text-slate-900 px-2">{a.specs.manufacturer}</div>
                  ))}
                </div>

                <div className="grid grid-cols-5 p-3 bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="font-bold text-slate-700">Primary Role</div>
                  {compareAssets.map(a => (
                    <div key={a.id} className="text-slate-900 px-2 line-clamp-2">{a.specs.primaryRole}</div>
                  ))}
                </div>

                <div className="grid grid-cols-5 p-3 hover:bg-slate-50 transition-colors">
                  <div className="font-bold text-slate-700">Engine / Power</div>
                  {compareAssets.map(a => (
                    <div key={a.id} className="text-slate-900 px-2 line-clamp-2">{a.specs.propulsionPower || 'N/A'}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rating Overlay Section */}
            <div className="bg-white border border-slate-200 rounded-sm p-6 space-y-6 shadow-card min-w-[700px]">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="font-sans font-extrabold text-lg text-slate-900">
                  8-CRITERIA COMPARATIVE RATING OVERLAY
                </h3>
                <span className="font-mono text-xs text-slate-500">1.0 to 5.0 Rating Scale</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {compareAssets.map(asset => (
                  <div key={asset.id} className="space-y-3 bg-slate-50 p-4 border border-slate-200 rounded-xs">
                    <div className="font-bold text-slate-900 text-sm truncate font-mono">{asset.name}</div>
                    <RatingBarChart ratings={asset.ratings} compact={true} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      ) : (
        /* COUNTRY DEFENCE TECHNOLOGY INVENTORY COMPARATOR VIEW */
        <div className="space-y-8">
          {/* Objective Disclaimer Notice */}
          <div className="bg-sky-50 border border-sky-200 p-4 rounded-sm font-mono text-xs text-sky-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-sky-700 shrink-0" />
              <span>
                <strong>PUBLIC DEFENCE TECHNOLOGY INVENTORY COMPARISON MATRIX:</strong> This tool presents publicly documented military equipment inventories and industrial technology balances. It does NOT forecast or model combat outcomes.
              </span>
            </div>
          </div>

          {/* Side-by-Side Country Inventory Grid */}
          <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-xs font-mono text-xs">
            <div className="p-4 bg-[#0B0E14] text-white font-bold border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-400" />
                <span>SIDE-BY-SIDE COUNTRY INVENTORY BALANCE</span>
              </div>
              <span className="text-slate-400 text-xs">Comparing {selectedCountries.length} Nations</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-slate-800">
                    <th className="p-4 w-1/5 font-sans uppercase text-[11px] text-slate-400">Country Profile</th>
                    {countryComparisonData.map(item => (
                      <th key={item.stats.countryName} className="p-4 text-center border-l border-slate-800">
                        <div className="space-y-1">
                          <div className="text-2xl">{item.profile?.flagEmoji || '🌐'}</div>
                          <div className="font-bold font-sans text-base text-white">{item.stats.countryName}</div>
                          <div className="text-[10px] text-sky-400">{item.profile?.priorityTier || 'Regional Power'}</div>
                          <button
                            onClick={() => handleRemoveCountry(item.stats.countryName)}
                            className="text-[10px] text-rose-400 hover:text-rose-200 underline mt-1"
                          >
                            Remove
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-900">
                  {/* Region & Tier */}
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold bg-slate-50">World Region</td>
                    {countryComparisonData.map(item => (
                      <td key={item.stats.countryName} className="p-3 text-center border-l border-slate-200">
                        {item.profile?.region || 'Global'}
                      </td>
                    ))}
                  </tr>

                  {/* Total Master Systems */}
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold bg-slate-50">Total Documented Platforms</td>
                    {countryComparisonData.map(item => (
                      <td key={item.stats.countryName} className="p-3 text-center font-extrabold text-[#1B3A5C] text-base border-l border-slate-200">
                        {item.stats.totalAssets}
                      </td>
                    ))}
                  </tr>

                  {/* World-Leading Systems */}
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold bg-slate-50">World-Leading Systems</td>
                    {countryComparisonData.map(item => (
                      <td key={item.stats.countryName} className="p-3 text-center font-bold text-emerald-700 border-l border-slate-200">
                        {item.worldLeadingCount} Systems
                      </td>
                    ))}
                  </tr>

                  {/* Next-Gen Technology Systems */}
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold bg-slate-50">Next-Gen Systems (2016-Pres)</td>
                    {countryComparisonData.map(item => (
                      <td key={item.stats.countryName} className="p-3 text-center font-semibold text-slate-800 border-l border-slate-200">
                        {item.nextGenCount} Systems
                      </td>
                    ))}
                  </tr>

                  {/* Systems Developed */}
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold bg-slate-50">Systems Developed</td>
                    {countryComparisonData.map(item => (
                      <td key={item.stats.countryName} className="p-3 text-center border-l border-slate-200">
                        {item.stats.developedCount}
                      </td>
                    ))}
                  </tr>

                  {/* Systems Manufactured */}
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold bg-slate-50">Systems Manufactured</td>
                    {countryComparisonData.map(item => (
                      <td key={item.stats.countryName} className="p-3 text-center border-l border-slate-200">
                        {item.stats.manufacturedCount}
                      </td>
                    ))}
                  </tr>

                  {/* Systems Exported */}
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold bg-slate-50">Export Portfolio Systems</td>
                    {countryComparisonData.map(item => (
                      <td key={item.stats.countryName} className="p-3 text-center border-l border-slate-200 font-semibold text-sky-800">
                        {item.stats.exportedCount}
                      </td>
                    ))}
                  </tr>

                  {/* Joint Programmes */}
                  <tr className="hover:bg-slate-50">
                    <td className="p-3 font-bold bg-slate-50">Multinational / Joint Systems</td>
                    {countryComparisonData.map(item => (
                      <td key={item.stats.countryName} className="p-3 text-center border-l border-slate-200 font-semibold text-purple-800">
                        {item.stats.jointCount}
                      </td>
                    ))}
                  </tr>

                  {/* 9 SECTORS BREAKDOWN HEADER */}
                  <tr className="bg-[#1B3A5C] text-white font-bold">
                    <td colSpan={1 + selectedCountries.length} className="p-3 uppercase tracking-wider text-[11px] font-sans">
                      SECTOR-BY-SECTOR INVENTORY BREAKDOWN (9 SECTORS)
                    </td>
                  </tr>

                  {Object.keys(BRANCHES).map(bId => {
                    const branchName = BRANCHES[bId as BranchId].name;
                    const branchCode = BRANCHES[bId as BranchId].code;
                    return (
                      <tr key={bId} className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-800 bg-slate-50">
                          {branchName} ({branchCode})
                        </td>
                        {countryComparisonData.map(item => {
                          const count = item.stats.sectorCounts[bId as BranchId] || 0;
                          return (
                            <td key={item.stats.countryName} className="p-3 text-center border-l border-slate-200 font-bold">
                              {count > 0 ? (
                                <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-900 rounded-xs">
                                  {count}
                                </span>
                              ) : (
                                <span className="text-slate-400 font-normal">0</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

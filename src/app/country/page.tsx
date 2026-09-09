'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  getAllCountries,
  getAssetsByOperatorCountry,
  getAssetsDevelopedByCountry,
  getAssetsManufacturedByCountry,
  getAssetsOperatedByCountry,
  getAssetsExportedByCountry,
  getAssetsImportedByCountry,
  getAssetsJointByCountry,
  getCountryProfileData,
} from '../../lib/catalogService';
import { getCountryProfileByName, COUNTRY_REGISTRY, CountryTier } from '../../data/countries';
import { BRANCHES } from '../../data/branches';
import { AssetCard } from '../../components/catalog/AssetCard';
import {
  Globe, Search, ArrowRight, Shield, Plane, Anchor, Crosshair, RadioTower,
  Radar, Cpu, Zap, Bot, ChevronRight, Layers, Factory, CpuIcon, Send, Download, Cpu as ChipIcon, Flag
} from 'lucide-react';
import { Asset, BranchId } from '../../types/catalog';

type CountryViewTab = 'all' | 'developed' | 'manufactured' | 'operated' | 'exported' | 'imported' | 'joint';

export default function CountryPage() {
  const allCountries = useMemo(() => getAllCountries(), []);
  const [selectedCountry, setSelectedCountry] = useState<string>('United States');
  const [selectedTierFilter, setSelectedTierFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<CountryViewTab>('all');
  const [selectedSectorFilter, setSelectedSectorFilter] = useState<string>('All');

  // Country details from metadata registry
  const countryProfile = useMemo(() => {
    return getCountryProfileByName(selectedCountry);
  }, [selectedCountry]);

  // Aggregated country sector breakdown data
  const profileStats = useMemo(() => {
    return getCountryProfileData(selectedCountry);
  }, [selectedCountry]);

  // Asset lists per view tab
  const assetsByRole = useMemo(() => {
    const developed = getAssetsDevelopedByCountry(selectedCountry);
    const manufactured = getAssetsManufacturedByCountry(selectedCountry);
    const operated = getAssetsOperatedByCountry(selectedCountry);
    const exported = getAssetsExportedByCountry(selectedCountry);
    const imported = getAssetsImportedByCountry(selectedCountry);
    const joint = getAssetsJointByCountry(selectedCountry);

    // Combine all unique assets for 'all' tab
    const allMap = new Map<string, Asset>();
    [...operated, ...developed, ...manufactured, ...exported, ...joint].forEach(a => allMap.set(a.id, a));

    return {
      all: Array.from(allMap.values()),
      developed,
      manufactured,
      operated,
      exported,
      imported,
      joint,
    };
  }, [selectedCountry]);

  // Filtered assets by tab & sector
  const displayAssets = useMemo(() => {
    let list = assetsByRole[activeTab] || assetsByRole.all;
    if (selectedSectorFilter !== 'All') {
      list = list.filter(a => a.branchId === selectedSectorFilter);
    }
    return list;
  }, [assetsByRole, activeTab, selectedSectorFilter]);

  // Country list filtering by Tier & Search
  const filteredCountries = useMemo(() => {
    return allCountries.filter(c => {
      const matchQuery = !searchQuery || c.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchQuery) return false;
      if (selectedTierFilter !== 'All') {
        const prof = getCountryProfileByName(c);
        if (!prof || prof.priorityTier !== selectedTierFilter) return false;
      }
      return true;
    });
  }, [allCountries, searchQuery, selectedTierFilter]);

  const getSectorIcon = (id: string) => {
    switch (id) {
      case 'army': return Shield;
      case 'air-force': return Plane;
      case 'navy': return Anchor;
      case 'missiles': return Crosshair;
      case 'air-defence': return RadioTower;
      case 'radar': return Radar;
      case 'c4isr': return Cpu;
      case 'electronic-warfare': return Zap;
      case 'unmanned': return Bot;
      default: return Shield;
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-sm shadow-xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1B3A5C] text-white flex items-center justify-center rounded-sm font-bold">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">GLOBAL DEFENCE TECHNOLOGY PROFILES</span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
              Country Defence Profile System
            </h1>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed font-sans">
          Publicly documented defence technology inventory profiling across major military powers (Tier 1–5), European multinational programmes, and global defence industries across all 9 sectors.
        </p>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Country Selector Sidebar (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-slate-200 p-4 space-y-4 rounded-sm shadow-xs">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-xs font-bold text-slate-900 uppercase">Select Nation Profile</h3>
              <span className="text-[11px] font-mono text-slate-500">{filteredCountries.length} Nations</span>
            </div>

            {/* Priority Tier Filter Pills */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[10px] font-mono">
              {['All', 'Tier 1', 'Tier 2', 'Tier 3', 'Tier 4', 'Tier 5'].map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedTierFilter(t)}
                  className={`px-2 py-1 rounded-xs border transition-colors shrink-0 ${
                    selectedTierFilter === t
                      ? 'bg-[#1B3A5C] text-white border-[#1B3A5C] font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Country Search Bar */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search country name..."
                className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono rounded-sm focus:outline-none focus:border-[#1B3A5C]"
              />
            </div>
          </div>

          {/* Country Selection List */}
          <div className="max-h-[550px] overflow-y-auto divide-y divide-slate-100 font-mono text-xs border border-slate-200 rounded-sm">
            {filteredCountries.map(c => {
              const isSelected = c === selectedCountry;
              const prof = getCountryProfileByName(c);
              return (
                <button
                  key={c}
                  onClick={() => {
                    setSelectedCountry(c);
                    setActiveTab('all');
                    setSelectedSectorFilter('All');
                  }}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between transition-colors ${
                    isSelected
                      ? 'bg-[#1B3A5C] text-white font-bold'
                      : 'hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{prof?.flagEmoji || '🌐'}</span>
                    <span>{c}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {prof && (
                      <span className={`text-[9px] px-1.5 py-0.2 rounded-xs font-mono font-normal ${
                        isSelected ? 'bg-sky-900 text-sky-200' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {prof.priorityTier}
                      </span>
                    )}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Country Profile Inventory Display (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Selected Country Profile Card */}
          <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{countryProfile?.flagEmoji || '🌐'}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-black text-slate-900 font-sans tracking-tight">
                        {selectedCountry}
                      </h2>
                      <span className="px-2 py-0.5 bg-[#1B3A5C] text-white font-mono text-[10px] font-bold rounded-xs uppercase">
                        {countryProfile?.region || 'Global Region'}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 block">
                      {countryProfile?.priorityTier ? `${countryProfile.priorityTier} — ${countryProfile.tierDescription}` : 'Public Military Equipment Inventory'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 font-mono text-xs">
                <div className="px-4 py-2 bg-slate-900 text-white rounded-sm text-center">
                  <span className="text-[10px] text-slate-400 block uppercase font-sans">Total Master Records</span>
                  <span className="text-xl font-extrabold text-sky-400">{profileStats.totalAssets}</span>
                </div>
              </div>
            </div>

            {/* Industrial Focus Tags */}
            {countryProfile?.defenceIndustryFocus && (
              <div className="flex items-center gap-2 flex-wrap font-mono text-xs">
                <span className="text-slate-500 font-sans text-[11px] font-semibold">Key Defence Pillars:</span>
                {countryProfile.defenceIndustryFocus.map(focus => (
                  <span key={focus} className="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 text-[11px] rounded-xs font-medium">
                    {focus}
                  </span>
                ))}
              </div>
            )}

            {/* Role Inventory Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 font-mono text-xs">
              <button
                onClick={() => setActiveTab('developed')}
                className={`p-2.5 border text-left rounded-sm transition-colors ${
                  activeTab === 'developed' ? 'bg-[#1B3A5C] text-white border-[#1B3A5C]' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="text-[9px] uppercase font-sans block opacity-80">Developed</span>
                <span className="text-lg font-bold">{profileStats.developedCount}</span>
              </button>

              <button
                onClick={() => setActiveTab('manufactured')}
                className={`p-2.5 border text-left rounded-sm transition-colors ${
                  activeTab === 'manufactured' ? 'bg-[#1B3A5C] text-white border-[#1B3A5C]' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="text-[9px] uppercase font-sans block opacity-80">Manufactured</span>
                <span className="text-lg font-bold">{profileStats.manufacturedCount}</span>
              </button>

              <button
                onClick={() => setActiveTab('operated')}
                className={`p-2.5 border text-left rounded-sm transition-colors ${
                  activeTab === 'operated' ? 'bg-[#1B3A5C] text-white border-[#1B3A5C]' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="text-[9px] uppercase font-sans block opacity-80">Operated</span>
                <span className="text-lg font-bold">{profileStats.operatedCount}</span>
              </button>

              <button
                onClick={() => setActiveTab('exported')}
                className={`p-2.5 border text-left rounded-sm transition-colors ${
                  activeTab === 'exported' ? 'bg-[#1B3A5C] text-white border-[#1B3A5C]' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="text-[9px] uppercase font-sans block opacity-80">Exported</span>
                <span className="text-lg font-bold">{profileStats.exportedCount}</span>
              </button>

              <button
                onClick={() => setActiveTab('imported')}
                className={`p-2.5 border text-left rounded-sm transition-colors ${
                  activeTab === 'imported' ? 'bg-[#1B3A5C] text-white border-[#1B3A5C]' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="text-[9px] uppercase font-sans block opacity-80">Imported</span>
                <span className="text-lg font-bold">{profileStats.importedCount}</span>
              </button>

              <button
                onClick={() => setActiveTab('joint')}
                className={`p-2.5 border text-left rounded-sm transition-colors ${
                  activeTab === 'joint' ? 'bg-[#1B3A5C] text-white border-[#1B3A5C]' : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="text-[9px] uppercase font-sans block opacity-80">Joint Program</span>
                <span className="text-lg font-bold">{profileStats.jointCount}</span>
              </button>
            </div>

            {/* 9-Sector Breakdown Grid */}
            <div className="pt-2 border-t border-slate-200">
              <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold mb-2">9-SECTOR DISTRIBUTION MATRIX</span>
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-1.5 font-mono text-xs text-center">
                {Object.keys(BRANCHES).map(bId => {
                  const count = profileStats.sectorCounts[bId as BranchId] || 0;
                  const Icon = getSectorIcon(bId);
                  const isSectorSelected = selectedSectorFilter === bId;

                  return (
                    <button
                      key={bId}
                      onClick={() => setSelectedSectorFilter(isSectorSelected ? 'All' : bId)}
                      className={`p-2 border rounded-sm transition-colors ${
                        isSectorSelected
                          ? 'bg-sky-900 text-white border-sky-700 font-bold'
                          : count > 0
                          ? 'bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200'
                          : 'bg-slate-50/50 text-slate-400 border-slate-200 opacity-60'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 mx-auto mb-1 text-current" />
                      <span className="text-[8px] block uppercase font-sans truncate">{BRANCHES[bId].code}</span>
                      <span className="font-bold text-xs">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tab Filter Control Strip */}
          <div className="bg-white border border-slate-200 p-3 rounded-sm shadow-xs flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="text-slate-500 font-sans text-xs font-semibold mr-1">View Role:</span>
              {[
                { id: 'all', label: `All Systems (${profileStats.totalAssets})` },
                { id: 'developed', label: `Developed (${profileStats.developedCount})` },
                { id: 'manufactured', label: `Manufactured (${profileStats.manufacturedCount})` },
                { id: 'operated', label: `Operated (${profileStats.operatedCount})` },
                { id: 'exported', label: `Exported (${profileStats.exportedCount})` },
                { id: 'imported', label: `Imported (${profileStats.importedCount})` },
                { id: 'joint', label: `Joint (${profileStats.jointCount})` },
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id as CountryViewTab)}
                  className={`px-2.5 py-1 text-xs rounded-xs border transition-colors ${
                    activeTab === t.id
                      ? 'bg-[#1B3A5C] text-white border-[#1B3A5C] font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {selectedSectorFilter !== 'All' && (
              <button
                onClick={() => setSelectedSectorFilter('All')}
                className="text-xs text-rose-700 hover:underline font-mono"
              >
                Clear Sector Filter ({BRANCHES[selectedSectorFilter]?.name})
              </button>
            )}
          </div>

          {/* Equipment Asset Cards Display */}
          {displayAssets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {displayAssets.map(asset => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 p-12 text-center space-y-2 rounded-sm shadow-xs">
              <h3 className="text-base font-bold text-slate-900 font-sans">
                No equipment records registered under active tab for {selectedCountry}
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Try switching the role tab above or selecting another nation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

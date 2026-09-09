'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { getAllCountries, getAssetsByOperatorCountry } from '../../lib/catalogService';
import { BRANCHES } from '../../data/branches';
import { AssetCard } from '../../components/catalog/AssetCard';
import { Globe, Search, ArrowRight, Shield, Plane, Anchor, Crosshair, RadioTower, Radar, Cpu, Zap, Bot, ChevronRight } from 'lucide-react';

export default function CountryPage() {
  const allCountries = useMemo(() => getAllCountries(), []);
  const [selectedCountry, setSelectedCountry] = useState<string>('United States');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return allCountries;
    const q = searchQuery.toLowerCase();
    return allCountries.filter(c => c.toLowerCase().includes(q));
  }, [allCountries, searchQuery]);

  const countryAssets = useMemo(() => {
    return getAssetsByOperatorCountry(selectedCountry);
  }, [selectedCountry]);

  // Sector stats breakdown for selected country
  const sectorBreakdown = useMemo(() => {
    const counts: Record<string, number> = {};
    Object.keys(BRANCHES).forEach(b => counts[b] = 0);
    countryAssets.forEach(a => {
      counts[a.branchId] = (counts[a.branchId] || 0) + 1;
    });
    return counts;
  }, [countryAssets]);

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
          <div className="w-10 h-10 bg-[#1B3A5C] text-white flex items-center justify-center rounded-sm">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">OPERATOR & ORIGIN INVENTORY</span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
              Global Country Operator Analysis
            </h1>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed font-sans">
          Analyze equipment inventories developed, manufactured, or operated by any nation across all 9 global sectors (Army, Air Force, Navy, Missiles, Air Defence, Radar, C4ISR, EW, and Unmanned Systems).
        </p>
      </div>

      {/* Country Selection & Filter Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Country Selector Sidebar (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-slate-200 p-4 space-y-4 rounded-sm shadow-xs">
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase">Select Operating Nation</h3>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Filter country list..."
                className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono rounded-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="max-h-[500px] overflow-y-auto divide-y divide-slate-100 font-mono text-xs border border-slate-200 rounded-sm">
            {filteredCountries.map(c => {
              const isSelected = c === selectedCountry;
              return (
                <button
                  key={c}
                  onClick={() => setSelectedCountry(c)}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between transition-colors ${
                    isSelected
                      ? 'bg-[#1B3A5C] text-white font-bold'
                      : 'hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <span>{c}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Country Equipment Inventory Display (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Selected Country Header Card */}
          <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">SELECTED NATION</span>
                <h2 className="text-2xl font-black text-slate-900 font-sans tracking-tight">
                  {selectedCountry}
                </h2>
              </div>
              <span className="px-3 py-1 bg-[#1B3A5C] text-white font-mono text-xs font-bold rounded-sm">
                {countryAssets.length} Total Systems
              </span>
            </div>

            {/* Sector Breakdown Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 font-mono text-xs text-center">
              {Object.keys(BRANCHES).map(bId => {
                const count = sectorBreakdown[bId] || 0;
                const Icon = getSectorIcon(bId);
                return (
                  <div key={bId} className="p-2 bg-slate-50 border border-slate-200 rounded-sm">
                    <Icon className="w-4 h-4 mx-auto text-[#1B3A5C] mb-1" />
                    <span className="text-[9px] text-slate-500 block uppercase font-sans">{BRANCHES[bId].code}</span>
                    <span className="font-bold text-slate-900 text-xs">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Equipment Asset Cards */}
          {countryAssets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {countryAssets.map(asset => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 p-12 text-center space-y-2 rounded-sm">
              <h3 className="text-base font-bold text-slate-900 font-sans">
                No systems registered for {selectedCountry}
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Select another nation from the left panel.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

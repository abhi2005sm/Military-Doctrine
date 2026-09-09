'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCompare } from '../../context/CompareContext';
import { ASSETS } from '../../data/assets';
import { getAssetById, calculateAverageRating } from '../../lib/catalogService';
import { TierBadge } from '../ui/TierBadge';
import { RatingBarChart } from '../ui/RatingBarChart';
import { SlidersHorizontal, Plus, X, Trash2, Globe, Shield, ArrowRight, Check, FileText } from 'lucide-react';

export function CompareClient() {
  const { compareIds, compareAssets, addToCompare, removeFromCompare, clearCompare } = useCompare();
  const [selectedAssetId, setSelectedAssetId] = useState('');

  const handleAddSelected = () => {
    if (selectedAssetId) {
      addToCompare(selectedAssetId);
      setSelectedAssetId('');
    }
  };

  const availableAssets = ASSETS.filter(a => !compareIds.includes(a.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-sm p-6 sm:p-8 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-sky-950 border border-sky-800 text-sky-400 font-mono text-xs rounded-xs">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>UNCLASSIFIED OSINT COMPARATOR</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
              Side-by-Side Asset Comparison Matrix
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl font-sans leading-relaxed">
              Compare firepower, survivability, specs, armament, and lifecycle ratings across up to 4 global military platforms.
            </p>
          </div>

          {compareAssets.length > 0 && (
            <button
              onClick={clearCompare}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-red-950 text-slate-300 hover:text-red-300 border border-slate-700 rounded-xs font-mono text-xs transition-colors shrink-0"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear Selection</span>
            </button>
          )}
        </div>

        {/* Add Asset Selector Bar */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
          <span className="font-mono text-xs text-slate-400 shrink-0">ADD PLATFORM TO MATRIX:</span>
          <select
            value={selectedAssetId}
            onChange={e => setSelectedAssetId(e.target.value)}
            className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-xs text-white font-mono text-xs focus:outline-none focus:border-sky-500"
          >
            <option value="">Select an asset from catalog...</option>
            {availableAssets.map(a => (
              <option key={a.id} value={a.id}>
                [{a.branchId.toUpperCase()}] {a.name} ({a.categoryName} - {a.originCountries.join(', ')})
              </option>
            ))}
          </select>
          <button
            onClick={handleAddSelected}
            disabled={!selectedAssetId}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-mono text-xs font-semibold rounded-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Platform</span>
          </button>
        </div>
      </div>

      {/* Main Comparison Matrix Display */}
      {compareAssets.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-sm p-12 text-center space-y-4 shadow-card">
          <SlidersHorizontal className="w-12 h-12 text-slate-300 mx-auto" />
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 font-sans">
              No assets selected for comparison
            </h3>
            <p className="text-xs font-mono text-slate-500 max-w-md mx-auto">
              Select assets above or click &quot;Compare&quot; on any catalog card to add platforms to this matrix.
            </p>
          </div>
          <div className="flex justify-center gap-2 pt-2">
            {['m1a2-abrams', 'leopard-2a7', 'f35-lightning-ii', 'rafale-c'].map(presetId => {
              const item = getAssetById(presetId);
              if (!item) return null;
              return (
                <button
                  key={presetId}
                  onClick={() => addToCompare(presetId)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-mono text-xs rounded-xs transition-colors"
                >
                  + Add {item.name}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="space-y-8 overflow-x-auto">
          {/* Header Row of Asset Cards */}
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
              {/* Row: Entry into Service */}
              <div className="grid grid-cols-5 p-3 hover:bg-slate-50 transition-colors">
                <div className="font-bold text-slate-700">Service Entry</div>
                {compareAssets.map(a => (
                  <div key={a.id} className="text-slate-900 font-medium px-2">{a.specs.entryIntoService}</div>
                ))}
              </div>

              {/* Row: Crew */}
              <div className="grid grid-cols-5 p-3 bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="font-bold text-slate-700">Crew Size</div>
                {compareAssets.map(a => (
                  <div key={a.id} className="text-slate-900 px-2">{a.specs.crew}</div>
                ))}
              </div>

              {/* Row: Manufacturer */}
              <div className="grid grid-cols-5 p-3 hover:bg-slate-50 transition-colors">
                <div className="font-bold text-slate-700">Manufacturer</div>
                {compareAssets.map(a => (
                  <div key={a.id} className="text-slate-900 px-2">{a.specs.manufacturer}</div>
                ))}
              </div>

              {/* Row: Primary Role */}
              <div className="grid grid-cols-5 p-3 bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="font-bold text-slate-700">Primary Role</div>
                {compareAssets.map(a => (
                  <div key={a.id} className="text-slate-900 px-2 line-clamp-2">{a.specs.primaryRole}</div>
                ))}
              </div>

              {/* Row: Propulsion */}
              <div className="grid grid-cols-5 p-3 hover:bg-slate-50 transition-colors">
                <div className="font-bold text-slate-700">Engine / Power</div>
                {compareAssets.map(a => (
                  <div key={a.id} className="text-slate-900 px-2 line-clamp-2">{a.specs.propulsionPower || 'N/A'}</div>
                ))}
              </div>

              {/* Row: Armament */}
              <div className="grid grid-cols-5 p-3 bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="font-bold text-slate-700">Armament</div>
                {compareAssets.map(a => {
                  const armaments = a.specs.mainArmament || a.specs.armament;
                  return (
                    <ul key={a.id} className="text-slate-900 px-2 space-y-1 text-[11px]">
                      {armaments && armaments.length > 0 ? armaments.slice(0, 3).map((arm: string, i: number) => (
                        <li key={i}>• {arm}</li>
                      )) : <li>N/A</li>}
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Rating Breakdown Section */}
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
      )}
    </div>
  );
}

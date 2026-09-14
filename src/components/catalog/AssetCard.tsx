'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Asset } from '../../types/catalog';
import { TierBadge } from '../ui/TierBadge';
import { useCompare } from '../../context/CompareContext';
import { ArrowRight, SlidersHorizontal, Check, Globe } from 'lucide-react';

interface AssetCardProps {
  asset: Asset;
  displayIndex?: number;
}

export function AssetCard({ asset, displayIndex }: AssetCardProps) {
  const cardNumber = displayIndex !== undefined ? displayIndex : (asset.rankInCategory || 1);
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();

  // Primary image URL resolution
  const primaryImageUrl = asset.images?.[0]?.url || asset.image || 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80';

  // High-res real photo fallback based on branch
  const getFallbackByBranch = () => {
    if (asset.branchId === 'air-force' || asset.categoryId.includes('aircraft') || asset.categoryId.includes('helicopter')) {
      return 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80';
    }
    if (asset.branchId === 'navy' || asset.categoryId.includes('ship') || asset.categoryId.includes('carrier') || asset.categoryId.includes('sub')) {
      return 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80';
    }
    if (asset.categoryId.startsWith('small-arms') || asset.categoryId.startsWith('infantry-weapons') || asset.categoryId.startsWith('missiles')) {
      return 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=800&q=80';
    }
    return 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80';
  };

  const [imgSrc, setImgSrc] = useState(primaryImageUrl);

  const isCompared = isInCompare(asset.id);

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isCompared) {
      removeFromCompare(asset.id);
    } else {
      addToCompare(asset.id);
    }
  };

  return (
    <div className="group bg-white border border-[#E4E7EC] rounded-none overflow-hidden transition-all duration-200 flex flex-col h-full hover:border-[#1B3A5C]/40">
      {/* 4:3 Image Crop Container with Rank Badge & Tier Pill */}
      <div className="relative aspect-[4/3] w-full bg-[#1A212D] overflow-hidden">
        <img
          src={imgSrc}
          alt={asset.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out opacity-95 group-hover:opacity-100"
          onError={() => {
            const fallback = getFallbackByBranch();
            if (imgSrc !== fallback) {
              setImgSrc(fallback);
            }
          }}
        />

        {/* Top Corner Overlay: Rank Badge & Tier Badge */}
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-2 z-10 pointer-events-none">
          <span className="px-2 py-0.5 bg-[#0B0E14]/90 text-white text-xs font-mono font-bold tracking-wider rounded-none border border-slate-700/80">
            #{cardNumber}
          </span>
          <div className="pointer-events-auto">
            <TierBadge tier={asset.overallTier} size="sm" />
          </div>
        </div>

        {/* Bottom Country & Subcategory Bar */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] font-mono z-10">
          <div className="flex items-center gap-1 px-2 py-0.5 bg-[#0B0E14]/85 text-slate-200 border border-slate-700/80">
            <Globe className="w-3 h-3 text-[#2A5CAA]" />
            <span className="truncate max-w-[120px]">{asset.originCountries.join(', ')}</span>
          </div>
          <span className="px-1.5 py-0.5 bg-[#0B0E14]/85 text-slate-300 text-[10px] uppercase border border-slate-700/80">
            {asset.subcategory}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold text-[#0B0E14] tracking-tight group-hover:text-[#1B3A5C] transition-colors line-clamp-1">
              {asset.name}
            </h3>
            <span className="font-mono text-xs font-bold text-[#1B3A5C] bg-[#F7F8FA] px-1.5 py-0.5 border border-[#E4E7EC] shrink-0">
              {asset.ratings.capability.toFixed(1)} <span className="text-[10px] text-[#5B6472]">/5</span>
            </span>
          </div>

          {asset.officialDesignation && (
            <p className="text-[11px] font-mono text-[#5B6472] truncate">
              {asset.officialDesignation}
            </p>
          )}

          <p className="text-xs text-[#5B6472] line-clamp-2 leading-relaxed pt-0.5">
            {asset.shortDescription}
          </p>
        </div>

        {/* Spec Rows (Label Left / Mono Value Right) */}
        <div className="space-y-1 py-2 px-2.5 bg-[#F7F8FA] border border-[#E4E7EC] font-mono text-xs">
          {asset.specs.keyMetrics && asset.specs.keyMetrics.length > 0 ? (
            asset.specs.keyMetrics.slice(0, 2).map((metric, idx) => (
              typeof metric === 'string' ? (
                <div key={idx} className="flex items-center justify-between text-[11px]">
                  <span className="text-[#5B6472] font-sans truncate">{metric}</span>
                </div>
              ) : (
                <div key={idx} className="flex items-center justify-between text-[11px]">
                  <span className="text-[#5B6472] font-sans truncate">{metric.label}:</span>
                  <span className="font-semibold text-[#0B0E14] text-right shrink-0">
                    {metric.value} {metric.unit && <span className="text-[10px] text-[#5B6472] font-normal">{metric.unit}</span>}
                  </span>
                </div>
              )
            ))
          ) : (
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#5B6472] font-sans truncate">Primary Role:</span>
              <span className="font-semibold text-[#0B0E14] text-right shrink-0">
                {asset.primaryRole || asset.categoryName}
              </span>
            </div>
          )}
        </div>

        {/* Actions Footer */}
        <div className="pt-2 border-t border-[#E4E7EC] flex items-center justify-between gap-2">
          <button
            onClick={handleCompareClick}
            className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-mono transition-colors ${
              isCompared
                ? 'bg-[#1B3A5C] text-white border border-[#1B3A5C]'
                : 'bg-white text-[#5B6472] border border-[#E4E7EC] hover:bg-[#F7F8FA] hover:text-[#0B0E14]'
            }`}
            title="Toggle compare"
          >
            {isCompared ? (
              <>
                <Check className="w-3 h-3 text-white" />
                <span>Comparing</span>
              </>
            ) : (
              <>
                <SlidersHorizontal className="w-3 h-3 text-[#5B6472]" />
                <span>Compare</span>
              </>
            )}
          </button>

          <Link
            href={`/${asset.branchId}/${asset.categoryId}/${asset.id}`}
            className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#1B3A5C] hover:text-[#2A5CAA] transition-colors"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

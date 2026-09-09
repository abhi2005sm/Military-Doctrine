'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Asset, Category } from '../../types/catalog';
import { searchCatalogAssets, getCategorySearchResults, getDidYouMeanSuggestions } from '../../lib/catalogService';
import { Search, X, Shield, ArrowRight, CornerDownRight, Tag } from 'lucide-react';
import { TierBadge } from '../ui/TierBadge';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [assetResults, setAssetResults] = useState<{ asset: Asset; matchType: string }[]>([]);
  const [categoryResults, setCategoryResults] = useState<Category[]>([]);
  const [suggestions, setSuggestions] = useState<{ query: string; suggestion: string; targetId: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setAssetResults([]);
      setCategoryResults([]);
      setSuggestions([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const executeSearch = (val: string) => {
    setQuery(val);
    if (!val.trim()) {
      setAssetResults([]);
      setCategoryResults([]);
      setSuggestions([]);
      return;
    }
    const matches = searchCatalogAssets(val);
    const cats = getCategorySearchResults(val);
    const didYouMean = matches.length < 3 ? getDidYouMeanSuggestions(val) : [];

    setAssetResults(matches.slice(0, 10).map(m => ({ asset: m.asset, matchType: m.matchType })));
    setCategoryResults(cats.slice(0, 4));
    setSuggestions(didYouMean);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    executeSearch(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-300 w-full max-w-3xl rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Header Input */}
        <div className="flex items-center px-4 border-b border-slate-200 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search designations, aliases, MBTs, IFVs, MLRS, UAVs (e.g. M1A2, Abrams, Leopard 2, K2, HIMARS)..."
            className="w-full px-3 py-4 text-sm font-mono text-slate-900 bg-transparent outline-none placeholder:text-slate-400 placeholder:font-sans"
          />
          {query && (
            <button onClick={() => executeSearch('')} className="p-1 text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 px-2 py-1 bg-slate-200 text-slate-600 text-xs font-mono rounded-xs hover:bg-slate-300 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Did You Mean Suggestions Bar */}
        {suggestions.length > 0 && assetResults.length <= 2 && (
          <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-center gap-2 text-xs font-mono text-amber-900">
            <CornerDownRight className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Did you mean:</span>
            <div className="flex flex-wrap gap-1.5">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => executeSearch(s.suggestion)}
                  className="px-2 py-0.5 bg-amber-100 border border-amber-300 hover:bg-amber-200 text-amber-900 rounded-xs font-bold transition-colors"
                >
                  {s.suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {query.trim() === '' ? (
            <div className="text-center py-8 space-y-3">
              <Shield className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-xs font-mono text-slate-500 max-w-md mx-auto">
                Search official military designations, common names, aliases, variants, equipment categories, or manufacturers across all land systems.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                <span className="text-[11px] text-slate-400 font-mono">Quick searches:</span>
                {[
                  'M1A2 SEPv3',
                  'Leopard 2A8',
                  'K2 Black Panther',
                  'T-90M',
                  'M142 HIMARS',
                  'K9 Thunder',
                  'M777',
                  'FGM-148 Javelin',
                  'Bayraktar TB2',
                  'Switchblade 600',
                  'MBT',
                  'IFV',
                  'MLRS'
                ].map(tag => (
                  <button
                    key={tag}
                    onClick={() => executeSearch(tag)}
                    className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono rounded-xs hover:bg-slate-200 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : assetResults.length === 0 && categoryResults.length === 0 ? (
            <div className="text-center py-10 space-y-2">
              <div className="text-slate-500 font-mono text-xs">
                No intelligence records found matching <span className="font-bold text-slate-900">&quot;{query}&quot;</span>.
              </div>
              {suggestions.length > 0 && (
                <div className="pt-2 text-xs font-mono text-slate-600">
                  Try selecting one of the suggested search terms above.
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {/* Category Search Matches */}
              {categoryResults.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-semibold text-slate-400 px-1 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    MATCHING EQUIPMENT CATEGORIES ({categoryResults.length})
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {categoryResults.map(cat => (
                      <Link
                        key={cat.id}
                        href={`/${cat.branchId}/${cat.id}`}
                        onClick={onClose}
                        className="p-3 bg-sky-50/60 hover:bg-sky-100/80 border border-sky-200 rounded-sm transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between text-xs font-mono text-sky-800 font-bold">
                            <span>{cat.name}</span>
                            <span className="px-1.5 py-0.2 bg-sky-200 text-sky-900 rounded-xs text-[10px] uppercase">
                              {cat.code}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 line-clamp-1 mt-1 font-sans">
                            {cat.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-sky-600 mt-2">
                          <span>{cat.targetCount || 10} Master Records</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Asset Search Matches */}
              {assetResults.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-semibold text-slate-400 px-1">
                    MATCHING MASTER SYSTEM RECORDS ({assetResults.length})
                  </div>
                  {assetResults.map(({ asset, matchType }) => (
                    <Link
                      key={asset.id}
                      href={`/${asset.branchId}/${asset.categoryId}/${asset.id}`}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-sm transition-all group"
                    >
                      <div className="space-y-1 pr-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-1.5 py-0.5 bg-slate-900 text-white text-[10px] font-mono uppercase tracking-wider rounded-xs">
                            {asset.branchId}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                            {asset.name}
                          </h4>
                          {asset.officialDesignation && asset.officialDesignation !== asset.name && (
                            <span className="text-xs font-mono text-slate-500">
                              ({asset.officialDesignation})
                            </span>
                          )}
                          <TierBadge tier={asset.overallTier} size="sm" showDot={false} />
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-1">
                          {asset.shortDescription}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-400">
                          <span>{asset.categoryName}</span>
                          <span>•</span>
                          <span>{asset.originCountries.join(', ')}</span>
                          {matchType && (
                            <>
                              <span>•</span>
                              <span className="text-sky-700 font-semibold">{matchType}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors shrink-0" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>BLACKSTONE OSINT NORMALIZED SEARCH ENGINE</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}

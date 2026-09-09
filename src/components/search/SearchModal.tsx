'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Fuse from 'fuse.js';
import { ASSETS } from '../../data/assets';
import { Asset } from '../../types/catalog';
import { Search, X, Shield, ArrowRight } from 'lucide-react';
import { TierBadge } from '../ui/TierBadge';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Asset[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const fuseRef = useRef<Fuse<Asset> | null>(null);

  useEffect(() => {
    fuseRef.current = new Fuse(ASSETS, {
      keys: [
        'name',
        'officialDesignation',
        'shortDescription',
        'categoryName',
        'subcategory',
        'originCountries',
        'specs.armament',
        'specs.primaryRole',
      ],
      threshold: 0.35,
      ignoreLocation: true,
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (!val.trim()) {
      setResults([]);
      return;
    }
    if (fuseRef.current) {
      const fuseResults = fuseRef.current.search(val);
      setResults(fuseResults.map(r => r.item).slice(0, 8));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-300 w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Header Input */}
        <div className="flex items-center px-4 border-b border-slate-200 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search assets, armament, roles, countries (e.g. Abrams, F-35, Javelin, Germany)..."
            className="w-full px-3 py-4 text-sm font-mono text-slate-900 bg-transparent outline-none placeholder:text-slate-400 placeholder:font-sans"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600">
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

        {/* Search Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="text-center py-8 space-y-2">
              <Shield className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-xs font-mono text-slate-500">
                Type keywords to query the unclassified defense intelligence asset database.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                <span className="text-[11px] text-slate-400 font-mono">Popular searches:</span>
                {['Abrams', 'F-35', 'Carrier', 'Submarine', 'Javelin', 'HIMARS'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => {
                      setQuery(tag);
                      if (fuseRef.current) {
                        setResults(fuseRef.current.search(tag).map(r => r.item).slice(0, 8));
                      }
                    }}
                    className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono rounded-xs hover:bg-slate-200 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8 text-slate-500 font-mono text-xs">
              No intelligence records found matching <span className="font-bold text-slate-900">&quot;{query}&quot;</span>.
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-[11px] font-mono font-semibold text-slate-400 px-1">
                MATCHING INTELLIGENCE RECORDS ({results.length})
              </div>
              {results.map(asset => (
                <Link
                  key={asset.id}
                  href={`/${asset.branchId}/${asset.categoryId}/${asset.id}`}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-sm transition-all group"
                >
                  <div className="space-y-1 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 bg-slate-900 text-white text-[10px] font-mono uppercase tracking-wider rounded-xs">
                        {asset.branchId}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                        {asset.name}
                      </h4>
                      <TierBadge tier={asset.overallTier} size="sm" showDot={false} />
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-1">
                      {asset.shortDescription}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                      <span>{asset.categoryName}</span>
                      <span>•</span>
                      <span>{asset.originCountries.join(', ')}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>BLACKSTONE OSINT FUZZY ENGINE</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}

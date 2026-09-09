'use client';

import React from 'react';
import Link from 'next/link';
import { useCompare } from '../../context/CompareContext';
import { SlidersHorizontal, X, ArrowRight, Trash2 } from 'lucide-react';

export function CompareTray() {
  const { compareAssets, removeFromCompare, clearCompare } = useCompare();

  if (compareAssets.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-full max-w-2xl px-4 animate-in slide-in-from-bottom duration-300">
      <div className="bg-slate-900 text-white border border-slate-700 shadow-2xl rounded-sm p-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-x-auto py-1 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 shrink-0 border-r border-slate-700 pr-3">
            <SlidersHorizontal className="w-4 h-4 text-sky-400" />
            <span className="font-semibold text-white">{compareAssets.length}</span>
            <span>/ 4 Selected</span>
          </div>

          <div className="flex items-center gap-2">
            {compareAssets.map(asset => (
              <div
                key={asset.id}
                className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-2 py-1 rounded-xs text-xs font-mono shrink-0"
              >
                <span className="text-slate-200 font-medium truncate max-w-[120px]">{asset.name}</span>
                <button
                  onClick={() => removeFromCompare(asset.id)}
                  className="text-slate-400 hover:text-red-400 p-0.5 rounded-xs transition-colors"
                  title="Remove"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={clearCompare}
            className="p-1.5 text-slate-400 hover:text-white transition-colors"
            title="Clear all selected"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <Link
            href="/compare"
            className="inline-flex items-center gap-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-mono font-semibold px-3 py-1.5 rounded-xs transition-colors"
          >
            <span>Compare Matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

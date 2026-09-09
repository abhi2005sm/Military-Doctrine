'use client';

import React from 'react';
import { useCompare } from '../../context/CompareContext';
import { SlidersHorizontal, Check } from 'lucide-react';

interface AssetDetailActionsProps {
  assetId: string;
}

export function AssetDetailActions({ assetId }: AssetDetailActionsProps) {
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const isCompared = isInCompare(assetId);

  const toggleCompare = () => {
    if (isCompared) {
      removeFromCompare(assetId);
    } else {
      addToCompare(assetId);
    }
  };

  return (
    <button
      onClick={toggleCompare}
      className={`inline-flex items-center gap-2 font-mono text-xs font-semibold px-4 py-2.5 rounded-xs border transition-colors ${
        isCompared
          ? 'bg-sky-900 text-white border-sky-900 hover:bg-sky-800'
          : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
      }`}
    >
      {isCompared ? (
        <>
          <Check className="w-4 h-4 text-sky-400" />
          <span>Added to Compare Matrix</span>
        </>
      ) : (
        <>
          <SlidersHorizontal className="w-4 h-4 text-slate-300" />
          <span>Add to Compare Matrix</span>
        </>
      )}
    </button>
  );
}

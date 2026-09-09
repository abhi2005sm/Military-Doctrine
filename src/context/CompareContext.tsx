'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Asset } from '../types/catalog';
import { getAssetById } from '../lib/catalogService';

interface CompareContextType {
  compareIds: string[];
  compareAssets: Asset[];
  addToCompare: (id: string) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
  isInCompare: (id: string) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [compareIds, setCompareIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('blackstone_compare');
      if (saved) {
        setCompareIds(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const addToCompare = (id: string) => {
    if (compareIds.includes(id)) return;
    if (compareIds.length >= 4) {
      alert('You can compare up to 4 assets side-by-side.');
      return;
    }
    const updated = [...compareIds, id];
    setCompareIds(updated);
    localStorage.setItem('blackstone_compare', JSON.stringify(updated));
  };

  const removeFromCompare = (id: string) => {
    const updated = compareIds.filter(item => item !== id);
    setCompareIds(updated);
    localStorage.setItem('blackstone_compare', JSON.stringify(updated));
  };

  const clearCompare = () => {
    setCompareIds([]);
    localStorage.removeItem('blackstone_compare');
  };

  const isInCompare = (id: string) => compareIds.includes(id);

  const compareAssets = compareIds
    .map(id => getAssetById(id))
    .filter((a): a is Asset => a !== undefined);

  return (
    <CompareContext.Provider
      value={{
        compareIds,
        compareAssets,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
}

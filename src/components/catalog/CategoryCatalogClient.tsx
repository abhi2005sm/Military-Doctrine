'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Category, Asset, Branch, FilterOptions, TierBadge, DevelopmentStatus, ServiceBranchTag } from '../../types/catalog';
import { AssetCard } from './AssetCard';
import { filterAssets, getAllCountries, getAllOperators } from '../../lib/catalogService';
import { Search, RotateCcw, ChevronRight, ArrowUpDown, LayoutGrid, List, Filter } from 'lucide-react';

interface CategoryCatalogClientProps {
  category: Category;
  branch: Branch;
  allBranchAssets: Asset[];
}

export function CategoryCatalogClient({ category, branch, allBranchAssets }: CategoryCatalogClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedOperator, setSelectedOperator] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [selectedGeneration, setSelectedGeneration] = useState<string>('');
  const [selectedEra, setSelectedEra] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<string>('');
  const [sortBy, setSortBy] = useState<FilterOptions['sortBy']>('name-asc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allCountries = useMemo(() => getAllCountries().slice(0, 10), []);
  const allOperators = useMemo(() => getAllOperators().slice(0, 10), []);

  const serviceOptions: ServiceBranchTag[] = ['Army', 'Air Force', 'Navy', 'Joint'];
  const statusOptions: DevelopmentStatus[] = ['Operational', 'Production', 'Upgrade', 'Testing', 'Prototype'];
  const generationOptions = ['5th', '4.5', '4th', '3.5', '3rd', 'Next-Gen'];

  const eraOptions = [
    'Next-Gen (2016-Present)',
    'Modern (1992-2015)',
    'Cold War (1947-1991)',
  ];

  const tierOptions: TierBadge[] = [
    'World-Leading',
    'Very Good',
    'Good',
    'Cost-Effective',
    'Maintenance-Friendly',
    'Legacy',
  ];

  // Filter assets for this category
  const filteredAssets = useMemo(() => {
    return filterAssets({
      searchQuery,
      branchId: branch.id,
      categoryId: category.id,
      country: selectedCountry || undefined,
      operatorCountry: selectedOperator || undefined,
      service: (selectedService as ServiceBranchTag) || undefined,
      status: (selectedStatus as DevelopmentStatus) || undefined,
      generation: selectedGeneration || undefined,
      era: selectedEra || undefined,
      tier: (selectedTier as TierBadge) || undefined,
      sortBy,
    });
  }, [searchQuery, branch.id, category.id, selectedCountry, selectedOperator, selectedService, selectedStatus, selectedGeneration, selectedEra, selectedTier, sortBy]);

  const hasActiveFilters = searchQuery || selectedCountry || selectedOperator || selectedService || selectedStatus || selectedGeneration || selectedEra || selectedTier;

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCountry('');
    setSelectedOperator('');
    setSelectedService('');
    setSelectedStatus('');
    setSelectedGeneration('');
    setSelectedEra('');
    setSelectedTier('');
    setSortBy('name-asc');
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-900 transition-colors">Catalog</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/${branch.id}`} className="hover:text-slate-900 transition-colors capitalize">{branch.name}</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-semibold">{category.name}</span>
      </div>

      {/* Category Command Header */}
      <div className="bg-white border border-slate-200 p-6 space-y-4 rounded-sm shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#1B3A5C] text-white text-xs font-mono font-bold rounded-sm">
                {category.code}
              </span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                {branch.name} Reference Category
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
              {category.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed font-sans">
              {category.description}
            </p>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs shrink-0 bg-slate-50 p-3.5 border border-slate-200 rounded-sm">
            <div className="text-center">
              <span className="text-[10px] text-slate-500 block font-sans font-semibold uppercase">Target Target Count</span>
              <span className="text-xl font-bold text-[#1B3A5C]">{category.targetCount} Records</span>
            </div>
            <div className="w-[1px] h-8 bg-slate-200" />
            <div className="text-center">
              <span className="text-[10px] text-slate-500 block font-sans font-semibold uppercase">Filtered Match</span>
              <span className="text-xl font-bold text-slate-900">{filteredAssets.length}</span>
            </div>
          </div>
        </div>

        {/* Subcategories strip */}
        <div className="pt-3 border-t border-slate-200 flex items-center gap-2 flex-wrap font-mono text-xs">
          <span className="text-slate-500 font-sans text-[11px] font-semibold">Subcategories:</span>
          {category.subcategories.map(sub => (
            <span key={sub} className="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 text-[11px] rounded-xs">
              {sub}
            </span>
          ))}
        </div>
      </div>

      {/* Combinable Filters Panel */}
      <div className="bg-white border border-slate-200 p-4 rounded-sm shadow-xs space-y-4 font-mono text-xs">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-3 border-b border-slate-200">
          {/* Global Search Box */}
          <div className="relative flex-1 max-w-lg">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by name, designation, manufacturer, specs..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs rounded-sm focus:outline-none focus:border-[#1B3A5C]"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#1B3A5C]" />
              <span className="text-slate-500 font-sans text-xs">Sort:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as FilterOptions['sortBy'])}
                className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 text-slate-900 font-mono text-xs rounded-sm focus:outline-none focus:border-[#1B3A5C]"
              >
                <option value="name-asc">Rank Order (#1 up)</option>
                <option value="rating">Highest Overall Rating</option>
                <option value="capability">Offensive Capability</option>
                <option value="year-desc">Service Entry (Newest)</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-slate-200 rounded-sm overflow-hidden bg-slate-50">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 ${viewMode === 'grid' ? 'bg-[#1B3A5C] text-white' : 'text-slate-600 hover:text-slate-900'}`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 ${viewMode === 'list' ? 'bg-[#1B3A5C] text-white' : 'text-slate-600 hover:text-slate-900'}`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs text-rose-700 bg-rose-50 border border-rose-200 hover:bg-rose-100 rounded-sm transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Combinable Dropdown Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          <div>
            <label className="text-[10px] text-slate-500 font-sans font-semibold uppercase block mb-1">Origin Country</label>
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              className="w-full p-1.5 bg-slate-50 border border-slate-200 text-slate-900 text-xs rounded-sm focus:outline-none"
            >
              <option value="">All Origins</option>
              {allCountries.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[10px] text-slate-500 font-sans font-semibold uppercase block mb-1">Operator Country</label>
            <select
              value={selectedOperator}
              onChange={e => setSelectedOperator(e.target.value)}
              className="w-full p-1.5 bg-slate-50 border border-slate-200 text-slate-900 text-xs rounded-sm focus:outline-none"
            >
              <option value="">All Operators</option>
              {allOperators.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[10px] text-slate-500 font-sans font-semibold uppercase block mb-1">Service Branch</label>
            <select
              value={selectedService}
              onChange={e => setSelectedService(e.target.value)}
              className="w-full p-1.5 bg-slate-50 border border-slate-200 text-slate-900 text-xs rounded-sm focus:outline-none"
            >
              <option value="">All Services</option>
              {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[10px] text-slate-500 font-sans font-semibold uppercase block mb-1">Status</label>
            <select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              className="w-full p-1.5 bg-slate-50 border border-slate-200 text-slate-900 text-xs rounded-sm focus:outline-none"
            >
              <option value="">All Statuses</option>
              {statusOptions.map(st => <option key={st} value={st}>{st}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[10px] text-slate-500 font-sans font-semibold uppercase block mb-1">Generation</label>
            <select
              value={selectedGeneration}
              onChange={e => setSelectedGeneration(e.target.value)}
              className="w-full p-1.5 bg-slate-50 border border-slate-200 text-slate-900 text-xs rounded-sm focus:outline-none"
            >
              <option value="">All Generations</option>
              {generationOptions.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[10px] text-slate-500 font-sans font-semibold uppercase block mb-1">Tier Badge</label>
            <select
              value={selectedTier}
              onChange={e => setSelectedTier(e.target.value)}
              className="w-full p-1.5 bg-slate-50 border border-slate-200 text-slate-900 text-xs rounded-sm focus:outline-none"
            >
              <option value="">All Tiers</option>
              {tierOptions.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Catalog Display View */}
      {filteredAssets.length > 0 ? (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssets.map(asset => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 divide-y divide-slate-200 rounded-sm shadow-xs font-mono text-xs">
            {filteredAssets.map(asset => (
              <div key={asset.id} className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#1B3A5C]">#{asset.rankInCategory}</span>
                    <Link href={`/${asset.branchId}/${asset.categoryId}/${asset.id}`} className="font-bold text-slate-900 hover:text-[#1B3A5C] text-sm">
                      {asset.name}
                    </Link>
                    <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] border border-slate-200">
                      {asset.originCountries.join(', ')}
                    </span>
                    <span className="px-1.5 py-0.5 bg-[#1B3A5C] text-white text-[10px]">
                      {asset.status || 'Operational'}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs font-sans line-clamp-1">{asset.shortDescription}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 font-sans uppercase block">Manufacturer</span>
                    <span className="font-semibold text-slate-800">{asset.manufacturer || asset.originCountries[0]}</span>
                  </div>
                  <Link
                    href={`/${asset.branchId}/${asset.categoryId}/${asset.id}`}
                    className="px-3 py-1.5 bg-[#1B3A5C] hover:bg-[#2A5CAA] text-white text-xs font-semibold rounded-sm"
                  >
                    View Record
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="bg-white border border-slate-200 p-12 text-center space-y-4 rounded-sm">
          <div className="w-12 h-12 bg-slate-100 border border-slate-200 text-slate-500 flex items-center justify-center mx-auto font-mono text-sm font-bold rounded-sm">
            0
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 font-sans">
              No equipment records match the active filter criteria
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-1">
              Try adjusting your search terms, country selections, or status filters.
            </p>
          </div>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-[#1B3A5C] hover:bg-[#2A5CAA] text-white font-mono text-xs font-semibold rounded-sm transition-colors"
          >
            Clear Active Filters
          </button>
        </div>
      )}
    </div>
  );
}

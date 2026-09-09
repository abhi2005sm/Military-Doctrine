import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBranchById, getCategoriesByBranch, getAssetsByBranch } from '../../lib/catalogService';
import { BranchId } from '../../types/catalog';
import { Shield, Plane, Anchor, ArrowRight, Grid, ChevronRight, Crosshair, RadioTower, Radar, Cpu, Zap, Bot } from 'lucide-react';

interface BranchPageProps {
  params: {
    branch: string;
  };
}

export function generateStaticParams() {
  return [
    { branch: 'army' },
    { branch: 'air-force' },
    { branch: 'navy' },
    { branch: 'missiles' },
    { branch: 'air-defence' },
    { branch: 'radar' },
    { branch: 'c4isr' },
    { branch: 'electronic-warfare' },
    { branch: 'unmanned' },
  ];
}

export default function BranchPage({ params }: BranchPageProps) {
  const branchId = params.branch as BranchId;
  const branch = getBranchById(branchId);

  if (!branch) {
    notFound();
  }

  const categories = getCategoriesByBranch(branchId);
  const branchAssets = getAssetsByBranch(branchId);

  const getBranchIcon = (id: string) => {
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

  const BranchIcon = getBranchIcon(branch.id);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 bg-slate-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-900 transition-colors">Catalog</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-semibold uppercase">{branch.name}</span>
      </div>

      {/* Sector Command Header */}
      <div className="bg-white border border-slate-200 p-6 space-y-4 rounded-sm shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#1B3A5C] text-white flex items-center justify-center font-mono font-bold text-xl rounded-sm">
              <BranchIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-[#1B3A5C] text-xs font-mono font-bold rounded-sm">
                  {branch.code}
                </span>
                <span className="text-xs font-mono text-slate-500">GLOBAL SECTOR TAXONOMY</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight mt-1 uppercase">
                {branch.name}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs shrink-0 bg-slate-50 p-3.5 border border-slate-200 rounded-sm">
            <div className="text-center px-2">
              <span className="text-slate-500 block text-[10px] uppercase font-sans font-semibold">Leaf Categories</span>
              <span className="text-xl font-bold text-[#1B3A5C]">{categories.length}</span>
            </div>
            <div className="w-[1px] h-8 bg-slate-200" />
            <div className="text-center px-2">
              <span className="text-slate-500 block text-[10px] uppercase font-sans font-semibold">Master Records</span>
              <span className="text-xl font-bold text-slate-900">{branchAssets.length}</span>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed font-sans">
          {branch.description}
        </p>

        <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-xs font-mono text-slate-600">
          <span className="font-semibold text-slate-900 font-sans">OPERATIONAL SCOPE:</span>
          <span>{branch.primaryRole}</span>
        </div>
      </div>

      {/* Category Grid Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <div className="flex items-center gap-2">
            <Grid className="w-4 h-4 text-[#1B3A5C]" />
            <h2 className="text-base font-bold text-slate-900 tracking-tight font-sans uppercase">
              SECTOR CATEGORIES ({categories.length})
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500">Fast Scanning Category Grid</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(cat => {
            const catAssetCount = branchAssets.filter(a => a.categoryId === cat.id).length;

            return (
              <div
                key={cat.id}
                className="group bg-white border border-slate-200 hover:border-[#1B3A5C] transition-all p-4 space-y-3 flex flex-col justify-between rounded-sm shadow-xs"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-[#1B3A5C] text-white text-xs font-mono font-bold rounded-sm">
                      {cat.code}
                    </span>
                    <span className="font-mono text-xs text-slate-600 font-semibold">
                      {catAssetCount || cat.targetCount} Records
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1B3A5C] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed font-sans">
                      {cat.description}
                    </p>
                  </div>

                  {/* Subcategory tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cat.subcategories.map(sub => (
                      <span
                        key={sub}
                        className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-mono border border-slate-200 rounded-xs"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    Target Master Records: {cat.targetCount}
                  </span>
                  <Link
                    href={`/${branch.id}/${cat.id}`}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#1B3A5C] hover:text-[#2A5CAA] transition-colors"
                  >
                    <span>Open Category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

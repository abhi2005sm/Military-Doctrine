import Link from 'next/link';
import { BRANCH_LIST } from '../data/branches';
import { ASSETS } from '../data/assets';
import { CATEGORIES } from '../data/categories';
import { AssetCard } from '../components/catalog/AssetCard';
import { Shield, Plane, Anchor, ArrowRight, Award, SlidersHorizontal, Crosshair, RadioTower, Radar, Cpu, Zap, Bot, Globe, BarChart3, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const totalAssetsCount = ASSETS.length; // 860 master records
  const totalCategoriesCount = CATEGORIES.length; // 88 leaf categories
  const featuredAssets = ASSETS.filter(a => a.rankInCategory === 1).slice(0, 6);

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
    <div className="space-y-12 pb-16 bg-slate-50 min-h-screen">
      {/* Modern Command Deck Hero Section */}
      <section className="bg-white border-b border-slate-200 relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-[1400px] mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 font-mono text-xs text-slate-800 rounded-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold">GLOBAL MILITARY EQUIPMENT RESEARCH DATABASE — 860 MASTER RECORDS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-sans leading-tight">
                Authoritative Reference for <br className="hidden sm:inline" />
                <span className="text-[#1B3A5C]">Global Military Technology & Systems</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed max-w-2xl">
                Data-driven research database structured around factual specifications, country operators, development timelines, multi-angle real imagery, relationship graphs, and analytical capability assessments across 9 global sectors.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/country"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1B3A5C] hover:bg-[#2A5CAA] text-white font-mono text-xs font-semibold rounded-sm transition-colors"
                >
                  <Globe className="w-4 h-4 text-sky-300" />
                  <span>Country Operator Analysis</span>
                </Link>
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 font-mono text-xs font-semibold rounded-sm transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4 text-slate-700" />
                  <span>Side-by-Side Comparison</span>
                </Link>
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 font-mono text-xs font-semibold rounded-sm transition-colors"
                >
                  <BarChart3 className="w-4 h-4 text-amber-600" />
                  <span>Data Quality Dashboard</span>
                </Link>
              </div>
            </div>

            {/* Oversized Tight-Tracking Numerals for Hero Stats */}
            <div className="grid grid-cols-2 gap-6 bg-slate-50 p-6 border border-slate-200 font-mono shrink-0 w-full sm:w-auto rounded-sm">
              <div className="space-y-0.5">
                <span className="text-[11px] font-sans font-semibold text-slate-500 uppercase block">Master Records</span>
                <span className="text-4xl sm:text-5xl font-extrabold text-[#1B3A5C] tracking-tight block">
                  {totalAssetsCount.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-500 block">Verified Factual Records</span>
              </div>
              <div className="space-y-0.5 pl-4 border-l border-slate-200">
                <span className="text-[11px] font-sans font-semibold text-slate-500 uppercase block">Global Sectors</span>
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight block">
                  9
                </span>
                <span className="text-[10px] text-slate-500 block">Land, Air, Sea & Global</span>
              </div>
            </div>
          </div>

          {/* Target Count Benchmark Metrics */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 pt-6 border-t border-slate-200 font-mono text-xs text-center">
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-sm">
              <span className="text-slate-500 text-[10px] uppercase font-sans font-bold block">Army</span>
              <span className="text-sm font-bold text-slate-900">200</span>
              <span className="text-[9px] text-slate-500 block">Records</span>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-sm">
              <span className="text-slate-500 text-[10px] uppercase font-sans font-bold block">Air Force</span>
              <span className="text-sm font-bold text-slate-900">117</span>
              <span className="text-[9px] text-slate-500 block">Records</span>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-sm">
              <span className="text-slate-500 text-[10px] uppercase font-sans font-bold block">Navy</span>
              <span className="text-sm font-bold text-slate-900">193</span>
              <span className="text-[9px] text-slate-500 block">Records</span>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-sm">
              <span className="text-slate-500 text-[10px] uppercase font-sans font-bold block">Missiles</span>
              <span className="text-sm font-bold text-slate-900">150</span>
              <span className="text-[9px] text-slate-500 block">Records</span>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-sm">
              <span className="text-slate-500 text-[10px] uppercase font-sans font-bold block">Air Defence</span>
              <span className="text-sm font-bold text-slate-900">80</span>
              <span className="text-[9px] text-slate-500 block">Records</span>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-sm">
              <span className="text-slate-500 text-[10px] uppercase font-sans font-bold block">Radar</span>
              <span className="text-sm font-bold text-slate-900">70</span>
              <span className="text-[9px] text-slate-500 block">Records</span>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-sm">
              <span className="text-slate-500 text-[10px] uppercase font-sans font-bold block">C4ISR</span>
              <span className="text-sm font-bold text-slate-900">50</span>
              <span className="text-[9px] text-slate-500 block">Records</span>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-sm">
              <span className="text-slate-500 text-[10px] uppercase font-sans font-bold block">EW</span>
              <span className="text-sm font-bold text-slate-900">50</span>
              <span className="text-[9px] text-slate-500 block">Records</span>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-sm">
              <span className="text-slate-500 text-[10px] uppercase font-sans font-bold block">Unmanned</span>
              <span className="text-sm font-bold text-slate-900">50</span>
              <span className="text-[9px] text-slate-500 block">Records</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Global Sectors Grid */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight font-sans">
              GLOBAL SECTOR STRUCTURE
            </h2>
            <p className="text-xs font-mono text-slate-500">
              Browse master equipment records across land, air, sea, and global multi-domain sectors
            </p>
          </div>
          <span className="font-mono text-xs text-[#1B3A5C] font-bold">9 SECTORS TOTAL</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANCH_LIST.map(branch => {
            const Icon = getSectorIcon(branch.id);
            return (
              <div
                key={branch.id}
                className="bg-white border border-slate-200 hover:border-[#1B3A5C] transition-all p-6 flex flex-col justify-between rounded-sm shadow-xs group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-slate-100 text-[#1B3A5C] group-hover:bg-[#1B3A5C] group-hover:text-white flex items-center justify-center rounded-sm transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 bg-slate-100 text-[#1B3A5C] font-mono text-xs font-bold border border-slate-200 rounded-sm">
                      {branch.assetCount} Master Records
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-sans group-hover:text-[#1B3A5C] transition-colors">
                      {branch.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">
                      {branch.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                    {branch.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <Link
                    href={`/${branch.id}`}
                    className="w-full inline-flex items-center justify-between bg-slate-50 hover:bg-[#1B3A5C] text-slate-800 hover:text-white border border-slate-200 font-mono text-xs font-semibold px-4 py-2.5 transition-colors rounded-sm"
                  >
                    <span>Explore {branch.name} Sector</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leading Systems Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600" />
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight font-sans">
                LEADING SYSTEMS OF THE MODERN GENERATION
              </h2>
              <p className="text-xs font-mono text-slate-500">
                Significant modern systems evaluated by transparent operational criteria (Stealth, Sensor Integration, Range & Power)
              </p>
            </div>
          </div>
          <Link
            href="/army"
            className="font-mono text-xs font-semibold text-[#1B3A5C] hover:text-[#2A5CAA] flex items-center gap-1"
          >
            <span>Explore All Systems</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Methodology Note Alert Box */}
        <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-sans rounded-sm space-y-1">
          <div className="font-bold font-mono text-amber-950 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-700" />
            TRANSPARENT ANALYTICAL SELECTION METHODOLOGY
          </div>
          <p className="text-amber-800 leading-relaxed">
            Systems listed below represent premier modern platforms selected for high technological maturity, operational relevance, international export adoption, and advanced sensor/firepower capabilities based on publicly documented datasheets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAssets.map(asset => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      </section>

      {/* Side-by-Side Compare Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-sm shadow-xs">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-slate-100 border border-slate-200 text-[#1B3A5C] font-mono text-xs font-bold rounded-sm">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>COMPARISON MATRIX ENGINE</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-sans">
              Compare Any Systems Side-by-Side
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Select multiple systems to compare specifications, range, speed, main cannon/missiles, sensor arrays, operator countries, and analytical capability indicators side-by-side.
            </p>
          </div>

          <Link
            href="/compare"
            className="shrink-0 inline-flex items-center gap-2 bg-[#1B3A5C] hover:bg-[#2A5CAA] text-white font-mono text-xs font-bold px-5 py-3 transition-colors rounded-sm"
          >
            <span>Launch Comparison Tool</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

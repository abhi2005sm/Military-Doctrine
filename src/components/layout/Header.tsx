'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, SlidersHorizontal, ShieldCheck, Menu, X, Globe, BarChart3 } from 'lucide-react';
import { useCompare } from '../../context/CompareContext';
import { SearchModal } from '../search/SearchModal';

export function Header() {
  const pathname = usePathname();
  const { compareIds } = useCompare();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectorNavItems = [
    { label: 'Army / Land', href: '/army' },
    { label: 'Air Force', href: '/air-force' },
    { label: 'Navy / Marine', href: '/navy' },
    { label: 'Missiles', href: '/missiles' },
    { label: 'Air Defence', href: '/air-defence' },
    { label: 'Radar', href: '/radar' },
    { label: 'C4ISR', href: '/c4isr' },
    { label: 'EW', href: '/electronic-warfare' },
    { label: 'Unmanned', href: '/unmanned' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        {/* Top Command Security Banner */}
        <div className="bg-[#0B0E14] text-slate-300 text-[11px] font-mono py-1.5 px-4 border-b border-slate-800">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-white tracking-wide">BLACKSTONE MILITARY INTELLIGENCE DATABASE</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">UNCLASSIFIED RESEARCH & ANALYSIS (860 MASTER RECORDS)</span>
            </div>
            <div className="hidden lg:flex items-center gap-5 text-slate-400 text-[11px]">
              <span className="flex items-center gap-1 text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                VERIFIED AUTHORITATIVE SOURCES
              </span>
              <Link href="/country" className="hover:text-white transition-colors flex items-center gap-1">
                <Globe className="w-3 h-3 text-sky-400" />
                COUNTRY OPERATOR ANALYSIS
              </Link>
              <Link href="/admin" className="hover:text-white transition-colors flex items-center gap-1">
                <BarChart3 className="w-3 h-3 text-amber-400" />
                DATA QUALITY DASHBOARD
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 bg-[#1B3A5C] text-white flex items-center justify-center font-mono font-bold text-xl group-hover:bg-[#2A5CAA] transition-colors rounded-sm shadow-sm">
                B
              </div>
              <div>
                <span className="font-mono text-lg font-extrabold tracking-wider text-slate-900 block leading-none">
                  BLACKSTONE
                </span>
                <span className="text-[10px] font-mono text-slate-500 tracking-tight block mt-0.5">
                  GLOBAL MILITARY EQUIPMENT DATABASE
                </span>
              </div>
            </Link>

            {/* Desktop Sector Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 font-mono text-xs font-semibold">
              {sectorNavItems.map(item => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2.5 py-1.5 border transition-colors rounded-sm ${
                      isActive
                        ? 'bg-[#1B3A5C] text-white border-[#1B3A5C]'
                        : 'text-slate-700 border-transparent hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Quick Tools */}
            <div className="flex items-center gap-2">
              <Link
                href="/compare"
                className={`px-3 py-1.5 border text-xs font-mono font-semibold transition-colors flex items-center gap-1.5 rounded-sm ${
                  pathname === '/compare'
                    ? 'bg-[#1B3A5C] text-white border-[#1B3A5C]'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Compare</span>
                {compareIds.length > 0 && (
                  <span className="ml-1 px-1.5 py-0.2 bg-[#2A5CAA] text-white text-[10px] rounded-full font-mono font-bold">
                    {compareIds.length}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 text-xs font-mono rounded-sm transition-colors"
              >
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden sm:inline">Search...</span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 bg-white border border-slate-200 text-[10px] text-slate-500 rounded">
                  ⌘K
                </kbd>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-sm"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white p-4 space-y-2 font-mono text-xs">
            <div className="font-bold text-slate-400 text-[10px] tracking-wider uppercase mb-1">Global Sectors</div>
            <div className="grid grid-cols-2 gap-2">
              {sectorNavItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 bg-slate-50 border border-slate-200 text-slate-800 hover:bg-slate-100 rounded-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-200 space-y-2">
              <Link
                href="/country"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 text-slate-800 rounded-sm"
              >
                <Globe className="w-4 h-4 text-sky-600" />
                <span>Country Operator Analysis</span>
              </Link>
              <Link
                href="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 text-slate-800 rounded-sm"
              >
                <BarChart3 className="w-4 h-4 text-amber-600" />
                <span>Data Quality Dashboard</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

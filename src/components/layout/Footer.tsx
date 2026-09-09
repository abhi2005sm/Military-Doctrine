import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileText, Lock, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white text-slate-900 rounded-xs flex items-center justify-center font-mono font-bold text-xs">
                B
              </div>
              <span className="font-mono text-sm font-bold text-white tracking-wider">
                BLACKSTONE
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              A visual, archival reference catalog of global military assets (land, air, naval) compiled from public-domain and open-source intelligence (OSINT) references.
            </p>
            <div className="pt-2 flex items-center gap-3 font-mono text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                Global Taxonomy v2.4
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                OSINT Unclassified
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-2">
            <h4 className="font-mono font-bold text-white text-xs uppercase tracking-wider">
              Branches & Taxonomy
            </h4>
            <ul className="space-y-1.5 font-mono text-[11px]">
              <li>
                <Link href="/army" className="hover:text-white transition-colors">
                  🪖 Army / Land Forces
                </Link>
              </li>
              <li>
                <Link href="/air-force" className="hover:text-white transition-colors">
                  ✈️ Air Force / Air Component
                </Link>
              </li>
              <li>
                <Link href="/navy" className="hover:text-white transition-colors">
                  ⚓ Navy / Maritime Forces
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-white transition-colors">
                  📊 Side-by-Side Comparison
                </Link>
              </li>
            </ul>
          </div>

          {/* Hardened Security & Compliance */}
          <div className="space-y-2">
            <h4 className="font-mono font-bold text-white text-xs uppercase tracking-wider">
              Security Architecture
            </h4>
            <ul className="space-y-1.5 font-mono text-[11px]">
              <li className="flex items-center gap-1.5 text-slate-300">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>HSTS & CSP Headers Enforced</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3 h-3 text-sky-400" />
                <span>X-Frame-Options: DENY</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <FileText className="w-3 h-3 text-amber-400" />
                <span>Static SSG Data Layer</span>
              </li>
              <li className="pt-1">
                <Link href="/admin" className="text-sky-400 hover:underline">
                  View Hardened Security Report →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Callout Box */}
        <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-sm font-mono text-[11px] text-slate-400 space-y-1">
          <div className="flex items-center gap-2 text-slate-300 font-semibold">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>OPEN-SOURCE REFERENCE DISCLAIMER</span>
          </div>
          <p className="leading-normal">
            This database is compiled exclusively from open-source, unclassified, and public-domain references (such as official DoD factsheets, NATO public releases, Wikimedia Commons CC-BY, and published manufacturer specifications) for educational and research purposes.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
          <span>© 2026 BLACKSTONE INTELLIGENCE CATALOG. ALL RIGHTS RESERVED.</span>
          <span>ESTABLISHED FOR OSINT BENCHMARKING</span>
        </div>
      </div>
    </footer>
  );
}

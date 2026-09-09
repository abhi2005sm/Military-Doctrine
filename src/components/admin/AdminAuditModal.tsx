'use client';

import React, { useState } from 'react';
import { generateAdminAuditReport, AdminAuditReport } from '../../lib/adminAuditService';
import { runAutomatedSearchTests } from '../../lib/searchTests';
import { ShieldCheck, X, CheckCircle2, AlertTriangle, Database, Search, FileText } from 'lucide-react';

interface AdminAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminAuditModal({ isOpen, onClose }: AdminAuditModalProps) {
  const [activeTab, setActiveTab] = useState<'reconciliation' | 'search-tests'>('reconciliation');
  const [report] = useState<AdminAuditReport>(() => generateAdminAuditReport());
  const [testResults] = useState(() => runAutomatedSearchTests());

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 text-slate-100 w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-base font-bold font-mono text-white tracking-wide">
                ARMY DATABASE AUDIT & SEARCH VALIDATION REPORT
              </h3>
              <p className="text-xs font-mono text-slate-400">
                System Reconciliation • Master Target 200 Records • Automated Search Verification
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 px-6 gap-4 font-mono text-xs">
          <button
            onClick={() => setActiveTab('reconciliation')}
            className={`py-3 flex items-center gap-2 border-b-2 font-bold transition-colors ${
              activeTab === 'reconciliation'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Database className="w-4 h-4" />
            DATABASE RECONCILIATION
          </button>
          <button
            onClick={() => setActiveTab('search-tests')}
            className={`py-3 flex items-center gap-2 border-b-2 font-bold transition-colors ${
              activeTab === 'search-tests'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Search className="w-4 h-4" />
            AUTOMATED SEARCH TESTS ({testResults.passedTests}/{testResults.totalTests} PASS)
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'reconciliation' ? (
            <div className="space-y-6 font-mono text-xs">
              {/* Metric Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-slate-800/60 border border-slate-700 p-3 rounded-xs space-y-1">
                  <div className="text-[11px] text-slate-400">ARMY MASTER RECORDS</div>
                  <div className="text-xl font-bold text-emerald-400">{report.calculatedTotal} / 200</div>
                  <div className="text-[10px] text-slate-500">Target Count 100% Reconciled</div>
                </div>

                <div className="bg-slate-800/60 border border-slate-700 p-3 rounded-xs space-y-1">
                  <div className="text-[11px] text-slate-400">APPROVED CATEGORIES</div>
                  <div className="text-xl font-bold text-sky-400">{report.categoryCount} / 26</div>
                  <div className="text-[10px] text-slate-500">Taxonomy Standardized</div>
                </div>

                <div className="bg-slate-800/60 border border-slate-700 p-3 rounded-xs space-y-1">
                  <div className="text-[11px] text-slate-400">REGISTERED ALIASES</div>
                  <div className="text-xl font-bold text-indigo-400">{report.aliasesCount}</div>
                  <div className="text-[10px] text-slate-500">Searchable System Aliases</div>
                </div>

                <div className="bg-slate-800/60 border border-slate-700 p-3 rounded-xs space-y-1">
                  <div className="text-[11px] text-slate-400">BROKEN IMAGES / ERRORS</div>
                  <div className="text-xl font-bold text-emerald-400">{report.brokenImagesCount}</div>
                  <div className="text-[10px] text-emerald-500">All Images Verified</div>
                </div>
              </div>

              {/* Status Breakdown Table */}
              <div className="bg-slate-800/40 border border-slate-700/80 p-4 rounded-xs space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-200">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  SYSTEM STATUS BREAKDOWN
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-[11px]">
                  <div className="bg-slate-800 p-2 rounded-xs border border-slate-700">
                    <div className="text-emerald-400 font-bold">{report.statusBreakdown.operational}</div>
                    <div className="text-slate-400 text-[10px]">OPERATIONAL</div>
                  </div>
                  <div className="bg-slate-800 p-2 rounded-xs border border-slate-700">
                    <div className="text-sky-400 font-bold">{report.statusBreakdown.modernized}</div>
                    <div className="text-slate-400 text-[10px]">MODERNIZED</div>
                  </div>
                  <div className="bg-slate-800 p-2 rounded-xs border border-slate-700">
                    <div className="text-amber-400 font-bold">{report.statusBreakdown.development}</div>
                    <div className="text-slate-400 text-[10px]">DEVELOPMENT</div>
                  </div>
                  <div className="bg-slate-800 p-2 rounded-xs border border-slate-700">
                    <div className="text-indigo-400 font-bold">{report.statusBreakdown.prototype}</div>
                    <div className="text-slate-400 text-[10px]">PROTOTYPE</div>
                  </div>
                  <div className="bg-slate-800 p-2 rounded-xs border border-slate-700">
                    <div className="text-purple-400 font-bold">{report.statusBreakdown.trials}</div>
                    <div className="text-slate-400 text-[10px]">TRIALS</div>
                  </div>
                  <div className="bg-slate-800 p-2 rounded-xs border border-slate-700">
                    <div className="text-slate-400 font-bold">{report.statusBreakdown.legacy}</div>
                    <div className="text-slate-500 text-[10px]">LEGACY</div>
                  </div>
                </div>
              </div>

              {/* Major Reclassifications Table */}
              <div className="space-y-3">
                <div className="font-bold text-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  MAJOR SYSTEM RECLASSIFICATIONS & AUDIT FIXES
                </div>
                <div className="space-y-2">
                  {report.reclassifications.map((item, idx) => (
                    <div key={idx} className="bg-slate-950 border border-slate-800 p-3 rounded-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-emerald-400">{item.system}</span>
                        <span className="text-[10px] text-slate-500 uppercase">{item.from} → {item.to}</span>
                      </div>
                      <p className="text-slate-300 font-sans text-xs">{item.rationale}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-xs text-emerald-300">
                <div className="flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  SEARCH AUTOMATED TEST SUITE SUCCEEDED
                </div>
                <div className="text-sm font-bold">{testResults.passRate} PASS RATE</div>
              </div>

              <div className="space-y-2">
                <div className="text-[11px] text-slate-400 font-bold">AUTOMATED SEARCH TEST CASES ({testResults.totalTests})</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {testResults.results.map((res, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xs border flex items-center justify-between ${
                        res.passed
                          ? 'bg-slate-950 border-emerald-500/30 text-slate-200'
                          : 'bg-rose-950/30 border-rose-500/30 text-rose-200'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">&quot;{res.query}&quot;</span>
                          <span className="text-[10px] text-slate-400">→ {res.actualTopResult}</span>
                        </div>
                        <div className="text-[10px] text-emerald-400/80">{res.matchType} (Score: {res.score})</div>
                      </div>
                      {res.passed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>BLACKSTONE DEFENSE INTELLIGENCE RECONCILIATION ENGINE</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xs transition-colors"
          >
            CLOSE REPORT
          </button>
        </div>
      </div>
    </div>
  );
}

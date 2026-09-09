import React from 'react';
import { RatingScores } from '../../types/catalog';

interface RatingBarChartProps {
  ratings: RatingScores;
  compact?: boolean;
}

interface RatingItem {
  key: keyof RatingScores;
  label: string;
  score: number;
}

export function RatingBarChart({ ratings, compact = false }: RatingBarChartProps) {
  const allItems: RatingItem[] = [
    { key: 'capability', label: 'Overall Capability', score: ratings.capability },
    { key: 'offensive', label: 'Offensive Ordnance', score: ratings.offensive ?? ratings.capability },
    { key: 'defensive', label: 'Defensive Systems', score: ratings.defensive ?? ratings.survivability },
    { key: 'reliability', label: 'Operational Reliability', score: ratings.reliability },
    { key: 'maintainability', label: 'Field Maintainability', score: ratings.maintainability },
    { key: 'survivability', label: 'Passive/Active Survivability', score: ratings.survivability },
    { key: 'rangeMobility', label: 'Strategic Mobility & Range', score: ratings.rangeMobility },
    { key: 'precision', label: 'Targeting Precision', score: ratings.precision ?? ratings.capability },
    { key: 'technology', label: 'Technology Maturity', score: ratings.technology ?? ratings.upgradePotential },
    { key: 'logistics', label: 'Logistics Footprint', score: ratings.logistics ?? ratings.maintainability },
    { key: 'costEfficiency', label: 'Cost Efficiency', score: ratings.costEfficiency },
    { key: 'combatMaturity', label: 'Combat Field Maturity', score: ratings.combatMaturity },
    { key: 'upgradePotential', label: 'Upgrade & Growth Potential', score: ratings.upgradePotential },
  ];

  const getBarColor = (score: number) => {
    if (score >= 4.8) return 'bg-[#B8860B]'; // Gold tier level
    if (score >= 4.2) return 'bg-[#2F7D4F]'; // Green
    if (score >= 3.5) return 'bg-[#2A5CAA]'; // Steel Blue
    return 'bg-[#4A5568]'; // Slate
  };

  if (compact) {
    return (
      <div className="space-y-2 font-mono text-xs">
        {allItems.slice(0, 4).map(item => (
          <div key={item.key} className="flex items-center justify-between gap-2">
            <span className="text-[#5B6472] font-sans truncate text-[11px]">{item.label}:</span>
            <div className="flex items-center gap-2 flex-1 max-w-[130px]">
              <div className="h-1.5 flex-1 bg-[#E4E7EC] rounded-none overflow-hidden">
                <div
                  className={`h-full ${getBarColor(item.score)} transition-all duration-300`}
                  style={{ width: `${(item.score / 5) * 100}%` }}
                />
              </div>
              <span className="font-semibold text-[#0B0E14] w-7 text-right text-[11px]">
                {item.score.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono">
      {allItems.map(item => {
        const pct = (item.score / 5) * 100;
        return (
          <div
            key={item.key}
            className="p-2.5 bg-[#FFFFFF] border border-[#E4E7EC] space-y-1.5 hover:border-[#1B3A5C]/40 transition-colors"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-sans font-semibold text-[#0B0E14] text-[12px]">{item.label}</span>
              <span className="font-bold text-[#0B0E14]">
                {item.score.toFixed(1)} <span className="text-[10px] text-[#5B6472] font-normal">/5.0</span>
              </span>
            </div>

            <div className="relative h-2 bg-[#F7F8FA] border border-[#E4E7EC] overflow-hidden flex">
              <div
                className={`h-full ${getBarColor(item.score)} transition-all duration-500`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

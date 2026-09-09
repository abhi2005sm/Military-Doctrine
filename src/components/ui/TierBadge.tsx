import React from 'react';
import { TierBadge as TierType } from '../../types/catalog';

interface TierBadgeProps {
  tier: TierType;
  size?: 'sm' | 'md' | 'lg';
  showDot?: boolean;
}

export function TierBadge({ tier, size = 'md', showDot = true }: TierBadgeProps) {
  const getStyles = () => {
    switch (tier) {
      case 'World-Leading':
        return {
          bg: 'bg-[#B8860B]/10 text-[#8B6508] border-[#B8860B]/30',
          dot: 'bg-[#B8860B]',
        };
      case 'Very Good':
        return {
          bg: 'bg-[#2F7D4F]/10 text-[#235F3C] border-[#2F7D4F]/30',
          dot: 'bg-[#2F7D4F]',
        };
      case 'Good':
        return {
          bg: 'bg-[#2A5CAA]/10 text-[#1B3A5C] border-[#2A5CAA]/30',
          dot: 'bg-[#2A5CAA]',
        };
      case 'Cost-Effective':
      case 'Maintenance-Friendly':
        return {
          bg: 'bg-[#4A5568]/10 text-[#2D3748] border-[#4A5568]/30',
          dot: 'bg-[#4A5568]',
        };
      case 'Legacy':
      default:
        return {
          bg: 'bg-[#718096]/10 text-[#4A5568] border-[#718096]/30',
          dot: 'bg-[#718096]',
        };
    }
  };

  const style = getStyles();

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-2.5 py-0.5 text-xs',
    lg: 'px-3 py-1 text-xs',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 border rounded-full font-medium tracking-tight whitespace-nowrap uppercase ${style.bg} ${sizeClasses[size]}`}
    >
      {showDot && <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />}
      <span>{tier}</span>
    </span>
  );
}

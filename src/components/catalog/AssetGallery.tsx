'use client';

import React, { useState } from 'react';
import { AssetImage } from '../../types/catalog';
import { CategorySilhouette } from '../equipment/CategorySilhouette';
import { ShieldCheck, Star, Camera, Layers, Sparkles } from 'lucide-react';

interface AssetGalleryProps {
  images?: AssetImage[];
  assetName: string;
  categoryName?: string;
  categoryId?: string;
  branchId?: string;
  originCountries?: string[];
  manufacturer?: string;
  rankInCategory?: number;
  fallbackImage?: string;
  fallbackCredit?: string;
  fallbackLicense?: string;
}

export function AssetGallery({
  images,
  assetName,
  categoryName = 'MAIN BATTLE TANKS',
  categoryId = 'main-battle-tanks',
  branchId = 'army',
  originCountries = ['United States'],
  manufacturer = 'General Dynamics Land Systems',
  rankInCategory = 1,
  fallbackImage = 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1000&q=80',
  fallbackCredit = 'Public Domain Defense Archives / Wikimedia Commons',
  fallbackLicense = 'Public Domain',
}: AssetGalleryProps) {
  // Pre-defined 4 multi-angle views to match user screenshot format
  const defaultAngles = [
    { title: 'Main', subtitle: 'Front 3/4 Profile', type: 'front' },
    { title: 'Side', subtitle: 'Side Silhouette', type: 'side' },
    { title: 'Rear', subtitle: 'Rear Exhaust View', type: 'rear' },
    { title: 'Top', subtitle: 'Top Armor Layout', type: 'top' },
  ];

  const [selectedAngleIndex, setSelectedAngleIndex] = useState(3); // Default to 'Top Armor Layout' as in screenshot or index 0
  const [renderMode, setRenderMode] = useState<'silhouette' | 'photo'>('silhouette'); // Vector silhouette or photo mode

  const galleryImages: AssetImage[] = images && images.length > 0
    ? images
    : [
        { url: fallbackImage, angle: 'Front 3/4 Profile', credit: fallbackCredit, license: fallbackLicense },
      ];

  const currentAngle = defaultAngles[selectedAngleIndex] || defaultAngles[0];
  const activeImage = galleryImages[selectedAngleIndex % galleryImages.length] || galleryImages[0];
  const [currentSrc, setCurrentSrc] = useState(activeImage.url);

  React.useEffect(() => {
    setCurrentSrc(activeImage.url);
  }, [activeImage]);

  return (
    <div className="bg-[#F0F5FA] border border-slate-200/90 rounded-2xl p-5 space-y-4 shadow-sm font-sans">
      {/* Top Badges Row */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          {/* Category Code/Name Badge */}
          <span className="bg-[#131F37] text-white font-mono text-[11px] font-bold px-3.5 py-1.5 rounded-md tracking-wider uppercase shadow-xs">
            {categoryName}
          </span>
          {/* Flagship Asset Badge */}
          {rankInCategory === 1 && (
            <span className="bg-[#FFF9EC] text-[#B87A00] border border-[#FFE7B3] font-sans text-[11px] font-bold px-3 py-1 rounded-full inline-flex items-center gap-1 shadow-xs">
              <Star className="w-3.5 h-3.5 fill-[#B87A00] text-[#B87A00]" />
              <span>Flagship Asset</span>
            </span>
          )}
        </div>

        {/* Vector / Photo View Toggle Switch */}
        <button
          onClick={() => setRenderMode(renderMode === 'silhouette' ? 'photo' : 'silhouette')}
          className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-mono text-xs px-3 py-1.5 rounded-md font-semibold inline-flex items-center gap-1.5 transition-colors shadow-xs"
        >
          {renderMode === 'silhouette' ? (
            <>
              <Camera className="w-3.5 h-3.5 text-[#131F37]" />
              <span>Switch to Photo</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-[#131F37]" />
              <span>Switch to Vector</span>
            </>
          )}
        </button>
      </div>

      {/* Main Render / Display Box */}
      <div className="relative aspect-[16/9] w-full bg-[#EDF2F7]/70 border border-slate-200/80 rounded-xl overflow-hidden flex flex-col justify-between group shadow-inner">
        
        {/* Render graphic content */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          {renderMode === 'silhouette' ? (
            <CategorySilhouette categoryId={categoryId} branchId={branchId} className="w-full h-full max-h-[190px] drop-shadow-md" />
          ) : (
            <img
              src={currentSrc}
              alt={`${assetName} - ${currentAngle.subtitle}`}
              referrerPolicy="no-referrer"
              loading="eager"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              onError={() => {
                if (currentSrc !== fallbackImage) setCurrentSrc(fallbackImage);
              }}
            />
          )}
        </div>

        {/* Center Bottom Pill Badge over graphic */}
        <div className="absolute top-auto bottom-20 left-0 right-0 flex justify-center pointer-events-none z-10">
          <div className="bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm font-mono text-[11px] text-slate-700 px-4 py-1 rounded-full inline-flex items-center gap-1.5 pointer-events-auto">
            <ShieldCheck className="w-3.5 h-3.5 text-[#131F37]" />
            <span>
              {renderMode === 'silhouette' ? 'Official Vector Silhouette Rendering' : `Real Photo • ${activeImage.credit}`}
            </span>
          </div>
        </div>

        {/* Absolute Bottom Dark Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#131F37] via-[#131F37]/85 to-transparent flex items-end justify-between rounded-b-xl text-white z-10">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight leading-none">
              {assetName}
            </h3>
            <p className="text-xs font-mono text-slate-300 font-medium">
              us {originCountries.join(', ')} • {manufacturer}
            </p>
          </div>

          {/* Right Overlay View Badge */}
          <div className="bg-white/15 backdrop-blur-md border border-white/30 text-white font-mono text-xs px-3.5 py-1.5 rounded-md font-semibold tracking-wide shadow-xs shrink-0">
            {currentAngle.subtitle}
          </div>
        </div>
      </div>

      {/* Multi-Angle 4-Button Tab Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
        {defaultAngles.map((angle, idx) => {
          const isSelected = selectedAngleIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedAngleIndex(idx)}
              className={`p-3 rounded-lg border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#131F37] text-white border-[#131F37] shadow-md ring-2 ring-[#131F37]/20'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
              }`}
            >
              <span className={`font-sans font-bold text-xs uppercase ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                {angle.title}
              </span>
              <span className={`text-[10px] font-mono mt-0.5 truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                {angle.subtitle}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

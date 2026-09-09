'use client';

import React from 'react';

interface CategorySilhouetteProps {
  categoryId: string;
  branchId?: string;
  className?: string;
}

export function CategorySilhouette({ categoryId, branchId, className = 'w-full h-full' }: CategorySilhouetteProps) {
  // Select vector SVG silhouette path based on category/branch
  const isTank = categoryId.includes('tank') || categoryId === 'ifvs' || categoryId === 'apcs' || categoryId === 'mrap';
  const isAircraft = branchId === 'air-force' || categoryId.includes('aircraft') || categoryId.includes('fighter') || categoryId.includes('bomber');
  const isHeli = categoryId.includes('helicopter');
  const isSubmarine = categoryId.includes('submarine');
  const isShip = branchId === 'navy' || categoryId.includes('carrier') || categoryId.includes('destroyer') || categoryId.includes('frigate') || categoryId.includes('corvette') || categoryId.includes('ship');
  const isMissile = categoryId.includes('missile') || categoryId.includes('artillery') || categoryId.includes('rocket');

  if (isTank) {
    return (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Cannon Barrel */}
        <rect x="60" y="78" x2="200" y2="84" width="140" height="7" rx="2" fill="#8FA3BF" />
        <rect x="50" y="76" width="15" height="11" rx="1.5" fill="#7890B2" />
        
        {/* Turret */}
        <path d="M170 85 C170 65, 200 50, 250 50 L260 50 C290 50, 305 70, 305 85 Z" fill="#8FA3BF" stroke="#7890B2" strokeWidth="3" />
        {/* Cupola */}
        <rect x="220" y="42" width="18" height="8" rx="2" fill="#7890B2" />
        
        {/* Hull */}
        <path d="M130 95 L315 95 L345 125 L100 125 Z" fill="#9FB3CE" stroke="#7890B2" strokeWidth="3" />
        
        {/* Track Assembly */}
        <rect x="108" y="125" width="230" height="35" rx="17.5" fill="#8FA3BF" stroke="#6880A2" strokeWidth="4" />
        {/* Road Wheels */}
        <circle cx="130" cy="142.5" r="11" fill="#B4C6DD" stroke="#6880A2" strokeWidth="3" />
        <circle cx="165" cy="142.5" r="11" fill="#B4C6DD" stroke="#6880A2" strokeWidth="3" />
        <circle cx="200" cy="142.5" r="11" fill="#B4C6DD" stroke="#6880A2" strokeWidth="3" />
        <circle cx="235" cy="142.5" r="11" fill="#B4C6DD" stroke="#6880A2" strokeWidth="3" />
        <circle cx="270" cy="142.5" r="11" fill="#B4C6DD" stroke="#6880A2" strokeWidth="3" />
        <circle cx="305" cy="142.5" r="11" fill="#B4C6DD" stroke="#6880A2" strokeWidth="3" />
      </svg>
    );
  }

  if (isHeli) {
    return (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Main Rotor Blade */}
        <line x1="60" y1="40" x2="340" y2="40" stroke="#7890B2" strokeWidth="5" strokeLinecap="round" />
        <line x1="200" y1="40" x2="200" y2="60" stroke="#6880A2" strokeWidth="4" />

        {/* Helicopter Fuselage */}
        <path d="M120 100 C120 70, 240 70, 260 100 C270 115, 250 130, 160 130 C120 130, 120 115, 120 100 Z" fill="#8FA3BF" stroke="#6880A2" strokeWidth="3" />
        {/* Cockpit Canopy */}
        <path d="M125 100 C130 80, 170 80, 185 100 Z" fill="#C5D7ED" stroke="#7890B2" strokeWidth="2" />

        {/* Tail Boom & Rotor */}
        <path d="M255 105 L350 95 L355 80 L345 80 L340 100 Z" fill="#7890B2" />
        <circle cx="350" cy="85" r="12" fill="none" stroke="#6880A2" strokeWidth="3" />

        {/* Landing Skids */}
        <path d="M140 145 L240 145 M160 130 L160 145 M220 130 L220 145" stroke="#6880A2" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (isAircraft) {
    return (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Fighter Jet Top Down / Silhouette */}
        {/* Fuselage */}
        <path d="M200 30 L210 90 L215 150 L200 170 L185 150 L190 90 Z" fill="#8FA3BF" stroke="#6880A2" strokeWidth="3" />
        {/* Cockpit */}
        <path d="M195 55 C195 45, 205 45, 205 55 L204 80 L196 80 Z" fill="#C5D7ED" stroke="#7890B2" strokeWidth="2" />
        {/* Main Delta Wings */}
        <path d="M190 90 L90 145 L130 150 L185 130 Z" fill="#7890B2" stroke="#6880A2" strokeWidth="2" />
        <path d="M210 90 L310 145 L270 150 L215 130 Z" fill="#7890B2" stroke="#6880A2" strokeWidth="2" />
        {/* Tail Fins */}
        <path d="M185 145 L150 175 L185 165 Z" fill="#6880A2" />
        <path d="M215 145 L250 175 L215 165 Z" fill="#6880A2" />
      </svg>
    );
  }

  if (isSubmarine) {
    return (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Submarine Hull */}
        <path d="M60 100 C60 70, 340 70, 340 100 C340 130, 60 130, 60 100 Z" fill="#8FA3BF" stroke="#6880A2" strokeWidth="3" />
        {/* Sail / Conning Tower */}
        <rect x="200" y="55" width="45" height="25" rx="4" fill="#7890B2" stroke="#6880A2" strokeWidth="2" />
        {/* Periscopes */}
        <line x1="215" y1="42" x2="215" y2="55" stroke="#6880A2" strokeWidth="3" />
        <line x1="225" y1="38" x2="225" y2="55" stroke="#6880A2" strokeWidth="3" />
        {/* Rudders / Propeller */}
        <path d="M335 90 L360 80 L355 120 L335 110 Z" fill="#6880A2" />
      </svg>
    );
  }

  if (isShip) {
    return (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Warship Hull */}
        <path d="M60 120 L100 145 L320 145 L350 120 Z" fill="#8FA3BF" stroke="#6880A2" strokeWidth="3" />
        {/* Superstructure */}
        <path d="M140 120 L150 75 L230 75 L250 120 Z" fill="#7890B2" stroke="#6880A2" strokeWidth="2" />
        {/* Bridge & Mast */}
        <rect x="170" y="50" width="30" height="25" fill="#9FB3CE" />
        <line x1="185" y1="25" x2="185" y2="50" stroke="#6880A2" strokeWidth="4" />
        <line x1="175" y1="35" x2="195" y2="35" stroke="#6880A2" strokeWidth="3" />
        {/* Gun Turret */}
        <path d="M90 120 C90 110, 110 110, 115 120 Z" fill="#6880A2" />
        <line x1="75" y1="114" x2="95" y2="114" stroke="#6880A2" strokeWidth="3" />
      </svg>
    );
  }

  // Missile / Sensor Default Vector Silhouette
  return (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Missile Nose & Body */}
      <path d="M80 100 L120 85 L320 85 L320 115 L120 115 Z" fill="#8FA3BF" stroke="#6880A2" strokeWidth="3" />
      {/* Fins */}
      <path d="M300 85 L330 60 L320 85 Z" fill="#6880A2" />
      <path d="M300 115 L330 140 L320 115 Z" fill="#6880A2" />
      <path d="M160 85 L180 70 L190 85 Z" fill="#7890B2" />
      <path d="M160 115 L180 130 L190 115 Z" fill="#7890B2" />
    </svg>
  );
}

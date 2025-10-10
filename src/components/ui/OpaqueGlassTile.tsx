import React from 'react';
import { twMerge } from 'tailwind-merge';

interface OpaqueGlassTileProps {
  children: React.ReactNode;
  className?: string;
}

export const OpaqueGlassTile: React.FC<OpaqueGlassTileProps> = ({ children, className }) => {
  const baseClasses = `
    // --- Structure & Layout ---
    rounded-2xl
    p-6

    // --- Light Mode (Opaque) ---
    bg-white
    border border-slate-200
    
    // --- Dark Mode (Opaque) - Updated ---
    dark:bg-[#1c2538]
    dark:border dark:border-slate-700/50

    // --- Shadows & Effects ---
    shadow-lg hover:shadow-xl
    
    // --- Transitions ---
    transition-all duration-300
  `;

  return (
    <div className={twMerge(baseClasses, className)}>
      {children}
    </div>
  );
};
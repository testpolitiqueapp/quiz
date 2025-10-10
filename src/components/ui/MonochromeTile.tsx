import React from 'react';
import { twMerge } from 'tailwind-merge';

interface MonochromeTileProps {
  children: React.ReactNode;
  className?: string;
}

export const MonochromeTile: React.FC<MonochromeTileProps> = ({ children, className }) => {
  const baseClasses = `
    // --- Structure & Layout ---
    rounded-2xl
    p-6

    // --- Light Mode (Glass Effect) ---
    bg-gradient-to-br from-white/90 to-white/70
    border border-white/20
    
    // --- Dark Mode (Glass Effect) - Updated with #252e3e ---
    dark:bg-gradient-to-br dark:from-slate-900/40 dark:to-slate-800/20
    dark:border dark:border-slate-700/50

    // --- Shadows & Effects ---
    shadow-lg hover:shadow-xl
    
    // --- Transitions ---
    transition-all duration-300
    
    // --- Backdrop Effect (si supporté) ---
    supports-[backdrop-filter]:bg-white/80
    supports-[backdrop-filter]:dark:bg-[#252e3e]/20
  `;

  return (
    <div className={twMerge(baseClasses, className)}>
      {children}
    </div>
  );
};
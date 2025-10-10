import React from 'react';
import { twMerge } from 'tailwind-merge';

interface GlassTileProps {
  children: React.ReactNode;
  className?: string;
  partyId?: string; 
  isDark?: boolean; 
}
export const GlassTile: React.FC<GlassTileProps> = ({ children, className, ..._rest }) => {

  if (process.env.NODE_ENV === 'development') {
    void _rest; 
  }

  const lightModeClasses = `
    bg-[#fcfdfe]/90
    border border-gray-100
    shadow-[0_5px_10px_0_rgba(0,0,0,0.07),0_1px_2px_0_rgba(0,0,0,0.04)]
  `;

  const darkModeClasses = `
    dark:bg-[#1a2130]
    dark:border-transparent
    dark:shadow-[0_5px_10px_0_rgba(0,0,0,0.3),0_1px_2px_0_rgba(0,0,0,0.12)]
  `;

  return (
    <div
      className={twMerge(
        'relative rounded-2xl overflow-hidden',
        lightModeClasses,
        darkModeClasses,
        className
      )}
    >
      <div className="relative z-10 p-1">
        {children}
      </div>
    </div>
  );
};
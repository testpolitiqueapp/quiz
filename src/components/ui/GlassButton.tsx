import React from 'react';
import { twMerge } from 'tailwind-merge';

interface GlassButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'lg' | 'md' | 'sm';
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const GlassButton: React.FC<GlassButtonProps> = ({ 
  onClick, 
  children, 
  className, 
  variant = 'primary',
  size = 'lg',
  icon,
  disabled = false
}) => {
  const baseClasses = `
    relative 
    group 
    font-semibold 
    transition-colors
    transition-[box-shadow]
    transition-transform 
    duration-300 
    inline-flex 
    items-center 
    justify-center
    gap-3 
    active:scale-100
    active:translate-y-0 
    rounded-2xl
    shadow-lg hover:shadow-xl
    ring-1 ring-white/10
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-br from-blue-500 to-indigo-600
      hover:from-blue-600 hover:to-indigo-700
      text-white
      shadow-blue-500/25 hover:shadow-blue-500/40
      focus:ring-blue-500/50
    `,
    secondary: `
      bg-gradient-to-br from-emerald-500 to-green-600
      hover:from-emerald-600 hover:to-green-700
      text-white
      shadow-emerald-500/25 hover:shadow-emerald-500/40
      focus:ring-emerald-500/50
    `,
    tertiary: `
      bg-gradient-to-br from-slate-100/80 to-white/60 
      hover:from-slate-200/80 hover:to-white/80
      text-gray-900
      border border-slate-200/60
      shadow-slate-500/10 hover:shadow-slate-500/20
      focus:ring-slate-500/50
      dark:from-slate-800/30 dark:to-slate-900/20
      dark:hover:from-slate-700/40 dark:hover:to-slate-800/30
      dark:text-gray-100
      dark:border-slate-700/40
      dark:shadow-black/20 dark:hover:shadow-black/30
      dark:focus:ring-slate-400/50
    `,
  };

  const sizeClasses = {
    lg: `text-lg px-8 py-4 min-h-[3.5rem]`,
    md: `text-base px-6 py-3 min-h-[2.75rem]`,
    sm: `text-sm px-4 py-2 min-h-[2.25rem]`,
  };

  const finalClasses = twMerge(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  return (
    <button 
      onClick={onClick} 
      className={finalClasses}
      disabled={disabled}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </button>
  );
};

export default GlassButton;
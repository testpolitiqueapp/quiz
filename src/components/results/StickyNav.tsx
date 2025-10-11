import React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  User,
  Ban,
  Heart,
  BookmarkCheck,
  ChartBar,
  Clock,
} from 'lucide-react';

const navLinks = [
  { id: 'parti-vainqueur', label: 'Parti', Icon: User },
  { id: 'parti-oppose', label: 'Opposant', Icon: Ban },
  { id: 'prismes-politiques', label: 'Sensibilités', Icon: Heart },
  { id: 'themes-prioritaires', label: 'Priorités', Icon: BookmarkCheck },
  { id: 'conviction-forte', label: 'Analyse', Icon: ChartBar },
  { id: 'temps-reponse', label: 'Temps', Icon: Clock },
];

interface StickyNavProps {
  activeSection: string;
}

export const StickyNav: React.FC<StickyNavProps> = ({ activeSection }) => {
  return (
    <nav className="fixed top-25 left-1/2 -translate-x-1/2 z-50 lg:hidden">
      <div className="flex items-center justify-center gap-0.5 rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur p-1.5 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
        {navLinks.map(({ id, label, Icon }) => {
          const isActive = activeSection === id;

          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              className="flex flex-col h-12 w-12 items-center justify-center gap-1 rounded-xl transition-colors duration-200"
            >
              <div
                className={twMerge(
                  "relative flex items-center justify-center h-8 w-8 rounded-xl transition-all duration-300 mb-0.5",
                  !isActive && "bg-gray-200 dark:bg-slate-700",
                  isActive && [
                    "bg-gradient-to-br from-blue-500 to-indigo-600",
                    "shadow-lg shadow-blue-500/30",
                    "scale-110",
                  ]
                )}
              >
                <Icon
                  className={twMerge(
                    "h-4 w-4 transition-colors duration-300",
                    !isActive && "text-slate-500 dark:text-slate-400",
                    isActive && "text-white drop-shadow-sm"
                  )}
                />
                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
                )}
              </div>

              <span
                className={twMerge(
                  "text-[9px] tracking-tighter transition-colors duration-300",
                  !isActive && "text-gray-600 dark:text-gray-300 font-medium",
                  isActive && "text-blue-600 dark:text-blue-300 font-bold"
                )}
              >
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
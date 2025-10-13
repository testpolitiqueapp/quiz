import React, { useMemo, useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { MapPinCheck as MapPinCheckInside } from 'lucide-react'; 
import { GlassTile } from '../ui/GlassTile';
import type { Party } from '../../parties';

interface PositionnementPolitiqueProps {
  topParty: Party;
  themeClasses: {
    text: {
      primary: string;
      secondary: string;
    };
    border: {
      main: string;
    };
  };
  isDark: boolean;
}

const segments = [
  { orientation: "Extrême gauche" }, { orientation: "Communiste" },
  { orientation: "Gauche écologiste" }, { orientation: "Gauche" },
  { orientation: "Centre gauche" }, { orientation: "Centre" },
  { orientation: "Centre droit" }, { orientation: "Droite" },
  { orientation: "Droite souverainiste" }, { orientation: "Droite nationaliste" },
  { orientation: "Extrême droite" }
];

const getContrastColor = (hexColor: string): string => {
  if (!hexColor || hexColor.length < 7) return '#FFFFFF';
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
  return luminance > 160 ? '#111827' : '#FFFFFF';
};


export const PositionnementPolitique: React.FC<PositionnementPolitiqueProps> = ({
  topParty,
  themeClasses,
  isDark,
}) => {
  if (!topParty) {
    console.error("ERREUR DANS <PositionnementPolitique />: La prop 'topParty' est manquante ou undefined.");
    return null;
  }

  const orientation = topParty.orientation;
  const partyColor = topParty.color?.[isDark ? 'dark' : 'light'] || '#71717a';

  // --- MODIFICATION ICI : La lueur vient du bas ---
  const backgroundGlowStyle = {
    backgroundImage: `radial-gradient(ellipse 150% 200% at 50% 120%, ${partyColor}15, transparent 70%)`,
  };

  const currentIndex = useMemo(() => segments.findIndex(s => s.orientation === orientation), [orientation]);
  const finalPositionPercentage = currentIndex >= 0 ? (currentIndex * (100 / segments.length)) + ((100 / segments.length) / 2) : 50;

  const [isMounted, setIsMounted] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [showWaves, setShowWaves] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 100);
    const cursorTimer = setTimeout(() => setIsCursorVisible(true), 300);
    const wavesTimer = setTimeout(() => setShowWaves(true), 800);
    return () => {
      clearTimeout(mountTimer);
      clearTimeout(cursorTimer);
      clearTimeout(wavesTimer);
    };
  }, []);

  const totalSegments = segments.length;
  const ticks = Array.from({ length: totalSegments + 1 }, (_, i) => ({ left: i * (100 / totalSegments), index: i }));
  const legendLabels = ['Ext. Gauche', 'Gauche', 'Centre', 'Droite', 'Ext. Droite'];
  const majorTickIndices = useMemo(() => [0, 3, 6, 9, 11], []);

  const badgeDynamicStyles = {
    backgroundColor: partyColor,
    color: getContrastColor(partyColor),
    boxShadow: `0 8px 24px -8px ${partyColor}aa, 0 4px 6px -4px ${partyColor}77`,
  };
  
  const cursorSizeClasses = "w-5 h-5";
  const cursorInnerSizeClasses = "w-2 h-2";
  const waveSizeClasses = "w-5 h-5";
  const badgeBaseClasses = "inline-block px-3 py-1.5 rounded-2xl font-bold text-sm transition-all duration-300 transform hover:scale-110";

  return (
    <GlassTile className={twMerge("relative p-0 overflow-hidden", "transition-all duration-700 ease-out", !isMounted ? "opacity-0 translate-y-5 scale-95" : "opacity-100 translate-y-0 scale-100")}>
      
      <div
        className="absolute inset-0 pointer-events-none opacity-70 dark:opacity-100"
        style={backgroundGlowStyle}
      />
      
      <div className="relative p-4 sm:p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={twMerge("group relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg transition-all duration-300 flex-shrink-0", "bg-gradient-to-br from-slate-500 to-slate-600 dark:from-slate-600 dark:to-slate-700", "group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-slate-500/30 dark:group-hover:shadow-black/30", "ring-1 ring-slate-900/10 dark:ring-white/10")}>
            <MapPinCheckInside className="w-6 h-6 text-white drop-shadow-sm" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className={twMerge("text-xl font-bold tracking-tight leading-snug", themeClasses.text.primary)}>Votre orientation</h3>
            <div className={twMerge("mt-2", badgeBaseClasses)} style={badgeDynamicStyles}>{orientation}</div>
          </div>
        </div>
        <div className="w-full rounded-full border border-slate-200/60 dark:border-slate-700/60 p-1 mt-6">
          <div className="relative h-2">
            <div className="h-full w-full rounded-full bg-slate-200 dark:bg-slate-700 shadow-inner" aria-hidden />
            <div className={twMerge("absolute top-1/2 -translate-y-1/2 -translate-x-1/2", "transition-all duration-700 ease-out", !isCursorVisible ? "opacity-0 scale-50" : "opacity-100 scale-100")} style={{ left: `${finalPositionPercentage}%` }} aria-label={`Position actuelle : ${orientation}`} role="img">
              {showWaves && (
                <>
                  <div style={{ backgroundColor: partyColor, opacity: 0.3 }} className={twMerge("absolute top-0 left-0 rounded-full animate-wave-1", waveSizeClasses)} />
                  <div style={{ backgroundColor: partyColor, opacity: 0.2 }} className={twMerge("absolute top-0 left-0 rounded-full animate-wave-2", waveSizeClasses)} />
                  <div style={{ backgroundColor: partyColor, opacity: 0.1 }} className={twMerge("absolute top-0 left-0 rounded-full animate-wave-3", waveSizeClasses)} />
                </>
              )}
              <div
                className={twMerge(
                  "relative rounded-full flex items-center justify-center",
                  cursorSizeClasses,
                  "bg-white shadow-lg ring-1 ring-black/5"
                )}
              >
                <div className={twMerge("rounded-full", cursorInnerSizeClasses)} style={{ backgroundColor: partyColor }} />
                <div className="absolute inset-0 rounded-full" style={{ boxShadow: `0 0 10px 2px ${partyColor}55` }} />
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-2">
          <div className="relative h-4">
            {ticks.map(({ left, index }) => {
              const isMajorTick = majorTickIndices.includes(index);
              const positionStyle = { left: `${left}%` };
              return (<span key={index} className={twMerge("absolute bottom-0 -translate-x-1/2 w-px rounded-full", isMajorTick ? twMerge("h-3 w-0.5", isDark ? "bg-slate-400" : "bg-slate-500") : twMerge("h-1.5 w-px", isDark ? "bg-slate-600/60" : "bg-slate-400/70"))} style={positionStyle} aria-hidden />);
            })}
          </div>
        </div>
        <div className="mt-2">
          <div className={twMerge("relative h-4 text-[8px] sm:text-[11px] font-medium tracking-wide", isDark ? "text-slate-400" : "text-slate-600")} aria-label="Légende de la jauge politique">
            {legendLabels.map((label, i) => {
              const majorTickIndex = majorTickIndices[i];
              const tickPosition = ticks.find(t => t.index === majorTickIndex)?.left || 0;
              let positionClasses = "transform -translate-x-1/2 text-center";
              if (majorTickIndex === 0) {
                positionClasses = "transform-none text-left";
              } else if (majorTickIndex === totalSegments) {
                positionClasses = "transform -translate-x-full text-right";
              }
              const visibilityClass = (label === 'Gauche' || label === 'Droite') ? "hidden sm:block" : "block";
              return (
                <span key={label} className={twMerge("absolute select-none whitespace-nowrap", positionClasses, visibilityClass)} style={{ left: `${tickPosition}%` }}>
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </GlassTile>
  );
};
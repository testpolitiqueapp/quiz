import React, { useMemo, useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { MapPinCheckInside } from 'lucide-react';
import { GlassTile } from '../ui/GlassTile';

interface PositionnementPolitiqueProps {
  orientation: string;
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

const segmentWidth = (100 / 11).toFixed(4) + '%';
const segments = [
  { orientation: "Extrême gauche",       color: "#b70000", width: segmentWidth },
  { orientation: "Communiste",           color: "#f20028", width: segmentWidth },
  { orientation: "Gauche écologiste",    color: "#f2008e", width: segmentWidth },
  { orientation: "Gauche",               color: "#f800ef", width: segmentWidth },
  { orientation: "Centre gauche",        color: "#de00f8", width: segmentWidth },
  { orientation: "Centre",               color: "#9200f8", width: segmentWidth },
  { orientation: "Centre droit",         color: "#4c00f8", width: segmentWidth },
  { orientation: "Droite",               color: "#023aef", width: segmentWidth },
  { orientation: "Droite souverainiste", color: "#0223ef", width: segmentWidth },
  { orientation: "Droite nationaliste",  color: "#001cc8", width: segmentWidth },
  { orientation: "Extrême droite",       color: "#03168b", width: segmentWidth }
];

export const PositionnementPolitique: React.FC<PositionnementPolitiqueProps> = ({
  orientation,
  themeClasses,
  isDark,
}) => {
  const currentIndex = segments.findIndex(s => s.orientation === orientation);
  const singleSegmentWidthPercent = 100 / segments.length;
  const finalPositionPercentage =
    (currentIndex * singleSegmentWidthPercent) + (singleSegmentWidthPercent / 2);

  // --- GESTION DES ANIMATIONS ---
  const [isMounted, setIsMounted] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(false); // NOUVEAU : état pour l'animation du curseur
  const [showWaves, setShowWaves] = useState(false);

  useEffect(() => {
    // Déclenche l'animation principale du composant
    const mountTimer = setTimeout(() => setIsMounted(true), 100);
    
    // NOUVEAU : Déclenche l'animation du curseur avec un léger délai
    const cursorTimer = setTimeout(() => setIsCursorVisible(true), 300);

    // Déclenche l'animation des ondes du curseur (après les autres animations)
    const wavesTimer = setTimeout(() => setShowWaves(true), 800);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(cursorTimer); // NOUVEAU : Nettoyage du timer
      clearTimeout(wavesTimer);
    };
  }, []);

  const gradientBackground = useMemo(() => {
    let cumulativeWidth = 0;
    const stops = segments.map(segment => {
      const width = parseFloat(segment.width);
      const midpoint = cumulativeWidth + width / 2;
      cumulativeWidth += width;
      return `${segment.color} ${midpoint.toFixed(2)}%`;
    });
    const fullGradient = [segments[0].color, ...stops, segments[segments.length - 1].color].join(', ');
    return `linear-gradient(to right, ${fullGradient})`;
  }, []);

  const totalSegments = segments.length;
  const ticks = Array.from({ length: totalSegments + 1 }, (_, i) => ({
    left: i * (100 / totalSegments),
    index: i,
  }));

  const legendLabels = ['Ext. Gauche', 'Gauche', 'Centre', 'Droite', 'Ext. Droite'];

  const majorTickIndices = useMemo(() => {
    return [0, 3, 6, 9, 11];
  }, []);

  const cursorSizeClasses = "w-5 h-5";
  const cursorInnerSizeClasses = "w-2 h-2";
  const waveSizeClasses = "w-5 h-5";


  return (
    <GlassTile className={twMerge(
        "relative p-6",
        "transition-all duration-700 ease-out",
        !isMounted ? "opacity-0 translate-y-5 scale-95" : "opacity-100 translate-y-0 scale-100"
    )}>
      {/* Header */}
      <div className="mb-6 flex items-start gap-4">
        <div
          className={twMerge(
            "relative flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-2xl shadow-lg",
            "bg-gradient-to-br from-blue-500 to-indigo-600",
            "ring-1 ring-blue-500/20",
            "transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
          )}
        >
          <MapPinCheckInside className="w-6 h-6 text-white drop-shadow-sm" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
        </div>
        <div>
          <h3 className={twMerge("text-2xl font-bold tracking-tight", themeClasses.text.primary)}>
            Votre orientation
          </h3>
          <p className={twMerge("text-lg font-semibold leading-tight mt-1", themeClasses.text.secondary)}>
            {orientation}
          </p>
        </div>
      </div>

      {/* Jauge */}
      <div className="w-full rounded-full border border-slate-200/60 dark:border-slate-700/60 p-1">
        <div className="relative h-2">
          <div
            className="h-full w-full rounded-full shadow-inner"
            style={{ backgroundImage: gradientBackground }}
            aria-hidden
          />
          {/* Curseur MODIFIÉ pour l'animation d'apparition */}
          <div
            className={twMerge(
                "absolute top-1/2 -translate-y-1/2 -translate-x-1/2",
                // Transition pour le déplacement (si orientation change) ET pour l'apparition
                "transition-all duration-700 ease-out", 
                // État initial de l'animation d'apparition
                !isCursorVisible ? "opacity-0 scale-50" : "opacity-100 scale-100"
            )}
            style={{ left: `${finalPositionPercentage}%` }}
            aria-label={`Position actuelle : ${orientation}`}
            role="img"
          >
            {showWaves && (
              <>
                <div className={twMerge("absolute top-0 left-0 rounded-full animate-wave-1", waveSizeClasses, isDark ? "bg-slate-400/30" : "bg-slate-600/30")} />
                <div className={twMerge("absolute top-0 left-0 rounded-full animate-wave-2", waveSizeClasses, isDark ? "bg-slate-400/20" : "bg-slate-600/20")} />
                <div className={twMerge("absolute top-0 left-0 rounded-full animate-wave-3", waveSizeClasses, isDark ? "bg-slate-400/10" : "bg-slate-600/10")} />
              </>
            )}
            <div
              className={twMerge(
                "relative rounded-full flex items-center justify-center",
                cursorSizeClasses,
                "bg-white dark:bg-slate-800 shadow-md",
                isDark ? "border border-slate-700" : "border border-slate-200"
              )}
            >
              <div className={twMerge("rounded-full bg-slate-900 dark:bg-slate-200", cursorInnerSizeClasses)} />
              <div className="absolute inset-0 rounded-full shadow-[0_0_10px_2px] shadow-slate-900/20 dark:shadow-slate-200/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Repères (ticks) */}
      <div className="relative mt-2">
        <div className="relative h-4">
          {ticks.map(({ left, index }) => {
            const isMajorTick = majorTickIndices.includes(index);
            
            return (
              <span
                key={index}
                className={twMerge(
                  "absolute bottom-0 w-px rounded-full",
                  index !== 0 && index !== totalSegments ? "-translate-x-1/2" : "", 
                  isMajorTick
                    ? twMerge("h-3 w-0.5", isDark ? "bg-slate-400" : "bg-slate-500") 
                    : twMerge("h-1.5 w-px", isDark ? "bg-slate-600/60" : "bg-slate-400/70"), 
                  "transition-all duration-200 ease-out"
                )}
                style={{ left: `${left}%` }}
                aria-hidden
              />
            );
          })}
        </div>
      </div>

      {/* Légende */}
      <div className="mt-2 px-1">
        <div
          className={twMerge(
            "relative h-4 text-[10px] sm:text-[11px] font-medium tracking-wide",
            isDark ? "text-slate-400" : "text-slate-600"
          )}
          aria-label="Légende de la jauge politique"
        >
          {legendLabels.map((label, i) => {
            const majorTickIndex = majorTickIndices[i];
            const majorTickLeft = ticks.find(t => t.index === majorTickIndex)?.left || 0;
            
            let positionClasses = "";
            let positionStyle = {};
            let visibilityClass = "";

            if (label === 'Gauche' || label === 'Droite') {
                visibilityClass = "hidden sm:block"; 
            } else {
                visibilityClass = "block";
            }

            if (majorTickIndex === 0) {
              positionClasses = "left-0"; 
            } else if (majorTickIndex === totalSegments) {
              positionClasses = "right-0 text-right";
            } else {
              positionClasses = "transform -translate-x-1/2 text-center";
              positionStyle = { left: `${majorTickLeft}%` };
            }
            
            return (
              <span
                key={label}
                className={twMerge("absolute select-none whitespace-nowrap", positionClasses, visibilityClass)}
                style={positionStyle}
              >
                {label}
              </span>
            );
          })}
        </div>
      </div>
    </GlassTile>
  );
};
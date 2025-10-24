import React, { useMemo, useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { Check, MapPinCheckInside } from 'lucide-react';
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
  const [isMounted, setIsMounted] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [showWaves, setShowWaves] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 100);
    const cursorTimer = setTimeout(() => setIsCursorVisible(true), 400);
    const wavesTimer = setTimeout(() => setShowWaves(true), 900);
    return () => {
      clearTimeout(mountTimer);
      clearTimeout(cursorTimer);
      clearTimeout(wavesTimer);
    };
  }, []);

  const orientation = topParty?.orientation;
  const currentIndex = useMemo(() => {
    return orientation ? segments.findIndex(s => s.orientation === orientation) : -1;
  }, [orientation]);

  const majorTickIndices = useMemo(() => [0, 3, 6, 9, 11], []);

  if (!topParty) {
    console.error("ERREUR DANS <PositionnementPolitique />: La prop 'topParty' est manquante ou undefined.");
    return null;
  }
  
  const partyColor = topParty.color?.[isDark ? 'dark' : 'light'] || '#71717a';

  const finalPositionPercentage = currentIndex >= 0 
    ? (currentIndex * (100 / segments.length)) + ((100 / segments.length) / 2) 
    : 50;

  const backgroundGlowStyle = {
    background: `radial-gradient(ellipse 120% 100% at ${finalPositionPercentage}% 0%, ${partyColor}15, transparent 60%)`,
  };

  const totalSegments = segments.length;
  const ticks = Array.from({ length: totalSegments + 1 }, (_, i) => ({ left: i * (100 / totalSegments), index: i }));
  const legendLabels = ['Ext. Gauche', 'Gauche', 'Centre', 'Droite', 'Ext. Droite'];

  const badgeDynamicStyles = {
    backgroundColor: partyColor,
    color: getContrastColor(partyColor),
    boxShadow: `0 4px 20px -4px ${partyColor}90, 0 0 0 1px ${partyColor}30`,
  };

  return (
    // ======= MODIFICATION ICI =======
    // 1. Conteneur parent en 'relative' pour positionner l'icône
    <div
      className={twMerge(
        "relative transition-all duration-700 ease-out", // Ajout de 'relative'
        !isMounted ? "opacity-0 translate-y-8 scale-[0.98]" : "opacity-100 translate-y-0 scale-100"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* 2. Icône sortie du flux, positionnée en absolu et en débordement */}
      <div className={twMerge(
        "group absolute left-1/2 -translate-x-1/2 top-0 z-20", // Positionnement central en haut
        "flex items-center justify-center w-14 h-14 rounded-3xl",
        "transition-all duration-500 flex-shrink-0",
        "bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800",
        isHovered ? "scale-110 rotate-6" : "scale-100 rotate-0",
        "shadow-lg hover:shadow-2xl",
        "ring-1 ring-black/5 dark:ring-white/10",
        "-translate-y-1/2" // <-- C'est ça qui crée le débordement
      )}>
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/40 to-transparent opacity-60" />
        <MapPinCheckInside
          className={twMerge(
            "w-7 h-7 text-slate-700 dark:text-slate-200 drop-shadow-sm relative z-10",
            "transition-transform duration-500",
            isHovered ? "rotate-45" : "rotate-0"
          )} 
        />
        <div className={twMerge(
          "absolute inset-0 rounded-3xl border-2 border-slate-300/20 dark:border-slate-600/20",
          "transition-all duration-700",
          isHovered ? "scale-125 opacity-0" : "scale-100 opacity-100"
        )} />
      </div>
      
      <GlassTile 
        className={twMerge(
          "relative p-0 overflow-hidden",
          "mt-7" // 3. Marge en haut pour laisser la place à la moitié de l'icône (h-14 / 2 = 1.75rem = mt-7)
        )}
      >
        {/* Gradient de fond dynamique */}
        <div
          className="absolute inset-0 pointer-events-none opacity-80 dark:opacity-100 transition-opacity duration-500"
          style={backgroundGlowStyle}
        />

        {/* Grille décorative subtile */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        
        {/* 4. Padding-top augmenté pour que le contenu ne soit pas masqué */}
        <div className="relative px-6 sm:px-8 pb-6 sm:pb-8 pt-14">
          
          {/* 5. Header recentré, sans l'icône */}
          <div className="flex flex-col items-center gap-4 mb-8">
            {/* L'icône n'est plus ici */}

            <div className="min-w-0 space-y-2 text-center"> {/* Texte centré */}
              <div>
                <h3 className={twMerge(
                  "text-2xl font-extrabold tracking-tight leading-tight",
                  themeClasses.text.primary,
                  "bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-300",
                  "bg-clip-text text-transparent"
                )}>
                  Votre orientation
                </h3>
                <p className={twMerge(
                  "text-xs mt-1 font-medium tracking-wide uppercase",
                  themeClasses.text.secondary,
                  "opacity-60"
                )}>
                  Positionnement politique
                </p>
              </div>
            </div>
              
            {/* Badge (maintenant centré sous le texte) */}
            <div 
              className={twMerge(
                "inline-flex items-center gap-2 px-4 py-2 rounded-2xl",
                "font-bold text-sm tracking-tight",
                "transition-all duration-300",
                "transform hover:scale-105 hover:shadow-lg",
                "ring-1 ring-black/10 dark:ring-white/10"
              )} 
              style={badgeDynamicStyles}
            >
              <Check className="w-4 h-4" />
              <span>{orientation}</span>
            </div>
          </div>
          {/* ======= FIN DES MODIFICATIONS ======= */}


          {/* Barre de progression modernisée */}
          <div className="space-y-4">
            {/* Conteneur de la barre principale */}
            <div className="relative">
              {/* Track avec effet de profondeur */}
              <div className="relative h-3 rounded-full overflow-hidden bg-gradient-to-r from-slate-200/80 via-slate-100/80 to-slate-200/80 dark:from-slate-700/80 dark:via-slate-800/80 dark:to-slate-700/80 shadow-inner">
                {/* Barre de progression colorée */}
                <div 
                  className="absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${finalPositionPercentage}%`,
                    background: `linear-gradient(90deg, transparent, ${partyColor}30)`,
                    opacity: 0.6
                  }}
                />
              </div>

              {/* Curseur avec animations améliorées */}
              <div 
                className={twMerge(
                  "absolute top-1/2 -translate-y-1/2 -translate-x-1/2",
                  "transition-all duration-1000 ease-out",
                  !isCursorVisible ? "opacity-0 scale-0" : "opacity-100 scale-100"
                )} 
                style={{ left: `${finalPositionPercentage}%` }}
              >
                {/* Ondes animées */}
                {showWaves && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="absolute top-0 left-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                          backgroundColor: partyColor,
                          opacity: 0.15 / i,
                          animation: `ping ${1.5 + i * 0.5}s cubic-bezier(0, 0, 0.2, 1) infinite`,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Curseur principal avec effet 3D */}
                <div className="relative">
                  {/* Ombre portée */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-60 scale-90"
                    style={{ backgroundColor: partyColor }}
                  />
                  
                  {/* Curseur externe */}
                  <div
                    className={twMerge(
                      "relative w-7 h-7 rounded-full flex items-center justify-center",
                      "bg-white dark:bg-slate-900",
                      "ring-2 ring-white dark:ring-slate-900",
                      "ring-offset-2",
                      "transition-all duration-300",
                      isHovered ? "scale-125 ring-offset-4" : "scale-100" // Utilise 'isHovered' du parent
                    )}
                    style={{ 
                      ringOffsetColor: partyColor,
                      boxShadow: `0 4px 24px ${partyColor}60, 0 0 0 1px ${partyColor}40`
                    }}
                  >
                    {/* Point central pulsant */}
                    <div 
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ 
                        backgroundColor: partyColor,
                        boxShadow: `0 0 12px ${partyColor}80, inset 0 1px 2px rgba(255,255,255,0.3)`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Ticks modernisés */}
            <div className="relative h-6 -mt-1">
              {ticks.map(({ left, index }) => {
                const isMajorTick = majorTickIndices.includes(index);
                return (
                  <span
                    key={index}
                    className={twMerge(
                      "absolute bottom-0 -translate-x-1/2 rounded-full transition-all duration-300",
                      isMajorTick 
                        ? "h-4 w-0.5 bg-slate-400 dark:bg-slate-500" 
                        : "h-2 w-px bg-slate-300/60 dark:bg-slate-600/40",
                      isHovered && isMajorTick ? "h-5 bg-slate-500 dark:bg-slate-400" : "" // Utilise 'isHovered' du parent
                    )}
                    style={{ left: `${left}%` }}
                  />
                );
              })}
            </div>

            {/* Légendes avec style amélioré */}
            <div className="relative h-6 pt-1">
              {legendLabels.map((label, i) => {
                const majorTickIndex = majorTickIndices[i];
                const tickPosition = ticks.find(t => t.index === majorTickIndex)?.left || 0;
                
                let positionClasses = "-translate-x-1/2 text-center";
                if (majorTickIndex === 0) positionClasses = "text-left";
                else if (majorTickIndex === totalSegments) positionClasses = "-translate-x-full text-right";
                
                const visibilityClass = (label === 'Gauche' || label === 'Droite') ? "hidden sm:inline-block" : "inline-block";
                
                return (
                  <span
                    key={label}
                    className={twMerge(
                      "absolute select-none whitespace-nowrap",
                      "text-[9px] sm:text-[11px] font-semibold tracking-wider uppercase",
                      "text-slate-500 dark:text-slate-400",
                      "transition-all duration-300",
                      positionClasses,
                      visibilityClass,
                      isHovered ? "text-slate-700 dark:text-slate-300" : "" // Utilise 'isHovered' du parent
                    )}
                    style={{ left: `${tickPosition}%` }}
                  >
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </GlassTile>
    </div>
  );
};
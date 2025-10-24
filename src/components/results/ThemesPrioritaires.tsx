import React, { useMemo, useRef, useState, useEffect } from 'react';
import { BookmarkCheck, ChevronDown, ChevronUp, type LucideProps } from 'lucide-react';
import { THEME_ICONS_MAP } from './resultUtils';
import { GlassTile } from '../ui/GlassTile';
import { twMerge } from 'tailwind-merge';
import * as Icons from 'lucide-react';

type IconMap = { [key: string]: React.FC<LucideProps> };

interface ThemesProps {
  prioritizedCategories: string[];
  themeAffinities: { [themeName: string]: number };
  isDark: boolean;
  themeClasses: {
    text: { primary: string; secondary: string; };
  };
  topPartyName: string;
}

const CategoryIcon: React.FC<{ iconName: string; className?: string; }> = ({ iconName, className }) => {
  const IconComponent = ((Icons as unknown) as IconMap)[iconName];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

const AnimatedBadge: React.FC<{ percentage: number; colorClasses: { badge: string; }; }> = React.memo(({ percentage, colorClasses }) => {
    const [count, setCount] = useState(0);
    const badgeRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const currentRef = badgeRef.current;
        if (!currentRef || hasAnimated) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    const finalPercentage = percentage;
                    const duration = 1200;
                    let startTimestamp: DOMHighResTimeStamp | null = null;
                    const step: FrameRequestCallback = (timestamp) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = timestamp - startTimestamp;
                        const fraction = Math.min(progress / duration, 1);
                        const easedFraction = 1 - Math.pow(1 - fraction, 3);
                        setCount(Math.floor(easedFraction * finalPercentage));
                        if (fraction < 1) {
                            requestAnimationFrame(step);
                        } else {
                            setCount(finalPercentage);
                        }
                    };
                    requestAnimationFrame(step);
                    observer.unobserve(currentRef);
                }
            }, { threshold: 0.1 }
        );
        observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, [percentage, hasAnimated]);
    
    return (
        <div className="flex items-center flex-shrink-0" ref={badgeRef}>
            <span className={twMerge("px-2 py-0.5 rounded-full text-xs font-medium ring-1", colorClasses.badge)}>
                {count}%
            </span>
        </div>
    );
});
AnimatedBadge.displayName = 'AnimatedBadge';

const ThemeItem = React.memo(({ theme, isDark, themeClasses, topPartyName }: {
    theme: { name: string; affinity: number };
    isDark: boolean;
    themeClasses: ThemesProps['themeClasses'];
    topPartyName: string;
}) => {
    const affinityPercentage = Math.round(theme.affinity);
    const [animatedWidth, setAnimatedWidth] = useState(0);
    const itemRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const currentRef = itemRef.current;
        if (!currentRef) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimatedWidth(affinityPercentage);
                    observer.unobserve(currentRef);
                }
            }, { threshold: 0.2 }
        );
        observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, [affinityPercentage]);

    let colorClasses: {
      text: string; bg: string; progress: string; badge: string; iconContainer: string;
    };

    // Style des couleurs basé sur le pourcentage (logique conservée)
    if (affinityPercentage >= 90) { colorClasses = { text: "text-emerald-700 dark:text-emerald-300", bg: isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80", progress: "bg-gradient-to-r from-emerald-500 to-emerald-400", badge: isDark ? "bg-emerald-900/40 text-emerald-300 ring-emerald-700/30" : "bg-emerald-100 text-emerald-700 ring-emerald-200/50", iconContainer: "bg-gradient-to-br from-emerald-500 to-emerald-600" }; }
    else if (affinityPercentage >= 70) { colorClasses = { text: "text-blue-700 dark:text-blue-300", bg: isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80", progress: "bg-gradient-to-r from-blue-500 to-blue-400", badge: isDark ? "bg-blue-900/40 text-blue-300 ring-blue-700/30" : "bg-blue-100 text-blue-700 ring-blue-200/50", iconContainer: "bg-gradient-to-br from-blue-500 to-indigo-600" }; }
    else if (affinityPercentage >= 50) { colorClasses = { text: "text-amber-700 dark:text-amber-300", bg: isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80", progress: "bg-gradient-to-r from-amber-500 to-amber-400", badge: isDark ? "bg-amber-900/40 text-amber-300 ring-amber-700/30" : "bg-amber-100 text-amber-700 ring-amber-200/50", iconContainer: "bg-gradient-to-br from-amber-500 to-orange-500" }; }
    else { colorClasses = { text: "text-slate-700 dark:text-slate-300", bg: isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80", progress: "bg-gradient-to-r from-slate-500 to-slate-400", badge: isDark ? "bg-slate-900/40 text-slate-300 ring-slate-700/30" : "bg-slate-100 text-slate-700 ring-slate-200/50", iconContainer: "bg-gradient-to-br from-slate-500 to-slate-600" }; }
    
    return (
      <div ref={itemRef} className={twMerge(
        "group relative p-4 rounded-3xl border", 
        "transition-all duration-300 ease-out", 
        "hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1", 
        "hover:scale-[1.02] cursor-pointer", 
        colorClasses.bg
      )}>
        <div className="relative flex items-center gap-3">
          <div className={twMerge("relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg flex-shrink-0", colorClasses.iconContainer)}>
            <CategoryIcon iconName={THEME_ICONS_MAP[theme.name]} className="w-6 h-6 text-white drop-shadow-sm" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h4 className={twMerge("font-semibold text-base leading-snug tracking-tight truncate mr-1 ", themeClasses.text.primary)}>{theme.name}</h4>
              {theme.affinity > 0 && <AnimatedBadge percentage={affinityPercentage} colorClasses={colorClasses} />}
            </div>
            {theme.affinity > 0 ? (
              // Barre de progression améliorée avec shadow-inner
              <div className={twMerge(
                "relative h-2.5 rounded-full overflow-hidden shadow-inner", 
                isDark ? "bg-slate-800/50" : "bg-slate-200/60"
              )}>
                <div className={twMerge("h-full rounded-full shadow-sm transition-[width] duration-1000 ease-out", colorClasses.progress)} style={{ width: `${animatedWidth}%` }} />
              </div>
            ) : (
              <p className={twMerge("text-xs leading-snug", themeClasses.text.secondary, "opacity-75")}>Aucune position exprimée par {topPartyName} sur ce thème.</p>
            )}
          </div>
        </div>
      </div>
    );
});
ThemeItem.displayName = 'ThemeItem';

const ThemesPrioritaires: React.FC<ThemesProps> = ({ prioritizedCategories, themeAffinities, isDark, themeClasses, topPartyName }) => {
  const [showAll, setShowAll] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(mountTimer);
  }, []);

  const priorityThemes = useMemo(() => {
    if (!prioritizedCategories || !themeAffinities) return [];
    return prioritizedCategories.map(name => ({
      name,
      affinity: themeAffinities[name] ?? 0,
    })).slice(0, 5);
  }, [prioritizedCategories, themeAffinities]);

  if (priorityThemes.length === 0) return null;

  const alwaysVisibleThemes = priorityThemes.slice(0, 3);
  const collapsibleThemes = priorityThemes.slice(3);
  const hasMoreThemes = priorityThemes.length > 3;

  return (
    // ======= CORRECTION ICI =======
    // 1. On applique les événements et les classes d'animation au <div> externe
    <div
      className={twMerge(
        "transition-all duration-700 ease-out", // Animation d'apparition
        !isMounted ? "opacity-0 translate-y-8 scale-[0.98]" : "opacity-100 translate-y-0 scale-100"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlassTile 
        className={twMerge(
          "relative p-0 overflow-hidden"
          // 2. On retire onMouseEnter/onMouseLeave et les classes d'animation d'ici
        )}
      >
        {/* La grille décorative a été retirée d'ici */}
        
        <div className="relative"> {/* Conteneur relatif pour la grille */}
          <div className="p-6 sm:p-8"> {/* Padding ajusté */}
            <div className="flex items-start gap-5"> {/* Style d'en-tête (gap, items-start) */}
              
              {/* Icône d'en-tête (style PositionnementPolitique) */}
              <div className={twMerge(
                "group relative flex items-center justify-center w-14 h-14 rounded-3xl", // Taille et forme
                "transition-all duration-500 flex-shrink-0",
                "bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800", // BG neutre
                isHovered ? "scale-110 -rotate-6" : "scale-100 rotate-0", // Effet de survol (utilise l'état 'isHovered' du parent)
                "shadow-lg hover:shadow-2xl",
                "ring-1 ring-black/5 dark:ring-white/10" // Ring
              )}>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/40 to-transparent opacity-60" />
                <BookmarkCheck 
                  className={twMerge(
                    "w-7 h-7 text-slate-700 dark:text-slate-200 drop-shadow-sm relative z-10", // Style d'icône
                    "transition-transform duration-500",
                    isHovered ? "scale-110" : "scale-100" // Animation icône (utilise l'état 'isHovered' du parent)
                  )} 
                />
                {/* Cercles décoratifs animés (style PositionnementPolitique) */}
                <div className={twMerge(
                  "absolute inset-0 rounded-3xl border-2 border-slate-300/20 dark:border-slate-600/20",
                  "transition-all duration-700",
                  isHovered ? "scale-125 opacity-0" : "scale-100 opacity-100"
                )} />
              </div>

              {/* Titres (style PositionnementPolitique) */}
              <div className="flex-1 min-w-0 space-y-3">
                <div>
                  <h3 className={twMerge(
                    "text-2xl font-extrabold tracking-tight leading-tight", // Taille et graisse
                    "bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-300", // Dégradé
                    "bg-clip-text text-transparent" // Effet de texte
                  )}>
                    Thèmes prioritaires
                  </h3>
                  <p className={twMerge(
                    "text-xs mt-1 font-medium tracking-wide uppercase", // Style sous-titre
                    themeClasses.text.secondary,
                    "opacity-60"
                  )}>
                    Affinité par thème
                  </p>
                </div>
                
                {/* "Badge" informatif (style PositionnementPolitique) */}
                <div className={twMerge(
                    "inline-block px-3 py-1.5 rounded-xl",
                    "font-medium text-xs tracking-tight",
                    "bg-slate-100 dark:bg-slate-800",
                    "border border-slate-200 dark:border-slate-700",
                    themeClasses.text.secondary
                )}>
                    Accord avec <span className={twMerge("font-bold", themeClasses.text.primary)}>{topPartyName}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="px-6 sm:px-8 pb-6 sm:pb-8"> {/* Padding ajusté */}
            <div className="space-y-3">
              {alwaysVisibleThemes.map((theme) => (
                <ThemeItem key={theme.name} theme={theme} isDark={isDark} themeClasses={themeClasses} topPartyName={topPartyName} />
              ))}
            </div>
            <div className={twMerge("grid transition-[grid-template-rows] duration-500 ease-in-out", showAll ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
              <div className="overflow-hidden">
                <div className="space-y-3 pt-3">
                  {collapsibleThemes.map((theme) => (
                    <ThemeItem key={theme.name} theme={theme} isDark={isDark} themeClasses={themeClasses} topPartyName={topPartyName} />
                  ))}
                </div>
              </div>
            </div>
            {hasMoreThemes && (
              <div className="mt-5 flex justify-center"> {/* Augmentation marge */}
                <button
                  onClick={() => setShowAll(!showAll)}
                  className={twMerge(
                    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl", // Style bouton (plus grand, rounded-2xl)
                    "text-sm font-bold", // Style texte (audacieux)
                    "transition-all duration-300",
                    "transform hover:scale-105 hover:shadow-lg active:scale-100", // Effet survol
                    "border border-slate-200/80 dark:border-slate-700/50",
                    "bg-white dark:bg-slate-800", // Fond solide
                    "shadow-md shadow-black/5 dark:shadow-black/10",
                    "ring-1 ring-black/5 dark:ring-white/10", // Ring
                    themeClasses.text.primary
                  )}
                >
                  {showAll ? (
                    <><span>Voir moins</span><ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <><span>Voir plus ({priorityThemes.length - 3})</span><ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </GlassTile>
    </div>
    // ======= FIN DE LA CORRECTION =======
  );
};

export default ThemesPrioritaires;
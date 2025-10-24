import {
  PawPrint, ShieldCheck, HeartPulse, UserCheck, Tractor, Baby, Scale,
  Flower, FlagTriangleRight, Lock, Church, Star, Factory, HeartHandshake, Castle, ReceiptEuro, Bot, 
  Atom, BookText, Wallet, Rainbow, Landmark, Zap, Venus, 
  MoveRight, MoveLeft, HeartOff, Heart, 
  type LucideProps, 
} from 'lucide-react';
import { GlassTile } from '../ui/GlassTile';
import { twMerge } from 'tailwind-merge';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import type { TagScores, PrismsDataMap, IconName } from '../../types/quiz';

const ICONS: { [key in IconName]?: React.FC<LucideProps> } = { 
  PawPrint, ShieldCheck, HeartPulse, UserCheck, Tractor, Baby, Scale,
  Flower, FlagTriangleRight, Lock, Church, Star, Factory, HeartHandshake, Castle, ReceiptEuro, Bot, 
  Atom, BookText, Wallet, Rainbow, Landmark, Zap, Venus, 
};

interface PrismesPolitiquesProps {
  tagScores: TagScores | null;
  PRISMS_DATA: PrismsDataMap;
  isDark: boolean;
  themeClasses: { text: { primary: string; secondary: string; }; };
}

const PrismIcon: React.FC<{ iconName: IconName; className?: string }> = ({ iconName, className = 'w-10 h-10' }) => {
  const IconComponent = ICONS[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
};

const AnimatedPrismIcon: React.FC<{ iconName: IconName; className?: string; }> = ({ iconName, className }) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentRef = iconRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimated]);
  
  const animationClass = isInView ? 'animate-shake-n-pulse' : 'opacity-100'; 
  
  return (
    <div ref={iconRef} className={animationClass}>
      <PrismIcon iconName={iconName} className={className} />
    </div>
  );
};

// Carte de contenu
const PrismCard = ({ prismKey, isDark, themeClasses, PRISMS_DATA }: { 
  prismKey: string; 
  isDark: boolean; 
  themeClasses: PrismesPolitiquesProps['themeClasses'];
  PRISMS_DATA: PrismsDataMap; 
}) => {
  const prismInfo = PRISMS_DATA[prismKey];
  if (!prismInfo) return null;

  const prismColors: { [key: string]: string } = {
    'ecologie': 'from-green-500 to-emerald-600', 'condition-animale': 'from-orange-500 to-amber-600', 'souverainete': 'from-red-500 to-rose-600', 'securite-autorite': 'from-gray-500 to-slate-600', 'justice-sociale': 'from-pink-500 to-rose-600', 'progressisme-societal': 'from-purple-500 to-violet-600', 'immigration-controlee': 'from-blue-500 to-indigo-600', 'laicite-stricte': 'from-yellow-500 to-orange-600', 'europe-integree': 'from-blue-500 to-cyan-600', 'liberalisme-economique': 'from-green-500 to-teal-600', 'humanisme': 'from-rose-500 to-pink-600', 'ruralite': 'from-lime-500 to-green-600', 'patrimoine': 'from-stone-500 to-neutral-600', 'jeunesse': 'from-sky-500 to-indigo-500', 'innovation-technologique': 'from-fuchsia-500 to-purple-600', 'fiscalite-juste': 'from-teal-500 to-cyan-600', 'respect-institutions': 'from-yellow-700 to-amber-800', 'independance-energetique': 'from-orange-600 to-red-700', 'education-nationale': 'from-indigo-600 to-blue-700', 'rigueur-budgetaire': 'from-slate-500 to-gray-600', 'fermete-justice': 'from-red-700 to-red-900', 'culture-inclusive': 'from-pink-600 to-purple-700', 'radicalite': 'from-yellow-500 to-amber-500', 'feminisme': 'from-pink-500 to-fuchsia-600',
  };
  const gradientColor = prismColors[prismKey] || 'from-blue-500 to-indigo-600';
  
  return (
    <div className={twMerge("flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-3xl border h-full", isDark ? 'bg-slate-800/60 border-slate-700/50' : 'bg-white border-slate-200/80')}>
      <div className={twMerge("relative flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-3xl shadow-lg", "ring-1 ring-white/10", `bg-gradient-to-br ${gradientColor}`)}>
        <AnimatedPrismIcon 
          iconName={prismInfo.icon} 
          className="w-14 h-14 text-white drop-shadow-sm" 
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
      </div>
      <div className="flex-1 text-center sm:text-left">
        {/* ======= CORRECTION DE LA BALISE ICI ======= */}
        <h4 className={twMerge("text-xl font-bold mb-2", themeClasses.text.primary)}>{prismInfo.name}</h4>
        {/* =========================================== */}
        <p className={twMerge("text-sm leading-snug", themeClasses.text.secondary)}>{prismInfo.description}</p>
      </div>
    </div>
  );
};

const PrismesPolitiques: React.FC<PrismesPolitiquesProps> = ({
  tagScores,
  PRISMS_DATA,
  isDark,
  themeClasses
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  
  // États d'animation
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(mountTimer);
  }, []);

  const seuil = 65;
  const topPrismes = useMemo(() => {
    if (!tagScores) return [];
    
    return Object.entries(tagScores)
      .map(([key, value]) => ({ 
        key, 
        score: value.score, 
        hasConviction: value.hasConviction 
      }))
      .filter((prism) => prism.score >= seuil && prism.hasConviction)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [tagScores]);


  useEffect(() => {
    const container = scrollContainerRef.current;
    
    if (topPrismes.length <= 1 || !container) {
      setCanScrollPrev(false);
      setCanScrollNext(false);
      return; 
    }

    const checkArrows = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollPrev(scrollLeft > 0);
      const maxScroll = scrollWidth - clientWidth;
      setCanScrollNext(Math.round(scrollLeft) < Math.round(maxScroll - 5)); 
    };
    
    checkArrows(); 
    
    container.addEventListener('scroll', checkArrows);
    window.addEventListener('resize', checkArrows); 

    const timeoutId = setTimeout(checkArrows, 100); 

    return () => {
      clearTimeout(timeoutId);
      if (container) {
        container.removeEventListener('scroll', checkArrows);
      }
      window.removeEventListener('resize', checkArrows);
    };
  }, [topPrismes.length]); 

  const handleScroll = (direction: 'prev' | 'next') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.9;
    const newScrollLeft = direction === 'prev' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  };
  
  // Rendu de l'en-tête (partagé)
  const renderHeader = () => (
    <div className="relative p-6 sm:p-8"> {/* Padding standardisé */}
      <div className="flex items-start gap-5">
        
        {/* Icône d'en-tête (style cohérent) */}
        <div className={twMerge(
          "group relative flex items-center justify-center w-14 h-14 rounded-3xl", // Taille et forme
          "transition-all duration-500 flex-shrink-0",
          "bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800", // BG neutre
          isHovered ? "scale-110 -rotate-6" : "scale-100 rotate-0", // Effet de survol
          "shadow-lg hover:shadow-2xl",
          "ring-1 ring-black/5 dark:ring-white/10" // Ring
        )}>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/40 to-transparent opacity-60" />
          <Heart // Remplacement de HeartSvg
            className={twMerge(
              "w-7 h-7 text-slate-700 dark:text-slate-200 drop-shadow-sm relative z-10", // Style d'icône
              "transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100" // Animation icône
            )} 
          />
          {/* Cercles décoratifs animés */}
          <div className={twMerge(
            "absolute inset-0 rounded-3xl border-2 border-slate-300/20 dark:border-slate-600/20",
            "transition-all duration-700",
            isHovered ? "scale-125 opacity-0" : "scale-100 opacity-100"
          )} />
        </div>
        
        {/* Titres (style cohérent) */}
        <div className="flex-1 min-w-0">
          <h3 className={twMerge(
            "text-2xl font-extrabold tracking-tight leading-tight", // Taille et graisse
            "bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-300", // Dégradé
            "bg-clip-text text-transparent" // Effet de texte
          )}>
            Vos sensibilités
          </h3>
          <p className={twMerge(
            "text-xs mt-1 font-medium tracking-wide uppercase", // Style sous-titre
            themeClasses.text.secondary,
            "opacity-60"
          )}>
            Marqueurs de votre profil
          </p>
        </div>
      </div>
    </div>
  );

  // Cas : Pas de données ou pas de prismes
  if (!tagScores || topPrismes.length === 0) {
    if (!tagScores) return null;
    
    return (
      // ======= CORRECTION 1 (div wrapper) =======
      <div
        className={twMerge(
          "transition-all duration-700 ease-out", // Animation d'apparition
          !isMounted ? "opacity-0 translate-y-8 scale-[0.98]" : "opacity-100 translate-y-0 scale-100"
        )}
        onMouseEnter={() => setIsHovered(true)} // Gestion du survol
        onMouseLeave={() => setIsHovered(false)}
      >
        <GlassTile 
          className={twMerge(
            "relative p-0 overflow-hidden"
          )}
        >
          {renderHeader()}
          
          {/* Contenu de l'état vide */}
          <div className="px-6 sm:px-8 pb-6 sm:pb-8"> {/* Padding standardisé */}
            <div className={twMerge(
              "relative p-6 rounded-2xl text-center", // Style simplifié
              isDark ? "bg-slate-800/40" : "bg-slate-100/80"
            )}>
              <HeartOff className={twMerge( // Icône simplifiée
                "w-10 h-10 mx-auto mb-3", 
                isDark ? "text-slate-500" : "text-slate-400"
              )} />
              <p className={twMerge("text-base leading-snug font-medium", themeClasses.text.secondary)}>
                Votre profil ne présente pas de sensibilité particulièrement dominante
              </p>
            </div>
          </div>
        </GlassTile>
      </div>
      // ======= FIN CORRECTION 1 =======
    );
  }

  // Cas : Des prismes ont été trouvés
  return (
    // ======= CORRECTION 2 (div wrapper) =======
    <div
      className={twMerge(
        "transition-all duration-700 ease-out", // Animation d'apparition
        !isMounted ? "opacity-0 translate-y-8 scale-[0.98]" : "opacity-100 translate-y-0 scale-100"
      )}
      onMouseEnter={() => setIsHovered(true)} // Gestion du survol
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlassTile 
        className={twMerge(
          "relative p-0 overflow-hidden"
        )}
      >
        {renderHeader()}

        {/* Contenu des prismes */}
        <div className="px-6 sm:px-8 pb-6 sm:pb-8"> {/* Padding standardisé */}
          {topPrismes.length === 1 && (
            <PrismCard 
              prismKey={topPrismes[0].key} 
              isDark={isDark} 
              themeClasses={themeClasses} 
              PRISMS_DATA={PRISMS_DATA} 
            />
          )}

          {topPrismes.length > 1 && (
            <>
              {/* --- SECTION MODIFIÉE : BOUTONS DE SLIDER --- */}
              <div className="flex items-center justify-end mb-3 gap-2 h-9">
                <button 
                  onClick={() => handleScroll('prev')} 
                  disabled={!canScrollPrev}
                  className={twMerge(
                    "flex items-center justify-center w-9 h-9 rounded-full",
                    "bg-white dark:bg-slate-800",
                    "border border-slate-200/80 dark:border-slate-700/50",
                    "shadow-md shadow-black/5 dark:shadow-black/10",
                    "transition-all duration-200",
                    "hover:scale-105 hover:shadow-lg active:scale-95",
                    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  )}
                >
                  <MoveLeft className={twMerge("w-5 h-5", themeClasses.text.secondary)} />
                </button>
                <button 
                  onClick={() => handleScroll('next')} 
                  disabled={!canScrollNext}
                  className={twMerge(
                    "flex items-center justify-center w-9 h-9 rounded-full",
                    "bg-white dark:bg-slate-800",
                    "border border-slate-200/80 dark:border-slate-700/50",
                    "shadow-md shadow-black/5 dark:shadow-black/10",
                    "transition-all duration-200",
                    "hover:scale-105 hover:shadow-lg active:scale-95",
                    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  )}
                >
                  <MoveRight className={twMerge("w-5 h-5", themeClasses.text.secondary)} />
                </button>
              </div>
              
              <div
                ref={scrollContainerRef}
                className="simple-scroll-container flex gap-3 overflow-x-auto snap-x snap-mandatory px-6 -mx-6"
              >
                {topPrismes.map((prism) => (
                  <div 
                    key={prism.key} 
                    className="flex-shrink-0 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] snap-center"
                  >
                    <PrismCard 
                      prismKey={prism.key} 
                      isDark={isDark} 
                      themeClasses={themeClasses} 
                      PRISMS_DATA={PRISMS_DATA} 
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <style>{`
          .simple-scroll-container::-webkit-scrollbar { display: none; }
          .simple-scroll-container { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </GlassTile>
    </div>
    // ======= FIN CORRECTION 2 =======
  );
};

export default PrismesPolitiques;
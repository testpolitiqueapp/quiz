import {
  PawPrint, ShieldCheck, HeartPulse, UserCheck, Tractor, Baby, Scale,
  Flower, FlagTriangleRight, Lock, Church, Star, Factory, HeartHandshake, Castle, ReceiptEuro, Bot, 
  Atom, BookText, Wallet, Rainbow, Landmark, Zap, Venus, 
  MoveRight, MoveLeft, HeartOff, type LucideProps, 
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

const PrismesPolitiques: React.FC<PrismesPolitiquesProps> = ({
  tagScores,
  PRISMS_DATA,
  isDark,
  themeClasses
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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
  
  const HeartSvg = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white drop-shadow-sm">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );

  if (!tagScores || topPrismes.length === 0) {
    if (!tagScores) return null;
    
    return (
      <div>
        <GlassTile className="overflow-hidden p-0">
          
          <div className="relative p-4 pb-3 sm:p-6 sm:pb-4">
            <div className="flex items-center gap-4 mb-3">
              {/* --- MODIFIÉ : Bloc Icône avec couleurs NEUTRES et design de votre modèle --- */}
              <div className={twMerge(
                "group relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg transition-all duration-300 flex-shrink-0",
                "bg-gradient-to-br from-slate-500 to-slate-600 dark:from-slate-600 dark:to-slate-700",
                "group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-slate-500/30 dark:group-hover:shadow-black/30",
                "ring-1 ring-slate-900/10 dark:ring-white/10"
              )}>
                <HeartSvg />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className={twMerge("text-xl font-bold tracking-tight leading-snug", themeClasses.text.primary)}>Vos sensibilités</h3>
                <p className={twMerge("text-xs mt-0.5", themeClasses.text.secondary)}>Vos marqueurs politiques</p>
              </div>
            </div>
          </div>
          
          <div className="pb-6 px-6">
            <div className={twMerge("relative p-6 rounded-2xl border text-center", isDark ? "border-slate-700/40" : "border-slate-200/60")}>
              <div className={twMerge("w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center", isDark ? "bg-slate-700/30" : "bg-slate-100")}>
                <HeartOff className={twMerge("w-8 h-8", isDark ? "text-slate-400" : "text-slate-500")} />
              </div>
              <p className={twMerge("text-base leading-snug font-medium", themeClasses.text.secondary)}>
                Votre profil ne présente pas de sensibilité particulièrement dominante
              </p>
            </div>
          </div>
        </GlassTile>
      </div>
    );
  }

  const prismColors: { [key: string]: string } = {
    'ecologie': 'from-green-500 to-emerald-600', 'condition-animale': 'from-orange-500 to-amber-600', 'souverainete': 'from-red-500 to-rose-600', 'securite-autorite': 'from-gray-500 to-slate-600', 'justice-sociale': 'from-pink-500 to-rose-600', 'progressisme-societal': 'from-purple-500 to-violet-600', 'immigration-controlee': 'from-blue-500 to-indigo-600', 'laicite-stricte': 'from-yellow-500 to-orange-600', 'europe-integree': 'from-blue-500 to-cyan-600', 'liberalisme-economique': 'from-green-500 to-teal-600', 'humanisme': 'from-rose-500 to-pink-600', 'ruralite': 'from-lime-500 to-green-600', 'patrimoine': 'from-stone-500 to-neutral-600', 'jeunesse': 'from-sky-500 to-indigo-500', 'innovation-technologique': 'from-fuchsia-500 to-purple-600', 'fiscalite-juste': 'from-teal-500 to-cyan-600', 'respect-institutions': 'from-yellow-700 to-amber-800', 'independance-energetique': 'from-orange-600 to-red-700', 'education-nationale': 'from-indigo-600 to-blue-700', 'rigueur-budgetaire': 'from-slate-500 to-gray-600', 'fermete-justice': 'from-red-700 to-red-900', 'culture-inclusive': 'from-pink-600 to-purple-700', 'radicalite': 'from-yellow-500 to-amber-500', 'feminisme': 'from-pink-500 to-fuchsia-600',
  };

  const PrismCard = ({ prismKey }: { prismKey: string }) => {
    const prismInfo = PRISMS_DATA[prismKey];
    if (!prismInfo) return null;
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
          <h4 className={twMerge("text-xl font-bold mb-2", themeClasses.text.primary)}>{prismInfo.name}</h4>
          <p className={twMerge("text-sm leading-snug", themeClasses.text.secondary)}>{prismInfo.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <GlassTile className="overflow-hidden p-0">
        
        <div className="relative p-4 pb-3 sm:p-6 sm:pb-4">
          <div className="flex items-center gap-4">
            {/* --- MODIFIÉ : Bloc Icône avec couleurs NEUTRES et design de votre modèle --- */}
            <div className={twMerge(
              "group relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg transition-all duration-300 flex-shrink-0",
              "bg-gradient-to-br from-slate-500 to-slate-600 dark:from-slate-600 dark:to-slate-700",
              "group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-slate-500/30 dark:group-hover:shadow-black/30",
              "ring-1 ring-slate-900/10 dark:ring-white/10"
            )}>
              <HeartSvg />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={twMerge("text-xl font-bold tracking-tight leading-snug", themeClasses.text.primary)}>Vos sensibilités</h3>
              <p className={twMerge("text-sm mt-0.5", themeClasses.text.secondary)}>Marqueurs politiques de votre profil.</p>
            </div>
          </div>
        </div>

        <div className="pb-6">
          {topPrismes.length === 1 && <div className="px-6"><PrismCard prismKey={topPrismes[0].key} /></div>}

          {topPrismes.length > 1 && (
            <>
              <div className="flex items-center justify-end px-6 mb-2 gap-2 h-8">
                <button 
                  onClick={() => handleScroll('prev')} 
                  disabled={!canScrollPrev}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-opacity disabled:opacity-30 disabled:hover:text-slate-400 disabled:cursor-not-allowed"
                >
                  <MoveLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => handleScroll('next')} 
                  disabled={!canScrollNext}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-opacity disabled:opacity-30 disabled:hover:text-slate-400 disabled:cursor-not-allowed"
                >
                  <MoveRight className="w-6 h-6" />
                </button>
              </div>
              
              <div
                ref={scrollContainerRef}
                className="simple-scroll-container flex gap-3 overflow-x-auto snap-x snap-mandatory px-6"
              >
                {topPrismes.map((prism) => (
                  <div 
                    key={prism.key} 
                    className="flex-shrink-0 w-[calc(100%-1.5rem)] snap-center"
                  >
                    <PrismCard prismKey={prism.key} />
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
  );
};

export default PrismesPolitiques;
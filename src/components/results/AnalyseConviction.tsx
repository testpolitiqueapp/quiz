import React, { useState, useEffect, useRef } from 'react'; 
import { Zap, ThumbsUp, ThumbsDown, Quote, Clock, Brain, Minus, Ban, ChartBar } from 'lucide-react';
import { GlassTile } from '../ui/GlassTile';
import { twMerge } from 'tailwind-merge';
import type { Question } from '../../questions/types';

interface ConvictionData {
  question: Question; 
  answer: number; 
  time: number; 
}

interface AnalyseConvictionProps {
  strongestConviction: ConvictionData | null;
  mostHesitantAnswer: ConvictionData | null;
  isDark: boolean;
  themeClasses: {
    text: { primary: string; secondary: string; };
  };
}

interface ConvictionStyles {
  text: string;
  Icon: React.ElementType;
  colors: { 
    bg: string; 
    badge: string; 
    iconContainer: string; 
  };
}

const AnimatedConvictionCard: React.FC<{ conviction: ConvictionData; type: 'strong' | 'hesitant'; isDark: boolean; themeClasses: AnalyseConvictionProps['themeClasses'] }> = ({ conviction, type, isDark, themeClasses }) => {
  const { question, answer, time } = conviction;

  const [count, setCount] = useState(0); 
  const badgeRef = useRef<HTMLDivElement>(null); 
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = badgeRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(currentRef);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, 
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
      if (!isInView) return;

      const finalTime = time / 1000;
      const duration = 500; 
      let startTimestamp: DOMHighResTimeStamp | null = null;

      const step: FrameRequestCallback = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = timestamp - startTimestamp;
          const fraction = Math.min(progress / duration, 1);
          
          const currentValue = (fraction * finalTime).toFixed(2);
          setCount(parseFloat(currentValue));

          if (fraction < 1) {
              requestAnimationFrame(step);
          }
      };

      requestAnimationFrame(step);

      return () => setCount(0); 
  }, [isInView, time]);
  
  const displayedTime = (count || 0).toFixed(2);
  
  const strongAnswers: {[key: number]: ConvictionStyles} = {
    2: { text: "Tout à fait d'accord", Icon: ThumbsUp, colors: { bg: isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80", badge: isDark ? "bg-emerald-900/40 text-emerald-300 ring-1 ring-emerald-700/30" : "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200/50", iconContainer: "bg-gradient-to-br from-emerald-500 to-emerald-600" } },
    [-2]: { text: "Pas du tout d'accord", Icon: ThumbsDown, colors: { bg: isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80", badge: isDark ? "bg-red-900/40 text-red-300 ring-1 ring-red-700/30" : "bg-red-100 text-red-700 ring-1 ring-red-200/50", iconContainer: "bg-gradient-to-br from-red-500 to-rose-600" } },
  };

  const hesitantAnswers: {[key: number]: ConvictionStyles} = {
    1: { text: "Plutôt d'accord", Icon: ThumbsUp, colors: { bg: isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80", badge: isDark ? "bg-sky-900/40 text-sky-300 ring-1 ring-sky-700/30" : "bg-sky-100 text-sky-700 ring-1 ring-sky-200/50", iconContainer: "bg-gradient-to-br from-sky-500 to-sky-600" } },
    0: { text: "Neutre", Icon: Minus, colors: { bg: isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80", badge: isDark ? "bg-slate-900/40 text-slate-300 ring-1 ring-slate-700/30" : "bg-slate-100 text-slate-700 ring-1 ring-slate-200/50", iconContainer: "bg-gradient-to-br from-slate-500 to-slate-600" } },
    [-1]: { text: "Plutôt pas d'accord", Icon: ThumbsDown, colors: { bg: isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80", badge: isDark ? "bg-amber-900/40 text-amber-300 ring-1 ring-amber-700/30" : "bg-amber-100 text-amber-700 ring-1 ring-amber-200/50", iconContainer: "bg-gradient-to-br from-amber-500 to-orange-600" } },
  };

  const currentDisplay = type === 'strong' ? strongAnswers[answer] : hesitantAnswers[answer];
  const { text: answerText, Icon, colors: colorClasses } = currentDisplay;

  return (
    <div className="space-y-4"> 
      {/* Carte "Question" redesignée : suppression border-l-4, ajout rounded-2xl et fond neutre */}
      <div className={twMerge(
        "relative p-5 rounded-2xl transition-all duration-300", 
        isDark ? 'border border-slate-700/50 bg-slate-800/60' : 'border border-slate-200/80 bg-slate-100/80'
      )}>
        <div className="flex items-start gap-4">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg ring-1 ring-slate-200/50 dark:ring-slate-600/50 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex-shrink-0">
            <Quote className="w-6 h-6 text-slate-600 dark:text-slate-300 drop-shadow-sm" />
          </div>
          <p className={twMerge("flex-1 min-w-0 text-base font-medium", themeClasses.text.primary)}>{question.text}</p>
        </div>
      </div>
      
      {/* Carte "Réponse" (style cohérent avec ThemeItem) */}
      <div className={twMerge("group relative p-5 rounded-2xl border transition-all duration-300 ease-out hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer", colorClasses.bg)}>
        <div className="relative flex items-start gap-4">
          <div className={twMerge("relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg ring-1 ring-white/10 flex-shrink-0", colorClasses.iconContainer)}>
            <Icon 
              className={twMerge("w-6 h-6 text-white drop-shadow-sm", "animate-pop-in-bounce")}
            />
             <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className={twMerge("font-bold text-lg leading-snug", themeClasses.text.primary)}>{answerText}</h4>
            <div 
              className={twMerge("mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide", colorClasses.badge)}
              ref={badgeRef}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{displayedTime}s</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnalyseConviction: React.FC<AnalyseConvictionProps> = ({ strongestConviction, mostHesitantAnswer, isDark, themeClasses }) => {
  const [activeTab, setActiveTab] = useState<'strong' | 'hesitant'>(strongestConviction ? 'strong' : 'hesitant');
  
  // Ajout des états pour l'animation
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(mountTimer);
  }, []);

  useEffect(() => {
    if (activeTab === 'strong' && !strongestConviction && mostHesitantAnswer) {
      setActiveTab('hesitant');
    } else if (activeTab === 'hesitant' && !mostHesitantAnswer && strongestConviction) {
      setActiveTab('strong');
    }
  }, [activeTab, strongestConviction, mostHesitantAnswer]);
  
  const tabs = [
    { id: 'strong', label: 'Plus forte conviction', Icon: Zap, data: strongestConviction, message: "Aucune réponse très tranchée détectée" },
    { id: 'hesitant', label: 'Plus grande hésitation', Icon: Brain, data: mostHesitantAnswer, message: "Aucune réponse nuancée et lente détectée" },
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    // ======= CORRECTION ICI =======
    // 1. On crée un <div> conteneur
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
          // 2. On retire les classes d'animation et les événements d'ici
        )}
      >
        {/* En-tête (style PositionnementPolitique / ThemesPrioritaires) */}
        <div className="relative p-6 sm:p-8"> {/* Padding ajusté */}
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
              <ChartBar 
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
                Analyse des convictions
              </h3>
              <p className={twMerge(
                "text-xs mt-1 font-medium tracking-wide uppercase", // Style sous-titre
                themeClasses.text.secondary,
                "opacity-60"
              )}>
                Vos réponses les plus rapides et les plus lentes
              </p>
            </div>
          </div>
        </div>
        
        {/* Conteneur pour le contenu (Onglets + Cartes) */}
        <div className="px-6 sm:px-8 pb-6 sm:pb-8">
          {/* Onglets */}
          <div className={twMerge("flex gap-2 p-1 rounded-xl", isDark ? 'bg-slate-900/50' : 'bg-slate-200/70')}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'strong' | 'hesitant')}
                className={twMerge(
                  "w-full flex items-center justify-center gap-2 px-2 py-2 rounded-lg text-sm font-semibold transition-all duration-300",
                  activeTab === tab.id
                    ? (isDark ? 'bg-slate-700/80 text-white shadow-md' : 'bg-white text-slate-800 shadow-md')
                    : (tab.data ? (isDark ? 'text-slate-400 hover:bg-slate-800/50' : 'text-slate-600 hover:bg-slate-300/50') : 'text-slate-500 opacity-50 cursor-not-allowed')
                )}
                disabled={!tab.data}
              >
                <tab.Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Contenu de l'onglet */}
          <div className="mt-5"> {/* Marge ajoutée pour séparer les onglets du contenu */}
            {currentTab?.data ? (
              <AnimatedConvictionCard conviction={currentTab.data} type={currentTab.id as 'strong' | 'hesitant'} isDark={isDark} themeClasses={themeClasses} />
            ) : (
              <div className={twMerge("relative p-6 rounded-2xl text-center", isDark ? "bg-slate-800/40" : "bg-slate-100/80")}>
                <Ban className="w-10 h-10 mx-auto mb-3 text-slate-400 dark:text-slate-500" />
                <p className={twMerge("text-base font-medium", themeClasses.text.secondary)}>
                  {currentTab?.message || "Pas de données disponibles"}
                </p>
              </div>
            )}
          </div>
        </div>
      </GlassTile>
    </div>
    // ======= FIN DE LA CORRECTION =======
  );
};

export default AnalyseConviction;
import { Clock, Zap, Brain, Rocket, Target, Anchor } from 'lucide-react';
import { GlassTile } from '../ui/GlassTile';
import { twMerge } from 'tailwind-merge';
import React, { useState, useEffect, useRef } from 'react'; 

interface TempsDeReponseProps {
  averageTime: number;
  isDark: boolean;
  themeClasses: {
    text: { primary: string; secondary: string; };
  };
}

const getSpeedProfile = (averageTime: number, isDark: boolean) => {
  if (averageTime < 3000) { 
    return {
      label: "Fusée",
      description: "Vos réponses sont quasi-instantanées, un vrai réflexe !",
      Icon: Rocket,
      badgeColors: isDark ? "bg-red-900/40 text-red-300 ring-red-700/30" : "bg-red-100 text-red-700 ring-red-200/50",
      animationClass: "animate-shake-n-pulse",
    };
  }
  if (averageTime < 6000) { 
    return {
      label: "Vif",
      description: "Vous prenez des décisions spontanées et intuitives !",
      Icon: Zap,
      badgeColors: isDark ? "bg-emerald-900/40 text-emerald-300 ring-emerald-700/30" : "bg-emerald-100 text-emerald-700 ring-emerald-200/50",
      animationClass: "animate-shake-n-pulse",
    };
  }
  if (averageTime < 10000) { 
    return {
      label: "Mesuré",
      description: "Vous alliez vitesse et réflexion pour des choix équilibrés.",
      Icon: Target,
      badgeColors: isDark ? "bg-sky-900/40 text-sky-300 ring-sky-700/30" : "bg-sky-100 text-sky-700 ring-sky-200/50",
      animationClass: "",
    };
  }
  if (averageTime < 13000) { 
    return {
      label: "Réfléchi",
      description: "Vous prenez le temps de bien analyser avant de répondre.",
      Icon: Brain,
      badgeColors: isDark ? "bg-blue-900/40 text-blue-300 ring-blue-700/30" : "bg-blue-100 text-blue-700 ring-blue-200/50",
      animationClass: "",
    };
  }
  return {
    label: "Stratège",
    description: "Chaque réponse est mûrement pesée, vous ne laissez rien au hasard !",
    Icon: Anchor,
    badgeColors: isDark ? "bg-indigo-900/40 text-indigo-300 ring-indigo-700/30" : "bg-indigo-100 text-indigo-700 ring-indigo-200/50",
    animationClass: "",
  };
};

const TempsDeReponse: React.FC<TempsDeReponseProps> = ({ averageTime, isDark, themeClasses }) => {
  const [count, setCount] = useState(0); 
  
  const counterRef = useRef<HTMLDivElement>(null); 
  const [isInView, setIsInView] = useState(false);

  const speedProfile = getSpeedProfile(averageTime, isDark);
  const SpeedIcon = speedProfile.Icon;

  const containerClasses = isDark 
    ? "bg-slate-800/60 border-slate-700/50" 
    : "bg-white border-slate-200/80";

  useEffect(() => {
    const currentRef = counterRef.current;
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

      const finalTime = averageTime / 1000;
      const duration = 500; 
      let startTimestamp: DOMHighResTimeStamp | null = null;

      const step: FrameRequestCallback = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = timestamp - startTimestamp;
          const fraction = Math.min(progress / duration, 1);
          
          const currentValue = (fraction * finalTime).toFixed(1);
          setCount(parseFloat(currentValue));

          if (fraction < 1) {
              requestAnimationFrame(step);
          }
      };

      requestAnimationFrame(step);

      return () => setCount(0); 
  }, [isInView, averageTime]);
  
  const displayedTime = (count || 0).toFixed(1);


  return (
    <GlassTile className="overflow-hidden p-0">
      
      {/* HEADER COHÉRENT ET CORRIGÉ */}
      <div className="relative p-4 pb-0 sm:p-6 sm:pb-0">
        <div className="flex items-center gap-4 mb-3">
          
          {/* Bloc Icône (Style Amélioré cohérent) */}
          <div className={twMerge(
            "relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg",
            "bg-gradient-to-br from-blue-500 to-indigo-600",
            "ring-1 ring-blue-500/20",
            "flex-shrink-0",
            "transform transition-all duration-300 ease-out", 
            "before:absolute before:inset-0 before:rounded-2xl", 
            "before:bg-gradient-to-br before:from-white/40 before:to-transparent",
            "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300", 
            "dark:before:from-white/10 dark:before:opacity-20 dark:hover:before:opacity-30",
            "shadow-blue-500/40 dark:shadow-indigo-700/40", 
            "hover:shadow-blue-600/60 dark:hover:shadow-indigo-600/60"
          )}>
            <Clock className="w-6 h-6 text-white drop-shadow-sm" />
          </div>
          
          <div className="flex-1 min-w-0">
            {/* Titre Principal (compact) */}
            <h3 className={twMerge("text-xl font-bold tracking-tight leading-snug", themeClasses.text.primary)}>
              Temps de réponse
            </h3>
            {/* Sous-titre explicatif (CORRIGÉ: Affiche la description du profil de vitesse) */}
            <p className={twMerge("text-xs mt-0.5", themeClasses.text.secondary)}>
              {speedProfile.description}
            </p>
          </div>
        </div>
      </div>
      {/* FIN HEADER */}
      
      <div className="px-5 pb-6 pt-4"> 
        <div 
          className={twMerge(
            "group relative p-6 rounded-2xl border text-center",
            "transition-all duration-300 ease-out",
            "hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1",
            "hover:scale-[1.02]",
            containerClasses 
          )}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative">
            <div className="mb-3" ref={counterRef}>
              <p className={twMerge("text-5xl font-bold tabular-nums", themeClasses.text.primary, "tracking-tight")}>
                {displayedTime}
                <span className={twMerge("text-2xl font-medium ml-1", themeClasses.text.secondary)}>
                  s
                </span>
              </p>
              <p className={twMerge("text-xs", themeClasses.text.secondary, "opacity-80")}>
                en moyenne par question
              </p>
            </div>

            <div className="flex justify-center">
              <span className={twMerge(
                "px-4 py-2 rounded-full text-sm font-medium ring-1",
                "inline-flex items-center gap-2",
                speedProfile.badgeColors 
              )}>
                <SpeedIcon 
                  className={twMerge("w-4 h-4", speedProfile.animationClass)}
                />
                {speedProfile.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </GlassTile>
  );
};

export default TempsDeReponse;
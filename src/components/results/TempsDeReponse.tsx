import { Zap, Brain, Rocket, Target, Anchor } from 'lucide-react';
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

// La fonction getSpeedProfile reste inchangée
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

  // États d'animation
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Gardé pour des effets subtils

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(mountTimer);
  }, []);

  const speedProfile = getSpeedProfile(averageTime, isDark);
  const SpeedIcon = speedProfile.Icon;

  // L'IntersectionObserver reste le même
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
      { threshold: 0.1 }
    );
    observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  // L'animation de comptage reste la même
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
    // ======= CORRECTION ICI =======
    // 1. On crée un <div> conteneur qui gère les événements et l'animation d'apparition
    <div
      className={twMerge(
        "transition-all duration-700 ease-out h-full", // Animation d'apparition + h-full
        !isMounted ? "opacity-0 translate-y-8 scale-[0.98]" : "opacity-100 translate-y-0 scale-100"
      )}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlassTile 
        className={twMerge(
          "relative p-6 sm:p-8 overflow-hidden", // Padding appliqué directement
          "flex flex-col items-center justify-center text-center h-full" // Centrage total
          // 2. On a retiré les classes d'animation et les événements d'ici
        )}
      >
        
        {/* 1. Titre (contexte) */}
        <p className={twMerge(
          "text-xs mb-2 font-medium tracking-wide uppercase", // Style sous-titre
          themeClasses.text.secondary,
          "opacity-60"
        )}>
          Temps de réponse moyen
        </p>

        {/* 2. Métrique principale (le temps) */}
        <div 
          className="relative mb-4" 
          ref={counterRef} 
        >
          <div className="flex items-baseline justify-center">
            <span className={twMerge(
              "text-7xl sm:text-8xl font-extrabold tabular-nums tracking-tighter", // Style impactant
              "bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-300", // Dégradé
              "bg-clip-text text-transparent" // Effet de texte
            )}>
              {displayedTime}
            </span>
            <span className={twMerge(
              "text-3xl sm:text-4xl font-semibold ml-1", // Unité large mais secondaire
              themeClasses.text.secondary,
              "opacity-50 -translate-y-1" // Ajustement visuel
            )}>
              s
            </span>
          </div>
        </div>

        {/* 3. Badge de profil */}
        <div className="mb-3"> {/* Marge pour séparer de la description */}
          <span className={twMerge(
            "px-4 py-2 rounded-full text-sm font-medium ring-1",
            "inline-flex items-center gap-2",
            "transition-all duration-300",
            isHovered ? "scale-105" : "scale-100", // Effet au survol (utilise l'état 'isHovered' du parent)
            speedProfile.badgeColors 
          )}>
            <SpeedIcon 
              className={twMerge("w-4 h-4", speedProfile.animationClass)}
            />
            {speedProfile.label}
          </span>
        </div>
        
        {/* 4. Description */}
        <p className={twMerge(
          "text-sm max-w-xs", // Limite la largeur pour la lisibilité
          themeClasses.text.secondary,
          "opacity-90"
        )}>
          {speedProfile.description}
        </p>

      </GlassTile>
    </div>
    // ======= FIN DE LA CORRECTION =======
  );
};

export default TempsDeReponse;
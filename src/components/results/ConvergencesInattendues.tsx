import React, { useMemo, useState, useEffect } from 'react'; // Ajout de useState, useEffect
import { Handshake, Quote, ThumbsUp, ThumbsDown, Ban, User } from 'lucide-react';
import { GlassTile } from '../ui/GlassTile';
import { twMerge } from 'tailwind-merge';
import type { Party } from '../../parties';
import type { QuizQuestion } from '../../types/quiz';
import { PARTIES } from '../../parties';

interface ConvergencesProps {
  lowRankedParty: Party & { percentage: number };
  quizQuestions: QuizQuestion[];
  userAnswers: (number | undefined)[];
  isDark: boolean;
  themeClasses: {
    text: { primary: string; secondary: string; };
  };
}

interface ConvictionStyles {
  text: string;
  Icon: React.ElementType;
}

interface BestMatchType {
  question: QuizQuestion;
  answer: number;
  partyStance: number;
}

export const ConvergencesInattendues: React.FC<ConvergencesProps> = ({
  lowRankedParty,
  quizQuestions,
  userAnswers,
  isDark,
  themeClasses
}) => {
  
  // États d'animation
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(mountTimer);
  }, []);

  const unexpectedAgreement = useMemo((): BestMatchType | null => {
    let bestMatch: BestMatchType | null = null;
    let lowestDistance = 2;
    quizQuestions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      if (userAnswer !== 2 && userAnswer !== -2) return;
      const partyPositionRaw = question.positions?.[lowRankedParty.id];
      if (partyPositionRaw === undefined) return;
      const partyPositionValue = typeof partyPositionRaw === 'number' ? partyPositionRaw : partyPositionRaw.stance;
      const distance = Math.abs(userAnswer - partyPositionValue);
      // La logique (distance <= 1) est ce qui justifie de cacher le détail
      if (distance <= 1 && distance < lowestDistance) {
        lowestDistance = distance;
        bestMatch = { question, answer: userAnswer, partyStance: partyPositionValue };
      }
    });
    return bestMatch;
  }, [quizQuestions, userAnswers, lowRankedParty]);

  const getDisplayStyles = (answer: number): ConvictionStyles | null => {
    const answerMap: { [key: number]: ConvictionStyles } = {
      2: { text: "Tout à fait d'accord", Icon: ThumbsUp },
      1: { text: "Plutôt d'accord", Icon: ThumbsUp },
      [-1]: { text: "Plutôt pas d'accord", Icon: ThumbsDown },
      [-2]: { text: "Pas du tout d'accord", Icon: ThumbsDown },
    };
    return answerMap[answer] || null;
  };

  const getPartyLogo = (partyId: string) => {
    const p = PARTIES.find(p => p.id === partyId);
    if (!p) return '';
    if (p.logo && typeof p.logo === 'object' && p.logo.dark && p.logo.light) {
      return isDark ? p.logo.dark : p.logo.light;
    }
    return `/images/logospartis/${isDark ? 'dark' : 'light'}/${partyId}.png`;
  };

  // En-tête (style cohérent)
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
          <Handshake 
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
            Convergence Inattendue
          </h3>
          <p className={twMerge(
            "text-xs mt-1 font-medium tracking-wide uppercase", // Style sous-titre
            themeClasses.text.secondary,
            "opacity-60"
          )}>
            Accord avec votre parti le plus éloigné
          </p>
        </div>
      </div>
    </div>
  );
  
  if (!unexpectedAgreement) {
    return (
      // ======= CORRECTION 1 ICI =======
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
            // Props d'animation et de survol retirées
          )}
        >
          {renderHeader()}
          <div className="px-6 sm:px-8 pb-6 sm:pb-8"> {/* Padding standardisé */}
            {/* État vide simplifié */}
            <div className={twMerge(
              "relative p-6 rounded-3xl text-center", 
              isDark ? "bg-slate-800/40" : "bg-slate-100/80"
            )}>
              <Ban className={twMerge( // Icône simplifiée
                "w-10 h-10 mx-auto mb-3", 
                isDark ? "text-slate-500" : "text-slate-400"
              )} />
              <p className={twMerge("text-base leading-snug font-medium", themeClasses.text.secondary)}>
                Aucun point de convergence notable n'a été trouvé avec votre parti le plus éloigné.
              </p>
            </div>
          </div>
        </GlassTile>
      </div>
      // ======= FIN CORRECTION 1 =======
    );
  }

  const { question, answer, partyStance } = unexpectedAgreement;
  const userDisplay = getDisplayStyles(answer);
  // On vérifie toujours que le parti a une position valide, même si on ne l'affiche pas
  const partyDisplay = getDisplayStyles(partyStance);

  if (!userDisplay || !partyDisplay) {
    return null;
  }
  
  return (
    // ======= CORRECTION 2 ICI =======
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
          // Props d'animation et de survol retirées
        )}
      >
        {renderHeader()}
        <div className="px-6 sm:px-8 pb-6 sm:pb-8"> {/* Padding standardisé */}
          <div className="space-y-4">
            
            {/* Carte "Question" (inchangée) */}
            <div className={twMerge(
              "relative p-5 rounded-3xl transition-all duration-300", 
              isDark ? 'border border-slate-700/50 bg-slate-800/60' : 'border border-slate-200/80 bg-slate-100/80'
            )}>
              <div className="flex items-start gap-4">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg ring-1 ring-slate-200/50 dark:ring-slate-600/50 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex-shrink-0">
                  <Quote className="w-6 h-6 text-slate-600 dark:text-slate-300 drop-shadow-sm" />
                </div>
                <p className={twMerge("flex-1 min-w-0 text-base font-medium", themeClasses.text.primary)}>{question.text}</p>
              </div>
            </div>

            {/* Carte "Comparaison" (AMÉLIORÉE) */}
            <div className={twMerge(
              "group relative p-5 rounded-3xl border transition-all duration-300 ease-out",
              "hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 hover:scale-[1.02]",
               isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80"
            )}>
              <div className="relative">
                {/* --- MODIFICATION ICI --- */}
                {/* Remplacement de justify-around par justify-center + gap */}
                <div className="flex items-start justify-center gap-x-2 sm:gap-x-4">
                  
                  {/* Section "Vous" (AMÉLIORÉE) */}
                  {/* --- MODIFICATION ICI --- */}
                  {/* Remplacement de w-28 par flex-1 min-w-0 */}
                  <div className="flex flex-1 flex-col items-center gap-2 text-center min-w-0">
                    <div className={twMerge("relative flex items-center justify-center w-14 h-14 rounded-3xl shadow-lg", isDark ? "bg-slate-700" : "bg-slate-200")}>
                      <User className={twMerge("w-7 h-7", themeClasses.text.secondary)} />
                    </div>
                    <div className="w-full">
                      <span className={twMerge("text-sm font-bold truncate", themeClasses.text.primary)}>Vous</span>
                      <p className={twMerge("text-xs mt-1", themeClasses.text.secondary)}>{userDisplay.text}</p>
                    </div>
                  </div>

                  {/* Icône centrale "Match" (AMÉLIORÉE) */}
                  {/* --- MODIFICATION ICI --- */}
                  {/* Ajout de flex-shrink-0 pour empêcher la déformation */}
                  <div className={twMerge(
                    "relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg mt-1 flex-shrink-0", 
                    "bg-gradient-to-br from-emerald-500 to-emerald-600"
                  )}>
                    <Handshake className="w-6 h-6 text-white drop-shadow-sm" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
                  </div>
                  
                  {/* Section "Parti" (AMÉLIORÉE) */}
                  {/* --- MODIFICATION ICI --- */}
                  {/* Remplacement de w-28 par flex-1 min-w-0 */}
                  <div className="flex flex-1 flex-col items-center gap-2 text-center min-w-0">
                    <div className={twMerge("relative flex items-center justify-center w-14 h-14 rounded-3xl shadow-lg overflow-hidden", isDark ? "bg-slate-700" : "bg-slate-200")}>
                      <img src={getPartyLogo(lowRankedParty.id)} alt={`Logo ${lowRankedParty.name}`} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full">
                      <span 
                        className={twMerge("block text-sm font-bold truncate tracking-tighter", themeClasses.text.primary)}
                        title={lowRankedParty.name}
                      >
                        {lowRankedParty.name}
                      </span>
                      <p className={twMerge("text-xs mt-1 font-bold", themeClasses.text.secondary)}>
                        En accord sur ce point
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassTile>
    </div>
    // ======= FIN CORRECTION 2 =======
  );
};
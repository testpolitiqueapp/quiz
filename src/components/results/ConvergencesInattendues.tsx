import React, { useMemo } from 'react';
import { Handshake, Quote, ThumbsUp, ThumbsDown, Ban } from 'lucide-react';
import { GlassTile } from '../ui/GlassTile';
import { twMerge } from 'tailwind-merge';
import type { Party } from '../../parties';
import type { QuizQuestion } from '../../types/quiz';

// --- INTERFACES & TYPES ---
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
  colors: { 
    bg: string; 
  };
}

// ✅ 1. Définir un type clair pour le résultat du calcul
interface BestMatchType {
  question: QuizQuestion;
  answer: number;
  partyStance: number;
}


// --- COMPOSANT PRINCIPAL ---
export const ConvergencesInattendues: React.FC<ConvergencesProps> = ({
  lowRankedParty,
  quizQuestions,
  userAnswers,
  isDark,
  themeClasses
}) => {
  
  // ✅ 2. Appliquer le type explicite au retour de useMemo
  const unexpectedAgreement = useMemo((): BestMatchType | null => {
    let bestMatch: BestMatchType | null = null;
    let lowestDistance = 2; // Accepte uniquement les distances de 0 ou 1

    quizQuestions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      // On cherche une conviction forte de l'utilisateur
      if (userAnswer !== 2 && userAnswer !== -2) return;

      const partyPositionRaw = question.positions?.[lowRankedParty.id];
      if (partyPositionRaw === undefined) return;

      const partyPositionValue = typeof partyPositionRaw === 'number' ? partyPositionRaw : partyPositionRaw.stance;
      const distance = Math.abs(userAnswer - partyPositionValue);

      // On cherche la plus petite distance possible (inférieure à la précédente)
      if (distance <= 1 && distance < lowestDistance) {
        lowestDistance = distance;
        bestMatch = { question, answer: userAnswer, partyStance: partyPositionValue };
      }
    });

    return bestMatch;
  }, [quizQuestions, userAnswers, lowRankedParty]);

  const getDisplayStyles = (answer: number): ConvictionStyles | null => {
    const answerMap: { [key: number]: ConvictionStyles } = {
      2: { text: "Tout à fait d'accord", Icon: ThumbsUp, colors: { bg: isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80" } },
      1: { text: "Plutôt d'accord", Icon: ThumbsUp, colors: { bg: isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80" } },
      [-1]: { text: "Plutôt pas d'accord", Icon: ThumbsDown, colors: { bg: isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80" } },
      [-2]: { text: "Pas du tout d'accord", Icon: ThumbsDown, colors: { bg: isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80" } },
    };
    return answerMap[answer] || null;
  };

  const renderHeader = () => (
    <div className="relative p-4 sm:p-6 sm:pb-4">
      <div className="flex items-start gap-4">
        <div className={twMerge( "relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg", "bg-gradient-to-br from-blue-500 to-indigo-600", "ring-1 ring-blue-500/20", "flex-shrink-0", "transform transition-all duration-300 ease-out", "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/40 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300", "dark:before:from-white/10 dark:before:opacity-20 dark:hover:before:opacity-30", "shadow-blue-500/40 dark:shadow-indigo-700/40", "hover:shadow-blue-600/60 dark:hover:shadow-indigo-600/60" )}>
          <Handshake className="w-6 h-6 text-white drop-shadow-sm" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={twMerge("text-xl font-bold tracking-tight leading-snug", themeClasses.text.primary)}>
            Convergence Inattendue
          </h3>
          <p className={twMerge("text-xs mt-0.5", themeClasses.text.secondary)}>
            Un point d'accord surprenant avec un parti éloigné.
          </p>
        </div>
      </div>
    </div>
  );
  
  // ✅ 3. Utiliser un "early return" pour le cas où rien n'est trouvé
  if (!unexpectedAgreement) {
    return (
      <GlassTile className="overflow-hidden p-0">
        {renderHeader()}
        <div className="px-5 pb-6">
          <div className={twMerge("relative p-6 rounded-2xl text-center", isDark ? "bg-slate-800/40 border border-slate-700/50" : "bg-slate-100/80 border border-slate-200/60")}>
            <div className={twMerge("w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center", isDark ? "bg-slate-700/30" : "bg-slate-100")}>
              <Ban className={twMerge("w-8 h-8", isDark ? "text-slate-400" : "text-slate-500")} />
            </div>
            <p className={twMerge("text-base leading-snug font-medium", themeClasses.text.secondary)}>
              Aucun point de convergence notable n'a été trouvé avec vos partis les plus éloignés.
            </p>
          </div>
        </div>
      </GlassTile>
    );
  }

  // TypeScript est maintenant certain que `unexpectedAgreement` est de type `BestMatchType`
  const { question, answer, partyStance } = unexpectedAgreement;
  const userDisplay = getDisplayStyles(answer);
  const partyDisplay = getDisplayStyles(partyStance);
  const isPerfectMatch = answer === partyStance;

  if (!userDisplay || !partyDisplay) {
    return null; // Sécurité supplémentaire si les styles ne sont pas trouvés
  }
  
  return (
    <GlassTile className="overflow-hidden p-0">
      {renderHeader()}
      <div className="px-5 pb-6">
        <div className="space-y-4">
          <p className={twMerge("text-sm text-center px-2 py-3 rounded-xl", themeClasses.text.secondary, isDark ? 'bg-slate-800/50' : 'bg-slate-100')}>
            Malgré votre faible affinité ({Math.round(lowRankedParty.percentage)}%) avec <span className="font-bold">{lowRankedParty.name}</span>, vos positions sont {isPerfectMatch ? "identiques" : "très proches"} sur ce sujet :
          </p>
          <div className={twMerge("relative p-5 rounded-2xl border-l-4", isDark ? 'border-l-slate-400 border border-slate-700/30 bg-slate-800/60' : 'border-l-slate-400 border border-slate-200/60 bg-slate-100')}>
            <div className="flex items-start gap-4">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg ring-1 ring-slate-200/50 dark:ring-slate-600/50 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                <Quote className="w-6 h-6 text-slate-600 dark:text-slate-300 drop-shadow-sm" />
              </div>
              {/* L'erreur n'apparaîtra plus ici */}
              <p className={twMerge("flex-1 min-w-0 text-base font-medium", themeClasses.text.primary)}>{question.text}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className={twMerge("group p-3 rounded-xl border", userDisplay.colors.bg)}>
              <h5 className="text-xs font-bold mb-2 text-center opacity-70">Votre position</h5>
              <div className="relative flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-xl flex-shrink-0">
                  <userDisplay.Icon className={twMerge("w-5 h-5", isDark ? 'text-slate-300' : 'text-slate-600')} />
                </div>
                <h4 className={twMerge("font-semibold text-sm", themeClasses.text.primary)}>{userDisplay.text}</h4>
              </div>
            </div>
            <div className={twMerge("group p-3 rounded-xl border", partyDisplay.colors.bg)}>
              <h5 className="text-xs font-bold mb-2 text-center opacity-70">Position de {lowRankedParty.name}</h5>
              <div className="relative flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-xl flex-shrink-0">
                  <partyDisplay.Icon className={twMerge("w-5 h-5", isDark ? 'text-slate-300' : 'text-slate-600')} />
                </div>
                <h4 className={twMerge("font-semibold text-sm", themeClasses.text.primary)}>{partyDisplay.text}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassTile>
  );
};
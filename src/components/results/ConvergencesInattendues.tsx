import React, { useMemo } from 'react';
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

  const renderHeader = () => (
    <div className="relative p-4 sm:p-6 sm:pb-4">
      <div className="flex items-start gap-4">
        <div className={twMerge("group relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg transition-all duration-300 flex-shrink-0", "bg-gradient-to-br from-slate-500 to-slate-600 dark:from-slate-600 dark:to-slate-700", "group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-slate-500/30 dark:group-hover:shadow-black/30", "ring-1 ring-slate-900/10 dark:ring-white/10")}>
          <Handshake className="w-6 h-6 text-white drop-shadow-sm" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={twMerge("text-xl font-bold tracking-tight leading-snug", themeClasses.text.primary)}>
            Convergence Inattendue
          </h3>
          <p className={twMerge("text-sm mt-0.5", themeClasses.text.secondary)}>
            Point d'accord avec votre parti le plus éloigné.
          </p>
        </div>
      </div>
    </div>
  );
  
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
              Aucun point de convergence notable n'a été trouvé avec votre parti le plus éloigné.
            </p>
          </div>
        </div>
      </GlassTile>
    );
  }

  const { question, answer, partyStance } = unexpectedAgreement;
  const userDisplay = getDisplayStyles(answer);
  const partyDisplay = getDisplayStyles(partyStance);

  if (!userDisplay || !partyDisplay) {
    return null;
  }
  
  return (
    <GlassTile className="overflow-hidden p-0">
      {renderHeader()}
      <div className="px-5 pb-6">
        <div className="space-y-4">
          
          <div className={twMerge("relative p-5 rounded-2xl border-l-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5", isDark ? 'border-l-slate-400 border border-slate-700/30 bg-slate-800/60' : 'border-l-slate-400 border border-slate-200/60 bg-slate-100')}>
            <div className="flex items-start gap-4">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg ring-1 ring-slate-200/50 dark:ring-slate-600/50 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex-shrink-0">
                <Quote className="w-6 h-6 text-slate-600 dark:text-slate-300 drop-shadow-sm" />
              </div>
              <p className={twMerge("flex-1 min-w-0 text-base font-medium", themeClasses.text.primary)}>{question.text}</p>
            </div>
          </div>

          <div className={twMerge(
            "group relative p-5 rounded-2xl border transition-all duration-300 ease-out",
            "hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 hover:scale-[1.02]",
             isDark ? "bg-slate-800/60 border-slate-700/50" : "bg-white border-slate-200/80"
          )}>
            <div className="relative">
              <div className="flex items-start justify-around">
                <div className="flex flex-col items-center gap-2 text-center w-28">
                  <div className={twMerge("relative flex items-center justify-center w-14 h-14 rounded-2xl shadow-lg", isDark ? "bg-slate-700" : "bg-slate-200")}>
                    <User className={twMerge("w-7 h-7", themeClasses.text.secondary)} />
                  </div>
                  <div>
                    <span className={twMerge("text-sm font-bold", themeClasses.text.primary)}>Vous</span>
                    <p className={twMerge("text-xs mt-1", themeClasses.text.secondary)}>{userDisplay.text}</p>
                  </div>
                </div>

                <div className={twMerge("relative flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg mt-1", "bg-gradient-to-br from-emerald-500 to-emerald-600")}>
                  <Handshake className="w-7 h-7 text-white drop-shadow-sm" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
                </div>
                
                <div className="flex flex-col items-center gap-2 text-center w-28">
                  <div className={twMerge("relative flex items-center justify-center w-14 h-14 rounded-2xl shadow-lg overflow-hidden", isDark ? "bg-slate-700" : "bg-slate-200")}>
                    <img src={getPartyLogo(lowRankedParty.id)} alt={`Logo ${lowRankedParty.name}`} className="w-full h-full object-cover" />
                  </div>
                  {/* --- MODIFICATION ICI --- */}
                  <div className="w-full">
                    <span 
                      className={twMerge("block text-sm font-bold truncate tracking-tighter", themeClasses.text.primary)}
                      title={lowRankedParty.name}
                    >
                      {lowRankedParty.name}
                    </span>
                    <p className={twMerge("text-xs mt-1", themeClasses.text.secondary)}>{partyDisplay.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassTile>
  );
};
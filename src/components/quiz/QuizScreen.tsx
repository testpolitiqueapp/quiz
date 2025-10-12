import {
  Info, ArrowLeft, BadgeEuro, Briefcase, Scale, Globe, Leaf, Landmark, Star,
  GraduationCap, Heart, Building, Home, Tractor, ShieldCheck, Clapperboard,
  Users, Cpu, PawPrint, FlaskConical, Baby, Network, Shuffle, Focus
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { useState, useEffect, useRef } from 'react';
import { AnswerButton } from './AnswerButton';
import { GlassTile } from '../ui/GlassTile';
import type { Question } from '../../questions/types';

const ANSWER_VALUES: { [key: string]: number } = {
  'Tout à fait d\'accord': 2,
  'Plutôt d\'accord': 1,
  'Neutre': 0,
  'Plutôt pas d\'accord': -1,
  'Pas du tout d\'accord': -2,
};

const categoryColors: { [key: string]: string } = {
  "Économie & Fiscalité": "#0d9488", 
  "Travail & Protection Sociale": "#4338ca",
  "Santé": "#eb2b2b", 
  "Logement": "#24D26D",
  "Sécurité & Justice": "#475569", 
  "Immigration & Nationalité": "#06b6d4", 
  "Institutions & Démocratie": "#2563eb", 
  "Affaires Étrangères & Défense": "#48b0c0", 
  "Écologie & Énergie": "#7abe1a",
  "Agriculture & Alimentation": "#da9608", 
  "Numérique & Technologies": "#7c3aed", 
  "Éducation": "#7D4FFE", 
  "Enseignement Supérieur": "#C49FFF", 
  "Condition Animale": "#c71de1", 
  "Culture": "#db0000", 
  "Droits & Laïcité": "#a1a1aa", 
  "Famille & Jeunesse": "#ec4899", 
  "Europe": "#1f3bc0", 
  "Services Publics": "#71717a", 
  "Transports & Aménagement": "#f97316", 
  "Vision & Valeurs": "#f56120", 
};

const icons = {
  BadgeEuro, Briefcase, Scale, Globe, Leaf, Landmark, Star, GraduationCap,
  Heart, Building, Home, Tractor, ShieldCheck, Clapperboard, Users, Cpu,
  PawPrint, FlaskConical, Baby, Network, Focus
};

type IconName = keyof typeof icons;

interface QuizQuestion extends Question {
  categoryName: string;
  icon: string;
}

interface QuizScreenProps {
  question: QuizQuestion;
  totalQuestions: number;
  currentQuestionTotalIndex: number;
  onAnswer: (value: number | undefined, responseTime: number) => void;
  onBack: () => void;
  previousAnswer: number | null;
  isDark: boolean;
  onJoker: () => void;
  jokersRemaining: number;
}

const CategoryIcon = ({ iconName, categoryName }: { iconName: string; categoryName: string }) => {
  const IconComponent = icons[iconName as IconName];
  const categoryColor = categoryColors[categoryName] || "#64748b"; 
  
  if (!IconComponent) return null;
  
  return (
    <div 
      className="relative flex items-center justify-center rounded-lg shadow-sm ring-1 ring-white/20 w-6 h-6 flex-shrink-0"
      style={{ 
        backgroundColor: categoryColor,
        backgroundImage: `linear-gradient(135deg, ${categoryColor}, ${categoryColor}dd)`,
      }}
    >
      <IconComponent className="w-3.5 h-3.5 text-white drop-shadow-sm" />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
    </div>
  );
};

const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  totalQuestions,
  currentQuestionTotalIndex,
  onAnswer,
  onBack,
  previousAnswer,
  isDark,
  onJoker,
  jokersRemaining
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const questionStartTime = useRef(Date.now());

  useEffect(() => {
    setSelectedAnswer(previousAnswer ?? null);
    questionStartTime.current = Date.now();
    setShowDescription(false);
  }, [question, previousAnswer]);

  const handleAnswerClick = (value: number) => {
    if (isAnimating) return;
    
    const responseTime = Date.now() - questionStartTime.current;
    setSelectedAnswer(value);
    setIsAnimating(true);
    if (navigator.vibrate) { navigator.vibrate(50); }
    setTimeout(() => { 
      onAnswer(value, responseTime);
      setIsAnimating(false);
    }, 400);
  };
  
  const progress = ((currentQuestionTotalIndex + 1) / totalQuestions) * 100;
  
  const shortLabels: { [key: string]: string } = { 
    '2': 'Tout à fait', '1': 'Plutôt oui', '0': 'Neutre', '-1': 'Plutôt pas', '-2': 'Pas du tout',
  };

  return (
    <div className="w-full max-w-2xl font-sans">
      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            opacity: 0;
            animation: fade-in-up 0.5s ease-out forwards;
          }
        `}
      </style>
      <GlassTile className="p-3 sm:p-8 quiz-initial-entry">
            
        <div className="mb-8">
          <div className={twMerge("w-full h-3 rounded-full overflow-hidden relative", "bg-gradient-to-r from-slate-200/80 to-slate-100/60", "dark:from-slate-800/50 dark:to-slate-700/30", "ring-1 ring-inset ring-slate-300/30 dark:ring-slate-600/30")}>
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 transition-[width] duration-700 ease-in-out" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>
          
        <div key={question.id}>
          <div className="flex items-center justify-between mb-4 gap-3 animate-fade-in-up" style={{ animationDelay: '50ms' }}>
            <button 
              onClick={onBack} 
              disabled={currentQuestionTotalIndex === 0}
              className={twMerge( "group flex items-center justify-center p-3 sm:px-3 sm:py-2 rounded-xl transition-all duration-200 flex-shrink-0", "hover:bg-slate-100/50 dark:hover:bg-slate-800/50", "focus:outline-none focus:ring-2 focus:ring-blue-500/50", currentQuestionTotalIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'opacity-70 hover:opacity-100 active:scale-95' )}
            >
              <ArrowLeft className={twMerge("w-5 h-5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:-translate-x-0.5 flex-shrink-0", isDark ? 'text-slate-300' : 'text-slate-600')} />
              <span className={twMerge("text-sm font-medium hidden sm:inline ml-2", isDark ? 'text-slate-300' : 'text-slate-600')}>Retour</span>
            </button>

            <div 
              className={twMerge( "inline-flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2 rounded-full min-w-0", "bg-gradient-to-r from-slate-100/80 to-white/60 dark:from-slate-800/50 dark:to-slate-700/30", "ring-1 ring-slate-200/50 dark:ring-slate-600/50", "font-semibold text-sm tracking-tight", isDark ? 'text-slate-200' : 'text-slate-700')}
            >
              <div className="flex items-center gap-2 sm:gap-2 min-w-0">
                <CategoryIcon iconName={question.icon} categoryName={question.categoryName} />
                <span className="truncate text-sm">{question.categoryName}</span>
              </div>
              <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
              <span className="tabular-nums text-sm flex-shrink-0">{currentQuestionTotalIndex + 1}/{totalQuestions}</span>
            </div>
          </div>
          
          <div className="text-center mb-6 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <h2 className={twMerge("text-2xl sm:text-2xl lg:text-3xl font-bold leading-tight", isDark ? 'text-slate-100' : 'text-slate-900')}>{question.text}</h2>
          </div>

          <div className="text-center mb-6 animate-fade-in-up" style={{ animationDelay: '250ms' }}>
            <button onClick={() => setShowDescription(!showDescription)} className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl transition-all duration-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 active:scale-95">
              <Info className={twMerge("w-4 h-4 transition-transform duration-200", showDescription ? 'rotate-180' : '', isDark ? 'text-slate-400' : 'text-slate-500')} />
              <span className={twMerge("text-xs sm:text-sm font-medium", isDark ? 'text-slate-400' : 'text-slate-500')}>{showDescription ? 'Masquer les détails' : 'En savoir plus'}</span>
            </button>
          </div>

          <div className={twMerge("overflow-hidden transition-all duration-300 ease-in-out", showDescription ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0')}>
            <div className="rounded-2xl p-4 transition-colors duration-300 bg-gradient-to-br from-slate-50/80 to-white/60 dark:from-slate-800/30 dark:to-slate-900/20 border border-slate-200/50 dark:border-slate-600/50">
              <p className={twMerge("text-center text-sm leading-relaxed", isDark ? 'text-slate-300' : 'text-slate-600')}>{question.description}</p>
            </div>
          </div>
      
          <div className="flex justify-center gap-2 mb-5 items-center">
            {Object.values(ANSWER_VALUES).sort((a, b) => b - a).map((value, index) => (
              <AnswerButton
                key={value}
                value={value}
                label={shortLabels[value.toString()]}
                onClick={handleAnswerClick}
                isSelected={selectedAnswer === value}
                isDisabled={isAnimating}
                isDark={isDark}
                className="animate-fade-in-up"
                style={{ animationDelay: `${350 + index * 75}ms` }}
              />
            ))}
          </div>
          
          <div className="mt-6 text-center animate-fade-in-up" style={{ animationDelay: '750ms' }}>
            <button
              onClick={onJoker}
              disabled={jokersRemaining === 0 || isAnimating}
              className={twMerge("group inline-flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2 rounded-full min-w-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50", jokersRemaining > 0 ? "bg-gradient-to-r from-slate-100/80 to-white/60 dark:from-slate-800/50 dark:to-slate-700/30 ring-1 ring-slate-200/50 dark:ring-slate-600/50 hover:from-slate-200/80 hover:to-white/80 dark:hover:from-slate-700/60 dark:hover:to-slate-600/40 active:scale-95" : "bg-slate-100/30 dark:bg-slate-800/20 ring-1 ring-slate-200/30 dark:ring-slate-600/20 cursor-not-allowed opacity-50")}
            >
              <div className="flex items-center gap-2 sm:gap-2 min-w-0 flex-1">
                <div className="relative flex items-center justify-center rounded-lg shadow-sm ring-1 ring-white/20 w-6 h-6 flex-shrink-0 bg-gradient-to-br from-orange-500 to-amber-600">
                  <Shuffle className={twMerge("w-3.5 h-3.5 text-white drop-shadow-sm transition-transform duration-200", jokersRemaining > 0 ? "group-hover:rotate-180" : "")} />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
                </div>
                <span className={twMerge("truncate text-sm font-semibold tracking-tight", jokersRemaining > 0 ? (isDark ? 'text-slate-200' : 'text-slate-700') : (isDark ? 'text-slate-500' : 'text-slate-400'))}>
                  Changer de question
                </span>
              </div>
              <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
              <span className={twMerge("tabular-nums text-sm font-semibold tracking-tight", jokersRemaining > 0 ? (isDark ? 'text-slate-200' : 'text-slate-700') : (isDark ? 'text-slate-500' : 'text-slate-400'))}>
                {jokersRemaining > 0 ? `${jokersRemaining} joker${jokersRemaining > 1 ? 's' : ''}` : "0 joker"}
              </span>
            </button>
          </div>
        </div>
      </GlassTile>
    </div>
  );
};

export default QuizScreen;
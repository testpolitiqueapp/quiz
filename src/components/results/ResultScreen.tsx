import React, { useState, useEffect, useMemo } from 'react';
import { icons } from './resultUtils';
import {
  ActionButtons,
  BiggestDisagreement,
  ProfileHeader,
  ThemesPrioritaires,
  TempsDeReponse,
  AnalyseConviction,
  PrismesPolitiques,
  PositionnementPolitique,
  AnalysisHeader,
} from './';
import { StickyNav } from './StickyNav';
import { PARTIES, type Party } from '../../parties';
import type { QuizQuestion, TagScores, PrismsDataMap, ConvictionData, PositionEntry } from '../../types/quiz';

interface PartyResult extends Party {
  percentage: number;
}

export const CategoryIcon: React.FC<{ iconName: string, className?: string }> = ({ iconName, className = 'w-4 h-4' }) => {
  const IconComponent = icons[iconName];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

interface ResultScreenProps {
  finalResult: PartyResult[];
  onRestart: () => void;
  quizQuestions: QuizQuestion[];
  answers: (number | undefined)[];
  answerTimes: (number | undefined)[];
  prioritizedCategories: string[];
  politicalCompassResult: { x: number; y: number } | null;
  tagScores: TagScores | null;
  PRISMS_DATA: PrismsDataMap;
  ANSWER_VALUES: { [key: string]: number };
  isDark: boolean;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  finalResult,
  onRestart,
  quizQuestions,
  answers,
  answerTimes,
  prioritizedCategories,
  politicalCompassResult,
  tagScores,
  PRISMS_DATA,
  isDark,
}) => {
  const [isAnalysisComplete, setIsAnalysisComplete] = useState(false);
  const [animatedPercentages, setAnimatedPercentages] = useState<{ [key: string]: number }>({});
  const [activeSection, setActiveSection] = useState('positionnement-politique');

  useEffect(() => {
    const sectionIds = ['positionnement-politique', 'parti-vainqueur', 'parti-oppose', 'prismes-politiques', 'themes-prioritaires', 'conviction-forte', 'temps-reponse'];
    const handleScroll = () => {
      let currentSection = '';
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection || 'positionnement-politique');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnalysisComplete(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!finalResult || finalResult.length === 0) return;
    const animatePercentages = () => {
      const targetPercentages = finalResult.reduce<{ [key: string]: number }>((acc, party) => ({ ...acc, [party.id]: party.percentage }), {});
      const duration = 1500;
      const startTime = Date.now();
      const animate = () => {
        const progress = Math.min((Date.now() - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setAnimatedPercentages(current => {
          const newPercentages = { ...current };
          for (const partyId in targetPercentages) {
            newPercentages[partyId] = (targetPercentages[partyId] || 0) * easeOut;
          }
          return newPercentages;
        });
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };
    const percentageTimer = setTimeout(animatePercentages, 600);
    return () => clearTimeout(percentageTimer);
  }, [finalResult]);

  const { averageTime, strongestConviction, mostHesitantAnswer } = useMemo(() => {
    const validTimes = answerTimes.filter((t): t is number => typeof t === 'number');
    const sum = validTimes.reduce((a, b) => a + b, 0);
    const avg = validTimes.length > 0 ? sum / validTimes.length : 0;

    const combinedData = quizQuestions
      .map((q, i) => ({ question: q, answer: answers[i], time: answerTimes[i] }))
      .filter((item): item is ConvictionData => typeof item.answer === 'number' && typeof item.time === 'number');

    const polarizedAnswers = combinedData.filter(item => item.answer === 2 || item.answer === -2);
    const strongestConviction = polarizedAnswers.length > 0 ? polarizedAnswers.reduce((fastest, current) => current.time < fastest.time ? current : fastest) : null;

    const nuancedAnswers = combinedData.filter(item => item.answer === 1 || item.answer === 0 || item.answer === -1);
    const mostHesitantAnswer = nuancedAnswers.length > 0 ? nuancedAnswers.reduce((slowest, current) => current.time > slowest.time ? current : slowest) : null;
    
    return { averageTime: avg, strongestConviction, mostHesitantAnswer };
  }, [quizQuestions, answers, answerTimes]);

  const finalProfile = finalResult?.[0];
  const biggestDisagreementParty = finalResult?.[finalResult.length - 1];

  const getPartyLogo = (partyId: string) => {
    const theme = isDark ? 'dark' : 'light';
    const party = PARTIES.find(p => p.id === partyId);
    return party?.logo?.[theme] || `/images/logospartis/light/default.png`;
  };

  const topPartyLogoUrl = finalProfile ? getPartyLogo(finalProfile.id) : '';

  const thematicBreakdown = useMemo(() => {
    if (!quizQuestions || !answers || !finalResult || finalResult.length === 0 || !finalProfile) return [];
    const topPartyId = finalProfile.id;
    const scores: { [category: string]: { totalWeightedAffinity: number; totalWeight: number; } } = {};

    quizQuestions.forEach((question, index) => {
      const answerValue = answers[index];
      if (answerValue === undefined) return;
      const categoryName = question.categoryName;
      if (!scores[categoryName]) {
        scores[categoryName] = { totalWeightedAffinity: 0, totalWeight: 0 };
      }
      const positionEntry = question.positions[topPartyId] as PositionEntry;
      if (positionEntry !== undefined) {
        const partyPosition = typeof positionEntry === 'object' && positionEntry !== null && 'stance' in positionEntry ? positionEntry.stance : (positionEntry as number) ?? 0;
        const distance = Math.abs(answerValue - partyPosition);
        let agreementFactor;
        switch (distance) {
          case 0: agreementFactor = 1.0; break;
          case 1: agreementFactor = 0.9; break;
          case 2: agreementFactor = 0.2; break;
          default: agreementFactor = 0.0; break;
        }
        const affinity = agreementFactor * 100;
        const questionImportance = question.importance || 1;
        scores[categoryName].totalWeightedAffinity += affinity * questionImportance;
        scores[categoryName].totalWeight += questionImportance;
      }
    });

    return Object.entries(scores).map(([name, { totalWeightedAffinity, totalWeight }]) => ({
      name,
      percentage: totalWeight > 0 ? (totalWeightedAffinity / totalWeight) : 0
    }));
  }, [quizQuestions, answers, finalResult, finalProfile]);

  const themeAffinities = useMemo(() => {
    if (!thematicBreakdown) return {};
    return thematicBreakdown.reduce((acc, theme) => {
      acc[theme.name] = theme.percentage;
      return acc;
    }, {} as { [key: string]: number });
  }, [thematicBreakdown]);

  const themeClasses = {
    text: { primary: 'text-gray-900 dark:text-gray-100', secondary: 'text-gray-600 dark:text-white/70', muted: 'text-gray-400 dark:text-white/70' },
    background: { main: `w-full min-h-screen font-sans transition-colors duration-300` },
    border: { main: 'border-gray-200 dark:border-slate-700' },
  };

  if (!finalProfile || !politicalCompassResult) {
    return <div>Chargement de votre analyse...</div>;
  }

  return (
    <div className={themeClasses.background.main}>
      <div className="max-w-7xl mx-auto px-4 lg:px-0 pt-20 lg:pt-1">
        <AnalysisHeader 
          isAnalysisComplete={isAnalysisComplete} 
          themeClasses={themeClasses} 
        />
      </div>
      
      <StickyNav activeSection={activeSection} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">

          <div id="positionnement-politique" className="scroll-mt-45 lg:scroll-mt-4">
            <PositionnementPolitique 
              orientation={finalProfile.orientation} 
              themeClasses={themeClasses}
              isDark={isDark}
            />
          </div>

          <div id="parti-vainqueur" className="scroll-mt-45 lg:scroll-mt-4">
             <ProfileHeader {...{finalProfile, animatedPercentage: animatedPercentages[finalProfile.id] || 0, isDark, themeClasses}} />
          </div>

          <div id="parti-oppose" className="scroll-mt-40 lg:scroll-mt-4"><BiggestDisagreement {...{party: biggestDisagreementParty, isDark, themeClasses}} /></div>
          
          <div id="prismes-politiques" className="scroll-mt-40 lg:scroll-mt-4">
            <PrismesPolitiques 
              tagScores={tagScores} 
              PRISMS_DATA={PRISMS_DATA}
              themeClasses={themeClasses}
              isDark={isDark}
            />
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div id="themes-prioritaires" className="scroll-mt-40 lg:scroll-mt-4"><ThemesPrioritaires {...{prioritizedCategories, themeAffinities, isDark, themeClasses, topPartyLogoUrl, topPartyName: finalProfile.name}} /></div>
          <div id="conviction-forte" className="scroll-mt-40 lg:scroll-mt-4"><AnalyseConviction {...{strongestConviction, mostHesitantAnswer, isDark, themeClasses}} /></div>
          <div id="temps-reponse" className="scroll-mt-40 lg:scroll-mt-4"><TempsDeReponse {...{averageTime, isDark, themeClasses}} /></div>
        </div>
      </div>

      <div className="px-4 lg:px-0">
        <ActionButtons {...{onRestart, finalResult, isDark}} />
      </div>

      <div className={`text-center mt-6 pt-6 pb-6 px-4 lg:px-0 ${themeClasses.text.muted}`}>
        <p className={`text-xs font-medium`}>
          Résultats basés sur vos réponses • Notre algorithme est conçu pour être le plus juste et performant possible, mais en tant que machine, il ne peut intégrer les nuances de vos valeurs personnelles ni vos traits de caractère.
        </p>
      </div>
    </div>
  );
};

export default ResultScreen;
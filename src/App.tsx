import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { QUESTIONS_BY_CATEGORY, QUESTIONS } from './questions/index';
import { PARTIES } from './parties';
import { ANSWER_VALUES, PRISMS_DATA } from './constants';
import StickyBanner from './components/layout/StickyBanner';
import Footer from './components/layout/Footer';
import WelcomeScreen from './components/welcome/WelcomeScreen';
import PrioritiesScreen from './components/PrioritiesScreen';
import QuizScreen from './components/quiz/QuizScreen';
import CalculatingScreen from './components/CalculatingScreen';
import { ResultScreen } from './components/results';
import type { Question } from './questions/types';
import MentionsLegales from './MentionsLegales';
import type { TagScores, QuizQuestion, FinalResultItem, PrismsDataMap, CategoriesByName } from './types/quiz';

// --- FONCTIONS UTILITAIRES ---
const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    let currentIndex = newArray.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
    }
    return newArray;
};

const smartShuffleArray = (array: QuizQuestion[]): QuizQuestion[] => {
    if (array.length < 2) return array;
    const source = shuffleArray([...array]);
    const shuffled: QuizQuestion[] = [];
    if (source.length > 0) shuffled.push(source.shift()!);
    while (source.length > 0) {
        const lastCategory = shuffled[shuffled.length - 1]?.categoryName;
        let nextIndex = source.findIndex(q => q.categoryName !== lastCategory);
        if (nextIndex === -1) nextIndex = 0;
        const [nextQuestion] = source.splice(nextIndex, 1);
        if(nextQuestion) shuffled.push(nextQuestion);
    }
    return shuffled;
};

// --- COMPOSANT PRINCIPAL ---
const App: React.FC = () => {
    const [quizState, setQuizState] = useState<'welcome' | 'priorities' | 'quizzing' | 'calculating' | 'result' | 'legal'>('welcome');
    const [questionIndex, setQuestionIndex] = useState(0);
    const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
    const [finalResult, setFinalResult] = useState<FinalResultItem[] | null>(null);
    const [answers, setAnswers] = useState<(number | undefined)[]>([]);
    const [answerTimes, setAnswerTimes] = useState<(number | undefined)[]>([]);
    const [prioritizedCategories, setPrioritizedCategories] = useState<string[]>([]);
    const [politicalCompassResult, setPoliticalCompassResult] = useState<{ x: number; y: number } | null>(null);
    const [tagScores, setTagScores] = useState<TagScores | null>(null);
    const [jokersRemaining, setJokersRemaining] = useState(3);

    const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [isDark, setIsDark] = useState(() => window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true);

    const allCategoriesByName = useMemo(() => {
        return Object.entries(QUESTIONS_BY_CATEGORY).reduce((acc: CategoriesByName, [name, data]) => {
            data.questions.forEach(q => { acc[q.id] = { categoryName: name, icon: data.icon }; });
            return acc;
        }, {});
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        try {
            const savedProgressJSON = localStorage.getItem('quizProgress');
            if (savedProgressJSON) {
                const savedProgress = JSON.parse(savedProgressJSON);
                if (savedProgress.quizState !== 'result' && savedProgress.quizQuestions) {
                    setQuizQuestions(savedProgress.quizQuestions);
                    setQuizState(savedProgress.quizState || 'welcome');
                    setQuestionIndex(savedProgress.questionIndex || 0);
                    setAnswers(savedProgress.answers || []);
                    setAnswerTimes(savedProgress.answerTimes || []);
                    setPrioritizedCategories(savedProgress.prioritizedCategories || []);
                    setJokersRemaining(savedProgress.jokersRemaining ?? 2);
                }
            }
        } catch (error) {
            console.error("Erreur chargement:", error);
            localStorage.removeItem('quizProgress');
        }
    }, [allCategoriesByName]);

    useEffect(() => {
        if (quizState === 'welcome' || quizState === 'legal' || quizState === 'calculating') return;
        if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
        const progressToSave = { quizState, questionIndex, quizQuestions, answers, answerTimes, prioritizedCategories, jokersRemaining };
        saveTimeoutRef.current = setTimeout(() => {
            try { localStorage.setItem('quizProgress', JSON.stringify(progressToSave)); } catch (error) { console.error("Erreur sauvegarde:", error); }
        }, 500);
        return () => { if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current); };
    }, [quizState, questionIndex, quizQuestions, answers, answerTimes, prioritizedCategories, jokersRemaining]);

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [quizState, questionIndex]);

    const allCategories = useMemo(() => Object.entries(QUESTIONS_BY_CATEGORY).map(([name, { icon }]) => ({ name, icon })), []);

    const startQuiz = useCallback((priorities: string[]) => {
        setPrioritizedCategories(priorities);
        const selectedQuestions: Question[] = [];
        let questionsToSelectFrom: Question[] = [...QUESTIONS];
        const tieBreakerQuestionIds = [201, 111, 208];
        const tieBreakerQuestions = questionsToSelectFrom.filter(q => tieBreakerQuestionIds.includes(q.id));
        selectedQuestions.push(...tieBreakerQuestions);
        questionsToSelectFrom = questionsToSelectFrom.filter(q => !tieBreakerQuestionIds.includes(q.id));
        const priorityCounts = [3, 3, 3, 2, 2];
        priorities.forEach((priorityCategory, index) => {
            const numTieBreakersInCategory = tieBreakerQuestions.filter(q => allCategoriesByName[q.id]?.categoryName === priorityCategory).length;
            const questionsToPickCount = Math.max(0, priorityCounts[index] - numTieBreakersInCategory);
            if (questionsToPickCount > 0) {
                const questionsFromCategory = shuffleArray(questionsToSelectFrom.filter(q => allCategoriesByName[q.id]?.categoryName === priorityCategory));
                const questionsToAdd = questionsFromCategory.slice(0, questionsToPickCount);
                selectedQuestions.push(...questionsToAdd);
                questionsToAdd.forEach(q => {
                    const idx = questionsToSelectFrom.findIndex(item => item.id === q.id);
                    if (idx > -1) questionsToSelectFrom.splice(idx, 1);
                });
            }
        });
        const remainingQuestionsCount = 25 - selectedQuestions.length;
        if (remainingQuestionsCount > 0) {
            const remainingEconomicCount = Math.ceil(remainingQuestionsCount / 2);
            const remainingSocietalCount = Math.floor(remainingQuestionsCount / 2);
            const remainingEconomic = shuffleArray(questionsToSelectFrom.filter(q => q.axis === 'economic'));
            const remainingSocietal = shuffleArray(questionsToSelectFrom.filter(q => q.axis === 'societal'));
            selectedQuestions.push(...remainingEconomic.slice(0, remainingEconomicCount));
            selectedQuestions.push(...remainingSocietal.slice(0, remainingSocietalCount));
        }
        const selectedQuestionsWithCategory: QuizQuestion[] = selectedQuestions.map(q => ({ ...q, ...allCategoriesByName[q.id] } as QuizQuestion));
        const finalQuestionList = smartShuffleArray(selectedQuestionsWithCategory);
        setQuizQuestions(finalQuestionList);
        setQuestionIndex(0); setAnswers([]); setAnswerTimes([]); setFinalResult(null); setQuizState('quizzing'); setJokersRemaining(3);
    }, [allCategoriesByName]);

    const handleAnswer = useCallback((value: number | undefined, duration: number) => {
        setAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[questionIndex] = value;
            return newAnswers;
        });
        setAnswerTimes(prevAnswerTimes => {
            const newAnswerTimes = [...prevAnswerTimes];
            newAnswerTimes[questionIndex] = duration;
            return newAnswerTimes;
        });
        if (questionIndex < quizQuestions.length - 1) {
            setTimeout(() => setQuestionIndex(questionIndex + 1), 200);
        } else {
            setTimeout(() => setQuizState('calculating'), 300);
        }
    }, [questionIndex, quizQuestions.length]);

    const goToPreviousQuestion = useCallback(() => {
        if (questionIndex > 0) setQuestionIndex(prevIndex => prevIndex - 1);
    }, [questionIndex]);

    const useJoker = useCallback(() => {
        if (jokersRemaining <= 0) return;
        setJokersRemaining(prev => prev - 1);
        const currentQuestionIds = quizQuestions.map(q => q.id);
        const categoryToRespect = quizQuestions[questionIndex]?.categoryName;
        let availableReplacements = QUESTIONS.filter(q => !currentQuestionIds.includes(q.id) && allCategoriesByName[q.id]?.categoryName === categoryToRespect);
        if (availableReplacements.length === 0) {
            availableReplacements = QUESTIONS.filter(q => !currentQuestionIds.includes(q.id));
        }
        if (availableReplacements.length === 0) {
            alert("Il n'y a plus de questions de rechange disponibles !");
            setJokersRemaining(prev => prev + 1);
            return;
        }
        const newQuestionData = shuffleArray(availableReplacements)[0];
        const categoryInfo = allCategoriesByName[newQuestionData.id];
        if (!categoryInfo) {
            console.error(`Erreur Joker : La question n°${newQuestionData.id} n'a pas de catégorie.`);
            alert("Erreur de configuration. Joker annulé.");
            setJokersRemaining(prev => prev + 1);
            return;
        }
        const newQuestion: QuizQuestion = { ...newQuestionData, ...categoryInfo };
        setQuizQuestions(prevQuestions => {
            const updatedQuizQuestions = [...prevQuestions];
            updatedQuizQuestions[questionIndex] = newQuestion;
            return updatedQuizQuestions;
        });
        setAnswers(prevAnswers => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[questionIndex] = undefined;
            return updatedAnswers;
        });
    }, [jokersRemaining, quizQuestions, questionIndex, allCategoriesByName]);

    const calculateResult = useCallback(() => {
        const PRIORITY_WEIGHT = 3.0;
        const userCompassScores = { economic: { score: 0, max: 0 }, societal: { score: 0, max: 0 } };
        const userTagScores: { [key: string]: { score: number, max: number } } = Object.keys(PRISMS_DATA).reduce((acc, key) => ({ ...acc, [key]: { score: 0, max: 0 } }), {});
        const userTagConvictions: { [key: string]: boolean } = Object.keys(PRISMS_DATA).reduce((acc, key) => ({ ...acc, [key]: false }), {});
        const progressiveTags = ['ecologie', 'condition-animale', 'justice-sociale', 'progressisme-societal', 'europe-integree', 'humanisme', 'culture-inclusive'];

        quizQuestions.forEach((question, index) => {
            const answerValue = answers[index];
            if (answerValue === undefined) return;

            const axis = question.axis as 'economic' | 'societal';

            if (!['economic', 'societal'].includes(axis)) {
                return;
            }

            const isPriority = prioritizedCategories.includes(question.categoryName);
            const priorityWeight = isPriority ? PRIORITY_WEIGHT : 1;
            const questionImportance = question.importance || 1;
            const finalWeight = priorityWeight * questionImportance;
            const direction = question.direction ?? 1;

            userCompassScores[axis].score += answerValue * direction * finalWeight;
            userCompassScores[axis].max += 2 * finalWeight;

            const tags: string[] = (question.tags_primaires || []).concat(question.tags_secondaires || question.tags || []);
            if (tags) {
                tags.forEach((tag: string) => {
                    if (userTagScores[tag]) {
                        userTagScores[tag].score += answerValue * direction * finalWeight;
                        userTagScores[tag].max += 2 * finalWeight;
                        if (answerValue === 2 || answerValue === -2) {
                            userTagConvictions[tag] = true;
                        }
                    }
                });
            }
        });

        const economicAxis = userCompassScores.economic.max > 0 ? (userCompassScores.economic.score / userCompassScores.economic.max) * 100 : 0;
        const societalAxis = userCompassScores.societal.max > 0 ? (userCompassScores.societal.score / userCompassScores.societal.max) * 100 : 0;
        const userCompassPosition = { x: economicAxis, y: societalAxis };
        setPoliticalCompassResult(userCompassPosition);
        const finalTagScores: TagScores = {};
        for (const tag in userTagScores) {
            let affinityScore = 50;
            if (userTagScores[tag].max > 0) {
                let normalizedScore = (userTagScores[tag].score / userTagScores[tag].max) * 100;
                if (progressiveTags.includes(tag)) normalizedScore *= -1;
                affinityScore = Math.max(0, Math.min(100, Math.round((normalizedScore + 100) / 2)));
            }
            finalTagScores[tag] = { score: affinityScore, hasConviction: userTagConvictions[tag] };
        }
        setTagScores(finalTagScores);
        const answeredQuestionsCount = answers.filter(a => a !== undefined).length;
        const strongAnswersCount = answers.filter(a => a === 2 || a === -2).length;
        const userRadicalism = answeredQuestionsCount > 0 ? strongAnswersCount / answeredQuestionsCount : 0;
        const validTimes = answerTimes.filter((t): t is number => typeof t === 'number' && t > 0);
        const averageTime = validTimes.length > 0 ? validTimes.reduce((a, b) => a + b, 0) / validTimes.length : 5000;
        const allPartiesWithPercentages: FinalResultItem[] = PARTIES.map(partyInfo => {
            let totalScore = 0, maxPossibleScore = 0, questionsParticipated = 0, priorityQuestionsParticipated = 0;
            let hasDealBreakerDisagreement = false;
            quizQuestions.forEach((question, index) => {
                const answerValue = answers[index];
                const responseTime = answerTimes[index];
                if (answerValue === undefined) return;
                const partyPositionRaw = question.positions?.[partyInfo.id];
                if (partyPositionRaw === undefined) return;
                const partyPositionValue = typeof partyPositionRaw === 'number' ? partyPositionRaw : (partyPositionRaw as { stance: number }).stance;
                const isPriority = prioritizedCategories.includes(question.categoryName);
                questionsParticipated++;
                if (isPriority) priorityQuestionsParticipated++;
                const distance = Math.abs(answerValue - partyPositionValue);
                if (question.isDealBreaker && distance === 4) { hasDealBreakerDisagreement = true; }
                const priorityWeight = isPriority ? PRIORITY_WEIGHT : 1;
                const questionImportance = question.importance || 1;
                let finalWeight = priorityWeight * questionImportance;
                if (responseTime !== undefined && responseTime > 0) {
                    if (responseTime < averageTime * 0.7) { finalWeight *= 1.05; }
                    else if (responseTime > averageTime * 1.8) { finalWeight *= 0.95; }
                }
                let agreementFactor;
                switch (distance) {
                    case 0: agreementFactor = 1.0; break;
                    case 1: agreementFactor = 0.75; break;
                    case 2: agreementFactor = 0.5; break;
                    case 3: agreementFactor = 0.25; break;
                    case 4: agreementFactor = 0.0; break;
                    default: agreementFactor = 0.0; break;
                }
                if ((answerValue === 2 || answerValue === -2) && (partyPositionValue === 2 || partyPositionValue === -2) && distance === 0) {
                    agreementFactor *= 1.1;
                }
                totalScore += agreementFactor * finalWeight;
                maxPossibleScore += 1.0 * finalWeight;
            });
            const affinityPercentage = maxPossibleScore > 0 ? (totalScore / maxPossibleScore) * 100 : 50;
            const softRepresentativityFactor = 0.85 + 0.15 * (questionsParticipated / quizQuestions.length);
            const totalPriorityQuestionsInQuiz = quizQuestions.filter(q => prioritizedCategories.includes(q.categoryName)).length;
            const priorityRelevanceRatio = totalPriorityQuestionsInQuiz > 0 ? (priorityQuestionsParticipated / totalPriorityQuestionsInQuiz) : 1;
            const priorityRelevanceFactor = 0.4 + 0.6 * priorityRelevanceRatio;
            let finalPercentage = affinityPercentage * softRepresentativityFactor * priorityRelevanceFactor;
            if (hasDealBreakerDisagreement) { finalPercentage *= 0.25; }
            if (partyInfo.radicalism !== undefined) {
                const temperamentDifference = Math.abs(userRadicalism - partyInfo.radicalism);
                const temperamentBonus = Math.max(0, 3 * (1 - temperamentDifference / 0.7));
                finalPercentage += temperamentBonus;
            }
            if (partyInfo.cohesion !== undefined) {
                const cohesionDifference = Math.abs(userRadicalism - partyInfo.cohesion);
                const cohesionBonus = Math.max(0, 2 * (1 - cohesionDifference));
                finalPercentage += cohesionBonus;
            }
            return { ...partyInfo, percentage: Math.max(0, Math.min(100, Math.round(finalPercentage))) };
        }).sort((a, b) => {
            if (b.percentage !== a.percentage) return b.percentage - a.percentage;
            let priorityScoreA = 0, priorityScoreB = 0;
            quizQuestions.forEach((question, index) => {
                if (prioritizedCategories.includes(question.categoryName)) {
                    const answerValue = answers[index];
                    if (answerValue === undefined) return;
                    const questionImportance = question.importance || 1;
                    const getStance = (partyId: string) => {
                        const posRaw = question.positions?.[partyId];
                        if (typeof posRaw === 'number') return posRaw;
                        if (posRaw && typeof (posRaw as { stance: number }).stance === 'number') return (posRaw as { stance: number }).stance;
                        return undefined;
                    }
                    const posA = getStance(a.id);
                    const posB = getStance(b.id);
                    if (posA !== undefined) priorityScoreA += (4 - Math.abs(answerValue - posA)) * questionImportance;
                    if (posB !== undefined) priorityScoreB += (4 - Math.abs(answerValue - posB)) * questionImportance;
                }
            });
            if (priorityScoreB !== priorityScoreA) return priorityScoreB - priorityScoreA;
            if (userCompassPosition && a.compass && b.compass) {
                const distA = Math.sqrt(Math.pow(userCompassPosition.x - a.compass.x, 2) + Math.pow(userCompassPosition.y - a.compass.y, 2));
                const distB = Math.sqrt(Math.pow(userCompassPosition.x - b.compass.x, 2) + Math.pow(userCompassPosition.y - b.compass.y, 2));
                if (distA !== distB) return distA - distB;
            }
            return a.name.localeCompare(b.name);
        });
        setFinalResult(allPartiesWithPercentages);
        setQuizState('result');
    }, [answers, answerTimes, prioritizedCategories, quizQuestions]);

    const restartQuiz = useCallback(() => {
        try { localStorage.removeItem('quizProgress'); } catch (error) { console.error("Erreur lors de la suppression :", error); }
        setQuizState('welcome'); setQuestionIndex(0); setQuizQuestions([]); setFinalResult(null); setAnswers([]); setAnswerTimes([]); setPrioritizedCategories([]); setPoliticalCompassResult(null); setTagScores(null); setJokersRemaining(2);
    }, []);

    useEffect(() => {
        if (quizState === 'calculating') {
            const timer = setTimeout(calculateResult, 2000);
            return () => clearTimeout(timer);
        }
    }, [quizState, calculateResult]);

    const goToLegal = useCallback(() => { setQuizState('legal'); }, []);
    const goToHome = useCallback(() => { setQuizState('welcome'); }, []);

    const renderContent = () => {
        switch (quizState) {
            case 'welcome': return <WelcomeScreen onStart={() => setQuizState('priorities')} />;
            case 'priorities': return <PrioritiesScreen allCategories={allCategories} onConfirm={startQuiz} />;
            case 'quizzing': return quizQuestions.length > 0 ? <QuizScreen question={quizQuestions[questionIndex]} totalQuestions={quizQuestions.length} currentQuestionTotalIndex={questionIndex} onAnswer={handleAnswer} onBack={goToPreviousQuestion} previousAnswer={answers[questionIndex] ?? null} isDark={isDark} onJoker={useJoker} jokersRemaining={jokersRemaining} /> : null;
            case 'calculating': return <CalculatingScreen isDark={isDark} />;
            case 'result': return !finalResult ? <CalculatingScreen isDark={isDark} /> : <ResultScreen finalResult={finalResult} onRestart={restartQuiz} quizQuestions={quizQuestions} answers={answers} answerTimes={answerTimes} prioritizedCategories={prioritizedCategories} politicalCompassResult={politicalCompassResult} tagScores={tagScores} ANSWER_VALUES={ANSWER_VALUES} PRISMS_DATA={PRISMS_DATA as PrismsDataMap} isDark={isDark} />;
            case 'legal': return <MentionsLegales onBack={goToHome} isDark={isDark} />;
            default: return null;
        }
    };

    return (
        <div className={`min-h-[100dvh] w-full ${isDark ? 'dark' : ''} bg-[#f1f5f9] dark:bg-[#242d40] text-gray-900 dark:text-gray-100 flex flex-col font-sans transition-colors duration-300`}>
            <StickyBanner />
            <main className="flex-1 w-full z-30 flex flex-col items-center p-4 sm:p-6">
                <div className="h-5 w-full flex-shrink-0" />
                <div className="w-full h-full flex items-center justify-center">
                    {renderContent()}
                </div>
            </main>
            <Footer onLegalClick={goToLegal} />
            <Analytics />
        </div>
    );
};

export default App;
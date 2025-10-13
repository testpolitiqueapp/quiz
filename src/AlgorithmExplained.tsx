import React from 'react';
import { ArrowLeft, BrainCircuit, MousePointerClick, Calculator, Trophy, Check, ArrowRight, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { GlassTile } from './components/ui/GlassTile';
import { GlassButton } from './components/ui/GlassButton';

interface DetailedAlgorithmExplainedProps {
  onBack: () => void;
  isDark: boolean;
}

const DetailedAlgorithmExplained: React.FC<DetailedAlgorithmExplainedProps> = ({ onBack, isDark }) => {

  const techTermStyles = twMerge(
    "font-mono text-sm px-1.5 py-0.5 rounded-md",
    "bg-slate-500/10 dark:bg-blue-400/10",
    "text-blue-900/80 dark:text-blue-300",
    "ring-1 ring-inset ring-slate-500/10 dark:ring-blue-400/20"
  );

  const boldTextClasses = "font-bold";

  return (
    <div className={twMerge("w-full font-sans", isDark ? "dark" : "")}>
      <div className="w-full max-w-4xl mx-auto py-8 sm:py-12">

        {/* --- EN-TÊTE --- */}
        <header className="text-center mb-12 sm:mb-16">
          <div className="w-full flex justify-start mb-8">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition"
            >
              <ArrowLeft className="w-4 h-4" /> Retour
            </button>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-gray-100 text-balance">
            L'algorithme
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-700 dark:text-slate-300 leading-snug">
            Découvrez avec transparence comment nous analysons vos réponses pour vous offrir un résultat juste et personnalisé.
          </p>
        </header>

        {/* --- CORPS PRINCIPAL --- */}
        <main className="space-y-8">

          {/* --- PHASE 1 --- */}
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                <div className="p-3 rounded-2xl bg-blue-500/10 ring-1 ring-inset ring-blue-500/20">
                  <BrainCircuit className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-500 dark:text-blue-400">Phase 1</h2>
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mt-1">Sélection et préparation des questions (<span className={techTermStyles}>startQuiz</span>)</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Votre questionnaire de 25 questions est unique. Il est construit pour refléter vos priorités tout en garantissant une couverture politique pertinente.
              </p>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className={boldTextClasses}>Questions clés ("Tie-Breakers") :</span> 3 questions fondamentales sont <span className="text-blue-600 dark:text-blue-400 font-semibold">systématiquement incluses</span> pour une différenciation plus optimale entre les partis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className={boldTextClasses}>Sélection par priorités :</span> 13 questions issues de vos 5 thèmes choisis, avec un nombre décroissant : 3 pour les priorités 1 à 3, et 2 pour les priorités 4 et 5.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className={boldTextClasses}>Équilibrage des axes :</span> Les places restantes sont attribuées pour assurer un équilibre entre les questions à caractère <span className={boldTextClasses}>économique</span> et <span className={boldTextClasses}>sociétal</span>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className={boldTextClasses}>Mélange intelligent</span> (<span className={techTermStyles}>smartShuffleArray</span>) : L'ordre est optimisé pour éviter que des questions ou catégories similaires ne se suivent.</span>
                </li>
              </ul>
            </GlassTile>
          </div>

          {/* --- PHASE 2 --- */}
          <div className="animate-fade-in-up" style={{ animationDelay: '250ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                <div className="p-3 rounded-2xl bg-green-500/10 ring-1 ring-inset ring-green-500/20">
                  <MousePointerClick className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-green-500 dark:text-green-400">Phase 2</h2>
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mt-1">Collecte et analyse des réponses</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Chaque interaction nous fournit des indices sur la force de vos convictions, au-delà d'un simple clic.
              </p>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className={boldTextClasses}>Valeur de réponse :</span> Votre choix est converti en score de <span className={techTermStyles}>-2</span> à <span className={techTermStyles}>+2</span>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className={boldTextClasses}>Temps de réponse :</span> Une réponse <span className="text-blue-600 dark:text-blue-400 font-semibold">rapide</span> augmente le poids de la question (<span className={techTermStyles}>*1.05</span>), une <span className="text-red-600 dark:text-red-400 font-semibold">lente</span> le diminue (<span className={techTermStyles}>*0.95</span>).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className={boldTextClasses}>Logique du joker :</span> L'algorithme privilégie le remplacement par une question de la <span className={boldTextClasses}>même catégorie thématique</span>.</span>
                </li>
              </ul>
              <div className="p-4 mt-6 rounded-xl bg-red-500/10 border border-red-500/30 text-sm text-red-800 dark:text-red-300">
                <p className={twMerge(boldTextClasses, "mb-2")}>
                  ⚠️ Importance de la cohérence des réponses
                </p>
                <p>
                  L'algorithme est conçu pour analyser des schémas de pensée cohérents. Des réponses très aléatoires et incohérentes produiront inévitablement un positionnement non pertinent.
                </p>
              </div>
            </GlassTile>
          </div>

          {/* --- PHASE 3 --- */}
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                <div className="p-3 rounded-2xl bg-yellow-500/10 ring-1 ring-inset ring-yellow-500/20">
                  <Calculator className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-yellow-500 dark:text-yellow-400">Phase 3</h2>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-1">Le moteur de calcul d'affinité (<span className={techTermStyles}>calculateResult</span>)</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                C'est le cœur du système : définition de votre profil, puis comparaison pondérée avec chaque parti.
              </p>
              <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3 border-b border-slate-200/50 dark:border-slate-700/50 pb-2">1. Calcul des pondérations</h4>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="font-semibold">Poids par priorités :</strong> Une question de vos catégories prioritaires compte <strong className="text-blue-600 dark:text-blue-400">3 fois plus</strong> (<span className={techTermStyles}>PRIORITY_WEIGHT = 3</span>).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="font-semibold">Importance intrinsèque :</strong> Chaque question possède son propre poids (<span className={techTermStyles}>question.importance</span>).</span>
                </li>
              </ul>
              <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3 border-b border-slate-200/50 dark:border-slate-700/50 pb-2">2. Calcul de l'affinité partisane</h4>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="font-semibold">Score d'accord :</strong> La "distance" entre votre réponse et celle du parti est convertie en pourcentage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="font-semibold">Bonus de conviction partagée :</strong> Un accord total (<span className={techTermStyles}>+2</span> / <span className={techTermStyles}>+2</span> ou <span className={techTermStyles}>-2</span> / <span className={techTermStyles}>-2</span>) est bonifié de <span className={techTermStyles}>+10%</span>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span><strong className="font-semibold text-red-600 dark:text-red-500">Pénalité "Deal-Breaker" :</strong> Un désaccord total sur une question "Tie-Breaker", soit une question majeure dans le débat public, <strong className="text-red-600 dark:text-red-500">divise le score final du parti par 4</strong>.</span>
                </li>
              </ul>
            </GlassTile>
          </div>

          {/* --- PHASE 4 --- */}
          <div className="animate-fade-in-up" style={{ animationDelay: '550ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                <div className="p-3 rounded-2xl bg-red-500/10 ring-1 ring-inset ring-red-500/20">
                  <Trophy className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-red-500 dark:text-red-400">Phase 4</h2>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-1">Tri final des résultats</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Les partis sont classés selon un mécanisme de départage précis pour garantir un classement juste.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-200">
                <li><strong className="font-semibold">Critère 1 :</strong> Pourcentage d'affinité final.</li>
                <li><strong className="font-semibold">Critère 2 (Si égalité) :</strong> Score sur vos <strong className="text-blue-600 dark:text-blue-400">catégories prioritaires</strong>.</li>
                <li><strong className="font-semibold">Critère 3 (Si égalité) :</strong> Distance géométrique sur la boussole politique.</li>
              </ol>
            </GlassTile>
          </div>

          {/* --- APPEL À L'ACTION --- */}
          <div className="pt-12 text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3">Prêt à lancer le test ?</h2>
            <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-400 mb-8">
              Maintenant que vous connaissez l'algorithme, découvrez ce qu'il a à dire sur votre profil politique.
            </p>
            <GlassButton
              onClick={onBack}
              variant="primary"
              icon={<ArrowRight className="w-10 h-10" />}
              className="px-10 py-5 text-2xl"
            >
              Commencer
            </GlassButton>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailedAlgorithmExplained;
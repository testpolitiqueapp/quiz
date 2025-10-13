import React, { useState } from 'react';
import { ArrowLeft, Compass, ArrowRight, Check, LayoutGrid, BookText, Users, ListChecks, ChevronDown, ChevronUp } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

// Importation des constantes depuis les fichiers externes
import { PARTIES } from './parties'; // Adaptez le chemin si nécessaire
import { PRISMS_DATA } from './constants'; // Adaptez le chemin si nécessaire
import { QUESTIONS_BY_CATEGORY } from './questions'; // Adaptez le chemin si nécessaire

import { GlassTile } from './components/ui/GlassTile';
import { GlassButton } from './components/ui/GlassButton';

interface PartiesDataExplainedProps {
  onBack: () => void;
  isDark: boolean;
}

const PartiesDataExplained: React.FC<PartiesDataExplainedProps> = ({ onBack, isDark }) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllPrisms, setShowAllPrisms] = useState(false);
  const [showAllPersonalities, setShowAllPersonalities] = useState(false);

  const techTermStyles = twMerge(
    "font-mono text-sm px-1.5 py-0.5 rounded-md",
    "bg-slate-500/10 dark:bg-blue-400/10",
    "text-blue-900/80 dark:text-blue-300",
    "ring-1 ring-inset ring-slate-500/10 dark:ring-blue-400/20"
  );

  const headerTextClasses = "text-slate-600 dark:text-slate-300 mb-6";
  const listItemClasses = "space-y-3 text-slate-700 dark:text-slate-200";
  const sectionMainTitleClasses = "text-3xl font-bold text-slate-800 dark:text-slate-100 mt-1";
  const detailTitleClasses = "font-semibold text-slate-800 dark:text-slate-100";
  const orientationTextClasses = "text-xs italic text-slate-500 dark:text-slate-400";
  const partyIdClasses = "font-mono text-xs font-bold text-blue-600 dark:text-blue-400 ml-2";
  const boldTextClasses = "font-bold";
  const seeMoreButtonClasses = "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border border-slate-200/50 dark:border-slate-600/30 bg-gradient-to-r from-slate-50/80 to-slate-100/60 dark:from-slate-800/60 dark:to-slate-700/40 hover:shadow-md hover:scale-105 active:scale-100 text-slate-800 dark:text-slate-100";

  const exampleQuestion = {
    id: 201,
    text: "Faut-il abroger la réforme des retraites portant l'âge de départ à 64 ans ?",
    importance: 3,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1,
    description: "Une proposition pour revenir à un âge légal de départ à la retraite de 62 ans ou moins.",
    positions: {
      "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "RN": 2, "Renaissance": -2, "LR": -2, "Horizons": -2,
      "Modem": -2, "UDI": -2,
    }
  };

  const colorChip = (hex: string) => (
      <span style={{ backgroundColor: hex }} className="w-4 h-4 rounded-full inline-block align-middle ml-1 border border-slate-300 dark:border-slate-600"></span>
  );

  // --- Data Slicing ---
  const categoryNames = Object.keys(QUESTIONS_BY_CATEGORY);
  const visibleCategories = categoryNames.slice(0, 6); // Changé à 6
  const hiddenCategories = categoryNames.slice(6); // Changé à 6
  const hasMoreCategories = hiddenCategories.length > 0;

  const prismEntries = Object.entries(PRISMS_DATA);
  const visiblePrisms = prismEntries.slice(0, 4);
  const hiddenPrisms = prismEntries.slice(4);
  const hasMorePrisms = hiddenPrisms.length > 0;

  const partiesWithPersonalities = PARTIES.filter(p => p.personality);
  const visiblePersonalities = partiesWithPersonalities.slice(0, 4);
  const hiddenPersonalities = partiesWithPersonalities.slice(4);
  const hasMorePersonalities = hiddenPersonalities.length > 0;

  return (
    <div className={twMerge("w-full font-sans", isDark ? "dark" : "")}>
      <div className="w-full max-w-4xl mx-auto py-8 sm:py-12">

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
            Transparence des données
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-700 dark:text-slate-300 leading-snug">
            Découvrez les valeurs brutes attribuées à chaque parti et la définition de chaque prisme thématique.
          </p>
        </header>

        <main className="space-y-8">

          {/* Section 1: Modélisation des partis */}
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                <div className="p-3 rounded-2xl bg-blue-500/10 ring-1 ring-inset ring-blue-500/20">
                  <Compass className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-500 dark:text-blue-400">Section 1</h2>
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mt-1">Modélisation des partis (valeurs clés)</h3>
                </div>
              </div>
              <p className={headerTextClasses}>
                Chaque parti est positionné sur la boussole politique (de -100 à +100 pour chaque axe) et évalué sur des facteurs de comportement, essentiels au calcul final.
              </p>
              
              <p className={twMerge(headerTextClasses, "mt-[-1rem]")}>
                  Pour garantir une objectivité maximale et éviter tout biais humain, une intelligence artificielle a été employée comme une « main innocente » pour définir les valeurs de l'<span className={techTermStyles}>Axe X (Éco)</span>, l'<span className={techTermStyles}>Axe Y (Sociétal)</span>, le <span className={techTermStyles}>Radicalisme</span> et la <span className={techTermStyles}>Cohésion</span>, sur la base des données programmatiques publiques.
              </p>

              <p className="text-xs italic text-slate-500 dark:text-slate-400 mb-4 sm:hidden">
                  Faites défiler le tableau vers la droite pour voir toutes les données. ➡️
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                  <thead className="bg-slate-50 dark:bg-slate-700/50">
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Parti</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Axe X (Éco)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Axe Y (Sociétal)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Radicalisme (0-1)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Cohésion (0-1)</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Couleur</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
                    {PARTIES.map((party) => (
                      <tr key={party.id} className="text-sm">
                        <td className="px-3 py-3 whitespace-nowrap">
                          <div className={detailTitleClasses}>
                              {party.name}
                              <span className={partyIdClasses}>({party.id})</span>
                          </div>
                          <div className={orientationTextClasses}>{party.orientation}</div>
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap font-mono text-xs">{party.compass.x}</td>
                        <td className="px-3 py-3 whitespace-nowrap font-mono text-xs">{party.compass.y}</td>
                        <td className="px-3 py-3 whitespace-nowrap font-mono text-xs">{party.radicalism.toFixed(2)}</td>
                        <td className="px-3 py-3 whitespace-nowrap font-mono text-xs">{party.cohesion.toFixed(2)}</td>
                        <td className="px-3 py-3 whitespace-nowrap">
                          {colorChip(isDark ? party.color.dark : party.color.light)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassTile>
          </div>
          
          {/* Section 2: Catégories */}
          <div className="animate-fade-in-up" style={{ animationDelay: '250ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                <div className="p-3 rounded-2xl bg-teal-500/10 ring-1 ring-inset ring-teal-500/20">
                  <ListChecks className="w-8 h-8 text-teal-500" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-500 dark:text-teal-400">Section 2</h2>
                  <h3 className={sectionMainTitleClasses}>Catégories des questions</h3>
                </div>
              </div>
              <p className={headerTextClasses}>
                Le test est structuré autour des {categoryNames.length} catégories thématiques suivantes. Chaque catégorie aborde un grand champ de l'action publique.
              </p>

              <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {visibleCategories.map((categoryName) => (
                          <div key={categoryName} className="p-3 rounded-lg bg-slate-50/70 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700 transition hover:shadow-md">
                              <span className={detailTitleClasses}>{categoryName}</span>
                          </div>
                      ))}
                  </div>

                  <div className={twMerge("grid transition-[grid-template-rows] duration-500 ease-in-out", showAllCategories ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                      <div className="overflow-hidden">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
                              {hiddenCategories.map((categoryName) => (
                                  <div key={categoryName} className="p-3 rounded-lg bg-slate-50/70 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700 transition hover:shadow-md">
                                      <span className={detailTitleClasses}>{categoryName}</span>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>

              {hasMoreCategories && (
                  <div className="mt-4 flex justify-center">
                      <button onClick={() => setShowAllCategories(!showAllCategories)} className={seeMoreButtonClasses}>
                          {showAllCategories ? (
                              <><span>Voir moins</span><ChevronUp className="w-4 h-4" /></>
                          ) : (
                              <><span>Voir plus ({hiddenCategories.length})</span><ChevronDown className="w-4 h-4" /></>
                          )}
                      </button>
                  </div>
              )}
            </GlassTile>
          </div>

          {/* Section 3: Structure des questions */}
          <div className="animate-fade-in-up" style={{ animationDelay: '450ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                <div className="p-3 rounded-2xl bg-orange-500/10 ring-1 ring-inset ring-orange-500/20">
                  <BookText className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-orange-500 dark:text-orange-400">Section 3</h2>
                  <h3 className={sectionMainTitleClasses}>Structure des questions</h3>
                </div>
              </div>
              <p className={headerTextClasses}>
                Chaque question est une structure de données complexe qui définit son rôle dans l'analyse et les positions attendues de chaque parti.
              </p>

              <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/30 mb-6">
                  <p className={twMerge(boldTextClasses, "text-base text-slate-900 dark:text-slate-100 mb-2")}>
                      Exemple (Question id: 201) :
                  </p>
                  <code className={twMerge("block overflow-x-auto whitespace-pre-wrap text-xs", isDark ? "text-slate-300" : "text-slate-700")}>
{`{
    "id": 201,
    "text": "${exampleQuestion.text}",
    "importance": 3,
    "axis": "${exampleQuestion.axis}",
    "tags_primaires": ["${exampleQuestion.tags_primaires[0]}"],
    "direction": ${exampleQuestion.direction},
    "description": "${exampleQuestion.description}",
    "positions": { ... }
}`}
                  </code>
              </div>

              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 dark:border-red-500/50 text-sm text-red-800 dark:text-red-300">
                  <p className={boldTextClasses + " mb-2"}>
                      ⚠️ Note importante sur la détermination des positions
                  </p>
                  <p>
                      Les valeurs numériques (<span className={techTermStyles}>-2</span> à <span className={techTermStyles}>+2</span>) dans le champ <span className={techTermStyles}>"positions"</span> sont déterminées par l'examen des programmes officiels et des prises de parole publiques à un instant <span className={boldTextClasses}>T</span>.
                  </p>
                  <p className="mt-2">
                      Pour affiner cette analyse, lever les doutes et éviter tout biais humain, une intelligence artificielle est également utilisée. Son rôle est de contre-vérifier la pérennité des positions dans le temps et d'assurer une modélisation la plus neutre possible.
                  </p>
                  <p className="mt-2">
                      En raison de l'évolution rapide du paysage politique, des changements de ligne d'un parti ou des divergences internes, ces valeurs sont des <span className={boldTextClasses}>modélisations</span> qui peuvent nécessiter des ajustements réguliers. Elles ne prétendent pas refléter la position de chaque élu à la virgule près.
                  </p>
              </div>


              <ul className={listItemClasses + " mt-6"}>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className={boldTextClasses}>importance</span> (<span className={techTermStyles}>1 à 3</span>) : Détermine le poids de la question dans le calcul global de l'affinité. 3 est utilisé pour les questions fondamentales ("Tie-Breakers").</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className={boldTextClasses}>axis</span> (<span className={techTermStyles}>economic</span> ou <span className={techTermStyles}>societal</span>) : Indique à quel axe de la boussole la question contribue principalement.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className={boldTextClasses}>direction</span> (<span className={techTermStyles}>1</span> ou <span className={techTermStyles}>-1</span>) : Facteur d'inversion. Définit si un accord sur la question déplace le curseur vers la Gauche/Progressiste (<span className={techTermStyles}>-1</span>) ou la Droite/Conservateur (<span className={techTermStyles}>+1</span>).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className={boldTextClasses}>tags_primaires</span> : Lie la question à un Prisme Thématique (<span className={techTermStyles}>Section 4</span>) pour le calcul du score de conviction de l'utilisateur.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className={boldTextClasses}>positions</span> : Objet contenant la position officielle de chaque parti (de <span className={techTermStyles}>-2</span> à <span className={techTermStyles}>+2</span>) sur le sujet, utilisée pour mesurer la distance avec la réponse de l'utilisateur.</span>
                </li>
              </ul>
            </GlassTile>
          </div>

          {/* Section 4: Prismes Thématiques */}
          <div className="animate-fade-in-up" style={{ animationDelay: '550ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 ring-1 ring-inset ring-purple-500/20">
                  <LayoutGrid className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-purple-500 dark:text-purple-400">Section 4</h2>
                  <h3 className={sectionMainTitleClasses}>Liste complète des prismes thématiques</h3>
                </div>
              </div>
              <p className={headerTextClasses}>
                Ces {prismEntries.length} thèmes (<span className={techTermStyles}>PRISMS_DATA</span>) sont les dimensions sur lesquelles vos réponses sont analysées pour construire votre profil détaillé.
              </p>

              <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {visiblePrisms.map(([id, data]) => (
                          <div key={id} className="p-3 rounded-lg bg-slate-50/70 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700 transition hover:shadow-md">
                              <span className={detailTitleClasses}>{data.name}</span>
                              <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">{data.description}</p>
                          </div>
                      ))}
                  </div>

                  <div className={twMerge("grid transition-[grid-template-rows] duration-500 ease-in-out", showAllPrisms ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                      <div className="overflow-hidden">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                              {hiddenPrisms.map(([id, data]) => (
                                  <div key={id} className="p-3 rounded-lg bg-slate-50/70 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700 transition hover:shadow-md">
                                      <span className={detailTitleClasses}>{data.name}</span>
                                      <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">{data.description}</p>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>

              {hasMorePrisms && (
                  <div className="mt-4 flex justify-center">
                      <button onClick={() => setShowAllPrisms(!showAllPrisms)} className={seeMoreButtonClasses}>
                          {showAllPrisms ? (
                              <><span>Voir moins</span><ChevronUp className="w-4 h-4" /></>
                          ) : (
                              <><span>Voir plus ({hiddenPrisms.length})</span><ChevronDown className="w-4 h-4" /></>
                          )}
                      </button>
                  </div>
              )}
            </GlassTile>
          </div>

          {/* Section 5: Personnalités */}
          <div className="animate-fade-in-up" style={{ animationDelay: '650ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                <div className="p-3 rounded-2xl bg-green-500/10 ring-1 ring-inset ring-green-500/20">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-green-500 dark:text-green-400">Section 5</h2>
                  <h3 className={sectionMainTitleClasses}>Personnalités politiques associées</h3>
                </div>
              </div>
              <p className={headerTextClasses}>
                Voici la liste des personnalités utilisées pour représenter les partis. Elles sont choisies pour leur notoriété et leur rôle au sein de leur mouvement.
              </p>
              
              <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {visiblePersonalities.map((party) => (
                          <div key={party.id} className="p-3 rounded-lg bg-slate-50/70 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700 transition hover:shadow-md">
                              <span className={detailTitleClasses}>{party.name}</span>
                              <p className="text-sm mt-1 text-slate-600 dark:text-slate-400">{party.personality}</p>
                          </div>
                      ))}
                  </div>

                  <div className={twMerge("grid transition-[grid-template-rows] duration-500 ease-in-out", showAllPersonalities ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                      <div className="overflow-hidden">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                              {hiddenPersonalities.map((party) => (
                                  <div key={party.id} className="p-3 rounded-lg bg-slate-50/70 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700 transition hover:shadow-md">
                                      <span className={detailTitleClasses}>{party.name}</span>
                                      <p className="text-sm mt-1 text-slate-600 dark:text-slate-400">{party.personality}</p>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
              
              {hasMorePersonalities && (
                  <div className="mt-4 flex justify-center">
                      <button onClick={() => setShowAllPersonalities(!showAllPersonalities)} className={seeMoreButtonClasses}>
                          {showAllPersonalities ? (
                              <><span>Voir moins</span><ChevronUp className="w-4 h-4" /></>
                          ) : (
                              <><span>Voir plus ({hiddenPersonalities.length})</span><ChevronDown className="w-4 h-4" /></>
                          )}
                      </button>
                  </div>
              )}
            </GlassTile>
          </div>

          {/* Bouton Final */}
          <div className="pt-12 text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3">Prêt à lancer le test ?</h2>
            <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-400 mb-8">
              Notre algorithme analyse vos réponses pour vous situer dans le paysage politique français.
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

export default PartiesDataExplained;
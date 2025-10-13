import React from 'react';
import { ArrowLeft, Compass, ArrowRight, Check, LayoutGrid, BookText } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

import { GlassTile } from './components/ui/GlassTile';
import { GlassButton } from './components/ui/GlassButton';

const PARTIES = [
  { id: "NPA", name: "Nouveau Parti Anticapitaliste", orientation: "Extrême gauche", compass: { x: -90, y: -90 }, radicalism: 0.97, cohesion: 0.85, color: { light: '#a90000', dark: '#a90000' } },
  { id: "LO", name: "Lutte Ouvrière", orientation: "Extrême gauche", compass: { x: -100, y: -80 }, radicalism: 0.95, cohesion: 0.98, color: { light: '#a90000', dark: '#a90000' } },
  { id: "LFI", name: "La France Insoumise", orientation: "Extrême gauche", compass: { x: -80, y: -70 }, radicalism: 0.85, cohesion: 0.90, color: { light: '#e10000', dark: '#e10000' } },
  { id: "PCF", name: "Parti Communiste Français", orientation: "Communiste", compass: { x: -75, y: 20 }, radicalism: 0.60, cohesion: 0.70, color: { light: '#f60000', dark: '#f60000' } },
  { id: "Générations", name: "Générations", orientation: "Gauche", compass: { x: -60, y: -60 }, radicalism: 0.70, cohesion: 0.60, color: { light: '#f6004a', dark: '#f6004a' } },
  { id: "PS", name: "Parti Socialiste", orientation: "Gauche", compass: { x: -40, y: -30 }, radicalism: 0.35, cohesion: 0.40, color: { light: '#f60085', dark: '#f60085' } },
  { id: "EELV", name: "Les Écologistes", orientation: "Gauche écologiste", compass: { x: -60, y: -70 }, radicalism: 0.70, cohesion: 0.50, color: { light: '#12B850', dark: '#12B850' } },
  { id: "PRG", name: "Parti Radical de Gauche", orientation: "Centre gauche", compass: { x: -20, y: -40 }, radicalism: 0.25, cohesion: 0.65, color: { light: '#e200f6', dark: '#e200f6' } },
  { id: "Modem", name: "Mouvement Démocrate", orientation: "Centre", compass: { x: 20, y: -20 }, radicalism: 0.20, cohesion: 0.75, color: { light: '#E87109', dark: '#E87109' } },
  { id: "Renaissance", name: "Renaissance", orientation: "Centre", compass: { x: 30, y: 30 }, radicalism: 0.40, cohesion: 0.50, color: { light: '#F2DD35', dark: '#F2DD35' } },
  { id: "Horizons", name: "Horizons", orientation: "Centre droit", compass: { x: 40, y: 40 }, radicalism: 0.50, cohesion: 0.70, color: { light: '#0CABCF', dark: '#0CABCF' } },
  { id: "UDI", name: "Union des Démocrates et Indépendants", orientation: "Centre droit", compass: { x: 40, y: -10 }, radicalism: 0.35, cohesion: 0.55, color: { light: '#A410DE', dark: '#A410DE' } },
  { id: "LR", name: "Les Républicains", orientation: "Droite", compass: { x: 60, y: 60 }, radicalism: 0.60, cohesion: 0.50, color: { light: '#222BC7', dark: '#222BC7' } },
  { id: "UDR", name: "Union de la Droite pour la République", orientation: "Droite nationaliste", compass: { x: 70, y: 75 }, radicalism: 0.75, cohesion: 0.90, color: { light: '#2A48B5', dark: '#2A48B5' } },
  { id: "RN", name: "Rassemblement National", orientation: "Droite nationaliste", compass: { x: -30, y: 85 }, radicalism: 0.65, cohesion: 0.85, color: { light: '#0629A1', dark: '#0629A1' } },
  { id: "Debout la France", name: "Debout la France", orientation: "Droite souverainiste", compass: { x: 50, y: 80 }, radicalism: 0.80, cohesion: 0.90, color: { light: '#1d09ff', dark: '#1d09ff' } },
  { id: "Reconquête", name: "Reconquête", orientation: "Extrême droite", compass: { x: 80, y: 90 }, radicalism: 0.90, cohesion: 0.95, color: { light: '#102673', dark: '#102673' } }
];

const PRISMS_DATA = {
  'ecologie': { name: 'Préservation de l’environnement', description: "L'écologie est un enjeu transversal." },
  'condition-animale': { name: 'Protection animale', description: "Intérêt marqué pour la cause et le bien-être des animaux." },
  'souverainete': { name: 'Indépendance nationale', description: "La souveraineté est la condition essentielle de la démocratie." },
  'securite-autorite': { name: 'Ordre et sécurité', description: "Thématiques liées à l'ordre, la sécurité et l'autorité de l'État." },
  'justice-sociale': { name: 'Justice sociale', description: "Lutte contre les inégalités et la protection des plus faibles." },
  'progressisme-societal': { name: 'Progrès sociétal', description: "Sensibilité à l'avancée des libertés individuelles et des droits sociétaux." },
  'immigration-controlee': { name: 'Maîtrise de l’immigration', description: "Questions liées à l'immigration et à la défense de l'identité nationale." },
  'laicite-stricte': { name: 'Défense de la laïcité', description: "Vision stricte de la séparation des Églises et de l'État." },
  'europe-integree': { name: 'Construction européenne', description: "Le renforcement de l'Union Européenne est essentiel." },
  'liberalisme-economique': { name: 'Liberté économique', description: "Liberté d'entreprendre et fiscalité avantageuse pour les entreprises." },
  'humanisme': { name: 'Solidarité humaine', description: "Attaché(e) à la dignité humaine, à la solidarité et à la lutte contre l’exclusion." },
  'ruralite': { name: 'Défense de la ruralité', description: "Défense de la vie, des services et des enjeux spécifiques aux territoires ruraux." },
  'patrimoine': { name: 'Valeurs traditionnelles', description: "Préservation du patrimoine, de l’histoire et des traditions nationales." },
  'jeunesse': { name: 'Avenir de la jeunesse', description: "La jeunesse, son avenir et ses conditions de vie au centre des priorités." },
  'fiscalite-juste': { name: 'Justice fiscale', description: "Sensibilité à la redistribution des richesses et impôt plus progressif." },
  'innovation-technologique': { name: 'Progrès technologique', description: "Valorisation de l’innovation, du progrès technologique et de la recherche." },
  'respect-institutions': { name: 'Respect des institutions', description: "Importance accordée aux institutions de la République comme socle de la vie collective." },
  'independance-energetique': { name: 'Indépendance énergétique', description: "Favorable à une stratégie énergétique souveraine pour la France." },
  'education-nationale': { name: 'Autorité de l’école', description: "Attaché(e) à l’école publique, au savoir, à l’autorité et à la transmission." },
  'rigueur-budgetaire': { name: 'Rigueur budgétaire', description: "Souhait d'un État plus sobre, qui réduit le gaspillage et contrôle ses finances." },
  'fermete-justice': { name: 'Fermeté de la justice', description: "Justice doit être rapide, ferme et pleinement appliquée." },
  'culture-inclusive': { name: 'Culture inclusive', description: "Culture qui reflète la diversité des parcours, des origines, des genres et des vécus." },
  'radicalite': { name: 'Esprit de rupture', description: "En faveur d'un changement profond du système actuel." },
  'feminisme': { name: 'Défense des femmes', description: "Sensibilité à l'égalité entre les femmes et les hommes et les droits des femmes." }
};


interface PartiesDataExplainedProps {
  onBack: () => void;
  isDark: boolean;
}

const PartiesDataExplained: React.FC<PartiesDataExplainedProps> = ({ onBack, isDark }) => {

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

  return (
    <div className={twMerge("w-full font-sans", isDark ? "dark" : "")}>
      <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">

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

              <ul className={listItemClasses + " mt-6 border-t pt-4 border-slate-200/50 dark:border-slate-700/50"}>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className={boldTextClasses}>Boussole</span> (<span className={techTermStyles}>compass</span>) : Coordonnées (X: Gauche/Droite, Y: Progressiste/Conservateur) déterminées par l'analyse des programmes et des votes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <span className={boldTextClasses}>Radicalisme</span> (<span className={techTermStyles}>radicalism</span>) :
                    Une note entre <span className={techTermStyles}>0.0</span> et <span className={techTermStyles}>1.0</span> estimant la <span className={boldTextClasses}>proportion de positions extrêmes</span> (très à gauche ou très à droite/conservateur) adoptées par le parti. Plus la note est haute, plus le parti s'éloigne du consensus central.
                    L'algorithme utilise cette valeur pour accorder un bonus d'affinité si le niveau de radicalisme du parti correspond à celui de vos propres réponses.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <span className={boldTextClasses}>Cohésion</span> (<span className={techTermStyles}>cohesion</span>) :
                    Une note entre <span className={techTermStyles}>0.0</span> et <span className={techTermStyles}>1.0</span> mesurant la <span className={boldTextClasses}>discipline et l'unité interne</span> du parti.
                    Une faible cohésion (<span className={twMerge(techTermStyles, "text-red-600 dark:text-red-400")}>inférieure à 0.5</span>) peut indiquer des divergences notables entre les figures du mouvement ou sur des thèmes clés. L'algorithme applique une légère pénalité d'affinité si ce facteur est très bas pour tenir compte du manque de clarté de la position moyenne.
                  </span>
                </li>
              </ul>
            </GlassTile>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '350ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                <div className="p-3 rounded-2xl bg-orange-500/10 ring-1 ring-inset ring-orange-500/20">
                  <BookText className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-orange-500 dark:text-orange-400">Section 2</h2>
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
    "positions": {
        "LFI": 2, "PS": 2, "RN": 2, "PCF": 2,
        "Renaissance": -2, "LR": -2, "Horizons": -2
        // ... (positions pour tous les partis)
    }
}`}
                  </code>
              </div>

              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 dark:border-red-500/50 text-sm text-red-800 dark:text-red-300">
                  <p className={boldTextClasses + " mb-2"}>
                      ⚠️ Note importante sur la détermination des positions
                  </p>
                  <p>
                      Les valeurs numériques (<span className={techTermStyles}>-2</span> à <span className={techTermStyles}>+2</span>) dans le champ <span className={techTermStyles}>"positions"</span> sont déterminées par un panel d'analystes, basées sur l'examen des programmes officiels et des prises de parole publiques à un instant <span className={boldTextClasses}>T</span>.
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
                  <span><span className={boldTextClasses}>tags_primaires</span> : Lie la question à un Prisme Thématique (<span className={techTermStyles}>Section 3</span>) pour le calcul du score de conviction de l'utilisateur.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><span className={boldTextClasses}>positions</span> : Objet contenant la position officielle de chaque parti (de <span className={techTermStyles}>-2</span> à <span className={techTermStyles}>+2</span>) sur le sujet, utilisée pour mesurer la distance avec la réponse de l'utilisateur.</span>
                </li>
              </ul>
            </GlassTile>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '450ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 ring-1 ring-inset ring-purple-500/20">
                  <LayoutGrid className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-purple-500 dark:text-purple-400">Section 3</h2>
                  <h3 className={sectionMainTitleClasses}>Liste complète des prismes thématiques</h3>
                </div>
              </div>
              <p className={headerTextClasses}>
                Ces 24 thèmes (<span className={techTermStyles}>PRISMS_DATA</span>) sont les dimensions clés sur lesquelles vos réponses sont analysées pour construire votre profil détaillé (au-delà de la simple boussole).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  {Object.entries(PRISMS_DATA).map(([id, data]) => (
                      <div key={id} className="p-3 rounded-lg bg-slate-50/70 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700 transition hover:shadow-md">
                          <span className={detailTitleClasses}>{data.name}</span>
                          <span className={twMerge("ml-2 font-mono text-xs", isDark ? "text-slate-400" : "text-slate-500")}>({id})</span>
                          <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">
                              {data.description}
                          </p>
                      </div>
                  ))}
              </div>
            </GlassTile>
          </div>

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
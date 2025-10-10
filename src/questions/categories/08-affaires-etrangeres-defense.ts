import type { Question } from '../types';

export const affairesEtrangeresDefenseQuestions: Question[] = [
{
    id: 801,
    text: "Faut-il sortir du commandement intégré de l'OTAN ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['souverainete'],
    direction: 1,
    description: "Une décision qui retirerait la France de la structure de commandement militaire de l'Alliance Atlantique.",
    positions: { "LFI": 2, "PCF": 2, "RN": 1, "Debout la France": 2, "Reconquête": 2, "UDR": 1, "NPA": 2, "LO": 2, "Renaissance": -2, "PS": -2, "EELV": -2, "LR": -2, "Horizons": -2, "Modem": -2, "UDI": -2, "Générations": -2, "PRG": -2 }
  },
 {
    id: 802,
    text: "Faut-il augmenter significativement le budget de la Défense (à 3% du PIB) ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['souverainete', 'securite-autorite'],
    direction: 1,
    description: "Une politique visant à consacrer une part plus importante de la richesse nationale aux dépenses militaires.",
    positions: { "Renaissance": 2, "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Horizons": 2, "Modem": 2, "UDI": 2, "Debout la France": 2, "LFI": -2, "EELV": -2, "NPA": -2, "LO": -2, "PS": -1, "PCF": -1, "Générations": -1, "PRG": -1 }
  },
  {
    id: 803,
    text: "Faut-il reconnaître officiellement l'État de Palestine ?",
    importance: 1.5,
    isDealBreaker: true,
    axis: 'societal',
    tags_primaires: ['humanisme', 'progressisme-societal'],
    direction: -1,
    description: "Un acte diplomatique en faveur de la solution à deux États dans le conflit israélo-palestinien.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "PS": 2, "NPA": 2, "Générations": 2, "LO": 2, "PRG": 2, "Renaissance": 2, "Modem": 2, "Horizons": 1, "UDI": 1, "RN": 0, "LR": -1, "UDR": -1, "Debout la France": -1, "Reconquête": -2 }
  },
{
    id: 804,
    text: "Faut-il créer une armée européenne ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['europe-integree'],
    direction: -1, 
    description: "Un projet de défense commune pour que l'UE puisse intervenir militairement de façon autonome.",
    positions: { "Renaissance": 2, "Modem": 2, "Horizons": 2, "PS": 2, "UDI": 2, "PRG": 2, "Générations": 2, "EELV": 1, "LFI": -2, "RN": -2, "Debout la France": -2, "PCF": -2, "LR": -2, "Reconquête": -2, "UDR": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 805,
    text: "Faut-il continuer de soutenir militairement et financièrement l'Ukraine face à la Russie ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['europe-integree', 'humanisme'], 
    direction: -1, 
    description: "Une question sur le niveau d'implication de la France dans le conflit ukrainien.",
    positions: { "Renaissance": 2, "PS": 2, "EELV": 2, "LR": 2, "Horizons": 2, "Modem": 2, "UDI": 2, "PRG": 2, "Générations": 1, "LFI": 0, "RN": 0, "PCF": 0, "Debout la France": -1, "Reconquête": -1, "UDR": -1, "NPA": -2, "LO": -2 }
  },
{
    id: 806,
    text: "Faut-il mettre fin à la présence militaire française permanente en Afrique ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: [],
    direction: 1, 
    description: "Cela concerne le retrait des forces françaises engagées dans des opérations en Afrique (comme l'ex-opération Barkhane), marquant une rupture avec la politique dite de la Françafrique.",
    positions: { "LFI": 2, "NPA": 2, "PCF": 2, "LO": 2, "EELV": 2, "PS": 1, "Générations": 1, "PRG": 1, "Reconquête": 1, "Debout la France": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -1, "RN": -1, "UDR": -1 }
  },
{
    id: 807,
    text: "La France doit-elle partager sa dissuasion nucléaire avec l'Union Européenne ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['europe-integree'], 
    direction: -1, 
    description: "Une proposition visant à étendre la protection du parapluie nucléaire français à l'ensemble des pays de l'UE.",
    positions: { "Renaissance": 2, "Modem": 2, "UDI": 2, "PRG": 2, "PS": 1, "Générations": 1, "LFI": -2, "PCF": -2, "RN": -2, "LR": -2, "Debout la France": -2, "Reconquête": -2, "UDR": -2, "Horizons": -1, "EELV": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 808,
    text: "Faut-il augmenter l'aide publique au développement pour les pays pauvres ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['humanisme', 'justice-sociale'],
    direction: -1,
    description: "Une politique de solidarité internationale visant à consacrer une part plus importante du budget aux pays en difficulté.",
    positions: { "PS": 2, "EELV": 2, "LFI": 2, "PCF": 2, "Générations": 2, "PRG": 2, "NPA": 2, "LO": 2, "Modem": 1, "Renaissance": 1, "Horizons": 1, "UDI": 1, "LR": -1, "RN": -2, "Reconquête": -2, "UDR": -2, "Debout la France": -2 }
  },
{
    id: 809,
    text: "La France doit-elle affirmer plus fortement son indépendance face à la politique étrangère des États-Unis ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['souverainete'],
    direction: 1, 
    description: "Une question sur le positionnement diplomatique de la France : doit-elle privilégier une ligne indépendante ou un alignement solide avec son allié américain ?",
    positions: { "LFI": 2, "PCF": 2, "RN": 1, "Debout la France": 2, "Reconquête": 2, "UDR": 1, "NPA": 2, "LO": 2, "LR": 1, "EELV": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "PS": -2, "UDI": -2, "PRG": -2, "Générations": -2 }
  },
  {
    id: 810,
    text: "Faut-il interdire la pêche en eaux profondes (chalutage profond) ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['ecologie', 'condition-animale'],
    direction: -1, 
    description: "Le chalutage de fond consiste à tracter un grand filet sur le plancher océanique. Cette question porte sur son interdiction, débattue entre intérêts économiques et protection des écosystèmes.",
    positions: { "EELV": 2, "LFI": 2, "NPA": 2, "Générations": 2, "PS": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "LR": -2, "UDR": -2, "RN": -2, "Debout la France": -2, "Reconquête": -2, "PCF": -1 }
  },
 {
    id: 811,
    text: "La France doit-elle présenter des excuses officielles à l'Algérie pour des actes commis durant la colonisation ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['humanisme', 'progressisme-societal'],
    direction: -1, 
    description: "Une question sur la mémoire de la Guerre d'Algérie et de la période coloniale, et la possibilité pour la France de demander pardon officiellement.",
    positions: { "LFI": 2, "EELV": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 812,
    text: "La France doit-elle adopter une position de neutralité dans la rivalité Chine/États-Unis ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['souverainete'],
    direction: 1, 
    description: "Une politique de non-alignement pour préserver l'indépendance stratégique de la France.",
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "Reconquête": 2, "Debout la France": 2, "UDR": 2, "RN": 1, "EELV": 1, "LR": 1, "Renaissance": -1, "PS": -1, "Horizons": -1, "Modem": -1, "UDI": -1, "Générations": -1, "PRG": -1 }
  },
  {
    id: 813,
    text: "Faut-il augmenter la part de la production d'armement sur le sol national ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['souverainete'],
    tags_secondaires: ['securite-autorite'],
    direction: 1, 
    description: "Une politique de souveraineté industrielle visant à relocaliser la fabrication de matériel militaire.",
    positions: { "RN": 2, "Debout la France": 2, "Reconquête": 2, "UDR": 2, "LR": 1, "Renaissance": 1, "LFI": 1, "PCF": 1, "PS": 0, "EELV": 0, "Modem": 0, "Horizons": 0, "UDI": 0, "PRG": 0 }
  },
  {
    id: 814,
    text: "Faut-il conditionner les accords commerciaux au respect des droits de l'Homme ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['humanisme', 'progressisme-societal'],
    direction: -1,
    description: "Utiliser le commerce comme un levier pour promouvoir les valeurs démocratiques et humanistes à l'étranger.",
    positions: { "EELV": 2, "PS": 2, "LFI": 2, "Générations": 2, "PRG": 2, "NPA": 2, "LO": 2, "PCF": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -1, "RN": -2, "Reconquête": -2, "UDR": -2, "Debout la France": -2 }
  },
{
    id: 815,
    text: "La France doit-elle avoir la capacité de riposter dans l'espace en cas d'attaque sur ses satellites ?",
    importance: 0.75,
    axis: 'societal',
    tags_primaires: ['souverainete', 'innovation-technologique'],
    tags_secondaires: ['securite-autorite'],
    direction: 1,
    description: "Une doctrine de contre-attaque spatiale qui implique de pouvoir neutraliser une menace en orbite (via lasers, brouillage, etc.) et pas seulement de se protéger passivement.",
    positions: { "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "LR": 2, "UDR": 2, "RN": 1, "Reconquête": 1, "Debout la France": 1, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 816,
    text: "Faut-il fermer toutes les bases militaires françaises à l'étranger ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: [],
    direction: 1,
    description: "Une proposition visant à un retrait militaire total de la France, notamment en Afrique.",
    positions: { "LFI": 1, "NPA": 2, "LO": 2, "PCF": 1, "EELV": 1, "RN": -1, "Debout la France": 0, "Reconquête": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "LR": -2, "PS": -2 }
  },
  {
    id: 817,
    text: "La diplomatie française doit-elle faire de la protection des chrétiens persécutés dans le monde une priorité ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    direction: 1,
    description: "Un débat sur les priorités de la diplomatie : doit-elle se focaliser sur la défense des minorités chrétiennes au nom de liens historiques, ou agir de manière universelle pour tous les peuples persécutés sans distinction de religion ?",
    positions: { "Reconquête": 2, "RN": 2, "Debout la France": 2, "LR": 2, "UDR": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "PS": -2, "PRG": -2, "LFI": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
];
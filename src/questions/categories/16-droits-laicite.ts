import type { Question } from '../types';

export const droitsLaiciteQuestions: Question[] = [
{
  id: 1601,
  text: "Faut-il interdire les financements étrangers pour la construction des lieux de culte ?",
  importance: 1.5,
  axis: 'societal',
  tags_primaires: ['laicite-stricte', 'souverainete'],
  direction: 1,
  description: "L'objectif est d'empêcher que des États ou organisations étrangères financent la construction de mosquées, églises ou synagogues en France.",
  positions: { "Reconquête": 2, "RN": 2, "LR": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "PS": 0, "EELV": -1, "PCF": -1, "LFI": -2 }
},
 {
  id: 1602,
  text: "Faut-il interdire le port de signes religieux pour les parents accompagnant les sorties scolaires ?",
  importance: 1.25,
  axis: 'societal',
  tags_primaires: ['laicite-stricte'],
  tags_secondaires: ['patrimoine'],
  direction: 1,
  description: "Cette mesure vise à appliquer le principe de neutralité religieuse aux parents bénévoles qui accompagnent les élèves lors des sorties scolaires.",
  positions: { "RN": 2, "Reconquête": 2, "UDR": 2, "LR": 1, "Renaissance": 0, "Horizons": 0, "Modem": 0, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "Générations": -2, "PRG": -2, "NPA": -2, "LO": -2 }
},
  {
  id: 1603,
  text: "Faut-il autoriser le changement de genre sur simple déclaration en mairie ?",
  importance: 1.25,
  axis: 'societal',
  tags_primaires: ['progressisme-societal'],
  tags_secondaires: ['culture-inclusive'],
  direction: -1,
  description: "Cette mesure vise à permettre aux personnes transgenres de modifier leur état civil sans passer par une procédure judiciaire.",
  positions: { "LFI": 2, "EELV": 2, "NPA": 2, "Générations": 2, "PS": 1, "PRG": 1, "PCF": 1, "Renaissance": -1, "Horizons": -1, "Modem": -1, "UDR": -2, "LR": -2, "RN": -2, "Reconquête": -2 }
},
  {
  id: 1604,
  text: "Faut-il renforcer les sanctions contre l'inégalité salariale femmes-hommes ?",
  importance: 1.0,
  axis: 'economic',
  tags_primaires: ['feminisme', 'justice-sociale', 'progressisme-societal'],
  direction: -1, 
  description: "Une mesure visant à imposer des sanctions plus strictes aux entreprises qui ne respectent pas l'égalité salariale.",
  positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "Générations": 2, "PRG": 2, "NPA": 2, "LO": 2, "Renaissance": 2, "Modem": 2, "Horizons": 1, "RN": 1, "LR": 1, "UDR": 1, "Debout la France": -1, "Reconquête": -1 }
},
 {
  id: 1605,
  text: "Faut-il renforcer légalement les sanctions contre les actes de discrimination (racisme, LGBTphobies...) ?",
  importance: 1.0,
  axis: 'societal',
  tags_primaires: ['progressisme-societal'],
  tags_secondaires: ['culture-inclusive'],
  direction: -1, 
  description: "Une mesure pour élargir la définition des discriminations et augmenter les sanctions pénales.",
  positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "Générations": 2, "PRG": 2, "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDR": -1, "LR": 0, "RN": -1, "Debout la France": -2, "Reconquête": -2 }
},
  {
  id: 1606,
  text: "Faut-il reconnaître un troisième genre dans l’état civil ?",
  importance: 1.25,
  axis: 'societal',
  tags_primaires: ['progressisme-societal', 'culture-inclusive'],
  direction: -1, 
  description: "Une proposition visant à permettre aux personnes non-binaires d’avoir une reconnaissance officielle dans les documents d’identité.",
  positions: { "LFI": 2, "EELV": 2, "Générations": 2, "NPA": 2, "LO": 2, "PS": 1, "PCF": 1, "PRG": 1, "Renaissance": 0, "Modem": 0, "Horizons": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
},
  {
  id: 1607,
  text: "Faut-il renforcer les moyens de la justice pour lutter contre les violences faites aux femmes ?",
  importance: 1.0,
  axis: 'societal',
  tags_primaires: ['feminisme', 'justice-sociale'],
  direction: -1,
  description: "Un accroissement des budgets et du personnel judiciaire pour mieux traiter les affaires de violences faites aux femmes.",
  positions: { "LFI": 2, "EELV": 2, "Générations": 2, "PS": 2, "PCF": 2, "PRG": 2, "Renaissance": 2, "Modem": 2, "Horizons": 2, "LR": 1, "UDR": 1, "RN": 1, "Reconquête": 1 }
},
{
  id: 1608,
  text: "Faut-il créer un délit de pression séparatiste pour lutter contre l'islamisme radical ?",
  importance: 1.25,
  axis: 'societal',
  tags_primaires: ['securite-autorite', 'laicite-stricte'],
  direction: 1,
  description: "Une proposition pour punir pénalement les pressions visant à imposer des normes religieuses contraires aux lois de la République.",
  positions: { "LFI": -2, "EELV": -2, "Générations": -1, "PS": -1, "PCF": -1, "PRG": -1, "Renaissance": 2, "Modem": 1, "Horizons": 2, "LR": 2, "Debout la France": 2, "UDR": 2, "RN": 2, "Reconquête": 2 }
},
  {
  id: 1609,
  text: "Faut-il autoriser la PMA (Procréation Médicalement Assistée) pour toutes les femmes ?",
  importance: 1.25,
  axis: 'societal',
  tags_primaires: ['feminisme', 'progressisme-societal'],
  direction: -1,
  description: "L'ouverture de l'assistance médicale à la procréation à toutes les femmes, qu'elles soient célibataires ou en couple homosexuel.",
  positions: { "LFI": 2, "EELV": 2, "Générations": 2, "PS": 2, "PCF": 1, "PRG": 1, "Renaissance": 2, "Modem": 2, "Horizons": 1, "LR": -1, "Debout la France": -2, "UDR": -2, "RN": -2, "Reconquête": -2 }
},
{
  id: 1610,
  text: "Faut-il interdire les crèches de Noël dans les mairies ?",
  importance: 1.0,
  axis: 'societal',
  tags_primaires: [],
  direction: -1, 
  description: "Une mesure visant à interdire l'installation de crèches de Noël dans les bâtiments publics au nom de la laïcité.",
  positions: { "LFI": 2, "EELV": 2, "Générations": 2, "PS": 1, "PCF": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "LR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "UDR": -2 }
},
{
  id: 1611,
  text: "Faut-il instaurer le récépissé pour les contrôles d'identité afin de lutter contre le contrôle au faciès ?",
  importance: 1.25,
  axis: 'societal',
  tags_primaires: ['justice-sociale'],
  direction: -1,
  description: "Une mesure consistant à remettre un justificatif lors de chaque contrôle d'identité afin d'en assurer la traçabilité.",
  positions: { "LFI": 2, "EELV": 2, "PS": 2, "PCF": 2, "Générations": 2, "PRG": 1, "NPA": 2, "LO": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "LR": -2, "Debout la France": -2, "UDR": -2, "RN": -2, "Reconquête": -2 }
},
 {
  id: 1612,
  text: "Faut-il interdire les menus confessionnels dans les cantines scolaires ?",
  importance: 1.25,
  axis: 'societal',
  tags_primaires: ['laicite-stricte'],
  tags_secondaires: ['patrimoine'],
  direction: 1, 
  description: "Une mesure visant à imposer un menu unique dans les cantines scolaires, sans adaptation confessionnelle.",
  positions: { "RN": 1, "Reconquête": 2, "UDR": 1, "Debout la France": 2, "LR": 1, "Horizons": -1, "Modem": -1, "Renaissance": -1, "PS": -2, "EELV": -2, "LFI": -2, "PCF": -2, "PRG": -1, "Générations": -2 }
},
 {
  id: 1613,
  text: "Faut-il autoriser le port du burkini dans les piscines publiques ?",
  importance: 1.0,
  isDealBreaker: true,
  axis: 'societal',
  tags_primaires: ['progressisme-societal'],
  tags_secondaires: ['radicalite'],
  direction: -1, 
  description: "Autoriser le port du burkini, un maillot de bain couvrant le corps et les cheveux, dans les piscines municipales.",
  positions: { "LFI": 2, "EELV": 2, "Générations": 2, "PS": 1, "PCF": 1, "PRG": 0, "Renaissance": -1, "Modem": -1, "Horizons": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
},
 {
  id: 1614,
  text: "Faut-il garantir le secret des sources des journalistes dans la loi ?",
  importance: 0.75,
  axis: 'societal',
  tags_primaires: [],
  direction: -1,
  description: "Inscrire une protection renforcée du secret des sources dans la loi pour protéger les journalistes.",
  positions: { "LFI": 2, "EELV": 2, "Générations": 2, "PS": 2, "PCF": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "LR": -1, "Debout la France": -1, "UDR": -1, "RN": -1, "Reconquête": -2 }
},
  {
  id: 1615,
  text: "Faut-il simplifier les procédures de reconnaissance du statut de réfugié ?",
  importance: 1.0,
  axis: 'societal',
  tags_primaires: ['humanisme'],
  direction: -1,
  description: "Faciliter et accélérer le traitement administratif des demandes d'asile pour les personnes cherchant protection en France.",
  positions: { "LFI": 2, "EELV": 2, "Générations": 2, "PS": 2, "PCF": 2, "PRG": 1, "NPA": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "LR": -2, "Debout la France": -2, "UDR": -2, "RN": -2, "Reconquête": -2 }
},
{
    id: 1616,
    text: "Faut-il supprimer les références religieuses du nom des vacances scolaires ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: [],
    tags_secondaires: ['radicalite'],
    direction: -1,
    description: "Une proposition visant à remplacer les noms de vacances d'origine chrétienne (Toussaint, Noël...) par des termes neutres.",
    positions: { "LFI": 2, "EELV": 2, "NPA": 2, "LO": 2, "Générations": 1, "PS": 1, "PCF": 1, "PRG": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 1617,
    text: "Faut-il inscrire une définition plus stricte de la laïcité dans la Constitution ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['laicite-stricte', 'patrimoine'],
    direction: 1, 
    description: "Une révision constitutionnelle visant à renforcer la neutralité de l'État face au fait religieux, notamment dans l'espace public.",
    positions: { "RN": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "LR": 2, "Renaissance": 1, "Horizons": 1, "UDI": 1, "Modem": 0, "PS": -1, "PRG": -1, "LFI": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
  {
    id: 1618,
    text: "Faut-il interdire le port du Hijab dans les compétitions sportives officielles ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    direction: 1,
    description: "Un débat qui oppose la neutralité religieuse des terrains de sport, défendue par certaines fédérations et l'État, à la liberté de conscience et de culte des sportives.",
    positions: { "RN": 2, "Reconquête": 2, "Debout la France": 2, "UDR": 2, "LR": 1, "Renaissance": 1, "Modem": 0, "Horizons": 0, "PCF": -1, "PS": -2, "PRG": -2, "LFI": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
   {
    id: 1619,
    text: "Faut-il interdire le port du voile islamique dans tout l'espace public ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['patrimoine', 'radicalite'],
    direction: 1,
    description: "Une proposition visant à étendre l'interdiction du port de signes religieux ostensibles à l'ensemble de l'espace public (rues, transports...), et pas seulement à l'école ou dans l'administration.",
    positions: { "Reconquête": 2, "RN": 0, "Debout la France": 1, "LR": -1, "UDR": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 1620,
    text: "Faut-il interdire aux femmes transgenres de participer aux compétitions sportives féminines ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    direction: 1,
    description: "Un débat qui oppose le principe d'inclusion des personnes transgenres à celui de l'équité pour les compétitions sportives féminines, basé sur des considérations biologiques.",
    positions: { "RN": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "LR": 1, "LFI": -2, "EELV": -2, "NPA": -2, "Générations": -2, "PS": -1, "PCF": -1, "PRG": -1, "Renaissance": -1, "Modem": -2, "Horizons": -1, "UDI": -1 }
  },
];
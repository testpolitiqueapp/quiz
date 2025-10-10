import type { Question } from '../types';

export const logementQuestions: Question[] = [
  {
    id: 401,
    text: "Faut-il généraliser l'encadrement des loyers dans les grandes villes ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1, 
    description: "Une mesure qui fixe des plafonds de loyer pour limiter leur augmentation dans les zones où la demande est forte (les zones tendues).",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "Générations": 2, "NPA": 2, "LO": 2, "PRG": 1, "RN": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 402,
    text: "Faut-il interdire la location des passoires thermiques ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ecologie', 'justice-sociale'],
    direction: -1,
    description: "Une mesure visant à obliger les propriétaires à rénover les logements les plus énergivores (classés F et G) avant de pouvoir les mettre en location.",
    positions: { "EELV": 2, "LFI": 2, "PS": 2, "PCF": 2, "Générations": 2, "NPA": 2, "LO": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "PRG": 1, "UDI": 0, "LR": -1, "RN": -1, "Reconquête": -2, "UDR": -2, "Debout la France": -2 }
  },
{
    id: 403,
    text: "Faut-il renforcer la loi SRU pour imposer davantage de logements sociaux dans toutes les communes ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1, 
    description: "Une proposition visant à augmenter les obligations (ex: passer le quota de 25% à 30%) et les sanctions pour les maires qui ne construisent pas assez de logements sociaux.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "PS": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 1, "Renaissance": 1, "Modem": 1, "Horizons": 0, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "UDI": -1 }
  },
  {
    id: 404,
    text: "Faut-il réquisitionner les logements vides pour loger les sans-abris ?",
    importance: 1.5,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1, 
    description: "Une mesure permettant à l'État d'utiliser temporairement des logements laissés inoccupés depuis longtemps pour y loger des personnes sans domicile.",
    positions: { "LFI": 2, "NPA": 2, "PCF": 2, "LO": 2, "Générations": 2, "EELV": 1, "PS": 1, "LR": -2, "Reconquête": -2, "Renaissance": -2, "RN": -2, "UDR": -2, "Debout la France": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "PRG": -1 }
  },
{
    id: 405,
    text: "Faut-il assouplir la loi Zéro Artificialisation Nette (ZAN) pour faciliter la construction de logements ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['liberalisme-economique'],
    direction: 1,
    description: "La loi Zéro Artificialisation Nette vise à stopper l'étalement urbain. L'assouplir permettrait de construire plus facilement, mais au détriment des terres agricoles et naturelles.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Debout la France": 2, "RN": 1, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "PCF": 1, "PS": -1, "PRG": -1, "LFI": -2, "EELV": -2, "Générations": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 406,
    text: "Faut-il réorienter les aides financières des banlieues vers les zones rurales ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ruralite', 'patrimoine'],
    direction: 1,
    description: "Une proposition visant à supprimer les crédits de la 'politique de la ville' (destinés aux quartiers prioritaires) pour les réallouer au développement des campagnes.",
    positions: { "Reconquête": 2, "RN": 1, "Debout la France": 2, "LR": 0, "UDR": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
 {
    id: 407,
    text: "Faut-il instaurer une garantie universelle des loyers (GUL) ?",
    importance: 0.75,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1, 
    description: "Un dispositif public qui remplacerait les cautions et garants privés. L'État se porterait garant pour tous les locataires en échange d'une cotisation, et indemniserait les propriétaires en cas d'impayés.",
    positions: { "PS": 2, "EELV": 2, "Générations": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LFI": 0, "PCF": 0, "RN": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 408,
    text: "Faut-il exclure des logements sociaux les familles de délinquants condamnés ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['securite-autorite', 'fermete-justice'],
    direction: 1,
    description: "Une mesure visant à expulser d'un logement social un locataire, ou sa famille, en cas de condamnation pour certains crimes ou délits (trafic de drogue, agressions...).",
    positions: { "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 409,
    text: "Faut-il réguler plus strictement les locations de type Airbnb dans les zones touristiques ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: [],
    direction: -1, 
    description: "Un débat qui oppose la protection du logement pour les habitants à la liberté d'usage de la propriété privée et à l'économie touristique.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "PS": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "RN": 1, "LR": 0, "UDI": 0, "UDR": -1, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 410,
    text: "Faut-il interdire l'installation de chaudières à gaz dans les logements neufs ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une mesure de la nouvelle réglementation environnementale (RE2020) visant à accélérer la sortie des énergies fossiles dans la construction neuve.",
    positions: { "EELV": 2, "Générations": 2, "LFI": 1, "NPA": 1, "PS": 1, "Renaissance": 1, "Modem": 1, "Horizons": 1, "PCF": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 411,
    text: "Faut-il simplifier drastiquement les normes de construction pour construire moins cher ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1,
    description: "Un débat qui oppose la nécessité de maintenir des normes de construction élevées (écologiques, accessibilité...) à la volonté de les simplifier pour réduire les coûts du logement neuf.",
    positions: { "LR": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "RN": 1, "LFI": -2, "PCF": -2, "PS": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 412,
    text: "Faut-il fortement augmenter la taxe sur les résidences secondaires dans les zones touristiques ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['fiscalite-juste', 'justice-sociale'],
    direction: -1,
    description: "Une mesure fiscale visant à décourager la possession de résidences secondaires dans les zones où il manque des logements pour les habitants à l'année.",
    positions: { "LFI": 2, "EELV": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "Renaissance": 0, "Modem": 0, "Horizons": 0, "UDI": 0, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 413,
    text: "Faut-il exonérer de frais de notaire l'achat d'une première résidence principale ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    tags_secondaires: ['jeunesse'],
    direction: 1, 
    description: "Une mesure d'incitation fiscale pour alléger le coût d'un premier achat immobilier et faciliter l'accès à la propriété.",
    positions: { "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "LR": 2, "UDR": 2, "Reconquête": 2, "RN": 1, "Debout la France": 1, "PS": -1, "PRG": -1, "LFI": -2, "PCF": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
{
    id: 414,
    text: "Faut-il interdire les expulsions locatives sans solution de relogement ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['justice-sociale', 'humanisme'],
    direction: -1,
    description: "Une mesure visant à rendre toute expulsion d'un locataire conditionnelle à la proposition d'une solution de relogement décente, afin de lutter contre le sans-abrisme.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "PS": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 415,
    text: "Faut-il fusionner toutes les aides au logement (APL, ALF, ALS) en une prestation unique ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: [],
    direction: 1, 
    description: "Une réforme de simplification administrative qui vise à rendre le système plus lisible et à réduire les dépenses.",
    positions: { "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "LR": 1, "UDR": 1, "Reconquête": 1, "LFI": -2, "PCF": -2, "PS": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2, "RN": -1, "Debout la France": -1 }
  },
  {
    id: 416,
    text: "Faut-il revaloriser de 10% les Aides Personnalisées au Logement (APL) ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1,
    description: "Une proposition d'augmentation générale des APL pour soutenir le pouvoir d'achat des ménages modestes face à la hausse des loyers.",
    positions: { "LFI": 2, "PCF": 2, "PS": 2, "EELV": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "RN": 0, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
];
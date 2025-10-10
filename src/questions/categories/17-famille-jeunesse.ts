import type { Question } from '../types';

export const familleJeunesseQuestions: Question[] = [
{
    id: 1701,
    text: "Faut-il légaliser la Gestation Pour Autrui (GPA) ?",
    importance: 1.25,
    axis: 'societal',
    tags: ['progressisme-societal'],
    direction: -1, 
    description: "Une proposition visant à autoriser et encadrer le recours aux mères porteuses en France.",
    positions: { "NPA": 1, "EELV": 0, "LFI": 0, "Générations": 0, "PRG": 0, "PS": -1, "PCF": -2, "LO": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "RN": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1702,
    text: "Faut-il créer un service public garantissant une place en crèche pour tous ?",
    importance: 1.0,
    axis: 'economic',
    tags: ['justice-sociale', 'jeunesse'],
    direction: -1,
    description: "Une politique pour offrir une solution de garde service public à tous les parents de jeunes enfants, sans condition de revenus.",
    positions: { "PCF": 2, "LFI": 2, "PS": 2, "EELV": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "RN": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 1703,
    text: "Faut-il rendre le Service National Universel (SNU) obligatoire ?",
    importance: 1.25,
    axis: 'societal',
    tags: ['securite-autorite', 'souverainete'],
    direction: 1,
    description: "Une proposition pour imposer à tous les jeunes un séjour de cohésion puis une mission d'intérêt général.",
    positions: { "Renaissance": 2, "Horizons": 2, "Modem": 2, "Reconquête": 2, "RN": 1, "UDR": 1, "Debout la France": 1, "LR": 1, "UDI": 1, "LFI": -2, "PCF": -2, "NPA": -2, "LO": -2, "EELV": -2, "PS": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 1704,
    text: "Faut-il verser une allocation d'autonomie à tous les jeunes de 18 à 25 ans ?",
    importance: 1.25,
    axis: 'economic',
    tags: ['justice-sociale', 'jeunesse'],
    direction: -1,
    description: "Un revenu de base universel pour les jeunes, sans condition de ressources, pour faciliter leur entrée dans la vie autonome.",
    positions: { "LFI": 2, "EELV": 2, "PS": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 1, "LR": -2, "UDR": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1705,
    text: "Faut-il augmenter le plafond du quotient familial ?",
    importance: 1.25,
    axis: 'economic',
    tags: ['patrimoine'],
    direction: 1,
    description: "Le quotient familial diminue l'impôt d'une famille selon son nombre d'enfants. Augmenter son plafond signifie augmenter la réduction d'impôt maximale possible par enfant.",
    positions: { "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
 {
    id: 1706,
    text: "Faut-il rendre les consultations chez le psychologue gratuites pour les moins de 25 ans ?",
    importance: 1.0,
    axis: 'economic',
    tags: ['justice-sociale', 'jeunesse'],
    direction: -1,
    description: "Une mesure pour que les consultations psychologiques pour les jeunes soient intégralement remboursées par la Sécurité sociale.",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 0, "UDI": 0, "RN": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 1707,
    text: "Faut-il créer un congé parental de même durée et mieux rémunéré pour les deux parents ?",
    importance: 1.0,
    axis: 'societal',
    tags: ['progressisme-societal', 'justice-sociale'],
    direction: -1,
    description: "Une réforme inspirée des modèles nordiques, pour favoriser l'égalité femmes-hommes et une meilleure implication des pères.",
    positions: { "EELV": 2, "PS": 2, "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1708,
    text: "L'allocation de rentrée scolaire doit-elle être versée en bons d'achat plutôt qu'en argent ?",
    importance: 1.0,
    axis: 'societal',
    tags: ['securite-autorite'],
    direction: 1, 
    description: "Une proposition visant à flécher l'utilisation de l'Allocation de Rentrée Scolaire uniquement vers l'achat de fournitures, par opposition au versement direct d'une somme d'argent.",
    positions: { "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": -1, "Modem": -1, "Horizons": 1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 1709,
    text: "Faut-il créer un prêt à taux zéro pour tous les jeunes de moins de 25 ans ?",
    importance: 1.0,
    axis: 'economic',
    tags: ['justice-sociale', 'jeunesse'],
    direction: -1,
    description: "Une avance remboursable garantie par l'État pour aider les jeunes à démarrer dans la vie (permis, études, premier logement).",
    positions: { "PS": 2, "EELV": 2, "PCF": 2, "Générations": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LFI": 1, "NPA": 1, "LO": 1, "RN": 0, "LR": -1, "UDR": -1, "Reconquête": -2, "Debout la France": -2 }
  },
   {
    id: 1710,
    text: "Faut-il rendre les crèches publiques gratuites pour toutes les familles ?",
    importance: 1.0,
    axis: 'economic',
    tags: ['justice-sociale', 'jeunesse'],
    direction: -1,
    description: "Une mesure visant à transformer les crèches en un service public entièrement gratuit, comme l'école, sans condition de revenus.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "PS": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "RN": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 1711,
    text: "Faut-il créer un grand Ministère de la Famille pour relancer la natalité ?",
    importance: 1.25,
    axis: 'societal',
    tags: ['patrimoine'],
    direction: 1,
    description: "Une proposition visant à faire de la politique familiale et de la natalité une priorité gouvernementale majeure, incarnée par un ministère dédié.",
    positions: { "Reconquête": 2, "RN": 2, "LR": 2, "UDR": 2, "Debout la France": 2, "Renaissance": -2, "Modem": -2, "Horizons": -1, "UDI": -2, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 1712,
    text: "Faut-il ouvrir le RSA (Revenu de Solidarité Active) aux jeunes de moins de 25 ans ?",
    importance: 1.25,
    axis: 'economic',
    tags: ['justice-sociale', 'jeunesse'],
    direction: -1, 
    description: "Une mesure pour étendre le Revenu de Solidarité Active aux 18-25 ans, qui en sont actuellement exclus.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "PS": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 1713,
    text: "La loi doit-elle reconnaître la pluriparentalité (plus de deux parents légaux pour un enfant) ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['progressisme-societal', 'culture-inclusive'],
    direction: -1, 
    description: "Une proposition visant à permettre qu'un enfant puisse être légalement reconnu par plus de deux parents (ex: dans le cas de familles homoparentales ayant eu recours à une personne tierce impliquée dans l'éducation).",
    positions: { "EELV": 1, "Générations": 1, "NPA": 2, "LFI": 0, "PS": -2, "PCF": -2, "PRG": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "LO": -2 }
  },
  {
    id: 1714,
    text: "Faut-il supprimer les allocations familiales aux parents de mineurs délinquants récidivistes ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['securite-autorite'],
    tags_secondaires: ['rigueur-budgetaire'],
    direction: 1,
    description: "Une proposition visant à sanctionner financièrement les parents en cas de récidive de leur enfant mineur, en suspendant le versement des allocations familiales.",
    positions: { "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": -2, "Modem": -2, "Horizons": -1, "UDI": -2, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 1715,
    text: "Faut-il rendre obligatoire la transmission du nom des deux parents à l'enfant ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['feminisme', 'progressisme-societal'],
    direction: -1, 
    description: "Une proposition visant à ce que l'enfant porte automatiquement le nom de ses deux parents, pour mettre fin à la tradition du nom du père.",
    positions: { "LFI": 2, "EELV": 2, "Générations": 2, "NPA": 2, "PS": 1, "Renaissance": 0, "Modem": 0, "PCF": 0, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 1716,
    text: "Faut-il dégenrer les rayons des magasins de jouets (supprimer les sections filles/garçons) ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['feminisme', 'culture-inclusive'],
    tags_secondaires: ['radicalite'],
    direction: -1, 
    description: "Une proposition visant à lutter contre les stéréotypes de genre dès l'enfance en supprimant le marketing et les rayons spécifiquement dédiés aux filles ou aux garçons.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 1, "PCF": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "LO": 2, "PRG": 0 }
  },
];
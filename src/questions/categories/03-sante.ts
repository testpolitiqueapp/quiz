import type { Question } from '../types';

export const santeQuestions: Question[] = [
{
    id: 301,
    text: "Faut-il réguler l'installation des médecins pour lutter contre les déserts médicaux ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['justice-sociale'],
    direction: -1, 
    description: "Une mesure pour contraindre ou fortement inciter les nouveaux médecins à s'installer dans les zones où il en manque.",
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "PS": 1, "EELV": 1, "Générations": 1, "RN": 1, "Debout la France": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "PRG": 0, "LR": -1, "UDR": -1, "Reconquête": -1 }
  },
  {
    id: 302,
    text: "Faut-il rembourser à 100% les soins dentaires, optiques et auditifs par la Sécurité Sociale ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    tags_secondaires: ['fiscalite-juste'],
    direction: -1, 
    description: "Une proposition pour supprimer le reste à charge sur ces soins en les intégrant totalement à la Sécurité Sociale, sans passer par les mutuelles privées.",
    positions: { "LFI": 2, "PCF": 2, "PS": 2, "NPA": 2, "LO": 2, "Générations": 2, "EELV": 1, "PRG": 1, "RN": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 303,
    text: "Faut-il légaliser le cannabis à des fins récréatives ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    tags_secondaires: ['radicalite'],
    direction: -1, 
    description: "Une proposition visant à autoriser, encadrer par l'État et taxer la vente et la consommation de cannabis.",
    positions: { "LFI": 2, "EELV": 2, "Générations": 2, "NPA": 2, "PS": 1, "PCF": 0, "PRG": 0, "LO": -1, "Renaissance": -1, "Modem": -1, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 304,
    text: "Faut-il légaliser l'aide active à mourir (euthanasie, suicide assisté) ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: [],
    direction: -1,
    description: "Une proposition sur la fin de vie permettant à une personne atteinte d'une maladie incurable de demander une aide médicale pour mourir.",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "RN": -1, "LR": 0, "UDR": -1, "Reconquête": -2, "Debout la France": -2, "UDI": 0 }
  },
{
    id: 305,
    text: "Faut-il étendre le droit de prescription des pharmaciens pour certaines maladies courantes ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['liberalisme-economique'],
    direction: 1, 
    description: "Une mesure pour permettre aux pharmaciens de prescrire des traitements pour des affections simples (ex: cystite, angine), afin de désengorger les cabinets médicaux.",
    positions: { "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 1, "LR": 2, "PS": 0, "EELV": 0, "RN": 0, "LFI": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -1, "Reconquête": 1, "UDR": 1, "Debout la France": 0 }
  },
{
    id: 306,
    text: "Faut-il interdire les dépassements d'honoraires des médecins spécialistes ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    tags_secondaires: ['fiscalite-juste'],
    direction: -1,
    description: "Une mesure pour obliger tous les médecins spécialistes à appliquer les tarifs de base de la Sécurité sociale, afin de garantir un accès financier égal aux soins.",
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "EELV": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "RN": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 307,
    text: "Faut-il instaurer un congé menstruel pour les femmes souffrant de règles douloureuses ?",
    importance: 0.75,
    axis: 'societal',
    tags_primaires: ['feminisme', 'progressisme-societal'],
    direction: -1,
    description: "Un dispositif permettant aux femmes qui souffrent de dysménorrhée de s'absenter du travail quelques jours par mois, sur avis médical.",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "Générations": 2, "PCF": 2, "NPA": 2, "LO": 2, "PRG": 1, "Renaissance": 0, "Modem": 0, "Horizons": 0, "UDI": 0, "RN": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 308,
    text: "Faut-il généraliser l'ouverture de salles de shoot (Haltes Soins Addictions) ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    direction: -1,
    description: "Des espaces médicalisés où les toxicomanes peuvent consommer leurs propres produits dans des conditions d'hygiène et de sécurité, afin de réduire les risques d'overdose et de maladies.",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 1, "Renaissance": 0, "Modem": 1, "Horizons": 0, "UDI": 0, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 309,
    text: "Faut-il augmenter fortement le prix du paquet de cigarettes pour réduire le tabagisme ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: [],
    direction: 1,
    description: "Une mesure de santé publique visant à décourager le tabagisme en utilisant une fiscalité élevée.",
    positions: { "Renaissance": 2, "Modem": 2, "Horizons": 1, "PS": 1, "EELV": 1, "Générations": 1, "LFI": -1, "PCF": -1, "PRG": -1, "LR": -1, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "NPA": -2, "LO": -2, "UDI": 2 }
  },
 {
    id: 310,
    text: "Faut-il mieux rembourser les médecines douces (ostéopathie, psychologue...) ?",
    importance: 0.75,
    axis: 'societal',
    tags_primaires: ['justice-sociale'],
    tags_secondaires: ['fiscalite-juste'],
    direction: -1, 
    description: "Une proposition pour que la Sécurité Sociale prenne mieux en charge les thérapies alternatives et les soins non conventionnels.",
    positions: { "EELV": 2, "Générations": 2, "LFI": 1, "PS": 0, "PRG": 0, "UDI": 0, "Renaissance": -1, "Modem": -1, "Horizons": -1, "RN": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2, "PCF": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 311,
    text: "Faut-il rendre obligatoire la vaccination contre le papillomavirus (HPV) au collège ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: [],
    direction: 1,
    description: "Une mesure de santé publique visant à imposer la vaccination contre les infections à papillomavirus humains pour lutter contre certains cancers (ex: col de l'utérus).",
    positions: { "Renaissance": 2, "PS": 2, "EELV": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "PCF": 2, "Générations": 2, "PRG": 2, "LFI": 1, "LR": 1, "UDR": 0, "RN": -1, "Debout la France": -1, "Reconquête": -2, "NPA": -2, "LO": -2 }
  },
 {
    id: 312,
    text: "Faut-il interdire les opérations de changement de sexe pour les mineurs ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    direction: 1,
    description: "Une proposition visant à interdire les interventions chirurgicales de réassignation de genre pour les personnes de moins de 18 ans.",
    positions: { "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": 0, "Modem": -1, "Horizons": 0, "UDI": -1, "LFI": -2, "EELV": -2, "PS": -1, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -1 }
  },
{
    id: 313,
    text: "Faut-il interdire la publicité pour la malbouffe (produits trop sucrés, salés ou gras) ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: [],
    direction: -1,
    description: "Une mesure de santé publique pour lutter contre l'obésité en interdisant la publicité pour les aliments jugés mauvais pour la santé.",
    positions: { "EELV": 2, "PS": 2, "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 1, "Renaissance": 1, "Modem": 0, "Horizons": -1, "RN": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 314,
    text: "Faut-il supprimer les Agences Régionales de Santé (ARS) ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['rigueur-budgetaire'],
    direction: 1, 
    description: "Créées en 2010, les ARS sont chargées de mettre en œuvre la politique de santé de l'État dans chaque région (gestion des hôpitaux, crises sanitaires...).",
    positions: { "LFI": 2, "RN": 2, "Debout la France": 2, "NPA": 2, "LO": 2, "Reconquête": 1, "UDR": 1, "PS": -1, "PCF": -1, "EELV": -1, "LR": 0, "Renaissance": -2, "Modem": -2, "Horizons": -1, "UDI": -2, "PRG": -2, "Générations": -2 }
  },
{
    id: 315,
    text: "Faut-il exonérer d'impôts les revenus des médecins retraités qui continuent d'exercer ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1,
    description: "Une mesure d'incitation fiscale pour encourager les médecins à la retraite à poursuivre leur activité et ainsi lutter contre les déserts médicaux.",
    positions: { "LR": 1, "UDR": 1, "Reconquête": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "RN": 2, "Debout la France": 1, "LFI": -2, "PCF": -1, "PS": -1, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -1 }
  },
    {
    id: 316,
    text: "Faut-il mettre fin à l'expérimentation du cannabis thérapeutique en France ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    direction: 1,
    description: "L'expérimentation du cannabis à usage médical est en cours. Cette proposition vise à y mettre un terme et à ne pas l'autoriser, par principe de précaution ou pour des raisons idéologiques.",
    positions: { "Reconquête": 2, "RN": 1, "Debout la France": 2, "LR": 1, "UDR": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 317,
    text: "Faut-il supprimer la clause de conscience qui autorise un médecin à refuser de pratiquer une IVG ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['feminisme', 'progressisme-societal'],
    direction: -1, 
    description: "Une proposition visant à supprimer la possibilité pour un professionnel de santé de refuser de pratiquer un avortement pour des raisons personnelles, afin de garantir l'accès à l'IVG sur tout le territoire.",
    positions: { "LFI": 2, "EELV": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 318,
    text: "Faut-il augmenter les taxes sur les sodas et les aliments ultra-transformés ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: [],
    direction: -1, 
    description: "Une mesure de santé publique visant à décourager la consommation de malbouffe via une taxe comportementale, dont les revenus pourraient financer la prévention.",
    positions: { "PS": 2, "EELV": 2, "Générations": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2, "RN": -2, "LFI": -1, "PCF": -1, "NPA": -1, "LO": -1 }
  },
];
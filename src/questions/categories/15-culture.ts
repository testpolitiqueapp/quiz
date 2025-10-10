import type { Question } from '../types';

export const cultureQuestions: Question[] = [
{
    id: 1501,
    text: "Faut-il interdire l'écriture inclusive dans les documents administratifs ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    direction: 1, 
    description: "La question porte sur l'extension ou le maintien de l'interdiction d'utiliser des formes linguistiques non traditionnelles (point médian, tiret, etc.) dans l'ensemble des communications de l'administration.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "RN": 2, "Debout la France": 2, "Renaissance": 1, "Horizons": 1, "Modem": 1, "UDI": 1, "PS": -2, "PRG": -2, "Générations": -2, "EELV": -2, "LFI": -2, "PCF": -2, "NPA": -2, "LO": -2 }
},
 {
    id: 1502,
    text: "Faut-il rendre l'entrée aux musées nationaux gratuite pour tous ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    tags_secondaires: ['fiscalite-juste'],
    direction: -1, 
    description: "La question porte sur l'instauration d'une gratuité permanente et totale de l'accès aux collections permanentes des musées gérés par l'État, sans condition d'âge ou de statut.",
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "EELV": 1, "PS": 1, "Générations": 1, "PRG": 1, "Debout la France": 0, "RN": -1, "Reconquête": -1, "LR": -2, "UDR": -2, "Renaissance": -2, "Horizons": -2, "Modem": -2, "UDI": -2 }
},
 {
    id: 1503,
    text: "Faut-il retirer la fréquence de diffusion de la chaîne CNEWS ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: [],
    direction: -1, 
    description: "La question porte sur le retrait de l'autorisation d'émettre de la chaîne, dans le cadre du contrôle par l'Arcom (régulateur de l'audiovisuel).", 
    positions: { "LFI": 2, "EELV": 2, "PCF": 2, "PS": 1, "Générations": 1, "PRG": 1, "NPA": 2, "LO": 2, "Modem": -1, "UDI": -1, "Renaissance": -1, "Horizons": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
},
 {
    id: 1504,
    text: "Faut-il investir 2 milliards d'euros sur 5 ans pour restaurer le patrimoine en péril (églises, châteaux, monuments historiques) ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['patrimoine'],
    direction: 1,
    description: "La question porte sur l'engagement d'un budget massif pour la restauration des monuments historiques nécessitant des travaux urgents, en particulier le patrimoine religieux et civil en milieu rural.",
    positions: { "Reconquête": 2, "RN": 1, "Debout la France": 2, "LR": 1, "UDR": 1, "Renaissance": 1, "Horizons": 1, "Modem": 0, "UDI": 0, "PS": 0, "PRG": 0, "Générations": 0, "EELV": -1, "LFI": -2, "PCF": -1, "NPA": -2, "LO": -2 }
},
  {
    id: 1505,
    text: "Faut-il maintenir le dispositif du Pass Culture pour les jeunes ?",
    importance: 1,
    axis: 'economic',
    tags_primaires: ['jeunesse'],
    tags_secondaires: ['fiscalite-juste'],
    direction: -1, 
    description: "Le Pass Culture est un dispositif offrant un crédit aux jeunes (18 ans et progressivement les plus jeunes) pour leurs dépenses en biens et services culturels, afin de démocratiser l'accès à la culture.",
    positions: { "Renaissance": 2, "Horizons": 2, "Modem": 2, "UDI": 2, "PS": 2, "PCF": 2, "Générations": 2, "PRG": 2, "LFI": 1, "EELV": 1, "NPA": 1, "LO": 1, "LR": 0, "UDR": 0, "RN": 1, "Debout la France": 0, "Reconquête": 0 }
},
  {
    id: 1506,
    text: "Faut-il rétablir une redevance audiovisuelle pour financer l'audiovisuel public ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: [],
    direction: -1,
    description: "La question porte sur le remplacement du financement actuel de France Télévisions et Radio France (via une fraction de TVA) par un impôt affecté ou par la création d'une nouvelle contribution spécifique.",
    positions: { "LFI": 2, "EELV": 2, "PCF": 1, "PS": 1, "Générations": 2, "PRG": 1, "NPA": 2, "LO": 2, "Modem": -1, "UDI": -2, "Renaissance": -2, "Horizons": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
},
{
    id: 1507,
    text: "Faut-il une loi anti-concentration des médias pour limiter le contrôle par de grands groupes industriels ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    direction: -1, 
    description: "La question porte sur une nouvelle législation visant à durcir les seuils pour l'acquisition et le contrôle des médias (presse, télévision, radio) par un petit nombre de groupes industriels.",
    positions: { "LFI": 2, "EELV": 2, "PS": 2, "PCF": 2, "Générations": 2, "PRG": 2, "NPA": 2, "LO": 2, "Modem": 1, "UDI": 0, "Debout la France": -2, "RN": -2, "Reconquête": -2, "Renaissance": -1, "Horizons": -2, "LR": -2, "UDR": -2 }
},
 {
    id: 1508,
    text: "Faut-il débaptiser les rues ou retirer les statues de figures historiques controversées ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['humanisme', 'progressisme-societal', 'culture-inclusive'],
    tags_secondaires: ['radicalite'],
    direction: -1, 
    description: "La question porte sur la modification du patrimoine public commémoratif pour des motifs idéologiques ou moraux (esclavage, colonialisme, figures autoritaires).",
    positions: { "LFI": 2, "EELV": 2, "PS": 1, "PCF": 1, "Générations": 2, "PRG": 1, "NPA": 2, "LO": 2, "Modem": 0, "UDI": 0, "Renaissance": -1, "Horizons": -1, "RN": -2, "Reconquête": -2, "LR": -2, "UDR": -2, "Debout la France": -2 }
},
  {
    id: 1509,
    text: "Faut-il fixer un prix unique pour les livres numériques ?",
    importance: 0.75,
    axis: 'economic',
    tags: ['protectionnisme'],
    direction: -1, // Interventionniste
    description: "Une régulation pour que les éditeurs fixent le prix de vente des e-books, comme pour les livres papier.",
    positions: { "PS": 2, "Renaissance": 2, "LR": 1, "LFI": 1, "EELV": 1 }
  },
  {
    id: 1510,
    text: "Faut-il augmenter le budget du Ministère de la Culture à 1% du budget de l'État ?",
    importance: 1.5,
    axis: 'economic',
    tags_primaires: [''],
    direction: -1, 
    description: "La question porte sur l'engagement d'une hausse significative du budget de la Culture pour en faire une priorité nationale, soit une augmentation de plusieurs milliards d'euros.",
    positions: { "LFI": 2, "EELV": 2, "PS": 2, "PCF": 2, "Générations": 2, "PRG": 2, "NPA": 2, "LO": 2, "Renaissance": -1, "Horizons": -1, "Modem": 1, "UDI": 0, "RN": -2, "Debout la France": -2, "LR": -2, "UDR": -2, "Reconquête": -2 }
},
  {
    id: 1511,
    text: "Faut-il privatiser l'audiovisuel public (France Télévisions, Radio France) ?",
    importance: 1.5,
    axis: 'economic',
    tags_primaires: [],
    direction: 1, 
    description: "La question porte sur le désengagement total de l'État de la détention des chaînes et radios publiques, et leur vente au secteur privé.",
    positions: { "Reconquête": 2, "LR": 1, "UDR": 2, "RN": 2, "Debout la France": 2, "Horizons": -1, "Renaissance": -1, "Modem": -2, "UDI": -1, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "Générations": -2, "PRG": -2, "NPA": -2, "LO": -2 }
},
{
    id: 1512,
    text: "Faut-il supprimer l'ARCOM (régulateur de l'audiovisuel et du numérique) ?",
    importance: 1.5,
    axis: 'economic',
    tags_primaires: [],
    direction: 1,
    description: "La question porte sur la suppression de l'autorité de régulation indépendante (ex-CSA).",
    positions: { "Reconquête": 2, "LR": 0, "UDR": 2, "RN": 1, "Debout la France": 2, "Renaissance": -2, "Horizons": -2, "Modem": -2, "UDI": -2, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "Générations": -2, "PRG": -2, "NPA": -2, "LO": -2 }
},
{
    id: 1513,
    text: "Faut-il imposer des clauses de diversité dans les productions cinématographiques subventionnées ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['progressisme-societal', 'humanisme', 'culture-inclusive'],
    direction: -1, 
    description: "La question porte sur le conditionnement des aides publiques du CNC (Centre national du cinéma) à des objectifs chiffrés de représentation des minorités devant et derrière la caméra.",
    positions: { "LFI": 2, "EELV": 2, "PS": 2, "PCF": 2, "Générations": 2, "PRG": 1, "NPA": 2, "LO": 2, "Modem": 0, "UDI": -1, "Renaissance": -1, "Horizons": -1, "Debout la France": -2, "RN": -2, "Reconquête": -2, "LR": -2, "UDR": -2 }
},
  {
    id: 1514,
    text: "Faut-il restituer les œuvres d'art aux pays d'origine (ex: Afrique) ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['humanisme'],
    direction: -1, 
    description: "La question porte sur une politique de restitution du patrimoine culturel acquis pendant la période coloniale, notamment aux pays d'Afrique, remettant en cause le principe d'inaliénabilité des collections publiques.",
    positions: { "LFI": 2, "EELV": 2, "PS": 2, "PCF": 2, "Générations": 2, "PRG": 2, "NPA": 2, "LO": 2, "Renaissance": 1, "Horizons": 0, "Modem": 2, "UDI": 1, "Debout la France": -2, "RN": -2, "Reconquête": -2, "LR": -2, "UDR": -2 }
},
 {
    id: 1515,
    text: "Faut-il protéger le statut des intermittents du spectacle ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1, 
    description: "La question porte sur le maintien du régime d'assurance chômage spécifique, qui permet aux artistes et techniciens d'alterner périodes de travail courtes et d'indemnisation, contre les réformes visant à le rapprocher du droit commun.",
    positions: { "LFI": 2, "EELV": 2, "PS": 2, "PCF": 2, "Générations": 2, "PRG": 2, "NPA": 2, "LO": 2, "Modem": 0, "UDI": 0, "Renaissance": 0, "Horizons": -1, "Debout la France": -1, "RN": -1, "Reconquête": -2, "LR": -2, "UDR": -2 }
},
{
    id: 1516,
    text: "Faut-il ajouter des avertissements sur les œuvres classiques pour signaler leurs contenus jugés offensants (racisme, sexisme...) ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['culture-inclusive', 'progressisme-societal'],
    direction: -1,
    description: "Un débat sur le traitement du patrimoine culturel : faut-il le présenter tel quel au nom de l'Histoire, ou le re-contextualiser pour les lectures modernes.",
    positions: { "LFI": 2, "EELV": 2, "NPA": 2, "Générations": 2, "PS": 1, "PCF": 1, "Renaissance": -1, "Modem": 0, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
];
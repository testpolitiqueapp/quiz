import type { Question } from '../types';

export const immigrationNationaliteQuestions: Question[] = [
{
    id: 601,
    text: "Faut-il supprimer le droit du sol ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['immigration-controlee'],
    tags_secondaires: ['souverainete', 'patrimoine', 'radicalite'],
    direction: 1,
    description: "Actuellement, un enfant né en France de parents étrangers peut devenir Français à sa majorité. Cette proposition vise à supprimer cet automatisme pour que la nationalité ne soit transmise que par le droit du sang.",
    positions: { "RN": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "LR": 1, "LFI": -2, "PS": -2, "EELV": -2, "Renaissance": -2, "PCF": -2, "PRG": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
{
    id: 602,
    text: "Faut-il supprimer l'Aide Médicale d'État (AME) ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['immigration-controlee'],
    tags_secondaires: ['souverainete', 'patrimoine', 'radicalite'],
    direction: 1,
    description: "Une mesure qui mettrait fin à la prise en charge des soins pour les étrangers en situation irrégulière.",
    positions: { "RN": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "LR": 1, "LFI": -2, "NPA": -2, "PS": -2, "EELV": -2, "PCF": -2, "LO": -2, "Générations": -2, "PRG": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2 }
  },
{
    id: 603,
    text: "L'hébergement d'urgence doit-il être garanti à tous, sans condition de nationalité ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['humanisme'],
    tags_secondaires: ['progressisme-societal'],
    direction: -1,
    description: "Cette question porte sur le principe de l'accueil inconditionnel, qui vise à fournir un abri à toute personne en détresse, sans se baser sur son origine ou son statut.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "PS": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 604,
    text: "Faut-il instaurer la préférence nationale pour l'emploi et les aides sociales ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['immigration-controlee'],
    tags_secondaires: ['souverainete', 'patrimoine', 'radicalite'],
    direction: 1, 
    description: "Une mesure qui donnerait la priorité aux citoyens français sur les étrangers pour l'accès à l'emploi ou à certaines aides sociales.",
    positions: { "RN": 2, "Reconquête": 2, "Debout la France": 2, "LR": 1, "UDR": 1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "Générations": -2, "PRG": -2, "NPA": -2, "LO": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2 }
  },
{
    id: 605,
    text: "Faut-il régulariser les travailleurs sans-papiers dans les métiers en tension ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['humanisme'],
    tags_secondaires: ['justice-sociale', 'liberalisme-economique'],
    direction: -1,
    description: "Une mesure pour accorder un titre de séjour aux étrangers travaillant dans des secteurs qui manquent de main-d'œuvre (restauration, BTP...).",
    positions: { "LFI": 2, "NPA": 2, "PCF": 2, "EELV": 2, "PS": 2, "Générations": 2, "PRG": 2, "LO": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LR": -1, "RN": -2, "Reconquête": -2, "UDR": -2, "Debout la France": -2 }
  },
{
    id: 606,
    text: "Faut-il durcir les conditions du regroupement familial ?",
    importance: 1.25,
    isDealBreaker: true,
    axis: 'societal',
    tags_primaires: ['immigration-controlee'],
    tags_secondaires: ['patrimoine'],
    direction: 1, 
    description: "Une politique visant à limiter la possibilité pour un étranger en situation régulière de faire venir sa famille en France.",
    positions: { "RN": 2, "Reconquête": 2, "LR": 2, "UDR": 2, "Debout la France": 2, "Renaissance": 1, "Horizons": 1, "Modem": 1, "UDI": 1, "LFI": -2, "NPA": -2, "PS": -2, "EELV": -2, "PCF": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 607,
    text: "Faut-il conditionner l'acquisition de la nationalité française à un examen d'assimilation ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['immigration-controlee', 'patrimoine'],
    direction: 1, 
    description: "Une mesure qui imposerait de réussir un test de langue et de culture française pour pouvoir devenir citoyen français par naturalisation.",
    positions: { "LR": 2, "RN": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LFI": -2, "NPA": -2, "PS": -2, "EELV": -2, "PCF": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 608,
    text: "Faut-il supprimer les centres de rétention administrative (CRA) pour étrangers ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['humanisme', 'progressisme-societal'],
    direction: -1,
    description: "Les CRA permettent d'enfermer un étranger en situation irrégulière dans l'attente de son expulsion. La question porte sur la suppression de ce dispositif.",
    positions: { "LFI": 2, "NPA": 2, "EELV": 2, "PCF": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 609,
    text: "Faut-il appliquer la déchéance de nationalité aux binationaux coupables de terrorisme ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['securite-autorite'],
    direction: 1,
    description: "Une proposition visant à priver de la nationalité française les citoyens binationaux qui ont été condamnés pour des actes de terrorisme.",
    positions: { "RN": 2, "Debout la France": 2, "Reconquête": 2, "LR": 2, "UDR": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 610,
    text: "Les demandes d'asile doivent-elles être traitées dans des centres hors de l'Union Européenne ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['immigration-controlee'],
    direction: 1,
    description: "Une externalisation du traitement des demandes d'asile, sur le modèle de ce que le Royaume-Uni a tenté avec le Rwanda, pour décourager les arrivées sur le sol européen.",
    positions: { "RN": 2, "Reconquête": 2, "LR": 2, "UDR": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LFI": -2, "PS": -2, "EELV": -2, "NPA": -2, "PCF": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 611,
    text: "Faut-il faciliter l'immigration de travail qualifiée (immigration choisie) ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    tags_secondaires: ['immigration-controlee'],
    direction: 1, 
    description: "Une politique d'ouverture ciblée pour attirer des talents et des compétences en France.",
    positions: { "Renaissance": 2, "Modem": 2, "UDI": 2, "Horizons": 1, "LR": 1, "UDR": -1, "PS": 1, "PRG": 1, "EELV": 0, "LFI": 0, "PCF": 0, "Générations": 0, "RN": -1, "Debout la France": -1, "Reconquête": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 612,
    text: "Faut-il supprimer le statut de travailleur détaché en France ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1,
    description: "Une mesure visant à mettre fin au dumping social en appliquant le droit du travail et les cotisations sociales françaises à tous les travailleurs européens en France.",
    positions: { "LFI": 2, "PCF": 2, "RN": 2, "Debout la France": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "EELV": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "Reconquête": -2 }
  },
{
    id: 613,
    text: "Faut-il limiter l'accès aux aides sociales pour les étrangers en situation régulière ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['immigration-controlee'],
    tags_secondaires: ['rigueur-budgetaire'],
    direction: 1, 
    description: "Une proposition visant à instaurer un délai de plusieurs années de présence en France avant qu'un étranger puisse bénéficier de certaines aides (APL, allocations familiales...).",
    positions: { "RN": 2, "Reconquête": 2, "LR": 2, "UDR": 2, "Debout la France": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LFI": -2, "PS": -2, "PCF": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 614,
    text: "Faut-il accorder le droit de vote aux étrangers non-européens aux élections locales ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['progressisme-societal', 'humanisme'],
    direction: -1,
    description: "Accorder le droit de vote aux élections municipales à tous les résidents étrangers en situation régulière.",
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "EELV": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 615,
    text: "Faut-il abroger l'accord franco-algérien de 1968 ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['immigration-controlee', 'souverainete'],
    direction: 1, 
    description: "Une proposition visant à mettre fin au statut migratoire particulier des ressortissants algériens pour les faire rentrer dans le droit commun.",
    positions: { "RN": 2, "UDR": 2, "Reconquête": 2, "Debout la France": 2, "LR": 2, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1 }
  },
  {
    id: 616,
    text: "Faut-il une régularisation massive de tous les sans-papiers ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['humanisme', 'progressisme-societal', 'radicalite'],
    direction: -1,
    description: "Une proposition visant à accorder des papiers à tous les étrangers actuellement présents et travaillant sur le territoire français, sans condition.",
    positions: { "LFI": 2, "EELV": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 0, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 617,
    text: "Faut-il organiser un référendum sur l'immigration ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['immigration-controlee'],
    direction: 1,
    description: "Une proposition visant à consulter directement les Français par référendum pour décider des grandes orientations de la politique migratoire (quotas, droit du sol, regroupement familial...).",
    positions: { "RN": 2, "Reconquête": 2, "Debout la France": 2, "LR": 2, "UDR": 2, "Renaissance": -1, "Modem": -2, "Horizons": -1, "UDI": -1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 618,
    text: "Faut-il interdire les tests osseux pour déterminer l'âge des migrants mineurs non-accompagnés ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['humanisme'],
    direction: -1,
    description: "Une proposition visant à interdire l'usage de radiographies osseuses pour évaluer l'âge d'un jeune migrant non-accompagné.",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 619,
    text: "Faut-il supprimer le droit du sol à Mayotte ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['immigration-controlee', 'souverainete'],
    direction: 1, 
    description: "Une proposition visant à mettre fin à l'acquisition automatique de la nationalité française pour les enfants nés à Mayotte de parents étrangers.",
    positions: { "RN": 2, "Reconquête": 2, "LR": 2, "UDR": 2, "Debout la France": 2, "Renaissance": 0, "Modem": 0, "Horizons": 0, "UDI": 0, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
];
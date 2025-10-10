import type { Question } from '../types';

export const europeQuestions: Question[] = [
{
    id: 1801,
    text: "Faut-il que la loi française soit toujours supérieure à la loi européenne ?",
    importance: 3,
    axis: 'societal',
    tags_primaires: ['souverainete'],
    direction: 1, 
    description: "Une proposition pour inscrire dans la Constitution que les lois françaises priment sur les traités européens, notamment pour les questions d'immigration ou de budget.",
    positions: { "RN": 2, "Reconquête": 2, "Debout la France": 2, "LFI": 1, "UDR": 1, "PCF": 1, "NPA": 1, "LO": 1, "LR": 0, "Renaissance": -2, "Horizons": -2, "Modem": -2, "UDI": -2, "PS": -2, "EELV": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 1802,
    text: "Faut-il aller vers un fédéralisme européen, avec une défense et un budget communs ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['europe-integree'],
    direction: -1, 
    description: "Une vision qui propose de transférer davantage de compétences des États vers l'Union Européenne pour créer une véritable puissance européenne.",
    positions: { "Renaissance": 2, "PS": 2, "Horizons": 1, "Modem": 2, "UDI": 2, "PRG": 2, "Générations": 2, "EELV": 1, "LFI": -2, "RN": -2, "Reconquête": -2, "LR": -2, "UDR": -2, "PCF": -2, "Debout la France": -2, "NPA": -2, "LO": -2 }
  },
 {
    id: 1803,
    text: "Faut-il désobéir aux règles budgétaires de l'Union Européenne ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['souverainete'],
    direction: 1,
    description: "Une politique visant à ne plus respecter les limites de déficit et de dette publics imposées par l'UE, afin de retrouver une marge de manœuvre budgétaire.",
    positions: { "LFI": 2, "RN": 1, "PCF": 2, "NPA": 2, "LO": 2, "Debout la France": 2, "PS": -1, "EELV": -1, "Générations": -1, "PRG": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": 0, "Reconquête": 0 }
  },
{
    id: 1804,
    text: "Faut-il sortir des accords de Schengen et rétablir les frontières nationales ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['souverainete', 'immigration-controlee'],
    tags_secondaires : ['patrimoine'],
    direction: 1, 
    description: "Une mesure qui mettrait fin à la libre circulation des personnes à l'intérieur de l'Union européenne et rétablirait des contrôles permanents aux frontières.",
    positions: { "RN": 2, "Reconquête": 2, "Debout la France": 2, "LR": 1, "UDR": 2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 1805,
    text: "Faut-il une harmonisation fiscale et sociale au sein de l'Union Européenne ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['europe-integree', 'justice-sociale'],
    tags_secondaires: ['fiscalite-juste'],
    direction: -1, 
    description: "Une politique visant à ce que les règles en matière d'impôts (sur les sociétés, etc.) et de droits sociaux (salaire minimum...) soient similaires dans tous les pays de l'UE.",
    positions: { "PS": 2, "EELV": 2, "LFI": 0, "PCF": 1, "NPA": 0, "LO": 0, "Générations": 1, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 1806,
    text: "L'Union Européenne doit-elle continuer à s'élargir à de nouveaux pays (Ukraine, Balkans...) ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['europe-integree'],
    direction: -1, 
    description: "Un débat sur l'intégration de nouveaux pays membres dans l'Union Européenne, qui oppose la vision d'une Europe puissance et ouverte à la crainte d'une dilution et de nouvelles contraintes.",
    positions: { "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "EELV": 1, "PS": 1, "Générations": 1, "PRG": 1, "LR": 0, "UDR": -2, "LFI": -1, "RN": -2, "Debout la France": -2, "Reconquête": -2, "PCF": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 1807,
    text: "L'UE doit-elle financer la construction de barrières physiques à ses frontières extérieures ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['immigration-controlee', 'securite-autorite'],
    direction: 1,
    description: "Une proposition pour que le budget européen finance la construction d'infrastructures (clôtures, surveillance technologique...) aux frontières de l'espace Schengen.",
    positions: { "LR": 1, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "PS": -2, "PRG": -1, "LFI": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
 {
    id: 1808,
    text: "Faut-il transformer l'UE en une Europe des nations avec des coopérations à la carte ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['souverainete'],
    direction: 1,
    description: "Une vision souverainiste qui refuse le fédéralisme au profit de projets librement choisis entre États, sans intégration politique poussée.",
    positions: { "Debout la France": 2, "RN": 2, "Reconquête": 2, "UDR": 2, "LR": 1, "LFI": 1, "PCF": 1, "Renaissance": -2, "PS": -2, "Modem": -2, "Horizons": -2, "EELV": -2, "UDI": -2, "PRG": -2, "Générations": -2, "NPA": 0, "LO": 0 }
  },
 {
    id: 1809,
    text: "Faut-il créer une taxe sur les transactions financières à l'échelle européenne ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste'],
    direction: -1, 
    description: "Un impôt sur les opérations boursières pour financer des projets européens (climat, social...) et freiner la spéculation.",
    positions: { "PS": 2, "EELV": 2, "LFI": 2, "Générations": 2, "PCF": 2, "NPA": 2, "LO": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 0, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2, "RN": -2, "UDI": -1 }
  },
{
    id: 1810,
    text: "Faut-il supprimer les subventions européennes aux ONG qui aident les migrants ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['immigration-controlee'],
    tags_secondaires: ['patrimoine'],
    direction: 1,
    description: "Une proposition visant à cesser le financement par l'UE des associations (ONG) qui portent secours aux migrants.",
    positions: { "RN": 2, "Reconquête": 2, "LR": 1, "UDR": 2, "Debout la France": 2, "Renaissance": -2, "Modem": -2, "Horizons": -1, "UDI": -2, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 1811,
    text: "La protection de l'environnement doit-elle devenir une règle supérieure à toutes les autres normes européennes ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1,
    description: "C'est le principe de la règle verte : faire en sorte que les impératifs écologiques (climat, biodiversité) priment sur les autres règles de l'UE, comme la concurrence ou le libre-échange.",
    positions: { "EELV": 2, "Générations": 2, "LFI": 2, "NPA": 2, "PS": 1, "PCF": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 1812,
    text: "Faut-il inscrire le droit à l'IVG dans la Charte des droits fondamentaux de l'UE ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['progressisme-societal', 'humanisme', 'feminisme'],
    direction: -1,
    description: "Une mesure pour garantir et protéger le droit à l'avortement au niveau européen, le rendant opposable dans tous les États membres.",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "Générations": 2, "PRG": 2, "NPA": 2, "LO": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LR": -1, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1813,
    text: "L'UE doit-elle pouvoir suspendre un État membre qui ne respecte pas le droit de l'environnement ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une proposition visant à donner à l'UE un pouvoir de sanction ultime (la suspension des droits de vote, par exemple) contre un pays qui ne respecterait pas ses engagements climatiques ou environnementaux.",
    positions: { "EELV": 2, "Générations": 2, "PS": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "LFI": -1, "PCF": 0, "NPA": -1, "LO": -1 }
  },
 {
    id: 1814,
    text: "Faut-il augmenter massivement les effectifs de l'agence européenne Frontex pour contrôler les frontières ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['securite-autorite'],
    tags_secondaires: ['immigration-controlee'],
    direction: 1,
    description: "Une proposition visant à renforcer l'agence de garde-frontières et de garde-côtes européens pour mieux contrôler les frontières extérieures de l'UE.",
    positions: { "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "LR": 2, "UDR": 0, "RN": 0, "Reconquête": 0, "Debout la France": 0, "LFI": -2, "EELV": -2, "PCF": -2, "PS": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 1815,
    text: "Faut-il réduire la contribution financière de la France au budget de l'Union Européenne ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['souverainete'],
    direction: 1,
    description: "La France est un contributeur net au budget de l'UE (elle donne plus qu'elle ne reçoit directement). Cette proposition vise à diminuer le montant de cette contribution.",
    positions: { "RN": 2, "Reconquête": 2, "Debout la France": 2, "LFI": 1, "PCF": 1, "NPA": 2, "LO": 2, "LR": -1, "UDR": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "PS": -2, "EELV": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 1816,
    text: "Faut-il transformer Europol en un FBI européen avec de réels pouvoirs d'enquête ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['europe-integree'],
    direction: -1,
    description: "Une proposition visant à donner à l'agence de police européenne (Europol) des pouvoirs d'investigation transfrontaliers pour lutter contre le grand banditisme et le terrorisme.",
    positions: { "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "PS": 2, "PRG": 2, "EELV": 1, "LR": -1, "UDR": -2, "LFI": -2, "PCF": -2, "NPA": -2, "LO": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "Générations": -2 }
  },
];
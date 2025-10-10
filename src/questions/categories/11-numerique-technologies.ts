import type { Question } from '../types';

export const numeriqueTechnologiesQuestions: Question[] = [
 {
    id: 1101,
    text: "Faut-il autoriser la reconnaissance faciale dans l'espace public ?",
    importance: 1.25,
    axis: 'societal',
    tags: ['securite-autorite', 'innovation-technologique'],
    direction: 1, 
    description: "Une technologie de surveillance pour identifier des personnes dans la rue à des fins de sécurité.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Debout la France": 2, "RN": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
   {
    id: 1102,
    text: "Faut-il encadrer très strictement les crypto-monnaies (Bitcoin, etc.) ?",
    importance: 1.0,
    axis: 'societal',
    tags: ['ecologie', 'justice-sociale'],
    direction: -1, 
    description: "Un débat sur le niveau de régulation des crypto-actifs, entre la protection contre les risques (spéculation, écologie) et la volonté de ne pas freiner l'innovation financière.",
    positions: { "EELV": 2, "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "PS": 1, "Générations": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -1, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 1103,
    text: "Faut-il imposer une majorité numérique à 15 ans pour l'accès aux réseaux sociaux ?",
    importance: 1.0,
    axis: 'societal',
    tags: ['securite-autorite', 'patrimoine'],
    direction: 1,
    description: "Une mesure qui interdit l'inscription sur les réseaux sociaux sans autorisation parentale avant 15 ans.",
    positions: { "Horizons": 2, "Renaissance": 2, "Modem": 2, "UDI": 2, "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "PS": 1, "PRG": 1, "LFI": -1, "EELV": -1, "PCF": -1, "Générations": -1, "NPA": -2, "LO": -2 }
  },
    {
    id: 1104,
    text: "Faut-il utiliser l'intelligence artificielle pour aider aux décisions de justice ?",
    importance: 1.25,
    axis: 'societal',
    tags: ['innovation-technologique'],
    direction: 1,
    description: "Une proposition pour que des algorithmes assistent les juges, par exemple en évaluant le risque de récidive d'un condamné pour décider d'une libération conditionnelle.",
    positions: { "Renaissance": 1, "Horizons": 1, "LR": 1, "Reconquête": 2, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2, "Modem": -2, "RN": -1, "UDI": 0 }
  },
{
    id: 1105,
    text: "Faut-il boycotter X (ex-Twitter) depuis son rachat par Elon Musk ?",
    importance: 1.5,
    axis: 'societal',
    tags: ['progressisme-societal'],
    direction: -1, 
    description: "Le rachat de X (ex-Twitter) a lancé un débat : faut-il boycotter la plateforme pour des raisons éthiques, ou y rester au nom de la liberté d'expression ?",
    positions: { "LFI": 1, "EELV": 2, "NPA": 2, "Générations": 2, "PS": 1, "PCF": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1106,
    text: "L'Europe doit-elle créer une intelligence artificielle souveraine avec des fonds publics ?",
    importance: 1.0,
    axis: 'economic',
    tags: ['souverainete'],
    direction: 1,
    description: "Une proposition pour que l'Europe développe ses propres technologies et ne dépende pas des géants américains ou chinois.",
    positions: { "Renaissance": 2, "Modem": 2, "Horizons": 2, "PS": 2, "EELV": 2, "LFI": 1, "PCF": 1, "RN": 1, "Debout la France": 1, "LR": -2, "UDR": -2, "Reconquête": -2 }
  },
{
    id: 1107,
    text: "Faut-il obliger les plateformes (réseaux sociaux, e-commerce) à rendre leurs algorithmes de recommandation publics ?",
    importance: 1.0,
    axis: 'societal',
    tags: ['progressisme-societal'],
    direction: -1,
    description: "Un débat sur la transparence des algorithmes, opposant le droit à l'information des utilisateurs au secret des affaires des entreprises.",
    positions: { "LFI": 2, "EELV": 2, "PS": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "RN": 1, "Debout la France": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "PRG": 0, "LR": -2, "UDR": -2, "Reconquête": -2 }
  },
  {
    id: 1108,
    text: "Faut-il créer un fonds d'investissement public pour les start-ups de la French Tech ?",
    importance: 1,
    axis: 'economic',
    tags: ['souverainete', 'innovation-technologique'],
    direction: 1, 
    description: "Une politique de soutien à l'innovation visant à financer l'écosystème des jeunes entreprises technologiques avec de l'argent public.",
    positions: { "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "PRG": 1, "PS": 1, "Générations": 1, "LR": 1, "UDR": 1, "LFI": -2, "NPA": -2, "LO": -2, "PCF": -2, "EELV": -2, "RN": -1, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 1109,
    text: "Faut-il lever l'anonymat sur internet pour lutter contre la haine en ligne ?",
    importance: 1.25,
    axis: 'societal',
    tags: ['securite-autorite'],
    direction: 1,
    description: "Une proposition visant à obliger les utilisateurs des réseaux sociaux à prouver leur identité pour pouvoir publier, afin de faciliter les poursuites judiciaires.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "RN": 1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -1 }
  },
{
    id: 1110, 
    text: "Faut-il interdire les écrans publicitaires numériques dans l'espace public ?",
    importance: 1.0,
    axis: 'societal',
    tags: ['ecologie'],
    direction: -1, 
    description: "Un débat sur la place des écrans publicitaires, qui oppose les arguments écologiques à la liberté de commerce et au dynamisme économique.",
    positions: { "LFI": 2, "EELV": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PCF": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 1111, 
    text: "L'État doit-il pouvoir imposer un pass numérique (type QR code) en cas de crise majeure ?",
    importance: 1.5,
    axis: 'societal',
    tags: [],
    direction: 1,
    description: "Inspiré du pass sanitaire Covid, ce débat porte sur le droit de l'État à limiter les libertés individuelles au nom de la sécurité collective.",
    positions: { "Renaissance": 2, "Modem": 2, "Horizons": 2, "PS": 1, "LR": 0, "RN": -1, "PCF": -1, "LFI": -2, "EELV": -2, "NPA": -2, "LO": -2, "Reconquête": -2, "Debout la France": -2, "UDR": -2 }
  },
 {
    id: 1112,
    text: "Faut-il imposer aux fabricants d'électronique un droit à la réparation pour lutter contre l'obsolescence programmée ?",
    importance: 1.0,
    axis: 'societal',
    tags: ['ecologie', 'justice-sociale'],
    direction: -1, 
    description: "Une mesure forçant les fabricants (Apple, Samsung...) à rendre leurs pièces détachées et manuels de réparation accessibles à tous.",
    positions: { "EELV": 2, "LFI": 2, "PS": 2, "PCF": 2, "NPA": 2, "Générations": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "RN": 0, "LR": -1, "UDR": -1, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1113,
    text: "Faut-il taxer les robots et l'IA pour financer la protection sociale des emplois qu'ils menacent ?",
    importance: 1.25,
    axis: 'economic',
    tags: ['justice-sociale'],
    direction: -1, 
    description: "Une proposition visant à faire contribuer les gains de productivité de l'automatisation au financement de notre modèle social (chômage, retraites).",
    positions: { "LFI": 2, "EELV": 2, "PS": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "RN": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1114, 
    text: "Faut-il généraliser l'usage de l'IA par la police (vidéosurveillance augmentée, analyse de données) ?",
    importance: 1.25,
    axis: 'societal',
    tags: ['securite-autorite', 'innovation-technologique'],
    direction: 1, 
    description: "Une proposition pour doter les forces de l'ordre d'outils d'IA pour analyser les images de surveillance ou prédire des comportements.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "RN": 2, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 1115,
    text: "Faut-il réguler le temps d'écran pour les enfants ?",
    importance: 1.0,
    axis: 'societal',
    tags: ['securite-autorite', 'jeunesse'],
    direction: 1,
    description: "Mettre en place des mesures (ex: blocage par défaut, campagnes de prévention) pour limiter l'exposition des mineurs aux écrans.",
    positions: { "Renaissance": 2, "LR": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "EELV": 1, "PS": 1, "RN": 1, "PRG": 1, "Générations": 1, "LFI": 1, "PCF": 0, "NPA": -2, "LO": -2 }
  },
];
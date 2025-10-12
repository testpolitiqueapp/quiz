import type { Question } from '../types';

export const visionValeursQuestions: Question[] = [
  {
    id: 2101,
    text: "La protection de l'environnement doit-elle toujours passer avant les intérêts économiques ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Un dilemme qui oppose la préservation de la planète à la croissance économique et à la création d'emplois.",
    positions: { "EELV": 2, "Générations": 2, "NPA": 2, "LO": 2, "LFI": 1, "PS": 1, "PRG": 1, "PCF": -1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 2102,
    text: "La vie d'un animal a-t-elle la même valeur que la vie d'un être humain ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['radicalite'],
    tags_secondaires: ['condition-animale'],
    direction: -1,
    description: "Une question qui oppose une vision antispéciste (toutes les vies se valent) à une vision plus humaniste (la vie humaine est supérieure).",
    positions: { "EELV": 1, "NPA": 2, "Générations": 0, "LFI": -1, "PS": -2, "PCF": -2, "PRG": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "LO": -2 }
  },
{
    id: 2103,
    text: "La France doit-elle pouvoir désobéir aux traités internationaux si elle l'estime nécessaire ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['souverainete'],
    direction: 1, 
    description: "Un débat qui oppose la souveraineté nationale absolue au respect du droit international et des alliances de la France.",
    positions: { "LFI": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "NPA": 2, "LO": 2, "UDR": 2, "PCF": 1, "PS": -2, "EELV": -2, "Générations": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "LR": -1, "UDI": -2, "PRG": -2 }
  },
{
    id: 2104,
    text: "Le maintien de l'ordre public justifie-t-il de restreindre certaines libertés individuelles ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['securite-autorite'],
    direction: 1, 
    description: "Le dilemme entre la sécurité collective et la liberté de chacun. Faut-il accepter moins de liberté pour plus de sécurité ?",
    positions: { "RN": 2, "Reconquête": 2, "Debout la France": 2, "LR": 2, "UDR": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "PS": -1, "PCF": -1, "PRG": -1, "LFI": -2, "EELV": -2, "Générations": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 2105,
    text: "Faut-il faire de la réduction des inégalités entre riches et pauvres la priorité absolue de la société ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1, 
    description: "Une question sur le but de la société : doit-elle prioriser la lutte contre les inégalités, ou d'autres objectifs comme la création de richesse ou la liberté individuelle ?",
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "EELV": 2, "Générations": 2, "PS": 1, "PRG": 1, "RN": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 2106,
    text: "Faut-il remettre en question nos traditions pour faire progresser la société ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    tags_secondaires: ['culture-inclusive'],
    direction: -1, 
    description: "Un débat sur le rapport au passé : faut-il le voir comme un héritage à préserver ou comme un obstacle à dépasser pour plus d'émancipation ?",
    positions: { "LFI": 2, "EELV": 2, "NPA": 2, "Générations": 2, "LO": 2, "PS": 1, "PCF": 1, "PRG": 1, "Renaissance": -1, "Modem": 0, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 2107,
    text: "L'immigration est-elle une chance pour la France ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['humanisme', 'progressisme-societal'],
    direction: -1, 
    description: "Une question sur l'identité nationale qui oppose une vision de l'immigration comme un enrichissement culturel à une vision qui la perçoit comme une menace pour la cohésion du pays.",
    positions: { "LFI": 2, "EELV": 2, "PS": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 0, "UDI": 1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 2108,
    text: "Faut-il croire en la théorie du grand remplacement ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['immigration-controlee', 'patrimoine'],
    tags_secondaires: ['radicalite'],
    direction: 1, 
    description: "Une théorie selon laquelle la population française et européenne est progressivement remplacée par une population non-européenne. Faut-il croire en cette théorie ?",
    positions: { "Reconquête": 2, "RN": 1, "Debout la France": 1, "UDR": 1, "LR": 0, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "PS": -2, "EELV": -2, "LFI": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 2109,
    text: "Faut-il aller vers plus d'intégration européenne pour renforcer la France ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['europe-integree'],
    direction: -1, 
    description: "Le débat fondamental sur l'Europe : la solution est-elle plus d'Europe (fédéralisme) ou moins d'Europe (souverainisme) ?",
    positions: { "PS": 2, "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "PRG": 2, "Générations": 2, "EELV": 1, "LR": 0, "LFI": -2, "PCF": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "NPA": -2, "LO": -2, "UDR": -1 }
  },
 {
    id: 2110,
    text: "L'État doit-il intervenir le moins possible dans l'économie ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1, 
    description: "Une question sur le rôle de l'État dans l'économie, qui oppose une vision libérale (le marché est plus efficace) à une vision interventionniste (l'État doit réguler).",
    positions: { "LR": 2, "Reconquête": 2, "UDR": 2, "Renaissance": 1, "Modem": 1, "Horizons": 2, "UDI": 1, "RN": -1, "Debout la France": -1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 2111,
    text: "La solidarité de la France doit-elle s'appliquer à tous les êtres humains sans distinction de nationalité ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['humanisme'],
    direction: -1, 
    description: "Un débat philosophique qui oppose une vision internationaliste de la solidarité (devoir d'accueil) à une vision nationaliste (priorité aux nationaux).",
    positions: { "EELV": 2, "LFI": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PCF": 1, "PRG": 1, "Renaissance": -1, "Modem": 0, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 2112,
    text: "Faut-il protéger le mode de vie rural et ses traditions, même s'ils s'opposent à certaines normes modernes ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['ruralite', 'patrimoine'],
    direction: 1, 
    description: "Un débat sur le conflit entre les traditions locales (chasse, agriculture...) et les nouvelles normes (écologie, bien-être animal...).",
    positions: { "RN": 2, "Reconquête": 2, "Debout la France": 2, "LR": 2, "UDR": 2, "PCF": 1, "Horizons": 1, "UDI": 1, "Renaissance": 0, "Modem": 0, "PS": -1, "PRG": -1, "LFI": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
 {
    id: 2113,
    text: "Notre société doit-elle se méfier du changement et chercher avant tout à préserver l'héritage du passé ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    direction: 1, 
    description: "Une question sur le rapport au temps et au changement, qui oppose une vision conservatrice (la tradition comme un héritage à protéger) à une vision progressiste (le changement comme une amélioration).",
    positions: { "Reconquête": 2, "RN": 1, "Debout la France": 2, "UDR": 1, "LR": 0, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "PS": -2, "PRG": -2, "EELV": -2, "LFI": -2, "PCF": -2, "Générations": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 2114,
    text: "Est-il moralement acceptable qu'un individu puisse posséder une fortune de plusieurs milliards d'euros ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste'],
    direction: -1, 
    description: "Une question philosophique qui oppose deux visions : celle où l'accumulation extrême de richesse est le fruit du mérite et bénéfique pour l'économie, et celle où elle est le symptôme d'une injustice systémique.",
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "EELV": 2, "Générations": 2, "PS": 1, "PRG": 1, "RN": 0, "Renaissance": -2, "Modem": -1, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 2115,
    text: "La société doit-elle subvenir aux besoins de base de tous, y compris de ceux qui refusent de travailler ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['humanisme'],
    tags_secondaires: ['radicalite'],
    direction: -1, 
    description: "Une question philosophique qui oppose le droit inconditionnel à une vie digne pour tous à la vision d'une société basée sur le travail et la réciprocité des droits et des devoirs.",
    positions: { "NPA": 2, "LO": 2, "Générations": 1, "EELV": 1, "LFI": 1, "PS": -2, "PCF": -2, "PRG": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 2116,
    text: "Les forces de l'ordre doivent-elles avoir un soutien de principe et inconditionnel ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['securite-autorite', 'respect-institutions'],
    direction: 1, 
    description: "Une question sur le rapport à l'institution policière. Elle oppose le principe d'un soutien par défaut, jugé nécessaire à l'autorité de l'État, au principe d'un contrôle citoyen critique, jugé nécessaire pour garantir l'État de droit.",
    positions: { "RN": 2, "Reconquête": 2, "Debout la France": 2, "LR": 1, "UDR": 2, "Renaissance": -1, "Modem": -1, "Horizons": 0, "UDI": 0, "PS": -1, "PCF": -2, "PRG": -2, "LFI": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
 {
    id: 2117,
    text: "Faut-il faire de la lutte contre les inégalités femmes-hommes la priorité absolue des politiques publiques ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['feminisme'],
    direction: -1, 
    description: "Une question sur la place du féminisme : est-ce un combat prioritaire qui doit infuser toutes les décisions, ou une lutte parmi d'autres ?",
    positions: { "EELV": 2, "PS": 2, "Générations": 2, "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "PRG": 1, "Renaissance": 1, "Modem": 1, "Horizons": -1, "UDI": -1, "LR": -1, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 2118,
    text: "La société doit-elle faire des sacrifices aujourd'hui pour garantir un meilleur avenir aux jeunes ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['jeunesse'],
    direction: -1,
    description: "Un débat sur la solidarité intergénérationnelle : faut-il prioriser le niveau de vie actuel, ou accepter des contraintes (taxes, efforts écologiques...) pour l'avenir de la jeunesse ?",
    positions: { "EELV": 2, "Générations": 2, "LFI": 2, "NPA": 2, "LO": 2, "PS": 1, "Renaissance": 1, "Modem": 1, "Horizons": 1, "PCF": 0, "LR": 1, "RN": -1, "Reconquête": -2, "UDR": 1, "Debout la France": -2 }
  },
  {
    id: 2119,
    text: "Faut-il toujours privilégier l'innovation technologique, même si l'on n'en maîtrise pas toutes les conséquences ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['innovation-technologique'],
    tags_secondaires: ['liberalisme-economique'],
    direction: 1, 
    description: "Le débat entre le principe d'innovation (chercher le progrès à tout prix) et le principe de précaution (se méfier des risques potentiels, notamment écologiques ou sociaux).",
    positions: { "Renaissance": 1, "Modem": 1, "Horizons": 2, "LR": 2, "UDR": 2, "Reconquête": 2, "PS": -1, "RN": -1, "Debout la France": -1, "EELV": -2, "LFI": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
  {
    id: 2120,
    text: "La société doit-elle activement chercher à déconstruire les récits historiques et culturels dominants ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['culture-inclusive'],
    tags_secondaires: ['progressisme-societal', 'radicalite'],
    direction: -1, 
    description: "Une question qui oppose une vision critique de l'Histoire, visant à inclure les récits des minorités, à une vision plus traditionaliste qui défend le 'roman national' comme un héritage commun.",
    positions: { "LFI": 2, "EELV": 2, "NPA": 2, "Générations": 2, "PS": 0, "PCF": -1, "Renaissance": -1, "Modem": -1, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
];
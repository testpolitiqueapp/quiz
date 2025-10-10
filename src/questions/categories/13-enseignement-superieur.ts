import type { Question } from '../types';

export const enseignementSuperieurQuestions: Question[] = [
 {
    id: 1301,
    text: "Faut-il supprimer la plateforme Parcoursup ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: [],
    direction: -1, 
    description: "Parcoursup est la plateforme nationale qui gère les candidatures et l'affectation des lycéens dans l'enseignement supérieur. La question porte sur le remplacement de ce dispositif d'orientation et de régulation.", 
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "EELV": 2, "PS": 1, "Générations": 1, "PRG": 1, "Debout la France": 0, "RN": 0, "Reconquête": 0, "LR": -1, "UDR": -1, "Renaissance": -2, "Horizons": -2, "Modem": -2, "UDI": -2 }
},
{
    id: 1302,
    text: "Faut-il interdire le port de signes religieux ostensibles à l'université ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['laicite-stricte'],
    tags_secondaires: ['patrimoine', 'immigration-controlee'],
    direction: 1, 
    description: "Une proposition pour étendre l'interdiction des signes religieux visibles, déjà en vigueur dans les écoles et collèges publics, aux étudiants de l'enseignement supérieur.",
    positions: { "RN": 2, "Reconquête": 2, "LR": 1, "UDR": 2, "Debout la France": 2, "Renaissance": -1, "Horizons": 0, "Modem": -1, "UDI": -1, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "Générations": -2, "PRG": -2, "NPA": -2, "LO": -2 }
},
 {
    id: 1303,
    text: "Faut-il rendre les universités et écoles publiques totalement gratuites ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'justice-fiscale'],
    direction: -1, 
    description: "Une mesure pour supprimer tous les frais d'inscription, y compris les droits de scolarité et la CVEC, dans l'enseignement supérieur public (universités et grandes écoles).",
    positions: { "LFI": 2, "NPA": 2, "PCF": 2, "LO": 2, "EELV": 1, "PS": 1, "Générations": 1, "PRG": 1, "Debout la France": -2, "RN": -2, "Reconquête": -2, "LR": -2, "UDR": -2, "Renaissance": -2, "Horizons": -2, "Modem": -2, "UDI": -2 }
},
 {
    id: 1304,
    text: "Faut-il augmenter significativement le budget de la recherche publique ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['innovation-technologique'],
    tags_secondaires: ['souverainete'],
    direction: -1, 
    description: "La question porte sur l'augmentation massive des fonds alloués aux laboratoires, aux organismes de recherche et aux salaires des chercheurs, dans une optique de souveraineté scientifique et d'innovation.",
    positions: { "PS": 2, "PCF": 2, "LFI": 2, "EELV": 2, "Générations": 2, "PRG": 2, "NPA": 2, "LO": 2, "Renaissance": 1, "Horizons": 1, "Modem": 1, "UDI": 1, "Debout la France": -1, "RN": -1, "LR": -1, "UDR": -1, "Reconquête": -2 }
},
{
    id: 1305,
    text: "Faut-il renforcer la sélection à l'entrée de l'université ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['liberalisme-economique'],
    tags_secondaires: ['patrimoine'],
    direction: 1, 
    description: "La question porte sur l'extension et le durcissement des critères de sélection (basés sur les notes ou le dossier scolaire) pour l'accès aux différentes filières universitaires, afin d'améliorer le taux de réussite.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Renaissance": 2, "Horizons": 2, "Modem": 2, "UDI": 2, "RN": 1, "Debout la France": 2, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
},
{
    id: 1306,
    text: "Faut-il construire plus de logements étudiants ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: [],
    direction: -1, 
    description: "La question porte sur le lancement d'un plan d'investissement pour augmenter significativement le nombre de logements sociaux étudiants, afin de lutter contre la précarité et le mal-logement.",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "Générations": 2, "PRG": 2, "NPA": 2, "LO": 2, "Renaissance": 2, "Horizons": 2, "Modem": 2, "UDI": 2, "RN": 2, "Debout la France": 1, "LR": 1, "UDR": 1, "Reconquête": 0 }
},
  {
    id: 1307,
    text: "Faut-il rapprocher les universités du monde de l'entreprise ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1, 
    description: "Une politique visant à développer les partenariats, l'alternance et les cursus axés sur l'insertion professionnelle, ainsi qu'à renforcer la participation des acteurs économiques à la gouvernance des établissements.",
    positions: { "Renaissance": 2, "Horizons": 2, "Modem": 2, "UDI": 2, "LR": 2, "UDR": 2, "Reconquête": 2, "RN": 1, "Debout la France": 1, "PS": 0, "PRG": 0, "Générations": 0, "EELV": -1, "PCF": -2, "LFI": -2, "NPA": -2, "LO": -2 }
},
  {
    id: 1308,
    text: "Faut-il augmenter les frais d'inscription pour les étudiants étrangers hors-UE ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    tags_secondaires: ['immigration-controlee'],
    direction: 1, 
    description: "La question porte sur le maintien ou l'augmentation des frais d'inscription différenciés (introduits en 2019) pour les étudiants non-européens, visant à les faire contribuer davantage au coût de leur formation.",
    positions: { "Renaissance": 2, "Horizons": 2, "Modem": 2, "UDI": 2, "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "Générations": -2, "PRG": -2, "NPA": -2, "LO": -2 }
},
  {
    id: 1309,
    text: "Faut-il revaloriser les bourses étudiantes sur critères sociaux ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste', 'humanisme'],
    direction: -1, 
    description: "La question porte sur l'augmentation significative des montants des bourses étudiantes (versement mensuel) afin de mieux lutter contre la précarité et le mal-logement des étudiants issus de familles modestes.",
    positions: { "PS": 2, "EELV": 2, "LFI": 2, "PCF": 2, "Générations": 2, "PRG": 2, "NPA": 2, "LO": 2, "Renaissance": 1, "Horizons": 1, "Modem": 1, "UDI": 1, "RN": 1, "Debout la France": 0, "LR": 0, "UDR": 0, "Reconquête": -1 }
},
{
    id: 1310,
    text: "Faut-il interdire les associations étudiantes jugées non-mixtes ou communautaristes ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['laicite-stricte', 'securite-autorite'],
    tags_secondaires: ['patrimoine'],
    direction: 1, 
    description: "La question porte sur l'interdiction des associations étudiantes (y compris celles réservées à un genre ou à une identité) qui ne respectent pas le principe d'universalité et de non-discrimination.",
    positions: { "RN": 2, "Reconquête": 2, "LR": 2, "UDR": 2, "Debout la France": 2, "Renaissance": 1, "Horizons": 1, "Modem": 1, "UDI": 1, "PS": -1, "PRG": -1, "Générations": -1, "EELV": -2, "LFI": -2, "PCF": -2, "NPA": -2, "LO": -2 }
},
{
    id: 1311,
    text: "Les Présidents des Universités doivent-ils être nommés par l'État plutôt qu'élus par les établissements ?",
    importance: 1,
    axis: 'societal',
    tags_primaires: [],
    direction: 1, 
    description: "La proposition vise à affirmer l'autorité de l'État sur la gouvernance des universités publiques en remplaçant l'élection interne des Présidents par une nomination ministérielle.",
    positions: { "Reconquête": 2, "RN": 2, "Debout la France": 2, "UDR": 2, "LR": 1, "Renaissance": -1, "Horizons": -1, "Modem": -2, "UDI": -1, "PS": -2, "PRG": -2, "Générations": -2, "LFI": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2 }
},
{
    id: 1312,
    text: "Faut-il accorder aux syndicats étudiants des droits proches de ceux des syndicats professionnels (droit de grève notamment) ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    direction: -1,
    description: "La question vise à étendre les droits syndicaux (formation, protection des délégués, droit de grève) pour les étudiants, afin de renforcer l'engagement étudiant et sa continuité avec l'engagement professionnel.",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "Générations": 2, "PRG": 2, "NPA": 2, "LO": 2, "Debout la France": -2, "RN": -2, "Reconquête": -2, "LR": -2, "UDR": -2, "Renaissance": -2, "Horizons": -2, "Modem": -2, "UDI": -2 }
},
  {
    id: 1313,
    text: "Faut-il créer une allocation d'autonomie pour tous les étudiants, remplaçant les bourses sur critères sociaux ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1, 
    description: "La proposition vise à garantir un revenu de base universel à tous les étudiants, afin de lutter contre la précarité et de garantir leur autonomie financière.",
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "EELV": 1, "PS": 1, "Générations": 1, "PRG": 1, "Debout la France": -1, "RN": -1, "Reconquête": -2, "LR": -2, "UDR": -2, "Renaissance": -2, "Horizons": -2, "Modem": -2, "UDI": -2 }
},
{
    id: 1314,
    text: "Faut-il développer massivement les formations en alternance à l'université ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1, 
    description: "La question porte sur l'accélération du développement des cursus en alternance (apprentissage) au sein de l'enseignement supérieur, afin d'améliorer l'insertion professionnelle des étudiants.",
    positions: { "Renaissance": 2, "Horizons": 2, "Modem": 2, "UDI": 2, "LR": 2, "UDR": 2, "Reconquête": 2, "RN": 2, "Debout la France": 1, "PS": 1, "PRG": 1, "Générations": 1, "LFI": 0, "EELV": 0, "PCF": 0, "NPA": 0, "LO": 0 }
},
{
    id: 1315,
    text: "Faut-il sanctionner les universités qui ont des taux d'échec trop importants en première année ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['liberalisme-economique'],
    direction: 1, 
    description: "La question porte sur l'établissement d'une politique de performance liant une partie du financement public des universités à leur taux de réussite en Licence 1.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Renaissance": 1, "Horizons": 1, "Modem": 1, "UDI": 1, "RN": 0, "Debout la France": 0, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "Générations": -2, "PRG": -2, "NPA": -2, "LO": -2 }
},
{
    id: 1316,
    text: "Faut-il réserver des places dans l'enseignement supérieur pour les étudiants issus des quartiers prioritaires ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['justice-sociale', 'progressisme-societal'],
    direction: -1, 
    description: "Une mesure de discrimination positive qui instaurerait des quotas dans les filières sélectives (médecine, droit...) pour garantir l'accès des jeunes issus de milieux défavorisés.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "PS": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -2, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
];
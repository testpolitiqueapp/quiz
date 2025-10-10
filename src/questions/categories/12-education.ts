import type { Question } from '../types';

export const educationQuestions: Question[] = [
  {
    id: 1201,
    text: "Faut-il renommer le Ministère de l'Éducation Nationale en Ministère de l'Instruction Publique ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    direction: 1,
    description: "C'est un débat symbolique : l'Instruction se concentre sur la transmission des savoirs, tandis que l'Éducation inclut aussi la formation du citoyen et les valeurs.",
    positions: { "Reconquête": 2, "UDR": 2, "RN": 1, "LR": 1, "Debout la France": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "PS": -2, "EELV": -2, "LFI": -2, "PCF": -2, "Générations": -2, "PRG": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 1202,
    text: "Faut-il rendre le port de l'uniforme obligatoire dans les écoles publiques ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    tags_secondaires: ['securite-autorite', 'education-nationale'],
    direction: 1,
    description: "Une mesure qui imposerait une tenue vestimentaire unique à tous les élèves pour gommer les inégalités sociales et renforcer la discipline.",
    positions: { "RN": 2, "Reconquête": 2, "UDR": 2, "LR": 2, "Debout la France": 2, "Renaissance": 1, "Modem": -1, "Horizons": 1, "UDI": 1, "LFI": -2, "EELV": -2, "PCF": -2, "NPA": -2, "PS": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 1203,
    text: "Faut-il revaloriser le salaire des enseignants de manière inconditionnelle ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1, 
    description: "Une politique d'augmentation générale des salaires des professeurs, sans l'assortir de nouvelles missions ou contreparties.",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "RN": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1204,
    text: "Faut-il supprimer les subventions publiques aux écoles privées sous contrat ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    tags_secondaires: ['laicite-stricte'],
    direction: -1, 
    description: "Une proposition pour réserver les financements de l'État exclusivement à l'enseignement public.",
    positions: { "LFI": 2, "NPA": 2, "LO": 2, "PCF": 2, "Générations": 2, "EELV": 1, "PS": 1, "PRG": 1, "LR": -2, "UDR": -2, "Renaissance": -1, "Modem": -1, "Horizons": -2, "UDI": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1205,
    text: "Faut-il sensibiliser les enfants dès l'école primaire aux questions de diversité de genre ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['progressisme-societal', 'culture-inclusive'],
    tags_secondaires: ['humanisme'],
    direction: -1, 
    description: "Une approche éducative visant à aborder la notion d'identité de genre (incluant la transidentité) dès les premières classes de la scolarité.",
    positions: { "LFI": 2, "EELV": 2, "NPA": 2, "Générations": 2, "PS": 1, "PCF": 1, "PRG": 1, "Renaissance": 0, "Modem": 0, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1206,
    text: "Faut-il mettre l'accent sur les savoirs fondamentaux (lire, écrire, compter) à l'école primaire ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    tags_secondaires: ['education-nationale'],
    direction: 1,
    description: "Une orientation pédagogique qui priorise la maîtrise des compétences de base par rapport à d'autres matières.",
    positions: { "LR": 2, "RN": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "PS": 1, "PRG": 1, "LFI": 0, "EELV": 0, "PCF": 0, "Générations": 0, "NPA": -1, "LO": -1 }
  },
 {
    id: 1207,
    text: "Faut-il rendre les cantines scolaires gratuites pour tous les élèves ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    tags_secondaires: ['fiscalite-juste'],
    direction: -1, 
    description: "Une mesure pour garantir un repas à tous les enfants, sans condition de revenus des parents.",
    positions: { "PCF": 2, "LFI": 2, "NPA": 2, "LO": 2, "Générations": 2, "EELV": 1, "PS": 1, "PRG": 1, "RN": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1208,
    text: "Faut-il abroger la loi interdisant la fessée et les violences éducatives ordinaires ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    direction: 1, 
    description: "Une proposition visant à supprimer la loi de 2019 qui interdit les punitions corporelles sur les enfants, au nom de la liberté éducative des parents.",
    positions: { "Reconquête": 2, "RN": 1, "Debout la France": 2, "LR": 1, "UDR": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "PS": -2, "EELV": -2, "LFI": -2, "PCF": -2, "Générations": -2, "PRG": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 1209,
    text: "Faut-il revenir à une plus grande liberté pour l'instruction en famille (école à la maison) ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    direction: 1, 
    description: "Depuis 2021, l'instruction en famille est soumise à une autorisation stricte. La question porte sur un retour au régime déclaratif antérieur, plus souple.",
    positions: { "LR": 2, "Reconquête": 2, "RN": 1, "UDR": 1, "Debout la France": 2, "LFI": -1, "EELV": -2, "PS": -2, "PCF": -2, "Générations": -2, "PRG": -2, "NPA": -2, "LO": -2, "Renaissance": -2, "Modem": -2, "Horizons": -1, "UDI": -2 }
},
{
    id: 1210,
    text: "Faut-il donner plus d'autonomie aux chefs d'établissement (recrutement, budget) ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['liberalisme-economique'],
    tags_secondaires: ['securite-autorite'],
    direction: 1,
    description: "Une décentralisation des décisions pour permettre aux directeurs d'école et principaux de collège de mieux s'adapter aux réalités locales.",
    positions: { "Renaissance": 2, "LR": 2, "Horizons": 2, "Modem": 2, "UDI": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "PS": -1, "Générations": -1, "PRG": -1, "EELV": -2, "LFI": -2, "PCF": -2, "NPA": -2, "LO": -2 }
  },
  {
    id: 1211,
    text: "Faut-il supprimer le baccalauréat ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    direction: -1, 
    description: "Remplacer l'examen national par un contrôle continu intégral pour l'accès à l'enseignement supérieur.",
    positions: { "NPA": 2, "LO": 2, "LFI": 1, "EELV": 1, "Générations": 1, "PS": -1, "PCF": -1, "PRG": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 1212,
    text: "Faut-il interdire les devoirs à la maison à l'école primaire ?",
    importance: 0.75,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    tags_secondaires: ['justice-sociale'],
    direction: -1,
    description: "Une mesure visant à lutter contre les inégalités sociales, considérant que tous les enfants n'ont pas les mêmes conditions de travail à la maison.",
    positions: { "LFI": 2, "EELV": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PCF": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 1213,
    text: "Faut-il augmenter significativement le nombre d'heures de sport obligatoires, quitte à réduire d'autres matières ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: [],
    tags_secondaires: ['securite-autorite'],
    direction: 1,
    description: "Une proposition pour faire du sport une priorité à l'école, pour la santé et la cohésion, ce qui impliquerait de revoir l'équilibre avec les matières académiques.",
    positions: { "Renaissance": 2, "Modem": 1, "Horizons": 1, "LR": 1, "UDR": 1, "RN": 1, "Debout la France": 1, "PS": 0, "EELV": -1, "PCF": -1, "Générations": -1, "PRG": -1, "LFI": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 1214,
    text: "Faut-il revoir les programmes scolaires pour y inclure davantage l'histoire de l'immigration et des colonies ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['progressisme-societal', 'humanisme'],
    tags_secondaires: ['culture-inclusive'],
    direction: -1,
    description: "Une modification des contenus d'enseignement pour une vision plus inclusive et critique de l'histoire de France.",
    positions: { "LFI": 2, "EELV": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "RN": -2, "Reconquête": -2, "UDR": -2, "Debout la France": -2 }
  },
{
    id: 1215,
    text: "Faut-il supprimer la carte scolaire pour laisser le libre choix de l'établissement ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: [],
    tags_secondaires: ['liberalisme-economique'],
    direction: 1, 
    description: "Mettre fin à l'affectation des élèves à un établissement en fonction de leur lieu de résidence.",
    positions: { "LR": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "RN": 1, "LFI": -2, "PCF": -2, "PS": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 1216,
    text: "Faut-il renforcer l’éducation contre le sexisme et les discriminations racistes et LGBTIphobes dans les programmes scolaires ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['progressisme-societal', 'humanisme'],
    tags_secondaires: ['culture-inclusive', 'feminisme'],
    direction: -1, 
    description: "La question porte sur l'intégration transversale et le renforcement des enseignements visant à lutter contre toutes les formes de discriminations dans les programmes scolaires, y compris au primaire.",
    positions: { "LFI": 2, "EELV": 2, "PS": 1, "Générations": 2, "PCF": 2, "PRG": 1, "NPA": 2, "LO": 1, "Renaissance": 0, "Horizons": 0, "Modem": 1, "UDI": 0, "LR": -1, "UDR": -2, "RN": -2, "Debout la France": -2, "Reconquête": -2 }
},
{
    id: 1217,
    text: "Faut-il autoriser les ateliers en non-mixité (ex: sans personnes blanches, sans hommes) à l'école pour aborder les discriminations ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['culture-inclusive'],
    tags_secondaires: ['radicalite'],
    direction: -1, 
    description: "Une proposition pour permettre la création de groupes de parole réservés à certaines minorités afin de libérer la parole sur le racisme ou le sexisme, en excluant temporairement le groupe majoritaire.",
    positions: { "LFI": 1, "EELV": 1, "NPA": 2, "PS": -1, "PCF": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 1218,
    text: "Faut-il interdire les notes à l'école primaire ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    direction: -1, 
    description: "Un débat qui oppose une pédagogie axée sur l'évaluation par compétences et le bien-être de l'enfant à une vision plus traditionaliste de la notation et de la mesure de l'effort.",
    positions: { "EELV": 2, "LFI": 2, "NPA": 2, "Générations": 2, "PS": 1, "PCF": 1, "Renaissance": -1, "Modem": -1, "Horizons": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
];
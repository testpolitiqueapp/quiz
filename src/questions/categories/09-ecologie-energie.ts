import type { Question } from '../types';

export const ecologieEnergieQuestions: Question[] = [
  {
    id: 901,
    text: "Faut-il construire de nouveaux réacteurs nucléaires (EPR) ?",
    importance: 3,
    axis: 'societal',
    tags_primaires: ['souverainete', 'independance-energetique'],
    tags_secondaires: ['innovation-technologique'],
    direction: 1, 
    description: "Une politique visant à renouveler et développer le parc nucléaire français pour assurer la production d'électricité et l'indépendance énergétique du pays.",
    positions: { "Renaissance": 2, "LR": 2, "UDR": 2, "RN": 2, "PCF": 2, "Horizons": 2, "Modem": 2, "UDI": 2, "Debout la France": 2, "Reconquête": 2, "PS": 1, "PRG": 1, "LFI": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
 {
    id: 902,
    text: "Faut-il interdire les pesticides les plus dangereux (ex: glyphosate) ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    tags_secondaires: ['justice-sociale'],
    direction: -1, 
    description: "Une mesure visant à interdire certains produits phytosanitaires jugés dangereux pour la santé humaine et la biodiversité.",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "Générations": 2, "PCF": 2, "NPA": 2, "LO": 2, "PRG": 2, "Renaissance": -1, "Modem": 0, "Horizons": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 903,
    text: "Faut-il un moratoire sur l'installation de nouvelles éoliennes ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    direction: 1, 
    description: "Une proposition visant à stopper le déploiement de nouveaux parcs éoliens sur le territoire national.",
    positions: { "RN": 2, "LR": 2, "Debout la France": 2, "Reconquête": 2, "UDR": 2, "EELV": -2, "LFI": -2, "Renaissance": -2, "PS": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2, "Modem": -2, "Horizons": -1, "UDI": -1 }
  },
{
    id: 904,
    text: "Faut-il interdire les vols en jet privé pour les trajets inférieurs à 1 000 km ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    tags_secondaires: ['fiscalite-juste'],
    direction: -1, 
    description: "Une mesure visant à proscrire ce mode de transport en raison de son impact climatique.",
    positions: { "LFI": 2, "EELV": 2, "NPA": 2, "PCF": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "RN": -1, "Renaissance": -1, "Modem": -1, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 905,
    text: "Faut-il autoriser de nouveau les terrasses chauffées des bars et restaurants en hiver ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['liberalisme-economique', 'patrimoine'],
    direction: 1, 
    description: "Interdites depuis 2022 pour des raisons écologiques, cette proposition vise à permettre de nouveau aux bars et restaurants de chauffer leurs terrasses extérieures.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "RN": 2, "Debout la France": 2, "Renaissance": -2, "Modem": -2, "Horizons": -1, "UDI": -1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
 {
    id: 906,
    text: "Faut-il interdire la publicité pour les SUV et les autres voitures polluantes ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une mesure visant à interdire la promotion des véhicules les plus lourds et les plus émetteurs de CO2, sur le modèle de l'interdiction de la publicité pour le tabac.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "LO": 2, "PS": 1, "PCF": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "RN": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 907,
    text: "Faut-il interdire la vente de voitures thermiques neuves d'ici 2035 ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une mesure issue de la réglementation européenne pour accélérer la transition vers les véhicules électriques ou à hydrogène et atteindre la neutralité carbone.",
    positions: { "EELV": 2, "PS": 2, "LFI": 2, "Générations": 2, "NPA": 2, "LO": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "PCF": 0, "RN": -2, "LR": -2, "Reconquête": -2, "UDR": -2, "Debout la France": -2 }
  },
  {
    id: 908,
    text: "Faut-il obliger les grandes entreprises à publier leur empreinte carbone réelle sous peine d’amende ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1,
    description: "Une mesure de transparence visant à forcer les grandes entreprises à mesurer et rendre publique l'intégralité de leurs émissions de gaz à effet de serre.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 1, "PCF": 1, "Renaissance": 1, "Modem": 1, "Horizons": 0, "LR": -1, "RN": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 909,
    text: "Faut-il reconnaître le crime d'écocide dans la Constitution ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une proposition pour inscrire dans la Constitution le crime le plus grave contre l'environnement, afin de pouvoir juger les atteintes les plus sérieuses à la planète.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 1, "PCF": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 910,
    text: "Faut-il rendre obligatoire l'installation de panneaux solaires sur tous les nouveaux bâtiments ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une proposition pour imposer la solarisation des toitures (ou des parkings) de tous les nouveaux bâtiments, qu'ils soient publics, commerciaux ou résidentiels.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "PS": 2, "PCF": 2, "Renaissance": 1, "Modem": 1, "Horizons": 0, "UDI": 0, "PRG": 1, "RN": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 911, 
    text: "Faut-il aggraver les sanctions contre les décharges sauvages ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['securite-autorite'],
    direction: 1, 
    description: "Une mesure pour durcir les peines (amendes, peines de prison) contre les dépôts illégaux de déchets et de décombres dans la nature.",
    positions: { "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "PS": 2, "EELV": 2, "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2 }
  },
{
    id: 912,
    text: "Faut-il nommer des représentants pour défendre la nature en justice (un fleuve, une forêt...) ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1,
    description: "Une proposition pour que des citoyens ou des experts soient désignés comme tuteurs d'un écosystème. Ils pourraient alors parler en son nom et le défendre au tribunal contre un projet qui le menace.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 1, "PCF": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "LO": -2, "PRG": -2 }
  },
  {
    id: 913,
    text: "Faut-il créer un ISF climatique sur les grandes fortunes polluantes ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['ecologie', 'fiscalite-juste'],
    tags_secondaires: ['justice-sociale'],
    direction: -1,
    description: "Une proposition d'impôt visant à taxer les plus hauts patrimoines non seulement sur leur valeur, mais aussi sur l'empreinte carbone de leurs actifs.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 1, "PCF": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 914,
    text: "Faut-il créer de grandes aires marines protégées où la pêche industrielle est interdite ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une proposition pour créer de vastes zones où la pêche industrielle serait interdite, opposant la protection de la biodiversité marine aux intérêts économiques de la filière pêche.",
    positions: { "EELV": 2, "PS": 2, "Générations": 2, "NPA": 2, "LFI": 1, "Renaissance": 1, "Modem": 1, "Horizons": 1, "PCF": -1, "RN": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 915,
    text: "Faut-il interdire les vols intérieurs quand une alternative en train de moins de 4h existe ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1,
    description: "Une mesure pour étendre la loi actuelle (qui fixe la limite à 2h30), afin de réduire les émissions de gaz à effet de serre du secteur aérien.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "LO": 2, "PS": 1, "PCF": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "RN": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 916,
    text: "Faut-il rendre obligatoire le 100% bio dans les cantines publiques d'ici 2030 ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1,
    description: "Une proposition visant à ce que l'ensemble des repas servis dans les cantines (écoles, hôpitaux, administrations...) soit issu de l'agriculture biologique.",
    positions: { "EELV": 2, "Générations": 2, "LFI": 1, "PS": 1, "PCF": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 917,
    text: "Faut-il interdire tous les emballages plastiques à usage unique d'ici 2030 ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1,
    description: "Une proposition pour accélérer la sortie du plastique, au-delà de la loi actuelle qui vise cet objectif pour 2040.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "LO": 2, "PS": 1, "PCF": 1, "Renaissance": 0, "Modem": 0, "Horizons": -1, "UDI": -1, "PRG": 0, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 918,
    text: "Faut-il interdire les polluants éternels (PFAS) ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une proposition visant à interdire une famille de substances chimiques très persistantes (PFAS), utilisées dans de nombreux produits du quotidien, en raison de leur toxicité pour la santé et l'environnement.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 2, "PCF": 2, "LO": 2, "PRG": 1, "Renaissance": 0, "Modem": 0, "Horizons": 0, "UDI": 0, "RN": -2, "Debout la France": -2, "LR": -2, "UDR": -2, "Reconquête": -2 }
  },
  {
    id: 919,
    text: "Faut-il créer un statut de réfugié climatique ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['humanisme', 'ecologie'],
    direction: -1,
    description: "Une proposition pour accorder un droit d'asile aux personnes contraintes de fuir leur pays en raison des conséquences directes du changement climatique (montée des eaux, sécheresses...).",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 2, "PCF": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
   {
    id: 920,
    text: "Faut-il supprimer le malus écologique au poids sur les voitures neuves ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: [],
    direction: 1,
    description: "Une proposition visant à annuler la taxe appliquée aux véhicules neufs les plus lourds (SUV, etc.).",
    positions: { "RN": 2, "Reconquête": 2, "Debout la France": 2, "LR": 2, "UDR": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "EELV": -2, "LFI": -2, "PS": -2, "PCF": -2, "NPA": -2, "Générations": -2 }
  },
];
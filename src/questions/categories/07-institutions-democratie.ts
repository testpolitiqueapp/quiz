import type { Question } from '../types';

export const institutionsDemocratieQuestions: Question[] = [
 {
    id: 701,
    text: "Faut-il instaurer la proportionnelle intégrale aux élections législatives ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: [],
    direction: -1,
    description: "Une réforme du mode de scrutin pour que le nombre de députés de chaque parti corresponde à son score national, ce qui rendrait l'Assemblée plus diverse mais les majorités plus instables.",
    positions: { "RN": 2, "LFI": 2, "EELV": 2, "Modem": 2, "Debout la France": 2, "Reconquête": 1, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "Renaissance": -2, "LR": -2, "Horizons": -2, "UDI": -2, "UDR": -2 }
  },
{
    id: 702,
    text: "Faut-il instaurer le Référendum d'Initiative Citoyenne (RIC) ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['progressisme-societal', 'souverainete'],
    direction: -1,
    description: "Un outil de démocratie directe qui permettrait aux citoyens, sous certaines conditions, de proposer ou d'abroger une loi, ou de révoquer un élu.",
    positions: { "LFI": 2, "RN": 2, "EELV": 2, "Debout la France": 2, "Reconquête": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": -1, "PRG": -1, "Renaissance": -2, "LR": -2, "UDR": -2, "Horizons": -2, "Modem": -2, "UDI": -2 }
  },
 {
    id: 703,
    text: "Faut-il supprimer l'article 49.3 de la Constitution ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    direction: -1,
    description: "Une révision constitutionnelle pour retirer au gouvernement la possibilité de faire adopter une loi sans la soumettre au vote de l'Assemblée nationale.",
    positions: { "LFI": 2, "RN": 1, "EELV": 2, "PS": 1, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "Debout la France": 2, "LR": -1, "PRG": 0, "Modem": -1, "Renaissance": -2, "Horizons": -2, "UDI": -2, "UDR": -1, "Reconquête": 1 }
  },
{
    id: 704,
    text: "Faut-il instaurer le vote obligatoire ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: [],
    direction: 1,
    description: "Une mesure pour rendre la participation à toutes les élections obligatoire, sous peine de sanction (amende, etc.), afin de lutter contre l'abstention.",
    positions: { "LFI": 2, "PCF": 2, "Modem": 1, "PS": 1, "PRG": 1, "Renaissance": 0, "Horizons": 0, "EELV": -1, "Générations": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "NPA": -2, "LO": -2, "UDI": 0 }
  },
 {
    id: 705,
    text: "Faut-il supprimer le Conseil économique, social et environnemental (CESE) ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['liberalisme-economique'],
    direction: 1,
    description: "Le CESE est la 3ème assemblée de la République, représentant la société civile (syndicats, associations...). Sa suppression est proposée pour simplifier les institutions et réduire les dépenses publiques.",
    positions: { "LR": 0, "UDR": 2, "Reconquête": 2, "RN": 2, "Debout la France": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "PS": -2, "EELV": -2, "LFI": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
 {
    id: 706,
    text: "Faut-il accorder un statut d'autonomie à la Corse ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['souverainete'],
    direction: -1,
    description: "Un débat sur l'avenir institutionnel de la Corse, entre la reconnaissance de sa spécificité (autonomistes) et la défense de l'indivisibilité de la République (jacobins).",
    positions: { "Renaissance": 2, "Modem": 2, "Horizons": 2, "PS": 1, "EELV": 1, "LFI": -1, "PCF": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 707,
    text: "Faut-il passer à une VIe (6ème) République ?",
    importance: 3,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    tags_secondaires: ['radicalite'],
    direction: -1, 
    description: "Une réforme institutionnelle majeure visant à remplacer la Constitution actuelle. L'objectif principal est de rééquilibrer les pouvoirs en diminuant ceux du Président au profit du Parlement et des citoyens.",
    positions: { "LFI": 2, "Générations": 2, "PCF": 2, "NPA": 2, "LO": 2, "EELV": 1, "PS": 1, "PRG": 0, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 708,
    text: "Faut-il instaurer le septennat non renouvelable pour le Président de la République ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: [],
    direction: -1,
    description: "Une réforme pour un mandat présidentiel unique de 7 ans, l'idée étant de libérer le Président des préoccupations électorales et de renforcer sa fonction d'arbitre.",
    positions: { "LFI": 2, "Modem": 2, "RN": 0, "Debout la France": 0, "PS": 0, "EELV": 0, "PCF": 0, "Renaissance": -2, "LR": -2, "UDR": -2, "Horizons": -2, "UDI": -2, "Reconquête": 0 }
  },
{
    id: 709,
    text: "Faut-il supprimer le Sénat ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: [],
    direction: -1, 
    description: "Une réforme institutionnelle visant à passer à un Parlement à une seule chambre (monocaméral), comme en Suède ou au Danemark.",
    positions: { "LFI": 2, "NPA": 2, "LO": 2, "RN": 0, "Reconquête": 1, "Debout la France": 1, "Générations": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "PS": -2, "EELV": -2, "PCF": -2, "PRG": -2 }
  },
{
    id: 710,
    text: "Faut-il interdire à un élu d'exercer le même mandat plus de trois fois au total ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    direction: -1, 
    description: "Une mesure pour favoriser le renouvellement de la classe politique en empêchant un élu d'exercer la même fonction (maire, député...) indéfiniment.",
    positions: { "LFI": 2, "EELV": 2, "Modem": 2, "Générations": 2, "NPA": 2, "PCF": 2, "PS": 1, "Renaissance": 1, "Horizons": 1, "UDI": 1, "RN": -1, "Debout la France": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "LO": 0, "PRG": 0 }
  },
 {
    id: 711,
    text: "Faut-il abaisser le droit de vote à 16 ans ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['progressisme-societal', 'jeunesse'],
    direction: -1,
    description: "Une proposition visant à permettre aux jeunes de participer à toutes les élections dès l'âge de 16 ans.",
    positions: { "LFI": 2, "EELV": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 712,
    text: "Faut-il que le Conseil Constitutionnel soit composé uniquement de juristes et non d'anciens politiques ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    direction: -1, 
    description: "Une réforme visant à garantir l'indépendance du Conseil en excluant les anciens Présidents, ministres ou parlementaires de sa composition.",
    positions: { "LFI": 2, "Modem": 2, "PS": 1, "EELV": 1, "PCF": 1, "Générations": 1, "PRG": 1, "NPA": 2, "RN": 0, "Renaissance": -1, "Horizons": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -1, "UDI": -1, "LO": 2 }
  },
{
    id: 713,
    text: "Faut-il durcir les règles d'attribution de la Légion d'honneur ?",
    importance: 0.75,
    axis: 'societal',
    tags_primaires: [],
    direction: -1, 
    description: "Une proposition visant à rendre plus sélectif l'accès à la plus haute distinction française, pour lutter contre les attributions jugées 'de complaisance' et revaloriser son prestige.",
    positions: { "LFI": 2, "EELV": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "NPA": 2, "LO": 2, "Générations": 2, "PCF": 1, "PS": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "LR": -2, "UDR": -2, "UDI": -1, "PRG": 0 }
  },
  {
    id: 714,
    text: "Faut-il interdire les dons privés pour financer les campagnes électorales ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['justice-sociale'],
    tags_secondaires: ['fiscalite-juste'],
    direction: -1, 
    description: "Une proposition pour que les campagnes électorales soient financées uniquement par l'État, afin de garantir l'égalité entre les candidats et de limiter l'influence de l'argent en politique.",
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "EELV": 1, "PS": 1, "Générations": 1, "PRG": 1, "RN": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 715,
    text: "Faut-il autoriser à nouveau le cumul du mandat de maire avec celui de parlementaire ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: [],
    direction: 1,
    description: "Une proposition visant à revenir sur la loi de 2014 et à permettre de nouveau à un maire d'être en même temps député ou sénateur, au nom de l'ancrage local des élus.",
    positions: { "LR": 2, "UDR": 2, "UDI": 1, "PRG": 1, "Renaissance": -1, "Modem": -2, "Horizons": -1, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "Générations": -2, "NPA": -2, "LO": -2, "RN": -1, "Reconquête": 2, "Debout la France": 1 }
  },
  {
    id: 716,
    text: "Faut-il généraliser le vote par internet pour toutes les élections ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['innovation-technologique'],
    direction: -1, 
    description: "Une proposition visant à permettre le vote à distance via une machine ou un ordinateur, pour lutter contre l'abstention.",
    positions: { "Modem": 2, "Renaissance": 1, "Horizons": 1, "UDI": 1, "PS": 0, "EELV": -1, "LFI": -2, "PCF": -2, "RN": -2, "Reconquête": -2, "LR": -2, "UDR": -2, "Debout la France": -2, "NPA": -2, "LO": -2 }
  },
  {
    id: 717,
    text: "Faut-il féminiser la devise du Panthéon : Aux grands hommes, la patrie reconnaissante ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['feminisme', 'culture-inclusive'],
    direction: -1, 
    description: "Un débat sur la devise du Panthéon : faut-il la modifier pour inclure explicitement les femmes, ou la conserver en l'état au nom de l'Histoire et de la tradition ?",
    positions: { "LFI": 2, "EELV": 2, "PS": 2, "PCF": 2, "Générations": 2, "NPA": 2, "LO": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": -1, "UDI": 0, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
];
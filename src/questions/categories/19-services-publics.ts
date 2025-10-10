import type { Question } from '../types';

export const servicesPublicsQuestions: Question[] = [
{
    id: 1901,
    text: "Faut-il renationaliser les sociétés d'autoroutes ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'souverainete'],
    direction: -1, 
    description: "Une mesure visant à mettre fin aux concessions privées pour que la gestion des autoroutes et la fixation du prix des péages reviennent à l'État.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "PS": 2, "RN": 2, "Debout la France": 2, "NPA": 2, "LO": 2, "Générations": 2, "Renaissance": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Horizons": -2, "Modem": -2, "UDI": -2, "PRG": 1 }
  },
 {
    id: 1902,
    text: "Faut-il plafonner les plus hauts salaires de la fonction publique (ex: à 10 000€ net par mois) ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste'],
    direction: -1,
    description: "Une mesure visant à limiter les très hautes rémunérations dans l'administration (préfets, ambassadeurs, directeurs...) pour réduire l'écart avec les autres salaires.",
    positions: { "LFI": 2, "NPA": 2, "LO": 2, "PCF": 2, "Générations": 2, "EELV": 1, "PS": 1, "RN": 1, "Debout la France": 0, "PRG": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "Reconquête": -2 }
  },
  {
    id: 1903,
    text: "Faut-il imposer un serment de laïcité à tous les agents du service public ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['laicite-stricte'],
    direction: 1,
    description: "Une proposition visant à ce que chaque fonctionnaire prête serment de respecter et défendre la laïcité dans l'exercice de ses fonctions.",
    positions: { "RN": 2, "Reconquête": 2, "LR": 1, "UDR": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "PS": -1, "PRG": -1, "LFI": -2, "PCF": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
{
    id: 1904,
    text: "Faut-il privatiser tout ce qui ne relève pas de la sécurité dans les prisons ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1, 
    description: "Dans ce modèle, des entreprises privées s'occupent de la logistique (bâtiment, repas, nettoyage...), mais les gardiens restent des agents de l'État.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Renaissance": 1, "Modem": 0, "Horizons": 1, "UDI": 1, "RN": -1, "Debout la France": -2, "PS": -2, "PRG": -2, "LFI": -2, "PCF": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
{
    id: 1905,
    text: "Faut-il interdire les voitures thermiques de fonction dans toute l'administration ?",
    importance: 0.75,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une mesure pour que l'État équipe ses agents exclusivement de véhicules électriques ou propres.",
    positions: { "EELV": 2, "Générations": 2, "LFI": 2, "NPA": 2, "LO": 2, "PS": 1, "PCF": 1, "PRG": 1, "Renaissance": 1, "Modem": 1, "Horizons": 1, "RN": -2, "LR": -1, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1906,
    text: "Faut-il instaurer la semaine de 32 heures dans la fonction publique, sans baisse de salaire ?",
    importance: 1.5,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1, 
    description: "Une proposition visant à faire de l'État un précurseur en matière de réduction du temps de travail pour ses propres agents.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1907,
    text: "Faut-il confier davantage de services publics au secteur privé (délégation de service public) ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1, 
    description: "Une politique qui consiste à faire gérer par des entreprises privées des services comme l'eau, les transports ou la gestion des déchets.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "RN": 0, "Debout la France": 0, "LFI": -2, "PCF": -2, "PS": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 1908,
    text: "Faut-il développer les Partenariats Public-Privé (PPP) pour construire les infrastructures ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1, 
    description: "Un modèle où l'État confie la conception, la construction et la maintenance d'une infrastructure (hôpital, autoroute...) à une entreprise privée, qui se rémunère sur le long terme.",
    positions: { "Renaissance": 2, "LR": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "Reconquête": 2, "UDR": 2, "RN": 1, "LFI": -2, "NPA": -2, "PCF": -2, "EELV": -2, "LO": -2, "Générations": -2, "PS": -2, "PRG": -2, "Debout la France": 0 }
  },
{
    id: 1909, 
    text: "Faut-il interdire aux cabinets de conseil privés d'intervenir dans les politiques publiques ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: [],
    direction: -1,
    description: "Une proposition visant à interdire à l'État de recourir à des cabinets de conseil privés pour l'élaboration de ses réformes et politiques publiques.",
    positions: { "LFI": 2, "PCF": 2, "RN": 2, "Debout la France": 2, "NPA": 2, "LO": 2, "EELV": 2, "PS": 2, "Générations": 2, "PRG": 2, "LR": 0, "UDR": 0, "Reconquête": 0, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1 }
  },
  {
    id: 1910,
    text: "Faut-il instaurer une obligation de résultat pour les fonctionnaires, avec primes ou sanctions ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    tags_secondaires: ['rigueur-budgetaire'],
    direction: 1,
    description: "Une réforme visant à introduire une part de rémunération variable pour les agents publics, basée sur l'atteinte d'objectifs de performance.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Renaissance": 2, "Modem": 1, "Horizons": 2, "UDI": 2, "RN": 1, "Debout la France": 1, "LFI": -2, "PCF": -2, "PS": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 1911,
    text: "Faut-il geler le point d'indice des fonctionnaires pour maîtriser les dépenses publiques ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique', 'rigueur-budgetaire'],
    direction: 1, 
    description: "Le point d'indice sert de base au calcul du salaire de tous les agents publics. Le geler revient à ne pas augmenter leur traitement de base, hors promotions individuelles.",
    positions: { "LR": 2, "Reconquête": 2, "UDR": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LFI": -2, "PCF": -2, "PS": -2, "EELV": -2, "RN": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2, "Debout la France": -1 }
  },
{
    id: 1912,
    text: "Faut-il privatiser La Poste ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1, 
    description: "Une proposition visant à vendre la participation de l'État dans l'entreprise, qui ne serait alors plus un service public.",
    positions: { "LR": 2, "Reconquête": 2, "UDR": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "RN": -1, "Debout la France": -1, "LFI": -2, "PCF": -2, "PS": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 1913,
    text: "Faut-il supprimer le statut de fonctionnaire et l'emploi à vie pour les nouvelles recrues ?",
    importance: 1.5,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    tags_secondaires: ['rigueur-budgetaire'],
    direction: 1,
    description: "Une réforme visant à ce que les nouveaux agents de l'État soient recrutés en contrat de droit privé (CDI/CDD), et non plus sous le statut de fonctionnaire qui garantit l'emploi.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "Debout la France": 0, "RN": 0, "LFI": -2, "PCF": -2, "PS": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 1914,
    text: "Faut-il supprimer les agences de l'État pour revenir à une administration centrale ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['rigueur-budgetaire'],
    direction: 1,
    description: "Une proposition visant à dissoudre de nombreuses agences publiques autonomes pour réintégrer leurs missions directement dans les ministères.",
    positions: { "RN": 2, "Reconquête": 2, "Debout la France": 2, "LFI": 2, "PCF": 1, "LR": 1, "UDR": 2, "Renaissance": 1, "Modem": -1, "Horizons": 1, "UDI": -2, "PS": -2, "EELV": -2, "Générations": -2, "PRG": -2, "NPA": 0, "LO": 0 }
  },
  {
    id: 1915,
    text: "La gestion de la distribution de l'eau doit-elle redevenir un service 100% public ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['ecologie', 'justice-sociale'],
    direction: -1,
    description: "Une proposition visant à mettre fin aux délégations au secteur privé (Veolia, Suez) pour que la gestion de l'eau potable soit assurée directement par les communes ou l'État.",
    positions: { "PCF": 2, "LFI": 2, "EELV": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "RN": 0, "Debout la France": 0, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "Reconquête": -2 }
  },
  {
    id: 1916,
    text: "Faut-il soumettre toute nouvelle privatisation de service public à un référendum ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['respect-institutions'],
    direction: -1,
    description: "Une mesure pour que les citoyens aient le dernier mot sur la vente d'entreprises ou de services publics stratégiques (énergie, transports...).",
    positions: { "LFI": 2, "PCF": 2, "RN": 0, "Debout la France": 1, "NPA": 2, "LO": 2, "EELV": 1, "PS": 1, "Générations": 1, "LR": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "UDR": -2, "Reconquête": -2 }
  },
  {
    id: 1917,
    text: "Faut-il instaurer une clause écologique obligatoire dans tous les marchés publics ?",
    importance: 2,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une mesure pour obliger l'État et les collectivités à ne choisir que des fournisseurs respectant des critères environnementaux stricts.",
    positions: { "EELV": 2, "Générations": 2, "LFI": 2, "NPA": 2, "PS": 1, "PCF": 1, "PRG": 1, "Renaissance": 1, "Modem": 1, "Horizons": -1, "UDI": 1, "RN": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
    {
    id: 1918,
    text: "Faut-il ne pas remplacer une partie des départs à la retraite de fonctionnaires ?",
    importance: 1.5,
    axis: 'economic',
    tags_primaires: ['rigueur-budgetaire', 'liberalisme-economique'],
    direction: 1,
    description: "Une mesure de maîtrise des dépenses publiques qui consiste à ne pas remplacer tous les agents de l'État qui partent à la retraite, afin de diminuer la masse salariale.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Renaissance": 1, "Modem": 1, "Horizons": 2, "UDI": 2, "RN": 0, "Debout la France": 0, "LFI": -2, "PCF": -2, "PS": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 1919,
    text: "Faut-il généraliser les Maisons France Services pour regrouper les services publics ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: [],
    direction: 1, 
    description: "Une politique visant à regrouper en un seul lieu (mairie, bureau de poste...) l'accès aux différents services de l'État (CAF, impôts, assurance maladie...).",
    positions: { "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "LR": 1, "UDR": 1, "PS": 1, "PRG": 1, "RN": 1, "Debout la France": 1, "LFI": -1, "PCF": -1, "EELV": -1, "Générations": -1, "NPA": -2, "LO": -2 }
  },
  {
    id: 1920,
    text: "L'administration doit-elle reconnaître et utiliser dans ses formulaires le pronom neutre : iel ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['culture-inclusive', 'progressisme-societal'],
    direction: -1, 
    description: "Une proposition visant à inclure le pronom iel sur les documents officiels pour les personnes non-binaires.",
    positions: { "LFI": 2, "EELV": 2, "NPA": 2, "Générations": 2, "PS": 1, "PCF": 0, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
];
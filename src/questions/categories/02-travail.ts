import type { Question } from '../types';

export const travailQuestions: Question[] = [
 {
    id: 201,
    text: "Faut-il abroger la réforme des retraites portant l'âge de départ à 64 ans ?",
    importance: 3,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1, 
    description: "Une proposition pour revenir à un âge légal de départ à la retraite de 62 ans ou moins.",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "Générations": 2, "PRG": 2, "RN": 2, "NPA": 2, "LO": 2, "Reconquête": -1, "Debout la France": -1, "Renaissance": -2, "LR": -2, "Horizons": -2, "Modem": -2, "UDI": -2, "UDR": -2 }
  },
{
    id: 202,
    text: "Faut-il conditionner le versement du RSA à des heures d'activité ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique', 'rigueur-budgetaire'],
    tags_secondaires: ['securite-autorite'],
    direction: 1, 
    description: "Une mesure demandant aux bénéficiaires du Revenu de Solidarité Active d'effectuer un certain nombre d'heures de travail ou de formation.",
    positions: { "Renaissance": 2, "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 203,
    text: "Faut-il instaurer la semaine de 32 heures (4 jours) sans perte de salaire ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    tags_secondaires: ['progressisme-societal'],
    direction: -1,
    description: "Une proposition de réduction du temps de travail hebdomadaire, avec maintien de la rémunération.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "Générations": 2, "NPA": 2, "LO": 2, "PS": 1, "PRG": 1, "Renaissance": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "Horizons": -2, "Modem": -2, "UDI": -2 }
  },
{
    id: 204,
    text: "Faut-il augmenter significativement le SMIC (ex: à 1600€ net) ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste'],
    direction: -1,
    description: "Une mesure visant à revaloriser fortement le salaire minimum légal, au-delà de l'inflation.",
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "PS": 2, "LO": 2, "EELV": 2, "Générations": 2, "PRG": 2, "RN": 1, "Renaissance": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2, "Modem": -2, "Horizons": -2, "UDI": -2 }
  },
{
    id: 205,
    text: "Faut-il durcir les règles de l'assurance chômage ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique', 'rigueur-budgetaire'], 
    direction: 1, 
    description: "Une réforme visant à réduire la durée ou le montant des indemnisations pour inciter au retour à l'emploi.",
    positions: { "Renaissance": 2, "LR": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "RN": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 206,
    text: "Faut-il indexer les pensions de retraite sur l'inflation ?",
    importance: 1.5,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste'],
    direction: -1,
    description: "Une mesure pour garantir le pouvoir d'achat des retraités en revalorisant automatiquement leurs pensions au même niveau que la hausse des prix.",
    positions: { "LFI": 2, "PS": 2, "PCF": 2, "RN": 2, "Debout la France": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "EELV": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "Reconquête": -2 }
  },
{
    id: 207,
    text: "Faut-il rendre la mutuelle d'entreprise optionnelle pour les salariés ?",
    importance: 0.75,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1, 
    description: "Une proposition pour laisser le choix aux salariés de souscrire ou non au contrat collectif négocié par leur entreprise.",
    positions: { "LR": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "RN": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LFI": -2, "PS": -2, "PCF": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 208,
    text: "Faut-il interdire les licenciements dans les entreprises qui font des bénéfices ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    tags_secondaires: ['radicalite'],
    direction: -1,
    description: "Une mesure pour protéger les emplois dans les sociétés rentables.",
    positions: { "LO": 2, "NPA": 2, "LFI": 2, "PCF": 1, "PS": -1, "EELV": -1, "Générations": -1, "PRG": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 209,
    text: "Faut-il expérimenter le revenu universel (ou revenu de base) ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'progressisme-societal', 'fiscalite-juste'],
    direction: -1,
    description: "Une proposition de versement d'une allocation à tous les citoyens, sans condition, pour assurer un socle de revenus minimum.",
    positions: { "Générations": 2, "EELV": 1, "PS": 1, "PRG": 0, "LFI": 0, "PCF": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 210,
    text: "Faut-il donner un statut de salarié aux travailleurs des plateformes (Uber, Deliveroo) ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste'],
    tags_secondaires: ['humanisme'],
    direction: -1, 
    description: "Un débat sur le statut des travailleurs de plateformes : doivent-ils rester indépendants ou devenir salariés et bénéficier du Code du travail (SMIC, congés payés...) ?",
    positions: { "LFI": 2, "PS": 2, "PCF": 2, "EELV": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "RN": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 211,
    text: "Faut-il rendre obligatoire l'intéressement pour les salariés dans toutes les entreprises rentables ?",
    importance: 0.75,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste'],
    direction: -1, 
    description: "Une mesure pour que le partage des bénéfices avec les employés ne soit plus optionnel, mais un droit.",
    positions: { "PCF": 2, "LFI": 2, "EELV": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "RN": 0, "LR": -1, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 212,
    text: "Faut-il créer un CDI senior avec des conditions de licenciement allégées ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1,
    description: "Un contrat de travail spécifique avec moins de contraintes pour inciter les entreprises à embaucher les travailleurs de plus de 55 ans.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "Debout la France": -1, "LFI": -2, "PS": -2, "PCF": -2, "EELV": -2, "RN": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 213,
    text: "Faut-il limiter le droit de grève dans les services publics (ex: l'interdire pendant les vacances scolaires) ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['liberalisme-economique'],
    tags_secondaires: ['securite-autorite'],
    direction: 1,
    description: "Un débat sur la restriction du droit de grève pour garantir la continuité du service public et la liberté de travailler.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "RN": 1, "Debout la France": 1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 214,
    text: "Faut-il instaurer des politiques de discrimination positive pour favoriser l'embauche de certaines minorités ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    tags_secondaires: ['justice-sociale', 'humanisme'],
    direction: -1,
    description: "Une proposition visant à instaurer des mécanismes de recrutement préférentiel pour augmenter la représentation de certaines minorités.",
    positions: { "LFI": 2, "EELV": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 0, "PCF": 0, "PRG": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 215,
    text: "Faut-il exclure les heures supplémentaires du calcul du revenu fiscal de référence ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1,
    description: "Une mesure pour que les heures supplémentaires ne soient pas prises en compte dans le calcul ouvrant droit à certaines aides sociales.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "RN": 1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 216,
    text: "Notre société devrait-elle reconnaître un droit à la paresse et moins valoriser le travail ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['progressisme-societal', 'radicalite'],
    direction: -1,
    description: "Une proposition philosophique qui remet en question la place centrale du travail dans nos vies.",
    positions: { "EELV": 2, "NPA": 1, "LFI": 0, "PS": -2, "PCF": -2, "LO": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "Générations": 2 }
  },
  {
    id: 217,
    text: "Faut-il mettre fin au monopole des syndicats pour la présentation des candidats aux élections professionnelles ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1, 
    description: "Une mesure qui permettrait à des candidats non-syndiqués de se présenter plus facilement aux élections du personnel dans les entreprises.",
    positions: { "LR": 2, "Reconquête": 2, "UDR": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "Debout la France": 1, "RN": 0, "LFI": -2, "PCF": -2, "PS": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 218,
    text: "Faut-il augmenter le nombre de jours de carence pour les arrêts maladie ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['rigueur-budgetaire', 'liberalisme-economique'],
    direction: 1,
    description: "Les jours de carence sont les jours au début d'un arrêt maladie qui ne sont pas indemnisés. Les augmenter est une mesure visant à réduire les dépenses de la Sécurité Sociale et à lutter contre l'absentéisme.",
    positions: { "LR": 2, "UDR": 1, "Reconquête": 0, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LFI": -2, "PCF": -2, "PS": -2, "EELV": -2, "RN": -1, "Debout la France": -1, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 219,
    text: "Faut-il instaurer une sixième semaine de congés payés pour tous les salariés ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['progressisme-societal'],
    direction: -1, 
    description: "Une proposition visant à augmenter le nombre de semaines de congés payés de cinq à six par an pour l'ensemble des travailleurs.",
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "EELV": 1, "Générations": 1, "PS": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 220,
    text: "Faut-il imposer la parité stricte (50% de femmes) dans les instances dirigeantes des grandes entreprises ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['feminisme', 'justice-sociale'],
    direction: -1,
    description: "Une mesure visant à obliger par la loi les grandes entreprises à avoir au moins la moitié de femmes dans leurs comités de direction et conseils d'administration.",
    positions: { "LFI": 2, "EELV": 2, "PS": 2, "PCF": 2, "Générations": 2, "NPA": 2, "LO": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LR": -1, "UDR": -2, "RN": -1, "Reconquête": -2, "Debout la France": -2 }
  },
];
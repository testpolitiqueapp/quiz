import type { Question } from '../types';

export const economieQuestions: Question[] = [
{
    id: 101,
    text: "Faut-il rétablir l'Impôt de Solidarité sur la Fortune (ISF) ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste'],
    direction: -1,
    description: "L'ISF taxait l'ensemble du patrimoine (immobilier, actions...). Remplacé en 2018 par l'IFI, qui ne taxe que l'immobilier, son rétablissement est un débat majeur entre la justice sociale et la compétitivité économique.",
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "PS": 1, "EELV": 1, "Générations": 1, "PRG": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "LR": -2, "UDI": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2, "RN": -1 }
  },
{
    id: 102,
    text: "Faut-il massivement baisser les impôts de production des entreprises ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1,
    description: "Il s’agit de baisser les impôts que les entreprises paient même si elles ne font pas de bénéfices, afin de renforcer leur compétitivité.",
    positions: { "Renaissance": 2, "LR": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "UDR": 2, "Reconquête": 2, "Debout la France": 2, "LFI": -2, "PS": -2, "EELV": -2, "Générations": -2, "PCF": -2, "NPA": -2, "LO": -2, "RN": 1, "PRG": -1 }
  },
  {
    id: 103,
    text: "Faut-il supprimer l'impôt sur les successions en ligne directe ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1,
    description: "Il s'agit de supprimer l'impôt prélevé lors des héritages entre parents et enfants, afin de faciliter la transmission du patrimoine familial.",
    positions: { "LR": 2, "UDR": 2, "Debout la France": 2, "Reconquête": 2, "RN": 2, "LFI": -2, "PCF": -2, "PS": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1 }
  },
 {
    id: 104,
    text: "Faut-il bloquer les prix des produits de première nécessité ?",
    importance: 1.5,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1,
    description: "L'État fixerait un prix maximum pour des produits essentiels (alimentation, énergie...) pour protéger le pouvoir d’achat.",
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "RN": 1, "Renaissance": -2, "LR": -2, "Modem": -2, "UDI": -2, "UDR": -1, "Reconquête": -2, "Horizons": -2, "Debout la France": -1 }
  },
 {
    id: 105,
    text: "Faut-il taxer les superprofits des grandes entreprises ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste'],
    tags_secondaires: ['ecologie'],
    direction: -1,
    description: "Une proposition d'impôt exceptionnel sur les bénéfices jugés excessifs de certaines grandes entreprises, notamment en période de crise (énergétique, sanitaire...).",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 1, "RN": 1, "Modem": 0, "Renaissance": -1, "Horizons": -1, "UDI": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 106,
    text: "Faut-il conditionner les aides publiques aux entreprises à des contreparties (emploi, écologie) ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    tags_secondaires: ['ecologie'],
    direction: -1,
    description: "L’idée est de n'accorder des aides aux entreprises que si elles respectent certains critères, comme créer de l’emploi ou réduire leur impact environnemental.",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "Générations": 2, "NPA": 2, "LO": 2, "PRG": 1, "Modem": 1, "RN": 1, "Debout la France": 1, "Renaissance": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "Reconquête": -2 }
  },
  {
    id: 107,
    text: "Faut-il plafonner le salaire des grands patrons ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste'],
    direction: -1,
    description: "L’idée serait d’imposer une limite à la rémunération des dirigeants d’entreprise, par exemple en la liant au salaire médian de l'entreprise.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "RN": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "LR": -2, "UDI": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -1 }
  },
 {
    id: 108,
    text: "Faut-il instaurer une taxe sur les plus hauts patrimoines ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste'],
    direction: -1,
    description: "Une proposition d'impôt annuel sur les très grandes fortunes pour compléter ou remplacer l'impôt sur la fortune immobilière.",
    positions: { "PS": 2, "LFI": 2, "Générations": 2, "EELV": 2, "PCF": 2, "NPA": 2, "LO": 2, "PRG": 2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -1, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 109,
    text: "Faut-il appliquer un malus écologique aux vêtements de la fast-fashion ?",
    importance: 0.75,
    axis: 'economic',
    tags_primaires: ['ecologie'],
    direction: -1,
    description: "Cette mesure consiste à imposer une taxe sur les vêtements issus de la mode éphémère (Shein, Temu...), en raison de leur impact environnemental.",
    positions: { "Renaissance": 2, "Générations": 2, "PS": 2, "EELV": 2, "Horizons": 1, "NPA": 2, "LO": 2, "PRG": 2, "PCF": 1, "Modem": 1, "LR": 0, "RN": 0, "UDI": 0, "UDR": -1, "Debout la France": -1, "Reconquête": -2 }
  },
 {
    id: 110,
    text: "Faut-il instaurer une TVA sociale ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1,
    description: "Cela consiste à augmenter la TVA (payée par les consommateurs) pour réduire les cotisations sociales (payées par les entreprises sur les salaires), afin d'améliorer la compétitivité.",
    positions: { "LR": 2, "Reconquête": 2, "UDR": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "RN": 1, "Debout la France": 1, "LFI": -2, "PS": -2, "PCF": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
 {
    id: 111,
    text: "Faut-il faire de la réduction de la dette publique une priorité absolue, quitte à réduire les dépenses ?",
    importance: 3,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique', 'rigueur-budgetaire'],
    direction: 1,
    description: "Une vision qui place le désendettement de l'État au-dessus d'autres politiques publiques, quitte à réduire les dépenses.",
    positions: { "LR": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 1, "Horizons": 2, "UDI": 1, "LFI": -2, "PCF": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PS": -1, "PRG": -1, "RN": 1 }
  },
 {
    id: 112,
    text: "Faut-il augmenter le nombre de tranches de l'impôt sur le revenu pour le rendre plus progressif ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste'],
    direction: -1,
    description: "Une mesure pour rendre l'impôt plus progressif, en créant de nouvelles tranches d'imposition pour les plus hauts revenus.",
    positions: { "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "EELV": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "RN": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 113,
    text: "Faut-il défiscaliser totalement les heures supplémentaires ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1,
    description: "Une mesure visant à supprimer les impôts et cotisations sur les heures supplémentaires pour augmenter le revenu net des salariés qui travaillent plus.",
    positions: { "LR": 2, "Renaissance": 2, "RN": 2, "UDR": 2, "Reconquête": 2, "Debout la France": 2, "Modem": 2, "Horizons": 2, "UDI": 2, "LFI": -2, "PS": -1, "PRG": -1, "PCF": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
{
    id: 114,
    text: "Faut-il interdire les frais bancaires abusifs pour les ménages en difficulté ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste'],
    direction: -1,
    description: "Cette mesure vise à protéger les clients les plus fragiles en limitant ou en interdisant certains frais prélevés par les banques.",
    positions: { "LFI": 2, "PCF": 2, "PS": 2, "EELV": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "RN": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "LR": -2, "UDI": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 115,
    text: "Faut-il créer un grand plan d'investissement public dans la réindustrialisation verte ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['ecologie', 'souverainete'],
    direction: -1,
    description: "Une politique d'investissement massif de l'État pour développer en France des industries d'avenir qui soient à la fois écologiques et stratégiques.",
    positions: { "EELV": 2, "PS": 2, "LFI": 2, "PCF": 2, "Générations": 2, "NPA": 2, "LO": 2, "PRG": 2, "Renaissance": 2, "Horizons": 1, "Modem": 2, "UDI": 2, "RN": 1, "Debout la France": 1, "LR": 1, "UDR": 1, "Reconquête": -1 }
  },
    {
    id: 116,
    text: "Faut-il nationaliser les grandes banques et assurances ?",
    importance: 1.5,
    axis: 'economic',
    tags_primaires: ['radicalite'],
    tags_secondaires: ['justice-sociale'],
    direction: -1,
    description: "Une proposition visant à ce que l'État prenne le contrôle total du secteur financier pour orienter l'économie.",
    positions: { "LO": 2, "NPA": 2, "LFI": 1, "PCF": 1, "PS": -2, "EELV": -1, "Générations": -2, "PRG": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 117,
    text: "Faut-il nationaliser l'ensemble des entreprises du CAC 40 ?",
    importance: 2,
    axis: 'economic',
    tags_primaires: ['radicalite'],
    tags_secondaires: ['justice-sociale'],
    direction: -1,
    description: "Une proposition visant à ce que l'État prenne le contrôle total des 40 plus grandes entreprises françaises (Total, LVMH, L'Oréal...) pour planifier l'économie.",
    positions: { "LO": 2, "NPA": 2, "LFI": 0, "PCF": 1, "PS": -2, "EELV": -2, "Générations": -2, "PRG": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 118,
    text: "Faut-il augmenter le crédit d'impôt pour les dons aux associations ?",
    importance: 0.75,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'fiscalite-juste'],
    direction: -1,
    description: "Une mesure fiscale visant à encourager les dons des particuliers au secteur associatif (culture, sport, caritatif...) en augmentant la part du don déductible des impôts.",
    positions: { "PCF": 2, "PS": 2, "EELV": 2, "LFI": 2, "Générations": 2, "PRG": 2, "NPA": 2, "LO": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LR": 1, "RN": 0, "Reconquête": 0, "Debout la France": 0 }
  },
  {
    id: 119,
    text: "Faut-il supprimer l'octroi de mer pour lutter contre la vie chère dans les Outre-mer ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    tags_secondaires: ['justice-sociale'],
    direction: 1, 
    description: "L'octroi de mer est une taxe sur les produits importés dans les Outre-mer, accusée de faire grimper les prix. Sa suppression est débattue car c'est aussi la principale ressource financière des communes.",
    positions: { "Reconquête": 2, "LFI": 1, "RN": 1, "LR": 0, "UDR": 0, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "PS": -2, "EELV": -2, "PCF": -2, "Debout la France": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
];
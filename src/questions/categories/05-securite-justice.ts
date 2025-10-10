import type { Question } from '../types';

export const securiteJusticeQuestions: Question[] = [
{
    id: 501,
    text: "Faut-il instaurer une présomption de légitime défense pour les forces de l’ordre ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['securite-autorite'],
    direction: 1,
    description: "Une mesure qui considérerait a priori qu'un policier ou gendarme a agi en état de légitime défense.",
    positions: { "RN": 2, "Reconquête": 2, "UDR": 2, "LR": 2, "Debout la France": 2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "NPA": -2, "Générations": -2, "PRG": -2, "LO": -2 }
  },
 {
    id: 502,
    text: "Faut-il rétablir des peines planchers pour les récidivistes ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['securite-autorite', 'fermete-justice'],
    direction: 1,
    description: "Une mesure qui imposerait une peine minimale en cas de récidive.",
    positions: { "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": -2, "Horizons": -1, "Modem": -1, "UDI": -1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
    {
    id: 503,
    text: "Faut-il supprimer l'excuse de minorité pour les délinquants de plus de 16 ans ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['securite-autorite', 'fermete-justice'],
    direction: 1,
    description: "Une proposition pour que les mineurs de plus de 16 ans soient jugés comme des majeurs dans certains cas.",
    positions: { "RN": 2, "Reconquête": 2, "LR": 2, "UDR": 2, "Debout la France": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "Générations": -2, "PRG": -2, "NPA": -2, "LO": -2 }
  },
  {
    id: 504,
    text: "Faut-il construire 20 000 places de prison supplémentaires ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['securite-autorite'],
    direction: 1, 
    description: "Un programme pour augmenter le nombre de places en détention afin de lutter contre la surpopulation carcérale.",
    positions: { "LR": 2, "RN": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "EELV": -2, "LFI": -2, "PS": -1, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
 {
    id: 505,
    text: "Faut-il développer les peines alternatives à la prison (bracelet électronique, travaux d'intérêt général) pour les délits mineurs ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    tags_secondaires : ['justice-sociale'],
    direction: -1,
    description: "Une mesure visant à privilégier des peines alternatives à l'incarcération pour les infractions les moins graves.",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "Générations": 2, "PRG": 2, "NPA": 2, "LO": 2, "Renaissance": 1, "Modem": 1, "Horizons": -1, "UDI": 1, "LR": -1, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 } 
  },
{
    id: 506,
    text: "Faut-il renforcer les pouvoirs et les moyens du Parquet National Financier (PNF) ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['justice-sociale', 'respect-institutions'],
    tags_secondaires : ['fiscalite-juste'],
    direction: -1, 
    description: "Une mesure pour renforcer les moyens du PNF, l'institution judiciaire qui enquête sur les grandes affaires de corruption et de fraude fiscale.",
    positions: { "PS": 2, "LFI": 2, "EELV": 2, "PCF": 2, "Générations": 2, "Renaissance": 1, "Modem": 1, "Horizons": 0, "LR": -2, "RN": -1, "Reconquête": -2 }
  },
{
    id: 507,
    text: "Faut-il armer toutes les polices municipales ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['securite-autorite'],
    direction: 1,
    description: "Une mesure pour doter systématiquement les agents de police municipale d'armes à feu.",
    positions: { "LR": 2, "RN": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LFI": -2, "PCF": -2, "EELV": -2, "PS": -1, "Générations": -2, "PRG": -1, "NPA": -2, "LO": -2 }
  },
{
    id: 508,
    text: "Faut-il dissoudre les BAC (Brigades Anti-Criminalité) ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['radicalite'],
    direction: -1, 
    description: "Une proposition visant à supprimer les Brigades Anti-Criminalité (BAC), des unités de police agissant principalement en civil dans les zones sensibles.",
    positions: { "LFI": 2, "LO": 2, "NPA": 2, "EELV": 1, "PS": 1, "PCF": 1, "Générations": 1, "PRG": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "UDI": -2 }
  },
{
    id: 509,
    text: "Faut-il rétablir la peine de mort pour les crimes les plus graves ?",
    importance: 3,
    axis: 'societal',
    tags_primaires: ['securite-autorite', 'fermete-justice'],
    tags_secondaires : ['patrimoine', 'radicalite'],
    direction: 1,
    description: "Une proposition visant à réintroduire la peine capitale pour les crimes les plus graves.",
    positions: { "Reconquête": 2, "Debout la France": 1, "RN": 0, "UDR": 1, "LR": -1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "Générations": -2, "PRG": -2, "NPA": -2, "LO": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2 }
  },
{
    id: 510,
    text: "Faut-il interdire l'usage des lanceurs de balles de défense (LBD) par les forces de l'ordre ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    direction: -1, 
    description: "Une proposition visant à interdire l'usage du LBD, une arme de force intermédiaire utilisée pour le maintien de l'ordre.",
    positions: { "LFI": 2, "EELV": 2, "PS": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 511,
    text: "Faut-il créer un service d'enquête indépendant pour les violences policières ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    direction: -1, 
    description: "Une proposition pour que les enquêtes sur les agissements des forces de l'ordre ne soient plus menées par l'IGPN ou l'IGGN (la police des polices).",
    positions: { "LFI": 2, "EELV": 2, "NPA": 2, "PCF": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 512,
    text: "Faut-il abaisser la majorité pénale à 15 ans ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['securite-autorite', 'fermete-justice'],
    direction: 1,
    description: "Une mesure qui ferait juger les mineurs de plus de 15 ans comme des adultes par la justice.",
    positions: { "Reconquête": 2, "RN": 2, "UDR": 2, "Debout la France": 2, "LR": 2, "LFI": -2, "PCF": -2, "EELV": -2, "PS": -2, "Générations": -2, "PRG": -2, "NPA": -2, "LO": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2}
  },
{
    id: 513,
    text: "Faut-il généraliser l'usage de drones par les forces de l'ordre pour la surveillance de l'espace public ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['securite-autorite'],
    tags_secondaires : ['innovation-technologique'],
    direction: 1, 
    description: "Une mesure visant à étendre l'utilisation de drones par la police et la gendarmerie pour surveiller les manifestations ou des zones étendues.",
    positions: { "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 514,
    text: "Faut-il supprimer les remises de peine automatiques ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['securite-autorite', 'fermete-justice'],
    direction: 1, 
    description: "Une réforme pour que les réductions de peine ne soient plus la norme mais une exception accordée au mérite.",
    positions: { "LR": 2, "RN": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "Générations": -2, "PRG": -2, "NPA": -2, "LO": -2 }
  },
 {
    id: 515,
    text: "Faut-il dépénaliser la consommation de tous les stupéfiants ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['progressisme-societal', 'radicalite'],
    direction: -1, 
    description: "Une politique qui remplacerait la sanction pénale pour usage de drogues par une approche sanitaire.",
    positions: { "LFI": 2, "NPA": 2, "LO": 2, "PCF": 2, "EELV": 1, "Générations": 1, "PS": -1, "PRG": -1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 516,
    text: "Faut-il rendre les parents financièrement responsables des délits commis par leurs enfants mineurs ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['securite-autorite'],
    tags_secondaires : ['patrimoine'],
    direction: 1,
    description: "Une mesure qui imposerait aux parents de payer les amendes ou les dommages et intérêts pour les infractions de leurs enfants.",
    positions: { "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": 0, "Modem": -1, "Horizons": 1, "UDI": 1, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
  {
    id: 517,
    text: "Faut-il supprimer la Cour de Justice de la République (CJR) ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['justice-sociale'],
    direction: -1, 
    description: "Une réforme visant à supprimer cette cour d'exception pour que les ministres soient jugés comme des citoyens ordinaires pour les actes commis dans leurs fonctions.",
    positions: { "LFI": 2, "EELV": 2, "Modem": 2, "PS": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 2, "Renaissance": -1, "Horizons": 0, "RN": 1, "LR": -1, "UDR": -1, "UDI": 0, "Reconquête": -2, "Debout la France": 0 }
  },
  {
    id: 518,
    text: "Faut-il interdire de filmer les forces de l’ordre dans l'exercice de leurs fonctions ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['securite-autorite'],
    direction: 1,
    description: "Une proposition visant à interdire la diffusion d'images de policiers ou de gendarmes, pour les protéger, au risque de limiter le contrôle citoyen de leur action.",
    positions: { "LR": 1, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": 0, "Modem": 0, "Horizons": 0, "LFI": -2, "EELV": -2, "PS": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
   {
    id: 519,
    text: "Faut-il abroger les lois sécuritaires les plus répressives (ex: loi Sécurité Globale) ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['progressisme-societal'],
    direction: -1,
    description: "Une proposition visant à annuler les lois sécuritaires récentes, jugées liberticides par leurs opposants.",
    positions: { "LFI": 2, "NPA": 2, "LO": 2, "EELV": 2, "PCF": 2, "Générations": 2, "PS": 1, "PRG": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 520,
    text: "Faut-il créer un bagne aux îles Kerguelen pour les condamnés pour terrorisme ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['securite-autorite', 'fermete-justice'],
    tags_secondaires: ['radicalite'],
    direction: 1, 
    description: "Une proposition visant à isoler les condamnés pour terrorisme dans un établissement pénitentiaire de haute sécurité, loin de la métropole, dans les Terres australes françaises.",
    positions: { "Debout la France": 2, "Reconquête": 2, "RN": 1, "UDR": 1, "LR": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "PS": -2, "PRG": -2, "EELV": -2, "Générations": -2, "LFI": -2, "PCF": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 521,
    text: "Faut-il mettre fin à l'irresponsabilité pénale pour les crimes commis sous l'emprise de drogues ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['fermete-justice', 'securite-autorite'],
    direction: 1, 
    description: "Le débat oppose le droit des victimes à un procès, au principe juridique qui empêche de juger une personne dont le discernement était aboli au moment des faits à cause de la drogue.",
    positions: { "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
];
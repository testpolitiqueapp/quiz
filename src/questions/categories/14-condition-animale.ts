import type { Question } from '../types';

export const conditionAnimaleQuestions: Question[] = [
 {
    id: 1401,
    text: "Faut-il interdire l'élevage intensif (fermes-usines) ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['condition-animale'],
    tags_secondaires: ['ecologie'],
    direction: -1, 
    description: "Une mesure visant à interdire l'élevage sans accès au plein air et à haute densité d'animaux.",
    positions: { "EELV": 2, "LFI": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "PCF": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 1402,
    text: "Faut-il interdire la chasse le dimanche ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['condition-animale'],
    direction: -1, 
    description: "Un débat qui oppose la sécurité des promeneurs et le bien-être animal à la défense d'une pratique de loisir traditionnelle.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "LO": 2, "PS": 1, "PRG": 1, "PCF": -2, "LR": -2, "RN": -2, "Renaissance": -1, "Reconquête": -2, "Debout la France": -2, "UDR": -2, "Modem": -1, "Horizons": -2, "UDI": -2 }
  },
{
    id: 1403,
    text: "Faut-il interdire la chasse à courre ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['condition-animale'],
    tags_secondaires: ['ecologie'],
    direction: -1, 
    description: "Une proposition visant à interdire cette pratique de chasse traditionnelle où une meute de chiens poursuit un animal jusqu'à l'épuisement.",
    positions: { "EELV": 2, "LFI": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 2, "PCF": 1, "PRG": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1404,
    text: "Faut-il interdire la corrida ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['condition-animale'],
    direction: -1, 
    description: "Une proposition visant à interdire les spectacles de tauromachie impliquant la mise à mort de l'animal.",
    positions: { "EELV": 2, "LFI": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 0, "Renaissance": -1, "Modem": -1, "Horizons": -1, "PCF": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 1405,
    text: "Faut-il reconnaître les animaux comme des êtres vivants doués de sensibilité dans la Constitution ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['condition-animale', 'progressisme-societal'],
    direction: -1, 
    description: "Une proposition visant à inscrire dans le texte le plus fondamental de la République le statut d'être sensible des animaux, qui est déjà reconnu dans le Code civil.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 1, "Renaissance": 1, "Modem": 1, "Horizons": -1, "PCF": 0, "LR": -2, "RN": 1, "Reconquête": -2, "UDR": -2, "Debout la France": -2 }
  },
 {
    id: 1406,
    text: "Faut-il créer un Défenseur des droits des animaux ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['condition-animale'],
    direction: -1,
    description: "Une proposition visant à créer une autorité administrative indépendante, sur le modèle du Défenseur des droits, spécifiquement chargée de la protection animale.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 2, "Renaissance": 0, "Modem": 0, "Horizons": 0, "UDI": 0, "PCF": 0, "LR": -1, "RN": 2, "Debout la France": -1, "Reconquête": -2, "UDR": -1 }
  },
{
    id: 1407,
    text: "Faut-il interdire l'abattage rituel d'animaux sans étourdissement préalable ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['laicite-stricte', 'patrimoine'],
    direction: 1,
    description: "Un débat qui oppose le bien-être animal (l'étourdissement visant à réduire la souffrance) à la liberté de culte (certains rites religieux comme l'abattage halal ou casher l'interdisent).",
    positions: { "RN": 2, "Reconquête": 2, "Debout la France": 2, "UDR": 2, "LR": 1, "EELV": 0, "Renaissance": 0, "Modem": 0, "Horizons": 0, "UDI": 0, "PS": -1, "PRG": -1, "PCF": -2, "LFI": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
{
    id: 1408,
    text: "Faut-il rendre obligatoire l'enseignement du bien-être animal à l'école ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['condition-animale'],
    tags_secondaires: ['progressisme-societal'],
    direction: -1, 
    description: "Une proposition pour intégrer dans les programmes scolaires des cours dédiés à l'éthique et à la sensibilité des animaux, afin de promouvoir le respect du vivant.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "PCF": 0, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1409,
    text: "Faut-il interdire la vente d'animaux de compagnie sur internet (ex: Le Bon Coin) ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['condition-animale'],
    direction: -1, 
    description: "Une proposition pour étendre l'interdiction de la vente en animalerie aux sites de petites annonces en ligne, afin de lutter contre les trafics et les achats impulsifs.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 1, "Renaissance": 0, "Modem": 0, "Horizons": 0, "PCF": 1, "RN": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1410,
    text: "Faut-il augmenter les subventions publiques pour les refuges pour animaux ?",
    importance: 0.75,
    axis: 'economic',
    tags_primaires: ['condition-animale'],
    tags_secondaires: ['justice-sociale'],
    direction: -1, 
    description: "Une mesure visant à augmenter l'aide financière de l'État et des collectivités aux associations qui recueillent les animaux abandonnés ou maltraités.",
    positions: { "EELV": 2, "PS": 2, "LFI": 2, "PCF": 2, "Générations": 2, "NPA": 2, "LO": 2, "PRG": 1, "Renaissance": 1, "Modem": 1, "Horizons": 1, "RN": 1, "UDI": 1, "LR": -1, "UDR": -1, "Reconquête": -1, "Debout la France": -1 }
  },
{
    id: 1411,
    text: "Faut-il interdire l'élevage d'animaux (visons, renards...) pour leur fourrure ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['condition-animale'],
    direction: -1,
    description: "Une mesure visant à mettre fin à l'élevage et à l'abattage d'animaux dans le but exclusif d'utiliser leur peau pour l'industrie de la mode et du luxe.",
    positions: { "EELV": 2, "LFI": 2, "PS": 2, "Générations": 2, "NPA": 2, "PCF": 2, "Renaissance": 2, "Modem": 2, "Horizons": 2, "UDI": 1, "LR": -1, "RN": 0, "Reconquête": -2, "UDR": -2, "Debout la France": -1 }
  },
{
    id: 1412,
    text: "Faut-il revenir sur l'interdiction des animaux sauvages dans les cirques itinérants ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    direction: 1,
    description: "La loi interdit progressivement les animaux sauvages (lions, tigres...) dans les cirques. Cette proposition vise à annuler cette interdiction au nom de la tradition du cirque.",
    positions: { "Reconquête": 2, "RN": 1, "Debout la France": 2, "UDR": 1, "LR": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "PS": -2, "EELV": -2, "LFI": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 1413,
    text: "Faut-il interdire la production de foie gras en France en raison du gavage ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['condition-animale'],
    direction: -1, 
    description: "Une proposition visant à interdire le gavage des oies et des canards, pratique jugée cruelle par ses opposants et défendue comme une tradition gastronomique par ses partisans.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "PCF": 0, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1414,
    text: "Faut-il augmenter les subventions publiques aux associations animalistes militantes (type L.214) ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['condition-animale'],
    tags_secondaires: ['progressisme-societal'],
    direction: -1, 
    description: "Un débat qui oppose le soutien à la cause animale et au rôle de lanceur d'alerte de ces associations, à la défense du monde de l'élevage et au refus de financer des actions jugées trop radicales.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 0, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "PRG": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2, "PCF": -2, "LO": -2 }
  },
  {
    id: 1415,
    text: "Faut-il limiter le transport d'animaux vivants sur de longues distances ?",
    importance: 1.25,
    axis: 'societal',
    tags: ['condition-animale'],
    direction: -1, // Progressiste
    description: "Encadrer strictement la durée et les conditions de transport des animaux d'élevage.",
    positions: { "EELV": 2, "LFI": 2, "PS": 1, "Renaissance": 1, "LR": -2, "RN": -1 }
  },
];
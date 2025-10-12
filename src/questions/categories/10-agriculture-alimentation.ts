import type { Question } from '../types';

export const agricultureAlimentationQuestions: Question[] = [
{
    id: 1001,
    text: "Faut-il sortir des traités de libre-échange agricole (CETA, Mercosur) ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['souverainete', 'ruralite'],
    direction: 1, 
    description: "Une mesure pour protéger les agriculteurs français de la concurrence de pays dont les normes sociales et environnementales sont différentes.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "LR": 2, "UDR": 2, "Renaissance": -1, "Modem": -1, "Horizons": 0, "UDI": -2, "PRG": 1 }
  },
{
    id: 1002,
    text: "Faut-il interdire les nitrites dans l'alimentation ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une proposition visant à interdire l'usage des sels nitrités dans la charcuterie, accusés d'être cancérigènes, ce que contestent les industriels du secteur.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "LR": -2, "UDR": -2, "RN": -1, "Reconquête": -2, "PCF": 0 }
  },
{
    id: 1003,
    text: "L'État doit-il fixer un objectif de réduction de 50 % de la consommation de viande ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['ecologie', 'condition-animale'],
    direction: -1,
    description: "Une mesure de planification écologique visant à diviser par deux la consommation de protéines animales pour des raisons climatiques, de santé et de bien-être animal.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "PS": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "PCF": -2, "Debout la France": -2 }
  },
{
    id: 1004,
    text: "Faut-il autoriser la construction de méga-bassines pour l'irrigation agricole ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ruralite'],
    direction: 1, 
    description: "Un débat sur la construction de grandes réserves d'eau pour l'irrigation, qui oppose la défense du modèle agricole productif à la protection des ressources en eau.",
    positions: { "LR": 2, "UDR": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "RN": 2, "LFI": -2, "PS": -2, "EELV": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 1005,
    text: "Faut-il totalement exonérer d'impôts la transmission des exploitations agricoles familiales ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['ruralite', 'patrimoine'],
    direction: 1,
    description: "Une mesure fiscale visant à supprimer les droits de succession pour les terres et biens agricoles afin de faciliter la transmission des fermes.",
    positions: { "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "PS": -1, "EELV": -1, "LFI": -2, "PCF": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
 {
    id: 1006,
    text: "Faut-il imposer une option végétarienne quotidienne dans toutes les cantines scolaires ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ecologie', 'condition-animale'],
    direction: -1, 
    description: "Un débat qui oppose la réduction de l'empreinte carbone et le bien-être animal à la défense de la filière élevage et à la liberté de choix des menus.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "LO": 2, "PS": 1, "PRG": 1, "PCF": 0, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 1007,
    text: "Faut-il considérer le vin comme un patrimoine culturel, et non comme un alcool comme les autres ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['patrimoine'],
    tags_secondaires: ['ruralite'],
    direction: 1,
    description: "Un débat qui oppose la défense du vin comme un pilier de la culture française aux impératifs de santé publique qui visent à le traiter comme n'importe quelle boisson alcoolisée.",
    positions: { "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 0, "Horizons": 1, "UDI": 1, "PCF": 0, "PRG": 0, "PS": -1, "LFI": -2, "EELV": -2, "Générations": -2, "NPA": -2, "LO": -2 }
  },
 {
    id: 1008,
    text: "Faut-il interdire définitivement les néonicotinoïdes ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['ecologie', 'condition-animale'],
    direction: -1, 
    description: "Un débat qui oppose la protection de la biodiversité (notamment des abeilles) à la défense de certaines filières agricoles (comme la betterave sucrière) qui dépendent de ces pesticides.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "LO": 2, "PS": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "PCF": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 1009,
    text: "Faut-il imposer des quotas de produits français dans les rayons des supermarchés ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['souverainete', 'ruralite'],
    direction: 1, 
    description: "Une mesure de patriotisme économique qui s'oppose aux règles du marché unique européen et à la liberté de commerce, afin de soutenir les agriculteurs et producteurs français.",
    positions: { "RN": 2, "Debout la France": 2, "LFI": 2, "PCF": 2, "NPA": 2, "LO": 2, "Reconquête": 2, "Renaissance": -2, "Modem": -2, "Horizons": -1, "UDI": -2, "LR": 1, "UDR": 1, "PS": -2, "EELV": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 1010,
    text: "Faut-il compléter le Nutri-Score avec un indicateur sur le niveau de transformation des aliments ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une proposition visant à ajouter l'indice NOVA sur les emballages, pour informer les consommateurs sur le degré de transformation d'un produit (de non transformé à ultra-transformé).",
    positions: { "LFI": 2, "EELV": 2, "PS": 2, "PCF": 2, "Générations": 2, "NPA": 2, "LO": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "PRG": 1, "LR": -1, "UDR": -1, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 1011,
    text: "Faut-il rendre le Nutri-Score obligatoire sur tous les produits alimentaires en Europe ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['justice-sociale', 'europe-integree'], 
    direction: -1,
    description: "Une mesure visant à imposer l'étiquetage nutritionnel Nutri-Score sur tous les aliments vendus en Europe, malgré l'opposition de certains industriels et de certains pays de l'Union.",
    positions: { "LFI": 2, "LO": 2, "PS": 2, "EELV": 2, "PCF": 2, "Générations": 2, "NPA": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LR": -1, "RN": -2, "Reconquête": -2, "UDR": -2, "Debout la France": -2 }
  },
{
    id: 1012,
    text: "En cas de sécheresse, l'irrigation agricole doit-elle être prioritaire sur les autres usages de l'eau ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['ruralite'],
    direction: 1, 
    description: "Un débat qui oppose la garantie de la production alimentaire (priorité à l'agriculture) à la préservation de l'eau potable et au fonctionnement d'autres industries vitales (comme le refroidissement des centrales nucléaires).",
    positions: { "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "PCF": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "PS": -2, "EELV": -2, "LFI": -2, "Générations": -2, "NPA": -2, "LO": -2 }
  },
{
    id: 1013,
    text: "Faut-il interdire aux fonds d'investissement et aux groupes financiers d'acheter des terres agricoles ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale'],
    direction: -1,
    description: "Une proposition visant à réserver l'achat de terres agricoles uniquement aux agriculteurs pour lutter contre la spéculation et préserver la souveraineté alimentaire.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": -1, "RN": 1, "Debout la France": 2, "PS": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "LR": -2, "UDR": -2, "Reconquête": -2 }
  },
{
    id: 1014,
    text: "Faut-il transformer des terres agricoles non-essentielles en zones sauvages non exploitées ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: ['ecologie', 'radicalite'],
    direction: -1,
    description: "Une proposition visant à rendre des terres cultivées à la nature pour restaurer la biodiversité, au risque de diminuer la surface agricole du pays.",
    positions: { "EELV": 2, "Générations": 2, "NPA": 2, "LFI": 1, "PS": -1, "PCF": -2, "Renaissance": -2, "Modem": -2, "Horizons": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 1015,
    text: "Faut-il annuler la dette des agriculteurs qui se reconvertissent vers l'agriculture biologique ?",
    importance: 1.0,
    axis: 'economic',
    tags_primaires: ['ecologie', 'justice-sociale'],
    direction: -1,
    description: "Une mesure de soutien à l'agriculture biologique qui effacerait les dettes des exploitants qui abandonnent le modèle productiviste.",
    positions: { "EELV": 2, "LFI": 2, "NPA": 2, "Générations": 2, "PS": 1, "PCF": 0, "Renaissance": -1, "Modem": -1, "Horizons": -1, "RN": -1, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
];
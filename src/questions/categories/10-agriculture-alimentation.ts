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
    positions: { "LR": 2, "UDR": 2, "RN": 2, "Reconquête": 2, "Debout la France": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "PS": -1, "EELV": -1, "LFI": -2, "PCF": -2, "NPA": -2, "LO": -2 }
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
    text: "Faut-il faciliter la transmission des exploitations agricoles ?",
    importance: 0.75,
    axis: 'economic',
    tags: ['valeurs-traditionnelles', 'liberalisme-economique'],
    direction: 1, // Droite
    description: "Des mesures fiscales et administratives pour aider les jeunes agriculteurs à s'installer.",
    positions: { "LR": 2, "Renaissance": 2, "RN": 2, "PS": 1, "LFI": 1 }
  },
  {
    id: 1008,
    text: "Faut-il imposer l'origine France dans la restauration collective (cantines, restaurants d'entreprise) ?",
    importance: 1.0,
    axis: 'economic',
    tags: ['protectionnisme', 'souverainete'],
    direction: 1, // Souverainiste
    description: "Une mesure de patriotisme économique visant à favoriser les circuits courts et les producteurs locaux.",
    positions: { "Debout la France": 2, "RN": 2, "LR": 2, "PCF": 2, "PS": 1, "LFI": 1, "Renaissance": -1, "Modem": -1 }
  },
  {
    id: 1009,
    text: "Faut-il réformer la Politique Agricole Commune (PAC) pour mieux rémunérer les petits agriculteurs ?",
    importance: 1.25,
    axis: 'economic',
    tags: ['justice-sociale', 'europe-integree'],
    direction: -1, // Gauche
    description: "Une renégociation des aides européennes pour favoriser les petites exploitations et les pratiques durables.",
    positions: { "PS": 2, "EELV": 2, "LFI": 2, "PCF": 2, "RN": 1, "Renaissance": -1, "LR": -2 }
  },
  {
    id: 1010,
    text: "Faut-il interdire l'élevage en cage pour tous les animaux (poules, lapins, etc.) ?",
    importance: 1.25,
    axis: 'societal',
    tags: ['condition-animale', 'progressisme-societal'],
    direction: -1, // Progressiste / Libertaire
    description: "Une mesure en faveur du bien-être animal dans les pratiques d'élevage.",
    positions: { "EELV": 2, "LFI": 2, "PS": 1, "Renaissance": 1, "LR": -2, "RN": -1 }
  },
 {
    id: 1011,
    text: "Faut-il rendre le Nutri-Score obligatoire sur tous les produits alimentaires en Europe ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['justice-sociale', 'europe-integree'], 
    direction: -1,
    description: "Une mesure visant à imposer l'étiquetage nutritionnel Nutri-Score sur tous les aliments vendus en Europe, malgré l'opposition de certains industriels et de certains pays de l'Union.",
    positions: { "LFI": 2, "PS": 2, "EELV": 2, "PCF": 2, "Générations": 2, "NPA": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "LR": -1, "RN": -2, "Reconquête": -2, "UDR": -2, "Debout la France": -2 }
  },
  {
    id: 1012,
    text: "Faut-il viser la souveraineté alimentaire de la France ?",
    importance: 1.0,
    axis: 'economic',
    tags: ['souverainete'],
    direction: 1, // Souverainiste
    description: "Une politique visant à ce que la France produise sur son sol l'essentiel de son alimentation.",
    positions: { "RN": 2, "Debout la France": 2, "LR": 2, "PCF": 2, "LFI": 1, "Renaissance": 1 }
  },
  {
    id: 1013,
    text: "Faut-il interdire la pêche électrique en eaux européennes ?",
    importance: 1.0,
    axis: 'societal',
    tags: ['ecologie'],
    direction: -1, // Pro-écologie
    description: "Proscrire une technique de pêche jugée très destructrice pour les écosystèmes marins.",
    positions: { "EELV": 2, "LFI": 2, "RN": 2, "PS": 2, "Renaissance": 1, "LR": -1 }
  },
  {
    id: 1014,
    text: "Faut-il créer une agence publique de gestion des terres agricoles pour contrer la spéculation ?",
    importance: 1.0,
    axis: 'economic',
    tags: ['justice-sociale'],
    direction: -1, // Interventionnisme de gauche
    description: "Un organisme (type SAFER renforcée) pour maîtriser le prix des terres et faciliter l'installation des jeunes.",
    positions: { "LFI": 2, "PCF": 2, "EELV": 1, "PS": 1, "Renaissance": -1, "LR": -2 }
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
import type { Question } from '../types';

export const transportsAmenagementQuestions: Question[] = [
  {
    id: 2001,
    text: "Faut-il supprimer les avantages fiscaux liés aux voitures de fonction ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['fiscalite-juste', 'ecologie'],
    direction: -1, 
    description: "Une proposition visant à mettre fin aux exonérations fiscales pour les entreprises sur l'achat et l'utilisation de voitures de fonction.",
    positions: { "LFI": 2, "EELV": 2, "NPA": 2, "Générations": 2, "PS": 1, "PCF": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 2002,
    text: "Faut-il limiter la vitesse sur autoroute à 110 km/h ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une mesure visant à réduire les émissions de CO2 et la consommation de carburant en abaissant la vitesse maximale autorisée sur les autoroutes.",
    positions: { "EELV": 2, "LFI": 2, "Générations": 2, "NPA": 2, "LO": 2, "PS": 1, "PCF": 1, "PRG": 1, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 2003,
    text: "Faut-il instaurer des péages urbains pour limiter la circulation dans les grandes villes ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1,
    description: "Une mesure visant à faire payer l'entrée des centres-villes aux véhicules les plus polluants pour financer les transports en commun et réduire la congestion.",
    positions: { "EELV": 2, "Générations": 2, "PS": 2, "Renaissance": 1, "Modem": 1, "Horizons": 0, "LFI": -1, "PCF": -1, "RN": -2, "LR": -2, "UDR": -2, "Reconquête": -2, "Debout la France": -2 }
  },
{
    id: 2004,
    text: "Faut-il rendre les transports en commun gratuits dans les grandes agglomérations ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['justice-sociale', 'ecologie'],
    direction: -1, 
    description: "Une mesure visant à supprimer le paiement pour l'accès aux bus, métros ou trams, pour des raisons sociales (pouvoir d'achat) et écologiques (réduire la place de la voiture).",
    positions: { "LFI": 2, "PCF": 2, "EELV": 2, "NPA": 2, "LO": 2, "Générations": 2, "PS": 1, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -2, "LR": -2, "UDR": -2, "RN": -1, "Reconquête": -2, "Debout la France": -2 }
  },
 {
    id: 2005,
    text: "Faut-il rétablir la limitation de vitesse à 90 km/h sur la plupart des routes départementales ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ruralite'],
    tags_secondaires: ['liberalisme-economique'],
    direction: 1,
    description: "Un débat qui oppose la sécurité routière et l'écologie (arguments pour le 80 km/h) à la liberté des automobilistes et à la praticité des déplacements en zone rurale (arguments pour le 90 km/h).",
    positions: { "RN": 2, "Reconquête": 2, "Debout la France": 2, "LR": 2, "UDR": 2, "Renaissance": -1, "Modem": -2, "Horizons": -2, "PS": 0, "PCF": 0, "PRG": 0, "LFI": -2, "EELV": -2, "Générations": -2, "NPA": -2, "LO": -2 }
  },
  {
    id: 2006,
    text: "Faut-il supprimer les Régions et les Métropoles ?",
    importance: 1.5,
    axis: 'societal',
    tags_primaires: [],
    direction: 1,
    description: "Une proposition de choc de simplification visant à supprimer les échelons administratifs des Régions et des Métropoles pour ne conserver que les Communes et les Départements.",
    positions: { "UDR": 2, "Reconquête": 2, "Debout la France": 2, "RN": 0, "LR": -1, "LFI": 0, "PCF": 0, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "PS": -2, "EELV": -2, "NPA": -2, "LO": -2, "Générations": -2, "PRG": -2 }
  },
{
    id: 2007,
    text: "Une commune fusionnée de force doit-elle pouvoir plus facilement retrouver son indépendance ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['ruralite'],
    tags_secondaires: ['patrimoine'],
    direction: 1,
    description: "Une proposition pour permettre aux anciennes communes, regroupées au sein de communes nouvelles, de redevenir des communes à part entière avec leur propre maire.",
    positions: { "RN": 1, "Debout la France": 2, "LFI": 2, "PCF": 2, "LR": 1, "UDR": 1, "Reconquête": 2, "PS": 0, "PRG": 0, "Renaissance": -2, "Modem": -2, "Horizons": -2, "UDI": -2, "EELV": -2 }
  },
{
    id: 2008,
    text: "Faut-il supprimer le permis à points ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: [],
    direction: -1, 
    description: "Une proposition visant à mettre fin au système de retrait de points sur le permis de conduire, jugé répressif par ses détracteurs.",
    positions: { "Reconquête": 2, "Debout la France": 2, "RN": 2, "LFI": 1, "Renaissance": -2, "PS": -2, "EELV": -2, "LR": -2, "Modem": -2, "Horizons": -2, "PCF": -2, "NPA": 0, "LO": 0, "Générations": -2, "PRG": -2, "UDR": -2 }
  },
 {
    id: 2009,
    text: "Faut-il maintenir et étendre les Zones à Faibles Émissions (ZFE) ?",
    importance: 1.25,
    axis: 'societal',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une mesure visant à interdire progressivement la circulation des véhicules les plus polluants dans les grandes agglomérations pour améliorer la qualité de l'air.",
    positions: { "EELV": 2, "Générations": 2, "PS": 2, "Renaissance": 2, "Modem": 2, "Horizons": 1, "UDI": 2, "PRG": 1, "LFI": -1, "PCF": -2, "RN": -2, "LR": -2, "Reconquête": -2, "Debout la France": -2, "UDR": -2, "NPA": -2, "LO": -2 }
  },
 {
    id: 2010,
    text: "Faut-il taxer le kérosène des avions pour les vols commerciaux ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['ecologie', 'fiscalite-juste'],
    direction: -1,
    description: "Une proposition visant à mettre fin à l'exonération fiscale sur le carburant des avions, pour réduire le trafic aérien et son impact climatique.",
    positions: { "EELV": 2, "LFI": 2, "PS": 2, "PCF": 2, "NPA": 2, "LO": 2, "Générations": 2, "PRG": 1, "Renaissance": -1, "Modem": -1, "Horizons": -1, "UDI": -1, "LR": -2, "UDR": -2, "RN": -2, "Reconquête": -2, "Debout la France": -2 }
  },
  {
    id: 2011,
    text: "Faut-il investir dans les voitures à hydrogène plutôt que dans le tout-électrique ?",
    importance: 1.0,
    axis: 'societal',
    tags: ['ecologie'],
    direction: 1, // Souvent une vision pro-industrie vs. pro-décroissance
    description: "Une orientation stratégique pour la mobilité du futur.",
    positions: { "LR": 1, "Renaissance": 0, "EELV": 0, "LFI": 0, "RN": 0 }
  },
  {
    id: 2012,
    text: "Faut-il interdire les SUV et les véhicules lourds en ville ?",
    importance: 1.0,
    axis: 'societal',
    tags: ['ecologie', 'securite-autorite'],
    direction: 1, // Autoritaire
    description: "Une mesure pour des raisons de sécurité, de pollution et de partage de l'espace public.",
    positions: { "EELV": 2, "LFI": 1, "PS": 1, "Renaissance": -1, "LR": -2, "RN": -2, "Reconquête": -2 }
  },
{
    id: 2013,
    text: "Faut-il relancer un grand plan de construction d'autoroutes en France ?",
    importance: 1.25,
    axis: 'economic',
    tags_primaires: ['liberalisme-economique'],
    direction: 1,
    description: "Un débat qui oppose le développement d'infrastructures routières pour désenclaver les territoires à la lutte contre l'étalement urbain et la pollution.",
    positions: { "LR": 2, "Reconquête": 2, "UDR": 2, "Debout la France": 2, "RN": 1, "Renaissance": 1, "Modem": 1, "Horizons": 1, "UDI": 1, "PCF": 0, "PS": -1, "PRG": -1, "EELV": -2, "LFI": -2, "NPA": -2, "LO": -2, "Générations": -2 }
  },
{
    id: 2014,
    text: "Faut-il subventionner l'achat d'un vélo électrique pour tous les foyers ?",
    importance: 0.75,
    axis: 'economic',
    tags_primaires: ['ecologie'],
    direction: -1, 
    description: "Une mesure d'aide financière universelle pour encourager le passage à la mobilité douce, en finançant une partie de l'achat pour chaque foyer, sans condition de revenus.",
    positions: { "EELV": 2, "PS": 2, "LFI": 2, "PCF": 2, "Générations": 2, "NPA": 2, "LO": 2, "PRG": 2, "Renaissance": 1, "Modem": 1, "Horizons": 0, "UDI": 1, "RN": -1, "Debout la France": -1, "LR": -2, "UDR": -2, "Reconquête": -2 }
  },
{
    id: 2015,
    text: "Faut-il donner plus de pouvoir aux maires en matière d'urbanisme et d'aménagement ?",
    importance: 1.0,
    axis: 'societal',
    tags_primaires: ['respect-institutions'],
    direction: 1,
    description: "Une politique de décentralisation pour que les décisions d'urbanisme (permis de construire, etc.) soient prises au plus près du terrain par les élus locaux.",
    positions: { "Horizons": 2, "LR": 2, "UDI": 2, "PS": 1, "PRG": 1, "Renaissance": 1, "Modem": 1, "LFI": -1, "EELV": -1, "PCF": -2, "RN": 0, "Reconquête": 1, "Debout la France": 1, "NPA": -2, "LO": -2, "Générations": -1 }
  },
];
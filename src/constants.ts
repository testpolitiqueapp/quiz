// src/constants.ts

// --- PRISMES THÉMATIQUES ---
export const PRISMS_DATA: { [key: string]: { name: string; icon: string; description: string; } } = {
  'ecologie': { name: 'Préservation de l’environnement', icon: 'Flower', description: "Les questions environnementales sont au cœur de vos préoccupations." },
  'condition-animale': { name: 'Protection animale', icon: 'PawPrint', description: "Vous montrez un intérêt marqué pour la cause et le bien-être des animaux." },
  'souverainete': { name: 'Indépendance nationale', icon: 'FlagTriangleRight', description: "L'indépendance nationale est un sujet central pour vous." },
  'securite-autorite': { name: 'Ordre et sécurité', icon: 'ShieldCheck', description: "Les thématiques liées à l'ordre, la sécurité et l'autorité de l'État retiennent particulièrement votre attention." },
  'justice-sociale': { name: 'Justice sociale', icon: 'HeartPulse', description: "La lutte contre les inégalités et la protection des plus faibles est un moteur important de vos opinions." },
  'progressisme-societal': { name: 'Progrès sociétal', icon: 'UserCheck', description: "Vous êtes particulièrement sensible à l'avancée des libertés individuelles et des droits sociétaux." },
  'immigration-controlee': { name: 'Maîtrise de l’immigration', icon: 'Lock', description: "Les questions liées à l'immigration et à la défense de l'identité nationale sont primordiales pour vous." },
  'laicite-stricte': { name: 'Défense de la laïcité', icon: 'Church', description: "Vous êtes très attaché(e) à une vision stricte de la séparation des Églises et de l'État." },
  'europe-integree': { name: 'Construction européenne', icon: 'Star', description: "Le renforcement de l'Union Européenne est un aspect essentiel de votre vision politique." },
  'liberalisme-economique': { name: 'Liberté économique', icon: 'Factory', description: "La liberté d'entreprendre et une fiscalité avantageuse pour les entreprises sont au centre de vos convictions." },
  'humanisme': { name: 'Solidarité humaine', icon: 'HeartHandshake', description: "Vous êtes attaché(e) à la dignité humaine, à la solidarité et à la lutte contre toutes les formes d’exclusion." },
  'ruralite': { name: 'Défense de la ruralité', icon: 'Tractor', description: "Vous défendez la vie, les services et les enjeux spécifiques aux territoires ruraux." },
  'patrimoine': { name: 'Valeurs traditionelles', icon: 'Castle', description: "La préservation du patrimoine, de l’histoire et des traditions nationales est une priorité pour vous." },
  'jeunesse': { name: 'Avenir de la jeunesse', icon: 'Baby', description: "Vous placez la jeunesse, son avenir et ses conditions de vie au centre de vos priorités." },
  'fiscalite-juste': { name: 'Justice fiscale', icon: 'ReceiptEuro', description: "Vous êtes sensible à la redistribution des richesses et souhaitez un impôt plus progressif pour les revenus élevés." },
  'innovation-technologique': { name: 'Progrès technologique', icon: 'Bot', description: "Vous valorisez l’innovation, le progrès technologique et la recherche scientifique." },
  'respect-institutions': { name: 'Respect des institutions', icon: 'Landmark', description: "Vous accordez une grande importance aux institutions de la République. Vous considérez qu’elles sont le socle de la vie collective." },
  'independance-energetique': { name: 'Indépendance énergétique', icon: 'Atom', description: "Vous êtes favorable à une stratégie énergétique souveraine pour la France." },
  'education-nationale': { name: 'Autorité de l’école', icon: 'BookText', description: "Vous êtes attaché(e) à l’école publique, au savoir, à l’autorité des professeurs et à la transmission des connaissances." },
  'rigueur-budgetaire': { name: 'Rigueur budgétaire', icon: 'Wallet', description: "Vous souhaitez un État plus sobre, qui réduit le gaspillage et contrôle ses finances pour éviter l’endettement." },
  'fermete-justice': { name: 'Fermeté de la justice', icon: 'Scale', description: "Vous considérez que la justice doit être rapide, ferme et pleinement appliquée pour garantir l’autorité de l’État." },
  'culture-inclusive': { name: 'Culture inclusive', icon: 'Rainbow', description: "Vous avez une culture qui reflète la diversité des parcours, des origines, des genres et des vécus." },
  'radicalite': { name: 'Esprit de rupture', icon: 'Zap', description: "Vous considérez qu'il faut un changement profond du système actuel. Vous êtes en faveur de mesures de rupture." },
  'feminisme': { name: 'Défense des femmes', icon: 'Venus', description: "Vous êtes particulièrement sensible à l'égalité entre les femmes et les hommes et les droits des femmes." }

};

// --- VALEURS DE RÉPONSE AU QUIZ ---
export const ANSWER_VALUES = {
  'Tout à fait d\'accord': 2,
  'Plutôt d\'accord': 1,
  'Neutre': 0,
  'Plutôt pas d\'accord': -1,
  'Pas du tout d\'accord': -2
};

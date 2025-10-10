import type { Question } from './types';

// Import all 20 category files
import { economieQuestions } from './categories/01-economie';
import { travailQuestions } from './categories/02-travail';
import { santeQuestions } from './categories/03-sante';
import { logementQuestions } from './categories/04-logement';
import { securiteJusticeQuestions } from './categories/05-securite-justice';
import { immigrationNationaliteQuestions } from './categories/06-immigration-nationalite';
import { institutionsDemocratieQuestions } from './categories/07-institutions-democratie';
import { affairesEtrangeresDefenseQuestions } from './categories/08-affaires-etrangeres-defense';
import { ecologieEnergieQuestions } from './categories/09-ecologie-energie';
import { agricultureAlimentationQuestions } from './categories/10-agriculture-alimentation';
import { numeriqueTechnologiesQuestions } from './categories/11-numerique-technologies';
import { educationQuestions } from './categories/12-education';
import { enseignementSuperieurQuestions } from './categories/13-enseignement-superieur';
import { conditionAnimaleQuestions } from './categories/14-condition-animale';
import { cultureQuestions } from './categories/15-culture';
import { droitsLaiciteQuestions } from './categories/16-droits-laicite';
import { familleJeunesseQuestions } from './categories/17-famille-jeunesse';
import { europeQuestions } from './categories/18-europe';
import { servicesPublicsQuestions } from './categories/19-services-publics';
import { transportsAmenagementQuestions } from './categories/20-transports-amenagement';

export const QUESTIONS_BY_CATEGORY = {
  "Économie & Fiscalité": { icon: "BadgeEuro", questions: economieQuestions, color: "#0d9488" }, 
  "Travail & Protection Sociale": { icon: "Briefcase", questions: travailQuestions, color: "#4338ca" }, 
  "Santé": { icon: "Heart", questions: santeQuestions, color: "#eb2b2b" }, 
  "Logement": { icon: "Home", questions: logementQuestions, color: "#24D26D" }, 
  "Sécurité & Justice": { icon: "Scale", questions: securiteJusticeQuestions, color: "#475569" }, 
  "Immigration & Nationalité": { icon: "Globe", questions: immigrationNationaliteQuestions, color: "#06b6d4" }, 
  "Institutions & Démocratie": { icon: "Landmark", questions: institutionsDemocratieQuestions, color: "#2563eb" }, 
  "Affaires Étrangères & Défense": { icon: "ShieldCheck", questions: affairesEtrangeresDefenseQuestions, color: "#48b0c0" }, 
  "Écologie & Énergie": { icon: "Leaf", questions: ecologieEnergieQuestions, color: "#7abe1a" }, 
  "Agriculture & Alimentation": { icon: "Tractor", questions: agricultureAlimentationQuestions, color: "#da9608" }, 
  "Numérique & Technologies": { icon: "Cpu", questions: numeriqueTechnologiesQuestions, color: "#7c3aed" }, 
  "Éducation": { icon: "GraduationCap", questions: educationQuestions, color: "#7D4FFE" }, 
  "Enseignement Supérieur": { icon: "FlaskConical", questions: enseignementSuperieurQuestions, color: "#C49FFF" }, 
  "Condition Animale": { icon: "PawPrint", questions: conditionAnimaleQuestions, color: "#c71de1" },
  "Culture": { icon: "Clapperboard", questions: cultureQuestions, color: "#db0000" }, 
  "Droits & Laïcité": { icon: "Users", questions: droitsLaiciteQuestions, color: "#a1a1aa" }, 
  "Famille & Jeunesse": { icon: "Baby", questions: familleJeunesseQuestions, color: "#ec4899" }, 
  "Europe": { icon: "Star", questions: europeQuestions, color: "#1f3bc0" }, 
  "Services Publics": { icon: "Building", questions: servicesPublicsQuestions, color: "#71717a" }, 
  "Transports & Aménagement": { icon: "Network", questions: transportsAmenagementQuestions, color: "#f97316" }, 
};

// EXPORT
export const QUESTIONS: Question[] = Object.values(QUESTIONS_BY_CATEGORY)
  .flatMap(category => category.questions);
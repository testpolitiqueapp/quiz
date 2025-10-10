import type { LucideProps } from 'lucide-react';
import {
  BadgeEuro, Briefcase, Scale, Globe, Leaf, Landmark, Star, GraduationCap,
  Heart, Building, Home, Tractor, ShieldCheck, Clapperboard, Users, Cpu,
  PawPrint, FlaskConical, Baby, Network
} from 'lucide-react';

// Constantes
export const icons: { [key: string]: React.FC<LucideProps> } = {
  BadgeEuro, Briefcase, Scale, Globe, Leaf, Landmark, Star, GraduationCap,
  Heart, Building, Home, Tractor, ShieldCheck, Clapperboard, Users, Cpu,
  PawPrint, FlaskConical, Baby, Network
};

export const THEME_ICONS_MAP: { [key: string]: string } = {
  "Économie & Fiscalité": "BadgeEuro", "Travail & Protection Sociale": "Briefcase", "Santé": "Heart",
  "Logement": "Home", "Sécurité & Justice": "Scale", "Immigration & Nationalité": "Globe",
  "Institutions & Démocratie": "Landmark", "Affaires Étrangères & Défense": "ShieldCheck",
  "Écologie & Énergie": "Leaf", "Agriculture & Alimentation": "Tractor", "Numérique & Technologies": "Cpu",
  "Éducation": "GraduationCap", "Enseignement Supérieur": "FlaskConical", "Condition Animale": "PawPrint",
  "Culture": "Clapperboard", "Droits & Laïcité": "Users", "Famille & Jeunesse": "Baby", "Europe": "Star",
  "Services Publics": "Building", "Transports & Aménagement": "Network",
};
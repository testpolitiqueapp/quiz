// --- Composants avec EXPORT NOMMÉ ---
export * from './ActionButtons';
export * from './AnalysisHeader'; 
export * from './BiggestDisagreement';
export * from './ProfileHeader';
export * from './PositionnementPolitique'; 

// --- Composants avec EXPORT PAR DÉFAUT  ---
export { default as ResultScreen } from './ResultScreen';
export { default as ThemesPrioritaires } from './ThemesPrioritaires';
export { default as TempsDeReponse } from './TempsDeReponse';
export { default as AnalyseConviction } from './AnalyseConviction';
export { default as PrismesPolitiques } from './PrismesPolitiques';

// Composant utilitaire de ResultScreen
export { CategoryIcon } from './ResultScreen';
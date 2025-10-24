import React, { useState, useEffect } from 'react';
import { PARTIES, type Party } from '../../parties'; 
import { GlassTile } from '../ui/GlassTile';
import { twMerge } from 'tailwind-merge';
import { Trophy } from 'lucide-react'; // Ajout de l'icône Trophée

interface ProfileHeaderProps {
  finalProfile: Party; 
  animatedPercentage: number;
  isDark: boolean;
  themeClasses: { 
    text: { primary: string; secondary: string; };
  };
}

// Fonction pour déterminer la couleur de texte contrastée (blanc ou sombre)
const getContrastColor = (hexColor: string): string => {
  if (!hexColor || hexColor.length < 7) return '#FFFFFF';
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  // Calcul de la luminance (standard W3C)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
  // Seuil pour choisir entre texte sombre (#111827) et blanc (#FFFFFF)
  return luminance > 160 ? '#111827' : '#FFFFFF';
};

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  finalProfile,
  animatedPercentage,
  isDark,
  themeClasses,
}) => {
  const [selectedPersonality, setSelectedPersonality] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState('');

  // États d'animation
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(mountTimer);
  }, []);

  const partyColor = finalProfile?.color?.[isDark ? 'dark' : 'light'] || '#71717a';

  const getPartyLogo = (partyId: string, theme: 'light' | 'dark' = isDark ? 'dark' : 'light') => {
    const party = PARTIES.find(p => p.id === partyId);
    if (party?.logo && typeof party.logo === 'object') return party.logo[theme];
    return `/images/logospartis/${theme}/${partyId}.png`;
  };

  useEffect(() => {
    const partyData = finalProfile;
    if (partyData?.personality) {
      const personalities = partyData.personality.split(',').map(s => s.trim());
      const personalityPhotos = partyData.personalityPhotos || [];
      if (personalities.length > 0) {
        const randomIndex = Math.floor(Math.random() * personalities.length);
        setSelectedPersonality(personalities[randomIndex]);
        setSelectedPhoto(personalityPhotos[randomIndex] || personalityPhotos[0]);
      }
    }
  }, [finalProfile]); 

  const [showWaves, setShowWaves] = useState(false);
  useEffect(() => {
    const wavesTimer = setTimeout(() => setShowWaves(true), 1500); 
    return () => clearTimeout(wavesTimer);
  }, []);

  if (!finalProfile) {
    return null;
  }

  // En-tête (style cohérent)
  const renderHeader = () => (
    <div className="relative p-6 sm:p-8"> {/* Padding standardisé */}
      <div className="flex items-start gap-5">
        
        {/* Icône d'en-tête (style cohérent) */}
        <div className={twMerge(
          "group relative flex items-center justify-center w-14 h-14 rounded-3xl", // Taille et forme
          "transition-all duration-500 flex-shrink-0",
          "bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800", // BG neutre
          isHovered ? "scale-110 -rotate-6" : "scale-100 rotate-0", // Effet de survol
          "shadow-lg hover:shadow-2xl",
          "ring-1 ring-black/5 dark:ring-white/10" // Ring
        )}>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/40 to-transparent opacity-60" />
          <Trophy // Icône thématique pour le top parti
            className={twMerge(
              "w-7 h-7 text-slate-700 dark:text-slate-200 drop-shadow-sm relative z-10", // Style d'icône
              "transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100" // Animation icône
            )} 
          />
          {/* Cercles décoratifs animés */}
          <div className={twMerge(
            "absolute inset-0 rounded-3xl border-2 border-slate-300/20 dark:border-slate-600/20",
            "transition-all duration-700",
            isHovered ? "scale-125 opacity-0" : "scale-100 opacity-100"
          )} />
        </div>
        
        {/* Titres (style cohérent) */}
        <div className="flex-1 min-w-0">
          <h3 className={twMerge(
            "text-2xl font-extrabold tracking-tight leading-tight", // Taille et graisse
            "bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-300", // Dégradé
            "bg-clip-text text-transparent" // Effet de texte
          )}>
            Parti le plus proche
          </h3>
          <p className={twMerge(
            "text-xs mt-1 font-medium tracking-wide uppercase", // Style sous-titre
            themeClasses.text.secondary,
            "opacity-60"
          )}>
            Votre plus grande proximité
          </p>
        </div>
      </div>
    </div>
  );

  return (
    // ======= CORRECTION ICI =======
    // 1. On crée un <div> conteneur
    <div
      className={twMerge(
        "transition-all duration-700 ease-out", // Animation d'apparition
        !isMounted ? "opacity-0 translate-y-8 scale-[0.98]" : "opacity-100 translate-y-0 scale-100"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlassTile 
        partyId={finalProfile.id} 
        isDark={isDark} 
        className={twMerge(
          "overflow-hidden p-0", 
          "profile-entry-slide"
          // 2. On retire les classes d'animation et les événements d'ici
        )} 
      >
        {renderHeader()}

        {/* Contenu "Spotlight" (padding standardisé) */}
        <div className="px-6 sm:px-8 pb-6 sm:pb-8">
          <div className="text-center mb-8">
            {/* L'ancien h2 est supprimé (géré par l'en-tête) */}
            <h1 className={twMerge(
              "text-4xl sm:text-5xl font-bold leading-none mb-4 tracking-tight",
              themeClasses.text.primary
            )}>
              {finalProfile.name}
            </h1>
            
            <p className={twMerge(
              "text-base max-w-2xl mx-auto leading-snug transition-all duration-700",
              themeClasses.text.secondary
            )}>
              {finalProfile.description}
            </p>
          </div>

          {/* Section Images & Badge % (inchangée) */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="relative group">
              <div 
                className={twMerge(
                  "relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden",
                  "shadow-xl transition-all duration-1000 transform",
                  "hover:scale-105 hover:shadow-2xl",
                  isDark ? 'bg-slate-800/50' : 'bg-white/80'
                )}
                style={{ boxShadow: `0 0 0 2px ${partyColor}80` }}
              >
                <div className="absolute inset-0 z-10" style={{ backgroundColor: `${partyColor}1A` }} />
                <img 
                  src={getPartyLogo(finalProfile.id)} 
                  alt={`Logo ${finalProfile.name}`} 
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              </div>

              <div className={twMerge(
                "absolute -bottom-3 -right-3 transition-all duration-700 delay-500"
              )}>
                {showWaves && (
                  <>
                    <div 
                      className="absolute inset-0 animate-wave-1 rounded-2xl"
                      style={{ 
                        backgroundColor: `${partyColor}66`,
                        boxShadow: `0 0 20px ${partyColor}80`
                      }}
                    ></div>
                    <div 
                      className="absolute inset-0 animate-wave-2 rounded-2xl"
                      style={{ 
                        backgroundColor: `${partyColor}4D`,
                        boxShadow: `0 0 15px ${partyColor}60`
                      }}
                    ></div>
                    <div 
                      className="absolute inset-0 animate-wave-3 rounded-2xl"
                      style={{ 
                        backgroundColor: `${partyColor}33`,
                        boxShadow: `0 0 10px ${partyColor}40`
                      }}
                    ></div>
                  </>
                )}
                
                <div className={twMerge(
                  "relative px-4 py-2 rounded-2xl font-bold text-sm z-10",
                  "shadow-lg ring-1 ring-white/20",
                  "transition-all duration-300 transform hover:scale-110"
                )} 
                style={{ 
                  backgroundColor: partyColor,
                  color: getContrastColor(partyColor),
                  boxShadow: `0 8px 32px ${partyColor}aa, 0 0 20px ${partyColor}40`,
                }}>
                  {Math.round(animatedPercentage || 0)}%
                </div>
              </div>
            </div>

            {selectedPhoto && (
              <div className="relative group">
                {/* --- MODIFIÉ : Remplacement de ring-1 par style={{ boxShadow: ... }} --- */}
                <div 
                  className={twMerge(
                    "relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden",
                    "shadow-xl", // ring-1 ring-white/10 supprimé
                    "transition-all duration-1000 delay-200 transform",
                    "hover:scale-105 hover:shadow-2xl",
                    isDark ? 'bg-slate-800/50' : 'bg-white/80'
                  )}
                  style={{ // Bordure neutre ajoutée, cohérente avec BiggestDisagreement
                    boxShadow: `0 0 0 2px ${isDark ? 'rgba(100, 116, 139, 0.5)' : 'rgba(203, 213, 225, 0.8)'}`
                  }}
                >
                  <img 
                    src={selectedPhoto} 
                    alt={selectedPersonality} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            )}
          </div>

          {/* Section Badges (Chips) (style cohérent) */}
          <div className={twMerge(
            "flex flex-wrap justify-center items-center gap-2 transition-all duration-800"
          )}>
            <div className={twMerge(
              "inline-block px-3 py-1.5 rounded-xl",
              "font-medium text-xs",
              "bg-slate-100 dark:bg-slate-800",
              "border border-slate-200 dark:border-slate-700",
              themeClasses.text.primary
            )}>
              {finalProfile.orientation}
            </div>

            {selectedPersonality && (
              <div className={twMerge(
                "inline-block px-3 py-1.5 rounded-xl",
                "font-medium text-xs tracking-wide",
                "bg-slate-100 dark:bg-slate-800",
                "border border-slate-200 dark:border-slate-700",
                themeClasses.text.primary
              )}>
                {selectedPersonality}
              </div>
            )}
          </div>
        </div>
      </GlassTile>
    </div>
    // ======= FIN DE LA CORRECTION =======
  );
};
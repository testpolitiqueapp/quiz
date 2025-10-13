import React, { useState, useEffect } from 'react';
import { PARTIES, type Party } from '../../parties'; 
import { GlassTile } from '../ui/GlassTile';
import { twMerge } from 'tailwind-merge';

interface ProfileHeaderProps {
  finalProfile: Party; 
  animatedPercentage: number;
  isDark: boolean;
  themeClasses: { 
    text: { primary: string; secondary: string; };
  };
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  finalProfile,
  animatedPercentage,
  isDark,
  themeClasses,
}) => {
  const [selectedPersonality, setSelectedPersonality] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState('');

  const partyColor = finalProfile?.color?.[isDark ? 'dark' : 'light'] || '#71717a';

  // Style pour la lueur de fond subtile
  const backgroundGlowStyle = {
    backgroundImage: `radial-gradient(ellipse 150% 200% at 50% 120%, ${partyColor}15, transparent 70%)`,
  };

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

  return (
    // --- MODIFICATION 1 : Padding retiré d'ici et overflow-hidden ajouté ---
    <GlassTile 
      partyId={finalProfile.id} 
      isDark={isDark} 
      className={twMerge("overflow-hidden p-0", "profile-entry-slide")} 
    >
      {/* --- AJOUT : Lueur de fond subtile --- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70 dark:opacity-100"
        style={backgroundGlowStyle}
      />
      
      {/* --- MODIFICATION 2 : Padding ajouté à ce wrapper de contenu --- */}
      <div className="relative p-6 sm:p-8">
        <div className="text-center mb-8">
          <h2 className={twMerge(
            "text-xl font-semibold mb-3 transition-all duration-500 tracking-tight",
            themeClasses.text.secondary
          )}>
            Votre parti le plus proche :
          </h2>

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
                "relative px-4 py-2 rounded-2xl font-bold text-sm text-white z-10",
                "shadow-lg ring-1 ring-white/20",
                "transition-all duration-300 transform hover:scale-110"
              )} 
              style={{ 
                backgroundColor: partyColor,
                boxShadow: `0 8px 32px ${partyColor}aa, 0 0 20px ${partyColor}40`,
              }}>
                {Math.round(animatedPercentage || 0)}%
              </div>
            </div>
          </div>

          {selectedPhoto && (
            <div className="relative group">
              <div className={twMerge(
                "relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden",
                "ring-1 ring-white/10 shadow-xl",
                "transition-all duration-1000 delay-200 transform",
                "hover:scale-105 hover:shadow-2xl",
                isDark ? 'bg-slate-800/50' : 'bg-white/80'
              )}>
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

        <div className={twMerge(
          "flex flex-wrap justify-center items-center gap-2 transition-all duration-800"
        )}>
          <div className={twMerge(
            "group relative px-4 py-2 rounded-full",
            "bg-gradient-to-r from-slate-100/80 to-white/60 dark:from-slate-800/50 dark:to-slate-700/30",
            "ring-1 ring-slate-200/50 dark:ring-slate-600/50",
            "transition-all duration-300 hover:scale-105 hover:shadow-lg"
          )}>
            <div className="flex items-center gap-2">
              <span className={twMerge(
                "font-semibold text-sm tracking-tight",
                isDark ? 'text-slate-200' : 'text-slate-700'
              )}>
                {finalProfile.orientation}
              </span>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {selectedPersonality && (
            <div className={twMerge(
              "group relative px-4 py-2 rounded-full",
              "bg-gradient-to-r from-slate-100/80 to-white/60 dark:from-slate-800/50 dark:to-slate-700/30",
              "ring-1 ring-slate-200/50 dark:ring-slate-600/50",
              "transition-all duration-300 hover:scale-105 hover:shadow-lg"
            )}>
              <div className="flex items-center gap-2">
                <span className={twMerge(
                  "font-semibold text-sm tracking-tight",
                  isDark ? 'text-slate-200' : 'text-slate-700'
                )}>
                  {selectedPersonality}
                </span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
        </div>
      </div>
    </GlassTile>
  );
};
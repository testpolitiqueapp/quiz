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

  return (
    <GlassTile 
      partyId={finalProfile.id} 
      isDark={isDark} 
      className={twMerge("overflow-hidden p-6 sm:p-8", "profile-entry-slide")} 
    >
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
          <div className={twMerge(
            "relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden",
            "ring-2 ring-emerald-400/50 shadow-xl", 
            "transition-all duration-1000 transform",
            "hover:scale-105 hover:shadow-2xl",
            isDark ? 'bg-slate-800/50' : 'bg-white/80'
          )}>
            <div className="absolute inset-0 bg-emerald-500/10 z-10" />
            <img 
              src={getPartyLogo(finalProfile.id)} 
              alt={`Logo ${finalProfile.name}`} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
          </div>

          <div className={twMerge(
            "absolute -bottom-3 -right-3 transition-all duration-700 delay-500"
          )}>
            {showWaves && (
              <>
                <div 
                  className="absolute inset-0 animate-wave-1 rounded-2xl bg-emerald-500/40"
                  style={{ 
                    boxShadow: `0 0 20px #10b98180`
                  }}
                ></div>
                <div 
                  className="absolute inset-0 animate-wave-2 rounded-2xl bg-emerald-500/30"
                  style={{ 
                    boxShadow: `0 0 15px #10b98160`
                  }}
                ></div>
                <div 
                  className="absolute inset-0 animate-wave-3 rounded-2xl bg-emerald-500/20"
                  style={{ 
                    boxShadow: `0 0 10px #10b98140`
                  }}
                ></div>
              </>
            )}
            
            <div className={twMerge(
              "relative px-4 py-2 rounded-2xl font-bold text-sm text-white z-10",
              "shadow-lg ring-1 ring-white/20",
              "bg-emerald-600 transition-all duration-300 transform",
              "hover:scale-110"
            )} 
            style={{ 
              boxShadow: `0 8px 32px #059669aa, 0 0 20px #10b98140`,
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
    </GlassTile>
  );
};
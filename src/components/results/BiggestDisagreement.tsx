import React, { useState, useEffect } from 'react'; 
import { PARTIES, type Party } from '../../parties'; 
import { GlassTile } from '../ui/GlassTile';
import { twMerge } from 'tailwind-merge';

interface PartyResult extends Party {
    percentage: number;
}

interface BiggestDisagreementProps {
  party: PartyResult;
  isDark: boolean;
  themeClasses: {
    text: { primary: string; secondary: string; };
    border: { main: string; };
  };
}

const getPartyLogo = (partyId: string, theme: 'light' | 'dark' = 'light') => {
    const partyData = PARTIES.find(p => p.id === partyId);
    if (partyData?.logo && typeof partyData.logo === 'object') return partyData.logo[theme];
    return `/images/logospartis/${theme}/${partyId}.png`;
};

export const BiggestDisagreement: React.FC<BiggestDisagreementProps> = ({
  party,
  isDark,
  themeClasses,
}) => {
    const [selectedPersonality, setSelectedPersonality] = useState('');
    const [selectedPhoto, setSelectedPhoto] = useState('');

    useEffect(() => {
        const partyData = PARTIES.find(p => p.id === party.id);
        
        if (partyData?.personality) {
            const personalities = partyData.personality.split(',').map(s => s.trim());
            const personalityPhotos = partyData.personalityPhotos || [];
            if (personalities.length > 0) {
                const randomIndex = Math.floor(Math.random() * personalities.length);
                setSelectedPersonality(personalities[randomIndex]);
                setSelectedPhoto(personalityPhotos[randomIndex] || personalityPhotos[0]);
            }
        }
    }, [party]);

    if (!party) return null;

    return (
        <GlassTile partyId={party.id} isDark={isDark} className="overflow-hidden p-6 sm:p-8">
            <div className="text-center mb-8">
                <h2 className={twMerge(
                    "text-xl font-semibold mb-2 tracking-tight",
                    themeClasses.text.secondary
                )}>
                    Votre parti le plus éloigné :
                </h2>

                <h1 className={twMerge(
                    "text-4xl sm:text-5xl font-bold leading-none mb-4 tracking-tight",
                    themeClasses.text.primary
                )}>
                    {party.name}
                </h1>
                
                <p className={twMerge(
                    "text-base max-w-2xl mx-auto leading-snug",
                    themeClasses.text.secondary
                )}>
                    Le parti avec lequel vous êtes le moins d'accord sur les sujets abordés
                </p>
            </div>

            <div className="flex items-center justify-center gap-3 mb-8">
                <div className="relative group">
                    <div className={twMerge(
                        "relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden",
                        "ring-2 ring-red-400/50 shadow-xl", 
                        "transition-all duration-300 transform", 
                        "hover:scale-105 hover:shadow-2xl",
                        isDark ? 'bg-slate-800/50' : 'bg-white/80'
                    )}>
                        <div className="absolute inset-0 bg-red-500/10 z-10" />
                        <img 
                            src={getPartyLogo(party.id, isDark ? 'dark' : 'light')} 
                            alt={`Logo ${party.name}`} 
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                    </div>
                </div>

                {selectedPhoto && (
                    <div className="relative group">
                        <div className={twMerge(
                            "relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden",
                            "ring-1 ring-white/10 shadow-xl",
                            "transition-all duration-300 transform",
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
                "flex flex-wrap justify-center items-center gap-2"
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
                            {party.orientation}
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
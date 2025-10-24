import React, { useState, useEffect } from 'react';
import { PARTIES, type Party } from '../../parties';
import { GlassTile } from '../ui/GlassTile';
import { twMerge } from 'tailwind-merge';
// Ajout de ShieldX pour l'en-tête, X est conservé pour le badge
import { X, ShieldX } from 'lucide-react'; 

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

    // États d'animation
    const [isMounted, setIsMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const mountTimer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(mountTimer);
    }, []);

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
                <ShieldX // Icône thématique pour le désaccord
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
                Parti le plus éloigné
                </h3>
                <p className={twMerge(
                "text-xs mt-1 font-medium tracking-wide uppercase", // Style sous-titre
                themeClasses.text.secondary,
                "opacity-60"
                )}>
                Votre plus grand désaccord
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
            onMouseEnter={() => setIsHovered(true)} // Gestion du survol
            onMouseLeave={() => setIsHovered(false)}
        >
            <GlassTile 
                partyId={party.id} 
                isDark={isDark} 
                className={twMerge(
                    "overflow-hidden p-0"
                    // 2. On retire les classes d'animation et les événements d'ici
                )}
            >
                {renderHeader()}
                
                {/* Contenu "Spotlight" conservé, mais dans un wrapper de contenu */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    {/* L'ancien h2 est supprimé car géré par le nouvel en-tête */}
                    <div className="text-center mb-8">
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

                    {/* Section Images (inchangée) */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="relative group">
                            <div className={twMerge(
                                "relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden",
                                "shadow-xl",
                                "transition-all duration-300 transform", 
                                "group-hover:scale-[1.02] group-hover:shadow-2xl",
                                isDark ? 'bg-slate-800/50' : 'bg-white/80'
                            )}
                            style={{ 
                                filter: 'grayscale(80%)',
                                boxShadow: `0 0 0 2px ${isDark ? 'rgba(100, 116, 139, 0.5)' : 'rgba(203, 213, 225, 0.8)'}`
                            }}
                            >
                                <img 
                                    src={getPartyLogo(party.id, isDark ? 'dark' : 'light')} 
                                    alt={`Logo ${party.name}`} 
                                    className="w-full h-full object-cover" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                            </div>
                            <div className="absolute -bottom-3 -right-3 z-30">
                                {/* --- MODIFIÉ : Classes exactes de AnalyseConviction --- */}
                                <div className={twMerge(
                                    "relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg ring-1 ring-white/10 flex-shrink-0",
                                    "bg-gradient-to-br from-red-500 to-rose-600"
                                )}>
                                    <X 
                                        className="w-6 h-6 text-white drop-shadow-sm z-10"
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" /> 
                                </div>
                            </div>
                        </div>

                        {selectedPhoto && (
                            <div className="relative group">
                                <div 
                                    className={twMerge(
                                        "relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden",
                                        "shadow-xl",
                                        "transition-all duration-300 transform",
                                        "group-hover:scale-[1.02] group-hover:shadow-2xl",
                                        isDark ? 'bg-slate-800/50' : 'bg-white/80'
                                    )}
                                    style={{
                                        filter: 'grayscale(80%)',
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
                        "flex flex-wrap justify-center items-center gap-2"
                    )}>
                        <div className={twMerge(
                            "inline-block px-3 py-1.5 rounded-xl",
                            "font-medium text-xs tracking-wide",
                            "bg-slate-100 dark:bg-slate-800",
                            "border border-slate-200 dark:border-slate-700",
                            themeClasses.text.primary
                        )}>
                            {party.orientation}
                        </div>

                        {selectedPersonality && (
                            <div className={twMerge(
                                "inline-block px-3 py-1.5 rounded-xl",
                                "font-medium text-xs",
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
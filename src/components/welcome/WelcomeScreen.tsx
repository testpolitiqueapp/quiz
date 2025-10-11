import React, { useState, useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { GlassButton } from '../ui/GlassButton';
import { InviteButton } from '../results/InviteButton';
import { PartyLogos } from './PartyLogos';
import { twMerge } from 'tailwind-merge';

const WelcomeScreen: React.FC<{ onStart: () => void }> = ({ onStart: originalOnStart }) => {
  const [isDark, setIsDark] = useState(() => window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true);
  
  // State pour stocker le nombre de participants
  const [participantCount, setParticipantCount] = useState<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    // --- NOUVEAU : Récupérer le compteur au chargement ---
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/counter');
        const data = await response.json();
        setParticipantCount(data.count);
      } catch (error) {
        console.error("Impossible de récupérer le compteur :", error);
        setParticipantCount(1200); // Valeur par défaut en cas d'erreur
      }
    };

    fetchCount();

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // --- NOUVEAU : Fonction pour incrémenter et démarrer ---
  const handleStart = async () => {
    // On incrémente le compteur côté client pour une réactivité immédiate
    if (participantCount !== null) {
      setParticipantCount(participantCount + 1);
    }

    // On appelle l'API pour incrémenter le compteur côté serveur
    // 'fire-and-forget' : on n'attend pas la réponse pour ne pas ralentir l'utilisateur
    fetch('/api/counter', { method: 'POST' });

    // On exécute la fonction onStart originale
    originalOnStart();
  };

  const themeClasses = {
    text: {
      primary: isDark ? 'text-gray-100' : 'text-gray-900',
      secondary: isDark ? 'text-white/70' : 'text-gray-800',
    },
  };

  const CheckItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-1.5">
      <Check className={twMerge(`w-5 h-5`, isDark ? 'text-green-400' : 'text-green-500')} />
      <span>{text}</span>
    </div>
  );

  return (
    <div className="w-full font-sans">
      <div className="relative flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden text-center">
        <div className="welcome-background"></div>

        <div className="relative z-[2] flex max-w-4xl flex-col items-center px-1">
          <h1 className={`text-6xl sm:text-8xl font-extrabold ${themeClasses.text.primary} tracking-tight mt-6 mb-6 leading-none drop-shadow-md animate-fade-in-up text-balance`}>
            Quel est votre profil politique ?
          </h1>

          <p className={`text-lg ${themeClasses.text.secondary} max-w-2xl mx-auto leading-snug drop-shadow-md animate-fade-in-up delay-100`}>
            Notre algorithme analyse vos réponses pour vous situer dans le paysage politique français.
          </p>

          <div className="w-full my-5 sm:my-6 animate-fade-in-up delay-200">
            <PartyLogos isDark={isDark} />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-scale delay-300">
            <div className="flex flex-col items-center gap-2">
              <GlassButton
                onClick={handleStart} // On utilise notre nouvelle fonction
                variant="primary"
                icon={<ArrowRight className="w-10 h-10" />}
                className="px-10 py-5 text-2xl"
              >
                Commencer
              </GlassButton>
              <p className={`text-sm ${themeClasses.text.secondary} font-medium`}>
                {/* --- NOUVEAU : Affichage du compteur dynamique --- */}
                {participantCount === null ? (
                  'Chargement...' // Message pendant le chargement
                ) : (
                  `${participantCount.toLocaleString('fr-FR')} personnes ont déjà essayé !`
                )}
              </p>
            </div>
            <InviteButton variant="tertiary" />
          </div>

          <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs ${themeClasses.text.secondary} font-medium mt-6 drop-shadow-md animate-fade-in-up delay-400`}>
            <CheckItem text="Analyse gratuite en 5 minutes" />
            <CheckItem text="Résultats instantanés" />
            <CheckItem text="Aucune donnée personnelle collectée" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
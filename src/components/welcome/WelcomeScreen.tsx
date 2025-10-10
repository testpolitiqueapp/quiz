import React, { useState, useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { GlassButton } from '../ui/GlassButton';
import { InviteButton } from '../results/InviteButton';
import { PartyLogos } from './PartyLogos';
import { twMerge } from 'tailwind-merge'; 

const WelcomeScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {

  const [isDark, setIsDark] = useState(() => window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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

        <div className="relative z-[2] flex max-w-4xl flex-col items-center px-4">
          <h1 className={`text-6xl sm:text-8xl font-extrabold ${themeClasses.text.primary} tracking-tight mt-6 mb-6 leading-none drop-shadow-md animate-fade-in-up`}>
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
                onClick={onStart}
                variant="primary"
                icon={<ArrowRight className="w-10 h-10" />}
                className="px-10 py-5 text-2xl"
              >
                Commencer
              </GlassButton>
              <p className={`text-sm ${themeClasses.text.secondary} font-medium`}>
                1200 personnes ont déjà essayé !
              </p>
            </div>
            <InviteButton variant="tertiary" />
          </div>

          <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm ${themeClasses.text.secondary} font-medium mt-6 drop-shadow-md animate-fade-in-up delay-400`}>
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
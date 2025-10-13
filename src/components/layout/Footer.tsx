import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Heart, Compass } from 'lucide-react'; 

interface FooterProps {
  onLegalClick: () => void;
  onAlgorithmClick: () => void; 
  onPartiesDataClick: () => void; // NOUVELLE PROP AJOUTÉE
}

const Footer: React.FC<FooterProps> = ({ onLegalClick, onAlgorithmClick, onPartiesDataClick }) => { // Utilisation de la nouvelle prop
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const themeClasses = {
    background: {
      card: isDark ? 'bg-slate-800' : 'bg-white',
    },
    text: {
      primary: isDark ? 'text-gray-100' : 'text-gray-900',
      secondary: isDark ? 'text-white/70' : 'text-gray-600',
      muted: isDark ? 'text-white/30' : 'text-gray-400'
    },
    border: {
      main: isDark ? 'border-slate-700' : 'border-gray-400',
    },
    heart: isDark ? 'text-red-400' : 'text-red-500',
    icon: isDark ? 'text-white/70' : 'text-gray-600',
    iconHover: isDark ? 'hover:text-white' : 'hover:text-gray-900',
    linkHover: isDark ? 'hover:text-white' : 'hover:text-black',
  };

  return (
    <footer className={`w-full flex-shrink-0 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-dashed border-gray-400 dark:border-slate-600">
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start"> 
            
            <div className="relative flex items-center justify-center w-8 h-8 rounded-xl shadow-lg transition-all duration-300 mb-2 sm:mb-1">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600" />
              <Compass className="w-5 h-5 text-white drop-shadow-sm z-10" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
            </div>
            
            <p className={`text-base font-bold ${themeClasses.text.primary} leading-tight`}>
              TestPolitique.app
            </p>
            <p className={`text-xs ${themeClasses.text.secondary}`}>
              Boussole politique française
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a href="https://x.com/testpolitiqueap" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full ${themeClasses.icon} ${themeClasses.iconHover} transition-all duration-300 hover:bg-gray-100 dark:hover:bg-slate-700`}>
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/[VOTRE_PAGE]" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full ${themeClasses.icon} ${themeClasses.iconHover} transition-all duration-300 hover:bg-gray-100 dark:hover:bg-slate-700`}>
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className={`mt-6 text-center`}>
          <p className={`text-sm ${themeClasses.text.secondary} max-w-2xl mx-auto leading-snug`}>
            Notre mission est de fournir un outil pédagogique, indépendant et non partisan, basé sur l'analyse de programmes et de prises de position publiques. Le résultat est fourni à titre indicatif et ne prétend pas détenir une vérité absolue.
          </p>
        </div>
        
        <div className="mt-8">
          <div className={`text-xs ${themeClasses.text.muted} font-medium text-center`}>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span>© {new Date().getFullYear()}</span>
              <span>•</span>
              {/* LIEN "L'ALGORITHME" */}
              <button 
                type="button"
                onClick={onAlgorithmClick}
                className={`transition ${themeClasses.linkHover} cursor-pointer hover:underline`}
              >
                L'algorithme
              </button>
              <span>•</span>
              {/* NOUVEAU LIEN "TRANSPARENCE DES DONNÉES" */}
              <button 
                type="button"
                onClick={onPartiesDataClick}
                className={`transition ${themeClasses.linkHover} cursor-pointer hover:underline`}
              >
                Transparence des données
              </button>
              <span>•</span>
              {/* LIEN "MENTIONS LÉGALES" */}
              <button 
                type="button"
                onClick={onLegalClick}
                className={`transition ${themeClasses.linkHover} cursor-pointer hover:underline`}
              >
                Mentions Légales
              </button>
              <span>•</span>
              <span>
                Fait avec <Heart className={`inline w-3 h-3 mb-[2px] ${themeClasses.heart}`} /> pour la démocratie
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
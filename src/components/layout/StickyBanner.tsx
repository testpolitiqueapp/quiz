import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Compass, Info, HelpCircle, Twitter, Facebook, X, Home } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { MonochromeTile } from '../ui/MonochromeTile';
import { OpaqueGlassTile } from '../ui/OpaqueGlassTile';

const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDark(mediaQuery.matches);
      const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  return { isDark };
};

type TooltipType = 'about' | 'info' | null;

const StickyBanner: React.FC = () => {

  const { isDark } = useTheme();
  const [openTooltip, setOpenTooltip] = useState<TooltipType>(null);
  const [isCompassClicked, setIsCompassClicked] = useState(false);
  const buttonsRef = useRef<HTMLDivElement>(null);
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (buttonsRef.current && !buttonsRef.current.contains(event.target as Node)) {
      setOpenTooltip(null);
    }
  }, []);

  useEffect(() => {
    if (openTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openTooltip, handleClickOutside]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenTooltip(null);
      }
    };
    if (openTooltip) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [openTooltip]);

  const handleTooltipToggle = useCallback((tooltipType: TooltipType) => {
    setOpenTooltip(current => current === tooltipType ? null : tooltipType);
  }, []); 

  const handleResetAndReload = () => {
    try {
      localStorage.removeItem('quizProgress');
    } catch (error) {
      console.error("Erreur lors de la réinitialisation de la progression:", error);
    }
    setIsCompassClicked(true);
    setTimeout(() => setIsCompassClicked(false), 600);
  };
  
  return (
    <div className={twMerge(
      "w-full sticky top-4 z-40 transition-opacity duration-300 ease-in-out",
      isScrolled ? 'opacity-60 hover:opacity-100' : 'opacity-100'
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <MonochromeTile className="flex items-center justify-between p-4 rounded-2xl shadow-lg">
          
          <a href="/" onClick={handleResetAndReload} className="flex items-center space-x-2 group">
            <div className={twMerge(
              "relative flex items-center justify-center w-10 h-10 rounded-2xl shadow-lg transition-all duration-300",
              "bg-gradient-to-br from-blue-500 to-indigo-600",
              "group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-blue-500/30",
              "ring-1 ring-blue-500/20"
            )}>
              <Compass className={twMerge(
                "w-6 h-6 text-white drop-shadow-sm transition-transform duration-500 ease-in-out",
                "group-hover:rotate-180",
                isCompassClicked && "animate-spin"
              )} />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
            </div>
            
            <div className="flex flex-col">
              <span className={twMerge(
                "font-bold text-xl tracking-tight",
                isDark ? 'text-slate-100' : 'text-slate-900'
              )}>
                TestPolitique.app
              </span>
              <span className={twMerge(
                "text-xs hidden sm:block",
                isDark ? 'text-slate-400' : 'text-slate-500'
              )}>
                Boussole politique française
              </span>
            </div>
          </a>

          <div className="flex items-center" ref={buttonsRef}>
            
            <a 
              href="/" 
              onClick={() => { setOpenTooltip(null); handleResetAndReload(); }} 
              className={twMerge(
                "p-2 rounded-xl transition-all duration-200",
                "hover:bg-slate-100/50 dark:hover:bg-slate-800/50",
                "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
                "active:scale-95"
              )}
              aria-label="Accueil"
            >
              <Home className={twMerge(
                "w-4 h-4 transition-colors duration-200",
                isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700'
              )} />
            </a>
            
            <div className="relative">
              <button
                onClick={() => handleTooltipToggle('about')}
                className={twMerge(
                  "p-2 rounded-xl transition-all duration-200",
                  "hover:bg-slate-100/50 dark:hover:bg-slate-800/50",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
                  "active:scale-95",
                  openTooltip === 'about' && "bg-slate-100/50 dark:bg-slate-800/50"
                )}
                aria-label="À propos"
                aria-expanded={openTooltip === 'about'}
              >
                <HelpCircle className={twMerge(
                  "w-4 h-4 transition-colors duration-200",
                  isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700'
                )} />
              </button>
              
              <div className={twMerge(
                "absolute top-full right-0 mt-3 w-72 max-w-[85vw] origin-top-right transition-all duration-300 z-50",
                openTooltip === 'about' ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
              )}>
                <OpaqueGlassTile className="rounded-2xl shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-700/50 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={twMerge(
                      "font-bold text-lg",
                      isDark ? 'text-slate-100' : 'text-slate-900'
                    )}>
                      À Propos
                    </h3>
                    <button
                      onClick={() => setOpenTooltip(null)}
                      className={twMerge(
                        "p-1.5 rounded-lg transition-all duration-200",
                        "hover:bg-slate-100/50 dark:hover:bg-slate-800/50",
                        "active:scale-95"
                      )}
                      aria-label="Fermer"
                    >
                      <X className={twMerge(
                        "w-4 h-4",
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      )} />
                    </button>
                  </div>
                  
                  <p className={twMerge(
                    "text-sm mb-5 leading-relaxed",
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  )}>
                    Cet outil pédagogique, indépendant et non partisan, vous aide à mieux situer vos convictions sur l'échiquier politique français.
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <span className={twMerge(
                      "text-xs font-medium",
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    )}>
                      Suivez-nous :
                    </span>
                    <div className="flex gap-1">
                      <a 
                        href="https://x.com/testpolitiqueap" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Suivez-nous sur Twitter"
                        className={twMerge(
                          "p-2 rounded-lg transition-all duration-200",
                          "hover:bg-blue-50 dark:hover:bg-blue-950/30",
                          "text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400",
                          "active:scale-95"
                        )}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a 
                        href="#" 
                        aria-label="Suivez-nous sur Facebook"
                        className={twMerge(
                          "p-2 rounded-lg transition-all duration-200",
                          "hover:bg-blue-50 dark:hover:bg-blue-950/30",
                          "text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400",
                          "active:scale-95"
                        )}
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </OpaqueGlassTile>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={() => handleTooltipToggle('info')}
                className={twMerge(
                  "p-2 rounded-xl transition-all duration-200",
                  "hover:bg-slate-100/50 dark:hover:bg-slate-800/50",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
                  "active:scale-95",
                  openTooltip === 'info' && "bg-slate-100/50 dark:bg-slate-800/50"
                )}
                aria-label="Information"
                aria-expanded={openTooltip === 'info'}
              >
                <Info className={twMerge(
                  "w-4 h-4 transition-colors duration-200",
                  isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700'
                )} />
              </button>
              
              <div className={twMerge(
                "absolute top-full right-0 mt-3 w-80 max-w-[85vw] origin-top-right transition-all duration-300 z-50",
                openTooltip === 'info' ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
              )}>
                <OpaqueGlassTile className="rounded-2xl shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-700/50 max-h-[70vh] overflow-hidden p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={twMerge(
                      "font-bold text-lg",
                      isDark ? 'text-slate-100' : 'text-slate-900'
                    )}>
                      Information
                    </h3>
                    <button
                      onClick={() => setOpenTooltip(null)}
                      className={twMerge(
                        "p-1.5 rounded-lg transition-all duration-200",
                        "hover:bg-slate-100/50 dark:hover:bg-slate-800/50",
                        "active:scale-95"
                      )}
                      aria-label="Fermer"
                    >
                      <X className={twMerge(
                        "w-4 h-4",
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      )} />
                    </button>
                  </div>
                  
                  <div className="overflow-y-auto max-h-[60vh] pr-2 scrollbar-thin scrollbar-thumb-slate-400 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
                    <div className={twMerge(
                      "space-y-4 text-sm",
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    )}>
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 to-blue-100/40 dark:from-blue-950/30 dark:to-blue-900/20 border border-blue-200/30 dark:border-blue-800/30">
                        <p className={twMerge(
                          "font-semibold mb-2",
                          isDark ? 'text-blue-200' : 'text-blue-800'
                        )}>
                          Neutralité et équilibre
                        </p>
                        <p>
                          Un soin tout particulier a été apporté à la formulation des questions pour garantir un test aussi neutre et équilibré que possible.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-gradient-to-br from-green-50/80 to-green-100/40 dark:from-green-950/30 dark:to-green-900/20 border border-green-200/30 dark:border-green-800/30">
                        <p className={twMerge(
                          "font-semibold mb-2",
                          isDark ? 'text-green-200' : 'text-green-800'
                        )}>
                          Respect de la vie privée
                        </p>
                        <p>
                          L'intégralité du test et l'analyse s'effectuent sur votre appareil. Aucune donnée n'est collectée.
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-dashed border-slate-300 dark:border-slate-600">
                        <h4 className={twMerge(
                          "font-bold text-base mb-3",
                          isDark ? 'text-slate-100' : 'text-slate-900'
                        )}>
                          Comment est calculé votre résultat ?
                        </h4>
                        <p className="leading-relaxed mb-2">
                          Les <strong>positions des partis</strong> sur les questions sont basées sur une analyse de leurs programmes officiels, de leurs votes récents et de leurs prises de position publiques.
                        </p>
                        <p className="leading-relaxed mb-4">
                          Nous utilisons un <strong>algorithme d'affinité pondéré</strong> qui compare chaque réponse à la position des partis. La <strong>pondération</strong> augmente l'impact des questions :
                        </p>
                        <ul className={twMerge(
                            "list-disc ml-5 space-y-2 mb-4 text-sm",
                            isDark ? 'text-slate-300' : 'text-slate-600'
                        )}>
                            <li>Les thèmes que vous avez définis comme <strong>prioritaires</strong> comptent <strong>3 fois plus</strong> dans le score final.</li>
                            <li>Les questions considérées comme <strong>très importantes</strong> (importance &gt; 1) ont également un poids accru.</li>
                            <li>Un désaccord total sur une question cruciale (dite "Deal-Breaker") entraîne une <strong>pénalité significative</strong> sur le pourcentage d'affinité du parti concerné.</li>
                        </ul>
                        <p className="leading-relaxed mb-4">
                          L'analyse vous situe sur une <strong>boussole politique</strong> (axes économique et sociétal) et identifie vos <strong>Prismes Politiques</strong> (vos grandes tendances thématiques). Un prisme est jugé dominant s'il atteint un score d'affinité élevé et si vous avez exprimé une <strong>conviction forte</strong> (réponse "Tout à fait d'accord" ou "Pas du tout d'accord") sur au moins un enjeu clé de ce prisme.
                        </p>
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                          <p className={twMerge(
                            "text-xs leading-normal",
                            isDark ? 'text-slate-400' : 'text-slate-500'
                          )}>
                            <span className="font-bold">Note :</span> Conçu pour être juste et performant, cet algorithme reste une modélisation mathématique. Il ne peut tenir compte de toutes les nuances de vos valeurs personnelles, de vos traits de caractère ou de votre jugement humain.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 mb-10 pt-4 border-t border-dashed border-slate-300 dark:border-slate-600">
                        <p className="text-xs">
                          Une question mal formulée ? Une incohérence ? Contactez-nous à{' '}
                          <a 
                            href="mailto:contact@testpolitique.app" 
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors"
                          >
                            contact@testpolitique.app
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-dashed border-slate-300 dark:border-slate-600 text-center">
                    <a 
                      href="#" 
                      className={twMerge(
                        "text-xs hover:underline transition-colors",
                        isDark 
                          ? 'text-slate-400 hover:text-blue-400' 
                          : 'text-slate-500 hover:text-blue-600'
                      )}
                    >
                      Mentions légales
                    </a>
                  </div>
                </OpaqueGlassTile>
              </div>
            </div>
          </div>
        </MonochromeTile>
      </div>
    </div>
  );
};

export default StickyBanner;
import React, { useState, type ElementType, useMemo, useEffect, useCallback, useTransition } from 'react';
import * as Icons from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { GlassTile } from './ui/GlassTile';
import { MonochromeTile } from './ui/MonochromeTile';

const style = `
@keyframes pulse-once {
  0% { transform: scale(1); box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5); }
  50% { transform: scale(1.05); box-shadow: 0 8px 20px rgba(79, 70, 229, 0.7); }
  100% { transform: scale(1); box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5); }
}
.animate-pulse-once {
  animation: pulse-once 0.6s ease-out 1;
}
`;

const useIsMobile = (breakpoint = 768) => { 
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

const regalianThemes = ['Affaires Étrangères & Défense', 'Sécurité & Justice', 'Europe', 'Immigration & Nationalité', 'Économie & Fiscalité'];
const societalThemes = ['Santé', 'Éducation', 'Condition Animale', 'Droits & Laïcité', 'Famille & Jeunesse'];

const categoryColors: { [key: string]: string } = {
  "Économie & Fiscalité": "#3b82f6", 
  "Travail & Protection Sociale": "#4f46e5", 
  "Santé": "#ec4899", 
  "Logement": "#10b981", 
  "Sécurité & Justice": "#475569", 
  "Immigration & Nationalité": "#0ea5e9", 
  "Institutions & Démocratie": "#2563eb", 
  "Affaires Étrangères & Défense": "#38bdf8", 
  "Écologie & Énergie": "#22c55e", 
  "Agriculture & Alimentation": "#eab308", 
  "Numérique & Technologies": "#8b5cf6", 
  "Éducation": "#6366f1", 
  "Enseignement Supérieur": "#a78bfa", 
  "Condition Animale": "#d946ef", 
  "Culture": "#f43f5e", 
  "Droits & Laïcité": "#64748b", 
  "Famille & Jeunesse": "#db2777", 
  "Europe": "#1d4ed8", 
  "Services Publics": "#4b5563", 
  "Transports & Aménagement": "#f97316", 
};

interface Category {
  name: string;
  icon: string;
}

type FilterType = 'alphabetical' | 'regalian' | 'societal';

interface FilterOption {
  id: FilterType;
  label: string;
  icon: ElementType;
  description: string;
}

interface PrioritiesScreenProps {
  allCategories: Category[];
  onConfirm: (priorities: string[]) => void;
}

const PrioritiesScreen: React.FC<PrioritiesScreenProps> = ({ allCategories, onConfirm }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>('alphabetical');
  const [isPending, startTransition] = useTransition();
  const [isGridVisible, setIsGridVisible] = useState(true);

  const isMobile = useIsMobile(); 

  useEffect(() => {
    setIsGridVisible(true);
  }, [activeFilter]);

  const filterOptions: FilterOption[] = [
    { id: 'alphabetical', label: 'Tous les thèmes', icon: Icons.List, description: 'Voir tous les thèmes disponibles' },
    { id: 'regalian', label: 'Thèmes régaliens', icon: Icons.Shield, description: 'Fonctions essentielles de l\'État' },
    { id: 'societal', label: 'Thèmes sociétaux', icon: Icons.Users, description: 'Vie en commun, valeurs et services publics' }
  ];

  const handleFilterChange = (newFilter: FilterType) => {
    if (newFilter === activeFilter) {
      if (!isGridVisible) {
        setIsGridVisible(true);
      }
      return;
    }
    
    setIsGridVisible(false);
    
    startTransition(() => {
      setActiveFilter(newFilter);
    });
  };

  const handleSelectCategory = useCallback((categoryName: string) => {
    setSelectedCategories(prev => {
      const isSelected = prev.includes(categoryName);
      if (isSelected) { return prev.filter(name => name !== categoryName); }
      else { return prev.length < 5 ? [...prev, categoryName] : prev; }
    });
  }, [setSelectedCategories]); 
  
  const handleRandomSelect = useCallback(() => {
    const shuffled = [...allCategories].sort(() => 0.5 - Math.random());
    const randomSelection = shuffled.slice(0, 5).map(cat => cat.name);
    setSelectedCategories(randomSelection);
  }, [allCategories]);


  const getIconComponent = useCallback((iconName: string): LucideIcon | null => {
    const IconComponent = (Icons as unknown as { [key: string]: LucideIcon })[iconName];
    return IconComponent || null;
  }, []);

  const getFilterCount = useCallback((filterType: FilterType) => {
    if (filterType === 'alphabetical') return 0;
    
    const themesToCheck = filterType === 'regalian' ? regalianThemes : societalThemes;
    return selectedCategories.filter(cat => themesToCheck.includes(cat)).length;
  }, [selectedCategories]);

  const isSelectionComplete = selectedCategories.length === 5;

  const [shouldAnimate, setShouldAnimate] = useState(false);
  useEffect(() => {
    if (isSelectionComplete) {
      setShouldAnimate(true);
      const timer = setTimeout(() => setShouldAnimate(false), 600); 
      return () => clearTimeout(timer);
    }
  }, [isSelectionComplete]);
  
  useEffect(() => {
    if (!isMobile) {
      return;
    }

    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (!metaThemeColor) {
      console.warn("La balise <meta name='theme-color'> est manquante dans votre index.html");
      return;
    }

    const originalColor = metaThemeColor.getAttribute("content");
    const newColor = "#3b82f6";

    if (isSelectionComplete) {
      metaThemeColor.setAttribute("content", newColor);
    } else {
      if (originalColor) {
        metaThemeColor.setAttribute("content", originalColor);
      }
    }

    return () => {
      if (originalColor) {
        metaThemeColor.setAttribute("content", originalColor);
      }
    };
  }, [isSelectionComplete, isMobile]);

  const filteredElements = useMemo(() => {
    const randomTile = (
      <div
        key="random-selector"
        role="button"
        tabIndex={0}
        onClick={handleRandomSelect}
        onKeyDown={(e) => e.key === 'Enter' && handleRandomSelect()}
        style={{ animationDelay: isGridVisible ? `0ms` : '0s' }}
        className={twMerge(
          "outline-none focus-visible:ring-2 focus-visible:ring-blue-500/80 rounded-2xl relative group",
          "transition-all duration-300 ease-out",
          "card-animation",
          isGridVisible ? "card-deal-in" : "card-exit-fade"
        )}
      >
        <div 
          className={twMerge(
            "relative cursor-pointer flex flex-col items-center justify-center text-center p-4 h-full rounded-2xl",
            "overflow-hidden active:scale-[0.98] transition-transform duration-200",
            "bg-gradient-to-br from-slate-600 via-gray-700 to-slate-800", 
            "bg-[length:200%_200%] animate-gradient-pan", 
            "shadow-lg shadow-slate-500/20 dark:shadow-slate-900/40"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-tl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative flex items-center justify-center mb-2">
            <Icons.Dice5 className="w-10 h-10 text-white drop-shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          </div>

          <span className="font-bold text-base leading-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
            Au hasard
          </span>
          <p className="text-xs text-gray-200/90 mt-1 [text-shadow:0_1px_1px_rgba(0,0,0,0.3)]">
            Sélection surprise
          </p>
        </div>
      </div>
    );
    
    let categoriesToShow = [...allCategories];

    if (activeFilter === 'regalian') {
      categoriesToShow = allCategories.filter(cat => regalianThemes.includes(cat.name));
    } else if (activeFilter === 'societal') {
      categoriesToShow = allCategories.filter(cat => societalThemes.includes(cat.name));
    }

    const categoryTiles = categoriesToShow.sort((a, b) => a.name.localeCompare(b.name)).map(({ name, icon }, index) => {
      const isSelected = selectedCategories.includes(name);
      const IconComponent = getIconComponent(icon);
      const selectionOrder = selectedCategories.indexOf(name) + 1;
      const categoryColor = categoryColors[name] || "#64748b";
      const animationDelayIndex = activeFilter === 'alphabetical' ? index + 1 : index; 

      return (
        <div
          key={name}
          role="button"
          tabIndex={0}
          onClick={() => handleSelectCategory(name)}
          onKeyDown={(e) => e.key === 'Enter' && handleSelectCategory(name)}
          style={{ animationDelay: isGridVisible ? `${animationDelayIndex * 50}ms` : '0s' }}
          className={twMerge(
            "outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 rounded-2xl relative group",
            "transition-transform duration-300 ease-out",
            "card-animation",
            isGridVisible ? "card-deal-in" : "card-exit-fade"
          )}
        >
          <MonochromeTile className={twMerge(
            "cursor-pointer flex flex-col items-center justify-center text-center p-4 h-full relative overflow-hidden active:scale-95 transition-all duration-300 min-h-[120px]", 
            isSelected ? 
              `!ring-2 !ring-blue-500 !ring-offset-2 !bg-gradient-to-br !from-blue-50/80 !to-indigo-100/60 dark:!from-blue-950/40 dark:!to-indigo-900/30 dark:!ring-blue-400 shadow-blue-500/20 dark:shadow-blue-500/30` : 
              `hover:ring-1 hover:ring-slate-300/50 dark:hover:ring-slate-600/50`
          )}>
            {IconComponent && (
              <div
                className={twMerge(
                  "relative flex items-center justify-center mb-3 rounded-2xl shadow-lg transition-all duration-300", 
                  "ring-1 ring-white/10", 
                  "w-10 h-10", 
                  isSelected ? 
                    ["hover:scale-105 hover:shadow-xl", "ring-1 ring-white/20", "scale-110"] : 
                    ["group-hover:scale-105", "ring-1 ring-slate-200/50 dark:ring-slate-600/50"]
                )}
                style={{
                  backgroundColor: categoryColor,
                  backgroundImage: `linear-gradient(135deg, ${categoryColor}, ${categoryColor}dd)`,
                }}
              >
                <IconComponent className="w-6 h-6 transition-all duration-300 drop-shadow-sm text-white" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-60" />
              </div>
            )}
            <span className={twMerge(
              "font-medium text-sm leading-tight break-words flex-grow transition-all duration-300", 
              isSelected ? 
                "text-blue-800 dark:text-blue-200 font-semibold" : 
                "text-slate-700 dark:text-slate-300"
            )}>
              {name}
            </span>
            {isSelected && (
              <div
                className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white dark:ring-slate-800 animate-in zoom-in-50 duration-200"
                style={{
                  backgroundColor: "#3b82f6", 
                  backgroundImage: "linear-gradient(135deg, #3b82f6, #4f46e5)" 
                }}
              >
                <span className="text-white text-xs font-bold">{selectionOrder}</span>
              </div>
            )}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MonochromeTile>
        </div>
      );
    });

    if (activeFilter === 'alphabetical') {
      return [randomTile, ...categoryTiles];
    }
    
    return categoryTiles;
  }, [allCategories, selectedCategories, activeFilter, getIconComponent, isGridVisible, handleRandomSelect, handleSelectCategory]);


  return (
    <div className="w-full max-w-6xl mx-auto pb-[calc(env(safe-area-inset-bottom)]">
      <style>{style}</style>
      <GlassTile className="p-4 sm:p-6 lg:p-8">
        <div className="text-center mt-3 mb-6 sm:mb-8" style={{ marginTop: `env(safe-area-inset-top)`}}>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 mt-2 sm:mb-4 text-slate-800 dark:text-slate-100">Quels thèmes comptent le plus pour vous ?</h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6">
            Sélectionnez <strong className="text-blue-600 dark:text-blue-400">5 thèmes</strong> par ordre de priorité
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl">
            <div className="flex gap-1 p-1 rounded-xl bg-slate-200/70 dark:bg-slate-900/50">
              {filterOptions.map(option => {
                const count = getFilterCount(option.id);
                return (
                  <button
                    key={option.id}
                    onClick={() => handleFilterChange(option.id)}
                    className={twMerge(
                      "flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all duration-300 relative",
                      activeFilter === option.id
                        ? "bg-gradient-to-br from-blue-500/90 to-indigo-600/90 text-white shadow-md"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-300/50 dark:hover:bg-slate-800/50"
                    )}
                  >
                    <option.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{option.label}</span>
                    <span className="sm:hidden">
                      {option.id === 'alphabetical' ? 'Tous' : 
                       option.id === 'regalian' ? 'Régaliens' : 'Sociétaux'}
                    </span>
                    
                    {(option.id === 'regalian' || option.id === 'societal') && count > 0 && (
                      <div className={twMerge(
                        "absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold shadow-lg ring-2 ring-white dark:ring-slate-800 animate-in zoom-in-50 duration-200",
                        "bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
                      )}>
                        {count}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className={twMerge(
          "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",
          isPending && "opacity-40 transition-opacity duration-300"
        )}>
          {filteredElements}
        </div>
        {filteredElements.length === 0 && !isPending && (
          <div className="text-center col-span-full py-12">
            <Icons.Search className="w-12 h-12 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium mb-2">Aucun thème trouvé</p>
            <p className="text-slate-400 dark:text-slate-500 text-sm">Essayez de changer le filtre pour voir plus de thèmes.</p>
          </div>
        )}
      </GlassTile>

      <div
        className={twMerge(
          "fixed bottom-20 right-6 z-50 transition-all duration-500 ease-out",
          isSelectionComplete ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-75 pointer-events-none"
        )}
      >
        <div className="relative">
          <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-lg ring-2 ring-blue-500 dark:ring-blue-400 animate-in zoom-in-50 duration-200">
            <span className="bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text text-transparent text-xs font-bold">{selectedCategories.length}/5</span>
          </div>
          
          <button
            onClick={() => onConfirm(selectedCategories)}
            className={twMerge(
              "w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white", 
              "flex items-center justify-center shadow-xl shadow-blue-500/50 dark:shadow-blue-700/50", 
              "transform transition-all duration-300 active:scale-90 hover:scale-105", 
              "ring-4 ring-white/90 dark:ring-slate-900/90", 
              shouldAnimate && "animate-pulse-once" 
            )}
            aria-label="Continuer"
          >
            <Icons.ArrowRight className="w-10 h-10 transition-transform duration-300 group-hover:translate-x-1" /> 
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      <div 
        className={twMerge(
          "fixed bottom-12 right-[100px] z-40 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900/90 px-4 py-2 rounded-lg shadow-xl", 
          "transition-all duration-500 ease-out max-w-[200px] border border-blue-200 dark:border-blue-800/50", 
          isSelectionComplete ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        )}
      >
        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
          Continuer avec vos <span className="text-blue-600 dark:text-blue-400 font-bold">5 thèmes</span> sélectionnés
        </p>
      </div>
    </div>
  );
};

export default PrioritiesScreen;
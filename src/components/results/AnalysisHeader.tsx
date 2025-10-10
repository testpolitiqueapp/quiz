import React from 'react';
import { Check } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface AnalysisHeaderProps {
  isAnalysisComplete: boolean;
  themeClasses: {
    text: {
      primary: string;
      secondary: string;
    }
  };
}

export const AnalysisHeader: React.FC<AnalysisHeaderProps> = ({ isAnalysisComplete, themeClasses }) => {
  return (
    <div
      className={twMerge(
        "w-full max-w-lg mx-auto mb-7 mt-3 transition-opacity duration-500", 
        isAnalysisComplete ? 'opacity-100' : 'opacity-0'
      )}
    >
      <div className="flex flex-row items-center justify-center gap-4"> 
        
        <Check
          className={twMerge(
            "w-9 h-9 text-emerald-500 drop-shadow-sm", 
            "transition-all duration-500 ease-out flex-shrink-0",
            isAnalysisComplete ? "scale-100 opacity-100" : "scale-90 opacity-0"
          )}
        />

        <div>
          <div
            className={twMerge(
              "transition-all duration-500 ease-out delay-150",
              isAnalysisComplete ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            )}
          >
            <h2 className={twMerge("text-2xl font-bold tracking-tight", themeClasses.text.primary)}>
              Analyse terminée
            </h2>
          </div>
          
          <div
            className={twMerge(
              "transition-all duration-500 ease-out delay-250",
              isAnalysisComplete ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            )}
          >
            <p className={twMerge("text-md", themeClasses.text.secondary)}>
              Découvrez votre profil politique
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
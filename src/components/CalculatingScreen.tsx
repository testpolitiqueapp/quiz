import React, { useState, useEffect } from 'react';
import { Compass } from 'lucide-react';

interface CalculatingScreenProps {
  isDark: boolean; 
}

const rippleAnimationKeyframes = `
  @keyframes ripple {
    0% { transform: scale(0.5); opacity: 0.6; }
    100% { transform: scale(2.5); opacity: 0; }
  }
`;

const CalculatingScreen: React.FC<CalculatingScreenProps> = ({ isDark }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    return () => clearInterval(dotsInterval);
  }, []);
  
  const rippleColor = isDark ? 'border-indigo-400/50' : 'border-blue-500/50';

  return (
    <div className="relative flex min-h-[600px] w-full flex-col items-center justify-center text-center font-sans">
      
      <style>{rippleAnimationKeyframes}</style>

      <div className="flex w-full max-w-2xl flex-col items-center px-4">
        
        <div className="relative mb-8 flex h-48 w-48 items-center justify-center sm:h-64 sm:w-64">
          
          <div 
            className={`absolute h-full w-full rounded-full border ${rippleColor}`} 
            style={{ animation: 'ripple 2s ease-out infinite', animationDelay: '0s' }}
          ></div>
          <div 
            className={`absolute h-full w-full rounded-full border ${rippleColor}`} 
            style={{ animation: 'ripple 2s ease-out infinite', animationDelay: '0.6s' }}
          ></div>
          <div 
            className={`absolute h-full w-full rounded-full border ${rippleColor}`} 
            style={{ animation: 'ripple 2s ease-out infinite', animationDelay: '1.2s' }}
          ></div>

          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl ring-2 ring-blue-400/50 sm:h-28 sm:w-28 sm:rounded-[2.5rem]">
            <Compass className="h-12 w-12 animate-spin text-white drop-shadow-lg sm:h-14 sm:w-14" style={{ animationDuration: '2.5s' }} />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-white/40 to-transparent opacity-70 sm:rounded-[2.5rem]" /> 
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <div className="h-14">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Calcul en cours
              <span className="inline-block w-10 text-left text-blue-500 dark:text-blue-400">{dots}</span>
            </h2>
          </div>
          
          <p className="text-base text-slate-600 dark:text-slate-400">
            Analyse de votre profil politique
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatingScreen;
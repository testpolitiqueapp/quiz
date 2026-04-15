import React, { useState, useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { GlassButton } from '../ui/GlassButton';
import { InviteButton } from '../results/InviteButton';
import { PartyLogos } from './PartyLogos';
import { twMerge } from 'tailwind-merge';

// --- CONFIGURATION DE FIREBASE (Inchangée) ---
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, increment } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD31-xgreI0_yoF39iwOxE3JhXXqd4VZzk",
  authDomain: "compteur-politique.firebaseapp.com",
  projectId: "compteur-politique",
  storageBucket: "compteur-politique.firebasestorage.app",
  messagingSenderId: "119033256059",
  appId: "1:119033256059:web:9a9d6bfbd73001ff4deade"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const counterDocRef = doc(db, "compteur", "participants");

// --- LE COMPOSANT REACT MODERNE ---
const WelcomeScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const [participantCount, setParticipantCount] = useState<number | null>(null);
  const initialCount = 1200; 

  useEffect(() => {
    const getCounter = async () => {
      try {
        const docSnap = await getDoc(counterDocRef);
        if (docSnap.exists()) {
          setParticipantCount(initialCount + docSnap.data().value);
        } else {
          await setDoc(counterDocRef, { value: 0 });
          setParticipantCount(initialCount);
        }
      } catch (error) {
        console.error("Erreur de chargement Firebase:", error);
        setParticipantCount(initialCount);
      }
    };
    getCounter();
  }, []);

  const handleStartClick = async () => {
    if (participantCount !== null) {
      setParticipantCount(participantCount + 1);
    }
    
    try {
      await setDoc(counterDocRef, { value: increment(1) }, { merge: true });
    } catch (error) {
      console.error("Erreur de mise à jour Firebase:", error);
    }

    setTimeout(() => {
      onStart();
    }, 150); 
  };
  
  const [isDark, setIsDark] = useState(() => window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const themeClasses = {
    text: {
      primary: isDark ? 'text-gray-50' : 'text-gray-950',
      secondary: isDark ? 'text-white/60' : 'text-gray-700',
    },
  };

  const CheckItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-2">
      <Check className={twMerge(`w-4 h-4`, isDark ? 'text-green-500' : 'text-green-600')} />
      <span className={isDark ? 'text-white/50' : 'text-gray-600'}>{text}</span>
    </div>
  );

  return (
    <div className="w-full font-sans antialiased">
      <div className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden text-center px-4 py-12">
        <div className="welcome-background opacity-70"></div> 
        
        <div className="relative z-[2] flex max-w-5xl flex-col items-center">

          {/* --- NOUVEAU BADGE 2027 : Élégant et Moderne --- */}
          <div className="mb-6 animate-fade-in-up">
            <div className={twMerge(
              "inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 border shadow-inner",
              isDark 
                ? "bg-gray-900/40 border-gray-700/50" 
                : "bg-gray-100 border-gray-200"
            )}>
              {/* Point Bleu vibrance */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0055A4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0055A4]"></span>
              </span>
              
              <span className={twMerge(
                "text-xs font-semibold uppercase tracking-[0.15em]",
                isDark ? "text-gray-200" : "text-gray-800"
              )}>
                Élection Présidentielle 2027
              </span>

              {/* Point Rouge vibrance */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4135] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EF4135]"></span>
              </span>
            </div>
          </div>

          <h1 className={`text-6xl sm:text-7xl md:text-8xl font-extrabold ${themeClasses.text.primary} tracking-tighter mb-8 leading-[0.95] drop-shadow-sm animate-fade-in-up text-balance`}>
            Quel est votre <span className="text-blue-600">profil politique</span> ?
          </h1>

          <p className={`text-xl md:text-2xl font-medium ${themeClasses.text.secondary} max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in-up delay-100 text-balance`}>
            En 5 minutes, notre algorithme analyse vos positions pour vous situer précisément dans le paysage politique français actuel.
          </p>

          <div className="w-full mb-12 animate-fade-in-up delay-200">
            <PartyLogos isDark={isDark} />
          </div>

          {/* Zone d'action épurée */}
          <div className="flex flex-col items-center gap-10 animate-fade-in-scale delay-300">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <GlassButton
                onClick={handleStartClick}
                variant="primary"
                icon={<ArrowRight className="w-8 h-8" />}
                className="px-12 py-6 text-xl font-bold rounded-2xl"
              >
                Découvrir mon profil
              </GlassButton>
              
              <InviteButton variant="tertiary" className="text-lg" />
            </div>

            {/* Compteur "Live" sophistiqué */}
            <div className={twMerge(
              "flex items-center gap-3 px-6 py-2.5 rounded-full text-base font-medium",
              isDark ? "bg-white/5" : "bg-gray-100"
            )}>
              {participantCount === null ? (
                <span className="animate-pulse text-gray-500">Calcul en cours...</span>
              ) : (
                <>
                  {/* Point vert clignotant "Live" */}
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className={themeClasses.text.secondary}>
                    <strong className={isDark ? "text-green-400" : "text-green-700"}>
                      {participantCount.toLocaleString('fr-FR')}
                    </strong > personnes ont déjà participé
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Réassurance discrète */}
          <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium mt-16 animate-fade-in-up delay-400 border-t border-gray-700/20 pt-8 w-full`}>
            <CheckItem text="Gratuit & Anonyme" />
            <CheckItem text="Résultats instantanés" />
            <CheckItem text="Respect du RGPD" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
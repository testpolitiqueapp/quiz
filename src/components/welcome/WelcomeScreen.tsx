import React, { useState, useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { GlassButton } from '../ui/GlassButton';
import { InviteButton } from '../results/InviteButton';
import { PartyLogos } from './PartyLogos';
import { twMerge } from 'tailwind-merge';

// --- CONFIGURATION DE FIREBASE ---
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



// On initialise Firebase une seule fois
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const counterDocRef = doc(db, "compteur", "participants");

// --- LE COMPOSANT REACT ---
const WelcomeScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const [participantCount, setParticipantCount] = useState<number | null>(null);
  const initialCount = 1200; // Votre base de départ

  useEffect(() => {
    // Fonction pour charger le compteur depuis Firebase
    const getCounter = async () => {
      try {
        const docSnap = await getDoc(counterDocRef);
        if (docSnap.exists()) {
          // Le document existe, on prend sa valeur
          setParticipantCount(initialCount + docSnap.data().value);
        } else {
          // Le document n'existe pas, c'est le tout premier chargement
          // On peut initialiser le document à 0 pour les prochains chargements
          await setDoc(counterDocRef, { value: 0 });
          setParticipantCount(initialCount);
        }
      } catch (error) {
        console.error("Erreur de chargement depuis Firebase:", error);
        setParticipantCount(initialCount); // En cas d'erreur, on affiche la base
      }
    };
    getCounter();
  }, []); // Le tableau vide [] assure que cet effet ne s'exécute qu'une fois.

  const handleStartClick = async () => {
    // 1. On met à jour l'affichage immédiatement pour une meilleure réactivité
    if (participantCount !== null) {
      setParticipantCount(participantCount + 1);
    }
    
    // 2. On envoie l'incrémentation à Firebase. C'est robuste et fiable.
    try {
      // setDoc avec { merge: true } crée le document s'il n'existe pas, ou le met à jour.
      // increment(1) assure que l'opération est atomique.
      await setDoc(counterDocRef, { value: increment(1) }, { merge: true });
    } catch (error) {
      console.error("Erreur de mise à jour sur Firebase:", error);
    }

    // 3. On attend un peu avant de continuer pour que l'utilisateur voie le changement
    setTimeout(() => {
      onStart();
    }, 100);
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
                onClick={handleStartClick}
                variant="primary"
                icon={<ArrowRight className="w-10 h-10" />}
                className="px-10 py-5 text-2xl"
              >
                Commencer
              </GlassButton>
              <p className={`text-sm ${themeClasses.text.secondary} font-medium`}>
                {participantCount === null
                  ? 'Chargement...'
                  : `${participantCount.toLocaleString('fr-FR')} personnes ont déjà essayé !`
                }
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
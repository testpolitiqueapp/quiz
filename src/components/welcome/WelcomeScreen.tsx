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
        console.error("Erreur de chargement depuis Firebase:", error);
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
      console.error("Erreur de mise à jour sur Firebase:", error);
    }

    setTimeout(() => {
      onStart();
    }, 100);
  };

  const [isDark, setIsDark] = useState(
    () => window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true
  );

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
        <div className="relative z-[2] flex max-w-4xl flex-col items-center px-1 pt-4 sm:pt-0">

          {/* Badge adapté à la Présidentielle 2027 */}
          <div className="mt-4 mb-5 animate-fade-in-up">
            <span className="inline-block transform rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg">
              Spécial Présidentielle 2027
            </span>
          </div>

          <h1 className={`text-6xl sm:text-8xl font-extrabold ${themeClasses.text.primary} tracking-tight mb-6 leading-none drop-shadow-md animate-fade-in-up text-balance`}>
            Quel candidat de 2027 vous correspond le plus ?
          </h1>

          <p className={`text-lg ${themeClasses.text.secondary} max-w-2xl mx-auto leading-snug drop-shadow-md animate-fade-in-up delay-100`}>
            Répondez à quelques questions pour découvrir votre positionnement dans la course à la présidentielle de 2027 et le candidat le plus proche de vos idées.
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
                Lancer le test
              </GlassButton>
              <p className={`text-sm ${themeClasses.text.secondary} font-medium`}>
                {participantCount === null
                  ? 'Chargement...'
                  : `${participantCount.toLocaleString('fr-FR')} personnes ont déjà testé leur profil 2027 !`
                }
              </p>
            </div>
            <InviteButton variant="tertiary" />
          </div>

          <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs ${themeClasses.text.secondary} font-medium mt-6 drop-shadow-md animate-fade-in-up delay-400`}>
            <CheckItem text="Test gratuit en 5 minutes" />
            <CheckItem text="Projection présidentielle 2027" />
            <CheckItem text="Résultat immédiat et sans inscription" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
import React from 'react';
import { ArrowLeft } from 'lucide-react'; 
import { twMerge } from 'tailwind-merge';

interface MentionsLegalesProps {
  onBack: () => void;
  isDark: boolean; 
}

const MentionsLegales: React.FC<MentionsLegalesProps> = ({ onBack, isDark }) => {
  
  const sectionTitleClasses = twMerge(
    "text-2xl font-bold mt-10 mb-3 pt-4 border-t",
    isDark ? "text-gray-200 border-slate-600" : "text-gray-800 border-gray-300"
  );
  
  const textClasses = isDark ? "text-slate-400" : "text-gray-600";
  const contactTextClasses = isDark ? "text-gray-300" : "text-gray-700";
  
  const detailTitleClasses = twMerge("font-semibold", isDark ? "text-gray-200" : "text-gray-800"); 

  return (
    <div className="w-full max-w-3xl h-full flex flex-col justify-start items-center">
      
      <div className="w-full flex justify-start mb-6">
          <button 
            onClick={onBack} 
            className="inline-flex items-center gap-1.5 text-sm text-blue-500 font-medium hover:text-blue-400 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Retour au test
          </button>
      </div>

      <div className="w-full pb-10"> 

        <header className="mb-8 border-b pb-4">
            <h1 className="text-4xl font-extrabold tracking-tight">Mentions Légales</h1>
            <p className="text-md text-slate-500 dark:text-slate-400 mt-1">
                Document d'information et conditions d'utilisation du service.
            </p>
        </header>

        <section>
          <h2 className={sectionTitleClasses}>1. Édition et Contact</h2>
          
          <p className={textClasses}>
              Ce site web est édité à titre non-professionnel par un particulier.
          </p>
          <div className={`mt-3 space-y-1 text-sm ${contactTextClasses}`}>
              <p>
                  <span className={detailTitleClasses}>Statut :</span> Particulier anonyme (Statut non-commercial).
              </p>
              <p>
                  <span className={detailTitleClasses}>Contact :</span> contact@testpolitique.app
              </p>
              <p className="mt-2 text-xs italic opacity-80">
                  L'identité complète de l'éditeur est préservée et connue uniquement de l'hébergeur, conformément aux dispositions de la loi.
              </p>
          </div>
        </section>

        <section>
          <h2 className={sectionTitleClasses}>2. Politique de Confidentialité (RGPD)</h2>
          <p className={textClasses}>
              Nous garantissons l'absence totale de collecte de données personnelles pour le fonctionnement de ce test.
          </p>
          <div className="space-y-3 mt-3 text-sm">
              <p>
                  <span className={detailTitleClasses}>Non-collecte :</span> Aucune donnée personnelle (adresses IP, e-mail, identifiant, etc.) n'est collectée, stockée ou transmise à un serveur tiers.
              </p>
              <p>
                  <span className={detailTitleClasses}>Traitement :</span> Le calcul de votre profil et de vos résultats s'effectue entièrement en local, dans votre navigateur.
              </p>
              <p>
                  <span className={detailTitleClasses}>Stockage :</span> Le localStorage de votre navigateur est utilisé pour sauvegarder temporairement votre progression du quiz sur votre appareil.
              </p>
          </div>
        </section>

        <section>
          <h2 className={sectionTitleClasses}>3. Hébergement du Site</h2>
          <p className={textClasses}>
              Le site est hébergé par Vercel Inc. :
          </p>
          <div className={`mt-3 space-y-1 text-sm ${contactTextClasses}`}>
              <p>
                  <span className={detailTitleClasses}>Raison sociale :</span> Vercel Inc.
              </p>
              <p>
                  <span className={detailTitleClasses}>Adresse :</span> 340 S Lemon Ave #4137 Walnut, CA 91789, USA
              </p>
          </div>
        </section>
        
        <section>
          <h2 className={sectionTitleClasses}>4. Propriété Intellectuelle</h2>
          <p className={textClasses}>
              L'ensemble du code source, des textes du test et de la structure du site est la propriété exclusive de l'éditeur. Les éléments visuels, tels que les logos des partis politiques, sont utilisés à des fins d'information et d'illustration uniquement.
          </p>
        </section>

      </div>
    </div>
  );
};

export default MentionsLegales;
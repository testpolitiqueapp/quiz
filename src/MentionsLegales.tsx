import React from 'react';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

import { GlassTile } from './components/ui/GlassTile';
import { GlassButton } from './components/ui/GlassButton';

interface MentionsLegalesProps {
  onBack: () => void;
  isDark: boolean;
}

const MentionsLegales: React.FC<MentionsLegalesProps> = ({ onBack, isDark }) => {

  const mainTitleClasses = "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-gray-100 text-balance";
  const subheaderClasses = "text-lg text-slate-700 dark:text-slate-300 leading-snug";
  const sectionHeaderTitleClasses = "text-sm font-semibold uppercase tracking-wider text-blue-500 dark:text-blue-400";
  const sectionMainTitleClasses = "text-3xl font-bold text-slate-800 dark:text-slate-100 mt-1";

  const bodyTextClasses = "text-slate-600 dark:text-slate-300";
  const detailTitleClasses = "font-semibold text-slate-800 dark:text-slate-100";
  const smallDetailTextClasses = "text-sm text-slate-700 dark:text-slate-200";

  const techTermStyles = twMerge(
    "font-mono text-sm px-1.5 py-0.5 rounded-md",
    "bg-slate-500/10 dark:bg-blue-400/10",
    "text-blue-900/80 dark:text-blue-300",
    "ring-1 ring-inset ring-slate-500/10 dark:ring-blue-400/20"
  );

  return (
    <div className={twMerge("w-full font-sans", isDark ? "dark" : "")}>
      <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">

        <header className="text-center mb-12 sm:mb-16">

          <div className="w-full flex justify-start mb-8">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition"
            >
              <ArrowLeft className="w-4 h-4" /> Retour au test
            </button>
          </div>

          <h1 className={mainTitleClasses}>
              Mentions légales
          </h1>
          <p className={twMerge("max-w-3xl mx-auto mt-4", subheaderClasses)}>
              Document d'information et conditions d'utilisation du service.
          </p>
        </header>

        <main className="space-y-8">

          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="mb-4">
                  <h2 className={sectionHeaderTitleClasses}>Information</h2>
                  <h3 className={sectionMainTitleClasses}>1. Édition et contact</h3>
              </div>

              <p className={twMerge(bodyTextClasses, "mb-4")}>
                  Ce site web est édité à titre non-professionnel par un particulier.
              </p>
              <div className={twMerge("space-y-3", smallDetailTextClasses)}>
                  <p>
                      <span className={detailTitleClasses}>Statut :</span> Particulier anonyme (Statut non-commercial).
                  </p>
                  <p>
                      <span className={detailTitleClasses}>Contact :</span> contact@testpolitique.app
                  </p>
                  <p className="mt-4 text-xs italic opacity-80 pt-3 border-t border-slate-200 dark:border-slate-700/50">
                      L'identité complète de l'éditeur est préservée et connue uniquement de l'hébergeur, conformément aux dispositions de la loi.
                  </p>
              </div>
            </GlassTile>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '250ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="mb-4">
                  <h2 className={sectionHeaderTitleClasses}>Confidentialité</h2>
                  <h3 className={sectionMainTitleClasses}>2. Politique de confidentialité (RGPD)</h3>
              </div>

              <p className={twMerge(bodyTextClasses, "mb-6")}>
                  Nous garantissons l'absence totale de collecte de données personnelles pour le fonctionnement de ce test.
              </p>

              <ul className={twMerge("space-y-4", smallDetailTextClasses)}>
                  <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                          <strong className={detailTitleClasses}>Non-collecte :</strong> Aucune donnée personnelle (adresses IP, e-mail, identifiant, etc.) n'est collectée, stockée ou transmise à un serveur tiers.
                      </span>
                  </li>
                  <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                          <strong className={detailTitleClasses}>Traitement :</strong> Le calcul de votre profil et de vos résultats s'effectue entièrement en local, dans votre navigateur.
                      </span>
                  </li>
                  <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                          <strong className={detailTitleClasses}>Stockage :</strong> Le <span className={techTermStyles}>localStorage</span> de votre navigateur est utilisé pour sauvegarder temporairement votre progression du quiz sur votre appareil.
                      </span>
                  </li>
              </ul>
            </GlassTile>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="mb-4">
                  <h2 className={sectionHeaderTitleClasses}>Technique</h2>
                  <h3 className={sectionMainTitleClasses}>3. Hébergement du site</h3>
              </div>

              <p className={twMerge(bodyTextClasses, "mb-4")}>
                  Le site est hébergé par Vercel Inc., société spécialisée dans les plateformes de développement web performantes.
              </p>
              <div className={twMerge("space-y-3", smallDetailTextClasses)}>
                  <p>
                      <strong className={detailTitleClasses}>Raison sociale :</strong> Vercel Inc.
                  </p>
                  <p>
                      <strong className={detailTitleClasses}>Adresse :</strong> 340 S Lemon Ave #4137 Walnut, CA 91789, USA
                  </p>
              </div>
            </GlassTile>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '550ms' }}>
            <GlassTile className="p-6 sm:p-8">
              <div className="mb-4">
                  <h2 className={sectionHeaderTitleClasses}>Légal</h2>
                  <h3 className={sectionMainTitleClasses}>4. Propriété intellectuelle</h3>
              </div>

              <p className={twMerge(bodyTextClasses, "mb-4")}>
                  L'ensemble du code source, des textes du test et de la structure du site est la propriété exclusive de l'éditeur, protégé par les lois sur la propriété intellectuelle.
              </p>
              <p className={twMerge(bodyTextClasses, "text-xs italic opacity-90")}>
                  Les éléments visuels, tels que les logos des partis politiques, sont utilisés à des fins d'information et d'illustration uniquement, conformément au droit de citation.
              </p>
            </GlassTile>
          </div>

          <div className="pt-12 text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3">
              Prêt à lancer le test ?
            </h2>
            <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-400 mb-8">
              Notre algorithme analyse vos réponses pour vous situer dans le paysage politique français.
            </p>
            <GlassButton
                onClick={onBack}
                variant="primary"
                icon={<ArrowRight className="w-10 h-10" />}
                className="px-10 py-5 text-2xl"
            >
                Commencer
            </GlassButton>
          </div>

        </main>
      </div>
    </div>
  );
};

export default MentionsLegales;
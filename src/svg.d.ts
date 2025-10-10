// svg.d.ts

// Déclare les modules se terminant par '.svg' ou '.svg?react' comme des composants React.
declare module '*.svg?react' {
  import * as React from 'react';
  
  // Définit le type du composant comme un composant fonctionnel React (React.FC)
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
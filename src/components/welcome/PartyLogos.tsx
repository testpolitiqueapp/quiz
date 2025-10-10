// src/components/welcome/PartyLogos.tsx

import React, { useState } from 'react';
import { PARTIES } from '../../parties';

export const PartyLogos: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const handleClick = (partyId: string) => {
    setActiveTooltip(activeTooltip === partyId ? null : partyId);
  };

  const handleMouseEnter = (partyId: string) => {
    setActiveTooltip(partyId);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <>
      <style>{`
        .static-logo-wall {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          row-gap: 0.25rem; 
          column-gap: 1rem;  
        }

        .static-logo-item {
          height: 3rem; /* Taille par défaut : h-12 (48px) */
        }

        .logo-container {
          position: relative;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .logo-container:hover {
          transform: scale(1.05);
        }

        .tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 0.5rem;
          padding: 0.5rem 0.75rem;
          background-color: ${isDark ? '#374151' : '#1f2937'};
          color: white;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 500;
          white-space: nowrap;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, visibility 0.2s ease;
          pointer-events: none;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: ${isDark ? '#374151' : '#1f2937'};
        }

        .tooltip.active {
          opacity: 1;
          visibility: visible;
        }

        @media (max-width: 767px) {
          .static-logo-item {
            height: 2.25rem; /* Taille sur mobile : h-9 (36px) */
          }
          
          .tooltip {
            font-size: 0.75rem;
            padding: 0.375rem 0.5rem;
          }
        }

        /* Styles pour les appareils tactiles */
        @media (hover: none) and (pointer: coarse) {
          .logo-container:hover {
            transform: none;
          }
          
          .logo-container:active {
            transform: scale(0.95);
          }
        }
      `}</style>
      
      <div className="static-logo-wall">
        {PARTIES.map((party) => {
          const pngSrc = isDark ? party.logo.dark : party.logo.light;
          const webpSrc = `${pngSrc}?webp`;
          const isTooltipActive = activeTooltip === party.id;

          return (
            <div
              key={party.id}
              className="logo-container"
              onClick={() => handleClick(party.id)}
              onMouseEnter={() => handleMouseEnter(party.id)}
              onMouseLeave={handleMouseLeave}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleClick(party.id);
                }
              }}
            >
              <picture>
                <source srcSet={webpSrc} type="image/webp" />
                <img
                  src={pngSrc}
                  alt={party.name}
                  className="static-logo-item"
                />
              </picture>
              
              <div className={`tooltip ${isTooltipActive ? 'active' : ''}`}>
                {party.name}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

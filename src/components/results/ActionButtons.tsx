// src/components/results/ActionButtons.tsx

import React from 'react';
import { RefreshCw } from 'lucide-react';
import { GlassButton } from '../ui/GlassButton';
import { InviteButton } from './InviteButton'; 
interface ActionButtonsProps {
  onRestart: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onRestart }) => {
  return (
    <div className="max-w-7xl mx-auto mt-8 flex flex-col sm:flex-row gap-4 p-4">
      <GlassButton 
        onClick={onRestart} 
        variant="tertiary" 
        icon={<RefreshCw className="w-5 h-5" />}
        className="flex-1"
      >
        Nouveau test
      </GlassButton>
      
      <InviteButton className="flex-1" />
    </div>
  );
};
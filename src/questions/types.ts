export type Question = {
  id: number;
  text: string;
  importance: number;
  axis: 'economic' | 'societal';
  tags?: string[];
  tags_primaires?: string[];    
  tags_secondaires?: string[];  
  isDealBreaker?: boolean;
  direction?: -1 | 1; 
  description: string;
  positions: {
    [partyId: string]: {
      stance: number;
      nuance?: string;
      source?: string;
    } | number; 
  };
};
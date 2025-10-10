import type { Question as BaseQuestion } from '../questions/types';
import type { Party as BaseParty } from '../parties';

export type IconName = 'Flower' | 'PawPrint' | 'FlagTriangleRight' | 'ShieldCheck' | 'HeartPulse' | 'UserCheck' | 'Lock' | 'Church' | 'Star' | 'Factory' | 'HeartHandshake' | 'Tractor' | 'Castle' | 'Baby' | 'ReceiptEuro' | 'Bot' | 'Landmark' | 'Atom' | 'BookText' | 'Wallet' | 'Scale' | 'Rainbow' | 'Zap' | 'Venus'; // <-- AJOUT ICI

export interface PrismInfo {
  name: string;
  icon: IconName;
  description: string;
}

export type PrismsDataMap = {
  [key: string]: PrismInfo;
};

export type TagScores = {
  [key: string]: {
    score: number;
    hasConviction: boolean;
  };
};

export type QuizQuestion = BaseQuestion & {
  categoryName: string;
  icon: string;
};

export type FinalResultItem = BaseParty & {
  percentage: number;
};

export type CategoriesByName = {
  [id: number]: {
    categoryName: string;
    icon: string;
  };
};

export interface ConvictionData {
  question: QuizQuestion;
  answer: number;
  time: number;
}

export type PositionEntry = { stance: number } | number;
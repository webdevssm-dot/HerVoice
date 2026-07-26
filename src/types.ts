export type TabType = 'home' | 'rights' | 'spotlights' | 'dream-board' | 'resources';

export interface Spotlight {
  id: string;
  name: string;
  category: 'Science' | 'Business' | 'Sports' | 'Leadership';
  quoteOrHeadline: string;
  description: string;
  fullStory?: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  country?: string;
  subCategory?: string;
}

export interface ResourceAsset {
  id: string;
  title: string;
  type: 'Illustration' | 'Template' | 'Icon Set' | 'Photo' | 'Sketches' | 'Photos';
  format: string;
  image: string;
  imageAlt: string;
  wide?: boolean;
  isNew?: boolean;
  itemCount?: string;
  downloadUrl?: string;
  description?: string;
}

export interface DreamGoal {
  id: string;
  category: 'Education' | 'Leadership' | 'Creative Arts';
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  targetDate?: string;
  rotation: number;
  completedTasks?: { id: string; text: string; done: boolean }[];
  contributors?: string[];
  hasIllustrationPlaceholder?: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: { text: string; isCorrect: boolean }[];
  explanation: string;
}

export interface RightPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorClass: 'primary' | 'secondary' | 'tertiary';
  points: string[];
  fullDetails: string;
}

export type TabType = 'home' | 'rights' | 'spotlights' | 'dream-board' | 'resources' | 'about';

export interface Spotlight {
  id: string;
  name: string;
  category: 'Science' | 'Business' | 'Sports' | 'Leadership' | 'Creative Arts';
  quoteOrHeadline: string;
  description: string;
  fullStory?: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  country?: string;
  subCategory?: string;
  officialSource?: string;
  sourceUrl?: string;
  achievements?: string[];
}

export interface ResourceAsset {
  id: string;
  title: string;
  type: 'Illustration' | 'Template' | 'Icon Set' | 'Photo' | 'Sketches' | 'Photos' | 'Guidebook' | 'Handbook' | 'Directory' | 'Toolkit';
  format: string;
  image: string;
  imageAlt: string;
  wide?: boolean;
  isNew?: boolean;
  itemCount?: string;
  downloadUrl?: string;
  description?: string;
  officialPublisher?: string;
  citation?: string;
  sourceUrl?: string;
  fileSize?: string;
  keyTakeaways?: string[];
  packSections?: { heading: string; content: string; bulletPoints?: string[] }[];
}

export interface DreamGoal {
  id: string;
  category: 'Education' | 'Leadership' | 'Creative Arts' | 'Legal & Health';
  tier?: 'Major Initiative' | 'Community Project' | 'Personal Goal';
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  targetDate?: string;
  rotation?: number;
  completedTasks?: { id: string; text: string; done: boolean }[];
  contributors?: string[];
  hasIllustrationPlaceholder?: boolean;
  progressPercent?: number;
  impactMetric?: string;
  location?: string;
  cheersCount?: number;
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
  legalReference?: string;
  officialCitation?: string;
  sourceUrl?: string;
}


export interface Floor {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface MarketingPost {
  id: number;
  title: string;
  content: string;
  platform: 'facebook' | 'instagram' | 'tiktok';
}

export interface AdCopy {
  id: number;
  type: string;
  text: string;
  cta: string;
}

export interface TimelineEvent {
  month: string;
  goal: string;
  budget: string;
  weeks: {
    week: string;
    activities: string[];
  }[];
}

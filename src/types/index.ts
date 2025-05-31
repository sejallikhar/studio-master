
export interface LinkItem {
  name: string;
  url: string;
}

export interface TechDoc {
  id: string;
  title: string;
  description: string;
  url: string; // Main documentation URL
  tags: string[];
  lastUpdated?: string;
  favicon?: string;
  tutorialUrl?: string;
  appLinks?: LinkItem[];
  communityLinks?: LinkItem[];
  supportLinks?: LinkItem[];
}

export interface TechEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  url: string;
  tags: string[];
  imageUrl?: string;
}

export interface TrendingTopic {
  id: string;
  title: string;
  source: string; // e.g., GitHub, Hacker News, X
  summary: string;
  url: string;
  tags: string[];
  imageUrl?: string;
}

export interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  disabled?: boolean;
}


export interface Badge {
  id: string;
  label: string;
  color: 'indigo' | 'green' | 'amber' | 'blue' | 'rose' | 'purple';
  icon: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  price: number;
  tags: string[];
  bio: string;
  languages: string[];
  badges: Badge[];
}

export interface ReviewRequest {
  id: string;
  repoUrl: string;
  status: 'pending' | 'in-progress' | 'completed';
  mentorId: string;
  timestamp: number;
  price: number;
  feedback?: string;
  codeInsights?: CodeInsight[];
}

export interface CodeInsight {
  file: string;
  line: number;
  severity: 'high' | 'medium' | 'low';
  message: string;
  suggestion: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
  isAi?: boolean;
}

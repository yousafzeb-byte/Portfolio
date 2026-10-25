export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

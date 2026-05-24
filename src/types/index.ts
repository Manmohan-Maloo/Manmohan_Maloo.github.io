export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  stats: Stat[];
  location: string;
  availability: string;
}

export interface AboutData {
  summary: string;
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  bullets: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  code?: string;
  gradient: string;
}

export interface Skill {
  id: string;
  name: string;
  logo?: string;
  bgColor: string;
  textColor: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  experience: Experience[];
  projects: Project[];
  skillCategories: SkillCategory[];
  certifications: string[];
}

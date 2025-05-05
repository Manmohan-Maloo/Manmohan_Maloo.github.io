export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  code: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface PortfolioData {
  projects: Project[];
  skills: Skill[];
}

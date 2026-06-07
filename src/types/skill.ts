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

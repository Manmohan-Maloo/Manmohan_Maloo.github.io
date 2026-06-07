import type { HeroData } from "./hero";
import type { AboutData } from "./about";
import type { Experience } from "./experience";
import type { Project } from "./project";
import type { SkillCategory } from "./skill";

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  experience: Experience[];
  projects: Project[];
  skillCategories: SkillCategory[];
  certifications: string[];
}

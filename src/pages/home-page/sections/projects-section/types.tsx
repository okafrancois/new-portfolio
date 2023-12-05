import { Skill } from "../skills-section/SkillsSection.tsx";

export interface Project {
  id: string;
  role: string;
  enterprise: string;
  description: string;
  image: string;
  link: string;
  technologies: Skill[];
}
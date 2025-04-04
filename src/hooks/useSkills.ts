import { SkillCategory } from '../types/skills';
import skillsData from '../data/skills.json';

export const useSkills = (): SkillCategory[] => {
  return skillsData.categories;
}; 
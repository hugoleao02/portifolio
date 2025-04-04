export interface Skill {
  name: string;
  level: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
} 
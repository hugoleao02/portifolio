export interface Skill {
  name: string;
  level: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Project {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  link: string;
  icone: string;
  imagem: string;
} 
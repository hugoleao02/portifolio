import { SkillCategory, Project } from '../types';

export const SKILLS: SkillCategory[] = [
  {
    category: "Backend",
    items: [
      { name: "Java", level: "Intermediário", icon: "☕" },
      { name: "Spring Boot", level: "Intermediário", icon: "🍃" },
      { name: "APIs REST", level: "Intermediário", icon: "🔌" },
      { name: "JPA/Hibernate", level: "Intermediário", icon: "💾" }
    ]
  },
  {
    category: "Banco de Dados",
    items: [
      { name: "MySQL", level: "Intermediário", icon: "🗄️" },
      { name: "PostgreSQL", level: "Intermediário", icon: "🐘" }
    ]
  },
  {
    category: "DevOps & Ferramentas",
    items: [
      { name: "Git", level: "Intermediário", icon: "📦" },
      { name: "Docker", level: "Intermediário", icon: "🐳" },
      { name: "Maven", level: "Intermediário", icon: "🎯" }
    ]
  }
];

export const HIGHLIGHTED_PROJECTS: Project[] = [
  {
    titulo: "Business Intelligence Backend",
    descricao: "Sistema backend para análise de dados e business intelligence",
    tecnologias: ["Java", "Spring Boot", "PostgreSQL"],
    link: "https://github.com/hugoleao02/business-intelligence-backend",
    icone: "📊",
    imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
  },
  {
    titulo: "Monitoramento de Desempenho App",
    descricao: "Aplicação frontend para monitoramento de desempenho",
    tecnologias: ["TypeScript", "React", "Next.js"],
    link: "https://github.com/hugoleao02/monitoramento-desempenho-app",
    icone: "📱",
    imagem: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3"
  },
  {
    titulo: "Spring Boot Finanças",
    descricao: "Sistema de controle financeiro com Spring Boot",
    tecnologias: ["Java", "Spring Boot", "MySQL"],
    link: "https://github.com/hugoleao02/spring-boot-financas",
    icone: "💰",
    imagem: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3"
  }
]; 
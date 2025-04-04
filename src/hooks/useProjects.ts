import { Project } from '../types/projects';

const projectsData = {
  projects: [
    {
      titulo: "Business Intelligence Backend",
      descricao: "Sistema backend para análise de dados e business intelligence",
      tecnologias: ["Java", "Spring Boot", "PostgreSQL"],
      link: "https://github.com/hugoleao02/business-intelligence-backend",
      icone: "📊",
      imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
      featured: true
    },
    {
      titulo: "Monitoramento de Desempenho App",
      descricao: "Aplicação frontend para monitoramento de desempenho",
      tecnologias: ["TypeScript", "React", "Next.js"],
      link: "https://github.com/hugoleao02/monitoramento-desempenho-app",
      icone: "📱",
      imagem: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3",
      featured: true
    },
    {
      titulo: "Monitoramento de Desempenho API",
      descricao: "API backend para monitoramento de desempenho",
      tecnologias: ["Java", "Spring Boot", "PostgreSQL"],
      link: "https://github.com/hugoleao02/monitoramento-desempenho-api",
      icone: "⚡",
      imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      featured: true
    },
    {
      titulo: "Hexagonal Desktop",
      descricao: "Aplicação desktop usando arquitetura hexagonal",
      tecnologias: ["Java", "JavaFX", "Arquitetura Hexagonal"],
      link: "https://github.com/hugoleao02/hexagonal-desktop",
      icone: "💻",
      imagem: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3",
      featured: true
    },
    {
      titulo: "Hexagonal Sistema",
      descricao: "Sistema usando arquitetura hexagonal",
      tecnologias: ["Java", "Spring Boot", "Arquitetura Hexagonal"],
      link: "https://github.com/hugoleao02/hexagonal-sistema",
      icone: "🏗️",
      imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      featured: true
    },
    {
      titulo: "Hexagonal",
      descricao: "Projeto base para arquitetura hexagonal",
      tecnologias: ["Java", "Spring Boot", "Arquitetura Hexagonal"],
      link: "https://github.com/hugoleao02/hexagonal",
      icone: "🔷",
      imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      featured: true
    },
    {
      titulo: "Spring Boot Finanças",
      descricao: "Sistema de controle financeiro com Spring Boot",
      tecnologias: ["Java", "Spring Boot", "MySQL"],
      link: "https://github.com/hugoleao02/spring-boot-financas",
      icone: "💰",
      imagem: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3",
      featured: true
    },
    {
      titulo: "Cardápio",
      descricao: "Aplicação de cardápio digital",
      tecnologias: ["TypeScript", "React", "Next.js"],
      link: "https://github.com/hugoleao02/cardapio",
      icone: "🍽️",
      imagem: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3",
      featured: true
    },
    {
      titulo: "PetShop Spring Boot",
      descricao: "Sistema de gerenciamento de petshop",
      tecnologias: ["Java", "Spring Boot", "MySQL"],
      link: "https://github.com/hugoleao02/petshop-springboot",
      icone: "🐾",
      imagem: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3",
      featured: true
    }
  ]
};

export const useProjects = (): Project[] => {
  return projectsData.projects;
};

export const useFeaturedProjects = (): Project[] => {
  return projectsData.projects.filter(project => project.featured);
}; 
import { Profile } from '@/types/profile';

const profileData: Profile = {
  name: "Hugo Ferreira",
  title: "Desenvolvedor Java Backend",
  description: "Especializado em desenvolvimento de APIs RESTful e microsserviços com Spring Boot. Focado em criar soluções escaláveis e de alta qualidade.",
  image: "/images/profile.png",
  about: "Desenvolvedor Backend apaixonado por tecnologia e inovação, com sólida base em Java e Spring Boot. Destaco-me pela rápida curva de aprendizado e comprometimento com código limpo e boas práticas. Experiência prática com desenvolvimento de APIs RESTful, integração com bancos de dados e implementação de padrões de projeto. Sempre buscando aprender novas tecnologias e contribuir com soluções criativas para desafios complexos.",
  objectives: "Em constante evolução, busco uma oportunidade para aplicar e expandir meus conhecimentos em desenvolvimento backend. Comprometido com a excelência técnica, estou preparado para contribuir em projetos desafiadores, trabalhar em equipe e desenvolver soluções escaláveis. Meu foco está em crescer profissionalmente enquanto agrego valor real aos projetos e à equipe.",
  available: true,
  social: {
    github: "https://github.com/hugoleao02",
    linkedin: "https://linkedin.com/in/hugoleao02",
    email: "hugoleao02@example.com"
  }
};

export function useProfile() {
  return profileData;
} 
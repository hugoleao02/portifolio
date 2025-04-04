import { CertificateGroup } from '../types/certificates';

const certificatesData = {
  groups: [
    {
      title: "Desenvolvimento Java",
      institution: "DIO",
      description: "Formação completa em desenvolvimento Java, incluindo POO, Collections, Tratamento de Exceções e boas práticas.",
      icon: "☕",
      certificates: [
        {
          name: "Desenvolvimento Avançado em Java",
          file: "8B7A90A3.pdf"
        },
        {
          name: "Debugging Java",
          file: "D71CCFBA.pdf"
        },
        {
          name: "Tratamento de Exceções em Java",
          file: "FECF6AD4.pdf"
        }
      ]
    },
    {
      title: "Spring Framework",
      institution: "DIO",
      description: "Desenvolvimento de APIs RESTful com Spring Boot, incluindo Spring Security, Spring Data JPA e documentação com Swagger.",
      icon: "🍃",
      certificates: [
        {
          name: "Spring Framework",
          file: "BFB7D12C.pdf"
        },
        {
          name: "APIs REST com Spring Boot",
          file: "8C059B58.pdf"
        }
      ]
    },
    {
      title: "Git e GitHub",
      institution: "DIO",
      description: "Controle de versão, colaboração em equipe e boas práticas com Git e GitHub.",
      icon: "📦",
      certificates: [
        {
          name: "Git Fundamentals",
          file: "00B74338.pdf"
        },
        {
          name: "GitHub na Prática",
          file: "318AD151.pdf"
        }
      ]
    },
    {
      title: "Docker e Containers",
      institution: "DIO",
      description: "Containerização de aplicações, gerenciamento de imagens e containers Docker.",
      icon: "🐳",
      certificates: [
        {
          name: "Docker Essentials",
          file: "B75FC856.pdf"
        },
        {
          name: "Container Orchestration",
          file: "B9231AB6.pdf"
        }
      ]
    },
    {
      title: "JavaScript Moderno",
      institution: "DIO",
      description: "ES6+, módulos, promises, async/await e manipulação do DOM.",
      icon: "📱",
      certificates: [
        {
          name: "JavaScript ES6",
          file: "BA2EAF09.pdf"
        },
        {
          name: "JavaScript Assíncrono",
          file: "47DD0D47.pdf"
        }
      ]
    },
    {
      title: "Desenvolvimento Web",
      institution: "DIO",
      description: "HTML5, CSS3, JavaScript e desenvolvimento responsivo.",
      icon: "🌐",
      certificates: [
        {
          name: "HTML5 e CSS3",
          file: "F037C39C.pdf"
        },
        {
          name: "Web Design Responsivo",
          file: "D8EE88AD.pdf"
        }
      ]
    }
  ]
};

export const useCertificates = (): CertificateGroup[] => {
  return certificatesData.groups;
}; 
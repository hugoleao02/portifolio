'use client';

import { motion } from 'framer-motion';
import CertificadoCard from '../components/CertificadoCard';

export default function Certificacoes() {
  const certificacoes = {
    java: [
      {
        titulo: "Desenvolvimento Java",
        instituicao: "DIO",
        descricao: "Formação completa em desenvolvimento Java, incluindo POO, Collections, Tratamento de Exceções e boas práticas.",
        icone: "☕",
        certificados: [
          { nome: "Desenvolvimento Avançado em Java", arquivo: "8B7A90A3.pdf" },
          { nome: "Debugging Java", arquivo: "D71CCFBA.pdf" },
          { nome: "Tratamento de Exceções em Java", arquivo: "FECF6AD4.pdf" }
        ]
      },
      {
        titulo: "Spring Framework",
        instituicao: "DIO",
        descricao: "Desenvolvimento de APIs RESTful com Spring Boot, incluindo Spring Security, Spring Data JPA e documentação com Swagger.",
        icone: "🍃",
        certificados: [
          { nome: "Spring Framework", arquivo: "BFB7D12C.pdf" },
          { nome: "APIs REST com Spring Boot", arquivo: "8C059B58.pdf" }
        ]
      }
    ],
    devops: [
      {
        titulo: "Git e GitHub",
        instituicao: "DIO",
        descricao: "Controle de versão, colaboração em equipe e boas práticas com Git e GitHub.",
        icone: "📦",
        certificados: [
          { nome: "Git Fundamentals", arquivo: "00B74338.pdf" },
          { nome: "GitHub na Prática", arquivo: "318AD151.pdf" }
        ]
      },
      {
        titulo: "Docker e Containers",
        instituicao: "DIO",
        descricao: "Containerização de aplicações, gerenciamento de imagens e containers Docker.",
        icone: "🐳",
        certificados: [
          { nome: "Docker Essentials", arquivo: "B75FC856.pdf" },
          { nome: "Container Orchestration", arquivo: "B9231AB6.pdf" }
        ]
      }
    ],
    web: [
      {
        titulo: "JavaScript Moderno",
        instituicao: "DIO",
        descricao: "ES6+, módulos, promises, async/await e manipulação do DOM.",
        icone: "📱",
        certificados: [
          { nome: "JavaScript ES6", arquivo: "BA2EAF09.pdf" },
          { nome: "JavaScript Assíncrono", arquivo: "47DD0D47.pdf" }
        ]
      },
      {
        titulo: "Desenvolvimento Web",
        instituicao: "DIO",
        descricao: "HTML5, CSS3, JavaScript e desenvolvimento responsivo.",
        icone: "🌐",
        certificados: [
          { nome: "HTML5 e CSS3", arquivo: "F037C39C.pdf" },
          { nome: "Web Design Responsivo", arquivo: "D8EE88AD.pdf" }
        ]
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Certificações
          </h1>
          <p className="text-xl text-gray-600">
            Minhas certificações e conquistas profissionais
          </p>
        </motion.div>

        {/* Java */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-semibold text-gray-800 mb-6 flex items-center"
          >
            <span className="text-3xl mr-2">☕</span>
            Desenvolvimento Java
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certificacoes.java.map((cert, index) => (
              <CertificadoCard key={index} {...cert} />
            ))}
          </div>
        </motion.div>

        {/* DevOps */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-semibold text-gray-800 mb-6 flex items-center"
          >
            <span className="text-3xl mr-2">⚙️</span>
            DevOps e Ferramentas
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certificacoes.devops.map((cert, index) => (
              <CertificadoCard key={index} {...cert} />
            ))}
          </div>
        </motion.div>

        {/* Web Development */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-semibold text-gray-800 mb-6 flex items-center"
          >
            <span className="text-3xl mr-2">🌐</span>
            Desenvolvimento Web
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certificacoes.web.map((cert, index) => (
              <CertificadoCard key={index} {...cert} />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 
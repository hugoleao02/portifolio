'use client';

import { motion } from 'framer-motion';
import ProjetoCard from '../components/ProjetoCard';

export default function Projetos() {
  const projetos = [
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
      titulo: "Monitoramento de Desempenho API",
      descricao: "API para sistema de monitoramento de desempenho",
      tecnologias: ["Java", "Spring Boot", "PostgreSQL"],
      link: "https://github.com/hugoleao02/monitoramento-desempenho-api",
      icone: "🔌",
      imagem: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3"
    },
    {
      titulo: "Sistema Hexagonal Desktop",
      descricao: "Aplicação desktop com arquitetura hexagonal",
      tecnologias: ["Java", "Arquitetura Hexagonal"],
      link: "https://github.com/hugoleao02/hexagonal-desktop",
      icone: "🏗️",
      imagem: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3"
    },
    {
      titulo: "Sistema Hexagonal",
      descricao: "Implementação de sistema usando arquitetura hexagonal",
      tecnologias: ["Java", "Clean Architecture"],
      link: "https://github.com/hugoleao02/hexagonal-sistema",
      icone: "🔷",
      imagem: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3"
    },
    {
      titulo: "Spring Boot Finanças",
      descricao: "Sistema de controle financeiro com Spring Boot",
      tecnologias: ["Java", "Spring Boot", "MySQL"],
      link: "https://github.com/hugoleao02/spring-boot-financas",
      icone: "💰",
      imagem: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3"
    },
    {
      titulo: "Cardápio Digital",
      descricao: "Aplicação de cardápio digital com TypeScript",
      tecnologias: ["TypeScript", "React"],
      link: "https://github.com/hugoleao02/cardapio",
      icone: "🍽️",
      imagem: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3"
    }
  ];

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
            Projetos
          </h1>
          <p className="text-xl text-gray-600">
            Meus projetos mais recentes e relevantes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <ProjetoCard key={index} {...projeto} />
          ))}
        </div>
      </div>
    </main>
  );
} 
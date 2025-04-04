'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const skills = [
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

  const highlightedProjects = [
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Desenvolvedor Java Backend
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Especializado em desenvolvimento de APIs RESTful e microsserviços com Spring Boot.
                Focado em criar soluções escaláveis e de alta qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  href="/projetos"
                  className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
                >
                  Ver Projetos
                </Link>
                <Link
                  href="/contato"
                  className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300 text-center"
                >
                  Contato
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mt-8 md:mt-0"
            >
              <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                <Image
                  src="/images/profile.png"
                  alt="Hugo Ferreira"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 sm:px-6 py-2 rounded-full shadow-lg">
                <p className="text-blue-600 font-semibold text-sm sm:text-base">Disponível para projetos</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Habilidades Técnicas</h2>
            <p className="text-gray-600">Tecnologias que utilizo no desenvolvimento</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm text-blue-600">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Projetos em Destaque</h2>
            <p className="text-gray-600">Principais projetos desenvolvidos</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlightedProjects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{project.icone}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.titulo}</h3>
                    <p className="text-gray-600 mb-4">{project.descricao}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tecnologias.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projetos"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition duration-300"
            >
              Ver todos os projetos
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Perfil Profissional</h2>
            <p className="text-gray-600">Minha trajetória e objetivos</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sobre Mim</h3>
                <p className="text-gray-600">
                  Desenvolvedor Java Backend apaixonado por criar soluções robustas e escaláveis.
                  Focado em boas práticas de programação, clean code e padrões de projeto.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Objetivos</h3>
                <p className="text-gray-600">
                  Busco oportunidades para desenvolver aplicações backend complexas,
                  contribuir com equipes ágeis e continuar aprendendo novas tecnologias.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Formação</h3>
                <p className="text-gray-600">
                  Graduação em Análise e Desenvolvimento de Sistemas
                  com foco em desenvolvimento backend e arquitetura de software.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Certificações</h3>
                <Link
                  href="/certificacoes"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition duration-300"
                >
                  Ver todas as certificações
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-12 text-white"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Vamos Trabalhar Juntos?</h2>
            <p className="text-base sm:text-lg mb-8">
              Estou disponível para novos projetos e oportunidades.
              Entre em contato para conversarmos!
            </p>
            <Link
              href="/contato"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300 inline-block"
            >
              Entrar em Contato
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

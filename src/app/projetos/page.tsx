'use client';

import { motion } from 'framer-motion';
import ProjetoCard from '../components/ProjetoCard';
import { useProjects } from '../../hooks/useProjects';
import { COLORS, SIZES, ANIMATIONS } from '../../styles';

export default function Projetos() {
  const projects = useProjects();

  return (
    <main className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20`}>
      <div className={`${SIZES.container.max} mx-auto ${SIZES.padding.section}`}>
        <motion.div 
          {...ANIMATIONS.fadeIn}
          className="text-center mb-12"
        >
          <h1 className={`${SIZES.text.h1} font-bold mb-4`}>
            <span className={`bg-gradient-to-r ${COLORS.primary.blue} bg-clip-text text-transparent`}>
              Projetos
            </span>
          </h1>
          <p className={`${SIZES.text.base} ${COLORS.secondary.text}`}>
            Meus projetos mais recentes e relevantes
          </p>
        </motion.div>

        <motion.div
          {...ANIMATIONS.stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjetoCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </main>
  );
} 
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '../../types/projects';
import { COLORS, SIZES, ANIMATIONS } from '../../styles';

interface ProjetoCardProps {
  project: Project;
  index: number;
}

export default function ProjetoCard({ project, index }: ProjetoCardProps) {
  return (
    <motion.div
      {...ANIMATIONS.slideIn}
      transition={{ delay: index * 0.1 }}
      className={`${COLORS.white.bg} ${SIZES.rounded.large} shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300`}
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.imagem}
          alt={project.titulo}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={`${SIZES.padding.card}`}>
        <div className="flex items-start gap-4">
          <div className={`text-4xl bg-gradient-to-br ${COLORS.primary.blue} p-4 ${SIZES.rounded.medium}`}>
            {project.icone}
          </div>
          <div className="flex-1">
            <h3 className={`font-semibold ${COLORS.dark.text} ${SIZES.text.h4} mb-2`}>
              {project.titulo}
            </h3>
            <p className={`${COLORS.secondary.text} mb-4`}>
              {project.descricao}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tecnologias.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className={`px-2 py-1 ${SIZES.text.small} ${SIZES.rounded.full} ${COLORS.primary.bg} ${COLORS.white.text}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center ${COLORS.primary.text} ${COLORS.primary.hover.text} transition-colors`}
            >
              Ver Projeto
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 
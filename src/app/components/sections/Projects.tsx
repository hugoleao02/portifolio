import { Project } from '../../../types/projects';
import { useFeaturedProjects } from '../../../hooks/useProjects';
import { COLORS, SIZES, ANIMATIONS } from '../../../styles';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.div
    {...ANIMATIONS.slideIn}
    transition={{ delay: index * 0.1 }}
  >
    <div className={`${COLORS.white.bg} ${SIZES.rounded.large} shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300`}>
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
              {project.tecnologias.map((tech: string, techIdx: number) => (
                <span
                  key={techIdx}
                  className={`px-2 py-1 ${SIZES.text.small} ${SIZES.rounded.full} ${COLORS.primary.bg} ${COLORS.white.text}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <Button href={project.link} variant="outline">
              Ver Projeto
            </Button>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const Projects = () => {
  const projects = useFeaturedProjects();

  return (
    <section className={`${SIZES.padding.section} ${COLORS.secondary.bg}`}>
      <div className={`${SIZES.container.max} mx-auto`}>
        <motion.div
          {...ANIMATIONS.fadeIn}
          className="text-center mb-12"
        >
          <h2 className={`${SIZES.text.h2} font-bold mb-4`}>
            <span className={`bg-gradient-to-r ${COLORS.primary.blue} bg-clip-text text-transparent`}>
              Projetos Destacados
            </span>
          </h2>
          <p className={`${SIZES.text.base} ${COLORS.secondary.text}`}>
            Alguns dos meus trabalhos mais recentes
          </p>
        </motion.div>

        <motion.div
          {...ANIMATIONS.stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 
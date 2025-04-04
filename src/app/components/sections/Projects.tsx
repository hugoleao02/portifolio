import { Project } from '../../types';
import { HIGHLIGHTED_PROJECTS } from '../../constants';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { COLORS } from '../../constants/styles';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <Card index={index}>
    <div className="flex flex-col h-full">
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <img
          src={project.imagem}
          alt={project.titulo}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className={`${COLORS.secondary.text} font-semibold mb-2`}>{project.titulo}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{project.descricao}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tecnologias.map((tech: string, idx: number) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <Button href={project.link} variant="outline">
          Ver Projeto
        </Button>
      </div>
    </div>
  </Card>
);

export const Projects = () => {
  return (
    <Section
      title="Projetos Destacados"
      subtitle="Alguns dos meus trabalhos mais recentes"
      bgColor="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {HIGHLIGHTED_PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </Section>
  );
}; 
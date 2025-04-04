import { Container } from '@/components/ui/Container';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: 'Group Software',
    position: 'Desenvolvedor Java Júnior',
    period: 'Jan 2023 - Presente',
    description: [
      'Desenvolvimento e manutenção de APIs RESTful com Spring Boot',
      'Implementação de microsserviços e integração com sistemas legados',
      'Trabalho com bancos de dados PostgreSQL e mensageria com Kafka',
      'Participação em code reviews e implementação de boas práticas'
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Docker', 'Git']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <Container>
        <h2 className="text-3xl font-bold mb-12">Experiência Profissional</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">{exp.position}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 
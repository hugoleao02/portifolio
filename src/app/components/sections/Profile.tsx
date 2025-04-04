import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { COLORS } from '../../constants/styles';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProfileSection = ({ title, content }: { title: string; content: string }) => (
  <Card>
    <h3 className={`${COLORS.secondary.text} font-semibold mb-2`}>{title}</h3>
    <p className="text-gray-600">{content}</p>
  </Card>
);

export const Profile = () => {
  return (
    <Section
      title="Perfil Profissional"
      subtitle="Minha jornada e visão de futuro"
      bgColor="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProfileSection
          title="Sobre Mim"
          content="Desenvolvedor Backend apaixonado por tecnologia e inovação, com sólida base em Java e Spring Boot. Destaco-me pela rápida curva de aprendizado e comprometimento com código limpo e boas práticas. Experiência prática com desenvolvimento de APIs RESTful, integração com bancos de dados e implementação de padrões de projeto. Sempre buscando aprender novas tecnologias e contribuir com soluções criativas para desafios complexos."
        />
        <ProfileSection
          title="Objetivos"
          content="Em constante evolução, busco uma oportunidade para aplicar e expandir meus conhecimentos em desenvolvimento backend. Comprometido com a excelência técnica, estou preparado para contribuir em projetos desafiadores, trabalhar em equipe e desenvolver soluções escaláveis. Meu foco está em crescer profissionalmente enquanto agrego valor real aos projetos e à equipe."
        />
      </div>
    </Section>
  );
}; 
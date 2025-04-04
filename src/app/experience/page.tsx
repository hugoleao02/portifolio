'use client';

import { motion } from 'framer-motion';
import { COLORS, SIZES, ANIMATIONS } from '../../styles';
import experienceData from '../../data/experience.json';
import Link from 'next/link';
import Breadcrumb from '../../components/Breadcrumb';

interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  icon?: string;
  achievements: string[];
  technologies: string[];
}

interface Education {
  course: string;
  institution: string;
  period: string;
  duration: string;
}

interface ExperienceCardProps {
  exp: Experience;
  index: number;
}

interface EducationCardProps {
  edu: Education;
  index: number;
}

const ExperienceCard = ({ exp, index }: ExperienceCardProps) => (
  <motion.div
    {...ANIMATIONS.slideIn}
    transition={{ delay: index * 0.1 }}
    className={`${COLORS.white.bg} ${SIZES.rounded.large} shadow-lg p-8 hover:shadow-xl transition-all duration-300`}
  >
    <div className="flex items-start gap-6">
      <div className={`text-5xl bg-gradient-to-br ${COLORS.primary.blue} p-4 ${SIZES.rounded.medium}`}>
        {exp.icon || '💼'}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className={`font-semibold ${COLORS.dark.text} ${SIZES.text.h3} mb-2`}>
              {exp.position}
            </h3>
            <p className={`${COLORS.secondary.text} ${SIZES.text.base}`}>
              {exp.company}
            </p>
            <p className={`${COLORS.primary.text} ${SIZES.text.small}`}>
              {exp.period}
            </p>
          </div>
          <div className={`${COLORS.secondary.text} ${SIZES.text.small}`}>
            {exp.location}
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className={`font-semibold ${COLORS.dark.text} ${SIZES.text.h4} mb-3`}>
            Principais Conquistas
          </h4>
          <ul className="space-y-3">
            {exp.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className={`${COLORS.primary.text} mt-1`}>•</span>
                <span className={`${COLORS.secondary.text} ${SIZES.text.base}`}>
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={`font-semibold ${COLORS.dark.text} ${SIZES.text.h4} mb-3`}>
            Stack Tecnológica
          </h4>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, idx) => (
              <Link
                key={idx}
                href={`/skills#${tech.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-3 py-1 ${SIZES.text.small} ${SIZES.rounded.full} ${COLORS.primary.bg} ${COLORS.white.text} hover:opacity-80 transition-opacity`}
              >
                {tech}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const EducationCard = ({ edu, index }: EducationCardProps) => (
  <motion.div
    {...ANIMATIONS.slideIn}
    transition={{ delay: index * 0.1 }}
    className={`${COLORS.white.bg} ${SIZES.rounded.large} shadow-lg p-8 hover:shadow-xl transition-all duration-300`}
  >
    <div className="flex items-start gap-6">
      <div className={`text-5xl bg-gradient-to-br ${COLORS.primary.blue} p-4 ${SIZES.rounded.medium}`}>
        🎓
      </div>
      <div className="flex-1">
        <h3 className={`font-semibold ${COLORS.dark.text} ${SIZES.text.h3} mb-2`}>
          {edu.course}
        </h3>
        <p className={`${COLORS.secondary.text} ${SIZES.text.base}`}>
          {edu.institution}
        </p>
        <p className={`${COLORS.primary.text} ${SIZES.text.small}`}>
          {edu.period} ({edu.duration})
        </p>
      </div>
    </div>
  </motion.div>
);

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Início', href: '/' },
          { label: 'Experiência Profissional' }
        ]}
      />

      <motion.div
        {...ANIMATIONS.fadeIn}
        className="text-center mb-12"
      >
        <h1 className={`${SIZES.text.h1} font-bold mb-4`}>
          <span className={`bg-gradient-to-r ${COLORS.primary.blue} bg-clip-text text-transparent`}>
            Experiência Profissional
          </span>
        </h1>
        <p className={`${SIZES.text.base} ${COLORS.secondary.text}`}>
          Minha jornada como Desenvolvedor Java Júnior
        </p>
      </motion.div>

      <motion.div
        {...ANIMATIONS.stagger}
        className="space-y-8 mb-16"
      >
        {experienceData.experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </motion.div>

      <motion.div
        {...ANIMATIONS.fadeIn}
        className="text-center mb-12"
      >
        <h2 className={`${SIZES.text.h2} font-bold mb-4`}>
          <span className={`bg-gradient-to-r ${COLORS.primary.blue} bg-clip-text text-transparent`}>
            Formação Acadêmica
          </span>
        </h2>
        <p className={`${SIZES.text.base} ${COLORS.secondary.text}`}>
          Minha trajetória educacional
        </p>
      </motion.div>

      <motion.div
        {...ANIMATIONS.stagger}
        className="space-y-8 mb-16"
      >
        {experienceData.education.map((edu, index) => (
          <EducationCard key={index} edu={edu} index={index} />
        ))}
      </motion.div>

      <motion.div
        {...ANIMATIONS.fadeIn}
        className="text-center"
      >
        <Link
          href="/contact"
          className={`inline-block ${COLORS.primary.bg} ${COLORS.white.text} px-8 py-3 ${SIZES.rounded.large} hover:opacity-80 transition-opacity`}
        >
          Entre em Contato
        </Link>
      </motion.div>
    </div>
  );
} 
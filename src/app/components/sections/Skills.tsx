import { SkillCategory } from '../../types';
import { SKILLS } from '../../constants';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { useSkills } from '../../../hooks/useSkills';
import { COLORS, SIZES, ANIMATIONS } from '../../../styles';
import { motion } from 'framer-motion';

const SkillCard = ({ category, items, index }: { category: string; items: SkillCategory['items']; index: number }) => (
  <motion.div
    {...ANIMATIONS.slideIn}
    transition={{ delay: index * 0.1 }}
  >
    <Card index={index}>
      <h3 className={`${COLORS.secondary.text} font-semibold mb-4`}>{category}</h3>
      <div className="space-y-4">
        {items.map((skill, skillIdx) => (
          <div key={skillIdx} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{skill.icon}</span>
              <span className={`font-medium ${COLORS.secondary.text}`}>{skill.name}</span>
            </div>
            <span className={`${SIZES.text.small} ${COLORS.primary.text}`}>{skill.level}</span>
          </div>
        ))}
      </div>
    </Card>
  </motion.div>
);

export const Skills = () => {
  const skills = useSkills();

  return (
    <Section
      title="Habilidades Técnicas"
      subtitle="Tecnologias que utilizo no desenvolvimento"
      bgColor="white"
    >
      <motion.div
        {...ANIMATIONS.stagger}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {skills.map((category, idx) => (
          <SkillCard
            key={idx}
            category={category.category}
            items={category.items}
            index={idx}
          />
        ))}
      </motion.div>
    </Section>
  );
}; 
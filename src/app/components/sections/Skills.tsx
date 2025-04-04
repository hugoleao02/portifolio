import { SkillCategory } from '../../types';
import { SKILLS } from '../../constants';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { COLORS } from '../../constants/styles';

const SkillCard = ({ category, items, index }: { category: string; items: SkillCategory['items']; index: number }) => (
  <Card index={index}>
    <h3 className={`${COLORS.secondary.text} font-semibold mb-4`}>{category}</h3>
    <div className="space-y-4">
      {items.map((skill, skillIdx) => (
        <div key={skillIdx} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-medium text-gray-700">{skill.name}</span>
          </div>
          <span className={`text-sm ${COLORS.primary.text}`}>{skill.level}</span>
        </div>
      ))}
    </div>
  </Card>
);

export const Skills = () => {
  return (
    <Section
      title="Habilidades Técnicas"
      subtitle="Tecnologias que utilizo no desenvolvimento"
      bgColor="white"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {SKILLS.map((category, idx) => (
          <SkillCard
            key={idx}
            category={category.category}
            items={category.items}
            index={idx}
          />
        ))}
      </div>
    </Section>
  );
}; 
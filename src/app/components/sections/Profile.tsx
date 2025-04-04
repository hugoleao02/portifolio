import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { useProfile } from '../../../hooks/useProfile';
import { COLORS, SIZES } from '../../../styles';

const ProfileSection = ({ title, content }: { title: string; content: string }) => (
  <Card>
    <h3 className={`${COLORS.secondary.text} font-semibold mb-2`}>{title}</h3>
    <p className={`${COLORS.secondary.text}`}>{content}</p>
  </Card>
);

export const Profile = () => {
  const profile = useProfile();

  return (
    <Section
      title="Perfil Profissional"
      subtitle="Minha jornada e visão de futuro"
      bgColor="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProfileSection
          title="Sobre Mim"
          content={profile.about}
        />
        <ProfileSection
          title="Objetivos"
          content={profile.objectives}
        />
      </div>
    </Section>
  );
}; 
import { Section } from '../ui/Section';
import Button from '../ui/Button';
import { useProfile } from '../../../hooks/useProfile';
import { COLORS, SIZES, ANIMATIONS } from '../../../styles';
import { motion } from 'framer-motion';

export const ContactCTA = () => {
  const profile = useProfile();

  return (
    <Section
      title="Vamos trabalhar juntos?"
      subtitle="Estou disponível para novos projetos e oportunidades"
      bgColor="transparent"
    >
      <motion.div
        {...ANIMATIONS.fadeIn}
        className="text-center"
      >
        <p className={`${COLORS.secondary.text} mb-8 ${SIZES.container.medium} mx-auto`}>
          Se você está procurando um desenvolvedor backend experiente para seu próximo projeto,
          entre em contato! Estou sempre aberto a discutir novas ideias e oportunidades.
        </p>
        <Button href="/contato" variant="primary">
          Entrar em Contato
        </Button>
      </motion.div>
    </Section>
  );
}; 
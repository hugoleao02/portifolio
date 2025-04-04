import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { COLORS, ANIMATIONS } from '../../constants/styles';

export const ContactCTA = () => {
  return (
    <Section
      title="Vamos trabalhar juntos?"
      subtitle="Estou disponível para novos projetos e oportunidades"
      bgColor="transparent"
    >
      <div className="text-center">
        <p className={`${COLORS.secondary.text} mb-8 max-w-2xl mx-auto`}>
          Se você está procurando um desenvolvedor backend experiente para seu próximo projeto,
          entre em contato! Estou sempre aberto a discutir novas ideias e oportunidades.
        </p>
        <Button href="/contato" variant="primary">
          Entrar em Contato
        </Button>
      </div>
    </Section>
  );
}; 
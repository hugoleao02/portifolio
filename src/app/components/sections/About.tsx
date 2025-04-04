import { useProfile } from '@/hooks/useProfile';
import { Container } from '@/components/ui/Container';

export function About() {
  const profile = useProfile();

  return (
    <section id="about" className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Sobre Mim</h2>
          <div className="prose dark:prose-invert">
            <p>{profile.about}</p>
            <p className="mt-4">{profile.objectives}</p>
          </div>
        </div>
      </Container>
    </section>
  );
} 
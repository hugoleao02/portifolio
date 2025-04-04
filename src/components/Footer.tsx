import { Container } from './ui/Container';

export default function Footer() {
  return (
    <footer className="py-8">
      <Container>
        <div className="text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Hugo Ferreira - Desenvolvedor Java Júnior
        </div>
      </Container>
    </footer>
  );
} 
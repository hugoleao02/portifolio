import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Hugo Ferreira - Desenvolvedor Java Júnior
        </div>
      </div>
    </footer>
  );
} 
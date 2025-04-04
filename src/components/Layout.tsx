import Navigation from './Navigation';
import JsonLd from './JsonLd';
import Footer from './Footer';
import { Container } from './ui/Container';
import { Metadata } from './Metadata';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <Metadata title={title} description={description} path={pathname} />
      <JsonLd type="Person" />
      <JsonLd type="WebSite" />
      
      <header className="sticky top-0 z-50">
        <Navigation />
      </header>
      
      <main className="flex-grow">
        <Container className="py-8">
          {children}
        </Container>
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-800">
        <Footer />
      </footer>
    </div>
  );
} 
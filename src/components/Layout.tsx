import Navigation from './Navigation';
import JsonLd from './JsonLd';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd type="Person" />
      <JsonLd type="WebSite" />
      
      <header className="sticky top-0 z-50">
        <Navigation />
      </header>
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-800">
        <Footer />
      </footer>
    </div>
  );
} 
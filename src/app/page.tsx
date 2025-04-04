'use client';

import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import { ContactCTA } from './components/sections/ContactCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <ContactCTA />
    </main>
  );
}

'use client';

import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Profile } from './components/sections/Profile';
import { ContactCTA } from './components/sections/ContactCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Hero />
      <Skills />
      <Projects />
      <Profile />
      <ContactCTA />
    </main>
  );
}

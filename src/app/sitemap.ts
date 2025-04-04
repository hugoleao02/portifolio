import { MetadataRoute } from 'next';
import profile from '@/data/profile.json';
import projects from '@/data/projects.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hugoleao02.github.io';
  
  const routes = [
    '',
    '/projects',
    '/skills',
    '/experience',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const projectRoutes = projects.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.titulo.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
} 
import { MetadataRoute } from 'next';
import { useProfile } from '@/hooks/useProfile';

export default function sitemap(): MetadataRoute.Sitemap {
  const profile = useProfile();
  
  return [
    {
      url: 'https://hugoferreira.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://hugoferreira.dev/experience',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://hugoferreira.dev/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://hugoferreira.dev/skills',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://hugoferreira.dev/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
} 
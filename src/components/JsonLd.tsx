import { useProfile } from '@/hooks/useProfile';

interface JsonLdProps {
  type: 'Person' | 'WebSite';
}

export default function JsonLd({ type }: JsonLdProps) {
  const profile = useProfile();

  if (type === 'Person') {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: profile.name,
            jobTitle: profile.title,
            description: profile.description,
            image: profile.image,
            url: 'https://hugoferreira.dev',
            sameAs: [
              profile.social.github,
              profile.social.linkedin,
            ],
          }),
        }}
      />
    );
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: `${profile.name} - ${profile.title}`,
          url: 'https://hugoferreira.dev',
        }),
      }}
    />
  );
} 
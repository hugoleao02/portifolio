import Script from 'next/script';
import profile from '@/data/profile.json';

interface JsonLdProps {
  type: 'Person' | 'WebSite';
}

export default function JsonLd({ type }: JsonLdProps) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: 'Desenvolvedor Java Júnior',
    url: 'https://hugoleao02.github.io',
    sameAs: [
      profile.social.github,
      profile.social.linkedin
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Group Software',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Contagem',
        addressRegion: 'MG',
        addressCountry: 'BR'
      }
    },
    knowsAbout: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Kafka',
      'Docker',
      'Clean Architecture'
    ]
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Portfólio Hugo Ferreira',
    url: 'https://hugoleao02.github.io',
    description: 'Portfólio de Hugo Ferreira, Desenvolvedor Java Júnior especializado em Spring Boot, PostgreSQL e Kafka.',
    author: {
      '@type': 'Person',
      name: profile.name
    }
  };

  const jsonLd = type === 'Person' ? personJsonLd : websiteJsonLd;

  return (
    <Script
      id={`${type}-jsonld`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 
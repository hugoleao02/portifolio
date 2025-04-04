import { useProfile } from '@/hooks/useProfile';

interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
}

export function Metadata({ title, description, path = '', keywords = [] }: MetadataProps) {
  const profile = useProfile();
  const fullTitle = title ? `${title} | ${profile.name}` : `${profile.name} - ${profile.title}`;
  const fullDescription = description || profile.description;
  const url = `https://hugoferreira.dev${path}`;
  const defaultKeywords = [
    'desenvolvedor java',
    'desenvolvedor backend',
    'spring boot',
    'portfólio',
    'programador',
    'desenvolvedor web',
    ...keywords
  ];

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="author" content={profile.name} />
      <meta name="keywords" content={defaultKeywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <meta name="generator" content="Next.js" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={profile.image} />
      <meta property="og:site_name" content={profile.name} />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={profile.image} />
      <meta property="twitter:creator" content="@hugoleao02" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Alternates */}
      <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
      
      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
} 
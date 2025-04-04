import { Metadata } from 'next';
import seoData from '@/data/seo.json';

interface SEOProps {
  page?: keyof typeof seoData;
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string;
  canonicalUrl?: string;
}

export function generateMetadata({ 
  page = 'default',
  customTitle,
  customDescription,
  customKeywords,
  canonicalUrl
}: SEOProps): Metadata {
  const seo = seoData[page];
  const baseUrl = seoData.default.url;
  const currentUrl = canonicalUrl || `${baseUrl}${page === 'default' ? '' : `/${page}`}`;
  
  return {
    title: customTitle || seo.title,
    description: customDescription || seo.description,
    keywords: customKeywords || seo.keywords,
    authors: [{ name: seoData.default.author }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: currentUrl,
    },
    openGraph: {
      title: customTitle || seo.title,
      description: customDescription || seo.description,
      url: currentUrl,
      siteName: seoData.default.author,
      images: [
        {
          url: seoData.default.image,
          width: 800,
          height: 600,
          alt: seoData.default.author,
        },
      ],
      type: 'website' as const,
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: customTitle || seo.title,
      description: customDescription || seo.description,
      images: [seoData.default.image],
      creator: '@hugoleao02',
    },
    verification: {
      google: 'google-site-verification-code',
    },
    category: 'technology',
  };
} 
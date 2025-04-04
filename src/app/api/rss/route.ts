import { NextResponse } from 'next/server';
import { useProfile } from '@/hooks/useProfile';

export async function GET() {
  const profile = useProfile();
  const baseUrl = 'https://hugoferreira.dev';
  const currentDate = new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${profile.name} - ${profile.title}</title>
    <description>${profile.description}</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>pt-br</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <managingEditor>${profile.social.email}</managingEditor>
    <webMaster>${profile.social.email}</webMaster>
    <item>
      <title>Portfólio Atualizado</title>
      <description>Meu portfólio foi atualizado com novos projetos e experiências.</description>
      <link>${baseUrl}</link>
      <guid>${baseUrl}</guid>
      <pubDate>${currentDate}</pubDate>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 
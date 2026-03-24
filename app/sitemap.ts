import type { MetadataRoute } from 'next';

const BASE = 'https://ampedwebstudios.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/services/web-design', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/web-development', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/hosting-care', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/seo-local-search', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/website-refresh', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/industries', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/industries/home-services', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/contractors', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/restaurants', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/healthcare', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/real-estate', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/beauty-wellness', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/auto-services', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/creative-portfolio', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/legal-professional', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/fitness-sports', priority: 0.7, changeFrequency: 'monthly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: today,
    changeFrequency,
    priority,
  }));
}

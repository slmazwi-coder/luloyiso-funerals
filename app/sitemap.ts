import type { MetadataRoute } from 'next'

// Required for `output: 'export'` static HTML export
export const dynamic = 'force-static'

const baseUrl = 'https://luloyisofunerals.co.za'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: {
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: number
  }[] = [
    { path: '', changeFrequency: 'monthly', priority: 1 },
    { path: 'services', changeFrequency: 'monthly', priority: 0.8 },
    { path: 'tombstones', changeFrequency: 'monthly', priority: 0.8 },
    { path: 'scheme', changeFrequency: 'monthly', priority: 0.8 },
    { path: 'coffins', changeFrequency: 'monthly', priority: 0.7 },
    { path: 'contact', changeFrequency: 'yearly', priority: 0.6 },
  ]

  return routes.map(({ path, changeFrequency, priority }) => ({
    // trailingSlash: true means exported pages are served with a trailing slash
    url: `${baseUrl}/${path ? `${path}/` : ''}`,
    changeFrequency,
    priority,
  }))
}

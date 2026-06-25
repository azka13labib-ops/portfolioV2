import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://portfolio-minecraft-azka13labib-ops-projects.vercel.app/sitemap.xml',
  }
}

import type { MetadataRoute } from 'next'

const prodUrl = process.env.NEXT_PUBLIC_PROD_URL!

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: prodUrl,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: prodUrl + '/blog',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
	]
}

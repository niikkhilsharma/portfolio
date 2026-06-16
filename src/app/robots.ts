import type { MetadataRoute } from 'next'

const prodUrl = process.env.NEXT_PUBLIC_PROD_URL!

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			// here, putting '/' allows all the sub routes like - '/blog' etc.
			allow: ['/'],
			// disallow: [],
		},
		sitemap: prodUrl + '/sitemap.xml',
	}
}

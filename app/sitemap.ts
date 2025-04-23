import { MetadataRoute } from "next";

/**
 * Generates sitemap.xml with best SEO practices
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://itbridge-services.com";
  const lastModified = new Date();

  // Core pages
  const coreRoutes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/calendar`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9
    }
  ];

  // Course pages
  const courseRoutes = [
    {
      url: `${baseUrl}/courses`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/qa`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/pcm`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/power-bi`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/business-english`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/soft-skills`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/hr-starter`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }
  ];

  // Localized routes - add other locales
  const localizedRoutes = [
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/de`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/fr`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9
    }
  ];

  return [...coreRoutes, ...courseRoutes, ...localizedRoutes];
}

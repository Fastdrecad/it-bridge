import { MetadataRoute } from "next";

/**
 * Generates robots.txt with best SEO practices
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://itbridge-services.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/_next/",
        "/private/",
        "*.json$", // Prevent crawling of JSON files
        "*.js$", // Prevent crawling of JS files
        "*.css$" // Prevent crawling of CSS files
      ]
    },
    // Include sitemap paths
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}

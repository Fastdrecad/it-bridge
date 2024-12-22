import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // It allows all search engines to access
        allow: "/",
        disallow: ["/private/", "/admin/", "/login/"], // It blocks access to certain pages
        crawlDelay: 5 // Add a delay between requests, if necessary
      },
      {
        userAgent: "Googlebot", // Specific instructions for Googlebot
        allow: "/",
        disallow: ["/private/"],
        crawlDelay: 2 // 2 second delay for Googlebot
      }
    ],
    sitemap: "https://itbridge-services.com/sitemap.xml" // Correct URL for sitemap
  };
}

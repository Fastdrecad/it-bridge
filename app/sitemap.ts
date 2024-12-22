import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://itbridge-services.com";

  // Define all routes
  const routes = [
    "", // Homepage
    "/kursevi",
    "/kursevi/qa",
    "/kursevi/pcm",
    "/kursevi/power-bi",
    "/kursevi/business-english",
    "/kursevi/meke-vestine",
    "/kursevi/hr-starter",
    "/kontakt",
    "/kalendar"
  ];

  // Create sitemap entries for each route
  const sitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : route.startsWith("/kursevi/") ? 0.9 : 0.8
  }));

  return sitemap;
}

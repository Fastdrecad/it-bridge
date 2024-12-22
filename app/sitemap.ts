import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://itbridge-services.com";

  // Define all routes
  const routes = [
    "", // Homepage
    "/kursevi",
    "/o-nama",
    "/qa",
    "/pcm",
    "/kontakt",
    "/kalendar",
    "/power-bi",
    "/business-english",
    "/meke-vestine",
    "/hr-starter"
  ];

  // Create sitemap entries for each route
  const sitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8 // Homepage has priority 1, other pages 0.8
  }));

  return sitemap;
}

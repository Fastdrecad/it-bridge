import { MetadataRoute } from "next";
import { courses } from "./_data/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://itbridge-services.com";

  // Base routes
  const routes = ["", "/kursevi", "/kalendar", "/kontakt"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const, // Možda "yearly" zavisno od sadržaja
    priority: route === "" ? 1 : 0.8
  }));

  // Course routes
  const courseRoutes = courses.map((course) => ({
    url: `${baseUrl}/kursevi/${course.url}`, // Prilagoditi URL ako je potrebno
    lastModified: new Date(), // Možda želite koristiti datum poslednje izmene kursa
    changeFrequency: "monthly" as const, // Možda "yearly"
    priority: 0.6
  }));

  return [...routes, ...courseRoutes];
}

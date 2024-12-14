import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // Omogućava svim pretraživačima pristup
        allow: "/",
        disallow: ["/private/", "/admin/", "/login/"], // Blokira pristup određenim stranicama
        crawlDelay: 5 // Dodajte pauzu između zahteva, ako je potrebno
      },
      {
        userAgent: "Googlebot", // Specifične instrukcije za Googlebot
        allow: "/",
        disallow: ["/private/"],
        crawlDelay: 2 // Pauza od 2 sekunde za Googlebot
      }
    ],
    sitemap: "https://itbridge-services.com/sitemap.xml" // Tačan URL za sitemap
  };
}

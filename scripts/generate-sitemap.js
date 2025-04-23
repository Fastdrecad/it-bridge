const fs = require("fs");
const path = require("path");

/**
 * This script generates a static sitemap.xml file
 * Run it with 'node scripts/generate-sitemap.js'
 */
async function generateSitemap() {
  const baseUrl = "https://itbridge-services.com";
  const date = new Date().toISOString();

  // Define all routes for the site
  const routes = [
    // Core pages
    { path: "", changefreq: "weekly", priority: "1.0" },
    { path: "about", changefreq: "monthly", priority: "0.8" },
    { path: "contact", changefreq: "monthly", priority: "0.8" },
    { path: "calendar", changefreq: "weekly", priority: "0.9" },

    // Course pages
    { path: "courses", changefreq: "weekly", priority: "0.9" },
    { path: "qa", changefreq: "monthly", priority: "0.8" },
    { path: "pcm", changefreq: "monthly", priority: "0.8" },
    { path: "power-bi", changefreq: "monthly", priority: "0.8" },
    { path: "business-english", changefreq: "monthly", priority: "0.8" },
    { path: "soft-skills", changefreq: "monthly", priority: "0.8" },
    { path: "hr-starter", changefreq: "monthly", priority: "0.8" },

    // Localized routes - add other locales
    { path: "en", changefreq: "weekly", priority: "0.9" },
    { path: "de", changefreq: "weekly", priority: "0.9" },
    { path: "fr", changefreq: "weekly", priority: "0.9" }
  ];

  // Create the XML sitemap
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}/${route.path}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  // Create public directory if it doesn't exist
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write the sitemap to public directory
  const sitemapPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemapContent);

  console.log(`Sitemap generated at ${sitemapPath}`);
}

// Run the script
generateSitemap().catch(console.error);

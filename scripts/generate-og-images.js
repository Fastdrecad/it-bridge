const fs = require("fs");
const path = require("path");
const { createCanvas, loadImage, registerFont } = require("canvas");

/**
 * This script generates placeholder OpenGraph images for pages that don't have custom ones
 * It helps ensure all pages have proper social sharing images
 *
 * Requirements:
 * - npm install canvas
 * - Create a directory: public/og/
 *
 * Usage: node scripts/generate-og-images.js
 */
async function generateOgImages() {
  // Ensure the og directory exists
  const ogDir = path.join(process.cwd(), "public", "og");
  if (!fs.existsSync(ogDir)) {
    fs.mkdirSync(ogDir, { recursive: true });
  }

  // Register font for text rendering
  registerFont(
    path.join(process.cwd(), "public", "assets", "fonts", "inter-semibold.ttf"),
    {
      family: "Inter",
      weight: "semibold"
    }
  );

  // List of pages/courses to generate images for
  const pages = [
    {
      name: "home",
      title: "IT Bridge EDU Center",
      description: "Profesionalne obuke i kursevi",
      color: "#003087"
    },
    {
      name: "about",
      title: "O Nama",
      description: "Vaš partner u profesionalnoj transformaciji",
      color: "#003087"
    },
    {
      name: "contact",
      title: "Kontakt",
      description: "Kontaktirajte IT Bridge EDU Center",
      color: "#003087"
    },
    {
      name: "calendar",
      title: "Kalendar Obuka",
      description: "Predstojeće obuke i treninzi",
      color: "#003087"
    },
    {
      name: "courses",
      title: "Kursevi",
      description: "Profesionalne IT obuke i kursevi",
      color: "#003087"
    },
    {
      name: "pcm",
      title: "PCM Kurs",
      description: "Process Communication Model",
      color: "#005B9A"
    },
    {
      name: "power-bi",
      title: "Power BI Kurs",
      description: "Napredna analiza podataka",
      color: "#F2C811"
    },
    {
      name: "business-english",
      title: "Business English",
      description: "Unapredite svoje znanje poslovnog engleskog",
      color: "#DD0031"
    },
    {
      name: "meke-vestine",
      title: "Meke Veštine",
      description: "Razvijte ključne soft skills",
      color: "#8E5BA6"
    }
  ];

  // Logo path
  const logoPath = path.join(process.cwd(), "public", "logo.png");

  // Get logo or create a placeholder
  let logo;
  try {
    logo = await loadImage(logoPath);
  } catch (error) {
    console.warn(`Logo not found at ${logoPath}, using placeholder.`);
    // Create a placeholder logo if needed
  }

  // Generate images for each page
  for (const page of pages) {
    console.log(`Generating OG image for ${page.name}...`);

    // Create canvas (1200x630 is the standard OpenGraph image size)
    const canvas = createCanvas(1200, 630);
    const ctx = canvas.getContext("2d");

    // Draw gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, 630);
    gradient.addColorStop(0, page.color);
    gradient.addColorStop(1, shadeColor(page.color, -20)); // Darker shade of the color
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 630);

    // Draw logo if available
    if (logo) {
      // Calculate logo size and position (centered, 200px tall)
      const logoHeight = 200;
      const logoWidth = logo.width * (logoHeight / logo.height);
      const logoX = (1200 - logoWidth) / 2;
      const logoY = 100;

      ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);
    }

    // Draw title
    ctx.font = '64px "Inter"';
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(page.title, 600, 380);

    // Draw description
    ctx.font = '32px "Inter"';
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.fillText(page.description, 600, 450);

    // Save to file
    const outputPath = path.join(ogDir, `${page.name}.jpg`);
    const stream = fs.createWriteStream(outputPath);
    const buffer = canvas.toBuffer("image/jpeg", { quality: 0.95 });
    fs.writeFileSync(outputPath, buffer);

    console.log(`Generated ${outputPath}`);
  }

  console.log("All OpenGraph images generated successfully!");
}

// Helper function to darken or lighten a color
function shadeColor(color, percent) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  R = R > 0 ? R : 0;
  G = G > 0 ? G : 0;
  B = B > 0 ? B : 0;

  const RR =
    R.toString(16).length === 1 ? "0" + R.toString(16) : R.toString(16);
  const GG =
    G.toString(16).length === 1 ? "0" + G.toString(16) : G.toString(16);
  const BB =
    B.toString(16).length === 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}

// Run the script
generateOgImages().catch(console.error);

# IT Bridge SEO Implementation Guide

This document provides a quick reference for developers on how to implement and maintain SEO best practices in the IT Bridge website.

## Quick Start

Run these commands to prepare all SEO assets:

```bash
# Install canvas for OG image generation
npm install canvas

# Generate all OpenGraph images and sitemap
npm run prepare-seo
```

## Overview

The SEO implementation follows Next.js App Router metadata API and includes:

- ✅ Per-page metadata
- ✅ Dynamically generated OpenGraph images
- ✅ Structured data (JSON-LD)
- ✅ Multiple language support
- ✅ Sitemap generation
- ✅ Enhanced robots.txt

## How to Add Metadata to a New Page

1. Create a `metadata.ts` file in your page directory:

```typescript
// app/your-page/metadata.ts
import type { Metadata } from "next";
import { yourPageMetadataTranslations } from "@/lib/metadata";
import { createPageMetadata } from "@/lib/metadata.config";

export const metadata: Metadata = createPageMetadata({
  title: yourPageMetadataTranslations.sr.title,
  description: yourPageMetadataTranslations.sr.description,
  keywords: yourPageMetadataTranslations.sr.keywords,
  path: "your-page-path",
  openGraph: {
    type: "website",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "https://itbridge-services.com"
        }/og/your-image.jpg`,
        width: 1200,
        height: 630,
        alt: yourPageMetadataTranslations.sr.title
      }
    ]
  }
});
```

2. For course pages, use `createCourseMetadata` helper:

```typescript
// app/courses/your-course/metadata.ts
import { Metadata } from "next";
import { yourCourseMetadataTranslations } from "@/lib/metadata";
import { createCourseMetadata } from "@/lib/metadata.config";

export const metadata: Metadata = createCourseMetadata({
  slug: "your-course-slug",
  translations: yourCourseMetadataTranslations,
  locale: "sr"
});
```

## Adding OpenGraph Images

### Option 1: Use the Generator Script

1. Add your page to the `pages` array in `scripts/generate-og-images.js`
2. Run `npm run generate-og-images`

### Option 2: Create Custom OpenGraph Image

Create an `opengraph-image.tsx` file in your page directory:

```tsx
// app/your-page/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Your Page Title";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const interSemiBold = fetch(
    new URL("../public/assets/fonts/inter-semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={
          {
            /* Styles here */
          }
        }
      >
        {/* Content here */}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 600
        }
      ]
    }
  );
}
```

## Adding New Translations

Add new translations to `lib/metadata.translations.ts`:

```typescript
export const yourPageMetadataTranslations: LocalizedMetadata = {
  sr: {
    title: "Serbian Title",
    description: "Serbian description",
    keywords: ["keyword1", "keyword2"]
  },
  en: {
    title: "English Title",
    description: "English description",
    keywords: ["keyword1", "keyword2"]
  }
  // Add more languages as needed
};
```

## Important Files

- `lib/metadata.config.ts` - Core configuration
- `lib/metadata.translations.ts` - Translations
- `lib/schemas.ts` - Structured data schemas
- `app/robots.ts` - Robots.txt
- `app/sitemap.ts` - Dynamic sitemap
- `scripts/generate-sitemap.js` - Static sitemap generator
- `scripts/generate-og-images.js` - OG image generator

## SEO Testing

Before deploying, test your SEO:

1. Check metadata with browser dev tools
2. Validate OpenGraph with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
3. Validate structured data with [Rich Results Test](https://search.google.com/test/rich-results)
4. Check sitemap at `https://itbridge-services.com/sitemap.xml`

## Best Practices

- Include quality metadata on every page
- Use absolute URLs for images
- Include proper language alternates for multilingual content
- Keep all file paths consistent
- Regularly update the sitemap

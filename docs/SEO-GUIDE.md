# IT Bridge SEO Implementation Guide

This document explains the SEO best practices implemented for the IT Bridge website using Next.js App Router.

## Table of Contents

1. [Overview](#overview)
2. [Metadata Structure](#metadata-structure)
3. [Structured Data](#structured-data)
4. [Sitemap](#sitemap)
5. [Robots.txt](#robotstxt)
6. [OpenGraph and Social Sharing](#opengraph-and-social-sharing)
7. [Internationalization (i18n)](#internationalization-i18n)
8. [Web App Manifest](#web-app-manifest)
9. [Best Practices](#best-practices)

## Overview

The SEO implementation follows Next.js 14's App Router metadata API for optimal performance and flexibility. The approach is modular, type-safe, and follows a DRY (Don't Repeat Yourself) principle.

### Key Features:

- Centralized metadata configuration
- Localized metadata for multiple languages
- Structured data (JSON-LD) for rich results
- Dynamic and static sitemap generation
- Customizable OpenGraph images for social sharing
- Comprehensive robots.txt configuration
- Web App Manifest for PWA support

## Metadata Structure

The metadata structure is organized into the following files:

```
lib/
  ├── metadata.config.ts          # Configuration and helper functions
  ├── metadata.ts                 # Main export file
  ├── metadata.translations.ts    # Localized text content
  └── schemas.ts                  # Structured data schemas (JSON-LD)
```

### Using Metadata in Pages

Each page can define its metadata by creating a `metadata.ts` file:

```typescript
// app/courses/pcm/metadata.ts
import { Metadata } from "next";
import { pcmMetadataTranslations } from "@/lib/metadata";
import { createCourseMetadata } from "@/lib/metadata.config";

export const metadata: Metadata = createCourseMetadata({
  slug: "pcm",
  translations: pcmMetadataTranslations,
  locale: "sr"
});
```

## Structured Data

Structured data is implemented using JSON-LD for better search engine understanding. Example schemas include:

- Organization
- Course
- FAQPage
- BreadcrumbList

Schemas are added to pages using the `Script` component in layout.tsx:

```tsx
<Script
  id="organization-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(organizationSchema)
  }}
/>
```

## Sitemap

Two approaches for sitemaps are implemented:

1. **Dynamic Sitemap** - Using Next.js API routes (`app/sitemap.ts`)
2. **Static Sitemap** - Generated during build time (`scripts/generate-sitemap.js`)

The static sitemap is recommended for production and is automatically generated during the build process with the command:

```bash
npm run generate-sitemap
```

## Robots.txt

The robots.txt file is implemented using Next.js App Router conventions (`app/robots.ts`):

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_next/", "/private/"]
    },
    sitemap: "https://itbridge-services.com/sitemap.xml",
    host: "https://itbridge-services.com"
  };
}
```

## OpenGraph and Social Sharing

Dynamic OpenGraph images are generated using the Next.js Image Response API:

```typescript
// app/opengraph-image.tsx
export default async function Image() {
  return new ImageResponse(
    (
      <div style={{...}}>
        {/* Image content */}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [...]
    }
  );
}
```

Each page can also have its specific OpenGraph image defined in the metadata.

## Internationalization (i18n)

The SEO implementation supports multiple languages with:

- Localized metadata for each language
- Proper language alternates in the metadata
- Canonical URLs for language variants
- Hreflang annotations

## Web App Manifest

The Web App Manifest (`public/manifest.json`) provides information for Progressive Web App functionality:

```json
{
  "name": "IT Bridge EDU Center",
  "short_name": "IT Bridge",
  "description": "Profesionalne IT obuke i kursevi za pojedince i kompanije",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#003087",
  ...
}
```

## Best Practices

1. **DRY Principle** - Use helper functions like `createPageMetadata` and `createCourseMetadata`
2. **Type Safety** - All metadata objects are properly typed using Next.js `Metadata` type
3. **Localization** - Metadata is translated into multiple languages
4. **Performance** - Static generation of metadata where possible
5. **Accessibility** - Proper alt text, aria labels, and semantic HTML
6. **Testing** - Validate metadata using tools like [Lighthouse](https://developers.google.com/web/tools/lighthouse) or [Google's Rich Results Test](https://search.google.com/test/rich-results)

## How to Update Metadata

To update the metadata for a specific page:

1. Modify the translations in `lib/metadata.translations.ts` if needed
2. Create or update the page's `metadata.ts` file
3. Test the metadata using browser developer tools or SEO testing tools

For global metadata changes, update `lib/metadata.config.ts`.

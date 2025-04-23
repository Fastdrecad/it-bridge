/**
 * Utility functions for OpenGraph image generation
 */

import { NextFont } from "next/dist/compiled/@next/font";
import { Inter } from "next/font/google";

const BASE_URL = "https://itbridge-services.com";

/**
 * Get font configuration for OpenGraph images
 */
export async function getInterFontConfig() {
  // Simple approach using system fonts
  return [
    {
      name: "Segoe UI",
      style: "normal",
      weight: 400
    },
    {
      name: "Segoe UI",
      style: "normal",
      weight: 700
    }
  ];
}

/**
 * Ensure an image URL is absolute
 */
export function getAbsoluteImageUrl(imagePath: string): string {
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  // Make sure path starts with /
  const normalizedPath = imagePath.startsWith("/")
    ? imagePath
    : `/${imagePath}`;

  return `${BASE_URL}${normalizedPath}`;
}

/**
 * Validate and normalize OpenGraph metadata
 */
export function normalizeOpenGraphMetadata({
  title,
  description,
  url,
  image,
  type = "website"
}: {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
}) {
  return {
    title,
    description,
    type,
    url: url || BASE_URL,
    images: [
      {
        url: getAbsoluteImageUrl(image || "/og/opengraph-image.png"),
        width: 1200,
        height: 630,
        alt: title
      }
    ]
  };
}

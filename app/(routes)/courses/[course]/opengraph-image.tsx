import { ImageResponse } from "next/og";
import { getAbsoluteImageUrl } from "@/lib/opengraph-utils";
import { i18nConfig } from "@/lib/i18n-config";
import { courseMetadataBySlug } from "@/lib/metadata.translations";
import { mapCourseSlugToKey } from "@/utils/courseKeyMap";

// Route segment config
export const runtime = "edge"; // Make sure it runs on the edge for fast processing

// Define the image size and content type - optimal OG image size
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

// Image metadata with more descriptive alt text
export const alt =
  "IT Bridge EDU Center: Professional Course Certificate Program";

// Function to dynamically generate the Open Graph image based on course slug
export default async function Image({
  params
}: {
  params: { course: string; locale?: string };
}) {
  const { course, locale = i18nConfig.defaultLocale } = params;

  // Fetch the course data with locale awareness
  const courseData = await fetchCourseData(course, locale);

  // If course data is not found, return a branded fallback image
  if (!courseData) {
    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(to bottom, #005B9A, #003B64)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            fontFamily: "system-ui, sans-serif"
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              marginBottom: 24
            }}
          >
            {getLocalizedText(locale, {
              sr: "Kurs nije pronađen",
              en: "Course Not Found",
              de: "Kurs nicht gefunden"
            })}
          </div>
          <div
            style={{
              fontSize: 32,
              color: "white",
              textAlign: "center"
            }}
          >
            IT Bridge EDU Center
          </div>
        </div>
      ),
      { ...size }
    );
  }

  // Extract course-specific data with improved defaults
  const courseTitle = courseData.title || "IT Bridge Professional Course";
  const courseDescription =
    courseData.description ||
    (locale === "en"
      ? "Professional development and training"
      : "Professionelle Entwicklung und Schulung");

  // Ensure image URL is absolute
  const courseImage = getAbsoluteImageUrl(
    courseData.image || `/course-images/default-${locale}.png`
  );

  // Create more visually appealing and branded OG image
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom, #005B9A, #003B64)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          fontFamily: "system-ui, sans-serif",
          color: "white"
        }}
      >
        {/* Logo/Branding at top */}
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 40,
            fontSize: 24,
            fontWeight: "bold"
          }}
        >
          IT Bridge EDU Center
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: 900
          }}
        >
          {/* Course Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={courseImage}
            alt={`${courseTitle}`}
            width={220}
            height={220}
            style={{
              marginBottom: 40,
              objectFit: "contain",
              borderRadius: "8px",
              border: "4px solid rgba(255,255,255,0.2)"
            }}
          />
          <div
            style={{
              fontSize: 64,
              fontWeight: "bold",
              color: "white",
              marginBottom: 24,
              textAlign: "center",
              letterSpacing: "-0.02em",
              lineHeight: 1.2
            }}
          >
            {courseTitle}
          </div>
          <p
            style={{
              fontSize: 32,
              color: "white",
              opacity: 0.9,
              textAlign: "center",
              maxWidth: 840,
              lineHeight: 1.4
            }}
          >
            {courseDescription}
          </p>
        </div>

        {/* CTAs and social proof */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: "20px"
          }}
        >
          {getLocalizedText(locale, {
            sr: "Profesionalni program sertifikacije",
            en: "Professional Certificate Program",
            de: "Professionelles Zertifikatsprogramm"
          })}
        </div>
      </div>
    ),
    { ...size }
  );
}

// Improved course data function with locale support - use metadata translations
export async function fetchCourseData(
  courseSlug: string,
  locale: string = i18nConfig.defaultLocale
) {
  try {
    // Map course slug to metadata key using the same utility function used in page.tsx
    const courseKey = mapCourseSlugToKey(courseSlug);

    if (!courseKey) return null;

    // Get course metadata from central courseMetadataBySlug mapping
    const courseMetadata = courseMetadataBySlug[courseKey];

    if (!courseMetadata) return null;

    // Use the localized metadata if available
    const localizedMetadata =
      courseMetadata[locale] || courseMetadata[i18nConfig.fallbackLocale];

    if (!localizedMetadata) return null;

    return {
      title: localizedMetadata.title,
      description: localizedMetadata.description,
      image: `/course-images/${courseSlug}.png`,
      keywords: localizedMetadata.keywords
    };
  } catch (error) {
    console.error("Error loading course metadata:", error);
    return null;
  }
}

// Helper functions for localization with fallback
function getLocalizedText(
  locale: string,
  texts: Record<string, string>
): string {
  return texts[locale] || texts[i18nConfig.fallbackLocale] || "";
}

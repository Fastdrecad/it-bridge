import { ImageResponse } from "next/og";
import { getAbsoluteImageUrl } from "@/lib/opengraph-utils";
import { i18nConfig } from "@/lib/i18n-config";
import { defaultMetadata } from "@/lib/metadata.config";
import { homeMetadataTranslations } from "@/lib/metadata.translations";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "IT Bridge EDU Center";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

/**
 * Generate Open Graph image for the main page
 */
export default async function Image({
  params
}: {
  params?: { locale?: string };
}) {
  // Get locale from params or use default
  const locale = params?.locale || i18nConfig.defaultLocale;

  // Get localized metadata
  const localizedMetadata =
    homeMetadataTranslations[locale] ||
    homeMetadataTranslations[i18nConfig.fallbackLocale];

  // Set title and description from metadata
  const title =
    localizedMetadata?.title ||
    defaultMetadata.openGraph?.title?.toString() ||
    "IT Bridge EDU Center";
  const description =
    localizedMetadata?.description ||
    defaultMetadata.openGraph?.description?.toString() ||
    "Profesionalne obuke i kursevi za Vaš uspeh";

  // Get logo path
  const logoPath = getAbsoluteImageUrl("/logo.webp");

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
        {/* Logo at top */}
        <div
          style={{
            position: "absolute",
            top: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoPath}
            alt="IT Bridge Logo"
            width={120}
            height={120}
            style={{
              objectFit: "contain"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: "bold",
              color: "white",
              marginBottom: 24,
              textAlign: "center",
              letterSpacing: "-0.05em",
              lineHeight: 1.2,
              maxWidth: 900
            }}
          >
            {title}
          </div>
          <p
            style={{
              fontSize: 32,
              color: "white",
              opacity: 0.9,
              textAlign: "center",
              maxWidth: 800,
              lineHeight: 1.4
            }}
          >
            {description}
          </p>
        </div>

        {/* Footer at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "white",
            opacity: 0.7
          }}
        >
          itbridge-services.com
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}

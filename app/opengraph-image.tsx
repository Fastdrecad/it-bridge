import { ImageResponse } from "next/og";
import { getInterFontConfig } from "@/lib/opengraph-utils";

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
export default async function Image() {
  // Get font configuration
  const fonts = await getInterFontConfig();

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
          fontFamily: "Inter"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://itbridge-services.com/logo.png"
            alt="IT Bridge Logo"
            width={200}
            height={200}
            style={{ marginBottom: 40 }}
          />
          <h1
            style={{
              fontSize: 64,
              color: "white",
              marginBottom: 24,
              textAlign: "center",
              letterSpacing: "-0.05em",
              lineHeight: 1.2
            }}
          >
            IT Bridge EDU Center
          </h1>
          <p
            style={{
              fontSize: 32,
              color: "white",
              opacity: 0.9,
              textAlign: "center",
              maxWidth: 800
            }}
          >
            Profesionalne obuke i kursevi za Vaš uspeh
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts
    }
  );
}

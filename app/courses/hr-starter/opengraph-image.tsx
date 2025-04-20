import { ImageResponse } from "next/og";
import { getInterFontConfig } from "@/lib/opengraph-utils";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "HR Starter Kurs | IT Bridge EDU Center";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

/**
 * Generate Open Graph image for HR Starter course page
 */
export default async function Image() {
  // Get font configuration
  const fonts = await getInterFontConfig();

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom, #6C63FF, #4C46B2)",
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
            src="https://itbridge-services.com/course-images/hr.png"
            alt="HR Starter Logo"
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
            HR Starter Kurs
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
            Započnite karijeru u ljudskim resursima
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

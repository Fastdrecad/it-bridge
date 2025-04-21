import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Business English Kurs | IT Bridge EDU Center";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

/**
 * Generate Open Graph image for Business English course page
 */
export default async function Image() {
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
          fontFamily: "system-ui"
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
            src="https://itbridge-services.com/course-images/business-english.png"
            alt="Business English Logo"
            width={200}
            height={200}
            style={{ marginBottom: 40 }}
          />
          <div
            style={{
              fontSize: 64,
              fontWeight: "bold",
              color: "white",
              marginBottom: 24,
              textAlign: "center",
              letterSpacing: "-0.05em",
              lineHeight: 1.2
            }}
          >
            Business English Kurs
          </div>
          <p
            style={{
              fontSize: 32,
              color: "white",
              opacity: 0.9,
              textAlign: "center",
              maxWidth: 800
            }}
          >
            Verbessern Sie Ihre Englischkenntnisse für die Geschäftswelt
          </p>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}

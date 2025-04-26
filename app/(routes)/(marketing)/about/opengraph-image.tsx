import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About IT Bridge EDU Center";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

/**
 * Generate Open Graph image for the About page
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
            About IT Bridge EDU Center
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
            Learn more about our educational services
          </p>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}

import Image from "next/image";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export default async function OpenGraphImage({
  title,
  description,
  imagePath
}: {
  title: string;
  description: string;
  imagePath: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to right, #15103E, #A0C943)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px"
        }}
      >
        <Image
          src={imagePath}
          alt=""
          style={{
            width: "200px",
            height: "200px",
            marginBottom: "24px"
          }}
        />
        <h1
          style={{
            fontSize: "60px",
            color: "white",
            marginBottom: "16px",
            textAlign: "center"
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "32px",
            color: "white",
            textAlign: "center"
          }}
        >
          {description}
        </p>
      </div>
    ),
    size
  );
}

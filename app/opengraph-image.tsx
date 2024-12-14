import OpenGraphImage from "@/app/_components/OpenGraphImage";

export const runtime = "edge";

export const alt = "IT Bridge EDU Center";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default async function Image() {
  return OpenGraphImage({
    title: "IT Bridge EDU Center",
    description: "Profesionalni centar za IT obuke i treninge",
    imagePath: "/logo.png"
  });
}

import OpenGraphImage from "@/app/_components/OpenGraphImage";

export const runtime = "edge";

export const alt = "HR Starter Kurs | IT Bridge EDU Center";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default async function Image() {
  return OpenGraphImage({
    title: "HR Starter Kurs",
    description: "Profesionalna obuka za HR pozicije",
    imagePath: "/course-images/hr.png"
  });
}

import OpenGraphImage from "@/app/_components/OpenGraphImage";

export const runtime = "edge";

export const alt = "Excel Kurs | IT Bridge EDU Center";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default async function Image() {
  return OpenGraphImage({
    title: "Excel Kurs",
    description: "Napredni Excel kurs za poslovnu analizu podataka",
    imagePath: "/course-images/excel.png"
  });
}

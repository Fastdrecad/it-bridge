import { courses } from "@/app/config";
import Card from "@/app/_components/Card";
import Button from "./Button";

export default function Courses() {
  return (
    <section className="text-center py-6 mx-auto w-full max-w-7xl my-5  px-4">
      <h2 className="relative text-4xl font-extrabold mb-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600 bg-success">
        KURSEVI
      </h2>
      <ul className="grid grid-cols-fill-350 gap-8 relative mt-12 mx-auto">
        {courses.map((course, idx) => (
          <Card item={course} key={idx} />
        ))}
      </ul>
      <div className="flex justify-center my-20">
        <Button variant="warning" rounded className="px-12">
          KONTAKTIRAJTE NAS
        </Button>
      </div>
    </section>
  );
}

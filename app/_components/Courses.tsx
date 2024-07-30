import { courses } from "@/app/config";
import Card from "@/app/_components/Card";
import Button from "./Button";

export default function Courses() {
  return (
    <section className="max-w-5xl text-center py-6 mx-auto">
      <h2 className="relative text-4xl font-extrabold my-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:transform after:-translate-x-1/2 after:w-10 after:h-1 after:bg-green-400">
        KURSEVI
      </h2>
      <ul className="grid grid-cols-fill-300 gap-4 relative mt-12">
        {courses.map((course, idx) => (
          <Card item={course} key={idx} />
        ))}
      </ul>
      <div className="my-20">
        <Button text="KONTAKTIRAJTE NAS →" color="white" />
      </div>
    </section>
  );
}

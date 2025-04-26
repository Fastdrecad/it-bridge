"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { courses } from "@/data/courses"; // Importing the courses array

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectCourse = (courseUrl: string) => {
    setIsOpen(false);
    router.push(courseUrl);
  };

  useEffect(() => {
    const matchedCourse = courses.find((course) => pathname === course.url);
    console.log("Current pathname:", pathname);
    console.log("Matched Course:", matchedCourse);
    if (matchedCourse) {
      setSelectedCourse(matchedCourse.title);
    } else {
      setSelectedCourse("");
    }
  }, [pathname]);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow"
      >
        {selectedCourse || "Select a course"}
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full bg-white shadow-lg max-h-60 overflow-auto">
          {courses.map((course) => (
            <li
              key={course.id}
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSelectCourse(course.url)}
            >
              {course.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

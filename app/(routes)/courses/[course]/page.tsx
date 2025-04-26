import { notFound } from "next/navigation";
import CourseContent from "@/app/(routes)/courses/[course]/_components/CourseContent";
import { mapCourseSlugToKey } from "@/utils/courseKeyMap";
import { courseMetadataBySlug } from "@/lib/metadata.translations";
import { getMetadataByLocale } from "@/lib/metadata";
import { homeMetadataTranslations } from "@/lib/metadata.translations";
import { Metadata } from "next";
import { fetchCourseData } from "@/app/(routes)/courses/[course]/opengraph-image";
import Script from "next/script";
import { createCourseSchema, createBreadcrumbSchema } from "@/lib/schemas";

type Props = {
  params: { course: string; locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { course, locale } = params;

  const translations = courseMetadataBySlug[course];

  const ogImage = `/courses/${course}/opengraph-image`;

  // If course not found, fallback to a generic metadata
  if (!translations) {
    return getMetadataByLocale(
      locale,
      homeMetadataTranslations,
      "/images/og/default.jpg",
      "/courses"
    );
  }

  return getMetadataByLocale(
    locale,
    translations,
    ogImage,
    `/courses/${course}`,
    "article"
  );
}

export default function CoursePage({
  params
}: {
  params: { course: string; locale: string };
}) {
  const courseKey = mapCourseSlugToKey(params.course);

  if (!courseKey) return notFound();

  // Generate structured data for the course
  const courseSchema = createCourseSchema({
    name: params.course,
    description: `Professional ${params.course} course by IT Bridge EDU Center`,
    courseCode: `${params.course}-001`,
    duration: "P3M",
    price: { amount: 45000, currency: "RSD" },
    level: "Intermediate",
    prerequisites: ["Basic computer skills"]
  });

  // Create breadcrumb schema
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Courses", item: "/courses" },
    { name: params.course, item: `/courses/${params.course}` }
  ]);

  const structuredData = [courseSchema, breadcrumbSchema];

  return (
    <>
      <Script
        id={`${params.course}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <CourseContent course={courseKey} />
    </>
  );
}

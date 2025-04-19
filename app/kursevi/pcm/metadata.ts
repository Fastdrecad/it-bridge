import { Metadata } from "next";
import { createCourseMetadata } from "@/app/_lib/schemas";

export const metadata: Metadata = createCourseMetadata(
  "PCM",
  "Profesionalni PCM trening za unapređenje komunikacionih veština. Naučite kako da efikasno komunicirate u različitim poslovnim situacijama.",
  "pcm",
  "pcm"
);

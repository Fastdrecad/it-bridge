import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/kursevi`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/kursevi/hr-starter`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/kursevi/meke-vestine`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/kursevi/business-english`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/kursevi/pcm`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/kursevi/power-bi`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/kursevi/qa`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/kursevi/qa`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/kursevi/qa`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/kursevi/qa`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/kalendar`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/kontakt`,
      lastModified: new Date()
    }
  ];
}

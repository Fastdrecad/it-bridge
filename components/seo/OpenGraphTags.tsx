import Head from "next/head";

interface OpenGraphTagsProps {
  title: string;
  description: string;
  url: string;
  image: string;
  type?: string;
  siteName?: string;
}

/**
 * Component for manually adding OpenGraph tags to any page
 * Can be used in specific pages where you need additional control
 */
export default function OpenGraphTags({
  title,
  description,
  url,
  image,
  type = "website",
  siteName = "IT Bridge EDU Center"
}: OpenGraphTagsProps) {
  // Ensure image URL is absolute
  const absoluteImageUrl = image.startsWith("http")
    ? image
    : `https://itbridge-services.com${
        image.startsWith("/") ? "" : "/"
      }${image}`;

  return (
    <Head>
      {/* Essential OpenGraph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
    </Head>
  );
}

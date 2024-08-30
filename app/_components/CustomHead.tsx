"use client";

import Head from "next/head";
import { useMetadata } from "../_contexts/MetadataContext";

const CustomHead = () => {
  const metadata = useMetadata();

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {metadata.keywords && (
        <meta name="keywords" content={metadata.keywords} />
      )}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      {metadata.ogUrl && <meta property="og:url" content={metadata.ogUrl} />}
      {metadata.ogType && <meta property="og:type" content={metadata.ogType} />}
      {metadata.ogImage && (
        <meta property="og:image" content={metadata.ogImage} />
      )}
      {metadata.robots && <meta name="robots" content={metadata.robots} />}
      {metadata.ogUrl && <link rel="canonical" href={metadata.ogUrl} />}
    </Head>
  );
};

export default CustomHead;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  },
  images: {
    domains: ["itbridge-services.com"],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60
  },
  reactStrictMode: true,
  swcMinify: true
};

export default nextConfig;

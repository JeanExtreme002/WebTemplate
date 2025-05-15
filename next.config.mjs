/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Next.js 13+ static export mode
  images: {
    unoptimized: true, // disables incompatible Image Optimization API
  },
  trailingSlash: true, // Optional: recommended for gh-pages compatibility
};

export default nextConfig;

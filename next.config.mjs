/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/simpletodo",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;

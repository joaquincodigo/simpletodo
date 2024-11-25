/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/simpletodo",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/simpletodo",
  },
};

export default nextConfig;

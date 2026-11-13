import type { NextConfig } from "next";

const siteBasePath = "/Fotos-Site";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: siteBasePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: siteBasePath,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site generation — `next build` emits a static `out/` folder.
  output: "export",
  trailingSlash: true,
  images: {
    // Required for `output: "export"`: no on-demand optimizer at runtime.
    unoptimized: true,
  },
};

export default nextConfig;

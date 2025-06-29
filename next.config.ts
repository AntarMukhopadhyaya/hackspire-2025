import type { NextConfig } from "next";

// Vercel-ready: Linting is disabled for Vercel builds via the vercel-build script in package.json

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.glb$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/media/",
            outputPath: "static/media/",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;

// Vercel-ready: Linting is disabled for Vercel builds via the vercel-build script in package.json

/** @type {import('next').NextConfig} */
export default {
  // Image optimization for better performance
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/**",
      },
    ],
    // Modern image formats for better compression
    formats: ["image/webp", "image/avif"],
    // Optimize image sizes for different devices
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for longer
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    // Enable placeholder blur for better UX
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,

  // Server external packages (moved from experimental)
  serverExternalPackages: ["sharp", "onnxruntime-node"],

  // Turbopack configuration (moved from experimental)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // Experimental features for better performance
  experimental: {
    // Optimize package imports to reduce bundle size
    optimizePackageImports: [
      "react-icons",
      "lucide-react",
      "@fortawesome/react-fontawesome",
      "framer-motion",
      "sonner",
    ],
    // Improve build performance
    cpus: Math.max(1, (require("os").cpus().length || 1) - 1),
  },

  // Webpack optimizations
  webpack: (
    config: any,
    { dev, isServer }: { dev: boolean; isServer: boolean }
  ) => {
    // Production optimizations
    if (!dev) {
      // Bundle splitting for better caching
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          // Vendor libraries
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: 10,
            chunks: "all",
          },
          // React libraries
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: "react",
            priority: 20,
            chunks: "all",
          },
          // UI libraries
          ui: {
            test: /[\\/]node_modules[\\/](framer-motion|react-icons|lucide-react|@fortawesome)[\\/]/,
            name: "ui",
            priority: 15,
            chunks: "all",
          },
          // Common chunks
          common: {
            name: "common",
            minChunks: 2,
            priority: 5,
            chunks: "all",
            enforce: true,
          },
        },
      };

      // Minimize bundle size
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    // SVG optimization
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                "removeDimensions",
              ],
            },
          },
        },
      ],
    });

    // Font optimization
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/fonts/",
          outputPath: "static/fonts/",
          name: "[name].[contenthash].[ext]",
        },
      },
    });

    return config;
  },

  // Security and performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
      // Static assets caching
      {
        source: "/og-image.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
    ];
  },
};

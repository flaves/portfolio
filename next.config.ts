import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cache Components + Partial Prefetching: the Next.js 16.4 rendering model.
  // The root layout also sets `ensureStatic = 'navigation'` so every route
  // stays fully prerendered.
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  typedRoutes: true,
  experimental: {
    // Native Rust React Compiler inside Turbopack instead of the Babel plugin.
    turbopackRustReactCompiler: true,
    // Drop stale compilation work from the dev cache.
    turbopackGc: true,
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

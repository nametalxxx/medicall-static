/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    // WARNING: disables type-checking during build — not recommended for production
    ignoreBuildErrors: true,
  },
  images: {
      unoptimized: true,
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
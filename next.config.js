/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for Netlify static deployment
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevent ESLint errors from failing build
  },
}

module.exports = nextConfig

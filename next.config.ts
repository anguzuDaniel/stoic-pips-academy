/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['api.qrserver.com'],
  },
  // Remove turbopack from experimental for production
  experimental: {
    // Remove turbopack here
  }
}

module.exports = nextConfig
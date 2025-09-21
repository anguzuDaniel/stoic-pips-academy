/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      root: __dirname, // ensures correct project root
    },
  },
}

module.exports = nextConfig
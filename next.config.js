/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")


const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  async redirects() {
    return [
      {
        source: '/auth',
        destination: '/auth/login',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  images: {
    domains: ['behnid.com'],
  }
})

module.exports = nextConfig

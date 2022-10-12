// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
})

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com']
  }
})

module.exports = nextConfig

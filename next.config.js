/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
/**
 * @type {import('next').NextConfig}
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['media.graphassets.com']
  },
  future: { webpack5: true },
  reactStrictMode: true
})

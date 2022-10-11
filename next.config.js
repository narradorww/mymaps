// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  runtimeCaching: [
    {
      urlPattern: / /,
      handler: 'NetworkFirst'
    }
  ]
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: isProd ? false : true
  },
  images: {
    domains: ['media.graphassets.com']
  }
})

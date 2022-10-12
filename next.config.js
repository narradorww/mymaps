/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
/**
 * @type {import('next').NextConfig}
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
// ({
//   runtimeCaching: [
//     {
//       urlPattern: / /,
//       handler: 'NetworkFirst'
//     }
//   ]
// })

export default withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development'
  },
  images: {
    domains: ['media.graphassets.com']
  }
})

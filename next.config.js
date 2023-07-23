/** @type {import('next').NextConfig} */
const nextConfig = {
    pwa: {
        name: 'My PWA',
        shortName: 'MyPWA',
        icon: '/favicon.ico',
        themeColor: '#000000',
        manifest: {
          start_url: '/',
          background_color: '#ffffff',
        },
      },
}

module.exports = nextConfig

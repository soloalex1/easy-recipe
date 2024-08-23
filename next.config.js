/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ddg0cip9uom1w.cloudfront.net',
        port: '',
        pathname: '/code-challenge/**',
      },
    ],
  },
};

module.exports = nextConfig;

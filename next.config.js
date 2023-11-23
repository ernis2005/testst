/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['185.251.88.75'],
  },
  generateBuildId: async () => {
    return 'my-build-id'
  },

};
module.exports = nextConfig;

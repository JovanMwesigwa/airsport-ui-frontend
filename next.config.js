/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "airsport-tv-backend-api.herokuapp.com",
      "countryflagsapi.com",
      "127.0.0.1",
    ],
  },
};

module.exports = nextConfig;

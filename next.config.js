/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "pexels.com", "backend.kkprba.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.kkprba.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

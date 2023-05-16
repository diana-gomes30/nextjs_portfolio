/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 640, 768, 1024, 1280], // Adicione ou ajuste as dimensões desejadas
  },
};

module.exports = nextConfig;

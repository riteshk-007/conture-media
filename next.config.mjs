/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "victoryempire.co",
      },
      {
        protocol: "https",
        hostname: "akm-img-a-in.tosshub.com",
      },
      {
        protocol: "https",
        hostname: "www.rollingstone.com",
      },
      {
        protocol: "https",
        hostname:"drive.usercontent.google.com"
      }
    ],
  },
};

export default nextConfig;

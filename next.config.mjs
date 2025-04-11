/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '"assets.aceternity.com',
        port: "",
        pathname: "/demos/babbu-maan.jpeg",
        search: "",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iili.io",
        pathname: "/**", // allow all paths from this host
      },
    ],
  },
};

export default nextConfig;

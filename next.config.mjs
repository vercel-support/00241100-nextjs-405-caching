/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fazldsgjzbaj9202.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;

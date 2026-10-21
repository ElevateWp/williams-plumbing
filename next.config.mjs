/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/general-plumbing', destination: '/plumbing-repairs', permanent: true },
      { source: '/plumbing-maintenance-repairs', destination: '/plumbing-repairs', permanent: true },
      { source: '/toilet-installations', destination: '/bathroom-renovations', permanent: true },
      { source: '/hot-water-service-maintenance-installations', destination: '/hot-water-systems', permanent: true },
      { source: '/metal-roofing', destination: '/pergola-roofing', permanent: true },
      { source: '/gutters-downpipes', destination: '/plumbing-repairs', permanent: true },
      { source: '/gas-appliance-installations', destination: '/plumbing-repairs', permanent: true },
      { source: '/blocked-drains', destination: '/plumbing-repairs', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

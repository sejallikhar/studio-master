import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'reactjs.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flutter.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kubernetes.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'developer.mozilla.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nextjs.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

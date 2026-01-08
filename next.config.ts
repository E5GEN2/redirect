import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const destination = process.env.REDIRECT_URL || 'https://example.com';
    const statusCode = parseInt(process.env.REDIRECT_STATUS || '302') as 301 | 302 | 303 | 307 | 308;

    return [
      {
        source: '/:path((?!api|_next).*)',
        destination: destination,
        permanent: statusCode === 301,
      },
    ];
  },
};

export default nextConfig;

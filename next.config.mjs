/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
        }
      ],
  },
  webpack: (config, { isServer }) => {
      config.resolve.alias = {
          ...config.resolve.alias,
          '@fortawesome/fontawesome-svg-core$': '@fortawesome/fontawesome-svg-core/index.js',
          '@fortawesome/free-solid-svg-icons$': '@fortawesome/free-solid-svg-icons/index.js',
          '@fortawesome/react-fontawesome$': '@fortawesome/react-fontawesome/index.js',
      };

      config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
      });

      return config;
  },
};

export default nextConfig;

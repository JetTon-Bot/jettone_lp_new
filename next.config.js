// next.config.js
/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: false,
  i18n,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module, if necessary
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback, // This will ensure we don't overwrite other fallbacks
        fs: false
      };
    }

    // Adding rule to handle Markdown files
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source'
    });

    return config;
  }
}

module.exports = nextConfig;

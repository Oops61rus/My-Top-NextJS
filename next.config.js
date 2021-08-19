const path = require('path');

module.exports = {
  images: {
    domains: ['courses-top.ru']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

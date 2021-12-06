const path = require('path');
const assetUrl = process.env.ASSET_URL || '';
const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
    withOptimizedImages({
      handleImages: ['jpeg', 'png', 'webp'],
      webp: {
        quality: 100,
      },
      optimizeImagesInDev: false,
      optimizeImages: true,
      productionBrowserSourceMaps: true,
      exclude: path.resolve(__dirname, 'src/assets/svgs'),
      webpack(config, options) {
        config.module.rules.push({
          test: /\.svg$/,
          issuer: {
            test: /\.(js|ts)x?$/,
          },
          use: ['@svgr/webpack'],
        });

        if (!options.isServer) {
          config.resolve.alias['@sentry/node'] = '@sentry/browser';
        }

        return config;
      },
      webpack5: false,
      assetPrefix: assetUrl,
    }),
);


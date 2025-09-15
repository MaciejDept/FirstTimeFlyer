const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer.assetPlugins = ['expo-asset/tools/hashAssetFiles'];

config.resolver.assetExts = [
  ...config.resolver.assetExts,
  'png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'json',
];

module.exports = config;

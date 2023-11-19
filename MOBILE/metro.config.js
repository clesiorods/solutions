const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const { resolver: { assetExts } } = await getDefaultConfig();
  return {
    transformer: {
      assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    },
    resolver: {
      assetExts: [...assetExts, 'svg'],
    },
  };
})();

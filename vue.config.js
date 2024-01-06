const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.BASE_DIR,
  pwa: {
    workboxPluginMode: 'GenerateSW',  // 'GenerateSW' または 'InjectManifest'
    workboxOptions: {
      // Workboxのオプション
    }
  }
})

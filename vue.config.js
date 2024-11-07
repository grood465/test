const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../resources/static', // Build Directory
  devServer: {
    port: 1318,
    proxy: 'http://localhost:1319' // Spring Boot Server
  }
})
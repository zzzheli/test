const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },
  devServer: { // 配置反向代理
    proxy: {
      '/carrots-shanzhu-ajax/': {
        target: 'http://193.112.201.68:800/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/carrots-shanzhu-ajax/': ''
        }
      }
    }
  },
  productionSourceMap: false
}

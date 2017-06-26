var cooking = require('cooking');
var webpack = require('webpack');
var config = require('./config');

cooking.set({
  entry: './www/main.js',
  dist: './www/dist',
  template: './www/index.html',
  devServer: {
    port: 9090,
    host: require('my-local-ip')(),
    publicPath: '/',
    log: false
  },
  clean: true,
  hash: true,
  publicPath: '/mint-ui/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: true,
  sourceMap: true,
  extends: ['vue2', 'saladcss', 'buble'],
  alias: config.alias,
  externals: process.env.NODE_ENV === 'production' ? {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    'fastclick': 'FastClick'
  } : {}
});

cooking.add('loader.js.exclude', config.jsexclude);

if (process.env.NODE_ENV !== 'production') {
  cooking.add('plugins.Define', new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }));
}

module.exports = cooking.resolve();

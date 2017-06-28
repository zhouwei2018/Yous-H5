var cooking = require('cooking');
var webpack = require('webpack');
var config = require('./config');

cooking.set({
  entry: './www/main.js',
  dist: '../www/dist',
  template: './www/index.html',
  devServer: {
    port: 9090,
    host: require('my-local-ip')(),
    publicPath: '/',
    log: false
  },
  module: {
        // https://doc.webpack-china.org/guides/migrating/#module-loaders-module-rules
        rules: [
            {
                // https://vue-loader.vuejs.org/en/configurations/extract-css.html
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                        less: 'vue-style-loader!css-loader!less-loader'
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?sourceMap'
                ]
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
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

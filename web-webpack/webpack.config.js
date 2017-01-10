var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');

var babelQuery = {
  plugins: [
    ["external-helpers"],
    ["babel-plugin-transform-runtime", { polyfill: false }],
    ["transform-runtime", { polyfill: false }],
    ["import", [{ "style": "css", "libraryName": "antd-mobile" }]]
  ],
  presets: ['es2015', 'stage-0', 'react']
};

module.exports = {
  devtool: 'source-map', // or 'inline-source-map'

  entry: {
    "index": path.resolve(__dirname, 'src/index'),
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist/'
  },

  resolve: {
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['', '.web.js', '.jsx', '.js', '.json'],
  },
  babel: babelQuery,
  module: {
    noParse: [/moment.js/],
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel', query: babelQuery },
      { test: /\.(jpg|png|svg)$/, loader: "url?limit=8192" },
      // { test: /\.css$/, loader: 'style!css' }, // 把css处理成内联style，动态插入到页面
      { test: /\.less$/i, loader: ExtractTextPlugin.extract('style', 'css!postcss!less') },
      { test: /\.css$/i, loader: ExtractTextPlugin.extract('style', 'css!postcss') }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
    }),
    pxtorem({ rootValue: 100, propWhiteList: [] })
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.optimize.CommonsChunkPlugin({
      // minChunks: 2,
      name: 'shared',
      filename: 'shared.js'
    }),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
  ]

}

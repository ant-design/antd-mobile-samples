var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');

const glob = require('glob');  // require 需要放在文件头部

const svgDirs = []; // 如果需要本地部署图标，需要在此加入本地图标路径
glob.sync('node_modules/**/*antd-mobile/lib', { dot: true }).forEach(p => {
  svgDirs.push(new RegExp(p));
});

module.exports = {
  devtool: 'source-map', // or 'inline-source-map'

  entry: { "index": path.resolve(__dirname, 'src/index') },

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

  module: {
    noParse: [/moment.js/],
    loaders: [
      {
        test: /\.jsx$/, exclude: /node_modules/, loader: 'babel',
        query: {
          plugins: [
            ["external-helpers"],
            ["babel-plugin-transform-runtime", { polyfill: false }],
            ["transform-runtime", { polyfill: false }],
            ["import", [{ "style": "css", "libraryName": "antd-mobile" }]]
          ],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      { test: /\.(jpg|png)$/, loader: "url?limit=8192" },
      // svg-sprite for antd-mobile@1.0 注意：如果有其他 svg loader 设置，请 exclude 掉这里的 svgDirs 目录
      { test: /\.svg$/, loader: 'svg-sprite', include: svgDirs },
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
    // new webpack.optimize.CommonsChunkPlugin({
    //   // minChunks: 2,
    //   name: 'shared',
    //   filename: 'shared.js'
    // }),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
  ]

}

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];

module.exports = {
  devtool: "source-map",
  devServer: {
    disableHostCheck: true
  },

  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist/'
  },

  resolve: {
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      // 建议不使用 awesome-typescript-loader，否则自己设置
      // { test: /\.tsx?$/, loader: "babel-loader!awesome-typescript-loader?instance=ts-loader" }
      { test: /\.tsx?$/, loaders: [require.resolve('babel-loader'), require.resolve('ts-loader')] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader') },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader!less?sourceMap') },
      { test: /\.(jpg|png)$/, loader: "url?limit=8192" }, //把不大于8kb的图片打包处理成Base64
      {
        test: /\.(svg)$/i,
        loader: 'svg-sprite',
        include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      },
    ],
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
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
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new ExtractTextPlugin('bundle.css', { disable: false, allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
};
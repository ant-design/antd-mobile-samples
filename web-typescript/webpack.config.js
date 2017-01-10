var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      // 建议不使用 awesome-typescript-loader，否则自己设置
      // { test: /\.tsx?$/, loader: "babel-loader!awesome-typescript-loader?instance=ts-loader" }
      { test: /\.tsx?$/, loaders: [require.resolve('babel-loader'), require.resolve('ts-loader')] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader') },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader!less?sourceMap') },
      { test: /\.(jpg|png|svg)$/, loader: "url?limit=8192" }, //把不大于8kb的图片打包处理成Base64
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new ExtractTextPlugin('bundle.css', {
      disable: false,
      allChunks: true,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};

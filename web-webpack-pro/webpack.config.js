const webpack = require('webpack');
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HappyPack = require('happypack')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const pxtorem = require('postcss-pxtorem');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = {
    entry: {
        index: [path.resolve(__dirname, 'src/app')]
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'js/[name].js',
        // chunkFilename: 'js/[name].[chunkhash:5].chunk.js'
    },
    resolve: {
        extensions: ['', '.web.js', '.jsx', '.js', '.json'],
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        alias: {
            "H5lock": path.resolve(__dirname, 'src/lib/H5lock.publish.js'),
            "hidpi-canvas-polyfill": path.resolve(__dirname, 'src/lib/hidpi-canvas.min.js')
        }
    },
    module: {
        loaders: [
            // {
            //   test: /\.jsx?$/,
            //   loader: 'babel',
            //   exclude: /node_modules/,
            //   query: {
            //     presets: ['es2015', 'stage-0', 'react'],
            //     plugins: [
            //       "transform-decorators-legacy",
            //       "transform-class-properties",
            //       ["import", { libraryName: "antd-mobile", style: "css" }]
            //     ]
            //   },
            //   include: __dirname
            // }, 
            {
                test: /\.jsx?$/,
                loader: 'happypack/loader?id=js',
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/i,
                exclude: /node_modules/,
                loader: 'url?limit=8192&name=images/[hash:8].[name].[ext]'
            }
        ]
    },
    postcss: function () {
        return [
            autoprefixer({
                browsers: ['last 3 versions', '> 1%']
            }),
            pxtorem({
                rootValue: 100,
                propWhiteList: [],
            }),
            cssnano
        ]
    },
    plugins: [
        // new CopyWebpackPlugin([
        //     { from: 'src/service-worker.js', to: 'service-worker.js' }
        // ]),
        new HtmlWebpackPlugin({
            title: "",
            hash: true,
            baseUrl: process.env.NODE_ENV == 'development' ? '/' : '/xgj-client/',
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(ENV)
            }
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./build/vendor-manifest.json')
        }),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.NoErrorsPlugin(),
        new HappyPack({
            id: 'js',
            threads: 8,
            loaders: [{
                path: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: [
                        "transform-runtime",
                        "transform-decorators-legacy",
                        "transform-class-properties", ["import", { libraryName: "antd-mobile", style: "css" }]
                    ]
                }
            }]
        })
    ]
};
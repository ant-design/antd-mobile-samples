const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const pxtorem = require('postcss-pxtorem');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

const config = {
    cache: true,
    devtool: false,
    entry: {
        index: ['babel-polyfill', path.resolve(__dirname, 'src/app')]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[chunkhash:5].chunk.js'
    },
    resolve: {
        extensions: ['', '.web.js', '.js', '.jsx', '.json'],
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        alias: {
            "H5lock": path.resolve(__dirname, 'src/lib/H5lock.publish.js'),
            "hidpi-canvas-polyfill": path.resolve(__dirname, 'src/lib/hidpi-canvas.min.js')
        }
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'stage-0', 'react'],
                plugins: [
                    "transform-decorators-legacy",
                    "transform-class-properties", ["import", { libraryName: "antd-mobile", style: "css" }]
                ]
            },
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
        new CleanWebpackPlugin(['js', 'fonts', 'images', 'css', 'index.html', 'service-worker.js', '404.html'], {
            root: path.resolve(__dirname, 'build'),
            verbose: true,
            dry: false,
            exclude: ['vendor.dll.js']
        }),
        new SWPrecacheWebpackPlugin({
            cacheId: require('./package.json').name,
            maximumFileSizeToCacheInBytes: 4194304,
            staticFileGlobs: ['build/**.*', 'build/**/**.*'],
            stripPrefix: 'build/',
            runtimeCaching: [{
                handler: 'networkFirst',
                urlPattern: /\.js$|\.css$|\.html$|.+?\.?[^\.]{4,}$/,
            }]
        }),
        // new CopyWebpackPlugin([
        //     { from: 'src/service-worker.js', to: 'service-worker.js' }
        // ]),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./build/vendor-manifest.json')
        }),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify("production")
            }
        }),
        new HtmlWebpackPlugin({
            title: "",
            hash: true,
            filename: 'index.html',
            baseUrl: process.env.NODE_ENV == 'development' ? '/' : '/xgj-client/',
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new HtmlWebpackPlugin({
            title: "",
            hash: true,
            filename: '404.html',
            baseUrl: process.env.NODE_ENV == 'development' ? '/' : '/xgj-client/',
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new webpack.optimize.DedupePlugin()
    ]
};

module.exports = config;
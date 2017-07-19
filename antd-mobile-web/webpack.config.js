const path = require('path')
const webpack = require('webpack')
const amwWebpack = require('antd-mobile-web/webpack')

const resolve = (...p) => path.resolve(__dirname, ...p)
const join = (...p) => path.join(__dirname, ...p)
const moduleDir = m => path.dirname(require.resolve(`${m}/package.json`))

module.exports = {
    entry: {
        index: resolve('src', 'index')
    },

    output: {
        filename: '[name].js',
        path: join('dist'),
        publicPath: '/dist'
    },

    resolve: {
        extensions: ['.jsx', '.js', '.json'],
    },

    module: {
        rules: [
            {
                test: /\.jsx$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            amwWebpack.createSvgRule()
        ]
    }
}

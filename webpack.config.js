const webpack = require('webpack');
const helpers = require('./helpers/helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    devtool: 'inline-source-map',

    entry: {
        'app': helpers.root('app', 'src', 'main')
    },

    output: {
        path: helpers.root('./dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },

    devServer: {
        historyApiFallback: true,
        contentBase: helpers.root('./dist'),
        open: false,
        stats: 'minimal'
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            helpers.root("node_modules")
        ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'awesome-typescript-loader'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: helpers.root('app', 'index.html'),
            filename: 'index.html'
        })
    ]
};

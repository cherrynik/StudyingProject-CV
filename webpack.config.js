const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const favicon = require('./webpack/favicon');
const html = require('./webpack/html');
const miniCSS = require('./webpack/minicss');
const fileloader = require('./webpack/file-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

const common = merge ([
    {
        entry: {
            'index': PATHS.source + '/index.js'
        },
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }
            ]
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true
            }),
            new CleanWebpackPlugin(['dist']),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ],
    },
    html(),
    pug(),
    miniCSS(),
    fileloader()
]);

module.exports = function(env, argv) {
    if (argv.mode === 'production') {
        return merge([
            common,
            favicon()
        ]);
    }
    if (argv.mode === 'development') {
        return merge([
            common,
            devserver()
        ]);
    }
};
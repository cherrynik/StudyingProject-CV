const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
    return {
        plugins: [
            new HtmlWebpackPlugin({
                hash: true,
                template: './src/index.pug',
                filename: 'index.html',
                chunks: ['index']
            }),
        ]
    };
};
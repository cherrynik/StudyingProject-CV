const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.(s(a|c)|c)ss$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        publicPath: '../',
                        fallback: 'style-loader',
                        use: ['css-loader', 'postcss-loader', 'sass-loader'],
                    }),
                },
            ],
        },
        plugins: [
            new ExtractTextPlugin('./css/[name].css'),
        ],
    };
};
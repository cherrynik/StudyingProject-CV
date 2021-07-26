const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = function() {
    return {
        plugins: [
            new FaviconsWebpackPlugin({
                logo: './src/img/logo.png',
                prefix: 'icons-[hash]/',
                emitStats: false,
                statsFilename: 'iconstats-[hash].json',
                persistentCache: true,
                inject: true,

                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    opengraph: false,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            })
        ]
    }
};
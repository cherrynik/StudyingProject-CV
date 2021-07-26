module.exports = function() {
    return {
        devServer: {
            filename: 'index.js',
            index: 'index.html',

            // useLocalIp: true,
            host: '192.168.1.61',
            port: 80,
            proxy: {
                '/api/app': {
                    target: '192.168.1.61:80',
                    secure: false,
                    changeOrigin: true,
                }
            },
            
            stats: 'errors-only',
            open: true
        }
    };
};
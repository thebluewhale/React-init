var webpack = require('webpack');

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.js'] ,

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: 'localhost',
        port: 3000,
        contentBase: __dirname + '/public/',
    },

    module:{
        loaders: [
            {
                test: /.js$/,
                loader: ['react-hot, babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ["react-hot-loader/babel"]
                })],
                exclude: /node_modules/,
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

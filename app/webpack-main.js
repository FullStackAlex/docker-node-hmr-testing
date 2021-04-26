const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: "development",
    entry: {
        main: './dev/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        hot: true,
        hotOnly: true,
        writeToDisk: true,
        host: '0.0.0.0',
        port: 8080,
        public: "https://localhost:9000",
        https: true,
        disableHostCheck: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public/assets'),
        clean: true,
    },
};

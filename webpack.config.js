const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')


module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./dist")
    },
    resolveLoader: {
        modules: ['node_modules', './loader']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]

            },
            {
                test: /\.txt$/,
                use: {
                    loader: path.resolve(__dirname, "./loader/raw-loader.js"),
                    options: {
                        name: 'Raw Loader'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new CleanWebpackPlugin(["dist"], {
            root: path.resolve(__dirname, './')
        })
    ]
}
























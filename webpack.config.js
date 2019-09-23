const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        path.resolve('./src/index.js'),
        'webpack/hot/dev-server',
    ],
    output: {
        path: path.resolve('public'),
        filename: 'js/[name].min.js',
        publicPath: '/',
        libraryTarget: 'umd'
    },
    devServer: {
        contentBase: './public'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                use: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                loader: 'file-loader?name=img/[name].[ext]',
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(style.js|style.jsx)$/,
                use: [
                    'stylelint-custom-processor-loader'
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?name=static/fonts/[name].[ext]',
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './favicon.png'
        })
    ]
};

// 生产环境配置
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfigProd = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin({
            protectWebpackAssets: true,
            
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[fullhase:4].css'
        }),
        new HtmlWebpackPlugin({
             //注入的位置
             inject: 'body',
             title: 'React APP',
             // 打包名
             filename: 'index.html',
             // 模板文件
             template: path.join(__dirname, '../src/index.html')
        }),
       
    ],
    
}
module.exports = merge(webpackConfigBase, webpackConfigProd);
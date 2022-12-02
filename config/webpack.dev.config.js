const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
// 获取浏览器打开的打包插件
const OpenBrowserPlugin = require('open-browser-webpack4-plugin');
// 获取html打包插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');
// 定义浏览器的端口
const PORT = 8080;
// 线上环境配置
const webpackConfigDev = {
    // 模式
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//热更新插件
        // htmlwebpack的打包插件
        new HtmlWebpackPlugin({
            //注入的位置
            inject: 'body',
            // 标题
            title: 'React APP',
            // 打包输出名
            filename: 'index.html',
            // 基于模板文件，生成html文件
            template: path.join(__dirname, '../src/index.html')
        }),
        // 定义打开浏览器的插件
        new OpenBrowserPlugin({
            url: `http://localhost:${PORT}/#/`,
        }),

    ],
    devtool: 'eval-source-map',

}
// 合并导出
module.exports = merge(webpackConfigBase, webpackConfigDev)
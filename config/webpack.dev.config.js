const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
// 获取浏览器打开的打包插件
const OpenBrowserPlugin = require('open-browser-webpack4-plugin');
// 获取html打包插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');
// 引入优化ts-loader
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// 引入中间件
const mockMiddleware = require('./mock.config');
// 引入检测性能的包
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

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
        // 优化ts-loader
        new ForkTsCheckerWebpackPlugin({
          
        })

    ],
    devtool: 'eval-source-map',
    // 配置mock
    devServer: {
        // 远程mock
        // proxy: {
        //     // 代理yapi的服务地址
        //     '/':'http://127.0.0.1:3000/mock/11',
        // },
        // 配置基础路径
        contentBase: path.join(__dirname, '.'),
        historyApiFallback: false,
        hot: false,
        host: '0.0.0.0',
        port: PORT,
        before(app) {
            const projectDir = path.resolve();
            const mockDir = './mock';
            app.use(mockMiddleware({ projectDir, mockDir }))
        }
    }

}
// 合并导出
// module.exports = smp.wrap(merge(webpackConfigBase, webpackConfigDev))
module.exports = merge(webpackConfigBase, webpackConfigDev)
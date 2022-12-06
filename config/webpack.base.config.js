const path = require('path');
// 引入css打包的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 需要判断是开发环境还是生产环境
const devMode=process.env.NODE_ENV!=="production"

const webpackBaseConfig = {
    // 入口文件
    "entry": path.join(__dirname, '../src/index.jsx'),
    // 输出文件
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[fullhase:4].js'

    },
    resolve: {
        // 引入的扩展名信息
        extensions: ['.js', '.jsx', '.tsx','.ts'],
        // 配置路径的别名  
        alias: {
            // pages的页面可以加一些前缀
            pages: path.join(__dirname, '../src/pages'),
            '@utils': path.join(__dirname, '../src/utils'),
            '@components':path.join(__dirname,'../src/components')
        }

    },
    module: {
        rules: [
            
            // js  jsx  匹配到js，jsx结尾的文件使用 babel-loader来处理
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
                // 性能提升配置
                // use: {
                //     loader: 'ts-loader',
                //     options: {
                //         transpileOnly:true
                //     }
                // },
            },
            {
                test: /\.(sc|c)ss/,
                use: [
                    devMode? 'style-loader':MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {

            }
        ]
    }

};
module.exports = webpackBaseConfig;
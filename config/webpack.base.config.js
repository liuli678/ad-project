const path = require('path');

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
        extensions: ['.js', '.jsx', '.tsx'],
        // 配置路径的别名  
        alias: {
            // pages的页面可以加一些前缀
            pages: path.join(__dirname,'../src/pages')
        }

    },
    module: {
        rules: [
            
            // js  jsx  匹配到js，jsx结尾的文件使用 babel-loader来处理
            {
                test: /\.js[x]/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts[x]/,
                use: 'ts-loader',
            },
            {
                test: /\.(sc|c)ss/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    }

};
module.exports = webpackBaseConfig;
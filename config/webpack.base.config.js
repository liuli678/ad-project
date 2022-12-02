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
        extensions: ['.js', '.jsx'],

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
                test: /\.(sc|c)ss/, 
                use: ['style-loader', 'css-loader','sass-loader'],
            },
        ]
    }

}
module.exports = webpackBaseConfig;
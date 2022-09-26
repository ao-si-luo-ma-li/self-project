var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var COMPONENTS_PATH = path.resolve(SRC_PATH, 'components');
var TEMPLETES_PATH = path.resolve(SRC_PATH, 'templetes');

module.exports = {
    entry: {
        vendors: ['jquery'],
        index: './src/components/index.js',
        tip: './src/components/tip.js',
        gameCenter: './src/components/gameCenter.js',
        agreements: './src/components/agreements.js',
        register: './src/components/register.js',
        recharge: './src/components/recharge.js',
        prevent: './src/components/prevent.js',
        issue: './src/components/issue.js',
        contactus: './src/components/contactus.js',
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    plugins: [
        // 前者打包公共业务代码，后者打包第三方库
        new webpack.optimize.CommonsChunkPlugin({
            names: ['commons', 'vendors'],
            minChunks: 2
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlwebpackPlugin({
            title: '游戏官网',
            template: './src/templetes/index.html',
            filename: 'index.html',
            chunks: ['vendors','commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '未成年人家长监护',
            template: './src/templetes/tip.html',
            filename: 'tip.html',
            chunks: ['vendors','commons', 'tip'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '游戏大厅',
            template: './src/templetes/gameCenter.html',
            filename: 'gameCenter.html',
            chunks: ['vendors','commons', 'gameCenter'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '用户协议',
            template: './src/templetes/agreements.html',
            filename: 'agreements.html',
            chunks: ['vendors','commons', 'agreements'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '用户注册',
            template: './src/templetes/register.html',
            filename: 'register.html',
            chunks: ['vendors','commons', 'register'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '充值中心',
            template: './src/templetes/recharge.html',
            filename: 'recharge.html',
            chunks: ['vendors','commons', 'recharge'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '防沉迷',
            template: './src/templetes/prevent.html',
            filename: 'prevent.html',
            chunks: ['vendors','commons', 'prevent'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '处理纠纷',
            template: './src/templetes/issue.html',
            filename: 'issue.html',
            chunks: ['vendors','commons', 'issue'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '联系我们',
            template: './src/templetes/contactus.html',
            filename: 'contactus.html',
            chunks: ['vendors','commons', 'contactus'],
            inject: 'body'
        })

    ],
    devServer: {
        historyApiFallback: true,
        progress: true,
        hot: true,
        inline: true,
        port: 8083
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            include: SRC_PATH,
            loader: 'jshint-loader'
        }],
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css'],
            include: SRC_PATH
        }, {
            test: /\.scss?$/,
            loader: 'style-loader!css-loader!sass-loader',
            include: SRC_PATH
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=40000'
        }, {
            // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            loader: 'file?name=./assets/fonts/[name].[ext]',
        }, {
            test: /\.jsx?$/,
            loader: 'babel',
            include: SRC_PATH,
            query: {
                presets: ['es2015']
            }
        }],
    },
    devtool: 'eval-source-map',
    //配置jshint的选项，支持es6的校验
    jshint: {
        "esnext": true
    }
};
var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var html = require('html-withimg-loader');
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
        inner: './src/components/inner.js',
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
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
            title: '首页',
            template: 'ejs-render-loader!./src/templetes/index.ejs',
            filename: 'index.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '登录',
            template: 'ejs-render-loader!./src/templetes/login.ejs',
            filename: 'login.html',
            chunks: ['vendors', 'commons', 'inner'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '注册',
            template: 'ejs-render-loader!./src/templetes/resigter.ejs',
            filename: 'resigter.html',
            chunks: ['vendors', 'commons', 'inner'],
            inject: 'body'
        }),
    ],
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            include: SRC_PATH,
            loader: 'jshint-loader'
        }],
        loaders: [{
            test: /\.scss?$/,
            loader: 'style-loader!css-loader!sass-loader',
            include: SRC_PATH
        }, {
            test: /\.ejs$/,
            loader: 'ejs-html-loader',			     
        }, {　　　　　　
            test: /\.html$/,
            loader: 'html-withimg-loader',
            options: {
                minimize: true
              }　　
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url?limit=100'
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
var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var html = require('html-withimg-loader');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
        list: './src/components/list.js',
        inner: './src/components/inner.js',
        detail: './src/components/detail.js',
    },
    output: {
        path: BUILD_PATH,
        filename: '[hash].[name].js'
    },
    plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //     minimize: true
    // }),
        // 前者打包公共业务代码，后者打包第三方库
        new webpack.optimize.CommonsChunkPlugin({
            names: ['commons', 'vendors'],
            minChunks: 2
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
        new HtmlwebpackPlugin({
            title: '首页',
            template: 'ejs-render-loader!./src/templetes/index.ejs',
            filename: 'index.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '漫画中心',
            template: 'ejs-render-loader!./src/templetes/list.ejs',
            filename: 'list.html',
            chunks: ['vendors', 'commons', 'list'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '看漫画',
            template: 'ejs-render-loader!./src/templetes/detail.ejs',
            filename: 'detail.html',
            chunks: ['vendors', 'commons', 'detail'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '关于我们',
            template: 'ejs-render-loader!./src/templetes/about.ejs',
            filename: 'about.html',
            chunks: ['vendors', 'commons', 'list'],
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
    devServer: {
        historyApiFallback: true,
        progress: true,
        hot: true,
        inline: true,
        port: 9999
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            include: SRC_PATH,
            loader: 'jshint-loader'
        }],
        loaders: [{
            test: /\.(scss|css)$/,
            loader: 'style-loader!css-loader!sass-loader',
            include: [
                SRC_PATH,
            ]
        }, {
            test: /\.ejs$/,
            loader: 'ejs-html-loader',			     
        }, {　　　　　　
            test: /\.html$/,
            loader: 'html-withimg-loader'　　　　
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url?limit=1000'
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
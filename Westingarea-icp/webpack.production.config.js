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
            title: '产品列表',
            template: 'ejs-render-loader!./src/templetes/products.ejs',
            filename: 'product.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '产品详情',
            template: 'ejs-render-loader!./src/templetes/product1.ejs',
            filename: 'product1.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '产品详情',
            template: 'ejs-render-loader!./src/templetes/product2.ejs',
            filename: 'product2.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '产品详情',
            template: 'ejs-render-loader!./src/templetes/product3.ejs',
            filename: 'product3.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '关于我们',
            template: 'ejs-render-loader!./src/templetes/about.ejs',
            filename: 'about.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '新闻列表',
            template: 'ejs-render-loader!./src/templetes/news.ejs',
            filename: 'news.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '新闻详情',
            template: 'ejs-render-loader!./src/templetes/news1.ejs',
            filename: 'news1.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '新闻详情',
            template: 'ejs-render-loader!./src/templetes/news2.ejs',
            filename: 'news2.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '新闻详情',
            template: 'ejs-render-loader!./src/templetes/news3.ejs',
            filename: 'news3.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '新闻详情',
            template: 'ejs-render-loader!./src/templetes/news4.ejs',
            filename: 'news4.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: 'case',
            template: 'ejs-render-loader!./src/templetes/case.ejs',
            filename: 'case.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '案例详情',
            template: 'ejs-render-loader!./src/templetes/case1.ejs',
            filename: 'case1.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '案例详情',
            template: 'ejs-render-loader!./src/templetes/case2.ejs',
            filename: 'case2.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '案例详情',
            template: 'ejs-render-loader!./src/templetes/case3.ejs',
            filename: 'case3.html',
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
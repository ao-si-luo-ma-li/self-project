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
        about: './src/components/about.js',
        contact: './src/components/contact.js',
        '404': './src/components/404.js',
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
            title: '青瓜の家',
            template: './src/templetes/index.html',
            filename: 'index.html',
            chunks: ['vendors','commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '关于我们',
            template: './src/templetes/about.html',
            filename: 'about.html',
            chunks: ['vendors','commons', 'about'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '联系我们',
            template: './src/templetes/contact.html',
            filename: 'contact.html',
            chunks: ['vendors','commons', 'contact'],
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
            include: [SRC_PATH, '/node_modules/bootstrap/dist/css']
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
            exclude: /node_modules/,
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
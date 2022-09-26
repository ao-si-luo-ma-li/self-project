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
        pro_detail: './src/components/pro_detail.js',
        pro_list: './src/components/pro_list.js',
        cart: './src/components/cart.js',
        shop: './src/components/shop.js',
        thirdstore: './src/components/thirdstore.js',
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
            title: '商城首页',
            template: './src/templetes/index.html',
            filename: 'index.html',
            chunks: ['vendors', 'commons', 'index'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '产品列表',
            template: './src/templetes/pro-list.html',
            filename: 'pro-list.html',
            chunks: ['vendors', 'commons', 'pro_list'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '产品详情页',
            template: './src/templetes/pro-detail.html',
            filename: 'pro-detail.html',
            chunks: ['vendors', 'commons', 'pro_detail'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '登录',
            template: './src/templetes/login.html',
            filename: 'login.html',
            chunks: ['vendors', 'commons', 'inner'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '注册',
            template: './src/templetes/resigter.html',
            filename: 'resigter.html',
            chunks: ['vendors', 'commons', 'inner'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '订单核对',
            template: './src/templetes/shop.html',
            filename: 'shop.html',
            chunks: ['vendors', 'commons', 'shop'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '购物车',
            template: './src/templetes/cart.html',
            filename: 'cart.html',
            chunks: ['vendors', 'commons', 'cart'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '订单支付',
            template: './src/templetes/pay.html',
            filename: 'pay.html',
            chunks: ['vendors', 'commons', 'inner'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '商户入驻',
            template: './src/templetes/parter.html',
            filename: 'parter.html',
            chunks: ['vendors', 'commons', 'inner'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '填写合作商信息',
            template: './src/templetes/store.html',
            filename: 'store.html',
            chunks: ['vendors', 'commons', 'inner'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '入驻流程',
            template: './src/templetes/parter_guide.html',
            filename: 'parter_guide.html',
            chunks: ['vendors', 'commons', 'inner'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '入驻联系人',
            template: './src/templetes/parter_contact.html',
            filename: 'parter_contact.html',
            chunks: ['vendors', 'commons', 'inner'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '入驻注意事项',
            template: './src/templetes/parter_attention.html',
            filename: 'parter_attention.html',
            chunks: ['vendors', 'commons', 'inner'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '联系我们',
            template: './src/templetes/contact_us.html',
            filename: 'contact_us.html',
            chunks: ['vendors', 'commons', 'inner'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '帮助中心',
            template: './src/templetes/help.html',
            filename: 'help.html',
            chunks: ['vendors', 'commons', 'inner'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: '第三方店铺',
            template: './src/templetes/thirdstore.html',
            filename: 'thirdstore.html',
            chunks: ['vendors', 'commons', 'thirdstore'],
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
            test: /\.html$/,
            loader: 'html-withimg-loader',
            options: {
                minimize: true
              }　　
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=10000'
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
// 通过vue的axios插件来进行ajax请求
import axios from 'axios';
import urls from './urlConfig.js'
const util = require('../utils/util.js');

/*--------通用get请求-------*/
function fetch_get(url, data) {
    // es6 Promise对象代表异步操作，resolve表示成功后的回调
    // then 代替了ajax中的回调嵌套
    return new Promise((resolve, reject) => {
        data._t = util.formatTime(new Date().getTime());
        data._s = util.md5Params(data).toString();
        axios.get(url, {
                // `params` 是即将与请求一起发送的 URL 参数
                params: data
            })
            .then(res => {
                if (res.data.code === 200) {
                    resolve(res.data);
                } else {
                    reject(res.data);
                }
            })
            .catch(err => {
                alert(err)
            })
    })
}

/*--------通用post请求-------*/
function fetch_post(url, data) {
    // es6 Promise对象代表异步操作，resolve表示成功后的回调
    // then 代替了ajax中的回调嵌套
    return new Promise((resolve, reject) => {
        data._t = util.formatTime(new Date().getTime());
        data._s = util.md5Params(data).toString();
        axios({
                url: url,
                method: 'post',
                // `data` 是作为请求主体被发送的数据
                // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
                data: data,
                // 在向服务器发送前，修改请求数据。
                // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
                // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
                transformRequest: [function(data) {
                    let ret = ''
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }],
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(res => {
                if (res.data.code === 200) {
                    resolve(res.data);
                } else {
                    reject(res.data);
                }
            })
            .catch(err => {
                alert(err);
            })
    })
}

/*--------通用文件上传请求-------*/
function fetch_file(url, data, listenProgress) {
    // es6 Promise对象代表异步操作，resolve表示成功后的回调
    // then 代替了ajax中的回调嵌套
    return new Promise((resolve, reject) => {
        axios({
                url: url,
                method: 'post',
                data: data,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                // `onUploadProgress` 允许为上传处理进度事件
                onUploadProgress: function(progressEvent) {
                    // 对原生进度事件的处理
                    if (listenProgress) {
                        listenProgress(parseInt(progressEvent.loaded / progressEvent.total * 100));
                    }
                },
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                alert(err);
            })
    })
}

// 用户登录
export function login(data) {
    return fetch_post(urls.login, data);
}

// 获取频道分类
export function category(data) {
    return fetch_get(urls.category, data);
}

// 根据分类获取频道
export function findChannel(data) {
    return fetch_get(urls.findChannel, data);
}

// 展示素材
export function showMedias(data) {
    return fetch_get(urls.showMedias, data);
}

// 获取上传文件的Token
export function uploadTokenAdmin(data) {
    return fetch_get(urls.uploadTokenAdmin, data);
}

// 上传文件到七牛服务器
export function qiniuUpload(data, listenProgress) {
    return fetch_file(urls.qiniuUploadUrl, data, listenProgress);
}

// 银行列表
export function banks(data) {
    return fetch_get(urls.banks, data);
}

// 信用卡卡种
export function cardUsages(data) {
    return fetch_get(urls.cardUsages, data);
}

//获取银行列表
export function getCards(data) {
    return fetch_get(urls.getCards, data);
}
export function storageGetter(key) {
    return util.storageGetter(key);
}

// 信用卡列表
export function cards(data) {
    return fetch_get(urls.cards, data);
}

//信用卡详情
export function cardDetail(data) {
    return fetch_get(urls.cardDetail, data);
}

//信用卡详情
export function cardDetail2(data) {
    return fetch_get(urls.cardDetail2, data);
}

// 小贷产品
export function productList(data) {
    return fetch_get(urls.productList, data);
}

// 推荐信用卡
export function recommendCreditCardList(data) {
    return fetch_get(urls.recommendCreditCardList, data);
}

// 获取所有帖子
export function allMedias(data) {
    return fetch_get(urls.allMedias, data);
}

// 获取用户的积分详情
export function pointDetail(data) {
    return fetch_get(urls.pointDetail, data);
}

// 预约办卡申请
export function creditCardReservation(data) {
    return fetch_post(urls.creditCardReservation, data);
}

// 获取所有预约办卡的进度
export function cardReservationList(data) {
    return fetch_get(urls.cardReservationList, data);
}

// 取消预约办卡申请
export function cancelCardReservation(data) {
    return fetch_post(urls.cancelCardReservation, data);
}

// 用户个人信息查询
export function userDetails(data) {
    return fetch_get(urls.userDetails, data);
}

//文件下载
export function fileDownload(data) {
    return fetch_get(urls.fileDownload, data)
}

//用户申请办卡记录log
export function addCardLog(data) {
    return fetch_get(urls.addCardLog, data);
}

//用户申请办卡记录列表
export function getUserCardLog(data) {
    return fetch_get(urls.getUserCardLog, data);
}

//获取用户id
export function getUserId(data) {
    return fetch_get(urls.getUserId, data);
}
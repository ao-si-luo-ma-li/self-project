const dt = require('./dt.js');

const daliy_src_1 = require('../../assets/images/goods/daliy/chuizi.jpg');
const daliy_src_2 = require('../../assets/images/goods/daliy/chuizi_mu.jpg');
const daliy_src_3 = require('../../assets/images/goods/daliy/chuizi_qi.jpg');
const daliy_src_4 = require('../../assets/images/goods/daliy/chuizi_li.jpeg');
const daliy_src_5 = require('../../assets/images/goods/daliy/chuizi_di.jpeg');

const daliy = {
  '胡桃木拍卖槌': {
    "colors": [" 法庭拍卖会锤子"],
    "versions": ["黑胡桃木"],
    "prices": [74],
    "srcs": {
      "src_1":[daliy_src_1],
    },
    "detail": dt.daliy_dt_1
  },
  '实木拍卖槌': {
    "colors": ["实木质拍卖捶"],
    "versions": ["带方形底座"],
    "prices": [49],
    "srcs": {
      "src_1":[daliy_src_2],
    },
    "detail": dt.daliy_dt_2
  },
  '烤漆拍卖槌': {
    "colors": ["烤漆实木拍卖槌"],
    "versions": ["烤漆不发霉"],
    "prices": [180],
    "srcs": {
      "src_1":[daliy_src_3],
    },
    "detail": dt.daliy_dt_3
  },
  '拍卖槌礼盒': {
    "colors": ["实木结实耐用"],
    "versions": ["锤子+底座+礼盒"],
    "prices": [51],
    "srcs": {
      "src_1":[daliy_src_4],
    },
    "detail": dt.daliy_dt_4
  },
  '拍卖槌底座': {
    "colors": ["胡桃木底座"],
    "versions": ["单个"],
    "prices": [49],
    "srcs": {
      "src_1":[daliy_src_5],
    },
    "detail": dt.daliy_dt_5
  },
}

const allpt = {
  daliy
};
const getOne = function(pro) {
  console.log('pro', pro)
  let kind = decodeURI(pro).split(',')[0];
  let version = pro.split(',')[1];
  return allpt[kind][version];
}
const getType = function(type) {
  return allpt[type];
}

module.exports = {
  allpt,
  getOne,
  getType
}
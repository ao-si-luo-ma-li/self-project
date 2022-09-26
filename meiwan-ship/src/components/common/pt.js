const dt = require('./dt.js');

const daliy_src_1 = require('../../assets/images/goods/daliy/shuazi.jpg');
const daliy_src_2 = require('../../assets/images/goods/daliy/deng.jpg');
const daliy_src_3 = require('../../assets/images/goods/daliy/shouan.jpg');
const daliy_src_4 = require('../../assets/images/goods/daliy/beizi.jpg');
const daliy_src_5 = require('../../assets/images/goods/daliy/yijia.jpg');

const daliy = {
  'shuazi': {
    "colors": [" 3个装"],
    "versions": ["混色"],
    "prices": [19.9],
    "srcs": {
      "src_1":[daliy_src_1],
    },
    "detail": dt.daliy_dt_1
  },
  'deng': {
    "colors": ["卧室户外商用"],
    "versions": ["买2发 3"],
    "prices": [29.9],
    "srcs": {
      "src_1":[daliy_src_2],
    },
    "detail": dt.daliy_dt_2
  },
  'shouna': {
    "colors": ["绿色40L大号"],
    "versions": ["3只装"],
    "prices": [109],
    "srcs": {
      "src_1":[daliy_src_3],
    },
    "detail": dt.daliy_dt_3
  },
  'beizi': {
    "colors": ["卡通简约套装"],
    "versions": ["表情羊驼+表情熊+竹托"],
    "prices": [51],
    "srcs": {
      "src_1":[daliy_src_4],
    },
    "detail": dt.daliy_dt_4
  },
  'yijia': {
    "colors": ["北欧蓝"],
    "versions": ["浸塑衣架10只装"],
    "prices": [9999],
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
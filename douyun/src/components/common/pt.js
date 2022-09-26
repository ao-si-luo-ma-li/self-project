const dt = require('./dt.js');

const yiyao_src_1 = require('../../assets/images/goods/yiyao/xuetang.jpeg');
const yiyao_src_2 = require('../../assets/images/goods/yiyao/xueya.jpeg');
const yiyao_src_3 = require('../../assets/images/goods/yiyao/tiwen.jpeg');
const yiyao_src_4 = require('../../assets/images/goods/yiyao/xueyang.jpeg');
const yiyao_src_5 = require('../../assets/images/goods/yiyao/xindian.jpeg');

const yiyao = {
  'Glucose_meter': {
    "colors": [""],
    "versions": [""],
    "prices": [399.00],
    "srcs": {
      "src_1":[yiyao_src_1],
    },
    "detail": dt.yiyao_dt_1
  },
  'B_PRESSUREMETER': {
    "colors": [""],
    "versions": [""],
    "prices": [26.52],
    "srcs": {
      "src_1":[yiyao_src_2],
    },
    "detail": dt.yiyao_dt_2
  },
  'A_thermometer': {
    "colors": [""],
    "versions": [""],
    "prices": [27.65],
    "srcs": {
      "src_1":[yiyao_src_3],
    },
    "detail": dt.yiyao_dt_3
  },
  'oximetry': {
    "colors": [""],
    "versions": [""],
    "prices": [21.32],
    "srcs": {
      "src_1":[yiyao_src_4],
    },
    "detail": dt.yiyao_dt_4
  },
  'ECG': {
    "colors": [""],
    "versions": [""],
    "prices": [87.54],
    "srcs": {
      "src_1":[yiyao_src_5],
    },
    "detail": dt.yiyao_dt_5
  },
}

const allpt = {
  yiyao
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
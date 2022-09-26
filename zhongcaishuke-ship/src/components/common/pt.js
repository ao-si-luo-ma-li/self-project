const dt = require('./dt.js');

const daliy_src_1 = require('../../assets/images/goods/smart/smart_03.jpeg');
const daliy_src_2 = require('../../assets/images/goods/smart/smart_02.jpeg');
const daliy_src_3 = require('../../assets/images/goods/smart/smart_01.jpeg');

const smart = {
  '智能小车': {
    "colors": [" 升降版"],
    "versions": ["含Jetson nano 4GB主板"],
    "prices": [7499],
    "srcs": {
      "src_1":[daliy_src_1],
    },
    "detail": dt.daliy_dt_1
  },
  '智能仿生机器狗': {
    "colors": ["黄黑相间"],
    "versions": ["32G内存"],
    "prices": [8999],
    "srcs": {
      "src_1":[daliy_src_2],
    },
    "detail": dt.daliy_dt_2
  },
  '智能机械手臂': {
    "colors": ["标准版"],
    "versions": ["含Jetson Nano 4G主板"],
    "prices": [3299],
    "srcs": {
      "src_1":[daliy_src_3],
    },
    "detail": dt.daliy_dt_3
  },
}

const allpt = {
  smart
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
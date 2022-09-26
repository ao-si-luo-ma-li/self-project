const dt = require('./dt.js');

const yiyao_src_1 = require('../../assets/images/goods/yiyao/xuetang.jpeg');
const yiyao_src_2 = require('../../assets/images/goods/yiyao/xindian.jpeg');
const yiyao_src_3 = require('../../assets/images/goods/yiyao/xueyang.jpeg');
const yiyao_src_4 = require('../../assets/images/goods/yiyao/xueya.jpeg');
const yiyao_src_5 = require('../../assets/images/goods/yiyao/jingmo.jpeg');

const yiyao = {
  '养生壶': {
    "colors": ["砂锅中药煲"],
    "versions": ["3升分体式陶瓷"],
    "prices": [298.00],
    "srcs": {
      "src_1":[yiyao_src_1],
    },
    "detail": dt.yiyao_dt_1
  },
  '艾灸热敷帖': {
    "colors": ["自发热男女手腕护具"],
    "versions": ["腕 黑色（2只装）"],
    "prices": [59.00],
    "srcs": {
      "src_1":[yiyao_src_2],
    },
    "detail": dt.yiyao_dt_2
  },
  '养生枕头': {
    "colors": ["草本养生枕保健枕"],
    "versions": ["全棉荞麦枕"],
    "prices": [69.00],
    "srcs": {
      "src_1":[yiyao_src_3],
    },
    "detail": dt.yiyao_dt_3
  },
  '腱鞘炎护腕': {
    "colors": ["肘关节康复磁石理疗护具"],
    "versions": ["升级版（一对装）"],
    "prices": [59.00],
    "srcs": {
      "src_1":[yiyao_src_4],
    },
    "detail": dt.yiyao_dt_4
  },
  '筋膜球': {
    "colors": ["硅胶实心按摩球"],
    "versions": ["鸟巢纹款灰色"],
    "prices": [36.00],
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
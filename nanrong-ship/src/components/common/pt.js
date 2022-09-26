const dt = require('./dt.js');

const service_src_1 = require('../../assets/images/goods/servicer/2u.jpg');
const service_src_2 = require('../../assets/images/goods/servicer/t460.jpg');
const service_src_3 = require('../../assets/images/goods/servicer/4u.jpg');
const service_src_4 = require('../../assets/images/goods/servicer/thinkStation.jpg');

const servicer = {
  '2U机架服务器': {
    "colors": [" 2颗银牌4210"],
    "versions": ["PM8060 2GB"],
    "prices": [35500],
    "srcs": {
      "src_1":[service_src_1],
    },
    "detail": dt.service_dt_1
  },
  'T640塔式服务器': {
    "colors": ["2*6226R/2400W冗电"],
    "versions": ["2*4TB/H730P"],
    "prices": [117580],
    "srcs": {
      "src_1":[service_src_2],
    },
    "detail": dt.service_dt_2
  },
  '4U机架服务器': {
    "colors": ["5218*2/2*32G/4*600G"],
    "versions": ["SAS/R730-8i/2*1100W"],
    "prices": [53199],
    "srcs": {
      "src_1":[service_src_3],
    },
    "detail": dt.service_dt_3
  },
  'P720图形工作站': {
    "colors": ["铜3204 1.9GHz 6C 1颗"],
    "versions": ["32G内存|2T+256|RTX4000"],
    "prices": [21899],
    "srcs": {
      "src_1":[service_src_4],
    },
    "detail": dt.service_dt_4
  },
  '塔式图形工作站': {
    "colors": ["T3440"],
    "versions": ["I7-10700/32G/256G固态+2T/WX3200 4G"],
    "prices": [9999],
    "srcs": {
      "src_1":[service_src_4],
    },
    "detail": dt.service_dt_4
  },
}

const allpt = {
  servicer
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
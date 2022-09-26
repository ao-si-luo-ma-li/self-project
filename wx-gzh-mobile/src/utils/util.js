const cryptoJs = require('crypto-js');

const imageFormats = ['jpeg', 'jpg', 'png', 'bmp', 'gif'];
const videoFormats = [
  'mp4',
  'flv',
  'wmv',
  'avi',
  'mov',
  'dat',
  'asf',
  'rm',
  'rmvb',
  'ram',
  'mpg',
  'mpeg',
  '3gp',
  'm4v',
  'dvix',
  'dv',
  'mkv',
  'vob',
  'qt',
  'cpk',
  'fli',
  'flc',
  'mod',
  'ts',
  'webm',
  'm2ts',
];

const md5Key = 'eiVFACtNeIYY408HZO0iKHCard';

const qiniuiImageUrl = 'http://o93ohsdc0.bkt.clouddn.com/';
// const qiniuiImageUrl = 'http://ofne7y45e.bkt.clouddn.com/';

const mobileUrl = 'http://192.168.1.98:29990/newstatic/yzApp/';
// const mobileUrl = 'https://www.moread.com/yzApp/';

// const apiUrl = 'http://192.168.1.98:29990';
// const apiUrl = 'http://103.20.251.101:29990';
// const apiUrl = 'http://120.76.26.137';
const apiUrl = 'https://www.youyuecredit.com';

// 获取日期方法 yyyy-MM-dd HH:mm:ss
const formatTime = date => {
  date = date ? new Date(date) : new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join('-') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  );
};

// 获取日期方法 yyyy-MM-dd
const formatDate = date => {
  date = new Date(date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month, day].map(formatNumber).join('-');
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

// md5加密
const md5Params = obj => {
  let strs = [];
  for (let key in obj) {
    strs.push(`${key}=${obj[key]}`);
  }
  strs.sort();
  strs = strs.join('&') + md5Key;
  return cryptoJs.MD5(strs);
};

const parseParam = obj => {
  let paramStr = [];
  for (key in obj) {
    paramStr.push(`${key}=${obj[key]}`);
  }
  return paramStr.join('&');
};
// 验证身份证
const verifyIdCode = function(code) {
  //身份证号合法性验证
  //支持15位和18位身份证号
  //支持地址编码、出生日期、校验位验证
  var city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 ',
  };
  var row = {
    pass: true,
    msg: '验证成功',
  };
  if (
    !code ||
    !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(
      code
    )
  ) {
    row = {
      pass: false,
      msg: '身份证号格式错误',
    };
  } else if (!city[code.substr(0, 2)]) {
    row = {
      pass: false,
      msg: '身份证号地址编码错误',
    };
  } else {
    //18位身份证需要验证最后一位校验位
    if (code.length == 18) {
      code = code.split('');
      //∑(ai×Wi)(mod 11)
      //加权因子
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      //校验位
      var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      var ai = 0;
      var wi = 0;
      for (var i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      if (parity[sum % 11] != code[17].toUpperCase()) {
        row = {
          pass: false,
          msg: '身份证号校验位错误',
        };
      }
    }
  }
  return row;
};
/*
 * 判断数组中是否有该目标值
 * @param arr, obj
 * 1、进行检索的数组
 * 2、如果数组中元素是对象，则需要用key==obj，进一步获取value
 * 3、需要比较的目标元素
 * return (符合条件的元素)
 */

const arrContainsValue = (arr, source, obj) => {
  let i = arr.length;
  let flag = 'unfound';
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i][source] === obj) {
      flag = arr[i];
      return flag;
    }
  }
  return flag;
};
/*
 * 判断数组中是否有该目标值
 * @param arr, obj
 * 1、进行检索的数组
 * 2、如果数组中元素是对象，则需要用key==obj，进一步获取value
 * 3、需要比较的目标元素
 * return (符合条件的元素的index值!!)
 */
const arrContainsIndex = (arr, source, obj) => {
  let i = arr.length;
  let flag = 'unfound';
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i][source] === obj) {
      flag = i;
      return flag;
    }
  }
  return flag;
};

// 获取日期方法 yyyy-MM-dd
const getCreateTimeDate = time => {
  var date = new Date(time);
  var Y = date.getFullYear() + '-';
  // 月份是从0开始计算的
  var M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-';
  var D = date.getDate();
  return Y + M + D;
};

// 获取时间间隔
const getTimeDistance = (start, end) => {
  start = parseInt(start / 1000);
  end = parseInt(end / 1000);
  let distance = end - start;
  let hour = parseInt(distance / 3600);
  let min = parseInt((distance - hour * 3600) / 60);
  let seconds = distance % 60;
  return `${hour ? hour + '小时' : ''}${min}分${seconds}秒`;
};

//获取地址栏中的参数
const GetUrlType = url => {
  var urlStr = url;
  var length = urlStr.indexOf('?');
  var theRequest = {};
  if (length != -1) {
    var str = urlStr.substr(length + 1);
    var strs = str.split('&'); // 数组形式保存,如 [type=2,serviceId=5]
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = decodeURIComponent(
        strs[i].split('=')[1]
      );
    }
  }
  return theRequest;
};

// 本地缓存方法
const storageSetter = (key, val) => {
  return localStorage.setItem(key, val);
};

const storageGetter = key => {
  return localStorage.getItem(key);
};

//  检测token是否过期。仅在vue中适用
const isTokenInvaild = function(data) {
  if (data.code == '401') {
    this.$router.push('/login');
  } else if (data.code != '200') {
  }
};

//  显示提示信息的弹窗
const popInfo = function(mes, Toast, callback) {
  Toast({
    message: mes,
    position: 'bottom',
    duration: 1500,
  });
  if (callback) {
    setTimeout(callback, 1500);
  }
};

// 判断终端信息
const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

const base64Tofile = function(base64) {
  //dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
  let data = base64.split(',')[1];

  // atob，其作用是做解码，因为图片格式的base64.
  data = window.atob(data);

  // 上述方法解码出来可能是一堆乱码，Uint8Array返回的是8进制整型数组
  var ia = new Uint8Array(data.length);
  for (var i = 0; i < data.length; i++) {
    ia[i] = data.charCodeAt(i);
  }

  // Blob是存储二进制文件的容器，典型的Blob对象是一个图片或者声音文件，其默认是PNG格式
  var blob = new Blob([ia], {
    type: 'image/jpeg',
  });
  return blob;
};

// 页面主体设置 fixed 来禁止滚动
const docFixed = function() {
  let scrollTop = 0;
  let bodyEl = document.body;
  return isFixed => {
    if (isFixed) {
      scrollTop = window.scrollY;

      bodyEl.style.position = 'fixed';
      bodyEl.style.top = -scrollTop + 'px';
    } else {
      bodyEl.style.position = '';
      bodyEl.style.top = '';
      window.scrollTo(0, top); //  回到原先的top
    }
  };
};
const stopBodyScroll = docFixed();

/* 要求：输入一个整数n，在[2, ... , 32]中选取n个随机且不重复的整数组成数组返回
 *
 */
function randArr(n, start = 2, end = 6) {
  // 对输入的n进行检查
  /*1、要正整数。（可以是字符串）
    2、在所给范围内：start < n < end
  */
  var rep = /[^0-9]/g;
  if (rep.test(n)) {
    alert('请输入正整数');
  }
  if (n < 1 || n > end - start + 1) {
    alert('数组长度不能超过' + (end - start + 1));
  }
  var resultArr = [];
  // 生成长度为(end-start+1)，且最后一位值是 end 的数组
  var temArr = Array.apply(null, Array(end - 0 + 1))
    .map(function(item, index) {
      return index;
    })
    .slice(start);
  for (var i = 0; i < n; i++) {
    // randIndex 必须转化成整数
    var randIndex = Math.floor(Math.random() * temArr.length) - 1;
    randIndex = randIndex < 0 ? 0 : randIndex;
    resultArr = resultArr.concat(temArr.splice(randIndex, 1));
  }
  return resultArr;
}

function setNavBarTitle(title) {
  document.title = title;
  const i = document.createElement('iframe');
  // 加载一个空页面
  i.src = '/jzza/favicon.ico';
  i.style.display = 'none';
  i.onload = () => {
    setTimeout(() => {
      i.remove();
    }, 20);
  };
  document.body.appendChild(i);
}

function isArray(arr) {
  return arr instanceof Array;
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  parseParam: parseParam,
  arrContainsValue: arrContainsValue,
  getCreateTimeDate: getCreateTimeDate,
  GetUrlType: GetUrlType,
  storageGetter: storageGetter,
  storageSetter: storageSetter,
  isTokenInvaild: isTokenInvaild,
  arrContainsIndex: arrContainsIndex,
  getTimeDistance: getTimeDistance,
  popInfo: popInfo,
  imageFormats: imageFormats,
  videoFormats: videoFormats,
  qiniuiImageUrl: qiniuiImageUrl,
  mobileUrl: mobileUrl,
  apiUrl: apiUrl,
  base64Tofile: base64Tofile,
  stopBodyScroll: stopBodyScroll,
  isiOS: isiOS,
  verifyIdCode: verifyIdCode,
  md5Params: md5Params,
  setNavBarTitle,
  isArray,
};

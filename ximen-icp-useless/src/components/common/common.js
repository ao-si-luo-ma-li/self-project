(function(){

	// 验证身份证
	var verifyIdCode = function(code) {
		//身份证号合法性验证
		//支持15位和18位身份证号
		//支持地址编码、出生日期、校验位验证
		var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
		var row={
			'pass':true,
			'msg':'验证成功'
		};
		if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(code)){
			row={
				'pass':false,
				'msg':'身份证号格式错误'
			};
		}else if(!city[code.substr(0,2)]){
			row={
				'pass':false,
				'msg':'身份证号地址编码错误'
			};
		}else{
			//18位身份证需要验证最后一位校验位
			if(code.length == 18){
				code = code.split('');
				//∑(ai×Wi)(mod 11)
				//加权因子
				var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
				//校验位
				var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
				var sum = 0;
				var ai = 0;
				var wi = 0;
				for (var i = 0; i < 17; i++)
				{
					ai = code[i];
					wi = factor[i];
					sum += ai * wi;
				}
				if(parity[sum % 11] != code[17].toUpperCase()){
					row={
						'pass':false,
						'msg':'身份证号校验位错误'
					};
				}
			}
		}
		return row;
	}

	var verifyMail = function(email) {
		var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		if (!myreg.test(email)) {
			alert('请输入正确的邮箱格式！');
			return false;
		}
	}

	var validatemobile = function (mobile) {
        if(mobile.length==0)
        {
           alert('请输入手机号码！');
           return false;
        }    
        if(mobile.length!=11)
        {
            alert('手机号长度不正确！');
            return false;
        }
        
        var myreg = /^(1[358][0-9]{9})$/;
        if(!myreg.test(mobile))
        {
            alert('请输入有效的手机号码！');
            return false;
        }
        return true;
    }
    

	// 判断是否为中文
	var isChinese = function(temp) {
		var re = /[\u4e00-\u9fa5]/g;
		if(re.test(temp)) return true;
		return false;
	}


	// 写cookies
	var setCookie = function(name, value) {
	    var Days = 0.1;
	    var exp = new Date();
	    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	};

	// 读取cookies
	var getCookie = function(name) {
	    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	    if (arr = document.cookie.match(reg))
	        return unescape(arr[2]);
	    else
	        return null;
	};

	// 删除cookies
	var delCookie = function(name) {
	    var exp = new Date();
	    exp.setTime(exp.getTime() - 1);
	    var cval = getCookie(name);
	    if (cval !== null)
	        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	};

	// 本地缓存方法
	var StorageGetter = function(key) {
	    return eval("(" + localStorage.getItem(key) + ")");
	};
	var StorageSetter = function(key, val) {
	    return localStorage.setItem(key, JSON.stringify(val));
	};


	//获取地址栏中的参数
	var GetUrlType = function(url) {
	    var urlStr = url;
	    var length = urlStr.indexOf("?");
	    var theRequest = {};
	    if (length != -1) {
	        var str = urlStr.substr(length + 1);
	        var strs = str.split("&"); // 数组形式保存,如 [type=2,serviceId=5]
	        for (var i = 0; i < strs.length; i++) {
	            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
	        }
	    }
	    return theRequest;
	};

	module.exports = {
		verifyIdCode: verifyIdCode,
		isChinese: isChinese,
		setCookie: setCookie,
		getCookie: getCookie,
		delCookie: delCookie,
		StorageGetter,
		StorageSetter,
		verifyMail,
		validatemobile,
		GetUrlType
	}
})();

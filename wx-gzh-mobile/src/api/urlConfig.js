const config = {

	// 用户登录
	login: '/api/mediaadmin/login',

	// 获取帖子分类
	category: '/api/mediaadmin/allCategroy',

	// 根据分类获取频道
	findChannel: '/api/mediaadmin/findChannelByCategory',

	// 获取所有素材
	showMedias: '/api/mediaadmin/showMedias',

	// 获取上传文件的Token
	uploadTokenAdmin: '/api/qiniu/uploadTokenAdmin',

	// 七牛地址
	qiniuUploadUrl: 'http://upload.qiniu.com',
	// qiniuUploadUrl: 'https://up.qbox.me',

	// 添加到媒体资源库
	addMedia: '/api/mediaadmin/addMedia',

	// 银行列表
	banks: '/api/creditcard/banks',

	// 信用卡卡种
	cardUsages: '/api/creditcard/cardUsages',

	// 信用卡列表
	cards: '/api/creditcard/cards',

	//信用卡详情
	cardDetail: '/api/creditcard/details',
	cardDetail2: '/api/creditcard/details',

	// 小贷列表
	productList: '/api/cashLoan/productList',

	// 推荐信用卡
	recommendCreditCardList: '/api/creditcard/recommendCreditCardList',

	// 获取所有帖子
	allMedias: '/api/media/allMedias',

	// 获取用户的积分
	pointDetail: '/api/user/pointDetails',

	// 预约办卡
	creditCardReservation: '/api/creditcard/creditCardReservation',

	// 预约办卡列表
	cardReservationList: '/api/creditcard/cardReservationList',

	// 取消预约办卡申请
	cancelCardReservation: '/api/creditcard/cancelCardReservation',

	//用户个人信息查询
	userDetails: '/api/user/details',

	//文件下载
	fileDownload: '/api/file/download',

	//用户申请办卡记录log
	addCardLog: '/api/creditcard/addCardLog',

	//用户申请办卡记录列表
	getUserCardLog: '/api/creditcard/getUserCardLog',

	//获取用户id
	getUserId: '/api/user/login2'

}
export default config;
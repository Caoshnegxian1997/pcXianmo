export default {
	ajaxUrl: {
		baseUrl: 'http://api.fzhe.net/',
		appid: 'fz0000001',
		appkey: 'G7jAPhJm6X',
		urlList: {
			/**首页*/
			getIndex: 'index/index',
			guessLike: 'index/like',
			home : '',
			/*登陆注册*/
			login: 'user/account_login',
			add  : 'user/register',
			/*签到*/
			signIn: 'sign/index',
			/*验证码*/
			getSecurity : 'sms/send',
			contrastSecurity: 'sms/check_sms',
			/*用户*/
			getUser: 'user/get_user',
			backPwd: 'user/find_upass',
			allSite: 'address/all',
			alterSite: 'address/create',
			deleteSite: 'address/delete',
			singleSite: 'address/get',
			/*设置*/
			alterUserPwd: 'user/modfiy_upass',
			alterPayPwd: 'user/modfiy_pay_pass',
			alterUser: 'user/profile',
			bindingBankCard: 'user/bind_bank',
			bindingWX: 'user/bind_wxpay',
			bindingZFB: 'user/bind_alipay',
			antonymCertification: 'user/shiming',
			/*账单*/
			getBill: 'bill/page_all',
			billInfo: 'bill/detail',
			/*转账*/
			getTransfer: 'transfer/page_all',
			transferInfo: 'transfer/detail',
			initiateTransfer: 'transfer/create',
			/*提款*/
			getWithdrawal: 'tixian/page_all',
			withdrawalInfo: 'tixian/detail',
			initiateWithdrawal: 'tixian/create',
			/*分类*/
			getClassificationLv1: 'product_sort/all',
			getClassificationLv2: 'product_sort/sub_item',
			/*问答*/
			getAnswer: 'product_ask/lists',
			detailedAnswer: 'product_ask/ask',
			goodsAnswerDetails: 'product_ask/detail',
			userQuestions: 'product_ask/add_ask',
			userAnswer: 'product_ask/add_answer',
			usefulAnswer: 'product_ask/useful',
			/*商户*/
			merchantsInfo: 'seller/get',
			merchantsIndexTan: 'seller/tabs',
			merchantsGoods: 'seller/get_product',
			merchantsDynamic: 'seller/get_article',
			merchantActivityDynamic: 'seller/get_activity',
			merchantMJX:'seller/get_show',
			/*新闻*/
			getNewsType: 'news/sort_all',
			getNewsList: 'news/page_all',
			getNewsInfo: 'news/detail',
			getTypeAdvertising: 'news/get_banner',
			/*公告*/
			afficheList: 'notice/page_all',
			afficheInfo: 'notice/detail',
			/*广告*/
			appIndexShuffling: 'banner/app_index_lunbo',
			appMallShuffling: 'banner/shops_lunbo',
			/*单页面*/
			getSinglePage: 'single_page/all',
			singlePageIndo: 'single_page/detail',
			/*商品*/
			goodsInfo: 'product/detail',
			goodsDescribe: 'product/detail_desc',
			goodsComments: 'product/detail_comment',
			/*团队*/
			getUserAllTeam: 'user/alltuandui',
			getUserThreeTeam: 'user/tuandui',
			/*收藏*/
			addCollect: 'collect/create',
			getCollect: 'collect/page_all',
			getBrowseRecord: 'histor/page_all',
			/*购物车*/
			addCart: 'cart/add',
			getCart: 'cart/getcart',
			setAmount: 'cart/update_quantity',
			checkall: 'cart/select_all',
			deleteCart: '/cart/delete',
			/*众筹*/
			getMarchRase: 'crowdfunding/valid_all',
			getOverRase: 'crowdfunding/over_all',
			getSupportRase: 'crowdfunding/support',
			raseListInfo: 'crowdfunding/detail',
			createRaseOrder: 'crowdfunding/create_order',
			getRaseOrder: 'user_order/crowdfunding',
			raseOrderInfo: 'user_order/crowdfunding',
			raseOrderYes: 'user_order/crowdfunding_receipt',
			logisticsTrace: 'user_order/wuliu',
			// 方者大学
			getFzCollegialClass: 'fzdaxue/sort_all',
			getFZCollegialList: 'fzdaxue/page_all',
			getFZCollegialInfo: 'fzdaxue/detail',
			// 升级订单
			getOrderList: 'user_order/baodan',
			getOrderInfo: 'user_order/baodan_detail',
			confirmGoods: 'user_order/baodan_receipt',
			logistics: 'user_order/wuliu',
			// 升级分类
			getClassList: 'baodan/sort_all',
			getGoodsList: 'baodan/page_all'
		}
	}
}
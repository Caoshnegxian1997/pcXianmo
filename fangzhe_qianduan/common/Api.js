import config from './config.js'
import md5 from './md5.js'


class Api {
	constructor() {
		this.baseUrl = config.ajaxUrl.baseUrl
	}

	/**
	 * post请求
	 *  @param {Object} params
	 *  url  请求地址
	 * 	data 请求体
	 * */

	post(params) {
		let token = uni.getStorageSync('token'),
			uid = uni.getStorageSync('uid'),
			timestamp = parseInt(new Date().getTime() / 1000)
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.baseUrl}${params.url}`,
				method: 'POST',
				data: params.data,
				header: {
					'appkey': config.ajaxUrl.appkey,
					'appid': config.ajaxUrl.appid,
					'timestamp': timestamp,
					'sign': md5(`${config.ajaxUrl.appid}-${config.ajaxUrl.appkey}-${timestamp}${uid}${token}`),
					'token': token,
					'uid': uid
				},
				success: (res) => {
					// console.log("这是测试测试");
					resolve(this.validationData(res))
				}
			})
		})
	}



	/**
	 * GET
	 * @param {Object} params 
	 * 
	 * */
	get(params) {
		let token = uni.getStorageSync('token'),
			uid = uni.getStorageSync('uid'),
			timestamp = parseInt(new Date().getTime() / 1000)
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.baseUrl}${params.url}`,
				method: 'GET',
				data: params.data,
				header: {
					'appkey': config.ajaxUrl.appkey,
					'appid': config.ajaxUrl.appid,
					'timestamp': timestamp,
					'sign': md5(`${config.ajaxUrl.appid}-${config.ajaxUrl.appkey}-${timestamp}${uid}${token}`),
					'token': token,
					'uid': uid
				},
				success: (res) => {
					resolve(this.validationData(res))
				}
			})
		})
	}




	/**
	 * 拦截
	 * @param {Object} result 
	 * (result.data
	 * */
	validationData(result) {
		// console.log(result);
		switch (result.data.code) {
			case 0:
				return result.data;
				break;
			case 1001:
			case 1002:
			case 1000001:
				uni.showToast({
					title: result.data.message,
					icon: 'none',
					duration: 2000
				});
				return result.data.message;
				break;
		}
	}
}
export default new Api()

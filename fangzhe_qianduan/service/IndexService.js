import BaseServict from './BaseService.js'

export default class IndexService extends BaseServict {
	
	/**
	 * @param {Object} data
	 * @param {string} url 链接地址
	 * @param {Object} data 请求体数据
	 * 
	 * 获取首页数据
	 * */
	async getIndex (data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getIndex,
			data: data
		})
	}
	
	/**
	 * @param {Object} data
	 * 
	 * 猜猜你喜欢
	 * */
	async guessLike (data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.guessLike,
			data: data
		})
	}
}
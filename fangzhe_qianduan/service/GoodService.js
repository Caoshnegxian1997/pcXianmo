import BaseServict from './BaseService.js'

export default class GoodService extends BaseServict{
	
	/**
	 * 商品详情
	 * @param {Object} data 
	 * */
	async goodsInfo (data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.goodsInfo,
			data: data
		})
	}
	
	/**
	 * 商品描述
	 * @param {Object} data 
	 * */
	async goodsDescribe (data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.goodsDescribe,
			data: data
		})
	}
	
	/**
	 * 商品品论
	 * @param {Object} data 
	 * */
	async goodsComments (data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.goodsComments,
			data: data
		})
	}
}
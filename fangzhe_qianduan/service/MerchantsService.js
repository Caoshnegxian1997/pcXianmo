import BaseServict from './BaseService.js'

export default class MerchantsService extends BaseServict {
	
	/**
	 * 商家详情
	 * @param {Object} data 
	 * */
	async merchantsInfo(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.merchantsInfo,
			data: data
		})
	}
	/**
	 * 商户首页TAB
	 * @param {Object} data 
	 * */
	async merchantsIndexTan(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.merchantsIndexTan,
			data: data
		})
	}
	/**
	 * 获取商家商品
	 * @param {Object} data 
	 * */
	async merchantsGoods(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.merchantsGoods,
			data: data
		})
	}
	/**
	 * 商家动态
	 * @param {Object} data 
	 * */
	async merchantsDynamic(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.merchantsDynamic,
			data: data
		})
	}
	/**
	 * 商家活动商品
	 * @param {Object} data 
	 * */
	async merchantActivityDynamic(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.merchantActivityDynamic,
			data: data
		})
	}
	/**
	 * 商家买家秀
	 * @param {Object} data 
	 * */
	async merchantMJX(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.merchantMJX,
			data: data
		})
	}
}

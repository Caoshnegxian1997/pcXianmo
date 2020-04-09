import BaseServict from './BaseService.js'

export default class ContentService extends BaseServict{
	/**
	 * 公告列表
	 * @param {Object} data 
	 * */
	async afficheList(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.afficheList,
			data: data
		})
	}
	
	/**
	 * 公告详情
	 * @param {Object} data 
	 * */
	async afficheInfo(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.afficheInfo,
			data: data
		})
	}
	
	/**
	 * app首页广告
	 * @param {Object} data 
	 * */
	async appIndexShuffling(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.appIndexShuffling,
			data: data
		})
	}
	/**
	 * app广告
	 * @param {Object} data 
	 * */
	async appMallShuffling(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.appMallShuffling,
			data: data
		})
	}
	
	/**
	 * 获取单页面
	 * @param {Object} data 
	 * */
	async getSinglePage(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getSinglePage,
			data: data
		})
	}
	/**
	 * 单页面详情
	 * @param {Object} data 
	 * */
	async singlePageIndo(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.singlePageIndo,
			data: data
		})
	}
}
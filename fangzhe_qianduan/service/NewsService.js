import BaseServict from './BaseService.js'

export default class NewsService extends BaseServict {
	/**
	 * 新闻分类
	 * @param {Object} data 
	 * */
	async getNewsType(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getNewsType,
			data: data
		})
	}
	
	/**
	 * 新闻列表
	 * @param {Object} data
	 * 	page 当前分页，默认为第一页
	 * 	sort_id  分类ID，为空或者0则为精选资讯
	 * */
	async getNewsList(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getNewsList,
			data: data
		})
	}
	
	/**
	 * 新闻详情
	 * @param {Object} data
	 * id 当前记录ID
	 * */
	async getNewsInfo(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getNewsInfo,
			data: data
		})
	}
	
	/**
	 * 分类广告
	 * @param {Object} data 
	 * sort_id 分类ID
	 * */
	async getTypeAdvertising(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getTypeAdvertising,
			data: data
		})
	}
}
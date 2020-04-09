import BaseServict from './BaseService.js'

/**
 * 收藏
 * */
export default class CollectService extends BaseServict {
	/**
	 * 添加收藏
	 * @param {Object} data
	  * 
	 * */
	async addCollect (data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.addCollect,
			data: data
		})
	}
	
	/**
	 * 用户收藏列表
	 * @param {Object} data 
	 * */
	async getCollect (data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getCollect,
			data: data
		})
	}
	
	/**
	 * 用户浏览记录列表
	 * @param {Object} data 
	 * */
	async getBrowseRecord (data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getBrowseRecord,
			data: data
		})
	}
}
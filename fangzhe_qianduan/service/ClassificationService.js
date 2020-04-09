import BaseServict from './BaseService.js'

/**
 * 分类
 * */
export default class ClassificationService extends BaseServict {
	/**
	 * 分类一
	 * @param {Object} data
	  * 
	 * */
	async getClassificationLv1 (data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getClassificationLv1,
			data: data
		})
	}
	
	/**
	 * 分类二
	 * @param {Object} data
	  * 
	 * */
	async getClassificationLv2 (data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getClassificationLv2,
			data: data
		})
	}	
}
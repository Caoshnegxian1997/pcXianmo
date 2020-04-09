import BaseServict from './BaseService.js'

export default class SiteService extends BaseServict {
	/**
	 * 全部收货地址
	 * @param {Object} data 
	 * */
	async allSite(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.allSite,
			data: data
		})
	}

	/**
	 * 修改&添加 收货地址
	 * @param {Object} data
	 * uid: string
	 * */
	async alterSite(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.alterSite,
			data: data
		})
	}

	/**
	 * 删除收货地址
	 * 
	 * */
	async deleteSite(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.deleteSite,
			data: data
		})
	}
	
	/**
	 * 查询地址
	 * @param {Object} data 
	 * */
	
	async singleSite(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.singleSite,
			data: data
		})
	}
}

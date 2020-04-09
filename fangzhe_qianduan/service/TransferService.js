import BaseServict from './BaseService.js'

export default class TransfeService extends BaseServict {
	/**
	 * 转账查询
	 * @param {Object} data 
	 * page 页
	 * */
	async getTransfer(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getTransfer,
			data: data
		})
	}
	
	/**
	 * 转账详情
	 * @param {Object} data
	 * id
	 * */
	async transferInfo(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.transferInfo,
			data: data
		})
	}
	/**
	 * 发起转账
	 * @param {Objetc} data 
	 * */
	async initiateTransfer (data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.initiateTransfer,
			data: data
		})
	}
}

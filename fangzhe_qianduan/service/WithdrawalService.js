import BaseServict from './BaseService.js'

export default class WithdrawalService extends BaseServict {
	/**
	 * 提现查询
	 * @param {Object} data 
	 * page 页
	 * */
	async getWithdrawal(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getWithdrawal,
			data: data
		})
	}
	
	/**
	 * 提现详情
	 * @param {Object} data
	 * id id
	 * */
	async withdrawalInfo(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.withdrawalInfo,
			data: data
		})
	}
	
	
	/**
	 * 提现发起
	 * @param {Object} data
	 * id id
	 * */
	async initiateWithdrawal(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.initiateWithdrawal,
			data: data
		})
	}
}

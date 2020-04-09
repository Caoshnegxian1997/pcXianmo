import BaseServict from './BaseService.js'

/**
 * 订单Service
 * */
export default class BillService extends BaseServict {
	/**
	 * 订单查询
	 * @param {Object} data 
	 * page 页
	 * */
	async getBill(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getBill,
			data: data
		})
	}
	
	/**
	 * @param {Object} data
	 * id 订单id
	 * */
	async billInfo(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.billInfo,
			data: data
		})
	}
}

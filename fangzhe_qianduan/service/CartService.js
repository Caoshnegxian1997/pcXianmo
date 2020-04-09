import BaseServict from './BaseService.js'
/**
 * 购物车
 * */
export default class CartService extends BaseServict {
	/**
	 * 加入购物车
	 * @param {Object} data
	  * 
	 * */
	async addCart (data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.addCart,
			data: data
		})
	}
	
	/**
	 * 获取购物车列表
	 * @param {Object} data 
	 * */
	async getCart (data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.getCart,
			data: data
		})
	}
	
	/**
	 * 数量修改
	 * @param {Object;} data 
	 * */
	async setAmount (data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.setAmount,
			data: data
		})
	}
	
	/**
	 * !全选
	 * @param {Object} data 
	 * */
	async checkall (data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.checkall,
			data: data
		})
	}
	/**
	 * 删除商品
	 * @param {Object} data 
	 * */
	async deleteCart (data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.deleteCart,
			data: data
		})
	}
}
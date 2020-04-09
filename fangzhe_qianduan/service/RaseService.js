import BaseServict from './BaseService.js'

export default class RaseService extends BaseServict {
	/**
	 * 进行众筹列表
	 * */
	async getMarchRase (data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getMarchRase,
			data: data
		})
	}
	/**
	 * 已结束众筹列表
	 * */
	async getOverRase (data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getOverRase,
			data: data
		})
	}
	/**
	 * 支持众筹列表
	 * */
	async getSupportRase (data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.getSupportRase,
			data: data
		})
	}
	
	/**
	 * 众筹详情
	 * */
	 
	 async raseListInfo (data) {
	 	return await this.api.post({
	 		url: this.config.ajaxUrl.urlList.raseListInfo,
	 		data: data
	 	})
	 }
	 /**
	  * 创建众筹订单
	  * */
	  async createRaseOrder (data) {
	  	return await this.api.post({
	  		url: this.config.ajaxUrl.urlList.createRaseOrder,
	  		data: data
	  	})
	  }
}
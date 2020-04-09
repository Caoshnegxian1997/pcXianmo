import BaseServict from './BaseService.js'

export default class QuestionsAnswersService extends BaseServict {
	/**
	 * 商品回答列表
	 * @param {Object} data 
	 * */
	async getAnswer(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.getAnswer,
			data: data
		})
	}

	/**
	 * 详情内问答
	 * @param {Object} data 
	 * */
	async detailedAnswer(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.detailedAnswer,
			data: data
		})
	}

	/**
	 * 商品问答详情
	 * @param {Object} data 
	 * */
	async goodsAnswerDetails(data) {
		return await this.api.get({
			url: this.config.ajaxUrl.urlList.goodsAnswerDetails,
			data: data
		})
	}

	/**
	 * 用户提问
	 * @param {Object} data 
	 * */
	async userQuestions(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.userQuestions,
			data: data
		})
	}

	/**
	 * 用户回答
	 * @param {Object} data 
	 * */
	async userAnswer(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.userAnswer,
			data: data
		})
	}
	/**
	 * 回答有用
	 * @param {Object} data 
	 * */
	async usefulAnswer(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.usefulAnswer,
			data: data
		})
	}
}

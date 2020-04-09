import BaseServict from './BaseService.js'

export default class UserService extends BaseServict {

	/**
	 登陆
	 * @param {Objiec} data 
	 * */
	async userLogin(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.login,
			data: data
		})
	}
	/**
	 * 注册
	 * @param {Objiec} data 
	 * */
	async userRegist(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.add,
			data: data
		})
	}

	/**
	 * 找回密码
	 * @param {data}  
	 * */
	async backPassword(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.backPwd,
			data: data
		})
	}


	/**
	 * 发送验证码
	 * @param {type}  
	 * */

	async getSecurity(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.getSecurity,
			data: data
		})
	}

	/**
	 * 校验验证码
	 * @param {Object} data 
	 * 
	 * */
	async contrastSecurity(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.contrastSecurity,
			data: data
		})
	}
	/**
	 * 获取用户信息
	 * @param {Object} data 
	 * */
	async getUserInformation(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.getUser,
			data: data
		})
	}

	/**
	 * 修改登陆密码
	 * @param {Object} data 
	 * */

	async alterUserPwd(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.alterUserPwd,
			data: data
		})
	}
	
	/**
	 * 修改支付密码
	 * @param {Object} data 
	 * */
	async alterPayPwd(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.alterPayPwd,
			data: data
		})
	}
	/**
	 * 修改用户信息
	 * @param {Object} data 
	 * */
	
	async alterUser(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.alterUser,
			data: data
		})
	}
	/**
	 * 绑定银行卡
	 * */
	
	async bindingBankCard(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.bindingBankCard,
			data: data
		})
	}
	/**
	 * 绑定微信收款
	 * @param {Object} data
	  * 
	 * */
	async bindingWX(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.bindingWX,
			data: data
		})
	}
	
	/**
	 * 实名认证
	 * */
	async antonymCertification(data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.antonymCertification,
			data: data
		})
	}
	
	/**
	 * 绑定支付宝
	 * @param {Object} data
	 * */
	async bindingZFB (data) {
		return await this.api.post({
			url: this.config.ajaxUrl.urlList.bindingZFB,
			data: data
		})
	}
}

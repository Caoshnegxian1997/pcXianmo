import security from '../../service/UserService.js'

class verificationCode{
	constructor() {
	    this.sec = new security()
	}
	/**
	 *  发送验证码
	 * @param {Object} data 
	 * */
	async getSecurity(data) {
		let val = await this.sec.getSecurity(data)
		if (val.code == 0) {
			return val
		}
	}

	/**
	 *  校验验证码
	 * @param {Object} data  
	 * */

	async contrastSecurity(data) {
		let val = await this.sec.contrastSecurity(data)
		if (val.code == 0) {
			return val
		}
	}
}
export default new verificationCode()

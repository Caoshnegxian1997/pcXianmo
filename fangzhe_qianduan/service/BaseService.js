import Api from '../common/Api.js'
import conf from '../common/config.js'

/**
 * 基础Service
 * 导入 dao,
 * 		路由配置
 * */
export default class BaseServict {
	constructor() {
	    this.api = Api
		this.config = conf
	}
}
import BillService from './BillService.js'
import CollectService from './CollectService'
import ClassificationService from './ClassificationService.js'
import ContentService from './ContentService.js'
import CartService from './CartService.js'
import GoodService from './GoodService.js'
import UserService from './UserService.js'
import SiteService from './SiteService.js'
import TransferService from './TransferService.js'
import WithdrawalService from './WithdrawalService.js'
import QuestionsAnswersService from './QuestionsAnswersService.js'
import MerchantsService from './MerchantsService.js'
import NewsService from './NewsService.js'
import RaseService from './RaseService.js'
import IndexService from './IndexService'


export default class Imports {
	indexService = new IndexService()
	userService = new UserService()
	siteService = new SiteService()
	billService = new BillService()
	transferService = new TransferService()
	withdrawalService = new WithdrawalService()
	classificationService = new ClassificationService()
	questionsAnswersService = new QuestionsAnswersService()
	merchantsService = new MerchantsService()
	contentService = new ContentService()
	newsService = new NewsService()
	goodService = new GoodService()
	collectService = new CollectService()
	cartService = new CartService()
	raseService = new RaseService()
	
}

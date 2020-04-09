<template>
	<view class="install">
		<view class="status_bar"><!-- 这里是状态栏 --> </view>
		<uni-nav-bar left-icon="back" title="测试" ></uni-nav-bar>
		<view class="content">
			<ul>
				<li v-for='(item,index) in installList' :key='index'>
					<view class="list">
						<text>{{item.title}}</text>
						<text><text>{{item.extend}}</text>&gt;</text>
					</view>
				</li>
			</ul>
			
			<view class="button">
				<button>退出登陆</button>
			</view>
		</view>
<!-- 		<button>修改登陆密码</button>
		<button>修改支付密码</button>
		<button>修改人个资料</button>
		<button @click="bindingBankCard">绑定银行卡</button>
		<button @click="bindingWX">绑定微信收款</button>
		<button @click="antonymCertification">用户实名认证</button>

		<input type="text" placeholder-class v-model="userInfo.uname" placeholder="手机号">
		<button @click="getSecurity">发送</button>
		<input type="text" placeholder-class v-model="userInfo.yzm" placeholder="验证码">
		<button @click="alterUserPwd">验证</button>
		<image :src="url"></image>
		<view @click="change">上传</view> -->
	</view>
</template>

<script>
	import auth from '../../common/utils/verificationCode.js'
	import uniNavBar from '@/components/navBar/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				installList: [
					{
						title: '个人信息',
						extend: ''
					},
					{
						title: '收货地址',
						extend: ''
					},
					{
						title: '实名认证',
						extend: '未认证'
					},
					{
						title: '银行卡',
						extend: '未设置'
					},
					{
						title: '登录密码',
						extend: ''
					},
					{
						title: '支付密码',
						extend: ''
					},
					{
						title: '服务协议',
						extend: ''
					},
					{
						title: '常见问题',
						extend: ''
					},
					{
						title: '隐私条款',
						extend: ''
					},
				],
				url: '',
				userInfo: {
					uname: '18100000001',
					yzm: ''
				},
				upassInfo: {
					upass: '111111',
					upass_confirm: '111111',
				},
				payInfo: {
					pay_pass: '',
					pay_pass_confirm: ''
				},
				bankInfo: {
					bank_name: '',
					bank: '',
					bank_branch: '',
					bank_cardno: '',
					bank_mobile: '',
					mark_type: 2
				},
				wxInfo: {
					wxpay_account: 'wzy113028',
					wxpay_code: '',
				},
				zfbInfo: {
					alipay_account: '',
					alipay_code: ''
				},
				antonym: {
					identity_name: '',
					identity: '',
					identity_pic: ''
				},
				profileInfo: {
					face: '',
					nick: '',
					sex: '',
					birthday: '',
					province: '',
					city: '',
					district: '',
					jieshao: '',
					img: ''
				}
			}
		},
		onLoad() {

		},
		methods: {
			async getSecurity() {
				let mobile = {
					mobile: this.userInfo.uname
				}
				let data = await auth.getSecurity(mobile)
			},
			// async contrastSecurity() {
			// 	let mobile = {
			// 		mobile: this.userInfo.uname,
			// 		yzm: this.userInfo.yzm
			// 	}
			// 	return await auth.contrastSecurity(mobile)
			// },
			/**
			 * 修改用户密码
			 * */
			async alterUserPwd() {
				// let secuity = this.contrastSecurity()
				// if (secuity.code == 0) {
				let userPass = Object.assign(this.userInfo, this.upassInfo)
				let data = await this.$http.userService.alterUser(userpass)
				console.log(data);
				// }
				// 
			},

			/**
			 * 修改支付密码
			 * */
			async alterPayPwd() {
				let secuity = this.contrastSecurity()
				let userPay = Object.assign(this.userInfo, this.upassInfo)
				let data = await this.$http.userService.alterPayPwd(userPay)
			},
			/**
			 * 修改用户资料
			 * */
			async alterUser() {
				let data = await this.$http.userService.alterUser(this.profileInfo)
			},
			/**
			 * 绑定银行卡
			 * */
			async bindingBankCard() {
				// let secuity = this.contrastSecurity()
				let bank = Object.assign(this.userInfo, this.bankInfo)
				let data = await this.$http.userService.bindingBankCard(bank)
			},
			/**
			 * 绑定微信
			 * */
			async bindingWX() {
				this.wxInfo.wxpay_code = this.url
				// console.log(this.wxInfo.wxpay_code);
				let wx = Object.assign(this.userInfo, this.wxInfo)
				let data = await this.$http.userService.bindingWX(wx)

				console.log(data);
			},
			/**
			 * 绑定支付宝
			 * */
			async bindingZFB() {
				this.zfbInfo.alipay_code = this.url
				let zfb = Object.assign(this.userInfo, this.zfbInfo)
				let data = await this.$http.userService.bindingZFB(zfb)
			},
			/**
			 * 实名认证
			 * */
			async antonymCertification() {
				this.antonym.identity = this.url
				let data = await this.$http.userService.antonymCertification(this.antonym)
			},
			change() {
				var url = this.url
				let a = uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						// console.log(res);
						this.urlTobase64(res.tempFilePaths[0])
					}
				})
			},
			urlTobase64(url) {
				uni.request({
					url: url,
					method: 'GET',
					responseType: 'arraybuffer',
					success: ress => {
						// console.log(ress.data);
						let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64 
						base64 = 'data:image/jpeg;base64,' + base64 //不加上这串字符，在页面无法显示的哦'=

						console.log(base64);
					}
				})
			}
		}
	}
</script>

<style scoped lang="stylus">
	.content
		width 100%
		ul
			li
				width 100%
				height 100rpx
				display flex
				justify-content center
				align-items center
				.list
					width 95%
					height 100%
					display flex
					justify-content space-between
					align-items center
					border-bottom 1rpx solid #f4f4f4
					text
						&:nth-child(1)
							font-family: PingFang-SC-Medium;
							font-size: 30rpx;
							font-weight: normal;
							font-stretch: normal;
							color: #333333;
						text
							font-family: PingFang-SC-Medium;
							font-size: 30rpx;
							font-weight: normal;
							font-stretch: normal;
							color: #666666;
							margin-right 17rpx
	.button
		margin-top 142rpx
		button
			width 630rpx
			height 80rpx
			background-color: #ff0000;
			font-family: PingFang-SC-Medium;
			font-size: 36rpx;
			font-weight: normal;
			font-stretch: normal;
			color: #ffffff;
			text-align center
			align-items center
			line-height 80rpx
			
</style>

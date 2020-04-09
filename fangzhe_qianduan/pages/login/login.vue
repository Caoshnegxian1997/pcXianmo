<template>
	<view class="login">
		<view class="status_bar">
				<!-- 这里是状态栏 --> 
		</view>
		<uni-nav-bar left-icon="back"></uni-nav-bar>
		<view class="content">
			<view class="reg-one" v-if="install.pageInstOne">
				<view class="reg-one-top">
					<view class="logo">
						<text>FANGZHE</text>
						<text>方者</text>
					</view>
					<view class="input">
						<view class="inp-top">
							<input type="text" placeholder="请输入手机号" @input="getInput" font-size='36rpx' maxlength="11"/>
							<text>新注册的手机号验证后会自动创建账号</text>
						</view>
						<view class="inp-bom">
							<view v-if="install.buttonInst">
								<button class="button-one">获取短信验证吗</button>
							</view>
							<view v-else>
								<button class="button-two" @click="getSecurity">获取短信验证吗</button>
							</view>
						</view>
					</view>
				</view>
				<view class="reg-one-bom">
					<view class="top">
						<text class="line line-left"></text>
						<text>其他方式登陆</text>
						<text class="line line-right"></text>
					</view>
					<view class="bom">
						<image src="" mode=""></image>
						<image src="" mode=""></image>
					</view>
				</view>
			</view>
			<view class="reg-two" v-else>
				<view class="top">
					<text>请输入短信验证码</text>
					<text>6位验证码已发送至：{{this.backList.uname}}</text>
				</view>
				<view class="bom">
					<view class="import">
						<ul>
							<li v-for="(item,index) in yzmList" :key='index'>{{item}}</li>
						</ul>
					</view>
					<view class="button">
						<button class="new">重新发送({{item}})s</button>
					</view>
				</view>
				<view class="key">
					<ul>
						<li v-for='(item,index) in keyList' :key='index' @click='getKey(item)'>{{item}}</li>
					</ul>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/navBar/uni-nav-bar/uni-nav-bar.vue'
	import security from '@/common/utils/verificationCode.js'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				userInfo: {
					uname: '18100000001',
					upass: '111111'
				},
				backList: {
					uname: '',
					upase: '',
					upass_confirm: '',
					yzm: ''
				},
				install: {
					buttonInst: true,
					pageInstOne: true
				},
				item: 60,
				yzmList: ['','','','','',''],
				keyList: ['1','2','3','4','5','6','7','8','9','','0','x'],
				keySum: 0
			}
		},
		methods: {
			// Date.parse(new Date())/1000;A
			async getUserLogin() {
				if (this.userInfo.uname.length != 11 || this.userInfo.upass.length == 0) {
					uni.showModal({
						content: '账号和密码不能为空！！！',
						showCancel: false
					});
				} else {
					let data = await this.$http.userService.userLogin(this.userInfo)
					if (data.code == 0 && data.hasOwnProperty('code')) {
						uni.setStorageSync('token', data.data.token)
						uni.setStorageSync('uid', data.data.info.uid)
						// console.log(data);
						uni.navigateTo({
							url: '../index/index'
						})
					} else {
						console.log(data);
					}
				}
			},
			/**
			 * 找回密码 
			 * */
			async backPassword() {

				if (this.backList.upase === this.backList.upass_confirm) {
					let data = await this.$http.userService.contrastSecurity({
						mobile: this.backList.uname,
						yzm: this.backList.yzm
					})
					if (data.code == 0) {
						let backData = await this.$http.userService.backPassword(this.backList)
						console.log("此处是",backData);
						this.cut = true
					}
				}
				// let data = await this.$http.userService.backPassword(this.backList)
			},
			/**
			 * 获取验证码
			 * 
			 * */
			async getSecurity() {
				let data = security.getSecurity({mobile: this.backList.uname})
				console.log(data);
				this.install.pageInstOne = false
			},
			// 验证 号码
			getInput (e) {
				this.install.buttonInst =  e.detail.value.length === 11 ? false : true
				this.backList.uname = e.detail.value
			},
			// key 
			getKey (index) {
				
				if (this.yzmList.length <=6 &&this.yzmList[5] == '') {
					if (index != 'x' && index != ' ' && this.keySum<=5) {
						this.yzmList[this.keySum] = index
						this.keySum ++
						if (this.keySum == 6) {
							this.yzmList.forEach((item,index)=> {
								this.backList.yzm +=item
							})
							let data = security.contrastSecurity({
								mobile: this.backList.uname,
								yzm: this.backList.yzm
							})
							
							if (data.code == 0 && data.hasOwnProperty('code')) {
								uni.navigateTo({
									url: '../index/index'
								})
							}
						}
					}
					if (index == 'x' &&this.keySum > 0) {
						--this.keySum
						this.yzmList[this.keySum] = ''
					}
				}
			}
		}
	}
</script>

<style scoped lang="stylus">
	.status_bar
		height var(--status-bar-height)
		width 100%
	.content
		width 100%
		.reg-one
			width 100%
			height 100%
			.reg-one-top
				width 100% 
				display flex
				flex-direction column
				justify-content center
				.logo
					display flex
					justify-content center
					font-size 48rpx
					font-weight 800
					padding 100rpx 0
					box-sizing border-box
					color rgb(255,0,0)
					text
						display inline-block
						margin-left 5rpx
				.input
					width 80%
					display flex
					flex-direction column
					margin 0 auto
					input
						border-bottom 1px solid #C0C0C0
						padding 20rpx 5rpx
					text
						font-size 24rpx
						padding 20rpx 0
						display inline-block
				.inp-bom
					width 100%
					padding 100rpx 0
					box-sizing border-box
					button
						border none
						background #999999
						color #F1F1F1
					.button-one
						background #999999
					.button-two
						background rgb(255,0,0)
			.reg-one-bom
				height 40%
				.top
					display flex
					justify-content  center
					align-items center
					text
						display inline-block
						&:nth-child(2)
							font-size 32rpx
							padding 0 5%
							box-sizing border-box
							color #808080
					.line
						width 15%
						border-bottom 0.5rpx solid #0f0f0f
						background #DD524D
				.bom
					width 100%
					display flex
					justify-content center
					align-items center
					padding 100rpx 0
					image
						width 64rpx
						height 64rpx
						background #007AFF
						margin  0 30rpx
						border-radius 50% 
		.reg-two
			width 100%
			.top
				display flex
				justify-content center
				flex-direction column
				padding 165rpx 0 100rpx 0
				box-sizing border-box
				text
					display block
					text-align center
					&:nth-child(1)
						font-family PingFang-SC-Medium
						font-size 42rpx
						font-weight normal
						font-stretch normal
						color #666666
					&:nth-child(2)
						font-family: PingFang-SC-Medium;
						font-size: 24rpx;
						font-weight: normal;
						font-stretch: normal;
						color: #999999;
			.bom
				box-sizing border-box
				.import
					ul
						width 528rpx
						display flex
						justify-content center
						margin 0 auto
						li
							width 70rpx
							height 77rpx
							border-bottom 1rpx solid #000000
							margin 0 21rpx
							text-align center
							line-height 77rpx
							text
								display inline-block
								font-size  40rpx
								text-align center
								width 100%
				.button
					margin-top 42rpx
					.new
						width 220rpx
						font-size 24rpx
						color: #999999;
						border none !important
						background none !important
		.key
			width 100%
			position fixed
			bottom 0
			left 0
			ul
				display flex
				justify-content space-between
				flex-wrap wrap
				text-align center
				align-items center
				height 419rpx
				li
					width 236rpx
					height 90rpx

</style>

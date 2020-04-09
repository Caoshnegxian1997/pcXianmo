<template>
	<view class="register">
		<view class="status_bar">
				<!-- 这里是状态栏 --> 
		</view>
		<uni-nav-bar left-icon="back"></uni-nav-bar>
		<view class="content">
			<view class="regs-prime" v-if="installList.primeInstall">
				<view class="login">
					<text>FANGZHE</text>
					<text>方者</text>
				</view>
				<view class="input">
					<view class="input-item">
						<view class="top">
							<view class="area">
								<text>中国</text>
								<text> > </text>
							</view>
							<text>成功注册账号后，国家/地区将不能被修改</text>
						</view>
						<view class="bom">
							<view class="number">
								<view class="left">
									<text>+86</text>
									<text> > </text>
								</view>
								<view class="right">
									<input type="number" maxlength="11" @input="getInput"/>
								</view>
							</view>
							<button @click="getSecurity">立即注册</button>
							<view class="deal">
								<text>已阅读并同意</text>
								<text>《用户协议服务》</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="regs-secondary" v-else-if="installList.seconInstall">
				<view class="login">
					<text>FANGZHE</text>
					<text>方者</text>
				</view>
				<view class="input">
					<view class="input-hint">
						<text>
							我们已经发送一条验证短信至
							<text>+86 {{mobile}}</text>
						</text>
						<text>请输入短信中的验证码</text>
					</view>
					<view class="input-item">
						<view class="input-item-left">
							<input type="number" placeholder="请输入验证码" maxlength="6" @input="getYzm"/>
						</view>
						<view class="input-item-right">
							<text>{{installList.mite}}</text>
						</view>
					</view>
					<view class="button">
						<button @click="contrastSecurity">下一步</button>
						<button @click="goBack">返回</button>
					</view>
				</view>
			</view>
			<view class="regs-end" v-else>
				<view class="login">
					<text>FANGZHE</text>
					<text>方者</text>
				</view>
				<view class="regs-con">
					<view class="regs-con-top">
						<view>
							<icon type="success" color='#138e03' size="78" class="icons"></icon>
						</view>
						<view class="text">
							<text>注册成功</text>
						</view>
					</view>
					<view class="button">
						<button @click="jumpLogin">立即登录</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/navBar/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				userInfo: {
					uname: '',
					upass: '',
					invite_code: 8899,
					pay_pass:null
				},
				mobile: '15212907874',
				yzm: '',
				installList: {
					primeInstall: true,
					seconInstall: true,
					mite: '60s'
				}
			}
		},
		methods: {
			/**
			 * 获取验证码
			 * */
			async getSecurity() {
				if (this.mobile.length == 11 && this.mobile != '') {
					let para ={mobile: this.mobile,	mark_type: 2}
					let data = await this.$http.userService.getSecurity(para)
					if(data.code == 0 && data.hasOwnProperty('code')) {
						this.installList.primeInstall = false
						this.installList.mite = '60s'
						this.getCode()
					}
				}
			},
			/**
			 * 校验验证码
			 * */
			async contrastSecurity () {
				let para = { mobile: this.mobile,yzm: this.yzm }
				console.log(para);
				let data = await this.$http.userService.contrastSecurity(para) 
				if (data.code == 0 && data.hasOwnProperty('code')) {
					this.setUser()
				}
			},
			
			// Date.parse(new Date())/1000;A
			/**
			 * 添加用户
			 * */
			async setUser() {
				this.userInfo.uname = this.mobile
				this.userInfo.upass = this.yzm
				var data = await this.$http.userService.userRegist(this.userInfo)
				if (data.code == 0 && data.hasOwnProperty('code')) {
					this.installList.seconInstall = false
				}
			},
			/**
			 * 跳转登陆
			 * */
			 jumpLogin () {
				 uni.navigateTo({
				 	url: '../login/login'
				 })
			 },
			 /**
				* 返回
				* */
			goBack(){
				this.installList.primeInstall = true
				this.installList.seconInstall = true
			},
			
			/**
			 * 号码输入框  
			 * 					需 改
			 * */
			getInput (e) {
				this.mobile =  e.detail.value.length === 11 ? e.detail.value : ''
			},
			/**
			 * 验证码输入框 
			 * 				需 改
			 * */
			getYzm (e) {
				this.yzm = detail.value
			},
			/**
			 * 倒计时
			 * */
			 getCode() {
				 let mite = 60
				 var interval = setInterval(() => {
						--mite
						this.installList.mite = mite == 0 ? '重新发送' : `${mite}s`
				 }, 1000)
				 setTimeout(() => {
						clearInterval(interval)
				 }, 60000)
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
		.regs-prime
			width 100%
			.login
				display flex
				justify-content center
				padding 159rpx 0
				box-sizing border-box
				text
					font-family: PingFang-SC-Bold;
					font-size: 60rpx;
					font-weight: normal;
					font-stretch: normal;
					letter-spacing: 1.5rpx;
					color: #ff0000;
					display inline-block
					&:nth-child(1)
						margin-right 20rpx
					&:nth-child(2)
						margin-left 20rpx
			.input
				padding 55rpx 0 0 0
				box-sizing border-box
				display flex
				justify-content center
				.input-item
					width 80%
					.top
						.area
							width 100%
							border-bottom 1rpx solid #999999
							padding-bottom 30rpx
							box-sizing border-box
							display flex
							justify-content space-between
							align-items center
							text
								font-family: PingFang-SC-Medium;
								font-size: 28rpx !important;
								font-weight: normal;
								font-stretch: normal;
								color: #111111 !important
						text
							margin-top 15rpx
							font-family: PingFang-SC-Regular;
							font-size: 24rpx;
							font-weight: normal;
							font-stretch: normal;
							color: #999999;
					.bom
						margin-top 77rpx
						.number
							width 100%
							border-bottom 1rpx solid #999999
							display flex
							justify-content flex-start
							align-items center
							.left
								padding-bottom 33rpx
								box-sizing border-box
								text
									font-family: PingFang-SC-Medium;
									font-size: 28rpx;
									font-weight: normal;
									font-stretch: normal;
									color: #111111;
						button
							margin-top 69rpx
							background-color #ff0000
							border-radius 10rpx
							font-family PingFang-SC-Regular
							font-size 30rpx
							font-weight normal
							font-stretch normal
							color #ffffff
						.deal
							text
								font-family: PingFang-SC-Regular;
								font-size: 24rpx;
								font-weight: normal;
								font-stretch: normal;
								color: #999999;
								&:nth-child(2)
									color: #ff2842;
		.regs-secondary
			width 100%
			.login
				display flex
				padding 65rpx 0
				box-sizing border-box
				justify-content center
				align-items center
				text
					font-family: PingFang-SC-Bold;
					font-size: 60rpx;
					font-weight: normal;
					font-stretch: normal;
					color: #ff0000;
					display inline-block
					&:nth-child(1)
						margin-right 20rpx
					&:nth-child(2)
						margin-left 20rpx
			.input
				display flex
				justify-content center
				flex-direction column
				width 550rpx
				margin 0 auto
				.input-hint
					text
						font-family: PingFang-SC-Regular
						font-size: 24rpx
						font-weight: normal
						font-stretch: normal
						color: #999999
						text
							color: #ff0000
						&:nth-child(2)
							display block
				button
					width 100%
			.input-item
				display flex
				padding-bottom 20rpx
				box-sizing border-box
				border-bottom 1px solid #d4d2d2
				margin-top 155px
				.input-item-left
					width 430rpx
					border-right 1px solid #d4d2d2
				.input-item-right
					display flex
					justify-content center
					align-items center
					width 115rpx
					text-align center
					text
						font-family: PingFang-SC-Medium;
						font-size: 24rpx;
						font-weight: normal;
						font-stretch: normal;
						color: #1188f8;
			.button
				margin-top 159rpx
				button
					display flex
					justify-content center
					align-items center
					width 550rpx
					height 80rpx
					font-family: PingFang-SC-Regular;
					font-size: 30rpx;
					font-weight: normal;
					font-stretch: normal;
					color: #ffffff;
					&:nth-child(1)
						background #ff0000
					&:nth-child(2)
						border: solid 1rpx #999999;
						background none
						color: #999999 !important
						margin-top 28rpx
						
		.regs-end
			width 100%
			.login
				display flex
				padding 65rpx 0
				box-sizing border-box
				justify-content center
				align-items center
				text
					font-family: PingFang-SC-Bold;
					font-size: 60rpx;
					font-weight: normal;
					font-stretch: normal;
					color: #ff0000;
					display inline-block
					&:nth-child(1)
						margin-right 20rpx
					&:nth-child(2)
						margin-left 20rpx
			.regs-con
				width 550rpx
				margin 0 auto
				.regs-con-top
					display flex
					justify-content center
					text-align center
					flex-direction column
					.text
						margin-top 33rpx
					text
						font-family: PingFang-SC-Medium;
						font-size: 42rpx;
						font-weight: normal;
						font-stretch: normal;
						color: #999999
						
				
				.button
					margin-top 154rpx
					button
						display flex
						justify-content center
						align-items center
						width: 550rpx;
						height: 80rpx;
						background-color: #ff0000;
						border-radius: 10rpx;
						font-family: PingFang-SC-Regular;
						font-size: 30rpx;
						font-weight: normal;
						font-stretch: normal;
						color: #ffffff;
</style>

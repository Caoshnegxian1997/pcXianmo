<template>
	<view class="cart">
		<view class="status_bar"><!-- 这里是状态栏 --> </view>
		<uni-nav-bar left-icon="back" title="购物车" :right-text="parameter.title_right"></uni-nav-bar>
		<view class="content">
			<!-- 购物车列表 -->
			<view class="cart-list">
				<view class="tool">
					<!-- 店家 -->
					<view class="cart-card">
						<!-- 标题 -->
						<view class="card-title">
							<view class="title-left">
								<text class="icon"></text>
								<text>品牌特惠</text>
							</view>
							<view class="title-tight">
								<icon type="success" size="22rpx" style="margin-right: 10rpx;"></icon>
								<text>已免运费</text>
							</view>
						</view>
						<view class="card-con">
							<!-- 商品 -->
							<view class="card-item">
								<view class="item-left">
									<text class="icon"></text>
								</view>
								<view class="item-right">
									<view class="right-image">
										<image src="" mode=""></image>
									</view>
									<view class="right-con">
										<text class="con-title">现代水晶温馨浪漫北欧吊灯 餐厅灯客厅卧室灯具ins欧式简约羽毛灯</text>
										<view class="price">
											<text class="pic"><text>￥</text>4555</text>
											<view class="subtract">
												<text>-</text>
												<text>4</text>
												<text>+</text>
											</view>
										</view>
									</view>
								</view>
							</view>
							<view class="card-item">
								<view class="item-left">
									<text class="icon"></text>
								</view>
								<view class="item-right">
									<view class="right-image">
										<image src="" mode=""></image>
									</view>
									<view class="right-con">
										<text class="con-title">现代水晶温馨浪漫北欧吊灯 餐厅灯客厅卧室灯具ins欧式简约羽毛灯</text>
										<view class="price">
											<text class="pic"><text>￥</text>4555</text>
											<view class="subtract">
												<text>-</text>
												<text>4</text>
												<text>+</text>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cart-bomNav">
				<view class="bom-left">
					<text></text>
					<text>全选</text>
				</view>
				<view class="bom-right">
					<view class="left">
						<text class="bom-text-1">
							<text class="text-1-title">合计：</text>
							<text class="sym">¥ <text>409</text></text>
						</text>
						<text class="bom-text-2">
							<text class="text-2-title">满减优惠</text>
							<text class="sym">¥ <text>19</text></text>
						</text>
					</view>
					<view class="right">
						<text>结算(3)</text>
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
		data () {
			return {
				cartList: [],
				parameter: {
					product_id: '',
					sku_id: '',
					action_type: '',
					product_num: '',
					title_right: '编辑'
				}
			}
		},
		created () {
			
		},
		methods: {
			/**
			 * 添加购物车
			 * */
			async addCart () {
				let data = await this.$http.cartService.addCart(this.parameter)
				console.log(data);
			},
			async getCart () {
				let data = await this.$http.cartService.getCart(this.parameter)
				console.log(data);
			},
			async setAmount () {
				let data = await this.$http.cartService.setAmount(this.parameter)
				console.log(data);
			},
			async checkall () {
				let data = await this.$http.cartService.checkall(this.parameter)
				console.log(data);
			},
			async deleteCart () {
				let data = await this.$http.cartService.deleteCart(this.parameter)
				console.log(data);
			}
		}
	}
</script>

<style scoped lang="stylus">
	.status_bar
		height var(--status-bar-height)
		width 100%
	.cart
		background #F4F4F4
		.content
			display flex
			justify-content center
			flex-wrap wrap
		.cart-list
			display flex
			justify-content center
			background #F96262
			.tool
				width 702rpx
				.cart-card
					width 100%
					margin-top 20rpx
					background #FFFFFF
					padding 0 23rpx
					box-sizing border-box
					.card-title
						display flex
						justify-content space-between
						padding-top 35rpx
						box-sizing border-box
						.title-left,
						.title-tight
							display flex
							align-items center
							text
								display inline-block
						.title-left
							text
								&:nth-child(2)
									font-family: PingFang-SC-Medium;
									font-size: 24rpx;
									color: #222222;
									margin-left 13rpx
						.title-tight
							text
								&:nth-child(2)
									font-size 20rpx;
									color #999999
					.card-con
						.card-item
							height 164rpx
							margin-top 26rpx
							padding-bottom 45rpx
							display flex
							align-items center
							.item-left
								width 46rpx
								height 164rpx
								justify-content space-between
								align-items center
								.icon
									display inline-block
									margin-top 62rpx
							.item-right
								display flex
								.right-image
									image
										width: 160rpx;
										height: 160rpx;
										border-radius: 10px;
										background-color: #95a5ab;
								.right-con
									display flex
									flex-wrap wrap
									width 448rpx
									padding-left 14rpx
									box-sizing border-box
									.con-title
										width 402rpx
										font-size 22rpx
										color: #222222;
									.price
										width 448rpx
										display flex
										justify-content space-between
										.pic
											font-size 32rpx
											color: #ff0000
											text
												&:nth-child(1)
													font-size: 18rpx;
										.subtract
											text
												display inline-block
												font-size: 32rpx;
												&:nth-child(1)
													color: #cbcbcb;
													margin-right 15rpx
												&:nth-child(2)
													width: 60rpx;
													height: 42rpx;
													background-color: #f5f5f5;
													border-radius: 5rpx;
													text-align center
													margin-right 15rpx
												&:nth-child(3)
													color: #ff0000;
										
					.icon
						width: 30rpx;
						height: 30rpx;
						border: solid 1rpx #999999;
						border-radius 50%
		.cart-bomNav
			width 100%
			height 200rpx
			background #4CD964
			position fixed
			left 0
			bottom 0
			display flex
			justify-content space-between
			align-items center
			.bom-left
				display flex
				align-items center
				text
					display block
					&:nth-child(1)
						width 29rpx
						height 29rpx
						margin-left 25rpx
						border: solid 1rpx #999999;
						border-radius 50%
					&:nth-child(2)
						margin-left 14rpx
						font-family: PingFang-SC-Medium;
						font-size: 24rpx;
						color: #222222;
			.bom-right
				display flex
				align-items center
				text
					display inline-block
				.left
					.bom-text-1
						.text-1-title
							font-size: 24rpx;
							color: #222222;
						.sym
							font-size: 18rpx;
							color #FF0000
							&:nth-child(1)
								font-size: 28rpx;
					.bom-text-2
						display block
						color #FF0000
						.text-2-title
							font-size: 18rpx;
						.sym
							font-size 12rpx
							&:nth-child(1)
								font-size: 19rpx;
				.right
					font-size: 26rpx;
					background-color: #ff0000;
					border-radius: 34rpx;
					color: #ffffff;
					padding 22rpx 44rpx
					padding-right 32rpx
					box-sizing border-box
					margin-right 26rpx
					margin-left 27rpx
</style>

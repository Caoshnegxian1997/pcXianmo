<template>
	<view class="index">
		<view class="status_bar"><!-- 这里是状态栏 --> </view>
		<view class="header">
			<view class="header-main">
				<view class="header-left">
					<view class="left-image">
						<image src="" mode=""></image>
					</view>
					<view class="left-name">
						<text>莫小奇</text>
						<text>享3.5折</text>
					</view>
				</view>
				<view class="header-centre">
					<view class="centre-left">
						<icon type="success" size="30rpx"></icon>
						<text>美妆护肤</text>
					</view>
				</view>
				<view class="header-right">
					<view class="right-item">
						<image src="" mode=""></image>
						<text>店长</text>
					</view>
					<view class="right-item">
						<image src="" mode=""></image>
						<text>消息</text>
					</view>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="content-con">
				<!-- 轮播 -->
				<view class="swiper"></view>
				<!-- 导航list -->
				<view class="navList">
					<view class="nav-item" v-for="(item,index) in indexData.nav_list" :key='index'>
						<image :src="item.url" mode=""></image>
						<text>{{item.name}}</text>
					</view>
				</view>
				<!-- 新品 -->
				<view class="newPar">
					<!-- 广告 -->
					<view class="bannad">
						<image :src="indexData.banner.nav_bom_ad[0].pic" mode=""></image>
					</view>
					<!-- 满减-->
					<view class="full">
						<view class="full-item radius">
							<view class="full-item-top">
								<image :src="indexData.banner.nav_bom_bom_ad[0].pic" mode=""></image>
							</view>
							<view class="full-item-bom">
								<text>美容护肤</text>
							</view>
						</view>
						<view class="full-item-2 radius">
							<view class="full-item-2-top color">
								<text>3.8女神节</text>
							</view>
							<view class="full-item-2-con">
								<view class="con-item">
									<image src="" mode=""></image>
								</view>
								<view class="con-item">
									<image src="" mode=""></image>
								</view>
							</view>
							<view class="full-item-2-bom color">
								<text>春装满300减50</text>
							</view>
						</view>
						<view class="full-item radius">
							<view class="full-item-top">
								<image :src="indexData.banner.nav_bom_bom_ad[2].pic" mode=""></image>
							</view>
							<view class="full-item-bom bom-2">
								<text>美容护肤</text>
							</view>
						</view>
					</view>
					<!-- 满减list -->
					<view class="full-list">
						<view class="full-list-item">
							<view class="item-left">
								<text>美礼健康爱</text>
								<text>最高直降500</text>
								<text>立即查看</text>
							</view>
							<view class="item-right">
								<image src="" mode=""></image>
							</view>
						</view>
						<view class="full-list-item">
							<view class="item-left">
								<text>美礼健康爱</text>
								<text>最高直降500</text>
								<text>立即查看</text>
							</view>
							<view class="item-right">
								<image src="" mode=""></image>
							</view>
						</view>
						<view class="full-list-item">
							<view class="item-left">
								<text>美礼健康爱</text>
								<text>最高直降500</text>
								<text>立即查看</text>
							</view>
							<view class="item-right">
								<image src="" mode=""></image>
							</view>
						</view>
						<view class="full-list-item">
							<view class="item-left">
								<text>美礼健康爱</text>
								<text>最高直降500</text>
								<text>立即查看</text>
							</view>
							<view class="item-right">
								<image src="" mode=""></image>
							</view>
						</view>
					</view>
				</view>
				<!-- 众筹 -->
				<view class="raise">
					<view class="title">
						<view class="title-left">
							<text>方者众筹</text>
						</view>
						<view class="title-right">
							<text>更多<text>></text></text>
						</view>
					</view>	
					<view class="raise-con">
						<view class="con-top">
							<view class="card">
								<view class="card-left">
									<text>奥克斯变频空调</text>
									<text>一级能效 1.5匹京裕挂机</text>
									<view class="price">
										<text>￥<text>520</text>起</text>
									</view>
									<view class="heat">
										<image src="" mode=""></image>
										<view class="heat-text">
											<text>支持人数<text>2600</text> / 完成度 <text>600%</text></text>
										</view>
									</view>
								</view>
								<view class="card-right">
									<image src="" mode=""></image>
								</view>
							</view>
							<view class="underline"></view>
						</view>
						<view class="con-bom">
							<view class="bom-card" v-for="(item,index) in indexData.crowdfunding" :key='index'>
								<view class="card-con">
									<view class="card-con-left">
										<text>玻璃电热水壶</text>
										<view class="price">
											<text>￥<text>520</text>起</text>
										</view>
										<view class="heat">
											<image src="" mode=""></image>
											<view class="heat-text">
												<text>支持人数<text>2600</text></text>
											</view>
										</view>
									</view>
									<view class="card-con-right">
										<image src="" mode=""></image>
									</view>
								</view>
								<view class="underline"></view>
							</view>
						</view>
					</view>
				</view>
				<!-- 抢购 -->
				<view class="rush">
					<view class="title">
						<view class="title-left">
							<text>限时抢购</text>
							<view class="mite">
								<text>14点场 </text>
								<text>05:07:42</text>
							</view>
						</view>
						<view class="title-right">
							<text>更多<text>></text></text>
						</view>
					</view>
					<scroll-view scroll-x="true" >
						<view class="slide">
							<view class="slide-item">
								<image src="" mode=""></image>
								<view class="text">
									<text>￥<text>590</text></text>
									<text>￥<text>590</text></text>
								</view>
							</view>
							<view class="slide-item">
								<image src="" mode=""></image>
								<view class="text">
									<text>￥<text>590</text></text>
									<text>￥<text>590</text></text>
								</view>
							</view>
							<view class="slide-item">
								<image src="" mode=""></image>
								<view class="text">
									<text>￥<text>590</text></text>
									<text>￥<text>590</text></text>
								</view>
							</view>
							<view class="slide-item">
								<image src="" mode=""></image>
								<view class="text">
									<text>￥<text>590</text></text>
									<text>￥<text>590</text></text>
								</view>
							</view>
							<view class="slide-item">
								<image src="" mode=""></image>
								<view class="text">
									<text>￥<text>590</text></text>
									<text>￥<text>590</text></text>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
				<!-- 推荐 -->
				<view class="recommend">
					<view class="title">
						<view class="title-left">
							<text>每日推荐</text>
						</view>
						<view class="title-right">
							<text>更多<text>></text></text>
						</view>
					</view>
					<scroll-view scroll-x="true" >
						<view class="slide">
							<view class="slide-item" v-for="(item,index) in indexData.recommend">
								<image :src="item.custom_pic" mode=""></image>
								<text>{{item.name}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
				<!-- 特惠 -->
				<view class="odds">
					<view class="title">
						<view class="title-left">
							<text>优品特惠</text>
						</view>
						<view class="title-right"></view>
					</view>
					<view class="odds-list">
						<view class="odds-item">
							<text>居家生活</text>
							<image src="" mode=""></image>
						</view>
						<view class="odds-item">
							<text>居家生活</text>
							<image src="" mode=""></image>
						</view>
						<view class="odds-item">
							<text>居家生活</text>
							<image src="" mode=""></image>
						</view>
						<view class="odds-item">
							<text>居家生活</text>
							<image src="" mode=""></image>
						</view>
					</view>
				</view>
				<!-- 店铺 -->
				<view class="store">
					<view class="title">
						<view class="title-left">
							<text>店铺推荐</text>
						</view>
						<view class="title-right"></view>
					</view>
					<scroll-view scroll-x="true" >
						<view class="slide">
							<view class="slide-item" v-for="(item,index) in indexData.seller" :key='index' >
								<view class="item-top">
									<image :src="item.logo" mode=""></image>
								</view>
								<view class="item-bom">
									<text>{{item.name}}</text>
									<text>{{item.special}}</text>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
				<!-- 猜猜你喜欢 -->
				<view class="like">
					<view class="title">
						<view class="title-left">
							<text>猜猜你喜欢</text>
						</view>
						<view class="title-right"></view>
					</view>
					<view class="goodsList">
						<view class="good-item-1" v-for="(item,index) in likeList" :key='index' @click="goodsjump(item.id)">
							<view class="item-top">
								<image :src="item.custom_pic" mode=""></image>
								<view class="top-title" v-if="false">
									<view class="left">
										<text>领优</text>
										<text>惠券</text>
									</view>
									<view class="right">
										<text>柔软 亲肤可裸睡</text>
									</view>
								</view>
								<view class="top-title-1" v-else>
									<view>
										<text>柔软 亲肤可裸睡</text>
									</view>
								</view>
							</view>
							<view class="item-bom">
								<text class="h3">{{item.name}}</text>
								<text class="price"><text>￥</text>{{item.cost_price}}</text>
								<view class="labelList">
									<text>满188顺丰包邮</text>
									<text>满188邮</text>
									<text>满18</text>
								</view>
							</view>
						</view>					
					</view>
				</view>
			</view>
		</view>
	</view>
</template>	

<script>
	export default {
		components: {
		},
		data() {
			return {
				indexData:{
					banner: {
						nav_bom_ad:[{pic:''}],
						nav_bom_bom_ad:[
							{pic:''},
							{pic:''},
							{pic:''}
						]
					}
				},
				likeList: []
			}
		},
		onLoad() {
		},
		created() {
			this.getIndex()
			this.guessLike()
		},
		methods: {
			// 首页APi
			async getIndex () {
				let data = await this.$http.indexService.getIndex()
				if (data.code == 0 && data.hasOwnProperty('code')) {
					
					let b = []
					for(let i=0;i<10;i++) {
						b.push( data.data.nav_list[i])
					}
					 data.data.nav_list = b
					this.indexData = data.data
				}
				console.log(this.indexData);
			},
			// 猜猜你喜欢
			async guessLike (page) {
				let data = await this.$http.indexService.guessLike({page:page})
				if (data.code == 0 && data.hasOwnProperty('code')) {
					this.likeList = data.data.data
				}
				console.log(this.likeList);
			},
			goodsjump (id = 0) {
				uni.navigateTo({
					url: `../goodsInfo/goodsInfo?id=${id}`
				})
			}
		},
	}
</script>

<style scoped lang="stylus">
	.status_bar
		height var(--status-bar-height)
		width 100%
	.title
		display flex
		justify-content space-between
		align-items center
		padding 0 25rpx
		box-sizing border-box
		.title-left
			text
				font-size 34rpx
				color #111111
		.title-right
			display flex
			text
				font-size 24rpx
				color #999999
				text
					margin-left 14rpx
	.header
		width 100%
		height 100rpx
		background #FFFFFF
		display flex
		justify-content center
		align-items center
		position fixed
		top var(--status-bar-height)
		left 0
		z-index 999
		.header-main
			width 702rpx
			height 100%
			display flex
			align-items center
			
			.header-left
				width 158rpx
				height 100%
				display flex
				align-items center
				.left-name
					margin-left 15rpx
				image
					width 56rpx
					height 56rpx
					background #4CD964
					border-radius 50%
				text
					display block
					text-align center
					&:nth-child(1)
						font-size: 20rpx
						color #333333
					&:nth-child(2)
						font-size: 18rpx
						color: #ff0000
			.header-centre
				width 400rpx
				height 60rpx
				background #F3F3F3
				border-radius 30rpx
				margin-left 23rpx
				display flex
				justify-content space-between
				align-items center
				.centre-left
					display flex
					align-items center
					margin-left 33rpx
					text
						display inline-block
						font-size 20rpx
						color #999999
						margin-left 13rpx
				.centre-right
					display flex
					align-items center
				
			.header-right
				width 119rpx
				height 60rpx
				display flex
				justify-content space-between
				margin-left 24rpx
				.right-item
					width 50rpx
					height 60rpx
					background #f0f0f0
					display flex
					align-items flex-start
					flex-direction column
					image
						width 50rpx
						height 30rpx
						background #000000
					text
						display block
						width 50rpx
						height 17rpx
						margin-top 7rpx
						font-size 18rpx
						color: #666666;
						transform:scale(0.8)
	.content
		background #F3F3F3
		display flex
		justify-content center
		.content-con
			width 702rpx
			// 轮播
			.swiper
				width 100%
				height 300rpx
				background #1188F8
				margin-top 100rpx
			// 导航列表
			.navList
				display flex
				justify-content space-around
				align-items center
				flex-wrap wrap
				padding-bottom 33rpx
				box-sizing border-box
				.nav-item
					width 20%
					text-align center
					margin-top 33rpx
					image
						width 80rpx
						height 80rpx
						border-radius 50%
						background #000000
					text
						display block
						font-size 22rpx
						color #333333
			//新品
			.newPar
				height 1031rpx
				background #2C405A
				.bannad
					height 193rpx
					image
						width 100%
						height 193rpx
						background #FF0000
				.full
					margin-top 54rpx
					height 327rpx
					background #FF0000
					display flex
					justify-content space-around
					align-items center
					.radius
						border-radius 35rpx
					.full-item
						height 227rpx
						width 164rpx
						background #4CD964
						.full-item-top
							height 165rpx
							border-radius 35rpx 35rpx 0rpx 0rpx
							background #000000
							image
								width 100%
								height 100%
								border-radius 35rpx 35rpx 0rpx 0rpx
								background #007AFF
						.full-item-bom
							height 62rpx
							border-radius 0 0 35rpx 35rpx
							text-align center
							background-image: linear-gradient(91deg, #82c04f 0%, #9bda5d 27%, #b4f36a 54%, #82bd4c 100%), 
								linear-gradient(#d967c7, #d967c7)
							background-blend-mode: normal, normal
							text
								font-size 24rpx
								color #FFFFFF
								border-radius 0 0 35rpx 35rpx
						.bom-2
							background-image: linear-gradient(91deg, #bf6ff9 0%, #d767ff 38%, #eb5ffd 67%, #f35bff 100%), 
								linear-gradient(#da8155, #da8155)
							background-blend-mode: normal, normal
					.full-item-2
						height 292rpx
						width 340rpx
						background #F0AD4E
						position relative
						background-image: linear-gradient(180deg, #fce4ed 0%, #f68a9c 72%, #f97698 100%), 
							linear-gradient(#ffffff, #ffffff);
						background-blend-mode: normal, normal;
						box-shadow: inset 0rpx -8rpx 9rpx 1rpx rgba(242, 124, 149, 0.4);
						border-image-source: linear-gradient(0deg, #f96285 0%, #ffcbcb 100%);
						border-image-slice: 1;
						.color
							height 65rpx
							border-radius 35rpx
							background-image: linear-gradient(180deg, #fce4ed 0%, #f68a9c 72%, #f97698 100%), 
								linear-gradient(#fff7e3, #fff7e3);
							background-blend-mode: normal, normal;
							box-shadow: inset 0rpx -8rpx 9rpx 1rpx rgba(242, 124, 149, 0.4);
							border-image-source: linear-gradient(0deg, #f96285 0%, #ffcbcb 100%);
							border-image-slice: 1;
							display flex
							justify-content center
							align-items center
							text
								font-size 30rpx
								color #FFFFFF
						.full-item-2-top
							width 214rpx
							position absolute
							top -30rpx
							left 62rpx 
						.full-item-2-bom
							width 340rpx
							position absolute
							bottom 10rpx
						.full-item-2-con
							display flex
							justify-content space-around
							align-items center
							margin-top 56rpx
							image
								width 107rpx
								height 129rpx
								background #000000
				.full-list
					margin-top 30rpx
					display flex
					justify-content space-between
					flex-wrap wrap
					.full-list-item
						width 346rpx
						height 188rpx
						background #007AFF
						margin-top 10rpx
						display flex
						justify-content space-between
						align-items center
						.item-left
							width 260rpx
							height 100%
							display flex
							justify-content end
							flex-direction column
							padding-left 15rpx
							box-sizing border-box
							text
								&:nth-child(1)
									font-size 26rpx
									color #d87f53;
									margin-top 19rpx
								&:nth-child(2)
									font-size 20rpx
									color #d87f53;
									margin-top 14rpx
								&:nth-child(3)
									margin-top 29rpx
									width 127rpx
									text-align center
									font-size 20rpx
									height 36rpx
									color #FFF7E3
									background-color: #da8155;
									border-radius 35rpx
						.item-right
							width 186rpx
							height 100%
							display flex
							justify-content center
							align-items center
							box-sizing border-box
							padding-right 15rpx
							box-sizing border-box
							image
								margin-top 61rpx
								width 156rpx
								height 91rpx
								background #4CD964
			// 众筹
			.raise
				padding-bottom 37rpx
				box-sizing border-box
				background #FFFFFF
				.title
					padding-top 31rpx
					box-sizing border-box
				.raise-con
					margin-top 38rpx
					padding 0 25rpx
					box-sizing border-box
					.con-top
						.card
							display flex
							.card-left
								width 387rpx
								text
									display inline-block
									&:nth-child(1)
										font-size 26rpx
										color #333333
									&:nth-child(2)
										font-size 20rpx
										padding 6rpx 14rpx
										box-sizing border-box
										background #fff0f0
										border-radius 2rpx
								.price
									margin-top 23rpx
									text
										font-size 18rpx
										color #FF0000
										margin 0
										text
											font-size 32rpx
											background #FFFFFF
								.heat
									display flex
									align-items center
									image
										width 31rpx
										height 41rpx
										background #000000
									.heat-text
										width 350rpx
										display flex
										align-items center
										margin-left 14rpx
										text
											display inline-block
											font-size 22rpx
											background #FFFFFF
											padding 0
											margin 0
											text
												color #FF0000
							.card-right
								image
									width 245rpx
									height 213rpx
									background #007AFF
					.con-bom
						display flex
						justify-content space-between
						margin-top 43rpx
						.bom-card
							.card-con
								padding-bottom 10rpx
								box-sizing border-box
								display flex
								justify-content space-between
								.card-con-left
									width 192rpx
									image
										width 31rpx
										height 41rpx
										background #000000
									text
										&:nth-child(1)
											font-size 26rpx
											color #111111
									.price
										margin-top 26rpx
										text
											font-size 18rpx
											color #FF0000
											text
												font-size 32rpx
									.heat
										margin-top 80rpx
										display flex
										align-items center
										.heat-text
											width 200rpx
											box-sizing border-box
											
								.card-con-right
									display flex
									align-items center
									image
										width 118rpx
										height 132rpx
										background #000000
							
					.underline
						width 100%
						height: 12rpx
						background-image: linear-gradient(91deg, #ffcfcf 0%, #fa7373 39%, #f96262 67%, #ff0000 100%), 
							linear-gradient(#ff2842, #ff2842)
						background-blend-mode: normal, normal
						border-radius 5rpx
			// 抢购
			.rush
				background #FFFFFF
				margin-top 19rpx
				padding-bottom 15rpx
				box-sizing border-box
				.title
					padding-top 31rpx
					box-sizing border-box
					padding-bottom 31rpx
					.title-left
						display flex
						align-items center
						.mite
							border 1rpx solid #FF0000
							display flex
							justify-content space-between
							align-items center
							margin-left 18rpx
							text
								padding 8rpx 10rpx
								box-sizing border-box
								&:nth-child(1)
									font-size 22rpx
									color #FFF0F0
									background #FF0000
								&:nth-child(2)
									font-size 18rpx
									color #FF0000
				.slide
					display flex
					align-items center
					padding 0 24rpx
					padding-bottom 15rpx
					box-sizing border-box
					.slide-item
						width 190rpx
						margin-right 10rpx
						image
							width 190rpx
							height 190rpx
							background #007AFF
							border-radius: 10rpx;
						.text
							text-align center
							text
								font-size 18rpx
								&:nth-child(1)
									color #FF0000
									text
										font-size 32rpx
								&:nth-child(2)
									color: #cbcbcb;
									text
										font-size 22rpx
										color #cbcbcb
									
					
			// 推荐
			.recommend
				padding 30rpx 0
				padding-left 22rpx
				box-sizing border-box
				background #FFFFFF
				margin-top 19rpx
				border-radius 10rpx
				.title
					padding-bottom 25rpx
					box-sizing border-box
				.slide
					display flex
					align-items center
					.slide-item
						width 186rpx
						height 231rpx
						background #fdf4f7;
						border-radius: 5rpx;
						margin-right 10rpx
						display flex
						justify-content center
						align-items center
						flex-direction column
						text-align center
						padding-bottom 11rpx
						box-sizing border-box
						border-radius 5rpx
						image
							width 119rpx
							height 165rpx
							background #000000
							margin-top 12rpx
						text
							width 186rpx
							margin-top 22rpx
							font-size 22rpx
							color: #111111;
							display: inline-block;
							white-space: nowrap; 
							overflow: hidden;
							text-overflow:ellipsis;
							
					
					
			// 特惠
			.odds
				padding 31rpx 0
				margin-top 29rpx
				box-sizing border-box			
				.odds-list
					margin-top 23rpx
					display flex
					justify-content space-between
					flex-wrap wrap
					.odds-item
						width 350rpx
						height 230rpx
						background #FFFFFF
						position relative
						border-radius 5rpx
						image
							width 100%
							height 100%
						text
							position absolute
							top 47rpx
							left 29rpx
							z-index 99
							font-size 26rpx
							color #222222
				
			// 店铺
			.store
				margin-top 11rpx
				.slide
					margin-top 29rpx
					display flex
					align-items center
					.slide-item
						width 182rpx
						height 300rpx
						background #FFFFFF
						border-radius 10rpx
						margin-right 10rpx
						.item-top
							width 100%
							height 192rpx
							display flex
							justify-content center
							align-items center
							border-radius 10rpx 10rpx 0 0
							image
								width 158rpx
								height 167rpx
								background #007AFF
						.item-bom
							background-image: linear-gradient(140deg, #b7cefd 27%, #7fbdfb 100%), 
							linear-gradient(#f7e3ca, #f7e3ca);
							background-blend-mode: normal, normal;
							text-align center
							border-radius 0 0 10rpx 10rpx
							display flex
							align-items center
							flex-direction column
							height 107rpx
							text
								display inline-block
								width 182rpx
								&:nth-child(1)
									font-size 28rpx
									color #FFFFFF
									margin-top 23rpx
								&:nth-child(2)
									font-size 22rpx
									color #FFFFFF
									margin-top 5rpx
			// 猜猜你喜欢
			.like
				margin-top 49rpx
				.title
					padding-bottom 18rpx
					box-sizing border-box
				.goodsList
					display flex
					justify-content space-around
					flex-wrap wrap
					width 100%
					.good-item-1,
					.good-item-2
						width 345rpx
						margin-top 14rpx
						padding-bottom 23rpx
						box-sizing border-box
						background #FFFFFF
						border-radius: 15rpx;
						.item-top
							position relative
							image
								width: 345rpx;
								height: 390rpx;
								background-color: #777777;
								border-radius: 15rpx 15rpx 0rpx 0rpx;
							.top-title
								display flex
								position absolute
								bottom 10rpx
								font-size 20rpx
								display flex
								align-items flex-end
								.left
									width 81rpx
									background #4CD964
									border-radius: 0rpx 27rpx 0rpx 0rpx;
									padding 5rpx 5rpx
									box-sizing border-box
									color #FFFFFF
									text
										display block
										font-size 20rpx
										text-align center
								.right
									width 262rpx
									height 42rpx
									background-color: #ded0c5;
									display flex
									justify-content flex-start
									align-items center
									text
										font-size: 20rpx;
										color: #7d3711;
										margin-left 13rpx
							.top-title-1
								display flex
								align-items center
								position absolute
								bottom 10rpx
								font-size 20rpx
								height 42rpx
								background-color: #ded0c5;
								width 345rpx
								text
									margin-left 11rpx
									color #FFFFFF
						.item-bom
							padding-left 12rpx
							box-sizing border-box
							text
								display block
							.h3
								width 321rpx
								font-size 28rpx
								color #3333333
								margin-top 13rpx
								text-overflow -o-ellipsis-lastline
								overflow hidden
								text-overflow ellipsis
								display -webkit-box;
								-webkit-line-clamp: 2; //行数需设置
								line-clamp: 2;
								-webkit-box-orient: vertical;
							.price
								margin-top 17rpx
								font-size 32rpx
								color #FF0000
								text
									display inline-block
									&:nth-child(1)
										font-size 18rpx
							.labelList
								margin-top 10rpx
								display flex
								flex-wrap wrap
								align-items center
								text
									margin-right 15rpx
									font-size 16rpx
									color #FF0000
									padding 8rpx 11rpx
									box-sizing border-box
									border: solid 1rpx #ff0000;
									border-radius: 16rpx;
									margin-top 10rpx
</style>
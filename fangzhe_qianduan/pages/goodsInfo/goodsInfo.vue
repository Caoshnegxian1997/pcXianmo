<template>
	<view class="goodsinfo">
		<view class="status_bar"></view>
		<!-- 头部一 -->
		<view class="header" v-if="false">
			<view class="header-left">
				<text>1</text>
			</view>
			<view class="header-con">
				<text class="border">1</text>
				<text>2</text>
				<text>3</text>
				<text>4</text>
			</view>
			<view class="header-right">
				<text>分</text>
			</view>	
		</view>
		<!-- 头部二 -->
		<view class="header-1" v-else>
			<view class="header-1-left">
				<text>1</text>
			</view>
			<view class="header-1-right">
				<text>分</text>
			</view>
		</view>
		<!-- 主体 -->
		<view class="content">
			<!-- 轮播 -->
			<view class="swiper">
				<view class="swiper-image">
					
				</view>
				<view class="swiper-count">
					<text>2/2</text>
				</view>
			</view>
			<view class="bannad" v-if="false">
				<view class="bannad-left">
					<image src="" mode=""></image>
				</view>
				<view class="bannad-right">
					<text>距离团购结束</text>
					<view class="mite">
						<text>05</text>
						<text>45</text>
						<text>13</text>
					</view>
				</view>
			</view>
			<!-- 信息 -->
			<view class="message">
				<view class="price">
					<view class="price-left">
						<text><text>￥</text>200</text>
						<text><text>￥</text>200</text>
						<text>特价</text>
					</view>
					<view class="price-right">
						<image src="" mode=""></image>
						<text></text>
					</view>
				</view>
				<view class="bom">
					<text>保温杯 便携双层商务车载泡茶保温水杯 </text>
					<text>商务车载泡茶保温水杯 随身泡</text>
				</view>
			</view>
		
			<!-- 拼团 -->
			<view class="group" v-if="false">
				<view class="title">
					<text>已有620人参与活动</text>
				</view>
				<view class="grouplist">
					<view class="item">
						<view class="item-left">
							<view class="item-image">
								<image src="" mode=""></image>
								<image src="" mode=""></image>
							</view>
							<view class="item-text">
								<text>还差<text>1人</text>成团</text>
								<text>剩余<text>00:30:38</text></text>
							</view>
						</view>
						<view class="item-right">
							<text>去参团</text>
						</view>
					</view>
					<view class="item">
						<view class="item-left">
							<view class="item-image">
								<image src="" mode=""></image>
								<image src="" mode=""></image>
							</view>
							<view class="item-text">
								<text>还差<text>1人</text>成团</text>
								<text>剩余<text>00:30:38</text></text>
							</view>
						</view>
						<view class="item-right">
							<text>去参团</text>
						</view>
					</view>
				</view>
				<view class="play">
					<text>玩法<text>开团/参团-邀请好友--满员发货（不满员退款）</text></text>
				</view>
			</view>
			<view class="spec">
				<view class="spec-speci public">
					<view class="conte">
						<view class="left">
								<text>当前</text>
						</view>
						<view class="right">
								<picker @change="bindPickerChange" :value="index" :range="array">
										<text>{{array[index]}}</text>
								</picker>
						</view> 
					</view>
					<view class="ri">
						<text> > </text>
					</view>
				</view>
				<view class="spec-site public">
					<view class="conte">
						<view class="left">
								<text>当前</text>
						</view>
						<view class="right">
								<picker @change="bindPickerChange" :value="index" :range="array">
										<text>{{array[index]}}</text>
								</picker>
						</view> 
					</view>
					<view class="ri">
						<text> > </text>
					</view>
				</view>
				<view class="spec-serve public">
					<view class="conte">
						<view class="left">
								<text>当前</text>
						</view>
						<view class="right">
								<picker @change="bindPickerChange" :value="index" :range="array">
										<text>{{array[index]}}</text>
								</picker>
						</view> 
					</view>
					<view class="ri">
						<text> > </text>
					</view>
				</view>
			</view>
			<view class="estimate"></view>
			
			<!-- 推荐 -->
			<view class="recom">
				<view class="recom-title">
					<text>为你推荐</text>
				</view>
				<view class="goodsList">
					<view class="goods-item">
						<image src="" mode=""></image>
						<text class="item-bt">景德镇陶瓷茶壶整套功夫茶具</text>
						<text class="item-jg"><text>￥</text>504</text>
						<view class="label">
							<text>满188顺丰包邮</text>
						</view>
					</view>
				</view>
			</view>
		
		
			<!-- 详情 -->
			<view class="info">
				<image src="" mode=""></image>
				<image src="" mode=""></image>
				<image src="" mode=""></image>
			</view>
			
			<!-- 功能 -->
			<view class="fun">
				<view class="fun-left">
					
				</view>
				<view class="fun-right">
					
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
				index: 0,
				 array: ['中国', '美国', '巴西', '日本'],
			}
		},
		methods: {
			bindPickerChange: function(e) {
			    console.log('picker发送选择改变，携带值为', e.target.value)
			    this.index = e.target.value
			}
		}
	}
</script>

<style scoped lang="stylus">
	.content
		width 100%
		background #F0F0F0
	.status_bar
		height: var(--status-bar-height)
		width: 100%
		background rgba(255,255,255,0.6)
	.header,
	.header-1
		position fixed
		top var(--status-bar-height)
		left 0
		width 100%
		height 100rpx
		background rgba(255,255,255,0.6)
		display flex
		justify-content space-between
		align-items center
		padding 0 23rpx
		box-sizing border-box
		z-index 99
		.header-con
			flex-grow 8
			display flex
			justify-content space-around
			text-align center
			align-items center
			text
				height 99rpx
				line-height 99rpx
				width 60rpx
			.border
				border-bottom 1rpx solid #FF0000
		.header-left
			flex-grow 2
		.header-right
			flex-grow 2
			text-align right
	.header-1
		background rgba(0,0,0,0)
		.header-1-left,
		.header-1-right
			height 60rpx
			width 60rpx
			border-radius 50%
			background rgba(0,0,0,0.5)
			display flex
			align-items center
			justify-content center
			text
				font-size 16rpx
				color #FFFFFF
				
				
	// 轮播
	.swiper
		background #FFF0F0
		height 705rpx
		position relative
		.swiper-image
			image
				width 100%
				height 705rpx
				background #FFF0F0
		.swiper-count
			position absolute
			bottom 23rpx
			right 25rpx
			padding 6rpx 15rpx
			background rgba(0,0,0,0.4)
			border-radius 20rpx
			display flex
			justify-content center
			align-items center
			text
				font-size 22rpx
				color #FFFFFF
	.bannad
		width 100%
		height 80rpx
		background #007AFF
		display flex
		justify-content space-between
		.bannad-left
			width 509rpx
			height 80rpx
			image
				width 100%
				height 80rpx
				background #4CD964
		.bannad-right
			width 241rpx
			height 80rpx
			display flex
			justify-content center
			flex-direction column
			text
				font-size 17rpx
				color #FF0000
				text-align center
			.mite
				display flex
				justify-content center
				color #FF0000
				align-items center
				text-align center
				text
					display flex
					color #FFFFFF
					padding 4rpx 4rpx
					background #FF0000
					margin-right 11rpx
	.message
		background #FFFFFF 
		padding 0 23rpx
		padding-top 34rpx
		box-sizing border-box
		.price
			display flex
			justify-content space-between
			align-items center
			.price-right
				image
					width 30rpx
					height 30rpx
					background #393915
			.price-left
				text
					&:nth-child(1)
						font-size 34rpx
						color #FF0000
						text
							font-size 24rpx
					&:nth-child(2)
						font-size 22rpx
						color: #cbcbcb;
						text
							font-size 18rpx
							color: #cbcbcb
							margin-left 13rpx
					&:nth-child(3)
						font-size 20rpx
						color: #ffffff
						margin-left 18rpx
						padding 5rpx 10rpx
						background #fe6f6f;
						border-radius: 2px;
		.bom
			padding-bottom 42rpx
			box-sizing border-box
			text
				display block
				&:nth-child(1)
					font-size 30rpx
					color #333333
					margin-top 64rpx
				&:nth-child(2)
					display block
					font-size 24rpx
					color #666666
					margin-top 17rpx
	.group
		padding 35rpx 20rpx
		margin-top 24rpx
		background #FFFFFF
		.title
			font-size 22rpx
			color: #111111
			border-left 1rpx solid #FF0000
			padding-left 8rpx
			box-sizing border-box
		.grouplist
			padding 0 8rpx
			box-sizing border-box
			width 100%
			padding-bottom 40rpx
			.item
				width 100%
				display flex
				justify-content space-between
				align-items center
				margin-top 46rpx
				.item-right
					text
						font-size 24rpx
						color #FFFFFF
						padding 14rpx 25rpx
						box-sizing border-box
						background-image: linear-gradient(-90deg, #ff0000 0%, #fb6565 100%), 
							linear-gradient(#ff0000, #ff0000)
						background-blend-mode: normal, normal
						border-radius: 25px
				.item-left
					display flex
					align-items center
					.item-image
						display flex
						image
							width 70rpx
							height 70rpx
							border-radius 50%
							background #000000
					.item-text
						margin-left 21rpx
						text
							&:nth-child(1)
								font-size 24rpx
								text
									color #FF0000
							&:nth-child(2)
								font-size 22rpx
								color #999999
								display block
		.play
			display flex
			padding-left 8rpx
			padding-bottom 35rpx
			padding-top 40rpx
			box-sizing border-box
			border-top 1rpx solid #F0F0F0
			text
				font-size 26rpx
				display inline-block
				text
					margin-left 31rpx
	.spec
		height 300rpx
		background #FFFFFF
		.public
			display flex
			align-items center
			justify-content space-between
			height 99rpx
			border-bottom 1rpx solid #999999
			.conte
				display flex
				align-items center
			.left
				padding-left 23rpx
				padding-right 23rpx
				box-sizing border-box
				text
					font-size 24rpx
					color #999999
			.right
				display flex
				align-items center
				width 613rpx
				height 100%
				text
					font-size 26rpx
	.estimate
		height 363rpx
		margin-top 19rpx
		background #FFFFFF
			margin-top 22rpx
			.review
				display flex
				align-items center
				justify-content space-between
				.review-item
					width: 520rpx;
					background-color: #f5f5f5;
					border-radius: 10px;
					padding 0 16rpx
					padding-top 17rpx
					padding-bottom 47rpx
					box-sizing border-box
					margin-right 10rpx
					.item-top
						display flex
						align-items center
						.left,.right
							display flex
							align-items center
						.left
							image
								width 50rpx
								height 50rpx
								border-radius 50%
								background #007AFF
							text
								margin-left 10rpx
						.right
							margin-left 28rpx
							image
								width 20rpx
								height 20rpx
								background #1188F8
					.item-bom
						display flex
						justify-content center
						align-items center
						margin-top 25rpx
						text
							width 461rpx
							font-size 22rpx
							// text-overflow -o-ellipsis-lastline
							// overflow hidden
							// text-overflow ellipsis
							// display -webkit-box;
							// -webkit-line-clamp: 2; //行数需设置
//推荐
	.recom
		width 100%
		height 871rpx
		background #FFFFFF
		padding 0 10rpx
		box-sizing border-box
		.recom-title
			display flex
			justify-content center
			align-items center
			padding 30rpx 0
			box-sizing border-box
			text
				width 100rpx
				border-bottom 5rpx solid #FF0000
				font-size: 24rpx;
		.goodsList
			display flex
			flex-wrap wrap
			justify-content space-between
			align-items center
			.goods-item
				width 220rpx
				height 353rpx
				display flex
				flex-direction column
				margin-top 27rpx
				image
					width 100%
					height 199rpx
					background #000000
				.item-bt
					display inline-block
					width 219rpx
					height 49rpx
					font-size 22rpx
					color #222222
					margin-top 13rpx
				.item-jg
					margin-top 21rpx
					font-size: 24rpx;
					color: #ff0000;
					text
						font-size 18rpx
				.label
					display flex
					justify-content end
					margin-top 11rpx
					text
						font-size 16rpx
						padding 8rpx 10rpx
						border-radius: 16rpx;
						border: solid 1rpx #ff0000;
						box-sizing border-box
						color #FF0000

// 详情
	.info
		display flex
		flex-direction column
		margin-top 19rpx
		image
			width 100%
			background #FF0000
	
		 
</style>

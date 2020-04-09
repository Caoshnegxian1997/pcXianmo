<template>
	<view class="ranking">
		<view class="status_bar"></view>
		<uni-nav-bar left-icon='back' background-color='#f4f4f4'>
			<view style="display:flex; align-items: center; background: #FFFFFF; height: 60rpx; border-radius: 30rpx; padding: 0 25rpx;">
				<text>1</text>
				<input type="text" value="" placeholder="测试" style="margin-left: 8rpx; height: 100%;"/>
				<text>1</text>
			</view>
		</uni-nav-bar>
		<view class="content">
			<view class="screen">
				<view class="screen-item">综合</view>
				<view class="screen-item">新品</view>
				<view class="screen-item">价格</view>
				<view class="screen-item">信用</view>
				<view>
					<icon type="success"></icon>
				</view>
			</view>
			<view class="card">
				<view class="card-item">
					<view class="card-item-left">
						<image src="" mode=""></image>
					</view>
					<view class="card-item-right">
						<text class="h3">可爱创意潮流客厅挂钟 免打孔</text>
						<text class="h4">邂逅时光 发现美</text>
						<view class="title">
							<text>小清新</text>
							<text>可爱</text>
						</view>
						<view class="price">
							<text>￥1 <text>￥4</text></text>
							<icon type="success"></icon>
						</view>
						<view class="spe">
							<text>特价</text>
						</view>
						<view class="comment">
							<text>评论</text>
							<text>98%好评</text>
						</view>
					</view>
				</view>
				<view class="card-item">
					<view class="card-item-left">
						<image src="" mode=""></image>
					</view>
					<view class="card-item-right">
						<text class="h3">可爱创意潮流客厅挂钟 免打孔</text>
						<text class="h4">邂逅时光 发现美</text>
						<view class="title">
							<text>小清新</text>
							<text>可爱</text>
						</view>
						<view class="price">
							<text>￥1 <text>￥4</text></text>
							<icon type="success"></icon>
						</view>
						<view class="spe">
							<text>特价</text>
						</view>
						<view class="comment">
							<text>评论</text>
							<text>98%好评</text>
						</view>
					</view>
				</view>
				<view class="card-item">
					<view class="card-item-left">
						<image src="" mode=""></image>
					</view>
					<view class="card-item-right">
						<text class="h3">可爱创意潮流客厅挂钟 免打孔</text>
						<text class="h4">邂逅时光 发现美</text>
						<view class="title">
							<text>小清新</text>
							<text>可爱</text>
						</view>
						<view class="price">
							<text>￥1 <text>￥4</text></text>
							<icon type="success"></icon>
						</view>
						<view class="spe">
							<text>特价</text>
						</view>
						<view class="comment">
							<text>评论</text>
							<text>98%好评</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	import uniNavBar from '@/components/navBar/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar,
			uniSwiperDot
		},
		data () {
			return {
				tabNav: ['综合','新品','价格','信用']
			}
		}
	}
</script>

<style scoped lang="stylus">
	.status_bar
		height: var(--status-bar-height);
		width: 100%
	.screen
		width 100%
		display flex
		justify-content space-around
		align-items center
		background #f4f4f4
		padding 17rpx 0
	.card
		.card-item
			display flex
			padding-top 34rpx
			box-sizing border-box
			.card-item-left
				padding-left 24rpx
				padding-right 8rpx
				box-sizing border-box
				image
					width 252rpx
					height 252rpx
					background #4CD964
			.card-item-right
				padding-left 13rpx
				box-sizing border-box
				.h3
					font-family: PingFang-SC-Medium;
					font-size: 28rpx;
					font-weight: normal;
					font-stretch: normal;
					color: #222222;
					margin-top 8rpx
				.h4
					display block
					font-family PingFang-SC-Medium
					font-size 26rpx
					font-weight normal
					font-stretch normal
					color: #999999
				.title
					text
						font-family: PingFang-SC-Medium;
						font-size: 20rpx;
						font-weight: normal;
						font-stretch: normal;
						color: #999999;
						margin-right 16rpx
						background-color: #f8f8f8;
						border-radius: 15rpx;
						padding 9rpx 6rpx
						box-sizing border-box
				.spe
					font-family: PingFang-SC-Medium;
					font-size: 20rpx;
					font-weight: normal;
					font-stretch: normal;
					line-height: 31.2rpx;
					letter-spacing: 0rpx;
					color: #ffffff;
					width: 60rpx;
					height: 30rpx;
					background-color: #fe6f6f;
					border-radius: 2rpx;
				.price
					display flex
					justify-content space-between
					text
						font-family: MicrosoftSansSerif;
						font-size: 32rpx;
						font-weight: normal;
						letter-spacing: 0rpx;
						color: #ff0000;
						text
							font-family: MicrosoftSansSerif;
							font-size: 22rpx;
							font-weight: normal;
							letter-spacing: 0rpx;
							color: #b8b8b8;
							margin-left 16rpx
				.comment
					text
						font-family: PingFang-SC-Medium;
						font-size: 22rpx;
						font-weight: normal;
						font-stretch: normal;
						letter-spacing: 0.6rpx;
						color: #999999
						&:nth-child(2)
							margin-left 13rpx

</style>

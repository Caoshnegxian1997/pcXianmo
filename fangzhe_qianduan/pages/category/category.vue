<template>
	<view class="test">
		<view class="status_bar"></view>
		<uni-nav-bar left-icon="back" title="热销排行"></uni-nav-bar>
		<view class="category">
			<view class="swiper">
				
			</view>
			<view class="card">
				<view class="card-item">
					<view class="card-item-left">
						<image src="" mode=""></image>
					</view>
					<view class="card-item-right">
						<text class="h3">标题</text>
						<view>
							<text><text>¥</text>16</text>
							<icon type="success"></icon>
						</view>
					</view>
				</view>
				<view class="card-item">
					<view class="card-item-left">
						<image src="" mode=""></image>
					</view>
					<view class="card-item-right">
						<text class="h3">标题</text>
						<view>
							<text><text>¥</text>16</text>
							<icon type="success"></icon>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/navBar/uni-nav-bar/uni-nav-bar.vue'
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	export default {
		components: {
			uniNavBar,
			uniSwiperDot
		},
		data() {
			return {}
		},
		created() {
		},
		methods: {
		},
	}
</script>

<style scoped lang="stylus">
	.status_bar
		height: var(--status-bar-height);
		width: 100%;
	.test
		background #f4f4f4
		.category
			width 705rpx
			margin 0 auto
			.swiper
				height 300rpx
				background #007AFF
			.card
				margin-top 22rpx
				.card-item
					padding-top 17rpx
					padding-bottom 25rpx
					box-sizing border-box
					display flex
					background #FFFFFF
					.card-item-left
						padding 0 13rpx
						box-sizing border-box
						image
							width 206rpx
							height 206rpx
							background #4CD964
					.card-item-right
						padding-left 14rpx
						box-sizing border-box
						text
							display block
						.h3 
							font-family: PingFang-SC-Medium
							font-size: 26rpx
							font-weight: normal
							font-stretch: normal
							color: #333333
						view
							width 400rpx
							display flex
							justify-content space-between
							margin-top 100rpx
							text
								font-family: MicrosoftSansSerif;
								font-size: 32rpx;
								font-weight: normal;
								letter-spacing: 0rpx;
								color: #ff0000;
								text
									display inline-block
									font-family: MicrosoftSansSerif;
									font-size: 18rpx;
									font-weight: normal;
									font-stretch: normal;
									color: #ff0000;
							
</style>

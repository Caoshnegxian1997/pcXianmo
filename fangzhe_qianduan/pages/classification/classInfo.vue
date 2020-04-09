<template>
	<view class="classinfo">
		<view class="status_bar"><!-- 这里是状态栏 --> </view>
		<uni-nav-bar left-icon="back" title="家具家装"></uni-nav-bar>
		<view class="content">
			<view class="con">
				<!-- 搜素 -->
				<view class="search">
					<view class="search-left">
						<icon type="success" size="30rpx"></icon>
						<text>四件套</text>
					</view>
					<view class="search-right">
						<icon type="success" size="30rpx"></icon>
					</view>
				</view>
				<!-- 轮播 -->
				<view class="swiper">
					
				</view>
				
				<!-- 分类 -->
				<view class="navList">
					<view class="item">
						<image src="" mode=""></image>
						<text>床上用品</text>
					</view>
					<view class="item">
						<image src="" mode=""></image>
						<text>床上用品</text>
					</view>
					<view class="item">
						<image src="" mode=""></image>
						<text>床上用品</text>
					</view>
					<view class="item">
						<image src="" mode=""></image>
						<text>床上用品</text>
					</view>
					<view class="item">
						<image src="" mode=""></image>
						<text>床上用品</text>
					</view>
					<view class="item">
						<image src="" mode=""></image>
						<text>床上用品</text>
					</view>
					<view class="item">
						<image src="" mode=""></image>
						<text>床上用品</text>
					</view>
					<view class="item">
						<image src="" mode=""></image>
						<text>床上用品</text>
					</view>
				</view>
				<!-- 商品 -->
				<view class="goodsList">
					<view class="good-item-1">
						<view class="item-top">
							<image src="" mode=""></image>
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
							<text class="h3">热销60w套+，全棉针织四件套</text>
							<text class="price"><text>￥</text>450</text>
							<view class="labelList">
								<text>满188顺丰包邮</text>
								<text>满188邮</text>
								<text>满18</text>
							</view>
						</view>
					</view>
					<view class="good-item-1">
						<view class="item-top">
							<image src="" mode=""></image>
							<view class="top-title" v-if="true">
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
							<text class="h3">热销60w套+，全棉针织四件套</text>
							<text class="price"><text>￥</text>450</text>
							<view class="labelList">
								<text>满188顺丰包邮</text>
							</view>
						</view>
					</view>
					<view class="good-item-1">
						<view class="item-top">
							<image src="" mode=""></image>
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
							<text class="h3">热销60w套+，全棉针织四件套</text>
							<text class="price"><text>￥</text>450</text>
							<view class="labelList">
								<text>满188顺丰包邮</text>
							</view>
						</view>
					</view>
					<view class="good-item-1">
						<view class="item-top">
							<image src="" mode=""></image>
							<view class="top-title" v-if="true">
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
							<text class="h3">热销60w套+，全棉针织四件套</text>
							<text class="price"><text>￥</text>450</text>
							<view class="labelList">
								<text>满188顺丰包邮</text>
							</view>
						</view>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus" scoped>
	.status_bar
		height var(--status-bar-height)
		width 100%
	.content
		display flex
		justify-content center
		background #FFFFFF
		.con
			width 701rpx
			background #f4f4f4
	.search
		display flex
		justify-content space-between
		align-items center
		height 60rpx
		padding-left 24rpx
		padding-right 24rpx
		box-sizing border-box
		border-radius 30rpx
		background #F96285
		.search-left
			display flex
			align-items center
			text
				font-size: 20rpx;
				color: #999999;
				margin-left 14rpx
		.search-right
			display flex
			align-items center
	.swiper
		height 331rpx
		width 100%
		margin-top 20rpx
		background #007AFF
	.navList
		display flex
		justify-content space-around
		flex-wrap wrap
		padding-bottom 25rpx
		margin-top 22rpx
		background #FFFFFF
		.item
			width 25%
			display flex
			justify-content center
			flex-wrap wrap
			margin-top 29rpx
			margin-bottom 14rpx
			image
				width 98rpx
				height 69rpx
				background #4CD964
			text
				display block
				font-size: 22rpx;
				color: #333333;
				margin-top 5rpx
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

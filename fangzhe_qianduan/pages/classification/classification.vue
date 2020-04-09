<template>
	<view class="classification">
		<view class="status_bar"><!-- 这里是状态栏 --> </view>
		<view class="header">
			<view class="header-con">
				<view class="left">
					<icon type="success" size="30rpx"></icon>
					<text>美妆护肤</text>
				</view>
				<view class="right">
					<icon type="success" size="30rpx"></icon>
				</view>
			</view>
		</view>
		<view class="nav">
			<view class="nav-left">
				<scroll-view scroll-y :style="'height:'+installList.height+'px'">
					<view 
					:class="installList.className == index ? 'special nav-left-public' : 'nav-left-item nav-left-public'" 
					v-for="(item,index) in ClassList.lv1" 
					:key='index' 
					@click="getClassificationLv2(index)">
						<text>{{item.name}}</text>
					</view>
				</scroll-view>
			</view>
			<view class="nav-right">
				<scroll-view scroll-y  @scroll="scroll" :style="'height:'+installList.height+'px'" scroll-with-animation>
					<view class="nav-right-item">
						<view class="swiper">
							<uni-swiper-dot :info="ClassList.lv2.photos" :current="installList.current" field="content" mode="default ">
							    <swiper class="swiper-box" @change="change">
							        <swiper-item v-for="(item ,index) in ClassList.lv2.photos" :key="index">
												<image :src="item.pic" mode="" class='swiper-item' @click="jumpInfo"></image>
							        </swiper-item>
							    </swiper>
							</uni-swiper-dot>
						</view>
						<view class="reclassify">
							<view v-for="(item,index) in ClassList.lv2.item" :key='index' class="title">
								<text class="h3">{{item.name}}</text>
								<view class="sh" >
									<view v-for="(ite,ind) in item.sub" :key='ind'>
										<image :src="ite.icon" :mode="ite.name"></image>
										<text>{{ite.name}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	import uniNavBar from '@/components/navBar/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniSwiperDot,
			uniNavBar
		},
		data() {
			return {
				parameter: {pid: '1'},
				ClassList:{
					lv1:[],
					lv2:[]
				},
				installList: {
					height: 0,
					scrollTop: 0,
					scrollHeight: 0,
					categoryActive: 0,
					current: 0,
					className: 0,
					jump:0
				}
			}
		},
		created() {
			this.getClassificationLv1()
		},
		onLoad:function (option) {
			console.log(option)
		},
		methods: {
			// 获取分类一
			async getClassificationLv1() {
				let data = await this.$http.classificationService.getClassificationLv1()
				// console.log(data);
				if (data.hasOwnProperty('code') && data.code === 0) {
					this.ClassList.lv1 = data.data.item
					this.getClassificationLv2()
				}
			},
			// 获取分类2
			async getClassificationLv2(id=0) {
				this.parameter.pid = this.ClassList.lv1[id].id
				this.installList.className = id
				let data = await this.$http.classificationService.getClassificationLv2(this.parameter)
				this.ClassList.lv2 = data.hasOwnProperty('code') && data.code === 0 ? data.data : []
				console.log(this.ClassList.lv2);
			},
			// 跳转
			jumpInfo () {
				uni.navigateTo({
					url: './classInfo'
				})
			},
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			change(e) {
					this.current = e.detail.current;
			}
		},
		mounted () {
			uni.getSystemInfo({
				success: res => {
					this.installList.height = res.screenHeight - 50 - 50 -50;
				}
			})
		},
	}
</script>

<style scoped lang="stylus">
	.status_bar
		height: var(--status-bar-height)
		width: 100%
	.header
		width 100%
		height 95rpx
		background #FFFFFF
		display flex
		justify-content center
		align-items center
		.header-con
			display flex
			justify-content space-between
			align-items center
			height 60rpx
			width 703rpx
			background-color: #f3f3f3;
			border-radius: 30rpx;
			.left
				display flex
				align-items center
				margin-left 34rpx
				text
					margin-left 14rpx
					font-size: 20rpx
					color #999999
			.right
				margin-right 33rpx
				display flex
				align-items center
	.nav
		background #f3f3f3
		display flex
		width 100%
		.nav-left
			width 168rpx
			background-color: #ffffff;
			.nav-left-public
				font-family: PingFang-SC-Medium;
				font-size: 24rpx;
				font-weight: normal;
				font-stretch: normal;
				color: #333333;
				text-align center
				margin-top 75rpx
			.nav-left-item
					text
						padding 14rpx
						box-sizing border-box
			.special
				text
					background-image: linear-gradient(-90deg,
						#ff0000 0%, 
						#fb6565 100%), 
					linear-gradient(
						#ff0000, 
						#ff0000);
					background-blend-mode: normal, 
						normal;
					border-radius: 25rpx;
					padding 14rpx
					box-sizing border-box
					color #ffffff
		.nav-right
			width 512rpx
			margin 0 auto
			.nav-right-item
				.swiper
					height 165rpx
					margin-top 19rpx
					image
						height 165rpx
				.reclassify
					.title
						display flex
						background #ffffff
						margin 20rpx 0
						flex-direction column
						padding-bottom 31rpx
						box-sizing border-box
						.h3
							display block
							text-align left
							font-family: PingFang-SC-Bold;
							font-size: 24rpx;
							font-weight: normal;
							font-stretch: normal;
							color: #222222
							padding 19rpx 18rpx
							box-sizing border-box
						.sh
							display flex
							flex-wrap wrap
							view
								width 160rpx
								padding 0 18rpx
								box-sizing border-box
								margin-bottom 31rpx
								image
									width 142rpx
									height 160rpx
									background #000000
								text
									display block
									text-align center
									font-family: PingFang-SC-Medium;
									font-size: 22rpx;
									font-weight: normal;
									font-stretch: normal;
									color: #666666;
									margin-top 29rpx

</style>

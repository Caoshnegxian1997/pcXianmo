<template>
	<view class="home">
		<shippingSite></shippingSite>
	</view>
</template>

<script>
	import shippingSite from '../../components/uitls/shippingSite.vue'
	export default {
		components:{
			shippingSite
		},
		data() {
			return {
				userInfo: {
					uid: '',
					token: ''
				}
			}
		},
		onLoad() {
			this.getUserInformation()
		},
		methods: {
			/**
			 * 获取用户信息
			 * */
			async getUserInformation() {
				this.userInfo.uid = uni.getStorageSync('uid')
				this.userInfo.token = uni.getStorageSync('token')
				var data = await this.$http.userService.getUserInformation(this.userInfo)
				console.log(data);
			}
		}
	}
</script>

<style scoped lang="stylus">
</style>

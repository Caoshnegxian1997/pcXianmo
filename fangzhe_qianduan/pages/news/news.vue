<template>
	<view class="news">
		<view class="status_bar"></view>
		<uni-nav-bar title="新闻"></uni-nav-bar>
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
				newsLists: [],
				newsTypeList: [],
				typeAdvertising: [],
				parameter: {
					page: 1,
					sort_id: 0,
				},
				activeTab: 0
			}
		},
		created () {
			this.getNewsType ()
		},
		methods: {
			async getNewsType () {
				let data = await this.$http.newsService.getNewsType()
				this.newsTypeList = data.hasOwnProperty('code') && data.code === 0 ?  data.data : []
				console.log(this.newsTypeList);
				this.getNewsList();
			},
			
			async getNewsList (index = 0,page = 0) {
				console.log(index);
				this.parameter.sort_id = this.newsTypeList[index].id
				this.parameter.page = page
				let data = await this.$http.newsService.getNewsList(this.parameter)
				this.newsLists = data.hasOwnProperty('code') 
												 && data.code === 0
												 ?  data.data.data : []
				// console.log(data);
			},
			
			async getTypeAdvertising () {
				let {page,...parameter} = this.parameter
				// console.log(parameter);
				let data = await this.$http.newsService.getTypeAdvertising(parameter)
				console.log(data);
			},
			jump (id) {
				uni.navigateTo({
					url:`./newsIofo?id=${id}`
				})
			}
		}
	}
</script>

<style scoped lang="stylus">
	.status_bar
		height var(--status-bar-height)
		width 100%
</style>

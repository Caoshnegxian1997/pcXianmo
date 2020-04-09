<template>
	<view class="newsInfo">
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				newsList: [],
				parameter: {
					id: null
				},
			}
		},
		onLoad (params) {
			this.parameter.id = params.id
		},
		created () {
			this.getNewsInfo()
		},
		methods: {
			async getNewsInfo () {
				let data = await this.$http.newsService.getNewsInfo(this.parameter)
				if (data != undefined && data.hasOwnProperty('code')) {
					console.log(data);
				}
			}
		}
	}
</script>

<style>
</style>

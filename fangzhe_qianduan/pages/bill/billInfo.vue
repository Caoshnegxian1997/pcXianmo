<template>
	<view class="billInfo">
		{{billDetails}}
	</view>
</template>

<script>
	export default {
		data () {
			return {
				billDetails: {
					
				},
				parameter: {
					id: null
				}
			}
		},
		onLoad(params) {
			this.parameter.id = params.id
		},
		created () {
			this.billInfo()
		},
		methods: {
			async billInfo () {
				console.log(this.parameter);
				let data = await this.$http.billService.billInfo(this.parameter)
				if (data.code == 0) {
					this.billDetails = data.data
				}
				console.log(data);
			}
		}
	}
</script>

<style>
</style>

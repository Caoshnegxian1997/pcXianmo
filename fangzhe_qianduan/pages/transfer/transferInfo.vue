<template>
	<view class="transferInfo">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				transferDetails: {

				},
				parameter: {
					id: 1
				}
			}
		},
		onLoad(params) {
			this.parameter.id = params.id
		},
		created() {
			this.transferInfo()
		},
		methods: {
			async transferInfo() {
				let data = await this.$http.transfeService.transferInfo(this.parameter)
			}
		}
	}
</script>

<style>
</style>

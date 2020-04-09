<template>
	<view class="withdrawalInfo">

	</view>
</template>

<script>
	export default {
		data() {
			return {
				withdrawalDetails: {

				},
				parameter: {
					id: null
				}
			}
		},
		onLoad(params) {
			this.parameter.id = params.id
		},
		created() {
			this.withdrawalInfo()
		},
		methods: {
			async withdrawalInfo() {
				let data = await this.$http.withdrawalService.withdrawalInfo(this.parameter)
				if (data.code == 0) {
					this.withdrawalDetails = data.data
				}
			}
		}
	}
</script>

<style>
</style>

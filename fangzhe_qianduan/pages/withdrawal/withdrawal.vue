<template>
	<view class="withdrawal">
		<ul>
			<li v-for='(withdrawal,index) in withdrawalList' :key='index' @click='jump(withdrawal.id)'>{{withdrawal}}</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				parameter: {
					page: 1
				},
				withdrawalList: {}
			}
		},
		created() {
			this.getWithdrawal()
		},
		methods: {
			async getWithdrawal() {
				let data = await this.$http.withdrawalService.getWithdrawal(this.parameter)
				if (data.code == 0) {
					this.withdrawalList = data.data.data
				}
			},
			jump(id) {
				uni.navigateTo({
					url: `./withdrawalInfo?id=${id}`
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
</style>

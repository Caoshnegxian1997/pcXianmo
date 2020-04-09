<template>
	<view class="transfer">
		<span @click="getTransfer">全部记录</span>
		<ul>
			<li v-for='(transfer,index) in transferList' :key='index' @click='jump(transfer.id)'>{{transfer}}</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				parameter: {
					page: 1
				},
				transferList: {}
			}
		},
		methods: {
			async getTransfer () {
				let data = await this.$http.transferService.getTransfer(this.parameter)
				if (data.code == 0) {
					this.transferList = data.data.data
				}
			},
			jump (id) {
				uni.navigateTo({
					url: `./transferInfo?id=${id}`
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
</style>

<template>
	<view class="bill">
		<ul>
			<li v-for='(bill,index) in billList' :key='index' @click="jump(bill.id)">{{bill}}</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				billList: {},
				billIfon: {
					page: 1
				}
			}
		},
		created() {
			this.getBill()
		},
		methods: {
			async getBill () {
				let data = await this.$http.billService.getBill(this.billIfon)
				if (data.code == 0) {
					this.billList = data.data.data
				}
			},
			jump (id) {
				uni.navigateTo({
					url: `./billInfo?id=${id}`
				})
			}
		}
	}
</script>

<style scoped lang="stylus">
</style>

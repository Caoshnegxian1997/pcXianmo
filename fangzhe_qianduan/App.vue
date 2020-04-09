<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="stylus">
	*
		margin 0
		padding 0
		border 0
	ul,li
		list-style none
	/*每个页面公共css */
	.uni-navbar--border
		border none !important
	
</style>

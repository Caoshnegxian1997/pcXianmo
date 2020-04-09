<template name='shippingSite'>
	<view class="sgippingSite">
		<ul>
			<li @click='allSite'>全部收货地址</li>
			<li>删除收获地址</li>
			<li>获取单条收货地址</li>
			<li @click='alterSite()'>添加收货地址</li>
		</ul>
		
		<ul>
			<li>
				<span>收件人</span>
				<input type="text" placeholder-class v-model="siteInfo.consignee" placeholder="收件人">
			</li>
			<li>
				<span>地区选择</span>
				<view class="test">
					<ul>
						<li v-for="(item,index) in provinceList" :key="index" @click='getCity(index)'>{{item.text}}</li>
					</ul>
					<ul>
						<li v-for='(item,index) in cityList' :key="index" @click="getArea(index)">{{item.text}}</li>
					</ul>
					<ul>
						<li v-for='(item,index) in areaList' :key="index" @click="setdistrict(index)">{{item.text}}</li>
					</ul>
				</view>
			</li>
			<li>
				<span>详细地址</span>
				<input type="text" placeholder-class v-model="siteInfo.address" placeholder="详细地址">
			</li>
			<li>
				<span>联系手机号</span>
				<input type="text" placeholder-class v-model="siteInfo.mobile" placeholder="联系手机号">
			</li>
			<li>
				<span>默认地址</span>
				<switch :checked="defaults" color="#fa436a" @change="switchChange" />
			</li>
		</ul>


		<ul>
			<li v-for="(site,index) in siteList" :key='index'>
				<text>{{site}}</text>
				<span @click="alterSite(index)">修改</span>
				<span @click='deleteSite(index)'>删除</span>
				<span @click='singleSite(index)'>单条收货地址</span>
			</li>
		</ul>
	</view>
</template>

<script>
	import address from '../../common/city.data_79.js'
	export default {
		name: 'shippingSite',
		props: {

		},
		data() {
			return {
				userInfo: {
					token: '',
					uid: ''
				},
				siteInfo: {
					id: '',
					consignee: '',
					province: '',
					city: '',
					district: '',
					address: '',
					mobile: '',
					is_default: 2
				},
				siteList: {},
				pickerText: '选择地址',
				provinceList: [], // 省
				cityList: [],// 市
				areaList: [], // 区
				index: 0,
				subscript: 0,
				defaults: false
			}
		},
		created() {
			this.userInfo.token = uni.getStorageSync('token')
			this.userInfo.uid = uni.getStorageSync('uid')
			this.getProvince()
			// console.log(this.userInfo);
		},
		methods: {
			/**
			 * 所有收货地址
			 * */
			async allSite() {
				let data = await this.$http.siteService.allSite(this.userInfo)
				if (data != undefined && data.hasOwnProperty('code')) {
					this.siteList = data.data
				}
			},
			/**
			 * 修改添加
			 * */
			async alterSite(index = -1) {
				console.log(index);
				// console.log(this.siteList[index].id);
				if (index != -1) {
					this.siteInfo.id = this.siteList[index].id
					let data = await this.$http.siteService.alterSite(this.siteInfo)
				} else {
					let {id,...site} = this.siteInfo
					let data = await this.$http.siteService.alterSite(site)
				}
			},
			/**
			 * 删除
			 * */
			async deleteSite(index) {
				let site = {id: this.siteList[index].id}
				let data = await this.$http.siteService.deleteSite(site)
				if (data.code == 0) {
					console.log(this.siteList);
				}
				console.log(data);
			},
			/**
			 * 一条收货地址
			 * */
			async singleSite(index) {
				let site = {id: this.siteList[index].id}
				let data = await this.$http.siteService.singleSite(site)
				console.log(data);
			},
			
			/**
			 * 获取 省
			 * */
			getProvince() {
				this.provinceList = address.a
				this.getCity()
			},
			/**
			 * 获取 市
			 * */
			getCity (index = 0) {
				this.index = index
				this.cityList = this.provinceList[index].children
				this.siteInfo.province = this.provinceList[index].value
				this.areaList = []
				this.getArea()
			},
			/**
			 * 获取 区
			 * */
			getArea (index = 0) {
				this.subscript = index
				this.siteInfo.city = this.provinceList[this.index].children[index].value
				this.areaList = this.provinceList[this.index].children[index].children
				this.setdistrict()
			},
			/**
			 * 区值
			 * */
			setdistrict (index = 0) {
				this.siteInfo.district = this.provinceList[this.index].children[this.subscript].children[index].value
				console.log(this.siteInfo);
			},
			/**
			 * 默认地址
			 * */
			switchChange (e) {
				this.defaults = e.detail.value
				console.log(this.defaults);
			}
		},
		components: {
			
		}
	}
</script>

<style lang="stylus" scoped>
	.test
		height 10rem
		display flex
		justify-content space-between
		ul
			overflow:auto
			width 33%
			li
				height 2rem
</style>

<template>
	<view>
		<view style="display: flex;">
			<view style="position: fixed;top: 0;left: 0;background-color: white;z-index: 99;">
				<van-sidebar active-key="activeKey" >
					<van-sidebar-item  v-for="(item,index) in 10" :key="index" :title="'分类'+index" @click="fun()" />

				</van-sidebar>
			</view>
			<view v-if="type==0" style="display: flex;justify-content: space-around;margin-left: 180rpx;">
				<scroll-view scroll-y="true" scroll-with-animation="true" show-scrollbar="true" enable-flex="true" style="display: flex;flex-flow: wrap row;">
					<view v-for="item in 40" :key="item">
						<view>
							<image style="width: 100rpx;height: 100rpx;" src="../../static/images/demo/cate_06.png" mode=""></image>
						</view>
						<view>分类0:商品</view>
					</view>
				</scroll-view>
			</view>
			<view  v-if="type==1"  style="display: flex;justify-content: space-around;margin-left: 180rpx;">
				<scroll-view scroll-y="true" scroll-with-animation="true" show-scrollbar="true" enable-flex="true" style="display: flex;flex-flow: wrap row;">
					<view v-for="item in 40" :key="item">
						<view>
							<image style="width: 100rpx;height: 100rpx;" src="../../static/images/demo/cate_06.png" mode=""></image>
						</view>
						<view>分类1:商品</view>
					</view>
				</scroll-view>
			</view>
			<view  v-if="type==2"  style="display: flex;justify-content: space-around;margin-left: 180rpx;">
				<scroll-view scroll-y="true" scroll-with-animation="true" show-scrollbar="true" enable-flex="true" style="display: flex;flex-flow: wrap row;">
					<view v-for="item in 40" :key="item">
						<view>
							<image style="width: 100rpx;height: 100rpx;" src="../../static/images/demo/cate_06.png" mode=""></image>
						</view>
						<view>分类2:商品</view>
					</view>
				</scroll-view>
			</view>
			<view  v-if="type==3"  style="display: flex;justify-content: space-around;margin-left: 180rpx;">
				<scroll-view scroll-y="true" scroll-with-animation="true" show-scrollbar="true" enable-flex="true" style="display: flex;flex-flow: wrap row;">
					<view v-for="item in 40" :key="item">
						<view>
							<image style="width: 100rpx;height: 100rpx;" src="../../static/images/demo/cate_06.png" mode=""></image>
						</view>
						<view>分类3:商品</view>
					</view>
				</scroll-view>
			</view>
			<view  v-if="type==4"  style="display: flex;justify-content: space-around;margin-left: 180rpx;">
				<scroll-view scroll-y="true" scroll-with-animation="true" show-scrollbar="true" enable-flex="true" style="display: flex;flex-flow: wrap row;">
					<view v-for="item in 40" :key="item">
						<view>
							<image style="width: 100rpx;height: 100rpx;" src="../../static/images/demo/cate_06.png" mode=""></image>
						</view>
						<view>分类4:商品</view>
					</view>
				</scroll-view>
			</view>
			<view  v-if="type==5"  style="display: flex;justify-content: space-around;margin-left: 180rpx;">
				<scroll-view scroll-y="true" scroll-with-animation="true" show-scrollbar="true" enable-flex="true" style="display: flex;flex-flow: wrap row;">
					<view v-for="item in 40" :key="item">
						<view>
							<image style="width: 100rpx;height: 100rpx;" src="../../static/images/demo/cate_06.png" mode=""></image>
						</view>
						<view>分类5:商品</view>
					</view>
				</scroll-view>
			</view>
			<view  v-if="type==6"  style="display: flex;justify-content: space-around;margin-left: 180rpx;">
				<scroll-view scroll-y="true" scroll-with-animation="true" show-scrollbar="true" enable-flex="true" style="display: flex;flex-flow: wrap row;">
					<view v-for="item in 40" :key="item">
						<view>
							<image style="width: 100rpx;height: 100rpx;" src="../../static/images/demo/cate_06.png" mode=""></image>
						</view>
						<view>分类6:商品</view>
					</view>
				</scroll-view>
			</view>
			<view  v-if="type==7"  style="display: flex;justify-content: space-around;margin-left: 180rpx;">
				<scroll-view scroll-y="true" scroll-with-animation="true" show-scrollbar="true" enable-flex="true" style="display: flex;flex-flow: wrap row;">
					<view v-for="item in 40" :key="item">
						<view>
							<image style="width: 100rpx;height: 100rpx;" src="../../static/images/demo/cate_06.png" mode=""></image>
						</view>
						<view>分类7:商品</view>
					</view>
				</scroll-view>
			</view>
			<view  v-if="type==8"  style="display: flex;justify-content: space-around;margin-left: 180rpx;">
				<scroll-view scroll-y="true" scroll-with-animation="true" show-scrollbar="true" enable-flex="true" style="display: flex;flex-flow: wrap row;">
					<view v-for="item in 40" :key="item">
						<view>
							<image style="width: 100rpx;height: 100rpx;" src="../../static/images/demo/cate_06.png" mode=""></image>
						</view>
						<view>分类8:商品</view>
					</view>
				</scroll-view>
			</view>
			<view  v-if="type==9"  style="display: flex;justify-content: space-around;margin-left: 180rpx;">
				<scroll-view scroll-y="true" scroll-with-animation="true" show-scrollbar="true" enable-flex="true" style="display: flex;flex-flow: wrap row;">
					<view v-for="item in 40" :key="item">
						<view>
							<image style="width: 100rpx;height: 100rpx;" src="../../static/images/demo/cate_06.png" mode=""></image>
						</view>
						<view>分类9:商品</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	var _this
	import Notify from '../../wxcomponents/vant/notify/notify';
	export default {
		data() {
			return {
				type:0
			}
		},
		methods: {
			fun(event){
				console.log(event.detail)
				_this.type=event.detail
			}
		},
		onLoad() {
			_this=this
		}
	}
</script>

<style>

</style>

<template>
	<view class="body">
		<scroll-view scroll-x="true" scroll-with-animation="true" show-scrollbar="true" enable-flex="true" class="top">
			<view  v-for="(item,index) in toparray" :key="index">
				<view @click="fun(index)">{{item.name}}</view>
			</view>
		
		</scroll-view>

		<view v-if="type==0" style="margin-top: 100rpx;">
			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
				<swiper-item>
					<image src="../../static/images/demo/demo4.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../static/images/demo/demo8.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
			</swiper>
			<view class="menu" style="margin-top: 20px;">
				<view class="menu_one">
					<view>
						<image src="../../static/indexnav/1.png"></image>
						<text>新品分类</text>
					</view>
					<view>
						<image src="../../static/indexnav/2.gif"></image>
						<text>小米众筹</text>
					</view>
					<view>
						<image src="../../static/indexnav/3.gif"></image>
						<text>以旧换新</text>
					</view>
					<view>
						<image src="../../static/indexnav/4.gif"></image>
						<text>1分拼团</text>
					</view>
					<view>
						<image src="../../static/indexnav/5.gif"></image>
						<text>超值特卖</text>
					</view>
				</view>
				<view class="menu_one">
					<view>
						<image src="../../static/indexnav/6.gif"></image>
						<text>小米秒杀</text>
					</view>
					<view>
						<image src="../../static/indexnav/7.gif"></image>
						<text>真心想要</text>
					</view>
					<view>
						<image src="../../static/indexnav/8.gif"></image>
						<text>电视热卖</text>
					</view>
					<view>
						<image src="../../static/indexnav/9.gif"></image>
						<text>家电热卖</text>
					</view>
					<view>
						<image src="../../static/indexnav/5.gif"></image>
						<text>米粉卡</text>
					</view>
				</view>
			
			</view>
			<view style="display: flex;justify-content: space-between">
				<view>
					<image style="width: 374rpx;height: 450rpx;" src="../../static/images/demo/demo1.jpg"></image>
				</view>
				<view style=" display: flex;flex-flow: column nowrap;">
					<view>
						<image style="width: 374rpx;height:225rpx ;" src="../../static/images/demo/demo2.jpg"></image>
					</view>
					<view>
						<image style="width: 374rpx;height:225rpx;" src="../../static/images/demo/demo2.jpg"></image>
					</view>
				</view>
			</view>
			<view>
				<view style="padding: 15px 10px;">
					<text style="font-weight: bold;font-size: 14px;">每日精选</text>
				</view>
				<view>
					<image src="../../static/images/demo/demo4.jpg" style="width: 750rpx;height: 225rpx;" mode=""></image>
				</view>
			</view>
			<view style="display: flex;flex-flow: wrap row;">
				<view style="display: flex;flex-flow: column nowrap;" v-for="item in 10" :key="item">
					<view>
						<image style="width: 374rpx;height: 374rpx;" src="../../static/images/demo/cate_07.png" mode=""></image>
					</view>
					<view><text>米家空调</text></view>
					<view><text>1.5匹支流变频</text></view>
					<view><text>$2199</text></view>
				</view>
			
			</view>
			<view>
				<!-- 加载 -->
				
			</view>
			
		</view>
		<view v-if="type==1" style="margin-top: 100rpx;">
			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
				<swiper-item>
					<image src="../../static/images/demo/demo4.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../static/images/demo/demo8.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
			</swiper>
			<view>
				<view class="menu_one">
					<view>
						<image src="../../static/indexnav/1.png"></image>
						<text>新品分类</text>
					</view>
					<view>
						<image src="../../static/indexnav/2.gif"></image>
						<text>小米众筹</text>
					</view>
					<view>
						<image src="../../static/indexnav/3.gif"></image>
						<text>以旧换新</text>
					</view>
					<view>
						<image src="../../static/indexnav/4.gif"></image>
						<text>1分拼团</text>
					</view>
					<view>
						<image src="../../static/indexnav/5.gif"></image>
						<text>超值特卖</text>
					</view>
				</view>
				<view style="display: flex;flex-flow: wrap row;">
					<view style="display: flex;flex-flow: column nowrap;" v-for="item in 10" :key="item">
						<view>
							<image style="width: 374rpx;height: 374rpx;" src="../../static/images/demo/cate_05.png" mode=""></image>
						</view>
						<view><text>米家空调</text></view>
						<view><text>1.5匹支流变频</text></view>
						<view><text>$2199</text></view>
					</view>
				
				</view>
			</view>
		</view>
		<view v-if="type==2" style="margin-top: 100rpx;">
			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
				<swiper-item>
					<image src="../../static/images/demo/demo4.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../static/images/demo/demo8.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
			</swiper>
			<view>
				<view class="menu_one">
					<view>
						<image src="../../static/indexnav/1.png"></image>
						<text>新品分类</text>
					</view>
					<view>
						<image src="../../static/indexnav/2.gif"></image>
						<text>小米众筹</text>
					</view>
					<view>
						<image src="../../static/indexnav/3.gif"></image>
						<text>以旧换新</text>
					</view>
					<view>
						<image src="../../static/indexnav/4.gif"></image>
						<text>1分拼团</text>
					</view>
					<view>
						<image src="../../static/indexnav/5.gif"></image>
						<text>超值特卖</text>
					</view>
				</view>
				<view style="display: flex;flex-flow: wrap row;">
					<view style="display: flex;flex-flow: column nowrap;" v-for="item in 10" :key="item">
						<view>
							<image style="width: 374rpx;height: 374rpx;" src="../../static/images/demo/cate_03.png" mode=""></image>
						</view>
						<view><text>米家空调</text></view>
						<view><text>1.5匹支流变频</text></view>
						<view><text>$2199</text></view>
					</view>
				
				</view>
			</view>
		</view>
		<view v-if="type==3" style="margin-top: 100rpx;">
			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
				<swiper-item>
					<image src="../../static/images/demo/demo4.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../static/images/demo/demo8.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
			</swiper>
			<view>
				<view class="menu_one">
					<view>
						<image src="../../static/indexnav/1.png"></image>
						<text>新品分类</text>
					</view>
					<view>
						<image src="../../static/indexnav/2.gif"></image>
						<text>小米众筹</text>
					</view>
					<view>
						<image src="../../static/indexnav/3.gif"></image>
						<text>以旧换新</text>
					</view>
					<view>
						<image src="../../static/indexnav/4.gif"></image>
						<text>1分拼团</text>
					</view>
					<view>
						<image src="../../static/indexnav/5.gif"></image>
						<text>超值特卖</text>
					</view>
				</view>
				<view style="display: flex;flex-flow: wrap row;">
					<view style="display: flex;flex-flow: column nowrap;" v-for="item in 10" :key="item">
						<view>
							<image style="width: 374rpx;height: 374rpx;" src="../../static/images/demo/cate_04.png" mode=""></image>
						</view>
						<view><text>米家空调</text></view>
						<view><text>1.5匹支流变频</text></view>
						<view><text>$2199</text></view>
					</view>
				
				</view>
			</view>
		</view>
		<view v-if="type==4" style="margin-top: 100rpx;">
			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
				<swiper-item>
					<image src="../../static/images/demo/demo4.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../static/images/demo/demo8.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
			</swiper>
			<view>
				<view class="menu_one">
					<view>
						<image src="../../static/indexnav/1.png"></image>
						<text>新品分类</text>
					</view>
					<view>
						<image src="../../static/indexnav/2.gif"></image>
						<text>小米众筹</text>
					</view>
					<view>
						<image src="../../static/indexnav/3.gif"></image>
						<text>以旧换新</text>
					</view>
					<view>
						<image src="../../static/indexnav/4.gif"></image>
						<text>1分拼团</text>
					</view>
					<view>
						<image src="../../static/indexnav/5.gif"></image>
						<text>超值特卖</text>
					</view>
				</view>
				<view style="display: flex;flex-flow: wrap row;">
					<view style="display: flex;flex-flow: column nowrap;" v-for="item in 10" :key="item">
						<view>
							<image style="width: 374rpx;height: 374rpx;" src="../../static/images/demo/cate_01.png" mode=""></image>
						</view>
						<view><text>米家空调</text></view>
						<view><text>1.5匹支流变频</text></view>
						<view><text>$2199</text></view>
					</view>
				
				</view>
			</view>
		</view>
		<view v-if="type==5" style="margin-top: 100rpx;">
			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
				<swiper-item>
					<image src="../../static/images/demo/demo4.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../static/images/demo/demo8.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
			</swiper>
			<view>
				<view class="menu_one">
					<view>
						<image src="../../static/indexnav/1.png"></image>
						<text>新品分类</text>
					</view>
					<view>
						<image src="../../static/indexnav/2.gif"></image>
						<text>小米众筹</text>
					</view>
					<view>
						<image src="../../static/indexnav/3.gif"></image>
						<text>以旧换新</text>
					</view>
					<view>
						<image src="../../static/indexnav/4.gif"></image>
						<text>1分拼团</text>
					</view>
					<view>
						<image src="../../static/indexnav/5.gif"></image>
						<text>超值特卖</text>
					</view>
				</view>
				<view style="display: flex;flex-flow: wrap row;">
					<view style="display: flex;flex-flow: column nowrap;" v-for="item in 10" :key="item">
						<view>
							<image style="width: 374rpx;height: 374rpx;" src="../../static/images/demo/demo9.jpg" mode=""></image>
						</view>
						<view><text>米家空调</text></view>
						<view><text>1.5匹支流变频</text></view>
						<view><text>$2199</text></view>
					</view>
				
				</view>
			</view>
		</view>
		<view v-if="type==6" style="margin-top: 100rpx;">
			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
				<swiper-item>
					<image src="../../static/images/demo/demo4.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../static/images/demo/demo8.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
			</swiper>
			<view>
				<view class="menu_one">
					<view>
						<image src="../../static/indexnav/1.png"></image>
						<text>新品分类</text>
					</view>
					<view>
						<image src="../../static/indexnav/2.gif"></image>
						<text>小米众筹</text>
					</view>
					<view>
						<image src="../../static/indexnav/3.gif"></image>
						<text>以旧换新</text>
					</view>
					<view>
						<image src="../../static/indexnav/4.gif"></image>
						<text>1分拼团</text>
					</view>
					<view>
						<image src="../../static/indexnav/5.gif"></image>
						<text>超值特卖</text>
					</view>
				</view>
				<view style="display: flex;flex-flow: wrap row;">
					<view style="display: flex;flex-flow: column nowrap;" v-for="item in 10" :key="item">
						<view>
							<image style="width: 374rpx;height: 374rpx;" src="../../static/images/demo/demo9.jpg" mode=""></image>
						</view>
						<view><text>米家空调</text></view>
						<view><text>1.5匹支流变频</text></view>
						<view><text>$2199</text></view>
					</view>
				
				</view>
			</view>
		</view>
		<view v-if="type==7" style="margin-top: 100rpx;">
			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
				<swiper-item>
					<image src="../../static/images/demo/demo4.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../static/images/demo/demo8.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
			</swiper>
			<view>
				<view class="menu_one">
					<view>
						<image src="../../static/indexnav/1.png"></image>
						<text>新品分类</text>
					</view>
					<view>
						<image src="../../static/indexnav/2.gif"></image>
						<text>小米众筹</text>
					</view>
					<view>
						<image src="../../static/indexnav/3.gif"></image>
						<text>以旧换新</text>
					</view>
					<view>
						<image src="../../static/indexnav/4.gif"></image>
						<text>1分拼团</text>
					</view>
					<view>
						<image src="../../static/indexnav/5.gif"></image>
						<text>超值特卖</text>
					</view>
				</view>
				<view style="display: flex;flex-flow: wrap row;">
					<view style="display: flex;flex-flow: column nowrap;" v-for="item in 10" :key="item">
						<view>
							<image style="width: 374rpx;height: 374rpx;" src="../../static/images/demo/demo9.jpg" mode=""></image>
						</view>
						<view><text>米家空调</text></view>
						<view><text>1.5匹支流变频</text></view>
						<view><text>$2199</text></view>
					</view>
				
				</view>
			</view>
		</view>
		<view v-if="type==8" style="margin-top: 100rpx;">
			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
				<swiper-item>
					<image src="../../static/images/demo/demo4.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../static/images/demo/demo8.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
			</swiper>
			<view>
				<view class="menu_one">
					<view>
						<image src="../../static/indexnav/1.png"></image>
						<text>新品分类</text>
					</view>
					<view>
						<image src="../../static/indexnav/2.gif"></image>
						<text>小米众筹</text>
					</view>
					<view>
						<image src="../../static/indexnav/3.gif"></image>
						<text>以旧换新</text>
					</view>
					<view>
						<image src="../../static/indexnav/4.gif"></image>
						<text>1分拼团</text>
					</view>
					<view>
						<image src="../../static/indexnav/5.gif"></image>
						<text>超值特卖</text>
					</view>
				</view>
				<view style="display: flex;flex-flow: wrap row;">
					<view style="display: flex;flex-flow: column nowrap;" v-for="item in 10" :key="item">
						<view>
							<image style="width: 374rpx;height: 374rpx;" src="../../static/images/demo/demo9.jpg" mode=""></image>
						</view>
						<view><text>米家空调</text></view>
						<view><text>1.5匹支流变频</text></view>
						<view><text>$2199</text></view>
					</view>
				
				</view>
			</view>
		</view>
		<view v-if="type==9" style="margin-top: 100rpx;">
			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
				<swiper-item>
					<image src="../../static/images/demo/demo4.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../static/images/demo/demo8.jpg" style="width: 750rpx;height: 300rpx;"></image>
				</swiper-item>
			</swiper>
			<view>
				<view class="menu_one">
					<view>
						<image src="../../static/indexnav/1.png"></image>
						<text>新品分类</text>
					</view>
					<view>
						<image src="../../static/indexnav/2.gif"></image>
						<text>小米众筹</text>
					</view>
					<view>
						<image src="../../static/indexnav/3.gif"></image>
						<text>以旧换新</text>
					</view>
					<view>
						<image src="../../static/indexnav/4.gif"></image>
						<text>1分拼团</text>
					</view>
					<view>
						<image src="../../static/indexnav/5.gif"></image>
						<text>超值特卖</text>
					</view>
				</view>
				<view style="display: flex;flex-flow: wrap row;">
					<view style="display: flex;flex-flow: column nowrap;" v-for="item in 10" :key="item">
						<view>
							<image style="width: 374rpx;height: 374rpx;" src="../../static/images/demo/demo9.jpg" mode=""></image>
						</view>
						<view><text>米家空调</text></view>
						<view><text>1.5匹支流变频</text></view>
						<view><text>$2199</text></view>
					</view>
				
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	var _this;
	export default {
		data() {
			return {
				type:0,
				toparray:[
					{"name":"推荐"},
					{"name":"体育"},
					{"name":"热点"},
					{"name":"财经"},
					{"name":"娱乐"},
					{"name":"军事"},
					{"name":"历史"},
					{"name":"本地"}
				]
			}
		},
		onLoad() {
			_this = this
		},
		methods: {
			fun(index) {
				_this.type=index
			}
		}
	}
</script>

<style>
	.top {
		display: flex;
		height: 100rpx;
		position: fixed;
		top: 0;
		background-color: white;
		z-index: 99;
	}

	.top view {
		padding: 5px;
		margin: 0 20rpx;
		width: 80rpx;
	}

	.menu_one image {
		width: 50rpx;
		height: 50rpx;
	}

	.menu_one {
		display: flex;
		justify-content: space-around;
		margin: 20px 5px;
	}

	.menu_one>view {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		font-size: 12px;
	}
</style>

<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view class="search search">
        <view class="input input">
          <text
            class="icon-search sk-transparent sk-text-14-2857-820 sk-text sk-pseudo sk-pseudo-circle"
            >女靴</text
          >
        </view>
      </view>
      <view class="categories categories">
        <scroll-view :scroll-y="true" class="primary primary">
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-51 sk-text">居家</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-958 sk-text">美食</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-767 sk-text">服饰</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-221 sk-text">母婴</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-432 sk-text">个护</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-390 sk-text">严选</text>
          </view>
          <view class="item active sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-797 sk-text">数码</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-832 sk-text">运动</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-253 sk-text">杂项</text>
          </view>
        </scroll-view>
        <scroll-view :scroll-y="true" class="secondary secondary">
          <view is="components/XtxSwiper" class="banner banner">
            <view class="carousel XtxSwiper--carousel">
              <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                <swiper-item
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(0%, 0px) translateZ(0px);
                  "
                >
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
                <swiper-item
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(100%, 0px) translateZ(0px);
                  "
                >
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator XtxSwiper--indicator">
                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-27-4194-50 sk-text">影音娱乐</text>
              <navigator
                class="more sk-transparent sk-text-30-6452-868 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
                >全部</navigator
              >
            </view>
            <view class="section section">
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-121 sk-text"
                  >airline真无线耳机，空气感佩戴，全新升级</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-999 sk-text">189.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-115 sk-text"
                  >善谋者得天下，三国杀桌游</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-828 sk-text">158.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-952 sk-text"
                  >平台云音乐氧气立体声蓝牙头戴式触控耳机</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-223 sk-text">459.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-232 sk-text"
                  >发现隐藏角落的摄像头，多功能红外探测仪</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-134 sk-text">99.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-896 sk-text"
                  >平台云音乐真无线蓝牙耳机Lite版</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-752 sk-text">179.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-464 sk-text"
                  >久坐办公易肥胖，电动站立升降桌，带APP</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-229 sk-text">999.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-882 sk-text"
                  >平台云音乐氧气有线入耳式耳机</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-933 sk-text">99.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-951 sk-text"
                  >平台智造零感蓝牙耳机</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-285 sk-text">59.00</text>
                </view>
              </navigator>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-27-4194-773 sk-text">3C数码</text>
              <navigator
                class="more sk-transparent sk-text-30-6452-461 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
                >全部</navigator
              >
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>
<style>
page {
  height: 100%;
  overflow: hidden;
}
.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.search {
  padding: 0 30rpx 20rpx;
  background-color: #fff;
}
.search .input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64rpx;
  padding-left: 26rpx;
  color: #8b8b8b;
  font-size: 28rpx;
  border-radius: 32rpx;
  background-color: #f3f4f4;
}
.icon-search::before {
  margin-right: 10rpx;
}

/* 分类 */
.categories {
  flex: 1;
  min-height: 400rpx;
  display: flex;
}

/* 一级分类 */
.primary {
  overflow: hidden;
  width: 180rpx;
  flex: none;
  background-color: #f6f6f6;
}
.primary .item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96rpx;
  font-size: 26rpx;
  color: #595c63;
  position: relative;
}
.primary .item::after {
  content: '';
  position: absolute;
  left: 42rpx;
  bottom: 0;
  width: 96rpx;
  border-top: 1rpx solid #e3e4e7;
}
.primary .active {
  background-color: #fff;
}
.primary .active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 8rpx;
  height: 100%;
  background-color: #27ba9b;
}
.primary .item:last-child::after,
.primary .active::after {
  display: none;
}

/* 二级分类 */
.secondary {
  background-color: #fff;
}
.secondary .carousel {
  height: 200rpx;
  margin: 0 30rpx 20rpx;
  border-radius: 4rpx;
  overflow: hidden;
}
.secondary .panel {
  margin: 0 30rpx 0rpx;
}
.secondary .title {
  height: 60rpx;
  line-height: 60rpx;
  color: #333;
  font-size: 28rpx;
  border-bottom: 1rpx solid #f7f7f8;
}
.secondary .title .more {
  float: right;
  padding-left: 20rpx;
  font-size: 24rpx;
  color: #999;
}
.secondary .more::after {
  font-family: 'erabbit' !important;
  content: '\e6c2';
}
.secondary .section {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20rpx 0;
}
.secondary .section .goods {
  width: 150rpx;
  margin: 0rpx 30rpx 20rpx 0;
}
.secondary .section .goods:nth-child(3n) {
  margin-right: 0;
}
.secondary .section .goods image {
  width: 150rpx;
  height: 150rpx;
}
.secondary .section .goods .name {
  padding: 5rpx;
  font-size: 22rpx;
  color: #333;
}
.secondary .section .goods .price {
  padding: 5rpx;
  font-size: 18rpx;
  color: #cf4444;
}
.secondary .section .goods .number {
  font-size: 24rpx;
  margin-left: 2rpx;
}
</style>

<script setup lang="ts">
//自动导入
// import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { XtxGuessInstance } from '@/types/component'
//import XtxGuess from '@/components/XtxGuess.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables'
//获取轮播数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

//获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

//获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
//是否加载中标记
const isLoading = ref(false)

//页面加载
onLoad(async () => {
  isLoading.value = true
  // await getHomeBannerData(), await getHomeCategoryData(), await getHomeHotData()
  //同时请求
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
// //获取猜你喜欢组件
// const guessRef = ref<XtxGuessInstance>()
// //滚动触底-自动触发
// const onScrolltolower = () => {
//   guessRef.value?.getMore()
//   //console.log(1)
// }==>组合式函数封装
// 猜你喜欢组合式函数
const { guessRef, onScrolltolower } = useGuessList() // [!code ++]
const isTriggered = ref(false)

//自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  //开始动画标记
  isTriggered.value = true
  // await getHomeBannerData(), await getHomeCategoryData(), await getHomeHotData()
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData() // 加载数据
  //同时请求
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  guessRef.value?.getMore()
  //关闭动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    scroll-y
    class="scroll-view"
  >
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%; // 让 page 占满整个屏幕高度（UniApp 中 page 是根容器）
  display: flex; // 开启 Flex 布局
  flex-direction: column; // 子元素垂直排列（CustomNavbar、scroll-view 从上到下）
}
.scroll-view {
  flex: 1; // 关键：占用 page 剩余的全部高度（自动减去 CustomNavbar 等元素的高度）
}
</style>

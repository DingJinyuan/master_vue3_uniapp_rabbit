import { http } from '@/utils/http'

/**
 * 获取微信支付参数
 * @param data orderId 订单id
 */
export const getPayWxPayMiniPayAPI = (data: { orderId: string }) => {
  //原生微信小程序类型
  return http<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data,
  })
}

/**
 * 模拟支付-内测版
 * @param data orderId 订单id
 */
export const getPayMockAPI = (data: { orderId: string }) => {
  return http({
    method: 'GET',
    url: '/pay/mock',
    data,
  })
}

// // 1. 页面加载（只执行1次）：拿参数、初始化静态数据
// onLoad((options) => {
//   console.log('页面参数：', options.id) // 能拿到?id=1的参数
// })

// // 2. 页面每次显示都执行：刷新动态数据（比如从地址页返回订单页）
// onShow(() => {
//   console.log('页面显示了') // 切回页面就触发
// })

// // 3. 页面首次渲染完成：操作节点（比如获取元素宽高）
// onReady(() => {
//   uni.createSelectorQuery().select('.address').boundingClientRect(rect => {
//     console.log('地址栏宽高：', rect)
//   }).exec()
// })

// // 4. Vue原生生命周期：组件内部逻辑
// onMounted(() => {
//   console.log('Vue挂载完成，但小程序节点可能还没好')
// })

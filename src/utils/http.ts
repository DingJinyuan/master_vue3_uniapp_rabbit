import { useMemberStore } from '@/stores'

// 请求基地址
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
//  tip 实现需求

// 1. 拼接基础地址
// 2. 设置超时时间
// 3. 添加请求头标识
// 4. 添加 token

//拦截器配置
const httpInterceptor = {
  // 拦截前触发（请求发送前执行的逻辑）
  invoke(options: UniApp.RequestOptions) {
    // 1. 非 http 开头需拼接基础地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2. 设置请求超时时间（10秒）
    options.timeout = 10000
    // 3. 添加小程序端请求头标识
    options.header = {
      ...options.header, // 保留原有请求头（避免覆盖业务自定义头）
      'source-client': 'miniapp', // 告诉后端请求来自“小程序端”
    }
    // 4. 添加 token 请求头（用户登录后才会有）
    const memberStore = useMemberStore() // 获取会员仓库实例
    const token = memberStore.profile?.token // 可选链取值：避免profile为undefined时报错
    if (token) {
      // 有token则添加鉴权头
      options.header.Authorization = token
    }
  },
}
//拦截request请求
uni.addInterceptor('request', httpInterceptor)
//拦截uploadFile请求
uni.addInterceptor('uploadFile', httpInterceptor)

// ::: tip 实现需求

// 1. 返回 Promise 对象，用于处理返回值类型
// 2. 成功 resolve
//    1. 提取数据
//    2. 添加泛型
// 3. 失败 reject
//    1. 401 错误
//    2. 其他错误
//    3. 网络错误

// :::
/**
 * 请求函数
 * @param  UniApp.RequestOptions
 * @returns Promise
 *  1. 返回 Promise 对象，用于处理返回值类型
 *  2. 获取数据成功
 *    2.1 提取核心数据 res.data
 *    2.2 添加类型，支持泛型
 *  3. 获取数据失败
 *    3.1 401错误  -> 清理用户信息，跳转到登录页
 *    3.2 其他错误 -> 根据后端错误信息轻提示
 *    3.3 网络错误 -> 提示用户换网络
 */
interface Data<T> {
  code: string
  msg: string
  result: T
}
// 2.2 添加类型，支持泛型
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        // 1. 成功请求：状态码 200-299（HTTP 标准成功状态码）
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 类型断言：告诉 TS「res.data 就是 Data<T> 类型」
          resolve(res.data as Data<T>)
        }
        // 2. 401 错误：未登录/登录过期
        else if (res.statusCode === 401) {
          // 获取 Pinia 的用户状态仓库
          const memberStore = useMemberStore()
          // 清空用户信息
          memberStore.clearProfile()
          // 跳转到登录页
          uni.navigateTo({ url: '/pages/login/login' })
          // 标记 Promise 失败，把错误信息传递出去
          reject(res)
        }
        // 3. 其他业务错误：比如 400（参数错误）、500（服务器错误）
        else {
          // 轻提示：优先用后端返回的 msg，没有就用默认值
          uni.showToast({
            icon: 'none', // 不显示图标，只显示文字
            title: (res.data as Data<T>).msg || '请求错误',
          })
          // 标记 Promise 失败
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}

/// <reference types="vite/client" />
/// <reference types="@dcloudio/types" /> // 核心：引入 UniApp API 类型
/// <reference types="@uni-helper/uni-app-types" /> // 引入 UniApp 组件类型

// 声明 .vue 文件模块（保留你原有的配置）
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 核心：声明全局变量 uni 为 UniApp 类型，让 TS 识别 uni.request 等 API
declare const uni: UniApp.Uni

// 可选：扩展 Window 类型（如果需要操作小程序全局对象）
interface Window {
  uni: UniApp.Uni
}

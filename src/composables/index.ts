import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

/**
 * 猜你喜欢组合式函数
 * 当你需要在父组件中「主动控制子组件的行为 / 获取子组件的数据」时，必须通过组件实例才能实现。
 *如果父组件只是「给子组件传值（props）」或「监听子组件的事件（emit）」，不需要实例
 交互方式	是否需要组件实例
父 → 子 传值（props）	❌ 不需要
子 → 父 触发事件（emit）	❌ 不需要
父 → 子 主动调用方法 / 获取数据	✅ 必须要
 */
//return 就是实现「复用」的关键 —— 如果不 return，函数内部的 guessRef 和 onScrolltolower 只是「局部变量 / 方法」，外部完全访问不到。
export const useGuessList = () => {
  // 获取猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()

  // 滚动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  // 返回 ref 和事件处理函数
  return { guessRef, onScrolltolower }
}

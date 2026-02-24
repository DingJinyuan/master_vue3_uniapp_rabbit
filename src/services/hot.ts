import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
import { http } from '@/utils/http'
//它继承了 PageParams 类型的所有属性，同时额外新增了一个可选属性 subType。
type HotParams = PageParams & {
  /** Tab 项的 id，默认查询全部 Tab 项的第 1 页数据 */
  subType?: string
}
/**
 * 通用热门推荐类型
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecomendAPI = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url, //动态url
    data,
  })
}

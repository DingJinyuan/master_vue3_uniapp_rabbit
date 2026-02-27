/** 小程序登录 登录用户信息 */
// export type LoginResult = {
//   /** 用户ID */
//   id: number
//   /** 头像  */
//   avatar: string
//   /** 账户名  */
//   account: string
//   /** 昵称 */
//   nickname?: string
//   /** 手机号 */
//   mobile: string
//   /** 登录凭证 */
//   token: string
// }
// /** 个人信息 用户详情信息 */
// export type ProfileDetail = {
//   /** 用户ID */
//   id: number
//   /** 头像  */
//   avatar: string
//   /** 账户名  */
//   account: string
//   /** 昵称 */
//   nickname?: string
//   /** 性别 */
//   gender?: Gender
//   /** 生日 */
//   birthday?: string
//   /** 省市区 */
//   fullLocation?: string
//   /** 职业 */
//   profession?: string
// }
// /** 性别 */
// export type Gender = '女' | '男'

//升级一下

/** 封装通用信息 */
type BaseProfile = {
  /** 用户ID */
  id: number
  /** 头像  */
  avatar: string
  /** 账户名  */
  account: string
  /** 昵称 */
  nickname?: string
}

export type LoginResult = BaseProfile & {
  /** 性别 */
  gender?: Gender
  /** 生日 */
  birthday?: string
  /** 省市区 */
  fullLocation?: string
  /** 职业 */
  profession?: string
  /** 登录凭证 */
  token: string
}

export type ProfileDetail = BaseProfile & {
  /** 性别 */
  gender?: Gender
  /** 生日 */
  birthday?: string
  /** 省市区 */
  fullLocation?: string
  /** 职业 */
  profession?: string
}
/** 性别 */
export type Gender = '女' | '男'

/** 个人信息 修改请求体参数 */
//Pick 是 TS 内置工具类型，核心作用是「从一个类型中挑选指定的属性，生成新类型」。
export type ProfileParams = Pick<
  ProfileDetail,
  'nickname' | 'gender' | 'birthday' | 'profession'
> & {
  /** 省份编码 */
  provinceCode?: string
  /** 城市编码 */
  cityCode?: string
  /** 区/县编码 */
  countyCode?: string
}

import ajax from '@/utils/ajax'

/**
 * 获取新闻
 * @param {object} data 查询条件
 */
export const getNews = data =>
  ajax.get('https://unidemo.dcloud.net.cn/api/news', data)

/**
 * 测试错误请求
 * @param {object} data 查询数据
 */
export const getTest = data =>
  ajax.get('https://unidemo.net.cn/api/news', data)

/**
 * 获取cnode新闻
 * @param {object} data 查询数据
 */
export const getCnodeNews = params =>
  ajax.get('https://cnodejs.org/api/v1/topics', { params })

import ajax from '@/utils/ajax'

/**
 * 获取新闻
 * @param {object} data 查询条件
 */
export const getNews = data =>
  ajax.get('https://unidemo.dcloud.net.cn/api/news', data)

// import fly from '_flyio@0.6.14@flyio'
import fly from '@/utils/ajax'

/**
 * 获取新闻
 * @param {object} data 查询条件
 */
export const getNews = data =>
  fly.get('https://unidemo.dcloud.net.cn/api/news', data)

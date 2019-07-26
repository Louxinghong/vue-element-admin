/**
 * 判断是否是外部链接
 * @param {string} path 路径
 */
export const isExternal = path => {
  return /^(https?:|mailto:|tel:)/.test(path)
}
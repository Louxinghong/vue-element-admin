/**
 * 判断是否是外部链接
 * @param {string} path 路径
 */
export const isExternal = path => {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 给表单中的下拉框赋值对应字典表的内容
 * @param {array} data 过滤数组
 * @param {string} itemName 要修改的项名
 * @param {string} targeKey 键名
 * @param {string} targetValue 键值
 */
export const optionsDict = (data, itemName, targetKey, targetValue) => {
  const index = data.findIndex(item => item.name === itemName)

  if (index !== -1) {
    data[index][targetKey] = targetValue
  }
}

/**
 * 字典转下拉框选项
 * @param {array} dict 字典
 * @param {string} labelKey 标签名
 * @param {string} valueKey 值名
 */
export const dictToOptions = (dict, labelKey = 'dictName', valueKey = 'dictCode') => dict.reduce((total, item) => {
  total.push({ label: item[labelKey], value: item[valueKey] })
  return total
}, [])

/**
 * 字典转键值对象
 * @param {array} dict 字典
 * @param {string} labelKey 标签名
 * @param {string} valueKey 值名
 */
export const dictToObject = (dict, labelKey = 'dictName', value = 'dictCode') => dict.reduce((total, item) => {
  total[item[valueKey]] = item[labelKey]
  return total
}, {})

/**
 * 所在地址(测试数据)
 */
export const ORDER_STATUS = [
  { dictCode: 'fenghua', dictName: '成功' },
  { dictCode: 'FAILURE', dictName: '失败' }
]

/**
 * 字典转下拉框选项
 * @param {array} dict 字典
 * @param {string} labelKey 标签名
 * @param {string} valueKey 值名
 */
export const dictToOptions = (
  dict,
  labelKey = 'dictName',
  valueKey = 'dictCode'
) =>
  dict.reduce((total, item) => {
    total.push({ label: item[labelKey], value: item[valueKey] })
    return total
  }, [])

/**
 * 字典转键值对象
 * @param {array} dict 字典
 * @param {string} labelKey 标签名
 * @param {string} valueKey 值名
 */
export const dictToObject = (
  dict,
  labelKey = 'dictName',
  valueKey = 'dictCode'
) =>
  dict.reduce((total, item) => {
    total[item[valueKey]] = item[labelKey]
    return total
  }, {})

/**
 * 所在地址(测试数据)
 */
export const ADDRESS_STATUS = [
  { dictCode: 'fenghua', dictName: '奉化' },
  { dictCode: 'haishu', dictName: '海曙' },
  { dictCode: 'jiangbei', dictName: '江北' },
  { dictCode: 'yinzhou', dictName: '鄞州' },
  { dictCode: 'zhenhai', dictName: '镇海' }
]

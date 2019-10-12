import { isEmpty } from 'lodash'

/**
 * 电话号码验证
 * @param {any} rule 验证规则
 * @param {string} value 电话号码
 * @param {funcation} callback 回调函数
 */
export const phoneValidator = (rule, value, callback) => {
  const reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/

  if (!reg.test(value)) {
    callback(new Error('请输入正确的手机号'))
  } else {
    callback()
  }
}

/**
 * 网址验证
 * @param {any} rule 验证规则
 * @param {string} value 电话号码
 * @param {funcation} callback 回调函数
 */
export const urlValidator = (rule, value, callback) => {
  const reg = /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/)*[\w-]+(\.[\w-]+)*\/?(\?([\w-.,@?^=%&:/~+#]*)+)?/

  if (isEmpty(value)) {
    callback()
  }

  if (!reg.test(value)) {
    callback(new Error('请输入正确的链接'))
  } else {
    callback()
  }
}

/**
 * 邮箱验证
 * @param {any} rule 验证规则
 * @param {string} value 邮箱地址
 * @param {Function} callback 回调函数
 */
export const emailValidator = (rule, value, callback) => {
  const reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/

  if (!reg.test(value)) {
    callback(new Error('请输入正确的邮箱地址'))
  } else {
    callback()
  }
}

/**
 * 身份证验证
 * @param {any} rule 验证规则
 * @param {string} value 身份证
 * @param {Function} callback 回调函数
 */
export const idCardValidator = (rule, value, callback) => {
  const reg = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/

  if (!reg.test(value)) {
    callback(new Error('请输入正确的身份证号'))
  } else {
    callback()
  }
}

import fly from 'flyio'
import { Message } from 'element-ui'

// 配置参数
fly.config.addAllowedOrigin = '*'
fly.config.baseURL = '/'
// fly.config.withCredentials = true
fly.config.timeout = 8000

// 配置请求拦截器
fly.interceptors.request.use(req => {
  // 非鉴权接口不携带 token
  // if (req.auth !== false) {
  //   req.headers['Authorization'] = `Bearer ${getToken()}`
  // }

  // 清理无用的请求数据
  if (req.body && req.method === 'GET') {
    Object.keys(req.body).forEach(key => {
      if (
        req.body[key] === '' ||
        req.body[key] === undefined ||
        req.body[key] === null
      ) {
        delete req.body[key]
      }
    })
  }

  // 构造特殊格式数据
  if (req.dataType) {
    let tempData

    switch (req.dataType) {
      case 'FormData':
        tempData = new FormData()
        break
      case 'URLSearchParams':
        tempData = new URLSearchParams()
        break
      case 'URLQueryParams':
        tempData = []
        break
      default:
        break
    }

    if (req.dataType === 'URLQueryParams') {
      const data = Object.keys(req.body).reduce((total, key) => {
        total.push(`${key}=${req.body[key]}`)

        return total
      }, tempData)

      req.url = `${req.url}?${data.join('&')}`
    } else {
      const data = Object.keys(req.body).reduce((total, key) => {
        total.append(key, req.body[key])

        return total
      }, tempData)

      req.body = data
    }
  }

  // 默认只返回数据
  if (req.dataOnly === undefined) {
    req.dataOnly = true
  }

  return req
})

fly.interceptors.response.use(
  resp => {
    // 是否只返回数据
    if (resp.request.dataOnly) {
      return resp.data
    }

    return resp
  },
  err => {
    if (err.status === 0) {
      Message({
        type: 'error',
        message: '网络错误，请稍后手动刷新',
        duration: 1500
      })
    } else if (err.status === 1) {
      Message({
        type: 'error',
        message: '请求超时，请稍后手动刷新',
        duration: 1500
      })
    }
  }
)

export default fly

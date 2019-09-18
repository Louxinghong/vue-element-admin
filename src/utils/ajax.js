import fly from 'flyio'
import { Message } from 'element-ui'

// 配置参数
fly.config.baseURL = '/'
fly.config.withCredentials = true
fly.config.timeout = 8000

export default fly

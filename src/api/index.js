import { camelCase } from 'lodash'

const requireApi = require.context(
  '.',
  false,
  /^((?!(index|common|dict|toolbox)).)*.js$/
)
const api = requireApi.keys().reduce((total, path) => {
  const module = requireApi(path)
  const name = camelCase(path.replace(/(\.\/|\.js)/g, ''))

  total[name] = module.default || module

  return total
}, {})

export default api

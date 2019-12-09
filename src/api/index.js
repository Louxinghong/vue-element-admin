import requireAll from '@/utils/requireAll'

const requireApi = require.context(
  '.',
  false,
  /^((?!(index|common|dict|toolbox)).)*.js$/
)
const api = requireAll(requireApi)

export default api

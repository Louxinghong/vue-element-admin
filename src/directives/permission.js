import store from '@/store'

export default {
  inserted(el, binding, vnode) {
    const { value } = binding
    const permissions = store.getters.permissions

    if (value === false || value === undefined || value === null) {
      return
    }

    if (typeof value === 'string' && value.length > 0) {
      const hasPermission = permissions.some(permission => value === permission)

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error('need permission! Like v-permission="\'admin\'"')
    }
  }
}

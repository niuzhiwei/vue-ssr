import Vuex from 'vuex'
import state from './state/state'
import mutations from './mutations/mutations'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state,
    mutations,
    actions
  })

  // vuex的hot replace
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      store.hotUpdate({
        state: newState,
        mutations: newMutations
      })
    })
  }
  return store
}

import * as getters from './getters.js'
import * as  actions from './actions.js'
import * as mutations from './mutations.js'
import state from './state.js'

export default {
    namespaced:true,
    getters,
    actions,
    mutations,
    state
}
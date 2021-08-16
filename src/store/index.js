import {createStore} from 'vuex'

export default createStore({
    state:{
        signUpModal: false
    },
    getters:{
        getSignUpModal(state){
            return state.signUpModal
        }
    },
    actions:{
        openSignUpModal(context){
            context.commit('openSignUpModal')
        },
        
    },
    mutations:{
        openSignUpModal(state){
            state.signUpModal = true
        },
        closeSignUpModal(state){
            state.signUpModal = false
        }
    }
})
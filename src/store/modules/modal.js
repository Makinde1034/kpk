
const modalAndSignUpModule = {
    state(){
        return {
           signUpModal: false  
        }
    },
    getters:{
        getSignUpModal(state){
            return state.signUpModal
        }
    },
    actions:{
        openSignUpModal({commit}){
            commit('openSignUpModal');
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
}

export default modalAndSignUpModule
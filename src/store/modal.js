
const modalAndSignUpModule = {
    namespaced : true,
    state(){
        return {
           signUpModal: false,
           signInModal : false,
           cartModal : false,
           modalBackground : false  
        }
    },
    getters:{
        getSignUpModal(state){
            return state.signUpModal
        },
        getSignInModal(state){
            return state.signInModal
        },
        getModalBackground(state){
            return state.modalBackground
        },
        getCartModal(state){
            return state.cartModal
        }
    },
    actions:{
        // sign up
        openSignUpModal({commit}){
            commit('openSignUpModal');
            commit('openModalBackground');
        },
        closeSignUpModal({commit}){
            commit('closeSignUpModal');
            commit('closeModalBackground');
        },
        // sign in
        openSignInModal({commit}){
            commit('openSignInModal');
            commit('openModalBackground');
        },
        closeSignInModal({commit}){
            commit('closeSignInModal');
            commit('closeModalBackground');
        },
        // cart 
        openCartModal({commit}){
            commit('openCartModal');
            commit('openModalBackground');
        },
        closeCartModal({commit}){
            commit('closeCartModal')
            commit('closeModalBackground');
        } 
        
    },
    mutations:{
        openSignUpModal(state){
            state.signUpModal = true
        },
        closeSignUpModal(state){
            state.signUpModal = false
        },
        // sign in
        openSignInModal(state){
            state.signInModal = true 
        },
        closeSignInModal(state){
            state.signInModal = false
        },
        // noddal background
        openModalBackground(state){
            state.modalBackground = true
        },
        closeModalBackground(state){
            state.modalBackground = false
        },
        openCartModal(state){
            state.cartModal = true
        },
        closeCartModal(state){
            state.cartModal = false
        }
    }
}

export default modalAndSignUpModule
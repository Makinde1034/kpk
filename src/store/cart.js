import api from '../utils/api.js'

const cart = {
    namespaced:true,
    state(){
        return {
            cartItems : [],
            toast : false,
           
        }
    },
    getters:{
        getCart(state){
            return state.cartItems
        },
        getToast(state){
            return state.toast
        }
    },
    actions:{
        addToCart({dispatch,commit},payload){
            api.addToCart(payload).then((res)=>{
            console.log(res)
            dispatch("getCart");
            commit('showToast');
            dispatch('getCart')
           
            })
        },
        getCart({commit}){
            api.getCart().then((res)=>{
                const{data:{data}} = res
                console.log(data.cart.items);
                commit('setCart',data.cart.items);
            })
        },
        deleteFromCart({dispatch},payload){
            api.deleteFromCart(payload).then((res)=>{
                console.log(res);
                dispatch('getCart')
            })
        }

    },
    mutations:{
        setCart(state,payload){
            state.cartItems = payload
        },
        showToast(state){
            state.toast = true
            setTimeout(() => {
                state.toast = false
            },3000);
        },
        
    }

}

export default cart

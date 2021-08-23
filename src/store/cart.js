import api from '../utils/api.js'

const cart = {
    namespaced:true,
    state(){
        return {
            cartItems : [],
            toast : false,
            totalPrice : ''
           
        }
    },
    getters:{
        getCart(state){
            return state.cartItems
        },
        getToast(state){
            return state.toast
        },
        getTotalPrice(state){
            return state.totalPrice
        }
    },
    actions:{
        addToCart({dispatch,commit},payload){
            api.addToCart(payload).then((res)=>{
            console.log(res)
            dispatch("getCart");
            commit('showToast');
            dispatch('getCart')
           
            }).catch(()=>{
                alert('an error occured')
            })
        },
        getCart({commit}){
            api.getCart().then((res)=>{
                const{data:{data}} = res
                const totalPrice = data.cart.total_price
                console.log(data.cart);
                commit('setCart',data.cart.items);
                commit('setTotalPrice',totalPrice)
            })
        },
        deleteFromCart({dispatch},payload){
            api.deleteFromCart(payload).then((res)=>{
                console.log(res);
                dispatch('getCart')
            })
        },
        removeFromCart({dispatch},payload){
            api.removeFromCart(payload).then((res)=>{
                console.log(res)
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
        setTotalPrice(state,payload){
            state.totalPrice = payload
        }
        
    }

}

export default cart

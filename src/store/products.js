import api from '../utils/api.js'



const products = {
    namespaced : true,
    state(){
        return {
            products : [],
            loading:true
        }
    },
    getters:{
        products(state){
            return state.products
        },
        productLoading(state){
            return state.loading
        }
    },
    actions:{
        async getProducts({commit}){
            api.getProducts().then((res)=>{
                commit('setProducts',res.data.data)
                // console.log(res.data.data);
          
            });
        }
    },
    mutations:{
        setProducts(state,payload){
            state.products = payload
            state.loading = false
        }
    }
}

export default products
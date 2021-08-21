import axios from 'axios'


export const getProducts=({commit})=>{
    axios.get('https://kpk-ecommerce.herokuapp.com/product/get-all-product').then((res)=>{
        commit('setProducts',res.data.data)
        console.log(res.data.data);
    
    });
}
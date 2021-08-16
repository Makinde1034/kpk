import {createStore} from 'vuex'
import modalAndSignUpModule from './modules/modal';
import products from './modules/products.js'
import auth from './modules/auth.js'



// const productModule = {
//     state(){
//         return {
//             test:"hey"
//         }
//     }
// }

const store = createStore({
    modules:{
        modalAndSignUpModule,
        products,
        auth
    },
    state:{
        name:'Bran'
    }
});

export default store
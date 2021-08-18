import {createStore} from 'vuex'
import modalAndSignUpModule from './modules/modal';
import products from './modules/products.js'
import auth from './modules/auth.js'


const store = createStore({
    modules:{
        modalAndSignUpModule,
        products,
        auth
    },
    
});

export default store
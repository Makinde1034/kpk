import {createStore} from 'vuex'
import auth from './auth'
import modal from './modal'
import products from './products'
import cart from './cart'



const store = createStore({
    modules:{
        auth,
        modal,
        products,
        cart
    },
    
});

export default store
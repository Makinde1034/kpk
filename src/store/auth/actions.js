import axios from 'axios'
import storage from '../../utils/storage.js'

export const signUp =({commit,dispatch},user)=>{
    commit('authRequest')
    axios({url : 'https://kpk-ecommerce.herokuapp.com/user/signup-customer', data:user, method:'POST'}).then((res)=>{
        const {data:{data}} = res
        const user = data.user
        const token = data.token
        localStorage.setItem('token',token);
        storage.setUserDetails(user)
        commit('authSuccess',token)
        dispatch('modal/closeSignUpModal',null,{ root: true }); 
        console.log(data)
    }).catch(err =>{
        commit('authError');
        console.log(err)
    });
}

export const signIn=({commit,dispatch},user)=>{
    commit('signInAuthRequest')
    axios({url:"https://kpk-ecommerce.herokuapp.com/user/login", data:user, method:"POST"}).then((res)=>{
        const {data:{data}} = res

        const user = data.user
        const token = data.token
        storage.setToken(token)
        storage.setUserDetails(user);
        commit('authSuccess',token)
        dispatch('modal/closeSignInModal',null,{ root: true }); 
    }).catch((err)=>{
        console.log(err)
        commit('authError')
    })
}

export const logOut=({commit})=>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    commit('logOut')
            
}

import storage from '../utils/storage.js'
import api from '../utils/api.js'

const auth = {
    namespaced : true,
    state(){
        return{
            status: '',
            token: storage.getToken() || '',
            name : storage.getUserDetails() || '',
            loading : false,
            signInLoading : false
        }
    },
    getters:{
        status(state){
            return state.status
        },
        token(state){
            return state.token
        },
        user(state){
            return state.name.email
        },
        loading(state){
            return state.loading
        },
        signInLoading(state){
            return state.signInLoading
        }
    },
    actions:{
        signUp({commit,dispatch},user){
            commit('authRequest')
            api.signUp(user).then((res)=>{
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
            })
        },
        logOut({commit}){
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            commit('logOut')
            
        },
    
        signIn({commit,dispatch},user){
            commit('signInAuthRequest')
            api.signIn(user).then((res)=>{
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
    },
    mutations:{
        // sign up
        authRequest(state){
            state.status = 'loading'
            state.loading = true
            
        },
        authSuccess(state,token){
            state.token = token
            state.status = 'success'
            state.loading =false
            state.signInLoading = false
            
        },
        authError(state){
            state.status = 'error'
            state.loading = false
            state.signInLoading = false
        },
        // sign in
        signInAuthRequest(state){
            state.signInLoading = true
        },
        logOut(state){
            state.token = ''
        }
    }
}

export default auth
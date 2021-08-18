import axios from 'axios'

const auth = {
    namespaced : true,
    state(){
        return{
            status: '',
            token: localStorage.getItem('token') || '',
            name : localStorage.getItem('user') || '',
            loading : false
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
            return state.name.firstname
        },
        loading(state){
            return state.loading
        }
    },
    actions:{
        async signUp({commit,dispatch},user){
            commit('authRequest')
            axios({url : 'https://kpk-ecommerce.herokuapp.com/user/signup-customer', data: user, method:'POST'}).then((res)=>{
                const {data:{data}} = res
                const user = data.user
                const token = data.token
                localStorage.setItem('token',token);
                localStorage.setItem('user',JSON.stringify(user));
                commit('authSuccess',token)
                dispatch('modalAndSignUpModule/closeSignUpModal',null,{ root: true }) 
                console.log(data)
            }).catch(err =>{
                commit('authError');
                console.log(err)
            })
        },
        logOut(){
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            
        },
        logIn(){
            
        }
    },
    mutations:{
        authRequest(state){
            state.status = 'loading'
            state.loading = true
        },
        authSuccess(state,token){
            state.token = token
            state.status = 'success'
            state.loading =false
        },
        authError(state){
            state.status = 'error'
            state.loading = false
        }
    }
}

export default auth
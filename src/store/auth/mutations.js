export const authRequest=(state)=>{
    state.status = 'loading'
    state.loading = true
            
}

export const authSuccess=(state,token)=>{
    state.token = token
    state.status = 'success'
    state.loading =false
    state.signInLoading = false
    
}

export const authError=(state)=>{
    state.status = 'error'
    state.loading = false
    state.signInLoading = false
}

        // sign in
export const signInAuthRequest=(state)=>{
    state.signInLoading = true
}

export const logOut=(state)=>{
    state.token = ''
}
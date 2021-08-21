export const state=()=>{
    return{
        status: '',
        token: storage.getToken() || '',
        name : storage.getUserDetails() || '',
        loading : false,
        signInLoading : false
    }
}
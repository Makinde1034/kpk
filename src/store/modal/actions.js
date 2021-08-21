// sign up
export const openSignUpModal=({commit})=>{
    commit('openSignUpModal');
    commit('openModalBackground');
}


export const closeSignUpModal=({commit})=>{
    commit('closeSignUpModal');
    commit('closeModalBackground');
}
// sign in
export const openSignInModal=({commit})=>{
    commit('openSignInModal');
    commit('openModalBackground');
}

export const closeSignInModal=({commit})=>{
    commit('closeSignInModal');
    commit('closeModalBackground');
}
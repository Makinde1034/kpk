<template>
  <div :class=" signUpModal ? ['modal','modal--active'] : 'modal' ">

  </div>
</template>

<script>
import store from '../store/index.js'

export default {
    computed:{
        signUpModal(){
            return store.getters.getSignUpModal
            
        }
    }
}
</script>

<style>
.modal{
  height: 100vh;
  width: 100%;
  background:rgba(0, 0,0,0.5);
  position: fixed;
  z-index: 0;
  top: 0vh;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease-in-out;

}

.modal.modal--active{
  visibility: visible;
  opacity: 1;
}
</style>
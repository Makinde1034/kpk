<template>
  <div :class=" toast ? ['toast','toast--active'] : 'toast'  ">
      <h3>ADDED TO CART</h3>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    computed:{
        toast(){
            return this.$store.getters['cart/getToast']
        }
    }
}
</script>

<style>
.toast{
    height: 50px;
    padding: 10px;
    background: white;
    position: fixed;
    top: 110px;
    left: 50%;
    transform: translate(-50%,-50%);
    overflow: auto;
    z-index: 5;
    border-radius: 5px;
    visibility: hidden;
     box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
     opacity: 0;
}

.toast--active{
    visibility: visible;
    opacity: 1;
}
</style>
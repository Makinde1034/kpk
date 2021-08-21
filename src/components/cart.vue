<template>
  <div>
      <div class="cart_wrap">
          <section v-for="item in cartItems" :key="item.id" class="cart">
              <div class="image">
                  <img :src="item.image" alt="">
              </div>
              <div class="name">
                  <p>{{item.name}}</p>
              </div>
              <div class="quantity">
                  <div>
                    <p>Quantity</p>
                  </div>
                  <div class="quantity_right">
                    <img  src="../assets/chevron-down.2c726049.svg" alt="down">
                    <p>{{item.quantity}}</p>
                    <img @click="addToCart(item.id)" src="../assets/chevron-up.2e2e05ba.svg" alt="up"> 
                  </div>
                </div>
              <div class="unit_price">
                  <h3>unit price</h3>
                  <p>${{item.price}}</p>
              </div>
              <div class="sub_total">
                  <h3>sub total</h3>
                  <p>${{item.sub_total.toLocaleString()}}</p>
              </div>
              <div class="delete">
                  <img @click="deleteFromCart(item.id)" src="../assets/trash.25428244.svg" alt="">
              </div>
          </section>
          <div class="summary">
              <h4>Total quantity : </h4>
              <h4>Total Amount : </h4>
          </div>
      </div>
  </div>
</template>

<script>
import storage from '../utils/storage.js'

export default {
    data(){
        return{

        }
    },
    methods:{
        deleteFromCart(id){
            const payload = {
                product_id : id
            }
            this.$store.dispatch('cart/deleteFromCart',payload);
        },
        addToCart(id){
            const payload = {
                product_id : id
            }
            if(!storage.getUserDetails()){
                alert('you have to be logged in to add products to cart');
            }
            else{
                this.$store.dispatch('cart/addToCart',payload);
            }
        }
    },
    computed:{
        cartItems(){
            return this.$store.getters['cart/getCart']
        }
    },
    created(){
        this.$store.dispatch('cart/getCart')
    }
}
</script>

<style scoped>
.cart_wrap{
    height: 500px;
    width: 70%;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    overflow: auto;
    z-index: 5;
    border-radius: 5px;
    visibility: hidden;
}

.cart{
    padding: 10px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(216, 210, 210);
}

.image{
    height: 100%;
    width: 200px;
    /* background: black; */
}

.image img{
    height: 100%;
    width: 100%;
}

.name p{
    font-weight: 600;
}

.quantity_right{
    display: flex;
}

.quantity_right img{
    cursor: pointer;
}

.unit_price h3,p{
   text-align: center;
}

.sub_total h3,p{
   text-align: center;
}

.delete img{
    height: 20px;
    cursor: pointer;
}

.summary{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
}
</style>
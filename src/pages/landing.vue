<template>
  <div>
    <div class="landing">
      <div v-if="loading" class="loader">
        <Loader class="loading" />
      </div>
  
      <div  class="container">
        <div class="itemBox" v-for="item in products" :key="item.name">
          <img class="image" :src="item.image" alt="">
          <p class="itemBox__name">{{item.name}}</p>
          <p class="itemBox__desc">{{item.description.length > 35 ? item.description.substring(0,35) + '...' : item.description}}</p>
          <h3>${{item.price}}</h3>
          <div class="itemBox__button">
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
    <SignUp />
    <SignIn />
  </div>
  
</template>

<script>
import Loader from '../components/loader.vue'
import SignUp from '../components/sign_up.vue'
import SignIn from '../components/sign_in.vue'

export default {
  components:{Loader, SignUp,SignIn},
  data(){
      return{

    }
  },
  
  methods:{
    
  },

  computed:{
    products(){
      return this.$store.getters['products/products']
    },
    loading(){
      return this.$store.getters['products/productLoading']
    }
  },

  created(){
    this.$store.dispatch('products/getProducts');
  }
    
}
</script>

<style>

.landing{
  padding-left: 150px;
  padding-right: 150px;
  padding-top: 50px;
  background:  #E8EFFA;
}

.loader{
  display: flex;
  justify-content: center;
}

.container {
  display: grid;
  grid-template-columns: 230px 230px 230px 230px 230px;
  grid-template-rows: 400px 400px 400px 400px;
  grid-auto-rows: 1fr;
  gap: 30px 10px;
  grid-auto-flow: row;
 
 
}

.itemBox{
    background: white;
    border-radius: 10px;
   box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
   padding: 10px;
}

.itemBox:hover .itemBox__button button{
  visibility: visible;
  transform: scale(1);
  opacity: 1;
}

.image{
  height: 200px;
  width: 100%;
}

.itemBox__name{
  font-weight: 600;
  color: #344A6F;
}

.itemBox__desc{
  color: #344A6F;
  margin-top: 5px;
  margin-bottom: 5px;
}

.itemBox__button{
  display: flex;
  justify-content: center;
  margin-top: 30px;

}

.itemBox__button button{
  padding: 7px 20px;
  background: #102A55;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  visibility: hidden;
  transition: 0.2s;
  transform: scale(0.5);
  opacity: 0;
}

</style>
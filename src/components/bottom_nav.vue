<template>
  <div>
      <nav class="nav">
          <div class="nav__logo">
              <h3>KPK</h3>
              <img src="../assets/trolley.d9c304ca.svg" alt="">
          </div>

          <div class="nav__search">
             <form action="">
                <input placeholder="search products, brands and categories" type="text">
                <button>
                    <img src="../assets/search.fd966c61.svg" alt="serach">
                </button>
             </form>
          </div>
          <p @click="logOut" v-if="loggedIn" class="logout">logout</p>
          <p @click="openSignInModal" v-else class="login">Login</p>
          <p v-if="!loggedIn" @click="openSignUpModal" class="login">Signup</p>

          <div @click="openCart" class="nav__cart">
            <p>Cart</p>
            <div  class="cart__counter">
                <img src="../assets/trolley.d9c304ca.svg" alt="">
                <div class="circle">{{cartItems.length}}</div>
            </div>
          </div>
      </nav>
  </div>
</template>

<script>

import storage from '../utils/storage.js'


export default {
    
    methods:{
        
        openSignUpModal(){
            this.$store.dispatch('modal/openSignUpModal');
       
        },
        openSignInModal(){
            this.$store.dispatch('modal/openSignInModal');
        },
        logOut(){
            this.$store.dispatch('auth/logOut');
            
        },
        openCart(){
            if(!storage.getUserDetails()){
                this.$toast.show(`you have to be logged in to access cart`);
            }else{
                this.$store.dispatch('modal/openCartModal') 
            }
           
        }
    },
    computed:{
        loggedIn(){
            return this.$store.getters['auth/token']
        },
        
        cartItems(){
            return this.$store.getters['cart/getCart']
        }
    
    }
}
</script>

<style scoped>
.nav{
    height: 60px;
    background: #102A55;
    padding-left: 150px;
    padding-right: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
}

.nav__logo{
    display: flex;
    align-items: center;
}

.nav__logo h3{
    color: white;
}

.nav__search form{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.nav__search form input{
    width: 600px;
    height: 40px;
    padding-left: 20px;
    /* border-top-left-radius: 10px;
    border-bottom-left-radius: 10px; */
    border: none;
    outline: none;
}

.login{
    cursor: pointer;
}

.logout{
    cursor: pointer;
}

.nav__search form button{
    height: 40px;
    width: 50px;
    border: none;
    background: #99B8E9;
}
.nav__cart{
    width: 150px;
    height: 40px;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.cart__counter{
    display: flex;
    align-items: center;
    margin-left: 10px;
    /* position: relative; */
}

.cart__counter img{
    height: 20px;
}

.circle{
    height: 20px;
    width: 20px;
    background: white;
    border-radius: 50%;
    /* position: absolute; */
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
   

}


@media screen and (max-width:768px) {
    .nav{
        padding-left: 20px;
        padding-right: 20px;
    }
    .nav__search form{
        display: none;
    }

    .login{
        display: none;
    }

    .logout{
        display: none;
    }

    .nav__cart{
        width: 20px;
        border: none;
    }

    .nav__cart p{
        display: none;
    }

    
}
</style>
<template>
  <div>
      <form @submit.prevent="signIn" :class="signInModal ? ['signInForm__active','signInForm']  : 'signInForm' " >
        <nav class="nav">
            <img @click="closeSignInModal" src="../assets/cancel.png" alt="cancel">
        </nav>
        <div class="header">
            <h2>Sign in </h2>  
        </div>
        <input v-model="userDetails.email" placeholder="Email" required type="text">
        <input v-model="userDetails.password" placeholder="password" required type="text">
        <button>
            <p v-if="loading===false">Submit</p>
            <div v-else class="loader"></div>
        </button>
        <div class="error">
            <p v-if="getStatus==='error' ">An error occured</p>
        </div>
      </form>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
    data(){
        return {
            userDetails:{
                email : '',
                password:"",
            
            },
         
        }
    },
    methods:{
        signIn(){
            const user = {
                email:this.userDetails.email,
                password:this.userDetails.password,
               

            }
            this.$store.dispatch('auth/signIn',user)
            // console.log(user)
        },

        closeSignInModal(){
            this.$store.dispatch("modal/closeSignInModal")
        }
       
    },
    computed:{
        signInModal(){
            return this.$store.getters['modal/getSignInModal']
        },
        loading(){
            return this.$store.getters['auth/signInLoading']
        },
        getStatus(){
            return this.$store.getters['auth/status']
        }
        
    }
}
</script>

<style scoped>
.signInForm{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    background: white;
    padding: 20px;
    border-radius: 5px;
    visibility: hidden;
   transition: 0.3s;
    opacity: 0;
    z-index: 2;
}

.nav{
    width: 100%;
}

.nav img{
    float: right;
    cursor: pointer;
    height: 20px;
}

.signInForm__active{
    visibility:visible;
    transform:  translate(-50%,-50%)  scale(1);
    opacity: 1;
    transition: 0.3s;
}

.header{
    display: flex;
    align-items: center;
    justify-content: center;
}

.header p{
    float: right;
    cursor: pointer;
}

.signInForm h2{
    margin-bottom: 30px;
    color: #102A55;
}

input{
    width: 100%;
    border: 1px solid black;
    height: 40px;
    border-radius: 5px;
    padding-left: 20px;
    font-weight: 600;
    outline: none;
    margin-bottom: 30px;
}



.box{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
}

.address{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 50px;
}



.signInForm button{
    height: 40px;
    width: 250px;
    background: #102A55;;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.loader{
    height: 20px;
    width: 18px;
    border-radius: 50%;
    background: #102A55;
    border: 3px solid #102A55;
    border-top: 3px solid white;
    animation: load 0.5s linear infinite;
}

.error{
    display: flex;
    justify-content: center;
}

@keyframes load {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
</style>
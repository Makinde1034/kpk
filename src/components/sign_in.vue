<template>
  <div>
      <form :class="signInModal ? ['signInForm__active','signInForm']  : 'signInForm' " >
        <nav class="nav">
            <p @click="closeSignInModal" >cancel</p>
        </nav>
        <div class="header">
            <h2>Sign in </h2>  
        </div>
        <input placeholder="Email" type="text">
        <input placeholder="password" type="text">
        <button>Submit</button>
      </form>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
    data(){
        return {
            userDetails:{
                firstname : '',
                lastname : '',
                email : '',
                address:{
                    street:'',
                    lga:'',
                    state:'',
                },
                phone : '',
                password:"",
                confirmPassword:""
            },
            err:""
        }
    },
    methods:{
       
        closeSignInModal(){
            this.$store.dispatch("modalAndSignUpModule/closeSignInModal")
        }
       
    },
    computed:{
        signInModal(){
            return this.$store.getters['modalAndSignUpModule/getSignInModal']
        },
        
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
    width: 40%;
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

.nav p{
    float: right;
    font-weight: 700;
    cursor: pointer;
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
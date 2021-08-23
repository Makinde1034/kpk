<template>
  <div>
      <form @submit.prevent="signUp" :class="signUpModal ? ['signUpForm__active','signUpForm']  : 'signUpForm' ">
        <nav class="nav">
            <img  @click="closeSignUpModal"  src="../assets/cancel.png" alt="cancel">
        </nav>
        <div class="header">
            <h2>Sign up </h2>  
        </div>
        <p>{{err}}</p>
        <div class="box">
            <input required v-model="userDetails.firstname" placeholder="First name" type="text">
            <input required v-model="userDetails.lastname" placeholder="Last name" type="text">
        </div>
        <div class="box">
            <input required v-model="userDetails.email" placeholder="Email" type="email">
            <input required v-model="userDetails.phone" placeholder="Phonenumber" type="tel" >
        </div>
        <div class="address">
            <input requireed v-model="userDetails.address.street" placeholder="Street" type="text">
            <input required v-model="userDetails.address.lga" placeholder="LGA" type="text">
            <input required v-model="userDetails.address.state" placeholder="State" type="text">
        </div>
        <div class="box">
            <input required v-model="userDetails.password" placeholder="Password" type="text">
            <input required v-model="userDetails.confirmPassword" placeholder="Confirm password" type="text">
        </div>
        <div class="submit">
            <button>
                <p v-if="loading===false" >Submit</p>
                <div v-else  class="loader"></div>
            </button>
        </div>
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
       
        signUp(){
            const user = {
                first_name:this.userDetails.firstname,
                last_name:this.userDetails.lastname,
                email:this.userDetails.email,
                address:{
                    street: this.userDetails.address.street,
                    lga: this.userDetails.address.lga,
                    state: this.userDetails.address.state
                },
                phone_number:this.userDetails.phone,
                password:this.userDetails.password,
               

            }
            this.$store.dispatch('auth/signUp',user)
            // console.log(user)
        },

        closeSignUpModal(){
            this.$store.dispatch("modal/closeSignUpModal")
        }
    },
    computed:{
        signUpModal(){
            return this.$store.getters['modal/getSignUpModal']
        },
        loading(){
            return this.$store.getters['auth/loading']
        },
        getStatus(){
            return this.$store.getters['auth/status']
        }
        
    }
}
</script>

<style scoped>
.signUpForm{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
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

.signUpForm__active{
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

.signUpForm h2{
    margin-bottom: 30px;
    color: #102A55;
}

.box input{
    width: 49%;
    border: 1px solid black;
    height: 40px;
    border-radius: 5px;
    padding-left: 20px;
    font-weight: 600;
    outline: none;
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

.address input{
    width: 30%;
    border: 1px solid black;
    height: 40px;
    border-radius: 5px;
    padding-left: 20px;
    font-weight: 600;
}

.submit{
    display: flex;
    justify-content: center;
}

.submit button{
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
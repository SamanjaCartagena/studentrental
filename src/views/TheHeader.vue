<template>
  <div>
   <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io" >
      <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">

      !-->
      <h1 style="font-size:30px;">Student Rentals NYC</h1>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

       <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          NYU
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            College of Arts and Science
          </a>
          <a class="navbar-item">
            College of Dentistry
          </a>
          <a class="navbar-item">
            Gallatin School
          </a>
          <a class="navbar-item">
            Stern School of Business
          </a>
           <a class="navbar-item">
           Liberal Studies
          </a>
          <a class="navbar-item">
           Rory Meyers College of Nursing
          </a>
          <a class="navbar-item">
           Steinhardt School
          </a>
          <a class="navbar-item">
           Silver School
          </a>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Columbia
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
         <a @click="chat" class="navbar-item">
        Chatroom
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
   
          <button @click="signup"  style="background-color:#57068c; color:white; margin:5px; padding:10px; border:0px solid white; border-radius:0.4">
              Sign up
          </button>
          
           <button @click="logging" style="background-color:#57068c; color:white; margin:5px; padding:10px; border:0px solid white; border-radius:0.4">
             Log in 
          </button>
           <button @click="logout" style="background-color:#57068c; color:white; margin:5px; padding:10px; border:0px solid white; border-radius:0.4">
             Log Out 
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import {
  doc,collection,
  query,orderBy, 
  limit, getDocs, 
  onSnapshot, QuerySnapshot, 
  updateDoc, addDoc, 
  deleteDoc
   }
   from 'firebase/firestore'
   import {auth} from '../firebase/index'
import {  signOut, } from "firebase/auth";


export default {
  data(){
    return{
      user:''
    }
  },
  methods:{
    logging(){
     this.$router.push('Login')
    },
    changeUser(u){
     this.user=u
    },
    signup(){
     this.$router.push('Signup')
    },
     chat(){
     this.$router.push('chat')
    }, 
    logout(){
    signOut(auth).then(() => {
   this.$router.push('/')
   console.log('You have logged out')
  }).catch((error) => {

});
    }
  },
 mounted(){
 }

}
</script>

<style scoped>
.btn{
  background-color: #57068c;
  color:white;
}
.navbar{
  height:100px
}
.button{
  background-color: #57068c;
  color:white;
}
.navbar-brand{
  color: red;
}
</style>
  
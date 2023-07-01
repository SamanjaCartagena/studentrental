<template>
  <div>
   <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io" >
      
      <h1 style="font-size:30px;">Student Rentals NYC</h1>
    </a>
     <p v-if="usernameIs">Welcome {{username}}</p>
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
     {{userNameForPassing}}
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
import { onAuthStateChanged } from 'firebase/auth';
import { db,usersCollectionRef} from '../firebase/index'


export default {
  data(){
    return{
      props:['usernameForPassing'],
      user:'',
      username:'',
      usernameIs:false
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
   this.usernameIs=false
  }).catch((error) => {

});
    }
  },
 mounted(){
  onAuthStateChanged(auth, async (user)=>{
    if(user){
        //do your logged in user crap here
        this.usernameIs=true;
       
        console.log("The name is "+user.uid)
        console.log("Logged in ", user.email)
            onSnapshot(usersCollectionRef,(querySnapshot) => {
  querySnapshot.forEach((doc) => {
            if(user.email == doc.data().email){
                   this.username = doc.data().username


            }
            console.log('The username for passing in main page is '+this.username)
  });
  })
    }else{
        console.log("Logged out");
    }
})
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
  
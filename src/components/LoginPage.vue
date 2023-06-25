<template>
 <div>
 <the-header  ></the-header>
 <center>
 <div class="container is-fluid">

<form style="border:1x solid white;" @submit.prevent="login">
      <h1 style="font-size:30px; color:white; position:relative; top:100px;">Log In</h1>
<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" v-model="email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="password" placeholder="Password" v-model="password" >
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>



<div class="field is-grouped">
  <div class="control">
    <button  class="button">Submit</button>
  </div>
  <div class="control">
    <button class="button">Cancel</button>
  </div>
</div>
   
</form>
</div>
 </center>
 </div>
</template>

<script>
import TheHeader from '../views/TheHeader.vue'
import {auth} from '../firebase/index'
import {  signInWithEmailAndPassword } from "firebase/auth";
import {db} from '../firebase/index'

import {
   doc,collection,
  query,orderBy, 
  limit, getDoc, 
  onSnapshot, QuerySnapshot,
  updateDoc, addDoc, 
  deleteDoc, where
   }
   from 'firebase/firestore'
     const usersCollectionRef= collection(db,'users')

export default {
  emits:['changeUser'],
components:{
    TheHeader
},
data(){
   return{
      email:'',
      password:'',
      username:'',
      user:'',
      id:'',
      usernameForPassing:''
      
      
      
   }
},
methods:{

   login()
{
   signInWithEmailAndPassword(auth, this.email, this.password)
  .then(() => {
    onSnapshot(usersCollectionRef,(querySnapshot) => {
  querySnapshot.forEach((doc) => {
            if(this.email == doc.data().email){
                   this.username = doc.data().username


            }
            this.usernameForPassing = this.username
               this.$emit('changeUser')
    console.log(this.username)
    this.$router.push('/chat')
  });
  })

})
  .catch((error) => {
    alert('Sign in unsuccessful')
  });
}
},


}
</script>

<style scoped>
.field{
   width:50%;
}
legend {
    background-color: #000;
    color: #fff;
    padding: 3px 6px;
}
.button{
   background-color: #000;
   color:white
}
</style>
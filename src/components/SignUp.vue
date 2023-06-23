<template>
 <div>
 <the-header></the-header>
 <center>
 <div class="container is-fluid">

<form style="border:1x solid white;" @submit.prevent="signup" >
      <h1 style="font-size:30px; color:white; position:relative; top:100px;">Register</h1>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" name="email" v-model="email" placeholder="College Email"  >

    
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="password" name="password" v-model="password" placeholder="Password" >
   
  </div>
</div>



<div class="field is-grouped">
  <div class="control">
    <button  class="button ">Submit</button>
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
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/index'
export default {
components:{
    TheHeader
},
data(){
  return{
    email:'',
    password:''
  }
},
methods:{
    signup(){
       createUserWithEmailAndPassword(auth,this.email,this.password)
       .then(() => {
      alert('Welcome')
   })
   .catch(error => {
     alert('Error');
   });
    }
}
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
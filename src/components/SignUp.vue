<template>
 <div>
 <the-header ></the-header>
 <center>
 <div class="container is-fluid">

<form style="border:1x solid white;" @submit.prevent="signup" >
      <h1 style="font-size:30px; color:white; position:relative; top:100px;">Register</h1>


<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input " type="text" name="username" v-model="username" placeholder="Username"  >

    
  </div>
</div>
<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input " type="email" name="email" v-model="email" placeholder="College Email"  >

    
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="password" name="password" v-model="password" placeholder="Password" >
   
  </div>
</div>



<div class="field is-grouped">
  <div class="control">
    <button type="submit" class="button ">Submit</button>
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
import {auth, db} from '../firebase/index'
import {
  doc,collection,
  query,orderBy, 
  limit, getDocs, 
  onSnapshot, QuerySnapshot, 
  updateDoc, addDoc, 
  deleteDoc
   }
   from 'firebase/firestore'
export default {
components:{
    TheHeader
},
data(){
  return{
    email:'',
    password:'',
    showModal:false,
    username:'',
  }
},
methods:{
    signup(){
      if(this.password.length <8){
        this.showModal=true;
        return;
      }
      else {
         
const usersCollectionRef= collection(db,'users')

  addDoc(usersCollectionRef,{
   username:this.username,
   email:this.email,
    })
         
       createUserWithEmailAndPassword(auth,this.email,this.password)
       .then(() => {
        this.username='',
        this.email='',
        this.password='',
        this.$router.push('/login')
       
   })
   .catch(error => {
     alert('Error');
   });
      }
    },
    hideModal(){
      this.showModal=false;
    }
}
}
</script>

<style >
@import 'bulma/css/bulma.min.css';

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
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
<template>
<div>
    <the-header></the-header>
    <center>
  <div class="container is-fluid">
    {{username}}
   <marquee behavior="alternate" style="color:white; background-color:black;  font-size:30px;">Find a roommate !</marquee>
  <div style="width:90%; height:600px; border:2px solid black;">
   <ul>
    <li style="width:100%; height:30px; color:white" v-for="chat in chatroom" :key="chat.id">
         {{chat.user}}:{{chat.chat}}
        </li>
   </ul>
  </div>
<form @submit.prevent="addchat">
<input   v-model="chatlatest" class="input is-large" type="text" placeholder="Type Message here.." >
</form>
</div>
    </center>
</div>
</template>

<script>
import TheHeader from './TheHeader.vue'
import {auth, db,usersCollectionRef} from '../firebase/index'
import {
  doc,collection,
  query,orderBy, 
  limit, getDocs, 
  onSnapshot, QuerySnapshot, 
  updateDoc, addDoc, 
  deleteDoc
   }
   from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth';

const todosCollectionQuery= query(usersCollectionRef, orderBy("date",'asc'))

export default {
    data(){
     return{
        chatlatest:'',
       todos:'',
        username:'', 
        chat:[],
        chatroom:''
     }
    },
    components:{
        TheHeader
    },
    methods:{
        hey(){
            alert('Hey')
        },
        addchat(){
          this.chat=this.chatlatest
            onAuthStateChanged(auth, async (user)=>{
    if(user){
        //do your logged in user crap here
        console.log("The name is "+user.uid)
        console.log("Logged in ", user.email)
            onSnapshot(usersCollectionRef,(querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(user.email == doc.data().email){
               
              addDoc(usersCollectionRef,{
                username:this.username,
               chats:this.chat
              })
                console.log("same user")
            }

  });

  })
    }else{
        console.log("Logged out");
    }
})

     this.chatlatest=''
        }
     
       
    },mounted(){
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

<style>
textarea{
    overflow-y: scroll;
}

</style>
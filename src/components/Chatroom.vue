<template>
<div>
    <the-header></the-header>
    <center>
  <div class="container is-fluid">
   
   <marquee behavior="alternate" style="color:white; background-color:black;  font-size:30px;">Find a roommate !</marquee>
  <div style="width:90%; height:600px; border:2px solid black;  overflow: auto;
  display: flex; flex-direction: column-reverse;" id="box">
   <ul>
    <li style="width:100%; height:30px; color:white;" id="list" v-for="todo in todos" :key="todo.username" >
         {{todo.username}} : {{todo.chats}} 
        </li>
   </ul>
  </div>
     <br/>
     <br/>
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
   addDoc(usersCollectionRef,{
   username:this.username,
   chats:this.chatlatest,
     date:Date.now()

    })

    this.chatlatest=''

    var element = document.getElementById("list");
    element.scrollTop = element.scrollHeight;


        }

        }
     
       
    ,mounted(){

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
onSnapshot(todosCollectionQuery,(querySnapshot) => {
  const fbTodos =[];
  querySnapshot.forEach((doc) => {
    const todo ={
      username:doc.data().username,
      chats:doc.data().chats,
    }
    fbTodos.push(todo)
  });
  this.todos=fbTodos
})


 }
}
    


</script>

<style>

#list{
  overflow: auto;
}
</style>
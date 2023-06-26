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

const todosCollectionQuery= query(usersCollectionRef, orderBy("date",'asc'))

export default {
    data(){
     return{
        chatlatest:'',
       todos:'',
        username:'', 
        chat:'',
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
    this.username=''
        },
       
    },mounted(){
   onSnapshot(usersCollectionRef,(querySnapshot) => {
  querySnapshot.forEach((doc) => {
                   this.username = doc.data().username


            
  });
  })
onSnapshot(todosCollectionQuery,(querySnapshot) => {
  const fbTodos =[];
  querySnapshot.forEach((doc) => {
    this.chatroom ={
      id:doc.id,
      user:doc.data().username,
      chat:doc.data().chats
    }

    console.log(this.user)
    console.log(this.chat)
    fbTodos.push(this.chatroom)
  });
  this.chatroom=fbTodos
  console.log(this.chatroom.user)
})

}
    }


</script>

<style>
textarea{
    overflow-y: scroll;
}

</style>
<template>
<div>
    <the-header></the-header>
    <center>
  <div class="container is-fluid">

   <marquee behavior="alternate" style="color:white; background-color:black;  font-size:30px;">Find a roommate !</marquee>
<textarea class="textarea" placeholder="10 lines of textarea" rows="25" ></textarea>  
<form @submit.prevent="addchat">
<input v-model="chatlatest" class="input is-large" type="text" placeholder="Type Message here.." >
</form>
</div>
    </center>
</div>
</template>

<script>
import TheHeader from '../views/TheHeader.vue'
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

const chatsCollectionRef= collection(db,'chats')

export default {
    data(){
     return{
        chatlatest:''
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
          addDoc(chatsCollectionRef,{
             chat:this.chatlatest
    })
        }
    }

}
</script>

<style>
textarea{
    overflow-y: scroll;
}

</style>
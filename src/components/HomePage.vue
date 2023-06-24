<template>
 <div>
  <the-header :user="userForPassing"></the-header>
  <first-part></first-part>
  
  <second-part></second-part>
 </div>
</template>

<script>
import FirstPart from '../views/FirstPart.vue'
import TheHeader from '../views/TheHeader.vue'
import SecondPart from '../views/SecondPart.vue'
import {db} from '../firebase/index'

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
    data(){
     return{
        user:'',
        userForPassing:'',
        username:''

     }
    },
    components:{
        TheHeader, FirstPart,
        SecondPart
    },
    mounted(){
  const usersCollectionRef= collection(db,'users')

onSnapshot(usersCollectionRef,(querySnapshot) => {
  querySnapshot.forEach((doc) => {
     this.username = {
            user:doc.data().username,
            email:doc.data().email
     }
    
     this.userForPassing=this.username.user
    
  });

})

}

}
</script>

<style>
@import 'bulma/css/bulma.min.css';

</style>
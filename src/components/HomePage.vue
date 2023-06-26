<template>
 <div>

  <the-header ></the-header>
  <p style="font-size:30px; ">{{user}}</p>
  <first-part></first-part>
  
  <second-part></second-part>
 </div>
</template>

<script>
import FirstPart from '../views/FirstPart.vue'
import TheHeader from './TheHeader.vue'
import SecondPart from '../views/SecondPart.vue'
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

export default {
    data(){
     return{
        user:'',

     }
    },
    components:{
        TheHeader, FirstPart,
        SecondPart
    },
    methods:{
      updateUser(u){
      console.log("Value emitted"+u)
     this.user=u
    }
    },
    mounted(){
           const usersCollectionRef= collection(db,'users')

    }


}
</script>

<style>
@import 'bulma/css/bulma.min.css';

</style>
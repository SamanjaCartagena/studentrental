<template>
 <div>

  <the-header v-on:changeUser="updateUser($event)"></the-header>
  <p style="font-size:30px; ">{{user}}</p>
  <first-part></first-part>
  
  <second-part></second-part>
 </div>
</template>

<script>
import FirstPart from '../views/FirstPart.vue'
import TheHeader from '../views/TheHeader.vue'
import SecondPart from '../views/SecondPart.vue'


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
    }


}
</script>

<style>
@import 'bulma/css/bulma.min.css';

</style>
<template>
 <div>
  <the-header ></the-header>
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
        userForPassing:'',

     }
    },
    components:{
        TheHeader, FirstPart,
        SecondPart
    },


}
</script>

<style>
@import 'bulma/css/bulma.min.css';

</style>
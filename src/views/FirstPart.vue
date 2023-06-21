<template>
    <div class="container is-fluid has-text-centered" >
        
<form
  @submit.prevent="addTodo" 
>
  <div class="field is-grouped mb-5">
   <p class="control is-expanded">
    <input 
    
    class="input" 
    type="text" 
    placeholder="Enter the name of your college">
   </p>
   <p class="control">
    <button
   
    class="button is-info"
    >
    Search 
    </button>

   </p>
  </div>
</form>  
        

    
</div>
</template>

<script>
import campus from '../assets/nyc.jpg'
export default {
    data(){
        return{
            
        }
    }

}
</script>

<style scoped>
@import 'bulma/css/bulma.min.css';

.container {
    background-image: url('../assets/background.jpg');
    height:700px;
    background-repeat: no-repeat;
    background-size: 100%;

}
.control{
 
    position: absolute;
    top:150px;
}

</style>
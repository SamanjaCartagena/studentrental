<template>
    <div class="container is-fluid " >
        
<form
  @submit.prevent="addTodo"
>
  <div class="field is-grouped mb-5">
   <p class="control is-expanded">
    <input
    class="input" 
    type="text" 
    placeholder="Add a Todo">
   </p>
   <p class="control">
    <button
    class="button is-info"
    >
   Add 
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

<style >
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
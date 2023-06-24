<template>
    <div class="container is-fluid " >
        <center><h1 style="font-size:35px; color:white; position:relative;top:100px">Student Rentals NYC</h1>
        
<form
  @submit.prevent="addTodo"
>
  <div class="field is-grouped mb-5">
   <p class="control is-expanded">
    <input
    class="input" 
    type="text" 
    placeholder="Name of University">
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
        
        </center>
    
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
  background-color: #57068c;
height:700px;
  width:100%;

}
.control{
 
    position: absolute;
    top:150px;
}

</style>
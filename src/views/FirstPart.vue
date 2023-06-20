<template>
    <div class="container is-fluid">
  <div class="notification is-primary">
    
  </div>
</div>
</template>

<script>
import campus from '../assets/nyc.jpg'
export default {
    data(){
        return{
            images:campus
        }
    }

}
</script>

<style>
.container {
    background-image: url('../assets/background.jpg');
    height:600px;
    background-repeat: no-repeat;
    background-size: 100%;

}
</style>
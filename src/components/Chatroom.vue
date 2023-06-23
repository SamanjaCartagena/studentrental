<template>
<div>
    <the-header></the-header>
    <center>
  <div class="container is-fluid">

   <marquee behavior="alternate" style="color:white; background-color:black;  font-size:30px;">Find a roommate ! Or just chat about whatever ! </marquee>
<textarea class="textarea" placeholder="10 lines of textarea" rows="25" ></textarea>  
<form  @submit="hey">
<input class="input is-large" type="text" placeholder="Large input" >
</form>
</div>
    </center>
</div>
</template>

<script>
import TheHeader from '../views/TheHeader.vue'

export default {
    components:{
        TheHeader
    },
    methods:{
        hey(){
            alert('Hey')
        }
    }

}
</script>

<style>
textarea{
    overflow-y: scroll;
}

</style>
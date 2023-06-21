<template>
<center>
<div class="container1">
  <div v-for="i in 12" :key="i" class="card">
  <div class="card-content">
    <p class="title">
      <img :src="image1"/> 
    </p>
    <p class="subtitle">
      Jeff Atwood
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
 <button @click="triggerModal(i)">View</button>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p>
  </footer>
</div>
</div>
</center>
</template>

<script>
import image1 from '../assets/campus.jpg'
export default {
    data(){
        return{
    image1:image1
        }
    },
    methods:{
        triggerModal(v){
            alert(v+" has been triggered")
        }
    }
}
</script>

<style >
@import 'bulma/css/bulma.min.css';
.card{
    width:22%;
    display: inline-block;
    margin:10px;
}
.container{
    background-color: red;
}
</style>
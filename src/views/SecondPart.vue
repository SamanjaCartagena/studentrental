<template>
<center>
<div class="container1">
  <div v-for="a in apartments" :key="a.id" class="card">
  <div class="card-content">
    <p class="title">
      <img :src="a.image"/> 
    </p>
    <p class="subtitle">
      {{a.content}}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
 <button class="vueBtn" @click="triggerModal(i)">View</button>
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
import image2 from "../assets/n.jpg";
import image3 from '../assets/nyc.jpg'

export default {
    data(){
        return{
    image1:image1,
    apartments:[
      {
      id:1,
      content:'Upper East Side Apartmnent',
      image: image2
    },
    {
      id:2,
      content:'Lower East Side Apartmnent',
      image: image3
    },
    {
      id:3,
      content:'Middle East Side Apartmnent',
      image: image2
    },
    {
      id:4,
      content:' East Side Apartmnent',
      image: image2
    },
    {
      id:5,
      content:'West Side Apartmnent',
      image: image2
    },
    {
      id:6,
      content:'Upper East Side Apartmnent',
      image: image2
    },
    {
      id:7,
      content:'Upper East Side Apartmnent',
      image: image2
    },
    {
      id:8,
      content:'Upper East Side Apartmnent',
      image: image2
    },
    {
      id:9,
      content:'Upper East Side Apartmnent',
      image: image2
    },
    {
      id:10,
      content:'Upper East Side Apartmnent',
      image: image2
    },
     {

     }
    ]
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
.vueBtn{
  background-color:transparent;
   border:0px;
}
.vueBtn:hover{
  cursor: pointer;
}
</style>
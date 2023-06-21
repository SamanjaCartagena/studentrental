<template>
<center>
<div class="container1">
  <div v-for="i in 12" :key="i" class="card">
  <div class="card-content">
    <p class="title">
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
    </p>
    <p class="subtitle">
      Jeff Atwood
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
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
export default {
    
}
</script>

<style scoped>
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
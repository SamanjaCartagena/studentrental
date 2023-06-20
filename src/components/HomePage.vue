<template>
  <the-header></the-header>
  <first-part></first-part>
</template>

<script>
import FirstPart from '../views/FirstPart.vue'
import TheHeader from '../views/TheHeader.vue'

export default {
    components:{
        TheHeader, FirstPart
    }

}
</script>

<style>
@import 'bulma/css/bulma.min.css';

</style>
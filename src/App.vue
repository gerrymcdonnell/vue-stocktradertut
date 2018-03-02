<template>
  <div class="container">
    
    <!--header here-->
    <app-header></app-header>
    
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
//import header component
import Header from './components/Header.vue';

export default {
  components:{
    appHeader:Header
  }
}

</script>

<style>

</style>

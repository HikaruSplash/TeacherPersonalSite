<template>
  <div id="app">
    <HeaderComponent/>    
    <router-view/>    
  </div>
</template>

<script>
import AboutPage from './components/AboutPage.vue'
import HeaderComponent from './components/HeaderComponent.vue'

export default {  
  name: 'App',
  components: {
    HeaderComponent,
    AboutPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex; flex-direction: column; height: 100%;
}
</style>

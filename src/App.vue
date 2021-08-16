<template>
  <div>
    <TopNav />
    <BottomNav />
    <Landing />
    <ModalBackground />
  </div>
</template>

<script>
import TopNav from './components/top_nav.vue'
import BottomNav from './components/bottom_nav.vue'
import Landing from './pages/landing.vue'
import ModalBackground from './components/modal.vue'

export default {
  name: 'App',
  components: {
    TopNav,
    BottomNav,
    Landing,
    ModalBackground
  }
}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
#app {
  
    
 
}
</style>

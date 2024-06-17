<!-- src/views/HomeView.vue -->
<template>
    <div>
      <MenuBar />
      <HomeSection />
    </div>
  </template>
  
  <script>
  import MenuBar from '../components/MenuBar.vue'
  import HomeSection from '../components/HomeSection.vue'
  
  export default {
    components: {
      MenuBar,
      HomeSection
    }
  }
  </script>
  
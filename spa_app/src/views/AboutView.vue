<!-- src/views/AboutView.vue -->
<template>
    <div>
      <MenuBar />
      <AboutSection />
    </div>
  </template>
  
  <script>
  import MenuBar from '../components/MenuBar.vue'
  import AboutSection from '../components/AboutSection.vue'
  
  export default {
    components: {
      MenuBar,
      AboutSection
    }
  }
  </script>
  
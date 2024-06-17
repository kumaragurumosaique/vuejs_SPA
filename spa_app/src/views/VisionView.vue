<!-- src/views/VisionView.vue -->
<template>
    <div>
      <MenuBar />
      <VisionSection />
    </div>
  </template>
  
  <script>
  import MenuBar from '../components/MenuBar.vue'
  import VisionSection from '../components/VisionSection.vue'
  
  export default {
    components: {
      MenuBar,
      VisionSection
    }
  }
  </script>
  
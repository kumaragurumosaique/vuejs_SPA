<!-- src/views/AluminiView.vue -->
<template>
    <div>
      <MenuBar />
      <AluminiSection />
    </div>
  </template>
  
  <script>
  import MenuBar from '../components/MenuBar.vue'
  import AluminiSection from '../components/AluminiSection.vue'
  
  export default {
    components: {
      MenuBar,
      AluminiSection
    }
  }
  </script>
  
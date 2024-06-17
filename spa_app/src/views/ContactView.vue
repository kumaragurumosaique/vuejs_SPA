<!-- src/views/ContactView.vue -->
<template>
    <div>
      <MenuBar />
      <ContactSection />
    </div>
  </template>
  
  <script>
  import MenuBar from '../components/MenuBar.vue'
  import ContactSection from '../components/ContactSection.vue'
  
  export default {
    components: {
      MenuBar,
      ContactSection
    }
  }
  </script>
  
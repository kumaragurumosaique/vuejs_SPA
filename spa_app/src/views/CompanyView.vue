<!-- src/views/CompanyView.vue -->
<template>
    <div>
      <MenuBar />
      <CompanySection />
    </div>
  </template>
  
  <script>
  import MenuBar from '../components/MenuBar.vue'
  import CompanySection from '../components/CompanySection.vue'
  
  export default {
    components: {
      MenuBar,
      CompanySection
    }
  }
  </script>
  
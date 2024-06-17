<!-- src/components/MenuBar.vue -->

<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/company">Company</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MenuBar'
}
</script>

<style scoped>
nav ul {
  list-style-type: none;
  padding: 0;
}
nav li {
  display: inline;
  margin-right: 20px;
}
</style>

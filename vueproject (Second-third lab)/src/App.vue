<template>
  <vue-navbar></vue-navbar>
  <router-view/>
  <vue-footer></vue-footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("images/grid.png");
}

* {
  margin: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
import VueNavbar from "@/components/VueNavbar.vue";
import VueFooter from "@/components/VueFooter.vue";
</script>
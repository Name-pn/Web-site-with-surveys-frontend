<script setup>

import NavRef from "@/components/UI/NavRef.vue";
import store from "@/store";
import LoginPanel from "@/components/UI/LoginPanel.vue";
import UserPanel from "@/components/UI/UserPanel.vue";
</script>

<template>
  <nav class="nav-bar">
    <router-link to="/">
      <img src="../images/logo.png">
    </router-link>
    <router-link to="/">
      <nav-ref>Главная</nav-ref>
    </router-link>
    <router-link to="/catalog">
      <nav-ref>Каталог</nav-ref>
    </router-link>
    <div v-if="!store.state.isAuth">
      <login-panel></login-panel>
    </div>
    <div v-else>
      <UserPanel></UserPanel>
    </div>
  </nav>
</template>

<style scoped>
  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: chartreuse url("../images/grid_gray.png") repeat;
  }

  img {
    width: 100px;
    height: 100px;
  }
</style>
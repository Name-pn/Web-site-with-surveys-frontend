<script setup>

import NavRef from "@/components/UI/NavRef.vue";
</script>

<template>
  <div class="not-auth-panel">
  <router-link to="/login">
    <nav-ref>Логин</nav-ref>
  </router-link>
  <router-link to="/registration">
    <nav-ref class="nav-btn">Регистрация</nav-ref>
  </router-link>
  </div>
</template>

<style scoped>
  .not-auth-panel {
    display: flex;
    justify-content: space-between;
  }
  .nav-btn {
    margin-left: 15px;
  }
</style>
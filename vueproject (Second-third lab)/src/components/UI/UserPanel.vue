<script>

import NavRef from "@/components/UI/NavRef.vue";
import store from "@/store";
import {mapGetters} from "vuex";
import router from "@/router";

export default {
  components: {NavRef},
  computed: {
    ...mapGetters({
      getUserName:'getUserName',
    })
  },
  methods: {
    logout() {
      store.commit('toggleAuth')
      router.push('/')
    }
  }
}
</script>

<template>
  <div class="auth-panel">
    <nav-ref>Пользователь {{getUserName}}</nav-ref>
    <nav-ref class="nav-btn" @click="logout">Выйти</nav-ref>
  </div>
</template>

<style scoped>
.nav-btn {
  margin-left: 15px;
}

.auth-panel {
  display: flex;
  justify-content: space-between;
}
</style>
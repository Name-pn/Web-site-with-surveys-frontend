<script>
  import store from "@/store";
  import router from "@/router";

  export default {
    data() {
      return {
        name: '',
      }
    },
    methods: {
      login() {
        store.commit('toggleAuth')
        store.commit('setUserName', this.name)
        router.push('/')
      }
    }
  }
</script>

<template>
  <h1>Форма логина</h1>
  <form>
    <label>
      Логин
      <input v-model="name" type="text">
    </label>
    <br>
    <label>
      Пароль
      <input type="password">
    </label>
    <br>
    <input @click.prevent="login" type="submit" value="Войти">
  </form>
</template>

<style scoped>

</style>
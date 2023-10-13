<script>

import store from "@/store";
import NavRef from "@/components/UI/NavRef.vue";

export default {
  components: {NavRef},
  computed: {
    store() {
      return store
    },
    getAuth() {
      return store.getters.getAuth
    }
  }
}
</script>

<template>

<!--  v-if="store.state.isAuth"-->
  <main>
    <h1>Каталог</h1>
    <ul class="tests">
      <li class="test">
        <h2>Тест №1 "Определение животных по картинкам"</h2>
        <img src="../images/animals2.jpeg">
        <div v-if="getAuth">
          <router-link to="" >
          <nav-ref class="reference" href=""> К теории </nav-ref>
          </router-link>
        </div>
        <div v-else> Для получения ссылки на тест авторизируйтесь</div>
      </li>
      <li class="test">
        <h2>Тест №2 "Определение цвета по картинкам"</h2>
        <img src="../images/grad.png">
        <div v-if="getAuth">
          <router-link to="" >
            <nav-ref class="reference" href=""> К теории </nav-ref>
          </router-link>
        </div>
        <div v-else> Для получения ссылки на тест авторизируйтесь</div>
      </li>
      <li class="test">
        <h2>Тест №3 "Выбери лишнее"</h2>
        <img src="../images/superfluous.jpg">
        <div v-if="getAuth">
          <router-link to="" >
            <nav-ref class="reference" href=""> К теории </nav-ref>
          </router-link>
        </div>
        <div v-else> Для получения ссылки на тест авторизируйтесь</div>
      </li>
      <li class="test">
        <h2>Тест №4 "Определение марок машин"</h2>
        <img src="../images/car.png">
        <div v-if="getAuth">
          <router-link to="/carTheory">
            <nav-ref> К теории </nav-ref>
          </router-link>
        </div>
        <div v-else> Для получения ссылки на тест авторизируйтесь</div>
      </li>
    </ul>
  </main>

</template>

<style scoped>
.tests {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  column-gap: 10px;
  row-gap: 20px;
}

.test {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  background: rgba(198, 184, 150, 0.5);
  text-align: center;
  list-style-type: none;
  border: 1px solid black;
}

.tests .test img {
  width: 50%;
  height: 50%;
  border-radius: 50%;
}
</style>
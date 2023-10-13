<script>
import NavRef from "@/components/UI/NavRef.vue";

export default {
  name: "AnimalTheory",
  components: {NavRef},
  data() {
    return {
      animals: [{
        name: 'Обезьяна',
        brand: {
          'monkey': true,
        },
        description: "Обезьяны — группа млекопитающих из отряда приматов."
      }]
    }
  }
}
</script>

<template>
  <div>
    <h1>Теория по видам животных</h1>
    <ul class="brands">
      <li class="brand" v-for="animal in animals">
        <h2>
          {{animal.name}}
        </h2>
        <p>
          <img :class="animal.brand" src="../images/cars2.png">
        </p>
        <p>
          {{animal.description}}
        </p>
      </li>
    </ul>
    <router-link to="/animalTest">
      <nav-ref class="central_btn"> К тесту</nav-ref>
    </router-link>
  </div>
</template>

<style scoped>
.monkey {
  object-position: 0 0;
  object-fit: none;
  width: 160px;
  height: 160px;
  text-align: center;
}
</style>
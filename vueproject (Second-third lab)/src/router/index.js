import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/views/Main.vue";
import Catalog from "@/views/Catalog.vue";
import Login from "@/views/Login.vue";
import Registration from "@/views/Registration.vue";
import CarTheory from "@/views/CarTheory.vue";
import CarTest from "@/views/CarTest.vue";
import AnimalTheory from "@/views/AnimalTheory.vue";
import AnimalTest from "@/views/AnimalTest.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/catalog',
    component: Catalog,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/registration',
    component: Registration,
  },
  {
    path: '/carTheory',
    component: CarTheory,
  },
  {
    path: '/carTest',
    component: CarTest,
  },
  {
    path: '/animalTheory',
    component: AnimalTheory,
  },
  {
    path: '/animalTest',
    component: AnimalTest,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

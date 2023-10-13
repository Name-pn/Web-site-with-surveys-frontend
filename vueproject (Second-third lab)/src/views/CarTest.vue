<script>
import CommonTest from "@/components/UI/CommonTest.vue";
import ImageTest from "@/components/UI/ImageTest.vue";
import store from "@/store";
import axios from 'axios'

// test1: {
//   questions: [{
//     text: 'Нисан',
//     value: 1,
//   },
//     {
//       text: 'Жили',
//       value: 2,
//     },
//     {
//       text: 'Тойота',
//       value: 3,
//     },
//     {
//       text: 'Лексус',
//       value: 4,
//     },
//   ],
//       name: 'test1',
//       answer: 2
// },
// test2: {
//   questions: [{
//     text: 'Кадилак',
//     value: 1,
//   },
//     {
//       text: 'Жили',
//       value: 2,
//     },
//     {
//       text: 'Тойота',
//       value: 3,
//     },
//     {
//       text: 'Лексус',
//       value: 4,
//     },
//   ],
//       name: 'test2',
//       answer: 1
// },
// test3: {
//   questions: [{
//     text: 'Кадилак',
//     value: 1,
//   },
//     {
//       text: 'Тойота',
//       value: 2,
//     },
//     {
//       text: 'Ауди',
//       value: 3,
//     },
//     {
//       text: 'Додж',
//       value: 4,
//     },
//   ],
//       name: 'test3',
//       answer: 3
// },
// test4: {
//   questions: [{
//     text: 'Асура',
//     value: 1,
//   },
//     {
//       text: 'Волво',
//       value: 2,
//     },
//     {
//       text: 'Фолксваген',
//       value: 3,
//     },
//     {
//       text: 'Додж',
//       value: 4,
//     },
//   ],
//       name: 'test4',
//       answer: 1
// },
// test5: {
//   questions: [{
//     text: 'Асура',
//     value: 1,
//   },
//     {
//       text: 'Волво',
//       value: 2,
//     },
//     {
//       text: 'Фолксваген',
//       value: 3,
//     },
//     {
//       text: 'Додж',
//       value: 4,
//     },
//   ],
//       name: 'test5',
//       answer: 3,
// },
export default {
  computed: {
    store() {
      return store
    }
  },
  components: {ImageTest, CommonTest},
  data() {
    return {
tests: null,
      answer1: 0,
      answer2: 0,
      answer3: 0,
      answer4: 0,
      answer5: 0,
      showAnswer: false,
      ready: false,
    }
  },
  methods: {

    updateFirstAnswer(value) {
      this.answer1 = value
    },
    updateSecondAnswer(value) {
      this.answer2 = value
    },
    updateThirdAnswer(value) {
      this.answer3 = value
    },
    updateFourthAnswer(value) {
      this.answer4 = value
    },
    updateFifthAnswer(value) {
      this.answer5 = value
    },
    end() {
      this.showAnswer = true
      var inputs = document.querySelectorAll('input[type=radio]');

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
      }
    },
    async fetchTests() {
      try {
        const response = await axios.get('http://127.0.0.1:8090/api/tests/')
        this.tests = response.data
        console.log(response)
      } catch (e) {
        alert("Ошибка")
      }
    }
  },
  mounted() {
    this.fetchTests()

  }
}
</script>

<template>
<!--  <button @click="fetchTests"> Загрузить тесты с сайта</button>-->
  <h1>Тест по маркам машин</h1>
<!--  <div v-if="store.getters.getAuth">-->
  <div v-if="showAnswer">
    <h2>Поздравляем вами набрано {{ answer1 + answer2 + answer3 + answer4 + answer5}} баллов</h2>
  </div>
  <div class="testList" v-if="tests !== null">
    <common-test class='testItem' @changeAnswer="updateFirstAnswer" :test="tests.test1" :show-answer="showAnswer">
      Выберите китайскую марку автомобилей.
    </common-test>
    <common-test class='testItem' @changeAnswer="updateSecondAnswer" :test="tests.test2" :show-answer="showAnswer">
      Выберите американскую марку автомобилей.
    </common-test>
    <image-test class='testItem' :image-path="tests.test3.image" :image-class="[tests.test3.image_class]" :test="tests.test3" :show-answer="showAnswer"
                @changeAnswer="updateThirdAnswer">
      Как называется марка автомобиля, изображенная на рисунке?
    </image-test>
    <image-test class='testItem' :image-path="tests.test4.image" :image-class="[tests.test4.image_class]" :test="tests.test4" :show-answer="showAnswer"
                @changeAnswer="updateFourthAnswer">
      Как называется марка автомобиля, изображенная на рисунке?
    </image-test>
    <image-test class='testItem' :image-path="tests.test5.image" :image-class="[tests.test5.image_class]" :test="tests.test5" :show-answer="showAnswer"
                @changeAnswer="updateFifthAnswer">
      Название какого автомобиля переводится как: "народный автомобиль"?
    </image-test>
    <button class="central_btn" @click="end"> Проверить</button>
  </div>
<!--  </div>-->
</template>

<style scoped>
.testList {
  display: flex;
  flex-wrap: wrap;
}

.testItem {
  padding: 15px;
  width: 300px;
  margin: 5px;
  background: rgba(200, 188, 158, 0.5);
}
</style>
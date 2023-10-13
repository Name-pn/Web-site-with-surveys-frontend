<script>
export default {
  emits: ['changeAnswer'],
  props: {
    test: {
      type: Object,
      required: true,
    },
    showAnswer: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      modelValue: 0,
    }
  },
  methods: {
    changeAnswer() {
      this.$emit('changeAnswer', this.modelValue === this.test.answer ? 1 : 0);
    }
  }
}
</script>

<template>
  <div>
    <slot>
    </slot>
    <div class="questionsContainer" v-if="test !== null">
      <div v-for="(q, index) in test.questions" :class="{correctAnswer: showAnswer && index === test.answer-1,
                                                     wrongAnswer: showAnswer && index !== test.answer-1 && index === modelValue-1}">
        <label> {{ q.text }}
          <input type="radio" :disabled="showAnswer" :name="test.name" v-model="modelValue" :value="q.value"
                 @change="changeAnswer"/>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.questionsContainer {
}

.correctAnswer {
  padding: 15px;
  background: #42b983;
}

.wrongAnswer {
  padding: 15px;
  background: brown;
}
</style>
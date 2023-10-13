<script>
  import CommonTest from "@/components/UI/CommonTest.vue";

  export default {
    components: {CommonTest},
    props: {
      showAnswer: {
        type: Boolean,
        required: true,
      },
      test: {
        type: Object,
        required: true,
      },
      imagePath: {
        type: String,
        required: true,
      },
      imageClass: {
        type: Array,
      },

      alt: {
        type: String,
      }
    },
    emits: ['changeAnswer'],
    methods: {
      changeAnswer(value) {
        this.$emit("changeAnswer", value)
      }
    }
  }
</script>

<template>
  <div class="imageTest">
    <div>
      <img :src="require('../../images/'+ imagePath)" :class="imageClass" :alt="alt">
    </div>
    <common-test :show-answer="showAnswer" :test="test" @change-answer="changeAnswer">
      <slot></slot>
    </common-test>
  </div>
</template>

<style scoped>

</style>
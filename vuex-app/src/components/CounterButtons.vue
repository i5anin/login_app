<template>
  <button @click="minus">minus</button>
  <button @click="plus">plus</button>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations("CounterModule", ["plus", "minus"]),
  },
};
</script>

<!--Counter.vue-->
<template>
  <h1>Counter</h1>
  <h2>{{ counter }}</h2>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState("CounterModule", ["counter"]),
  },
};
</script>

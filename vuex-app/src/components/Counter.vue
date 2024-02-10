<template>
  <h1>Counter</h1>
  <!--  <h2>{{ $store.state.CounterModule.counter }}</h2>-->
  <h2>{{ counter }}</h2>

  <h3>{{ title }}</h3>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["title"]),
    // ...mapState('CounterModule', [{
    //   counter: 'CounterModule/counter'
    // }])
    ...mapState("CounterModule", ["counter"]),
  },
};
</script>
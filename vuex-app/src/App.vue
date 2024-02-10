<template>
  <h1>App Root</h1>

  <hr />

  <Counter />

  <CounterButtons />

  <hr />

  <TodoInput />

  <TodoList />
</template>

<script>
import Counter from "./components/Counter.vue";
import CounterButtons from "./components/CounterButtons.vue";

import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    Counter,
    CounterButtons,
    TodoInput,
    TodoList,
  },
  created() {
    console.log(this.$store);
  },
};
</script>
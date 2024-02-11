<template>
  <h1>Todo</h1>
  <input type="text" @keyup.enter="addTodo($event.target.value)" />
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["addTodo"]),
  },
};
</script>

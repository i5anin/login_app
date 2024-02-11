<template>
  <h1>List</h1>

  <ul v-if="todos.length">
    <li v-for="todo in todos" :key="todo">
      {{ todo }}
    </li>
  </ul>

  <h3 v-else>No todos</h3>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({ todos: (state) => state.TodosModule.Todos }),
  },
};
</script>

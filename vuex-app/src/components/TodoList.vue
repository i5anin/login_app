<template>
  <h1>List</h1>

  <ul v-if="$store.state.TodosModule.Todos.length">
    <li v-for="elem in $store.state.TodosModule.Todos" :key="elem">
      {{ elem }}
    </li>
  </ul>

  <h3 v-else>No todos</h3>
</template>
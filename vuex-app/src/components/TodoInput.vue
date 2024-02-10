<template>
  <h1>Todo</h1>
  <input
    type="text"
    @change="$store.dispatch('addTodo', $event.target.value)"
  />
</template>
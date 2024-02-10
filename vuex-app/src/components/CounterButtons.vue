<template>

<!--<button @click="$store.commit('minus')">minus</button>-->
<!--  <button @click="$store.commit('plus')">plus</button>-->

  <button @click="minus">minus</button>
  <button @click="plus">plus</button>

</template>


<script>

import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('CounterModule', ['plus', 'minus'])
  }
}



</script>
<template lang='pug'>
  #app
    Page1
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Page1 from './components/Page1.vue'

@Component({
  components: {
    Page1,
  },
})
export default class App extends Vue {}
</script>

<style>
</style>

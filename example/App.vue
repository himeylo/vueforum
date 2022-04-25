<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <sandbox>

      <PageThreadShow />

    </sandbox>
</template>

<script>
import { Sandbox } from 'component-fixture'
import 'font-awesome/css/font-awesome.css'
import 'component-fixture/dist/ComponentFixture.css'
import PageThreadShow from '@/components/PageThreadShow.vue'

export default {
  name: 'App',
  components: {
    Sandbox,
    PageThreadShow
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

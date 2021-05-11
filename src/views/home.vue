<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import helloWorld from '@/components/hello_world.vue'

export default {
  name: 'home',
  components: {
    helloWorld
  }
}
</script>

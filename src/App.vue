<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import fullscreen from 'vue-fullscreen'

</script>

<template>
<HelloWorld />
  <main class="container" style="background-image: url(https://play.tailwindcss.com/img/grid.svg); 
  background-color: transparent; margin-top: -40px;" >
    <RouterView />
  </main>
</template>



<template>
  <div class="flex justify-center items-center">
    <!-- <Wizard /> -->
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Wizard from './components/Wizard.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>

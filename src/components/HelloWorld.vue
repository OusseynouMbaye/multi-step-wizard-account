<template>
  <h1>{{ msg }}</h1>
  <p>{{ num }}</p>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  msg: string;
  num: number;
}>();

const count = ref(0);
</script>

<style scoped></style>

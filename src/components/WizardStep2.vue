<template>
  <div>
    <h2>Step 2</h2>
    <div>
      <button class="btn btn-primary" @click="store.prevStep">PREVIOUS</button>
      <button class="btn btn-primary" @click="store.nextStep">NEXT</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWizardStore } from '../stores/wizardStore.js'

const store = useWizardStore()
</script>

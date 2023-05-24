<template>
  <div class="card w-96 h-fit shadow-xl flex items-center bg-white text-center">
    <div class="" v-if="store.step === 1">
      <WizardStep1 />
    </div>
    <div v-if="store.step === 2">
      <WizardStep2 />
    </div>
    <div v-if="store.step === 3">
      <WizardSummary />
    </div>
  </div>
</template>

<script lang="ts" setup>
import WizardStep1 from './WizardStep1.vue'
import WizardStep2 from './WizardStep2.vue'
import WizardSummary from './WizardSummary.vue'

import { useWizardStore } from '../stores/wizardStore.js'

const store = useWizardStore()
</script>

<style scoped>
/* .card {
  height: 500px;
} */
</style>

<template>
  <div class="card w-96 bg-base-100 shadow-xl flex items-center">
    <div class="" v-if="step === 1">
      <WizardStep1 />
    </div>
    <div v-if="step === 2">
      <WizardStep2 />
    </div>
    <div v-if="step === 3">
      <WizardSummary />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import WizardStep1 from './WizardStep1.vue'
import WizardStep2 from './WizardStep2.vue'
import WizardSummary from './WizardSummary.vue'

const step = ref<number>(1)
</script>

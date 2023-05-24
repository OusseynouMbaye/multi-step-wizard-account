<template>
  <div>
    <h2>Wizard Summary</h2>
    <div>
      <button class="btn btn-primary" @click="store.prevStep">PREVIOUS</button>
      <button class="btn btn-success">CREATE ACCOUNT</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWizardStore } from '../stores/wizardStore'

const store = useWizardStore()
</script>

<template>
  <div>
    <h2>Wizard Summary</h2>
    <pre>{{ JSON.stringify(store.accountInfo, null, 2) }} </pre>
    <p>{{ store.accountInfo.firstName }}</p>
    <p>{{ store.accountInfo.lastName }}</p>
    <p>{{ store.accountInfo.email }}</p>
    <p>{{ store.accountInfo.birthday }}</p>
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

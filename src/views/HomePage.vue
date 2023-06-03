<template>
  <div>
    <h2>Home Page</h2>
    <p>{{ user.email }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useWizardStore } from '../stores/wizardStore'
import { useAuthStore } from '../stores/authStore'

const store = useWizardStore()
const { user } = useAuthStore()
</script>

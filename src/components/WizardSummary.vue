<template>
  <div class="">
    <h2>Wizard Summary</h2>
    <pre>{{ JSON.stringify(store.accountInfo, null, 2) }} </pre>
    <p>{{ store.accountInfo.firstName }}</p>
    <p>{{ store.accountInfo.lastName }}</p>
    <p>{{ store.accountInfo.email }}</p>
    <p>{{ store.accountInfo.birthday }}</p>
    <div>
      <button class="btn btn-primary" @click="store.prevStep">PREVIOUS</button>
      <button type="button" class="btn btn-success" @click="doCreateAccount">
        CREATE ACCOUNT
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWizardStore } from '../stores/wizardStore'
import { useAuthStore } from '../stores/authStore'
import router from '../router/index'

const store = useWizardStore()
const authStore = useAuthStore()

const doCreateAccount = async () => {
  try {
    // const { email, password } = store.accountInfo

    const { data, error } = await authStore.createAccount({
      ...store.accountInfo,
    })
    console.log(store.accountInfo.email, store.accountInfo.password)

    if (error) throw error
    console.log(data.user?.email)

    router.replace('/')
  } catch (error: any) {
    alert('Login failed : ' + error.message)
  }
}
</script>

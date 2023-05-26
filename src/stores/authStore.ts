import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)

console.log(supabase)
export const useAuthStore = defineStore('auth-store', () => {
  const isLoggedIn = ref(false)

  const user = ref() // user back form supabase
  const userProfile = ref() // user profile from separate table

  /**
   * @description this function is used to login the user
   * @param param0 email, password
   * @returns void
   *
   */
  const login = async ({ email, password }) => {
    return null
  }

  /**
   *
   * @description this function is used to create a new account and login the user if successful
   * @param param0 email, password, confirmPassword, firstName, lastName, birthday
   * @returns  void
   *
   */
  const createAccount = async ({
    email = '',
    password = '',
    confirmPassword = '',
    firstName = '',
    lastName = '',
    birthday = '',
  }) => {
    return null
  }

  const logout = async () => {
    return null
  }
  return { login, logout, createAccount, isLoggedIn, user, userProfile }
})

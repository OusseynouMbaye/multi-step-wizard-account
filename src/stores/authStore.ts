import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

import { createClient } from '@supabase/supabase-js'

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref() // user back form supabase
  const userProfile = ref() // user profile from separate table
  const isLoggedIn = ref(false)

  const public_anon_key =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjZHB1aXlrdHdheWl5anZraWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwNDE5MDUsImV4cCI6MjAwMDYxNzkwNX0.RZsj_atn4S6tZipO5VJjN5zI8S8iSj-ugPeveCHDwQg'

  // Create a single supabase client for interacting with your database
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    public_anon_key
    // import.meta.env.VITE_SUPABASE_KEY
  )

  console.log(supabase)

  // listen for auth changes and update isLoggedIn
  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session)
    if (event === 'SIGNED_IN') {
      isLoggedIn.value = true
      user.value = session ? session.user : null
    }
  })

  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session)
  })

  /**
   * @description this function is used to login the user
   * @param param0 email, password
   * @returns void
   *
   */
  const login = async ({ email, password }) => {
    return await supabase.auth.signInWithPassword({
      email,
      password,
    })
  }

  /**
   *
   * @description this function is used to create a new account and login the user if successful
   * @param param0 email, password, confirmPassword, firstName, lastName, birthday
   * @returns  void
   *
   */
  const createAccount = async ({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    birthday,
  }) => {
    return await supabase.auth.signUp({
      email,
      password,
    })
  }

  const logout = async () => {
    return null
  }
  return { login, logout, createAccount, isLoggedIn, user, userProfile }
})

<script lang="ts">
import type { LoginData } from '@/forms/LoginForm.vue'
import LoginForm from '@/forms/LoginForm.vue'

export default {
  components: { LoginForm },
  methods: {
    onSubmit: (values: LoginData) => {
      // eslint-disable-next-line no-console
      console.log('onSubmit LoginData', values)
      // TODO: Call API to login
    },
  },
}
</script>

<template>
  <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
    Connexion
  </h1>
  <LoginForm
    class="w-full max-w-xs" @form-submitted="onSubmit"
  />
</template>

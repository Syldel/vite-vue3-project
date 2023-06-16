<script lang="ts">
import type { LoginData } from '@/components/forms/LoginForm.vue'

export default {
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
  <h1>
    Connexion
  </h1>
  <LoginForm
    class="w-full max-w-xs" @form-submitted="onSubmit"
  />
</template>

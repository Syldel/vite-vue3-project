<script lang="ts">
import * as Yup from 'yup'
import DynamicForm from '@/forms/DynamicForm.vue'

export interface LoginData { email: string; password: string }

export default {
  components: {
    DynamicForm,
  },
  emits: {
    formSubmitted(payload: LoginData) {
      // perform runtime validation
      return payload.email.length > 0 && payload.password.length > 0
    },
  },
  data: () => {
    const formSchema = {
      fields: [
        {
          label: 'Votre Email',
          name: 'email',
          as: 'input',
          rules: Yup.string()
            .email('Votre email n\'est pas valide')
            .required('Votre email est obligatoire'),
        },
        {
          label: 'Votre Password',
          name: 'password',
          as: 'input',
          type: 'password',
          rules: Yup.string()
            .min(6, 'Le mot de passe doit comporter au minimum 6 caractères')
            .required('Votre mot de passe est obligatoire'),
        },
      ],
    }
    return {
      formSchema,
    }
  },
  methods: {
    submitForm(values: LoginData) {
      this.$emit('formSubmitted', values)
    },
  },
}
</script>

<template>
  <DynamicForm :schema="formSchema" submit-button-text="Connexion" @form-submitted="submitForm" />
</template>

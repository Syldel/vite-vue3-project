<script setup lang="ts">
import * as Yup from 'yup'

export interface LoginData { email: string; password: string }

const emit = defineEmits({
  formSubmitted(payload: LoginData) {
    // perform runtime validation
    return payload.email.length > 0 && payload.password.length > 0
  },
})

function submitForm(values: LoginData) {
  emit('formSubmitted', values)
}

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
</script>

<template>
  <DynamicForm :schema="formSchema" submit-button-text="Connexion" @form-submitted="submitForm" />
</template>

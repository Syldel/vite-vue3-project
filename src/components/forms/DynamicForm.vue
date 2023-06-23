<script setup lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate'

defineProps({
  schema: {
    type: Object,
    required: true,
  },
  submitButtonText: {
    type: String,
    default: 'Soumettre',
  },
})

const emit = defineEmits(['formSubmitted'])

function submitForm(values) {
  emit('formSubmitted', values)
}
</script>

<template>
  <Form
    class="dynamic-form" @submit="submitForm"
  >
    <div
      v-for="{ as, name, label, children, ...attrs } in schema.fields"
      :key="name"
      class="mb-4"
    >
      <label class="dynamic-form__label" :for="name">{{ label }}</label>
      <Field :id="name" :as="as" :name="name" v-bind="attrs" class="dynamic-form__field">
        <template v-if="children && children.length">
          <component
            :is="tag"
            v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </Field>
      <ErrorMessage :name="name" class="dynamic-form__error-message" />
    </div>
    <div class="my-button-container">
      <button class="my-button">
        {{ submitButtonText }}
      </button>
    </div>
  </Form>
</template>

<style lang="sass" scoped>
.dynamic-form
  @apply bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4

  &__label
    @apply block text-gray-700 text-sm font-bold mb-2

  &__field
    @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight

  &__error-message
    @apply text-red-500 text-xs italic
</style>

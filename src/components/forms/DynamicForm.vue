<script lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate'

export default {
  name: 'DynamicForm',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
    submitButtonText: {
      type: String,
      default: 'Soumettre',
    },
  },
  emits: ['formSubmitted'],
  methods: {
    submitForm(values) {
      this.$emit('formSubmitted', values)
    },
  },
}
</script>

<template>
  <Form
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="submitForm"
  >
    <div
      v-for="{ as, name, label, children, ...attrs } in schema.fields"
      :key="name"
      class="mb-4"
    >
      <label class="block text-gray-700 text-sm font-bold mb-2" :for="name">{{ label }}</label>
      <Field :id="name" :as="as" :name="name" v-bind="attrs" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
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
      <ErrorMessage :name="name" class="text-red-500 text-xs italic" />
    </div>
    <div class="flex items-center justify-between">
      <button class="my-button">
        {{ submitButtonText }}
      </button>
    </div>
  </Form>
</template>

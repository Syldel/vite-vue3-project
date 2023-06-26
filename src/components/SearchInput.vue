<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Rechercher',
  },
  buttonText: {
    type: String,
    default: 'Rechercher',
  },
})

const emit = defineEmits(['submit'])
const search = ref('')
const inputMinLength = 3
const showError = ref(false)

function submitForm() {
  if (search.value.length >= inputMinLength)
    emit('submit', search.value)
  else
    showError.value = true
}

function handleBlur() {
  search.value = search.value.trim()
  showError.value = search.value.length < inputMinLength
}

function handleFocus() {
  showError.value = false
}
</script>

<template>
  <form class="search-input" @submit.prevent>
    <div>
      <div>
        <label v-if="label" for="search-input__input">{{ label }}</label>
        <input id="search-input__input" v-model="search" type="text" class="my-input search-input__input" :placeholder="placeholder" name="search-input__input" :minlength="inputMinLength" @blur="handleBlur" @focus="handleFocus">
      </div>
      <span v-if="showError" class="search-input__error-message">Il faut au minimin {{ inputMinLength }} caractères</span>
    </div>
    <button class="my-button" @click="submitForm()">
      {{ buttonText }}
    </button>
  </form>
</template>

<style lang="sass" scoped>
.search-input
  display: flex
  flex-direction: row
  gap: 5px

  &__input
    padding: 10px 45px
    background: white url("../images/search-alt.svg") no-repeat 12px center
    background-size: 24px

    &:invalid
      border: 1px solid red

  &__error-message
    font-size: 0.75rem
    line-height: 1rem
    font-style: italic
    color: #EF4444
</style>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <button class="my-button" @click="open = true">
    Open Modal
  </button>

  <Teleport to="body">
    <div v-if="open" class="modal my-card">
      <p>Hello from the modal!</p>
      <button class="my-button" @click="open = false">
        Close
      </button>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>

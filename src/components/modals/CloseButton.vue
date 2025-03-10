<script setup>
  import { modalStore } from "@/stores/modal"
  
  const modal = modalStore()
</script>

<template>
  <button @click="modal.close">
    <font-awesome-icon :icon="['fas', 'xmark']" class="size-4 sm:size-5 md:size-6 p-3 rounded-full text-gray-900 dark:text-blue-50 hover:bg-gray-200 dark:hover:bg-gray-700" />
  </button>
</template>
  
<script setup>
    const model = defineModel()
    const props = defineProps({
        type: String,
        name: String,
        placeholder: String
    })
</script>

<template>
    <input v-model="model" :type="type" :name="name" class="bg-gray-50 dark:bg-gray-900 dark:text-blue-50 dark:border-gray-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5" :placeholder="placeholder" required autocomplete>
</template>

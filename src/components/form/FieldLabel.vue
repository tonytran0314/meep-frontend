<script setup>
    const props = defineProps({
        name: String
    })
</script>

<template>
    <label :for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-50">
        <slot></slot>
    </label>
</template>

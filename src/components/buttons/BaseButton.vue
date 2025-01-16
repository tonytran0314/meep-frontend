<script setup>
    const props = defineProps({
        buttonType: {
            type: String,
            default: 'button'
        }
    })
</script>

<template>
    <button :type="buttonType" class="text-center px-4 py-2 rounded-lg cursor-pointer">
        <slot></slot>
    </button>
</template>

<script setup>
    import BaseButton from '@/components/buttons/BaseButton.vue'

    const props = defineProps({
        buttonType: {
            type: String,
            default: 'button'
        }
    })
</script>

<template>
    <BaseButton :buttonType="buttonType" class="bg-gray-200 dark:bg-gray-500 text-white hover:bg-gray-100 hover:dark:bg-gray-400">
        <slot></slot>
    </BaseButton>
</template>

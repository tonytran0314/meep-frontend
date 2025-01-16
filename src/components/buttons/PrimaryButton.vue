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
    <BaseButton :buttonType="buttonType" class="bg-teal-600 text-white hover:bg-teal-500">
        <slot></slot>
    </BaseButton>
</template>

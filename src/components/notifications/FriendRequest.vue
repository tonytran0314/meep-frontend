<script setup>
    import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
    import SecondaryButton from '@/components/buttons/SecondaryButton.vue'
    import BaseNotification from '@/components/notifications/BaseNotification.vue';

    const props = defineProps({
        fullname: {
            type: String,
            default: 'Gia Huy'
        }
    })
</script>

<template>
    <BaseNotification class="space-y-4">
        <p>{{ fullname }} has sent you a friend request</p>
        <div class="space-x-2">
            <PrimaryButton class="text-sm">Accept</PrimaryButton>
            <SecondaryButton class="text-sm">Remove</SecondaryButton>
        </div>
    </BaseNotification>
</template>

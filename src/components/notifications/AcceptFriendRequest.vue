<script setup>
    import BaseNotification from '@/components/notifications/BaseNotification.vue'
    const props = defineProps({
        notificationObject: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <BaseNotification class="space-y-4">
        <p>{{ notificationObject.senderName }} accepted your add friend request</p>
    </BaseNotification>
</template>

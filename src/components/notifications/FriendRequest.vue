<script setup>
    import { computed } from 'vue'
    import { friendStore } from '@/stores/friend'
    import { notificationStore } from '@/stores/notification'

    import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
    import SecondaryButton from '@/components/buttons/SecondaryButton.vue'
    import BaseNotification from '@/components/notifications/BaseNotification.vue'

    const friend = friendStore()
    const notification = notificationStore()
    const props = defineProps({
        notificationObject: {
            type: Object,
            required: true
        }
    })
    const addFriendRequest = computed(() => ({
        senderId: props.notificationObject.senderId,
        receiverId: props.notificationObject.receiverId
    }))

    const removeAddFriendRequest = () => {
        friend.rejectAddFriendRequest(addFriendRequest.value)
        notification.removeFromList(props.notificationObject)
    }
</script>

<template>
    <BaseNotification class="space-y-4">
        <p>{{ notificationObject }} has sent you a friend request</p>
        <div class="space-x-2">
            <PrimaryButton class="text-sm">Accept</PrimaryButton>
            <SecondaryButton @click="removeAddFriendRequest" class="text-sm">Remove</SecondaryButton>
        </div>
    </BaseNotification>
</template>

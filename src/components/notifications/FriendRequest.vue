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

    const rejectAddFriendRequest = () => {
        friend.rejectAddFriendRequest(addFriendRequest.value)
        notification.removeFromList(props.notificationObject)
    }

    const acceptAddFriendRequest = () => {
        friend.acceptAddFriendRequest(addFriendRequest.value)
        notification.removeFromList(props.notificationObject)
    }
</script>

<template>
    <BaseNotification class="space-y-4">
        <p>{{ notificationObject.senderName }} has sent you a friend request</p>
        <div class="space-x-2">
            <PrimaryButton @click="acceptAddFriendRequest" class="text-sm">Accept</PrimaryButton>
            <SecondaryButton @click="rejectAddFriendRequest" class="text-sm bg-gray-500 hover:bg-gray-600">Remove</SecondaryButton>
        </div>
    </BaseNotification>
</template>

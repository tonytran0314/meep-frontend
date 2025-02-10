<script setup>
    import { storeToRefs } from 'pinia'
    import { notificationStore } from '@/stores/notification'

    import FriendRequest from '@/components/notifications/FriendRequest.vue'
    
    const notification = notificationStore()
    const { list } = storeToRefs(notification)
</script>

<template>
    <!-- currently, there are 2 types of notifications: friend request and friend accept -->
    <div class="h-96 space-y-3 overflow-auto">
        <!-- notification items -->
        <FriendRequest v-for="notification in list" :fullname="notification.senderName" />
    </div>
</template>

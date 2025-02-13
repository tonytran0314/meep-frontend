<script setup>
    import { storeToRefs } from 'pinia'
    import { notificationStore } from '@/stores/notification'

    import FriendRequest from '@/components/notifications/FriendRequest.vue'
    import AcceptFriendRequest from '@/components/notifications/AcceptFriendRequest.vue'
    
    const notification = notificationStore()
    const { list } = storeToRefs(notification)
</script>

<template>
    <!-- currently, there are 2 types of notifications: friend request and friend accept -->
    <div class="h-96 space-y-3 overflow-auto">
        <!-- notification items -->
        <div v-for="notification in list">
            <FriendRequest v-if="notification.type === 1" :notificationObject="notification" />
            <AcceptFriendRequest v-if="notification.type === 2" :notificationObject="notification" />
        </div>
    </div>
</template>
